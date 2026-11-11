# Diccionarios y tuplas 📖

Sigue usando el mismo proyecto. Para cada reto, borra o comenta el código del anterior.

Recuerda: piensa la respuesta **antes** de abrir los bloques ocultos.

---

## Lección 1: ¿Qué es un diccionario?

### El problema

En `03`, en el reto del máximo goleador, usaste dos arrays:

```csharp
string[] players = { "Lewandowski", "Yamal", "Raphinha", "Pedri" };
int[] goals = { 14, 9, 12, 3 };
```

Funciona, pero es frágil:

- Para saber los goles de Yamal, primero tienes que **buscar** en qué índice está, y luego mirar ese índice en el otro array.
- Si borras un jugador de un array y te olvidas del otro, todo se descoloca. Pedri se queda con los goles de otro.

### La solución

Un **diccionario** (`Dictionary`) guarda **parejas**: una **clave** y su **valor**. Como un diccionario de verdad: buscas la palabra (la clave) y encuentras su definición (el valor).

```csharp
var goals = new Dictionary<string, int>
{
    ["Lewandowski"] = 14,
    ["Yamal"] = 9,
    ["Raphinha"] = 12,
    ["Pedri"] = 3,
};
```

```
   clave            valor
"Lewandowski"  →     14
"Yamal"        →      9
"Raphinha"     →     12
"Pedri"        →      3
```

`Dictionary<string, int>` se lee: "diccionario con claves `string` y valores `int`".

Cada línea de dentro es una pareja: `["clave"] = valor,`. Y gracias a `var` (de `01`), no hace falta escribir `Dictionary<string, int>` dos veces.

> 💡 En internet también verás esta otra forma, con unas llaves para cada pareja. Hace exactamente lo mismo:
>
> ```csharp
> var goals = new Dictionary<string, int>
> {
>     { "Lewandowski", 14 },
>     { "Yamal", 9 },
> };
> ```

Ahora, para saber los goles de Yamal:

```csharp
Console.WriteLine(goals["Yamal"]);  // 9
```

Sin buscar índices. Le das la clave y te da el valor.

### Diccionario vacío

```csharp
var goals = new Dictionary<string, int>();
```

### Las reglas

- Las **claves no se pueden repetir**. No puede haber dos `"Yamal"`.
- Los **valores sí** se pueden repetir. Dos jugadores pueden tener 9 goles.
- Las claves distinguen mayúsculas y minúsculas: `"Yamal"` y `"yamal"` son claves distintas.
- La clave y el valor pueden ser de cualquier tipo: `Dictionary<string, string>`, `Dictionary<char, int>`, `Dictionary<int, string>`...

---

## Lección 2: Usar un diccionario

### Leer

```csharp
Console.WriteLine(goals["Pedri"]);   // 3
Console.WriteLine(goals["Messi"]);   // 💥 se cuelga: KeyNotFoundException
```

Si la clave no existe, el programa **se cuelga**. Es como el `IndexOutOfRangeException` de los arrays, pero con claves.

### Comprobar si existe

```csharp
if (goals.ContainsKey("Messi"))
{
    Console.WriteLine(goals["Messi"]);
}
else
{
    Console.WriteLine("Messi no está en el equipo");
}
```

### Añadir y cambiar

Con `[clave] = valor`:

```csharp
goals["Gavi"] = 2;    // "Gavi" no existía → lo añade
goals["Pedri"] = 4;   // "Pedri" ya existía → cambia su valor
```

Si la clave **no existe**, la crea. Si **ya existe**, cambia su valor.

También existe `Add`, pero **se cuelga** si la clave ya existe:

```csharp
goals.Add("Fermín", 5);  // ✅ Fermín no existía
goals.Add("Fermín", 6);  // 💥 se cuelga: ya hay un "Fermín"
```

Por eso, normalmente es más cómodo usar `[clave] = valor`.

### Cambiar un valor usando el que tenía

Los atajos de `01` funcionan:

```csharp
goals["Yamal"] += 2;   // marcó 2 más: 9 → 11
goals["Pedri"]++;      // marcó 1 más
```

Pero solo si la clave **ya existe**. Si no, se cuelga (para sumarle algo, primero tiene que leer el valor que tenía).

### Borrar

```csharp
goals.Remove("Raphinha");
```

### Cuántas parejas hay

```csharp
Console.WriteLine(goals.Count);
```

`Count`, igual que las listas.

### Las sugerencias

Escribe `goals.` y mira la lista de VS Code. Verás `ContainsKey`, `ContainsValue`, `Remove`, `Keys`, `Values`, `Count`... Pon el ratón encima de `goals` para ver su tipo completo: `Dictionary<string, int>`.

> 💡 También verás `TryGetValue`. Funciona como el `int.TryParse` del reto del restaurante: comprueba y lee a la vez.
>
> ```csharp
> if (goals.TryGetValue("Yamal", out int yamalGoals))
> {
>     Console.WriteLine(yamalGoals);
> }
> ```

📖 Más información:
- [Microsoft: Dictionary](https://learn.microsoft.com/es-es/dotnet/api/system.collections.generic.dictionary-2)

## Reto 1: ¿Qué imprime? (diccionarios)

Si se cuelga o da error, dilo.

**1.**

```csharp
var capitals = new Dictionary<string, string>
{
    ["España"] = "Madrid",
    ["Francia"] = "París",
    ["Suecia"] = "Estocolmo",
};

Console.WriteLine(capitals["Francia"]);
```

<details>
<summary>Respuesta</summary>

**`París`**

</details>

<br>

**2.** Con el mismo `capitals`:

```csharp
Console.WriteLine(capitals["Italia"]);
```

<details>
<summary>Respuesta</summary>

**💥 Se cuelga** con `KeyNotFoundException`. No hay ninguna clave `"Italia"`.

</details>

<br>

**3.** Con el mismo `capitals`:

```csharp
Console.WriteLine(capitals["Madrid"]);
```

<details>
<summary>Respuesta</summary>

**💥 Se cuelga.** `"Madrid"` es un **valor**, no una clave. Con `[ ]` solo se busca por clave.

</details>

<br>

**4.**

```csharp
var ages = new Dictionary<string, int>();
ages["Ana"] = 30;
ages["Luis"] = 25;
ages["Ana"] = 31;

Console.WriteLine(ages["Ana"]);
Console.WriteLine(ages.Count);
```

<details>
<summary>Respuesta</summary>

**`31`** y **`2`**

La tercera línea no añade otra Ana: cambia el valor de la que ya había.

</details>

<br>

**5.**

```csharp
var ages = new Dictionary<string, int>();
ages.Add("Ana", 30);
ages.Add("Ana", 31);

Console.WriteLine(ages["Ana"]);
```

<details>
<summary>Respuesta</summary>

**💥 Se cuelga** en la tercera línea con `ArgumentException`. `Add` no deja añadir una clave que ya existe.

</details>

<br>

**6.**

```csharp
var ages = new Dictionary<string, int>();
ages["Ana"] = 30;
ages["Ana"]++;
ages["Ana"] += 10;

Console.WriteLine(ages["Ana"]);
```

<details>
<summary>Respuesta</summary>

**`41`**. 30 → 31 → 41.

</details>

<br>

**7.**

```csharp
var ages = new Dictionary<string, int>();
ages["Ana"] = 30;

Console.WriteLine(ages.ContainsKey("ana"));
```

<details>
<summary>Respuesta</summary>

**`False`**. Las claves distinguen mayúsculas y minúsculas.

</details>

<br>

**8.**

```csharp
var ages = new Dictionary<string, int>();
ages["Ana"] = 30;
ages["Luis"] = 30;

Console.WriteLine(ages.Count);
```

<details>
<summary>Respuesta</summary>

**`2`**. Los valores se pueden repetir. Lo que no se puede repetir son las claves.

</details>

<br>

**9.**

```csharp
var prices = new Dictionary<string, double>
{
    ["café"] = 1.5,
    ["tostada"] = 2.5,
};

Console.WriteLine(prices["café"] * 2 + prices["tostada"]);
```

<details>
<summary>Respuesta</summary>

**`5.5`**. `1.5 * 2` → 3, más 2.5 → 5.5. (Puede salir `5,5` según el idioma de tu ordenador.)

</details>

<br>

**10. Pregunta trampa 🪤**

```csharp
var shirts = new Dictionary<int, string>
{
    [10] = "Yamal",
    [8] = "Pedri",
};

Console.WriteLine(shirts[0]);
```

<details>
<summary>Respuesta</summary>

**💥 Se cuelga** con `KeyNotFoundException`.

Parece un índice, pero **no lo es**. En un diccionario, lo que va entre `[ ]` es siempre una **clave**. Aquí las claves son `int`, así que `shirts[0]` busca la clave `0`, que no existe. `shirts[10]` sí funcionaría: `Yamal`.

Los diccionarios **no tienen índices**.

</details>

<br>

**11.**

```csharp
var goals = new Dictionary<string, int>();
goals["Pedri"]++;
```

<details>
<summary>Respuesta</summary>

**💥 Se cuelga** con `KeyNotFoundException`.

`goals["Pedri"]++` es `goals["Pedri"] = goals["Pedri"] + 1`. Para sumarle 1, primero tiene que **leer** `goals["Pedri"]`, y no existe.

</details>

<br>

**12.**

```csharp
var goals = new Dictionary<string, int>();
goals["Pedri"] = 3;

Console.WriteLine(goals);
```

<details>
<summary>Respuesta</summary>

**`` System.Collections.Generic.Dictionary`2[System.String,System.Int32] ``**

Como con las listas, `Console.WriteLine` no imprime el contenido. Para eso hay que recorrerlo (siguiente lección).

</details>

<br>

---

## Lección 3: Recorrer un diccionario

### Con `foreach`

Cada elemento de un diccionario es una **pareja**, de tipo `KeyValuePair` (pareja clave-valor). Tiene `.Key` y `.Value`:

```csharp
var goals = new Dictionary<string, int>
{
    ["Lewandowski"] = 14,
    ["Yamal"] = 9,
    ["Pedri"] = 3,
};

foreach (KeyValuePair<string, int> pair in goals)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

```
Lewandowski: 14
Yamal: 9
Pedri: 3
```

`KeyValuePair<string, int>` es largo de escribir. Aquí `var` ayuda mucho:

```csharp
foreach (var pair in goals)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

Pon el ratón encima de `pair` y VS Code te dirá su tipo: `KeyValuePair<string, int>`.

### Solo las claves o solo los valores

```csharp
foreach (string player in goals.Keys)
{
    Console.WriteLine(player);
}

foreach (int playerGoals in goals.Values)
{
    Console.WriteLine(playerGoals);
}
```

### El orden

Normalmente las parejas salen en el orden en que las añadiste, pero **C# no lo promete**. No escribas código que dependa de ese orden.

> ⚠️ Igual que con las listas: dentro de un `foreach` de un diccionario, **no añadas** parejas nuevas. El programa se cuelga.

---

## Lección 4: Contar con un diccionario

¿Te acuerdas de **acumular** (Lección 8 de `03`)? Con un diccionario puedes contar **muchas cosas a la vez**. Por ejemplo, cuántas veces aparece **cada** letra:

```csharp
string word = "banana";
var letterCounts = new Dictionary<char, int>();

foreach (char letter in word)
{
    if (letterCounts.ContainsKey(letter))
    {
        letterCounts[letter]++;      // ya la había visto: suma 1
    }
    else
    {
        letterCounts[letter] = 1;    // primera vez: empieza en 1
    }
}

foreach (var pair in letterCounts)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

```
b: 1
a: 3
n: 2
```

Vuelta a vuelta:

| `letter` | ¿Ya estaba? | `letterCounts` después |
|---|---|---|
| `b` | no | `b:1` |
| `a` | no | `b:1, a:1` |
| `n` | no | `b:1, a:1, n:1` |
| `a` | sí | `b:1, a:2, n:1` |
| `n` | sí | `b:1, a:2, n:2` |
| `a` | sí | `b:1, a:3, n:2` |

El `if`/`else` es necesario por la pregunta 11 del Reto 1: no puedes hacer `++` a una clave que no existe.

> 💡 Atajo: `GetValueOrDefault` te da el valor, o `0` si la clave no existe. Así no necesitas el `if`:
>
> ```csharp
> letterCounts[letter] = letterCounts.GetValueOrDefault(letter) + 1;
> ```

### Buscar el mayor en un diccionario

Igual que en `03`, pero guardando la **clave** y el **valor** del mejor:

```csharp
char mostCommonLetter = ' ';
int highestCount = 0;

foreach (var pair in letterCounts)
{
    if (pair.Value > highestCount)
    {
        mostCommonLetter = pair.Key;
        highestCount = pair.Value;
    }
}

Console.WriteLine($"La más repetida: {mostCommonLetter} ({highestCount} veces)");
// La más repetida: a (3 veces)
```

Aquí empezar con `0` está bien, porque contar siempre da 1 o más. (Con temperaturas negativas, no. ¿Te acuerdas?)

## Reto 2: ¿Cuánto vale al final? (diccionarios)

**1.**

```csharp
var stock = new Dictionary<string, int>
{
    ["manzanas"] = 10,
    ["peras"] = 4,
};

stock["manzanas"] -= 3;
stock["peras"] = 0;
stock["kiwis"] = 6;
stock.Remove("peras");

Console.WriteLine(stock.Count);
Console.WriteLine(stock["manzanas"]);
```

<details>
<summary>Respuesta</summary>

**`2`** y **`7`**

Al final quedan `manzanas: 7` y `kiwis: 6`.

</details>

<br>

**2.**

```csharp
var stock = new Dictionary<string, int>
{
    ["manzanas"] = 10,
    ["peras"] = 4,
    ["kiwis"] = 6,
};

int total = 0;
foreach (int amount in stock.Values)
{
    total += amount;
}

Console.WriteLine(total);
```

<details>
<summary>Respuesta</summary>

**`20`**

</details>

<br>

**3.**

```csharp
string[] votes = { "Pedri", "Yamal", "Pedri", "Gavi", "Pedri", "Yamal" };
var voteCounts = new Dictionary<string, int>();

foreach (string vote in votes)
{
    if (voteCounts.ContainsKey(vote))
    {
        voteCounts[vote]++;
    }
    else
    {
        voteCounts[vote] = 1;
    }
}

Console.WriteLine(voteCounts["Pedri"]);
Console.WriteLine(voteCounts["Yamal"]);
Console.WriteLine(voteCounts.Count);
```

<details>
<summary>Respuesta</summary>

**`3`**, **`2`** y **`3`**

Pedri tiene 3 votos, Yamal 2, Gavi 1. `Count` es 3 porque hay **tres jugadores distintos** (no seis votos).

</details>

<br>

**4.**

```csharp
string[] votes = { "Pedri", "Yamal", "Pedri" };
var voteCounts = new Dictionary<string, int>();

foreach (string vote in votes)
{
    voteCounts[vote] = 1;
}

Console.WriteLine(voteCounts["Pedri"]);
```

<details>
<summary>Respuesta</summary>

**`1`** 😬

En cada vuelta pone el valor a 1, en vez de sumarle 1. El segundo voto de Pedri vuelve a poner 1.

</details>

<br>

**5.**

```csharp
var goals = new Dictionary<string, int>
{
    ["Lewandowski"] = 14,
    ["Yamal"] = 9,
    ["Raphinha"] = 12,
};

string topScorer = "";
int mostGoals = 0;

foreach (var pair in goals)
{
    if (pair.Value > mostGoals)
    {
        topScorer = pair.Key;
        mostGoals = pair.Value;
    }
}

Console.WriteLine($"{topScorer}: {mostGoals}");
```

<details>
<summary>Respuesta</summary>

**`Lewandowski: 14`**

</details>

<br>

**6.**

```csharp
var scores = new Dictionary<string, int>
{
    ["Ana"] = 7,
    ["Luis"] = 4,
    ["Eva"] = 9,
};

var passed = new List<string>();
foreach (var pair in scores)
{
    if (pair.Value >= 5)
    {
        passed.Add(pair.Key);
    }
}

Console.WriteLine(string.Join(", ", passed));
```

<details>
<summary>Respuesta</summary>

**`Ana, Eva`**

</details>

<br>

---

## Lección 5: ¿Array, lista o diccionario?

| | Array | Lista | Diccionario |
|---|---|---|---|
| Tipo | `string[]` | `List<string>` | `Dictionary<string, int>` |
| Buscas por... | índice (`0`, `1`, `2`...) | índice | **clave** |
| Tamaño | fijo | crece | crece |
| ¿Importa el orden? | sí | sí | no |
| Cuántos hay | `.Length` | `.Count` | `.Count` |

Pregúntate:

- ¿Es una **fila de cosas**, en orden? → array (si no cambia de tamaño) o lista.
- ¿Necesitas **buscar algo por su nombre** (o por otro dato)? ¿Cada cosa tiene "su" valor? → diccionario.

Una pista: si tienes **dos arrays o listas que van emparejados** (como `players` y `goals`), seguramente querías un diccionario.

## Reto 3: ¿Qué usarías?

Para cada caso, decide: ¿array, lista o diccionario? ¿De qué tipo? Piénsalo y luego abre la respuesta.

**1.** Los nombres de los días de la semana.

<details>
<summary>Respuesta</summary>

**`string[]`**. Siempre son 7, en orden, y no cambian.

</details>

<br>

**2.** La lista de la compra, a la que vas añadiendo y tachando cosas.

<details>
<summary>Respuesta</summary>

**`List<string>`**. Crece y encoge.

</details>

<br>

**3.** El teléfono de cada uno de tus contactos.

<details>
<summary>Respuesta</summary>

**`Dictionary<string, string>`**. La clave es el nombre, el valor es el teléfono.

¿Por qué el teléfono es `string` y no `int`? Porque no vas a hacer cuentas con él, y un teléfono puede tener un `+` o empezar por `0` (un `int` borraría ese 0).

</details>

<br>

**4.** Cuántas veces aparece cada palabra en un libro.

<details>
<summary>Respuesta</summary>

**`Dictionary<string, int>`**. Clave: la palabra. Valor: cuántas veces aparece.

</details>

<br>

**5.** Las personas que esperan en la cola del súper, en orden.

<details>
<summary>Respuesta</summary>

**`List<string>`**. El orden importa, y la gente entra y sale.

</details>

<br>

**6.** El precio de cada producto de una cafetería.

<details>
<summary>Respuesta</summary>

**`Dictionary<string, double>`**. Clave: el producto. Valor: el precio.

</details>

<br>

**7.** Las notas de un alumno en sus 6 exámenes del curso.

<details>
<summary>Respuesta</summary>

**`int[]`** (o `List<int>`). Es una fila de notas en orden. Si los exámenes son siempre 6, un array; si pueden ser más, una lista.

</details>

<br>

**8.** El nombre del jugador que lleva cada número de camiseta.

<details>
<summary>Respuesta</summary>

**`Dictionary<int, string>`**. Clave: el número. Valor: el nombre.

¿Por qué no un array donde el índice es el número? Porque los números no van seguidos (1, 4, 8, 10, 23...). Tendrías un array lleno de huecos vacíos.

</details>

<br>

**9.** Los jugadores de cada equipo de la liga.

<details>
<summary>Respuesta</summary>

**`Dictionary<string, List<string>>`**. Clave: el equipo. Valor: **una lista** de jugadores.

¡El valor de un diccionario puede ser una lista!

```csharp
var squads = new Dictionary<string, List<string>>
{
    ["Barça"] = new List<string> { "Pedri", "Gavi" },
    ["Madrid"] = new List<string> { "Bellingham", "Vinícius" },
};
squads["Barça"].Add("Yamal");
```

Pasa el ratón por encima de `squads["Barça"]`: es una `List<string>`, así que tiene `Add`.

</details>

<br>

---

## Lección 6: Tuplas

### El problema

Una función solo puede devolver **una cosa**. ¿Y si quieres que `GetRange` te devuelva el mínimo **y** el máximo de un array?

### La solución

Una **tupla** junta varios valores en uno solo, entre paréntesis:

```csharp
(string name, int age) person = ("Ana", 30);

Console.WriteLine(person.name);  // Ana
Console.WriteLine(person.age);   // 30
Console.WriteLine(person);       // (Ana, 30)
```

El tipo es `(string name, int age)`: un `string` llamado `name` y un `int` llamado `age`. El valor es `("Ana", 30)`.

### Devolver una tupla desde una función

Aquí es donde las tuplas son más útiles:

```csharp
int[] temperatures = { -5, 12, 3, -8, 20 };

(int lowest, int highest) range = GetRange(temperatures);
Console.WriteLine($"Mínima: {range.lowest}, máxima: {range.highest}");

(int lowest, int highest) GetRange(int[] numbers)
{
    int lowest = numbers[0];
    int highest = numbers[0];

    foreach (int number in numbers)
    {
        if (number < lowest)
        {
            lowest = number;
        }
        if (number > highest)
        {
            highest = number;
        }
    }

    return (lowest, highest);
}
```

```
Mínima: -8, máxima: 20
```

### Separar una tupla en variables

Puedes "abrir" la tupla y guardar cada parte en su propia variable:

```csharp
(int lowest, int highest) = GetRange(temperatures);

Console.WriteLine(lowest);   // -8
Console.WriteLine(highest);  // 20
```

Fíjate en la diferencia:

- `(int lowest, int highest) range = ...` → **una** variable (`range`), con dos partes.
- `(int lowest, int highest) = ...` → **dos** variables (`lowest` y `highest`).

Esto también funciona en el `foreach` de un diccionario, y queda muy limpio:

```csharp
foreach ((string player, int playerGoals) in goals)
{
    Console.WriteLine($"{player}: {playerGoals}");
}
```

### Ponles siempre nombre

Las tuplas se pueden crear sin nombres:

```csharp
(string, int) person = ("Ana", 30);
Console.WriteLine(person.Item1);  // Ana
Console.WriteLine(person.Item2);  // 30
```

Funciona, pero `Item1` y `Item2` no dicen nada. ¿Te acuerdas de los buenos nombres de `01`? Pon nombres.

### ¿Cuándo usar una tupla?

Para juntar **2 o 3 datos** de forma rápida, sobre todo para devolverlos de una función.

Si tienes más datos, o los vas a usar en muchos sitios del programa, lo que necesitas es una **clase**.

📖 Más información:
- [Microsoft: Tuplas](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/value-tuples)

## Reto 4: ¿Qué imprime? (tuplas)

**1.**

```csharp
(string city, int population) madrid = ("Madrid", 3300000);
Console.WriteLine(madrid.city);
```

<details>
<summary>Respuesta</summary>

**`Madrid`**

</details>

<br>

**2.**

```csharp
(string city, int population) madrid = ("Madrid", 3300000);
Console.WriteLine(madrid);
```

<details>
<summary>Respuesta</summary>

**`(Madrid, 3300000)`**

A diferencia de las listas y los diccionarios, las tuplas **sí** se imprimen bien.

</details>

<br>

**3.**

```csharp
(string name, int goals) player = ("Yamal", 9);
player.goals += 2;
Console.WriteLine($"{player.name} lleva {player.goals}");
```

<details>
<summary>Respuesta</summary>

**`Yamal lleva 11`**

Las partes de una tupla se pueden cambiar como cualquier variable.

</details>

<br>

**4.**

```csharp
(string name, int age) a = ("Ana", 30);
(string name, int age) b = a;
b.age++;
Console.WriteLine(a.age);
```

<details>
<summary>Respuesta</summary>

**`30`**

Con tuplas, `b = a` hace una **copia** (como con `int`, y al revés que con listas). Cambiar `b` no cambia `a`.

</details>

<br>

**5.**

```csharp
(string name, int age) person = ("Ana", 30);
Console.WriteLine(person.Item1);
```

<details>
<summary>Respuesta</summary>

**`Ana`**

Aunque le pongas nombres, `Item1` y `Item2` siguen existiendo por debajo. (Pero usa los nombres.)

</details>

<br>

**6.**

```csharp
(int quotient, int remainder) Divide(int a, int b)
{
    return (a / b, a % b);
}

(int quotient, int remainder) = Divide(17, 5);
Console.WriteLine($"17 / 5 = {quotient}, y sobran {remainder}");
```

<details>
<summary>Respuesta</summary>

**`17 / 5 = 3, y sobran 2`**

</details>

<br>

**7.**

```csharp
int first = 1;
int second = 2;

(first, second) = (second, first);

Console.WriteLine($"{first} {second}");
```

<details>
<summary>Respuesta</summary>

**`2 1`**

¡Un truco! Así se intercambian dos variables en una sola línea. Sin tuplas necesitarías una tercera variable:

```csharp
int temporary = first;
first = second;
second = temporary;
```

</details>

<br>

**8.**

```csharp
Console.WriteLine(("Ana", 30) == ("Ana", 30));
Console.WriteLine(("Ana", 30) == ("Ana", 31));
```

<details>
<summary>Respuesta</summary>

**`True`** y **`False`**

Dos tuplas son iguales si **todas** sus partes son iguales.

</details>

<br>

---

## Reto final: ¡A programar!

### Parte A: La cafetería ☕

```csharp
var menu = new Dictionary<string, double>
{
    ["café"] = 1.5,
    ["tostada"] = 2.5,
    ["zumo"] = 3,
    ["croissant"] = 2,
};

string[] order = { "café", "tostada", "café", "agua", "zumo" };
```

Recorre el pedido. Para cada cosa, imprime su precio. Si no está en la carta, imprime un mensaje (y no la cobres). Al final, imprime el total.

```
café: 1.5 €
tostada: 2.5 €
café: 1.5 €
Lo siento, no tenemos agua
zumo: 3 €
Total: 8.5 €
```

Extra: después, imprime cuántas unidades se pidieron de cada producto (usando **otro** diccionario):

```
café: 2
tostada: 1
zumo: 1
```

<details>
<summary>Ver una solución</summary>

```csharp
var menu = new Dictionary<string, double>
{
    ["café"] = 1.5,
    ["tostada"] = 2.5,
    ["zumo"] = 3,
    ["croissant"] = 2,
};

string[] order = { "café", "tostada", "café", "agua", "zumo" };

double total = 0;
var quantities = new Dictionary<string, int>();

foreach (string item in order)
{
    if (!menu.ContainsKey(item))
    {
        Console.WriteLine($"Lo siento, no tenemos {item}");
        continue;
    }

    Console.WriteLine($"{item}: {menu[item]} €");
    total += menu[item];

    if (quantities.ContainsKey(item))
    {
        quantities[item]++;
    }
    else
    {
        quantities[item] = 1;
    }
}

Console.WriteLine($"Total: {total} €");
Console.WriteLine();

foreach ((string item, int quantity) in quantities)
{
    Console.WriteLine($"{item}: {quantity}");
}
```

El `continue` (de `03`) se salta el resto de la vuelta cuando el producto no está en la carta.

</details>

<br>

### Parte B: Contador de palabras 🔤

Escribe una función:

```csharp
Dictionary<string, int> CountWords(string text)
```

que devuelva cuántas veces aparece cada palabra. Las mayúsculas no deben importar (`El` y `el` son la misma palabra).

Luego escribe otra función:

```csharp
(string word, int count) GetMostCommon(Dictionary<string, int> wordCounts)
```

que devuelva la palabra más repetida y cuántas veces aparece.

```csharp
Dictionary<string, int> wordCounts = CountWords("El perro y el gato y el pájaro");

foreach ((string word, int count) in wordCounts)
{
    Console.WriteLine($"{word}: {count}");
}

(string word, int count) mostCommon = GetMostCommon(wordCounts);
Console.WriteLine($"La más repetida: {mostCommon.word} ({mostCommon.count})");
```

```
el: 3
perro: 1
y: 2
gato: 1
pájaro: 1
La más repetida: el (3)
```

<details>
<summary>Pista</summary>

- `ToLower()` y luego `Split(' ')` te dan un array con las palabras.
- `CountWords` es igual que el contador de letras de la Lección 4, pero con palabras.
- `GetMostCommon` es como el "buscar el mayor" de la Lección 4. Al final, devuelve una tupla: `return (bestWord, bestCount);`

</details>

<details>
<summary>Ver una solución</summary>

```csharp
Dictionary<string, int> wordCounts = CountWords("El perro y el gato y el pájaro");

foreach ((string word, int count) in wordCounts)
{
    Console.WriteLine($"{word}: {count}");
}

(string word, int count) mostCommon = GetMostCommon(wordCounts);
Console.WriteLine($"La más repetida: {mostCommon.word} ({mostCommon.count})");

Dictionary<string, int> CountWords(string text)
{
    var counts = new Dictionary<string, int>();
    string[] words = text.ToLower().Split(' ');

    foreach (string word in words)
    {
        if (counts.ContainsKey(word))
        {
            counts[word]++;
        }
        else
        {
            counts[word] = 1;
        }
    }

    return counts;
}

(string word, int count) GetMostCommon(Dictionary<string, int> wordCounts)
{
    string bestWord = "";
    int bestCount = 0;

    foreach ((string word, int count) in wordCounts)
    {
        if (count > bestCount)
        {
            bestWord = word;
            bestCount = count;
        }
    }

    return (bestWord, bestCount);
}
```

</details>

<br>

### Parte C: La liga ⚽

Tienes los resultados de unos partidos. Cada partido es una tupla:

```csharp
(string home, int homeGoals, string away, int awayGoals)[] matches =
{
    ("Barça", 3, "Madrid", 1),
    ("Atleti", 2, "Barça", 2),
    ("Madrid", 1, "Atleti", 0),
    ("Sevilla", 0, "Madrid", 2),
    ("Barça", 1, "Sevilla", 0),
};
```

(Sí, es un **array de tuplas**. Cada elemento tiene `home`, `homeGoals`, `away` y `awayGoals`.)

Las reglas: ganar da **3 puntos**, empatar **1** y perder **0**.

1. Escribe una función `void AddPoints(Dictionary<string, int> table, string team, int points)` que sume puntos a un equipo. Si el equipo todavía no está en el diccionario, tiene que añadirlo.
2. Recorre los partidos y usa `AddPoints` para rellenar la clasificación. **Todos** los equipos tienen que aparecer, aunque tengan 0 puntos.
3. Imprime la clasificación y el líder.

```
Barça: 7
Madrid: 6
Atleti: 1
Sevilla: 0
Líder: Barça (7)
```

(El orden de los equipos puede ser distinto.)

<details>
<summary>Pistas</summary>

- Para recorrer los partidos: `foreach ((string home, int homeGoals, string away, int awayGoals) match in matches)`, y luego `match.home`, `match.homeGoals`...
- En cada partido, llama a `AddPoints` **dos veces**: una para el equipo de casa y otra para el de fuera.
- Para que Sevilla aparezca con 0, llama a `AddPoints` también cuando un equipo pierde, con `0` puntos.
- Recuerda la Lección 5 de `04`: un diccionario que pasas a una función es **el mismo** diccionario. Si `AddPoints` lo cambia, el cambio se ve fuera.

</details>

<details>
<summary>Ver una solución</summary>

```csharp
(string home, int homeGoals, string away, int awayGoals)[] matches =
{
    ("Barça", 3, "Madrid", 1),
    ("Atleti", 2, "Barça", 2),
    ("Madrid", 1, "Atleti", 0),
    ("Sevilla", 0, "Madrid", 2),
    ("Barça", 1, "Sevilla", 0),
};

var table = new Dictionary<string, int>();

foreach ((string home, int homeGoals, string away, int awayGoals) match in matches)
{
    if (match.homeGoals > match.awayGoals)
    {
        AddPoints(table, match.home, 3);
        AddPoints(table, match.away, 0);
    }
    else if (match.homeGoals < match.awayGoals)
    {
        AddPoints(table, match.home, 0);
        AddPoints(table, match.away, 3);
    }
    else
    {
        AddPoints(table, match.home, 1);
        AddPoints(table, match.away, 1);
    }
}

string leader = "";
int leaderPoints = -1;

foreach ((string team, int points) in table)
{
    Console.WriteLine($"{team}: {points}");

    if (points > leaderPoints)
    {
        leader = team;
        leaderPoints = points;
    }
}

Console.WriteLine($"Líder: {leader} ({leaderPoints})");

void AddPoints(Dictionary<string, int> table, string team, int points)
{
    if (table.ContainsKey(team))
    {
        table[team] += points;
    }
    else
    {
        table[team] = points;
    }
}
```

`leaderPoints` empieza en `-1` para que, aunque todos los equipos tuvieran 0 puntos, alguno sea líder.

</details>

<br>

### Parte D: Funciones que devuelven tuplas 🧮

1. Escribe `(int lowest, int highest) GetRange(int[] numbers)` (sin mirar la Lección 6, si puedes).
2. Escribe `(int passed, int failed) CountResults(int[] grades)`, que cuente cuántas notas son 5 o más y cuántas menos de 5.

```csharp
int[] temperatures = { -5, 12, 3, -8, 20 };
(int lowest, int highest) = GetRange(temperatures);
Console.WriteLine($"Mínima: {lowest}, máxima: {highest}, diferencia: {highest - lowest}");

int[] grades = { 8, 4, 10, 6, 8, 9 };
(int passed, int failed) = CountResults(grades);
Console.WriteLine($"Aprobados: {passed}, suspensos: {failed}");
```

```
Mínima: -8, máxima: 20, diferencia: 28
Aprobados: 5, suspensos: 1
```

<details>
<summary>Ver una solución</summary>

```csharp
int[] temperatures = { -5, 12, 3, -8, 20 };
(int lowest, int highest) = GetRange(temperatures);
Console.WriteLine($"Mínima: {lowest}, máxima: {highest}, diferencia: {highest - lowest}");

int[] grades = { 8, 4, 10, 6, 8, 9 };
(int passed, int failed) = CountResults(grades);
Console.WriteLine($"Aprobados: {passed}, suspensos: {failed}");

(int lowest, int highest) GetRange(int[] numbers)
{
    int lowest = numbers[0];
    int highest = numbers[0];

    foreach (int number in numbers)
    {
        if (number < lowest)
        {
            lowest = number;
        }
        if (number > highest)
        {
            highest = number;
        }
    }

    return (lowest, highest);
}

(int passed, int failed) CountResults(int[] grades)
{
    int passed = 0;
    int failed = 0;

    foreach (int grade in grades)
    {
        if (grade >= 5)
        {
            passed++;
        }
        else
        {
            failed++;
        }
    }

    return (passed, failed);
}
```

</details>

<br>

### Retos extra

1. En la liga, guarda también los **goles a favor** de cada equipo en otro diccionario. Si dos equipos empatan a puntos, el líder es el que tenga más goles.
2. En el contador de palabras, quita los signos de puntuación antes de contar, para que `"perro,"` y `"perro"` sean la misma palabra. (Pista: `Replace`.)
3. Haz una agenda: un `Dictionary<string, string>` de nombre → teléfono, con funciones `AddContact`, `FindPhone` (que imprima `No encontrado` si no existe) y `PrintAll`.
