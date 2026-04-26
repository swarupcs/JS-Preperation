# How to implement Array.isArray? JavaScript Interview Question | Array Polyfills


In this question, the candidate needs to implement a function **customIsArray** that mimics the behaviour of **Array.isArray** method.


---

## More about `Array.isArray`

```
The `Array.isArray()` static method determines whether the passed value is an Array.
```

---

## Syntax

```js
customIsArray(value);
````

### Parameters

**value**
The value to be checked.

### Return value

`true` if value is an Array; otherwise, `false`.

---

## Examples

### These should return **true**

```js
customIsArray([]);
customIsArray([1]);
customIsArray(new Array());
customIsArray(new Array("a", "b", "c", "d"));
customIsArray(new Array(3));
customIsArray(Array.prototype);
```

### These should return **false**

```js
customIsArray();
customIsArray({});
customIsArray(null);
customIsArray(undefined);
customIsArray(17);
customIsArray("Array");
customIsArray(true);
customIsArray(false);
customIsArray(new Uint8Array(32));
```

# Solution

```js
function customIsArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}


```

## Test Cases

Test Case 1: Input is an empty array  
**Input:** `[]`  
**Expected Output:** `true`

---

Test Case 2: Input is an array with one element  
**Input:** `[1]`  
**Expected Output:** `true`

---

Test Case 3: Input is created with new Array()  
**Input:** `new Array()`  
**Expected Output:** `true`

---

Test Case 4: Input is a new array with multiple elements  
**Input:** `new Array('a', 'b', 'c', 'd')`  
**Expected Output:** `true`

---

Test Case 5: Input is a sparse array (new Array with length)  
**Input:** `new Array(3)`  
**Expected Output:** `true`

---

Test Case 6: Input is Array.prototype  
**Input:** `Array.prototype`  
**Expected Output:** `true`

---

Test Case 7: No input provided  
**Input:** `customIsArray()`  
**Expected Output:** `false`

---

Test Case 8: Input is an empty object  
**Input:** `{}`  
**Expected Output:** `false`

---

Test Case 9: Input is null  
**Input:** `null`  
**Expected Output:** `false`

---

Test Case 10: Input is undefined  
**Input:** `undefined`  
**Expected Output:** `false`

---

Test Case 11: Input is a number (17)  
**Input:** `17`  
**Expected Output:** `false`

---

Test Case 12: Input is a string ("Array")  
**Input:** `"Array"`  
**Expected Output:** `false`

---

Test Case 13: Input is a boolean (true)  
**Input:** `true`  
**Expected Output:** `false`

---

Test Case 14: Input is a boolean (false)  
**Input:** `false`  
**Expected Output:** `false`

---

Test Case 15: Input is a Uint8Array  
**Input:** `new Uint8Array(32)`  
**Expected Output:** `false`

----

## Explanation

To implement **customIsArray** that behaves like **Array.isArray**, the best and most accurate approach is to use the **internal `[[Class]]` property** via `Object.prototype.toString`.

Because:

* `typeof []` → `"object"` (not enough)
* `instanceof Array` fails across iframes / different realms
* `Array.prototype` is also considered an array by `Array.isArray` (and must return true)
* Typed arrays must return false (e.g., `new Uint8Array()`)

---

# ✅ **Correct Implementation**

```js
function customIsArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}
```

This is the **closest match to native behavior** and works even across different JS realms.

---

# ✔ Why this works?

`Object.prototype.toString.call(value)` returns:

| Value              | Result                |
| ------------------ | --------------------- |
| `[]`               | `[object Array]`      |
| `new Array()`      | `[object Array]`      |
| `Array.prototype`  | `[object Array]`      |
| `new Uint8Array()` | `[object Uint8Array]` |
| `{}`               | `[object Object]`     |
| `null`             | `[object Null]`       |
| `undefined`        | `[object Undefined]`  |

So comparison with `"[object Array]"` is reliable.

---

# ✔ Test Cases

```js
console.log(customIsArray([]));                    // true
console.log(customIsArray([1]));                   // true
console.log(customIsArray(new Array()));           // true
console.log(customIsArray(new Array("a", "b")));   // true
console.log(customIsArray(Array.prototype));       // true

console.log(customIsArray());                      // false
console.log(customIsArray({}));                    // false
console.log(customIsArray(null));                  // false
console.log(customIsArray(undefined));             // false
console.log(customIsArray(17));                    // false
console.log(customIsArray("Array"));               // false
console.log(customIsArray(new Uint8Array(32)));    // false
```

---

# ⚠ Alternate Implementation (NOT fully accurate)

Many candidates try:

```js
value instanceof Array
```

But this fails across execution contexts (e.g., iframes) — so **not recommended**.

---

# 🎯 Interview Tip

If your interviewer asks about accuracy across different frames, mention:

> "The safest approach is using `Object.prototype.toString.call(value)` because it reliably detects the internal `[[Class]]` even across realms."

---

### Follow-up
A **polyfill version** exactly like MDN or show **how Array.isArray works internally**?


