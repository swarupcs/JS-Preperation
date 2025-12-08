# useDebounce

https://www.greatfrontend.com/questions/javascript/use-debounce?practice=practice&tab=coding

# Implement a `useDebounce` hook

Implement a `useDebounce` hook that delays state updates until a specified `delay` has passed without any further changes to the provided `value`.

```jsx
export default function Component() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 1000);

  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
    </div>
  );
}
```

The observable outcome of using `useDebounce` is quite similar to React's [useDeferredValue](https://react.dev/reference/react/useDeferredValue), the former returns an updated value after a fixed duration while the latter always returns the updated value but updates to the DOM relies on React's priority system.

## Arguments

1. `value`: The value to debounce
2. `delay: number`: The delay in milliseconds

## Returns

The hook returns the debounced value.


# Editorial

## Solution
The `useDebounce` hook can be implemented with `useState` to store the current debounced value and `useEffect` to update the debounced value after the specified `delay` with `setTimeout`. If `value` changes, it must mean that there's a state update, so we clear the timeout with `clearTimeout` on unmount and set a new timeout to update the current debounced value.

```jsx
import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay])

  return debouncedValue;
}
```