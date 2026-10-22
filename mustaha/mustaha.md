# JavaScript Practice: Variables, Arrays, `if` and `for`

Small lessons, small challenges. Do them in order. Don't skip ahead.

Use `console.log()` to check your work. If you're not sure what a variable holds, log it!

---

## Part 1: Variables and reassignment

### Lesson

`let` makes a variable you can **change** later. `const` makes one you **can't**.

```js
let score = 0
console.log(score) // 0

score = 10
console.log(score) // 10
```

When you reassign, you don't write `let` again. `let` is only for the first time.

You can use the **old value** to make the **new value**:

```js
let score = 10
score = score + 5
console.log(score) // 15
```

Read `score = score + 5` from right to left: "take score, add 5, put the result back in score."

Shortcuts that do the same thing:

```js
score += 5  // same as: score = score + 5
score -= 2  // same as: score = score - 2
score++     // same as: score = score + 1
score--     // same as: score = score - 1
```

It works with strings too:

```js
let message = "Hello"
message = message + " world"
console.log(message) // "Hello world"
```

### Challenges

**1.1** Make a variable `coins` that starts at `0`. Add `5`, then add `3`, then remove `2`. Log it. You should see `6`.

**1.2** Make a variable `lives` that starts at `3`. Use `--` to lose a life two times. Log it. You should see `1`.

**1.3** Make a variable `name` with the value `"Mus"`. Reassign it so it becomes `"Mustaha"` by **adding** to the old value (don't just write `"Mustaha"`).

**1.4** What does this log? Guess first, then run it.

```js
let a = 4
let b = a
a = 10
console.log(a)
console.log(b)
```

**1.5** Try this and read the error. Why does it happen?

```js
const age = 20
age = 21
```

---

## Part 2: Arrays and `push`, `pop`, `shift`, `unshift`

### Lesson

An array is a list.

```js
let fruits = ["apple", "banana", "cherry"]
```

Each item has a number called its **index**. The first index is `0`, not `1`.

```js
console.log(fruits[0]) // "apple"
console.log(fruits[2]) // "cherry"
console.log(fruits.length) // 3
```

Four ways to add or remove items:

| Method | What it does | Where |
| --- | --- | --- |
| `push(x)` | adds `x` | at the **end** |
| `pop()` | removes one item | from the **end** |
| `unshift(x)` | adds `x` | at the **start** |
| `shift()` | removes one item | from the **start** |

```js
let fruits = ["apple", "banana"]

fruits.push("cherry")    // ["apple", "banana", "cherry"]
fruits.unshift("kiwi")   // ["kiwi", "apple", "banana", "cherry"]
fruits.pop()             // ["kiwi", "apple", "banana"]
fruits.shift()           // ["apple", "banana"]
```

**Important:** `pop()` and `shift()` **give you back** the item they removed. You can catch it in a variable:

```js
let fruits = ["apple", "banana", "cherry"]
let last = fruits.pop()

console.log(last)   // "cherry"
console.log(fruits) // ["apple", "banana"]
```

Remember this idea of "giving back a value". You'll need it at the very end.

### Challenges

**2.1** Make an array `colors` with `"red"`, `"green"`, `"blue"`. Log the first color and the last color using their index.

**2.2** Start with an empty array: `let queue = []`. Use `push` to add `"Ali"`, `"Sara"` and `"Omar"`. Log it.

**2.3** Using the `queue` from 2.2: the first person in line gets served. Use `shift()` to remove them and save them in a variable called `served`. Log `served` and log `queue`.

You should see:

```
Ali
["Sara", "Omar"]
```

**2.4** Someone VIP arrives and skips the line. Use `unshift` to put `"Boss"` at the start of `queue`. Log it.

**2.5** Make an array `stack` with `1, 2, 3, 4`. Use `pop()` twice. Log `stack` and log `stack.length`.

**2.6** Guess first, then run it:

```js
let letters = ["a", "b", "c"]
letters.push(letters.shift())
console.log(letters)
```

---

## Part 3: `if`

### Lesson

`if` runs code **only when** something is true.

```js
let age = 20

if (age >= 18) {
  console.log("You can vote")
}
```

Add `else` for when it's **not** true:

```js
if (age >= 18) {
  console.log("You can vote")
} else {
  console.log("Too young")
}
```

Use `else if` for more choices. JavaScript checks from top to bottom and stops at the **first** true one.

```js
let temp = 15

if (temp > 25) {
  console.log("Hot")
} else if (temp > 10) {
  console.log("Nice")
} else {
  console.log("Cold")
}
// logs "Nice"
```

Comparisons you'll use:

| Symbol | Means |
| --- | --- |
| `===` | equal to |
| `!==` | not equal to |
| `>` / `<` | bigger / smaller |
| `>=` / `<=` | bigger or equal / smaller or equal |
| `&&` | AND (both must be true) |
| `\|\|` | OR (one is enough) |

**Careful:** `=` puts a value in a variable. `===` compares two values. Inside `if ( )` you almost always want `===`.

### Challenges

**3.1** Make a variable `number`. If it's bigger than `100`, log `"Big"`. Otherwise log `"Small"`. Test it with `5` and with `500`.

**3.2** Make a variable `password`. If it's `"banana123"`, log `"Welcome"`. Otherwise log `"Wrong password"`.

**3.3** Make a variable `grade` (a number from 0 to 100). Log:

- `"A"` if it's 90 or more
- `"B"` if it's 70 or more
- `"C"` if it's 50 or more
- `"Fail"` for anything else

Test it with `95`, `72`, `50` and `10`.

**3.4** Make two variables, `hasTicket` and `age`. Log `"Enter"` only if `hasTicket` is `true` **and** `age` is 18 or more. Otherwise log `"No entry"`.

**3.5** Make an array `cart`. If `cart.length` is `0`, log `"Your cart is empty"`. Otherwise log `"You have 3 items"` (with the real number).

**3.6** Mix it with reassignment. Start with `let lives = 1`. Lose a life with `lives--`. Then, if `lives` is `0`, log `"Game over"`.

---

## Part 4: `for` loops

### Lesson

A `for` loop repeats code. It has three parts, separated by `;`

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// 0 1 2 3 4
```

1. `let i = 0` → **start**: make a counter `i`, begin at 0. (Runs once.)
2. `i < 5` → **check**: keep going while this is true. (Runs before every loop.)
3. `i++` → **step**: add 1 to `i`. (Runs after every loop.)

Notice that `i++` is just **reassignment** from Part 1!

The most common use: going through an array. Remember that the index starts at `0` and the last index is `length - 1`. So we use `i < array.length`:

```js
let fruits = ["apple", "banana", "cherry"]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// apple
// banana
// cherry
```

### Pattern 1: Adding things up

Make a variable **before** the loop, change it **inside** the loop, use it **after** the loop.

```js
let prices = [10, 20, 5]
let total = 0

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i]
}

console.log(total) // 35
```

### Pattern 2: `if` inside a loop

```js
let numbers = [3, 12, 7, 20]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i] + " is big")
  }
}
// 12 is big
// 20 is big
```

### Pattern 3: Building a new array

```js
let numbers = [1, 2, 3]
let doubled = []

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2)
}

console.log(doubled) // [2, 4, 6]
```

### Challenges

**4.1** Log the numbers from `1` to `10`.

**4.2** Log the numbers from `10` down to `1`. (Hint: start at 10, and the step goes the other way.)

**4.3** Log only the even numbers from `0` to `20`. Try it two ways:
- with `i += 2`
- with `i++` and an `if` (hint: `i % 2 === 0` means "i is even")

**4.4** Make an array of 5 names. Loop through it and log `"Hello, "` + each name.

**4.5** Make an array `scores = [4, 8, 15, 16, 23, 42]`. Use a loop to add them all up. Log the total. You should see `108`.

**4.6** Same `scores` array. Use a loop to count how many scores are **bigger than 10**. You should see `4`.

**4.7** Make an array `words = ["cat", "elephant", "dog", "giraffe", "ant"]`. Make an empty array `longWords`. Loop through `words` and `push` every word that has more than 3 letters into `longWords`. Log `longWords`.

(Hint: strings have `.length` too. `"cat".length` is `3`.)

**4.8** Find the biggest number in `[7, 3, 19, 2, 11]` using a loop. Don't use `Math.max`.

(Hint: make `let biggest = numbers[0]` before the loop. Inside the loop, if the current number is bigger than `biggest`, reassign `biggest`.)

---

## Part 5: Mix it all together

**5.1 — Countdown**

Start with `let rocket = [5, 4, 3, 2, 1]`. Use a loop to `shift()` each number out and log it. After the loop, log `"Liftoff!"`. Then log `rocket` (it should be empty).

(Hint: `rocket.length` changes every time you `shift()`. Try `for (let i = 0; i < 5; i++)` instead.)

**5.2 — Shopping list**

```js
let list = []
```

1. `push` in `"milk"`, `"eggs"`, `"bread"`.
2. You forgot `"coffee"` and it's the most important. `unshift` it.
3. You already have bread. `pop` it off.
4. Loop through the list and log each item with its number, like this:

```
1. coffee
2. milk
3. eggs
```

(Hint: `i + 1`)

**5.3 — Bank account**

```js
let balance = 100
let transactions = [50, -20, -100, 30, -80]
```

Loop through `transactions` and add each one to `balance`. But **inside the loop**, if `balance` ever goes below `0`, log `"Warning: you are broke!"`.

After the loop, log the final `balance`. You should see `-20`.

**5.4 — FizzBuzz** (the classic!)

Loop from `1` to `20`. For each number:
- if it can be divided by 3 **and** 5, log `"FizzBuzz"`
- if it can be divided by 3, log `"Fizz"`
- if it can be divided by 5, log `"Buzz"`
- otherwise, log the number

(Hint: `i % 3 === 0` means "i can be divided by 3". Think about which `if` should come **first**.)

---

## Part 6 (last!): A small taste of functions

Only start this when Parts 1–5 feel easy.

### Lesson

A function is a piece of code with a name. You write it once, and run it whenever you want by **calling** it.

```js
function sayHello() {
  console.log("Hello!")
}

sayHello() // Hello!
sayHello() // Hello!
```

Writing the function does **nothing** by itself. It only runs when you call it with `()`.

You can give a function some input. These are called **parameters**. They are just variables that get their value when you call the function.

```js
function greet(name) {
  console.log("Hello, " + name)
}

greet("Mustaha") // Hello, Mustaha
greet("Ali")     // Hello, Ali
```

### `return`

Remember `pop()`? It **gave back** the item, and you could catch it in a variable:

```js
let last = fruits.pop()
```

`return` lets **your** function give something back in the same way.

```js
function double(n) {
  return n * 2
}

let result = double(5)
console.log(result) // 10
```

Think of it like this: when the function runs, `double(5)` gets **replaced** by whatever it returns. So `let result = double(5)` becomes `let result = 10`.

**`console.log` vs `return`:**

- `console.log` **shows** a value on the screen. That's it. Your code can't use it after.
- `return` **gives** the value back to your code, so you can save it in a variable and use it.

```js
function addLog(a, b) {
  console.log(a + b)
}

function addReturn(a, b) {
  return a + b
}

let x = addLog(2, 3)    // shows 5, but x is undefined
let y = addReturn(2, 3) // shows nothing, but y is 5
```

### Challenges

**6.1** Write a function `sayBye` that logs `"Bye!"`. Call it 3 times.

**6.2** Write a function `greet(name)` that logs `"Hi, "` + name. Call it with your name.

**6.3** Write a function `triple(n)` that **returns** `n * 3`. Save `triple(4)` in a variable and log it. You should see `12`.

**6.4** Write a function `isAdult(age)` that **returns** `true` if age is 18 or more, and `false` otherwise. Then use it in an `if`:

```js
if (isAdult(20)) {
  console.log("Welcome")
}
```

**6.5** Take your code from challenge 4.5 (adding up scores) and put it inside a function `sum(numbers)` that **returns** the total. Test it with two different arrays.

## Hints (only if you're stuck)

<details>
<summary>Click to show hints</summary>

- **1.4:** `b` copied the value `4`. Changing `a` later doesn't change `b`.
- **2.6:** Do the inside part first. `letters.shift()` removes `"a"` and gives it back. Then `push` adds it to the end.
- **3.3:** Put the biggest check first. If you check `>= 50` first, a 95 would get a `"C"`!
- **4.2:** `for (let i = 10; i >= 1; i--)`
- **5.4:** Check "3 and 5" first. If you check "3" first, 15 would log `"Fizz"` and stop there.
- **6.4:** You can `return age >= 18` directly, because `age >= 18` already is `true` or `false`.

</details>
