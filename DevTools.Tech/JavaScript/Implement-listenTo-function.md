# Implement listenTo function

---

# 📌 Problem Statement — Implement `listenTo(obj, methodName)`

You are given an object containing multiple methods.
Your task is to implement a function **`listenTo(obj, methodName)`** that wraps a specific method of that object.

This wrapper should:

### ✅ 1. Call the original method normally

* Must preserve the **correct `this` context**
* Must preserve **arguments**
* Must preserve the **original return value**

### ✅ 2. Record every return value from that method

Each time the wrapped method is invoked, store the returned value.

### ✅ 3. Return a listener object containing `.call()`

* `listener.call()` → should return an array of **all recorded return values**, in order of calls.

This behaves similarly to **`jest.spyOn()`**, but simplified.

---

# 🧩 Function Signature

```ts
function listenTo(obj: Object, methodName: string): { call: () => any[] }
```

---

# 📝 Arguments

### **obj**

Object whose method will be wrapped.

### **methodName**

The method on the object that should be observed.

---

# 🔁 Returns

An object with one method:

### `.call()`

Returns an array of **all return values collected** from invoking the wrapped method.

---

# 🔐 Behavioral Requirements

* The original method **must still work** exactly as before.
* The wrapper must **not affect any other method** on the object.
* `this` inside the original method must remain correct.
* Only one wrap per method (no need to support multiple nested spies).
* No external libraries allowed.

---

# 📘 Examples

### **Example 1**

```js
let obj = {
  count: 1,
  increment: function () {
    return this.count++;
  },
  decrement: function () {
    return this.count--;
  },
};

let listener = listenTo(obj, "increment");

obj.increment(); // 2
obj.increment(); // 3
obj.increment(); // 4

console.log(listener.call()); // [2, 3, 4]
```

---

### **Example 2**

```js
let obj2 = {
  greet: function(name) {
    return `Hello, ${name}!`;
  }
};

let listener2 = listenTo(obj2, "greet");

obj2.greet("Alice"); // "Hello, Alice!"
obj2.greet("Bob");   // "Hello, Bob!"

console.log(listener2.call()); // ["Hello, Alice!", "Hello, Bob!"]
```

---

# 📝 Additional Notes

* The method should be wrapped **safely**, without altering its behavior.
* Assume each method will be wrapped only once.
* Avoid modifying global state or unrelated methods.
* No third-party libraries allowed.

---


# Solution

```js
function listenTo(obj, method) {
  // Ensure obj and method are of the expected types
  if (typeof obj !== 'object' || typeof method !== 'string' || typeof obj[method] !== 'function') {
    throw new Error('Invalid arguments: obj must be an object and method must be a string representing a function on obj');
  }
  // storing the original method
  const originalMethod = obj[method];
  const results = [];

  // replacing the original method with our wrapper
  obj[method] = function wrappedMethod() {
    // passing the right context and arguments
    const result = originalMethod.apply(this, arguments);

    // storing and returning the result
    results.push(result);
    return result;
  };

  // return a new object
  return {
    call: function () {
      return results;
    }
  };
}


```

---

# ✅ Test Cases for `listenTo(obj, methodName)`

---

## **🔹 Test Case 1 — Basic tracking of a method that increments a value**

**Input:**

```js
let obj = {
  count: 1,
  increment: function () {
    return this.count++;
  },
};

const listener = listenTo(obj, "increment");

obj.increment(); // 1
obj.increment(); // 2
obj.increment(); // 3
```

**Expected Output:**

```js
assertionLibrary(listener.call()).to.deep.equal([1, 2, 3]);
```

---

## **🔹 Test Case 2 — Tracking method with arguments**

**Input:**

```js
let obj = {
  greet: function (name) {
    return `Hello, ${name}!`;
  },
};

const listener = listenTo(obj, "greet");

obj.greet("Alice");
obj.greet("Bob");
```

**Expected Output:**

```js
assertionLibrary(listener.call()).to.deep.equal([
  "Hello, Alice!",
  "Hello, Bob!"
]);
```

---

## **🔹 Test Case 3 — Ensure only the wrapped method is tracked**

**Input:**

```js
let obj = {
  count: 10,
  increment: function () {
    return this.count++;
  },
  decrement: function () {
    return this.count--;
  },
};

const listener = listenTo(obj, "increment");

obj.increment(); // 10 → count=11
obj.decrement(); // 11 → count=10
obj.increment(); // 10 → count=11
```

**Expected Output:**

```js
assertionLibrary(listener.call()).to.deep.equal([10, 10]);
```

---

## **🔹 Test Case 4 — Track method using `this` internally**

**Input:**

```js
let obj = {
  multiplier: 2,
  double: function (x) {
    return x * this.multiplier;
  },
};

const listener = listenTo(obj, "double");

obj.double(5); // 10
obj.double(3); // 6
```

**Expected Output:**

```js
assertionLibrary(listener.call()).to.deep.equal([10, 6]);
```

---

## **🔹 Test Case 5 — Track method with no return (undefined)**

**Input:**

```js
let obj = {
  log: function (message) {
    console.log(message);
  },
};

const listener = listenTo(obj, "log");

obj.log("hi");
obj.log("bye");
```

**Expected Output:**

```js
assertionLibrary(listener.call()).to.deep.equal([undefined, undefined]);
```

---

## **🔹 Test Case 6 — Multiple listeners for different methods**

**Input:**

```js
let obj = {
  count: 1,
  increment: function () {
    return this.count++;
  },
  reset: function () {
    this.count = 1;
    return this.count;
  },
};

const incListener = listenTo(obj, "increment");
const resetListener = listenTo(obj, "reset");

obj.increment(); // 1
obj.increment(); // 2
obj.reset();     // 1
obj.increment(); // 2
```

**Expected Output:**

```js
assertionLibrary(incListener.call()).to.deep.equal([1, 2, 1]);
assertionLibrary(resetListener.call()).to.deep.equal([1]);
```

---

## **🔹 Test Case 7 — No calls made after wrapping**

**Input:**

```js
let obj = {
  ping: function () {
    return "pong";
  },
};

const listener = listenTo(obj, "ping");
```

**Expected Output:**

```js
assertionLibrary(listener.call()).to.deep.equal([]);
```

---

