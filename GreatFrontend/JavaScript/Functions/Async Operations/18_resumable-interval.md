# Resumable Interval


**Note:** It is recommended to have completed the [Cancellable Interval](/questions/javascript/cancellable-interval) question before attempting this question.

Implement a function `createResumableInterval`, that acts like `setInterval` and has the exact same signature. However instead of returning a timer ID, it returns an object that contains three methods:

1. `start`: Runs the callback **immediately** and every `delay` milliseconds.
2. `pause`: Pauses the interval so that it stops running. Execution can be resumed by calling `start()` again.
3. `stop`: Stops the interval permanently, cannot be restarted.

```js
createResumableInterval(callback);
createResumableInterval(callback, delay);
createResumableInterval(callback, delay, param1);
createResumableInterval(callback, delay, param1, param2);
createResumableInterval(callback, delay, param1, param2, /* … ,*/ paramN);
````

You are recommended to read up on for `setInterval` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) if you are unfamiliar.

## Examples

```js
let i = 0;

// t = 0:
const interval = createResumableInterval(() => {
  i++;
}, 10);

// t = 10:
interval.start(); // i is now 1.

// t = 20: callback executes and i is now 2.

// t = 25:
interval.pause();

// t = 30: i remains at 2 because interval.pause() was called.

// t = 35:
interval.start(); // i is now 3.

// t = 45: callback executes and i is now 4.

// t = 50:
interval.stop(); // i remains at 4.

```
```

# My Solution

Below is a **clear explanation of the problem**, followed by a **step-by-step explanation of your solution**, plus a **fully commented version** of the code.

---

# ✅ **Understanding the Problem**

You're asked to implement **createResumableInterval** — a custom version of `setInterval` that lets you:

### ✔ start the interval

### ✔ pause it

### ✔ resume it

### ✔ stop it permanently

This is more flexible than regular `setInterval`, which:

* starts automatically
* cannot be paused
* cannot be restarted
* cannot be stopped permanently except via `clearInterval`

The new function:

```
createResumableInterval(callback, delay, param1, param2, ...)
```

returns:

```
{
  start(),
  pause(),
  stop()
}
```

### Behavior Requirements:

1. **start**

   * Immediately run the callback
   * Then schedule it every `delay` milliseconds
   * Do nothing if already running
   * Do nothing if stopped permanently

2. **pause**

   * Pause the interval (like clearInterval)
   * But allow resuming with start()
   * Do nothing if stopped permanently

3. **stop**

   * Stop interval permanently
   * Cannot be started again

Exactly like the example timeline in the prompt.

---

# 🧠 **How the Solution Works (Conceptually)**

To implement this behavior, you need:

### ✔ A timer ID (`timerId`)

Used to track whether the interval is active.

### ✔ A `stopped` flag

Once `stop()` is called, the interval can *never* restart.

### ✔ The ability to run the callback immediately in `start()`

### ✔ A way to pause and resume using `clearInterval`

Your solution does all of this correctly.

---

# 📝 **Fully Commented Version of Your Code**

```js
/**
 * Creates a resumable, pausable interval.
 *
 * @param {Function} callback - The function to run every interval.
 * @param {number} delay - Time in ms between executions.
 * @param {...any} args - Extra arguments passed to callback.
 *
 * @returns {{start: Function, pause: Function, stop: Function}}
 */
export default function createResumableInterval(callback, delay, ...args) {
  let timerId = null;   // Stores the interval ID if running
  let stopped = false;  // Once true → interval can never restart

  /**
   * Starts the interval:
   * - Immediately executes callback
   * - Does nothing if already running or permanently stopped
   */
  function start() {
    // If permanently stopped OR already running → no-op
    if (stopped || timerId != null) {
      return;
    }

    // Run callback immediately with provided arguments
    callback(...args);

    // Start interval to run callback repeatedly
    timerId = setInterval(callback, delay, ...args);
  }

  /**
   * Clears the running interval and resets timerId
   */
  function clearTimer() {
    clearInterval(timerId);
    timerId = null;
  }

  /**
   * Pauses the interval (can be resumed with start())
   */
  function pause() {
    if (stopped) {
      return; // Cannot pause after permanent stop
    }

    clearTimer();
  }

  /**
   * Permanently stops the interval (cannot be restarted)
   */
  function stop() {
    stopped = true;
    clearTimer();
  }

  // Expose the control functions
  return {
    start,
    pause,
    stop,
  };
}
```

---

# 🎯 **Why This Implementation Is Correct**

### ✔ Prevents double-starting

`start()` checks:

```js
if (timerId != null) return;
```

### ✔ Callback runs immediately (as required)

```js
callback(...args);
```

### ✔ Pause only clears timer, does NOT block restart

### ✔ Stop permanently blocks future `start()` calls

### ✔ Uses `setInterval(callback, delay, ...args)` correctly

This allows arguments to be passed automatically.

### ✔ Timer management is clean

Everything resets properly using:

```js
clearInterval(timerId);
timerId = null;
```

---

# 🎉 **Final Result**

Your implementation is:

* correct
* clean
* readable
* matches the entire specification exactly

# Additional Tasks
🔹 Provide an alternative implementation using `setTimeout` instead of `setInterval`
🔹 Compare with Cancellable Interval
🔹 Add unit tests for each scenario







# Editorial 

**Note:** It is recommended to have completed the [Cancellable Interval](/questions/javascript/cancellable-interval) question before attempting this question.

## Solution

The complexity of this question lies in modelling the inner state of the interval, whether it's paused, running, or stopped (which is a terminal state) and how to modify the state correctly based on the methods.

### Approach 1: Using a `stopped` boolean flag

We can have use variables, `timerId` and `stopped` to model all possible states:

- If `timerId` is `null`, the interval is paused.
- If `timerId` is non-`null`, the interval is running and the value is the ID of the timer.
- If `stopped` is `true`, the interval has stopped and cannot be restarted, regardless of the `timerId` value.

In our `start` and `pause` functions, we first have to check if `stopped` is `true` and terminate if so.

In the `start` function, we have to first check if `timerId != null`, and terminate early as well, otherwise we will be running two intervals at the same time.

In the `pause` function, once we have determined the interval is not in the `stopped` state, call `clearInterval(timerId)` to stop the interval callback.

In the `stop` function, set `stopped` to `true` and call `clearInterval(timerId)` to stop the interval callback. It doesn't matter if the interval is still running because `clearInterval(null)` is a no-op.

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {{start: Function, pause: Function, stop: Function}}
 */
export default function createResumableInterval(callback, delay, ...args) {
  let timerId = null;
  let stopped = false;

  function start() {
    if (stopped || timerId != null) {
      return;
    }

    callback(...args);
    timerId = setInterval(callback, delay, ...args);
  }

  function clearTimer() {
    clearInterval(timerId);
    timerId = null;
  }

  function pause() {
    if (stopped) {
      return;
    }

    clearTimer();
  }

  function stop() {
    stopped = true;
    clearTimer();
  }

  return {
    start,
    pause,
    stop,
  };
}
````

We don't have to worry about `this` within the callback function because there's no option to pass a `thisArg` to `setInterval` unlike `Array.prototype.forEach()`/`Array.prototype.reduce()`. Read more about [this on MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval#the_this_problem).

## Approach 2: State machine

With 3 states and 3 possible actions, modeling the state and actions with imperative logic is already starting to feel complicated. State machines are a declarative way to model state and the associated interactions. A state machine takes the current state and an action and returns the next state. We can then call the necessary logic based on the new state.

For this question, we have the following states and actions:

* States: `'paused'`, `'stopped'`, `'running'`
* Actions: `start()`, `pause()`, `stop()`

We can define a `stateMachine` object where the top-level key is the current state, and the values are objects where the key is an action and value is the new state. Deriving the new state is simply `const newState = stateMachine[state][action]`.

If the `newState` and the current `state` is the same, there's nothing to be done. Otherwise, we can perform the necessary logic based on the `newState`, either to stop the interval or start it. The exposed methods just have to call the `nextState` function with the corresponding action.

Although there's some duplication in the values of the key, it is much easier to determine at a glance that the state transitions are correct. Compare to the other approach, this state machine approach requires much fewer conditional statements and state assignment statements!

```js
/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {{start: Function, pause: Function, stop: Function}}
 */
export default function createResumableInterval(callback, delay, ...args) {
  let timerId;
  let state = 'paused';

  function nextState(action) {
    const newState = stateMachine[state][action];
    if (newState === state) {
      return;
    }

    state = newState;
    switch (state) {
      case 'paused':
      case 'stopped':
        clearInterval(timerId);
        timerId = null;
        return;
      case 'running':
        callback(...args);
        timerId = setInterval(callback, delay, ...args);
        return;
    }
  }

  return {
    start: () => nextState('start'),
    pause: () => nextState('pause'),
    stop: () => nextState('stop'),
  };
}

const stateMachine = {
  stopped: {
    pause: 'stopped',
    start: 'stopped',
    stop: 'stopped',
  },
  paused: {
    pause: 'paused',
    start: 'running',
    stop: 'stopped',
  },
  running: {
    pause: 'paused',
    start: 'running',
    stop: 'stopped',
  },
};
```

## Resources

* [`setInterval()` | MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

```
```
