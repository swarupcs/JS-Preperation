# useThrottle

https://www.greatfrontend.com/questions/javascript/use-throttle?practice=practice&tab=coding

Implement a `useThrottle` hook that delays `value` state updates to happen at most every `interval`-millisecond intervals.

```jsx
export default function Component() {
  const [position, setPosition] = useState([0, 0]);
  const throttledPosition = useThrottle(position, 1000);

  return (
    <div
      style={{
        position: 'fixed',
        top: throttledPosition[0],
        left: throttledPosition[1],
      }}
      onMouseMove={(e) => setPosition([e.clientY, e.clientX])}
    />
  );
}
````

## Arguments

1. `value`: The value to throttle
2. `interval: number`: The interval in milliseconds (defaults to 500)

## Returns

The hook returns the throttled value.

# Editorial

## Solution
The `useThrottle` hook can be implemented by using `useRef` to store the last updated time, and `useEffect` to control when to update the state immediately or throttle it with `setTimeout`.

```jsx
import { useState, useRef, useEffect } from "react";

/**
 * Custom hook that throttles a value, ensuring updates
 * happen at most once every `interval` milliseconds.
 *
 * @template T
 * @param {T} value - The incoming value to throttle
 * @param {number} interval - Throttle delay in ms (default: 500)
 * @returns {T} - The throttled value
 */
export default function useThrottle(value, interval = 500) {
  // Store the throttled value
  const [throttledValue, setThrottledValue] = useState(value);

  // Stores the timestamp of the last update
  const lastUpdated = useRef();

  useEffect(() => {
    const now = Date.now();

    /**
     * CASE 1: We HAVE updated before
     * AND the time gap ≥ interval → update immediately
     */
    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      /**
       * CASE 2: Not enough time passed → delay update
       * Schedule update after `interval` ms.
       */
      const id = setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      // Cleanup timeout if value changes again before update
      return () => clearTimeout(id);
    }
  }, [value, interval]);

  return throttledValue;
}

```



---

# ✅ **Explanation of the `useThrottle` Hook**

The purpose of `useThrottle` is to **limit how frequently a value updates**.
Even if the incoming value changes rapidly (like mouse position), the returned throttled value should only update **at most once every `interval` ms**.

### 🧠 How throttling works

* You store the **last time** the value was updated.
* Every time the input `value` changes:

  * If enough time has passed (`interval` ms), update immediately.
  * If **not enough time has passed**, schedule a `setTimeout` to update later.

### 🔑 Key ideas:

* `useRef()` stores `lastUpdated` timestamp.
* `useState()` stores the throttled value.
* `useEffect()` runs whenever the input `value` changes.

This approach ensures:

* **Immediate update** if allowed.
* **Delayed update** if not allowed.
* The throttled value doesn’t update too frequently.

---


# ✅ **Why this works**

### ✔ Tracks last update time

`lastUpdated.current` stores when the throttled value was last changed.

### ✔ Immediate update if interval passed

If `(now - lastUpdated)` is greater than the interval → update instantly.

### ✔ Delayed update when changes are too fast

If not enough time has passed → schedule a timeout.

### ✔ Cleanup ensures only the latest timeout runs

Prevents memory leaks or unnecessary updates.

---

# Example Behavior

If the user moves the mouse rapidly:

| Time  | Position Change | Throttled Value | Reason         |
| ----- | --------------- | --------------- | -------------- |
| 0ms   | (10,10)         | (10,10)         | first update   |
| 100ms | (40,20)         | (10,10)         | too soon       |
| 500ms | (80,40)         | (80,40)         | update allowed |

---


