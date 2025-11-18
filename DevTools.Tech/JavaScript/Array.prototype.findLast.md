# How to implement Array.prototype.findLast? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customFindLast** that mimics the behaviour of **Array.prototype.findLast** method.

---

## More about `Array.prototype.findLast`

The **findLast()** method iterates the array **in reverse order** and returns the **value** of the first element that satisfies the provided testing function.  
If no elements satisfy the testing function, **undefined** is returned.

### Example
```js
const array = [1, 2, 3, 12, 13, 8];

const greaterThanTen = (element) => element > 10;

console.print(array.findLast(greaterThanTen));
// expected output: 13
````

---

## Syntax

The `customFindLast` takes **two parameters**:

### 1. callback function

Function to execute on each value in the array.
It receives the following arguments:

* **element** → The current element in the array
* **index** → The index of the current element
* **array** → The array that `customFindLast` was called on

The callback must return a **truthy value** to indicate a matching element has been found.

### 2. thisArg (Optional)

Object to use as `this` inside the callback function.

---

## Signature

```js
customFindLast(callback, thisArg)
```


---

# Solution

```js
function customFindLast(callback) {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.customFindLast called on null or undefined');
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
      return currentValue;
    }
  }

  return undefined;
}

Array.prototype.customFindLast = customFindLast;

```

----

Test Case 1: Invoking customFindLast with this as null  
Input:
```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12, 13, 8];
````

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFindLast.bind(null, greaterThanTen)).to.throw(TypeError);
```

---

Test Case 2:
`[1, 2, 3, 12, 13, 8].customFindLast(greaterThanTen, undefined)`
Input:

```js
const input = [1, 2, 3, 12, 13, 8];
```

Expected Output: **Should Throw TypeError**

```js
assertionLibrary.expect(input.customFindLast.bind(null, undefined)).to.throw(TypeError);
```

---

Test Case 3:
`[1, 2, 3, 12, 13, 8].customFindLast(greaterThanTen)`
Input:

```js
function greaterThanTen(element) {
  return element > 10;
}

const input = [1, 2, 3, 12, 13, 8];
```

Expected Output: **13**

```js
const actualOutput = input.customFindLast(greaterThanTen);
const expectedOutput = 13;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 4:
`[1, 2, 3, 12].customFindLast(greaterThanTwenty)`
Input:

```js
function greaterThanTwenty(element) {
  return element > 20;
}

const input = [1, 2, 3, 12];
```

Expected Output: **undefined**

```js
const actualOutput = input.customFindLast(greaterThanTwenty);
const expectedOutput = undefined;

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```

