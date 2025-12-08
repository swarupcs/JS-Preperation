# Clamp

https://www.greatfrontend.com/questions/javascript/clamp?language=js&tab=coding

Implement a function `clamp(number, lower, upper)` to restrict a number within the inclusive `lower` and `upper` bounds.

### **Description**
Restrict a given number within the **inclusive** lower and upper bounds.

---

## **Function Requirements**

### **Arguments**
- **value (number):** The number to clamp  
- **lower (number):** The minimum allowed value  
- **upper (number):** The maximum allowed value  

### **Returns**
- **(number):** The clamped number  

---

## **Examples**
```js
// Within the bounds, return as-is.
clamp(3, 0, 5); // => 3

// Smaller than the lower bound.
clamp(-10, -3, 5); // => -3

// Bigger than the upper bound.
clamp(10, -5, 5); // => 5
````

---


### Resources
Lodash _.clamp
https://lodash.com/docs/4.17.15#clamp

# Solution


Solutions will involve checking the passed in value whether it is smaller than the lower and bigger than the upper and returns the right number accordingly.

## My Solution

```js
/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, upper) {
  if(value >= lower && value <= upper) return value;

  if(value > upper) return upper;

  if(value < lower) return lower;
  
  
}
```

## Approach 1: Sequential bound checks
We can first check if value is lower than lower. If so, the value is out of range and we can return the lower bound. Next check if value is higher than upper. If so, the value is out of range and we can return the upper bound. If none of the previous checks were true, then we can return the original value, which is within the specified range.

```js
/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, upper) {
  if (value < lower) {
    return lower;
  }

  if (value > upper) {
    return upper;
  }

  return value;
}
````

## Approach 2: Using Math.max / Math.min

The previous solution can be succinctly expressed in a line using Math.max() and Math.min().

```js
/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
export default function clamp(value, lower, upper) {
  return Math.min(upper, Math.max(lower, value));
}
```

## Edge cases

upper is smaller than lower. We can assume we aren't given this case.

```
```
