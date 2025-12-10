# Map Async Limit



---

In [Map Async](/questions/javascript/map-async), we wrote a function that accepts an array of items and maps each element with an asynchronous mapping function and returns a `Promise` which resolves to the mapped results.

Practically, this can be used for mapping an input array with the results of calling an API where the input element is the argument to the API. However, if your array has a large amount of items, you'd be making that many API calls at the same time which will almost certainly get you rate limited by the API service. We want to execute our tasks concurrently so that it is more efficient while staying within the rate limits of the API.

Implement a `mapAsyncLimit` function that takes in an optional parameter `size`, the maximum number of ongoing async tasks so that the input array can be processed in chunks of `size`, achieving parallelism while staying within the provided limit. If `size` is not specified, the chunk size is unlimited.

## Examples

```js
async function fetchUpperCase(q: string) {
  // Fake API service that converts a string to uppercase.
  const res = await fetch('https://uppercase.com?q=' + encodeURIComponent(q));
  return await res.text();
}

// Only a maximum of 2 pending requests at any one time.
const results = await mapAsyncLimit(
  ['foo', 'bar', 'qux', 'quz'],
  fetchUpperCase,
  2,
);
console.log(results); // ['FOO', 'BAR', 'QUX', 'QUZ'];
```

# My Solution

Below is a **clear explanation** of the problem, followed by a **fully commented explanation** of your `mapAsyncLimit` solution.
Your implementation is **correct, efficient, and easy to understand**.

---

# ✅ **Understanding the Problem**

Earlier, you implemented `mapAsync`, which runs ALL async tasks at the same time:

```js
Promise.all(iterable.map(callbackFn));
```

### ❗ Problem: This can cause **too many concurrent API calls**.

For example:

```js
await mapAsync(10000_items, apiCall);
```

→ Makes 10,000 API calls at once
→ API rate limits
→ Browser or Node.js crashes
→ Network choking

---

# 🎯 **Goal of `mapAsyncLimit`**

Implement a function:

```js
mapAsyncLimit(iterable, callbackFn, size)
```

that:

### ✔ Runs async tasks in **chunks of size**

Example: size = 2
→ Only 2 API calls are in-flight at any moment

### ✔ Waits for each chunk to finish before starting the next one

### ✔ Returns an array of all results in **correct order**

### ✔ If size is not provided → behaves like unlimited concurrency (`mapAsync`)

---

# 🧠 **How Your Solution Works**

You process the input array in **chunks**:

```
chunk size = 2
[foo, bar]   → run two tasks
[qux, quz]   → run next two tasks
```

Each chunk is processed with:

```js
await Promise.all(chunk.map(callbackFn));
```

This means:

* Each chunk runs concurrently (parallel)
* Next chunk waits for previous chunk (rate limiting)

This ensures concurrency never exceeds `size`.

---

# 📝 **Fully Commented Version of Your Solution**

```js
/**
 * mapAsyncLimit
 * Executes async tasks with controlled concurrency.
 *
 * @param {Array} iterable - Input array of items
 * @param {Function} callbackFn - Async mapping function returning a Promise
 * @param {number} size - Max number of concurrent async operations
 *
 * @returns {Promise<Array>} - Results in original order
 */
export default async function mapAsyncLimit(
  iterable,
  callbackFn,
  size = Infinity // Default: unlimited concurrency
) {
  const results = [];

  // Process input array in chunks of given size
  for (let i = 0; i < iterable.length; i += size) {

    // Slice next chunk (e.g. 0-2, 2-4, 4-6, ...)
    const chunk = iterable.slice(i, i + size);

    // Execute all async tasks in this chunk concurrently
    // Promise.all ensures:
    // - runs all chunk tasks at the same time
    // - waits for them to finish
    const chunkResults = await Promise.all(chunk.map(callbackFn));

    // Append results to final array (maintains correct order)
    results.push(...chunkResults);
  }

  return results;
}
```

---

# 🎉 **Example**

```js
async function fetchUpperCase(q) {
  const res = await fetch("https://uppercase.com?q=" + encodeURIComponent(q));
  return await res.text();
}

const results = await mapAsyncLimit(
  ['foo', 'bar', 'qux', 'quz'],
  fetchUpperCase,
  2 // MAX 2 requests running concurrently
);

console.log(results); 
// ['FOO', 'BAR', 'QUX', 'QUZ']
```

---

# ⭐ Why This Implementation is Good

### ✔ Simple and readable

### ✔ Preserves order of results

### ✔ Limits concurrency (rate-limit safe)

### ✔ Handles ANY async callback

### ✔ Works even with huge arrays

### ✔ Uses efficient chunking logic

### ✔ No external dependencies

---

## Variations

🔹 A version that uses a **task queue**
🔹 A version that processes tasks as soon as a slot frees up (true concurrency pool)
🔹 A version that handles errors gracefully (like `Promise.allSettled`)


# Editorial

Here is the **plain Markdown version** of your entire message, with **no HTML**, **no wording changes**, and **no restructuring**—only converted to normal Markdown as you requested:

---

## Solution

The general idea is to slice the input array into chunks of `size` elements and processing one chunk at a time. The solutions presented here use `Promise.all` but if it's not allowed, you can use the self-implemented versions presented in the [`Promise.all` question](/questions/javascript/promise-all).

### Approach 1: Sequential (Bad!)

This approach ignores the `size` parameter and processes each item one-by-one. This is well within the concurrency limit, but defeats the purpose of the question.

```js
export default function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  return new Promise((resolve, reject) => {
    const results = [];

    function processItem(index) {
      if (index === iterable.length) {
        resolve(results);
        return;
      }

      return callbackFn(iterable[index])
        .then((result) => {
          results.push(result);
          processItem(index + 1);
        })
        .catch(reject);
    }

    return processItem(0);
  });
}

```

### Approach 2: Chunks with recursion

Mapping an array of items in chunks can be broken down into smaller sub-problems and solved recursively:

1. Process items in the current chunk concurrently via `Promise.all`.
2. Recursively call `mapAsyncLimit` on the remaining items.
3. Base case is when there are no more items left to be processed and an empty array is returned.
4. Finally, merge the results from Step 1 and the mapped results from the remaining items in Step 2 and return it.

We have to take note of making the recursive call to `mapAsyncLimit` only after Step 1 has concluded, otherwise we are exceeding the required concurrency limit and there will be no difference from `mapAsync`.

```js
/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 *
 * @return {Promise}
 */
export default function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  if (iterable.length === 0) {
    return Promise.resolve([]);
  }

  const currentChunk = iterable.slice(0, size);
  const remainingItems = iterable.slice(size);

  return Promise.all(currentChunk.map(callbackFn)).then((results) =>
    mapAsyncLimit(remainingItems, callbackFn, size).then((rest) => [
      ...results,
      ...rest,
    ])
  );
}
```

The downside of this solution (as with all recursive approaches) is that there's a limit to the recursion stack. However, there's a more modern and cleaner solution using `async`/`await`.

### Approach 3: Chunks with `async`/`await`

With `async`/`await`, the idea stays the same, but it's easier to write sequential `async` code by slicing the array into chunks of `size` and `await`-ing each chunk within a for-loop.

```js
export default async function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  const results = [];

  for (let i = 0; i < iterable.length; i += size) {
    const chunk = iterable.slice(i, i + size);
    const chunkResults = await Promise.all(chunk.map(callbackFn));
    results.push(...chunkResults);
  }

  return results;
}
```

### Approach 4: Chunkless (max concurrency)

The previous approaches have a huge downside, that is there is some idleness and the available upper concurrency limit is not always fully-utilized.

Imagine there are 7 items to be mapped, each requiring different durations. The diagram below shows the relative difference in the duration depending on the mapping approach taken.

![Map async limit](https://www.gfecdn.net/img/questions/map-async-limit/map-async-limit.png)

* **Sequential**: A sequential (one at a time) approach will certainly stay within the concurrency limit, but is extremely slow and not utilizing the fact that we can have concurrent async tasks.
* **Chunks**: The chunks approach improves the concurrency but it waits for all items in the current chunk to be completed before moving on to the next. If there's a task that is much slower than the rest, there will be idle cycles and the available limit is not fully-utilized.
* **Chunkless**: The most efficient approach is to immediately start processing the next item when an item is completed. This ensures that there are always `size` ongoing async tasks (when there are unprocessed items) and the available limit is fully-utilized.

Like in the custom implementation of `Promise.all`, we can track the number of resolved items and `resolve()` with the mapped results when every item has been processed.

The idea here is to define a function `processItem` that takes in an index and processes the item at that index, adding the result to the final mapped `results` array when that item is complete. `processItem` is a recursive function that will call itself with the index of the next item to be processed.

To do that, we need to track the index of the next item to be processed as `nextIndex`. Whenever an item starts processing, `nextIndex` is incremented. When an item has been processed, we can process the item at `nextIndex` as the next step. This ensures there are always `size` ongoing async tasks (while there are remaining unprocessed items) and it's always at the limit.

This goes on until all the items have been processed or one of the items have been rejected/errored.

```js
export default function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  return new Promise((resolve, reject) => {
    const results = [];
    let nextIndex = 0;    // index of next item to start processing
    let resolved = 0;     // count of completed tasks

    // If the input array is empty, resolve immediately
    if (iterable.length === 0) {
      resolve(results);
      return;
    }

    function processItem(index) {
      nextIndex++;

      callbackFn(iterable[index])
        .then((result) => {
          results[index] = result; // preserve original order
          resolved++;

          // If all items have been processed, resolve final results
          if (resolved === iterable.length) {
            resolve(results);
            return;
          }

          // Start next item if tasks remain
          if (nextIndex < iterable.length) {
            processItem(nextIndex);
          }
        })
        .catch(reject);
    }

    // Start initial batch of concurrent tasks
    for (let i = 0; i < Math.min(iterable.length, size); i++) {
      processItem(i);
    }
  });
}

```

The following approach uses `async`/`await` for the internal recursive function:

```js
export default function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  return new Promise((resolve, reject) => {
    const results = [];
    let nextIndex = 0;  // Index of next item to start
    let resolved = 0;   // How many items have completed

    // If empty array → resolve immediately
    if (iterable.length === 0) {
      resolve(results);
      return;
    }

    async function processItem(index) {
      nextIndex++;

      try {
        const result = await callbackFn(iterable[index]);
        results[index] = result;
        resolved++;

        // If all results collected → resolve final array
        if (resolved === iterable.length) {
          resolve(results);
          return;
        }

        // Start next task if there are items left
        if (nextIndex < iterable.length) {
          processItem(nextIndex);
        }

      } catch (err) {
        reject(err);
      }
    }

    // Start the first `size` tasks
    for (let i = 0; i < Math.min(iterable.length, size); i++) {
      processItem(i);
    }
  });
}

```




