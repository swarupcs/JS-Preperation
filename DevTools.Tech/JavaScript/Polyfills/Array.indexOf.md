# How to implement Array indexOf from scratch? | JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, you need to build an **exact replica** of the **indexOf** method provided by Array.

---

## indexOf Method Overview

The **indexOf()** method returns the **first index** at which a given element can be found in the array, or **-1** if it is not present.

---

## Syntax

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
````

---

## Parameters

### **searchElement**

The element to locate in the array.

### **fromIndex** (Optional)

* The index to start the search from.
* Default: **0**
* If `fromIndex >= array.length`, return **-1** (array won't be searched).
* If `fromIndex < 0`, it is treated as:
  `startIndex = array.length + fromIndex`
* If `startIndex < 0`, search starts from **0**.
* The array is always searched **from left to right**, even with a negative index.

---

## Return Value

* The **first index** of the element in the array.
* **-1** if the element is not found.

---

## Description

`indexOf()` uses **strict equality (`===`)** for comparison.

---

## Examples

```js
var array = [2, 9, 9];

array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

---

# Solution

```js
function customIndexOf(searchElement, fromIndex) {
  // check if this exists
  if (this == null) {
    throw new TypeError('"this" is null or not defined');
  }

  var iterator;
  var object = Object(this);
  var length = object.length || 0;

  // If array length is 0 then return -1.
  if (length === 0) {
    return -1;
  }

  // if fromIndex is provided then take it as start index
  // or 0
  var startIndex = +fromIndex || 0;

  // sanity check
  if (Math.abs(startIndex) === Infinity) {
    startIndex = 0;
  }

  // If startIndex >= length then return -1.
  if (startIndex >= length) {
    return -1;
  }

  // If startIndex >= 0, then let iterator be startIndex.
  if (startIndex >= 0) {
    iterator = startIndex;
  } else {
    // else startIndex < 0, let iterator be length - abs(n).
    iterator = length - Math.abs(startIndex);
  }

  // if iterator < 0, then let iterator be 0.
  iterator = Math.max(iterator, 0);

  while (iterator < length) {
    // checking if key exists and the value is equal to the searchElement
    if (iterator in object && object[iterator] === searchElement) {
      return iterator;
    }
    iterator++;
  }

  // returning -1 if not found
  return -1;
}


```

----

# Test Cases


Test Case 1: Verify the index of the first occurrence of **2**  
Input:  
```js
input = [2, 9, 9]
````

Expected Output: **0**

---

Test Case 2: Verify the index of the first occurrence of **7**
Input:

```js
input = [2, 9, 9]
```

Expected Output: **-1**

---

Test Case 3: Verify the index of the first occurrence of **2**, starting from index **-1**
Input:

```js
input = [2, 9, 9]
```

Expected Output: **-1**

---

Test Case 4: Verify the index of the first occurrence of **9**, starting from index **2**
Input:

```js
input = [2, 9, 9]
```

Expected Output: **2**

---

Test Case 5: Verify the index of the first occurrence of **2**, starting from index **-3**
Input:

```js
input = [2, 9, 9]
```

Expected Output: **0**


