# TypeScript Challenges: Beyond Generics

## Topic 1: Type Guards

### Challenge 1.1: Animal Classifier
**Difficulty: Beginner**

You have three animal types:

```typescript
interface Dog {
  type: 'dog';
  bark: () => void;
}

interface Cat {
  type: 'cat';
  meow: () => void;
}

interface Bird {
  type: 'bird';
  fly: () => void;
}

type Animal = Dog | Cat | Bird;
```

Create a function called `makeSound` that takes an `Animal` and calls the appropriate method (`bark`, `meow`, or `fly`) based on its type. Use type guards to narrow the type properly so TypeScript knows which methods are available.

**Example usage:**
```typescript
const dog: Animal = { type: 'dog', bark: () => console.log('Woof!') };
const cat: Animal = { type: 'cat', meow: () => console.log('Meow!') };

makeSound(dog); // "Woof!"
makeSound(cat); // "Meow!"
```

### Challenge 1.2: Custom Type Guard for API Response
**Difficulty: Intermediate**

Create a custom type guard function called `isSuccessResponse` that checks if an API response is successful.

```typescript
interface SuccessResponse {
  status: 'success';
  data: unknown;
}

interface ErrorResponse {
  status: 'error';
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;
```

The type guard should:
- Use the `is` keyword in its return type
- Check that the response has a `status` property equal to `'success'`
- Return a boolean

Then create a function `handleResponse` that uses your type guard to process the response and either logs the data or the error message.

**Example usage:**
```typescript
const response1: ApiResponse = { status: 'success', data: { id: 1 } };
const response2: ApiResponse = { status: 'error', message: 'Not found' };

handleResponse(response1); // Should access response.data safely
handleResponse(response2); // Should access response.message safely
```

---

## Topic 2: Utility Types

### Challenge 2.1: User Profile Builder
**Difficulty: Beginner**

Given this User interface:

```typescript
interface User {
  id: number;
  username: string;
  email: string;
  age: number;
  isActive: boolean;
}
```

Create the following:
1. A function `createDraftUser` that accepts a `Partial<User>` and returns a full `User` with default values for missing properties
2. A function `getUserDisplay` that accepts a `Pick<User, 'username' | 'email'>` and returns a formatted string
3. A type `UserWithoutId` using `Omit<User, 'id'>` for creating new users before they're saved

**Example usage:**
```typescript
const draft = createDraftUser({ username: 'john' });
// Should return: { id: 0, username: 'john', email: '', age: 0, isActive: false }

const display = getUserDisplay({ username: 'john', email: 'john@example.com' });
// Should return: "john (john@example.com)"

const newUser: UserWithoutId = {
  username: 'jane',
  email: 'jane@example.com',
  age: 25,
  isActive: true
};
```

### Challenge 2.2: Configuration Manager
**Difficulty: Intermediate**

Create a configuration system using utility types:

```typescript
interface AppConfig {
  apiUrl: string;
  timeout: number;
  retries: number;
  features: {
    darkMode: boolean;
    notifications: boolean;
  };
}
```

Implement:
1. A `defaultConfig` constant of type `Readonly<AppConfig>` that can't be modified
2. A function `updateConfig` that takes `Partial<AppConfig>` and merges it with the default config (nested properties should be merged too)
3. A type `ConfigKeys` using `keyof AppConfig` 
4. A function `getConfigValue` that uses `Record<K, V>` and accepts a key and returns the corresponding value with proper typing

**Example usage:**
```typescript
const config = updateConfig({ timeout: 5000 });
// Should merge with defaults

const value = getConfigValue('timeout');
// TypeScript should know this returns a number
```

---

## Topic 3: Union and Intersection Types

### Challenge 3.1: Payment Method Handler
**Difficulty: Beginner**

Create a payment system with union types:

```typescript
type CreditCard = {
  method: 'credit_card';
  cardNumber: string;
  cvv: string;
};

type PayPal = {
  method: 'paypal';
  email: string;
};

type BankTransfer = {
  method: 'bank_transfer';
  accountNumber: string;
  routingNumber: string;
};

type PaymentMethod = CreditCard | PayPal | BankTransfer;
```

Create a function `processPayment` that:
- Takes a `PaymentMethod` and an `amount: number`
- Returns a string describing the payment being processed
- Uses type narrowing to access the correct properties

**Example usage:**
```typescript
processPayment({ method: 'credit_card', cardNumber: '1234', cvv: '123' }, 100);
// "Processing $100 via credit card ending in 1234"

processPayment({ method: 'paypal', email: 'user@example.com' }, 50);
// "Processing $50 via PayPal account user@example.com"
```

### Challenge 3.2: Entity with Timestamps
**Difficulty: Intermediate**

Use intersection types to compose reusable type fragments:

```typescript
type Identifiable = {
  id: string;
};

type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type Deletable = {
  deletedAt?: Date;
  isDeleted: boolean;
};
```

Create:
1. A `Product` type that combines all three types above with its own properties: `name: string` and `price: number`
2. A `Comment` type that combines `Identifiable` and `Timestamps` with: `text: string` and `authorId: string`
3. A function `softDelete` that takes any type that is `Identifiable & Deletable` and marks it as deleted
4. A function `getActiveItems` that filters an array of items that are `Deletable`, returning only non-deleted items

**Example usage:**
```typescript
const product: Product = {
  id: '1',
  name: 'Laptop',
  price: 999,
  createdAt: new Date(),
  updatedAt: new Date(),
  isDeleted: false
};

softDelete(product); // Sets isDeleted to true and deletedAt to now

const items = [product, /* more products */];
const active = getActiveItems(items); // Returns only non-deleted items
```

---

## Topic 4: Mapped Types

### Challenge 4.1: Make Everything Optional or Readonly
**Difficulty: Intermediate**

Create your own versions of utility types:

1. Implement `MyPartial<T>` that makes all properties optional (don't use the built-in `Partial`)
2. Implement `MyReadonly<T>` that makes all properties readonly (don't use the built-in `Readonly`)
3. Implement `Mutable<T>` that removes `readonly` from all properties

Test your types with:
```typescript
interface Todo {
  title: string;
  completed: boolean;
  readonly id: number;
}

type PartialTodo = MyPartial<Todo>;
// All properties should be optional

type ReadonlyTodo = MyReadonly<Todo>;
// All properties should be readonly

type MutableTodo = Mutable<Todo>;
// The id property should no longer be readonly
```

### Challenge 4.2: API Response Wrapper
**Difficulty: Intermediate+**

Create a mapped type called `ApiResult<T>` that takes an object type and wraps each property value in a result object:

```typescript
type Result<T> = {
  value: T;
  loading: boolean;
  error?: string;
};
```

Your `ApiResult<T>` should transform:
```typescript
{ name: string; age: number }
```

Into:
```typescript
{
  name: { value: string; loading: boolean; error?: string };
  age: { value: number; loading: boolean; error?: string };
}
```

Then create a function `getValue` that extracts just the values from an `ApiResult<T>` back into the original type `T`.

**Example usage:**
```typescript
interface User {
  name: string;
  age: number;
}

const apiUser: ApiResult<User> = {
  name: { value: 'Alice', loading: false },
  age: { value: 30, loading: false }
};

const user: User = getValue(apiUser);
// Should be: { name: 'Alice', age: 30 }
```

---

## Topic 5: Conditional Types

### Challenge 5.1: Extract Array Type
**Difficulty: Intermediate**

Create a conditional type called `ArrayElement<T>` that:
- If `T` is an array type, extracts the element type
- Otherwise, returns `never`

Then create a type `FlattenArray<T>` that:
- If `T` is an array of arrays, flattens it one level
- Otherwise, returns `T` unchanged

**Example usage:**
```typescript
type Test1 = ArrayElement<string[]>; // Should be: string
type Test2 = ArrayElement<number[]>; // Should be: number
type Test3 = ArrayElement<string>; // Should be: never

type Test4 = FlattenArray<number[][]>; // Should be: number[]
type Test5 = FlattenArray<string[]>; // Should be: string[]
type Test6 = FlattenArray<boolean>; // Should be: boolean
```

### Challenge 5.2: Function Return Type Extractor
**Difficulty: Advanced**

Create a conditional type system for functions:

1. Create `IsPromise<T>` that checks if `T` is a Promise type (returns `true` or `false` as literal types)
2. Create `UnwrapPromise<T>` that extracts the value type from a Promise, or returns `T` if it's not a Promise
3. Create `SafeReturnType<T>` that:
   - If `T` is a function, extracts its return type
   - If that return type is a Promise, unwraps it
   - Otherwise returns `never`

**Example usage:**
```typescript
type Async1 = IsPromise<Promise<string>>; // true
type Async2 = IsPromise<string>; // false

type Unwrap1 = UnwrapPromise<Promise<number>>; // number
type Unwrap2 = UnwrapPromise<string>; // string

type Func1 = SafeReturnType<() => Promise<User>>; // User
type Func2 = SafeReturnType<() => string>; // string
type Func3 = SafeReturnType<string>; // never

// Practical example:
async function getUser(): Promise<User> {
  // ...
}

type UserType = SafeReturnType<typeof getUser>; // Should be User, not Promise<User>
```

---

## Learning Tips

- **Type Guards**: Focus on discriminated unions (common `type` property) - they're the most practical pattern
- **Utility Types**: These are used constantly in real projects. Memorize `Partial`, `Pick`, `Omit`, and `Record`
- **Union/Intersection**: Unions are for "OR" (can be A or B), intersections are for "AND" (must be A and B)
- **Mapped Types**: Think of them as loops over object properties at the type level
- **Conditional Types**: They're like ternary operators for types. Start simple and build up complexity

Good luck!