# How to implement Array.prototype.find? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customFind** that mimics the behaviour of **Array.prototype.find** method.

---

## More about `Array.prototype.find`

The **find()** method returns the **first element** in the array that satisfies the provided testing function.  
If no values satisfy the testing function, **undefined** is returned.

### Example
```js
const array = [5, 12, 8, 130, 44];
const found = array.customFind(element => element > 10);

// prints 12
console.print(found);
````

---

## Syntax

The `customFind` takes **two parameters**:

### 1. callback function

Function to execute on each element in the array.
It is called with the following arguments:

* **element** → The current element
* **index** → Position of the current element
* **array** → The array `customFind` was called on

The callback must return a **truthy value** to indicate a matching element has been found.

### 2. thisArg (Optional)

Object to use as **this** inside the callback.

---

## Sample Usage

```js
const input = [1, 2, 312];

function greaterThanTen(element, index, array) {
  return element > 10;
}

// customFind(callback, thisArg)
customFind(greaterThanTen, input);
```


```js
function customFind(callback) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.find called on null or undefined');
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
      return currentValue;
    }
  }

  return undefined;
}

Array.prototype.customFind = customFind;


```

---

# Test Cases

Test Case 1: Invoking customFind with this as null  
Input:
```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12];
````

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFind.bind(null, greaterThanTen)).to.throw(TypeError);
```

---

Test Case 2:
`[1, 2, 3, 12].customFind(greaterThanTen, undefined)`
Input:

```js
const input = [1, 2, 3, 12];
```

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFind.bind(null, undefined)).to.throw(TypeError);
```

---

Test Case 3:
`[1, 2, 3, 12].customFind(greaterThanTen)`
Input:

```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12];
```

Expected Output: **12**

```js
const actualOutput = input.customFind(greaterThanTen);
const expectedOutput = 12;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 4:
`[1, 2, 3, 12].customFind(greaterThanTwenty)`
Input:

```js
function greaterThanTwenty(element) {
  return element > 20;
}

const input = [1, 2, 3, 12];
```

Expected Output: **undefined**

```js
const actualOutput = input.customFind(greaterThanTwenty);
const expectedOutput = undefined;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```


