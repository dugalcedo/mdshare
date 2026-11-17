# Names, `if`, loops, and indentation

1. Set up your file and run it
2. Good variable names
3. `if`
4. Loops
5. Indentation
6. Exercises
7. Codewars

Some questions have hidden answers. Click to open them:

<details>
<summary>Click here</summary>

That's it. Try to answer **before** you open it.

</details>

---

## Terminal vs. VSCode

You'll type in two different places. They are **not** the same.

| | Terminal | VSCode editor (your `.py` file) |
|---|---|---|
| What it is | Where you give commands to the computer | Where you write your Python program |
| What you type | `pwd`, `ls`, `cd`, `python3 ...` | Python: `name = "Laura"`, `if`, `for`, `print()` |
| When it runs | When you press **Enter** | When you **save** and then run the file from the terminal |

In this lesson, every code box has a label above it:

🖥️ **TERMINAL** means type it in the terminal and press Enter.

📝 **VSCODE** means write it in your `.py` file.

Common mix-ups:

- If you type Python (like `print("hi")`) in the terminal, you'll get an error like `command not found` or `syntax error near unexpected token`. That's Python code, so it goes in the file.
- If you write `python3 17_tue_exercises.py` inside your `.py` file, Python will give you a `SyntaxError`. That's a terminal command.
- If your terminal shows `>>>`, you're **inside Python** (the REPL), not in the normal terminal. Type `exit()` and press Enter to get out.

To open a terminal in VSCode: menu **Terminal → New Terminal**.

---

## Lesson 1: Where am I? `pwd` and `cd`

The terminal is always "standing" inside one folder. That folder is called the **present working directory**.

### `pwd`: where am I?

🖥️ **TERMINAL**
```
pwd
```

It prints something like:

```
/Users/laura/python
```

That means you're inside the `python` folder.

### `ls`: what's in here?

🖥️ **TERMINAL**
```
ls
```

It lists the files and folders where you are standing.

### `cd`: move to another folder

Go **into** a folder:

🖥️ **TERMINAL**
```
cd 2026_11
```

Go **back up** one folder:

🖥️ **TERMINAL**
```
cd ..
```

> 💡 **Tab completion:** type `cd 20` and press **Tab**. The terminal finishes the name for you. Fewer typos.

### Why this matters

When you run `python3 17_tue_exercises.py`, the terminal looks for that file **in the folder you're standing in**. If you're in the wrong folder, you get:

```
python3: can't open file '17_tue_exercises.py': [Errno 2] No such file or directory
```

That doesn't mean your file is gone. It means you're in the wrong folder. Use `pwd` and `ls` to check, then `cd` to the right one.

### Q&A

**1.** You type `ls` and see `2026_10  2026_11  notes.txt`. How do you get into the `2026_11` folder?

<details>
<summary>Answer</summary>

`cd 2026_11`

</details>

<br>

**2.** You're inside `2026_11`. How do you go back to the folder that contains it?

<details>
<summary>Answer</summary>

`cd ..`

</details>

<br>

**3.** You get `No such file or directory` when running your file. What two commands do you use first to find out what's wrong?

<details>
<summary>Answer</summary>

`pwd` (where am I?) and `ls` (what files are here?). If your file isn't in the `ls` list, you're in the wrong folder.

</details>

---

## Lesson 2: Make the file and run it

### Step 1: Make the file

In VSCode, in the Explorer on the left, right-click your **`2026_11`** folder → **New File** → name it:

```
17_tue_exercises.py
```

Make sure it ends with `.py`.

### Step 2: Write something in it

📝 **VSCODE**
```python
print("Hello, Laura!")
```

**Save** the file (**Ctrl+S**, or **Cmd+S** on Mac). If there's a dot ● on the file's tab, it isn't saved yet.

### Step 3: Go to the folder in the terminal

🖥️ **TERMINAL**
```
cd 2026_11
ls
```

You should see `17_tue_exercises.py` in the list. (If `cd 2026_11` fails, use `pwd` and `ls` to figure out where you are.)

### Step 4: Run it

🖥️ **TERMINAL**
```
python3 17_tue_exercises.py
```

You should see:

```
Hello, Laura!
```

> ⚠️ If you change your code and nothing changes when you run it, you probably didn't save.

> 💡 Press the **↑** key in the terminal to bring back the last command. You don't need to type `python3 17_tue_exercises.py` every time.

### One file for everything

Write all of these exercises in this one file. When you start a new exercise, you can either delete the old code, or **comment it out**: select the lines and press **Ctrl+/** (**Cmd+/** on Mac). Each line gets a `#` in front and Python ignores it.

---

## Lesson 3: Good variable names

The computer doesn't care what you name your variables. **People do.** That includes you, two weeks from now. A good name tells you what's in the box without having to go look.

### Rules (break these and you get an error)

- Only letters, numbers, and `_`.
- Can't start with a number: `player1` ✅, `1player` ❌
- No spaces: `first_name` ✅, `first name` ❌
- Can't be a Python keyword: `if`, `for`, `while`, `True`, `class`...
- Capital letters matter: `age` and `Age` are **two different** variables.

### Good habits (no error, but do it anyway)

**1. Use snake_case.** All lowercase, words joined with `_`.

```python
player_age = 30    # ✅ snake_case, the Python style
playerAge = 30     # ⚠️ works, but that's the JavaScript style
playerage = 30     # ⚠️ hard to read
PLAYER_AGE = 30    # ⚠️ ALL CAPS means "this never changes"
```

**2. The name says what it is.** If you need a comment to explain a variable, the name isn't good enough.

```python
d = 7                  # ❌ d for what?
days = 7               # 🙂 better
days_until_trip = 7    # ✅ very clear
```

**3. No single letters or weird abbreviations.** A few more letters cost nothing.

```python
cn = "Ana"              # ❌
cust_nm = "Ana"         # ❌
customer_name = "Ana"   # ✅
```

**4. True/False variables sound like a yes/no question.** Start them with `is_`, `has_`, `can_`...

```python
open = True           # ❌ is it an action? a question?
is_open = True        # ✅ "is it open?" yes/no
has_ticket = False    # ✅
can_vote = True       # ✅
```

**5. Lists get plural names.** One thing is singular, many things are plural.

```python
fruit = ["apple", "pear"]    # ❌ there are two!
fruits = ["apple", "pear"]   # ✅
```

**6. Pick one language.** If your code is in English, don't mix in `edad` or `nombre`.

---

## Q&A: Name it

For each one, think of a good name. **Then** open the answer and compare.

**1.** A user's age.

<details>
<summary>Answer</summary>

✅ Good: `age`, `user_age`

❌ Bad:
- `a`, `x` → say nothing
- `num` → number of what?
- `userAge` → works, but that's not Python style
- `the_age_of_the_user` → too long

</details>

<br>

**2.** The name of a city.

<details>
<summary>Answer</summary>

✅ Good: `city`, `city_name`

❌ Bad:
- `c`, `cn` → single letters and abbreviations
- `text`, `string` → says what type it is, not what it is
- `City` → capital letter at the start isn't Python style for variables

</details>

<br>

**3.** Whether the shop is open right now (`True` or `False`).

<details>
<summary>Answer</summary>

✅ Good: `is_open`, `is_shop_open`

❌ Bad:
- `open` → doesn't sound like a question (and `open` is already a Python function!)
- `shop` → sounds like it holds a shop, not a yes/no
- `status` → status of what? and is it True/False or text?

</details>

<br>

**4.** A list of your friends' names.

<details>
<summary>Answer</summary>

✅ Good: `friends`, `friend_names`

❌ Bad:
- `friend` → singular, but it holds many
- `list` → that's a Python word, and it says nothing
- `f` → single letter

</details>

<br>

**5.** The price of a coffee, in euros.

<details>
<summary>Answer</summary>

✅ Good: `coffee_price`, `price_in_euros`

❌ Bad:
- `p` → single letter
- `price coffee` → spaces aren't allowed (error!)
- `2coffee` → can't start with a number (error!)

</details>

<br>

**6.** Whether a user has paid.

<details>
<summary>Answer</summary>

✅ Good: `has_paid`, `is_paid`

❌ Bad:
- `paid` → okay-ish, but `has_paid` reads like a question
- `payment` → sounds like it holds an amount or a payment, not True/False

</details>

<br>

**7.** Which of these cause an **error**, and which just have bad style?

```python
1st_place = "Ana"
first place = "Ana"
firstPlace = "Ana"
for = "Ana"
x = "Ana"
```

<details>
<summary>Answer</summary>

- `1st_place` → ❌ **error**, starts with a number
- `first place` → ❌ **error**, has a space
- `firstPlace` → ⚠️ works, bad style (use `first_place`)
- `for` → ❌ **error**, `for` is a Python keyword
- `x` → ⚠️ works, but says nothing

</details>

---

## Exercise 1: Fix the names

This program works, but the names are terrible. Copy it into your file and change every name to a good one. It should still print the same thing.

📝 **VSCODE**
```python
x = "Laura"
n = 28
h = 1.65
b = True
num = 2
s = "Valencia"

print(x, "is", n, "years old and", h, "m tall.")
print(x, "has", num, "siblings and lives in", s)
print("Driver's license?", b)
```

### Trick: rename with VSCode

Instead of changing each name by hand (and forgetting one), right-click the name where it's created, choose **Rename Symbol** (or press **F2**), type the new name, press **Enter**. VSCode changes it everywhere.

<details>
<summary>See a solution</summary>

```python
name = "Laura"
age = 28
height_in_meters = 1.65
has_drivers_license = True
sibling_count = 2
city = "Valencia"

print(name, "is", age, "years old and", height_in_meters, "m tall.")
print(name, "has", sibling_count, "siblings and lives in", city)
print("Driver's license?", has_drivers_license)
```

</details>

## Exercise 2: Make your own

In your file, make variables for these (you pick the values), then `print` them all:

1. Your favorite food
2. How many pets you have
3. Whether you like coffee
4. The temperature outside today
5. A list of three colors you like

<details>
<summary>Example</summary>

```python
favorite_food = "paella"
pet_count = 1
likes_coffee = True
temperature_outside = 18.5
favorite_colors = ["green", "blue", "yellow"]

print(favorite_food)
print(pet_count)
print(likes_coffee)
print(temperature_outside)
print(favorite_colors)
```

</details>

---

## Lesson 4: `if`

`if` lets your program **choose**. "If this is true, do this."

📝 **VSCODE**
```python
age = 20

if age >= 18:
    print("You can vote.")
```

Look at the parts:

| Part | Meaning |
|---|---|
| `if` | "check this" |
| `age >= 18` | the question. It's either `True` or `False` |
| `:` | "here comes the block". **Don't forget it!** |
| 4 spaces, then `print(...)` | the **block**. It only runs if the question is `True` |

### `else`: otherwise

📝 **VSCODE**
```python
age = 15

if age >= 18:
    print("You can vote.")
else:
    print("You can't vote yet.")
```

Only **one** of the two blocks runs. Never both.

### `elif`: more than two choices

`elif` means "else, if...".

📝 **VSCODE**
```python
temperature = 25

if temperature > 30:
    print("Hot!")
elif temperature > 15:
    print("Nice.")
else:
    print("Cold.")
```

Python checks from top to bottom and runs the **first** block that's `True`. Then it skips the rest.

### Comparisons

| Code | Meaning |
|---|---|
| `==` | is equal to |
| `!=` | is not equal to |
| `>` / `<` | bigger / smaller |
| `>=` / `<=` | bigger or equal / smaller or equal |

> ⚠️ `=` puts a value in a box. `==` asks "are these equal?". In an `if`, you almost always want `==`.

### `and`, `or`, `not`

```python
if age >= 18 and has_ticket:
    print("Come in!")

if day == "Saturday" or day == "Sunday":
    print("Weekend!")

if not is_raining:
    print("No umbrella needed.")
```

### Q&A

**1.** What does this print?

```python
score = 75

if score >= 90:
    print("A")
elif score >= 70:
    print("B")
elif score >= 50:
    print("C")
else:
    print("F")
```

<details>
<summary>Answer</summary>

`B`

`75 >= 90` is False. `75 >= 70` is True, so it prints `B` and **skips everything else**, even though `75 >= 50` is also true.

</details>

<br>

**2.** What's wrong here?

```python
name = "Laura"

if name = "Laura":
    print("Hi Laura!")
```

<details>
<summary>Answer</summary>

`=` should be `==`. `=` means "put this in the box", `==` means "are these equal?". Python gives a `SyntaxError`.

</details>

<br>

**3.** What's wrong here?

```python
if age > 18
    print("Adult")
```

<details>
<summary>Answer</summary>

Missing `:` at the end of the `if` line.

</details>

---

## Lesson 5: Loops

A loop **repeats** a block of code.

### `for` with `range()`

📝 **VSCODE**
```python
for number in range(5):
    print(number)
```

Prints:

```
0
1
2
3
4
```

`range(5)` gives `0, 1, 2, 3, 4`. Five numbers, **starting at 0**, and **5 is not included**.

You can choose where it starts:

```python
for number in range(1, 6):
    print(number)
```

Prints `1` to `5`. (Again, the end number `6` is not included.)

### `for` with a list

📝 **VSCODE**
```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

Each time the loop runs, `fruit` holds the next item. First `"apple"`, then `"banana"`, then `"cherry"`.

> 💡 Name tip: the list is plural (`fruits`), the loop variable is singular (`fruit`). "For each fruit in fruits."

### `if` inside a loop

📝 **VSCODE**
```python
for number in range(1, 11):
    if number == 5:
        print("Five!")
    else:
        print(number)
```

### `while`: repeat while something is true

📝 **VSCODE**
```python
count = 3

while count > 0:
    print(count)
    count = count - 1

print("Go!")
```

Prints `3`, `2`, `1`, `Go!`.

> ⚠️ If the question never becomes `False`, the loop runs **forever**. If that happens, click the terminal and press **Ctrl+C** to stop it.

### Q&A

**1.** What does this print?

```python
for number in range(3):
    print("hi")
```

<details>
<summary>Answer</summary>

```
hi
hi
hi
```

The loop runs 3 times. It doesn't use `number`, and that's fine.

</details>

<br>

**2.** What numbers does `range(2, 5)` give?

<details>
<summary>Answer</summary>

`2, 3, 4`. Starts at 2, stops **before** 5.

</details>

<br>

**3.** What's wrong with this loop?

```python
count = 1

while count < 5:
    print(count)
```

<details>
<summary>Answer</summary>

`count` never changes, so `count < 5` is always True. It runs forever. Add `count = count + 1` inside the loop.

</details>

---

## Lesson 6: Indentation

**Indentation** is the space at the start of a line. In Python, it's **not decoration**. It tells Python which lines belong to which block.

### The rule

1. A line that ends with `:` (like `if`, `else`, `for`, `while`) starts a block.
2. The lines **in** the block are pushed right by **4 spaces**.
3. The block ends when a line goes back left.

📝 **VSCODE**
```python
if is_raining:
    print("Take an umbrella.")    # in the if block
    print("Wear boots.")          # in the if block
print("Have a nice day!")         # NOT in the block, always runs
```

Picture it like boxes:

```
if is_raining:
┌─────────────────────────────┐
│ print("Take an umbrella.")  │  ← only runs if is_raining
│ print("Wear boots.")        │  ← only runs if is_raining
└─────────────────────────────┘
print("Have a nice day!")        ← always runs
```

### Blocks inside blocks

When you put an `if` inside a `for`, the `if`'s block gets **8 spaces** (4 + 4):

```python
for number in range(1, 6):
    if number == 3:
        print("three!")
    print(number)
print("done")
```

```
for number in range(1, 6):
┌──────────────────────────────┐
│ if number == 3:              │
│ ┌──────────────────────────┐ │
│ │ print("three!")          │ │  ← in the if, in the loop
│ └──────────────────────────┘ │
│ print(number)                │  ← in the loop, NOT in the if
└──────────────────────────────┘
print("done")                     ← not in anything, runs once at the end
```

### VSCode helps you

- Press **Tab** to indent. VSCode puts in 4 spaces.
- Press **Shift+Tab** to go back left.
- Select several lines and press **Tab** / **Shift+Tab** to move them all at once.
- After you type a line ending with `:` and press **Enter**, VSCode indents the next line for you.

### Indentation errors

**Forgot to indent:**

```python
if age >= 18:
print("Adult")
```
```
IndentationError: expected an indented block after 'if' statement on line 1
```

**Indented for no reason:**

```python
name = "Laura"
    print(name)
```
```
IndentationError: unexpected indent
```

**Spaces don't line up:**

```python
if age >= 18:
    print("Adult")
  print("Welcome")
```
```
IndentationError: unindent does not match any outer indentation level
```

### The sneaky one: no error, wrong result

Sometimes bad indentation **doesn't** cause an error. The program just does the wrong thing.

```python
for number in range(3):
    print(number)
    print("done")
```

```
0
done
1
done
2
done
```

`print("done")` is **inside** the loop, so it runs 3 times. To print it once at the end, move it left:

```python
for number in range(3):
    print(number)
print("done")
```

```
0
1
2
done
```

---

## Q&A: Indentation

**1.** What does this print when `is_raining = False`?

```python
is_raining = False

if is_raining:
    print("Take an umbrella.")
    print("Wear boots.")
print("Have a nice day!")
```

<details>
<summary>Answer</summary>

```
Have a nice day!
```

The first two prints are in the `if` block, which doesn't run. The last one is outside, so it always runs.

</details>

<br>

**2.** Same question, but now the last line is indented. What does it print?

```python
is_raining = False

if is_raining:
    print("Take an umbrella.")
    print("Wear boots.")
    print("Have a nice day!")
```

<details>
<summary>Answer</summary>

Nothing at all. All three lines are in the `if` block now.

</details>

<br>

**3.** Will this give an error? If yes, which line?

```python
for fruit in ["apple", "pear"]:
print(fruit)
```

<details>
<summary>Answer</summary>

Yes, line 2: `IndentationError: expected an indented block`. The `print` needs 4 spaces.

</details>

<br>

**4.** Will this give an error? If yes, which line?

```python
age = 20
if age >= 18:
    print("Adult")
    print("Can vote")
   print("Welcome")
```

<details>
<summary>Answer</summary>

Yes, line 5. It has 3 spaces, but the block above has 4 and the `if` has 0. Python doesn't know which block it belongs to.

</details>

<br>

**5.** How many times does `"Bye"` get printed?

```python
for number in range(4):
    print(number)
print("Bye")
```

<details>
<summary>Answer</summary>

Once. It's outside the loop.

</details>

<br>

**6.** How many times does `"Bye"` get printed now?

```python
for number in range(4):
    print(number)
    print("Bye")
```

<details>
<summary>Answer</summary>

4 times. It's inside the loop.

</details>

<br>

**7.** What does this print?

```python
for number in range(1, 5):
    if number == 2:
        print("two")
    print(number)
```

<details>
<summary>Answer</summary>

```
1
two
2
3
4
```

`print("two")` is inside the `if`, so it only runs when `number` is 2. `print(number)` is in the loop but **not** in the `if`, so it runs every time.

</details>

<br>

**8.** And this one? (Only one line moved.)

```python
for number in range(1, 5):
    if number == 2:
        print("two")
        print(number)
```

<details>
<summary>Answer</summary>

```
two
2
```

Now `print(number)` is inside the `if` too, so it only runs when `number` is 2.

</details>

---

## Exercise 3: Fix the indentation

Copy each one into your file, run it, read the error, and fix it. Make it print what's written under it.

**a)**
```python
temperature = 35
if temperature > 30:
print("It's hot!")
```
Should print: `It's hot!`

<details>
<summary>Solution</summary>

```python
temperature = 35
if temperature > 30:
    print("It's hot!")
```

</details>

<br>

**b)**
```python
name = "Laura"
  print("Hello")
print(name)
```
Should print: `Hello` then `Laura`

<details>
<summary>Solution</summary>

```python
name = "Laura"
print("Hello")
print(name)
```

</details>

<br>

**c)**
```python
for color in ["red", "green", "blue"]:
    print(color)
  print("---")
```
Should print each color, each followed by `---`.

<details>
<summary>Solution</summary>

```python
for color in ["red", "green", "blue"]:
    print(color)
    print("---")
```

</details>

<br>

**d)** No error here, but the result is wrong.
```python
for number in range(1, 4):
    print(number)
    print("Liftoff!")
```
Should print: `1`, `2`, `3`, `Liftoff!` (only **one** liftoff).

<details>
<summary>Solution</summary>

```python
for number in range(1, 4):
    print(number)
print("Liftoff!")
```

</details>

<br>

**e)**
```python
for number in range(1, 7):
if number == 4:
print("four!")
else:
print(number)
```
Should print: `1`, `2`, `3`, `four!`, `5`, `6`

<details>
<summary>Solution</summary>

```python
for number in range(1, 7):
    if number == 4:
        print("four!")
    else:
        print(number)
```

</details>

---

## Exercise 4: `if`

Write each one in your file. Change the value at the top a few times and run it again to test every branch.

**a)** Make a variable `age`. If it's 18 or more, print `"Adult"`. Otherwise print `"Minor"`.

**b)** Make a variable `temperature`. Print:
- `"Hot"` if it's above 30
- `"Warm"` if it's above 20
- `"Cool"` if it's above 10
- `"Cold"` otherwise

**c)** Make a variable `password`. If it's `"banana123"`, print `"Welcome!"`. Otherwise print `"Wrong password."`.

**d)** Make two variables: `has_ticket` and `age`. Print `"Come in"` only if they have a ticket **and** are 18 or over. Otherwise print `"Sorry"`.

**e)** Make a variable `day`. If it's `"Saturday"` or `"Sunday"`, print `"Weekend!"`. Otherwise print `"Work day."`.

<details>
<summary>Solutions</summary>

```python
# a
age = 20
if age >= 18:
    print("Adult")
else:
    print("Minor")

# b
temperature = 25
if temperature > 30:
    print("Hot")
elif temperature > 20:
    print("Warm")
elif temperature > 10:
    print("Cool")
else:
    print("Cold")

# c
password = "banana123"
if password == "banana123":
    print("Welcome!")
else:
    print("Wrong password.")

# d
has_ticket = True
age = 20
if has_ticket and age >= 18:
    print("Come in")
else:
    print("Sorry")

# e
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("Weekend!")
else:
    print("Work day.")
```

</details>

---

## Exercise 5: Loops

**a)** Print the numbers 1 to 10.

**b)** Print `"I love Python"` 5 times.

**c)** Make a list of 4 cities. Loop over it and print each one.

**d)** Make a list of 4 cities. Loop over it and print `"I want to visit ___"` for each one.

**e)** Count down from 10 to 1 with a `while` loop, then print `"Happy New Year!"` **once**.

<details>
<summary>Solutions</summary>

```python
# a
for number in range(1, 11):
    print(number)

# b
for time in range(5):
    print("I love Python")

# c
cities = ["Paris", "Rome", "Tokyo", "Lima"]
for city in cities:
    print(city)

# d
cities = ["Paris", "Rome", "Tokyo", "Lima"]
for city in cities:
    print("I want to visit", city)

# e
count = 10
while count > 0:
    print(count)
    count = count - 1
print("Happy New Year!")
```

</details>

---

## Exercise 6: Loops + `if`

**a)** Loop from 1 to 10. For each number, print `"even"` if it's even and `"odd"` if it's odd.

> 💡 `number % 2 == 0` is True when `number` is even. `%` gives the remainder of a division.

**b)** Loop from 1 to 20. Only print the numbers bigger than 15.

**c)** Make a list of names. Loop over it. If the name is `"Laura"`, print `"That's me!"`. Otherwise just print the name.

**d)** Make a list of temperatures, like `[12, 31, 25, 8, 35]`. For each one, print `"hot"` if it's over 30, otherwise print `"ok"`.

**e)** FizzBuzz! Loop from 1 to 15. For each number:
- if it's divisible by 3 **and** 5, print `"FizzBuzz"`
- if it's divisible by 3, print `"Fizz"`
- if it's divisible by 5, print `"Buzz"`
- otherwise, print the number

> 💡 "Divisible by 3" is `number % 3 == 0`. Think about which check has to come **first**.

<details>
<summary>Solutions</summary>

```python
# a
for number in range(1, 11):
    if number % 2 == 0:
        print(number, "even")
    else:
        print(number, "odd")

# b
for number in range(1, 21):
    if number > 15:
        print(number)

# c
names = ["Ana", "Laura", "Pedro"]
for name in names:
    if name == "Laura":
        print("That's me!")
    else:
        print(name)

# d
temperatures = [12, 31, 25, 8, 35]
for temperature in temperatures:
    if temperature > 30:
        print(temperature, "hot")
    else:
        print(temperature, "ok")

# e
for number in range(1, 16):
    if number % 3 == 0 and number % 5 == 0:
        print("FizzBuzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print(number)
```

The FizzBuzz check for both has to come first. If `% 3` came first, `15` would print `"Fizz"` and skip the rest.

</details>

---

## Codewars

Codewars always gives you a function that's already started, like this:

```python
def even_or_odd(number):
    # your code goes here
```

You don't need to understand functions yet. Just know two things:

1. Your code goes **inside** it, so it's indented 4 spaces (just like an `if` block).
2. Instead of `print`, you use `return` to give back the answer. For example: `return "Even"`.

Do them in order:

1. [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)
2. [Convert boolean values to strings 'Yes' or 'No'](https://www.codewars.com/kata/53369039d7ab3ac506000467)
3. [Grasshopper - Personalized Message](https://www.codewars.com/kata/5772da22b89313a4d50012f7)
4. [Is n divisible by x and y?](https://www.codewars.com/kata/5545f109004975ea66000086)
5. [L1: Set Alarm](https://www.codewars.com/kata/568dcc3c7f12767a62000038)
6. [Will you make it?](https://www.codewars.com/kata/5861d28f124b35723e00005e)
7. [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
8. [Grasshopper - Grade book](https://www.codewars.com/kata/55cbd4ba903825f7970000f5)
9. [You only need one - Beginner](https://www.codewars.com/kata/57cc975ed542d3148f00015b) (use a loop!)
10. [Find the first non-consecutive number](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144) (harder, loop + `if`)
