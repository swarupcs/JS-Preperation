# How to implement Array.prototype.push? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customPush** that mimics the behaviour of **Array.prototype.push** method.

---

## More about `Array.prototype.push`

The `push()` method:

- Adds one or more elements **to the end of an array**
- Mutates the original array
- Returns the **new length** of the array

---

## Example

```js
const array = [1, 2, 3];

array.push(4, 5);

// prints [1, 2, 3, 4, 5]
console.print(array);
````

---

## Syntax

```js
push(element0)
push(element0, element1)
push(element0, element1, /* … ,*/ elementN)
```

---

## Parameters

### **elementN**

One or more elements to add to the **end** of the array.

---

## Return value

The **new length** of the array after adding the elements.


---

# Solution

```js
function customPush() {
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

  for (let i = 0; i < argumentsLength; i++) {
    this[i + length] = arguments[i];
  }

  console.log(this);

  this.length = length + argumentsLength;

  return this.length;
}

Array.prototype.customPush = customPush;

```

---

# Test Cases


Test Case 1: Invoking customPush with this as null  
**Input:**  
```js
const input = [1, 2, 3];
````

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customPush.bind(null, 4)).to.throw(TypeError);
```

---

Test Case 2: Invoking customPush with this as undefined
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:** Should Throw **TypeError**

```js
assertionLibrary.expect(input.customPush.bind(undefined, 4)).to.throw(TypeError);
```

---

Test Case 3: `[1,2,3].customPush(4,5)`
**Input:**

```js
const input = [1, 2, 3];
```

**Expected Output:**
Array becomes:

```js
[1, 2, 3, 4, 5]
```

Length becomes:

```js
5
```

Assertions:

```js
const actualOutput = input.customPush(4, 5);
const expectedOutput = [1, 2, 3, 4, 5];
const isArrayUpdated = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(input.length).to.eql(5, `Expected array length should be 5 but found ${input.length}`);
```

---

Test Case 4: `[1,2,3].customPush()`
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
const actualOutput = input.customPush();
const expectedOutput = [1, 2, 3];
const isArrayUpdated = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isArrayUpdated).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(input.length).to.eql(3, `Expected array length should be 3 but found ${input.length}`);
```

---

Test Case 5: Calling customPush() on non-array objects
**Input:**

```js
const input = { length: 3, unrelated: 'foo', 2: 4 };
```

Calling:

```js
const newLength = Array.prototype.customPush.call(input, 1, 2);
```

**Expected Output object:**

```js
{
  2: 4,
  3: 1,
  4: 2,
  length: 5,
  unrelated: 'foo'
}
```

Assertions:

```js
const expectedOutput = { 2: 4, 3: 1, 4: 2, length: 5, unrelated: 'foo' };
const isObjectEqual = _.isEqual(expectedOutput, input);

assertionLibrary.expect(isObjectEqual).to.eql(true, `Expected ${expectedOutput} but found ${input}`);
assertionLibrary.expect(newLength).to.eql(expectedOutput.length, `Expected ${expectedOutput} but found ${input}`);
```


