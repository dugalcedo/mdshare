# JavaScript Practice: Functions, `Math` and the Accumulation Pattern

A few short lessons, then 10 challenges. Do them in order. Later challenges use functions from earlier ones, so keep everything in **one file**.

If you need a reminder on how functions work, look back at [mustaha2.md](./mustaha2.md) and [mustaha3.md](./mustaha3.md).

---

## Lesson 1: A function call is a value

When a function runs, the call gets **replaced** by whatever it returns.

```js
function double(n) {
  return n * 2
}

let x = double(5) // becomes: let x = 10
```

That means you can use `double(5)` anywhere you could write `10`:

```js
console.log(double(5))           // 10
console.log(double(5) + 1)       // 11
console.log(`Answer: ${double(5)}`) // Answer: 10

if (double(5) > 8) {
  console.log("Big!")
}
```

You can even give one call to another call. JavaScript does the **inside** one first:

```js
console.log(double(double(3))) // double(6) → 12
```

### Common mistake: forgetting `return`

```js
function double(n) {
  n * 2
}

console.log(double(5)) // undefined
```

The function did the math, but it didn't **give it back**. No `return` means you get `undefined`.

---

## Lesson 2: Functions that call other functions

A function can call another function **you** wrote. This lets you build big things out of small pieces.

```js
function square(n) {
  return n * n
}

function sumOfSquares(a, b) {
  return square(a) + square(b)
}

console.log(sumOfSquares(3, 4)) // 25
```

Here is what happens, step by step:

| Step | What JavaScript sees |
| --- | --- |
| 1 | `sumOfSquares(3, 4)` |
| 2 | `square(3) + square(4)` |
| 3 | `9 + 16` |
| 4 | `25` |

`sumOfSquares` doesn't care **how** `square` works. It just trusts that `square` gives back the right number.

**Order:** write the small function first, then the bigger one that uses it. (JavaScript doesn't strictly need this, but it's easier to read.)

### Another example, with a loop

Remember `isBig` from mustaha2? Here we use it inside another function:

```js
function isBig(n) {
  return n > 100
}

function countBig(numbers) {
  let count = 0

  for (let i = 0; i < numbers.length; i++) {
    if (isBig(numbers[i])) {
      count++
    }
  }

  return count
}

console.log(countBig([5, 200, 150, 3])) // 2
```

`isBig(numbers[i])` becomes `true` or `false`, so it fits right inside the `if ( )`.

More reading: [Function return values (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values)

---

## Lesson 3: `Math.round`, `Math.floor`, `Math.ceil`

These three turn a decimal number into a whole number. They're different in **which way** they go.

| Function | What it does | `4.2` | `4.5` | `4.9` |
| --- | --- | --- | --- | --- |
| `Math.round(n)` | nearest whole number | `4` | `5` | `5` |
| `Math.floor(n)` | always **down** (to the floor) | `4` | `4` | `4` |
| `Math.ceil(n)` | always **up** (to the ceiling) | `5` | `5` | `5` |

Whole numbers don't change: `Math.floor(7)`, `Math.ceil(7)` and `Math.round(7)` are all `7`.

When do you use which?

- **`round`**: a normal answer, like an average score.
- **`ceil`**: you need **enough**. 10 people, 4 seats per car → `Math.ceil(10 / 4)` is `3` cars. You can't leave anyone behind.
- **`floor`**: you only count **full** things. 10 euros, a sandwich costs 4 → `Math.floor(10 / 4)` is `2` sandwiches.

---

## Lesson 4: `Math.random`

`Math.random()` gives you a random decimal number from `0` up to (but **never**) `1`.

```js
console.log(Math.random()) // something like 0.7281938...
console.log(Math.random()) // something like 0.0412377...
```

On its own that's not very useful. Usually you want a random **whole** number, like a die roll from 1 to 6. Here's the recipe, one step at a time:

| Code | Gives you |
| --- | --- |
| `Math.random()` | `0` to `0.999...` |
| `Math.random() * 6` | `0` to `5.999...` |
| `Math.floor(Math.random() * 6)` | `0`, `1`, `2`, `3`, `4` or `5` |
| `Math.floor(Math.random() * 6) + 1` | `1`, `2`, `3`, `4`, `5` or `6` |

**Why `floor` and not `round`?** With `round` you could get `0` through `6`. That's 7 different numbers, and `0` and `6` would come up half as often as the others. `floor` keeps it fair.

### A random item from an array

Array positions start at `0` and end at `length - 1`. That's exactly what `Math.floor(Math.random() * length)` gives you!

```js
let colors = ["red", "green", "blue"]
let index = Math.floor(Math.random() * colors.length) // 0, 1 or 2

console.log(colors[index]) // red, green or blue
```

More reading: [Math.random (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random). Look at the "Getting a random integer" examples. They're the same recipe.

---

## Lesson 5: Indexing reminders

Strings and arrays both use `[ ]` and both start at `0`.

```js
let word = "pizza"
let fruits = ["apple", "banana", "cherry"]

word[0]                    // "p"
word[word.length - 1]      // "a"   (the last letter)
fruits[0]                  // "apple"
fruits[fruits.length - 1]  // "cherry" (the last item)
```

To go **backwards**, start at the last position and count down:

```js
for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i])
}
// a z z i p
```

---

## Lesson 6: The accumulation pattern

You already did this in mustaha4 (adding up, counting, building a new array). It's so common that it has a name: the **accumulation pattern**. "Accumulate" means "collect, little by little".

It always has the same three steps:

1. **Before** the loop: make a variable with a **starting value**. This is the **accumulator**.
2. **Inside** the loop: **update** it.
3. **After** the loop: **use** it. In a function, that means `return` it.

The only things that change are the starting value and how you update it:

| You want... | Start with | Update with |
| --- | --- | --- |
| a total | `let total = 0` | `total = total + something` |
| a count | `let count = 0` | `count++` (usually inside an `if`) |
| a string | `let result = ""` | `result = result + something` |
| an array | `let result = []` | `result.push(something)` |

### Example: building a string

```js
function repeatWord(word, times) {
  let result = ""                  // 1. start

  for (let i = 0; i < times; i++) {
    result = result + word         // 2. update
  }

  return result                    // 3. use
}

console.log(repeatWord("ha", 3)) // hahaha
```

| `i` is | `result` becomes |
| --- | --- |
| `0` | `"" + "ha"` = `"ha"` |
| `1` | `"ha" + "ha"` = `"haha"` |
| `2` | `"haha" + "ha"` = `"hahaha"` |

### Common mistake: `return` inside the loop

```js
function repeatWord(word, times) {
  let result = ""

  for (let i = 0; i < times; i++) {
    result = result + word
    return result // ❌ the function stops here, on the first run!
  }
}

console.log(repeatWord("ha", 3)) // ha
```

`return` ends the **whole function** right away, not just the loop. The `return` for an accumulator goes **after** the loop's closing `}`.

---

## Challenges

Challenges marked **🔗 Two functions** have you write one function and then another function that calls it.

For random challenges, run your code a few times. The answer should change, but it should always be in the right range.

---

### Challenge 1: Random number

Write a function `randomNumber(max)` that returns a random whole number from `1` to `max`.

```js
console.log(randomNumber(6))   // 1, 2, 3, 4, 5 or 6
console.log(randomNumber(100)) // anything from 1 to 100
```

Test it with a loop: log `randomNumber(3)` 10 times. You should only ever see `1`, `2` and `3`. Never `0`, never `4`.

<details>
<summary>Answer</summary>

```js
function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1
}

for (let i = 0; i < 10; i++) {
  console.log(randomNumber(3))
}
```

It's the recipe from Lesson 4, with `max` instead of `6`.

</details>

---

### Challenge 2: Boxes

You're packing items into boxes. Write two functions:

- `boxesNeeded(items, perBox)` returns how many boxes you need to pack **all** the items.
- `fullBoxes(items, perBox)` returns how many boxes will be **completely full**.

```js
console.log(boxesNeeded(10, 4)) // 3
console.log(boxesNeeded(8, 4))  // 2
console.log(fullBoxes(10, 4))   // 2
console.log(fullBoxes(3, 4))    // 0
```

**Bonus:** write `leftover(items, perBox)` that returns how many items are in the box that **isn't** full. Use `fullBoxes` inside it. `leftover(10, 4)` should be `2`.

<details>
<summary>Hint</summary>

`10 / 4` is `2.5`. One function needs to go up, and the other needs to go down. Look at Lesson 3.

</details>

<details>
<summary>Answer</summary>

```js
function boxesNeeded(items, perBox) {
  return Math.ceil(items / perBox)
}

function fullBoxes(items, perBox) {
  return Math.floor(items / perBox)
}

// Bonus
function leftover(items, perBox) {
  return items - fullBoxes(items, perBox) * perBox
}
```

For the bonus: `fullBoxes(10, 4)` is `2`. 2 full boxes hold `2 * 4 = 8` items. `10 - 8 = 2` left over.

</details>

---

### Challenge 3: Dice 🔗 Two functions

Write a function `rollDie()` that returns a random number from 1 to 6. **Use your `randomNumber` function from Challenge 1.** Don't write `Math.random` again.

Then write `rollTwoDice()` that rolls two dice and returns the total. Use `rollDie` inside it.

```js
console.log(rollDie())     // 1 to 6
console.log(rollTwoDice()) // 2 to 12
```

**Think about it:** why is `return rollDie() * 2` **wrong** for two dice?

<details>
<summary>Answer</summary>

```js
function rollDie() {
  return randomNumber(6)
}

function rollTwoDice() {
  return rollDie() + rollDie()
}
```

`rollDie() + rollDie()` calls `rollDie` **two times**, so you get two different rolls, like `3 + 5`.

`rollDie() * 2` only rolls **once** and doubles it. You could never get `7`, or any odd number!

</details>

---

### Challenge 4: Random greeting 🔗 Two functions

Write a function `randomItem(array)` that returns a random item from an array.

Then write `randomGreeting(name)` that returns a greeting with a random word from `["Hi", "Hello", "Hey", "Yo"]`. Use `randomItem` inside it.

```js
console.log(randomItem(["rock", "paper", "scissors"])) // rock, paper or scissors
console.log(randomGreeting("Mustaha")) // Hey, Mustaha!  (or Hi, Hello, Yo)
```

<details>
<summary>Answer</summary>

```js
function randomItem(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

function randomGreeting(name) {
  let word = randomItem(["Hi", "Hello", "Hey", "Yo"])
  return `${word}, ${name}!`
}
```

</details>

---

### Challenge 5: Average 🔗 Two functions

Write a function `sum(numbers)` that adds up an array and returns the total. Use the accumulation pattern.

Then write `average(numbers)`. The average is the sum divided by how many numbers there are. Use `sum` inside it, and **round** the answer.

```js
console.log(sum([10, 20, 25]))     // 55
console.log(average([10, 20, 25])) // 18
console.log(average([3, 4]))       // 4
```

<details>
<summary>Hint</summary>

`55 / 3` is `18.333...` and `7 / 2` is `3.5`. Which `Math` function gives `18` and `4`?

</details>

<details>
<summary>Answer</summary>

```js
function sum(numbers) {
  let total = 0

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]
  }

  return total
}

function average(numbers) {
  return Math.round(sum(numbers) / numbers.length)
}
```

</details>

---

### Challenge 6: Count the vowels

Write a function `countVowels(word)` that returns how many vowels (`a`, `e`, `i`, `o`, `u`) are in the word.

```js
console.log(countVowels("banana"))     // 3
console.log(countVowels("javascript")) // 3
console.log(countVowels("rhythm"))     // 0
```

**Bonus:** write a function `isVowel(letter)` that returns `true` or `false`. Then change `countVowels` so it uses `isVowel`. Which version is easier to read?

<details>
<summary>Hint</summary>

It's a count, so start at `0`. Inside the loop, check the letter with `||`:

```js
if (word[i] === "a" || word[i] === "e" || ...)
```

</details>

<details>
<summary>Answer</summary>

```js
function countVowels(word) {
  let count = 0

  for (let i = 0; i < word.length; i++) {
    let letter = word[i]
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      count++
    }
  }

  return count
}
```

Bonus:

```js
function isVowel(letter) {
  return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"
}

function countVowels(word) {
  let count = 0

  for (let i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      count++
    }
  }

  return count
}
```

</details>

---

### Challenge 7: Palindromes 🔗 Two functions

Write a function `reverse(word)` that returns the word backwards. Use the accumulation pattern (build a string).

A **palindrome** is a word that's the same forwards and backwards, like `"level"`. Write `isPalindrome(word)` that returns `true` or `false`. Use `reverse` inside it.

```js
console.log(reverse("cat"))          // tac
console.log(reverse("Mustaha"))      // ahatsuM
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("level"))   // true
console.log(isPalindrome("hello"))   // false
```

<details>
<summary>Hint</summary>

Start with `let result = ""`. Loop backwards (Lesson 5) and add each letter to `result`.

For `isPalindrome`: a comparison like `a === b` is already `true` or `false`, so you can return it directly.

</details>

<details>
<summary>Answer</summary>

```js
function reverse(word) {
  let result = ""

  for (let i = word.length - 1; i >= 0; i--) {
    result = result + word[i]
  }

  return result
}

function isPalindrome(word) {
  return word === reverse(word)
}
```

Another way to write `reverse`: loop forwards, but put each letter in **front**:

```js
result = word[i] + result
```

</details>

---

### Challenge 8: Coin flips 🔗 Two functions

Write a function `coinFlip()` that returns `"Heads"` or `"Tails"`, at random.

Then write `countHeads(times)` that flips the coin `times` times and returns how many were `"Heads"`. Use `coinFlip` inside it.

```js
console.log(coinFlip())       // Heads or Tails
console.log(countHeads(10))   // around 5
console.log(countHeads(1000)) // around 500
```

Run `countHeads(10)` a few times, then `countHeads(1000)` a few times. Which one is closer to exactly half?

<details>
<summary>Hint</summary>

`Math.random()` is smaller than `0.5` about half of the time.

</details>

<details>
<summary>Answer</summary>

```js
function coinFlip() {
  if (Math.random() < 0.5) {
    return "Heads"
  } else {
    return "Tails"
  }
}

function countHeads(times) {
  let count = 0

  for (let i = 0; i < times; i++) {
    if (coinFlip() === "Heads") {
      count++
    }
  }

  return count
}
```

Notice that there's no array here. The loop just runs `times` times.

</details>

---

### Challenge 9: Report card 🔗 Two functions

Write a function `letterGrade(score)`. Return:

- `"A"` if it's 90 or more
- `"B"` if it's 70 or more
- `"C"` if it's 50 or more
- `"Fail"` for anything else

Then write `reportCard(scores)`. It takes an array of scores and returns a **new array** of letter grades. Use `letterGrade` inside it.

```js
console.log(letterGrade(72))                 // B
console.log(reportCard([95, 72, 50, 10]))    // ["A", "B", "C", "Fail"]
console.log(reportCard([100, 49]))           // ["A", "Fail"]
```

<details>
<summary>Answer</summary>

```js
function letterGrade(score) {
  if (score >= 90) {
    return "A"
  } else if (score >= 70) {
    return "B"
  } else if (score >= 50) {
    return "C"
  } else {
    return "Fail"
  }
}

function reportCard(scores) {
  let grades = []

  for (let i = 0; i < scores.length; i++) {
    grades.push(letterGrade(scores[i]))
  }

  return grades
}
```

</details>

---

### Challenge 10: Password maker

Write a function `makePassword(length)` that returns a random password with `length` characters. Pick each character from this string:

```js
let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
```

```js
console.log(makePassword(8))  // something like k3x9q0ab
console.log(makePassword(4))  // something like 7mzq
```

This one uses almost everything: a loop, the accumulation pattern, `Math.random`, `Math.floor` and string indexing.

**Bonus:** your `randomItem` function from Challenge 4 works on **strings** too, because strings also have `.length` and `[i]`. Rewrite `makePassword` so it uses `randomItem`.

<details>
<summary>Hint</summary>

Start with `let password = ""`. Loop `length` times. Each time, pick a random index into `chars` (Lesson 4) and add that character to `password`.

</details>

<details>
<summary>Answer</summary>

```js
function makePassword(length) {
  let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  let password = ""

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length)
    password = password + chars[index]
  }

  return password
}
```

Bonus:

```js
function makePassword(length) {
  let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  let password = ""

  for (let i = 0; i < length; i++) {
    password = password + randomItem(chars)
  }

  return password
}
```

</details>
