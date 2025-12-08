# useObject

https://www.greatfrontend.com/questions/javascript/use-object?practice=practice&tab=coding



Implement a `useObject` hook that manages a state of JavaScript [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), also known as POJO (Plain Old JavaScript Object), which is a key-value pair storage initialized with [`{}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

When the set state function is called with an object, it is merged with the existing object.

It is more convenient to use `useObject` over plain `useState` because in the latter case, you would always have to create a new object, mutate it, then set state to use the new object (or create a new object via object spread), which can be quite cumbersome.

```jsx
export default function Component() {
  const [record, setRecord] = useObject({ a: 1, b: 2 });

  return (
    <div>
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <button onClick={() => setRecord((prev) => ({ a: prev.a + 1 }))}>
        Increase a
      </button>
      <button onClick={() => setRecord((prev) => ({ b: prev.b + 1 }))}>
        Increase b
      </button>
      <button onClick={() => setRecord(() => ({ c: 3 }))}>Add c</button>
    </div>
  );
}
````

## Arguments

* `initialValue`: The initial value of the object

## Returns

The hook returns an array with two elements:

1. The current object state
2. An updater function which can update the object state

The updater function can receive either:

1. An object that will be merged with the current state object
2. An updater function that receives the current state object and returns an object that will be merged with the current state object





# Editorial


## Solution
The `useObject` hook can be implemented using the `useState` hook and implementing the updater function to merge the current state object with the new incoming object. To merge objects, you can use the [spread (`...`) syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

**Note**: [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) can also merge objects, but it is not recommended because it mutates the target object.

```jsx
/**
 * @template T
 * @param {T} initialValue
 */
import { useCallback, useState } from 'react';

/**
 * Checks whether a value is a plain JavaScript object (POJO).
 * This helps ensure we only merge valid objects into state.
 */
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export default function useObject(initialValue = {}) {
  // Store the object state
  const [state, setState] = useState(initialValue);

  /**
   * Merges new values into the existing object state.
   * Accepts either:
   * 1. A partial object: { a: 1 }
   * 2. An updater function: (prev) => ({ a: prev.a + 1 })
   *
   * useCallback ensures this function is stable across renders.
   */
  const merge = useCallback((partialOrUpdaterFunction) => {
    // CASE 1: The user passed an updater function
    if (typeof partialOrUpdaterFunction === 'function') {
      return setState((previousState) => {
        // Call the updater to get the next partial state
        const newState = partialOrUpdaterFunction(previousState);

        // Ensure the updater returns a plain object
        if (!isPlainObject(newState)) {
          throw new Error('Invalid new state');
        }

        // Merge previous state with new partial object
        return { ...previousState, ...newState };
      });
    }

    // CASE 2: The user passed a plain object
    if (!isPlainObject(partialOrUpdaterFunction)) {
      throw new Error('Invalid new state');
    }

    // Merge the provided partial object into state
    setState((previousState) => ({
      ...previousState,
      ...partialOrUpdaterFunction,
    }));
  }, []);

  // Return the current object state and the merge function
  return [state, merge];
}

````

## Edge cases

Simply checking if an object is an `Object` by using [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) is not enough to ensure that the variable is a POJO. For example, the `typeof` operator returns `'object'` for arrays, `null`, and other objects like `Date`, `RegExp`, and `Error`.

There are many ways to check if an object is a POJO. One example is defined in this solution.

```ts
function isPlainObject(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
```

Another one is to reinstantiate the object in question with the [`Object()` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object). This method's definition is left as an exercise for the reader. Can you think of other reliable ways to check if an object is a POJO?


----

# Explanation of the Implementation


---

# ✅ **Overall Purpose of `useObject`**

`useObject` is a custom React hook that makes working with object state easier.
Normally with `useState`, if you store an object, you must manually spread and merge:

```js
setState(prev => ({ ...prev, updatedKey: value }));
```

`useObject` simplifies this by automatically merging updates into the existing state.
You only provide **changes**, not the full object.

---

# 🔍 **Detailed Step-by-Step Explanation**

---

## **1. `isPlainObject` — Validating Updates**

```js
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
```

This helper ensures that anything being merged into the state is a **real JavaScript object**, not:

* arrays
* functions
* numbers
* null
* Date objects

This guarantees safety and predictable behavior.

---

## **2. Initializing State**

```js
const [state, setState] = useState(initialValue);
```

* The hook stores an object as initial state
* You can pass `{}` or any starting object like `{ a: 1, b: 2 }`

---

## **3. The `merge` Function**

This is the heart of the hook.

```js
const merge = useCallback((partialOrUpdaterFunction) => { ... }, []);
```

`useCallback` keeps this function stable across renders
(prevents unnecessary re-renders in child components).

---

# 🟦 **CASE 1: User passes an updater function**

Example:

```js
setRecord(prev => ({ a: prev.a + 1 }));
```

Logic:

```js
if (typeof partialOrUpdaterFunction === 'function') { ... }
```

Inside:

1. React passes the previous state to your updater function
2. The updater function must return a **partial object**
3. This partial object is merged with the existing state:

```js
return { ...previousState, ...newState };
```

This allows updates *based on previous state*.

---

# 🟧 **CASE 2: User passes a plain object**

Example:

```js
setRecord({ c: 3 });
```

Logic:

```js
if (!isPlainObject(partialOrUpdaterFunction)) {
  throw new Error('Invalid new state');
}
```

If the value is a valid object, merge it:

```js
setState(prev => ({ ...prev, ...partialOrUpdaterFunction }));
```

This simply adds or updates key-value pairs.

---

# 🧹 **4. Returns the State + Updater**

```js
return [state, merge];
```

This follows React’s `useState` API shape.

---

# 🎯 **Final Behavior Summary**

| Operation                         | How it works                             |
| --------------------------------- | ---------------------------------------- |
| **Add new keys**                  | `setRecord({ c: 3 })`                    |
| **Update existing keys**          | `setRecord(prev => ({ a: prev.a + 1 }))` |
| **Merge multiple values at once** | `setRecord({ x: 1, y: 2 })`              |
| **Does NOT replace state**        | Only merges, never replaces              |

---

# 🌟 **Why This Hook Is Useful**

Without `useObject`, you'd have to manually write:

```js
setRecord(prev => ({ ...prev, a: prev.a + 1 }));
```

With `useObject`, you simply write:

```js
setRecord({ a: 2 })
```

or

```js
setRecord(prev => ({ a: prev.a + 1 }));
```

Much cleaner and more ergonomic when working with complex or growing objects.

---

# 🎉 **In Short**

`useObject` is a custom state hook that:

* Stores an object
* Allows updating with either a partial object or updater function
* Merges updates automatically
* Ensures safe, plain-object updates
* Makes React state cleaner and easier to manage

