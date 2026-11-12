# fetch with async/await

For Matteo

Rules:

- Use `async`/`await`. Don't use `.then()` or `.catch()`.
- Every function in these challenges is `async`, so you have to `await` it when you call it.

```js
console.log(await getTopEpisodes("breaking bad", 3));
```

If a request fails (for example, the thing you searched for doesn't exist), `response.ok` is `false`. Check it before you call `response.json()`.

Open each URL in your browser first to see what the data looks like.

## 1. TVmaze

Docs: https://www.tvmaze.com/api

Define a function `getTopEpisodes(show, count)` that returns the `count` highest-rated episodes of a TV show as strings. Return `null` if the show isn't found.

You need two requests:

1. `https://api.tvmaze.com/singlesearch/shows?q={show}` to get the show and its `id`. If nothing is found, you get a 404.
2. `https://api.tvmaze.com/shows/{id}/episodes` to get every episode. Each one has `season`, `number`, `name` and `rating.average`. Some episodes have no rating yet (`null`), so leave those out.

Format each episode like `S05E14: Ozymandias (9.6)`. `padStart` adds the zeros: `String(5).padStart(2, "0")` gives `"05"`.

Use `filter`, `sort` and `map`.

```js
await getTopEpisodes("breaking bad", 3);
// [
//   "S05E14: Ozymandias (9.6)",
//   "S05E16: Felina (9.4)",
//   "S05E13: To'hajiilee (9.3)",
// ]

await getTopEpisodes("asdfghjkl", 3); // null
```

The ratings above are made up. Yours will come from TVmaze.

## 2. PokéAPI

Docs: https://pokeapi.co/docs/v2

Define a function `getWeaknesses(name)` that returns the types that do at least double damage to a Pokémon. Return `null` if the Pokémon isn't found.

Get the Pokémon with `https://pokeapi.co/api/v2/pokemon/{name}`. The name must be lowercase.

Each type in the Pokémon data has a URL like `https://pokeapi.co/api/v2/type/fire`. Fetch all of the Pokémon's types at the same time, not one after another: use `map` to make an array of promises, then `await Promise.all(...)` to get an array of results.

Each type has a `damage_relations` object:

- `double_damage_from`: these types do 2× damage
- `half_damage_from`: these types do 0.5× damage
- `no_damage_from`: these types do 0× damage

For a Pokémon with two types, multiply. Charizard is fire and flying. Rock does 2× to fire and 2× to flying, so it does 4× to Charizard. Ground does 2× to fire but 0× to flying, so it does 0× to Charizard.

Return an array of objects sorted from highest multiplier to lowest. The order of types with the same multiplier doesn't matter.

Use as many higher-order methods as you can. `Object.entries` turns an object into an array, so you can use them on objects too.

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

## Pagination

APIs don't send you thousands of results at once. They send one page at a time, and you have to ask for the next page yourself. `await` works inside loops, so you can keep fetching until there are no pages left.

There are two common ways to do it, and the next two challenges use one each.

## 3. Gutendex

Docs: https://gutendex.com

Gutendex is an API for the free books on Project Gutenberg. It gives you a URL for the next page.

`https://gutendex.com/books?search=dickens` gets the first page of books whose title or author matches "dickens". The data has:

- `results`: up to 32 books
- `next`: the URL of the next page, or `null` on the last page
- `count`: how many books there are on all the pages together

Define a function `getBookReport(search)` that gets every page and returns an object with:

- `total`: how many books you got. It should be the same as `count`. If it isn't, you missed a page.
- `languages`: how many books there are in each language. A book's `languages` is an array, so one book can count towards more than one language. Use `reduce`.
- `mostDownloaded`: the title of the book with the highest `download_count`. Use `reduce`.

If no books are found, `count` is `0`. Return `null`.

```js
await getBookReport("dickens");
// {
//   total: 104,
//   languages: { en: 96, fr: 3, de: 2, fi: 3 },
//   mostDownloaded: "A Christmas Carol in Prose; Being a Ghost Story of Christmas",
// }

await getBookReport("asdfghjkl"); // null
```

The numbers above are made up. Check yours against `count`.

## 4. MusicBrainz

Docs: https://musicbrainz.org/doc/MusicBrainz_API

This API gives you a total, and you work out the pages yourself with `limit` and `offset`. `limit=25&offset=0` is the first 25, `limit=25&offset=25` is the next 25, and so on.

Define a function `getDiscography(artist)` that returns an artist's studio albums as strings, oldest first. Return `null` if the artist isn't found.

You need to do this:

1. Search for the artist with `https://musicbrainz.org/ws/2/artist?query={artist}&fmt=json`. Assume the first result in `artists` is the right one, and take its `id`. If `artists` is empty, return `null`.
2. Get the artist's albums with `https://musicbrainz.org/ws/2/release-group?artist={id}&type=album&limit=25&offset={offset}&fmt=json`. Keep increasing `offset` until you have all of them. `release-group-count` tells you how many there are in total.
3. Studio albums are the ones whose `secondary-types` array is empty. The others are live albums, compilations, etc.

Some property names have dashes in them, so you need square brackets: `data["release-groups"]`.

MusicBrainz blocks you if you send more than one request per second. Wait between requests with this helper:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await wait(1000);
```

If you run this outside the browser, MusicBrainz also wants a `User-Agent` header that says who you are:

```js
await fetch(url, { headers: { "User-Agent": "MatteoPractice/1.0" } });
```

Use `filter`, `sort` and `map`.

```js
await getDiscography("radiohead");
// [
//   "1993: Pablo Honey",
//   "1995: The Bends",
//   "1997: OK Computer",
//   "2000: Kid A",
//   "2001: Amnesiac",
//   "2003: Hail to the Thief",
//   "2007: In Rainbows",
//   "2011: The King of Limbs",
//   "2016: A Moon Shaped Pool",
// ]

await getDiscography("asdfghjkl"); // null
```

Anyone can edit MusicBrainz, so your list might be a little different.

## 5. Open-Meteo

No higher-order methods needed for this one.

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
