# Promise.withResolvers


The `Promise.withResolvers()` static method returns an object containing a new `Promise` object and two functions to resolve or reject it, corresponding to the two parameters passed to the executor of the `Promise()` constructor.

*Source: [Promise.withResolvers() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)*

Such usage can improve code readability and make it easier to manage asynchronous operations, especially when you need to resolve or reject the `Promise` from different parts of your code.

Here's an example of how it can be used:

```js
function delayedGreeting(name) {
  const { promise, resolve, reject } = Promise.withResolvers();

  setTimeout(() => {
    if (name) {
      resolve(`Hello, ${name}!`);
    } else {
      reject(new Error('Name is required.'));
    }
  }, 1000);

  return promise;
}

delayedGreeting('Alice')
  .then((message) => console.log(message)) // Output: Hello, Alice!
  .catch((error) => console.error(error));

delayedGreeting()
  .then((message) => console.log(message))
  .catch((error) => console.error(error)); // Output: Error: Name is required.
````

## Requirement

Implement the `Promise.withResolvers` function as `promiseWithResolvers`, a standalone utility function.

## Examples

Success case:

```js
const { promise, resolve, reject } = promiseWithResolvers();

// Later in your code
resolve('Success!');
promise.then((result) => console.log(result)); // Output: Success!
```

Implementing a timeout:

```js
function timeoutPromise(duration) {
  const { promise, resolve, reject } = promiseWithResolvers();

  setTimeout(() => reject(new Error('Timeout')), duration);

  return promise;
}

timeoutPromise(2000).catch((error) => console.error(error.message)); // Output after 2 seconds: Timeout
```

## Resources

* [Promise.withResolvers() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)


# My Solution

Below is a **clear explanation** of your `promiseWithResolvers` implementation, along with a **fully commented version** of the code**.**

Your solution is **correct**, simple, elegant, and matches how real `Promise.withResolvers()` works internally.

---

# ✅ **What `promiseWithResolvers()` Should Do**

It must return an object containing:

* **`promise`** — a new Promise instance
* **`resolve`** — a function that resolves that promise
* **`reject`** — a function that rejects that promise

This allows you to resolve or reject the promise **externally**, which is normally impossible with a regular Promise.

This is also known as the **"deferred" pattern** (like jQuery’s `$.Deferred` or Python’s `Future`).

---

# 🧠 **How the Implementation Works**

You do something clever:

1. Create variables (`resolve`, `reject`) to store the functions.
2. Create a new Promise where the executor receives `(res, rej)`:

   ```js
   const promise = new Promise((res, rej) => {
     resolve = res;
     reject = rej;
   });
   ```
3. You **capture** these `res` and `rej` functions and assign them to the outer variables.
4. Return `{ promise, resolve, reject }`.

Now external code can call:

```js
resolve("done!");
reject("error!");
```

This is exactly how `Promise.withResolvers()` works.

---

# 📝 **Fully Commented Version**

```js
/**
 * Custom implementation of Promise.withResolvers()
 *
 * @returns {{
 *   promise: Promise,
 *   resolve: Function,
 *   reject: Function
 * }}
 *
 * This function returns:
 * - a new Promise
 * - its resolve function
 * - its reject function
 */
export default function promiseWithResolvers() {
  // These will hold the functions that resolve/reject the promise.
  let resolve, reject;

  // Create a new Promise.
  // Inside the executor, JavaScript provides two functions: res and rej.
  // We store them in the outer variables so they can be used elsewhere.
  const promise = new Promise((res, rej) => {
    resolve = res;  // assign the internal resolve function to the outer variable
    reject = rej;   // assign the internal reject function to the outer variable
  });

  // Return an object containing:
  // - the promise
  // - the ability to resolve it externally
  // - the ability to reject it externally
  return { promise, resolve, reject };
}
```

---

# 🎯 **Why This Works**

When you normally create a Promise:

```js
new Promise((resolve, reject) => { ... });
```

The only place you can call `resolve` and `reject` is **inside** the executor function.

`promiseWithResolvers()` captures those two functions and **exposes them outside** the Promise.
This lets you control the promise from anywhere.

---

# 📌 **Example Usage**

### Success case:

```js
const { promise, resolve } = promiseWithResolvers();

setTimeout(() => resolve("Done!"), 1000);

promise.then(console.log); // "Done!"
```

### Failure case:

```js
const { promise, reject } = promiseWithResolvers();

reject("Something went wrong");
promise.catch(console.error);
```

---

# 🌟 **Where this pattern is useful**

* Timeouts
* Event-based async logic
* WebSocket handlers
* Custom async libraries
* Wrapping callback-based APIs
* Tests that wait for a specific async event

---

# 🎉 Final Thoughts

Your implementation is:

✔ 100% correct
✔ clean
✔ efficient
✔ identical to `Promise.withResolvers()` behavior







# Editorial


## Solution

For the most part, `Promise.withResolvers()` is syntactic sugar. The only way to get access to the `resolve` and `reject` function is the arguments to the `Promise` constructor. Hence we can create the `resolve` and `reject` functions before creating the `Promise`, then exposing it from within the constructor function.

The `Promise` constructor function argument runs synchronously, so we can be sure that the `resolve` and `reject` variables are assigned the right values before the `return` statement.

```js
/**
 * @returns { promise: Promise, resolve: Function, reject: Function }
 */
export default function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}
````

In fact, MDN even mentions that `Promise.withResolvers()` is [exactly equivalent to the following code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers#description):

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

## Resources

* [Promise.withResolvers() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/withResolvers)

```
```
