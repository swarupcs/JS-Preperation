# Group By

https://www.greatfrontend.com/questions/javascript/group-by?practice=practice&tab=coding


Implement a function `groupBy(array, iteratee)` that takes an array and an `iteratee` function, and groups the values in the array based on the `iteratee`.

```js
groupBy(array, iteratee);
````

## Arguments

1. `array` *(Array)*: The array to iterate over.
2. `iteratee` *(Function)*: The iteratee to transform elements. Invoked with one argument: (value).

## Returns

**(Object)**: Returns the composed aggregate object.

## Examples

```js
groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': [{ n: 3 }, { n: 3 }], '5': [{ n: 5 }] }
```

The function should return `{}` when `array` is empty and treat `null` / `undefined` keys after going through `iteratee` as it is.

```js
groupBy([], (o) => o);
// => {}

groupBy([{ n: 1 }, { n: 2 }], (o) => o.m);
// => { undefined: [{ n: 1 }, { n: 2 }] }
```

## Resources

* [Lodash `_.groupBy`](https://lodash.com/docs/#groupBy)



# Editorial



## Solution

### Approach 1: Standard method of basic functions

1. Create an empty `results` object to store the group of occurrences of each key.
2. Iterate through the array and determine the key for each element by calling `iteratee(element)`.  
   If the key does not exist within `results`, set that key to an empty array.  
   Then push the element into that key.

```js
/**
 * @param {Array|Object} array The array to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function groupBy(array, iteratee) {
  const result = {};

  for (const element of array) {
    const key = iteratee(element);
    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = [];
    }
    result[key].push(element);
  }

  return result;
}
````

### Approach 2: Using nullish coalescing assignment operator

This approach uses the nullish coalescing assignment operator (`??=`) to set the value to `[]` only when the key does not already exist.
Since the object is created with `Object.create(null)`, there are no inherited properties, making this safe.

```js
/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function groupBy(array, iteratee) {
  const result = Object.create(null);

  for (const element of array) {
    const key = iteratee(element);
    result[key] ??= [];
    result[key].push(element);
  }

  return result;
}
```

## Resources

* [Lodash `_.groupBy`](https://lodash.com/docs/#groupBy)


