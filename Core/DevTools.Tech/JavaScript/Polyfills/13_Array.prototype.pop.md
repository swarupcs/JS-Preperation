# How to implement Array.prototype.pop? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customPop** that mimics the behaviour of **Array.prototype.pop** method.

---

## More about `Array.prototype.pop`

The `pop()` method:

- Removes the **last element** from an array  
- Returns the **removed element**  
- Mutates the array by reducing its `length` by 1  
- Returns **undefined** when called on an **empty array**

---

## Example

```js
const array = [1, 2, 3];
const popped = array.pop();

// prints 3
console.print(popped);

// prints [1, 2]
console.print(array);
````

---

## Syntax

```js
pop()
```

---

## Return value

* The removed **last element**
* `undefined` if the array is **empty**


---

# Solution

```js

function customPop() {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError(
      'Array.prototype.customPop called on null or undefined'
    );
  }

  var list = Object(this);
  var length = list.length || 0;

  if (!length) {
    return undefined;
  }

  var element = this[length - 1];
  
  delete this[length - 1];
  this.length = length - 1;

  return element;
}

Array.prototype.customPop = customPop;

```
----

# Test Cases

````markdown
Test Case 1: Invoking customPop with this as null  
**Input:**  
```js
const input = [1, 2, 3];
````

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.pop.bind(null)).to.throw(TypeError);
```

---

Test Case 2: Invoking customPop with this as undefined
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customPop.bind(undefined)).to.throw(TypeError);
```

---

Test Case 3: `[1,2,3].customPop()`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

* Popped Value: `3`
* Updated array: `[1, 2]`
* New length: `2`

Assertions:

```js
const actualOutput = input.customPop();
const expectedOutput = 3;
const expectedArray = [1, 2];
const isArrayUpdated = _.isEqual(actualOutput, expectedOutput);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${actualOutput}`);
assertionLibrary.expect(input).to.eql(expectedArray, `Expected ${expectedArray} but found ${input}`);
assertionLibrary.expect(input.length).to.eql(expectedArray.length, `Expected array length should be ${expectedArray.length} but found ${input.length}`);
```

---

Test Case 4: `[].customPop()`
**Input:**

```js
const input = [];
```

**Expected Output:**

* Popped value: `undefined`
* Array remains `[]`
* Length: `0`

Assertions:

```js
const actualOutput = input.customPop();
const expectedOutput = undefined;
const expectedArray = [];
const isArrayUpdated = _.isEqual(actualOutput, expectedOutput);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${actualOutput}`);
assertionLibrary.expect(input).to.eql(expectedArray, `Expected ${expectedArray} but found ${input}`);
assertionLibrary.expect(input.length).to.eql(expectedArray.length, `Expected array length should be ${expectedArray.length} but found ${input.length}`);
```

---

Test Case 5: Calling customPop() on non-array objects
**Input:**

```js
const input = { length: 3, unrelated: 'foo', 2: 4 };
```

**Expected Output:**

* Popped value: `4`
* Updated object:

```js
{ length: 2, unrelated: 'foo' }
```

Assertions:

```js
const actualOutput = Array.prototype.customPop.call(input);
const expectedOutput = 4;
const expectedObject = {
  length: 2,
  unrelated: 'foo',
};

const isObjectEqual = _.isEqual(expectedObject, input);

assertionLibrary.expect(isObjectEqual).to.eql(true, `Expected ${expectedObject} but found ${input}`);
assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected popped value ${expectedOutput} but found ${actualOutput}`);
assertionLibrary.expect(input.length).to.eql(expectedObject.length, `Expected length be ${expectedObject.length} but found ${input.length}`);
```


