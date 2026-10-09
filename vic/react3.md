# Challenges: The `children` Prop & Context

You've learned two new things:

- **`children`**: whatever you put *between* a component's opening and closing tags
- **Context**: a way to share values with many components without passing props through every level

These three challenges practice both. Challenges 1 and 2 are about `children`. Challenge 3 builds on the auth context we set up together, and uses `children` again too.

> 💡 **Quick reminder about `children`**
>
> ```jsx
> function Box(props) {
>   return <div style={{ border: "2px solid black", padding: "10px" }}>{props.children}</div>;
> }
>
> <Box>
>   <h2>Hello!</h2>
>   <p>Anything in here becomes props.children.</p>
> </Box>
> ```
>
> `Box` doesn't know or care *what* is inside it. It just puts `props.children` where it belongs. That's what makes it reusable.

---

## Challenge 1: Cards and Alerts 🗂️

**Practice:** `children`, props, ternary, `&&`

You're going to make two "wrapper" components that give things a nice frame. Each one has its own look, but the content inside is up to whoever uses it.

### Part A: `Card`

**Requirements:**
1. Make a `Card` component that takes a `title` prop and `children`.
2. It renders a box with a border, some padding, and rounded corners.
3. The `title` goes at the top in an `<h3>`. The `children` go below it.
4. In `App`, use `Card` **at least three times** with **different kinds of content** inside, for example:
   - a short paragraph
   - a list (`<ul>` with a few `<li>`s)
   - a button, or even one of your components from earlier challenges, like a `Counter`!

**Check:** You wrote `Card` only once, but it can hold totally different things. That's the power of `children`.

### Part B: `Alert`

**Requirements:**
1. Make an `Alert` component that takes a `type` prop and `children`.
2. `type` can be `"success"`, `"warning"`, or `"error"`.
3. The background color depends on the type: green for success, yellow for warning, red for error.
   *(Hint: you can work out the color in a variable **before** the `return`. A plain `if` statement is fine there, since it's not inside JSX!)*
4. Show an icon in front of the children: ✅ for success, ⚠️ for warning, ❌ for error.
5. In `App`, show one of each type, with different messages as `children`.

```jsx
<Alert type="success">Your file was saved!</Alert>
<Alert type="error">
  Something went wrong. <strong>Please try again.</strong>
</Alert>
```

**Bonus:** Give `Card` an optional `footer` prop. Use `&&` to show the footer at the bottom **only** if one was passed in.

```jsx
<Card title="Pizza" footer="Prices include tax">
  <p>Pepperoni, mushroom, or cheese.</p>
</Card>
```

---

## Challenge 2: FAQ with Collapsible Sections 🔽

**Practice:** `children`, `useState`, `&&`, ternary, `.map()`

Lots of websites have an FAQ page where you click a question to show its answer. Let's build the piece that makes that work.

### Part A: `Collapsible`

**Requirements:**
1. Make a `Collapsible` component that takes a `title` prop and `children`.
2. It has its own state variable `isOpen` that starts as `false`.
3. The title is shown as a button. Clicking it toggles `isOpen`.
4. Use a **ternary** to show `▶` in front of the title when closed and `▼` when open.
5. Use `&&` to show the `children` **only** when `isOpen` is `true`.

```jsx
<Collapsible title="What are your opening hours?">
  <p>We're open 9:00 to 17:00, Monday to Friday.</p>
</Collapsible>
```

### Part B: The FAQ page

Put this array at the top of your file:

```js
const faqs = [
  { id: 1, question: "Do you ship internationally?", answer: "Yes! We ship to most countries in Europe." },
  { id: 2, question: "How long does shipping take?", answer: "Usually 3 to 5 working days." },
  { id: 3, question: "Can I return my order?", answer: "Yes, within 30 days of delivery." },
  { id: 4, question: "Do you have a store?", answer: "No, we're online only." },
];
```

**Requirements:**
1. Make an `FAQ` component with a heading like `"Frequently Asked Questions"`.
2. Use `.map()` to render a `Collapsible` for each FAQ. The question is the `title`, and the answer goes **inside** as `children` (in a `<p>`).
3. Don't forget the `key`!

**Check:** Open two questions at once. Do they both stay open? Why? (Each `Collapsible` has its own state.)

**Bonus:** Put a `Collapsible` **inside** another `Collapsible`. For example, a "Shipping" section that contains two smaller questions. Does it work? It should, because `children` can be anything, even more `Collapsible`s!

---

## Challenge 3: Extending the Auth Context 🔐

**Practice:** context, a Provider with state, custom hooks, `children`

Remember the auth context we started? Right now it only has `loggedIn: false`, and nothing can change it. In this challenge, you'll turn it into something real: users can log in as someone, see their name around the app, and log out. You'll also build a component that hides its `children` from people who aren't logged in.

### Step 0: Spot the bug 🐛

Before you start, look at the custom hook in the **theme** context file:

```js
export const useTheme = useContext(themeContext)
```

Now compare it to the one in the **auth** context file:

```js
export const useAuth = () => useContext(authContext)
```

They're different! One of them is broken. Which one, and why?

*(Hint: what is `useTheme` in each case: a function, or the result of calling a function? And where are you allowed to call hooks?)*

Fix the broken one before moving on.

### Step 1: Update the context file

Right now the default value is:

```js
const defaultAuthContext = {
    loggedIn: false
}
```

Change it so the context holds:

| Name | Type | What it is |
|---|---|---|
| `user` | string or `null` | The logged-in user's name, or `null` if nobody is logged in |
| `login` | function | Takes a name and logs that person in |
| `logout` | function | Logs the user out |

For the default value, `user` should be `null`, and `login` and `logout` can just be empty functions: `() => {}`. (The real ones will come from the Provider.)

> 🤔 **Do we still need `loggedIn`?** Think about it: if `user` is `null`, nobody is logged in. If `user` is a name, someone is. You can work out `loggedIn` from `user`, so you don't need to store it separately. (Remember this idea from the calendar challenge?)

### Step 2: Build the `AuthProvider`

Make a file for the Provider, the same way you did for the theme.

**Requirements:**
1. `AuthProvider` takes `children`.
2. It has a state variable `user` that starts as `null`.
3. It has a `login(name)` function that sets `user` to `name`.
4. It has a `logout()` function that sets `user` back to `null`.
5. It wraps `children` in the context's Provider, and passes `user`, `login`, and `logout` as the value.
6. In `main.jsx`, wrap your app in `AuthProvider`. (If you already have the theme provider there, you can nest them! One goes inside the other.)

> Notice that the Provider uses `children` too! That's how it can wrap your whole `<App />`.

### Step 3: `UserPicker` (logging in)

We don't have a real login system, so we'll pretend. Put this array at the top of the file:

```js
const fakeUsers = ["Alex", "Sam", "Jordan"];
```

**Requirements:**
1. Make a `UserPicker` component that uses `useAuth()`.
2. If **nobody** is logged in, use `.map()` to show one button per name: `"Log in as Alex"`, etc. Clicking it calls `login` with that name.
3. If someone **is** logged in, show a `"Log out"` button instead.
4. Use a **ternary** to switch between the two.

### Step 4: `NavBar` (reading the user)

**Requirements:**
1. Make a `NavBar` component that uses `useAuth()`.
2. Show the site name on the left.
3. On the right, use a **ternary**: show `"Hi, Alex 👋"` if someone is logged in, or `"Not logged in"` if not.

**Check:** Log in with `UserPicker`. Does `NavBar` update by itself, even though you never passed it any props? That's context!

### Step 5: `RequireLogin` (context + children together)

This is the best part. Make a wrapper component that only shows its `children` to logged-in users.

**Requirements:**
1. Make a `RequireLogin` component that takes `children` and uses `useAuth()`.
2. If someone is logged in, render the `children`.
3. If not, render a message instead, like `"🔒 Please log in to see this."`

Use it in `App` like this:

```jsx
<RequireLogin>
  <h2>Secret Members Area</h2>
  <p>Welcome to the club!</p>
</RequireLogin>
```

**Check:** Wrap a few different things in `RequireLogin`, maybe a `Card` from Challenge 1 or the `FAQ` from Challenge 2. They should all appear and disappear when you log in and out.

### What `App` might look like when you're done

```jsx
function App() {
  return (
    <div>
      <NavBar />
      <UserPicker />

      <RequireLogin>
        <Card title="Members only">
          <p>Only logged-in users can see this card.</p>
        </Card>
      </RequireLogin>
    </div>
  );
}
```

Notice how **none** of these components get props about the user. They all ask the context directly with `useAuth()`.

### ✅ Checklist

- [ ] The broken custom hook is fixed
- [ ] The app starts with nobody logged in
- [ ] Clicking `"Log in as Sam"` logs in Sam
- [ ] `NavBar` shows Sam's name
- [ ] `UserPicker` switches to a `"Log out"` button
- [ ] Everything inside `RequireLogin` appears
- [ ] Clicking `"Log out"` hides it all again

### 🌟 Bonus

1. **Admins.** Add an `isAdmin` value to the context. Make `"Alex"` the only admin. Then make a `RequireAdmin` component that works like `RequireLogin`, but only for admins.
   *(Hint: can you work out `isAdmin` from `user` instead of storing it as state?)*
2. **Custom message.** Give `RequireLogin` an optional `message` prop, so you can change the locked message. If no message is passed, use the default one.
3. **Mix your contexts.** Make `NavBar` use **both** `useAuth()` and `useTheme()`. Show the logged-in user's name in the theme's `highlightColor`, and switch the NavBar's background based on `darkTheme`.

---

## 📚 Helpful Links

- [react.dev: Passing JSX as children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
- [react.dev: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

Good luck! 🚀