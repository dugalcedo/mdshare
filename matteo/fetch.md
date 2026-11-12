# fetch with async/await

For Matteo

Rules:

- Use `async`/`await`. Don't use `.then()` or `.catch()`.
- Every function in these challenges is `async`, so you have to `await` it when you call it.

```js
console.log(await getTypes("pikachu"));
```

If a request fails (for example, the Pokémon doesn't exist), `response.ok` is `false`. Check it before you call `response.json()`.

## PokéAPI

Docs: https://pokeapi.co/docs/v2

Get one Pokémon with `https://pokeapi.co/api/v2/pokemon/{name}`. The name must be lowercase. Open the URL in your browser first to see what the data looks like.

### 1

Define a function `getTypes(name)` that returns an array of the Pokémon's type names. Return `null` if the Pokémon isn't found.

Use `map`.

```js
await getTypes("pikachu"); // ["electric"]
await getTypes("charizard"); // ["fire", "flying"]
await getTypes("agumon"); // null
```

### 2

Define a function `getStatSummary(name)` that returns an object with two properties:

- `total`: all of the Pokémon's base stats added together
- `highest`: the name of its highest stat

Return `null` if the Pokémon isn't found.

Use `reduce` for both.

```js
await getStatSummary("pikachu"); // { total: 320, highest: "speed" }
await getStatSummary("charizard"); // { total: 534, highest: "special-attack" }
await getStatSummary("agumon"); // null
```

### 3

Define a function `getHeaviest(names)` that takes an array of names and returns a string with the heaviest Pokémon's name and weight in kg. The API gives weight in hectograms, so divide it by 10.

Return `null` if any of the Pokémon aren't found.

Fetch them all at the same time, not one after another. Use `map` to make an array of promises, then `await Promise.all(...)` to get an array of results. Then use `some` and `reduce`.

```js
await getHeaviest(["pikachu", "snorlax", "onix"]); // "snorlax (460 kg)"
await getHeaviest(["pikachu", "agumon"]); // null
```

### 4

Define a function `getWeaknesses(name)` that returns the types that do at least double damage to the Pokémon. Return `null` if the Pokémon isn't found.

Each type in the Pokémon data has a URL like `https://pokeapi.co/api/v2/type/fire`. Fetch every one of the Pokémon's types (at the same time, like in challenge 3). Each type has a `damage_relations` object:

- `double_damage_from`: these types do 2× damage
- `half_damage_from`: these types do 0.5× damage
- `no_damage_from`: these types do 0× damage

For a Pokémon with two types, multiply. Charizard is fire and flying. Rock does 2× to fire and 2× to flying, so it does 4× to Charizard. Ground does 2× to fire but 0× to flying, so it does 0× to Charizard.

Return an array of objects sorted from highest multiplier to lowest. The order of types with the same multiplier doesn't matter.

Use as many higher-order methods as you can. You'll probably want `map`, `forEach` or `reduce`, `filter` and `sort`. `Object.entries` turns an object into an array, so you can use them on objects too.

```js
await getWeaknesses("pikachu");
// [{ type: "ground", multiplier: 2 }]

await getWeaknesses("charizard");
// [
//   { type: "rock", multiplier: 4 },
//   { type: "water", multiplier: 2 },
//   { type: "electric", multiplier: 2 },
// ]

await getWeaknesses("bulbasaur");
// flying, fire, ice, psychic (all 2)

await getWeaknesses("agumon"); // null
```

## Open-Meteo

No higher-order methods needed for this one.

### 5

Define a function `getWeatherReport(place)` that returns a string describing the weather right now in that place. Return `null` if the place isn't found.

You need two requests:

1. Geocoding API (https://open-meteo.com/en/docs/geocoding-api) to turn the place name into a latitude and longitude. Assume the first result is the right place. If nothing is found, `results` is missing from the data.
2. Forecast API (https://open-meteo.com/en/docs) to get the current temperature and chance of rain. Use the `current` parameter with `temperature_2m` and `precipitation_probability`.

Use the name from the geocoding result, not the one that was passed in, so it's capitalized properly. Round the temperature to the nearest whole number.

Place names can have spaces, like "New York". Wrap the name in `encodeURIComponent()` when you put it in the URL.

```js
await getWeatherReport("stockholm");
// "Right now in Stockholm, it is 5 degrees Celsius, with a 10% chance of rain."

await getWeatherReport("new york");
// "Right now in New York, it is 12 degrees Celsius, with a 0% chance of rain."

await getWeatherReport("asdfghjkl"); // null
```

Your numbers will be different, because the weather changes
