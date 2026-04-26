# How to implement Array.prototype.findLastIndex? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customFindLastIndex** that mimics the behaviour of **Array.prototype.findLastIndex** method.

---

## More about `Array.prototype.findLastIndex`

The **findLastIndex()** method iterates the array **in reverse order** and returns the **index of the first element (from the end)** that satisfies the provided testing function.  
If no elements satisfy the testing function, **-1** is returned.

### Examples
```js
const array = [1, 2, 3, 12, 13, 8];

const greaterThanTen = (element) => element > 10;

console.print(array.findLastIndex(greaterThanTen));
// expected output: 4
````

---

## Syntax

The `customFindLastIndex` takes **two parameters**:

### 1. callback function

Function to execute on each value in the array.
The function is called with the following arguments:

* **element** → The current element in the array.
* **index** → The index (position) of the current element in the array.
* **array** → The array that `customFindLastIndex` was called on.

The callback must return a **truthy value** to indicate a matching element has been found.

### 2. thisArg (Optional)

Object to use as `this` inside callbackFn.

---

## Signature

```js
customFindLastIndex(callback, thisArg)
```


# Solution

```js
function customFindLastIndex(callback) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customFindLastIndex called on null or undefined');
  } else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  var list = Object(this);
  var thisArg = arguments[1];
  var currentValue = undefined;
  var length = list.length;

  for (let i = length; i >= 0; i--) {
    currentValue = list[i];

    if (callback.call(thisArg, currentValue, i, list)) {
      return i;
    }
  }

  return -1;
}

Array.prototype.customFindLastIndex = customFindLastIndex;


```

# Test Cases



Test Case 1: Invoking customFindLastIndex with this as null  
Input:
```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12, 13, 8];
````

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFindLastIndex.bind(null, greaterThanTen)).to.throw(TypeError);
```

---

Test Case 2:
`[1, 2, 3, 12, 13, 8].customFindLastIndex(greaterThanTen, undefined)`
Input:

```js
const input = [1, 2, 3, 12, 13, 8];
```

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFindLastIndex.bind(null, undefined)).to.throw(TypeError);
```

---

Test Case 3:
`[1, 2, 3, 12, 13, 8].customFindLastIndex(greaterThanTen)`
Input:

```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12, 13, 8];
```

Expected Output: **4**

```js
const actualOutput = input.customFindLastIndex(greaterThanTen);
const expectedOutput = 4;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 4:
`[1, 2, 3, 12, 13, 15].customFindLastIndex(greaterThanTwenty)`
Input:

```js
function greaterThanTwenty(element) {
  return element > 20;
}

const input = [1, 2, 3, 12, 13, 15];
```

Expected Output: **-1**

```js
const actualOutput = input.customFindLastIndex(greaterThanTwenty);
const expectedOutput = -1;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```


