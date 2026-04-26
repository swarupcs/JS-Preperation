# Promisify II


**Note:** This is an advanced version of [Promisify](/questions/javascript/promisify), which you should complete first before attempting this question.

In [Promisify](/questions/javascript/promisify), the `promisify` function returns a promise for a function following the common callback-last error-first callback style, i.e. taking a `(err, value) => ...` callback as the last argument. However, `promisify` does not work for functions that do not follow that exact signature.

In Node.js, using the `util.promisify.custom` symbol, one can override the return value of `util.promisify()`, which is useful for cases where the original function does not follow the standard format of taking an error-first callback as the last argument. This is especially useful for functions with a legacy format that's incompatible with `util.promisify`'s callback-last convention.

```js
// Example usage in Node.js.
const util = require('node:util');

function doSomething(callback, foo) {
  // ...
}

doSomething[util.promisify.custom] = (foo) => {
  return getPromiseSomehow();
};

const promisified = util.promisify(doSomething);
console.log(promisified === doSomething[util.promisify.custom]);
// prints 'true'
```

Implement a `promisify` function that has support for custom return values. Use the symbol `Symbol.for('util.promisify.custom')` as the key for the overridden value.

## Examples

```js
// Example function with callback as the first argument.
// The callback has the signature `(err, value) => any`.
function foo(callback, url, options) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

foo[Symbol.for('util.promisify.custom')] = (url, options) => {
  return new Promise((resolve, reject) => {
    foo(
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      },
      url,
      options,
    );
  });
};

const promisifiedFoo = foo[Symbol.for('util.promisify.custom')]; // true
const data = await promisifiedFoo('example.com', { foo: 1 });
```

## Resources

* [Custom promisified functions | Node.js](https://nodejs.org/api/util.html#custom-promisified-functions)

---

# My Solution

Below is a **complete explanation of the problem**, **why it exists**, **why your solution is correct**, and a **fully commented version of the code** to make everything crystal clear.

---

# ✅ **Understanding the Problem**

This question is an **advanced version of Promisify**.

### Before:

You implemented a `promisify(func)` that converts standard Node.js-style functions:

```
func(arg1, arg2, ..., callback)
callback(err, result)
```

into Promise-based functions.

### Now:

You must handle **custom promisification behavior**.

---

# 🚨 **Why Do We Need Custom Promisification?**

Not all old functions follow the standard Node.js callback style:

```
(error, value) => ...
```

Some use:

* Callback **first**, not last
* Callback **with different arguments**
* No callback at all
* Multiple result values
* Or any unusual signature

Example:

```js
function foo(callback, url, options) {
  ...
}
```

This cannot be promisified using a normal promisify function because:

* Callback is NOT at the end
* Arguments are NOT in the standard order

### Node.js solves this using:

```js
const util = require("util");
myFunc[util.promisify.custom] = function (...) { ... }
```

This allows a function to **define its own custom behavior** when promisified.

---

# 🧩 **Your Task**

Implement a `promisify` function that:

1. **Checks for a custom promisify function** defined on:

```js
Symbol.for("util.promisify.custom")
```

2. If it exists → **return it directly**
3. Otherwise → fallback to the **normal promisify implementation**

---

# 🧠 **Explanation of Your Solution**

### 🔹 Step 1 — Define the custom symbol

```js
const promisifyCustomSymbol = Symbol.for('util.promisify.custom');
```

This creates the exact same symbol Node.js uses for custom promisification.

---

### 🔹 Step 2 — Check whether the function has a custom promisifier

```js
if (func[promisifyCustomSymbol]) {
  return func[promisifyCustomSymbol];
}
```

If the original function **overrides** how it should be promisified,
we simply return that custom implementation.

Just like Node.js’s real `util.promisify()`.

---

### 🔹 Step 3 — Otherwise → fallback to normal promisify behavior

```js
return function (...args) {
  return new Promise((resolve, reject) => {
    func.call(this, ...args, (err, result) =>
      err ? reject(err) : resolve(result)
    );
  });
};
```

This is the same implementation you wrote earlier:

* Accepts any number of args
* Calls the original function with those args
* Appends your callback `(err, result)`
* Converts error-first callback call into Promise resolution

---

# 📝 **Fully Commented Version**

```js
const promisifyCustomSymbol = Symbol.for('util.promisify.custom');

/**
 * Custom implementation of util.promisify(), including support
 * for custom promisification using Symbol.for('util.promisify.custom')
 *
 * @param {Function} func - The original callback-based function
 * @returns {Function} - A promise-based version of the function
 */
export default function promisify(func) {

  // STEP 1:
  // Check if the function defines a custom promisify implementation.
  // If so, return that instead of creating our own.
  if (func[promisifyCustomSymbol]) {
    return func[promisifyCustomSymbol];
  }

  // STEP 2:
  // Fallback to normal promisify behavior.
  // We return a new function that returns a Promise.
  return function (...args) {
    return new Promise((resolve, reject) => {

      // Call the original function with:
      // - same `this` context
      // - same arguments
      // - our callback appended as the last argument
      func.call(this, ...args, (err, result) => {
        if (err) {
          reject(err);  // Standard Node.js error-first callback
        } else {
          resolve(result);
        }
      });
    });
  };
}
```

---

# 🎯 **Why This Solution Is Correct**

✔ Implements real Node.js custom promisification behavior
✔ Uses the correct global symbol `Symbol.for("util.promisify.custom")`
✔ Allows overriding promisification for unusual callback signatures
✔ Falls back to standard promisification when no override exists
✔ Preserves `this` context using `.call(this, ...)`
✔ Works exactly like Node’s built-in `util.promisify()`

---

# 📌 Example: When This Is Useful

Given this weird function:

```js
function foo(callback, url, options) {
  callback(null, "ok");
}
```

A normal promisify would fail, because callback is **not last**.

You can fix it like this:

```js
foo[Symbol.for("util.promisify.custom")] = (url, options) => {
  return new Promise((resolve, reject) => {
    foo((err, data) => err ? reject(err) : resolve(data), url, options);
  });
};
```

And your version correctly returns this custom one.

---

# 🎉 Final Result

Your implementation is **accurate**, **clean**, and **matches Node.js behavior**.

## Variations
* A **full util.promisify() polyfill**
* A version with **custom callback signatures**
* A version supporting **multiple return values**, like Node.js callbacks sometimes do







# Editorial

---

**Note:** This is an advanced version of [Promisify](/questions/javascript/promisify), which you should complete first before attempting this question.

## Solution

The only addition you need to make is to check if the `func` argument has the custom `Symbol.for('util.promisify.custom')` defined and return the corresponding value if so.

```js
const promisifyCustomSymbol = Symbol.for('util.promisify.custom');

/**
 * @callback func
 * @returns Function
 */
export default function promisify(func) {
  if (func[promisifyCustomSymbol]) {
    return func[promisifyCustomSymbol];
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err, result) =>
        err ? reject(err) : resolve(result),
      );
    });
  };
}
```

## Resources

* [Custom promisified functions | Node.js](https://nodejs.org/api/util.html#custom-promisified-functions)

---


