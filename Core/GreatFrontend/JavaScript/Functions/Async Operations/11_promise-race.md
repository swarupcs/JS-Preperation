# Promise.race

> The `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

> If the iterable passed is empty, the promise returned will be forever pending.

> If the iterable contains one or more non-promise value and/or an already settled promise, then `Promise.race()` will resolve to the first of these values found in the iterable.

*Source: [Promise.race() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)*

Let's implement our own version of `Promise.race()`, a `promiseRace` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

## Examples

```js
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});

await promiseRace([p0, p1]); // 42
```

```js
const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseRace([p0, p1]); // 42
```

```js
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 400);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 100);
});

try {
  await promiseRace([p0, p1]);
} catch (err) {
  console.log(err); // 'Err!'
}
```


# Explaination of Problem


---

# ✅ **What You Need to Implement: `promiseRace()`**

You need to implement your **own version of `Promise.race()`**, called **`promiseRace`**, which:

* Takes an **array** of values/promises (not any iterable).
* Returns a **new Promise**.
* Settles (**fulfills or rejects**) as soon as *any* item in the array settles.

---

# 🚦 **How Promise.race() Works (Summary)**

`Promise.race()` behaves like a race:

* Whichever promise/value settles *first*, wins.
* If one settles earlier—even if it's a rejection—it resolves or rejects immediately with that result.

---

# 📌 **Important Rules You Must Implement**

### **1. Array is empty → returned promise stays pending forever**

No resolution, no rejection — just hangs.

```js
await promiseRace([]); // forever pending
```

---

### **2. If the array contains non-promises or already resolved promises**

They settle immediately, so they win the race instantly.

Example:

```js
Promise.resolve(42) // instantly resolved
```

This one would win even if other promises take time.

---

### **3. If any promise rejects first → race rejects**

```js
try {
  await promiseRace([slowResolve, fastReject]);
} catch (err) {
  console.log(err); // from the rejecting promise
}
```

---

### **4. If a resolving promise settles first → race resolves**

```js
await promiseRace([fastResolve, slowReject]); // resolves
```

---

# 📘 **Example Breakdown**

### **Example 1**

```js
p0 → resolves in 100ms
p1 → rejects in 400ms

promiseRace([p0, p1]) → resolves with 42 (because p0 finishes first)
```

---

### **Example 2**

```js
p0 → already resolved (instant)
p1 → resolves in 100ms

promiseRace([p0, p1]) → 42 (p0 is fastest)
```

---

### **Example 3**

```js
p0 → resolves in 400ms
p1 → rejects in 100ms

promiseRace([p0, p1]) → rejects with "Err!"
```

Rejection happened *first*, so the whole race rejects.

---

# 🎯 **What You’re Expected to Do**

Write a function:

```js
function promiseRace(arr) { ... }
```

That:

1. Checks the special cases (empty array).
2. Converts values to promises (like `Promise.resolve(value)`).
3. Attaches `.then` and `.catch` to each.
4. Returns a new Promise that settles as soon as the first promise settles.

---


# My Solution

---

# ✅ **Explanation (In Simple Terms)**

Your `promiseRace` function:

1. **Creates a new promise** that will resolve or reject depending on who "wins" the race.
2. **If the input array is empty**, it returns a promise that never resolves —
   this exactly matches the real `Promise.race()` behavior.
3. For each item in the array:

   * It converts the item to a promise using `Promise.resolve(item)`
     → this allows normal values (like `42`) to race instantly.
   * It attaches `.then(resolve, reject)`:

     * If that item resolves → the race resolves with that value.
     * If that item rejects → the race rejects with that error.
4. Because promises settle only once, whichever item settles first wins.

---

# 📝 **Fully Commented Version**

```js
/**
 * Custom implementation of Promise.race()
 *
 * @param {Array} iterable - Array of promises or values
 * @return {Promise} - A promise that settles as soon as one item settles
 */
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {

    // If the array is empty, do nothing.
    // This keeps the returned promise in a forever pending state,
    // which is exactly how the real Promise.race behaves.
    if (iterable.length === 0) {
      return;
    }

    // Loop through every item in the array
    iterable.forEach((item) => {

      // Convert the item into a promise.
      // - If it's already a promise, it remains unchanged.
      // - If it's a normal value (e.g. number or string),
      //   Promise.resolve() creates an immediately resolved promise.
      Promise.resolve(item)
        // Attach success and failure handlers.
        // The FIRST promise that settles (resolve or reject)
        // will settle the outer promise.
        .then(
          resolve, // If this item resolves first, resolve outer promise
          reject   // If this item rejects first, reject outer promise
        );
    });
  });
}
```

---

# 🧠 **Why This Implementation Works Perfectly**

### ✔ Parallel execution

No `await` inside loops → nothing blocks.
All items start racing immediately.

---

### ✔ Handles all value types

`Promise.resolve(item)` ensures:

| Input              | Becomes                        |
| ------------------ | ------------------------------ |
| `42`               | Immediately resolved promise   |
| `"hello"`          | Immediately resolved promise   |
| A real Promise     | Same promise                   |
| A rejected promise | Rejection triggers immediately |

This matches the real behavior of `Promise.race`.

---

### ✔ First settled promise wins

`.then(resolve, reject)` ensures:

* If any item **resolves first** → the whole race resolves.
* If any item **rejects first** → the whole race rejects.

All later calls to `resolve` or `reject` are ignored because promises settle only once.

---

# 🎉 **In Summary**

This solution is:

* Clean
* Fast
* Correct
* Faithful to real `Promise.race` behavior
* Works for both promises and regular values






# Editorial Notes

Async programming is frequently tested during interviews. Understanding how `Promise.race` works under the hood will help you in understanding the mechanisms behind similar `Promise`-related functions like `Promise.any`, `Promise.all`, `Promise.allSettled` etc.

## Solution

There are a few aspects to this question we need to bear in mind and handle:

1. `Promise`s are meant to be chained, so the function needs to return a `Promise`.
2. If the input array is empty, the returned `Promise` will be forever pending.
3. The input array can contain non-`Promise`s.

### Approach 1: Using `await`

We'll return a `Promise` at the top level of the function. First check if the input array is empty, if so we need to return a forever-pending promise. That can be done by `return`-ing without calling `resolve()` or `reject()`.

We then need to attempt resolving every item in the input array. This can be achieved using `Array.prototype.forEach` or `Array.prototype.map`.

* If an item is resolved, `resolve()` with the result.
* If an item is rejected, `reject()` with the reason.

Since it's a race, we don't have to do much coordination unlike in `Promise.all`. Whichever item resolves/rejects first wins the race and calls the `resolve`/`reject` function respectively to determine the final state and value/reason of the returned `Promise`.

One thing to note here is that because the input array can contain non-`Promise` values, if we are not `await`-ing them, we need to wrap each value with `Promise.resolve()` which allows us to use `.then()` on each of them so we don't have to differentiate between `Promise` vs non-`Promise` values and whether they need to be resolved.

```js
/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}
```

### Approach 2: Using `Promise.then()`

Here's an alternative version which uses `Promise.then()` if you prefer not to use `async`/`await`, which is much shorter.

Note that rejected promises also call `.then()` and the second parameter of `.then()` is the callback to handle rejected promises.

```js
/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach((item) =>
      Promise.resolve(item).then(resolve, reject)
    );
  });
}
```

It's important to `reject()` rejected promises in the `.then()` call (via the second callback parameter) and not within `catch()`. The approach below looks similar but doesn't work for cases where the `iterable` contains both immediately resolved and rejected promises (e.g. `[Promise.reject(42), Promise.resolve(2)]`).

`.catch()` is scheduled, and does not run immediately after `.then()`. For immediately settled promises, `then()` run before any `.catch()`, hence the overall `Promise` is fulfilled with 2 instead of rejected with 42.

```js
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach((item) =>
      // Incorrect to use `catch()`, use onReject in `then()`.
      Promise.resolve(item).then(resolve).catch(reject),
    );
  });
}
```

## Edge cases

* Empty input array. A forever-pending promise should be returned.
* If the array contains non-`Promise` values, `Promise.race()` will resolve to the first of these values found in the iterable.

## Techniques

* Knowledge of `Promise`s, how to construct one, how to use them.
* Async programming.

## Resources

* [Promise.race() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
