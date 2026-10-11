# Challenge: The Garage 🚗🏍️

Build a small garage *(es: garaje · pt: garagem)* system for cars, motorcycles and electric cars.

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
dotnet new console -n GarageApp
```

Put all your classes in a `Models` folder, in the namespace `GarageApp.Models`. Your `Program.cs` should need `using GarageApp.Models;` to reach them.

This is the class structure you'll build:

```
Vehicle       (abstract)
├── Car
│   └── ElectricCar
└── Motorcycle

Garage        (holds a list of vehicles)
```

## Part 1: The base class `Vehicle`

- Make it `abstract` *(es: abstracta · pt: abstrata)*. There is no such thing as a plain "vehicle", only cars, motorcycles and electric cars.
- Two properties: `Name` (string, like `"Toyota Corolla"`) and `Year` (int). Other code can **read** them, but they can only be **set** inside the constructor.
- A constructor that takes a name and a year. It should throw *(es: lanzar · pt: lançar)* an `ArgumentException` if:
  - the name is empty or only spaces, or
  - the year is before 1886 (the first car) or in the future.
- A `protected` bool field called `isRunning` *(es: encendido · pt: ligado)*, starting as `false`.
- A public read-only property `IsRunning` that returns `isRunning`, so other classes can check it without changing it.
- Two methods:
  - `Start()`: if the vehicle is already running, print `Sorry, the Toyota Corolla is already running.` Otherwise mark it as running and print `Started: Toyota Corolla`.
  - `Stop()`: if the vehicle isn't running, print `The Toyota Corolla isn't running.` Otherwise mark it as stopped and print `Stopped: Toyota Corolla`.
- A `virtual` method `Describe()` that returns a string like `2019 Toyota Corolla`.

## Part 2: The child classes

Each child class inherits *(es: hereda · pt: herda)* from the class in the second column and adds one property.

| Class | Inherits from | Adds | `Describe()` returns |
|---|---|---|---|
| `Car` | `Vehicle` | `Doors` (int) | `2019 Toyota Corolla, 4 doors` |
| `Motorcycle` | `Vehicle` | `EngineCc` (int) *(engine size · es: cilindrada · pt: cilindrada)* | `2021 Honda CB500F, 471 cc` |
| `ElectricCar` | `Car` | `RangeKm` (int) *(es: autonomía · pt: autonomia)* | `2022 Tesla Model 3, 4 doors, 513 km range` |

Rules:

- Every constructor passes the shared values up to its parent with `: base(...)`.
- Every child class overrides *(es: sobrescribe · pt: sobrescreve)* `Describe()`.
- `ElectricCar.Describe()` must **reuse** the text from `Car` by calling `base.Describe()` and adding to it. Don't copy Car's code.

## Part 3: The `Garage` class

- A **private** `List<Vehicle>`, so outside code can't change the list directly.
- `Add(Vehicle vehicle)`
- `PrintAll()`: prints one line per vehicle, with its `Describe()` text followed by `- running` or `- parked`.
- `AverageYear()`: returns the average *(es: promedio · pt: média)* year as a `double`. The years are ints, so make sure the decimals aren't lost!
- A `static` counter of how many `Garage` objects have been created in total. Outside code should be able to **read** it as `Garage.Count`, but not change it.

## Part 4: `Program.cs`

1. Create a garage and add these vehicles:
   - Car: *Toyota Corolla*, 2019, 4 doors
   - Car: *Volkswagen Golf*, 2016, 5 doors
   - Motorcycle: *Honda CB500F*, 2021, 471 cc
   - Motorcycle: *Yamaha MT-07*, 2018, 689 cc
   - ElectricCar: *Tesla Model 3*, 2022, 4 doors, 513 km range
2. Start the *Toyota Corolla*, try to start it again, stop it, then start the *Yamaha MT-07*.
3. Inside a `try`/`catch`, try to create a car with an empty name, and print the error message.
4. Print all vehicles, then the average year.
5. Create a second, empty garage, then print `Garage.Count`.

## Example output

Your messages don't have to match word for word, but the numbers should.

```
Started: Toyota Corolla
Sorry, the Toyota Corolla is already running.
Stopped: Toyota Corolla
Started: Yamaha MT-07
Error: Name cannot be empty.

2019 Toyota Corolla, 4 doors - parked
2016 Volkswagen Golf, 5 doors - parked
2021 Honda CB500F, 471 cc - parked
2018 Yamaha MT-07, 689 cc - running
2022 Tesla Model 3, 4 doors, 513 km range - parked

Average year: 2019.2
Garages created: 2
```

## Hints (only if you're stuck)

<details>
<summary>Click to show hints</summary>

- `string.IsNullOrWhiteSpace(text)` checks for empty strings and strings with only spaces.
- `DateTime.Now.Year` gives you the current year.
- Calling the parent constructor looks like this:
  `public Car(string name, int year, int doors) : base(name, year)`
- Reusing the parent's text: `return base.Describe() + ", " + RangeKm + " km range";`
- A static counter is usually increased inside the constructor.
- Catching the error:
  ```csharp
  try { /* create the vehicle */ }
  catch (ArgumentException ex) { Console.WriteLine("Error: " + ex.Message); }
  ```
- For the average: remember what happens when you divide an int by an int.

</details>

## Stretch goals

1. In `Program.cs`, try `new Vehicle("Test", 2000)`. Read the error. Why does it happen?
2. Add `FindByName(string name)` to `Garage`. It returns the matching vehicle, or `null` if there isn't one. Print `Not found` when it's `null`.
3. Add `PickRandom()` to `Garage`, which returns a random vehicle using `Random.Shared`.
4. Rewrite `Car`, `Motorcycle` and `ElectricCar` using primary constructors.
5. Think about it: `PrintAll()` only knows that each item is a `Vehicle`. So how does it print the right text for cars, motorcycles and electric cars? What would happen without `virtual` and `override`?