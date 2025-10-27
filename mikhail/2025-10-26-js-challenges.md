# Javascript challenges

For Mikhail, 26 Oct 2025

## atLeastTwoDigits(n)

Define a function that passes the following tests:

```js
atLeastTwoDigits(12)
// returns "12"

atLeastTwoDigits(5)
// returns "05"

atLeastTwoDigits(0)
// returns "00"

atLeastTwoDigits(500)
// returns "500"
```

This will be useful for the next two challenges!



## formatDate(y, m, d, separator)

Define a function that passes the following tests:

```js
formatDate(2025, 6, 3, '-')
// returns "2025-06-03"

formatDate(1993, 12, 25, '/')
// returns "1993/12/25"
```

## format12HourTime(h, m)

Define a function that passes the following tests:

```js
format12HourTime(10, 25)
// returns "10:25"

format12HourTime(1, 7)
// returns "01:07"

format12HourTime(9, 59)
// returns "09:59"
```

### Bonus challenge

Return `"invalid inputs"` if the numbers don't make sense for a 12 hour time.

```js
format12HourTime(26, 10)
// returns "invalid inputs"

format12HourTime(5, 15.1)
// returns "invalid inputs"

format12HourTime(-5, -30)
// returns "invalid inputs"
```

## If you get stuck

Google, study, ask AI to explain, etc...