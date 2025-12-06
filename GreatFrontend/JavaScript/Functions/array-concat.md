# Array.prototype.concat

https://www.greatfrontend.com/questions/javascript/array-concat?practice=practice&tab=coding


The `Array.prototype.concat` method on JavaScript arrays is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

Implement `Array.prototype.concat`. To avoid overwriting the actual `Array.prototype.concat` which is being used by the autograder, we shall instead implement it as `Array.prototype.myConcat`.

## Examples

```js
[1, 2, 3].myConcat([4, 5, 6]);      // [1, 2, 3, 4, 5, 6]
[1, 2, 3].myConcat(4, 5, 6);        // [1, 2, 3, 4, 5, 6]
[1, 2, 3].myConcat(4, [5, 6]);      // [1, 2, 3, 4, 5, 6]
````

## Notes

As seen from the examples, `Array.prototype.concat` accepts a variadic number of arguments and depending on whether the argument is a primitive or an array/array-like object, they are handled differently. You are not required to handle arguments with the property `Symbol.isConcatSpreadable` set, but you are recommended to read the specification for `Array.prototype.concat` on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) before attempting.


# Editorial

## Solution

Start by creating a copy of the original array (`this`) using the spread operator (`[...this]`). This ensures that the polyfill operates on a copy of the array, leaving the original array unchanged.

Iterate through the arguments passed to the `Array.prototype.myConcat` method. For each argument, check if it's an array using `Array.isArray()`. If it's an array, spread its elements into the `newArray`. If it's not an array, simply push the element into the `newArray`.

Finally, return the `newArray`, which contains all the elements from the original array and the arguments passed to `Array.prototype.myConcat`. This mimics the behavior of the native `Array.prototype.concat` method.

```js
/**
 * @template T
 * @param {...(T | Array<T>)} items
 * @return {Array<T>}
 */
Array.prototype.myConcat = function (...items) {
  const newArray = [...this];

  for (let i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {
      newArray.push(...items[i]);
    } else {
      newArray.push(items[i]);
    }
  }

  return newArray;
};
````

## Edge cases

* Sparse arrays, e.g. `[1, 2, , 4]`. The empty values should be ignored while traversing the array.

## One-liner solution

```js
Array.prototype.myConcat = Array.prototype.concat;
```

## Spec solution

```ts
interface Array<T> {
  myConcat(...items: Array<T | Array<T>>): Array<T>;
}

Array.prototype.myConcat = function (...items) {
  const A = Array.from(this);
  let n = A.length;

  items.forEach((e) => {
    // The actual spec checks for the `Symbol.isConcatSpreadable` property.
    if (Array.isArray(e)) {
      const len = e.length;
      let k = 0;

      while (k < len) {
        // Ignore index if value is not defined for index (e.g. in sparse arrays).
        const exists = Object.hasOwn(e, k);
        if (exists) {
          const subElement = e[k];
          A[n] = subElement;
        }
        n += 1;
        k += 1;
      }
    } else {
      A[n] = e;
      n += 1;
    }
  });

  return A;
};
```

## Resources

* [`Array.prototype.concat` | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [`Array.prototype.concat` ECMAScript specification](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.concat)


