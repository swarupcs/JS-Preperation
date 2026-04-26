# useWindowSize

https://www.greatfrontend.com/questions/javascript/use-window-size?practice=practice&tab=coding



The `useWindowSize` hook can be implemented by storing the current window dimensions in a `useState` state and updating the values when the window is resized. The update logic should be placed inside an event listener for the `resize` event and cleaned up properly when the component unmounts.

```jsx
import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize(): WindowSize {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
}
````

## Arguments

Nothing.

## Returns

The hook returns an object with the following properties:

* `height: number`: Current height of the screen
* `width: number`: Current width of the screen

---

# Editorial

## Solution

The `useWindowSize` hook can be implemented using the `useState` hook to store the current screen properties and the [`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect) hook to update the properties when the screen is resized. We can attach an event listener to the [`resize` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) on the `window` object to update the properties state.

`useLayoutEffect` is used instead of `useEffect` to ensure that the size is updated synchronously after the browser has painted. This is important for animations and other visual effects that depend on the window size.

We recreate the `windowSize` object so that the user doesn't accidentally mutate the original object.

```jsx
/**
 * @typedef {Object} WindowSize
 * @property {number} height
 * @property {number} width
 */
/**
 * @returns {WindowSize}
 */
import { useState, useLayoutEffect } from 'react';

export default function useWindowSize() {
  // Initialize with default 0 values
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    /**
     * Updates the state with the current window dimensions.
     */
    const resize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    // Run on mount to set initial size
    resize();

    // Listen for window resize events
    window.addEventListener('resize', resize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []); // Empty dependency: attach listener once

  return windowSize;
}
````

Below is the **JavaScript version** of your `useWindowSize` hook, including **full explanation** and **inline comments**.

---

# ✅ **JavaScript Version — Fully Commented**

```jsx
import { useState, useLayoutEffect } from 'react';

/**
 * useWindowSize
 * Tracks the window's width and height.
 *
 * @returns {{
 *   width: number,
 *   height: number
 * }}
 */
export default function useWindowSize() {
  // Initialize with default 0 values
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    /**
     * Updates the state with the current window dimensions.
     */
    const resize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    // Run on mount to set initial size
    resize();

    // Listen for window resize events
    window.addEventListener('resize', resize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []); // Empty dependency: attach listener once

  return windowSize;
}
```

---

# 🧠 **Explanation of How the Hook Works**

`useWindowSize` is a custom React hook that tracks the window dimensions:

* `window.innerHeight`
* `window.innerWidth`

Whenever the browser window is resized, the component re-renders with updated values.

---

# 🔍 **Step-by-Step Explanation**

---

## 1️⃣ **State initialization**

```js
const [windowSize, setWindowSize] = useState({
  height: 0,
  width: 0,
});
```

* Before the hook reads the real window size, it starts with `{height: 0, width: 0}`.
* Once mounted, it updates to the actual values.

---

## 2️⃣ **useLayoutEffect instead of useEffect**

```js
useLayoutEffect(() => { ... });
```

Why `useLayoutEffect`?

* It runs **synchronously after DOM mutations**, before the browser repaints.
* Prevents visible flicker between 0 → actual size.
* This is ideal for layout-related updates like window size.

(`useEffect` would also work but might cause 1-frame flicker.)

---

## 3️⃣ **Define `resize` handler**

```js
const resize = () => {
  setWindowSize({
    height: window.innerHeight,
    width: window.innerWidth,
  });
};
```

This function simply updates the state with the current window dimensions.

---

## 4️⃣ **Initialize on mount**

```js
resize();
```

Runs immediately so values are accurate right away.

---

## 5️⃣ **Add event listener**

```js
window.addEventListener('resize', resize);
```

Whenever the browser resizes, `resize()` runs and updates the React state.

This causes a re-render → updated UI.

---

## 6️⃣ **Cleanup on unmount**

```js
return () => {
  window.removeEventListener('resize', resize);
};
```

Removes the event listener to prevent:

* Memory leaks
* Multiple event handlers
* Updating state after unmount

---

## 7️⃣ **Return the current dimensions**

```js
return windowSize;
```

Any component using this hook will re-render whenever width/height changes.

---

# 🎉 Final Output Example

The hook returns:

```js
{
  width: 1440,
  height: 900
}
```

Then re-renders whenever the user resizes the window.




---

# 🧠 **Explanation of How the Hook Works**

`useWindowSize` is a custom React hook that tracks the window dimensions:

* `window.innerHeight`
* `window.innerWidth`

Whenever the browser window is resized, the component re-renders with updated values.

---

# 🔍 **Step-by-Step Explanation**

---

## 1️⃣ **State initialization**

```js
const [windowSize, setWindowSize] = useState({
  height: 0,
  width: 0,
});
```

* Before the hook reads the real window size, it starts with `{height: 0, width: 0}`.
* Once mounted, it updates to the actual values.

---

## 2️⃣ **useLayoutEffect instead of useEffect**

```js
useLayoutEffect(() => { ... });
```

Why `useLayoutEffect`?

* It runs **synchronously after DOM mutations**, before the browser repaints.
* Prevents visible flicker between 0 → actual size.
* This is ideal for layout-related updates like window size.

(`useEffect` would also work but might cause 1-frame flicker.)

---

## 3️⃣ **Define `resize` handler**

```js
const resize = () => {
  setWindowSize({
    height: window.innerHeight,
    width: window.innerWidth,
  });
};
```

This function simply updates the state with the current window dimensions.

---

## 4️⃣ **Initialize on mount**

```js
resize();
```

Runs immediately so values are accurate right away.

---

## 5️⃣ **Add event listener**

```js
window.addEventListener('resize', resize);
```

Whenever the browser resizes, `resize()` runs and updates the React state.

This causes a re-render → updated UI.

---

## 6️⃣ **Cleanup on unmount**

```js
return () => {
  window.removeEventListener('resize', resize);
};
```

Removes the event listener to prevent:

* Memory leaks
* Multiple event handlers
* Updating state after unmount

---

## 7️⃣ **Return the current dimensions**

```js
return windowSize;
```

Any component using this hook will re-render whenever width/height changes.

---

# 🎉 Final Output Example

The hook returns:

```js
{
  width: 1440,
  height: 900
}
```

Then re-renders whenever the user resizes the window.

---

