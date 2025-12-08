# useStep

https://www.greatfrontend.com/questions/javascript/use-step?practice=practice&tab=coding


Implement a `useStep` hook that manages a step counter for a multi-step process.

The hook should provide utility methods to go to the next and previous steps, and allow resetting of the step counter. The step number is 1-indexed and goes up at most to `maxStep`.

```jsx
export default function Component() {
  const {
    step,
    next,
    previous,
    reset,
    setStep,
    hasNext,
    hasPrevious,
  } = useStep(3);

  return (
    <div>
      <p>Step {step}</p>

      <button onClick={previous} disabled={!hasPrevious}>
        Previous
      </button>

      <button onClick={next} disabled={!hasNext}>
        Next
      </button>

      <button onClick={reset}>Reset</button>

      <button onClick={() => setStep(3)}>Go to step 3</button>
    </div>
  );
}
````

## Arguments

* `maxStep: number`: The maximum step number, i.e., the last step

## Returns

The hook returns an object with the following properties/methods:

* `step`: The current step number. It is initialized to `1`
* `next: () => void`: A function that increments the step number
* `previous: () => void`: A function that decrements the step number
* `hasNext: boolean`: A boolean that indicates if there is a next step
* `hasPrevious: boolean`: A boolean that indicates if there is a previous step
* `reset: () => void`: A function that resets the step number to `1`
* `setStep`: A function that sets the step number to a specific step. This should accept both a `number` and an updater function `(currentStep: number) => void`, similar to what the setter function of `useState` accepts


# Editorial


## Solution
The `useStep` hook can be implemented by storing the step number in a `useState` state and defining the utility methods to manipulate the step number in terms of the state's setter function. We bound the step updates between `1` and `maxStep` to ensure the step number does not go out of bounds.

Remember to wrap the utility methods in `useCallback` to prevent unnecessary re-renders of the calling component.

```jsx
/**
 * @param {number} maxStep
 */
import { useCallback, useState } from 'react';

/**
 * useStep hook manages a step counter from 1 to maxStep.
 *
 * @param {number} maxStep - The maximum step number.
 * @returns {{
 *   step: number,
 *   next: () => void,
 *   previous: () => void,
 *   reset: () => void,
 *   hasNext: boolean,
 *   hasPrevious: boolean,
 *   setStep: (number | ((current: number) => number)) => void
 * }}
 */
export default function useStep(maxStep) {
  // Step is 1-indexed, always begins at 1
  const [currentStep, setCurrentStep] = useState(1);

  /**
   * setStep allows setting step manually.
   * It supports:
   * - setStep(3)
   * - setStep(prev => prev + 1)
   *
   * It also prevents invalid step numbers (below 1 or above maxStep).
   */
  const setStep = useCallback(
    (step) => {
      // If step is a function → compute new step
      const newStep = typeof step === 'function' ? step(currentStep) : step;

      // Validate boundaries
      if (newStep < 1 || newStep > maxStep) return;

      setCurrentStep(newStep);
    },
    [currentStep, maxStep]
  );

  /**
   * Goes to the next step, but never exceeds maxStep.
   */
  const next = useCallback(() => {
    setCurrentStep((step) => Math.min(step + 1, maxStep));
  }, [maxStep]);

  /**
   * Goes to the previous step, but never below 1.
   */
  const previous = useCallback(() => {
    setCurrentStep((step) => Math.max(step - 1, 1));
  }, []);

  /**
   * Resets step back to 1.
   */
  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);

  return {
    step: currentStep,
    next,
    previous,
    hasNext: currentStep < maxStep,
    hasPrevious: currentStep > 1,
    setStep,
    reset,
  };
}

````


