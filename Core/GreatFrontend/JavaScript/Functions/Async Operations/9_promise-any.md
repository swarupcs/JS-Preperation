# Promise.any

**Note:** If you haven't completed the [`Promise.all`](/questions/javascript/promise-all) question, you should attempt that first.

> `Promise.any()` takes an iterable of elements (usually `Promises`). It returns a single promise that resolves as soon as any of the elements in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given elements are rejected), then the returned promise is rejected with an [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError), a new subclass of Error that groups together individual errors.

> If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an `AggregateError` object whose errors property is an empty array.

*Source: [Promise.any() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)*

Let's implement our own version of `Promise.any()`, a `promiseAny` function, with the difference being the function takes in an array instead of an iterable and `AggregateError`s returned just have to return an array of error reasons, the message doesn't have to be set. Refer to the `AggregateError` constructor [examples on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError).

Be sure to read the description carefully and implement accordingly!

## Examples

```js
const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseAny([p0, p1]); // 42
```

```js
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Err!");
  }, 400);
});

await promiseAny([p0, p1]); // 42
```

```js
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    reject(42);
  }, 400);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Err!");
  }, 100);
});

try {
  await promiseAny([p0, p1]);
} catch (err) {
  console.log(e instanceof AggregateError); // true
  console.log(e.errors); // [ 42, "Err!" ]
}
```

# My Solution

This implementation correctly follows the behavior of `Promise.any()`.

---

# ✅ **What `Promise.any()` Should Do**

Given an array of promises or values:

### ✔ It **resolves** as soon as *any* promise fulfills

Example:
If one resolves after 50ms and others reject later → resolve immediately.

### ✔ It **rejects** only if *all* input promises reject

It returns:

```js
new AggregateError([array of all rejection reasons])
```

### ✔ If the input array is empty

`Promise.any([])` must **reject immediately** with:

```js
new AggregateError([])
```

Your implementation follows all these rules correctly.

---

# 🧠 **How your solution works (Concept Overview)**

1. You return a new Promise.
2. If array is empty → reject immediately with `new AggregateError([])`.
3. Create:

   * `pending` counter → number of unresolved promises.
   * `errors` array → stores rejection reasons at correct indices.
4. For each item:

   * Convert it into a promise using `Promise.resolve(item)`
   * If it fulfills → resolve immediately (winner)
   * If it rejects → store error and decrement `pending`
   * When `pending === 0` → all rejected → reject with `AggregateError(errors)`

---

# 📝 **Fully Commented Code**

```js
/**
 * Custom implementation of Promise.any()
 *
 * @param {Array} iterable - Array of promises or values
 * @return {Promise} - Resolves with first fulfilled value, or rejects with AggregateError
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {

    // If array is empty, reject immediately
    // Promise.any([]) MUST reject synchronously with AggregateError([])
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    // Number of promises still pending
    let pending = iterable.length;

    // To store rejection reasons in correct order
    const errors = new Array(iterable.length);

    // Start racing all items
    iterable.forEach((item, index) =>
      // Convert each item into a promise
      Promise.resolve(item).then(
        // If any promise resolves, we win immediately
        (value) => {
          resolve(value);   // first fulfillment settles the outer promise
        },

        // If promise rejects, store the error
        (reason) => {
          errors[index] = reason; // store rejection reason at same index
          pending--;              // one fewer promise still pending

          // If all promises have rejected, reject with AggregateError
          if (pending === 0) {
            reject(new AggregateError(errors));
          }
        }
      )
    );
  });
}
```

---

# 🎯 **Why This Implementation Is Correct**

### ✔ Correctly resolves early

The **first** `.then` fulfillment handler that runs will execute:

```js
resolve(value);
```

After this, the promise is settled and **ignores** any further rejections or resolutions.

---

### ✔ Correctly rejects only after *all* promises reject

You track each rejection in the `errors` array and check:

```js
if (pending === 0) {
  reject(new AggregateError(errors));
}
```

This matches native behavior.

---

### ✔ Correct ordering

Even if promises reject in random order, you store errors by **index**, so order is preserved.

---

### ✔ Works for non-promise values

`Promise.resolve(42)` resolves immediately → allowed by spec.

---

### ✔ Empty array is handled

```js
promiseAny([]) → reject(new AggregateError([]))
```

This matches the real behavior precisely.

---

# 🎉 **Summary**

Your implementation of `promiseAny` is:

* Fully correct
* Efficient
* Matches ECMAScript behavior
* Handles values and promises
* Produces correctly structured `AggregateError`





# Editorial


**Note:** If you haven't completed the [`Promise.all`](/questions/javascript/promise-all) question, you should attempt that first.

Async programming is frequently tested during interviews. Understanding how `Promise.any` works under the hood will help you in understanding the mechanisms behind similar `Promise`-related functions like `Promise.race`, `Promise.all`, `Promise.allSettled` etc.

## Solution

`Promise.any` is very similar to `Promise.all`, but the resolves and rejects are swapped around.

There are a few aspects to this question we need to bear in mind and handle:

1. `Promise`s are meant to be chained, so the function needs to return a `Promise`.
2. If the input array is empty, an `AggregateError` is returned with `errors` set to an empty array.
3. The returned `Promise` resolved immediately with the first input value that is resolved.
4. The returned `Promise` is rejected with an `AggregateError` containing an array of errors values in the same order as the input array if all of them are rejected.
5. The input array can contain non-`Promise`s.

We'll return a `Promise` at the top level of the function. We first check if the input array is empty, and reject with an empty `AggregateError` (`new AggregateError([])`) if so.

We then need to attempt resolving every item in the input array. This can be achieved using `Array.prototype.forEach` or `Array.prototype.map`.

If any of the items are fulfilled, we resolve the top-level `Promise` immediately with that value without waiting for any other pending promises.

As we encounter rejections, we need to keep them in an errors array in case all the promises turn out to be rejected. As the returned errors will need to preserve the order of the input array, we create an `errors` array and slot the value in the right place using its `index` within the input array.

To know when all the input array values are no longer pending, we keep track of how many pending promises there are by initializing a counter of pending values and decrementing it whenever a value is rejected. When the counter reaches 0, we can reject with an `AggregateError` using the `errors`. There is no need to modify the pending counter when a value is resolved because the overall promise will be resolved.

One thing to note here is that because the input array can contain non-`Promise` values, if we are not `await`-ing them, we need to wrap each value with `Promise.resolve()` which allows us to use `.then()` on each of them and we don't have to differentiate between `Promise` vs non-`Promise` values and whether they need to be resolved.

```js
/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    let pending = iterable.length;
    const errors = new Array(iterable.length);

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        errors[index] = err;
        pending--;

        if (pending === 0) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}
````

The pending counter is essential in ensuring correct behavior. For example, an alternative approach that seems to work (but doesn't) is to check if the length of the `errors` array is equal to the length of the `iterable`:

```js
errors[index] = await error;
if (errors.length == iterable.length) {
  reject(new AggregateError(errors));
}
```

Suppose we have passed in an array of 3 promises, and the last promise is rejected first, causing `errors[2]` to be assigned. When this happens, the length of `errors` array is now 3, and `reject()` will be invoked with an incomplete `errors` array because the other 2 promises are still pending; we should not call `reject()` yet.

The pending values counter avoids this problem by ensuring that we only call `reject()` when all the promises have rejected and thus are no longer pending.

Here's an alternative version which uses `Promise.then()` if you prefer not to use `async`/`await`.

```js
/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    let pending = iterable.length;
    const errors = new Array(iterable.length);

    iterable.forEach((item, index) =>
      Promise.resolve(item).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          errors[index] = reason;
          pending--;

          if (pending === 0) {
            reject(new AggregateError(errors));
          }
        },
      ),
    );
  });
}
```

## Edge cases

* Empty input array. The promise should reject with an `AggregateError`.

## Techniques

* Knowledge of `Promise`s, how to construct one, how to use them.
* Async programming.

## Notes

* The evaluator does not verify that your input array is resolved concurrently rather than sequentially.

## Resources

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

```
```

