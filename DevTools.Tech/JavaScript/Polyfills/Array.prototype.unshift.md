# How to implement Array.prototype.unshift? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customUnshift** that mimics the behaviour of **Array.prototype.unshift** method.

---

## More about `Array.prototype.unshift`

The `unshift()` method:

- Adds one or more elements **to the beginning** of an array  
- Shifts existing elements to higher indexes  
- Returns the **new length** of the array  
- Mutates the original array

---

## Example

```js
const array = [1, 2, 3];

array.unshift(4, 5);

// prints [4, 5, 1, 2, 3]
console.print(array);
````

---

## Syntax

```js
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* … ,*/ elementN)
```

---

## Parameters

### **elementN**

Elements to be inserted at the **start** of the array.

---

## Return value

The **new length** of the array after the elements have been added.


---

# Solution

```js

function customUnshift() {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError(
      'Array.prototype.customUnshift called on null or undefined'
    );
  }

  var list = Object(this);
  var length = list.length || 0;
  var argumentsLength = arguments.length;

  if (!argumentsLength) {
    return length;
  }

  // moving current list elements
  for (let i = length - 1; i >= 0; i--) {
    if (i in list) {
      this[i + argumentsLength] = this[i];
    }

    delete this[i];
  }
  
  // add the new elements at the start
  for (let i = 0; i < argumentsLength; i++) {
    this[i] = arguments[i];
  }
  
  this.length = length + argumentsLength;

  return this.length;
}

Array.prototype.customUnshift = customUnshift;

```

---

# Test Cases


Test Case 1: Invoking customUnshift with this as null  
**Input:**  
```js
const input = [1, 2, 3];
````

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customUnshift.bind(null, 4)).to.throw(TypeError);
```

---

Test Case 2: Invoking customUnshift with this as undefined
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customUnshift.bind(undefined, 4)).to.throw(TypeError);
```

---

Test Case 3: `[1,2,3].customUnshift(4,5)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**
Array becomes:

```js
[4, 5, 1, 2, 3]
```

Length becomes:

```js
5
```

Assertions:

```js
const actualOutput = input.customUnshift(4, 5);
const expectedOutput = [4, 5, 1, 2, 3];
const isArrayUpdated = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(input.length).to.eql(5, `Expected array length should be 5 but found ${input.length}`);
```

---

Test Case 4: `[1,2,3].customUnshift()`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**
Array remains:

```js
[1, 2, 3]
```

Length remains:

```js
3
```

Assertions:

```js
const actualOutput = input.customUnshift();
const expectedOutput = [1, 2, 3];
const isArrayUpdated = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(input.length).to.eql(3, `Expected array length should be 3 but found ${input.length}`);
```

---

Test Case 5: Calling customUnshift() on non-array objects
**Input:**

```js
const input = { length: 3, unrelated: 'foo', 2: 4 };
```

Calling:

```js
const newLength = Array.prototype.customUnshift.call(input, 1, 2);
```

**Expected Output object:**

```js
{ 0: 1, 1: 2, 4: 4, length: 5, unrelated: 'foo' }
```

Assertions:

```js
const expectedOutput = { 0: 1, 1: 2, 4: 4, length: 5, unrelated: 'foo' };
const isObjectEqual = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isObjectEqual).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(newLength).to.eql(expectedOutput.length, `Expected ${expectedOutput} but found ${input}`);
```


