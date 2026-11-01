# JavaScript Practice: More Functions

20 more small functions. Same idea as last time. Do them in order.

For every exercise:

1. Write the function.
2. Call it with the test values.
3. Check that you see the right answer.

---

## Part 1: Return a number

### Example

```js
function addFive(n) {
  return n + 5
}

console.log(addFive(1))  // 6
console.log(addFive(10)) // 15
```

### Exercises

**1.** Write a function `triple(n)` that returns `n * 3`.

```js
console.log(triple(2))  // 6
console.log(triple(10)) // 30
```

**2.** Write a function `half(n)` that returns `n / 2`.

```js
console.log(half(10)) // 5
console.log(half(50)) // 25
```

**3.** Write a function `multiply(a, b)` that returns `a * b`.

```js
console.log(multiply(3, 4)) // 12
console.log(multiply(5, 5)) // 25
```

**4.** Write a function `ticketPrice(people)`. One ticket costs `10`. Return the price for all the people.

```js
console.log(ticketPrice(1)) // 10
console.log(ticketPrice(4)) // 40
```

---

## Part 2: Return a string

### Example

```js
function sayPet(pet) {
  return `I have a ${pet}`
}

console.log(sayPet("cat")) // I have a cat
console.log(sayPet("dog")) // I have a dog
```

### Exercises

**5.** Write a function `goodbye(name)` that returns `Goodbye, ...!`

```js
console.log(goodbye("Mustaha")) // Goodbye, Mustaha!
console.log(goodbye("Omar"))    // Goodbye, Omar!
```

**6.** Write a function `whisper(word)` that returns the word with `...` before it and after it.

```js
console.log(whisper("hello")) // ...hello...
console.log(whisper("shh"))   // ...shh...
```

**7.** Write a function `makeEmail(name)` that returns the name with `@mail.com` at the end.

```js
console.log(makeEmail("ali"))  // ali@mail.com
console.log(makeEmail("sara")) // sara@mail.com
```

**8.** Write a function `order(amount, food)` that returns `I want ... ...`

```js
console.log(order(2, "pizzas")) // I want 2 pizzas
console.log(order(5, "apples")) // I want 5 apples
```

---

## Part 3: Return `true` or `false`

### Example

```js
function isHundred(n) {
  return n === 100
}

console.log(isHundred(100)) // true
console.log(isHundred(5))   // false
```

### Exercises

**9.** Write a function `isPositive(n)` that returns `true` if `n` is bigger than `0`.

```js
console.log(isPositive(8))  // true
console.log(isPositive(-3)) // false
```

**10.** Write a function `isNegative(n)` that returns `true` if `n` is smaller than `0`.

```js
console.log(isNegative(-3)) // true
console.log(isNegative(8))  // false
```

**11.** Write a function `isChild(age)` that returns `true` if `age` is smaller than `18`.

```js
console.log(isChild(10)) // true
console.log(isChild(30)) // false
```

**12.** Write a function `isDifferent(a, b)` that returns `true` if `a` and `b` are **not** equal. (Hint: `!==`)

```js
console.log(isDifferent(3, 7))         // true
console.log(isDifferent("cat", "cat")) // false
```

---

## Part 4: `if` and `else`

### Example

```js
function dayOrNight(hour) {
  if (hour < 18) {
    return "Day"
  } else {
    return "Night"
  }
}

console.log(dayOrNight(10)) // Day
console.log(dayOrNight(22)) // Night
```

### Exercises

**13.** Write a function `passOrFail(score)` that returns `"Pass"` if `score` is 50 or more. Otherwise it returns `"Fail"`.

```js
console.log(passOrFail(80)) // Pass
console.log(passOrFail(30)) // Fail
```

**14.** Write a function `openOrClosed(hour)` that returns `"Open"` if `hour` is smaller than `17`. Otherwise it returns `"Closed"`.

```js
console.log(openOrClosed(9))  // Open
console.log(openOrClosed(20)) // Closed
```

**15.** Write a function `yesOrNo(answer)` that returns `"You said yes"` if `answer` is `true`. Otherwise it returns `"You said no"`.

```js
console.log(yesOrNo(true))  // You said yes
console.log(yesOrNo(false)) // You said no
```

**16.** Write a function `login(name)`. If `name` is `"admin"`, return `"Welcome, boss"`. Otherwise return `Hello, ...`

```js
console.log(login("admin")) // Welcome, boss
console.log(login("Ali"))   // Hello, Ali
```

---

## Part 5: `if`, `else if` and `else`

Now there are **three** choices.

### Example

```js
function trafficLight(color) {
  if (color === "red") {
    return "Stop"
  } else if (color === "yellow") {
    return "Slow down"
  } else {
    return "Go"
  }
}

console.log(trafficLight("red"))    // Stop
console.log(trafficLight("yellow")) // Slow down
console.log(trafficLight("green"))  // Go
```

### Exercises

**17.** Write a function `checkNumber(n)`. Return `"Positive"` if `n` is bigger than `0`, `"Negative"` if it's smaller than `0`, and `"Zero"` otherwise.

```js
console.log(checkNumber(5))  // Positive
console.log(checkNumber(-5)) // Negative
console.log(checkNumber(0))  // Zero
```

**18.** Write a function `weather(temp)`. Return `"Hot"` if `temp` is bigger than `25`, `"Warm"` if it's bigger than `10`, and `"Cold"` otherwise.

```js
console.log(weather(30)) // Hot
console.log(weather(15)) // Warm
console.log(weather(2))  // Cold
```

**19.** Write a function `size(n)`. Return `"Small"` if `n` is smaller than `10`, `"Medium"` if it's smaller than `100`, and `"Large"` otherwise.

```js
console.log(size(5))    // Small
console.log(size(50))   // Medium
console.log(size(500))  // Large
```

**20.** Write a function `grade(score)`. Return `"A"` if `score` is 90 or more, `"B"` if it's 70 or more, and `"Fail"` otherwise.

```js
console.log(grade(95)) // A
console.log(grade(75)) // B
console.log(grade(40)) // Fail
```
