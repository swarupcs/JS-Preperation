# Promise.resolve


The `Promise.resolve()` static method "resolves" a given value to a `Promise`. If the value is:

- A native promise, return that promise.
- A non-thenable, return a promise that is already fulfilled with that value.
- A thenable, `Promise.resolve()` will call the `then()` method and pass a pair of resolving functions as arguments. A promise that has the same state as the thenable is returned.

*Source: [Promise.resolve() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)*

A "thenable" is an interface that implements the `.then()` method, which is called with two callbacks: one for when the promise is fulfilled, one for when it's rejected. Promises are also thenables.

Implement the `Promise.resolve()` function as `promiseResolve`. You can ignore the case where `this` is referenced within the implemented function.

## Examples

Resolving a non-promise.

```js
const p = promiseResolve(42);
await p; // 42
````

Resolving a `Promise`.

```js
const original = new Promise((resolve) => resolve(42));
const cast = promiseResolve(original);
await cast; // 42
```

Resolving a thenable.

```js
const resolvedThenable = promiseResolve({
  then(resolve, reject) {
    resolve(42);
  },
});

await resolvedThenable; // 42
```


# My Solution

Below is a **clear explanation** of your `promiseResolve` implementation, along with a **fully commented version** of your code.

Your implementation is *partially correct* — it correctly handles:

✔ native promises
✔ non-thenable values

But **it does NOT correctly handle thenables**, because the spec requires calling their `.then()` method.
(If you'd like, I can help you fix that too.)

But since your question is:

> "Explain the solution and add comments"
> I will explain exactly what *your current code* does.

---

# ✅ **What Your Implementation Currently Handles**

### 1. **If `value` is already a native Promise**

Return it directly.

```js
if (value instanceof Promise) {
  return value;
}
```

This matches the behavior of real `Promise.resolve()`.

---

### 2. **If `value` is NOT a Promise**

You wrap it in a new fulfilled promise:

```js
return new Promise((resolve) => resolve(value));
```

So:

* Numbers → resolved promise
* Strings → resolved promise
* Objects → resolved promise
* `undefined` → resolved promise
* Functions → resolved promise

This also matches correct behavior **for non-thenables**.

---

# ❌ **What Your Implementation Does NOT Handle**

It does NOT detect "thenables" (objects with `.then()` method).

Example:

```js
const thenable = {
  then(resolve, reject) {
    resolve(42);
  }
};

promiseResolve(thenable)
```

Native `Promise.resolve()` **calls** the `thenable.then(resolve, reject)` method.

Your version does **not** do this,
so the returned promise gets fulfilled with the object itself, not with `42`.

But again — explaining *your code*, not correcting it (unless you want).

---

# 📝 **Fully Commented Version (Your Exact Code)**

```js
/**
 * Custom implementation of Promise.resolve()
 *
 * @param {*} value - Any value, promise, or thenable
 * @returns {Promise} - A promise that resolves with the given value
 */
export default function promiseResolve(value) {

  // If the value is already a real JavaScript Promise,
  // simply return it as-is. No need to wrap or modify it.
  // This matches the behavior of native Promise.resolve().
  if (value instanceof Promise) {
    return value;
  }

  // Otherwise, wrap the value inside a new fulfilled Promise.
  // This handles non-promise values such as numbers, strings,
  // objects, arrays, functions, null, undefined, etc.
  return new Promise((resolve) => resolve(value));
}
```

---

# 📌 **What This Function Guarantees**

* If you pass a normal value, you get a fulfilled promise.
* If you pass a native Promise, you get it back unchanged.

Example:

```js
promiseResolve(42).then(console.log); // 42
promiseResolve(Promise.resolve(10)).then(console.log); // 10
```

---

# 📌 **What It DOES NOT Guarantee (Yet)**

It does not support:

> “thenables” → objects that implement a `.then()` method.

Native `Promise.resolve()` does this:

```js
Promise.resolve({
  then(resolve) { resolve(42) }
}).then(console.log); // 42
```

Your version returns the object directly:

```js
promiseResolve({
  then(resolve) { resolve(42) }
}).then(console.log); // logs the whole object
```

If you'd like, I can help you implement the **full correct version** that supports thenables — it’s an excellent exercise for understanding how Promises work internally.

---

# 🎉 **Final Summary**

Your implementation is:

✔ correct for native promises
✔ correct for values
❌ incomplete for thenables



# Another Solution: (Which supports all edge cases including thenables like real `Promise.resolve()`)

Great — here is the **correct, full implementation** of `Promise.resolve()` that handles:

✔ native promises
✔ non-thenable values
✔ thenables (objects with a `.then()` method)

This matches the real ECMAScript behavior.

I will give you:

1️⃣ The **correct implementation**
2️⃣ A **fully commented version**
3️⃣ A **clear explanation** of how it works

---

# ✅ **Full Correct Implementation — `promiseResolve()`**

```js
/**
 * @param {*} value
 * @returns {Promise}
 */
export default function promiseResolve(value) {
  // 1. If value is already a native Promise → return it unchanged
  if (value instanceof Promise) {
    return value;
  }

  // 2. If value is a thenable (has a .then function)
  //    we must call value.then(resolve, reject)
  if (
    value !== null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof value.then === "function"
  ) {
    return new Promise((resolve, reject) => {
      try {
        // The thenable controls how the promise settles
        value.then(resolve, reject);
      } catch (err) {
        // If calling .then throws, the promise must reject
        reject(err);
      }
    });
  }

  // 3. For all non-thenable values → return a fulfilled promise
  return new Promise((resolve) => resolve(value));
}
```

---

# 🧠 **Detailed Explanation (Step-by-Step)**

Native `Promise.resolve()` follows this exact logic:

---

## 🔹 **STEP 1 — If it's already a real Promise, return it**

```js
if (value instanceof Promise) {
  return value;
}
```

This means:

```js
const p = new Promise(r => r(42));

Promise.resolve(p) === p;   // true
```

Your promise shouldn’t wrap another promise.
This preserves identity and avoids unnecessary layers.

---

## 🔹 **STEP 2 — Check if it's a “thenable”**

A *thenable* is an object with a `.then()` method:

```js
const thenable = {
  then(resolve, reject) {
    resolve(42);
  }
};
```

We detect a thenable like this:

```js
value !== null &&
(typeof value === "object" || typeof value === "function") &&
typeof value.then === "function"
```

Why?

* `null` is an object but not a thenable
* Functions can also be thenables
* `.then` must be a function

When we detect a thenable, we must "adopt" its behavior:

```js
value.then(resolve, reject);
```

This means our returned promise behaves exactly like the thenable.

---

### ✔ Correct behavior example

```js
const thenable = {
  then(resolve) {
    setTimeout(() => resolve(42), 100);
  }
};

await promiseResolve(thenable); // 42
```

---

## 🔹 **STEP 3 — Wrap all other non-thenable values**

If the value is not:

* a promise
* a thenable

Then it’s a normal value (number, string, boolean, object without `.then`, etc.)

We must return a promise fulfilled with that value:

```js
return new Promise((resolve) => resolve(value));
```

Examples:

```js
await promiseResolve(10);        // 10
await promiseResolve("hello");   // "hello"
await promiseResolve(null);      // null
await promiseResolve({});        // {}
```

---

# 📝 **Fully Commented Version (easy to understand)**

```js
/**
 * Fully correct implementation of Promise.resolve()
 * Handles:
 * 1. Native promises
 * 2. Thenables
 * 3. Normal values
 *
 * @param {*} value - The input to resolve into a promise
 * @returns {Promise}
 */
export default function promiseResolve(value) {

  // STEP 1:
  // If value is already a real Promise → return it unchanged.
  // No need to wrap an existing promise.
  if (value instanceof Promise) {
    return value;
  }

  // STEP 2:
  // Check if value is a thenable (object or function with a .then method)
  if (
    value !== null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof value.then === "function"
  ) {
    // Create a new promise and adopt the thenable's behavior
    return new Promise((resolve, reject) => {
      try {
        // If calling value.then() throws, the promise must reject.
        value.then(resolve, reject);
      } catch (err) {
        reject(err);
      }
    });
  }

  // STEP 3:
  // If it's not a promise or a thenable → wrap it in a resolved promise
  return new Promise((resolve) => resolve(value));
}
```

---

# 🎉 **Final Summary**

This version matches native `Promise.resolve()` behavior:

| Input Type | Expected Behavior             | Your Implementation ✔ |
| ---------- | ----------------------------- | --------------------- |
| Promise    | returned as-is                | ✔                     |
| Thenable   | call `.then(resolve, reject)` | ✔                     |
| Value      | wrap in a resolved promise    | ✔                     |

This is how **real JavaScript promises work under the hood**.

---




# Editorial


## Solution

The purpose of `Promise.resolve` is to add a safe wrapper around any value such that can be used with `then()` or `await`-ed.

There are three cases to handle within the static `Promise.resolve` function:

1. If the `value` is a native `Promise`, return it directly without **creating a new instance**. We can check for this case using `value instance of Promise`.
2. If the `value` is not a thenable, return a promise that's fulfilled with the value. We can use a `Promise` constructor that calls `resolve` with the value.
3. If the value is a thenable, the `then()` method will be called. The `then()` method has the same signature as a `Promise` constructor.

The first two cases are straightforward. Let's talk a bit about the last case. Since the `Promise` constructor and `then()` has the same parameters, one might be tempted to pass `value.then` to a `new Promise` e.g. `new Promise(value.then)` and call it a day. However, the `then()` will lose the value of `this`. Hence we need to pass in `value.then.bind(value)` instead.

Nested thenables and promises should also be flattened. This is already handled by the `resolve` callbacks of a `Promise` constructor, so we don't have to manually attempt to flatten.

```jsx
/**
 * @param {*} value
 * @returns Promise
 */
export default function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  if (typeof value.then === 'function') {
    return new Promise(value.then.bind(value));
  }

  return new Promise((resolve) => resolve(value));
}
````

In fact, the `resolve` function can also handle thenables. So we can simplify the code even further.

```jsx
/**
 * @param {*} value
 * @returns Promise
 */
export default function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  return new Promise((resolve) => resolve(value));
}
```



