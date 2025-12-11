
# Resumable Interval

**Note:** It is recommended to have completed the [Cancellable Interval](/questions/javascript/cancellable-interval) question before attempting this question.

Implement a function `createResumableInterval`, that acts like `setInterval` and has the exact same signature. However instead of returning a timer ID, it returns an object that contains three methods:

1. `start`: Runs the callback **immediately** and every `delay` milliseconds.
2. `pause`: Pauses the interval so that it stops running. Execution can be resumed by calling `start()` again.
3. `stop`: Stops the interval permanently, cannot be restarted.

````js
createResumableInterval(callback);
createResumableInterval(callback, delay);
createResumableInterval(callback, delay, param1);
createResumableInterval(callback, delay, param1, param2);
createResumableInterval(callback, delay, param1, param2, /* … ,*/ paramN);
`````

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

# Editorial

**Note:** It is recommended to have completed the [Cancellable Interval](/questions/javascript/cancellable-interval) question before attempting this question.

## Solution

The complexity of this question lies in modelling the inner state of the interval, whether it's paused, running, or stopped (which is a terminal state) and how to modify the state correctly based on the methods.

### Approach 1: Using a `stopped` boolean flag

We can use variables `timerId` and `stopped` to model all possible states:

* If `timerId` is `null`, the interval is paused.
* If `timerId` is non-`null`, the interval is running and the value is the ID of the timer.
* If `stopped` is `true`, the interval has stopped and cannot be restarted.

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
```

We don't have to worry about `this` because `setInterval` does not accept a `thisArg`.

---

## Approach 2: State machine

With 3 states and 3 actions, using a state machine makes the transitions clearer.

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



