# Promise.all


> `Promise.all()` is a method that takes an iterable of elements (usually `Promises`) as an input, and returns a single `Promise` that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

*Source: [Promise.all() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)*

`Promise.all()` is frequently used when there are multiple concurrent API requests and we want to wait for all of them to have completed to continue with code execution, usually because we depend on data from both responses.

```js
const [userData, postsData, tagsData] = await Promise.all([
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/api/tags'),
]);
````

Let's implement our own version of `Promise.all()`, a `promiseAll` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

## Examples

```js
// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
```

```js
// Rejection example.
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p0, p1]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}
```

# Solution

# My Solution (Easy to Understand)

```js
/**
 * promiseAll - a minimal polyfill-like implementation of Promise.all
 *
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  // We return a new Promise because promiseAll must itself be asynchronous
  // and resolve/reject according to the rules below.
  return new Promise((resolve, reject) => {
    // ---------------------------------------------------------------------
    // 1) Input validation: per the problem statement, this implementation
    //    only accepts arrays (not arbitrary iterables). Reject early if not.
    // ---------------------------------------------------------------------
    if (!Array.isArray(iterable)) {
      // Reject with a TypeError to match native Promise.all behavior
      // when the provided argument isn't acceptable (native accepts iterables,
      // but our function expects an array so we treat non-arrays as error).
      return reject(new TypeError('Input must be an array'));
    }

    // ---------------------------------------------------------------------
    // 2) Quick path: empty array resolves immediately with an empty array.
    //    This mirrors the native Promise.all behavior where Promise.all([])
    //    returns a promise that resolves to [].
    // ---------------------------------------------------------------------
    const length = iterable.length;
    if (length === 0) {
      return resolve([]);
    }

    // ---------------------------------------------------------------------
    // 3) Prepare state we will update as promises settle.
    //    - results: ordered array to hold resolved values (same length as input)
    //    - resolvedCount: how many have resolved so far
    //    - settled: boolean guard so we only resolve/reject once
    // ---------------------------------------------------------------------
    const results = new Array(length); // will hold values in input order
    let resolvedCount = 0;             // increments when each promise/value resolves
    let settled = false;               // prevents multiple resolve/reject calls

    // ---------------------------------------------------------------------
    // 4) Iterate input items and normalize them to Promises using
    //    Promise.resolve(item). This allows non-promise values to be handled.
    //    For each normalized promise:
    //      - on .then: store value into results at correct index and
    //        check if we can resolve the returned promiseAll
    //      - on .catch: reject immediately (first rejection wins)
    // ---------------------------------------------------------------------
    iterable.forEach((item, index) => {
      // Normalize the item to a promise. If item is:
      //  - a Promise -> returns the same promise
      //  - non-promise -> returns a resolved promise with that value
      Promise.resolve(item)
        .then((value) => {
          // If we've already settled (rejected earlier), ignore further resolutions.
          // This avoids unnecessary work and ensures we don't call resolve twice.
          if (settled) return;

          // Store the resolved value in the results array at the correct index.
          // This preserves input order regardless of resolution order.
          results[index] = value;
          resolvedCount += 1; // one more item resolved

          // If all items have resolved, mark as settled and resolve with results.
          if (resolvedCount === length) {
            settled = true;
            resolve(results); // resolves to array in original order
          }
        })
        .catch((err) => {
          // On first rejection, mark settled and reject with the same error.
          // This mirrors Promise.all: it rejects with the first error seen.
          if (!settled) {
            settled = true;
            reject(err);
          }
          // If already settled, ignore (no-op).
        });
    });
  });
}
```

### Short explanation of important behaviors

* **Non-promises** (like `42`) are accepted and treated as values — `Promise.resolve(42)` is used internally.
* **Ordering** is preserved: the i-th input maps to the i-th output value.
* **Immediate rejection**: the returned promise rejects as soon as any input promise rejects.
* **Empty array** resolves to `[]` synchronously (i.e., returned promise resolves immediately).


# Editorial


This is a pretty important question to practice because async programming is frequently tested during interviews. Understanding how `Promise.all` works under the hood will help you in understanding the mechanisms behind similar `Promise`-related functions like `Promise.race`,`Promise.any`, `Promise.allSettled`, etc.

## Solution

There are a few aspects to this question we need to bear in mind and handle:

1. `Promise`s are meant to be chained, so the function needs to return a `Promise`.
2. If the input array is empty, the returned `Promise` resolves with an empty array.
3. The returned `Promise` contains an array of resolved values in the same order as the input if all of them are fulfilled.
4. The returned `Promise` rejects immediately if any of the input values are rejected or throw an error.
5. The input array can contain non-`Promise`s.

### Approach 1: Count unresolved promises using `async`

Since the function needs to return a `Promise`, we can construct a `Promise` at the top level of the function and return it. The bulk of the code will be written within the constructor parameter.

We first check if the input array is empty, and resolve with an empty array if so.

We then need to attempt resolving every item in the input array. This can be achieved using `Array.prototype.forEach` or `Array.prototype.map`. As the returned values will need to preserve the order of the input array, we create a `results` array and slot the value in the right place using its `index` within the input array. To know when all the input array values have been resolved, we keep track of how many unresolved promises there are by initializing a counter of unresolved values and decrementing it whenever a value is resolved. When the counter reaches 0, we can return the `results` array.

One thing to note here is that because the input array can contain non-`Promise` values, if we are not `await`-ing them, we need to wrap each value with `Promise.resolve()` which allows us to use `.then()` on each of them and we don't have to differentiate between `Promise` vs non-`Promise` values and whether they need to be resolved.

Lastly, if any of the values are rejected, we reject the top-level `Promise` immediately without waiting for any other pending promises.

```js
/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}
````

### Approach 2: Count unresolved promises using `Promise.then`

Here's an alternative version which uses `Promise.then()` if you prefer not to use `async`/`await`.

```js
/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => {
          results[index] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}
```

Once one of the `Promise`'s resolving functions (`resolve` or `reject`) is called, the promise is in the "settled" state, and subsequent calls to either function can neither change the fulfillment value or rejection reason nor change the eventual state from "fulfilled" to "rejected" or vice versa.

## Edge cases

* Empty input array. An empty array should be returned.
* If the array contains non-`Promise` values, they will still be part of the returned array if all the input values are fulfilled.
* If the outcome is a rejection, the value of the first rejection should be returned.

## Techniques

* Knowledge of `Promise`s, how to construct one, how to use them.
* Async programming.

## Notes

* The evaluator does not verify that your input array is resolved concurrently rather than sequentially.

## Resources

* [Promise.all() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)


