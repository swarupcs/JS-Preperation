# How to implement Array.prototype.filter? JavaScript Interview Question | Array Polyfills


In this question, the candidate needs to implement a function **customFilter** that mimics the behaviour of **Array.prototype.filter** method.


---

## More about `Array.prototype.filter`


```
The `filter()` method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test implemented by the provided function.
````
---

## Syntax

```js
customFilter(callbackFn);
customFilter(callbackFn, thisArg);
````

---

## Parameters

### **callbackFn**

A function to execute for each element in the array.
It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

The function receives the following arguments:

* **element** — The current element being processed
* **index** — The index of the current element
* **array** — The array `filter()` was called upon

### **thisArg** (Optional)

A value to use as `this` when executing `callbackFn`.

---

## Return value

A shallow copy of the given array containing just the elements that pass the test.
If no elements pass the test, an empty array is returned.

---

## Example

```js
const numbers = [12, 5, 8, 130, 44];

function isGreaterThanTen(value) {
    return value > 10;
}

const filteredNumbers = numbers.customFilter(isGreaterThanTen);
console.log(filteredNumbers);
// expected output: Array [12, 130, 44];
```
---


Here is the **correct and complete implementation** of **customFilter** that behaves exactly like **Array.prototype.filter**, including:

* working on array-like objects
* passing `element`, `index`, `array` to callback
* supporting `thisArg`
* skipping holes in sparse arrays (like native `filter`)
* returning a **new array** without modifying the original

---

# ✅ **Solution**

---

# ✅ **Final `customFilter` Code**

```js
// DO NOT CHANGE FUNCTION NAME
function customFilter(callbackFn, thisArg) {
  // 1. Validate callback
  if (typeof callbackFn !== "function") {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  // 2. Convert `this` to object (supports array-like structures)
  const collection = Object(this);

  // 3. Force length into a valid 32-bit unsigned integer
  const length = collection.length >>> 0;

  // 4. Prepare result array
  const result = [];

  // 5. Iterate through elements
  for (let i = 0; i < length; i++) {

    // Skip sparse array holes (matches native filter behavior)
    if (!(i in collection)) continue;

    const element = collection[i];

    // Apply callback with thisArg binding
    const shouldInclude = callbackFn.call(thisArg, element, i, collection);

    // If truthy → keep element in result
    if (shouldInclude) {
      result.push(element);
    }
  }

  return result;
}
```

---

# 📘 **Step-by-Step Explanation**

Below is a breakdown of how this function mimics **Array.prototype.filter** exactly.

---

## **1. Callback Validation**

```js
if (typeof callbackFn !== "function") {
  throw new TypeError(`${callbackFn} is not a function`);
}
```

Native `filter` throws a `TypeError` when:

* callback is `null`
* callback is `undefined`
* callback is a number
* callback is a string
* callback is any non-function

Your test cases (11–14) require this.

---

## **2. Convert `this` into an Object**

```js
const collection = Object(this);
```

Why?

* `filter` works for **arrays** and **array-like objects**
* It also prevents errors if `this` is a string or custom object

This matches native JS behavior.

---

## **3. Normalize Array Length**

```js
const length = collection.length >>> 0;
```

`>>> 0` converts length to a **32-bit unsigned integer**, which:

* avoids negative lengths
* avoids float values
* ensures consistent behavior

This is exactly how JavaScript arrays internally manage length.

---

## **4. Prepare the Result Array**

```js
const result = [];
```

The filter method **always returns a new array**, never mutates original — required for test case 10.

---

## **5. Main Filtering Loop**

```js
for (let i = 0; i < length; i++) {
```

Standard iteration from index 0 to `length - 1`.

---

## **6. Skip Sparse Array Holes**

```js
if (!(i in collection)) continue;
```

Example:

```js
const arr = [1, , 3];
```

Index `1` is a *hole* (undefined but not present).

Native `filter` **skips this index**, so we must do the same.

This covers test cases **16, 17, 18**.

---

## **7. Get the Element**

```js
const element = collection[i];
```

Normal element access.

---

## **8. Execute Callback With `thisArg`**

```js
const shouldInclude = callbackFn.call(thisArg, element, i, collection);
```

Callback receives:

* element
* index
* full array

Just like native `filter`.

Supports `thisArg`, covering test case **8**.

---

## **9. Push Only Truthy Results**

```js
if (shouldInclude) {
  result.push(element);
}
```

Only elements where callback returns truthy are included.

---

## **10. Return Final Result**

```js
return result;
```

---

# 🎉 **This Implementation Passes ALL Test Cases**

✔ Filtering logic
✔ Sparse array support
✔ Error handling
✔ thisArg binding
✔ No mutation of original array
✔ Works with strings and mixed types
✔ Array-like structures support

---

# Want the final version that attaches to `Array.prototype`?

```js
Array.prototype.customFilter = customFilter;
```

Just tell me!


---

## Follow up - 

✅ customMap
✅ customReduce
✅ customForEach
✅ customSome
✅ customEvery





----

## Test Cases


Test Case 1: Should filter numbers greater than 10  
**Input:**
```js
const numbers = [12, 5, 8, 130, 44];
function isGreaterThanTen(value) {
  return value > 10;
}
````

**Expected Output:**
`[12, 130, 44]`

---

Test Case 2: Should return an empty array if no elements match the condition
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
function isGreaterThanTen(value) {
  return value > 10;
}
```

**Expected Output:**
`[]`

---

Test Case 3: Should handle an empty array and return an empty array
**Input:**

```js
const numbers = [];
function isGreaterThanTen(value) {
  return value > 10;
}
```

**Expected Output:**
`[]`

---

Test Case 4: Should filter even numbers
**Input:**

```js
const numbers = [1, 2, 3, 4, 5, 6];
function isEven(value) {
  return value % 2 === 0;
}
```

**Expected Output:**
`[2, 4, 6]`

---

Test Case 5: Should filter using an index-based condition
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
function filterByIndex(value, index) {
  return index % 2 === 1;
}
```

**Expected Output:**
`[2, 4]`

---

Test Case 6: Should filter using array length within the callback
**Input:**

```js
const numbers = [12, 5, 8, 130, 44];
function filterUsingArrayLength(value, _, array) {
  return value > array.length;
}
```

**Expected Output:**
`[12, 8, 130, 44]`

---

Test Case 7: Should work with strings and filter words starting with "A"
**Input:**

```js
const fruits = ['Apple', 'Banana', 'Apricot', 'Mango'];
function startsWithA(word) {
  return word.startsWith('A');
}
```

**Expected Output:**
`['Apple', 'Apricot']`

---

Test Case 8: Should bind thisArg and use it in callback function
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
const context = { min: 3 };
function filterUsingThis(value) {
  return value > this.min;
}
```

**Expected Output:**
`[4, 5]`

---

Test Case 9: Should handle filtering elements of mixed types
**Input:**

```js
const mixedArray = [0, 'hello', false, true, null, undefined];
function truthyValues(value) {
  return Boolean(value);
}
```

**Expected Output:**
`['hello', true]`

---

Test Case 10: Should not modify the original array
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
const originalArray = [...numbers];
function isEven(value) {
  return value % 2 === 0;
}
```

**Expected Output:**
Original array should remain unchanged

---

Test Case 11: Should throw TypeError when callback is null
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
const input = null;
const errorMessage = `${input} is not a function`;
```

**Expected Output:**
Should throw **TypeError**

---

Test Case 12: Should throw TypeError when callback is undefined
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
const input = undefined;
const errorMessage = `${input} is not a function`;
```

**Expected Output:**
Should throw **TypeError**

---

Test Case 13: Should throw TypeError when callback is a number
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
const input = 1;
const errorMessage = `${input} is not a function`;
```

**Expected Output:**
Should throw **TypeError**

---

Test Case 14: Should throw TypeError when callback is a string
**Input:**

```js
const numbers = [1, 2, 3, 4, 5];
const input = "abc";
const errorMessage = `${input} is not a function`;
```

**Expected Output:**
Should throw **TypeError**

---

Test Case 16: Should skip holes in sparse arrays
**Input:**

```js
const sparseArray = [1, , 3];
function isGreaterThanTwo(value) {
  return value > 2;
}
```

**Expected Output:**
`[3]`

---

Test Case 17: Should return empty array if all elements are in holes
**Input:**

```js
const sparseArray = [, , ,];
function isTruthy(value) {
  return Boolean(value);
}
```

**Expected Output:**
`[]`

---

Test Case 18: Should filter sparse arrays normally for non-empty slots
**Input:**

```js
const sparseArray = [1, , 3, 5];
function isGreaterThanTwo(value) {
  return value > 2;
}
```

**Expected Output:**
`[3, 5]`




