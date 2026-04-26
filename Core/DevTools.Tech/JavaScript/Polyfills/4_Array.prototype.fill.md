# How to implement Array.prototype.fill? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customFill** that mimics the behaviour of **Array.prototype.fill** method.

---

## More about `Array.prototype.fill`

The `fill()` method **changes all elements** in an array to a given static value:

- Starts filling from a **start index** (default: `0`)
- Stops before an **end index** (default: `array.length`)
- Returns the **same modified array**

If the value is an **object**, every filled index will reference the **same object**.

---

## Examples

```js
const array = [1, 2, 3, 4];

// Fill with 0 from position 2 to 4
console.log(array.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array.fill(6));
// expected output: [6, 6, 6, 6]
````

---

## Syntax

```js
fill(value)
fill(value, start)
fill(value, start, end)
```

---

## Parameters

### **value**

The value used to fill array elements.
If this is an object, **all filled slots reference the same object**.

---

### **start** (Optional)

The index at which filling begins.

* Defaults to `0`
* If negative → `start + array.length`
* If still < 0 → becomes `0`
* If ≥ array.length → nothing is filled

---

### **end** (Optional)

The index at which filling stops (not included).

* Defaults to array length
* If negative → `end + array.length`
* If still < 0 → becomes `0`
* If > array.length → becomes array length
* If `end <= start` → nothing is filled

---

## Return value

The **same array**, after filling it with the provided value.


---

```js
function customFill(value, start, end) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.every called on null or undefined');
  }

  const list = Object(this);
  const length = list.length || 0;

  let relativeStart = parseInt(start, 10) || 0;
  let relativeEnd = end === undefined ? length : parseInt(end, 10) || 0;

  if (relativeStart < 0) {
    relativeStart = Math.max(relativeStart + length, 0);
  } else {
    relativeStart = Math.min(relativeStart, length);
  }

  if (relativeEnd < 0) {
    relativeEnd = Math.max(relativeEnd + length, 0);
  } else {
    relativeEnd = Math.min(relativeEnd, length);
  }
  
  for (let i = relativeStart; i < relativeEnd; i++) {
    list[i] = value;
  }

  return list;
}

Array.prototype.customFill = customFill;


```

# Test Cases

````markdown
Test Case 1: Invoking customFill with this as null  
**Input:**  
```js
const input = [1, 2, 3];
````

**Expected Output:**
Should Throw **TypeError**

```js
assertionLibrary.expect(input.customFill.bind(null, 4)).to.throw(TypeError);
```

---

Test Case 2: Invoking customFill with this as undefined
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**
Should Throw **TypeError**

```js
assertionLibrary.expect(input.customFill.bind(undefined, 4)).to.throw(TypeError);
```

---

Test Case 3: `[1,2,3].customFill(0)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**


```js
[0, 0, 0]
```

Assertions:

```js
const actualOutput = input.customFill(0);
const expectedOutput = [0, 0, 0];
assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
assertionLibrary.expect(actualOutput).to.eql(input, `Expected ${actualOutput} and ${input} to be same`);
```

---

Test Case 4: `[1,2,3].customFill(4, 1)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[1, 4, 4]
```

---

Test Case 5: `[1,2,3].customFill(4, 1, 2)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[1, 4, 3]
```

---

Test Case 6: `[1,2,3].customFill(4, 1, 1)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[1, 2, 3]
```

---

Test Case 7: `[1,2,3].customFill(4, 3, 3)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[1, 2, 3]
```

---

Test Case 8: `[1,2,3].customFill(4, -3, -2)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[4, 2, 3]
```

---

Test Case 9: `[1,2,3].customFill(4, NaN, NaN)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[1, 2, 3]
```

---

Test Case 10: `[1,2,3].customFill(4, 3, 5)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[1, 2, 3]
```

---

Test Case 11: `Array(3).customFill(4)`
**Input:**

```js
Array(3).customFill(4);
```

**Expected Output:**

```js
[4, 4, 4]
```

---

Test Case 12: Calling customFill() on non-array objects
**Input:**

```js
const actualOutput = Array.prototype.customFill.call({ length: 2 }, 1);
```

**Expected Output:**

```js
{ 0: 1, 1: 1, length: 2 }
```

---

Test Case 13: Single object reference in all filled slots
**Input:**

```js
var arr = [1, 2];
arr.customFill({ v: 1 });
arr[0].v = 2;
```

**Expected Output:**

```js
[ { v: 2 }, { v: 2 } ]
```

Assertions:

```js
const areAllObjectsSame = _.every(arr, (el) => el.v === 2);
assertionLibrary.expect(areAllObjectsSame).to.eql(true, `Expected all slots to have same object but found different`);
```

