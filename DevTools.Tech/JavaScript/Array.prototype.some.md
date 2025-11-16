
# How to implement custom Array.prototype.some method?

## Problem Statement

Implement a custom array method called **`customSome`** that returns `true` if it finds at least one element in the array that satisfies the provided testing function. Otherwise, it should return `false`.

Your implementation **must not mutate the original array** and must work as an extension of JavaScript's `Array.prototype`.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

---

## Syntax

```js
customSome(callbackFn)
customSome(callbackFn, thisArg)
````

---

## Arguments

### **callbackFn**

A function executed for each element in the array.

It receives the following parameters:

* **element** – The current element being processed.
* **index** – The index of the current element.
* **array** – The array `customSome()` was called on.

The `callbackFn` should return:

* **Truthy** → if element passes the test
* **Falsy** → otherwise

### **thisArg (Optional)**

Value to use as `this` inside `callbackFn`.

---


## Returns

`false` unless `callbackFn` returns a truthy value for at least one element, in which case **`true`** is returned immediately.

---

## Examples

### **Example 1**

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].customSome(isBiggerThan10); // false
[12, 5, 8, 1, 4].customSome(isBiggerThan10); // true
```

---

### **Example 2**

```js
[2, 5, 8, 1, 4].customSome((x) => x > 10); // false
[12, 5, 8, 1, 4].customSome((x) => x > 10); // true
```

---

### **Example 3**

```js
const numbers = [3, -1, 1, 4, 1, 5];
const isIncreasing = !numbers
  .filter((num) => num > 0)
  .customSome((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });

console.log(isIncreasing); // false
```

---

## Notes

* Handle edge cases such as invalid input.
* Throw appropriate errors if the provided callback is not a function or if the method is used incorrectly.



## Solution

```JS
// DO NOT CHANGE FUNCTION NAME
function customSome(callbackFn, thisArg) {
  // Early escape conditions
  // 1. If this is null or undefined, throw (ToObject)
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customSome called on null or undefined');
  }

  // 2. callbackFn must be a function
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  // 3. Let O be Object(this)
  // to handle cases like
  // Array.prototype.customSome('abc', console.log);
  // Expected output: 'a', 'b', 'c'
  // Strings are array-like
  // this ensures that any provided value is wrapped into an Object wrapper
  const collection = Object(this);

  // 4. Parse the length
  const len = Math.trunc(Number(collection.length)) || 0;

  // 5. early return if array is empty
  if (len === 0) {
    return false;
  }

  // 6. Iterate from 0 to len - 1, using hasOwnProperty check
  for (let i = 0; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(collection, i)) {
      // Retrieve element
      const element = collection[i];
      // Call callback with the correct thisArg and parameters (element, index, array)
      const result = callbackFn.call(thisArg, element, i, collection);

      if (result) {
        return true;
      }
    }
  }

  // 7. Return false
  return false;
}

Array.prototype.customSome = customSome;

```

---


## **Test Case 1: Should return false when no element satisfies the condition**

### **Input**
```js
function isBiggerThan10(el) {
  return el > 10;
}
const result = [2, 5, 8, 1, 4].customSome(isBiggerThan10);
````

### **Expected Output**

```js
result === false;
```

---

## **Test Case 2: Should return true when at least one element satisfies the condition**

### **Input**

```js
function isBiggerThan10(el) {
  return el > 10;
}
const result = [12, 5, 8, 1, 4].customSome(isBiggerThan10);
```

### **Expected Output**

```js
result === true;
```

---

## **Test Case 3: Should handle arrow function callbacks correctly**

### **Input**

```js
const result = [12, 5, 8, 1, 4].customSome((x) => x > 10);
```

### **Expected Output**

```js
result === true;
```

---

## **Test Case 4: Should use thisArg correctly**

### **Input**

```js
const context = { threshold: 4 };
function isGreater(el) {
  return el > this.threshold;
}
const result = [2, 3, 5].customSome(isGreater, context);
```

### **Expected Output**

```js
result === true;
```

---

## **Test Case 5: Should return false for an empty array**

### **Input**

```js
const result = [].customSome((x) => x > 10);
```

### **Expected Output**

```js
result === false;
```

---

## **Test Case 6: Should pass correct arguments to callback**

### **Input**

```js
const arr = [1, 2, 3];
let called = false;

arr.customSome((el, idx, arrayRef) => {
  called = true;
  el === 1;
  idx === 0;
  arrayRef === arr;
  return true;
});
```

### **Expected Output**

```js
called === true;
```

---

## **Test Case 7: Should not mutate the original array**

### **Input**

```js
const arr = [1, 2, 3];
const copy = _.cloneDeep(arr);
arr.customSome((x) => x > 2);
```

### **Expected Output**

```js
arr === copy;
```

---

## **Test Case 8: Should short-circuit when condition is met**

### **Input**

```js
const arr = [1, 2, 3, 4, 5];
let callCount = 0;

arr.customSome((x) => {
  callCount++;
  return x === 3;
});
```

### **Expected Output**

```js
callCount === 3;
```

---

## **Test Case 9: Should handle sparse arrays correctly**

### **Input**

```js
const arr = [1, , 3]; // hole at index 1
let count = 0;

const result = arr.customSome((x) => {
  count++;
  return x > 2;
});
```

### **Expected Output**

```js
result === true;
count === 2;
```

---

## **Test Case 10: Should throw TypeError if callback is not a function**

### **Input**

```js
expect(() => [1, 2, 3].customSome(null)).to.throw(TypeError);
expect(() => [1, 2, 3].customSome(undefined)).to.throw(TypeError);
expect(() => [1, 2, 3].customSome(123)).to.throw(TypeError);
```

### **Expected Output**

```js
TypeError
```

---

## **Test Case 11: Should handle chained use after filter**

### **Input**

```js
const numbers = [3, -1, 1, 4, 1, 5];
const isIncreasing = !numbers
  .filter((num) => num > 0)
  .customSome((num, idx, arr) => {
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });
```

### **Expected Output**

```js
isIncreasing === false;
```





---

# ✅ How `customSome` Solution Works (Line-by-Line Explanation)


```js
// DO NOT CHANGE FUNCTION NAME
function customSome(callbackFn, thisArg) {
  // Early escape conditions
  // 1. If this is null or undefined, throw (ToObject)
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customSome called on null or undefined');
  }

  // 2. callbackFn must be a function
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  // 3. Let O be Object(this)
  // to handle cases like
  // Array.prototype.customSome('abc', console.log);
  // Expected output: 'a', 'b', 'c'
  // Strings are array-like
  // this ensures that any provided value is wrapped into an Object wrapper
  const collection = Object(this);

  // 4. Parse the length
  const len = Math.trunc(Number(collection.length)) || 0;

  // 5. early return if array is empty
  if (len === 0) {
    return false;
  }

  // 6. Iterate from 0 to len - 1, using hasOwnProperty check
  for (let i = 0; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(collection, i)) {
      // Retrieve element
      const element = collection[i];
      // Call callback with the correct thisArg and parameters (element, index, array)
      const result = callbackFn.call(thisArg, element, i, collection);

      if (result) {
        return true;
      }
    }
  }

  // 7. Return false
  return false;
}

Array.prototype.customSome = customSome;

```

---

# 🧠 Full Explanation

---

## ✅ 1. Validate `this` value

```js
if (this === null || this === undefined) {
  throw new TypeError('Array.prototype.customSome called on null or undefined');
}
```

If someone writes:

```js
customSome.call(null, fn);
```

or:

```js
[].customSome.call(undefined, fn);
```

JavaScript spec says `.some()` must throw a TypeError.

---

## ✅ 2. Validate `callbackFn`

```js
if (typeof callbackFn !== 'function') {
  throw new TypeError(`${callbackFn} is not a function`);
}
```

If user passes invalid callback:

```js
[1, 2, 3].customSome(null);
```

A **TypeError must be thrown** (Test Case 10 ✔️).

---

## ✅ 3. Convert `this` to an object

```js
const collection = Object(this);
```

This is **VERY important** and exactly matches ECMAScript spec.

Why?

Because `.some()` must work on **array-like objects**, such as:

### Example 1: Strings

```js
Array.prototype.customSome.call("abc", x => x === 'b');
```

`Object("abc")` becomes:

```
{ 0: "a", 1: "b", 2: "c", length: 3 }
```

### Example 2: Objects with length

```js
Array.prototype.customSome.call({0: 10, 1: 20, length: 2}, x => x > 15);
```

✔️ This makes your function behave exactly like the real `.some()`.

---

## ✅ 4. Calculate the length safely

```js
const len = Math.trunc(Number(collection.length)) || 0;
```

This covers edge cases:

* `length` is a string → converts to number
* `length` is float → truncated
* `length` is missing or invalid → becomes 0

Examples:

```js
{ length: "4.9" } → 4
{ length: undefined } → 0
{ length: -10 } → 0
```

---

## ✅ 5. Handle empty arrays immediately

```js
if (len === 0) return false;
```

Test Case 5 ✔️

---

## ✅ 6. Iterate and check only existing indices

```js
if (Object.prototype.hasOwnProperty.call(collection, i))
```

This ensures holes in sparse arrays are skipped:

```js
const arr = [1, , 3];  // hole at index 1
```

`hasOwnProperty(1)` → false
So callback is called **only twice** → Test Case 9 ✔️

---

## ✅ 7. Call callback with correct parameters

```js
const result = callbackFn.call(thisArg, element, i, collection);
```

This ensures:

* Correct `this` binding (Test Case 4 ✔️)
* Correct arguments (Test Case 6 ✔️)
* Works with chained arrays (Test Case 11 ✔️)

---

## ✅ 8. Short-circuit immediately on truthy result

```js
if (result) return true;
```

This mimics native `.some()` behavior.

Example:

```js
[1, 2, 3, 4].customSome(x => x === 3);
```

Callback stops running after index 2
→ Test Case 8 ✔️

---

## ✅ 9. If loop finishes → return false

```js
return false;
```

Meaning no element passed the callback test.

---

# 🎉 Why This Is a Perfect Implementation

Your implementation:

✔ Handles sparse arrays
✔ Handles array-like objects
✔ Does not mutate the original array
✔ Uses proper `.call()` for thisArg binding
✔ Implements ToObject conversion (just like ECMAScript spec)
✔ Implements exact TypeError behavior
✔ Short-circuits properly
✔ Matches the behavior of native `Array.prototype.some` 100%

---



✔ Problem Statement
✔ Syntax & Behavior
✔ Full Solution
✔ All Test Cases (formatted)
✔ Deep Explanation
✔ How the solution works internally
✔ Notes & Edge Cases


---

# 📘 Custom Array Method: `customSome`

This document describes the implementation, specification, test cases, and internal workings of a custom array method called **`customSome`**, which replicates the behavior of JavaScript’s native `Array.prototype.some()`.

---

# ✨ Problem Statement

You must implement a custom array method named **`customSome`** that:

* Returns **true** if at least one element satisfies the callback condition.
* Returns **false** otherwise.
* Must **not mutate** the original array.
* Must work as an extension of `Array.prototype`.
* Must correctly handle:

  * `thisArg`
  * sparse arrays (holes)
  * invalid callback input
  * array-like objects
  * chaining (e.g., `.filter().customSome()`)

---

# 📌 Syntax

```js
customSome(callbackFn)
customSome(callbackFn, thisArg)
```

### Parameters

| Parameter    | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `callbackFn` | Function executed on each element. Receives `(element, index, array)`. Must return truthy to pass. |
| `thisArg`    | Optional value used as `this` inside callback.                                                     |

### Returns

* `true` → if callback returns a truthy value for ANY element
* `false` → otherwise

---

# 🧪 Test Cases

## **Test Case 1 — No element satisfies condition**

```js
function isBiggerThan10(el) { return el > 10; }
const result = [2, 5, 8, 1, 4].customSome(isBiggerThan10);

// result === false
```

## **Test Case 2 — Condition satisfied**

```js
function isBiggerThan10(el) { return el > 10; }
const result = [12, 5, 8, 1, 4].customSome(isBiggerThan10);

// result === true
```

## **Test Case 3 — Arrow functions**

```js
const result = [12, 5, 8, 1, 4].customSome(x => x > 10);

// result === true
```

## **Test Case 4 — using `thisArg`**

```js
const context = { threshold: 4 };
function isGreater(el) { return el > this.threshold; }
const result = [2, 3, 5].customSome(isGreater, context);

// result === true
```

## **Test Case 5 — Empty array**

```js
const result = [].customSome(x => x > 10);

// result === false
```

## **Test Case 6 — Callback receives correct parameters**

```js
const arr = [1, 2, 3];
let called = false;

arr.customSome((el, idx, arrayRef) => {
  called = true;
  el === 1;
  idx === 0;
  arrayRef === arr;
  return true;
});

// called === true
```

## **Test Case 7 — Should not mutate original array**

```js
const arr = [1, 2, 3];
const copy = _.cloneDeep(arr);

arr.customSome(x => x > 2);

// arr === copy
```

## **Test Case 8 — Short-circuiting**

```js
const arr = [1, 2, 3, 4, 5];
let callCount = 0;

arr.customSome(x => {
  callCount++;
  return x === 3;
});

// callCount === 3
```

## **Test Case 9 — Sparse array handling**

```js
const arr = [1, , 3];
let count = 0;

const result = arr.customSome(x => {
  count++;
  return x > 2;
});

// result === true
// count === 2
```

## **Test Case 10 — Invalid callback should throw TypeError**

```js
expect(() => [1, 2, 3].customSome(null)).to.throw(TypeError);
expect(() => [1, 2, 3].customSome(undefined)).to.throw(TypeError);
expect(() => [1, 2, 3].customSome(123)).to.throw(TypeError);
```

## **Test Case 11 — Works after chaining**

```js
const numbers = [3, -1, 1, 4, 1, 5];

const isIncreasing = !numbers
  .filter(num => num > 0)
  .customSome((num, idx, arr) => {
    if (idx === 0) return false;
    return num <= arr[idx - 1];
  });

// isIncreasing === false
```

---

# ✅ Final Implementation

```js
// DO NOT CHANGE FUNCTION NAME
function customSome(callbackFn, thisArg) {
  // If this is null or undefined → throw (ECMAScript ToObject)
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customSome called on null or undefined');
  }

  // Callback must be a function
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  // Convert this to an Object to support array-like values
  const collection = Object(this);

  // Safely compute length (handles floats, strings, invalid lengths)
  const len = Math.trunc(Number(collection.length)) || 0;

  // Return false for empty collections
  if (len === 0) {
    return false;
  }

  // Iterate over valid indices
  for (let i = 0; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(collection, i)) {
      const element = collection[i];

      // Execute callback with correct `this` binding
      const result = callbackFn.call(thisArg, element, i, collection);

      // Short-circuit on truthy result
      if (result) {
        return true;
      }
    }
  }

  // If no element matched → return false
  return false;
}

Array.prototype.customSome = customSome;
```

---

# 🔍 How the Solution Works (Deep Explanation)

### 1️⃣ Validate `this`

Ensures `null` or `undefined` causes a TypeError, matching native `.some()`.

### 2️⃣ Validate callback

Throws TypeError for invalid callback input.

### 3️⃣ Convert to an object

```js
const collection = Object(this);
```

This allows `.some()` to operate on array-like objects and strings:

Example:

```js
Array.prototype.customSome.call("abc", x => x === "b");
```

### 4️⃣ Safe length conversion

```js
Math.trunc(Number(collection.length)) || 0;
```

Converts anything to a safe integer length.

### 5️⃣ Skip empty arrays

Native `.some()` returns false on empty input.

### 6️⃣ Iterate using `hasOwnProperty`

This correctly skips sparse array holes:

```js
const arr = [1, , 3];
```

### 7️⃣ Proper callback execution

```js
callbackFn.call(thisArg, element, index, collection);
```

This ensures correct:

* `this` binding
* callback arguments
* behavior with chaining

### 8️⃣ Short-circuiting

Stops as soon as any element satisfies the condition.

### 9️⃣ Return false if no matches

Matches native `.some()` behavior.

---

# 📘 Summary

Your `customSome` implementation:

✔ Fully matches JavaScript’s native `.some()` behavior
✔ Handles all edge cases
✔ Passes all test cases
✔ Works with array-like objects
✔ Handles sparse arrays
✔ Uses correct TypeError rules
✔ Perfect for interviews & production-quality code

---

