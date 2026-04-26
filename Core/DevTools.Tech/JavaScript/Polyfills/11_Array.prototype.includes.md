# How to implement Array.prototype.includes? JavaScript Interview Question | Problem Solving | JavaScript Polyfills

In this question, the candidate needs to implement a function **customIncludes** that mimics the behaviour of **Array.prototype.includes** method.

---

## More about `Array.prototype.includes`

The `includes()` method checks whether an array contains a specific value and returns:

- `true` → if the value **is found**
- `false` → otherwise

It compares values using **SameValueZero** (similar to `===` but treats `NaN === NaN` as true).

---

## Example

```js
const array = [5, 12, 8, 130, 44];
const found = array.customIncludes(5);

// prints true
console.print(found);
````

---

## Syntax

```js
array.customIncludes(searchElement);
array.customIncludes(searchElement, fromIndex);
```

---

## Parameters

### **searchElement**

The value to search for in the array.

---

### **fromIndex** (Optional)

Starting index for the search:

* Defaults to `0`
* If **positive** → start from that index
* If **negative** → start from `array.length + fromIndex`
* If final index is still `< 0` → search begins at index `0`

---

## Return value

A boolean:

* `true` → if the value **exists** within the array
* `false` → if the value **does not exist** within the array
* Only the portion of the array starting from `fromIndex` is checked


---

# Solution

```js
function sameValueZero(x, y) {
  return (
    x === y ||
    (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
  );
}

function customIncludes(searchElement) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customIncludes called on null or undefined');
  }

  var list = Object(this);

  // can be written in a shorter from length.length >>> 0
  var length = list.length || 0;

  // return if length of array is 0
  if (length === 0) {
    return false;
  }

  // can be written in a shorter form arguments[1] | 0
  var fromIndex = parseInt(arguments[1]) || 0;

  // return false if fromIndex >= length
  if (fromIndex >= length) {
    return false;
  }

  // computing the fromIndex
  // [1,2,3,4].includes(2, -100)
  // -> Math.max(-100 >= 0 ? -100 : 4 - Math.abs(-100), 0)
  // -> Math.max(4 - 100, 0)
  // -> Math.max(-96, 0)
  // -> 0 -> search entire array

  // [1,2,3,4].includes(2, -1)
  // -> Math.max(-1 >= 0 ? -1 : 4 - Math.abs(-1), 0)
  // -> Math.max(4 - 1, 0)
  // -> Math.max(3, 0)
  // -> 3 -> search from index 3 to length - 1

  // [1,2,3,4].includes(2)
  // -> Math.max(0 >= 0 ? 0 : 4 - Math.abs(2), 0)
  // -> Math.max(0, 0)
  // -> 0 -> search from index 0 to length - 1
  var computedFromIndex = Math.max(
    fromIndex >= 0 ? fromIndex : length - Math.abs(fromIndex),
    0
  );

  var found = false;

  for (let i = computedFromIndex; i < length; i++) {
    if (sameValueZero(list[i], searchElement)) {
      found = true;
      break;
    }
  }

  return found;
}

Array.prototype.customIncludes = customIncludes;


```

# Test Cases


Test Case 1: Invoking customIncludes with this as null  
**Input:**  
```js
const input = [1, 2, 3, 12];
````

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customIncludes.bind(null, 3)).to.throw(TypeError);
```

---

Test Case 2: Invoking customIncludes with this as undefined
**Input:**

```js
const input = [1, 2, 3, 12];
```

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customIncludes.bind(undefined, 3)).to.throw(TypeError);
```

---

Test Case 3: `[1,2,3,12].customIncludes(3)`
**Input:**

```js
const input = [1, 2, 3, 12];
```

**Expected Output:**

```js
true
```

---

Test Case 4: `[1,2,3,12].customIncludes(15)`
**Input:**

```js
const input = [1, 2, 3, 12];
```

**Expected Output:**

```js
false
```

---

Test Case 5: `[1,3,12,2].customIncludes(2, 2)`
**Input:**

```js
const input = [1, 3, 12, 2];
```

**Expected Output:**

```js
true
```

---

Test Case 6: `["1","3","12","2"].customIncludes(3)`
**Input:**

```js
const input = ['1', '3', '12', '2'];
```

**Expected Output:**

```js
false
```

---

Test Case 7: `[1,3,12,2,NaN].customIncludes(NaN)`
**Input:**

```js
const input = [1, 3, 12, 2, NaN];
```

**Expected Output:**

```js
true
```

---

Test Case 8: `[1,3,12,2].customIncludes(2, 4)`
(fromIndex >= array length)
**Input:**

```js
const input = [1, 3, 12, 2];
```

**Expected Output:**

```js
false
```

---

Test Case 9: `[1,2,3,12].customIncludes(2, -100)`
(computed index < 0 → start at 0)
**Input:**

```js
const input = [1, 2, 3, 12];
```

**Expected Output:**

```js
true
```

---

Test Case 10: `[1,2,3,12].customIncludes(2, -1)`
(start index = length - 1 = 3 → 2 not found at index 3)
**Input:**

```js
const input = [1, 2, 3, 12];
```

**Expected Output:**

```js
false
```

---

Test Case 11: `[1,,3,12].customIncludes(undefined)`
(Sparse array: empty slot treated as undefined)
**Input:**

```js
const input = [1, , 3, 12];
```

**Expected Output:**

```js
true
```

---

Test Case 12: `Array.prototype.customIncludes.call({ length: 3, 0: 2, 1: 3, 2: 4 }, 2)`
**Expected Output:**

```js
true
```

---

Test Case 13: `Array.prototype.customIncludes.call({ length: 3, 0: 2, 1: 3, 2: 4 }, 1)`
**Expected Output:**

```js
false
```

---

Test Case 14: `[].customIncludes(1)`
**Expected Output:**

```js
false
```


