# JavaScript Practice: Functions

20 small functions. Do them in order. Every one looks a lot like the one before it. That's on purpose.

For every exercise:

1. Write the function.
2. Call it with the test values.
3. Check that you see the right answer.

---

## Reminder: what a function looks like

```js
function name(parameter) {
  // code goes here
}
```

Call it with `()`:

```js
name("something")
```

## Reminder: template strings

Use backticks `` ` `` instead of quotes. Put variables inside `${ }`.

```js
let food = "pizza"
console.log(`I like ${food}`) // I like pizza
```

---

## Part 1: Functions that log

### Example

```js
function sayColor(color) {
  console.log(`My favorite color is ${color}`)
}

sayColor("blue") // My favorite color is blue
sayColor("red")  // My favorite color is red
```

### Exercises

**1.** Write a function `sayHi()` that logs `"Hi!"`.

```js
sayHi() // Hi!
sayHi() // Hi!
```

**2.** Write a function `sayName(name)` that logs `My name is ...`

```js
sayName("Mustaha") // My name is Mustaha
sayName("Ali")     // My name is Ali
```

**3.** Write a function `sayAge(age)` that logs `I am ... years old`

```js
sayAge(20) // I am 20 years old
sayAge(7)  // I am 7 years old
```

**4.** Write a function `sayCity(city)` that logs `I live in ...`

```js
sayCity("Cairo")  // I live in Cairo
sayCity("London") // I live in London
```

---

## Part 2: Functions that return a number

Now the function does **not** log. It uses `return`. You do the logging **outside** the function.

### Example

```js
function addTen(n) {
  return n + 10
}

console.log(addTen(5))  // 15
console.log(addTen(90)) // 100
```

### Exercises

**5.** Write a function `addOne(n)` that returns `n + 1`.

```js
console.log(addOne(4))  // 5
console.log(addOne(99)) // 100
```

**6.** Write a function `double(n)` that returns `n * 2`.

```js
console.log(double(3))  // 6
console.log(double(10)) // 20
```

**7.** Write a function `add(a, b)` that returns `a + b`.

```js
console.log(add(2, 3))   // 5
console.log(add(10, 20)) // 30
```

**8.** Write a function `subtract(a, b)` that returns `a - b`.

```js
console.log(subtract(10, 4)) // 6
console.log(subtract(5, 5))  // 0
```

---

## Part 3: Functions that return a string

Same as Part 2, but you return a template string.

### Example

```js
function sayColor(color) {
  return `My favorite color is ${color}`
}

console.log(sayColor("blue")) // My favorite color is blue
```

Look back at the example in Part 1. The only change is `console.log` became `return`.

### Exercises

**9.** Write a function `greet(name)` that returns `Hello, ...!`

```js
console.log(greet("Mustaha")) // Hello, Mustaha!
console.log(greet("Sara"))    // Hello, Sara!
```

**10.** Write a function `shout(word)` that returns the word with `!!!` at the end.

```js
console.log(shout("hey"))  // hey!!!
console.log(shout("stop")) // stop!!!
```

**11.** Write a function `fullName(first, last)` that returns the first and last name with a space between.

```js
console.log(fullName("Mustaha", "Ahmed")) // Mustaha Ahmed
console.log(fullName("Ali", "Khan"))      // Ali Khan
```

**12.** Write a function `describe(name, age)` that returns `... is ... years old`

```js
console.log(describe("Ali", 20)) // Ali is 20 years old
console.log(describe("Sara", 8)) // Sara is 8 years old
```

---

## Part 4: Functions that return `true` or `false`

A comparison like `n > 5` is already `true` or `false`. You can return it directly.

### Example

```js
function isSmall(n) {
  return n < 10
}

console.log(isSmall(3))  // true
console.log(isSmall(50)) // false
```

### Exercises

**13.** Write a function `isBig(n)` that returns `true` if `n` is bigger than `100`.

```js
console.log(isBig(500)) // true
console.log(isBig(20))  // false
```

**14.** Write a function `isZero(n)` that returns `true` if `n` is `0`.

```js
console.log(isZero(0)) // true
console.log(isZero(7)) // false
```

**15.** Write a function `isAdult(age)` that returns `true` if `age` is `18` or more.

```js
console.log(isAdult(18)) // true
console.log(isAdult(12)) // false
```

**16.** Write a function `isSame(a, b)` that returns `true` if `a` and `b` are equal.

```js
console.log(isSame(5, 5))         // true
console.log(isSame("cat", "dog")) // false
```

---

## Part 5: Functions with `if`

Now use `if` and `else` inside the function. Each one has its own `return`.

### Example

```js
function hotOrCold(temp) {
  if (temp > 25) {
    return "Hot"
  } else {
    return "Cold"
  }
}

console.log(hotOrCold(30)) // Hot
console.log(hotOrCold(10)) // Cold
```

### Exercises

**17.** Write a function `checkAge(age)` that returns `"Adult"` if `age` is 18 or more. Otherwise it returns `"Child"`.

```js
console.log(checkAge(25)) // Adult
console.log(checkAge(9))  // Child
```

**18.** Write a function `bigOrSmall(n)` that returns `"Big"` if `n` is bigger than `100`. Otherwise it returns `"Small"`.

```js
console.log(bigOrSmall(500)) // Big
console.log(bigOrSmall(5))   // Small
```

**19.** Write a function `checkPassword(password)` that returns `"Welcome"` if the password is `"banana123"`. Otherwise it returns `"Wrong password"`.

```js
console.log(checkPassword("banana123")) // Welcome
console.log(checkPassword("apple"))     // Wrong password
```

**20.** Write a function `welcome(name, age)`. If `age` is 18 or more, return `Welcome, ...!`. Otherwise return `Sorry ..., you are too young`.

```js
console.log(welcome("Ali", 20)) // Welcome, Ali!
console.log(welcome("Sara", 12)) // Sorry Sara, you are too young
```
