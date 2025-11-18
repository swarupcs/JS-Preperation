# How to implement Array.prototype.at? JavaScript Interview Question | Problem Solving | JavaScript Polyfills


In this question, the candidate needs to implement a function **customAt** that mimics the behaviour of **Array.prototype.at** method.

---

## More about `Array.prototype.at`

The **at()** method takes an integer value and returns the item at that index.  
It supports both **positive and negative** integers:

- Positive index → counts from the start  
- Negative index → counts backward from the end  

If the index is out of range, it returns **undefined**.

---

## Examples

```js
const array = [5, 12, 8, 130, 44];

console.print(array.customAt(2));   // prints 8
console.print(array.customAt(-1));  // prints 44
console.print(array.customAt(100)); // prints undefined
````

---

# Solution

```js
function customAt(index) {
  if (index >= 0) {
    return this[index];
  } else {
    return this[this.length + index];
  }
}

Array.prototype.customAt = customAt;


```

----

# Test Cases

Test Case 1: Positive Parameter  
Input:  
```js
[5, 12, 8, 130, 44] | Index: 2
````

Expected Output: **8**

---

Test Case 2: Out of Range Positive Parameter
Input:

```js
[5, 12, 8, 130, 44] | Index: 10
```

Expected Output: **undefined**

---

Test Case 3: Negative Parameter
Input:

```js
[5, 12, 8, 130, 44] | Index: -1
```

Expected Output: **44**

---

Test Case 4: Out of Range Negative Parameter
Input:

```js
[5, 12, 8, 130, 44] | Index: -10
```

Expected Output: **undefined**

---

Test Case 5: Last Possible Negative Parameter
Input:

```js
[5, 12, 8, 130, 44] | Index: -5
```

Expected Output: **5**


