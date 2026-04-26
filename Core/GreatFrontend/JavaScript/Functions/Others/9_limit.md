# Limit

https://www.greatfrontend.com/questions/javascript/limit?practice=practice&tab=coding


Implement a function that accepts a callback and a number `n`, which restricts invocation of the callback to at most `n` times. Subsequent calls of the created function will return the result of the last invocation of the callback function. The callback function is invoked with the `this` binding and arguments of the created function.

## Examples

```js
let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByAtMostThrice = limit(incrementBy, 3);

incrementByAtMostThrice(2); // i is now 3; The function returns 3.
incrementByAtMostThrice(3); // i is now 6; The function returns 6.
incrementByAtMostThrice(4); // i is now 10; The function returns 10.
incrementByAtMostThrice(5); // i is still 10 as this is the 4th invocation; The function returns 10 as it's the result of the last invocation.

i = 4;

incrementByAtMostThrice(2); // i is still 4 as it is not modified. The function still returns 10.
````

## Resources

* [Lodash `_.before`](https://lodash.com/docs/4.17.15#before)

# Editorial

## Solution

We can use closures to capture state required by the returned function. The returned function's closure has access to the following variables:

- `func`: The first argument to `limit()`, the callback function to be invoked.
- `n`: The second argument to `limit()`, the maximum number of times the callback function can be invoked.
- `count`: A boolean variable indicating the number of times the function has been invoked before. `func` will only be invoked if `count < n`.
- `value`: Since we need to return the value of the last invocation for subsequent invocations exceeding `n`, we have to save the result of the last invocation and return it directly for those situation.

```js
/**
 * @callback func
 * @param {number} n
 * @return {Function}
 */
export default function limit(func, n) {
  let count = 0;
  let value;

  return function (...args) {
    if (count < n) {
    // Call the original function (func) using the same this and the same arguments, and save its returned value.
      value = func.apply(this, args);
      count++;
    }

    return value;
  };
}
````

Note that the callback function is invoked with the `this` binding and arguments of the created function, hence we cannot return an arrow function if we want the value of `this` to refer to the object calling the created function.

## Edge cases

* Functions which access `this`

## Techniques

* Closures
* How `this` works
* Invoking functions via `Function.prototype.apply()` / `Function.prototype.call()`

## Resources

* [Lodash `_.before`](https://lodash.com/docs/4.17.15#before)


