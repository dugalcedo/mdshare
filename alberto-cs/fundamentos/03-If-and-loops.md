# If y bucles 🔁

Sigue usando el mismo proyecto. Para cada reto, borra o comenta el código del anterior.

Recuerda: piensa la respuesta **antes** de abrir los bloques ocultos. En los retos de "¿qué hace este bucle?", hazlo con papel: apunta el valor de cada variable en cada vuelta.

---

## Lección 1: Comparaciones y condiciones

Una **condición** es una pregunta cuya respuesta es `true` o `false`. O sea, un `bool` (¿te acuerdas de George Boole?).

### Comparar

| Operador | Pregunta | Ejemplo | Resultado |
|---|---|---|---|
| `==` | ¿Es igual? | `5 == 5` | `true` |
| `!=` | ¿Es distinto? | `5 != 3` | `true` |
| `>` | ¿Es mayor? | `5 > 3` | `true` |
| `<` | ¿Es menor? | `5 < 3` | `false` |
| `>=` | ¿Es mayor o igual? | `5 >= 5` | `true` |
| `<=` | ¿Es menor o igual? | `4 <= 3` | `false` |

> ⚠️ `=` **guarda** un valor. `==` **compara** dos valores. Confundirlos es uno de los errores más comunes.

Con strings también funciona `==`, pero recuerda que mayúsculas y minúsculas importan: `"Ana" == "ana"` es `false`.

### Combinar condiciones

| Operador | Significa | Es `true` cuando... |
|---|---|---|
| `&&` | Y | **las dos** son `true` |
| `\|\|` | O | **al menos una** es `true` |
| `!` | NO | le da la vuelta: `!true` es `false` |

```csharp
int age = 25;
bool hasTicket = true;

bool canEnter = age >= 18 && hasTicket;   // true: las dos se cumplen
bool isChildOrSenior = age < 12 || age >= 65;  // false: ninguna se cumple
bool noTicket = !hasTicket;               // false
```

## Reto 1: ¿True o False?

Para todas las preguntas:

```csharp
int age = 17;
string name = "Ana";
```

**1.** `age >= 18`

<details>
<summary>Respuesta</summary>

**`false`**

</details>

<br>

**2.** `age != 17`

<details>
<summary>Respuesta</summary>

**`false`**. `age` **es** 17, así que "¿es distinto de 17?" es falso.

</details>

<br>

**3.** `age > 10 && age < 20`

<details>
<summary>Respuesta</summary>

**`true`**. 17 es mayor que 10 **y** menor que 20.

</details>

<br>

**4.** `age > 10 && age > 20`

<details>
<summary>Respuesta</summary>

**`false`**. La primera se cumple, pero la segunda no. Con `&&` tienen que cumplirse las dos.

</details>

<br>

**5.** `age < 10 || age > 16`

<details>
<summary>Respuesta</summary>

**`true`**. La primera no se cumple, pero la segunda sí. Con `||` basta con una.

</details>

<br>

**6.** `!(age == 17)`

<details>
<summary>Respuesta</summary>

**`false`**. `age == 17` es `true`, y `!` le da la vuelta.

</details>

<br>

**7.** `name == "ana"`

<details>
<summary>Respuesta</summary>

**`false`**. `"Ana"` y `"ana"` no son iguales.

</details>

<br>

**8.** `name.ToLower() == "ana"`

<details>
<summary>Respuesta</summary>

**`true`**. Primero `"Ana"` pasa a `"ana"`, y luego se compara.

</details>

<br>

**9.** `name.Length > 3 || age == 17`

<details>
<summary>Respuesta</summary>

**`true`**. `name.Length` es 3, así que `3 > 3` es `false`. Pero `age == 17` es `true`, y con `||` basta.

</details>

<br>

**10.** `if (age = 18)`

<details>
<summary>Respuesta</summary>

**❌ Error.** Con un solo `=` estás **guardando** 18 en `age`, no comparando. Arreglo: `if (age == 18)`.

</details>

<br>

---

## Lección 2: `if`, `else if` y `else`

### `if`

Ejecuta un bloque de código **solo si** la condición es `true`:

```csharp
int goals = 3;

if (goals >= 3)
{
    Console.WriteLine("¡Hat-trick!");
}
```

### `if` + `else`

`else` es el "si no". Se ejecuta **uno de los dos**, nunca los dos:

```csharp
if (goals >= 3)
{
    Console.WriteLine("¡Hat-trick!");
}
else
{
    Console.WriteLine("Buen partido.");
}
```

### `if` + `else if` + `else`

Para más de dos caminos:

```csharp
int temperature = 25;

if (temperature > 30)
{
    Console.WriteLine("Hace calor");
}
else if (temperature > 20)
{
    Console.WriteLine("Se está bien");
}
else if (temperature > 10)
{
    Console.WriteLine("Hace fresco");
}
else
{
    Console.WriteLine("Hace frío");
}
```

Cómo funciona:

1. C# mira las condiciones **de arriba a abajo**.
2. En cuanto encuentra una `true`, ejecuta su bloque y **se salta todo lo demás**.
3. Si ninguna es `true`, ejecuta el `else` (si hay uno).

Así que **solo se ejecuta un bloque**. Y el **orden importa**.

### Varios `if` seguidos vs. `else if`

No es lo mismo:

```csharp
// Varios if: se comprueban TODOS. Pueden ejecutarse varios.
if (score >= 50) { Console.WriteLine("Aprobado"); }
if (score >= 90) { Console.WriteLine("Sobresaliente"); }

// else if: como mucho se ejecuta UNO.
if (score >= 90) { Console.WriteLine("Sobresaliente"); }
else if (score >= 50) { Console.WriteLine("Aprobado"); }
```

### Pon siempre las llaves

C# te deja quitar las `{ }` si el bloque tiene una sola línea. **No lo hagas.** Mira el Reto 2, pregunta 6, para ver por qué.

📖 Más información:
- [Microsoft: Instrucciones if y switch](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/statements/selection-statements)
- [W3Schools: C# If...Else](https://www.w3schools.com/cs/cs_conditions.php) (en inglés)

## Reto 2: ¿Qué imprime? (if)

**1.**

```csharp
int temperature = 25;

if (temperature > 30)
{
    Console.WriteLine("Calor");
}
else if (temperature > 20)
{
    Console.WriteLine("Agradable");
}
else
{
    Console.WriteLine("Frío");
}
```

<details>
<summary>Respuesta</summary>

**`Agradable`**

`25 > 30` es falso. `25 > 20` es verdadero → imprime y se salta el resto.

</details>

<br>

**2.** El mismo código, pero con `int temperature = 20;`

<details>
<summary>Respuesta</summary>

**`Frío`**

`20 > 20` es **falso** (20 no es mayor que 20, es igual). Si quisieras que 20 fuera "Agradable", tendrías que usar `>=`.

</details>

<br>

**3.**

```csharp
int score = 95;

if (score >= 50)
{
    Console.WriteLine("Aprobado");
}
if (score >= 90)
{
    Console.WriteLine("Sobresaliente");
}
```

<details>
<summary>Respuesta</summary>

**`Aprobado`** y **`Sobresaliente`**

Son dos `if` separados (no hay `else`), así que se comprueban los dos, y los dos son verdaderos.

</details>

<br>

**4.**

```csharp
int score = 95;

if (score >= 50)
{
    Console.WriteLine("Aprobado");
}
else if (score >= 90)
{
    Console.WriteLine("Sobresaliente");
}
```

<details>
<summary>Respuesta</summary>

**`Aprobado`** (solo eso)

`95 >= 50` es verdadero, así que imprime "Aprobado" y se salta el `else if`. ¡Nunca llegará a imprimir "Sobresaliente", ni con un 100!

Esto es un **error de orden**. La condición más estricta (`>= 90`) tiene que ir primero.

</details>

<br>

**5.**

```csharp
bool hasTicket = true;
int age = 15;

if (hasTicket && age >= 18)
{
    Console.WriteLine("Puedes entrar");
}
else if (hasTicket)
{
    Console.WriteLine("Necesitas ir con un adulto");
}
else
{
    Console.WriteLine("Compra una entrada");
}
```

<details>
<summary>Respuesta</summary>

**`Necesitas ir con un adulto`**

La primera falla porque `age >= 18` es falso. La segunda (`hasTicket`) es verdadera.

</details>

<br>

**6. Pregunta trampa 🪤**

```csharp
int x = 5;

if (x > 10)
    Console.WriteLine("A");
    Console.WriteLine("B");
```

<details>
<summary>Respuesta</summary>

**`B`**

Sin llaves, el `if` solo controla **la primera línea** después de él. La segunda línea está metida hacia dentro, pero eso es solo decoración: C# no mira los espacios. En realidad, el código es esto:

```csharp
if (x > 10)
{
    Console.WriteLine("A");
}
Console.WriteLine("B");
```

Por eso: **pon siempre las llaves**.

</details>

<br>

**7.**

```csharp
int goals = 3;
bool isHome = false;

if (goals > 2)
{
    if (isHome)
    {
        Console.WriteLine("Fiesta en casa");
    }
    else
    {
        Console.WriteLine("Fiesta fuera");
    }
}
else
{
    Console.WriteLine("Sin fiesta");
}
```

<details>
<summary>Respuesta</summary>

**`Fiesta fuera`**

`goals > 2` es verdadero, así que entra en el primer bloque. Dentro, `isHome` es falso, así que va al `else` de dentro.

</details>

<br>

**8.**

```csharp
string name = "Alberto";

if (name.Length > 5)
{
    Console.WriteLine("Nombre largo");
}
else if (name.StartsWith("A"))
{
    Console.WriteLine("Empieza por A");
}
```

<details>
<summary>Respuesta</summary>

**`Nombre largo`** (solo eso)

`"Alberto"` también empieza por A, pero como la primera condición ya fue verdadera, el `else if` ni se mira.

</details>

<br>

## Reto 3: Escribe tus propios if

### Parte A: Saludo

Crea una variable `int hour` (de 0 a 23). Imprime:

- `Buenos días` si es antes de las 12
- `Buenas tardes` si es de las 12 a las 19
- `Buenas noches` si es de las 20 en adelante

Pruébalo cambiando `hour` a `9`, `12`, `19`, `20` y `0`.

<details>
<summary>Ver una solución</summary>

```csharp
int hour = 19;

if (hour < 12)
{
    Console.WriteLine("Buenos días");
}
else if (hour < 20)
{
    Console.WriteLine("Buenas tardes");
}
else
{
    Console.WriteLine("Buenas noches");
}
```

En el `else if` no hace falta escribir `hour >= 12 && hour < 20`. Si llegamos ahí, es porque `hour < 12` fue falso, así que ya sabemos que `hour` es 12 o más.

</details>

<br>

### Parte B: La nota

Crea una variable `int grade` (de 0 a 10). Imprime:

| Nota | Imprime |
|---|---|
| 0 a 4 | `Suspenso` |
| 5 y 6 | `Aprobado` |
| 7 y 8 | `Notable` |
| 9 y 10 | `Sobresaliente` |
| Menos de 0 o más de 10 | `Nota no válida` |

<details>
<summary>Ver una solución</summary>

```csharp
int grade = 7;

if (grade < 0 || grade > 10)
{
    Console.WriteLine("Nota no válida");
}
else if (grade >= 9)
{
    Console.WriteLine("Sobresaliente");
}
else if (grade >= 7)
{
    Console.WriteLine("Notable");
}
else if (grade >= 5)
{
    Console.WriteLine("Aprobado");
}
else
{
    Console.WriteLine("Suspenso");
}
```

Primero se descartan las notas no válidas. Luego, de la más alta a la más baja.

</details>

<br>

### Parte C: Entrada de cine

Crea `int age` y `bool isStudent`. El precio de la entrada es:

- Menores de 12: **5 €**
- 65 o más: **6 €**
- Los demás: **9 €**, pero si es estudiante, **7 €**

Imprime `Precio: 7 €` (o el que sea).

<details>
<summary>Ver una solución</summary>

```csharp
int age = 22;
bool isStudent = true;
int price;

if (age < 12)
{
    price = 5;
}
else if (age >= 65)
{
    price = 6;
}
else if (isStudent)
{
    price = 7;
}
else
{
    price = 9;
}

Console.WriteLine($"Precio: {price} €");
```

Fíjate en que `price` se crea **antes** del `if`. ¿Por qué? Lo vas a ver en la siguiente lección.

</details>

<br>

---

## Lección 3: Ámbito (*scope*)

### Las variables viven dentro de sus llaves

Una variable solo existe **dentro de las `{ }` donde se creó**. Cuando el programa sale de esas llaves, la variable desaparece. La zona donde existe una variable se llama su **ámbito** (en inglés, *scope*).

```csharp
int age = 20;

if (age >= 18)
{
    string message = "Adulto";
    Console.WriteLine(message);  // ✅ aquí message existe
}

Console.WriteLine(message);  // ❌ error: aquí message no existe
```

### La regla de la casa 🏠

Piensa en las llaves como **habitaciones**, y en el código de fuera como el **pasillo**:

- Desde dentro de una habitación **ves** lo que hay en el pasillo. (Dentro del `if` puedes usar `age`.)
- Desde el pasillo **no ves** lo que hay dentro de las habitaciones. (Fuera del `if` no puedes usar `message`.)

### Cómo arreglarlo

Si necesitas la variable fuera, **créala fuera**, antes del bloque. Dentro, solo cámbiale el valor:

```csharp
int age = 20;
string message = "";

if (age >= 18)
{
    message = "Adulto";
}
else
{
    message = "Menor";
}

Console.WriteLine(message);  // ✅
```

### Más reglas de ámbito

**El contador de un `for` solo vive dentro del `for`** (los bucles los verás en un momento):

```csharp
for (int i = 0; i < 3; i++)
{
    Console.WriteLine(i);  // ✅
}
Console.WriteLine(i);  // ❌ i ya no existe
```

**Dos bloques separados pueden usar el mismo nombre**, porque son habitaciones distintas:

```csharp
for (int i = 0; i < 3; i++) { }
for (int i = 0; i < 5; i++) { }  // ✅ es otra i, en otra habitación
```

**Pero no puedes repetir un nombre que ya existe fuera:**

```csharp
int total = 0;

if (true)
{
    int total = 5;  // ❌ error: ya hay un total en el pasillo
}
```

**Y una variable creada sin valor tiene que recibir uno seguro antes de usarse:**

```csharp
int x = 10;
string result;

if (x > 5)
{
    result = "grande";
}

Console.WriteLine(result);  // ❌ error: ¿y si x no fuera > 5?
```

C# no se pone a calcular si `x > 5` será verdadero. Solo ve que hay un camino en el que `result` no recibe ningún valor. Arreglos: añade un `else` que también le dé valor, o créala con un valor inicial (`string result = "";`).

📖 Más información:
- [Microsoft: Variables locales y ámbito](https://learn.microsoft.com/es-es/dotnet/csharp/language-reference/statements/declarations)

## Reto 4: ¿Funciona o no? (ámbito)

**1.**

```csharp
bool isRaining = true;

if (isRaining)
{
    string advice = "Lleva paraguas";
}

Console.WriteLine(advice);
```

<details>
<summary>Respuesta</summary>

❌ `advice` se creó dentro del `if`, y fuera ya no existe. Arreglo: crea `string advice = "";` antes del `if`, y dentro solo haz `advice = "Lleva paraguas";`.

</details>

<br>

**2.**

```csharp
string city = "Madrid";

if (city.Length > 3)
{
    Console.WriteLine(city.ToUpper());
}
```

<details>
<summary>Respuesta</summary>

✅ `city` está en el pasillo, y desde dentro del `if` se ve.

</details>

<br>

**3.**

```csharp
for (int i = 0; i < 3; i++)
{
    Console.WriteLine("Hola");
}

Console.WriteLine($"El bucle dio {i} vueltas");
```

<details>
<summary>Respuesta</summary>

❌ `i` solo vive dentro del `for`.

</details>

<br>

**4.**

```csharp
for (int i = 0; i < 3; i++)
{
    Console.WriteLine(i);
}

for (int i = 10; i < 13; i++)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

✅ Cada `for` tiene su propia `i`. Son habitaciones distintas.

</details>

<br>

**5.**

```csharp
int score = 0;

if (score == 0)
{
    int score = 10;
}
```

<details>
<summary>Respuesta</summary>

❌ Ya existe un `score` fuera. No puedes crear otro con el mismo nombre dentro. Si querías cambiar el valor: `score = 10;` (sin `int`).

</details>

<br>

**6.**

```csharp
int goals = 4;
string result;

if (goals > 2)
{
    result = "Victoria";
}

Console.WriteLine(result);
```

<details>
<summary>Respuesta</summary>

❌ Si `goals > 2` fuera falso, `result` no tendría valor. C# no lo permite, aunque nosotros sepamos que 4 > 2.

</details>

<br>

**7.**

```csharp
int goals = 4;
string result;

if (goals > 2)
{
    result = "Victoria";
}
else
{
    result = "Otra vez será";
}

Console.WriteLine(result);
```

<details>
<summary>Respuesta</summary>

✅ Ahora **todos** los caminos le dan un valor a `result`.

</details>

<br>

**8.**

```csharp
int age = 30;

if (age > 18)
{
    string text = "Mayor de 18";
    Console.WriteLine(text);
}

if (age > 25)
{
    string text = "Mayor de 25";
    Console.WriteLine(text);
}
```

<details>
<summary>Respuesta</summary>

✅ Cada `text` vive en su propio `if`. Como no hay ningún `text` en el pasillo, no chocan.

</details>

<br>

---

## Lección 4: El bucle `while`

Un **bucle** repite un bloque de código. `while` ("mientras") lo repite **mientras** la condición sea `true`.

```csharp
int count = 1;

while (count <= 3)
{
    Console.WriteLine($"Vuelta {count}");
    count++;
}

Console.WriteLine("Fin");
```

```
Vuelta 1
Vuelta 2
Vuelta 3
Fin
```

Cómo funciona:

1. Mira la condición. ¿Es `true`? Entra en el bloque. ¿Es `false`? Se salta el bloque y sigue con lo de abajo.
2. Al terminar el bloque, **vuelve arriba** al paso 1.

Dos cosas importantes:

- La condición se mira **antes** de cada vuelta. Si es `false` desde el principio, el bloque **no se ejecuta ni una vez**.
- Si dentro del bloque nada hace que la condición se vuelva `false`, el bucle **no termina nunca**. Es un **bucle infinito**.

> 🛑 Si tu programa se queda en un bucle infinito, pulsa **Ctrl + C** en la terminal para pararlo.

### `while (true)` y `break`

A veces se escribe un bucle "infinito" a propósito, y se sale con `break`:

```csharp
int number = 0;

while (true)
{
    number += 3;

    if (number > 10)
    {
        break;  // sal del bucle ahora mismo
    }
}

Console.WriteLine(number);  // 12
```

📖 Más información:
- [W3Schools: C# While Loop](https://www.w3schools.com/cs/cs_while_loop.php) (en inglés)

## Reto 5: ¿Qué hace este bucle? (`while`)

Para cada bucle, di qué imprime. Puede que se ejecute normal, que **no se ejecute nunca**, o que sea **infinito**.

**1.**

```csharp
int i = 0;

while (i < 3)
{
    Console.WriteLine(i);
    i++;
}
```

<details>
<summary>Respuesta</summary>

**`0`, `1`, `2`** (cada uno en una línea)

| Vuelta | `i` al empezar | ¿`i < 3`? | Imprime | `i` al terminar |
|---|---|---|---|---|
| 1 | 0 | sí | 0 | 1 |
| 2 | 1 | sí | 1 | 2 |
| 3 | 2 | sí | 2 | 3 |
| — | 3 | **no** | — | sale |

</details>

<br>

**2.**

```csharp
int i = 10;

while (i < 3)
{
    Console.WriteLine(i);
    i++;
}
```

<details>
<summary>Respuesta</summary>

**Nada. No se ejecuta nunca.**

`10 < 3` es falso desde el principio.

</details>

<br>

**3.**

```csharp
int i = 0;

while (i < 3)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**♾️ Infinito.** Imprime `0` sin parar.

Falta el `i++`. `i` siempre vale 0, así que `i < 3` siempre es verdadero.

</details>

<br>

**4.**

```csharp
int i = 5;

while (i > 0)
{
    Console.WriteLine(i);
    i -= 2;
}
```

<details>
<summary>Respuesta</summary>

**`5`, `3`, `1`**

Después del 1, `i` pasa a -1, y `-1 > 0` es falso.

</details>

<br>

**5.**

```csharp
int i = 0;

while (i != 5)
{
    Console.WriteLine(i);
    i += 2;
}
```

<details>
<summary>Respuesta</summary>

**♾️ Infinito.** Imprime `0`, `2`, `4`, `6`, `8`... sin parar.

`i` salta de 4 a 6, así que **nunca** vale exactamente 5. Por eso es más seguro usar `<` que `!=` en los bucles: `while (i < 5)` sí habría parado.

</details>

<br>

**6.**

```csharp
int n = 1;

while (n < 100)
{
    n *= 2;
}

Console.WriteLine(n);
```

<details>
<summary>Respuesta</summary>

**`128`** (una sola vez)

El `WriteLine` está **fuera** del bucle. `n` va 1 → 2 → 4 → 8 → 16 → 32 → 64 → 128. Cuando llega a 128, `128 < 100` es falso y sale.

</details>

<br>

**7.**

```csharp
int lives = 3;

while (lives > 0)
{
    Console.WriteLine($"Vidas: {lives}");
    lives--;
}

Console.WriteLine("Game over");
```

<details>
<summary>Respuesta</summary>

```
Vidas: 3
Vidas: 2
Vidas: 1
Game over
```

</details>

<br>

**8. Pregunta trampa 🪤**

```csharp
int i = 0;

while (i < 3);
{
    Console.WriteLine(i);
    i++;
}
```

<details>
<summary>Respuesta</summary>

**♾️ Infinito, y no imprime nada.**

¿Ves el `;` después de `while (i < 3)`? Ese punto y coma es un bloque **vacío**. Para C#, el bucle es "mientras `i < 3`, no hagas nada". Como `i` nunca cambia, no sale jamás, y nunca llega a las llaves de abajo.

VS Code te avisa con una línea amarilla ondulada. ¡Haz caso a las líneas amarillas!

</details>

<br>

**9.**

```csharp
int total = 0;

while (true)
{
    total += 4;

    if (total >= 10)
    {
        break;
    }
}

Console.WriteLine(total);
```

<details>
<summary>Respuesta</summary>

**`12`**

`total` va 4 → 8 → 12. Con 12, `12 >= 10` es verdadero → `break`.

</details>

<br>

---

## Lección 5: El bucle `for`

Muchos `while` tienen siempre la misma forma: crear un contador, mirar una condición y cambiar el contador al final.

```csharp
int i = 0;          // 1. empezar
while (i < 3)       // 2. condición
{
    Console.WriteLine(i);
    i++;            // 3. paso
}
```

`for` junta esas tres partes en una sola línea:

```csharp
for (int i = 0; i < 3; i++)
{
    Console.WriteLine(i);
}
```

```
for ( empezar ; condición ; paso )
```

| Parte | Cuándo se ejecuta |
|---|---|
| `int i = 0` | **Una vez**, al principio |
| `i < 3` | **Antes** de cada vuelta. Si es `false`, el bucle termina |
| `i++` | **Después** de cada vuelta |

Los dos bucles hacen exactamente lo mismo. Usa `for` cuando sabes cuántas vueltas quieres dar, y `while` cuando no lo sabes (por ejemplo, "pregunta hasta que el usuario escriba algo válido").

### `for` con arrays y listas

Es la forma clásica de recorrer un array usando sus índices:

```csharp
string[] players = { "Pedri", "Gavi", "Yamal" };

for (int i = 0; i < players.Length; i++)
{
    Console.WriteLine($"{i + 1}. {players[i]}");
}
```

```
1. Pedri
2. Gavi
3. Yamal
```

Fíjate en `i < players.Length`, **no** `<=`. El último índice es `Length - 1`.

Con una lista es igual, pero con `Count`.

### Al revés

```csharp
for (int i = players.Length - 1; i >= 0; i--)
{
    Console.WriteLine(players[i]);
}
```

```
Yamal
Gavi
Pedri
```

📖 Más información:
- [W3Schools: C# For Loop](https://www.w3schools.com/cs/cs_for_loop.php) (en inglés)

## Reto 6: ¿Qué hace este bucle? (`for`)

**1.**

```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**`0`, `1`, `2`, `3`, `4`**. Cinco vueltas, pero empieza en 0, así que no llega a 5.

</details>

<br>

**2.**

```csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**`1`, `2`, `3`, `4`, `5`**. También cinco vueltas. Empieza en 1 y usa `<=`.

</details>

<br>

**3.**

```csharp
for (int i = 10; i > 0; i -= 3)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**`10`, `7`, `4`, `1`**. Después, `i` vale -2, y `-2 > 0` es falso.

</details>

<br>

**4.**

```csharp
for (int i = 0; i < 0; i++)
{
    Console.WriteLine("Hola");
}
```

<details>
<summary>Respuesta</summary>

**Nada. No se ejecuta nunca.** `0 < 0` es falso desde el principio.

</details>

<br>

**5.**

```csharp
for (int i = 0; i < 10; i += 2)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**`0`, `2`, `4`, `6`, `8`**

</details>

<br>

**6.**

```csharp
for (int i = 0; i < 10; i = i * 2)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**♾️ Infinito.** Imprime `0` sin parar.

`0 * 2` es `0`. `i` nunca crece.

</details>

<br>

**7.**

```csharp
for (int i = 3; i >= 3; i--)
{
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**`3`** (una sola vez)

Primera vuelta: `3 >= 3` es verdadero → imprime 3. Luego `i` pasa a 2, y `2 >= 3` es falso.

</details>

<br>

**8.**

```csharp
string[] players = { "Pedri", "Gavi", "Yamal" };

for (int i = 0; i <= players.Length; i++)
{
    Console.WriteLine(players[i]);
}
```

<details>
<summary>Respuesta</summary>

Imprime **`Pedri`, `Gavi`, `Yamal`** y luego **💥 se cuelga** con `IndexOutOfRangeException`.

Con `<=`, la última vuelta es con `i = 3`, y `players[3]` no existe. Tiene que ser `<`.

</details>

<br>

**9.**

```csharp
string word = "hola";

for (int i = word.Length - 1; i >= 0; i--)
{
    Console.WriteLine(word[i]);
}
```

<details>
<summary>Respuesta</summary>

**`a`, `l`, `o`, `h`**. Recorre el string al revés, del índice 3 al 0.

</details>

<br>

**10.**

```csharp
var numbers = new List<int> { 5, 10, 15 };

for (int i = 0; i < numbers.Count; i++)
{
    numbers[i] = numbers[i] * 2;
}

Console.WriteLine(string.Join(", ", numbers));
```

<details>
<summary>Respuesta</summary>

**`10, 20, 30`**

El bucle cambia cada elemento de la lista por su doble. El `WriteLine` está fuera, así que imprime una sola vez, al final.

</details>

<br>

---

## Lección 6: El bucle `foreach`

`foreach` ("para cada") recorre **todos los elementos** de un array, una lista o un string, uno a uno, sin índices:

```csharp
string[] players = { "Pedri", "Gavi", "Yamal" };

foreach (string player in players)
{
    Console.WriteLine(player);
}
```

Se lee: "para cada `player` en `players`, haz esto". En cada vuelta, `player` es el siguiente elemento.

Con un string, recorre **cada carácter** (un `char`):

```csharp
foreach (char letter in "hola")
{
    Console.WriteLine(letter);  // h, o, l, a
}
```

### ¿`for` o `foreach`?

- ¿Necesitas el **índice** (para numerar, para ir al revés, para cambiar elementos)? → `for`
- ¿Solo quieres **ver** cada elemento? → `foreach`, que es más corto y no puedes equivocarte con el índice.

> ⚠️ Dentro de un `foreach` no puedes añadir ni quitar elementos de la lista que estás recorriendo. El programa se cuelga.

> 💡 Un buen nombre para la variable del `foreach` es el singular de la colección: `foreach (string player in players)`, `foreach (int grade in grades)`.

---

## Lección 7: Bucles + `if`

Ahora viene lo bueno: un `if` **dentro** de un bucle te deja hacer algo **solo con algunos** elementos.

```csharp
string[] players = { "Pedri", "Gavi", "Pau", "Lamine" };

foreach (string player in players)
{
    if (player.StartsWith("P"))
    {
        Console.WriteLine(player);  // Pedri, Pau
    }
}
```

### El operador `%` (resto)

`%` te da el **resto** de una división:

```csharp
Console.WriteLine(7 % 2);   // 1   (7 entre 2 es 3, y sobra 1)
Console.WriteLine(10 % 3);  // 1   (10 entre 3 es 3, y sobra 1)
Console.WriteLine(10 % 5);  // 0   (10 entre 5 es 2, y no sobra nada)
```

Es muy útil con `if`:

- `n % 2 == 0` → `n` es **par**
- `n % 2 != 0` → `n` es **impar**
- `n % 3 == 0` → `n` es **múltiplo de 3**

### `break` y `continue`

- `break` → **sal** del bucle ahora mismo.
- `continue` → **sáltate el resto de esta vuelta** y pasa a la siguiente.

```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue;  // se salta el 3
    }
    Console.WriteLine(i);  // 1, 2, 4, 5
}
```

## Reto 7: ¿Qué imprime? (bucles + if)

**1.**

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i % 2 == 0)
    {
        Console.WriteLine(i);
    }
}
```

<details>
<summary>Respuesta</summary>

**`2`, `4`, `6`, `8`, `10`**. Los pares.

</details>

<br>

**2.**

```csharp
for (int i = 1; i <= 6; i++)
{
    if (i % 3 == 0)
    {
        Console.WriteLine("X");
    }
    else
    {
        Console.WriteLine(i);
    }
}
```

<details>
<summary>Respuesta</summary>

**`1`, `2`, `X`, `4`, `5`, `X`**

</details>

<br>

**3.**

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 4)
    {
        break;
    }
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**`0`, `1`, `2`, `3`**

Cuando `i` es 4, `break` sale del bucle **antes** de llegar al `WriteLine`.

</details>

<br>

**4.**

```csharp
for (int i = 0; i < 5; i++)
{
    if (i == 2)
    {
        continue;
    }
    Console.WriteLine(i);
}
```

<details>
<summary>Respuesta</summary>

**`0`, `1`, `3`, `4`**

Con `continue` se salta solo el 2, y sigue.

</details>

<br>

**5.**

```csharp
foreach (char letter in "hola mundo")
{
    if (letter == ' ')
    {
        break;
    }
    Console.WriteLine(letter);
}
```

<details>
<summary>Respuesta</summary>

**`h`, `o`, `l`, `a`**

Al llegar al espacio, `break`. "mundo" no se imprime.

</details>

<br>

**6.**

```csharp
string[] players = { "Pedri", "Gavi", "Yamal" };

for (int i = 0; i < players.Length; i++)
{
    if (players[i] == "Gavi")
    {
        Console.WriteLine($"Gavi está en el índice {i}");
    }
}
```

<details>
<summary>Respuesta</summary>

**`Gavi está en el índice 1`**

</details>

<br>

**7.**

```csharp
int[] numbers = { 3, -1, 0, 7 };

foreach (int number in numbers)
{
    if (number > 0)
    {
        Console.WriteLine("positivo");
    }
    else if (number < 0)
    {
        Console.WriteLine("negativo");
    }
    else
    {
        Console.WriteLine("cero");
    }
}
```

<details>
<summary>Respuesta</summary>

**`positivo`, `negativo`, `cero`, `positivo`**

</details>

<br>

**8.**

```csharp
var words = new List<string> { "sol", "playa", "mar", "montaña" };

foreach (string word in words)
{
    if (word.Length > 3 && word.Contains("a"))
    {
        Console.WriteLine(word.ToUpper());
    }
}
```

<details>
<summary>Respuesta</summary>

**`PLAYA`, `MONTAÑA`**

`sol` y `mar` tienen 3 letras, así que `Length > 3` falla. (`mar` tiene una `a`, pero con `&&` tienen que cumplirse las dos.)

</details>

<br>

---

## Lección 8: Acumular

**Acumular** es ir juntando un resultado vuelta a vuelta. Es uno de los patrones más usados en programación, y siempre tiene **tres pasos**:

1. **Antes** del bucle: crea una variable con un valor inicial.
2. **Dentro** del bucle: actualízala.
3. **Después** del bucle: úsala.

### Sumar

```csharp
int[] goals = { 2, 0, 3, 1 };
int total = 0;                       // 1. antes

foreach (int matchGoals in goals)
{
    total += matchGoals;             // 2. dentro
}

Console.WriteLine($"Total: {total}"); // 3. después → Total: 6
```

Vuelta a vuelta:

| Vuelta | `matchGoals` | `total` antes | `total` después |
|---|---|---|---|
| 1 | 2 | 0 | 2 |
| 2 | 0 | 2 | 2 |
| 3 | 3 | 2 | 5 |
| 4 | 1 | 5 | 6 |

### Contar

Contar es sumar 1 **solo cuando se cumple algo**. Por ejemplo, contar las vocales de una frase:

```csharp
string sentence = "Hola Alberto";
int vowelCount = 0;

foreach (char letter in sentence.ToLower())
{
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
    {
        vowelCount++;
    }
}

Console.WriteLine($"Vocales: {vowelCount}");  // Vocales: 5
```

El `ToLower()` es para que la `A` mayúscula también cuente.

Ese `if` tan largo se puede acortar con `Contains`: `if ("aeiou".Contains(letter))`. Se lee: "¿está esta letra dentro de `aeiou`?".

### Construir un string

Los strings también se acumulan, empezando con `""` (texto vacío). Por ejemplo, **dar la vuelta** a una palabra:

```csharp
string word = "Alberto";
string reversed = "";

for (int i = word.Length - 1; i >= 0; i--)
{
    reversed += word[i];
}

Console.WriteLine(reversed);  // otreblA
```

| `i` | `word[i]` | `reversed` después |
|---|---|---|
| 6 | `o` | `"o"` |
| 5 | `t` | `"ot"` |
| 4 | `r` | `"otr"` |
| 3 | `e` | `"otre"` |
| 2 | `b` | `"otreb"` |
| 1 | `l` | `"otrebl"` |
| 0 | `A` | `"otreblA"` |

Otra forma, con `foreach`: recorre la palabra **del derecho**, pero pon cada letra **delante** en vez de detrás:

```csharp
string reversed = "";

foreach (char letter in word)
{
    reversed = letter + reversed;  // delante
}
```

| `letter` | `reversed` después |
|---|---|
| `A` | `"A"` |
| `l` | `"lA"` |
| `b` | `"blA"` |
| ... | ... |
| `o` | `"otreblA"` |

### Buscar el mayor

Guarda "el mayor hasta ahora", y cámbialo cuando encuentres uno más grande:

```csharp
int[] goals = { 2, 0, 3, 1 };
int highest = goals[0];  // empieza con el primero

foreach (int matchGoals in goals)
{
    if (matchGoals > highest)
    {
        highest = matchGoals;
    }
}

Console.WriteLine($"Máximo: {highest}");  // Máximo: 3
```

¿Por qué empezar con `goals[0]` y no con `0`? Lo verás en el Reto 8.

### Construir una lista

También puedes acumular en una lista, empezando con una vacía:

```csharp
string[] players = { "Pedri", "Gavi", "Lewandowski", "Yamal" };
var longNames = new List<string>();

foreach (string player in players)
{
    if (player.Length > 5)
    {
        longNames.Add(player);
    }
}

Console.WriteLine(string.Join(", ", longNames));  // Lewandowski
```

### Resumen

| Quiero... | Empieza con | Dentro del bucle |
|---|---|---|
| Sumar | `0` | `total += x;` |
| Contar | `0` | `if (...) { count++; }` |
| Multiplicar | `1` | `product *= x;` |
| Construir un string | `""` | `text += x;` |
| El mayor | el primer elemento | `if (x > highest) { highest = x; }` |
| El menor | el primer elemento | `if (x < lowest) { lowest = x; }` |
| Construir una lista | `var list = new List<...>();` | `if (...) { list.Add(x); }` |

### ⚠️ El error más común

La variable acumuladora se crea **antes** del bucle. Si la creas **dentro**, se vuelve a crear en cada vuelta y empieza de cero cada vez (¿te acuerdas del ámbito?). Lo verás en el reto.

## Reto 8: ¿Cuánto vale al final? (acumular)

**1.**

```csharp
int total = 0;

for (int i = 1; i <= 4; i++)
{
    total += i;
}

Console.WriteLine(total);
```

<details>
<summary>Respuesta</summary>

**`10`**. 0 + 1 + 2 + 3 + 4.

</details>

<br>

**2.**

```csharp
string result = "";

foreach (char letter in "abc")
{
    result += letter;
}

Console.WriteLine(result);
```

<details>
<summary>Respuesta</summary>

**`abc`**. Cada letra se pone **detrás**.

</details>

<br>

**3.**

```csharp
string result = "";

foreach (char letter in "abc")
{
    result = letter + result;
}

Console.WriteLine(result);
```

<details>
<summary>Respuesta</summary>

**`cba`**. Cada letra se pone **delante**.

</details>

<br>

**4.**

```csharp
int count = 0;

foreach (char letter in "banana")
{
    if (letter == 'a')
    {
        count++;
    }
}

Console.WriteLine(count);
```

<details>
<summary>Respuesta</summary>

**`3`**

</details>

<br>

**5.**

```csharp
string result = "";

for (int i = 1; i <= 3; i++)
{
    result += i + "-";
}

Console.WriteLine(result);
```

<details>
<summary>Respuesta</summary>

**`1-2-3-`**

Fíjate en el guion del final. Para evitarlo, `string.Join("-", ...)` es más cómodo.

</details>

<br>

**6.**

```csharp
int[] prices = { 5, 10, 20 };
int total = 0;

foreach (int price in prices)
{
    total += price;
}

int average = total / prices.Length;
Console.WriteLine(average);
```

<details>
<summary>Respuesta</summary>

**`11`**

`total` es 35, y `35 / 3` es 11,666... Pero los dos son `int`, así que la división **tira los decimales**. Para tener los decimales:

```csharp
double average = (double)total / prices.Length;  // 11.666666666666666
```

El `(double)` convierte `total` en `double` antes de dividir.

</details>

<br>

**7. Pregunta trampa 🪤**

```csharp
for (int i = 0; i < 3; i++)
{
    int count = 0;
    count++;
    Console.WriteLine(count);
}
```

<details>
<summary>Respuesta</summary>

**`1`, `1`, `1`**

`count` se crea **dentro** del bucle, así que en cada vuelta se crea de nuevo con valor 0. Nunca pasa de 1. Para acumular, créala **antes** del bucle.

</details>

<br>

**8. Pregunta trampa 🪤**

```csharp
int[] numbers = { 2, 3, 4 };
int product = 0;

foreach (int number in numbers)
{
    product *= number;
}

Console.WriteLine(product);
```

<details>
<summary>Respuesta</summary>

**`0`**

Cualquier cosa por 0 es 0. Para multiplicar, hay que empezar con **1**. Con `int product = 1;`, el resultado sería 24.

</details>

<br>

**9. Pregunta trampa 🪤**

```csharp
int[] temperatures = { -5, -2, -8 };
int highest = 0;

foreach (int temperature in temperatures)
{
    if (temperature > highest)
    {
        highest = temperature;
    }
}

Console.WriteLine(highest);
```

<details>
<summary>Respuesta</summary>

**`0`** 😬 (la respuesta correcta sería -2)

Ninguna temperatura es mayor que 0, así que `highest` nunca cambia. Y 0 ni siquiera está en el array. Por eso hay que empezar con el **primer elemento**: `int highest = temperatures[0];`

</details>

<br>

**10.**

```csharp
var words = new List<string> { "sol", "playa", "mar", "montaña" };
int longWordCount = 0;

foreach (string word in words)
{
    if (word.Length > 4)
    {
        longWordCount++;
    }
}

Console.WriteLine(longWordCount);
```

<details>
<summary>Respuesta</summary>

**`2`** (`playa` y `montaña`)

</details>

<br>

---

## Reto 9: ¡A programar!

Ahora te toca escribir el código entero. Usa todo lo de esta lección.

### Parte A: El boletín de notas 📝

```csharp
int[] grades = { 8, 4, 10, 6, 8, 9 };
```

1. Para cada nota, imprime su número de examen, la nota y su categoría (usa las categorías del Reto 3, Parte B).
2. Imprime cuántos exámenes aprobó (nota 5 o más).
3. Imprime la media. ¡Ojo con los decimales!
4. Imprime la nota más alta.

Resultado esperado:

```
Examen 1: 8 - Notable
Examen 2: 4 - Suspenso
Examen 3: 10 - Sobresaliente
Examen 4: 6 - Aprobado
Examen 5: 8 - Notable
Examen 6: 9 - Sobresaliente
Aprobados: 5
Media: 7.5
Nota más alta: 10
```

(La media puede salir como `7,5` según el idioma de tu ordenador.)

<details>
<summary>Pistas</summary>

- Para el número de examen necesitas el índice, así que usa `for`. El examen 1 es el índice 0.
- Puedes hacer todo en **un solo** bucle: categoría, contar aprobados, sumar y buscar la más alta.
- Si la media te sale `7`, repasa la pregunta 6 del Reto 8.

</details>

<details>
<summary>Ver una solución</summary>

```csharp
int[] grades = { 8, 4, 10, 6, 8, 9 };

int passedCount = 0;
int total = 0;
int highest = grades[0];

for (int i = 0; i < grades.Length; i++)
{
    int grade = grades[i];
    string category;

    if (grade >= 9)
    {
        category = "Sobresaliente";
    }
    else if (grade >= 7)
    {
        category = "Notable";
    }
    else if (grade >= 5)
    {
        category = "Aprobado";
    }
    else
    {
        category = "Suspenso";
    }

    Console.WriteLine($"Examen {i + 1}: {grade} - {category}");

    if (grade >= 5)
    {
        passedCount++;
    }

    total += grade;

    if (grade > highest)
    {
        highest = grade;
    }
}

double average = (double)total / grades.Length;

Console.WriteLine($"Aprobados: {passedCount}");
Console.WriteLine($"Media: {average}");
Console.WriteLine($"Nota más alta: {highest}");
```

</details>

<br>

### Parte B: Cuenta las vocales 🔤

Crea un `string` con la frase que quieras. Imprime cuántas vocales tiene y cuántos espacios.

```
Frase: El fútbol es lo mejor
Vocales: 7
Espacios: 4
```

Con tildes, `ú` no es `u`. ¿Cómo harías para que también cuenten las vocales con tilde?

<details>
<summary>Ver una solución</summary>

```csharp
string sentence = "El fútbol es lo mejor";
int vowelCount = 0;
int spaceCount = 0;

foreach (char letter in sentence.ToLower())
{
    if ("aeiouáéíóú".Contains(letter))
    {
        vowelCount++;
    }
    else if (letter == ' ')
    {
        spaceCount++;
    }
}

Console.WriteLine($"Frase: {sentence}");
Console.WriteLine($"Vocales: {vowelCount}");
Console.WriteLine($"Espacios: {spaceCount}");
```

Para las tildes, basta con añadirlas al texto de `Contains`. (Con solo `"aeiou"`, saldrían 6 vocales, porque la `ú` no contaría.)

</details>

<br>

### Parte C: Al revés y palíndromos 🔄

Un **palíndromo** es una palabra que se lee igual al derecho y al revés, como `radar` o `reconocer`.

1. Crea un `string word`.
2. Dale la vuelta acumulando en otro string (**sin** buscar un método que lo haga por ti).
3. Imprime la palabra al revés.
4. Imprime si es un palíndromo o no.

Pruébalo con `radar`, `reconocer`, `Alberto` y `Ana`. (¡Cuidado con `Ana`! ¿Por qué falla? ¿Cómo lo arreglas?)

```
Ana al revés: anA
Ana es un palíndromo
```

<details>
<summary>Ver una solución</summary>

```csharp
string word = "Ana";
string reversed = "";

for (int i = word.Length - 1; i >= 0; i--)
{
    reversed += word[i];
}

Console.WriteLine($"{word} al revés: {reversed}");

if (word.ToLower() == reversed.ToLower())
{
    Console.WriteLine($"{word} es un palíndromo");
}
else
{
    Console.WriteLine($"{word} no es un palíndromo");
}
```

`"Ana"` al revés es `"anA"`, y `"Ana" == "anA"` es falso por las mayúsculas. Con `ToLower()` en los dos lados, se arregla.

</details>

<br>

### Parte D: FizzBuzz 🐝

Un clásico de las entrevistas de trabajo. Imprime los números del 1 al 30, pero:

- Si el número es múltiplo de 3, imprime `Fizz` en vez del número.
- Si es múltiplo de 5, imprime `Buzz`.
- Si es múltiplo de 3 **y** de 5, imprime `FizzBuzz`.

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...
```

<details>
<summary>Pista</summary>

El orden de los `if`/`else if` importa. Repasa la pregunta 4 del Reto 2. ¿Qué pasa con el 15 si compruebas primero el 3?

</details>

<details>
<summary>Ver una solución</summary>

```csharp
for (int i = 1; i <= 30; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        Console.WriteLine("FizzBuzz");
    }
    else if (i % 3 == 0)
    {
        Console.WriteLine("Fizz");
    }
    else if (i % 5 == 0)
    {
        Console.WriteLine("Buzz");
    }
    else
    {
        Console.WriteLine(i);
    }
}
```

Si `i % 3 == 0` fuera lo primero, el 15 imprimiría `Fizz` y nunca llegaría a `FizzBuzz`.

</details>

<br>

### Parte E: El máximo goleador ⚽

Tienes dos arrays. El jugador del índice 0 marcó los goles del índice 0, y así:

```csharp
string[] players = { "Lewandowski", "Yamal", "Raphinha", "Pedri" };
int[] goals = { 14, 9, 12, 3 };
```

Imprime:

```
Lewandowski: 14
Yamal: 9
Raphinha: 12
Pedri: 3
Total de goles: 38
Máximo goleador: Lewandowski (14)
```

Luego cambia los números (por ejemplo, dale 20 a Raphinha) y comprueba que el resultado cambia. **No** escribas ningún nombre ni número a mano en los `WriteLine`.

<details>
<summary>Pista</summary>

Para el máximo goleador, no guardes el número más alto: guarda el **índice** del más alto. Con el índice puedes sacar tanto el nombre como los goles.

</details>

<details>
<summary>Ver una solución</summary>

```csharp
string[] players = { "Lewandowski", "Yamal", "Raphinha", "Pedri" };
int[] goals = { 14, 9, 12, 3 };

int totalGoals = 0;
int topScorerIndex = 0;

for (int i = 0; i < players.Length; i++)
{
    Console.WriteLine($"{players[i]}: {goals[i]}");

    totalGoals += goals[i];

    if (goals[i] > goals[topScorerIndex])
    {
        topScorerIndex = i;
    }
}

Console.WriteLine($"Total de goles: {totalGoals}");
Console.WriteLine($"Máximo goleador: {players[topScorerIndex]} ({goals[topScorerIndex]})");
```

</details>

<br>

### Parte F: Filtra la lista 🧹

```csharp
var cities = new List<string> { "Madrid", "Bilbao", "Cádiz", "Barcelona", "Lugo", "Burgos" };
```

1. Crea una lista nueva solo con las ciudades que empiezan por `B`. Imprímela.
2. Crea otra lista con las ciudades de más de 5 letras, **en mayúsculas**. Imprímela.

```
Empiezan por B: Bilbao, Barcelona, Burgos
Más de 5 letras: MADRID, BILBAO, BARCELONA, BURGOS
```

<details>
<summary>Ver una solución</summary>

```csharp
var cities = new List<string> { "Madrid", "Bilbao", "Cádiz", "Barcelona", "Lugo", "Burgos" };

var startsWithB = new List<string>();
var longCities = new List<string>();

foreach (string city in cities)
{
    if (city.StartsWith("B"))
    {
        startsWithB.Add(city);
    }

    if (city.Length > 5)
    {
        longCities.Add(city.ToUpper());
    }
}

Console.WriteLine($"Empiezan por B: {string.Join(", ", startsWithB)}");
Console.WriteLine($"Más de 5 letras: {string.Join(", ", longCities)}");
```

Aquí van dos `if` separados (no `else if`), porque una ciudad puede cumplir los dos.

</details>
