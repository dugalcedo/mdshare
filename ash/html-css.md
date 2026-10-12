# HTML Challenges

8 challenges. 1–6 are HTML only. 7–8 add a little CSS.

Make a new `.html` file for each challenge (or one folder per challenge). Every file should start with the basic skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Challenge 1</title>
</head>
<body>

</body>
</html>
```

---

## Lesson: Why are there so many elements that act like `<div>`?

Try this:

```html
<div>Hello</div>
<section>Hello</section>
<article>Hello</article>
<footer>Hello</footer>
```

Open it in the browser. They all look **exactly the same**. So why do they exist?

Because HTML isn't only for *how a page looks*. It's for *what the content is*. A `<div>` says nothing. A `<nav>` says "these are the links to get around the site." Those are called **semantic elements** — "semantic" just means "has meaning."

Who cares about the meaning?

- **Screen readers.** Blind users can jump straight to the `<main>` content or the `<nav>`, skipping everything else. With only divs, they can't.
- **Search engines.** Google uses them to figure out what the important part of your page is.
- **Other developers (and future you).** Which is easier to read?

```html
<div>
    <div>...</div>
    <div>...</div>
</div>
```

```html
<main>
    <article>...</article>
    <aside>...</aside>
</main>
```

The common ones:

| Element     | Use it for                                                        |
| ----------- | ----------------------------------------------------------------- |
| `<header>`  | The top of a page (logo, title) or the top of an article          |
| `<nav>`     | A group of navigation links                                       |
| `<main>`    | The main content of the page. **Only one per page.**              |
| `<section>` | A chunk of related content, usually with its own heading          |
| `<article>` | Something that makes sense on its own (blog post, product, recipe) |
| `<aside>`   | Side stuff, related but not essential (a sidebar, a fun fact)     |
| `<footer>`  | The bottom of a page or of an article                             |
| `<figure>` + `<figcaption>` | An image (or chart, code, etc.) with a caption    |

**So when do I use a `<div>`?** When none of the above fit. A div is the "I just need a box" element. That's fine! It's just not your first choice anymore.

---

## Lesson: Lists

Navigation links and menus are almost always written as lists. There are two kinds:

```html
<!-- unordered list: bullet points, order doesn't matter -->
<ul>
    <li>Milk</li>
    <li>Eggs</li>
</ul>

<!-- ordered list: numbered, order matters -->
<ol>
    <li>Crack the eggs</li>
    <li>Whisk them</li>
</ol>
```

`<li>` means "list item." It must go **directly inside** a `<ul>` or `<ol>`.

---

## Challenge 1: Build it from the wireframe

A client, **Null Pointer Coffee**, sent you this wireframe of the website they want. Your job is to turn it into HTML. No CSS yet, and **no divs**: every box should be a semantic element.

```
+------------------------------------------------------------+
|  NULL POINTER COFFEE                                       |
|  "Where your code finally runs."                           |
+------------------------------------------------------------+
|  Menu   Hours   Events   Contact                           |
+------------------------------------------------------------+
|                                          |                 |
|  MENU                                    |  TODAY'S DEAL   |
|    Drinks                                |                 |
|     - Espresso ........ $3               |  Buy 2 lattes,  |
|     - Latte ........... $4.50            |  get a free     |
|     - Cold Brew ....... $4               |  rubber duck.   |
|    Food                                  |                 |
|     - Bagel ........... $3               |                 |
|     - Croissant ....... $3.50            |                 |
|                                          |                 |
|  HOURS                                   |                 |
|    Mon-Fri  7am - 6pm                    |                 |
|    Sat-Sun  9am - 3pm                    |                 |
|                                          |                 |
|  EVENTS                                  |                 |
|   +------------------+ +------------------+                |
|   | Open Mic Night   | | Hackathon        |                |
|   | Fri, Oct 24      | | Sat, Nov 8       |                |
|   | Come share your  | | 12 hours, free   |                |
|   | worst bugs.      | | coffee, no sleep.|                |
|   +------------------+ +------------------+                |
|                                          |                 |
|  CONTACT                                 |                 |
|    123 Main St                           |                 |
|    hello@nullpointer.coffee              |                 |
|                                          |                 |
+------------------------------------------------------------+
|  © 2026 Null Pointer Coffee                                |
+------------------------------------------------------------+
```

All the text you need is right there. Don't worry about making things side by side; that's CSS's job. Just get the **structure** right.

Things to figure out:

- Which part is the `<header>`? The `<nav>`? The `<footer>`?
- What goes in `<main>`, and what doesn't?
- The big chunks (Menu, Hours, Events, Contact) are each a... ?
- "Today's Deal" is off to the side and isn't the main point of the page. What element is that?
- Each event card makes sense on its own. You could copy one onto another page and it would still make sense. What element is that?
- Get your heading levels right. There should be exactly one `<h1>`. Is "Drinks" an `<h2>` or an `<h3>`?
- The menu items are a list. Ordered or unordered?
- The nav links are a list too. Don't make them work yet, that's the next challenge.

Keep this file. You'll use it again.

---

## Challenge 2: Navigation that actually goes somewhere

Open your Challenge 1 page.

Anchors don't have to go to other websites. They can jump to a spot **on the same page** using an `id`:

```html
<a href="#hobbies">Hobbies</a>

<!-- somewhere else on the page -->
<section id="hobbies">...</section>
```

Requirements:

- Give each `<section>` an `id`
- Make each nav link jump to its section
- Add one more link to the nav, "Order Online," that goes to any real website. Make it open in a new tab with `target="_blank"`
- Make the email address in Contact a link. Look at what happens when you use `href="mailto:hello@nullpointer.coffee"`
- Add a "Back to top" link in the footer. (Hint: give something at the top an `id`.)

The page is probably too short to scroll, so the jumps will be hard to see. Shrink your browser window until it scrolls, then test that every link goes to the right place.

---

## Lesson: `<figure>` and `<figcaption>`

You can put a caption under an image with a `<p>`:

```html
<img src="dog.jpg" alt="A golden retriever catching a frisbee">
<p>Max at the beach, 2024</p>
```

But to the browser, those are just two things that happen to be next to each other. Nothing says the paragraph is *about* the image.

`<figure>` wraps them together, and `<figcaption>` marks the caption:

```html
<figure>
    <img src="dog.jpg" alt="A golden retriever catching a frisbee">
    <figcaption>Max at the beach, 2024</figcaption>
</figure>
```

Now they're officially connected. A screen reader knows that caption belongs to that image.

**`alt` vs `<figcaption>`. Don't they do the same thing?** No:

- `alt` **replaces** the image. It's for people who can't see it (screen reader users, or when the image fails to load). Describe what's in the picture.
- `<figcaption>` **adds to** the image. Everyone sees it. It's extra info: who, when, where, why.

A `<figure>` doesn't have to be an image either. It can hold a chart, a code sample, a table, anything you'd label "Figure 1" in a textbook.

---

## Challenge 3: Recipe card

Make a new page for a recipe you like.

Requirements:

- The whole recipe goes inside an `<article>`
- The article has its own `<header>` with an `<h1>` (recipe name) and a `<p>` (short description)
- A `<figure>` with an `<img>` of the food and a `<figcaption>`
  - The `<img>` must have a useful `alt`. Not `alt="image"`. Describe it: `alt="A bowl of ramen with a soft boiled egg"`
- A `<section>` "Ingredients" using a `<ul>`
- A `<section>` "Steps" using an `<ol>`
- An `<aside>` with a tip, like "Tastes even better the next day"
- The article has a `<footer>` with a link to where you found the recipe

**Think about it:** Why is "Ingredients" a `<ul>` but "Steps" is an `<ol>`?

---

## Lesson: Tables, the right way

You already know `<table>`, `<tr>`, `<td>`. Here are a few more pieces:

```html
<table>
    <caption>Monthly Savings</caption>
    <thead>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
    </tbody>
</table>
```

- `<caption>` — the title of the table
- `<thead>` — the heading row(s)
- `<tbody>` — the actual data
- `<th>` — a heading cell (bold and centered by default, and screen readers announce it as a heading)

Notice the pattern? `<thead>` and `<tbody>` don't change how the table looks much. They're semantic, just like `<section>` and `<footer>`.

**Rule:** tables are for **data**, not for layout. Don't use a table just to put things side by side.

---

## Challenge 4: Weekly schedule

Make a table of your weekly schedule (class, work, gym, whatever).

Requirements:

- A `<caption>`
- A `<thead>` with the days of the week across the top, plus an empty first cell
- A `<tbody>` with times down the left side (use `<th>` for those too)
- At least 4 rows of times
- At least one thing that lasts more than one time slot. Look up `rowspan` to make a cell stretch down.
- At least one thing that happens every day at the same time. Look up `colspan` to make a cell stretch across.

---

## Lesson: Forms, the right way

Every input needs a `<label>`. Connect them with `for` and `id`:

```html
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

Now clicking the word "Email" puts the cursor in the box. Screen readers read "Email" when the box is selected. Try it!

**Wait, what's `name` for? Isn't that the same as `id`?** No. They have different jobs:

- `id` is for **the page**. It connects the label to the input (and lets you link to it with `#`).
- `name` is for **the data**. When the form is submitted, each input's value gets sent with its `name` as the label. An input with no `name` doesn't get sent at all.

You can see this yourself. Make this form, type something, and hit Submit:

```html
<form>
    <label for="username">Username</label>
    <input type="text" id="username" name="username">

    <label for="color">Favorite color</label>
    <input type="text" id="color" name="favColor">

    <button type="submit">Submit</button>
</form>
```

Now look at the URL bar. You'll see something like:

```
?username=ash&favColor=green
```

That's the form data. The `name`s are on the left of each `=`, and what you typed is on the right. Later on, a server will read those. Try deleting the `name` from one input and submitting again; it disappears from the URL.

The `type` attribute changes a lot:

| type       | What it does                                          |
| ---------- | ----------------------------------------------------- |
| `text`     | Normal text                                           |
| `email`    | Checks for an `@` when you submit. Phones show an `@` key. |
| `password` | Hides what you type                                   |
| `number`   | Only numbers, with up/down arrows                     |
| `date`     | A date picker                                         |
| `checkbox` | Check/uncheck. Pick as many as you want.              |
| `radio`    | Pick **one** from a group. Same `name` = same group.  |

Some useful attributes:

- `required` — can't submit if it's empty
- `placeholder` — gray hint text inside the box (this is **not** a replacement for a label)
- `min` / `max` — for numbers and dates

Group related inputs with `<fieldset>` and give the group a title with `<legend>`:

```html
<fieldset>
    <legend>Favorite color</legend>

    <input type="radio" id="red" name="color" value="red">
    <label for="red">Red</label>

    <input type="radio" id="blue" name="color" value="blue">
    <label for="blue">Blue</label>
</fieldset>
```

---

## Challenge 5: Sign-up form

Make a sign-up form for a made-up club (book club, gaming club, hiking club...).

**About `<fieldset>`:** A `<fieldset>` groups inputs that answer the same question. It draws a box around them, and its `<legend>` is the question. This matters most for radio buttons and checkboxes. Each one has its own label ("Weekly", "Monthly"), but without the fieldset, nothing on the page says what question they're answering. With it, a screen reader says "How often can you meet? Weekly, radio button," not just "Weekly, radio button."

Rule of thumb: if you have a group of radios or checkboxes, wrap them in a `<fieldset>` with a `<legend>`.

Requirements:

- An `<h1>` with the club's name
- A `<form>`
- Every input has a `<label>` connected with `for`/`id`
- Inputs:
  - Name (`text`, required)
  - Email (`email`, required)
  - Password (`password`, required)
  - Age (`number`, minimum 13)
  - Birthday (`date`)
  - A `<fieldset>` of **radio** buttons: "How often can you meet?" (weekly, monthly, whenever)
  - A `<fieldset>` of **checkboxes**: "What are you interested in?" (at least 3 options)
  - A `<textarea>` for "Tell us about yourself" (look this one up!)
- A `<button type="submit">` that says "Join"

Test it: try submitting with the email empty. Then try `notanemail`. What happens?

---

## Challenge 6: Div soup

Here's a page someone wrote using only divs. Copy it into a file and rewrite it using semantic elements. Replace every `<div>` that has a better choice. Some divs might be fine to keep. Your job is to decide.

```html
<body>
    <div>
        <div>The Daily Bug</div>
        <div>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Sports</a>
        </div>
    </div>

    <div>
        <div>
            <div>Local Cat Learns HTML</div>
            <div>Posted October 12, 2026</div>
            <div>A cat in Ohio walked across a keyboard and accidentally wrote valid HTML. Experts are stunned.</div>
            <div>"I just wanted to sit on the warm laptop," the cat did not say.</div>
            <div>
                <img src="https://placecats.com/400/300" alt="A gray cat sitting on a laptop keyboard">
                <div>Mittens, the cat in question</div>
            </div>
        </div>

        <div>
            <div>Developer Forgets Semicolon</div>
            <div>Posted October 11, 2026</div>
            <div>Nothing worked for three hours.</div>
        </div>

        <div>
            <div>Did you know?</div>
            <div>The first website ever made is still online.</div>
        </div>
    </div>

    <div>
        <div>© 2026 The Daily Bug</div>
    </div>
</body>
```

Hints:

- Some of those divs aren't even boxes. They're headings or paragraphs.
- There are **two** articles.
- The articles can have their own `<header>`.
- What's that "Did you know?" thing? Is it the main content, or extra?
- Bonus: look up the `<time>` element for the dates.

---

## Lesson: A tiny bit of CSS, and why semantic HTML helps

You can put CSS in a `<style>` tag inside your `<head>`:

```html
<head>
    <style>
        h1 {
            color: darkblue;
        }
    </style>
</head>
```

That's a **selector** (`h1`), then curly braces, then **property: value;** pairs.

Here's the cool part. Remember how semantic elements look just like divs? That means you can **select** them by name:

```css
nav {
    background-color: black;
}

footer {
    text-align: center;
}
```

If everything were a `<div>`, you couldn't do this. `div { ... }` would style *every* box on the page. Semantic HTML gives you free, readable selectors.

You can also select an element *inside* another element by putting a space between them:

```css
/* only links inside the nav, not every link on the page */
nav a {
    color: white;
}
```

A few properties to play with:

```css
color: red;                  /* text color */
background-color: #eeeeee;   /* background */
font-family: sans-serif;     /* font */
text-align: center;          /* left, center, right */
padding: 16px;               /* space INSIDE the box */
margin: 16px;                /* space OUTSIDE the box */
border: 1px solid black;     /* width, style, color */
```

---

## Challenge 7: Style the coffee shop

Go back to your Null Pointer Coffee page from Challenges 1 and 2. Add a `<style>` tag and style it.

Rules:

- **Only use element selectors** (like `header`, `nav a`, `footer p`). No classes, no ids for styling. If your HTML structure is good, you won't need them.
- Give the `<header>` a background color and some padding
- Give the `<nav>` a different background color, and make the links inside it a color that's readable on top of it
- Give each `<article>` (the event cards) a border and some padding/margin so they look like cards
- Make the `<aside>` (Today's Deal) stand out with a background color and a border
- Make the `<footer>` text centered
- Change the font of the whole page (Hint: what element contains everything?)

---

## Challenge 8: Style your schedule

Go back to your Challenge 4 table and make it look like an actual schedule.

Requirements:

- Give every `th` and `td` a border. You'll notice double lines with gaps between them (see below to fix it).
- Give the cells some `padding` so text isn't crammed against the borders
- Make the `thead` a different background color than the `tbody`
- Style the `caption` so it stands out (bigger, bold, a color, whatever)
- Make the `th`s on the left side (the times) look different from the `td`s

**Why the double lines?** By default, every cell gets its own separate border, with a little space between each cell. So where two cells meet, you see two borders side by side. `border-collapse: collapse` tells the table to merge neighboring borders into a single line:

```css
table {
    border-collapse: collapse;
}
```

It goes on the `table`, not the cells, because it's a setting for the whole table.

**Bonus: zebra stripes.** `:nth-child(even)` selects every 2nd element (the 2nd, 4th, 6th...). Put it on `tr` and you get every other row:

```css
tbody tr:nth-child(even) {
    background-color: #f0f0f0;
}
```

Read that selector as: "every even-numbered `tr` inside the `tbody`." Try it, then try `odd` instead of `even`.
