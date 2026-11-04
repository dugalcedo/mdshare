# JavaScript Practice: `for` Loops

First read the lessons. Then do the 20 exercises in order. Every one looks a lot like the one before it. That's on purpose.

For every exercise:

1. Write the loop.
2. Run it.
3. Check that you see the right answer.

No functions this time. Just write your code directly in the file.

Some exercises use the same variable name, like `numbers`. You can't make the same variable twice with `let`, so if you see an error like `'numbers' has already been declared`, delete or comment out the exercise before it.

---

## Lesson 1: What a loop does

A loop runs the same code many times.

Without a loop:

```js
console.log("Hello")
console.log("Hello")
console.log("Hello")
```

With a loop:

```js
for (let i = 0; i < 3; i++) {
  console.log("Hello")
}
```

Both log `Hello` 3 times.

---

## Lesson 2: The three parts

```js
for (let i = 0; i < 3; i++) {
  console.log(i)
}
```

There are three parts inside the `( )`, separated by `;`

| Part | Name | What it means |
| --- | --- | --- |
| `let i = 0` | start | Make a variable `i`. It starts at `0`. |
| `i < 3` | check | Keep going while this is `true`. |
| `i++` | step | After each run, add 1 to `i`. |

`i` is just a normal variable. It holds a number, and the number changes each time.

Here is what happens, step by step:

| `i` is | `i < 3`? | What happens |
| --- | --- | --- |
| `0` | `true` | logs `0` |
| `1` | `true` | logs `1` |
| `2` | `true` | logs `2` |
| `3` | `false` | the loop stops |

So you see:

```
0
1
2
```

Notice that `3` never gets logged. The loop stops as soon as the check is `false`.

---

## Lesson 3: Changing the numbers

You can change the start, the check and the step.

**Start at 1 and include the last number.** Use `<=`, which means "smaller or equal".

```js
for (let i = 1; i <= 3; i++) {
  console.log(i)
}
// 1
// 2
// 3
```

**Count down.** Start high, use `>=`, and use `i--`.

```js
for (let i = 3; i >= 1; i--) {
  console.log(i)
}
// 3
// 2
// 1
```

**Jump by more than 1.** Use `i += 5`, which adds 5 each time.

```js
for (let i = 5; i <= 15; i += 5) {
  console.log(i)
}
// 5
// 10
// 15
```

---

## Lesson 4: Looping through an array

`i` is a number, and array positions are numbers. So you can write `fruits[i]`.

```js
let fruits = ["apple", "banana", "cherry"]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// apple
// banana
// cherry
```

Here is what happens, step by step:

| `i` is | `i < 3`? | `fruits[i]` is |
| --- | --- | --- |
| `0` | `true` | `"apple"` |
| `1` | `true` | `"banana"` |
| `2` | `true` | `"cherry"` |
| `3` | `false` | the loop stops |

`fruits.length` is `3`, and the last position is `2`. That's why we use `<` and not `<=`.

**Remember this line.** You will write it a lot:

```js
for (let i = 0; i < something.length; i++) {
```

---

## Lesson 5: Looping through a string

A string works like an array of letters.

```js
let word = "cat"

console.log(word[0])     // c
console.log(word[1])     // a
console.log(word.length) // 3
```

So the loop is the same:

```js
let word = "cat"

for (let i = 0; i < word.length; i++) {
  console.log(word[i])
}
// c
// a
// t
```

---

## Lesson 6: Using `i` as a number

`i` starts at `0`, but people count from `1`. Use `i + 1` to fix that.

```js
let fruits = ["apple", "banana"]

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit number ${i + 1} is ${fruits[i]}`)
}
// Fruit number 1 is apple
// Fruit number 2 is banana
```

---

## Lesson 7: Adding things up

This needs three steps:

1. **Before** the loop: make a variable.
2. **Inside** the loop: change it.
3. **After** the loop: log it.

```js
let prices = [10, 20, 5]
let total = 0

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i]
}

console.log(total) // 35
```

Here is what happens, step by step:

| `i` is | `prices[i]` is | `total` becomes |
| --- | --- | --- |
| `0` | `10` | `0 + 10` = `10` |
| `1` | `20` | `10 + 20` = `30` |
| `2` | `5` | `30 + 5` = `35` |

---

## Lesson 8: Inside or outside the loop?

A variable made inside `{ }` only exists inside those `{ }`. This is called **scope**.

So where do you make your variable? Ask yourself one question:

**Do I need the old value on the next run, or after the loop?**

- **No:** make it **inside** the loop.
- **Yes:** make it **outside** the loop, before it starts.

### Inside: `fruit`

```js
let fruits = ["apple", "banana", "cherry"]

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i]
  console.log(`I like ${fruit}`)
}
// I like apple
// I like banana
// I like cherry
```

Every run makes a new `fruit`. When the run ends, that `fruit` is gone. That's fine, because the next run doesn't need the old one.

After the loop, `fruit` doesn't exist at all:

```js
console.log(fruit) // error: fruit is not defined
```

The same is true for `i`. It only exists in the loop.

### Outside: `total`

`total` has to remember the old value, so it goes outside.

```js
let prices = [10, 20, 5]
let total = 0

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i]
}

console.log(total) // 35
```

There is only one `total`. Every run changes that same variable, and it's still there after the loop.

### What goes wrong if you put `total` inside

```js
let prices = [10, 20, 5]

for (let i = 0; i < prices.length; i++) {
  let total = 0
  total = total + prices[i]
  console.log(total)
}
// 10
// 20
// 5
```

Every run makes a new `total` that starts at `0`, so the old value is lost:

| `i` is | `total` starts at | `total` becomes |
| --- | --- | --- |
| `0` | `0` | `10` |
| `1` | `0` | `20` |
| `2` | `0` | `5` |

### Both together

```js
let prices = [10, 20, 5]
let total = 0 // outside: we need it on the next run and after the loop

for (let i = 0; i < prices.length; i++) {
  let price = prices[i] // inside: we only need it for this run
  total = total + price
}

console.log(total) // 35
```

Any `{ }` works like this, including the `{ }` of an `if`.

---

## Common mistakes

**Commas instead of semicolons.** This is an error:

```js
for (let i = 0, i < 3, i++) {
```

**`<=` with `.length`.** This goes one step too far, and the last thing you see is `undefined`:

```js
for (let i = 0; i <= fruits.length; i++) {
```

**Making the variable inside the loop.** Now `total` goes back to `0` on every run, so it never adds up:

```js
for (let i = 0; i < prices.length; i++) {
  let total = 0
  total = total + prices[i]
}
```

**A step that goes the wrong way.** Here `i` gets smaller and smaller, so `i < 3` is always `true`. The loop never stops, and your program freezes. If that happens, close the tab or press `Ctrl + C`.

```js
for (let i = 0; i < 3; i--) {
```

---

## Part 1: Just loops

**1.** Log `Hello` 5 times.

```
Hello
Hello
Hello
Hello
Hello
```

**2.** Log the numbers from 1 to 5.

```
1
2
3
4
5
```

**3.** Log the numbers from 3 to 8.

```
3
4
5
6
7
8
```

**4.** Count down from 5 to 1.

```
5
4
3
2
1
```

**5.** Log the even numbers from 2 to 10. Use `i += 2`.

```
2
4
6
8
10
```

**6.** Log every color in this array.

```js
let colors = ["red", "green", "blue"]
```

```
red
green
blue
```

**7.** Log `I like ...` for every food in this array.

```js
let foods = ["pizza", "rice", "soup"]
```

```
I like pizza
I like rice
I like soup
```

**8.** Log every letter of this string.

```js
let name = "Mustaha"
```

```
M
u
s
t
a
h
a
```

**9.** Log every name with its number. (Hint: `i + 1`)

```js
let names = ["Ali", "Sara", "Omar"]
```

```
1. Ali
2. Sara
3. Omar
```

**10.** Add up all the numbers in this array. Log the total **after** the loop.

```js
let numbers = [5, 10, 15]
```

```
30
```

---

## Lesson 9: `if` inside a loop

The loop runs the code for every item. The `if` decides what to do with **this** item.

```js
let numbers = [3, 12, 7, 20]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i])
  }
}
// 12
// 20
```

Here is what happens, step by step:

| `i` is | `numbers[i]` is | `numbers[i] > 10`? | What happens |
| --- | --- | --- | --- |
| `0` | `3` | `false` | nothing |
| `1` | `12` | `true` | logs `12` |
| `2` | `7` | `false` | nothing |
| `3` | `20` | `true` | logs `20` |

The `if` goes **inside** the loop's `{ }`. Check the closing brackets: first the `if` closes, then the loop.

You can use `else` too. Now something happens for every item:

```js
let numbers = [3, 12]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log("Big")
  } else {
    console.log("Small")
  }
}
// Small
// Big
```

---

## Lesson 10: Counting

Counting is like adding up, but you only add 1, and only when the `if` is `true`.

```js
let numbers = [3, 12, 7, 20]
let count = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    count++
  }
}

console.log(count) // 2
```

---

## Lesson 11: Building a new array

Same three steps again. Make an empty array before the loop, `push` inside the loop, and log it after the loop.

```js
let numbers = [3, 12, 7, 20]
let big = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    big.push(numbers[i])
  }
}

console.log(big) // [12, 20]
```

---

## Part 2: Loops and `if`

**11.** Loop from 1 to 10. Log only the numbers bigger than 5.

```
6
7
8
9
10
```

**12.** Log only the numbers bigger than 4.

```js
let numbers = [3, 8, 1, 12, 5]
```

```
8
12
5
```

**13.** Loop through the names. When the name is `"Sara"`, log `Hi Sara!`. Log nothing for the other names.

```js
let names = ["Ali", "Sara", "Omar"]
```

```
Hi Sara!
```

**14.** For every age, log `Adult` if it's 18 or more. Otherwise log `Child`.

```js
let ages = [12, 25, 17, 40]
```

```
Child
Adult
Child
Adult
```

**15.** For every temperature, log `Hot` if it's bigger than 25, `Warm` if it's bigger than 10, and `Cold` otherwise.

```js
let temps = [30, 15, 2]
```

```
Hot
Warm
Cold
```

**16.** Loop through the letters of this string. Every time the letter is `"a"`, log `Found an a!`

```js
let word = "banana"
```

```
Found an a!
Found an a!
Found an a!
```

**17.** Count how many numbers are bigger than 10. Log the count **after** the loop.

```js
let numbers = [4, 15, 8, 23, 42]
```

```
3
```

**18.** Count how many times the letter `"a"` is in this string. Log the count **after** the loop.

```js
let word = "banana"
```

```
3
```

**19.** Add up only the prices bigger than 10. Log the total **after** the loop.

```js
let prices = [5, 20, 3, 50]
```

```
70
```

**20.** Make an empty array called `big`. `push` every number bigger than 5 into it. Log `big` **after** the loop.

```js
let numbers = [3, 12, 7, 20, 1]
```

```
[12, 7, 20]
```
