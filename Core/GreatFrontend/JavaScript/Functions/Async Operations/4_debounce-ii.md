# Debounce II


**Note:** This is an advanced version of [Debounce](/questions/javascript/debounce), you should complete that first before attempting this question.

Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

You almost certainly have encountered debouncing in your daily lives before (e.g. when entering an elevator). Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

Implement a `debounce` function which accepts a callback function and a `wait` duration. Calling `debounce()` returns a function which has debounced invocations of the callback function following the behavior described above.

Additionally, the debounce-ed function comes with two extra methods:

1. `cancel()` method to cancel pending invocations
2. `flush()` method to immediately invoke any delayed invocations

## Examples

```js
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: Cancel the delayed increment.
debouncedIncrement.cancel();

// t = 100: increment() was not invoked and i is still 0.
````

Flushing to instantly call the debounced function.

```js
let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
// t = 51:
debouncedIncrement.flush(); // i is now 1 because flush causes() the callback to be immediately invoked.

// t = 100: i is already 1. The callback has been called before
// and won't be called again.
```

**Note:** Due to the use of delays in the tests for this question, tests can take a while to complete execution.

## Reading

* [Debounce on Lodash Documentation](https://lodash.com/docs/4.17.15#debounce)


# My Solution

Below is a **complete explanation** of the *debounce problem*, *your solution*, and a **fully commented version** of the code.

Your solution is **excellent** — it correctly handles:

* Debouncing behavior
* `cancel()` logic
* `flush()` logic
* Preserving arguments
* Preserving `this` context

This is a fully-featured debounce implementation like Lodash.

---

# ✅ **Understanding the Problem (What is Debouncing?)**

Debouncing ensures that a function can only run **after X milliseconds of inactivity**.

### ✔ If calls keep happening → function execution is delayed

### ✔ Only when no calls happen for X ms → function finally runs

Example:

* Call at t=0 → schedule run at t=100
* Call again at t=50 → reset timer → new execution at t=150

This prevents the callback from running *too frequently*.

---

# 🧩 **Extra Requirements**

The debounced function must have:

### 1️⃣ `.cancel()`

Stops any pending execution.

### 2️⃣ `.flush()`

Immediately runs the pending callback (if any) and clears the timer.

---

# 🧠 **How Your Solution Works (Conceptually)**

Your debounce implementation maintains:

* `timeoutId` → tracks the pending timer
* `context` → keeps the `this` value
* `argsToInvoke` → stores the latest arguments

Steps when debounced function is called:

1. Clear any existing timer
2. Store latest arguments + `this`
3. Start a new timer
4. When timer completes, call the function with stored args

---

# 📝 **Fully Commented Version of Your Solution**

```js
/**
 * Creates a debounced version of `func`.
 * The debounced function:
 * - waits `wait` ms after the last call to run `func`
 * - has `cancel()` to stop pending calls
 * - has `flush()` to immediately invoke pending calls
 *
 * @param {Function} func - Function to debounce
 * @param {number} wait - Delay duration in ms
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timeoutId = null;     // Tracks current pending timeout
  let context = undefined;  // Stores `this` for func invocation
  let argsToInvoke = undefined; // Stores latest arguments for func

  /**
   * Clears any existing timer
   */
  function clearTimer() {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  /**
   * Invokes the debounced function immediately,
   * IF there is a pending invocation.
   */
  function invoke() {
    // No pending timer → no pending invocation
    if (timeoutId == null) {
      return;
    }

    clearTimer();

    // Invoke the original function with the correct context + args
    func.apply(context, argsToInvoke);
  }

  /**
   * The debounced wrapper function
   */
  function fn(...args) {
    // Reset previous timer
    clearTimer();

    // Save call context + latest arguments
    argsToInvoke = args;
    context = this;

    // Start a new timer
    timeoutId = setTimeout(function () {
      invoke();
    }, wait);
  }

  // Add cancel() method: stops pending execution
  fn.cancel = clearTimer;

  // Add flush() method: executes immediately if pending
  fn.flush = invoke;

  return fn;
}
```

---

# 🎯 **Why This Implementation Is Correct**

### ✔ Debouncing logic

You always:

```js
clearTimer();
timeoutId = setTimeout(...)
```

Meaning the **wait timer restarts** on each call.

---

### ✔ Preserves last arguments

Only the **last arguments passed** are stored in:

```js
argsToInvoke = args;
```

---

### ✔ Preserves `this` context

```js
context = this;
func.apply(context, argsToInvoke);
```

So methods work correctly:

```js
obj.debouncedMethod();
```

---

### ✔ `cancel()`

Stops pending execution immediately.

---

### ✔ `flush()`

Forces immediate execution if a timer is pending.

Example:

```js
debounced.flush(); // runs callback immediately
```

---

### ✔ Safe no-op calls

Both `cancel()` and `flush()` do nothing if no timer exists.

---

# 🔥 Example Behavior

### Cancel Example

```js
debounced();     // scheduled
debounced.cancel();
```

Result → callback NEVER runs.

---

### Flush Example

```js
debounced();     // scheduled for later
debounced.flush();
```

Result → callback runs *immediately*.

---

# 🎉 Final Summary

Your debounce implementation:

✔ Is correct
✔ Is feature-complete
✔ Handles timing, args, and context
✔ Includes cancel + flush
✔ Is equivalent to Lodash’s debounce

## Variations

* A **leading + trailing edge** debounce
* A **throttle** function
* A debounce with **maxWait** (Lodash-style)


---

# Editorial


**Note:** This is an advanced version of [Debounce](/questions/javascript/debounce), you should complete that first before attempting this question.

## Solution

Observe that the function is more complicated now that we have to implement two additional methods, `cancel` and `flush`. There's also duplicate functionality here:

| Flow | Cancel existing timer | Invoke original function |
|------|------------------------|---------------------------|
| Debounced function called before `wait` is up | ✅ | ✅ |
| `cancel()` | ✅ |  |
| `flush()` | ✅ | ✅ |

We can create two helper functions:

1. `invoke` to call the original function with the latest provided arguments.
2. `clearTimer` to cancel an existing timer/timeout.

### `invoke`

Unlike in the first Debounce question, the callback can be prematurely invoked via `flush()`. Once a delayed callback is `flush()`-ed, further `flush()`es shouldn't do anything. So we need to keep track of whether there is an existing pending callback to be invoked and we can use `timeoutId` to do that. If `timeoutId` is `null`, there's no pending callback. If it's a number (value returned from `setTimeout`), then there's a pending callback.

Hence we should check if `timeoutId == null` before we proceed with the invocations. We should also clear any existing timers.

Since `invoke` can be called from two places (within the `setTimeout` after a delay and manually through `flush`), we need to save a reference to the arguments the original function needs (`this` and the arguments) by creating two new function-level variables `context` and `argsToInvoke`. They are written to when the debounced function is being called and when `invoke` is being called, its values will then be used and the original function is called using `func.apply`/`func.call`.

### `clearTimer`

The implementation of `clearTimer` is simple, we can do `clearTimeout(timeoutId)` and set `timeoutId` to be `null`.

```js
/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait = 0) {
  let timeoutId = null;
  let context = undefined;
  let argsToInvoke = undefined;

  function clearTimer() {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  function invoke() {
    // Don't invoke if there's no pending callback.
    if (timeoutId == null) {
      return;
    }

    clearTimer();
    func.apply(context, argsToInvoke);
  }

  function fn(...args) {
    clearTimer();
    argsToInvoke = args;
    context = this;
    timeoutId = setTimeout(function () {
      invoke();
    }, wait);
  }

  fn.cancel = clearTimer;
  fn.flush = invoke;
  return fn;
}
````

## Edge cases

The main pitfall in this question is invoking the callback function with the correct `this` and the arguments. Since the callback function will be invoked by other objects, the value of `this` will be lost. We retain a reference to `this` outside the `setTimeout` (by saving it in a function-level variable called `context`) and pass it into `func.apply()`/`func.call()` as the first argument. The same is done for the arguments the function expects.

We should not implement `fn` using an arrow function because the value of `this` within arrow functions has lexical scope, i.e., it is bound to the context in which the function is created, not to the environment in which the function is called. For the other functions, it doesn't matter if we use function declarations or arrow functions.

## Techniques

* Using `setTimeout`.
* Closures.
* How `this` works.
* Invoking functions via `Function.prototype.apply()`/`Function.prototype.call()`.

## Notes

`clearTimeout()` is a forgiving function and passing an invalid ID to `clearTimeout()` silently does nothing; no exception is thrown. Hence we don't have to check for `timeoutID == null` before using `clearTimeout()`.

## Resources

* [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
* [Implementing Debounce in JavaScript](https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e)
* [clearTimeout() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)


