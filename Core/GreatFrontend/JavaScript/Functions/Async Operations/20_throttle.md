# Throttle

https://www.greatfrontend.com/questions/javascript/throttle?practice=practice&tab=coding



Throttling is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is said to be throttled with a wait time of X milliseconds, it can only be invoked at most once every X milliseconds. The callback is invoked immediately and cannot be invoked again for the rest of the `wait` duration.

Implement a `throttle` function which accepts a callback function and a `wait` duration. Calling `throttle()` returns a function which throttles invocations of the callback function following the behavior described above.

## Examples

```js
let i = 0;
function increment() {
  i++;
}

const throttledIncrement = throttle(increment, 100);

// t = 0: Call throttledIncrement(). i is now 1.
throttledIncrement(); // i = 1

// t = 50: Call throttledIncrement() again.
// i is still 1 because 100ms have not passed.
throttledIncrement(); // i = 1

// t = 101: Call throttledIncrement() again. i is now 2.
// i can be incremented because it has been more than 100ms
// since the last throttledIncrement() call at t = 0.
throttledIncrement(); // i = 2
````

## Follow Up

* Throttle with cancel and leading/trailing options.

## Reading

* [https://lodash.com/docs/4.17.15#throttle](https://lodash.com/docs/4.17.15#throttle)

# Editorial

Throttle, along with [debounce](/questions/javascript/debounce), are among the most common front-end interview questions; it's the front-end equivalent of inverting a binary tree. Hence you should make sure that you are very familiar with both questions.

## Solution

A throttled function can be in two states:

- **Idle**: The throttled function was not invoked in the last `wait` duration.  
  Calling the throttled function will immediately execute the callback.  
  After this, the function enters the **Active** state.

- **Active**: The throttled function was invoked within the last `wait` duration.  
  Subsequent calls should NOT execute the callback function until `wait` has passed.

Since there is a waiting period before the function can be invoked again, we know we need a timer, and `setTimeout` comes to mind. With just two states, a `boolean` variable can model this easily.

We return a function that wraps the logic of when to invoke `func`.

---

### 1. Throttle invocation

The callback function is invoked immediately and cannot be invoked again until `wait` time passes.

We use a `boolean` variable `shouldThrottle` to track if execution is allowed.

When the function is called in the **Idle** state:

1. Set `shouldThrottle = true`.
2. Invoke `func` with the correct arguments.
3. Use `setTimeout` to release the lock (`shouldThrottle = false`) after `wait` milliseconds.

While the lock is active, calls will do nothing because of the `shouldThrottle` check.

---

### 2. Invoke `func` with the appropriate arguments

A throttled function should behave like the original function, which means:

- We must forward the value of `this`.
- We must forward the original function arguments.

Important:

- **Arrow functions cannot be used** for the returned throttled function because they do not bind their own `this`.
- Calling `func(...args)` will NOT preserve `this`.

Instead, we use `.apply()` or `.call()`:

- `func.apply(thisArg, args)`
- `func.call(thisArg, ...args)`

---

### Code

```js
/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      return;
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false;
    }, wait);

    func.apply(this, args);
  };
}
````

---

## Variations of Throttle

This implementation covers the most common behavior. Other variations include:

1. **Leading / Trailing options**, flush(), cancel(), similar to Lodash’s `_.throttle`.
2. **Queue-based throttling**, where all calls are collected and executed at fixed intervals in the future, unlike this version which *ignores* calls during the lock period.

---

## Techniques

* Using `setTimeout`
* Closures
* Understanding how `this` works
* Using `.apply()` / `.call()` to invoke functions

---

## Resources

* [https://css-tricks.com/debouncing-throttling-explained-examples/](https://css-tricks.com/debouncing-throttling-explained-examples/)



