# Cancellable Interval



Implement a function `setCancellableInterval`, that acts like `setInterval` but instead of returning a timer ID, it returns a function that when called, cancels the interval. The `setCancellableInterval` function should have the exact same signature as `setInterval`:

```js
setCancellableInterval(callback);
setCancellableInterval(callback, delay);
setCancellableInterval(callback, delay, param1);
setCancellableInterval(callback, delay, param1, param2);
setCancellableInterval(callback, delay, param1, param2, /* … ,*/ paramN);
````

You are recommended to read up on for `setInterval` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) if you are unfamiliar.

## Examples

```js
let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
}, 10);

// t = 10: i is 1
// t = 20: i is 2
cancel(); // Called at t = 25
// t = 30: i is still 2 because cancel() was called and the interval callback has stopped running.
```


# My Solution


---


```js
/**
 * A wrapper around setInterval that returns a cancel function
 * instead of a numeric timer ID. This makes interval cancellation cleaner.
 *
 * @param {Function} callback - Function to run repeatedly.
 * @param {number} delay - Interval delay in milliseconds.
 * @param  {...any} args - Extra arguments passed to the callback.
 * @returns {Function} A function that cancels the running interval.
 */
export default function setCancellableInterval(callback, delay, ...args) {
  // Start the interval just like normal setInterval.
  // All extra arguments (...args) will be passed to the callback.
  const timerId = setInterval(callback, delay, ...args);

  /**
   * Instead of returning the timer ID, we return a function that,
   * when called, will cancel the interval.
   *
   * This is easier and safer to work with than manually calling
   * clearInterval(id) somewhere else.
   */
  return () => {
    clearInterval(timerId); // Stops the interval from running further
  };
}

```

---

# 🧠 **What the Function Does**

`setCancellableInterval` behaves like `setInterval`, *except*:

* Instead of returning a **number** (interval ID),
* It returns a **function** that you can call to **cancel the interval**.

This makes cancellation more convenient and declarative.

---

# 🔍 **Line-by-Line Explanation**

---

## **1. Function Signature**

```js
function setCancellableInterval(callback, delay, ...args)
```

This means:

* `callback`: function to run periodically
* `delay`: time in milliseconds
* `...args`: any extra arguments (0, 1, or many) to pass to the callback

This matches how **setInterval** works:

```js
setInterval(callback, delay, arg1, arg2, arg3, ...)
```

So your custom function supports:

✔ No delay
✔ Delay + no args
✔ Delay + multiple args

Exactly like the real API.

---

## **2. Create the interval**

```js
const timerId = setInterval(callback, delay, ...args);
```

* This starts a repeating timer
* `setInterval` returns a unique ID (integer in browsers, object in Node.js)
* This ID is needed to cancel the interval

---

## **3. Return a cancel function**

```js
return () => {
  clearInterval(timerId);
};
```

Instead of giving back the interval ID (like normal `setInterval`),
you give back a **function that cancels it**.

So usage becomes:

```js
const cancel = setCancellableInterval(() => {
  console.log("tick");
}, 1000);

// Later
cancel(); // stops the interval
```

This is more readable and safer, especially when used inside:

* React components
* Async flows
* Custom utility functions

---

# 💡 **Why This Implementation Is Correct**

### ✔ Loosely mirrors the built-in `setInterval` API

(Callback, delay, optional arguments)

### ✔ Returns a cancel function

Easier to use than managing IDs manually.

### ✔ Correctly uses `clearInterval` to stop the timer

### ✔ Supports any number of arguments passed to callback:

```js
setCancellableInterval(cb, 1000, param1, param2, param3)
```

### ✔ Works identically in browsers and Node.js

---

# 🧪 Example Breakdown

```js
let i = 0;

const cancel = setCancellableInterval(() => {
  i++;
}, 10);
```

### Timeline:

* t = 10 → i = 1
* t = 20 → i = 2
* t = 25 → `cancel()` executed
* t = 30 → NO MORE INCREMENTS
* i stays at 2

This matches exactly what the native `setInterval + clearInterval` would do.

---

# 🎉 Final Summary

Your solution:

* Follows the exact signature of `setInterval`
* Wraps `setInterval` inside a cancellable function
* Is clean, readable, and idiomatic JavaScript
* Works with any number of additional callback arguments
* Correctly cleans up the interval when cancel is called

**This is a perfect and complete implementation.**

---


# Editorial 


## Solution

The benefit of returning a cancel function as opposed to a `timerId` is that the interval mechanism is abstracted away, and can be swapped for something else. Realistically though, there aren't many other good ways to achieved interval execution in JavaScript and that's why you probably don't see this outside of interviews.

### Approach 1: Return a function that calls `clearInterval`

`setInterval` returns a timer ID. To cancel the timer, we can call `clearInterval(timerId)`. One simple way to solve this question is to return a function that does exactly that. We can forward all the parameters to `setInterval`.

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
  const timerId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(timerId);
  };
}
````

We can simplify the code a little and forward all the parameters to `setInterval`.

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(...args) {
  const timerId = setInterval(...args);

  return () => {
    clearInterval(timerId);
  };
}
```

We don't have to worry about `this` within the callback function because there's no option to pass a `thisArg` to `setInterval` unlike `Array.prototype.forEach()`/`Array.prototype.reduce()`. Read more about [this on MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval#the_this_problem).

### Approach 2: Maintain a `cancelled` flag (non-optimal)

Another way is to maintain a `cancelled` flag that the returned function will set to `true` when called. Before the `setInterval` callback is called, check the value of `cancelled` before executing the `callback`. This is non-optimal because the `setInterval` callback will run forever without doing nothing!

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
  let cancelled = false;
  setInterval(() => {
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

* [`setInterval()` | MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)


