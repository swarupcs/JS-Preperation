# Promise.allSettled

**Note:** If you haven't completed the [`Promise.all`](../../questions/javascript/promise-all) question, you should attempt that first.

> The `Promise.allSettled()` method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

> However, if and only if an empty iterable is passed as an argument, `Promise.allSettled()` returns a `Promise` object that has already been resolved as an empty array.

> For each outcome object, a `status` string is present. If the status is `'fulfilled'`, then a `value` is present. If the status is `'rejected'`, then a `reason` is present. The value (or reason) reflects what value each promise was fulfilled (or rejected) with.

*Source: [Promise.allSettled() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)*

`Promise.allSettled()` is frequently used when there are multiple independent asynchronous tasks and we want to know the result of each promise, regardless of whether they were fulfilled or rejected.

Let's implement our own version of `Promise.allSettled()`, a `promiseAllSettled` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

## Examples

```js
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

await promiseAllSettled([p0, p1, p2]);
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];
```


# My Solution

# ✅ **Problem Summary**

You must create a function **`promiseAllSettled`** that:

* Accepts an **array** of values or promises.
* Starts *all of them in parallel*.
* Waits until **all** have either:

  * **fulfilled**, or
  * **rejected**
* Returns an array of result objects in *the same order* as the input:

  ```js
  { status: 'fulfilled', value: result }
  { status: 'rejected', reason: error }
  ```
* If the array is empty → return a **resolved promise** with `[]`.

This implementation mirrors the real behavior of `Promise.allSettled()`.

---

# 🧠 **Key Concepts in This Solution**

### 1️⃣ `results` array

Stores the result object **at the same index** as the original array.

### 2️⃣ `pending` counter

Keeps track of how many promises are still unresolved.

When `pending` hits **0**, all tasks are finished → resolve the final array.

### 3️⃣ `Promise.resolve(item)`

Ensures both:

* raw values (like `42`)
* actual promises

are handled consistently.

### 4️⃣ `.then(success, failure)`

Allows building the correct result object based on fulfillment or rejection.

### 5️⃣ `.finally()`

Runs regardless of `.then` or `.catch`.
Used to decrement the pending counter.

---

# 📝 **Fully Commented Version of Your Code**

```js
/**
 * Custom implementation of Promise.allSettled()
 *
 * @param {Array} iterable - Array of values or promises
 * @return {Promise<Array<{status: string, value?: any, reason?: any}>>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    
    // Prepare a results array of the same length as input
    // Each index will eventually contain the result object
    const results = new Array(iterable.length);

    // Count of promises still in progress
    let pending = iterable.length;

    // If the input array is empty, immediately resolve with empty array
    if (pending === 0) {
      resolve(results);
      return;
    }

    // Iterate over all input items
    iterable.forEach((item, index) => {

      // Convert item to a promise (works for both values and actual promises)
      Promise.resolve(item)
        .then(
          // On fulfillment
          (value) => {
            results[index] = {
              status: "fulfilled",
              value,
            };
          },

          // On rejection
          (reason) => {
            results[index] = {
              status: "rejected",
              reason,
            };
          }
        )

        // Runs after either .then success or failure
        .finally(() => {
          // Decrease pending count
          pending -= 1;

          // When all have settled, resolve the final results
          if (pending === 0) {
            resolve(results);
          }
        });

    });
  });
}
```

---

# 🎯 **Step-by-Step Execution Example**

For input:

```js
[p0, 42, p2]
```

* `Promise.resolve(p0)` → resolves to 3 → store `{ status: 'fulfilled', value: 3 }`
* `Promise.resolve(42)` → instantly fulfilled → store `{ status: 'fulfilled', value: 42 }`
* `Promise.resolve(p2)` → rejects after 100ms → store `{ status: 'rejected', reason: 'foo' }`

`pending` goes from 3 → 2 → 1 → 0

Finally:

```js
[
  { status: 'fulfilled', value: 3 },
  { status: 'fulfilled', value: 42 },
  { status: 'rejected', reason: 'foo' }
]
```

---

# 🎉 **Why This Implementation Is Excellent**

✔ Handles values and promises
✔ Tracks results in correct order
✔ Waits for all promises
✔ Resolves only once
✔ Matches real `Promise.allSettled()` behavior
✔ Efficient: O(n) time, O(n) space

---





# Editorial

**Note:** If you haven't completed the [`Promise.all`](/questions/javascript/promise-all) question, you should attempt that first.

Async programming is frequently tested during interviews. Understanding how `Promise.allSettled` works under the hood will help you in understanding the mechanisms behind similar `Promise`-related functions like [`Promise.race`](/questions/javascript/promise-race), [`Promise.any`](/questions/javascript/promise-any), [`Promise.all`](/questions/javascript/promise-all), etc.

## Solution

There are a few aspects to this question we need to bear in mind and handle:

1. `Promise`s are meant to be chained, so the function needs to return a `Promise`.
2. If the input array is empty, the returned `Promise` resolves with an empty array.
3. The returned `Promise` contains an array of outcome objects in the **same order as the input**.
4. The input array can contain non-`Promise`s.

We'll return a `Promise` at the top level of the function. Firstly check if the input array is empty and resolve with an empty array if so.

We then attempt to resolve every item in the input array. This can be achieved using `Array.prototype.forEach` or `Array.prototype.map`. As the returned values will need to preserve the order of the input array, create a `results` array and slot the value in the right place using its `index` within the input array.

* If a value is resolved, the outcome object has the `{ status: 'fulfilled', value }` shape.
* If a value is rejected, the outcome object has the `{ status: 'rejected', reason }` shape.

To know when all the input array values have an outcome, keep track of how many pending promises there are by initializing a counter of pending values and decrementing it whenever a value is resolved or rejected. When the `pending` counter reaches 0, return the `results` array.

One thing to note here is that because the input array can contain non-`Promise` values, if we are not `await`-ing them, we need to wrap each value with `Promise.resolve()` which allows us to use `.then()` on each of them and we don't have to differentiate between `Promise` vs non-`Promise` values and whether they need to be resolved.

```js
/**
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const results = new Array(iterable.length);
    let pending = iterable.length;

    if (pending === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = {
          status: 'fulfilled',
          value,
        };
      } catch (err) {
        results[index] = {
          status: 'rejected',
          reason: err,
        };
      }

      pending -= 1;
      if (pending === 0) {
        resolve(results);
      }
    });
  });
}
```

Here's an alternative version which uses `Promise.then()` if you prefer not to use `async`/`await`.

```js
/**
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const results = new Array(iterable.length);
    let pending = iterable.length;

    if (pending === 0) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then(
          (value) => {
            results[index] = {
              status: 'fulfilled',
              value,
            };
          },
          (reason) => {
            results[index] = {
              status: 'rejected',
              reason,
            };
          }
        )
        .finally(() => {
          pending -= 1;
          if (pending === 0) {
            resolve(results);
          }
        });
    });
  });
}
```

## Edge cases

* Empty input array. An empty array should be returned.
* If the array contains non-`Promise` values, they will still be part of the returned array if all the input values are fulfilled.

## Techniques

* Knowledge of `Promise`s, how to construct one, how to use them.
* Async programming.

## Notes

* The evaluator does not verify that your input array is resolved concurrently rather than sequentially.

## Resources

* [Promise.allSettled() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
