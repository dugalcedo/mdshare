# Challenge: Little Library 📚

Build a small library system for books, films and audiobooks.

## What you'll practice

- Namespaces and `using`
- Access modifiers: `public`, `private`, `protected`
- Constructors, including calling the parent's constructor with `: base(...)`
- Inheritance *(es: herencia · pt: herança)* with `abstract`, `virtual` and `override`
- A `static` field
- Avoiding the integer division trap

## Setup

Create a console app:

```
dotnet new console -n LittleLibrary
```

Put all your classes in a `Models` folder, in the namespace `LittleLibrary.Models`. Your `Program.cs` should need `using LittleLibrary.Models;` to reach them.

This is the class structure you'll build:

```
LibraryItem   (abstract)
├── Book
│   └── AudioBook
└── Film

Library       (holds a list of items)
```

## Part 1: The base class `LibraryItem`

- Make it `abstract` *(es: abstracta · pt: abstrata)*. There is no such thing as a plain "item", only books, films and audiobooks.
- Two properties: `Title` (string) and `Year` (int). Other code can **read** them, but they can only be **set** inside the constructor.
- A constructor that takes a title and a year. It should throw *(es: lanzar · pt: lançar)* an `ArgumentException` if:
  - the title is empty or only spaces, or
  - the year is in the future.
- A `protected` bool field called `isBorrowed` *(es: prestado · pt: emprestado)*, starting as `false`.
- A public read-only property `IsBorrowed` that returns `isBorrowed`, so other classes can check it without changing it.
- Two methods:
  - `Borrow()`: if the item is already borrowed, print `Sorry, Dune is already borrowed.` Otherwise mark it as borrowed and print `Borrowed: Dune`.
  - `Return()`: if the item isn't borrowed, print `Dune isn't borrowed.` Otherwise mark it as available *(es: disponible · pt: disponível)* and print `Returned: Dune`.
- A `virtual` method `Describe()` that returns a string like `Dune (1965)`.

## Part 2: The child classes

Each child class inherits *(es: hereda · pt: herda)* from the class in the second column and adds one property.

| Class | Inherits from | Adds | `Describe()` returns |
|---|---|---|---|
| `Book` | `LibraryItem` | `Author` (string) | `Dune by Frank Herbert (1965)` |
| `Film` | `LibraryItem` | `Minutes` (int) | `Spirited Away (2001), 125 min` |
| `AudioBook` | `Book` | `Narrator` (string) | `Project Hail Mary by Andy Weir (2021), narrated by Ray Porter` |

Rules:

- Every constructor passes the shared values up to its parent with `: base(...)`.
- Every child class overrides *(es: sobrescribe · pt: sobrescreve)* `Describe()`.
- `AudioBook.Describe()` must **reuse** the text from `Book` by calling `base.Describe()` and adding to it. Don't copy Book's code.

## Part 3: The `Library` class

- A **private** `List<LibraryItem>`, so outside code can't change the list directly.
- `Add(LibraryItem item)`
- `PrintAll()`: prints one line per item, with its `Describe()` text followed by `- available` or `- borrowed`.
- `AverageYear()`: returns the average *(es: promedio · pt: média)* year as a `double`. The years are ints, so make sure the decimals aren't lost!
- A `static` counter of how many `Library` objects have been created in total. Outside code should be able to **read** it as `Library.Count`, but not change it.

## Part 4: `Program.cs`

1. Create a library and add these items:
   - Book: *Dune*, 1965, Frank Herbert
   - Book: *The Hobbit*, 1937, J.R.R. Tolkien
   - Film: *Spirited Away*, 2001, 125 min
   - Film: *Inception*, 2010, 148 min
   - AudioBook: *Project Hail Mary*, 2021, Andy Weir, narrated by Ray Porter
2. Borrow *Dune*, try to borrow it again, return it, then borrow *Spirited Away*.
3. Inside a `try`/`catch`, try to create a book with an empty title, and print the error message.
4. Print all items, then the average year.
5. Create a second, empty library, then print `Library.Count`.

## Example output

Your messages don't have to match word for word, but the numbers should.

```
Borrowed: Dune
Sorry, Dune is already borrowed.
Returned: Dune
Borrowed: Spirited Away
Error: Title cannot be empty.

Dune by Frank Herbert (1965) - available
The Hobbit by J.R.R. Tolkien (1937) - available
Spirited Away (2001), 125 min - borrowed
Inception (2010), 148 min - available
Project Hail Mary by Andy Weir (2021), narrated by Ray Porter - available

Average year: 1986.8
Libraries created: 2
```

## Hints (only if you're stuck)

<details>
<summary>Click to show hints</summary>

- `string.IsNullOrWhiteSpace(text)` checks for empty strings and strings with only spaces.
- `DateTime.Now.Year` gives you the current year.
- Calling the parent constructor looks like this:
  `public Book(string title, int year, string author) : base(title, year)`
- Reusing the parent's text: `return base.Describe() + ", narrated by " + Narrator;`
- A static counter is usually increased inside the constructor.
- Catching the error:
  ```csharp
  try { /* create the item */ }
  catch (ArgumentException ex) { Console.WriteLine("Error: " + ex.Message); }
  ```
- For the average: remember what happens when you divide an int by an int.

</details>

## Stretch goals

1. In `Program.cs`, try `new LibraryItem("Test", 2000)`. Read the error. Why does it happen?
2. Add `FindByTitle(string title)` to `Library`. It returns the matching item, or `null` if there isn't one. Print `Not found` when it's `null`.
3. Add `PickRandom()` to `Library`, which returns a random item using `Random.Shared`.
4. Rewrite `Book`, `Film` and `AudioBook` using primary constructors.
5. Think about it: `PrintAll()` only knows that each item is a `LibraryItem`. So how does it print the right text for books, films and audiobooks? What would happen without `virtual` and `override`?