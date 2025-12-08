# useSet

www.greatfrontend.com/questions/javascript/use-set?practice=practice&tab=coding

Implement a `useSet` hook that manages a JavaScript [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) of items with additional utility methods.

It is more convenient to use `useSet` over plain `useState` because in the latter case, you would always have to create a new `Set`, mutate it, then set state to use the new set, which can be quite cumbersome.

The hook should work generically with items of any types.

```jsx
export default function Component() {
  const { set, add, remove, toggle, reset, clear } = useSet(new Set(['hello']));

  return (
    <div>
      <button onClick={() => add(Date.now().toString())}>Add</button>

      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>

      <button onClick={() => toggle('hello')}>Toggle hello</button>

      <button onClick={() => reset()}>Reset</button>

      <button onClick={() => clear()}>Clear</button>

      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  );
}
````

## Arguments

* `initialState`: The initial `Set` of items

## Returns

The hook returns an object with the following properties:

* `set`: The current set of items
* `add: (item) => void`: A function that adds `item` to the set
* `remove: (item) => void`: A function that removes `item` from the set
* `toggle: (item) => void`: A function that toggles the presence of `item` in the set
* `reset: () => void`: A function that resets the set to `initialState`
* `clear: () => void`: A function that removes all items in the set


# Editorial


## Solution
The `useSet` hook can be implemented by storing a `Set` in a `useState` state and defining the utility methods to manipulate the `Set` in terms of the state's setter function with JavaScript's built-in `Set` methods.

Remember to wrap the utility methods in `useCallback` to prevent unnecessary re-renders of the calling component.

```jsx
/**
 * @template T
 * @param {Set<T>} initialState
 */
import { useCallback, useState } from 'react';

/**
 * useSet hook manages a JavaScript Set with convenient utility methods.
 *
 * @param {Set<any>} initialState - Initial Set of items.
 * @returns {{
 *   set: Readonly<Set<any>>,
 *   add: (item: any) => void,
 *   remove: (item: any) => void,
 *   toggle: (item: any) => void,
 *   reset: () => void,
 *   clear: () => void
 * }}
 */
export default function useSet(initialState = new Set()) {
  // Hold internal Set state (always create new Set instance for immutability)
  const [set, setSet] = useState(initialState);

  /**
   * Add an item to the Set.
   * Since Set is mutable, we must create a new Set for React state updates.
   */
  const add = useCallback((item) => {
    setSet((prev) => new Set([...prev, item]));
  }, []);

  /**
   * Remove an item from the Set.
   */
  const remove = useCallback((item) => {
    setSet((prev) => new Set([...prev].filter((i) => i !== item)));
  }, []);

  /**
   * Toggle an item in the Set.
   * - If exists → remove
   * - If not → add
   */
  const toggle = useCallback((item) => {
    setSet((prev) =>
      prev.has(item)
        ? new Set([...prev].filter((i) => i !== item))
        : new Set([...prev, item])
    );
  }, []);

  /**
   * Reset the Set back to the initialState.
   */
  const reset = useCallback(() => {
     setSet(initialState);  // return SAME reference
  }, [initialState]);

  /**
   * Clear all items in the Set.
   */
  const clear = useCallback(() => {
    setSet(new Set());
  }, []);

  return { set, add, remove, toggle, reset, clear };
}

````

## Edge cases

Since `Set`s are mutable, when defining the utility methods, ensure that whatever mutations that happened will cause the calling component to re-render. This ensures that the component is always in sync with the current state of the `Set`.

There are many ways to achieve this, including,

* creating a new `Set` instance with the modified values,
* doing a shallow copy of the `Set` before modifying it,
* manually triggering a re-render after modifying the `Set` with some "throwaway" `useState` state, or
* using a library like [Immer](https://immerjs.github.io/immer/) to mutate the set immutably for you.

**Note**: We don't really need to deep copy the `Set` and care about the (im)mutability of the values in the `Set` since we are only concerned about the correctness of the component currently mounted in the DOM in terms of the `Set`.

```
```
