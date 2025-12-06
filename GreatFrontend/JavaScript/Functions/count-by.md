# Count By

https://www.greatfrontend.com/questions/javascript/count-by?practice=practice&tab=coding



Implement a function `countBy(array, iteratee)` that creates an object composed of keys generated from the results of running each element of `array` through `iteratee`. The corresponding value of each key is the number of times the key was returned by `iteratee`.

### `countBy(array, iteratee)`

**Arguments**  
- `array` (Array): The array to iterate over.  
- `iteratee` (Function): The iteratee function to transform elements. The function is invoked with one argument: `(value)`.

**Returns**  
- `(Object)`: Returns the composed aggregate object.

### Examples

```js
countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': 2, '5': 1 }
````

The function should return when array is empty and treat `null` / `undefined` keys after going through iteratee as it is.

```js
countBy([], (o) => o); // => {}

countBy([{ n: 1 }, { n: 2 }], (o) => o.m); 
// => { undefined: 2 }
```


# Editorial


## Solution

### Approach 1: Standard method of basic functions

1. Create an empty `result` object to store the count of occurrences of each key.
2. Iterate through the array and determine the key for each element by calling `iteratee(element)`.  
   If the key does not exist within the `result` object, set the value for that key to 0.  
   Then increment the value for that key.

```js
/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function countBy(array, iteratee) {
  const result = {};

  for (const element of array) {
    const key = String(iteratee(element));
    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = 0;
    }
    result[key]++;
  }

  return result;
}
````
 # Explanation of Approach 1
 
 That line:

```js
if (!Object.prototype.hasOwnProperty.call(result, key)) {
```

is a **safe way** to check whether the object `result` already contains the property `key`.

Let’s break it down clearly.

---

# ✅ What does `hasOwnProperty` mean?

`hasOwnProperty(key)` checks if an object **directly** contains a property (not inherited from prototype).

Example:

```js
const obj = { a: 1 };
obj.hasOwnProperty('a');  // true
obj.hasOwnProperty('toString'); // false (inherited from Object.prototype)
```

---

# ❗ But why use

`Object.prototype.hasOwnProperty.call(result, key)`
instead of
`result.hasOwnProperty(key)`?

Because **your function converts keys into strings**, including values like:

* `"__proto__"`
* `"constructor"`
* `"hasOwnProperty"`

If a user passes such keys, they can **override built-in methods** and cause bugs or security issues.

Example of dangerous case:

```js
const result = { hasOwnProperty: 5 };
result.hasOwnProperty('a'); // ❌ TypeError (no longer a function)
```

If you wrote:

```js
result.hasOwnProperty(key)
```

and `result.hasOwnProperty` is overwritten, the code breaks.

---

# ✅ Safe version (what you used)

```js
Object.prototype.hasOwnProperty.call(result, key)
```

This ensures:

* `hasOwnProperty` always refers to the original safe method
* It works even if `result` contains weird keys
* It avoids prototype pollution issues

---

# 🔍 What the line actually checks

```js
if (!Object.prototype.hasOwnProperty.call(result, key)) {
  result[key] = 0;
}
```

Meaning:

➡️ If `result` **does NOT** already have this key,
➡️ Then initialize it to `0`.

---

# 📌 Short explanation

* We need to check if the key exists.
* Using `hasOwnProperty` directly on `result` is unsafe.
* Using the original method from `Object.prototype` ensures safety.

---




### Approach 2: Using nullish coalescing assignment operator

```js
/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function countBy(array, iteratee) {
  const result = Object.create(null);

  for (const element of array) {
    const key = String(iteratee(element));
    result[key] ??= 0;
    result[key]++;
  }

  return result;
}
```

## Resources

* [Lodash `_.countBy`](https://lodash.com/docs/#countBy)


