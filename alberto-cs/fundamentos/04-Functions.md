# Funciones 🧩

Sigue usando el mismo proyecto. Para cada reto, borra o comenta el código del anterior.

Recuerda: piensa la respuesta **antes** de abrir los bloques ocultos.

---

## Lección 1: ¿Qué es una función?

### El problema

Imagina que quieres contar las vocales de tres frases distintas. Con lo que sabes de `03-If-and-loops.md`, tendrías que escribir el mismo bucle **tres veces**:

```csharp
string sentence1 = "Hola Alberto";
int count1 = 0;
foreach (char letter in sentence1.ToLower())
{
    if ("aeiou".Contains(letter)) { count1++; }
}

string sentence2 = "El fútbol es lo mejor";
int count2 = 0;
foreach (char letter in sentence2.ToLower())
{
    if ("aeiou".Contains(letter)) { count2++; }
}

// ... y otra vez para la tercera 😩
```

Y si un día quieres que las vocales con tilde también cuenten, tienes que cambiarlo en tres sitios. Seguro que te olvidas de uno.

### La solución

Una **función** es un trozo de código con nombre que puedes usar todas las veces que quieras. Lo escribes **una vez**:

```csharp
int CountVowels(string text)
{
    int count = 0;
    foreach (char letter in text.ToLower())
    {
        if ("aeiou".Contains(letter)) { count++; }
    }
    return count;
}
```

Y lo usas donde quieras:

```csharp
Console.WriteLine(CountVowels("Hola Alberto"));           // 5
Console.WriteLine(CountVowels("El fútbol es lo mejor"));  // 6
Console.WriteLine(CountVowels("Programar mola"));         // 5
```

Si quieres añadir las tildes, lo cambias **en un solo sitio**.

### Definir vs. llamar

Hay dos cosas distintas, y es muy importante no confundirlas:

- **Definir** una función es escribir la receta. **No se ejecuta nada.**
- **Llamar** a una función es usar la receta. Se escribe el nombre con paréntesis: `CountVowels("hola")`. **Ahora sí** se ejecuta.

Si defines una función y nunca la llamas, su código **nunca se ejecuta**.

### Las partes de una función

```
 lo que devuelve   nombre      parámetros
       │             │             │
       ▼             ▼             ▼
      int      CountVowels   (string text)
      {
          ...                 ◄── el cuerpo: lo que hace
          return count;       ◄── lo que devuelve
      }
```

Lo verás todo paso a paso en las próximas lecciones.

> 💡 En C#, el nombre oficial es **método**. Las funciones que escribes directamente en `Program.cs` se llaman **funciones locales**. En estas lecciones decimos "función", pero si en tu curso o en internet leen "método", es lo mismo.

---

## Lección 2: Dónde se escriben

Con instrucciones de nivel superior (las de `01-Variables.md`), escribe las funciones **al final** de `Program.cs`, debajo de todo tu código:

```csharp
// ===== Tu código =====
Greet();
Greet();

// ===== Tus funciones =====
void Greet()
{
    Console.WriteLine("¡Hola!");
}
```

Fíjate: llamamos a `Greet()` **antes** de que aparezca su definición en el archivo, y funciona. C# lee todo el archivo antes de ejecutar nada, así que ya sabe que `Greet` existe.

> ⚠️ El programa empieza arriba y va bajando. Cuando llega a las definiciones de funciones, **se las salta**. Solo se ejecutan cuando alguien las llama.

---

## Lección 3: Parámetros y argumentos

### Funciones sin parámetros

Algunas funciones hacen siempre lo mismo. Los paréntesis van vacíos:

```csharp
void PrintSeparator()
{
    Console.WriteLine("====================");
}
```

### Funciones con parámetros

Un **parámetro** es una variable que la función recibe desde fuera. Se escribe entre los paréntesis, con su **tipo** y su **nombre**:

```csharp
void Greet(string name)
{
    Console.WriteLine($"¡Hola, {name}!");
}
```

Cuando llamas a la función, le das un valor para ese parámetro. Ese valor se llama **argumento**:

```csharp
Greet("Ana");     // ¡Hola, Ana!
Greet("Luis");    // ¡Hola, Luis!
```

- **Parámetro** = el hueco, en la definición: `string name`
- **Argumento** = lo que metes en el hueco, en la llamada: `"Ana"`

### Varios parámetros

Sepáralos con comas. Los argumentos se reparten **en el mismo orden**:

```csharp
void PrintScore(string team, int goals)
{
    Console.WriteLine($"{team}: {goals}");
}

PrintScore("Barça", 3);    // Barça: 3
PrintScore(3, "Barça");    // ❌ error: el primero tiene que ser string
PrintScore("Barça");       // ❌ error: falta un argumento
```

El número, el orden y el tipo de los argumentos tienen que coincidir con los parámetros.

### Los argumentos pueden ser cualquier expresión

```csharp
string myTeam = "Real Madrid";
int goalsFirstHalf = 1;
int goalsSecondHalf = 2;

PrintScore(myTeam, goalsFirstHalf + goalsSecondHalf);  // Real Madrid: 3
```

C# calcula `goalsFirstHalf + goalsSecondHalf` **antes** de llamar, y la función recibe `3`.

## Reto 1: ¿Qué imprime? (parámetros)

**1.**

```csharp
Console.WriteLine("Hola");

void SayBye()
{
    Console.WriteLine("Adiós");
}
```

<details>
<summary>Respuesta</summary>

**`Hola`** (solo eso)

`SayBye` está definida, pero **nadie la llama**. Su código no se ejecuta nunca.

</details>

<br>

**2.**

```csharp
Console.WriteLine("Hola");
SayBye();
SayBye();

void SayBye()
{
    Console.WriteLine("Adiós");
}
```

<details>
<summary>Respuesta</summary>

**`Hola`, `Adiós`, `Adiós`**

</details>

<br>

**3.**

```csharp
SayBye;

void SayBye()
{
    Console.WriteLine("Adiós");
}
```

<details>
<summary>Respuesta</summary>

**❌ Error.** Faltan los paréntesis. Sin `( )`, no estás llamando a la función. Tiene que ser `SayBye();`.

</details>

<br>

**4.**

```csharp
string player = "Pedri";
Introduce(player, 8);
Introduce("Gavi", 6);

void Introduce(string name, int number)
{
    Console.WriteLine($"{name} lleva el {number}");
}
```

<details>
<summary>Respuesta</summary>

```
Pedri lleva el 8
Gavi lleva el 6
```

</details>

<br>

**5.**

```csharp
PrintStars(3);
PrintStars(1);
PrintStars(0);

void PrintStars(int count)
{
    string stars = "";
    for (int i = 0; i < count; i++)
    {
        stars += "*";
    }
    Console.WriteLine(stars);
}
```

<details>
<summary>Respuesta</summary>

```
***
*

```

La tercera llamada imprime una **línea vacía**: con `count = 0`, el bucle no da ninguna vuelta, y `stars` sigue siendo `""`.

</details>

<br>

**6.**

```csharp
int a = 2;
int b = 5;
PrintSum(b, a * 3);

void PrintSum(int a, int b)
{
    Console.WriteLine($"{a} + {b} = {a + b}");
}
```

<details>
<summary>Respuesta</summary>

**`5 + 6 = 11`**

¡Cuidado con los nombres! Dentro de la función, `a` y `b` son los **parámetros**, no las variables de fuera. El primer argumento (`b`, que vale 5) va al primer parámetro (`a`). El segundo (`a * 3`, que vale 6) va al segundo (`b`).

Por eso es mejor no repetir nombres: confunde.

</details>

<br>

---

## Lección 4: `return` vs. `void`

### `void`: funciones que hacen algo

`void` significa "no devuelve nada". La función **hace** algo (imprimir, añadir a una lista...) y ya está.

```csharp
void Greet(string name)
{
    Console.WriteLine($"¡Hola, {name}!");
}
```

### Funciones que devuelven algo

Si en vez de `void` pones un tipo, la función tiene que **devolver** un valor de ese tipo con `return`:

```csharp
int Double(int number)
{
    return number * 2;
}
```

Quien llama a la función **recibe** ese valor y puede hacer con él lo que quiera:

```csharp
int result = Double(5);              // guardarlo: result vale 10
Console.WriteLine(Double(7));        // imprimirlo: 14
int big = Double(5) + Double(7);     // usarlo en una cuenta: 24
bool isBig = Double(30) > 50;        // compararlo: true
```

Piensa en la llamada `Double(5)` como si se **sustituyera** por su resultado. Donde pone `Double(5)`, después de llamar, pone `10`.

### ⚠️ Imprimir no es devolver

Esta es **la confusión más común** con funciones:

```csharp
void PrintDouble(int number)
{
    Console.WriteLine(number * 2);   // imprime, pero no devuelve
}

int Double(int number)
{
    return number * 2;               // devuelve, pero no imprime
}
```

```csharp
PrintDouble(5);               // imprime 10
Double(5);                    // no imprime nada. Devuelve 10, pero nadie lo usa.

int x = PrintDouble(5);       // ❌ error: PrintDouble no devuelve nada
int y = Double(5);            // ✅ y vale 10
```

`Console.WriteLine` es para **enseñarle** algo a la persona que mira la pantalla. `return` es para **dárselo** al código que llamó a la función.

¿Cuál usar? Casi siempre es mejor **devolver**. Una función que devuelve es más útil: puedes imprimir el resultado, guardarlo, compararlo o usarlo en otra cuenta. Una función que solo imprime, solo sirve para imprimir.

### `return` termina la función

En cuanto se ejecuta un `return`, la función **termina**. Lo que haya debajo no se ejecuta.

Esto es útil para salir antes:

```csharp
string Classify(int number)
{
    if (number < 0)
    {
        return "negativo";
    }
    if (number == 0)
    {
        return "cero";
    }
    return "positivo";
}
```

No hacen falta `else`: si `number < 0`, la función ya terminó en el primer `return`.

También dentro de un bucle:

```csharp
int FindIndex(string[] items, string target)
{
    for (int i = 0; i < items.Length; i++)
    {
        if (items[i] == target)
        {
            return i;    // lo encontré: termina ya
        }
    }
    return -1;           // terminó el bucle sin encontrarlo
}
```

(Así es más o menos como funciona `IndexOf` por dentro.)

### `return` en una función `void`

Una función `void` puede usar `return;` **sin valor**, solo para terminar antes:

```csharp
void PrintTicket(int age)
{
    if (age < 0)
    {
        Console.WriteLine("Edad no válida");
        return;
    }
    Console.WriteLine($"Entrada para {age} años");
}
```

### Todos los caminos tienen que devolver algo

Si la función no es `void`, C# comprueba que **todos los caminos posibles** terminen en un `return`:

```csharp
string Sign(int number)
{
    if (number >= 0)
    {
        return "positivo";
    }
    // ❌ error: ¿y si number es negativo? No hay return.
}
```

> 💡 Un `int` no es un `string`. Si una función devuelve `string` y quieres devolver un número, conviértelo con `.ToString()`: `return number.ToString();`

📖 Más información:
- [Microsoft: Funciones locales](https://learn.microsoft.com/es-es/dotnet/csharp/programming-guide/classes-and-structs/local-functions)
- [W3Schools: C# Methods](https://www.w3schools.com/cs/cs_methods.php) (en inglés)
- [W3Schools: C# Return Values](https://www.w3schools.com/cs/cs_method_parameters_return.php) (en inglés)

## Reto 2: ¿Qué imprime? (return)

Para todas las preguntas, estas funciones están definidas al final del archivo:

```csharp
int Double(int number)
{
    return number * 2;
}

int Add(int a, int b)
{
    return a + b;
}
```

**1.**

```csharp
Double(5);
```

<details>
<summary>Respuesta</summary>

**Nada.**

`Double(5)` devuelve 10, pero nadie lo guarda ni lo imprime. El 10 se pierde.

</details>

<br>

**2.**

```csharp
Console.WriteLine(Double(5));
```

<details>
<summary>Respuesta</summary>

**`10`**

</details>

<br>

**3.**

```csharp
int result = Double(Double(3));
Console.WriteLine(result);
```

<details>
<summary>Respuesta</summary>

**`12`**

Primero se calcula la de dentro: `Double(3)` → 6. Luego la de fuera: `Double(6)` → 12.

</details>

<br>

**4.**

```csharp
Console.WriteLine(Add(2, 3) * Add(1, 1));
```

<details>
<summary>Respuesta</summary>

**`10`**

`Add(2, 3)` → 5. `Add(1, 1)` → 2. `5 * 2` → 10.

</details>

<br>

**5.**

```csharp
int total = Add(Double(2), 10);
Console.WriteLine(total);
```

<details>
<summary>Respuesta</summary>

**`14`**

`Double(2)` → 4. `Add(4, 10)` → 14.

</details>

<br>

**6.**

```csharp
int goals = 3;
Double(goals);
Console.WriteLine(goals);
```

<details>
<summary>Respuesta</summary>

**`3`**

`Double` devuelve 6, pero no se guardó. Y la función **no cambia** la variable `goals`. Para cambiarla: `goals = Double(goals);`

¿Te suena? Es lo mismo que pasaba con `name.ToUpper();` en `02`.

</details>

<br>

Para las siguientes, mira la función que acompaña a cada pregunta.

**7.**

```csharp
int result = Square(4);
Console.WriteLine(result + 1);

int Square(int number)
{
    Console.WriteLine("Calculando...");
    return number * number;
}
```

<details>
<summary>Respuesta</summary>

```
Calculando...
17
```

Esta función **imprime y además devuelve**. El `Calculando...` sale en cuanto se llama a la función. Luego `result` vale 16, y se imprime `16 + 1`.

</details>

<br>

**8.**

```csharp
Console.WriteLine(Square(2) + Square(3));

int Square(int number)
{
    Console.WriteLine("Calculando...");
    return number * number;
}
```

<details>
<summary>Respuesta</summary>

```
Calculando...
Calculando...
13
```

Para poder imprimir la suma, C# primero tiene que calcular `Square(2)` y `Square(3)`. Cada llamada imprime su `Calculando...`. Solo después se imprime `4 + 9`.

</details>

<br>

**9.**

```csharp
Console.WriteLine(GetNumber());

int GetNumber()
{
    return 7;
    Console.WriteLine("¿Me ves?");
}
```

<details>
<summary>Respuesta</summary>

**`7`** (solo eso)

`return` termina la función. La línea de debajo no se ejecuta nunca. VS Code te avisa con una línea ondulada: *"Unreachable code detected"* ("código inalcanzable").

</details>

<br>

**10.**

```csharp
Console.WriteLine(Classify(-3));
Console.WriteLine(Classify(0));
Console.WriteLine(Classify(8));

string Classify(int number)
{
    if (number < 0)
    {
        return "negativo";
    }
    if (number == 0)
    {
        return "cero";
    }
    return "positivo";
}
```

<details>
<summary>Respuesta</summary>

**`negativo`, `cero`, `positivo`**

</details>

<br>

**11.**

```csharp
string[] players = { "Pedri", "Gavi", "Yamal" };
Console.WriteLine(FindIndex(players, "Yamal"));
Console.WriteLine(FindIndex(players, "Messi"));

int FindIndex(string[] items, string target)
{
    for (int i = 0; i < items.Length; i++)
    {
        if (items[i] == target)
        {
            return i;
        }
    }
    return -1;
}
```

<details>
<summary>Respuesta</summary>

**`2`** y **`-1`**

</details>

<br>

**12.**

```csharp
if (IsEven(7))
{
    Console.WriteLine("Par");
}
else
{
    Console.WriteLine("Impar");
}

bool IsEven(int number)
{
    return number % 2 == 0;
}
```

<details>
<summary>Respuesta</summary>

**`Impar`**

`7 % 2 == 0` es `false`, así que `IsEven(7)` devuelve `false`.

Fíjate en el `return number % 2 == 0;`. No hace falta un `if`: la comparación **ya es** un `bool`, así que la devuelves directamente.

</details>

<br>

## Reto 3: ¿Funciona o no? (funciones)

**1.**

```csharp
int Triple(int number)
{
    int result = number * 3;
}
```

<details>
<summary>Respuesta</summary>

❌ Dice que devuelve `int`, pero no hay `return`. Error: *"not all code paths return a value"*. Arreglo: añade `return result;`.

</details>

<br>

**2.**

```csharp
int GetName()
{
    return "Alberto";
}
```

<details>
<summary>Respuesta</summary>

❌ Dice que devuelve `int`, pero devuelve un `string`. Arreglo: `string GetName()`.

</details>

<br>

**3.**

```csharp
string message = PrintHello();

void PrintHello()
{
    Console.WriteLine("Hola");
}
```

<details>
<summary>Respuesta</summary>

❌ `PrintHello` es `void`: no devuelve nada, así que no hay nada que guardar en `message`. O la llamas sola (`PrintHello();`), o la cambias para que devuelva un `string`.

</details>

<br>

**4.**

```csharp
Add(5);

int Add(int a, int b)
{
    return a + b;
}
```

<details>
<summary>Respuesta</summary>

❌ `Add` necesita **dos** argumentos.

</details>

<br>

**5.**

```csharp
Add("5", 3);

int Add(int a, int b)
{
    return a + b;
}
```

<details>
<summary>Respuesta</summary>

❌ `"5"` es un `string`, y el parámetro `a` es un `int`.

</details>

<br>

**6.**

```csharp
string Sign(int number)
{
    if (number >= 0)
    {
        return "positivo";
    }
}
```

<details>
<summary>Respuesta</summary>

❌ Si `number` es negativo, la función llega al final sin `return`. Arreglo: añade `return "negativo";` al final.

</details>

<br>

**7.**

```csharp
string Sign(int number)
{
    if (number >= 0)
    {
        return "positivo";
    }
    else
    {
        return "negativo";
    }
}
```

<details>
<summary>Respuesta</summary>

✅ Los dos caminos tienen `return`.

</details>

<br>

**8.**

```csharp
void Check(int age)
{
    if (age < 0)
    {
        return;
    }
    Console.WriteLine("Edad correcta");
}
```

<details>
<summary>Respuesta</summary>

✅ En una función `void` puedes usar `return;` sin valor para terminar antes.

</details>

<br>

**9.**

```csharp
void Check(int age)
{
    if (age < 0)
    {
        return false;
    }
    Console.WriteLine("Edad correcta");
}
```

<details>
<summary>Respuesta</summary>

❌ Una función `void` no puede devolver un valor. Si quieres devolver `true`/`false`, tiene que ser `bool Check(int age)` (y entonces todos los caminos necesitan un `return`).

</details>

<br>

**10.**

```csharp
void Greet(name)
{
    Console.WriteLine($"Hola, {name}");
}
```

<details>
<summary>Respuesta</summary>

❌ Al parámetro le falta el tipo. Tiene que ser `string name`.

</details>

<br>

---

## Lección 5: Ámbito en funciones

¿Te acuerdas del ámbito de `03`? Cada función es **su propia habitación**.

### Las variables de una función solo existen dentro de ella

```csharp
CalculateTotal();
Console.WriteLine(total);  // ❌ error: total no existe aquí

void CalculateTotal()
{
    int total = 5 + 3;
}
```

Si quieres sacar un valor de una función, **devuélvelo** con `return`:

```csharp
int total = CalculateTotal();
Console.WriteLine(total);  // ✅ 8

int CalculateTotal()
{
    return 5 + 3;
}
```

### Una función no ve las variables de otra

```csharp
void First()
{
    int secret = 42;
}

void Second()
{
    Console.WriteLine(secret);  // ❌ error: secret es de First
}
```

Si `Second` necesita el valor, pásaselo como **parámetro**.

### Dos funciones pueden usar el mismo nombre

Como son habitaciones distintas, no chocan:

```csharp
int Sum(int[] numbers)
{
    int total = 0;
    foreach (int number in numbers) { total += number; }
    return total;
}

int CountPositives(int[] numbers)
{
    int total = 0;   // ✅ otro total, en otra habitación
    foreach (int number in numbers)
    {
        if (number > 0) { total++; }
    }
    return total;
}
```

### ¿Y las variables de arriba del archivo?

Con instrucciones de nivel superior, una función **sí puede ver** las variables del código de arriba (porque, en secreto, todo está dentro del `Main` que genera C#). Pero **no lo hagas**: pásalas como parámetro. Así la función solo depende de lo que recibe, y puedes reutilizarla con otros valores.

```csharp
string playerName = "Pedri";

// ⚠️ funciona, pero solo sirve para playerName
void GreetPlayer()
{
    Console.WriteLine($"Hola, {playerName}");
}

// ✅ sirve para cualquier nombre
void Greet(string name)
{
    Console.WriteLine($"Hola, {name}");
}
```

### Los parámetros reciben una copia (casi siempre)

Igual que `int yourAge = myAge;` en `01`, un parámetro `int`, `double`, `bool`, `char` o `string` recibe una **copia** del valor. Si la función cambia el parámetro, la variable de fuera **no cambia**:

```csharp
int score = 10;
AddPoints(score);
Console.WriteLine(score);  // 10

void AddPoints(int points)
{
    points += 5;  // cambia la copia, no score
}
```

**Pero** con listas y arrays pasa lo mismo que en la pregunta trampa de `02`: el parámetro apunta a **la misma** lista. Si la función la cambia, la cambia para todos:

```csharp
var names = new List<string> { "Ana" };
AddName(names);
Console.WriteLine(names.Count);  // 2

void AddName(List<string> list)
{
    list.Add("Luis");  // es la misma lista que names
}
```

## Reto 4: ¿Qué imprime? (ámbito y copias)

Si da error, dilo.

**1.**

```csharp
int number = 7;
MakeZero(number);
Console.WriteLine(number);

void MakeZero(int value)
{
    value = 0;
}
```

<details>
<summary>Respuesta</summary>

**`7`**

`value` es una copia de `number`. Cambiar la copia no cambia el original.

</details>

<br>

**2.**

```csharp
string name = "pedri";
Shout(name);
Console.WriteLine(name);

void Shout(string text)
{
    text = text.ToUpper();
    Console.WriteLine(text);
}
```

<details>
<summary>Respuesta</summary>

```
PEDRI
pedri
```

Dentro de la función, `text` pasa a ser `"PEDRI"`, y se imprime. Pero `name`, fuera, sigue siendo `"pedri"`.

</details>

<br>

**3.**

```csharp
var numbers = new List<int> { 1, 2, 3 };
AddZero(numbers);
Console.WriteLine(numbers.Count);

void AddZero(List<int> list)
{
    list.Add(0);
}
```

<details>
<summary>Respuesta</summary>

**`4`**

Con listas, el parámetro apunta a la **misma** lista. El `Add` se ve fuera.

</details>

<br>

**4.**

```csharp
int[] goals = { 1, 2, 3 };
DoubleAll(goals);
Console.WriteLine(string.Join(", ", goals));

void DoubleAll(int[] numbers)
{
    for (int i = 0; i < numbers.Length; i++)
    {
        numbers[i] *= 2;
    }
}
```

<details>
<summary>Respuesta</summary>

**`2, 4, 6`**

Con arrays pasa lo mismo que con listas: es el mismo array.

</details>

<br>

**5.**

```csharp
SetUp();
Console.WriteLine(teamName);

void SetUp()
{
    string teamName = "Barça";
}
```

<details>
<summary>Respuesta</summary>

**❌ Error.** `teamName` se creó dentro de `SetUp`, y fuera no existe. Arreglo: que `SetUp` devuelva el nombre.

```csharp
string teamName = GetTeamName();
Console.WriteLine(teamName);

string GetTeamName()
{
    return "Barça";
}
```

</details>

<br>

**6.**

```csharp
int a = Five();
int b = Ten();
Console.WriteLine(a + b);

int Five()
{
    int result = 5;
    return result;
}

int Ten()
{
    int result = 10;
    return result;
}
```

<details>
<summary>Respuesta</summary>

**`15`**

Cada función tiene su propio `result`. No chocan.

</details>

<br>

---

## Lección 6: Funciones que llaman a funciones

Una función puede llamar a otras funciones. Así divides un problema grande en problemas pequeños:

```csharp
Console.WriteLine(IsPalindrome("Radar"));  // True

bool IsPalindrome(string word)
{
    string lower = word.ToLower();
    return lower == Reverse(lower);   // llama a Reverse
}

string Reverse(string text)
{
    string reversed = "";
    foreach (char letter in text)
    {
        reversed = letter + reversed;
    }
    return reversed;
}
```

### ¿En qué orden se ejecuta?

Cuando el programa llama a una función, **entra** en ella. Cuando la función termina, **vuelve** exactamente al sitio desde donde la llamaron, y sigue por ahí.

```csharp
Console.WriteLine("1. Empieza");
First();
Console.WriteLine("5. Termina");

void First()
{
    Console.WriteLine("2. Entro en First");
    Second();
    Console.WriteLine("4. Vuelvo a First");
}

void Second()
{
    Console.WriteLine("3. Entro en Second");
}
```

```
1. Empieza
2. Entro en First
3. Entro en Second
4. Vuelvo a First
5. Termina
```

```
código principal
│  "1. Empieza"
├──► First()
│    │  "2. Entro en First"
│    ├──► Second()
│    │    │  "3. Entro en Second"
│    │◄───┘ (Second termina, vuelve a First)
│    │  "4. Vuelvo a First"
│◄───┘ (First termina, vuelve al código principal)
│  "5. Termina"
```

## Reto 5: ¿En qué orden?

**1.**

```csharp
Console.WriteLine("A");
Middle();
Console.WriteLine("E");

void Middle()
{
    Console.WriteLine("B");
    Inner();
    Inner();
    Console.WriteLine("D");
}

void Inner()
{
    Console.WriteLine("C");
}
```

<details>
<summary>Respuesta</summary>

**`A`, `B`, `C`, `C`, `D`, `E`**

</details>

<br>

**2.**

```csharp
Console.WriteLine(Wrap("hola"));

string Wrap(string text)
{
    return "[" + Shout(text) + "]";
}

string Shout(string text)
{
    return text.ToUpper() + "!";
}
```

<details>
<summary>Respuesta</summary>

**`[HOLA!]`**

`Wrap` llama a `Shout("hola")`, que devuelve `"HOLA!"`. Luego `Wrap` le pone los corchetes.

</details>

<br>

**3.**

```csharp
for (int i = 1; i <= 3; i++)
{
    PrintRow(i);
}

void PrintRow(int size)
{
    string row = "";
    for (int j = 0; j < size; j++)
    {
        row += "#";
    }
    Console.WriteLine(row);
}
```

<details>
<summary>Respuesta</summary>

```
#
##
###
```

El bucle de fuera llama a `PrintRow` con 1, 2 y 3.

</details>

<br>

**4.**

```csharp
Console.WriteLine("Inicio");
Console.WriteLine(GetGreeting("Ana"));
Console.WriteLine("Fin");

string GetGreeting(string name)
{
    Console.WriteLine("Preparando saludo...");
    return $"¡Hola, {name}!";
}
```

<details>
<summary>Respuesta</summary>

```
Inicio
Preparando saludo...
¡Hola, Ana!
Fin
```

Para imprimir el saludo, primero hay que **calcularlo**: se entra en `GetGreeting`, que imprime `Preparando saludo...` y devuelve el texto. Solo entonces se imprime `¡Hola, Ana!`.

</details>

<br>

**5.**

```csharp
Console.WriteLine(Score(Score(1)));

int Score(int number)
{
    Console.WriteLine($"Score({number})");
    return number + 10;
}
```

<details>
<summary>Respuesta</summary>

```
Score(1)
Score(11)
21
```

Primero la de dentro: `Score(1)` imprime `Score(1)` y devuelve 11. Luego la de fuera: `Score(11)` imprime `Score(11)` y devuelve 21. Y por último se imprime 21.

</details>

<br>

---

## Lección 7: Cómo llamar a tus funciones

Las reglas de `01-Variables.md` siguen valiendo (que el nombre diga qué es, nada de abreviaturas raras...), con algunas diferencias:

**1. PascalCase.** Las funciones empiezan con **mayúscula** (las variables, con minúscula).

```csharp
int countVowels(string text)   // ⚠️ estilo de variable
int CountVowels(string text)   // ✅
```

**2. Empieza con un verbo.** Una función **hace** algo, así que su nombre es una acción.

| ❌ Malo | ✅ Bueno |
|---|---|
| `Vowels` | `CountVowels` |
| `Ticket` | `PrintTicket` |
| `Average` (vale si es obvio) | `CalculateAverage` |
| `DoStuff`, `Function1` | lo que haga de verdad |

**3. Las que devuelven `bool` suenan a pregunta.** Igual que las variables `bool`:

```csharp
bool IsEven(int number)
bool HasVowels(string text)
bool CanVote(int age)
```

Así, al usarlas, el código se lee casi como una frase: `if (CanVote(age))`.

**4. `Get` para las que devuelven algo; `Print` para las que imprimen.** Así sabes qué hace sin mirar dentro:

```csharp
string GetCategory(int grade)     // devuelve la categoría
void PrintCategory(int grade)     // la imprime
```

---

## Lección 8: VS Code te ayuda

### Pistas de parámetros

Escribe el nombre de una función y abre el paréntesis: `Add(`. Aparece una ventanita con la definición:

```
int Add(int a, int b)
```

El parámetro que te toca escribir sale **en negrita**. Cuando escribes la coma, pasa al siguiente. Si la ventanita desaparece, pulsa **Ctrl + Shift + Espacio**.

### Pasa el ratón por encima

Pon el ratón encima del nombre de una función (donde la llamas) y verás qué recibe y qué devuelve, sin tener que buscarla.

### Ir a la definición

Haz clic en el nombre de una función y pulsa **F12** (o clic derecho → **Go to Definition** / **Ir a definición**). VS Code salta a donde está escrita. Muy útil cuando `Program.cs` se hace largo.

### Renombrar

**F2** (*Rename Symbol*, de `01`) también funciona con funciones: cambia el nombre en la definición y en todas las llamadas.

---

## Reto 6: Convierte en funciones

En `03` escribiste mucho código que ahora puede ser una función. Escribe cada una y pruébala con las llamadas que se indican.

### Parte A: `CountVowels`

```csharp
int CountVowels(string text)
```

Cuenta las vocales (con y sin tilde).

```csharp
Console.WriteLine(CountVowels("Hola Alberto"));          // 5
Console.WriteLine(CountVowels("El fútbol es lo mejor")); // 7
Console.WriteLine(CountVowels("xyz"));                   // 0
```

<details>
<summary>Ver una solución</summary>

```csharp
int CountVowels(string text)
{
    int count = 0;
    foreach (char letter in text.ToLower())
    {
        if ("aeiouáéíóú".Contains(letter))
        {
            count++;
        }
    }
    return count;
}
```

</details>

<br>

### Parte B: `Reverse` e `IsPalindrome`

```csharp
string Reverse(string text)
bool IsPalindrome(string word)
```

`IsPalindrome` tiene que **llamar a** `Reverse`. No repitas el bucle.

```csharp
Console.WriteLine(Reverse("Alberto"));       // otreblA
Console.WriteLine(IsPalindrome("Ana"));      // True
Console.WriteLine(IsPalindrome("Alberto"));  // False
```

<details>
<summary>Ver una solución</summary>

```csharp
string Reverse(string text)
{
    string reversed = "";
    for (int i = text.Length - 1; i >= 0; i--)
    {
        reversed += text[i];
    }
    return reversed;
}

bool IsPalindrome(string word)
{
    string lower = word.ToLower();
    return lower == Reverse(lower);
}
```

</details>

<br>

### Parte C: `GetCategory`

```csharp
string GetCategory(int grade)
```

Devuelve `"Suspenso"`, `"Aprobado"`, `"Notable"`, `"Sobresaliente"` o `"Nota no válida"` (las reglas del Reto 3 de `03`). Usa `return` para salir antes, sin `else`.

```csharp
Console.WriteLine(GetCategory(3));   // Suspenso
Console.WriteLine(GetCategory(7));   // Notable
Console.WriteLine(GetCategory(10));  // Sobresaliente
Console.WriteLine(GetCategory(11));  // Nota no válida
```

<details>
<summary>Ver una solución</summary>

```csharp
string GetCategory(int grade)
{
    if (grade < 0 || grade > 10)
    {
        return "Nota no válida";
    }
    if (grade >= 9)
    {
        return "Sobresaliente";
    }
    if (grade >= 7)
    {
        return "Notable";
    }
    if (grade >= 5)
    {
        return "Aprobado";
    }
    return "Suspenso";
}
```

</details>

<br>

### Parte D: `Sum`, `Max` y `Average`

```csharp
int Sum(int[] numbers)
int Max(int[] numbers)
double Average(int[] numbers)
```

`Average` tiene que **llamar a** `Sum`.

```csharp
int[] goals = { 2, 0, 3, 1 };
Console.WriteLine(Sum(goals));      // 6
Console.WriteLine(Max(goals));      // 3
Console.WriteLine(Average(goals));  // 1.5

int[] temperatures = { -5, -2, -8 };
Console.WriteLine(Max(temperatures));  // -2
```

<details>
<summary>Ver una solución</summary>

```csharp
int Sum(int[] numbers)
{
    int total = 0;
    foreach (int number in numbers)
    {
        total += number;
    }
    return total;
}

int Max(int[] numbers)
{
    int highest = numbers[0];
    foreach (int number in numbers)
    {
        if (number > highest)
        {
            highest = number;
        }
    }
    return highest;
}

double Average(int[] numbers)
{
    return (double)Sum(numbers) / numbers.Length;
}
```

</details>

<br>

### Parte E: `FizzBuzz`

```csharp
string FizzBuzz(int number)
```

Ahora la función solo decide qué texto le toca a **un** número. El bucle va fuera:

```csharp
for (int i = 1; i <= 15; i++)
{
    Console.WriteLine(FizzBuzz(i));
}
```

<details>
<summary>Ver una solución</summary>

```csharp
string FizzBuzz(int number)
{
    if (number % 3 == 0 && number % 5 == 0)
    {
        return "FizzBuzz";
    }
    if (number % 3 == 0)
    {
        return "Fizz";
    }
    if (number % 5 == 0)
    {
        return "Buzz";
    }
    return number.ToString();
}
```

¿Por qué separar el bucle de la decisión? Porque así puedes **probar** la función con un solo número: `Console.WriteLine(FizzBuzz(15));`. Si algo falla, sabes exactamente dónde mirar.

</details>

<br>

---

## Reto final: El boletín de notas, con funciones 📝

En `03` hiciste un boletín de notas con todo dentro de un bucle. Ahora vas a hacerlo con funciones, para **dos** alumnos.

### Lo que tienes que escribir

| Función | Devuelve | Qué hace | Llama a |
|---|---|---|---|
| `GetCategory(int grade)` | `string` | La del Reto 6 | |
| `Sum(int[] numbers)` | `int` | La del Reto 6 | |
| `Max(int[] numbers)` | `int` | La del Reto 6 | |
| `Average(int[] numbers)` | `double` | La del Reto 6 | `Sum` |
| `CountPassed(int[] grades)` | `int` | Cuántas notas son 5 o más | |
| `PrintReport(string name, int[] grades)` | `void` | Imprime el boletín completo de un alumno | `GetCategory`, `CountPassed`, `Average`, `Max` |

### El código principal

Tu código de arriba tiene que ser **solo esto**:

```csharp
int[] albertoGrades = { 8, 4, 10, 6, 8, 9 };
int[] lauraGrades = { 5, 7, 3, 9 };

PrintReport("Alberto", albertoGrades);
PrintReport("Laura", lauraGrades);
```

### Resultado esperado

```
=== Alberto ===
Examen 1: 8 - Notable
Examen 2: 4 - Suspenso
Examen 3: 10 - Sobresaliente
Examen 4: 6 - Aprobado
Examen 5: 8 - Notable
Examen 6: 9 - Sobresaliente
Aprobados: 5 de 6
Media: 7.5
Nota más alta: 10

=== Laura ===
Examen 1: 5 - Aprobado
Examen 2: 7 - Notable
Examen 3: 3 - Suspenso
Examen 4: 9 - Sobresaliente
Aprobados: 3 de 4
Media: 6
Nota más alta: 9
```

### Pistas (solo si te atascas)

<details>
<summary>Ver pistas</summary>

- Copia las funciones del Reto 6. ¡Para eso están!
- `CountPassed` es un "contar" de la Lección 8 de `03`: empieza en 0 y suma 1 dentro de un `if`.
- `PrintReport` necesita un `for` (no `foreach`) para poder imprimir el número de examen.
- `PrintReport` no calcula nada por sí misma: le pide cada dato a la función que toca.
- Para el `"5 de 6"`, el 6 es `grades.Length`.
- Haz primero que funcione para Alberto. Cuando funcione, Laura funcionará sola.

</details>

<details>
<summary>Ver una solución</summary>

```csharp
int[] albertoGrades = { 8, 4, 10, 6, 8, 9 };
int[] lauraGrades = { 5, 7, 3, 9 };

PrintReport("Alberto", albertoGrades);
PrintReport("Laura", lauraGrades);

void PrintReport(string name, int[] grades)
{
    Console.WriteLine($"=== {name} ===");

    for (int i = 0; i < grades.Length; i++)
    {
        Console.WriteLine($"Examen {i + 1}: {grades[i]} - {GetCategory(grades[i])}");
    }

    Console.WriteLine($"Aprobados: {CountPassed(grades)} de {grades.Length}");
    Console.WriteLine($"Media: {Average(grades)}");
    Console.WriteLine($"Nota más alta: {Max(grades)}");
    Console.WriteLine();
}

string GetCategory(int grade)
{
    if (grade < 0 || grade > 10)
    {
        return "Nota no válida";
    }
    if (grade >= 9)
    {
        return "Sobresaliente";
    }
    if (grade >= 7)
    {
        return "Notable";
    }
    if (grade >= 5)
    {
        return "Aprobado";
    }
    return "Suspenso";
}

int CountPassed(int[] grades)
{
    int count = 0;
    foreach (int grade in grades)
    {
        if (grade >= 5)
        {
            count++;
        }
    }
    return count;
}

int Sum(int[] numbers)
{
    int total = 0;
    foreach (int number in numbers)
    {
        total += number;
    }
    return total;
}

int Max(int[] numbers)
{
    int highest = numbers[0];
    foreach (int number in numbers)
    {
        if (number > highest)
        {
            highest = number;
        }
    }
    return highest;
}

double Average(int[] numbers)
{
    return (double)Sum(numbers) / numbers.Length;
}
```

`Console.WriteLine()` sin nada dentro imprime una línea vacía.

</details>

### Retos extra

1. Añade un tercer alumno. ¿Cuántas líneas tuviste que escribir? (Debería ser una para sus notas y otra para el `PrintReport`.)
2. El colegio cambia las reglas: ahora Notable es de 6 a 8. ¿Cuántos sitios tienes que cambiar? Compáralo con el boletín de `03`.
3. Escribe `int CountFailed(int[] grades)`. ¿Puedes escribirla en **una línea** usando `CountPassed`?
4. Escribe `string GetBestStudent(string name1, int[] grades1, string name2, int[] grades2)`, que devuelva el nombre del alumno con mejor media. Usa `Average`.
