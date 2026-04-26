# useInterval

https://www.greatfrontend.com/questions/javascript/use-interval?practice=practice&tab=coding


Implement a `useInterval` hook that creates an interval that invokes a callback function at a specified delay.

```jsx
export default function Component() {
  const [count, setCount] = useState(0);

  useInterval(() => setCount(count + 1), 1000);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
````

## Arguments

1. `callback: () => void`: A function to be called at the specified interval
2. `delay: number | null`: The delay in milliseconds between each invocation of the callback function.
   If `null`, the interval is cleared.

## Returns

Nothing.

---

# Editorial

## Solution
The `useInterval` hook can be implemented with `useEffect` to create an interval with `setInterval` every given `delay` milliseconds. The interval is cleared when the component is unmounted or when the `delay` is `null`.

```jsx
import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

```