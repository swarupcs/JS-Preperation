# Promise.reject

> The `Promise.reject()` static method returns a `Promise` object that is rejected with a given reason.

*Source: [Promise.reject() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)*

Unlike `Promise.resolve()`, `Promise.reject()` always wraps `reason` in a new `Promise` object, even when `reason` is already a `Promise`.

Implement the `Promise.reject()` function as `promiseReject`. You can ignore the case where `this` is referenced within the implemented function.

## Examples

```js
try {
  promiseReject('Mayday!');
} catch (err) {
  console.log(err); // Mayday!
}

```


# My Solution

Below is a clear explanation of your `promiseReject` implementation, followed by a fully commented version of the code.

Your implementation is **correct** and matches the behavior of native `Promise.reject()`.

---

# ✅ **What `Promise.reject()` Must Do**

* Always return a **new Promise**.
* That promise must be **rejected immediately**.
* The rejection reason must be the same value passed in.
* Even if the reason is already a Promise, it still rejects with that Promise object itself (it does *not* unwrap it).

Example:

```js
Promise.reject(Promise.resolve(5)) 
// rejected with: Promise.resolve(5)
```

Your implementation does exactly this.

---

# 🧠 **How Your Implementation Works**

```js
return new Promise((_, reject) => reject(reason));
```

### ✔ Creates a new Promise

This makes sure the returned value is always a promise.

### ✔ Immediately calls `reject(reason)`

This rejects the promise **synchronously**, matching `Promise.reject()` behavior.

### ✔ `_` is used for the `resolve` parameter

You don’t need it, so using `_` signals:

> "I intentionally ignore this argument."

### ✔ No special handling for existing promises

Exactly matches spec:
`Promise.reject(somePromise)` simply rejects with `somePromise` as the reason.

---

# 📝 **Fully Commented Version of Your Code**

```js
/**
 * Custom implementation of Promise.reject()
 *
 * @param {*} reason - The rejection reason
 * @returns {Promise} - A new promise rejected with the given reason
 */
export default function promiseReject(reason) {

  // Create and return a new Promise
  // We only care about rejection, so we ignore resolve (`_`)
  return new Promise((_, reject) => {

    // Immediately reject the promise with the provided reason.
    // This mirrors the behavior of Promise.reject(reason).
    reject(reason);
  });
}
```

---

# 🎯 **Why This Implementation is Correct**

### ✔ Always creates a *new* promise

`Promise.reject()` never returns an existing promise.

### ✔ Rejects *immediately*

Native behavior is synchronous rejection (before any `.then` handlers run).

### ✔ Rejects with the exact same value

Even if `reason` is:

* a string
* an error object
* a promise
* null/undefined

It gets passed through unchanged.

### ✔ Matches MDN behavior precisely

```js
promiseReject("Oops")  
// rejected immediately with "Oops"
```

---

# 🎉 **In Summary**

Your implementation is:

* Simple
* Correct
* Exactly matches `Promise.reject()`
* No unnecessary logic




# Editorial

## Solution

`Promise.reject` returns a `Promise` that is rejected. It is essentially a shorthand for `new Promise((resolve, reject) => reject(reason))`.

The only thing we need to note is to wrap the `reason` value in a new `Promise` object even when `reason` is already a `Promise`.

```jsx
/**
 * @param {*} reason
 * @returns Promise
 */
export default function promiseReject(reason) {
  return new Promise((_, reject) => reject(reason));
}
