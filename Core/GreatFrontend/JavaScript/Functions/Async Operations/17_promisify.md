# Promisify

Before promises/`async`/`await` became the standard, it was a convention for async APIs in JavaScript to accept callbacks as the last argument. Many async versions of Node.js APIs (e.g. `fs.readFile` and `fs.rm`) have such signatures. Node.js’ `util.promisify` function was created to wrap around callback-based functions by returning `Promise`s so that they can be used with `async`/`await`.

Implement a function `promisify` that takes a function following the common callback-last error-first style, i.e. taking a `(err, value) => ...` callback as the last argument, and returns a version that returns promises.

## Examples

```js
// Example function with callback as last argument
// The callback has the signature `(err, value) => any`
function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);

const data = await promisifiedFoo('example.com', { foo: 1 });
```

# My Solution

Here’s a **clear and simple explanation of the problem**.

---

# ✅ **What the Problem Is Asking**

You must implement a function **`promisify`**, which converts a **callback-based async function** into a **Promise-based version**.

This lets old “callback-style” APIs be used with modern `async/await`.

---

# 🧩 **Why is this needed?**

Before Promises and async/await existed, Node.js used the **error-first callback pattern**:

```js
callback(error, value);
```

Meaning:

* If the operation **fails**, you call:

  ```js
  callback(err)
  ```
* If the operation **succeeds**, you call:

  ```js
  callback(null, result)
  ```

Modern code prefers Promises and async/await, so we need to convert:

```
callback API  →  promise API
```

That’s what **promisify** does.

---

# 🧠 **What You Must Implement**

### `promisify(callbackFunction)`

It must return **a new function** that:

1. **Calls the original function**, passing all arguments normally
2. **Instead of sending a callback**, it returns a Promise
3. Inside the Promise, it creates a callback function:

   * If the callback’s first argument is an **error**, the Promise must **reject**
   * If the callback receives a **value**, the Promise must **resolve**

---

# 🎯 **Example Flow**

Given this callback-style function:

```js
function foo(url, options, callback) {
  apiCall(url, options)
    .then(data => callback(null, data)) // success
    .catch(err => callback(err));       // failure
}
```

You turn it into:

```js
const promisifiedFoo = promisify(foo);
```

Now it becomes:

```js
const data = await promisifiedFoo('example.com', { foo: 1 });
```

Instead of:

```js
foo('example.com', { foo: 1 }, (err, value) => { ... });
```

---

# 📌 **Summary**

### 🟢 Input:

A function that follows this signature:

```js
fn(...args, callback)
where callback = (err, value) => {...}
```

### 🔵 Output:

A **new function** that:

```js
returns a Promise instead of using callback
```

### 🔴 Promise behavior:

* Reject if callback receives an error (`err`)
* Resolve if callback receives a value (`value`)

---

## Solution Explanation

Here is a **clear explanation** of your `promisify` implementation, along with a **fully commented version** of the code.
Your solution is **correct**, clean, and matches how Node.js’s `util.promisify()` works fundamentally.

---

# ✅ **What Your `promisify` Function Does**

`promisify(func)` takes a **callback-style function** (error-first callback pattern):

```
func(arg1, arg2, ..., callback)
callback(err, result)
```

…and returns a **new function** that:

* accepts the same arguments
* *returns a Promise* instead of using a callback
* resolves when callback is successful
* rejects when callback receives an error

This lets old-style callback APIs be used with **async/await**.

---

# 🧠 **How It Works (Step-by-step)**

### ### 1️⃣ `promisify` returns a wrapper function

```js
return function (...args) {
```

This wrapper will accept the original function’s arguments.

---

### 2️⃣ The wrapper returns a Promise

```js
return new Promise((resolve, reject) => {
```

So now `promisifiedFunc()` gives a Promise instead of expecting a callback.

---

### 3️⃣ Inside the Promise, you call the original function

```js
func.call(this, ...args, callback);
```

Important:

* `func.call(this, ...)` preserves the **this context**,
  which is required for many Node.js APIs.
* `...args` spreads all arguments except the callback.

---

### 4️⃣ You append your own callback at the end

```js
(err, result) => err ? reject(err) : resolve(result)
```

This callback:

* **Rejects** the Promise if the first argument (`err`) is truthy.
* **Resolves** the Promise if `err` is null/undefined.

This matches Node.js’s **error-first callback convention**.

---

# 📝 **Fully Commented Version**

```js
/**
 * @callback func
 * @returns Function
 *
 * Converts a callback-style function (err, result) into a Promise-based one.
 */
export default function promisify(func) {
  return function (...args) {
    // Return a Promise instead of expecting a callback
    return new Promise((resolve, reject) => {
      
      // Call the original function
      // Use .call(this, ...) to preserve correct `this` binding
      // Append our custom callback at the end
      func.call(this, ...args, (err, result) => {
        
        // Node.js error-first callback pattern:
        // If err is truthy → reject the Promise
        if (err) {
          reject(err);
        } 
        // Otherwise → resolve with the result
        else {
          resolve(result);
        }
      });
    });
  };
}
```

---

# 🌟 Why This Implementation Is Excellent

### ✔ Matches real callback signature: `(err, result) => {}`

### ✔ Supports async/await

### ✔ Preserves `this` context using `.call(this, …)`

### ✔ Works with any Node-style function

### ✔ Very clean & professional-looking

Example usage:

```js
const readFileAsync = promisify(fs.readFile);

const content = await readFileAsync("file.txt", "utf8");
```

Works exactly like built-in `util.promisify`.

---

## Additional Learning

🔹 How to support multiple callback results
🔹 How to support Node.js custom promisify symbols
🔹 How `util.promisify` is implemented internally

---




# Editorial


## Solution
1. The `promisify` function takes a single argument `func`, which is the callback-based function you want to promisify.
2. The `return` statement returns a new function that wraps `func`. This new function is the promisified version.
3. Inside the returned function, we use the spread operator `...args` to capture any arguments passed to the promisified function.
4. We create a new `Promise` that wraps the original callback-based function. The Promise constructor takes a function with two arguments: `resolve` and `reject`. These are functions we call based on the outcome of the asynchronous operation.
5. Inside the Promise's function, we invoke `func` with the provided arguments `(...args)` and pass a callback function as its last argument as that's what `func` expects.
6. The callback function takes two arguments: `err` (error) and `result` (success value). If `err` is truthy, we reject the `Promise` with the `err`. Otherwise, we resolve the `Promise` with the `result`.

With the `promisify` function, you can convert any callback-based function into a `Promise`-based function, making it easier to work with asynchronous operations using modern Promise syntax.

To preserve the `this` value, the returned function should not be defined using arrow functions and `func` should be invoked with `call`/`apply` and the correct `thisArg` value.

```jsx
/**
 * @callback func
 * @returns Function
 */
export default function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, result) =>
        err ? reject(err) : resolve(result),
      );
    });
  };
}
````

### Notes

The `promisify` function assumes the callback is the last argument and that the callback uses an error-first format. If the function you are trying to promisify is not the last argument or has a different format, you cannot use this. Node.js provides a custom promisify function [`util.promisify.custom`](https://nodejs.org/api/util.html#util_custom_promisified_functions) that you can use for such cases.

Not every function that accepts callbacks can/should be promisified! A promise can have only one result, but a callback can be called many times (e.g. `setInterval`). Hence promisification is only meant for functions that call the callback once because further calls will be ignored.

## Resources

* [Node.js `util.promisify`](https://nodejs.org/api/util.html#utilpromisifyoriginal)
* [Promisification](https://javascript.info/promisify)

```
```
