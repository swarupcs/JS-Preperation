# How to implement Array.prototype.findIndex? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customFindIndex** that mimics the behaviour of **Array.prototype.findIndex** method.

---

## More about `Array.prototype.findIndex`

The **findIndex()** method returns the **index of the first element** in an array that satisfies the provided testing function.  
If no elements satisfy the testing function, **-1** is returned.

### Example
```js
const array = [1, 2, 3, 12, 13, 15];

const greaterThanTen = (element) => element > 10;

console.print(array.findIndex(greaterThanTen));
// expected output: 3
````

---

## Syntax

The `customFindIndex` takes **two parameters**:

### 1. callback function

Function to execute on each value in the array.
The function is called with the following arguments:

* **element** → Current element in the array
* **index** → Position of the current element
* **array** → The array that `customFindIndex` was called on

The callback must return a **truthy value** to indicate that a matching element has been found.

### 2. thisArg (Optional)

Object to use as `this` inside the callback.

---

## Signature

```js
customFindIndex(callback, thisArg)
```


---

```js
function customFindIndex(callback) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customFindIndex called on null or undefined');
  } else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  var list = Object(this);
  var thisArg = arguments[1];
  var currentValue = undefined;
  var length = list.length || 0;

  // write your solution below
  for (let i = 0; i < length; i++) {
    currentValue = list[i];

    if (callback.call(thisArg, currentValue, i, list)) {
      return i;
    }
  }

  return -1;
}

Array.prototype.customFindIndex = customFindIndex;


```

----


# Test Cases

Test Case 1: Invoking customFindIndex with this as null  
Input:
```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12, 13, 15];
````

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFindIndex.bind(null, greaterThanTen)).to.throw(TypeError);
```

---

Test Case 2:
`[1, 2, 3, 12, 13, 15].customFindIndex(greaterThanTen, undefined)`
Input:

```js
const input = [1, 2, 3, 12, 13, 15];
```

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFindIndex.bind(null, undefined)).to.throw(TypeError);
```

---

Test Case 3:
`[1, 2, 3, 12, 13, 15].customFindIndex(greaterThanTen)`
Input:

```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12, 13, 15];
```

Expected Output: **3**

```js
const actualOutput = input.customFindIndex(greaterThanTen);
const expectedOutput = 3;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 4:
`[1, 2, 3, 12].customFindIndex(greaterThanTwenty)`
Input:

```js
function greaterThanTwenty(element) {
  return element > 20;
}

const input = [1, 2, 3, 12];
```

Expected Output: **-1**

```js
const actualOutput = input.customFindIndex(greaterThanTwenty);
const expectedOutput = -1;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

