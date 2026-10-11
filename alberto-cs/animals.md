# Challenge: The Zoo 🐻🦎

Build a small zoo system for mammals, reptiles and bears.

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
dotnet new console -n ZooApp
```

Put all your classes in a `Models` folder, in the namespace `ZooApp.Models`. Your `Program.cs` should need `using ZooApp.Models;` to reach them.

This is the class structure you'll build:

```
Animal        (abstract)
├── Mammal
│   └── Bear
└── Reptile

Zoo           (holds a list of animals)
```

## Part 1: The base class `Animal`

- Make it `abstract` *(es: abstracta · pt: abstrata)*. There is no such thing as a plain "animal", only mammals, reptiles and bears.
- Two properties: `Name` (string) and `Age` (int). Other code can **read** them, but they can only be **set** inside the constructor.
- A constructor that takes a name and an age. It should throw *(es: lanzar · pt: lançar)* an `ArgumentException` if:
  - the name is empty or only spaces, or
  - the age is negative.
- A `protected` bool field called `isAsleep` *(es: dormido · pt: dormindo)*, starting as `false`.
- A public read-only property `IsAsleep` that returns `isAsleep`, so other classes can check it without changing it.
- Two methods:
  - `Sleep()`: if the animal is already asleep, print `Sorry, Kodi is already asleep.` Otherwise mark it as asleep and print `Kodi falls asleep.`
  - `WakeUp()`: if the animal isn't asleep, print `Kodi is already awake.` Otherwise mark it as awake and print `Kodi wakes up.`
- A `virtual` method `Describe()` that returns a string like `Kodi, 13 years old`.

## Part 2: The child classes

Each child class inherits *(es: hereda · pt: herda)* from the class in the second column and adds one property.

| Class | Inherits from | Adds | `Describe()` returns |
|---|---|---|---|
| `Mammal` | `Animal` | `FurColor` (string) *(fur · es: pelaje · pt: pelagem)* | `Luna, 5 years old, grey fur` |
| `Reptile` | `Animal` | `IsVenomous` (bool) *(es: venenoso · pt: peçonhento)* | `Sol, 7 years old, not venomous` |
| `Bear` | `Mammal` | `Species` (string) *(es: especie · pt: espécie)* | `Kodi, 13 years old, brown fur, Kodiak bear` |

Rules:

- Every constructor passes the shared values up to its parent with `: base(...)`.
- Every child class overrides *(es: sobrescribe · pt: sobrescreve)* `Describe()`.
- `Bear.Describe()` must **reuse** the text from `Mammal` by calling `base.Describe()` and adding to it. Don't copy Mammal's code.
- `Reptile.Describe()` should say `venomous` or `not venomous` depending on `IsVenomous`.

## Part 3: The `Zoo` class

- A **private** `List<Animal>`, so outside code can't change the list directly.
- `Add(Animal animal)`
- `PrintAll()`: prints one line per animal, with its `Describe()` text followed by `- asleep` or `- awake`.
- `AverageAge()`: returns the average *(es: promedio · pt: média)* age as a `double`. The ages are ints, so make sure the decimals aren't lost!
- A `static` counter of how many `Zoo` objects have been created in total. Outside code should be able to **read** it as `Zoo.Count`, but not change it.

## Part 4: `Program.cs`

1. Create a zoo and add these animals:
   - Mammal: *Pipoca*, 2, golden fur
   - Mammal: *Luna*, 5, grey fur
   - Reptile: *Sol*, 7, not venomous
   - Reptile: *Vipera*, 4, venomous
   - Bear: *Kodi*, 13, brown fur, Kodiak bear
2. Let *Kodi* sleep, try to let him sleep again, wake him up, then let *Sol* sleep.
3. Inside a `try`/`catch`, try to create an animal with an empty name, and print the error message.
4. Print all animals, then the average age.
5. Create a second, empty zoo, then print `Zoo.Count`.

## Example output

Your messages don't have to match word for word, but the numbers should.

```
Kodi falls asleep.
Sorry, Kodi is already asleep.
Kodi wakes up.
Sol falls asleep.
Error: Name cannot be empty.

Pipoca, 2 years old, golden fur - awake
Luna, 5 years old, grey fur - awake
Sol, 7 years old, not venomous - asleep
Vipera, 4 years old, venomous - awake
Kodi, 13 years old, brown fur, Kodiak bear - awake

Average age: 6.2
Zoos created: 2
```

## Hints (only if you're stuck)

<details>
<summary>Click to show hints</summary>

- `string.IsNullOrWhiteSpace(text)` checks for empty strings and strings with only spaces.
- Calling the parent constructor looks like this:
  `public Mammal(string name, int age, string furColor) : base(name, age)`
- Reusing the parent's text: `return base.Describe() + ", " + Species;`
- A static counter is usually increased inside the constructor.
- Catching the error:
  ```csharp
  try { /* create the animal */ }
  catch (ArgumentException ex) { Console.WriteLine("Error: " + ex.Message); }
  ```
- For the average: remember what happens when you divide an int by an int.

</details>

## Stretch goals

1. In `Program.cs`, try `new Animal("Test", 3)`. Read the error. Why does it happen?
2. Add `FindByName(string name)` to `Zoo`. It returns the matching animal, or `null` if there isn't one. Print `Not found` when it's `null`.
3. Add `PickRandom()` to `Zoo`, which returns a random animal using `Random.Shared`. (Feeding time!)
4. Rewrite `Mammal`, `Reptile` and `Bear` using primary constructors.
5. Think about it: `PrintAll()` only knows that each item is an `Animal`. So how does it print the right text for mammals, reptiles and bears? What would happen without `virtual` and `override`?