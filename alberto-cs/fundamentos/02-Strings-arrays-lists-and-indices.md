# Strings, arrays, listas e índices 📚

Sigue usando el mismo proyecto de `01-Variables.md`. Para cada reto, borra o comenta el código del anterior.

Recuerda: piensa la respuesta **antes** de abrir los bloques ocultos.

---

## Lección 1: Índices

Un string es una fila de caracteres. Cada carácter tiene una **posición**, y esa posición se llama **índice**.

En C#, los índices **empiezan en 0**, no en 1:

```
  A   l   b   e   r   t   o
  0   1   2   3   4   5   6
```

Para sacar un carácter, escribe el índice entre corchetes `[ ]`:

```csharp
string name = "Alberto";

Console.WriteLine(name[0]);  // A
Console.WriteLine(name[1]);  // l
Console.WriteLine(name[6]);  // o
```

¿Por qué empieza en 0? Piensa en el índice como **"cuántos pasos hay desde el principio"**. La `A` está a 0 pasos del principio. La `l`, a 1 paso.

### El último índice

`"Alberto"` tiene 7 letras, pero el último índice es **6**. Siempre es así: el último índice es la longitud menos 1.

```csharp
Console.WriteLine(name.Length);            // 7
Console.WriteLine(name[name.Length - 1]);  // o
Console.WriteLine(name[7]);                // 💥 error: no existe el índice 7
```

El último error no aparece al escribir el código: el programa **se cuelga al ejecutarlo** con un `IndexOutOfRangeException` ("índice fuera de rango"). Es uno de los errores más comunes en programación, así que acostúmbrate a ese nombre.

> 💡 Un carácter sacado con `[ ]` es un `char`, no un `string`. `name[0]` es `'A'`, con comillas simples.

> 💡 Atajo: `name[^1]` es el último carácter, `name[^2]` el penúltimo, etc. Funciona igual en arrays y listas.

### Curiosidad: ¿*indexes* o *indices*? 🤓

En inglés, *index* tiene un plural irregular: **indices**. Viene del latín, igual que *matrix → matrices* o *appendix → appendices*.

Pero *indexes* también es correcto. En la práctica:

- En programación y matemáticas se suele decir **indices**: *"array indices start at 0"*.
- Para el índice de un libro o de una base de datos se suele decir **indexes**.

Vas a ver las dos formas en documentación y en Stack Overflow. Significan lo mismo. (En español no hay problema: índice, índices.)

---

## Lección 2: Métodos de string y las sugerencias de VS Code

### Propiedades y métodos

Un string trae "de serie" muchas cosas que puedes usar. Se escriben después de un punto `.`:

```csharp
string city = "Madrid";

Console.WriteLine(city.Length);     // 6
Console.WriteLine(city.ToUpper());  // MADRID
```

- `Length` es una **propiedad**: un dato que el string ya tiene. **Sin** paréntesis.
- `ToUpper()` es un **método**: una acción que el string sabe hacer. **Con** paréntesis.

### Las sugerencias de VS Code

Escribe esto en tu `Program.cs`:

```csharp
string city = "Madrid";
city.
```

Cuando escribes el `.`, VS Code abre una lista. **Esa lista no es aleatoria**: es exactamente todo lo que un string puede hacer. VS Code sabe que `city` es un `string`, así que te enseña las propiedades y métodos de `string`.

Cómo usarla:

- Muévete con las **flechas** ↑ ↓.
- Al lado (o debajo) aparece una **descripción** de cada uno, en inglés: qué hace, qué le tienes que dar entre paréntesis y qué te devuelve.
- Pulsa **Tab** o **Enter** para elegir uno.
- Si la lista no aparece o la cerraste, pulsa **Ctrl + Espacio**.
- Los métodos tienen un icono de **cubo** 🟪. Las propiedades tienen un icono de **llave inglesa** 🔧.

Ahora prueba lo mismo con un número:

```csharp
int age = 34;
age.
```

¡La lista es distinta y mucho más corta! Un `int` no tiene `ToUpper()`, porque no tendría sentido. **La lista depende del tipo de la variable.**

Esto es muy útil: si no recuerdas cómo se llama un método, escribe el punto y busca. Y si un método no está en la lista, es que ese tipo no lo tiene.

> 💡 Vas a ver métodos raros como `GetHashCode`, `Normalize` o `CompareTo`. No te preocupes por ellos. Usarás unos 10 casi siempre.

### Los métodos de string más útiles

| Método | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `ToUpper()` | Todo a mayúsculas | `"Hola".ToUpper()` | `"HOLA"` |
| `ToLower()` | Todo a minúsculas | `"Hola".ToLower()` | `"hola"` |
| `Trim()` | Quita espacios al principio y al final | `"  hola  ".Trim()` | `"hola"` |
| `Contains(x)` | ¿Contiene este texto? | `"Barcelona".Contains("celo")` | `true` |
| `StartsWith(x)` | ¿Empieza por este texto? | `"Barcelona".StartsWith("Bar")` | `true` |
| `EndsWith(x)` | ¿Termina con este texto? | `"Barcelona".EndsWith("na")` | `true` |
| `IndexOf(x)` | ¿En qué índice aparece por primera vez? `-1` si no aparece | `"Barcelona".IndexOf("c")` | `3` |
| `Replace(a, b)` | Cambia todos los `a` por `b` | `"casa".Replace("a", "o")` | `"coso"` |
| `Substring(inicio, cuántos)` | Un trozo, desde `inicio`, de `cuántos` caracteres | `"Barcelona".Substring(0, 3)` | `"Bar"` |
| `Substring(inicio)` | Un trozo, desde `inicio` hasta el final | `"Barcelona".Substring(3)` | `"celona"` |
| `Split(x)` | Corta el string en trozos y te da un **array** (Lección 3) | `"a,b,c".Split(',')` | `["a", "b", "c"]` |

Fíjate: `Contains`, `StartsWith` y `EndsWith` dan un `bool`. Al imprimir un `bool`, C# escribe `True` o `False` (con mayúscula).

> ⚠️ Mayúsculas y minúsculas importan: `"Barcelona".Contains("bar")` es `false`.

### ⚠️ Los métodos no cambian el string original

Esta es **muy** importante:

```csharp
string name = "alberto";
name.ToUpper();
Console.WriteLine(name);  // alberto  😱
```

`ToUpper()` no cambia `name`. Crea un string **nuevo** en mayúsculas y te lo devuelve. Si no lo guardas en ningún sitio, se pierde.

```csharp
string name = "alberto";
name = name.ToUpper();    // guarda el resultado
Console.WriteLine(name);  // ALBERTO ✅
```

Esto pasa con **todos** los métodos de string.

### Encadenar métodos

Como cada método devuelve un string nuevo, puedes poner otro punto detrás:

```csharp
string input = "   PeDrI   ";
string clean = input.Trim().ToLower();   // "pedri"
```

Se lee de izquierda a derecha: primero `Trim()`, y al resultado se le hace `ToLower()`.

📖 Más información:
- [Microsoft: Strings en C#](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/strings/)
- [W3Schools: C# Strings](https://www.w3schools.com/cs/cs_strings.php) (en inglés)

## Reto 1: ¿Qué imprime? (strings)

Di qué imprime cada línea. Si crees que da error o se cuelga, dilo.

**1.**

```csharp
string city = "Madrid";
Console.WriteLine(city.Length);
```

<details>
<summary>Respuesta</summary>

**`6`**

</details>

<br>

**2.**

```csharp
string city = "Madrid";
Console.WriteLine(city[city.Length - 1]);
```

<details>
<summary>Respuesta</summary>

**`d`**

`city.Length - 1` es `5`, y en el índice 5 está la `d`.

</details>

<br>

**3.**

```csharp
Console.WriteLine("Barcelona".Contains("Celo"));
```

<details>
<summary>Respuesta</summary>

**`False`**

`"Barcelona"` tiene `celo` con minúscula, no `Celo`.

</details>

<br>

**4.**

```csharp
Console.WriteLine("Barcelona".IndexOf("a"));
```

<details>
<summary>Respuesta</summary>

**`1`**

`IndexOf` te da la **primera** vez que aparece. `B` es el 0, `a` es el 1. (Hay otra `a` al final, pero no importa.)

</details>

<br>

**5.**

```csharp
Console.WriteLine("Barcelona".IndexOf("z"));
```

<details>
<summary>Respuesta</summary>

**`-1`**

No hay ninguna `z`. `-1` es la forma de `IndexOf` de decir "no lo encontré".

</details>

<br>

**6.**

```csharp
Console.WriteLine("Barcelona".Replace("a", "o"));
```

<details>
<summary>Respuesta</summary>

**`Borcelono`**

`Replace` cambia **todas** las `a`, no solo la primera.

</details>

<br>

**7.**

```csharp
Console.WriteLine("Barcelona".Substring(5));
```

<details>
<summary>Respuesta</summary>

**`lona`**

```
B  a  r  c  e  l  o  n  a
0  1  2  3  4  5  6  7  8
```

Desde el índice 5 (`l`) hasta el final.

</details>

<br>

**8.**

```csharp
Console.WriteLine("Alberto".Substring(2, 3));
```

<details>
<summary>Respuesta</summary>

**`ber`**

Empieza en el índice 2 (`b`) y coge **3** caracteres: `b`, `e`, `r`. El segundo número es **cuántos**, no "hasta dónde".

</details>

<br>

**9.**

```csharp
Console.WriteLine("  hola  ".Trim().Length);
```

<details>
<summary>Respuesta</summary>

**`4`**

Primero `Trim()` deja `"hola"`, y su `Length` es 4.

</details>

<br>

**10.**

```csharp
string name = "alberto";
name.ToUpper();
Console.WriteLine(name);
```

<details>
<summary>Respuesta</summary>

**`alberto`**

`ToUpper()` devolvió `"ALBERTO"`, pero nadie lo guardó. `name` no cambió. Arreglo: `name = name.ToUpper();`

</details>

<br>

**11.**

```csharp
Console.WriteLine("Messi".StartsWith("m"));
```

<details>
<summary>Respuesta</summary>

**`False`**

Empieza por `M` mayúscula.

</details>

<br>

**12.**

```csharp
Console.WriteLine("Messi".ToLower().StartsWith("m"));
```

<details>
<summary>Respuesta</summary>

**`True`**

Primero `"messi"`, y ese sí empieza por `m`.

</details>

<br>

**13.**

```csharp
Console.WriteLine("Real Madrid".Split(' ')[1]);
```

<details>
<summary>Respuesta</summary>

**`Madrid`**

`Split(' ')` corta por los espacios y da `["Real", "Madrid"]`. El índice 1 es `"Madrid"`.

</details>

<br>

**14.**

```csharp
Console.WriteLine("Alberto"[7]);
```

<details>
<summary>Respuesta</summary>

**💥 Se cuelga** con `IndexOutOfRangeException`.

`"Alberto"` tiene 7 letras, así que los índices van de 0 a 6. El 7 no existe.

</details>

<br>

**15.**

```csharp
string team = "  real madrid  ";
team = team.Trim().ToUpper().Replace("REAL ", "");
Console.WriteLine(team);
```

<details>
<summary>Respuesta</summary>

**`MADRID`**

Paso a paso: `"  real madrid  "` → `Trim()` → `"real madrid"` → `ToUpper()` → `"REAL MADRID"` → `Replace("REAL ", "")` → `"MADRID"`.

Fíjate: `Replace` con `""` sirve para **borrar** texto.

</details>

<br>

## Reto 2: Explora la lista

Escribe esto en tu `Program.cs`:

```csharp
string word = "fútbol";
word.
```

Busca en la lista de sugerencias estos métodos. Para cada uno: lee la descripción, **adivina** qué hace, y luego pruébalo con `Console.WriteLine` para ver si acertaste.

1. `LastIndexOf`
2. `PadLeft`
3. `Insert`
4. `Remove`
5. `TrimStart`
6. `ToCharArray`

Después, busca **otros dos** que no estén en esta lista ni en la lección y haz lo mismo.

<details>
<summary>Respuestas</summary>

| Método | Qué hace | Ejemplo | Resultado |
|---|---|---|---|
| `LastIndexOf(x)` | Como `IndexOf`, pero busca la **última** vez que aparece | `"banana".LastIndexOf("a")` | `5` |
| `PadLeft(n)` | Añade espacios a la izquierda hasta que mida `n` | `"7".PadLeft(3)` | `"  7"` |
| `Insert(i, x)` | Mete el texto `x` en el índice `i` | `"futbol".Insert(4, "-")` | `"futb-ol"` |
| `Remove(i, n)` | Borra `n` caracteres desde el índice `i` | `"fútbol".Remove(0, 3)` | `"bol"` |
| `TrimStart()` | Como `Trim()`, pero solo quita espacios del **principio** | `"  hola  ".TrimStart()` | `"hola  "` |
| `ToCharArray()` | Convierte el string en un array de `char` | `"hola".ToCharArray()` | `['h', 'o', 'l', 'a']` |

</details>

<br>

## Reto 3: Trabaja con strings

### Parte A: El correo

```csharp
string email = "alberto.garcia@gmail.com";
```

Usando métodos de string (sin escribir los trozos a mano), imprime:

```
Usuario: alberto.garcia
Dominio: gmail.com
```

<details>
<summary>Pista</summary>

Hay dos formas:

- `Split('@')` y luego coges los índices 0 y 1.
- `IndexOf("@")` para saber dónde está la `@`, y luego `Substring`.

</details>

<details>
<summary>Ver soluciones</summary>

Con `Split`:

```csharp
string email = "alberto.garcia@gmail.com";
string[] parts = email.Split('@');

Console.WriteLine($"Usuario: {parts[0]}");
Console.WriteLine($"Dominio: {parts[1]}");
```

Con `IndexOf` y `Substring`:

```csharp
string email = "alberto.garcia@gmail.com";
int atIndex = email.IndexOf("@");

string user = email.Substring(0, atIndex);
string domain = email.Substring(atIndex + 1);

Console.WriteLine($"Usuario: {user}");
Console.WriteLine($"Dominio: {domain}");
```

El `+ 1` es para saltarse la `@`.

</details>

<br>

### Parte B: Arregla el nombre

Alguien escribió su nombre muy mal en un formulario:

```csharp
string input = "   pEDRI   ";
```

Conviértelo en `"Pedri"`: sin espacios, primera letra mayúscula y el resto minúsculas.

<details>
<summary>Pista</summary>

- Primero quita los espacios.
- Coge la primera letra con `Substring(0, 1)` y ponla en mayúscula.
- Coge el resto con `Substring(1)` y ponlo en minúscula.
- Júntalos con `+`.

</details>

<details>
<summary>Ver una solución</summary>

```csharp
string input = "   pEDRI   ";

string trimmed = input.Trim();
string firstLetter = trimmed.Substring(0, 1).ToUpper();
string rest = trimmed.Substring(1).ToLower();
string name = firstLetter + rest;

Console.WriteLine(name);  // Pedri
```

</details>

<br>

---

## Lección 3: Arrays

Un **array** (a veces en español *arreglo* o *vector*) guarda **varios valores del mismo tipo** en una sola variable.

```csharp
string[] players = { "Pedri", "Gavi", "Yamal" };
int[] goals = { 2, 0, 5 };
```

Los `[]` después del tipo significan "array de". `string[]` es "array de strings".

### Índices, otra vez

Funcionan igual que en un string: empiezan en 0.

```
players:   "Pedri"   "Gavi"   "Yamal"
              0         1        2
```

```csharp
Console.WriteLine(players[0]);      // Pedri
Console.WriteLine(players.Length);  // 3

players[1] = "Fermín";              // cambia "Gavi" por "Fermín"
```

### Crear un array vacío

Si sabes cuántos elementos habrá, pero todavía no sus valores:

```csharp
int[] scores = new int[5];   // 5 huecos
scores[0] = 10;
scores[1] = 7;
```

Los huecos que no rellenas tienen un valor por defecto: `0` para `int` y `double`, `false` para `bool`, y `null` (nada) para `string`.

### ⚠️ Un array no puede crecer

Un array tiene un **tamaño fijo**. Si lo creas con 3 elementos, tendrá 3 para siempre. No hay forma de añadir un cuarto.

### Imprimir un array

```csharp
Console.WriteLine(players);  // System.String[]  😕
```

Eso no es lo que querías. `Console.WriteLine` no sabe imprimir los elementos uno a uno. Usa `string.Join`, que los junta en un solo texto:

```csharp
Console.WriteLine(string.Join(", ", players));  // Pedri, Fermín, Yamal
```

(En `03-If-and-loops.md` verás cómo recorrerlos uno a uno con bucles.)

> 💡 En código más moderno verás arrays creados con corchetes: `string[] players = ["Pedri", "Gavi"];`. Es lo mismo.

> ⚠️ `var players = { "Pedri", "Gavi" };` **no funciona**: con solo las llaves, C# no sabe qué tipo quieres. Tendrías que escribir `var players = new string[] { "Pedri", "Gavi" };`. Para arrays es más cómodo escribir el tipo a la izquierda, como hasta ahora.

---

## Lección 4: Listas

Una **lista** (`List`) es como un array, pero **puede crecer y encogerse**.

```csharp
List<string> players = new List<string> { "Pedri", "Gavi" };
```

`List<string>` se lee "lista de strings". Lo que va entre `< >` es el tipo de lo que hay dentro.

Fíjate en que `List<string>` aparece **dos veces**. Con `var` (de `01`), solo una:

```csharp
var players = new List<string> { "Pedri", "Gavi" };
```

El tipo se ve claramente a la derecha, así que a partir de ahora crearemos las listas con `var`.

Una lista vacía:

```csharp
var goals = new List<int>();
```

> 💡 También verás estas dos formas. Las dos ponen el tipo a la izquierda y no lo repiten:
>
> ```csharp
> List<string> players = new();
> List<string> players = ["Pedri", "Gavi"];
> ```
>
> Estas **no** funcionan con `var`: a la derecha no hay ningún tipo, así que C# no tendría de dónde adivinarlo.

### Lo que puedes hacer con una lista

```csharp
var players = new List<string> { "Pedri", "Gavi" };

players.Add("Yamal");          // al final:      Pedri, Gavi, Yamal
players.Insert(0, "Raphinha"); // en el índice 0: Raphinha, Pedri, Gavi, Yamal
players.Remove("Gavi");        // por valor:     Raphinha, Pedri, Yamal
players.RemoveAt(0);           // por índice:    Pedri, Yamal

Console.WriteLine(players.Count);             // 2
Console.WriteLine(players[1]);                // Yamal
Console.WriteLine(players.Contains("Pedri")); // True
Console.WriteLine(players.IndexOf("Yamal"));  // 1

players.Clear();               // la vacía
```

Y para imprimirla, igual que con un array:

```csharp
Console.WriteLine(string.Join(", ", players));
```

---

## Lección 5: Arrays vs. listas

| | Array | Lista |
|---|---|---|
| Cómo se escribe el tipo | `string[]` | `List<string>` |
| Cómo se crea | `string[] x = { "a", "b" };` o `string[] x = new string[3];` | `var x = new List<string> { "a", "b" };` o `var x = new List<string>();` |
| Tamaño | **Fijo** | Crece y encoge |
| Cuántos elementos tiene | `.Length` | `.Count` |
| Leer y cambiar con `[i]` | ✅ | ✅ |
| Añadir y quitar | ❌ | ✅ `Add`, `Insert`, `Remove`, `RemoveAt` |

¿Cuál uso?

- ¿Sabes cuántos elementos habrá y no va a cambiar? (Los días de la semana, las notas de 5 exámenes...) → **array**
- ¿Vas a añadir o quitar cosas? (Reservas, jugadores de un equipo, una lista de la compra...) → **lista**

Si dudas, usa una **lista**.

### Las sugerencias, otra vez

Haz la prueba de la Lección 2 con un array y con una lista:

```csharp
string[] playerArray = { "Pedri", "Gavi" };
var playerList = new List<string> { "Pedri", "Gavi" };

playerArray.
playerList.
```

Mira las dos listas de sugerencias. En `playerList.` aparecen `Add`, `Remove`, `Count`... En `playerArray.` **no hay `Add`**: VS Code te está diciendo que un array no puede crecer.

> ⚠️ En las dos verás también muchos métodos extra que vienen de algo llamado **LINQ** (por ejemplo `Count()` **con** paréntesis, o `Append`). Por ahora, ignóralos. Para arrays usa `.Length`, y para listas `.Count` (sin paréntesis).

### Convertir entre arrays y listas

Hay métodos que convierten uno en otro:

```csharp
string[] playerArray = { "Pedri", "Gavi" };

List<string> playerList = playerArray.ToList();   // array → lista
string[] backToArray = playerList.ToArray();      // lista → array
```

Y algunos métodos de string te devuelven un array sin que lo pidas:

```csharp
string[] words = "hola que tal".Split(' ');   // Split devuelve string[]
char[] letters = "hola".ToCharArray();        // ToCharArray devuelve char[]
```

Ten cuidado con esto, porque es fácil confundirse:

```csharp
string[] words = "hola que tal".Split(' ');
words.Add("hoy");   // ❌ error: es un array, no tiene Add

List<string> wordList = words.ToList();
wordList.Add("hoy");  // ✅
```

### Pasa el ratón por encima

Si no sabes qué tipo tiene una variable, **pon el ratón encima** del nombre en VS Code. Aparece una ventanita como esta:

```
(local variable) string[] words
```

Ahí lo ves: `string[]`, un array. Si pone `List<string>`, es una lista.

También funciona encima de un **método**: te dice qué tipo devuelve. Pon el ratón encima de `Split` y verás que empieza con `string[]`.

📖 Más información:
- [Microsoft: Arrays](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/arrays)
- [Microsoft: Tutorial de listas](https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/tutorials/list-collection)
- [W3Schools: C# Arrays](https://www.w3schools.com/cs/cs_arrays.php) (en inglés)

## Reto 4: ¿Qué imprime? (arrays y listas)

**1.**

```csharp
int[] numbers = { 4, 8, 15, 16, 23, 42 };
Console.WriteLine(numbers[2]);
```

<details>
<summary>Respuesta</summary>

**`15`**

Índice 0 → 4, índice 1 → 8, índice 2 → 15.

</details>

<br>

**2.**

```csharp
int[] numbers = { 4, 8, 15, 16, 23, 42 };
Console.WriteLine(numbers[numbers.Length - 1]);
```

<details>
<summary>Respuesta</summary>

**`42`**

`numbers.Length` es 6, así que `numbers[5]`: el último.

</details>

<br>

**3.**

```csharp
int[] numbers = { 4, 8, 15, 16, 23, 42 };
numbers[0] = 100;
Console.WriteLine(numbers[0] + numbers[1]);
```

<details>
<summary>Respuesta</summary>

**`108`**

El 4 se cambió por 100. Luego `100 + 8`.

</details>

<br>

**4.**

```csharp
int[] numbers = { 4, 8, 15, 16, 23, 42 };
Console.WriteLine(numbers[6]);
```

<details>
<summary>Respuesta</summary>

**💥 Se cuelga** con `IndexOutOfRangeException`. Hay 6 elementos, los índices van de 0 a 5.

</details>

<br>

**5.**

```csharp
int[] scores = new int[3];
Console.WriteLine(scores[1]);
```

<details>
<summary>Respuesta</summary>

**`0`**

Nadie rellenó ese hueco, así que tiene el valor por defecto de un `int`.

</details>

<br>

**6.**

```csharp
string[] names = new string[10];
names[0] = "Ana";
Console.WriteLine(names.Length);
```

<details>
<summary>Respuesta</summary>

**`10`**

`Length` es el **tamaño** del array, no cuántos huecos has rellenado.

</details>

<br>

**7.**

```csharp
var fruits = new List<string> { "manzana", "pera" };
fruits.Add("kiwi");
Console.WriteLine(fruits.Count);
```

<details>
<summary>Respuesta</summary>

**`3`**

</details>

<br>

**8.**

```csharp
var fruits = new List<string> { "manzana", "pera", "kiwi" };
fruits.Insert(0, "uva");
Console.WriteLine(fruits[1]);
```

<details>
<summary>Respuesta</summary>

**`manzana`**

Después del `Insert`, la lista es `uva, manzana, pera, kiwi`. Todos se movieron un sitio a la derecha.

</details>

<br>

**9.**

```csharp
var fruits = new List<string> { "manzana", "pera", "kiwi" };
fruits.Remove("pera");
Console.WriteLine(string.Join(" - ", fruits));
```

<details>
<summary>Respuesta</summary>

**`manzana - kiwi`**

</details>

<br>

**10.**

```csharp
var fruits = new List<string> { "manzana", "pera", "kiwi" };
fruits.RemoveAt(0);
Console.WriteLine(fruits[0]);
```

<details>
<summary>Respuesta</summary>

**`pera`**

Se borró `manzana`, y `pera` pasó a ser la primera.

</details>

<br>

**11.**

```csharp
var fruits = new List<string> { "manzana", "pera", "kiwi" };
Console.WriteLine(fruits.Contains("Kiwi"));
```

<details>
<summary>Respuesta</summary>

**`False`**

Mayúsculas y minúsculas importan, también en las listas.

</details>

<br>

**12.**

```csharp
var fruits = new List<string> { "manzana", "pera" };
Console.WriteLine(fruits);
```

<details>
<summary>Respuesta</summary>

**`` System.Collections.Generic.List`1[System.String] ``**

`Console.WriteLine` no imprime los elementos de una lista. Usa `string.Join(", ", fruits)`.

</details>

<br>

**13.**

```csharp
string[] parts = "Pedri,Gavi,Yamal".Split(',');
Console.WriteLine(parts.Length);
Console.WriteLine(parts[2]);
```

<details>
<summary>Respuesta</summary>

**`3`** y **`Yamal`**

</details>

<br>

**14. Pregunta trampa 🪤**

```csharp
var listA = new List<string> { "Pedri" };
List<string> listB = listA;
listB.Add("Gavi");
Console.WriteLine(listA.Count);
```

<details>
<summary>Respuesta</summary>

**`2`** 😮

En `01-Variables.md` viste que `int yourAge = myAge;` hace una **copia**. Con listas y arrays **no** es así.

`listB = listA` no crea una lista nueva: hace que `listB` apunte a **la misma** lista. Es como dos nombres para la misma caja. Lo que añades por `listB` también lo ves por `listA`.

Si quieres una copia de verdad, usa `ToList()`:

```csharp
List<string> listB = listA.ToList();  // ahora sí es una lista nueva
```

</details>

<br>

## Reto 5: ¿Funciona o no?

**1.**

```csharp
int[] numbers = { 1, 2, 3 };
numbers.Add(4);
```

<details>
<summary>Respuesta</summary>

❌ Un array no tiene `Add`. Usa una lista, o convierte con `numbers.ToList()`.

</details>

<br>

**2.**

```csharp
var numbers = new List<int> { 1, 2, 3 };
Console.WriteLine(numbers.Length);
```

<details>
<summary>Respuesta</summary>

❌ Las listas usan `Count`, no `Length`.

</details>

<br>

**3.**

```csharp
var names = new List<string> { "Ana" };
names.Add(25);
```

<details>
<summary>Respuesta</summary>

❌ Es una lista de `string`. No le puedes meter un `int`.

</details>

<br>

**4.**

```csharp
string[] words = "uno dos tres".Split(' ');
List<string> wordList = words.ToList();
wordList.Add("cuatro");
```

<details>
<summary>Respuesta</summary>

✅ Funciona. `Split` da un array, `ToList()` lo convierte en lista, y a la lista sí le puedes hacer `Add`.

</details>

<br>

**5.**

```csharp
List<string> words = "uno dos tres".Split(' ');
```

<details>
<summary>Respuesta</summary>

❌ `Split` devuelve un `string[]`, no una `List<string>`. Arreglo:

```csharp
List<string> words = "uno dos tres".Split(' ').ToList();
```

</details>

<br>

**6.**

```csharp
string name = "Pedri";
name[0] = 'p';
```

<details>
<summary>Respuesta</summary>

❌ Puedes **leer** un carácter de un string con `[ ]`, pero **no cambiarlo**. Los strings no se pueden modificar (por eso los métodos de string siempre devuelven uno nuevo). Arreglo:

```csharp
name = "p" + name.Substring(1);
```

</details>

<br>

## Reto 6: La plantilla del equipo ⚽

1. Crea una **lista** con 3 jugadores de tu equipo favorito.
2. Añade 2 jugadores más al final.
3. El portero tiene que ir el primero: añádelo en el índice 0.
4. Uno de los jugadores se lesionó. Quítalo **por su nombre**.
5. Imprime cuántos jugadores hay y la lista completa, separada por comas.
6. Imprime el primer y el último jugador. Para el último, no escribas el número a mano: calcúlalo con `Count`.
7. Convierte la lista en un **array**. Pasa el ratón por encima de las dos variables para comprobar que una es `List<string>` y la otra `string[]`.
8. Cambia el nombre del primer jugador **en el array**. Imprime los dos (lista y array) con `string.Join`. ¿Cambió también la lista? ¿Por qué?

Ejemplo de resultado:

```
Jugadores: 5
Ter Stegen, Pedri, Gavi, Lewandowski, Raphinha
Primero: Ter Stegen
Último: Raphinha
Lista: Ter Stegen, Pedri, Gavi, Lewandowski, Raphinha
Array: Szczęsny, Pedri, Gavi, Lewandowski, Raphinha
```

<details>
<summary>Ver una solución</summary>

```csharp
var squad = new List<string> { "Pedri", "Gavi", "Yamal" };

squad.Add("Lewandowski");
squad.Add("Raphinha");
squad.Insert(0, "Ter Stegen");
squad.Remove("Yamal");

Console.WriteLine($"Jugadores: {squad.Count}");
Console.WriteLine(string.Join(", ", squad));

Console.WriteLine($"Primero: {squad[0]}");
Console.WriteLine($"Último: {squad[squad.Count - 1]}");

string[] squadArray = squad.ToArray();
squadArray[0] = "Szczęsny";

Console.WriteLine($"Lista: {string.Join(", ", squad)}");
Console.WriteLine($"Array: {string.Join(", ", squadArray)}");
```

La lista **no** cambió. `ToArray()` crea un array **nuevo**, con una copia de los elementos. Después son independientes. (Compáralo con la pregunta trampa del Reto 4.)

</details>
