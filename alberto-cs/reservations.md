# Challenge: Restaurant Host 🍝

You're the host *(es: anfitrión)* at a restaurant. Build a console app that lets you take reservations *(es: reservas)*, see them, and cancel them, using a menu.

## What you'll practice

- Reading input with `Console.ReadLine()`
- Turning text into numbers safely with `int.TryParse`
- Validating input: asking again until the answer is good
- `while` loops, `if`/`else` and `switch`
- Writing methods **and calling them**, including methods that call other methods
- A simple class (no inheritance!) and a `List`

There are short lessons first, then the challenge. Read the lessons before you start, and come back to them when you get stuck.

---

# Lessons

## Lesson 1: Printing and reading

`Console.WriteLine` prints text and moves to a new line. `Console.Write` prints text and **stays** on the same line, which is nice for questions.

`Console.ReadLine()` waits for the user to type something and press Enter. It always gives you back a `string`.

```csharp
Console.Write("What's your name? ");
string name = Console.ReadLine() ?? "";

Console.WriteLine("Hello, " + name + "!");
```

What's the `?? ""` for? In rare cases `ReadLine()` can return `null` (nothing at all). `?? ""` means "if it's null, use an empty string instead". It also makes the yellow warning in your editor go away.

You can also put variables inside a string with `$` and `{ }`. This is called **string interpolation**:

```csharp
int age = 30;
Console.WriteLine($"{name} is {age} years old.");
```

📖 More on this:
- [W3Schools: C# User Input](https://www.w3schools.com/cs/cs_user_input.php)
- [W3Schools: C# Output](https://www.w3schools.com/cs/cs_output.php)
- [W3Schools: C# String Interpolation](https://www.w3schools.com/cs/cs_strings_interpolation.php)

## Lesson 2: Turning text into numbers

`ReadLine()` gives you a string, even if the user typed `4`. To do math with it, you need an `int`.

The quick way is `Convert.ToInt32`, but it **crashes** your program if the user types something like `four` or `abc`:

```csharp
string text = Console.ReadLine() ?? "";
int number = Convert.ToInt32(text); // 💥 crashes on "abc"
```

The safe way is `int.TryParse`. It **tries** to convert, and returns `true` or `false` to tell you if it worked:

```csharp
string text = Console.ReadLine() ?? "";

if (int.TryParse(text, out int number))
{
    Console.WriteLine($"You typed the number {number}");
}
else
{
    Console.WriteLine("That's not a whole number.");
}
```

`out int number` creates a new variable called `number`. If the conversion worked, the number is inside it.

📖 More on this:
- [W3Schools: C# Type Casting](https://www.w3schools.com/cs/cs_type_casting.php) (see "Type Conversion Methods")
- [Microsoft: int.TryParse examples](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/how-to-convert-a-string-to-a-number)

## Lesson 3: Conditions

`if` / `else if` / `else` let your program make decisions. Combine conditions with `&&` (and) and `||` (or).

```csharp
if (number < 1 || number > 8)
{
    Console.WriteLine("Must be between 1 and 8.");
}
else
{
    Console.WriteLine("OK!");
}
```

To check if a string is empty or only spaces, use `string.IsNullOrWhiteSpace`:

```csharp
if (string.IsNullOrWhiteSpace(name))
{
    Console.WriteLine("Name can't be empty.");
}
```

📖 More on this:
- [W3Schools: C# If...Else](https://www.w3schools.com/cs/cs_conditions.php)
- [W3Schools: C# Operators](https://www.w3schools.com/cs/cs_operators.php)

## Lesson 4: Loops that ask again

A `while` loop repeats as long as its condition is `true`. This is perfect for "keep asking until the answer is valid".

```csharp
while (true)
{
    Console.Write("Pick a number from 1 to 10: ");
    string text = Console.ReadLine() ?? "";

    if (int.TryParse(text, out int number) && number >= 1 && number <= 10)
    {
        Console.WriteLine($"Thanks! You picked {number}.");
        break; // leave the loop
    }

    Console.WriteLine("Try again.");
}
```

`while (true)` loops forever, so you need `break` to get out. You can also use `return` to leave the whole method (see Lesson 6).

📖 More on this:
- [W3Schools: C# While Loop](https://www.w3schools.com/cs/cs_while_loop.php)
- [W3Schools: C# Break and Continue](https://www.w3schools.com/cs/cs_break.php)

## Lesson 5: Menus with `switch`

When one variable can have many different values, `switch` is cleaner than lots of `else if`.

```csharp
Console.Write("Choose 1, 2 or 3: ");
string choice = Console.ReadLine() ?? "";

switch (choice)
{
    case "1":
        Console.WriteLine("You chose pizza.");
        break;
    case "2":
        Console.WriteLine("You chose pasta.");
        break;
    case "3":
        Console.WriteLine("You chose salad.");
        break;
    default:
        Console.WriteLine("That's not on the menu.");
        break;
}
```

Notice the cases are strings (`"1"`, not `1`), because `ReadLine()` gives you a string. That way you don't even need `TryParse` for the menu.

`default` runs when nothing else matched. Every case needs a `break` at the end.

📖 More on this:
- [W3Schools: C# Switch](https://www.w3schools.com/cs/cs_switch.php)

## Lesson 6: Defining methods vs. calling methods

This is the most important lesson for this challenge.

**Defining** a method is writing the recipe. Nothing happens yet:

```csharp
int Double(int x)
{
    return x * 2;
}
```

**Calling** a method is actually using the recipe. You write its name with `( )`:

```csharp
int result = Double(5);       // result is 10
Console.WriteLine(Double(7)); // prints 14
```

If you define a method and never call it, it never runs!

### Return values

A method with a type like `int` or `string` before its name must `return` a value. The code that called it **gets that value back** and can store it in a variable.

A method with `void` doesn't return anything. It just *does* something, like printing.

```csharp
void SayHello(string name)
{
    Console.WriteLine($"Hello, {name}!");
}

string AskName()
{
    Console.Write("Name: ");
    return Console.ReadLine() ?? "";
}

string name = AskName(); // AskName runs, and its answer goes into name
SayHello(name);          // SayHello runs and prints
```

### Methods calling methods

Methods can call other methods. This lets you split a big job into small pieces:

```csharp
void Greet()
{
    string name = AskName(); // Greet calls AskName...
    SayHello(name);          // ...and then calls SayHello
}
```

In `Program.cs`, you can write methods like these right in the file, below your main code. (They're called *local functions*.)

📖 More on this:
- [W3Schools: C# Methods](https://www.w3schools.com/cs/cs_methods.php)
- [W3Schools: C# Method Parameters](https://www.w3schools.com/cs/cs_method_parameters.php)
- [W3Schools: C# Return Values](https://www.w3schools.com/cs/cs_method_parameters_return.php)

## Lesson 7: A simple class and a List

A class is a blueprint for an object that groups some data together. No inheritance needed:

```csharp
public class Dish
{
    public string Name { get; set; }
    public double Price { get; set; }

    public Dish(string name, double price)
    {
        Name = name;
        Price = price;
    }

    public string Describe()
    {
        return $"{Name}: {Price} kr";
    }
}
```

A `List` holds many objects, and can grow and shrink:

```csharp
List<Dish> menu = new List<Dish>();

menu.Add(new Dish("Pizza", 120));
menu.Add(new Dish("Pasta", 110));

Console.WriteLine(menu.Count); // 2

foreach (Dish dish in menu)
{
    Console.WriteLine(dish.Describe());
}

menu.Remove(menu[0]); // removes the pizza
```

📖 More on this:
- [W3Schools: C# Classes and Objects](https://www.w3schools.com/cs/cs_classes.php)
- [W3Schools: C# Constructors](https://www.w3schools.com/cs/cs_constructors.php)
- [W3Schools: C# Foreach Loop](https://www.w3schools.com/cs/cs_foreach_loop.php)
- [Microsoft: Lists tutorial](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/list-collection)

---

# The Challenge

## Setup

```
dotnet new console -n RestaurantHost
```

You'll have two files:

- `Reservation.cs` for the `Reservation` class
- `Program.cs` for the menu and all your methods

## Part 1: The `Reservation` class

In `Reservation.cs`, make a class with:

- Three properties: `Name` (string), `PartySize` (int) and `Hour` (int)
- A constructor that takes all three
- A method `Describe()` that returns a string like `Maria, party of 4, at 19:00`

That's it. Keep it simple, the validation happens in `Program.cs`.

## Part 2: The rules

The restaurant has some rules. Your program must check every one of them, and keep asking until the host types something valid.

| Input | Rule | If it's wrong, print |
|---|---|---|
| Name | Can't be empty or only spaces | `Name can't be empty.` |
| Party size | A whole number from 1 to 8 | `Party size must be a number from 1 to 8.` |
| Hour | A whole number from 17 to 22 (5 pm to 10 pm, 24-hour clock) | `We take reservations from 17 to 22.` |
| Menu choice | 1, 2, 3 or 4 | `Please choose 1, 2, 3 or 4.` |

The program should **never crash**, no matter what the host types.

## Part 3: The methods

Write these methods in `Program.cs`. Pay attention to the **Calls** column: that's where you practice calling methods.

| Method | Returns | What it does | Calls |
|---|---|---|---|
| `ShowMenu()` | `void` | Prints the menu options | |
| `ReadName()` | `string` | Asks for a name until it's valid, then returns it | |
| `ReadPartySize()` | `int` | Asks for a party size until it's valid, then returns it | |
| `ReadHour()` | `int` | Asks for an hour until it's valid, then returns it | |
| `AddReservation()` | `void` | Creates a new `Reservation`, adds it to the list, prints a confirmation | `ReadName()`, `ReadPartySize()`, `ReadHour()` |
| `TotalGuests()` | `int` | Adds up the party sizes of all reservations and returns the total | |
| `ShowReservations()` | `void` | Prints every reservation with a number in front, then the total number of guests. If there are none, prints `No reservations yet.` | `TotalGuests()`, and `Describe()` on each reservation |
| `CancelReservation()` | `void` | Asks for a name, finds that reservation and removes it. If there isn't one, prints `No reservation found for Maria.` | `ReadName()` |

Here's a picture of who calls whom:

```
main loop
├── ShowMenu()
├── AddReservation()
│   ├── ReadName()
│   ├── ReadPartySize()
│   └── ReadHour()
├── ShowReservations()
│   ├── TotalGuests()
│   └── reservation.Describe()
└── CancelReservation()
    └── ReadName()
```

Notice that `ReadName()` is used in two places. That's the point of methods: write it once, call it as many times as you want.

## Part 4: The main loop

At the top of `Program.cs`:

1. Create an empty `List<Reservation>`.
2. Print a welcome message.
3. Start a loop that:
   - calls `ShowMenu()`
   - reads the host's choice
   - uses a `switch` to call the right method
   - stops the loop when the host chooses `4`
4. Print a goodbye message after the loop.

The menu:

```
1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
```

## Example session

The text after `>` or `:` is what the host typed. Your messages don't have to match word for word.

```
Welcome to Trattoria Alberto!

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 2
No reservations yet.

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 1
Name:
Name can't be empty.
Name: Maria
Party size: four
Party size must be a number from 1 to 8.
Party size: 4
Hour (17-22): 19
Reserved: Maria, party of 4, at 19:00

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 1
Name: Jonas
Party size: 12
Party size must be a number from 1 to 8.
Party size: 2
Hour (17-22): 3
We take reservations from 17 to 22.
Hour (17-22): 20
Reserved: Jonas, party of 2, at 20:00

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 2
1. Maria, party of 4, at 19:00
2. Jonas, party of 2, at 20:00
Total guests: 6

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 3
Name: Pedro
No reservation found for Pedro.

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 3
Name: maria
Cancelled: Maria, party of 4, at 19:00

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 7
Please choose 1, 2, 3 or 4.

1. Add a reservation
2. Show reservations
3. Cancel a reservation
4. Quit
> 4
Goodbye!
```

Notice that cancelling `maria` (lowercase) still found `Maria`.

## Hints (only if you're stuck)

<details>
<summary>Click to show hints</summary>

- `ReadPartySize()` looks a lot like the loop in Lesson 4. Instead of `break`, you can `return number;` directly from inside the loop.
- `.Trim()` removes spaces from the start and end of a string: `"  Maria ".Trim()` gives `"Maria"`.
- Comparing names without caring about upper/lowercase:
  ```csharp
  if (r.Name.ToLower() == name.ToLower())
  ```
- To cancel: loop over the list, find the matching reservation, remember it in a variable, and remove it **after** the loop. (Removing from a list while you `foreach` over it causes an error.)
- To number the reservations in `ShowReservations()`, use a regular `for` loop: `reservations[i]` is the reservation and `i + 1` is its number.
- For the main loop, a `bool running = true;` variable works well: `while (running) { ... }` and set it to `false` in case `"4"`.
- If your methods can't see the list, make sure the list is created **above** the loop, at the top of `Program.cs`.

</details>

## Stretch goals

1. **Full hours:** the restaurant only has room for 20 guests per hour. Write a method `int GuestsAt(int hour)` that returns how many guests are already booked at that hour. Call it from `AddReservation()` and refuse the booking if it would go over 20.
2. **No double bookings:** don't allow two reservations with the same name. Write a method `bool NameIsTaken(string name)` and call it.
3. **Option 5, Find:** add a menu option that asks for a name and shows that person's reservation. Can you reuse `ReadName()`?
4. **Sorted list:** make `ShowReservations()` print the reservations in order of hour, earliest first.
5. **Half hours:** allow times like `19:30`. Hint: `"19:30".Split(':')` gives you `["19", "30"]`.
