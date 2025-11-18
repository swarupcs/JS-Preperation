# How to implement Array.prototype.lastIndexOf? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customLastIndexOf** that mimics the behaviour of **Array.prototype.lastIndexOf**.

---

## More about `Array.prototype.lastIndexOf`

The `lastIndexOf()` method:

- Searches the array **backwards**
- Returns the **last index** where the given element appears
- Returns **-1** if the element is not found

It compares elements using **strict equality (`===`)** — no special handling for `NaN`.

---

## Examples

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

console.log(animals.lastIndexOf('Dodo', 2));
// expected output: 0
````

---

## Syntax

```js
customLastIndexOf(searchElement)
customLastIndexOf(searchElement, fromIndex)
```

---

## Parameters

### **searchElement**

The element to search for in the array.

---

### **fromIndex** (Optional)

Controls where the backward search begins:

* **Default:** `arr.length - 1`
* **If fromIndex ≥ arr.length:**
  → Treat as `arr.length - 1` (search full array)
* **If fromIndex ≥ 0:**
  → Start searching backwards from that index
* **If fromIndex < 0:**
  → Interpreted as `arr.length + fromIndex`
* **If `arr.length + fromIndex` < 0:**
  → Return **-1**, search is skipped

---

## Return value

A number:

* The **last index** where the element is found
* `-1` if the element is **not found**

---


```js
function customLastIndexOf(searchElement) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError(
      'Array.prototype.customFindLastIndex called on null or undefined'
    );
  }

  var list = Object(this);
  var fromIndex = arguments[1] || list.length - 1;
  var currentValue = undefined;

  for (let i = fromIndex; i >= 0; i--) {
    currentValue = list[i];

    if (currentValue === searchElement) {
      return i;
    }
  }

  return -1;
}

Array.prototype.customLastIndexOf = customLastIndexOf;


```

# Test Cases


Test Case 1: Invoking customLastIndexOf with this as null  
Input:  
```js
const input = [1, 2, 3, 12, 13, 8];
````

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customLastIndexOf.bind(null, 2)).to.throw(TypeError);
```

---

Test Case 2: Invoking customLastIndexOf with this as undefined
Input:

```js
const input = [1, 2, 3, 12, 13, 8];
```

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customLastIndexOf.bind(undefined, 2)).to.throw(TypeError);
```

---

Test Case 3:
`[1, 2, 3, 12, 13, 8].customLastIndexOf(3)`
Input:

```js
const input = [1, 2, 3, 12, 13, 8];
```

Expected Output: **2**

```js
const actualOutput = input.customLastIndexOf(3);
const expectedOutput = 2;
assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 4:
`[1, 2, 3, 12, 13, 15].customLastIndexOf(9)`
Input:

```js
const input = [1, 2, 3, 12, 13, 15];
```

Expected Output: **-1**

```js
const actualOutput = input.customLastIndexOf(9);
const expectedOutput = -1;
assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 5:
`[1, 2, 3, 12, 13, 15].customLastIndexOf(false)`
Input:

```js
const input = [1, 2, 3, 12, 13, 15];
```

Expected Output: **-1**

```js
const actualOutput = input.customLastIndexOf(false);
const expectedOutput = -1;
assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 6:
`[1, 2, 3, 12, 3, 15].customLastIndexOf(3, 3)`
Input:

```js
const input = [1, 2, 3, 12, 3, 15];
```

Expected Output: **2**

```js
const actualOutput = input.customLastIndexOf(3, 3);
const expectedOutput = 2;
assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

```markdown
```
