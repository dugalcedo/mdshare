# `for` Loops: Answers

Try each exercise yourself first. If you're stuck, read the lessons again before you look here.

Your code doesn't have to look exactly like mine. If it logs the right answer, it's correct.

---

## Part 1: Just loops

### 1.

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello")
}
```

**Why:** `i` will be `0`, `1`, `2`, `3` and `4`. That's 5 runs. When `i` is `5`, the check `i < 5` is `false` and the loop stops. We don't log `i` here. We only use it to count the runs.

### 2.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
```

**Why:** We want to start at `1`, so `i` starts at `1`. We also want to log `5`, so we use `<=`. With `i < 5`, the loop would stop at `4`.

### 3.

```js
for (let i = 3; i <= 8; i++) {
  console.log(i)
}
```

**Why:** A loop doesn't have to start at `0` or `1`. The start is the first number you want, and the check uses the last number you want.

### 4.

```js
for (let i = 5; i >= 1; i--) {
  console.log(i)
}
```

**Why:** `i` starts at `5` and `i--` makes it smaller each time. The loop keeps going while `i` is `1` or more. When `i` is `0`, the check is `false` and the loop stops.

### 5.

```js
for (let i = 2; i <= 10; i += 2) {
  console.log(i)
}
```

**Why:** `i += 2` adds 2 after each run, so `i` is `2`, `4`, `6`, `8` and `10`. Next it's `12`, the check is `false`, and the loop stops.

### 6.

```js
let colors = ["red", "green", "blue"]

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}
```

**Why:** `colors.length` is `3`, so `i` is `0`, `1` and `2`. Those are the three positions in the array. `colors[i]` gets the color at the position `i`.

### 7.

```js
let foods = ["pizza", "rice", "soup"]

for (let i = 0; i < foods.length; i++) {
  console.log(`I like ${foods[i]}`)
}
```

**Why:** This is the same loop as exercise 6. The only change is what we log. The code inside `${ }` runs first, so `${foods[i]}` becomes `pizza`, then `rice`, then `soup`.

### 8.

```js
let name = "Mustaha"

for (let i = 0; i < name.length; i++) {
  console.log(name[i])
}
```

**Why:** A string works like an array of letters. `name.length` is `7`, so `i` goes from `0` to `6`, and `name[i]` is one letter each time.

### 9.

```js
let names = ["Ali", "Sara", "Omar"]

for (let i = 0; i < names.length; i++) {
  console.log(`${i + 1}. ${names[i]}`)
}
```

**Why:** `i` starts at `0`, but we want the list to start at `1`, so we log `i + 1`. This doesn't change `i`. It only works out a number to show. `names[i]` still uses the real `i`, so we get the right name.

### 10.

```js
let numbers = [5, 10, 15]
let total = 0

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i]
}

console.log(total)
```

**Why:** `total` has to remember the old value, so we make it **outside** the loop. We log it after the loop so we only see the final answer.

| `i` is | `numbers[i]` is | `total` becomes |
| --- | --- | --- |
| `0` | `5` | `0 + 5` = `5` |
| `1` | `10` | `5 + 10` = `15` |
| `2` | `15` | `15 + 15` = `30` |

---

## Part 2: Loops and `if`

### 11.

```js
for (let i = 1; i <= 10; i++) {
  if (i > 5) {
    console.log(i)
  }
}
```

**Why:** The loop runs for every number from `1` to `10`. The `if` only lets the numbers bigger than `5` get logged. There's no array here, so we check `i` itself.

### 12.

```js
let numbers = [3, 8, 1, 12, 5]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 4) {
    console.log(numbers[i])
  }
}
```

**Why:** We want to check the number in the array, so we use `numbers[i]`, not `i`. `i` is only the position.

| `i` is | `numbers[i]` is | `numbers[i] > 4`? | What happens |
| --- | --- | --- | --- |
| `0` | `3` | `false` | nothing |
| `1` | `8` | `true` | logs `8` |
| `2` | `1` | `false` | nothing |
| `3` | `12` | `true` | logs `12` |
| `4` | `5` | `true` | logs `5` |

### 13.

```js
let names = ["Ali", "Sara", "Omar"]

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Sara") {
    console.log("Hi Sara!")
  }
}
```

**Why:** The loop looks at all three names, but the `if` is only `true` for `"Sara"`. There's no `else`, so nothing happens for the other names. Remember to compare with `===`, not `=`.

### 14.

```js
let ages = [12, 25, 17, 40]

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log("Adult")
  } else {
    console.log("Child")
  }
}
```

**Why:** With `if` and `else`, exactly one of them runs for each age. There are 4 ages, so we see 4 lines.

### 15.

```js
let temps = [30, 15, 2]

for (let i = 0; i < temps.length; i++) {
  if (temps[i] > 25) {
    console.log("Hot")
  } else if (temps[i] > 10) {
    console.log("Warm")
  } else {
    console.log("Cold")
  }
}
```

**Why:** JavaScript checks from top to bottom and stops at the first `true` one. `30` is bigger than `25` and also bigger than `10`, but it stops at the first check, so we see `Hot`. That's why the `> 25` check has to come first. If `> 10` came first, `30` would log `Warm`.

### 16.

```js
let word = "banana"

for (let i = 0; i < word.length; i++) {
  if (word[i] === "a") {
    console.log("Found an a!")
  }
}
```

**Why:** `word[i]` is one letter each time. The letters are `b`, `a`, `n`, `a`, `n`, `a`. The `if` is `true` for each of the three `a`s, so we see the message 3 times.

### 17.

```js
let numbers = [4, 15, 8, 23, 42]
let count = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    count++
  }
}

console.log(count)
```

**Why:** `count` has to remember the old value, so we make it **outside** the loop. `count++` is inside the `if`, so it only adds 1 when the number is bigger than `10`. That's true for `15`, `23` and `42`, so the count is `3`.

### 18.

```js
let word = "banana"
let count = 0

for (let i = 0; i < word.length; i++) {
  if (word[i] === "a") {
    count++
  }
}

console.log(count)
```

**Why:** This is exercise 16 and exercise 17 put together. The loop and the `if` come from 16. We only changed `console.log("Found an a!")` to `count++`, then logged `count` after the loop.

| `i` is | `word[i]` is | `word[i] === "a"`? | `count` is now |
| --- | --- | --- | --- |
| `0` | `b` | `false` | `0` |
| `1` | `a` | `true` | `1` |
| `2` | `n` | `false` | `1` |
| `3` | `a` | `true` | `2` |
| `4` | `n` | `false` | `2` |
| `5` | `a` | `true` | `3` |

### 19.

```js
let prices = [5, 20, 3, 50]
let total = 0

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 10) {
    total = total + prices[i]
  }
}

console.log(total)
```

**Why:** This is exercise 10 with an `if` added. The adding is inside the `if`, so the small prices get skipped.

| `i` is | `prices[i]` is | `prices[i] > 10`? | `total` is now |
| --- | --- | --- | --- |
| `0` | `5` | `false` | `0` |
| `1` | `20` | `true` | `20` |
| `2` | `3` | `false` | `20` |
| `3` | `50` | `true` | `70` |

### 20.

```js
let numbers = [3, 12, 7, 20, 1]
let big = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    big.push(numbers[i])
  }
}

console.log(big)
```

**Why:** `big` has to keep its items between runs, so we make it **outside** the loop. If it was inside, every run would make a new empty array. We push `numbers[i]`, which is the number, not `i`, which is only the position. We log after the loop so we only see the finished array.
