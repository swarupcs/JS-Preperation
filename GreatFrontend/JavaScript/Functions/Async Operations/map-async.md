# Map Async

By now you'd be familiar with mapping of elements in an array. If you aren't, please first do the [Array.prototype.map](/questions/javascript/array-map) question first.

What if the mapping function is not a synchronous function i.e. it returns a promise? `Array.prototype.map` assumes the mapping function is synchronous and will fail to work properly.

Implement a function `mapAsync` that accepts an array of items and maps each element with an asynchronous mapping function. The function should return a `Promise` which resolves to the mapped results.

## Examples

```js
const asyncDouble = (x: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 10);
  });

const doubled = await mapAsync([1, 2], asyncDouble);
console.log(doubled); // [2, 4]


# My Solution

Below is a **clear explanation** of the problem and a **fully commented explanation** of your solution.
Your implementation is **correct** and behaves exactly like an asynchronous version of `Array.prototype.map`.

---

# ✅ **Understanding the Problem**

`Array.prototype.map()` works like this:

```js
[1,2,3].map(x => x * 2); // [2,4,6]
```

But if the mapping function is **asynchronous**, e.g.:

```js
const asyncDouble = (x) => Promise.resolve(x * 2);
```

then:

```js
[1,2].map(asyncDouble) 
// => [Promise, Promise]
```

This does **not** wait for any promises.

### ❗ Therefore, we need our own async-aware version of map:

### `mapAsync(iterable, callbackFn)` should:

1. Call `callbackFn(item)` for each element.
2. Wait for **all async operations** to finish.
3. Keep the **same order** as the input array.
4. Return a **Promise resolving to the mapped results**.
5. Reject early if ANY async mapping fails.

This is similar to how `Promise.all()` works internally.

---

# 🧠 **How Your Solution Works**

You manually implement the logic of `Promise.all()`:

* Create an array `results` to store the mapped values.
* Keep a counter `unresolved` that tracks how many items are still pending.
* For each item:

  * Call the async callback
  * Store the resolved value in the correct index
  * Decrement counter
  * When all are done → resolve the final results array
* If any callback rejects → reject immediately.

---

# 📝 **Fully Commented Version of Your Solution**

```js
/**
 * Asynchronous version of Array.prototype.map
 *
 * @param {Array<any>} iterable - The input array
 * @param {Function} callbackFn - An async function that returns a Promise
 *
 * @return {Promise<Array>} A promise that resolves to the mapped results
 */
export default function mapAsync(iterable, callbackFn) {
  return new Promise((resolve, reject) => {

    // Prepare an array to store the final mapped values
    const results = new Array(iterable.length);

    // Number of items whose async mapping is still pending
    let unresolved = iterable.length;

    // If input array is empty, resolve immediately
    if (unresolved === 0) {
      resolve(results); // returns []
      return;
    }

    // Process each item in the array
    iterable.forEach((item, index) => {

      // Call the async mapping function
      callbackFn(item)
        .then((value) => {
          // Store resolved value in the same order as input
          results[index] = value;

          // Reduce pending count
          unresolved -= 1;

          // If all items have resolved, resolve final result
          if (unresolved === 0) {
            resolve(results);
          }
        })

        // If any async mapping rejects, reject the entire mapAsync promise
        .catch((err) => reject(err));
    });
  });
}
```

---

# 🎯 **Why This Implementation Is Correct**

### ✔ Keeps order

Even if async operations finish out of order, results go into correct array positions.

### ✔ Resolves when all operations complete

Using `unresolved--` ensures the Promise resolves only when all callbacks are done.

### ✔ Rejects on first error

Just like `Promise.all`.

### ✔ Handles empty arrays correctly

Returns `[]` immediately.

### ✔ Fully asynchronous behavior

Everything works just like `Promise.all(iterable.map(callbackFn))`.

---

# 📌 Example

```js
const asyncDouble = (x) => new Promise(res => setTimeout(() => res(x * 2), 10));

const result = await mapAsync([1, 2], asyncDouble);
console.log(result); // [2, 4]
```

---

# 🎉 Final Thoughts

Your implementation is:

* Correct
* Efficient (O(n))
* Order-preserving
* Error-safe

# Variations

🔹 A shorter implementation using `Promise.all`
🔹 A version that supports mapping with concurrency limits
🔹 A version that stops early (like mapUntil)




# Editorial


## Solution

This question is very similar to the [`Promise.all`](/questions/javascript/promise-all) question and since this question can be reduced to [`Promise.all`](/questions/javascript/promise-all), the same approaches can be used.

### Approach 1: Count unresolved promises

The only difference is that instead of just an array of iterables, you have to map the array yourself using a mapping function, then resolve the mapped results.

```js
/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 *
 * @return {Promise}
 */
export default function mapAsync(iterable, callbackFn) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      callbackFn(item)
        .then((value) => {
          results[index] = value;
          unresolved -= 1;

          if (unresolved === 0) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
````

### Approach 2: `Promise.all`

We can also use `Promise.all` as mapping each item with the mapping function will produce an array of `Promise`s to be resolved.

```js
export default function mapAsync(iterable, callbackFn) {
  return Promise.all(iterable.map(callbackFn));
}

```

## Edge cases

We did not specify what parameters the asynchronous mapping function will be passed, so it is up to you to clarify with the interviewer whether the mapping callback function will be passed additional arguments like in `Array.prototype.map`.


