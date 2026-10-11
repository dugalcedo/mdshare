# Challenge: The Football Team ⚽

Build a small system for a football team with goalkeepers, field players and strikers.

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
dotnet new console -n FootballApp
```

Put all your classes in a `Models` folder, in the namespace `FootballApp.Models`. Your `Program.cs` should need `using FootballApp.Models;` to reach them.

This is the class structure you'll build:

```
Player        (abstract)
├── Goalkeeper
└── FieldPlayer
    └── Striker

Team          (holds a list of players)
```

## Part 1: The base class `Player`

- Make it `abstract` *(es: abstracta · pt: abstrata)*. There is no such thing as a plain "player", only goalkeepers, field players and strikers.
- Two properties: `Name` (string) and `Age` (int). Other code can **read** them, but they can only be **set** inside the constructor.
- A constructor that takes a name and an age. It should throw *(es: lanzar · pt: lançar)* an `ArgumentException` if:
  - the name is empty or only spaces, or
  - the age is under 16 or over 45.
- A `protected` bool field called `isOnPitch` *(pitch · es: cancha · pt: campo)*, starting as `false`.
- A public read-only property `IsOnPitch` that returns `isOnPitch`, so other classes can check it without changing it.
- Two methods:
  - `EnterPitch()`: if the player is already on the pitch, print `Sorry, Gabriel Rocha is already on the pitch.` Otherwise mark them as on the pitch and print `Gabriel Rocha enters the pitch.`
  - `LeavePitch()`: if the player isn't on the pitch, print `Gabriel Rocha isn't on the pitch.` Otherwise mark them as off and print `Gabriel Rocha leaves the pitch.`
- A `virtual` method `Describe()` that returns a string like `Gabriel Rocha, 22`.

## Part 2: The child classes

Each child class inherits *(es: hereda · pt: herda)* from the class in the second column and adds one property.

| Class | Inherits from | Adds | `Describe()` returns |
|---|---|---|---|
| `Goalkeeper` *(es: arquero · pt: goleiro)* | `Player` | `Saves` (int) *(es: atajadas · pt: defesas)* | `Rafael Souza, 24, goalkeeper, 87 saves` |
| `FieldPlayer` | `Player` | `Goals` (int) | `Lucas Pereira, 27, 3 goals` |
| `Striker` *(es: delantero · pt: atacante)* | `FieldPlayer` | `PreferredFoot` (string) *(es: pie hábil · pt: pé preferido)* | `Gabriel Rocha, 22, 18 goals, left foot` |

Rules:

- Every constructor passes the shared values up to its parent with `: base(...)`.
- Every child class overrides *(es: sobrescribe · pt: sobrescreve)* `Describe()`.
- `Striker.Describe()` must **reuse** the text from `FieldPlayer` by calling `base.Describe()` and adding to it. Don't copy FieldPlayer's code.

## Part 3: The `Team` class

- A **private** `List<Player>`, so outside code can't change the list directly.
- `Add(Player player)`
- `PrintAll()`: prints one line per player, with their `Describe()` text followed by `- on the pitch` or `- on the bench` *(es: en el banquillo · pt: no banco)*.
- `AverageAge()`: returns the average *(es: promedio · pt: média)* age as a `double`. The ages are ints, so make sure the decimals aren't lost!
- A `static` counter of how many `Team` objects have been created in total. Outside code should be able to **read** it as `Team.Count`, but not change it.

## Part 4: `Program.cs`

1. Create a team and add these players:
   - Goalkeeper: *Rafael Souza*, 24, 87 saves
   - Goalkeeper: *Bruno Alves*, 35, 12 saves
   - FieldPlayer: *Lucas Pereira*, 27, 3 goals
   - FieldPlayer: *Thiago Lima*, 31, 1 goal
   - Striker: *Gabriel Rocha*, 22, 18 goals, left foot
2. Let *Gabriel Rocha* enter the pitch, try to let him enter again, let him leave, then let *Rafael Souza* enter.
3. Inside a `try`/`catch`, try to create a player with an empty name, and print the error message.
4. Print all players, then the average age.
5. Create a second, empty team, then print `Team.Count`.

## Example output

Your messages don't have to match word for word, but the numbers should.

```
Gabriel Rocha enters the pitch.
Sorry, Gabriel Rocha is already on the pitch.
Gabriel Rocha leaves the pitch.
Rafael Souza enters the pitch.
Error: Name cannot be empty.

Rafael Souza, 24, goalkeeper, 87 saves - on the pitch
Bruno Alves, 35, goalkeeper, 12 saves - on the bench
Lucas Pereira, 27, 3 goals - on the bench
Thiago Lima, 31, 1 goals - on the bench
Gabriel Rocha, 22, 18 goals, left foot - on the bench

Average age: 27.8
Teams created: 2
```

(Yes, "1 goals" is wrong English. Fixing it is a bonus!)

## Hints (only if you're stuck)

<details>
<summary>Click to show hints</summary>

- `string.IsNullOrWhiteSpace(text)` checks for empty strings and strings with only spaces.
- Calling the parent constructor looks like this:
  `public FieldPlayer(string name, int age, int goals) : base(name, age)`
- Reusing the parent's text: `return base.Describe() + ", " + PreferredFoot + " foot";`
- A static counter is usually increased inside the constructor.
- Catching the error:
  ```csharp
  try { /* create the player */ }
  catch (ArgumentException ex) { Console.WriteLine("Error: " + ex.Message); }
  ```
- For the average: remember what happens when you divide an int by an int.

</details>

## Stretch goals

1. In `Program.cs`, try `new Player("Test", 20)`. Read the error. Why does it happen?
2. Add `FindByName(string name)` to `Team`. It returns the matching player, or `null` if there isn't one. Print `Not found` when it's `null`.
3. Add `PickRandom()` to `Team`, which returns a random player using `Random.Shared`. (Who takes the penalty?)
4. Rewrite `Goalkeeper`, `FieldPlayer` and `Striker` using primary constructors.
5. Think about it: `PrintAll()` only knows that each item is a `Player`. So how does it print the right text for goalkeepers, field players and strikers? What would happen without `virtual` and `override`?