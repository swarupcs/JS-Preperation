# Flatten

Implement a function `flatten` that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

## Examples

```js
// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

```


# Solution

## My Solution(Easy to Understand)

```js
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  // Create a new array that will store the final flattened result.
  const result = [];

  // Iterate over every item inside the input array.
  for (const item of value) {

    // If the item is an array → recursively flatten it.
    if (Array.isArray(item)) {

      // RECURSION EXAMPLE 1:
      // flatten([2, [3]]) =>
      //   - sees 2 → pushes 2
      //   - sees [3] → calls flatten([3]) which returns [3]
      //   → final result = [2, 3]
      //
      // RECURSION EXAMPLE 2 (deeply nested):
      // flatten([1, [2, [3, [4]]]])
      //   - sees 1 → push(1)
      //   - sees [2, [3, [4]]]
      //       • flatten([2, [3, [4]]])
      //           - sees 2 → push(2)
      //           - sees [3, [4]]
      //               ° flatten([3, [4]])
      //                    - sees 3 → push(3)
      //                    - sees [4]
      //                        ▪ flatten([4]) returns [4]
      //           → returns [2, 3, 4]
      //   → final result = [1, 2, 3, 4]

      result.push(...flatten(item)); // Spread flattens inner arrays into result
    } else {

      // If the item is NOT an array, push it directly.
      result.push(item);
    }
  }

  // Finally return the fully flattened array.
  return result;
}

```

# Editorial

This is a common JavaScript interview question. It tests one's knowledge about checking for the array type, looping through an array, various native methods such as `Array.prototype.concat`, and recursion.

## Clarification questions

1. What type of data does the array contain? Some approach only applies to certain data types.
2. How many levels of nesting can this array have? If there are thousands-of-levels of nesting, recursion might not be a good idea given its big upfront memory footprint.
3. Should we return a new array or we mutate the existing array?
4. Can we assume valid input, i.e. an array. Normally the answer is "yes", so you don't have to waste your time doing defensive programming.
5. Does the environment the code runs on has ES6+ support? The environment determines what methods/native APIs you have access to.

## Solution

### Approach 1: Iterative

First let's think through how we should check if a given value is an array or not. We can use `Array.isArray` or `instanceof Array` to achieve that. There are some nuances between these two. If you are interested you can check out [this article](https://jakearchibald.com/2017/arrays-symbols-realms/) by Jake Archibald.

Then, we don't want to mutate the original input array, which is a good practice in general, so we will make a copy of the input array and return a new array with all the items extracted from the input array.

Here is the solution. We loop through the array with a while loop and we take out an item from the array one at a time to check to see if that item is an array. If the item is not an array, we put it into the `res` array. If it is an array, we use a spread operator `...` to get all the items out of it and put them back to the array.

```ts
type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  const res = [];

  const copy = value.slice();

  while (copy.length) {
    const item = copy.shift();

    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      res.push(item);
    }
  }

  return res;
}
````

### Approach 2: Iteration using `Array.prototype.some`

A more concise approach, compared to the previous one, is to use `Array.prototype.some`.

```ts
type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }

  return value;
}
```

### Approach 3: Recursion using `Array.prototype.reduce`

A recursion approach fits well here given the recursive and nesting nature of this question. And it will simplify our code a lot.

```js
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    [],
  );
}
```

Although a recursive approach always has the risk overflowing the call stack, as of this writing, in chrome, the number of recursive calls you can make is around 10 thousands and in Firefox it is 50 thousands, so this shouldn't be a problem in practice. However, when the cost of recursion becomes a concern, we can use a [generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) to lazily extract the flattened items from the array. We will see that solution later.

### Approach 4: Flatten the array in-place

All the solutions we have seen so far are returning a new flattened array without mutating the original input array. Again, this is normally what you want.

However, the interviewer might ask you to implement an in-place solution that doesn't allocate extra memory. That is, a solution with a constant `O(1)` space complexity.

In this case, you will need to leverage array methods that *mutate*. There are 9 methods in total that mutate arrays: `pop`, `push`, `reverse`, `shift`, `sort`, `splice`, `unshift`, `copyWithin` and `fill`.

Here is one possible solution that uses `splice` to mutate the input array:

```ts
type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  for (let i = 0; i < value.length; ) {
    if (Array.isArray(value[i])) {
      value.splice(i, 1, ...value[i]);
    } else {
      i++;
    }
  }

  return value;
}
```

### Approach 5: Recursive approaching using `flatMap`

The `flatMap` function method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. By calling it recursively, we can flatten the entire array until it is only one level deep.

```ts
type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  return Array.isArray(value)
    ? value.flatMap((item) => flatten(item))
    : value;
}
```

---

## Bonus solutions

The following solutions only work under certain circumstances so they should not be used during interviews.

### Bonus approach 1: Generator

As we have discussed earlier, if the array has thousands levels of nesting, a recursive approach might cause a stack overflow. We can utilize generators to yield array item individually. As generators are lazy in nature, this wouldn't have as big of an upfront cost compared to the recursive approach.

This however results in a different function signature, and is not supported by our test cases.

```ts
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function* flatten(value: Array<any>): Array<any> {
  for (const item of value) {
    if (Array.isArray(item)) {
      yield* flatten(item);
    } else {
      yield item;
    }
  }
}
```

### Bonus approach 2: Regex and `JSON.stringify`

Here is a solution that might be considered unorthodox: we first encode the array into a JSON string via `JSON.stringify`, and filter out brackets using regex `/(\[|\])/g`, and we decode it back to an array using `JSON.parse`. Because all the brackets are stripped off with the regex, we end up with an array with only one level of depth.

```ts
type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  return JSON.parse(
    '[' +
      JSON.stringify(value)
        .replace(/(\[|\])/g, '') +
      ']',
  );
}
```

### Bonus approach 3: `toString` when the array contains only numbers

Recall that we asked about the data types as one of the clarification questions? If the array contains only numbers, here is a very simple solution:

```js
function flattenOnlyNumbers(array) {
  return array
    .toString()
    .split(',')
    .map((numStr) => Number(numStr));
}
```

Note that this only applies when the array only contains numbers, and this usage of `toString` might be thought of as "obscure".

## One-liner solution with `Array.prototype.flat`

There is a new [flat array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) added recently to the JavaScript language. Obviously you cannot use this during interviews but it's still good to know that a native flatten function is available in the language.

```js
export default function flatten(arr) {
  return arr.flat(Infinity);
}
```

