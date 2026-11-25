# JavaScript Practice: The DOM

A few quick lessons, then 5 challenges. Do them in order.

Make a new `.html` file for each challenge. Copy the starter HTML, then write your JavaScript inside the `<script>` tag.

You'll need some functions from [mustaha5.md](./mustaha5.md), like `randomNumber`. Just copy them into your `<script>`.

---

## Lesson 1: Where the script goes

Put your `<script>` at the **bottom** of the `<body>`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My page</title>
  </head>
  <body>
    <h1 id="title">Hello</h1>
    <button id="btn">Click me</button>

    <script>
      // your JavaScript here
    </script>
  </body>
</html>
```

Why the bottom? The browser reads the page from top to bottom. If your script is at the top, the `<h1>` and `<button>` don't exist yet when your code runs, so `querySelector` can't find them.

---

## Lesson 2: CSS selector reminder

`document.querySelector()` takes a **CSS selector**, the same kind you use in a CSS file. It gives you back the **first** element that matches.

| Selector | Finds | Example HTML |
| --- | --- | --- |
| `"p"` | the first `<p>` | `<p>Hi</p>` |
| `"#score"` | the element with `id="score"` | `<span id="score">0</span>` |
| `".big"` | the first element with `class="big"` | `<div class="big">...</div>` |
| `"button.red"` | the first `<button>` that has class `red` | `<button class="red">Stop</button>` |
| `"#menu a"` | the first `<a>` **inside** the element with `id="menu"` | `<nav id="menu"><a>Home</a></nav>` |

Remember: `#` is for **id**, `.` is for **class**, and no symbol means a **tag name**.

```js
let title = document.querySelector("#title")
let button = document.querySelector("#btn")
```

### Common mistake: forgetting the `#` or `.`

```js
let title = document.querySelector("title") // ❌ finds the <title> tag in <head>!
let title = document.querySelector("#title") // ✅ finds id="title"
```

If `querySelector` finds nothing, it gives you `null`. Then you'll see an error like:

```
Cannot set properties of null (setting 'textContent')
```

When you see `null` in an error, check your selector first. Then check that your script is at the bottom (Lesson 1).

Practice selectors with a game: [CSS Diner](https://flukeout.github.io/). More reading: [Basic CSS selectors (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

---

## Lesson 3: Changing the page

Once you have an element in a variable, you can read it and change it.

**Text:** `textContent`

```js
let title = document.querySelector("#title")

console.log(title.textContent) // Hello
title.textContent = "Goodbye"  // the page now shows Goodbye
```

**Style:** `style`

```js
title.style.color = "red"
title.style.fontSize = "40px"
```

CSS names with a `-` become camelCase: `font-size` → `fontSize`, `background-color` → `backgroundColor`.

**Inputs:** `value`

```html
<input id="name-input" />
```

```js
let input = document.querySelector("#name-input")
console.log(input.value) // whatever the user typed
```

### `value` is always a string

Even when the user types a number, `value` gives you a **string**:

```js
// the user typed 5 into both inputs
let a = document.querySelector("#a").value
let b = document.querySelector("#b").value

console.log(a + b) // "55"  ❌
```

Use `Number()` to turn it into a real number:

```js
let a = Number(document.querySelector("#a").value)
let b = Number(document.querySelector("#b").value)

console.log(a + b) // 10  ✅
```

---

## Lesson 4: `onclick`

To run code when a button is clicked, give its `onclick` property a function:

```js
let button = document.querySelector("#btn")

button.onclick = function () {
  console.log("You clicked!")
}
```

The function has no name. That's fine. It's not for **you** to call. The **browser** calls it every time someone clicks.

### Remembering things between clicks

Remember Lesson 8 in mustaha4 (inside or outside the loop)? It's the same idea here.

Each click runs the function again from the top. A variable made **inside** the function starts fresh on every click. If you need to **remember** something between clicks, make it **outside**.

```js
let clicks = 0 // outside: it remembers between clicks

let button = document.querySelector("#btn")
let title = document.querySelector("#title")

button.onclick = function () {
  clicks++
  title.textContent = `Clicked ${clicks} times`
}
```

It's the accumulation pattern again! Start value outside, update inside. The only difference is that the browser does the "looping" every time you click.

### Use your functions inside `onclick`

Keep the logic in normal functions that **return** a value. Then the `onclick` only has to do two things: call the function, and put the answer on the page.

```js
function double(n) {
  return n * 2
}

let input = document.querySelector("#number")
let button = document.querySelector("#btn")
let result = document.querySelector("#result")

button.onclick = function () {
  let n = Number(input.value)
  result.textContent = double(n)
}
```

---

## Aside: `addEventListener`

You'll see this a lot online:

```js
button.addEventListener("click", function () {
  console.log("You clicked!")
})
```

It does almost the same thing as `onclick`. The main difference:

- `onclick` can only hold **one** function. If you set it again, the new one **replaces** the old one.
- `addEventListener` can **add** many functions to the same button. They all run.

```js
button.onclick = function () { console.log("A") }
button.onclick = function () { console.log("B") }
// clicking logs only: B

button.addEventListener("click", function () { console.log("A") })
button.addEventListener("click", function () { console.log("B") })
// clicking logs: A, then B
```

For now, **stick with `onclick`**. It's easier to read, and one function per button is all you need for these challenges. You'll switch to `addEventListener` later.

More reading: [Introduction to browser events (javascript.info)](https://javascript.info/introduction-browser-events). It shows `onclick` first, then `addEventListener`. (Some examples use `=>` arrow functions. You can skip those for now.)

---

## Challenges

---

### Challenge 1: Click counter

```html
<h1>Count: <span id="count">0</span></h1>
<button id="plus">+1</button>
<button id="minus">-1</button>
<button id="reset">Reset</button>
```

- `+1` adds one to the count.
- `-1` takes one away.
- `Reset` sets it back to `0`.

**Bonus:** if the count is below `0`, make the number red. Otherwise make it black.

<details>
<summary>Answer</summary>

```js
let count = 0

let countText = document.querySelector("#count")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let reset = document.querySelector("#reset")

plus.onclick = function () {
  count++
  countText.textContent = count
}

minus.onclick = function () {
  count--
  countText.textContent = count
}

reset.onclick = function () {
  count = 0
  countText.textContent = count
}
```

Bonus: add this inside each `onclick`, after you change the text:

```js
if (count < 0) {
  countText.style.color = "red"
} else {
  countText.style.color = "black"
}
```

That's the same code three times. Can you put it in a function `updateCount()` and call that instead?

</details>

---

### Challenge 2: Dice roller

```html
<h1 id="die">?</h1>
<button id="roll">Roll</button>
```

When you click `Roll`, show a random number from 1 to 6. Use your `rollDie` function from mustaha5 (and `randomNumber`, since `rollDie` needs it).

**Bonus:** add a second `<h1>` for a second die and a `<p>` for the total. If both dice are the same, show `Doubles!` in the `<p>` too.

<details>
<summary>Answer</summary>

```js
function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1
}

function rollDie() {
  return randomNumber(6)
}

let die = document.querySelector("#die")
let rollButton = document.querySelector("#roll")

rollButton.onclick = function () {
  die.textContent = rollDie()
}
```

</details>

---

### Challenge 3: Greeter

```html
<input id="name" placeholder="Your name" />
<button id="greet">Greet me</button>
<p id="message"></p>
```

When you click the button, show `Hello, ...!` in the `<p>`, with the name from the input.

If the input is empty, show `Please type your name` instead.

**Bonus:** use your `randomGreeting` function from mustaha5 instead of always saying `Hello`.

<details>
<summary>Hint</summary>

An empty input has the value `""`.

</details>

<details>
<summary>Answer</summary>

```js
let nameInput = document.querySelector("#name")
let greetButton = document.querySelector("#greet")
let message = document.querySelector("#message")

greetButton.onclick = function () {
  let name = nameInput.value

  if (name === "") {
    message.textContent = "Please type your name"
  } else {
    message.textContent = `Hello, ${name}!`
  }
}
```

Notice that `name` is made **inside** the function. You want the newest value every time you click, not the value from when the page loaded.

</details>

---

### Challenge 4: Split the bill

```html
<input id="total" type="number" placeholder="Total bill" />
<input id="people" type="number" placeholder="Number of people" />
<button id="split">Split</button>
<p id="result"></p>
```

When you click `Split`, show how much each person pays, like `Each person pays 17`.

Rules:

- Nobody likes paying cents, so each person pays a **whole** number.
- The restaurant has to get **at least** the full total. Round the right way!

First, write a normal function `splitBill(total, people)` that **returns** the number. Test it with `console.log` before you touch the DOM:

```js
console.log(splitBill(100, 3)) // 34
console.log(splitBill(60, 4))  // 15
```

Then use it inside the `onclick`.

**Bonus:** if `people` is `0` or less, show `That's not enough people` instead.

<details>
<summary>Hint</summary>

`100 / 3` is `33.333...`. If everyone pays `33`, the restaurant only gets `99`. Look at Lesson 3 in mustaha5.

Don't forget that `.value` is a string (Lesson 3 here).

</details>

<details>
<summary>Answer</summary>

```js
function splitBill(total, people) {
  return Math.ceil(total / people)
}

let totalInput = document.querySelector("#total")
let peopleInput = document.querySelector("#people")
let splitButton = document.querySelector("#split")
let result = document.querySelector("#result")

splitButton.onclick = function () {
  let total = Number(totalInput.value)
  let people = Number(peopleInput.value)

  result.textContent = `Each person pays ${splitBill(total, people)}`
}
```

</details>

---

### Challenge 5: Guess the number

```html
<h1>Guess a number from 1 to 10</h1>
<input id="guess" type="number" />
<button id="check">Guess</button>
<p id="hint"></p>
<p>Guesses: <span id="guesses">0</span></p>
<button id="new-game">New game</button>
```

- When the page loads, pick a secret number from 1 to 10. Use `randomNumber`.
- When the player clicks `Guess`, show `Too high`, `Too low` or `Correct!` in the hint.
- Count the guesses.
- `New game` picks a new secret number and sets the guesses back to `0`.

First, write a normal function `checkGuess(guess, secret)` that **returns** `"Too high"`, `"Too low"` or `"Correct!"`. Test it with `console.log`:

```js
console.log(checkGuess(8, 3)) // Too high
console.log(checkGuess(1, 3)) // Too low
console.log(checkGuess(3, 3)) // Correct!
```

Then use it inside the `onclick`.

**Bonus:** when the player is correct, make the hint green. When they're wrong, make it red.

<details>
<summary>Hint</summary>

Which variables need to be remembered between clicks? Those go **outside** the `onclick` functions (Lesson 4).

</details>

<details>
<summary>Answer</summary>

```js
function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1
}

function checkGuess(guess, secret) {
  if (guess > secret) {
    return "Too high"
  } else if (guess < secret) {
    return "Too low"
  } else {
    return "Correct!"
  }
}

let secret = randomNumber(10)
let guesses = 0

let guessInput = document.querySelector("#guess")
let checkButton = document.querySelector("#check")
let hint = document.querySelector("#hint")
let guessesText = document.querySelector("#guesses")
let newGameButton = document.querySelector("#new-game")

checkButton.onclick = function () {
  let guess = Number(guessInput.value)

  guesses++
  guessesText.textContent = guesses
  hint.textContent = checkGuess(guess, secret)
}

newGameButton.onclick = function () {
  secret = randomNumber(10)
  guesses = 0
  guessesText.textContent = guesses
  hint.textContent = ""
  guessInput.value = ""
}
```

`secret` and `guesses` are outside because both buttons need them, and they have to be remembered between clicks. `guess` is inside because you want the newest value on every click.

</details>
