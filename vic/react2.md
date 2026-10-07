# Challenge: Build a `useCalendar` Custom Hook 📅

You've learned how to make your own custom hooks. Now let's build a useful one!

Your goal is to write a custom hook called **`useCalendar`**. It will hold all the *logic* for a monthly calendar: which month we're looking at, which day is selected, and how to move between months. Then you'll build a `Calendar` component that uses the hook to *display* everything.

This is the big idea behind custom hooks:

> **The hook handles the logic. The component handles the looks.**

When you're done, you'll have something like this:

```
   ◀  October 2026  ▶        [Today]

 Sun Mon Tue Wed Thu Fri Sat
                1   2   3
  4   5   6  [7]  8   9  10
 11  12  13  14  15  16  17
 18  19  20  21  22  23  24
 25  26  27  28  29  30  31

 Selected: Wednesday, October 7, 2026
```

---

## Part 1: Meet dayjs

Working with dates in plain JavaScript is painful. **dayjs** is a small library that makes it much easier.

### Install it

In your project folder, run:

```bash
npm install dayjs
```

Then import it at the top of your file:

```js
import dayjs from "dayjs";
```

### The dayjs cheat sheet

These are the only dayjs features you need for this challenge. Try them out with `console.log` before you start!

```js
const today = dayjs();               // the current date and time

today.format("MMMM YYYY");           // "October 2026"
today.format("dddd, MMMM D, YYYY");  // "Wednesday, October 7, 2026"

today.date();                        // 7   (day of the month)
today.daysInMonth();                 // 31  (how many days this month has)

today.add(1, "month");               // a date one month later
today.subtract(1, "month");          // a date one month earlier

today.startOf("month");              // October 1, 2026
today.startOf("month").day();        // 4   (weekday of the 1st: 0 = Sunday, 6 = Saturday)

today.date(15);                      // October 15, 2026 (same month, different day)

dateA.isSame(dateB, "day");          // true if both are the same day
```

### ⚠️ The most important thing about dayjs

dayjs dates **never change**. Methods like `.add()` don't change the original date; they give you back a **new** date.

```js
const today = dayjs();
today.add(1, "month");      // ❌ does nothing useful, the result is thrown away
console.log(today.format("MMMM")); // still "October"

const nextMonth = today.add(1, "month"); // ✅ save the new date
console.log(nextMonth.format("MMMM"));   // "November"
```

Good news: this is exactly how React wants you to treat state anyway. You never change state directly, you always give the setter a **new** value. So with dayjs you can do:

```js
setCurrentMonth(currentMonth.add(1, "month"));
```

---

## Part 2: Build the `useCalendar` hook

Create a file called `useCalendar.js`.

### What the hook should keep in state

Your hook needs **two** state variables:

| State | Starts as | What it means |
|---|---|---|
| `currentMonth` | `dayjs()` | Any date inside the month we're currently looking at |
| `selectedDate` | `dayjs()` | The day the user has clicked on |

### What the hook should return

Your hook should return **one object** with all of these:

| Name | Type | What it is |
|---|---|---|
| `monthLabel` | string | The month and year, like `"October 2026"` |
| `days` | array | The days to draw in the grid (see Step 3) |
| `selectedDate` | dayjs date | The selected day |
| `goToNextMonth` | function | Moves the calendar forward one month |
| `goToPreviousMonth` | function | Moves the calendar back one month |
| `goToToday` | function | Jumps back to the current month and selects today |
| `selectDay` | function | Takes a day number (like `15`) and selects that day in the current month |

So a component will use it like this:

```js
const {
  monthLabel,
  days,
  selectedDate,
  goToNextMonth,
  goToPreviousMonth,
  goToToday,
  selectDay,
} = useCalendar();
```

### Step-by-step

Do these one at a time. After each step, use the hook in a component and check the browser.

**Step 1: State and the label**
1. Import `useState` and `dayjs`.
2. Write `export function useCalendar() { ... }`.
3. Create the two state variables.
4. Make `monthLabel` using `.format()`.
5. Return an object with `monthLabel` in it.

Test it: make a `Calendar` component that shows `<h2>{monthLabel}</h2>`.

**Step 2: Moving between months**
1. Write `goToNextMonth`. It sets `currentMonth` to one month later.
2. Write `goToPreviousMonth`. It sets `currentMonth` to one month earlier.
3. Write `goToToday`. It sets **both** `currentMonth` and `selectedDate` to `dayjs()`.
4. Add them to the returned object.

Test it: add ◀ ▶ and "Today" buttons to your component. The label should change when you click.

**Step 3: Building the `days` array**

This is the trickiest part, so take your time.

A month doesn't always start on a Sunday. If the 1st is a Thursday, the grid needs **4 empty spaces** first (Sun, Mon, Tue, Wed). So your `days` array should be:

- First, some `null` values, one for each empty space
- Then the numbers `1, 2, 3, ...` up to the last day of the month

For October 2026 (the 1st is a Thursday, 31 days):

```js
[null, null, null, null, 1, 2, 3, 4, 5, ..., 30, 31]
```

How to build it:
1. Make an empty array: `const days = [];`
2. Find out how many empty spaces you need. *(Hint: look at `.startOf("month").day()` in the cheat sheet. What does it return for a Thursday?)*
3. Use a `for` loop to `push` that many `null` values.
4. Find out how many days the month has. *(Hint: `.daysInMonth()`.)*
5. Use another `for` loop to `push` the numbers from `1` up to that number.
6. Add `days` to the returned object.

> 💡 Notice that `days` is **not** state. You can calculate it from `currentMonth` every time the hook runs. If you can work something out from state you already have, you don't need new state for it.

**Step 4: Selecting a day**
1. Write `selectDay(dayNumber)`. It should set `selectedDate` to that day **in the current month**. *(Hint: `.date()` in the cheat sheet.)*
2. Add `selectDay` and `selectedDate` to the returned object.

---

## Part 3: Build the `Calendar` component

Now build the part people actually see. Your `Calendar` component should **only** use what the hook returns. No dayjs math in the component except for formatting and comparing!

**Requirements:**

1. **Header:** Show `monthLabel` with a ◀ button on the left and a ▶ button on the right. Add a "Today" button.
2. **Weekday names:** Make an array `["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]` and render it with `.map()`.
3. **The grid:** Render `days` with `.map()`.
   - If the day is `null`, render an empty box.
   - Otherwise, render a button with the day number. Clicking it calls `selectDay`.
   - Use a **ternary** to decide between the empty box and the button.
4. **Show the selection:** Below the grid, show the selected date like `"Selected: Wednesday, October 7, 2026"`.
5. **Highlight the selected day:** In the grid, the selected day should look different (a different background color, bold text, or a border).
   *(Hint: a day in the grid is selected if `selectedDate` is in the current month **and** `selectedDate.date()` equals that day number. You might want the hook to return `currentMonth` too, so you can check `selectedDate.isSame(currentMonth, "month")`.)*

### Making the grid look like a calendar

You can make the 7 columns with CSS grid. Put this on the `<div>` that wraps the days (and the weekday names):

```jsx
<div style={{ display: "grid", gridTemplateColumns: "repeat(7, 40px)", gap: "4px" }}>
  {/* your days here */}
</div>
```

That's all the CSS you need. Every 7 items will automatically wrap to a new row.

### About the `key` prop

The `days` array has several `null` values, so `day` alone won't work as a key (the `null`s would all be the same). Use the **index** that `.map()` gives you as its second argument:

```jsx
{days.map((day, index) => (
  // use key={index} here
))}
```

Using the index as a key is usually not a great idea, but it's fine here because the grid is just a fixed set of boxes that we rebuild every month.

---

## ✅ Checklist

When you're done, check that all of these work:

- [ ] The calendar opens on the current month
- [ ] ▶ goes to the next month, ◀ goes to the previous month
- [ ] Going from December ▶ goes to January **of the next year** (dayjs handles this for you!)
- [ ] The 1st of each month lands on the correct weekday (check against your phone's calendar)
- [ ] February shows 28 days (or 29 in a leap year, like 2028)
- [ ] Clicking a day selects it and the text below updates
- [ ] The selected day is highlighted
- [ ] If you select a day and then switch months, the highlight does **not** show up on the same number in the other month
- [ ] "Today" jumps back and selects today

---

## 🌟 Bonus Challenges

Only try these once everything above works!

1. **Highlight today.** Make today's date look different from the selected date (for example, a colored border for today and a filled background for the selected day). Add an `isToday(dayNumber)` function to your hook that returns `true` or `false`.
2. **Weekends.** Make Saturdays and Sundays a different color. *(Hint: the index can tell you which column a box is in. What do `index % 7 === 0` and `index % 7 === 6` mean?)*
3. **Reuse the hook.** Render **two** `Calendar` components side by side in `App`. Do they share the same month, or does each one have its own? Why?
4. **Start somewhere else.** Let the hook take a starting date as an argument: `useCalendar(dayjs("2027-01-01"))`. If no date is passed, it should still start on today.

---

## 📚 Helpful Links

- [dayjs documentation](https://day.js.org/docs/en/installation/installation)
- [dayjs format tokens](https://day.js.org/docs/en/display/format) (all the `"MMMM"`, `"YYYY"`, etc. codes)
- [react.dev: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

Good luck! 🚀