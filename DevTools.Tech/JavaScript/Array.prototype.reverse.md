# How to implement Array.prototype.reverse? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customReverse** that mimics the behaviour of **Array.prototype.reverse** method.

---

## More about `Array.prototype.reverse`

The `reverse()` method reverses an array **in place** and returns the **same array reference**.

- The first element becomes the last.
- The last element becomes the first.
- The original array is mutated.

---

## Examples

```js
const array = ['one', 'two', 'three'];
console.log('array:', array);
// expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array:', array);
// expected output: "array:" Array ["three", "two", "one"]
````

---

## Syntax

```js
reverse()
```

---

## Return value

A reference to the **original array**, now reversed.
The reversal happens **in place** — no new array is created.

---

# Solution

```js
// Solution based on
// https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reverse

function customReverse() {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.every called on null or undefined');
  }

  const list = Object(this);
  const length = list.length || 0;

  if (!length) {
    return this;
  }

  const mid = parseInt(length / 2);
  let temp;
  let i = 0;
  let j;

  while (i < mid) {
    j = length - i - 1;
    const lowerExists = Object.prototype.hasOwnProperty.call(list, i);
    const upperExists = Object.prototype.hasOwnProperty.call(list, j);

    if (lowerExists && upperExists) {
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    } else if (!lowerExists && upperExists) {
      this[i] = this[j];
      delete this[j];
    } else if (lowerExists && !upperExists) {
      this[j] = this[i];
      delete this[i];
    }
    
    i += 1;
  }

  return this;
}

Array.prototype.customReverse = customReverse;

```

# TestCases

````markdown
Test Case 1: Invoking customReverse with this as null  
**Input:**  
```js
const input = [1, 2, 3];
````

**Expected Output:**
Should Throw **TypeError**

```js
assertionLibrary.expect(input.customReverse.bind(null)).to.throw(TypeError);
```

---

Test Case 2: Invoking customReverse with this as undefined
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**
Should Throw **TypeError**

```js
assertionLibrary.expect(input.customReverse.bind(undefined)).to.throw(TypeError);
```

---

Test Case 3: `[1, 2, 3].customReverse()`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

```js
[3, 2, 1]
```

Assertions:

```js
const actualOutput = input.customReverse(0);
const expectedOutput = [3, 2, 1];
const isOutputValid = _.isEqual(actualOutput, expectedOutput);
const isInputAndOutputSame = _.isEqual(actualOutput, input);

assertionLibrary.expect(isOutputValid).to.eql(true, `Expected ${expectedOutput} but found ${actualOutput}`);
assertionLibrary.expect(isInputAndOutputSame).to.eql(true, `Expected ${actualOutput} and ${input} to be same`);
```

---

Test Case 4: `[].customReverse()`
**Input:**

```js
const input = [];
```

**Expected Output:**

```js
[]
```

Assertions:

```js
const actualOutput = input.customReverse();
const expectedOutput = [];
const isOutputValid = _.isEqual(actualOutput, expectedOutput);
const isInputAndOutputSame = _.isEqual(actualOutput, input);

assertionLibrary.expect(isOutputValid).to.eql(true, `Expected ${expectedOutput} but found ${actualOutput}`);
assertionLibrary.expect(isInputAndOutputSame).to.eql(true, `Expected ${actualOutput} and ${input} to be same`);
```

---

Test Case 5: `[1, , 3].customReverse()` (Sparse Array)
**Input:**

```js
const input = [1, , 3];
```

**Expected Output:**

```js
[3, , 1]
```

Assertions:

```js
const actualOutput = input.customReverse();
const expectedOutput = [3, , 1];
const isOutputValid = _.isEqual(actualOutput, expectedOutput);

assertionLibrary.expect(isOutputValid).to.eql(true, `Expected ${expectedOutput} but found ${actualOutput}`);
```

---

Test Case 6: Calling customReverse() on non-array objects
**Input:**

```js
const actualOutput = Array.prototype.customReverse.call({
  2: 4,
  unrelated: 'foo',
  length: 3
});
```

**Expected Output:**

```js
{ 0: 4, unrelated: 'foo', length: 3 }
```

Assertions:

```js
const expectedOutput = { 0: 4, unrelated: 'foo', length: 3 };

assertionLibrary.expect(actualOutput).to.eql(expectedOutput, `Expected ${expectedOutput} but found ${actualOutput}`);
```
