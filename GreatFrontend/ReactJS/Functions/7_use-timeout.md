# useTimeout

https://www.greatfrontend.com/questions/javascript/use-timeout?practice=practice&tab=coding


Implement a `useTimeout` hook that invokes a callback function after a specified delay.

```jsx
export default function Component() {
  const [loading, setLoading] = useState(true);

  useTimeout(() => setLoading(false), 1000);

  return (
    <div>
      <p>{loading ? 'Loading' : 'Ready'}</p>
    </div>
  );
}
````

## Arguments

1. `callback: () => void`: A function to be called after the specified delay
2. `delay: number | null`: The delay in milliseconds before invoking the callback.
   If `null`, the timeout is cleared.

## Returns

Nothing.

---

# Editorial


## Solution
The `useTimeout` hook can be implemented with `useEffect` to create a timeout with `setTimeout` for `delay` milliseconds. The timeout is cleared when the component is unmounted or when the `delay` is `null`.

The `callback` is stored using `useRef` so that the pending timer can reference the latest callback.

```jsx
/**
 * @param {() => void} callback
 * @param {number | null} delay
 */

import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  // Store the latest callback so the timeout always uses the newest version
  const savedCallback = useRef(callback);

  // Update the ref whenever callback changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    // If delay is null → do not schedule timeout
    if (delay === null) return;

    // Setup timeout
    const id = setTimeout(() => {
      // Always call the latest callback
      savedCallback.current();
    }, delay);

    // Cleanup: clear timeout if delay or callback changes, or on unmount
    return () => clearTimeout(id);
  }, [delay]);
}

````

---

# ✅ **How This Implementation Satisfies All Requirements**

## **1. If callback changes**

The timer should **use the latest callback**, not the old one.

We handle this with:

```js
const savedCallback = useRef(callback);

useEffect(() => {
  savedCallback.current = callback;
}, [callback]);
```

This avoids resetting the timer when callback changes but ensures the *latest* function will be called when timeout fires.

---

## **2. If delay changes**

* Cancel the previous timer
* Start a new timer with the new delay

This is handled inside:

```js
useEffect(() => {
  const id = setTimeout(...)
  return () => clearTimeout(id);
}, [delay]);
```

As soon as the delay changes:

* the old timer is cleared
* a new one is created

---

## **3. If delay === null**

→ **Clear timeout and don’t run callback**

This meets the requirement:

```
If delay is null, the timeout is cleared
```

---

## **4. If component unmounts**

React runs the cleanup and automatically clears the timeout.

---

# 🎉 **Simple Summary**

This hook:

✔ Schedules a callback after a specified delay
✔ Cancels the old timer if delay changes
✔ Always calls the latest callback
✔ Cleans up automatically on unmount
✔ Works exactly like `setTimeout` but safe in React

---




