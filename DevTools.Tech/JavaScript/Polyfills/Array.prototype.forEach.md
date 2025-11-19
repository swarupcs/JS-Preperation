
---

# 📌 Problem Statement — Implement `customForEach`

You need to implement a custom array method called **`customForEach`** that behaves exactly like JavaScript’s built-in `Array.prototype.forEach`.

This method should:

* Execute a callback once for each element in the array.
* Not mutate the original array.
* Support sparse arrays (skip missing indexes).
* Work correctly when added to `Array.prototype`.
* Respect `thisArg` when provided.
* Throw proper errors for invalid inputs.

---

## 🧩 **Syntax**

```js
customForEach(callbackFn)
customForEach(callbackFn, thisArg)
```

---

## 📝 **Arguments**

### **callbackFn**

A function executed for each array element. It receives three arguments:

1. `element` → current element
2. `index` → index of current element
3. `array` → the array on which customForEach is called

Return value of callback is ignored.

### **thisArg** (Optional)

Value to use as `this` inside `callbackFn`.

---

## 🔁 **Returns**

`undefined`

---

# 📘 Examples

---

## **Example 1**

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.customForEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0
```

---

## **Example 2**

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];

items.customForEach((item) => {
  copyItems.push(item);
});

// copyItems: ["item1", "item2", "item3"]
```

---

## **Example 3**

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// Notice that index 2 is skipped due to no value at that index.
[2, 5, , 9].customForEach(logArrayElements);
```

**Logs:**

```
a[0] = 2
a[1] = 5
a[3] = 9
```

---

## **Example 4 — Using thisArg**

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions have their own this bindings.
    array.customForEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

---

## ⚠️ Note on Error Handling

You must handle edge cases, including:

* Non-function `callbackFn` → throw `TypeError`
* `null` or `undefined` as context (`this`) → throw error
* Invalid array-like object structure

---


```js
// DO NOT CHANGE FUNCTION NAME
function customForEach(callbackFn, thisArg) {
  // Early escape conditions
  // 1. If this is null or undefined, throw (ToObject)
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customForEach called on null or undefined');
  }

  // 2. callbackFn must be a function
  if (typeof callbackFn !== 'function') {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  // 3. Let O be Object(this)
  // to handle cases like
  // Array.prototype.customForEach('abc', console.log);
  // Expected output: 'a', 'b', 'c'
  // Strings are array-like
  // this ensures that any provided value is wrapped into an Object wrapper
  const collection = Object(this);

  // 4. Parse the length
  const len = Math.trunc(Number(collection.length)) || 0;

  // 5. Iterate from 0 to len - 1, using HasProperty check (i in O)
  for (let i = 0; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(collection, i)) {
      // Retrieve element
      const element = collection[i];
      // Call callback with the correct thisArg and parameters (element, index, array)
      // NOTE: we intentionally do NOT await the callback even if it returns a Promise
      callbackFn.call(thisArg, element, i, collection);
    }
  }

  // 6. Return undefined
  return undefined;
}

Array.prototype.customForEach = customForEach;


```


---

# ✅ Test Cases for `customForEach`

---

## **🔹 Test Case 1 — Should execute callback for each element in array**

**Input:**

```js
const ratings = [5, 4, 5];
let sum = 0;

ratings.customForEach((rating) => {
  sum += rating;
});
```

**Expected Output:**
Sum equals **14**

```js
assertionLibrary(sum).to.eql(14);
```

---

## **🔹 Test Case 2 — Should allow modification through callback like native forEach**

**Input:**

```js
const arr = [1, 2, 3];
const expected = [10, 20, 30];

arr.customForEach((x, i, a) => {
  a[i] = x * 10; // modifying original array
});
```

**Expected Output:**
Array should be modified via callback.

```js
assertionLibrary(arr).to.eql(expected);
```

---

## **🔹 Test Case 3 — Should skip holes in sparse arrays**

**Input:**

```js
const arr = [2, 5, , 9];
const indices = [];

arr.customForEach((el, idx) => {
  indices.push(idx);
});
```

**Expected Output:**
Only defined indices processed → `[0, 1, 3]`

```js
assertionLibrary(indices).to.eql([0, 1, 3]);
```

---

## **🔹 Test Case 4 — Should correctly bind thisArg**

**Input:**

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    array.customForEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
```

**Expected Output:**

```js
assertionLibrary(obj.count).to.eql(3);
assertionLibrary(obj.sum).to.eql(16);
```

---

## **🔹 Test Case 5 — Callback should receive correct parameters**

**Input:**

```js
const arr = ['a', 'b', 'c'];
const received = [];

arr.customForEach((el, idx, arrayRef) => {
  received.push([el, idx, arrayRef]);
});
```

**Expected Output:**

* callback called 3 times
* each receives: `(element, index, array)`

```js
assertionLibrary(received.length).to.eql(3);
assertionLibrary(received[0][0]).to.eql('a');
assertionLibrary(received[1][1]).to.eql(1);
assertionLibrary(received[2][2]).to.eql(arr);
```

---

## **🔹 Test Case 6 — Should return undefined**

**Input:**

```js
const arr = [10, 20, 30];
const result = arr.customForEach(() => {});
```

**Expected Output:**

```js
assertionLibrary(result).to.eql(undefined);
```

---

## **🔹 Test Case 7 — Async callback behavior (non-awaited)**

**Input:**

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.customForEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});
```

**Expected Output:**
Async callbacks not awaited → `sum` remains **0**

```js
assertionLibrary(sum).to.eql(0);
```

---

## **🔹 Test Case 8 — Should handle empty arrays gracefully**

**Input:**

```js
const arr = [];
let count = 0;

arr.customForEach(() => count++);
```

**Expected Output:**
Callback never invoked.

```js
assertionLibrary(count).to.eql(0);
```

---

## **🔹 Test Case 9 — Should ignore non-numeric keys in array**

**Input:**

```js
const arr = [1, 2, 3];
arr.extra = 99; // custom property
let total = 0;

arr.customForEach((val) => {
  total += val;
});
```

**Expected Output:**
Only numeric indices processed → total = **6**

```js
assertionLibrary(total).to.eql(6);
```

---

## **🔹 Test Case 10 — Should throw TypeError if callbackFn is not a function**

**Input:**

```js
const arr = [1, 2, 3];
```

**Expected Output:**
Must throw `TypeError`

```js
assertionLibrary(() => arr.customForEach(null)).to.throw(TypeError);
assertionLibrary(() => arr.customForEach('notFn')).to.throw(TypeError);
```

---


