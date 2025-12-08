# Number of Arguments

https://www.greatfrontend.com/questions/javascript/number-of-arguments?practice=practice&tab=coding


Implement a function `numberOfArguments`, to return the number of arguments it was called with. Note that this value is the actual number of arguments, which can be more or less than the defined parameter count (which is determined by `Function.prototype.length`).

P.S. There's no practical use for this function. However, it is useful to know how to determine the number of arguments, which can be useful for questions that require writing variadic functions like [Classnames](/questions/javascript/classnames) and [Curry II](/questions/javascript/curry-ii).

```js
numberOfArguments(); // 0
numberOfArguments(1); // 1
numberOfArguments(2, 3); // 2
numberOfArguments('a', 'b', 'c'); // 3
````

## Resources

[arguments.length | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length)

# Solution

```js
export default function numberOfArguments() {
  console.log("arguments", arguments)
  return arguments.length;
}
```

# Editorial


## Solution

### Approach 1: Using `arguments` object

The `arguments` object is an array-like object that is accessible inside functions and it contains values or arguments passed to that function. Hence we can use `arguments.length` to determine the number of arguments passed.

```js
/**
 * @param {...any} args
 * @return {number}
 */
export default function numberOfArguments() {
  return arguments.length;
}
````

### Approach 2: Using rest parameters

The rest parameter syntax allows a function to accept a variable number of arguments as an array. It can be used with named parameters before it, but by using it solely as the function's parameters, it captures all arguments passed to the function.

```js
/**
 * @param {...any} args
 * @return {number}
 */
export default function numberOfArguments(...args) {
  return args.length;
}
```

## Edge cases

Calling a function with `undefined`. `undefined` is still counted as a parameter. Default function parameters will be initialized with default values if no value or `undefined` is passed.

```js
function foo(a = 1) {
  return a;
}

foo(undefined); // 1
foo(); // 1
```

## Notes

What happens for functions that have default parameters? The answer is that they behave exactly the same.

```js
function foo(a = 1, b = 2) {
  return arguments.length;
}

foo();        // 0
foo(3);       // 1
foo(undefined); // 1
```

## Resources

* [The arguments object | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
* [Rest parameters | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```


