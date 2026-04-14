# Precision Campaign

A **Precision Campaign** is a special mode for a campaign where outreach is
manually curated on a per-contact basis with the help of an AI enrichment agent.
Instead of sending templated messages to a large list automatically, the user
selects individual contacts, has the AI research them, and reviews/edits
AI-generated messages before initiating outreach.

Loosely inspired by "Duo Copilot" on ampleMarket.

---

## Constraints

- A user may have **at most one Precision Campaign** at a time (may be relaxed
  for premium tiers in the future).
- A campaign may only be converted to a Precision Campaign if it has **at least
  5 uncontacted contacts** in its contact list.
- "Uncontacted" means: no email or LinkedIn message has been sent to the contact
  yet. A pending connection request is acceptable.
- Once converted, **the campaign pauses**. The normal automation engine no longer
  processes contacts in this campaign.
- Only contacts that were uncontacted at the time of conversion are eligible for
  precision enrichment.

---

## Conversion Flow

1. User clicks **"Convert to Precision Campaign"** on a qualifying campaign.
2. Campaign is paused (`status: PAUSED`) and flagged (`isPrecision: true`).
3. User amends the campaign's workflow: each message step should now have a
   `precisionPrompt` — natural-language instructions telling the AI how to write
   that message for a given contact.
4. User navigates to `/dashboard/precision/[campaignId]` to begin working
   contacts.

A user may also create a Precision Campaign from scratch via the campaign wizard
using a "Precision" toggle, skipping the conversion step entirely.

---

## Per-Contact Flow

1. User browses the eligible contact list and clicks **"Enrich"** on a contact.
2. A `PrecisionContact` document is created with `status: PENDING` and a
   background enrichment job is queued.
3. The enrichment agent:
   - Starts from the contact's existing `PersonInfo` (Apollo data).
   - Scrapes the contact's LinkedIn profile (via Unipile).
   - Crawls the contact's company website and any other findable sources.
   - Produces a human-readable `summary` of the contact and stores any
     additional contact details or useful findings.
   - Generates a draft message for each workflow step that has a
     `precisionPrompt`, producing a `PrecisionWorkflow` with `generatedMessage`
     populated per step.
   - Sets `PrecisionContact.status` to `ENRICHED` on success, or `FAILED` on
     error (with an `errorReason`).
4. The user is notified when enrichment is complete (in-app and/or email).
5. User reviews the contact summary and the generated messages, edits any
   messages as needed. Status moves to `REVIEWED`.
6. User clicks **"Initiate"**:
   - `PrecisionContact.status` → `INITIATED`
   - `PrecisionContact.outreachStartedAt` is set.
   - The Express.js execution layer takes over, using the `PrecisionWorkflow`
     (with the final `editedMessage` values, falling back to `generatedMessage`)
     to drive outreach for this contact.
7. When outreach is complete, status moves to `COMPLETE`.

---

## Schema Changes

### Campaign (update)

| Field | Type | Notes |
|---|---|---|
| `isPrecision` | `Boolean` | Default `false`. Marks this as a Precision Campaign. |

### Workflow — WorkflowStepSchema (update)

| Field | Type | Notes |
|---|---|---|
| `precisionPrompt` | `String` (optional) | AI instructions for generating this step's message for a specific contact. Only relevant on steps that have a `message`. |

---

## New Models

### PrecisionContact

Represents a single contact that has been selected for precision enrichment
within a Precision Campaign.

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | |
| `contactId` | ObjectId → Contact | The source contact in the campaign's list. |
| `personInfoId` | ObjectId → PersonInfo | Denormalised for quick access. |
| `campaignId` | ObjectId → Campaign | The owning Precision Campaign. |
| `ownerId` | ObjectId → User | |
| `teamId` | ObjectId | |
| `status` | Enum | `PENDING`, `ENRICHED`, `REVIEWED`, `INITIATED`, `COMPLETE`, `ARCHIVED`, `FAILED` |
| `errorReason` | String (optional) | Populated if `status === FAILED`. |
| `summary` | String | AI-generated narrative summary of the contact. |
| `contactInfo` | JSON | Additional contact details found by the agent (e.g. alternate email, phone). |
| `additionalInfo` | JSON | Any other useful context found during scraping. |
| `outreachStartedAt` | Date (optional) | Set when the user hits "Initiate". |
| `desiredOutreachStart` | Date (optional) | User-specified scheduling: don't initiate before this date. |
| `createdAt` | Date | |
| `updatedAt` | Date | |

**Note:** `PrecisionContact` does not hold a reference to its `PrecisionWorkflow`.
Since `Contact` does not store a `workflowId` either (workflow is accessed
through the campaign), `PrecisionWorkflow` is looked up by `precisionContactId`.

---

### PrecisionWorkflow

A contact-specific workflow instance. Rather than copying the full step
definitions, it references the original `Workflow` step IDs and layers
generated/edited messages on top.

| Field | Type | Notes |
|---|---|---|
| `_id` | ObjectId | |
| `workflowId` | ObjectId → Workflow | The original workflow this was generated from. |
| `precisionContactId` | ObjectId → PrecisionContact | |
| `ownerId` | ObjectId → User | |
| `teamId` | ObjectId | |
| `steps` | Array of step objects | See below. |
| `createdAt` | Date | |
| `updatedAt` | Date | |

**PrecisionWorkflow step object:**

| Field | Type | Notes |
|---|---|---|
| `workflowStepId` | ObjectId | References the original step in the Workflow. |
| `generatedMessage` | String | AI-written draft, produced during enrichment. |
| `editedMessage` | String (optional) | User's edited version. The execution layer uses this if present, otherwise falls back to `generatedMessage`. |

---

## Routes (planned)

| Route | Purpose |
|---|---|
| `/dashboard/precision` | Landing page — shows whether the user has a Precision Campaign, or prompts conversion/creation. |
| `/dashboard/precision/[campaignId]` | Main workspace — contact list, enrichment status, initiate outreach. |

