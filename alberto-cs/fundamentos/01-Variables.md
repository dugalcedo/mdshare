# Fundamentos de C# 🧱

Estas lecciones van de lo más básico: crear un proyecto, entender qué hay en `Program.cs`, guardar datos en variables y ponerles buenos nombres.

Después de las lecciones hay retos. Hazlos en orden. Si te atascas, vuelve a leer la lección.

En los retos hay bloques que puedes abrir y cerrar haciendo clic, como este:

<details>
<summary>Haz clic aquí</summary>

¡Eso es! Aquí dentro estarán las respuestas. Intenta pensar la respuesta **antes** de abrirlo.

</details>

---

## Lección 1: Crear una app con `dotnet new console`

Vas a crear **un solo proyecto** y usarlo para todos los retos de estas lecciones.

### Paso 1: Abre una terminal

En VS Code: menú **Terminal → New Terminal**. Comprueba que tienes .NET instalado:

```
dotnet --version
```

Si sale un número (por ejemplo `8.0.403`), todo bien.

### Paso 2: Crea el proyecto

Ve a la carpeta donde quieras guardar tus proyectos y escribe:

```
dotnet new console -n Practicas
```

En vez de `Practicas`, puedes usar el nombre que quieras.

¿Qué significa cada parte?

| Parte | Significado |
|---|---|
| `dotnet` | El programa de .NET |
| `new` | "Crea algo nuevo" |
| `console` | El tipo de proyecto: una app de consola (texto en la terminal, sin ventanas) |
| `-n Practicas` | El nombre (*name*) del proyecto. También será el nombre de la carpeta |

### Paso 3: Entra en la carpeta

```
cd Practicas
```

Dentro verás:

| Archivo / carpeta | Para qué sirve |
|---|---|
| `Program.cs` | **Tu código.** Aquí es donde escribes |
| `Practicas.csproj` | La configuración del proyecto. Por ahora no lo toques |
| `obj/` (y luego `bin/`) | Archivos que crea .NET al compilar. Tampoco los toques |

### Paso 4: Ejecuta la app

```
dotnet run
```

Debería salir:

```
Hello, World!
```

`dotnet run` hace dos cosas: **compila** tu código (lo traduce a algo que el ordenador entiende) y luego lo **ejecuta**.

> ⚠️ Si cambias el código y no ves el cambio, seguramente no guardaste el archivo.

### Un proyecto para todos los retos

Cada reto lo escribes en el mismo `Program.cs`. Cuando empieces un reto nuevo, tienes dos opciones con el código del anterior:

- **Borrarlo.**
- **Comentarlo**, para conservarlo. Selecciona las líneas y usa el menú **Edit → Toggle Line Comment** (en español: **Editar → Alternar comentario de línea**). Cada línea empezará con `//` y C# la ignorará.

📖 Más información:
- [Microsoft: Crear una app de consola con VS Code](https://learn.microsoft.com/es-es/dotnet/core/tutorials/with-visual-studio-code)

---

## Lección 2: `class Program` y `Main` vs. instrucciones de nivel superior

### La forma antigua

Antes (hasta .NET 5), **todo** programa de C# tenía que verse así:

```csharp
using System;

namespace MiPrimeraApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

Muchas líneas solo para imprimir un texto. La regla era: el programa empieza en un método llamado `Main`, y ese método tiene que estar dentro de una clase (normalmente llamada `Program`).

Vas a ver esta forma en tutoriales antiguos, en Stack Overflow y quizás en tu curso. **No está mal.** Sigue funcionando.

### La forma nueva

Desde .NET 6, puedes escribir solo esto:

```csharp
Console.WriteLine("Hello, World!");
```

Esto se llama **instrucciones de nivel superior** (en inglés, *top-level statements*). "Nivel superior" quiere decir que el código no está dentro de ninguna clase ni método: está directamente en el archivo.

### ¿Dónde está `Main` ahora?

Sigue existiendo, pero no lo ves. Cuando compilas, C# coge tu código y lo mete **él solo** dentro de una clase `Program` con un método `Main`. Es como si C# escribiera la parte aburrida por ti.

```
Lo que tú escribes:              Lo que C# genera por dentro:

Console.WriteLine("Hola");  →    class Program
                                 {
                                     static void Main(string[] args)
                                     {
                                         Console.WriteLine("Hola");
                                     }
                                 }
```

### En estas lecciones

**Usa siempre instrucciones de nivel superior.** Escribe tu código directamente en `Program.cs`, sin `class Program` y sin `Main`.

Dos reglas:

- Solo **un** archivo del proyecto puede tener instrucciones de nivel superior. Ese archivo es `Program.cs`.
- Si un día creas tus propias clases, ponlas en otros archivos (o al final de `Program.cs`, nunca arriba).

> 💡 Si alguna vez necesitas la forma antigua, puedes crear el proyecto así:
> `dotnet new console -n MiApp --use-program-main`

📖 Más información:
- [Microsoft: Instrucciones de nivel superior](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/program-structure/top-level-statements)

## Reto 1: Traduce a la forma nueva

Este programa está escrito a la forma antigua. Reescríbelo con instrucciones de nivel superior. El resultado al ejecutarlo tiene que ser exactamente igual.

```csharp
using System;

namespace Tienda
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bienvenido a la tienda");
            Console.WriteLine("Hoy tenemos ofertas");
            Console.WriteLine("¡Gracias por venir!");
        }
    }
}
```

<details>
<summary>Ver la solución</summary>

```csharp
Console.WriteLine("Bienvenido a la tienda");
Console.WriteLine("Hoy tenemos ofertas");
Console.WriteLine("¡Gracias por venir!");
```

Solo quedan las líneas que **hacen algo**. Todo lo demás (`using System;`, `namespace`, `class`, `Main` y las llaves `{ }`) lo pone C# por ti.

</details>

---

## Lección 3: Tipos de datos y variables

### ¿Qué es una variable?

Una variable es una **caja con nombre** donde guardas un dato. Cada caja tiene:

- un **tipo**: qué clase de dato cabe dentro (texto, número entero, número con decimales...)
- un **nombre**: cómo la llamas para usarla después
- un **valor**: lo que hay dentro ahora mismo

### Los tipos básicos

| Tipo | Qué guarda | Ejemplos de valores |
|---|---|---|
| `string` | Texto. Va entre comillas dobles `" "` | `"Alberto"`, `"Hola, mundo"`, `""` (texto vacío) |
| `int` | Número entero (sin decimales) | `25`, `-3`, `0`, `1000000` |
| `double` | Número con decimales. Se usa **punto**, no coma | `1.78`, `19.99`, `-0.5` |
| `bool` | Verdadero o falso. Solo dos valores posibles | `true`, `false` |
| `char` | **Un solo** carácter. Va entre comillas simples `' '` | `'A'`, `'z'`, `'7'`, `'?'` |

¿Cómo elegir?

- ¿Es texto? → `string`
- ¿Es un número que **cuentas** (personas, goles, años)? → `int`
- ¿Es un número que **mides** y puede tener decimales (precio, altura, temperatura)? → `double`
- ¿La respuesta es sí o no? → `bool`
- ¿Es exactamente una letra o símbolo? → `char`

### Curiosidad: ¿de dónde viene `bool`? 🧐

`bool` es la abreviatura de *boolean* (en español, **booleano**). Viene del apellido de **George Boole** (1815–1864), un matemático inglés.

Boole era hijo de un zapatero y tuvo que dejar el colegio a los 16 años para ayudar a su familia. Aprendió matemáticas casi solo, con libros, y acabó siendo catedrático en Irlanda.

En 1854 publicó un libro con una idea rara para su época: hacer **matemáticas con la lógica**. En su sistema solo había dos valores, verdadero y falso, y tres operaciones: **Y**, **O** y **NO**. Durante más de 80 años, casi nadie le encontró una utilidad práctica.

En 1937, un estudiante estadounidense llamado **Claude Shannon** se dio cuenta de que el álgebra de Boole servía para describir circuitos eléctricos: un interruptor está encendido o apagado, como verdadero o falso. Esa idea es la base de **todos** los ordenadores que existen hoy.

Así que cada vez que escribes `true`, `false`, `&&` (Y), `||` (O) o `!` (NO), estás usando las ideas de Boole.

### Crear una variable

La forma es siempre la misma:

```
tipo nombre = valor;
```

```csharp
string name = "Alberto";
int age = 34;
double height = 1.78;
bool likesFootball = true;
char initial = 'A';
```

Fíjate en el `;` al final de cada línea. En C#, casi todas las instrucciones terminan con punto y coma.

### Crear ahora, dar valor después

Puedes crear la variable sin valor y dárselo más tarde:

```csharp
int score;
score = 10;
```

### Cambiar el valor

Para cambiar el valor de una variable que ya existe, **no** vuelvas a escribir el tipo:

```csharp
int score = 10;
score = 15;      // ✅ cambia el valor a 15
int score = 20;  // ❌ error: "score" ya existe
```

Puedes usar el valor actual para calcular el nuevo:

```csharp
int score = 10;
score = score + 5;   // coge el 10, le suma 5 y guarda 15 en score
```

Léelo de derecha a izquierda: primero se calcula `score + 5`, y **después** el resultado se guarda en `score`.

Ojo: si no hay `=`, no se guarda nada.

```csharp
int score = 10;
int total = score + 5;  // total vale 15, pero score sigue valiendo 10
```

### Atajos para cambiar números

Cambiar un número usando su propio valor es tan común que C# tiene atajos:

| Escribes | Es lo mismo que | Significa |
|---|---|---|
| `x++;` | `x = x + 1;` | suma 1 |
| `x--;` | `x = x - 1;` | resta 1 |
| `x += 5;` | `x = x + 5;` | suma 5 |
| `x -= 5;` | `x = x - 5;` | resta 5 |
| `x *= 2;` | `x = x * 2;` | multiplica por 2 |
| `x /= 2;` | `x = x / 2;` | divide entre 2 |

```csharp
int lives = 3;
lives--;         // 2

int goals = 0;
goals++;         // 1
goals++;         // 2
goals += 3;      // 5

double price = 20;
price *= 2;      // 40
price /= 8;      // 5
```

`+=` también funciona con texto: añade texto al final.

```csharp
string message = "Hola";
message += ", Alberto";   // "Hola, Alberto"
```

> ⚠️ Con `int`, la división **tira los decimales**. `7 / 2` da `3`, no `3.5`. Con `double`, `7.0 / 2` da `3.5`.

### El tipo no se puede cambiar

Una caja `int` solo acepta enteros, para siempre:

```csharp
int age = 34;
age = "treinta y cuatro"; // ❌ error: un texto no cabe en un int
age = 34.5;               // ❌ error: un decimal no cabe en un int
```

### Imprimir variables

Puedes juntar texto y variables con `+`:

```csharp
Console.WriteLine("Me llamo " + name);
```

O, más cómodo, con `$` delante de las comillas y la variable entre `{ }`:

```csharp
Console.WriteLine($"Me llamo {name} y tengo {age} años");
```

Esto imprime `Me llamo Alberto y tengo 34 años`.

> 💡 En el código, los decimales **siempre** se escriben con punto (`1.78`). Pero al imprimir, puede que salga `1,78` según el idioma de tu ordenador. Es normal.

### `var`: deja que C# adivine el tipo

En vez del tipo, puedes escribir `var`:

```csharp
var name = "Alberto";      // string
var age = 34;              // int
var height = 1.78;         // double
var likesFootball = true;  // bool
var initial = 'A';         // char
```

C# mira el valor de la derecha del `=` y deduce el tipo. Si pones el ratón encima del nombre de la variable, VS Code te dice qué tipo eligió.

Importante:

- **El tipo sigue existiendo, y no cambia.** `var age = 34;` crea un `int`, exactamente igual que `int age = 34;`. Después, `age = "hola";` da error igual.
- **Necesita un valor.** `var score;` da error: C# no tiene de dónde adivinar el tipo.
- **Cuidado con los números.** `var price = 10;` es un `int`, no un `double`. Si quieres un `double`, escribe `var price = 10.0;` o `double price = 10;`.
- Solo sirve al **crear** una variable. En los parámetros de las funciones (`04`) siempre hay que escribir el tipo.

¿Cuándo usarlo? Con tipos cortos como `int` o `string`, `var` casi no ahorra nada, y escribir el tipo te ayuda a pensar en él. Donde `var` brilla es con tipos largos, como las listas y los diccionarios que verás más adelante:

```csharp
Dictionary<string, List<string>> squads = new Dictionary<string, List<string>>();  // 😩
var squads = new Dictionary<string, List<string>>();                               // ✅ lo mismo
```

La regla: usa `var` cuando el tipo **se vea claramente** a la derecha del `=`.

### Mini-reto: ¿qué tipo es?

Para cada línea, di qué tipo elige C#. Si da error, dilo.

**1.** `var city = "Madrid";`

<details>
<summary>Respuesta</summary>

**`string`**

</details>

<br>

**2.** `var temperature = 21.5;`

<details>
<summary>Respuesta</summary>

**`double`**

</details>

<br>

**3.** `var price = 20;`

<details>
<summary>Respuesta</summary>

**`int`**. Aunque sea un precio, `20` no tiene decimales, así que C# elige `int`. Si luego haces `price = 19.99;`, da error.

</details>

<br>

**4.** `var letter = "A";`

<details>
<summary>Respuesta</summary>

**`string`**. Comillas dobles. Para un `char`, serían simples: `'A'`.

</details>

<br>

**5.** `var half = 7 / 2;`

<details>
<summary>Respuesta</summary>

**`int`**, y vale **`3`**. Un `int` entre un `int` da un `int`, y se tiran los decimales.

</details>

<br>

**6.** `var total;`

<details>
<summary>Respuesta</summary>

❌ **Error.** Sin valor, C# no puede adivinar el tipo. O le das un valor (`var total = 0;`) o escribes el tipo (`int total;`).

</details>

<br>

**7.**

```csharp
var age = 30;
age = 30.5;
```

<details>
<summary>Respuesta</summary>

❌ **Error.** `age` es un `int` (por el `30`), y un `int` no acepta decimales. `var` no significa "cualquier tipo": significa "adivina el tipo **una vez**".

</details>

<br>

📖 Más información:
- [Microsoft: Tipos integrados](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/builtin-types/built-in-types)
- [Microsoft: Operadores de asignación](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/operators/assignment-operator)
- [W3Schools: C# Variables](https://www.w3schools.com/cs/cs_variables.php) (en inglés)
- [W3Schools: C# Data Types](https://www.w3schools.com/cs/cs_data_types.php) (en inglés)

## Reto 2: ¿Funciona o no?

Para cada línea, decide: ¿funciona ✅ o da error ❌? Si da error, ¿por qué? ¿Cómo lo arreglarías?

Piénsalo primero, luego abre la respuesta.

**1.** `int age = "25";`

<details>
<summary>Respuesta</summary>

❌ `"25"` está entre comillas, así que es un **texto**, no un número. Arreglo: `int age = 25;`

</details>

<br>

**2.** `string name = Alberto;`

<details>
<summary>Respuesta</summary>

❌ Faltan las comillas. Sin comillas, C# cree que `Alberto` es el nombre de otra variable. Arreglo: `string name = "Alberto";`

</details>

<br>

**3.** `double price = 19,99;`

<details>
<summary>Respuesta</summary>

❌ En el código los decimales llevan **punto**. Arreglo: `double price = 19.99;`

</details>

<br>

**4.** `bool isOpen = True;`

<details>
<summary>Respuesta</summary>

❌ `true` y `false` van en minúscula. Arreglo: `bool isOpen = true;`

</details>

<br>

**5.** `char initial = "A";`

<details>
<summary>Respuesta</summary>

❌ Un `char` va con comillas **simples**. Las dobles son para `string`. Arreglo: `char initial = 'A';`

</details>

<br>

**6.** `int goals = 2.5;`

<details>
<summary>Respuesta</summary>

❌ Un `int` no puede tener decimales. Además, nadie marca medio gol 😄. Arreglo: `int goals = 2;`

</details>

<br>

**7.** `double temperature = 21;`

<details>
<summary>Respuesta</summary>

✅ ¡Funciona! Un entero cabe en un `double` sin problema: C# lo guarda como `21.0`. (Al revés no funciona: un `2.5` no cabe en un `int`.)

</details>

<br>

**8.** `int studentCount = 30;`

<details>
<summary>Respuesta</summary>

✅ Todo correcto.

</details>

<br>

**9.** `string 2ndPlace = "Barcelona";`

<details>
<summary>Respuesta</summary>

❌ Un nombre de variable **no puede empezar con un número**. Arreglo: `string secondPlace = "Barcelona";`

</details>

<br>

**10.** `string first name = "Ana";`

<details>
<summary>Respuesta</summary>

❌ Un nombre de variable **no puede tener espacios**. Arreglo: `string firstName = "Ana";`

</details>

<br>

**11.**

```csharp
int score = 10;
int score = 20;
```

<details>
<summary>Respuesta</summary>

❌ La segunda línea intenta crear **otra** variable `score`, pero ya existe. Para cambiar el valor, quita el tipo:

```csharp
int score = 10;
score = 20;
```

</details>

<br>

**12.**

```csharp
string city = "Madrid";
Console.WriteLine("Vivo en {city}");
```

<details>
<summary>Respuesta</summary>

✅ Funciona, pero imprime literalmente `Vivo en {city}`. ¡Falta el `$` delante de las comillas! Arreglo:

```csharp
Console.WriteLine($"Vivo en {city}");
```

</details>

<br>

## Reto 3: ¿Cuánto vale?

Lee cada trozo de código línea por línea y di cuánto vale la variable **al final**. Hazlo de cabeza o con papel, sin ejecutarlo.

**1.**

```csharp
int lives = 3;
lives--;
```

¿Cuánto vale `lives`?

<details>
<summary>Respuesta</summary>

**`2`**

`lives--` resta 1: 3 → 2.

</details>

<br>

**2.**

```csharp
int score = 10;
score += 5;
score++;
```

¿Cuánto vale `score`?

<details>
<summary>Respuesta</summary>

**`16`**

10 → `+= 5` → 15 → `++` → 16.

</details>

<br>

**3.**

```csharp
int visitors = 0;
visitors++;
visitors++;
visitors++;
visitors--;
```

¿Cuánto vale `visitors`?

<details>
<summary>Respuesta</summary>

**`2`**

0 → 1 → 2 → 3 → 2.

</details>

<br>

**4.**

```csharp
int money = 100;
money -= 30;
money *= 2;
```

¿Cuánto vale `money`?

<details>
<summary>Respuesta</summary>

**`140`**

100 → `-= 30` → 70 → `*= 2` → 140.

</details>

<br>

**5.**

```csharp
int goals = 2;
int total = goals + 3;
```

¿Cuánto valen `goals` y `total`?

<details>
<summary>Respuesta</summary>

**`goals` vale `2`** y **`total` vale `5`**.

`goals + 3` calcula 5 y lo guarda en `total`. Pero `goals` no cambia, porque no hay ningún `goals =`, `goals +=` ni `goals++`.

</details>

<br>

**6.**

```csharp
int myAge = 30;
int yourAge = myAge;
myAge++;
```

¿Cuánto valen `myAge` y `yourAge`?

<details>
<summary>Respuesta</summary>

**`myAge` vale `31`** y **`yourAge` vale `30`**.

En la segunda línea, `yourAge` recibe una **copia** del valor de `myAge` (30). Después son dos cajas separadas: cambiar una no cambia la otra.

</details>

<br>

**7.**

```csharp
int steps = 10;
steps = steps - 3;
steps += steps;
```

¿Cuánto vale `steps`?

<details>
<summary>Respuesta</summary>

**`14`**

10 → `steps - 3` → 7 → `steps += steps` es `steps = 7 + 7` → 14.

</details>

<br>

**8.**

```csharp
int pizzaSlices = 7;
pizzaSlices /= 2;
```

¿Cuánto vale `pizzaSlices`?

<details>
<summary>Respuesta</summary>

**`3`**, no `3.5`.

Es un `int`, y la división entre enteros tira los decimales.

</details>

<br>

**9.**

```csharp
double price = 10;
price /= 4;
```

¿Cuánto vale `price`?

<details>
<summary>Respuesta</summary>

**`2.5`**

Esta vez es un `double`, así que los decimales se quedan. Compáralo con la pregunta anterior.

</details>

<br>

**10.**

```csharp
string greeting = "Hola";
greeting += ", Alberto";
greeting += "!";
```

¿Cuánto vale `greeting`?

<details>
<summary>Respuesta</summary>

**`"Hola, Alberto!"`**

Con texto, `+=` añade al final.

</details>

<br>

**11.**

```csharp
int points = 5;
points *= points;
points -= 5;
points /= 4;
```

¿Cuánto vale `points`?

<details>
<summary>Respuesta</summary>

**`5`**

5 → `points *= points` es `5 * 5` → 25 → `-= 5` → 20 → `/= 4` → 5.

</details>

<br>

---

## Lección 4: Cómo elegir buenos nombres

El ordenador no lee los nombres de tus variables. **Las personas sí**, incluido tú dentro de dos semanas. Un buen nombre te dice qué hay dentro de la caja sin tener que buscar.

### Reglas obligatorias (si no las cumples, da error)

- Solo letras, números y `_`.
- No puede empezar con un número: `player1` ✅, `1player` ❌
- No puede tener espacios: `firstName` ✅, `first name` ❌
- No puede ser una palabra reservada de C#: `class`, `int`, `string`, `if`, `return`...
- Mayúsculas y minúsculas importan: `age` y `Age` son dos variables **distintas**.

### Buenas costumbres (no da error, pero hazlo así)

**1. Usa camelCase.** Primera palabra en minúscula, las siguientes empiezan con mayúscula. Sin espacios ni guiones bajos.

```csharp
int playerAge;        // ✅ camelCase
int PlayerAge;        // ⚠️ esto se usa para otras cosas (clases, propiedades)
int player_age;       // ⚠️ funciona, pero no es el estilo de C#
int playerage;        // ⚠️ difícil de leer
```

**2. Que el nombre diga qué es.** Si tienes que añadir un comentario para explicar la variable, el nombre no es bueno.

```csharp
int d = 7;            // ❌ ¿d de qué?
int days = 7;         // 🙂 mejor
int daysUntilMatch = 7; // ✅ clarísimo
```

**3. Nada de letras sueltas ni abreviaturas raras.** Escribir unas letras más no cuesta nada.

```csharp
string cn;            // ❌
string custNm;        // ❌
string customerName;  // ✅
```

**4. Los `bool` suenan a pregunta de sí o no.** Empiézalos con `is`, `has`, `can`...

```csharp
bool open;            // ❌ ¿es una acción? ¿una pregunta?
bool isOpen;          // ✅ "¿está abierto?" → true / false
bool hasTicket;       // ✅ "¿tiene entrada?"
bool canVote;         // ✅ "¿puede votar?"
```

**5. Si cuentas algo, que se note.** Un nombre en plural suena a una lista de cosas, no a un número.

```csharp
int students = 30;      // ⚠️ suena a "los alumnos", no a "cuántos alumnos"
int studentCount = 30;  // ✅
```

**6. Ni muy corto, ni muy largo.**

```csharp
int a;                                       // ❌ demasiado corto
int ageOfTheUserThatIsUsingTheProgramNow;    // ❌ demasiado largo
int userAge;                                 // ✅
```

**7. Nada de números para distinguir variables.**

```csharp
string name1 = "Ana";   // ❌ ¿qué diferencia hay entre name1 y name2?
string name2 = "Luis";
string homeTeamCaptain = "Ana";   // ✅
string awayTeamCaptain = "Luis";
```

### ¿Inglés o español?

Las dos funcionan. En el mundo profesional casi todo el código se escribe en inglés, y tu curso también usa inglés, así que en estas lecciones usamos inglés. Lo importante:

- **No mezcles** idiomas en el mismo programa (`edadPlayer` ❌).
- Si escribes en español, **evita tildes y la ñ** (`anio`, no `año`). C# las acepta, pero dan problemas con otros teclados y herramientas.

### Resumen: buenos y malos

| Dato | ❌ Malo | ✅ Bueno |
|---|---|---|
| Nombre de un jugador | `n`, `str`, `name1` | `playerName` |
| Precio de un billete | `p`, `x`, `price2` | `ticketPrice` |
| ¿Ha pagado el cliente? | `paid1`, `flag`, `check` | `hasPaid` |
| Cuántos libros hay | `books`, `num`, `b` | `bookCount` |
| Altura en metros | `h`, `height_in_m` | `heightInMeters` |

📖 Más información:
- [Microsoft: Reglas y convenciones de nombres](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/coding-style/identifier-names)

## Reto 4: Ponle nombre

Para cada dato, piensa:

1. ¿Qué **tipo** usarías?
2. ¿Qué **nombre** le pondrías?

Escríbelo en un papel o en un comentario. **Luego** abre la respuesta y compara.

**1.** La edad de un usuario.

<details>
<summary>Respuesta</summary>

**Tipo:** `int` (las edades se cuentan en años enteros)

✅ Buenos: `age`, `userAge`

❌ Malos:
- `a`, `x` → no dicen nada
- `num` → ¿número de qué?
- `edad` → si el resto del programa está en inglés, no mezcles
- `theAgeOfTheUser` → demasiado largo

</details>

<br>

**2.** El nombre de una ciudad.

<details>
<summary>Respuesta</summary>

**Tipo:** `string`

✅ Buenos: `city`, `cityName`

❌ Malos:
- `c`, `cn` → letras sueltas y abreviaturas
- `str`, `text` → dicen el tipo, no lo que significa
- `CityName` → mayúscula al principio; para variables usa camelCase

</details>

<br>

**3.** Si el usuario ha iniciado sesión o no.

<details>
<summary>Respuesta</summary>

**Tipo:** `bool` (sí o no)

✅ Buenos: `isLoggedIn`, `userIsLoggedIn`

❌ Malos:
- `login` → suena a una acción, o al nombre de usuario
- `flag`, `check`, `status` → no dicen **qué** se comprueba
- `b` → letra suelta

</details>

<br>

**4.** El precio de un café.

<details>
<summary>Respuesta</summary>

**Tipo:** `double` (tiene decimales, como `2.50`)

✅ Buenos: `coffeePrice`, `price` (si en el programa solo hay un precio)

❌ Malos:
- `p` → letra suelta
- `price1` → número para distinguir
- `coffe_price` → falta una letra y no es camelCase
- `cp` → abreviatura

</details>

<br>

**5.** Cuántos alumnos hay en una clase.

<details>
<summary>Respuesta</summary>

**Tipo:** `int` (no hay medio alumno)

✅ Buenos: `studentCount`, `numberOfStudents`

❌ Malos:
- `students` → suena a una lista de alumnos, no a un número
- `n`, `num` → ¿número de qué?
- `class` → ¡palabra reservada! Da error

</details>

<br>

**6.** La temperatura de hoy, en grados.

<details>
<summary>Respuesta</summary>

**Tipo:** `double` (puede ser `21.5`)

✅ Buenos: `temperature`, `todayTemperature`, `temperatureCelsius`

❌ Malos:
- `t` → letra suelta
- `temp` → ¿temperatura o "temporal"? Los programadores usan `temp` para "temporal" muchísimo, así que confunde
- `degrees` → ¿grados de temperatura o de un ángulo?

</details>

<br>

**7.** La primera letra de un apellido.

<details>
<summary>Respuesta</summary>

**Tipo:** `char` (exactamente una letra)

✅ Buenos: `lastNameInitial`, `initial`

❌ Malos:
- `letter` → ¿qué letra?
- `c`, `l` → letras sueltas
- `firstLetter` → ¿la primera letra de qué?

</details>

<br>

**8.** Si una tienda está abierta.

<details>
<summary>Respuesta</summary>

**Tipo:** `bool`

✅ Buenos: `isOpen`, `storeIsOpen`, `isStoreOpen`

❌ Malos:
- `open` → suena a la acción de abrir
- `status` → ¿qué estado? Podría ser cualquier cosa
- `openOrClosed` → no queda claro qué significa `true`

</details>

<br>

**9.** El correo electrónico de un cliente.

<details>
<summary>Respuesta</summary>

**Tipo:** `string`

✅ Buenos: `email`, `customerEmail`

❌ Malos:
- `e`, `m` → letras sueltas
- `customer` → suena al cliente entero, no solo a su correo
- `mail1` → número para distinguir

</details>

<br>

**10.** Cuántos goles marcó un equipo en un partido.

<details>
<summary>Respuesta</summary>

**Tipo:** `int`

✅ Buenos: `goalsScored`, `teamGoals`

❌ Malos:
- `g` → letra suelta
- `goals2` → número para distinguir
- `GOALS` → todo en mayúsculas grita, y no es el estilo de C#
- `goles_del_equipo_en_el_partido` → mezcla idiomas, demasiado largo y no es camelCase

</details>

<br>

**11.** La nota media de un examen.

<details>
<summary>Respuesta</summary>

**Tipo:** `double` (una media casi siempre tiene decimales, como `7.25`)

✅ Buenos: `averageGrade`, `averageScore`

❌ Malos:
- `avg` → abreviatura
- `grade` → ¿la nota de quién? ¿o la media?
- `result` → demasiado general

</details>

<br>

**12.** Si un número es par.

<details>
<summary>Respuesta</summary>

**Tipo:** `bool`

✅ Buenos: `isEven`

❌ Malos:
- `even` → no suena a pregunta
- `par` → mezcla idiomas (y en inglés `par` significa otra cosa)
- `check` → ¿qué se comprueba?

</details>

<br>

## Reto 5: Arregla los nombres

Este programa funciona, pero los nombres son horribles. Cámbialos todos por buenos nombres. El programa tiene que seguir imprimiendo lo mismo.

Copia el código en tu `Program.cs`:

```csharp
string x = "Laura";
int n = 28;
double d = 1.65;
bool b = true;
char c = 'L';
int num = 2;
string s = "Valencia";

Console.WriteLine($"{x} tiene {n} años y mide {d} m.");
Console.WriteLine($"Su inicial es {c}.");
Console.WriteLine($"Tiene {num} hermanos y vive en {s}.");
Console.WriteLine($"¿Tiene carné de conducir? {b}");
```

### Truco: renombrar con VS Code

Podrías cambiar cada nombre a mano, pero es fácil olvidarse de alguno. VS Code puede cambiarlo en **todos** los sitios a la vez:

1. Haz clic derecho sobre el nombre de la variable, en la línea donde se crea (por ejemplo, sobre la `x` de `string x = "Laura";`).
2. Elige **Rename Symbol** (si tu VS Code está en español: **Cambiar el nombre del símbolo**). También puedes pulsar **F2**.
3. Escribe el nombre nuevo y pulsa **Enter**.

VS Code cambia la variable en todas las líneas donde aparece, también dentro de los `{ }` de los textos con `$`.

Usa este truco para todas las variables del reto.

> 💡 Si no funciona, comprueba que tienes instalada la extensión **C# Dev Kit** en VS Code.

<details>
<summary>Ver una solución</summary>

```csharp
string name = "Laura";
int age = 28;
double heightInMeters = 1.65;
bool hasDriversLicense = true;
char initial = 'L';
int siblingCount = 2;
string city = "Valencia";

Console.WriteLine($"{name} tiene {age} años y mide {heightInMeters} m.");
Console.WriteLine($"Su inicial es {initial}.");
Console.WriteLine($"Tiene {siblingCount} hermanos y vive en {city}.");
Console.WriteLine($"¿Tiene carné de conducir? {hasDriversLicense}");
```

Fíjate: ahora puedes leer las líneas de `Console.WriteLine` y entender qué imprimen **sin mirar arriba**. Antes, `{b}` no te decía nada.

</details>

---

## Reto final: Ficha de jugador ⚽

Hazlo en tu proyecto de siempre. Borra o comenta el código del reto anterior.

### Parte 1

Elige a tu jugador de fútbol favorito y crea una variable para cada uno de estos datos. Tú decides el tipo y el nombre.

- Su nombre
- Su equipo
- Su edad
- Su altura en metros
- El número de su camiseta
- Cuántos goles ha marcado esta temporada
- Si es el capitán del equipo
- Si está lesionado
- La letra de su posición: `P` (portero), `D` (defensa), `M` (medio) o `F` (delantero)

### Parte 2

Imprime una ficha con todos los datos. Usa `$"..."` con las variables entre `{ }`.

### Parte 3

Ha pasado una semana. Marcó 2 goles más, ya no está lesionado y acaba de cumplir años. **Cambia el valor** de esas variables (¡sin crear variables nuevas!) e imprime la ficha otra vez. Usa los atajos de la Lección 3.

### Ejemplo de resultado

Tus datos y mensajes pueden ser distintos.

```
=== FICHA ===
Nombre: Lamine Yamal
Equipo: FC Barcelona
Edad: 19
Altura: 1.8 m
Dorsal: 10
Posición: F
Goles esta temporada: 6
¿Es capitán? False
¿Está lesionado? True

=== UNA SEMANA DESPUÉS ===
Edad: 20
Goles esta temporada: 8
¿Está lesionado? False
```

### Pistas (solo si te atascas)

<details>
<summary>Ver pistas</summary>

- Hay 9 datos. Si haces una lista con el tipo de cada uno antes de empezar, el resto es fácil. Repasa la tabla de la Lección 3.
- La posición es una sola letra. ¿Qué tipo guarda una sola letra? ¿Qué comillas lleva?
- "Cuántos goles" y "el número de camiseta" se cuentan, no se miden.
- "Si es capitán" y "si está lesionado" son preguntas de sí o no. Repasa la costumbre 4 de la Lección 4.
- Sumar 2 goles: `+= 2`. Cumplir un año: `++`.
- Si te sale el error *"A local variable named ... is already defined"*, escribiste el tipo otra vez al cambiar el valor.

</details>

### Retos extra

1. Imprime cuántos goles le faltan para llegar a 20. Calcúlalo con una resta, no lo escribas a mano.
2. Crea una segunda ficha para otro jugador del mismo equipo. ¿Cómo llamas a las variables para que no choquen con las del primero? (Pista: Lección 4, costumbre 7.)
3. Guarda la edad como `string` (`"19"`, con comillas) e imprime `age + 1`. ¿Qué sale? ¿Por qué no sale `20`?
