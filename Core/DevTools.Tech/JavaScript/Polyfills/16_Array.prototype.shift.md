# How to implement Array.prototype.shift? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customShift** that mimics the behaviour of **Array.prototype.shift** method.

---

## More about `Array.prototype.shift`

The `shift()` method:

- Removes the **first element** from an array  
- Returns the **removed element**  
- Changes the array’s **length**  
- Shifts all remaining elements one position to the left  

If the array is empty, it returns **undefined**.

---

## Examples

```js
const array = [1, 2, 3];
const firstElement = array.shift();

// prints 1
console.print(firstElement);

// prints [2, 3]
console.print(array);
````

---

## Syntax

```js
shift()
```

---

## Return value

* The **removed element**, if the array is non-empty
* `undefined` if the array is **empty**

---

# Solution

```js


function customShift() {
  // DO NOT REMOVE
  'use strict';

  // Write your solution below
  if (this === null || this === undefined) {
    throw new TypeError(
      'Array.prototype.customShift called on null or undefined'
    );
  }

  var list = Object(this);
  var length = list.length || 0;

  if (!length) {
    return undefined;
  }
  
  var response = list[0];
  
  // moving current list elements
  for (let i = 1; i < length; i++) {
    if (i in list) {
      this[i - 1] = this[i];
      delete this[i];
    }
  }
  
  this.length = this.length - 1;

  return response;
}

Array.prototype.customShift = customShift;
```

# Test Cases

````markdown
Test Case 1: Invoking customShift with this as null  
**Input:**  
```js
const input = [1, 2, 3];
````

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.shift.bind(null, 4)).to.throw(TypeError);
```

---

Test Case 2: Invoking customShift with this as undefined
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customShift.bind(undefined, 4)).to.throw(TypeError);
```

---

Test Case 3: `[1,2,3].customShift()`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**

* Updated array: `[2, 3]`
* New length: `2`
* Return value: `1`

Assertions:

```js
const actualOutput = input.customShift();
const expectedOutput = [2, 3];
const isArrayUpdated = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(actualOutput).to.eql(1, `Expected 1 but found ${actualOutput}`);
assertionLibrary.expect(input.length).to.eql(2, `Expected array length should be 2 but found ${input.length}`);
```

---

Test Case 4: `[].customShift()`
**Input:**

```js
const input = [];
```

**Expected Output:**

* Returned value: `undefined`
* Array remains `[]`

Assertions:

```js
const actualOutput = input.customShift();
const expectedOutput = [];
const isArrayUpdated = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(actualOutput).to.eql(undefined, `Expected undefined but found ${actualOutput}`);
```

---

Test Case 5: Calling customShift() on non-array objects
**Input:**

```js
const input = { length: 3, unrelated: 'foo', 2: 4 };
```

**Expected Output:**

```js
{ 1: 4, length: 2, unrelated: 'foo' }
```

Assertions:

```js
const expectedOutput = { 1: 4, length: 2, unrelated: 'foo' };

Array.prototype.customShift.call(input);

const isObjectEqual = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isObjectEqual).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(input.length).to.eql(expectedOutput.length, `Expected ${JSON.stringify(expectedOutput)} but found ${JSON.stringify(input)}`);
```


