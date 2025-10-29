# Mock interview

## React

##### Why use react, instead of just HTML, CSS and JS?

React makes things so much easier when your app gets complex. Instead of manually updating the DOM everywhere, React handles it for you. Plus breaking things into components keeps everything organized—way better than one massive JavaScript file!

##### How does React make it easier to update the DOM?

React keeps a virtual DOM in memory and figures out what actually changed, then only updates those specific parts of the real DOM. So instead of me writing code to find and update elements manually, React does the diffing and patching automatically.

##### What are React hooks?

Hooks are functions that let you use React features in functional components. Like useState for managing state, useEffect for side effects like API calls.

##### Tell me about useState

useState lets you add state to functional components. You call it with an initial value, and it gives you back the current state and a function to update it. When you call the state-updating function, React re-renders the component with the new value.

##### How would you explain it to someone who isn't familiar with React?

Normally in JavaScript, if you change a variable, nothing happens on the page until you manually update the DOM. With useState, when you change the value, React automatically re-renders that part of the page for you. It's like having a variable that's connected to the UI.

##### Explain useEffect in the same manner

Every time your component renders—whether it's the first time or because state changed—useEffect can run code at that moment. You can control when it runs with dependencies. It's like hooking into specific moments in your component's life: when it appears, updates, or disappears.

##### useContext?

useContext lets you access data from anywhere in your component tree without passing props down manually through every level. You create a Context at the top with some value, and any component below can grab that value directly using useContext. Saves you from prop drilling.

##### Prop drilling?

Prop drilling is when you have to pass props through multiple components that don't even need them, just to get the data down to a deeply nested component that does. Like passing data from grandparent → parent → child, where the parent doesn't use it at all—just passes it along.

## Typescript

##### What are some benefits of using Typescript over Javascript?

TypeScript catches errors before you run your code—like if you're calling a function wrong or misspelling a property. Your editor gives you autocomplete, so you know what properties and methods are available. And when you come back to code later, the types tell you what everything expects.

##### Any drawbacks?

Generally, no, but it takes a bit longer to set up projects initially compared to plain JavaScript. And there is more boilerplate because of the types.

## CSS / Tailwind

##### What is Tailwind?

Tailwind is a CSS framework that provides utility classes for styling. Instead of writing custom CSS, you use classes like bg-blue-500, p-4, flex directly in your HTML. It's a different approach from component frameworks like Bootstrap—more low-level and flexible.

##### Benefits of Tailwind over CSS?

You write styles directly in your HTML with utility classes, so you're not jumping between files or thinking up class names. Everything's consistent because you're using a predefined scale. And responsive design is super easy with the breakpoint prefixes like md: and lg:.

##### Drawbacks?

Your HTML can get pretty cluttered with tons of class names, which some people find ugly. There's a learning curve remembering all the utility classes. And if you need something very custom that Tailwind doesn't provide, you sometimes have to fight against it or write custom CSS anyway.

## GraphQL / REST

##### What is a REST API?

It's an API that uses HTTP methods like GET, POST, PUT, DELETE to interact with resources through URLs. Each endpoint represents a resource—like /api/articles gives you articles. It's stateless, meaning each request is independent and contains everything the server needs to respond.

##### What is GraphQL?

GraphQL is a query language for APIs where you have one endpoint and the client specifies exactly what data it wants in the request. So instead of getting everything from /api/user, you can ask for just the user's name and email, nothing more. Prevents over-fetching.

## Other

##### What is React Query / Tanstack Query?

React Query manages server state—fetching, caching, and syncing data from APIs. Instead of writing useEffect with try-catch and loading states everywhere, React Query handles all that. It automatically refetches stale data, caches results, and gives you loading and error states out of the box.

##### Loading and error states?

When you fetch data, you need to show something while it's loading and handle errors if the request fails. React Query gives you isLoading, isError, and data from the hook, so you can easily show a spinner, error message, or the actual content based on the request status.

##### Caching?

React Query stores fetched data in memory so if you navigate away and come back, it shows you the cached data instantly instead of fetching again. You can configure how long data stays fresh and when it should refetch in the background. Makes apps feel much faster.

##### Tell me about React component testing

You can use React Testing Library to test components like a user would interact with them. You can render the component, find elements by their text or role, simulate clicks or typing, and check what appears on screen. It's about testing behavior, not implementation details like state names.

##### Why test components?

Because if I refactor my code and the tests still pass, I know the component still works for users. Testing implementation details makes tests brittle—they break when you rename things even if functionality's fine. Plus it keeps me thinking about accessibility and user experience.

## Your resume

##### You mentioned Lighthouse on your resume. Tell me about that

Lighthouse is a Chrome DevTools audit tool that scores your site on performance, accessibility, SEO, and best practices. It shows things like slow image loading, missing alt text, or poor color contrast. I use it to catch accessibility issues and optimize load times on my projects.

##### Accessibility?

Making sure everyone can use your site, including people with disabilities. Things like adding alt text to images for screen readers, proper heading hierarchy, keyboard navigation, good color contrast. Lighthouse flags common issues, and I also test with keyboard-only navigation and screen readers when possible.

##### SEO?

Search Engine Optimization—making your site rank better in search results. Stuff like proper meta tags, descriptive titles, semantic HTML, fast load times, mobile responsiveness.

##### Next.js?

Next.js is a React framework that adds features like server-side rendering, file-based routing, and API routes. Instead of just client-side rendering like Create React App, you can render pages on the server for better SEO and initial load times. It's more opinionated but production-ready.

###### Tell me about what it was like to work on group projects, and how you communicated and delegated tasks.