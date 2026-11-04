# Higher-order array methods

For Matteo

Copy this array into a `.js` file in VS Code. Use it for all of the challenges.

When a result is a list of animal objects, the expected result only shows their names to save space.

```js
const animals = [
  {
    id: 1,
    name: "African Elephant",
    animalClass: "mammal",
    weightKg: 6000,
    status: "endangered",
    nocturnal: false,
    habitats: ["savanna", "forest"],
    diet: { type: "herbivore", foods: ["grass", "leaves", "bark"] },
    stats: { topSpeedKmh: 40, lifespanYears: 65 },
  },
  {
    id: 2,
    name: "Lion",
    animalClass: "mammal",
    weightKg: 190,
    status: "vulnerable",
    nocturnal: true,
    habitats: ["savanna", "grassland"],
    diet: { type: "carnivore", foods: ["zebra", "antelope", "buffalo"] },
    stats: { topSpeedKmh: 80, lifespanYears: 14 },
  },
  {
    id: 3,
    name: "Giant Panda",
    animalClass: "mammal",
    weightKg: 100,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["forest"],
    diet: { type: "herbivore", foods: ["bamboo"] },
    stats: { topSpeedKmh: 32, lifespanYears: 20 },
  },
  {
    id: 4,
    name: "Emperor Penguin",
    animalClass: "bird",
    weightKg: 30,
    status: "near threatened",
    nocturnal: false,
    habitats: ["ice", "ocean"],
    diet: { type: "carnivore", foods: ["fish", "krill", "squid"] },
    stats: { topSpeedKmh: 9, lifespanYears: 20 },
  },
  {
    id: 5,
    name: "Bald Eagle",
    animalClass: "bird",
    weightKg: 5,
    status: "least concern",
    nocturnal: false,
    habitats: ["forest", "wetland"],
    diet: { type: "carnivore", foods: ["fish", "rabbit", "carrion"] },
    stats: { topSpeedKmh: 160, lifespanYears: 28 },
  },
  {
    id: 6,
    name: "Komodo Dragon",
    animalClass: "reptile",
    weightKg: 80,
    status: "endangered",
    nocturnal: false,
    habitats: ["savanna", "forest"],
    diet: { type: "carnivore", foods: ["deer", "pig", "carrion"] },
    stats: { topSpeedKmh: 20, lifespanYears: 30 },
  },
  {
    id: 7,
    name: "Green Sea Turtle",
    animalClass: "reptile",
    weightKg: 160,
    status: "endangered",
    nocturnal: false,
    habitats: ["ocean"],
    diet: { type: "herbivore", foods: ["seagrass", "algae"] },
    stats: { topSpeedKmh: 35, lifespanYears: 70 },
  },
  {
    id: 8,
    name: "Red Fox",
    animalClass: "mammal",
    weightKg: 7,
    status: "least concern",
    nocturnal: true,
    habitats: ["forest", "grassland", "urban"],
    diet: { type: "omnivore", foods: ["rabbit", "berries", "insects"] },
    stats: { topSpeedKmh: 50, lifespanYears: 4 },
  },
  {
    id: 9,
    name: "Brown Bear",
    animalClass: "mammal",
    weightKg: 300,
    status: "least concern",
    nocturnal: false,
    habitats: ["forest", "tundra"],
    diet: { type: "omnivore", foods: ["salmon", "berries", "roots"] },
    stats: { topSpeedKmh: 56, lifespanYears: 25 },
  },
  {
    id: 10,
    name: "Chinese Giant Salamander",
    animalClass: "amphibian",
    weightKg: 25,
    status: "critically endangered",
    nocturnal: true,
    habitats: ["river"],
    diet: { type: "carnivore", foods: ["fish", "crabs", "insects"] },
    stats: { topSpeedKmh: 3, lifespanYears: 60 },
  },
  {
    id: 11,
    name: "Great White Shark",
    animalClass: "fish",
    weightKg: 1100,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["ocean"],
    diet: { type: "carnivore", foods: ["fish", "seal", "squid"] },
    stats: { topSpeedKmh: 56, lifespanYears: 70 },
  },
  {
    id: 12,
    name: "Cheetah",
    animalClass: "mammal",
    weightKg: 50,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["savanna", "grassland"],
    diet: { type: "carnivore", foods: ["gazelle", "impala", "hare"] },
    stats: { topSpeedKmh: 105, lifespanYears: 12 },
  },
  {
    id: 13,
    name: "Gray Wolf",
    animalClass: "mammal",
    weightKg: 40,
    status: "least concern",
    nocturnal: true,
    habitats: ["forest", "tundra", "grassland"],
    diet: { type: "carnivore", foods: ["deer", "elk", "moose"] },
    stats: { topSpeedKmh: 60, lifespanYears: 8 },
  },
  {
    id: 14,
    name: "Western Gorilla",
    animalClass: "mammal",
    weightKg: 140,
    status: "critically endangered",
    nocturnal: false,
    habitats: ["forest"],
    diet: { type: "herbivore", foods: ["leaves", "fruit", "stems"] },
    stats: { topSpeedKmh: 40, lifespanYears: 35 },
  },
  {
    id: 15,
    name: "Snowy Owl",
    animalClass: "bird",
    weightKg: 2,
    status: "vulnerable",
    nocturnal: false,
    habitats: ["tundra", "grassland"],
    diet: { type: "carnivore", foods: ["lemming", "vole", "hare"] },
    stats: { topSpeedKmh: 80, lifespanYears: 10 },
  },
];
```

## map

### 1

Make an array of every animal's name.

```js
["African Elephant", "Lion", "Giant Panda", /* ...15 strings in total */]
```

### 2

Make an array of sentences about what each animal eats.

```js
[
  "African Elephant eats grass, leaves, bark",
  "Lion eats zebra, antelope, buffalo",
  "Giant Panda eats bamboo",
  // ...15 strings in total
]
```

### 3

Make an array of new objects with three properties:

- `name`
- `weightLb`: the weight in kg times 2.2, rounded to the nearest whole number
- `isFast`: `true` if the top speed is 60 km/h or more

```js
[
  { name: "African Elephant", weightLb: 13200, isFast: false },
  { name: "Lion", weightLb: 418, isFast: true },
  { name: "Giant Panda", weightLb: 220, isFast: false },
  // ...15 objects in total
]
```

## filter

### 1

Get the carnivores that are nocturnal.

```js
// Lion, Chinese Giant Salamander, Gray Wolf
```

### 2

Get the animals that live in the forest and whose status is not `"least concern"`.

```js
// African Elephant, Giant Panda, Komodo Dragon, Western Gorilla
```

## find

### 1

Find the first animal that eats fish.

```js
// Emperor Penguin
```

### 2

Define a function `getTopSpeed(name)` that uses `find`. It returns the animal's top speed, or `null` if there is no animal with that name.

```js
getTopSpeed("Cheetah") // 105
getTopSpeed("Dragon") // null
```

## every

Define a function `allLiveLongerThan(years)` that returns whether every animal's lifespan is greater than `years`.

```js
allLiveLongerThan(3) // true
allLiveLongerThan(4) // false
```

## some

Define a function `anyoneEats(food)` that returns whether at least one animal eats that food.

```js
anyoneEats("bamboo") // true
anyoneEats("pizza") // false
```

## sort

The `animals` array must stay in its original order, or your other answers will come out wrong. `sort` changes the array you call it on, so sort a copy.

### 1

Sort from lightest to heaviest.

```js
// Snowy Owl, Bald Eagle, Red Fox, Chinese Giant Salamander, Emperor Penguin,
// Gray Wolf, Cheetah, Komodo Dragon, Giant Panda, Western Gorilla,
// Green Sea Turtle, Lion, Brown Bear, Great White Shark, African Elephant
```

### 2

Sort alphabetically by name.

```js
// African Elephant, Bald Eagle, Brown Bear, Cheetah, Chinese Giant Salamander,
// Emperor Penguin, Giant Panda, Gray Wolf, Great White Shark, Green Sea Turtle,
// Komodo Dragon, Lion, Red Fox, Snowy Owl, Western Gorilla
```

### 3

Sort alphabetically by `animalClass`. Inside each class, put the heaviest animal first.

```js
// amphibian: Chinese Giant Salamander
// bird:      Emperor Penguin, Bald Eagle, Snowy Owl
// fish:      Great White Shark
// mammal:    African Elephant, Brown Bear, Lion, Western Gorilla, Giant Panda, Cheetah, Gray Wolf, Red Fox
// reptile:   Green Sea Turtle, Komodo Dragon
```

## reduce

### 1

Get the total weight of all the animals.

```js
8229
```

### 2

Count how many animals are in each class.

```js
{ mammal: 8, bird: 3, reptile: 2, amphibian: 1, fish: 1 }
```

### 3

Get the fastest animal. The result should be the whole animal object, not only its speed.

```js
// Bald Eagle
```

### 4

Make an array of all the habitats with no duplicates.

```js
["savanna", "forest", "grassland", "ice", "ocean", "wetland", "urban", "tundra", "river"]
```

## Your own higher-order methods

Add each of these methods to `Array.prototype`, so that they work on any array.

Rules:

- Use a `for...of` loop. Don't use `map`, `filter`, `find`, `some`, `every`, `sort` or `reduce`.
- Use `function`, not an arrow function, so that `this` is the array.

```js
Array.prototype.reject = function (callback) {
  // your code here
};
```

### 1

`reject(callback)` returns a new array of the items where the callback returns a falsy value. It's the opposite of `filter`.

```js
animals.reject((animal) => animal.diet.type === "carnivore");
// African Elephant, Giant Panda, Green Sea Turtle, Red Fox, Brown Bear, Western Gorilla

[1, 2, 3, 4].reject((n) => n % 2 === 0);
// [1, 3]
```

### 2

`countWhere(callback)` returns the number of items where the callback returns a truthy value.

```js
animals.countWhere((animal) => animal.stats.topSpeedKmh > 50);
// 7

["a", "bb", "ccc"].countWhere((str) => str.length > 5);
// 0
```

### 3

`groupBy(callback)` returns an object. The callback's return value is the key, and the value is an array of all the items that got that key.

```js
animals.groupBy((animal) => animal.diet.type);
// {
//   herbivore: African Elephant, Giant Panda, Green Sea Turtle, Western Gorilla
//   carnivore: Lion, Emperor Penguin, Bald Eagle, Komodo Dragon, Chinese Giant Salamander,
//              Great White Shark, Cheetah, Gray Wolf, Snowy Owl
//   omnivore:  Red Fox, Brown Bear
// }

[1, 2, 3, 4, 5].groupBy((n) => (n % 2 === 0 ? "even" : "odd"));
// { odd: [1, 3, 5], even: [2, 4] }
```
