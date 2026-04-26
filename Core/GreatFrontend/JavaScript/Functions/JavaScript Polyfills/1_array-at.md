# Array.prototype.at

`Array.prototype.at` takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

Implement `Array.prototype.at`. To avoid overwriting the actual `Array.prototype.at`, we shall instead implement it as `Array.prototype.myAt`.

## Examples

```js
const arr = [42, 79];
arr.myAt(0); // 42
arr.myAt(1); // 79
arr.myAt(2); // undefined

arr.myAt(-1); // 79
arr.myAt(-2); // 42
arr.myAt(-3); // undefined
````

## Notes

There are some tricky cases to handle. You are recommended to read the specification for `Array.prototype.at` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at) before attempting.


---

# My Solution


---

# ✅ **Problem Explanation**

You must implement a custom version of JavaScript’s `Array.prototype.at()` method, but without overwriting the real one.
So we create a new method:

```js
Array.prototype.myAt
```

### What should `.myAt()` do?

It accepts **one integer index** and returns the element at that index.

### Behaviour rules:

1. **If the index is positive:**
   It behaves like normal array indexing.

   ```js
   arr.myAt(1) → arr[1]
   ```

2. **If the index is negative:**
   It counts from the end of the array.

   ```js
   arr.myAt(-1) → last element
   arr.myAt(-2) → second last element
   ```

3. **If the index is out of range:**
   It returns `undefined`.

---

# 🧠 **How `.at()` Works Internally (Intuition)**

Given an index:

* Convert it to a number

* If index ≥ 0 → use as-is

* If index < 0 → use `length + index`
  Example:
  If length = 5 and index = -1 → we want index `4`
  → `5 + (-1) = 4`

* If resulting index is outside the valid range (`0 → length-1`), return `undefined`.

---

# ✅ **Your Solution Explained With Comments**

Here is your code rewritten with detailed comments:

```js
/**
 * Custom implementation of Array.prototype.at()
 * @param {number} index - position of the element to retrieve
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
  // Get the length of the array
  const len = this.length;

  // Convert the index to a number (handles things like "2", null, etc.)
  const relativeIndex = Number(index);

  // If index is positive → use it directly
  // If index is negative → count from the end (len + index)
  const k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;

  // If computed index is out of bounds, return undefined
  if (k < 0 || k >= len) {
    return undefined;
  }

  // Otherwise, return the element at the calculated position
  return this[k];
};
```

---

# 🧪 **Examples**

```js
const arr = [42, 79];

arr.myAt(0);  // 42
arr.myAt(1);  // 79
arr.myAt(2);  // undefined (out of range)

arr.myAt(-1); // 79 (last element)
arr.myAt(-2); // 42 (second last)
arr.myAt(-3); // undefined
```

---

# 🎯 Summary

### You implemented `.myAt()` by:

* Converting index to number
* Adjusting negative indices
* Ensuring the index is within bounds
* Returning the correct array element

Your implementation matches the behavior of real `Array.prototype.at()` according to the ECMAScript spec.

---

## Follow-up


✅ Convert this into an interview-ready explanation





# Editorial

## Solution

The `Array.prototype.at` method allows accessing elements of an array using positive or negative indices, similar to how Python's list indexing works which is convenient when accessing items from the back. Traditionally, to access the last item you'd do `arr[arr.length - 1]`, but with this method you can do `arr.at(-1)`.

For indices that are out of bounds (defined as `index < -array.length || index >= array.length`), `undefined` is returned. To safely access the index, we can allow the index to "wrap around" by adding `array.length` to indices so that negative indices will become the positive counterpart. However, for positive values, this will now cause the index to exceed the array range. Hence we modulo by `array.length` to get the index back within the range.

Note that the specifications state that the `index` is converted to an integer first, so `Array.prototype.at` works even for string versions of indices.

```js
/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
  const len = this.length;
  if (index < -len || index >= len) {
    return;
  }

  return this[(index + len) % len];
};
````

## Edge cases

* Using non-integer index such as `[42, 79].at('1')`.

## One-liner solution

You can cheat the autograder by doing this:

```js
Array.prototype.myAt = Array.prototype.at;
```

## Spec solution

Here's a solution that is based off the [`Array.prototype.at` ECMAScript specification](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at).

```js
/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
  const len = this.length;
  const relativeIndex = Number(index);
  const k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;

  if (k < 0 || k >= len) {
    return undefined;
  }

  return this[k];
};
```

## Resources

* [`Array.prototype.at` | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
* [`Array.prototype.at` ECMAScript specification](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at)

