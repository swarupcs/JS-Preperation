# Cancellable Timeout

## Implement `setCancellableTimeout`

Implement a function `setCancellableTimeout`, that acts like `setTimeout` but instead of returning a timer ID, it returns a function that when called, cancels the pending callback function. The `setCancellableTimeout` function should have the exact same signature as `setTimeout`:

```js
setCancellableTimeout(callback);
setCancellableTimeout(callback, delay);
setCancellableTimeout(callback, delay, param1);
setCancellableTimeout(callback, delay, param1, param2);
setCancellableTimeout(callback, delay, param1, param2, /* … ,*/ paramN);
```

You are recommended to read up on `setTimeout` on MDN Docs if you are unfamiliar.

---

## Examples

```js
let i = 0;

// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);

// t = 50:
cancel();

// t = 100: i is still 0 because cancel() was called.
```

```js
let i = 0;

// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);

// t = 50:
cancel();

// t = 100: i is still 0 because cancel() was called.
```

```js
let i = 0;

// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);

// t = 50:
cancel();

// t = 100: i is still 0 because cancel() was called.
```

---

# My Solution


---

# 🧠 **Explanation of the Solution**

### Your goal:

Create a function that behaves like `setTimeout`, **but instead of returning a timer ID**, it returns a **cancel function** that stops the timeout from firing.

### How `setTimeout` normally works:

```js
const id = setTimeout(callback, delay);
// later…
clearTimeout(id);
```

But your custom function lets you do this instead:

```js
const cancel = setCancellableTimeout(callback, delay);
cancel(); // stops the timeout
```

Much cleaner, easier to read, and useful in React, async functions, and utilities.

---

# 🔍 **How Your Implementation Works**

1. **Call `setTimeout`**
   This schedules the callback to run after the delay.
   It returns a **timer ID**.

2. **Store the timer ID**
   You save it so you can cancel it later.

3. **Return a cancel function**
   When this function is executed, it calls `clearTimeout(timerId)`, which cancels the pending timeout.

4. This makes cancellation extremely simple and intuitive.

---

# ✅ **Final Code With Full Explanation Comments**

```js
/**
 * A wrapper around setTimeout that returns a cancel function
 * instead of a timer ID.
 *
 * @param {Function} callback - Function to run after the delay.
 * @param {number} delay - Time in ms before running the callback.
 * @param  {...any} args - Optional extra arguments passed to the callback.
 * @returns {Function} A function that cancels the timeout.
 */
export default function setCancellableTimeout(callback, delay, ...args) {
  // Start a normal timeout.
  // All extra arguments (...args) will be passed to the callback.
  const timerId = setTimeout(callback, delay, ...args);

  /**
   * Instead of returning the timer ID (like setTimeout),
   * we return a *function* that cancels the timeout.
   *
   * When this cancel function is called,
   * clearTimeout stops the pending callback from executing.
   */
  return () => {
    clearTimeout(timerId);
  };
}
```

---

# 🎉 **Why This Works Perfectly**

✔ Same signature as `setTimeout`
✔ Supports multiple callback arguments
✔ Returns a reusable cancel function
✔ Prevents the callback from running if canceled
✔ Clean, readable, predictable behavior

---

# 🧪 Example

```js
let i = 0;

const cancel = setCancellableTimeout(() => {
  i++;
}, 100);

setTimeout(() => cancel(), 50);

// After 100ms → i is still 0
```

Exactly as required.

---


# Editorial

## Solution

The benefit of returning a cancel function as opposed to a `timerId` is that the delay mechanism is abstracted away, and can be swapped for something else. Realistically though, there aren't many other ways to achieved delay execution in JavaScript and that's why you probably don't see this outside of interviews.

### Approach 1: Return a function that calls `clearTimeout`

`setTimeout` returns a timer ID. To cancel the timer, we can call `clearTimeout(timerId)`. One simple way to solve this question is to return a function that does exactly that. We can forward all the parameters to `setTimeout`.

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(callback, delay, ...args) {
  const timerId = setTimeout(callback, delay, ...args);

  return () => {
    clearTimeout(timerId);
  };
}
```

We can simplify the code a little and forward all the parameters to `setTimeout`.

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(...args) {
  const timerId = setTimeout(...args);

  return () => {
    clearTimeout(timerId);
  };
}
```

We don't have to worry about `this` within the callback function because there's no option to pass a `thisArg` to `setTimeout` unlike `Array.prototype.forEach()`/`Array.prototype.reduce()`. Read more about [this on MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem).

### Approach 2: Maintain a `cancelled` flag (non-optimal)

Another way is to maintain a `cancelled` flag that the returned function will set to `true` when called. Before the `setTimeout` callback is called, check the value of `cancelled` before executing the `callback`. This is non-optimal because the `setTimeout` callback is still invoked unnecessarily and ends up doing nothing.

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(callback, delay, ...args) {
  let cancelled = false;
  setTimeout(() => {
    if (cancelled) {
      return;
    }

    callback(...args);
  }, delay);

  return () => {
    cancelled = true;
  };
}
```

## Resources

* [`setTimeout()` | MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
