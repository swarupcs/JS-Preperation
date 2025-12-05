


# Sleep

https://www.greatfrontend.com/questions/javascript/sleep?practice=practice&tab=coding

In JavaScript, the `setTimeout` function can be used to execute callbacks after a delay. However, it introduces a layer of nesting in the code which may not be desired. It'd be nice to use `setTimeout` in this fashion:

```js
// Note: the following code contains invalid syntax and doesn't work.
console.log('Hello!');
setTimeout(1000);
console.log('Bye.');
````

In languages like Java and Python, a `sleep` function is available to suspend execution of the calling thread. However, unlike other languages, JavaScript is single-threaded and blocking the main thread is not a good idea. Hence lets implement an **asynchronous** version of the `sleep` function that works similarly but does not block the main thread.

## Examples

```js
async function greeting() {
  console.log('Hello!');
  await sleep(2000);
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();
// t = 0: Hello!
// t = 2000: Bye.
```

The `sleep` function should also be able to be used without `await`:

```js
console.log('Hello!');
sleep(2000).then(() => {
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
});
```


# Editorial

## Solution

### Approach 1: Non-blocking using `setTimeout`

1. The sleep function takes a `duration` parameter representing the time in milliseconds for which the execution should be paused.
2. It returns a `Promise` that will resolve after the specified `duration`.
3. Inside the `Promise` constructor, use `setTimeout` to delay the execution of the `resolve` function, effectively pausing the execution for the specified time.

```js
/**
 * @param {number} duration
 * @return {Promise<void>}
 */
export default async function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
````

### Approach 2: Blocking version of `sleep()`

A synchronous, blocking version of `sleep` repeatedly checks if `duration` has passed since the function started running. It pauses all execution on the main thread.

```js
function sleep(duration) {
  let now = new Date().getTime();
  while (new Date().getTime() < now + duration) {
    // Do nothing.
  }
  // Proceed when `duration` has passed since `now`.
}
```

### Asynchronous `sleep` example

```js
async function greeting() {
  console.log('Hello!');
  await sleep(2000);
  console.log('Bye.');
}

setInterval(() => {
  console.log('Tick');
}, 500);

greeting();
// t = 0: Hello!
// t = 500: Tick
// t = 1000: Tick
// t = 1500: Tick
// t = 2000: Tick
// t = 2000: Bye.
// t = 2500: Tick
// t = 3000: Tick
// ...
```

### Synchronous/blocking `sleep` example

```js
async function greeting() {
  console.log('Hello!');
  sleep(2000);
  console.log('Bye.');
}

setInterval(() => {
  console.log('Tick');
}, 500);

greeting();
// t = 0: Hello!
// t = 2000: Bye.
// t = 2000: Tick
// t = 2500: Tick
// t = 3000: Tick
// ...
```

Note that in this example, the first “Tick” is only printed because the `sleep()` function was executing the entire time (checking the `while` condition).

## Resources

* [How to Make JavaScript Sleep or Wait](https://builtin.com/software-engineering-perspectives/javascript-sleep)




