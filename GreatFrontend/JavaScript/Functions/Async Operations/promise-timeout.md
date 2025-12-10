# Promise Timeout

When fetching data or performing other async operations, it is sometimes useful to set a timeout duration, i.e. enforce that a response is received before the timeout, otherwise deem the request a failed one.

Implement a `promiseTimeout` function that accepts a promise and a timeout duration (in milliseconds) and returns a `Promise`. If the promise argument is settled within the timeout period, the returned promise is settled with the promise argument's settled value, which can be both resolved/rejected values. Otherwise, the returned promise will reject with the string "Promise timeout".

```js
function fakeFetch(latency) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that resolves after `latency`.
    setTimeout(() => {
      resolve('Data successfully fetched!');
    }, latency);
  });
}

const response = await promiseTimeout(fakeFetch(1000), 2000);
console.log(response); // Data successfully fetched!

await promiseTimeout(fakeFetch(5000), 2000);
// "Promise timeout" thrown.
```

# My Solution

Here is a **clear explanation** of the `Promise.race()`-based solution along with a **fully commented version** of the code.

This is the **best and most idiomatic** way to implement a promise timeout in JavaScript.

---

# ✅ **Best Solution (Recommended)**

```js
/**
 * @template T
 * @param {Promise<T>} promise - The main promise you want to enforce a timeout on
 * @param {number} duration - Timeout duration in milliseconds
 * @return {Promise<T>} - Resolves/rejects based on whichever settles first
 */
export default function promiseTimeout(promise, duration) {

  // Create a timeout promise that rejects after `duration` ms
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promise timeout"); // reject with timeout message
    }, duration);
  });

  // Promise.race() returns whichever promise settles first:
  // - If `promise` settles first → its result is used.
  // - If `timeout` settles first → we reject with "Promise timeout".
  return Promise.race([promise, timeout]);
}
```

---

# 🧠 **Explanation (Step-by-Step)**

## 🔹 **Goal:**

We want to enforce that a promise *must* settle within a certain duration.
If it takes too long → we reject with `"Promise timeout"`.

---

## **Step 1 — Create the timeout promise**

```js
const timeout = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise timeout");
  }, duration);
});
```

This promise will automatically reject after `duration` ms.

* `_` means we intentionally ignore the `resolve` parameter.
* After the timer fires, we reject with `"Promise timeout"`.

---

## **Step 2 — Race the original promise and the timeout**

```js
return Promise.race([promise, timeout]);
```

`Promise.race()` returns the **first** promise that settles:

### Case 1 — The original `promise` finishes first

➡️ The returned promise resolves/rejects with *its* value.

### Case 2 — The timeout finishes first

➡️ The returned promise **rejects** with `"Promise timeout"`.

This is exactly what we want!

---

## 🟩 Example 1 — Promise settles **before** timeout

```js
await promiseTimeout(fakeFetch(1000), 2000);
// fakeFetch resolves in 1000ms
// timeout triggers at 2000ms
// → original promise wins
// RESULT: "Data successfully fetched!"
```

---

## 🟥 Example 2 — Promise **exceeds** timeout

```js
await promiseTimeout(fakeFetch(5000), 2000);
// fakeFetch resolves after 5000ms
// timeout triggers at 2000ms
// → timeout wins
// RESULT: "Promise timeout" rejected
```

---

# 🌟 Why This Solution Is Best

✔ Minimal code
✔ Very readable
✔ No manual `.then`, `.catch`, or `.finally`
✔ No need to `clearTimeout` (harmless)
✔ Used widely in real-world code (axios, fetch wrappers, libraries)
✔ Leverages native Promise behavior correctly

This is the **cleanest and simplest** way to enforce timeouts.

---


# Editorial


## Solution

1. The `promiseTimeout` function takes two parameters: the original `promise` and the timeout `duration` in milliseconds.
2. Inside the function, create and return a new `Promise` which will `reject()` with a custom error after the specified `duration`.
3. If the `promise` argument is fulfilled before `duration` is up, we can `resolve()` the promise with the fulfilled value. If it is rejected, we can `reject()` with the rejected reason.
4. We use `setTimeout` to set up the timeout mechanism. When the timeout is reached, the returned promise will `reject()` with the custom error message.
5. If the promise is settled before the timeout, we should clear the timer. We can keep a reference to the id returned from `setTimeout`, and in `.finally()`, clear the timeout using `clearTimeout`.

```js
/**
 * @template T
 * @param {Promise<T>} promise
 * @param {number} duration
 * @return {Promise<T>}
 */
export default function promiseTimeout(promise, duration) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject('Promise timeout');
    }, duration);

    promise
      .then(resolve)
      .catch(reject)
      .finally(() => {
        clearTimeout(timeoutId);
      });
  });
}
````

---

### Using `Promise.race()`

The `setTimeout` is also an async operation and can be wrapped in a `Promise`. We can simplify the execution logic using `Promise.race()`—whichever promise settles first determines the result.

```js
/**
 * @template T
 * @param {Promise<T>} promise
 * @param {number} duration
 * @return {Promise<T>}
 */
export default function promiseTimeout(promise, duration) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject('Promise timeout');
    }, duration);
  });

  return Promise.race([promise, timeout]);
}
```

## Edge cases

* If the `promise` resolves immediately, the overall result should resolve regardless of how small the timeout is—even if it's `0`.

```
```
