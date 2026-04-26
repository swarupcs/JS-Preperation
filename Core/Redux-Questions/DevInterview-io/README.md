https://github.com/Devinterview-io/redux-interview-questions


# Top 100 Redux Interview Questions in 2026

<div>
<p align="center">
<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>

#### You can also find all 100 answers here 👉 [Devinterview.io - Redux](https://devinterview.io/questions/web-and-mobile-development/redux-interview-questions)

<br>

## 1. What is _Redux_ and how is it used in web development?

**Redux** is a predictable state container principally designed for JavaScript applications. It efficiently manages and updates the app state, serving as a **centralized global store**.

### Core Concepts

#### Store

The **store** is at Redux's nucleus and acts as a single source of truth. Here, you'll find the current state alongside the ability to dispatch actions.

#### Actions

**Actions** are payloads of data - typically objects - that describe what needs to happen. These are dispatched to the store.

#### Reducers

**Reducers** are pure functions that specify how the state changes in response to actions. Each reducer handles a particular part of the state and combines to produce the full state.

#### View

The user interface (UI) or the output your app produces, is ideally a direct derivative of the current state. Both are connected through subscription and rendering.

### Data Flow

Redux follows a straightforward loop, or **unidirectional data flow**, that tallies with its action-reducer-store structure.

1. **Acquiring Action**:
   - The UI elements, like buttons, yield actions.

2. **Dispatcher Role**:
   - Through `store.dispatch(action)`, these actions are transmitted to the store.

3. **Action Execution and State Mutation**:
   - With defined logic, reducers modify the state, originating a new state tree.

4. **State Change Subscription notification**:
   - Subscribed UI segments receive alerts about the state change and update correspondingly.

5. **Render Action**:
   - The updated state triggers view re-renders, aligning the UI with the latest state.

### Key Benefits

- **Increased Predictability**: The sequence of state alterations is preset and controlled.
- **Simplified State Management**: Every part of the state is stored in one location.
- **Streamlined Code Execution**:
  - Reducers define state modifications, making it easier to trace changes.
  - Debugging becomes more straightforward and time-efficient.

### Application Across Tech Stacks

While most associates developed Redux for React, the library is platform-agnostic. Adaptors and connectors permit its use with a spectrum of libraries, chiefly **react-redux**. Other integrations include Angular, Vue.js, and vanilla JavaScript applications.
<br>

## 2. Can you describe the three principles that _Redux_ is based upon?

Let's look at the three key principles forming the backbone of **Redux**: **Single Source of Truth**, **State is Read-Only**, and **Changes with Pure Functions**.

### Single Source of Truth

The **state of your whole application** is stored in a single tree or object within the Redux store. This makes it easier to identify where and how the state is changing, leading to better predictability and manageability.

#### Core Benefit

- **Centralized View of State**: You can get a comprehensive snapshot of your app's state at any point in time, making debugging and tracking data flow easier.

### State is Read-Only

In a Redux setup, the state is never modified directly. Any required changes are implemented by dispatching actions capturing the point-by-point changes expected in the state.

#### Core Benefits

- **Clarity and Control**: By preventing direct state alterations, Redux emphasizes a controlled and defined mechanism for state mutation, which is the action creator.
- **Time-Travel Debugging**: Because actions are recorded, you have the option to revert to specific application states for debugging.

### Changes with Pure Functions

The state changes in Redux are driven by pure functions called **reducers**. These functions take the current state and an action as input, and then **return a new state** without altering the previous state.

#### Core Benefits

- **Predictable Outcomes**: Since reducers are deterministic, their output for any given input and action will always be the same, ensuring consistency.
- **Testability and Maintainability**: Pure functions are easier to test and understand, making your codebase more reliable and maintainable.
<br>

## 3. What is an _action_ in _Redux_?

Let's start with an **overview** of actions in Redux before jumping into the code.

### Actions in Redux

In Redux, an **action** encapsulates a "payload" of data meant to change the state. It also carries a descriptive **type**, defining the nature of the state change.

Actions are dispatched by the front-end components and processed by **reducers**, which are pure functions, ensuring predictability.

#### Anatomy of an Action

An action in Redux is created as an object literal with at least one mandatory property, `type`. Optionally, you can have additional data known as the "payload". Here's a typical structure:

```javascript
const myAction = {
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Buy groceries'
  }
};
```

### Code Example: Action

Here's the TypeScript code:

```typescript
// Defining the Action Interface
interface AddTodoAction {
  type: 'ADD_TODO';
  payload: { id: number; text: string };
}

// Creating an action
const addTodoAction: AddTodoAction = {
  type: 'ADD_TODO',
  payload: { id: 1, text: 'Buy groceries' }
};
```

### Considerations

- **Encapsulation**: The type and payload ensure actions are descriptive and structured, simplifying code readability and debugging.
- **Type Safety**: Utilizing TypeScript (or a similar language) for actions brings robust type checking to the development process.
  
For added safety and consistency, consider using action creators.
<br>

## 4. How are _actions_ used to change the _state_ in a _Redux_ application?

**Redux** follows a strict unidirectional data flow pattern, which means that **actions** are the only way to modify **state**.

### The Cycle of Action and State

1. **Action Creation**: You use **Action Creators** to create actions.

2. **Dispatch**: Actions are dispatched using `store.dispatch(action)`. Here, the `store` is the single source of truth in a Redux app and is responsible for action delivery to reducers.

3. **Reducer Listening**: Reducers, which are pure functions, listen for dispatched actions. If a matching action is identified, the reducer performs the necessary state modifications and returns the new state.

4. **Store Update**: The updated state is then stored, and any bound UI components are notified for necessary updates.

### Key Points to Remember

- **State is read-only**: Direct changes to state are not allowed. Instead, an action generator must be dispatched.

- **Synchronous Updates**: Reducers are responsible for synchronous state updates. Any asynchronous logic (like API calls) is typically handled by middleware like **Redux Thunk**.

- **Single Source of Truth**: The application's state is maintained in a single **store**, making it easier to manage and debug.

#### Code Example: Dispatching an Action

Here is the JavaScript code:

```javascript
// Action Creator
function increment() {
  return { type: 'INCREMENT' };
}

// Dispatching the action
store.dispatch(increment());
```

In the example, the `increment` function is an **Action Creator** that creates an **action** with type `'INCREMENT'`. The `store.dispatch` method then dispatches this action.

### Handling State with Reducers

Reducers, pure functions, are the cornerstone in the **state** modification process. When they receive an **action** and the current **state**, they decide how to modify that state. Upon returning a new, updated state, the global **store** replaces the current state with this new state.
<br>

## 5. What is a _reducer_ in _Redux_ and what role does it play?

A **reducer** in **Redux** is a pure function responsible for managing specific parts of your application state. It captures state changes and computes the new state based on those changes.

### Key Characteristics

- **Predictability**: Given the same input, a reducer will always produce the same output, making state management more predictable.
  
- **Immutability**: Reducers handle state immutably, ensuring that every state transition results in a new state object. This helps to avoid side effects and enhances the efficiency of UI and state management libraries like React and their change detection algorithms.

- **Single Responsibility**: Each reducer is geared towards managing a particular slice of application state. This limited scope aids in keeping the codebase organized and makes it easier to debug and maintain.

### Methods and Libraries

Redux provides utility functions, such as `combineReducers()`, to help manage multiple reducers, each responsible for a distinct part of the application state. Libraries like **immer** and **Redux Toolkit** further simplify the process of writing reducers, especially for handling immutable state updates.

### Code Example: Reducer

Here is the JavaScript code:

```javascript
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

In this example, `counterReducer` ensures **immutability** by creating and returning a new state object with each action dispatched.

### Practical Application

Associating actions with reducers allows for a modular and data-driven approach to state management. For instance, clicking a button might dispatch an **'increment'** action, processed by the **counterReducer** to adjust the count value.
<br>

## 6. How does _Redux_ differ from _local component state_ in _React_?

Let's look at the **key differences** between using **Local Component State** and **Redux** for managing state in **React**.

### Why Use Global State Management

Managing state **globally**:

-  Is especially useful for larger applications, as it streamlines access and updates to state across components.
-  Simplifies **data sharing** between components located at different levels of component hierarchy.

### Advantages and Limitations of Local Component State

#### Advantages

- **Simplicity**: It's quick and easy to set up local state within a component.
- **Scoped Updates**: Changes to local state are contained within the component, making it easier to manage and reason about.

#### Limitations

- **State Duplication**: Keeping similar state in sync across multiple components can lead to inconsistencies and bugs.
- **Passing State and Event Handlers**: Necessitates drilling down state and event handlers to nested and related components.
- **Hierarchical Data Flow**: Forces a one-way, parent-to-child data flow, making certain patterns unwieldy to implement.

### Advantages of Global State Management with Redux

- **Centralized State**: Provides a single source of truth, which safeguards against inconsistencies across the application.
- **Predictable State Updates**: Leveraging reducers ensures controlled and consistent state modifications.
- **Data Sharing**: Facilitates data sharing between components without the need for prop drilling.
- **Time-Travel Debugging**: Through tools like Redux DevTools, it makes it possible to revisit and review the state at any point in time during the application's lifecycle.

### When to Choose Which Approach

- **Local State**: Opt for local state management for simpler, predominantly UI-related state or for small-scale applications with minimal state requirements or data sharing needs.
  
- **Redux (or Another Global State Management)**: Choose a global state management system when working with larger-scale applications, multi-level state dependencies, or when extensive data sharing and consistency across the application is critical.
<br>

## 7. Define “_store_” in the context of _Redux_.

In the context of Redux, **the store** is a key component that acts as a central data hub.

### Store Components

1. **State**: Maintains the current data state, which is read-only. To update it, you dispatch actions.

2. **Reducers**: Action-specific functions are responsible for modifying the state and are combined using `combineReducers()`.

3. **Listeners**: Registered callbacks are notified whenever the state is updated.

### Store Mechanics

- **getState()**: Use this method to access the current state.

- **dispatch(action)**: Enforce state updates by providing an action, typically an object with a `type` property.

- **subscribe(listener)**: Keep listeners updated on state changes by registering them.

- **replaceReducer(nextReducer)**: Use the provided reducer to update state-handling logic.

### Store Core Principles

- **Single Source of Truth**: All application data is managed through a single store, ensuring consistency.

- **State is Read-Only**: Prevent accidental state modifications outside reducers to maintain a deterministic behavior.

### Store Setup

To establish a Redux store in your application, use the `createStore()` function and pass in your app's reducers. Then, you can:

- Access the initialized store using `getState()`, `dispatch()`, and `subscribe()`.
- Update the store's reducers dynamically with `replaceReducer()` when necessary.
<br>

## 8. Can you describe the concept of "_single source of truth_" in _Redux_?

**Redux, a predictable state container**, adheres to the **single source of truth** principle. It stipulates that there is a single immutable state tree shared across the entire application.

### Key Benefits

- **Consistency**: All components reflect the latest state, minimizing data inconsistencies.
- **Easy Debugging**: A single point to monitor state changes improves debugging.
- **Conciseness and Clarity**: The central state tree simplifies data management and visibility.
- **Correctness Guarantee**: No parallel updates are possible, leading to improved application stability.

### Potential Drawbacks and Solutions

- **Performance Implications**: Extract only necessary parts of the state for components, often accomplished through selectors.
- **Possible Bottlenecks**: Employ subscriptions or alternative mechanisms for efficient data flow while recognizing the trade-offs.
<br>

## 9. How do you create a _Redux store_?

Creating a **Redux store** involves several key steps. The store serves as a centralized hub for state management across the application.

You can create a Redux Store in any of the three ways:

- **Directly** using `createStore(reducer, [preloadedState], [enhancer])`
- **Via a function** that combines multiple reducers using `combineReducers(reducers)` 
- With **Middlewares** for executing logic in the data flow using `applyMiddleware(middleware1, middleware2, ...)`

### Steps to Create a Redux Store

#### Define the Reducer

First, you have to define at least one **reducer**, a function that determines the shape and state transitions of the store.

If you are going to use multiple reducers, to manage different parts of the state tree, you will need to combine them.

Here is the example code:

```javascript
// counterReducer.js
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

#### Create a Reducer Function

```javascript
// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const reducers = combineReducers({
  counter: counterReducer,
  // Add more reducers here
});

export default reducers;
```

#### Import Additional Reducers

If you have more than one reducer, use `combineReducers` to manage them together.

```javascript
// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default reducers;
```

#### Optional: Add Initial State and Middlewares

A central state can be provided as initial state, for the reducers to pick up their specific sections.

The element `applyMiddleware` should be called with any middlewares you're employing in your application.

```javascript
// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  {
    counter: { count: 10 },
    // Additional initial states for more reducers
  },
  compose(applyMiddleware(middleware1, middleware2))
);

export default store;
```

### Complete Example

Here is the complete example with all the steps:

```javascript
// counterReducer.js
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;

// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default reducers;

// store.js
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  {
    counter: { count: 10 },
    // Additional initial states for more reducers
  },
  compose(applyMiddleware(middleware1, middleware2))
);

export default store;
```
<br>

## 10. What is meant by "_immutable state_," and why is it important in _Redux_?

***Immutable State*** is a key concept in **Redux**, which ensures that the state of an application cannot be changed directly. State alterations are achieved through actions and reducers, making the state more predictable and facilitating better debugging.

### Advantages of Immutable State in Redux

- **State History**: By preserving each state change, you can step forward or backward in time, aiding debugging and enabling features like undo/redo.
  
- **Performance Optimizations**: Redux utilizes reference equality checks. If the new and old states are the same, components avoid unnecessary re-renders.

- **Simplified Component Updates**: With unchanged objects, components can avoid updating unless their inputs change.

- **Threading Safety**: In multi-threaded applications, immutable objects guarantee that state changes don't create race conditions.

### Persisting Immutability in Javascript

The `const` declaration in JavaScript, while not offering immutability for object properties, does ensure that the reference itself (the state object in the context of Redux) remains constant, aligning with Redux's immutability requirement.

#### Ways to Ensure Immutability in Redux

- **Spread Operator**: For shallow cloning of state objects
- **Deep Clone**: For nested objects and arrays. However, this approach might be inefficient for large state objects and should be used judiciously.

#### Immutability Libraries

To simplify working with immutable data, you can use libraries such as:

- **Immer**: Offers a minimalistic API for immutable state management
- **Immutable.js**: Provides a complete data structure library, including both primitive and collection data types. Though powerful, it can be challenging to integrate with existing codebases due to its API differences.
<br>

## 11. Explain the significance of the `combineReducers` function.

The `combineReducers` function in **Redux** plays a central role in structuring large web applications.

### Benefits of `combineReducers`

- **Code Modularity**: By organizing reducers into smaller modules, it even becomes easier to share and reuse them across different parts of the application.

- **Convenience and Clarity**: Instead of dealing with a single overwhelmingly large reducer, developers can manage logically distinct parts of the application separately.

- **Selective Data Handling**: Reducers can act in specified functional areas only, keeping the rest of the state untouched.

- **Efficient Data Flow**: Each reducer only 'listens' to that part of the state that is relevant, potentially improving performance.

### Code Example: `combineReducers` in Action

Consider a note-taking app, which might have three distinct state trees: `notes`, `ui`, and `user`.

Here is how `combineReducers` can be employed:

```javascript
import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import uiReducer from './uiReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  ui: uiReducer,
  user: userReducer
});

export default rootReducer;
```

Each of the imported reducers is a slice of the overall state tree. When an action is dispatched, it is then passed to each of these reducers. They process the action, and the relevant parts of the state tree get updated.
<br>

## 12. What are _pure functions_ and _side effects_ in the context of _Redux_?

In the context of **Redux**, actions alter state through **reducers**, and **middlewares** handle side effects. It's essential that reducer functions be **pure** to ensure predictability in state changes.

### Fundamental Concepts

- **Actions**: Objects describing a state change.
- **Reducers**: Pure functions defining the state change.

- **State**: An immutable object accessible throughout the app.

### Pure Functions

**Reducers** must be pure, that is, their behavior should be entirely predictable.

- **Determination of Output**: Output should be a direct result of input. The function should not base its output on any external state or data.
- **No Side Effects**: They should not cause alterations outside their scope, like modifying global variables or invoking functions that perform I/O operations.
- **Idempotence**: Executing the function multiple times with the same input should provide consistent outcomes and not provoke side effects.

Redux utilizes the principle of **immutability**: once in place, actions or state don't undergo alteration. Instead, they generate a 'new' state that replaces the existing one in its entirety.

### Side Effects

Side effects allude to alterations induced by a function that aren't limited to its return value. **Side-effectful functions** can engage in various actions that extend beyond their obvious purpose. While some side effects are necessary, keeping them compartmentalized is crucial to maintaining code stability and ease of debugging. Side-effect management in Redux is facilitated by **middlewares**, like `redux-thunk` or `redux-saga`. 

#### Code Example: Impure Reducer

This is the Python code:

```python
# Non-Pure Function

state = 0

def increment_counter():
    global state  # Modifies global state
    state += 1
    return state  # Returns a value different from the input

# Result: Output is unpredictable and changes external state
```

### Side Effect Management Methods

Various Redux-specific libraries, such as **Thunks** or **Sagas**, provide mechanisms to tackle side effects in a structured way.

#### Thunks

Thunks are functions that can generate other functions, permitting activities that extend past straightforward dispatch. `redux-thunk` is a well-established middleware that empowers thunks in a Redux store.

#### Code Example: Thunk in Action

This is the JavaScript Code:

```javascript
// Action Creator
const incrementAsync = () => {
  // Returning a function (a thunk)
  return (dispatch) => {
    // Asynchronous Operation
    setTimeout(() => {
      dispatch({ type: 'INCREMENT' }); // Dispatch a regular action after a delay
    }, 2000);
  };
};
```

### Sagas

Sagas are designed on the concept of cooperative concurrency to ***streamline actions with side effects***. In a redux-saga powered store, you interact with such sagas using the middleware `applyMiddleware(sagaMiddleware)`. This is immensely useful for simultaneous operations and complex co-dependencies, especially with asynchronous processes.

#### Code Example: Saga for Input Validation

Here is the JavaScript code:

```javascript
import { takeLatest, call, put } from 'redux-saga/effects';
import { START_SUBMIT, SUCCESS_SUBMIT, FAILED_SUBMIT } from './actionTypes';
import { validateInput } from './api';

function* submitForm(action) {
  const {input} = action.payload;
  try {
    yield call(validateInput, input);
    yield put({ type: SUCCESS_SUBMIT });
  } catch (error) {
    yield put({ type: FAILED_SUBMIT, error });
  }
}

export default function* formSaga() {
  yield takeLatest(START_SUBMIT, submitForm);
}
```
<br>

## 13. How do you handle _asynchronous actions_ in _Redux_?

**Redux'** action creators typically produce immediate synchronous actions. To handle asynchronous behavior, **middleware**, especially **redux-thunk**, is employed.

With `redux-thunk`, action creators can return **functions** instead of plain action objects.

### How `Redux-Thunk` Works

1. **Configuration**: When setting up the Redux store, use `applyMiddleware` to incorporate `redux-thunk`.
2. **Action Dispatch**: When an action creator returns a function, `redux-thunk` intercepts it. This function is then given `dispatch` as its first parameter.

3. **Async Control**: Inside the function, you can manually dispatch actions, often used to denote the start and completion of an asynchronous flow.

### Code Example: Using Thunk Middleware in Redux

Here is the JavaScript code:

```javascript
// configureStore.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// actions.js
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const data = await someAPICall();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_DATA_FAILURE', error: err.message });
    }
  };
};

// reducer.js
const initialState = { data: null, loading: false, error: null };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
```
<br>

## 14. What is a “_selector_” in _Redux_ and what is its purpose?

A **selector** in **Redux** is a **pure function** that efficiently computes derived data from the **Redux store state**.

### Purpose

The key purpose of selectors is to offer:

- **Data Transformation**: Selectors calculate computed data, such as derived state or complex aggregations.
- **Performance Optimization**: They help prevent expensive recalculations and re-renders in components by caching results.

### Core Segments

- **State Slice**: Selects a relevant part of the application state.
- **Data Transformation**: Computes and processes the state slice to generate derived data.
- **Caching Mechanism**: Efficiently handles and updates the selector's result cache.

### Role in Redux Architecture

1. **Input Source**: Selectors receive the complete state object from the store as their input.
2. **Centralized Data Access**: They serve as the primary data source for Redux-connected components.
3. **Efficiency and Consistency**: By transforming and caching state data, selectors improve overall application performance.

### Code Example: Selectors in Redux

Here is the JavaScript code:

```javascript
// Example State
const appState = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    lastLogin: "2023-10-15T08:00:00.000Z",
  },
  products: {
    list: [
      { id: 1, name: "Product 1", price: 100, category: "electronics" },
      { id: 2, name: "Product 2", price: 150, category: "clothing" },
      { id: 3, name: "Product 3", price: 200, category: "electronics" },
    ],
  },
};

// Selectors
const getUser = (state) => state.user;
const getUserEmail = (state) => getUser(state).email;
const getElectronicsProducts = (state) => {
  return state.products.list.filter((product) =>
    product.category === "electronics"
  );
};

// Usage with Selector Functions
console.log(getUserEmail(appState)); // Output: john.doe@example.com
console.log(getElectronicsProducts(appState));
// Output: [ { id: 1, name: "Product 1", price: 100, category: "electronics" }, { id: 3, name: "Product 3", price: 200, category: "electronics" } ]

// Caching Mechanism: Example with Memoization
const getAllProducts = (state) => state.products.list;
const memoizedElectronicsSelector = createSelector(
  [getAllProducts],
  (products) => products.filter((product) => product.category === "electronics")
);

// Add a new product to trigger re-calculation
appState.products.list.push({ id: 4, name: "Product 4", price: 300, category: "electronics" });
// Re-run the memoized selector
console.log(memoizedElectronicsSelector(appState));
// Output: [ { id: 1, name: "Product 1", price: 100, category: "electronics" }, { id: 3, name: "Product 3", price: 200, category: "electronics" }, { id: 4, name: "Product 4", price: 300, category: "electronics" } ]
```
<br>

## 15. How does _Redux_ handle the flow of _data_ and _actions_?

In **Redux**, the **unidirectional data flow** concept ensures data consistency by using one-way channels for state and actions. Let's look at a more detailed overview:

### Key Elements

- **Actions**: These are **objects** with a `type` attribute, describing what needs to change in the application. Actions are dispatched from components and received by reducers.

- **Reducers**: These are **pure functions** that specify how the application's state should transform in response to actions.

- **Store**: It's a **single source of truth**. It holds the application's state tree and is responsible for:
  - State modification through reducers.
  - State dispatch as actions are sent.

### One-Way Data Flow

1. **Action Dispatch**: Components dispatch actions (through `store.dispatch(action)`).
2. **Reducer Receipt**: The store sends the action to the appropriate reducers.
3. **State Changes**: The reducer modifies the state based on the dispatched action.
4. **State Subscription**: The modified state is broadcast to subscribed components.
<br>


## 16. Can you explain the difference between a _Container_ and _Presentational component_ in _Redux_?

In **Redux**, components are typically divided into two categories based on their responsibilities and how they interact with the Redux store.

### Presentational Components

These are concerned only with **how things look**. They:

- Receive data and callbacks via **props**
- Have no dependency on Redux directly
- Rarely have their own state (only UI state)
- Are highly **reusable** and easy to test

```jsx
// Presentational Component — pure UI, no Redux awareness
function UserCard({ name, email, onLogout }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
```

### Container Components

These are concerned with **how things work**. They:

- Connect to the Redux store via `connect()` or hooks
- Dispatch actions and read state
- Pass data and callbacks down as props to presentational components
- Contain **no markup or styling**

```jsx
// Container Component — connects to Redux, passes props down
import { connect } from "react-redux";
import { logout } from "./authActions";
import UserCard from "./UserCard";

const mapStateToProps = (state) => ({
  name:  state.auth.user.name,
  email: state.auth.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
```

### Modern Approach with Hooks

With `useSelector` and `useDispatch`, the container/presentational split is less rigid — a single component can now **read state and dispatch** without `connect()`.

```jsx
// Modern approach — hooks blend both concerns cleanly
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authActions";

function UserCard() {
  const { name, email } = useSelector((state) => state.auth.user);
  const dispatch         = useDispatch();

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
```

### Key Differences

| Aspect | Presentational | Container |
|---|---|---|
| **Purpose** | UI rendering | Data & logic |
| **Redux aware** | No | Yes |
| **Receives data via** | Props | `useSelector` / `connect` |
| **Dispatches actions** | No | Yes |
| **Reusability** | High | Low |
| **Testing** | Simple | Requires mock store |

---

## 17. What is _middleware_ in _Redux_ and when would you use it?

**Middleware** in Redux sits between the **dispatching of an action** and the **moment it reaches the reducer**, allowing you to intercept, transform, delay, or augment actions.

### How Middleware Fits In

```
dispatch(action)
     ↓
[middleware 1] → [middleware 2] → [middleware 3]
     ↓
  reducer(state, action)
     ↓
  new state
```

### When to Use Middleware

- **Async operations** — API calls, timers, WebSockets
- **Logging** — record every action and state change
- **Error reporting** — catch and report reducer errors
- **Analytics** — track user actions
- **Routing** — trigger navigation on certain actions

```javascript
// Applying middleware with Redux Toolkit (configureStore)
import { configureStore } from "@reduxjs/toolkit";
import logger          from "redux-logger";
import rootReducer     from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // append logger after defaults (thunk, etc.)
});
```

### Common Built-in Middleware

```javascript
// redux-thunk (included by default in Redux Toolkit)
// Allows action creators to return a function instead of a plain object

export const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: "user/fetchStart" });

  try {
    const user = await api.getUser(id);
    dispatch({ type: "user/fetchSuccess", payload: user });
  } catch (err) {
    dispatch({ type: "user/fetchError", payload: err.message });
  }
};
```

---

## 18. How do you access the _Redux store_ in a _React component_?

There are two primary ways to access the Redux store in React components — the modern **hooks-based** approach and the older **`connect()` HOC** approach.

### Modern Approach — Hooks (Recommended)

```jsx
// ── useSelector — read state from the store ───────────────────────────────
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement }     from "./counterSlice";

function Counter() {
  // useSelector subscribes to the store and re-renders on change
  const count    = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

### Typed Hooks (TypeScript Projects)

```typescript
// hooks/redux.ts — create typed versions of useSelector and useDispatch
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";

// Use these throughout your app instead of the plain hooks
export const useAppDispatch = ()                          => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Usage in a component — fully type-safe
function Counter() {
  const count    = useAppSelector((state) => state.counter.value); // number
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(increment())}>+</button>;
}
```

### Legacy Approach — `connect()` HOC

```jsx
// connect() maps store state/dispatch to component props
import { connect }  from "react-redux";
import { increment } from "./counterSlice";

function Counter({ count, increment }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapStateToProps    = (state) => ({ count: state.counter.value });
const mapDispatchToProps = { increment };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

### Provider Setup (Required for Both Approaches)

```jsx
// index.tsx — wrap your app in Provider to make store available everywhere
import { Provider } from "react-redux";
import { store }    from "./store";
import App          from "./App";

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## 19. What is the purpose of the `dispatch` function in _Redux_?

The `dispatch` function is the **only way to trigger a state change** in Redux. It sends an action to the store, which forwards it to the reducers.

### Basic Usage

```javascript
// dispatch sends an action object to the store
store.dispatch({ type: "counter/increment" });

// With a payload
store.dispatch({ type: "user/setName", payload: "Alice" });
```

### With Action Creators

```javascript
// Action creators return action objects — dispatch invokes them
const increment  = ()     => ({ type: "counter/increment" });
const setName    = (name) => ({ type: "user/setName", payload: name });

dispatch(increment());
dispatch(setName("Alice"));
```

### With Redux Toolkit (createSlice)

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },  // Immer handles immutability
    decrement: (state) => { state.value -= 1; },
    addAmount: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, addAmount } = counterSlice.actions;

// In a component:
dispatch(increment());        // { type: "counter/increment" }
dispatch(addAmount(5));       // { type: "counter/addAmount", payload: 5 }
```

### Dispatch with Thunks (Async)

```javascript
// dispatch can also handle thunks — functions that receive dispatch and getState
const fetchAndSetUser = (id) => async (dispatch, getState) => {
  const { auth } = getState();                    // access current state
  if (auth.userId === id) return;                 // skip if already loaded

  dispatch({ type: "user/loading" });

  const user = await api.fetchUser(id);
  dispatch({ type: "user/loaded", payload: user });
};

// Dispatch the thunk just like a regular action
dispatch(fetchAndSetUser(42));
```

---

## 20. What arguments does `createStore` receive in _Redux_?

`createStore` accepts up to **three arguments** to configure the store. Note that in modern Redux, `configureStore` from Redux Toolkit is preferred.

```javascript
// Legacy createStore signature:
createStore(reducer, preloadedState?, enhancer?)
```

### Argument 1 — `reducer` (required)

```javascript
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  user:    userReducer,
});

const store = createStore(rootReducer);
```

### Argument 2 — `preloadedState` (optional)

```javascript
// Useful for SSR hydration or persisted state rehydration
const persistedState = JSON.parse(localStorage.getItem("reduxState") ?? "{}");

const store = createStore(rootReducer, persistedState);
```

### Argument 3 — `enhancer` (optional)

```javascript
import { createStore, applyMiddleware, compose } from "redux";
import thunk  from "redux-thunk";
import logger from "redux-logger";

// applyMiddleware is the most common enhancer
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

// With Redux DevTools + middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk, logger))
);
```

### Modern Equivalent — `configureStore` (Recommended)

```javascript
// Redux Toolkit's configureStore handles all of this automatically
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer:      rootReducer,          // required
  preloadedState,                     // optional
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), // thunk included by default
  devTools: process.env.NODE_ENV !== "production",
});
```

---

## 21. Describe the `subscribe` function in _Redux_.

`store.subscribe()` registers a **listener callback** that fires every time an action is dispatched and the state may have changed.

```javascript
// subscribe returns an unsubscribe function
const unsubscribe = store.subscribe(() => {
  console.log("State changed:", store.getState());
});

store.dispatch({ type: "counter/increment" }); // triggers the listener

// Call unsubscribe to remove the listener (avoid memory leaks)
unsubscribe();
```

### Practical Use — Persist State to localStorage

```javascript
const store = createStore(rootReducer);

// Save state to localStorage whenever it changes
store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem("reduxState", JSON.stringify({
    user:    state.user,
    settings: state.settings,
    // ⚠️ Don't persist transient state (loading flags, errors, etc.)
  }));
});
```

### Important Notes

```javascript
// subscribe fires on EVERY dispatch — even if the relevant slice didn't change
// This is why React-Redux's useSelector is preferred — it only re-renders
// when the selected portion of state actually changes

store.subscribe(() => {
  // ⚠️ No way to know WHICH part of state changed here
  // ⚠️ Fires even for unrelated action types
  renderApp(store.getState());
});

// React-Redux (useSelector) handles this efficiently with reference equality checks:
const count = useSelector((state) => state.counter.value);
// Only re-renders when state.counter.value reference changes
```

---

## 22. How do you structure _action creators_ in _Redux_?

Action creators are **functions that return action objects**. There are several ways to structure them, from plain functions to Redux Toolkit's `createSlice`.

### Plain Action Creators

```javascript
// actions/counter.js
export const INCREMENT   = "counter/increment";
export const DECREMENT   = "counter/decrement";
export const SET_AMOUNT  = "counter/setAmount";

export const increment  = ()       => ({ type: INCREMENT });
export const decrement  = ()       => ({ type: DECREMENT });
export const setAmount  = (amount) => ({ type: SET_AMOUNT, payload: amount });
```

### Redux Toolkit — `createSlice` (Recommended)

```javascript
// features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState { value: number; }

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Action creator + reducer in one — auto-generates action types
    increment:  (state)                        => { state.value += 1; },
    decrement:  (state)                        => { state.value -= 1; },
    setAmount:  (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Auto-generated action creators with correct types:
export const { increment, decrement, setAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### Async Action Creators — `createAsyncThunk`

```javascript
// features/users/usersSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk generates pending/fulfilled/rejected action types automatically
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",           // action type prefix
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/users");
      return await response.json();            // becomes action.payload on fulfilled
    } catch (err) {
      return rejectWithValue(err.message);     // becomes action.payload on rejected
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending,   (state)          => { state.loading = true; })
      .addCase(fetchUsers.fulfilled, (state, action)  => {
        state.loading = false;
        state.list    = action.payload;
      })
      .addCase(fetchUsers.rejected,  (state, action)  => {
        state.loading = false;
        state.error   = action.payload;
      });
  },
});
```

---

## 23. What is an _action type_ and how is it used in _Redux_?

An **action type** is a **string constant** that uniquely identifies the kind of action being dispatched. It is the `type` field every Redux action must have.

### Defining Action Types

```javascript
// ── Option 1: Plain string constants ──────────────────────────────────────
export const ADD_TODO    = "todos/add";
export const REMOVE_TODO = "todos/remove";
export const TOGGLE_TODO = "todos/toggle";

// ── Option 2: Namespace with a prefix (avoids collisions) ─────────────────
const TODO_PREFIX        = "todos";
export const ADD_TODO    = `${TODO_PREFIX}/add`;

// ── Option 3: Redux Toolkit createSlice (auto-generates types) ────────────
// "todos/add", "todos/remove" are generated automatically from slice name + key
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add:    (state, action) => { state.push(action.payload); },
    remove: (state, action) => state.filter(t => t.id !== action.payload),
    toggle: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

// Inspect the generated types:
console.log(todosSlice.actions.add.type);    // "todos/add"
console.log(todosSlice.actions.remove.type); // "todos/remove"
```

### Using Action Types in Reducers

```javascript
// Reducer using string constants — exhaustive switch on action type
function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((t) => t.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    default:
      return state;    // ⚠️ Always return current state for unknown actions
  }
}
```

---

## 24. Can you give an example of a _synchronous action creator_?

A **synchronous action creator** is a plain function that **immediately returns** an action object — no async operations involved.

```javascript
// ── 1. Basic synchronous action creators ──────────────────────────────────

// No payload
export const increment = () => ({ type: "counter/increment" });

// With payload
export const setUsername = (name)    => ({ type: "user/setName",   payload: name });
export const setAge      = (age)     => ({ type: "user/setAge",    payload: age  });
export const setFilter   = (filter)  => ({ type: "todos/setFilter",payload: filter });
```

```javascript
// ── 2. With metadata / error flag ─────────────────────────────────────────
// Following the Flux Standard Action (FSA) pattern

export const setError = (message) => ({
  type:    "app/setError",
  payload: new Error(message),
  error:   true,           // FSA convention: marks payload as an Error object
});

export const addTodo = (text) => ({
  type:    "todos/add",
  payload: { id: Date.now(), text, completed: false },
  meta:    { source: "user-input" },  // FSA: extra info not part of payload
});
```

```javascript
// ── 3. Redux Toolkit equivalent — createSlice ──────────────────────────────
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", age: 0 },
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload;        // Immer allows direct mutation
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { setUsername, setAge } = userSlice.actions;

// Usage — dispatching synchronous actions in a component:
dispatch(setUsername("Alice"));
dispatch(setAge(30));
```

---

## 25. How do you handle complex _state logic_ in _actions_?

Complex state logic in actions is typically handled using **thunks**, **createAsyncThunk**, or **Redux-Saga**, combined with well-structured action sequencing.

### Thunks for Multi-Step Logic

```javascript
// A thunk that orchestrates multiple dispatches and conditional logic
export const loginAndFetchDashboard = (credentials) =>
  async (dispatch, getState) => {
    // Step 1 — Authenticate
    dispatch({ type: "auth/loginStart" });

    let user;
    try {
      user = await authApi.login(credentials);
      dispatch({ type: "auth/loginSuccess", payload: user });
    } catch (err) {
      dispatch({ type: "auth/loginFailure", payload: err.message });
      return;                          // ← early exit on failure
    }

    // Step 2 — Load dashboard data (only if login succeeded)
    const { settings } = getState();   // ← read current state mid-thunk
    if (settings.loadDashboardOnLogin) {
      dispatch({ type: "dashboard/loading" });
      const data = await dashboardApi.fetch(user.id);
      dispatch({ type: "dashboard/loaded", payload: data });
    }
  };
```

### `createAsyncThunk` with Conditional Logic

```javascript
import { createAsyncThunk }  from "@reduxjs/toolkit";

export const fetchProductDetails = createAsyncThunk(
  "products/fetchDetails",
  async (productId, { getState, dispatch, rejectWithValue }) => {
    const { products } = getState();

    // Skip fetch if already cached
    if (products.cache[productId]) {
      return products.cache[productId];
    }

    try {
      const [product, reviews] = await Promise.all([
        api.getProduct(productId),
        api.getReviews(productId),
      ]);

      // Dispatch a related action mid-thunk
      dispatch(incrementViewCount(productId));

      return { product, reviews };
    } catch (err) {
      return rejectWithValue({ productId, error: err.message });
    }
  }
);
```

---

## 26. Explain the concept of _action creators_ returning a function for _asynchronous operations_.

When an action creator returns a **function** instead of a plain object, Redux cannot handle it natively. **Redux Thunk** middleware intercepts it and calls it with `dispatch` and `getState`.

### How Thunk Middleware Works Internally

```javascript
// Thunk middleware — conceptually this simple
const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    // It's a thunk — call it with dispatch and getState
    return action(store.dispatch, store.getState);
  }
  // It's a plain action — pass it along normally
  return next(action);
};
```

### Thunk Action Creator Pattern

```javascript
// Returns a plain object — synchronous, no middleware needed
export const setUser = (user) => ({ type: "user/set", payload: user });

// Returns a FUNCTION — requires thunk middleware
export const fetchUser = (userId) => async (dispatch, getState) => {
  const { auth } = getState();
  if (!auth.token) return;                    // guard with current state

  dispatch({ type: "user/loading" });

  try {
    const user = await api.getUser(userId);
    dispatch({ type: "user/loaded", payload: user });
  } catch (err) {
    dispatch({ type: "user/error", payload: err.message });
  }
};

// Both are dispatched the same way — middleware handles the difference
dispatch(setUser({ name: "Alice" }));   // plain object → reducer directly
dispatch(fetchUser(123));               // function → thunk middleware intercepts
```

### Redux Toolkit — `createAsyncThunk` (Modern Standard)

```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk generates the thunk + three action types automatically
export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (userId: number, { dispatch, getState, rejectWithValue }) => {
    const response = await api.getUser(userId);
    if (!response.ok) return rejectWithValue("Failed to fetch");
    return response.json();                  // returned value → action.payload
  }
);

// Slice handles all three lifecycle actions
const userSlice = createSlice({
  name: "user",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending,   (state)         => { state.loading = true;         })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data    = action.payload;
      })
      .addCase(fetchUser.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload as string;
      });
  },
});
```

## 27. How do _reducers_ handle state changes in response to different _action types_?

Reducers are **pure functions** that take the current state and an action, then return a **new state** based on the action type — never mutating the original state.

### Classic Switch-Based Reducer

```javascript
// A reducer handles every action type it cares about
const initialState = {
  items:   [],
  loading: false,
  error:   null,
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/loading":
      return { ...state, loading: true, error: null };

    case "todos/loaded":
      return { ...state, loading: false, items: action.payload };

    case "todos/add":
      return { ...state, items: [...state.items, action.payload] };

    case "todos/remove":
      return {
        ...state,
        items: state.items.filter((t) => t.id !== action.payload),
      };

    case "todos/toggle":
      return {
        ...state,
        items: state.items.map((t) =>
          t.id === action.payload
            ? { ...t, completed: !t.completed }
            : t
        ),
      };

    case "todos/error":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;   // ⚠️ Always return current state for unknown actions
  }
}
```

### Redux Toolkit — `createSlice` (Recommended)

```javascript
// Immer handles immutability — you can "mutate" state directly
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo { id: number; text: string; completed: boolean; }
interface TodosState { items: Todo[]; loading: boolean; error: string | null; }

const todosSlice = createSlice({
  name: "todos",
  initialState: { items: [], loading: false, error: null } as TodosState,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error   = null;
    },
    loaded: (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.items   = action.payload;
    },
    add: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);         // Immer makes this safe
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    toggle: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { loading, loaded, add, remove, toggle } = todosSlice.actions;
export default todosSlice.reducer;
```

---

## 28. What is meant by a "_slice reducer_"?

A **slice reducer** manages a **specific slice** (sub-section) of the overall Redux state tree — handling only the state and actions relevant to one feature.

### Manual Slice Reducer

```javascript
// Each slice reducer owns its own piece of state
const initialAuthState = { user: null, token: null, loading: false };

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "auth/loginSuccess":
      return { ...state, user: action.payload.user, token: action.payload.token };
    case "auth/logout":
      return initialAuthState;
    default:
      return state;
  }
}

// combineReducers stitches slice reducers into a single root reducer
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth:    authReducer,    // state.auth
  todos:   todosReducer,   // state.todos
  ui:      uiReducer,      // state.ui
});
```

### Redux Toolkit `createSlice`

```javascript
// createSlice bundles initialState + reducers + action creators into one unit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",                                 // slice name = state key
  initialState: { user: null, token: null, loading: false },
  reducers: {
    loginStart:   (state) => { state.loading = true; },
    loginSuccess: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.loading = false;
      state.user    = action.payload.user;
      state.token   = action.payload.token;
    },
    logout: (state) => {
      state.user  = null;
      state.token = null;
    },
  },
});

// store.ts — register slice reducers
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth:  authSlice.reducer,   // state.auth
    todos: todosSlice.reducer,  // state.todos
  },
});

export type RootState = ReturnType<typeof store.getState>;
```

---

## 29. Describe how to properly update the _state_ based on an _action_.

Proper state updates in Redux require **immutability** — always return a new state object rather than mutating the existing one.

### Immutable Updates (Vanilla Redux)

```javascript
function reducer(state = initialState, action) {
  switch (action.type) {

    // ── Updating a top-level field ─────────────────────────────────────
    case "user/setName":
      return { ...state, name: action.payload };

    // ── Updating a nested object ────────────────────────────────────────
    case "user/setAddress":
      return {
        ...state,
        address: { ...state.address, ...action.payload },
      };

    // ── Adding to an array ──────────────────────────────────────────────
    case "todos/add":
      return { ...state, items: [...state.items, action.payload] };

    // ── Removing from an array ──────────────────────────────────────────
    case "todos/remove":
      return {
        ...state,
        items: state.items.filter((t) => t.id !== action.payload),
      };

    // ── Updating an item in an array ────────────────────────────────────
    case "todos/update":
      return {
        ...state,
        items: state.items.map((t) =>
          t.id === action.payload.id ? { ...t, ...action.payload } : t
        ),
      };

    // ── ❌ WRONG — never mutate state directly ──────────────────────────
    // case "todos/add":
    //   state.items.push(action.payload);  // mutation!
    //   return state;

    default:
      return state;
  }
}
```

### With Redux Toolkit (Immer — Recommended)

```javascript
// Immer lets you write "mutating" code that produces immutable updates
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { items: [], selectedId: null },
  reducers: {
    // ✅ Direct mutation — Immer converts this to an immutable update
    add: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    update: (state, action: PayloadAction<Partial<Todo> & { id: number }>) => {
      const todo = state.items.find((t) => t.id === action.payload.id);
      if (todo) Object.assign(todo, action.payload);
    },
    // ✅ Or return a new value entirely (both styles work with Immer)
    reset: () => ({ items: [], selectedId: null }),
  },
});
```

---

## 30. How would you reset the state of a _Redux store_?

Resetting Redux store state is a common requirement for logout flows or testing. There are several clean patterns to achieve this.

### Pattern 1 — Root Reducer Intercepts a Reset Action

```javascript
// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer   from "./authSlice";
import todosReducer  from "./todosSlice";

const appReducer = combineReducers({
  auth:  authReducer,
  todos: todosReducer,
});

// Wrap the combined reducer to intercept the RESET action
const rootReducer = (state, action) => {
  if (action.type === "app/reset") {
    state = undefined;             // passing undefined resets each slice to initialState
  }
  return appReducer(state, action);
};

export default rootReducer;
```

```javascript
// Dispatch the reset action anywhere (e.g., on logout)
dispatch({ type: "app/reset" });
```

### Pattern 2 — Per-Slice Reset with `extraReducers`

```javascript
// Reset only specific slices, not the entire store
import { createAction, createSlice } from "@reduxjs/toolkit";

export const resetApp = createAction("app/reset");

const todosSlice = createSlice({
  name: "todos",
  initialState: { items: [], loading: false },
  reducers: { /* ...normal reducers */ },
  extraReducers: (builder) => {
    builder.addCase(resetApp, () => ({ items: [], loading: false }));
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: { /* ...normal reducers */ },
  extraReducers: (builder) => {
    // Auth slice does NOT reset on app/reset — user stays logged in
  },
});
```

### Pattern 3 — Logout Thunk

```javascript
// Combines logout API call + store reset in one thunk
export const logoutAndReset = () => async (dispatch) => {
  try {
    await authApi.logout();           // call server logout endpoint
  } finally {
    dispatch({ type: "app/reset" }); // always reset store, even if API fails
  }
};
```

---

## 31. Can you discuss _reducer composition_ and its benefits?

**Reducer composition** is the practice of splitting a large reducer into smaller, focused reducers that each manage a specific slice of state — then combining them into a single root reducer.

### Without Composition (Hard to Maintain)

```javascript
// ❌ One giant reducer handling everything
function rootReducer(state = {}, action) {
  switch (action.type) {
    case "auth/login":      return { ...state, auth: { ...state.auth, user: action.payload } };
    case "todos/add":       return { ...state, todos: { ...state.todos, items: [...state.todos.items, action.payload] } };
    case "ui/toggleTheme":  return { ...state, ui: { ...state.ui, darkMode: !state.ui.darkMode } };
    default:                return state;
  }
}
```

### With Composition — `combineReducers`

```javascript
// ✅ Each reducer is small, focused, and independently testable
import { combineReducers } from "redux";

// auth slice reducer
function authReducer(state = { user: null, token: null }, action) {
  switch (action.type) {
    case "auth/login":  return { ...state, user: action.payload.user, token: action.payload.token };
    case "auth/logout": return { user: null, token: null };
    default:            return state;
  }
}

// todos slice reducer
function todosReducer(state = { items: [] }, action) {
  switch (action.type) {
    case "todos/add":    return { ...state, items: [...state.items, action.payload] };
    case "todos/remove": return { ...state, items: state.items.filter(t => t.id !== action.payload) };
    default:             return state;
  }
}

// ui slice reducer
function uiReducer(state = { darkMode: false }, action) {
  switch (action.type) {
    case "ui/toggleTheme": return { ...state, darkMode: !state.darkMode };
    default:               return state;
  }
}

// Combine into a single root reducer
const rootReducer = combineReducers({
  auth:  authReducer,   // state.auth
  todos: todosReducer,  // state.todos
  ui:    uiReducer,     // state.ui
});
```

### Benefits

| Benefit | Description |
|---|---|
| **Separation of concerns** | Each reducer handles one domain |
| **Independent testing** | Test each slice in isolation |
| **Scalability** | Add new slices without touching existing code |
| **Readability** | Smaller files are easier to reason about |
| **Team collaboration** | Teams own separate slices |

---

## 32. What is the significance of _immutability_ in _reducer functions_?

**Immutability** ensures that reducers never modify the existing state object — they always return **new references**, which Redux and React use to detect changes efficiently.

### Why Immutability Matters

```javascript
// Redux change detection uses reference equality (===)
// If the reference hasn't changed, Redux assumes nothing changed

// ❌ MUTATION — Redux sees the same reference, skips re-render
function badReducer(state = { count: 0 }, action) {
  if (action.type === "increment") {
    state.count += 1;   // mutates state directly!
    return state;       // same reference — React-Redux won't re-render
  }
  return state;
}

// ✅ IMMUTABLE — new reference, Redux detects the change correctly
function goodReducer(state = { count: 0 }, action) {
  if (action.type === "increment") {
    return { ...state, count: state.count + 1 }; // new object
  }
  return state;
}
```

### Immutable Update Patterns

```javascript
// ── Updating nested objects ────────────────────────────────────────────────
case "user/updateAddress":
  return {
    ...state,
    profile: {
      ...state.profile,
      address: {
        ...state.profile.address,
        city: action.payload,       // only city changes
      },
    },
  };

// ── Updating an array item ────────────────────────────────────────────────
case "todos/complete":
  return {
    ...state,
    items: state.items.map((item) =>
      item.id === action.payload
        ? { ...item, completed: true }  // new item object
        : item
    ),
  };
```

### Immer — Write Mutations, Get Immutability

```javascript
// Redux Toolkit uses Immer under the hood
// You write "mutating" code, Immer produces immutable updates
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { profile: { address: { city: "" } } },
  reducers: {
    updateCity: (state, action) => {
      // Looks like mutation — Immer converts it to a safe immutable update
      state.profile.address.city = action.payload;
    },
  },
});
```

---

## 33. How do you handle _initial state_ in _Redux reducers_?

**Initial state** defines what the state looks like before any actions are dispatched. It should be **explicitly defined** and **fully typed** in TypeScript projects.

### Default Parameter in Reducer

```javascript
// ES6 default parameter sets initial state
const initialState = {
  items:   [],
  loading: false,
  error:   null,
  page:    1,
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/loading": return { ...state, loading: true };
    default:              return state;
  }
}
```

### With Redux Toolkit + TypeScript

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User { id: number; name: string; email: string; }
interface UsersState {
  list:    User[];
  loading: boolean;
  error:   string | null;
  total:   number;
}

// Explicit, fully typed initial state
const initialState: UsersState = {
  list:    [],
  loading: false,
  error:   null,
  total:   0,
};

const usersSlice = createSlice({
  name: "users",
  initialState,             // TypeScript infers slice state type from here
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error   = null;
    },
    fetchSuccess: (state, action: PayloadAction<{ users: User[]; total: number }>) => {
      state.loading = false;
      state.list    = action.payload.users;
      state.total   = action.payload.total;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error   = action.payload;
    },
  },
});
```

### Preloaded State (Server-Side Rendering)

```javascript
// Pass server-fetched state to configureStore as preloadedState
const store = configureStore({
  reducer: rootReducer,
  preloadedState: window.__PRELOADED_STATE__ ?? {},  // injected by server
});

// Clean up after hydration to free memory
delete window.__PRELOADED_STATE__;
```

---

## 34. What are common pitfalls when writing _reducers_?

Understanding these pitfalls helps you write **correct, predictable** reducers that work reliably with Redux's change detection.

### Pitfall 1 — Mutating State Directly

```javascript
// ❌ Direct mutation — Redux won't detect the change
case "todos/add":
  state.items.push(action.payload);  // mutates existing array!
  return state;                      // same reference returned

// ✅ Return a new reference
case "todos/add":
  return { ...state, items: [...state.items, action.payload] };
```

### Pitfall 2 — Missing `default` Case

```javascript
// ❌ No default — returns undefined on unknown actions
function reducer(state, action) {
  switch (action.type) {
    case "increment": return { ...state, count: state.count + 1 };
    // missing default!
  }
}

// ✅ Always return current state for unhandled actions
function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment": return { ...state, count: state.count + 1 };
    default:          return state;
  }
}
```

### Pitfall 3 — Side Effects Inside Reducers

```javascript
// ❌ Reducers must be pure — no API calls, random values, or Date.now()
case "todos/add":
  return {
    ...state,
    items: [...state.items, {
      id:        Math.random(),    // ❌ impure — different value every call
      createdAt: new Date(),       // ❌ impure — different value every call
      text:      action.payload,
    }],
  };

// ✅ Generate IDs/timestamps in action creators or thunks, not reducers
export const addTodo = (text) => ({
  type:    "todos/add",
  payload: { id: crypto.randomUUID(), createdAt: Date.now(), text },
});

case "todos/add":
  return { ...state, items: [...state.items, action.payload] }; // pure ✅
```

### Pitfall 4 — Shallow Copy of Nested State

```javascript
// ❌ Spread only copies one level — nested objects still share references
case "user/updateCity":
  return {
    ...state,
    address: state.address,           // ❌ same reference as before
  };

// ✅ Spread all levels that change
case "user/updateCity":
  return {
    ...state,
    address: { ...state.address, city: action.payload }, // ✅ new address object
  };
```

### Pitfall 5 — Returning `undefined`

```javascript
// ❌ Forgetting to return state in some branches
function reducer(state = initialState, action) {
  if (action.type === "increment") {
    return { ...state, count: state.count + 1 };
  }
  // ❌ implicitly returns undefined for all other actions
}

// ✅ Always explicitly return state
function reducer(state = initialState, action) {
  if (action.type === "increment") {
    return { ...state, count: state.count + 1 };
  }
  return state;  // ✅
}
```

---

## 35. What is `redux-thunk` and how does it work?

**`redux-thunk`** is middleware that allows action creators to return **functions** instead of plain action objects, enabling async logic like API calls inside Redux actions.

### How It Works Internally

```javascript
// The entire redux-thunk source is ~10 lines
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    // Thunk detected — call it with dispatch and getState
    return action(dispatch, getState);
  }
  // Plain action — pass to next middleware / reducer
  return next(action);
};

export default thunk;
```

### Basic Thunk Example

```javascript
// Returns a plain object — no thunk needed
export const setUser = (user) => ({ type: "user/set", payload: user });

// Returns a function — thunk middleware intercepts it
export const fetchUser = (userId) => async (dispatch, getState) => {
  const { auth } = getState();

  dispatch({ type: "user/loading" });

  try {
    const user = await api.getUser(userId);
    dispatch({ type: "user/loaded", payload: user });
  } catch (err) {
    dispatch({ type: "user/error", payload: err.message });
  }
};

// Dispatching works the same for both
dispatch(setUser({ name: "Alice" }));
dispatch(fetchUser(42));
```

### With Redux Toolkit (Thunk Included by Default)

```typescript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../store";

// createAsyncThunk is the RTK-recommended way to write thunks
export const fetchUser = createAsyncThunk
  User,                  // return type
  number,                // argument type
  { state: RootState; dispatch: AppDispatch }
>(
  "user/fetch",
  async (userId, { getState, rejectWithValue }) => {
    const { auth } = getState();
    if (!auth.token) return rejectWithValue("Not authenticated");

    const res = await api.getUser(userId);
    if (!res.ok)       return rejectWithValue("Failed to fetch");
    return res.json();
  }
);
```

---

## 36. Can you explain the purpose of `redux-saga` and how it compares to `redux-thunk`?

**`redux-saga`** is a middleware that uses **ES6 generator functions** to handle complex async flows, offering more control over side effects than `redux-thunk`.

### Redux Saga Setup

```javascript
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga  from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga); // start the root saga
```

### Basic Saga vs Thunk — Same Task

```javascript
// ── Thunk approach ─────────────────────────────────────────────────────────
export const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: "user/loading" });
  try {
    const user = await api.getUser(id);
    dispatch({ type: "user/loaded", payload: user });
  } catch (err) {
    dispatch({ type: "user/error", payload: err.message });
  }
};

// ── Saga approach ──────────────────────────────────────────────────────────
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchUserSaga(action) {
  try {
    yield put({ type: "user/loading" });
    const user = yield call(api.getUser, action.payload); // call is testable
    yield put({ type: "user/loaded", payload: user });
  } catch (err) {
    yield put({ type: "user/error", payload: err.message });
  }
}

// Watch for dispatched actions and run the saga
function* rootSaga() {
  yield takeLatest("user/fetch", fetchUserSaga); // cancels previous if re-triggered
}
```

### Advanced Saga Features (Where Saga Shines)

```javascript
import { all, race, take, delay, call, put, takeEvery } from "redux-saga/effects";

// ── Race condition — cancel fetch if user logs out first ──────────────────
function* fetchWithCancelSaga() {
  const { data, cancel } = yield race({
    data:   call(api.fetchData),
    cancel: take("auth/logout"),    // whichever resolves first wins
  });

  if (data)   yield put({ type: "data/loaded",    payload: data });
  if (cancel) yield put({ type: "data/cancelled" });
}

// ── Debounce — wait 300ms before searching ────────────────────────────────
function* searchSaga(action) {
  yield delay(300);                 // built-in debounce
  const results = yield call(api.search, action.payload);
  yield put({ type: "search/results", payload: results });
}

// ── Parallel calls ────────────────────────────────────────────────────────
function* loadDashboard() {
  const [user, stats, notifications] = yield all([
    call(api.getUser),
    call(api.getStats),
    call(api.getNotifications),
  ]);
  yield put({ type: "dashboard/loaded", payload: { user, stats, notifications } });
}
```

### Thunk vs Saga Comparison

| Aspect | redux-thunk | redux-saga |
|---|---|---|
| **Complexity** | Simple | Steeper learning curve |
| **Async style** | `async/await` | Generator functions |
| **Testability** | Requires mocking | Effects are plain objects — easy to test |
| **Advanced flows** | Manual implementation | Built-in (`race`, `takeLatest`, `debounce`) |
| **Bundle size** | ~600B | ~14KB |
| **Best for** | Simple async | Complex async workflows |

---

## 37. What is a "_side effect_" and how do _middlewares_ handle them in _Redux_?

A **side effect** is any operation that affects something outside the pure function — API calls, timers, localStorage access, logging, or WebSocket connections.

### What Makes Something a Side Effect

```javascript
// ✅ Pure — no side effects
const add = (a, b) => a + b;

// ❌ Side effects — impure
const fetchData = async () => await api.get("/data");   // network call
const logAction = (action) => console.log(action);      // I/O
const saveState = (state) => localStorage.setItem(...); // storage
const getTime   = () => Date.now();                     // non-deterministic
```

### Why Reducers Can't Have Side Effects

```javascript
// ❌ Reducer with side effect — NEVER do this
function reducer(state = initialState, action) {
  if (action.type === "user/fetch") {
    fetch("/api/user")           // ❌ side effect inside reducer!
      .then(res => res.json())
      .then(user => /* can't dispatch here */);
  }
  return state;
}
```

### Middleware Intercepts and Handles Side Effects

```javascript
// Custom logging middleware — handles a side effect (console.log)
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);            // side effect: logging
  console.log("prev state:", store.getState());
  const result = next(action);           // pass action to next middleware/reducer
  console.log("next state:", store.getState());
  console.groupEnd();
  return result;
};

// Custom analytics middleware — sends events to an analytics service
const analyticsMiddleware = (store) => (next) => (action) => {
  if (action.meta?.track) {
    analytics.track(action.type, action.payload);  // side effect: analytics
  }
  return next(action);
};

// Apply multiple middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, analyticsMiddleware),
});
```

---

## 38. How do you write a custom _middleware_ for _Redux_?

Custom middleware follows a **curried function signature** of `store => next => action => {}` and can intercept, transform, delay, or augment any dispatched action.

### Middleware Signature

```javascript
// Every middleware follows this exact signature
const myMiddleware = (store) => (next) => (action) => {
  // store.getState() — read current state
  // store.dispatch() — dispatch a new action
  // next(action)     — pass action to next middleware (or reducer)
  // action           — the dispatched action object or function

  return next(action); // always call next unless intentionally blocking
};
```

### Example 1 — Logger Middleware

```javascript
const loggerMiddleware = (store) => (next) => (action) => {
  const prevState = store.getState();

  console.group(`%c Action: ${action.type}`, "color: #4CAF50; font-weight: bold");
  console.log("Payload:    ", action.payload);
  console.log("Prev State: ", prevState);

  const result = next(action);           // let the action proceed

  console.log("Next State: ", store.getState());
  console.groupEnd();

  return result;
};
```

### Example 2 — Error Reporter Middleware

```javascript
const errorMiddleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    // Report to error tracking service
    Sentry.captureException(err, {
      extra: { action, state: store.getState() },
    });
    throw err; // re-throw so the app still knows about it
  }
};
```

### Example 3 — API Middleware

```javascript
// Intercepts actions with a specific shape and handles the API call
const apiMiddleware = (store) => (next) => async (action) => {
  if (action.type !== "API_CALL") return next(action);

  const { endpoint, method = "GET", onSuccess, onError } = action.payload;

  store.dispatch({ type: `${onSuccess}_LOADING` });

  try {
    const res  = await fetch(endpoint, { method });
    const data = await res.json();
    store.dispatch({ type: onSuccess, payload: data });
  } catch (err) {
    store.dispatch({ type: onError, payload: err.message });
  }
};

// Usage
dispatch({
  type: "API_CALL",
  payload: {
    endpoint:  "/api/users",
    onSuccess: "users/loaded",
    onError:   "users/error",
  },
});
```

### Registering Custom Middleware

```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)   // runs after thunk
      .concat(errorMiddleware)
      .concat(apiMiddleware),
});
```

---

## 39. Discuss how _middlewares_ can enhance the capabilities of a _Redux store_.

Middleware transforms Redux from a simple state container into a **powerful, extensible platform** for handling any kind of application logic.

### 1 — Async Operations (redux-thunk / redux-saga)

```javascript
// Without middleware — only plain objects allowed
dispatch({ type: "user/loaded", payload: user }); // ✅

// With thunk middleware — functions are valid actions too
dispatch(async (dispatch, getState) => {           // ✅
  const user = await api.getUser();
  dispatch({ type: "user/loaded", payload: user });
});
```

### 2 — Optimistic Updates

```javascript
const optimisticMiddleware = (store) => (next) => (action) => {
  if (!action.meta?.optimistic) return next(action);

  // Apply the change immediately (optimistic)
  next(action);

  // Revert if the server call fails
  action.meta.serverCall()
    .catch(() => store.dispatch({ type: action.meta.revertType }));
};
```

### 3 — Request Deduplication

```javascript
const pendingRequests = new Set();

const dedupeMiddleware = (store) => (next) => (action) => {
  if (!action.meta?.requestId) return next(action);

  const { requestId } = action.meta;

  if (pendingRequests.has(requestId)) return; // skip duplicate

  pendingRequests.add(requestId);

  const result = next(action);

  Promise.resolve(result).finally(() => pendingRequests.delete(requestId));

  return result;
};
```

### 4 — State Persistence

```javascript
const persistMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();
  localStorage.setItem("reduxState", JSON.stringify({
    auth:     state.auth,
    settings: state.settings,
  }));

  return result;
};
```

### 5 — WebSocket Integration

```javascript
const wsMiddleware = (store) => {
  const socket = new WebSocket("wss://api.example.com");

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    store.dispatch({ type: "ws/message", payload: data });
  };

  return (next) => (action) => {
    if (action.type === "ws/send") {
      socket.send(JSON.stringify(action.payload));
    }
    return next(action);
  };
};
```

---

## 40. How do you connect a _React component_ to a _Redux store_?

There are two approaches — the modern **hooks API** and the legacy **`connect()` HOC**. Both require a `<Provider>` wrapping the app.

### Step 1 — Setup Provider

```jsx
// index.tsx
import { Provider } from "react-redux";
import { store }    from "./store";
import App          from "./App";

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Step 2 — Modern Hooks Approach (Recommended)

```typescript
// store/hooks.ts — typed hooks for TypeScript
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

```tsx
// components/TodoList.tsx
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addTodo, removeTodo, toggleTodo } from "../features/todos/todosSlice";

function TodoList() {
  const todos    = useAppSelector((state) => state.todos.items);
  const loading  = useAppSelector((state) => state.todos.loading);
  const dispatch = useAppDispatch();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

### Legacy `connect()` HOC

```jsx
// components/TodoListLegacy.jsx
import { connect }                        from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../features/todos/todosSlice";

function TodoList({ todos, loading, onToggle, onRemove }) {
  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
          <span>{todo.text}</span>
          <button onClick={() => onRemove(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps    = (state) => ({ todos: state.todos.items, loading: state.todos.loading });
const mapDispatchToProps = { onToggle: toggleTodo, onRemove: removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

---

## 41. What are the advantages of using _React-Redux's_ `connect` function?

While modern hooks are preferred, `connect()` has distinct advantages in certain scenarios, particularly in class-based and legacy codebases.

### Performance Optimization

```jsx
// connect() uses memoization by default — component only re-renders
// when the selected state slice changes (shallow equality check)

const mapStateToProps = (state) => ({
  // Only re-renders when state.user.name changes
  // Other state changes are ignored
  userName: state.user.name,
});

export default connect(mapStateToProps)(UserHeader);
```

### `mergeProps` — Advanced Prop Composition

```jsx
// connect(mapStateToProps, mapDispatchToProps, mergeProps)
// mergeProps lets you combine state + dispatch props before they reach the component

const mapStateToProps    = (state)    => ({ userId: state.auth.userId });
const mapDispatchToProps = (dispatch) => ({ fetch: (id) => dispatch(fetchUser(id)) });

// Combine them: auto-fetch using userId from state
const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  fetchCurrentUser: () => dispatchProps.fetch(stateProps.userId),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Profile);
```

### Works with Class Components

```jsx
// Hooks only work in functional components
// connect() is the only option for class components

class Counter extends React.Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>{count}</button>;
  }
}

export default connect(
  (state)    => ({ count: state.counter.value }),
  (dispatch) => ({ increment: () => dispatch(increment()) })
)(Counter);
```

### Advantages Summary

| Advantage | Details |
|---|---|
| **Memoization** | Built-in `shouldComponentUpdate` optimization |
| **Class support** | Works with class-based components |
| **Separation of concerns** | Container/Presentational pattern |
| **`mergeProps`** | Advanced prop merging logic |
| **Mature & stable** | Battle-tested in large codebases |

---

## 42. Can you describe the `mapStateToProps` and `mapDispatchToProps` functions?

These two functions define **what state** and **what actions** a component receives as props when using `connect()`.

### `mapStateToProps`

```javascript
// Receives the full Redux state, returns an object of props
// Called every time the store state changes
const mapStateToProps = (state, ownProps) => ({
  // state    — full Redux store state
  // ownProps — props passed directly to the component

  user:        state.auth.user,
  todos:       state.todos.items.filter(t => t.userId === ownProps.userId),
  isLoading:   state.todos.loading,
  errorMessage: state.todos.error,
});
```

### `mapDispatchToProps` — Object Shorthand

```javascript
// Simplest form — pass an object of action creators
// connect() wraps each in dispatch() automatically
const mapDispatchToProps = {
  addTodo,     // becomes: (text) => dispatch(addTodo(text))
  removeTodo,  // becomes: (id)   => dispatch(removeTodo(id))
  toggleTodo,  // becomes: (id)   => dispatch(toggleTodo(id))
};
```

### `mapDispatchToProps` — Function Form

```javascript
// Function form gives you full control over dispatch logic
const mapDispatchToProps = (dispatch, ownProps) => ({
  // Simple action dispatch
  addTodo: (text) => dispatch(addTodo(text)),

  // Thunk dispatch
  fetchUserTodos: () => dispatch(fetchTodosByUser(ownProps.userId)),

  // Batch multiple dispatches
  resetAndFetch: () => {
    dispatch(clearTodos());
    dispatch(fetchTodosByUser(ownProps.userId));
  },
});
```

### Full `connect()` Example

```jsx
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./todosSlice";

function TodoList({ todos, isLoading, addTodo, removeTodo }) {
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo("New Todo")}>Add</button>
    </div>
  );
}

const mapStateToProps    = (state)    => ({ todos: state.todos.items, isLoading: state.todos.loading });
const mapDispatchToProps = { addTodo, removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

---

## 43. Explain the `Provider` component from _React-Redux_.

`<Provider>` makes the Redux store available to **any nested component** that calls `useSelector`, `useDispatch`, or `connect()` — without passing the store as props manually.

### Basic Setup

```jsx
// index.tsx — wrap the root of your app
import React    from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store }    from "./store";
import App          from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

### How Provider Works Internally

```jsx
// Provider uses React Context under the hood
const ReduxContext = React.createContext(null);

function Provider({ store, children }) {
  const [state, setState] = React.useState(store.getState());

  React.useEffect(() => {
    // Subscribe to store changes and re-render on update
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return unsubscribe;  // cleanup on unmount
  }, [store]);

  return (
    <ReduxContext.Provider value={{ store, state }}>
      {children}
    </ReduxContext.Provider>
  );
}
```

### Multiple Providers (Micro-Frontend / Testing)

```jsx
// You can nest multiple Providers for isolated state (e.g., micro-frontends)
function App() {
  return (
    <Provider store={globalStore}>
      <Header />                    {/* access to globalStore */}
      <Provider store={checkoutStore}>
        <CheckoutModule />          {/* access to checkoutStore */}
      </Provider>
    </Provider>
  );
}

// Testing — wrap component in a custom Provider with a test store
function renderWithStore(ui, { preloadedState = {}, store = configureStore({ reducer: rootReducer, preloadedState }) } = {}) {
  return render(<Provider store={store}>{ui}</Provider>);
}
```

---

## 44. How do you use hooks like `useDispatch` and `useSelector` in _React functional components_?

`useSelector` reads state from the Redux store and `useDispatch` gives you the dispatch function — together they replace `connect()` for functional components.

### `useSelector` — Reading State

```tsx
import { useSelector }   from "react-redux";
import type { RootState } from "../store";

function UserProfile() {
  // Selector runs on every store update — re-renders only if return value changes
  const user    = useSelector((state: RootState) => state.auth.user);
  const isAdmin = useSelector((state: RootState) => state.auth.user?.role === "admin");

  // ⚠️ Avoid returning a new object — causes re-render on every dispatch
  // const data = useSelector((state) => ({ name: state.user.name, age: state.user.age }));

  // ✅ Select primitives or use shallowEqual for objects
  const { name, age } = useSelector(
    (state: RootState) => state.user,
    (a, b) => a.name === b.name && a.age === b.age  // custom equality
  );

  return <div>{user?.name} {isAdmin && "(Admin)"}</div>;
}
```

### `useDispatch` — Dispatching Actions

```tsx
import { useDispatch }  from "react-redux";
import type { AppDispatch } from "../store";
import { increment, fetchUser } from "../features";

function Controls() {
  // Type as AppDispatch so TypeScript knows it accepts thunks
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>          +1         </button>
      <button onClick={() => dispatch(fetchUser(42))}>        Load User  </button>
    </div>
  );
}
```

### Typed Custom Hooks (Best Practice)

```typescript
// store/hooks.ts — use these instead of raw hooks throughout your app
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// components/Counter.tsx
import { useAppSelector, useAppDispatch } from "../store/hooks";

function Counter() {
  const count    = useAppSelector((state) => state.counter.value); // fully typed
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(increment())}>{count}</button>;
}
```

---

## 45. What performance considerations should be taken into account when connecting components to _Redux_?

Poorly structured selectors and over-connected components can cause **unnecessary re-renders**, degrading app performance significantly.

### Problem — Returning New Objects from `useSelector`

```javascript
// ❌ Creates a new object every render — always triggers re-render
const data = useSelector((state) => ({
  name:  state.user.name,
  email: state.user.email,
}));

// ✅ Option 1 — Select primitives individually
const name  = useSelector((state) => state.user.name);
const email = useSelector((state) => state.user.email);

// ✅ Option 2 — Use shallowEqual for objects
import { shallowEqual } from "react-redux";
const { name, email } = useSelector(
  (state) => ({ name: state.user.name, email: state.user.email }),
  shallowEqual
);

// ✅ Option 3 — Memoized selectors with Reselect
import { createSelector } from "@reduxjs/toolkit";

const selectUserProfile = createSelector(
  [(state) => state.user],
  (user) => ({ name: user.name, email: user.email })
);

const profile = useSelector(selectUserProfile); // only recomputes when state.user changes
```

### Problem — Connecting Too High in the Tree

```jsx
// ❌ Parent subscribes to all todo data — re-renders parent AND all children
function TodoApp() {
  const todos = useSelector((state) => state.todos.items); // re-renders on any todo change
  return todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
}

// ✅ Push subscriptions down — each item only re-renders when its own data changes
function TodoList() {
  const ids = useSelector((state) => state.todos.items.map(t => t.id)); // stable array of IDs
  return ids.map(id => <TodoItem key={id} id={id} />);
}

function TodoItem({ id }) {
  const todo = useSelector((state) => state.todos.items.find(t => t.id === id));
  return <li>{todo?.text}</li>;  // only re-renders when THIS todo changes
}
```

---

## 46. How can you optimize the performance of _Redux-connected components_?

Performance optimization in Redux combines **memoized selectors**, **component splitting**, and **structural patterns** to minimize unnecessary renders.

### Memoized Selectors with Reselect

```typescript
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Base selectors (input selectors)
const selectTodos      = (state: RootState) => state.todos.items;
const selectFilter     = (state: RootState) => state.todos.filter;
const selectSearchTerm = (state: RootState) => state.todos.searchTerm;

// Derived selector — only recomputes when todos OR filter OR searchTerm changes
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter, selectSearchTerm],
  (todos, filter, searchTerm) => {
    const filtered = filter === "completed"
      ? todos.filter((t) => t.completed)
      : filter === "active"
        ? todos.filter((t) => !t.completed)
        : todos;

    return searchTerm
      ? filtered.filter((t) => t.text.toLowerCase().includes(searchTerm.toLowerCase()))
      : filtered;
  }
);

// Component — only re-renders when filtered result changes
function FilteredTodoList() {
  const todos = useAppSelector(selectFilteredTodos);
  return <ul>{todos.map(t => <li key={t.id}>{t.text}</li>)}</ul>;
}
```

### `React.memo` for Presentational Components

```jsx
// Wrap components that receive props from Redux to prevent unnecessary re-renders
const TodoItem = React.memo(function TodoItem({ id, text, completed, onToggle }) {
  console.log(`Rendering: ${text}`); // only logs when this item's props change
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
      {text}
    </li>
  );
});
```

### Normalized State for Efficient Updates

```typescript
// features/todos/todosSlice.ts — use RTK's createEntityAdapter for normalized state
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter<Todo>();
// Creates: { ids: [1,2,3], entities: { 1: {...}, 2: {...} } }

const todosSlice = createSlice({
  name: "todos",
  initialState: todosAdapter.getInitialState(),
  reducers: {
    addTodo:    todosAdapter.addOne,
    removeTodo: todosAdapter.removeOne,
    updateTodo: todosAdapter.updateOne,    // only updates ONE entity — minimal re-renders
  },
});

// Selectors — built-in memoized selectors
export const { selectAll, selectById, selectIds } = todosAdapter.getSelectors(
  (state: RootState) => state.todos
);
```

## 47. What are _Higher Order Reducers (HORs)_ and how are they used?

**Higher Order Reducers** are functions that **take a reducer as input and return a new reducer** — similar to Higher Order Components in React. They add reusable behavior to existing reducers.

### Basic HOR Pattern

```javascript
// A HOR wraps an existing reducer with additional behavior
const withLogging = (reducer) => (state, action) => {
  console.log("Before:", state);
  const newState = reducer(state, action);
  console.log("After:", newState);
  return newState;
};

// Wrap any reducer with logging
const loggedTodosReducer = withLogging(todosReducer);
const loggedAuthReducer  = withLogging(authReducer);
```

### HOR — Resettable State

```javascript
// Makes any reducer resettable with a single action
const withReset = (reducer, resetAction) => {
  const initialState = reducer(undefined, { type: "@@INIT" });

  return (state = initialState, action) => {
    if (action.type === resetAction) {
      return initialState;              // reset to initial state
    }
    return reducer(state, action);
  };
};

// Any reducer can now be reset
const resettableTodosReducer = withReset(todosReducer, "todos/reset");
const resettableAuthReducer  = withReset(authReducer,  "auth/reset");

// Usage
dispatch({ type: "todos/reset" }); // resets todos to initial state
```

### HOR — Pagination

```javascript
// Adds pagination behavior to any list reducer
const withPagination = (reducer) => {
  const paginationInitial = { page: 1, perPage: 10, total: 0 };

  return (state = { ...reducer(undefined, {}), ...paginationInitial }, action) => {
    switch (action.type) {
      case `${action.namespace}/setPage`:
        return { ...state, page: action.payload };

      case `${action.namespace}/setPerPage`:
        return { ...state, perPage: action.payload, page: 1 };

      case `${action.namespace}/setTotal`:
        return { ...state, total: action.payload };

      default:
        return {
          ...reducer(state, action),
          page:    state.page,
          perPage: state.perPage,
          total:   state.total,
        };
    }
  };
};

const paginatedTodosReducer = withPagination(todosReducer);
```

### HOR — Undo/Redo History

```javascript
// Wraps any reducer with undo/redo capability
const withHistory = (reducer, maxHistory = 10) => {
  const initialState = {
    past:    [],
    present: reducer(undefined, { type: "@@INIT" }),
    future:  [],
  };

  return (state = initialState, action) => {
    switch (action.type) {
      case "UNDO": {
        if (state.past.length === 0) return state;
        const [newPresent, ...newPast] = [...state.past].reverse();
        return {
          past:    newPast.reverse(),
          present: newPresent,
          future:  [state.present, ...state.future],
        };
      }

      case "REDO": {
        if (state.future.length === 0) return state;
        const [newPresent, ...newFuture] = state.future;
        return {
          past:    [...state.past, state.present].slice(-maxHistory),
          present: newPresent,
          future:  newFuture,
        };
      }

      default: {
        const newPresent = reducer(state.present, action);
        if (newPresent === state.present) return state;
        return {
          past:    [...state.past, state.present].slice(-maxHistory),
          present: newPresent,
          future:  [],
        };
      }
    }
  };
};

const undoableTodosReducer = withHistory(todosReducer);
```

---

## 48. Can you implement a _feature toggle mechanism_ using _Redux_?

A **feature toggle** (feature flag) system in Redux lets you enable or disable features at runtime without deploying new code.

### Feature Flags Slice

```typescript
// features/featureFlags/featureFlagsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FeatureFlags = {
  darkMode:         boolean;
  newDashboard:     boolean;
  betaCheckout:     boolean;
  advancedFilters:  boolean;
};

const initialState: FeatureFlags = {
  darkMode:        false,
  newDashboard:    false,
  betaCheckout:    false,
  advancedFilters: false,
};

const featureFlagsSlice = createSlice({
  name: "featureFlags",
  initialState,
  reducers: {
    enableFeature: (state, action: PayloadAction<keyof FeatureFlags>) => {
      state[action.payload] = true;
    },
    disableFeature: (state, action: PayloadAction<keyof FeatureFlags>) => {
      state[action.payload] = false;
    },
    toggleFeature: (state, action: PayloadAction<keyof FeatureFlags>) => {
      state[action.payload] = !state[action.payload];
    },
    // Load flags from server/localStorage in bulk
    setFlags: (_, action: PayloadAction<Partial<FeatureFlags>>) => ({
      ...initialState,
      ...action.payload,
    }),
  },
});

export const { enableFeature, disableFeature, toggleFeature, setFlags } =
  featureFlagsSlice.actions;

export default featureFlagsSlice.reducer;
```

### Selectors and Custom Hook

```typescript
// features/featureFlags/selectors.ts
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export const selectFeatureFlags = (state: RootState) => state.featureFlags;

export const selectIsEnabled = (flag: keyof FeatureFlags) =>
  createSelector(selectFeatureFlags, (flags) => flags[flag]);

// hooks/useFeatureFlag.ts
import { useAppSelector } from "../store/hooks";
import { selectIsEnabled } from "./selectors";

export const useFeatureFlag = (flag: keyof FeatureFlags): boolean =>
  useAppSelector(selectIsEnabled(flag));
```

### Using Feature Flags in Components

```tsx
// components/Dashboard.tsx
import { useFeatureFlag } from "../hooks/useFeatureFlag";

function Dashboard() {
  const newDashboard = useFeatureFlag("newDashboard");
  const darkMode     = useFeatureFlag("darkMode");

  return (
    <div className={darkMode ? "dark" : "light"}>
      {newDashboard ? <NewDashboard /> : <LegacyDashboard />}
    </div>
  );
}

// FeatureFlag wrapper component
function Feature({ flag, children, fallback = null }) {
  const isEnabled = useFeatureFlag(flag);
  return isEnabled ? children : fallback;
}

// Usage
function App() {
  return (
    <Feature flag="betaCheckout" fallback={<LegacyCheckout />}>
      <BetaCheckout />
    </Feature>
  );
}
```

### Loading Flags from Server

```typescript
// Load feature flags from an API on app startup
export const loadFeatureFlags = createAsyncThunk(
  "featureFlags/load",
  async (userId: string) => {
    const flags = await flagsApi.getFlags(userId);
    return flags;
  }
);
```

---

## 49. How do you normalize a state shape in _Redux_?

**Normalization** transforms nested/relational data into a flat structure similar to a database, eliminating data duplication and simplifying updates.

### The Problem with Nested Data

```javascript
// ❌ Nested / denormalized — hard to update, easy to get out of sync
const state = {
  posts: [
    {
      id: 1,
      title: "Hello",
      author: { id: 10, name: "Alice" },   // duplicated if Alice has multiple posts
      comments: [
        { id: 100, text: "Great!", author: { id: 11, name: "Bob" } },
      ],
    },
  ],
};
```

### Normalized Shape

```javascript
// ✅ Normalized — flat, no duplication, easy to update
const normalizedState = {
  posts: {
    ids:      [1, 2],
    entities: {
      1: { id: 1, title: "Hello", authorId: 10, commentIds: [100] },
      2: { id: 2, title: "World", authorId: 11, commentIds: [101, 102] },
    },
  },
  comments: {
    ids:      [100, 101, 102],
    entities: {
      100: { id: 100, text: "Great!", authorId: 11 },
      101: { id: 101, text: "Nice!",  authorId: 10 },
      102: { id: 102, text: "Cool!",  authorId: 10 },
    },
  },
  users: {
    ids:      [10, 11],
    entities: {
      10: { id: 10, name: "Alice" },
      11: { id: 11, name: "Bob"   },
    },
  },
};
```

### Using `createEntityAdapter` (RTK)

```typescript
// RTK provides createEntityAdapter to manage normalized state automatically
import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Post { id: number; title: string; authorId: number; }

const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => a.title.localeCompare(b.title), // optional sort
});

export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const res = await api.getPosts();
  return res.json() as Post[];
});

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState({ loading: false }),
  reducers: {
    addPost:    postsAdapter.addOne,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending,   (state) => { state.loading = true; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        postsAdapter.setAll(state, action.payload); // replace all entities
      });
  },
});

// Built-in memoized selectors
export const {
  selectAll:    selectAllPosts,   // returns Post[]
  selectById:   selectPostById,   // returns Post | undefined
  selectIds:    selectPostIds,    // returns (number | string)[]
} = postsAdapter.getSelectors((state: RootState) => state.posts);
```

---

## 50. What is a _Redux "slice"_ and how is it used?

A **slice** is a collection of Redux reducer logic and actions for a **single feature** of an application — defined using Redux Toolkit's `createSlice`.

### Anatomy of a Slice

```typescript
// features/cart/cartSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface CartItem { id: number; name: string; price: number; quantity: number; }
interface CartState { items: CartItem[]; loading: boolean; error: string | null; }

const initialState: CartState = { items: [], loading: false, error: null };

// Async thunk (lives alongside the slice)
export const fetchCart = createAsyncThunk("cart/fetch", async (userId: number) => {
  const res = await cartApi.getCart(userId);
  return res.json() as CartItem[];
});

// The slice — bundles initialState, reducers, and action creators
const cartSlice = createSlice({
  name: "cart",                   // prefix for action types: "cart/addItem"
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;   // Immer allows direct mutation
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity = action.payload.qty;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending,   (state)         => { state.loading = true; })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items   = action.payload;
      })
      .addCase(fetchCart.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.error.message ?? "Failed to fetch cart";
      });
  },
});

// Export actions and reducer
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

### Selectors Alongside the Slice

```typescript
// features/cart/cartSelectors.ts
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = createSelector(
  selectCartItems,
  (items) => items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectCartCount = createSelector(
  selectCartItems,
  (items) => items.reduce((sum, item) => sum + item.quantity, 0)
);
```

### Registering the Slice

```typescript
// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "../features/cart/cartSlice";
import authReducer  from "../features/auth/authSlice";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    cart:  cartReducer,
    auth:  authReducer,
    todos: todosReducer,
  },
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

## 51. Explain the "_Ducks_" pattern in _Redux_.

The **Ducks** pattern bundles related **action types**, **action creators**, and **reducers** into a **single file** per feature — rather than splitting them across multiple folders.

### Traditional Structure vs Ducks

```
// ❌ Traditional — split by type
src/
  actions/
    todos.js
    auth.js
  reducers/
    todos.js
    auth.js
  constants/
    todos.js
    auth.js

// ✅ Ducks — grouped by feature
src/
  ducks/
    todos.js    ← action types + action creators + reducer in one file
    auth.js
```

### Ducks Module Structure

```javascript
// ducks/todos.js — everything for the "todos" feature in one file

// ── 1. Action Types (prefixed with module name to avoid collisions) ────────
const ADD_TODO    = "myApp/todos/ADD";
const REMOVE_TODO = "myApp/todos/REMOVE";
const TOGGLE_TODO = "myApp/todos/TOGGLE";
const LOAD_TODOS  = "myApp/todos/LOAD";

// ── 2. Reducer (default export — required by Ducks spec) ──────────────────
const initialState = { items: [], loading: false };

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_TODO:
      return { ...state, items: state.items.filter((t) => t.id !== action.payload) };
    case TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    default:
      return state;
  }
}

// ── 3. Action Creators (named exports) ────────────────────────────────────
export const addTodo    = (todo)  => ({ type: ADD_TODO,    payload: todo });
export const removeTodo = (id)    => ({ type: REMOVE_TODO, payload: id   });
export const toggleTodo = (id)    => ({ type: TOGGLE_TODO, payload: id   });

// ── 4. Thunks (named exports) ─────────────────────────────────────────────
export const loadTodos = () => async (dispatch) => {
  const todos = await todosApi.getAll();
  dispatch({ type: LOAD_TODOS, payload: todos });
};
```

### Re-Ducks — Scaled Ducks Pattern

```
// Re-Ducks splits a large duck into multiple files per feature folder
src/
  features/
    todos/
      index.js        ← public API (re-exports)
      types.js        ← action type constants
      actions.js      ← action creators
      reducers.js     ← reducer
      selectors.js    ← selectors
      operations.js   ← thunks / sagas
```

```javascript
// features/todos/index.js — clean public API
export { default }             from "./reducers";
export * from "./actions";
export * from "./selectors";
export * from "./operations";
```

---

## 52. Why is state normalization recommended in _Redux_?

State normalization prevents **data duplication**, simplifies **updates**, and improves **performance** by keeping the store flat and consistent.

### Problems Without Normalization

```javascript
// ❌ Nested state — multiple issues
const state = {
  posts: [
    {
      id: 1,
      author: { id: 10, name: "Alice" },  // Alice duplicated across many posts
      comments: [
        { id: 100, author: { id: 10, name: "Alice" } }, // Alice again!
      ],
    },
  ],
};

// To update Alice's name → must find and update EVERY occurrence
// O(n) search through all posts and their nested comments
```

### Benefits of Normalization

```javascript
// ✅ Normalized — flat, no duplication
const state = {
  users:    { ids: [10], entities: { 10: { id: 10, name: "Alice" } } },
  posts:    { ids: [1],  entities: { 1: { id: 1, authorId: 10, commentIds: [100] } } },
  comments: { ids: [100], entities: { 100: { id: 100, authorId: 10, text: "Hi" } } },
};

// To update Alice's name → ONE update in ONE place → O(1) lookup
state.users.entities[10].name = "Alicia";
// All posts and comments automatically reflect the change via the ID reference
```

### Performance with Entity Adapter

```typescript
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter<User>();

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    // O(1) update — no array scanning needed
    updateUser: usersAdapter.updateOne,
  },
});

// Selector — O(1) lookup by ID
const alice = selectUserById(store.getState(), 10);
```

### Key Benefits Summary

| Benefit | Description |
|---|---|
| **No duplication** | Each entity stored once, referenced by ID |
| **O(1) lookups** | Direct access by ID instead of array scan |
| **Simpler updates** | Update one place, all references reflect the change |
| **Smaller payloads** | Less redundant data in the store |
| **Easier diffing** | Redux detects changes more efficiently |

---

## 53. How do you structure a _normalized state_?

A normalized state follows a **database-like structure** with an `ids` array and an `entities` map — the standard shape used by Redux Toolkit's `createEntityAdapter`.

### Standard Normalized Shape

```typescript
// The canonical normalized structure for any collection
interface NormalizedState<T> {
  ids:      (number | string)[];  // ordered list of IDs
  entities: Record<string | number, T>; // ID → entity map
  loading:  boolean;
  error:    string | null;
}

// Example: normalized users
const usersState: NormalizedState<User> = {
  ids:      [1, 2, 3],
  entities: {
    1: { id: 1, name: "Alice", email: "alice@example.com" },
    2: { id: 2, name: "Bob",   email: "bob@example.com"   },
    3: { id: 3, name: "Carol", email: "carol@example.com" },
  },
  loading:  false,
  error:    null,
};
```

### Full Multi-Entity Normalized Store

```typescript
// Root state with normalized entities and relational IDs
interface RootState {
  users: {
    ids:      number[];
    entities: Record<number, { id: number; name: string; postIds: number[] }>;
  };
  posts: {
    ids:      number[];
    entities: Record<number, { id: number; title: string; authorId: number; commentIds: number[] }>;
  };
  comments: {
    ids:      number[];
    entities: Record<number, { id: number; text: string; authorId: number; postId: number }>;
  };
}
```

### Selectors for Normalized State

```typescript
import { createSelector }  from "@reduxjs/toolkit";
import { selectPostById }  from "./postsSlice";
import { selectUserById }  from "./usersSlice";
import { selectCommentById } from "./commentsSlice";

// Denormalize on read — combine normalized entities into a rich object
export const selectPostWithDetails = (postId: number) =>
  createSelector(
    [(state: RootState) => state],
    (state) => {
      const post    = selectPostById(state, postId);
      if (!post) return null;

      const author   = selectUserById(state, post.authorId);
      const comments = post.commentIds.map((cId) => {
        const comment       = selectCommentById(state, cId);
        const commentAuthor = selectUserById(state, comment?.authorId ?? 0);
        return { ...comment, author: commentAuthor };
      });

      return { ...post, author, comments };
    }
  );
```

---

## 54. What are the benefits of state _denormalization_?

**Denormalization** means storing redundant data for **read performance**, trading storage efficiency for faster component rendering and simpler selectors.

### When Denormalization Helps

```typescript
// Normalized — requires joining data at read time
const normalizedState = {
  posts:    { entities: { 1: { id: 1, title: "Hello", authorId: 10 } } },
  users:    { entities: { 10: { id: 10, name: "Alice", avatar: "..." } } },
};

// ❌ Every render requires joining post + user data
const PostCard = ({ postId }) => {
  const post   = useSelector((s) => s.posts.entities[postId]);
  const author = useSelector((s) => s.users.entities[post.authorId]);  // extra lookup
  return <div>{post.title} by {author.name}</div>;
};

// ✅ Denormalized — author data embedded directly in the post
const denormalizedState = {
  posts: {
    entities: {
      1: {
        id:     1,
        title:  "Hello",
        author: { id: 10, name: "Alice", avatar: "..." },  // embedded
      },
    },
  },
};

// Simpler component — no join needed
const PostCard = ({ postId }) => {
  const post = useSelector((s) => s.posts.entities[postId]);
  return <div>{post.title} by {post.author.name}</div>;
};
```

### Hybrid Approach — Normalize + Memoized Denormalization

```typescript
// Best of both worlds — keep store normalized, denormalize in selectors
import { createSelector } from "@reduxjs/toolkit";

// Store stays normalized (single source of truth)
// Selectors denormalize on read with memoization
export const selectEnrichedPosts = createSelector(
  [selectAllPosts, (state) => state.users.entities],
  (posts, userEntities) =>
    posts.map((post) => ({
      ...post,
      author: userEntities[post.authorId],    // join at selector level
    }))
  // Result is memoized — only recomputes when posts or users change
);
```

### Benefits Summary

| Benefit | Description |
|---|---|
| **Simpler selectors** | No need to join multiple slices |
| **Faster reads** | Data pre-assembled — no computation at render time |
| **Fewer re-renders** | Single selector subscription per component |
| **Simpler components** | Components don't need to know data structure |

---

## 55. Can you explain how to manage entity relations in a _normalized Redux state_?

Managing entity relations in normalized Redux state uses **ID references** between entities — similar to foreign keys in a relational database.

### One-to-Many Relationship

```typescript
// User → Posts (one user has many posts)
const state = {
  users: {
    entities: {
      1: { id: 1, name: "Alice", postIds: [10, 11] },  // ← array of post IDs
    },
  },
  posts: {
    entities: {
      10: { id: 10, title: "Hello", authorId: 1 },     // ← single user ID
      11: { id: 11, title: "World", authorId: 1 },
    },
  },
};

// Selector — get all posts by a user
export const selectPostsByUser = (userId: number) =>
  createSelector(
    [
      (state: RootState) => state.users.entities[userId],
      (state: RootState) => state.posts.entities,
    ],
    (user, postEntities) =>
      user?.postIds.map((id) => postEntities[id]).filter(Boolean) ?? []
  );
```

### Many-to-Many Relationship

```typescript
// Posts ↔ Tags (a post has many tags, a tag has many posts)
const state = {
  posts: {
    entities: {
      1: { id: 1, title: "Redux Guide", tagIds: [100, 101] },
    },
  },
  tags: {
    entities: {
      100: { id: 100, name: "redux",      postIds: [1, 2] },
      101: { id: 101, name: "javascript", postIds: [1, 3] },
    },
  },
};

// Selectors for both directions
export const selectTagsForPost = (postId: number) =>
  createSelector(
    [(state: RootState) => state.posts.entities[postId], (state: RootState) => state.tags.entities],
    (post, tagEntities) => post?.tagIds.map((id) => tagEntities[id]).filter(Boolean) ?? []
  );

export const selectPostsForTag = (tagId: number) =>
  createSelector(
    [(state: RootState) => state.tags.entities[tagId], (state: RootState) => state.posts.entities],
    (tag, postEntities) => tag?.postIds.map((id) => postEntities[id]).filter(Boolean) ?? []
  );
```

### Updating Relations

```typescript
const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    // Adding a tag to a post — update relation in BOTH entities
    addTagToPost: (state, action: PayloadAction<{ postId: number; tagId: number }>) => {
      const post = state.entities[action.payload.postId];
      if (post && !post.tagIds.includes(action.payload.tagId)) {
        post.tagIds.push(action.payload.tagId);
      }
    },
    removeTagFromPost: (state, action: PayloadAction<{ postId: number; tagId: number }>) => {
      const post = state.entities[action.payload.postId];
      if (post) {
        post.tagIds = post.tagIds.filter((id) => id !== action.payload.tagId);
      }
    },
  },
});
```

---

## 56. What is _Immutable.js_ and how can it be used with _Redux_?

**Immutable.js** is a library providing **persistent immutable data structures** — Lists, Maps, Sets — that guarantee immutability at the data structure level rather than relying on developer discipline.

### Core Immutable.js Data Structures

```javascript
import { Map, List, fromJS } from "immutable";

// Map — like a JS object but immutable
const user = Map({ name: "Alice", age: 30 });
const updated = user.set("name", "Bob");      // returns new Map — original unchanged
console.log(user.get("name"));    // "Alice"
console.log(updated.get("name")); // "Bob"

// List — like a JS array but immutable
const todos = List(["Learn Redux", "Build App"]);
const withNew = todos.push("Deploy");          // returns new List
console.log(todos.size);    // 2
console.log(withNew.size);  // 3

// fromJS — deep converts plain JS objects to Immutable structures
const state = fromJS({
  user:  { name: "Alice", address: { city: "NYC" } },
  todos: ["item1", "item2"],
});
```

### Using Immutable.js in a Reducer

```javascript
import { Map, List } from "immutable";

const initialState = Map({
  items:   List(),
  loading: false,
  error:   null,
});

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/loading":
      return state.set("loading", true);

    case "todos/loaded":
      return state
        .set("loading", false)
        .set("items", List(action.payload));

    case "todos/add":
      return state.update("items", (items) => items.push(Map(action.payload)));

    case "todos/remove":
      return state.update("items",
        (items) => items.filter((t) => t.get("id") !== action.payload)
      );

    default:
      return state;
  }
}
```

### Modern Alternative — RTK + Immer

```typescript
// Redux Toolkit uses Immer internally — provides immutability without Immutable.js
// This is now the recommended approach over Immutable.js
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { items: [], loading: false },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload); // Immer handles immutability automatically
    },
  },
});
```

---

## 57. Discuss the _Redux DevTools extension_ and its features.

The **Redux DevTools Extension** is a browser extension that provides deep visibility into Redux state changes, enabling powerful debugging capabilities.

### Setup

```javascript
// Redux Toolkit — DevTools enabled automatically in development
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // auto-enabled in dev
});

// Manual setup with legacy createStore
import { createStore, compose } from "redux";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
```

### Advanced Configuration

```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name:            "My Redux App",     // name shown in DevTools tab
    maxAge:          50,                 // max number of actions to keep
    trace:           true,               // capture stack traces for actions
    traceLimit:      25,                 // stack trace depth
    actionSanitizer: (action) => ({      // hide sensitive data in DevTools
      ...action,
      payload: action.type === "auth/login"
        ? { ...action.payload, password: "***REDACTED***" }
        : action.payload,
    }),
    stateSanitizer: (state) => ({        // hide sensitive state in DevTools
      ...state,
      auth: { ...state.auth, token: "***REDACTED***" },
    }),
  },
});
```

### Key Features

| Feature | Description |
|---|---|
| **Action Log** | See every dispatched action with type and payload |
| **State Diff** | View exactly what changed in state after each action |
| **Time Travel** | Step backward/forward through action history |
| **Action Replay** | Replay a sequence of actions from any point |
| **Import/Export** | Save and share Redux state sessions |
| **Dispatch** | Manually dispatch actions from the DevTools UI |
| **Skip Actions** | Disable specific actions to debug their impact |

---

## 58. How do `reselect` and _memoized selectors_ work in _Redux_?

**Reselect** creates **memoized selectors** that only recompute when their input selectors return new values — preventing expensive recalculations on every render.

### Without Memoization — Performance Problem

```javascript
// ❌ Recomputes on EVERY render, even if todos and filter haven't changed
const selectFilteredTodos = (state) =>
  state.todos.items.filter((t) => t.completed === state.todos.showCompleted);

// Called on every state change anywhere in the app
```

### With `createSelector` — Memoized

```typescript
import { createSelector } from "@reduxjs/toolkit"; // re-exports from reselect
import type { RootState } from "../store";

// Input selectors — cheap, extract raw state values
const selectTodoItems    = (state: RootState) => state.todos.items;
const selectShowComplete = (state: RootState) => state.todos.showCompleted;
const selectSearchTerm   = (state: RootState) => state.todos.searchTerm;

// Memoized selector — only recomputes when input results change (===)
export const selectFilteredTodos = createSelector(
  [selectTodoItems, selectShowComplete, selectSearchTerm],
  (items, showCompleted, searchTerm) => {
    console.log("Recomputing filtered todos..."); // only logs when inputs change

    const filtered = showCompleted
      ? items.filter((t) => t.completed)
      : items;

    return searchTerm
      ? filtered.filter((t) => t.text.toLowerCase().includes(searchTerm.toLowerCase()))
      : filtered;
  }
);

// Derived selectors — compose selectors from other selectors
export const selectFilteredTodoCount = createSelector(
  [selectFilteredTodos],
  (todos) => todos.length
);

export const selectCompletedPercentage = createSelector(
  [selectTodoItems],
  (items) => (items.length === 0 ? 0 : Math.round(
    (items.filter((t) => t.completed).length / items.length) * 100
  ))
);
```

### Selectors with Parameters — `createSelector` Factory

```typescript
// For selectors that need a parameter (e.g., an ID), create a selector factory
const makeSelectTodoById = (id: number) =>
  createSelector(
    [(state: RootState) => state.todos.items],
    (items) => items.find((t) => t.id === id)
  );

// In component — create once, reuse across renders
function TodoDetail({ id }: { id: number }) {
  const selectTodo = useMemo(() => makeSelectTodoById(id), [id]);
  const todo       = useAppSelector(selectTodo);
  return <div>{todo?.text}</div>;
}
```

---

## 59. What are common utilities and libraries used in conjunction with _Redux_?

The Redux ecosystem provides a rich set of **utilities and libraries** that handle common patterns and extend Redux's capabilities.

### Core Libraries

```javascript
// 1. Redux Toolkit (RTK) — the official, recommended way to write Redux
import { configureStore, createSlice, createAsyncThunk, createEntityAdapter }
  from "@reduxjs/toolkit";

// 2. React-Redux — React bindings for Redux
import { Provider, useSelector, useDispatch } from "react-redux";

// 3. Reselect — memoized selectors (included in RTK)
import { createSelector } from "@reduxjs/toolkit";
```

### Async & Side Effect Libraries

```javascript
// redux-thunk (included in RTK) — simple async with functions
const fetchUser = (id) => async (dispatch) => { /* ... */ };

// redux-saga — complex async with generators
import createSagaMiddleware from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

// redux-observable — RxJS-based side effects
import { createEpicMiddleware } from "redux-observable";
import { ofType } from "redux-observable";
import { switchMap, map } from "rxjs/operators";
```

### RTK Query — Data Fetching Built into RTK

```typescript
// RTK Query handles caching, loading states, and refetching automatically
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery:   fetchBaseQuery({ baseUrl: "/api" }),
  endpoints:   (builder) => ({
    getUser:  builder.query<User,  number>({ query: (id) => `/users/${id}` }),
    getUsers: builder.query<User[], void>({ query: () => "/users" }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({ url: "/users", method: "POST", body }),
    }),
  }),
});

// Auto-generated hooks
export const { useGetUserQuery, useGetUsersQuery, useCreateUserMutation } = usersApi;

// In component — caching, loading, error states handled automatically
function UserProfile({ id }) {
  const { data: user, isLoading, error } = useGetUserQuery(id);
  if (isLoading) return <p>Loading...</p>;
  if (error)     return <p>Error!</p>;
  return <p>{user?.name}</p>;
}
```

### State Persistence

```javascript
// redux-persist — persist and rehydrate Redux store
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

const persistConfig = { key: "root", storage, whitelist: ["auth", "settings"] };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store     = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

// Wrap app with PersistGate to delay rendering until state is rehydrated
<PersistGate loading={null} persistor={persistor}>
  <App />
</PersistGate>
```

---

## 60. Describe the significance of the _Redux Toolkit_ and how it helps _Redux development_.

**Redux Toolkit (RTK)** is the official, opinionated toolset for Redux development that **eliminates boilerplate**, enforces best practices, and provides powerful utilities out of the box.

### Problems RTK Solves

```javascript
// ❌ Vanilla Redux — verbose and error-prone
// 1. Define action type constants
const ADD_TODO = "todos/add";
// 2. Write action creators
const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
// 3. Write immutable reducer with switch
function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO: return [...state, action.payload];
    default:       return state;
  }
}
// 4. Setup store with middleware manually
const store = createStore(reducer, applyMiddleware(thunk));

// ✅ RTK — concise, safe, and feature-rich
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: { add: (state, action) => { state.push(action.payload); } },
});
const store = configureStore({ reducer: { todos: todosSlice.reducer } });
```

### RTK Feature Overview

```typescript
// 1. configureStore — sets up store with good defaults
const store = configureStore({
  reducer:    rootReducer,
  middleware: (getDefault) => getDefault().concat(customMiddleware),
  devTools:   process.env.NODE_ENV !== "production",
});

// 2. createSlice — replaces action types + action creators + reducer
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },  // Immer included
    decrement: (state) => { state.value -= 1; },
  },
});

// 3. createAsyncThunk — standardized async action handling
const fetchUser = createAsyncThunk("users/fetch", async (id, { rejectWithValue }) => {
  try   { return await api.getUser(id); }
  catch { return rejectWithValue("Failed"); }
});

// 4. createEntityAdapter — normalized state management
const adapter = createEntityAdapter<User>();

// 5. createSelector — memoized selectors (re-exported from Reselect)
const selectTotal = createSelector([selectItems], (items) => items.length);

// 6. RTK Query — built-in data fetching and caching
const api = createApi({
  reducerPath: "api",
  baseQuery:   fetchBaseQuery({ baseUrl: "/api" }),
  endpoints:   (builder) => ({
    getUsers: builder.query<User[], void>({ query: () => "/users" }),
  }),
});
```

### RTK Benefits Summary

| Feature | Benefit |
|---|---|
| `configureStore` | Sensible defaults, DevTools, Thunk included |
| `createSlice` | Eliminates action type constants and separate action creators |
| Immer integration | Safe "mutating" syntax for immutable updates |
| `createAsyncThunk` | Standardized pending/fulfilled/rejected lifecycle |
| `createEntityAdapter` | Normalized state with built-in CRUD operations |
| RTK Query | Full data fetching solution with caching built in |

---

## 61. How do you test _Redux reducers_?

Reducers are **pure functions** — making them the easiest part of Redux to test. Given the same state and action, they always return the same result.

### Basic Reducer Tests

```typescript
// features/todos/todosSlice.test.ts
import todosReducer, { addTodo, removeTodo, toggleTodo } from "./todosSlice";
import type { TodosState } from "./todosSlice";

const initialState: TodosState = { items: [], loading: false, error: null };

describe("todosReducer", () => {
  // Test 1 — Initial state
  it("should return the initial state when called with undefined", () => {
    expect(todosReducer(undefined, { type: "@@INIT" })).toEqual(initialState);
  });

  // Test 2 — Adding a todo
  it("should add a todo to the list", () => {
    const todo = { id: 1, text: "Learn Redux", completed: false };
    const state = todosReducer(initialState, addTodo(todo));

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(todo);
  });

  // Test 3 — Removing a todo
  it("should remove a todo by id", () => {
    const preloadedState: TodosState = {
      items: [
        { id: 1, text: "Todo 1", completed: false },
        { id: 2, text: "Todo 2", completed: false },
      ],
      loading: false,
      error:   null,
    };

    const state = todosReducer(preloadedState, removeTodo(1));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].id).toBe(2);
  });

  // Test 4 — Toggling a todo
  it("should toggle a todo completed status", () => {
    const preloadedState: TodosState = {
      items:   [{ id: 1, text: "Todo", completed: false }],
      loading: false,
      error:   null,
    };

    const state = todosReducer(preloadedState, toggleTodo(1));
    expect(state.items[0].completed).toBe(true);

    // Toggle back
    const state2 = todosReducer(state, toggleTodo(1));
    expect(state2.items[0].completed).toBe(false);
  });

  // Test 5 — Immutability check
  it("should not mutate the original state", () => {
    const state = todosReducer(initialState, addTodo({ id: 1, text: "Test", completed: false }));
    expect(state).not.toBe(initialState);     // new reference
    expect(initialState.items).toHaveLength(0); // original unchanged
  });
});
```

### Testing Async Reducers (`extraReducers`)

```typescript
// Testing the pending/fulfilled/rejected states from createAsyncThunk
import usersReducer from "./usersSlice";
import { fetchUsers } from "./usersSlice";

describe("usersReducer async states", () => {
  it("should set loading=true on fetchUsers.pending", () => {
    const action = fetchUsers.pending("requestId", undefined);
    const state  = usersReducer({ list: [], loading: false, error: null }, action);
    expect(state.loading).toBe(true);
  });

  it("should populate list on fetchUsers.fulfilled", () => {
    const users  = [{ id: 1, name: "Alice" }];
    const action = fetchUsers.fulfilled(users, "requestId", undefined);
    const state  = usersReducer({ list: [], loading: true, error: null }, action);

    expect(state.loading).toBe(false);
    expect(state.list).toEqual(users);
  });

  it("should set error on fetchUsers.rejected", () => {
    const action = fetchUsers.rejected(new Error("Network error"), "requestId", undefined);
    const state  = usersReducer({ list: [], loading: true, error: null }, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBeTruthy();
  });
});
```

---

## 62. What is the recommended approach to test _Redux actions_?

Action creators are straightforward to test — verify they return the correct **action object structure** with the expected type and payload.

### Testing Synchronous Action Creators

```typescript
// features/todos/actions.test.ts
import { addTodo, removeTodo, toggleTodo } from "./todosSlice";

describe("Todo Action Creators", () => {
  it("addTodo should create the correct action", () => {
    const todo   = { id: 1, text: "Learn Redux", completed: false };
    const action = addTodo(todo);

    expect(action.type).toBe("todos/addTodo");
    expect(action.payload).toEqual(todo);
  });

  it("removeTodo should create action with id payload", () => {
    const action = removeTodo(42);
    expect(action).toEqual({ type: "todos/removeTodo", payload: 42 });
  });

  it("toggleTodo should create action with id payload", () => {
    const action = toggleTodo(5);
    expect(action.type).toBe("todos/toggleTodo");
    expect(action.payload).toBe(5);
  });
});
```

### Testing Async Thunks with a Mock Store

```typescript
import { configureStore }  from "@reduxjs/toolkit";
import { fetchUser }        from "./usersSlice";
import usersReducer         from "./usersSlice";

// Mock the API module
jest.mock("../api/usersApi", () => ({
  getUser: jest.fn(),
}));
import { getUser } from "../api/usersApi";

describe("fetchUser thunk", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({ reducer: { users: usersReducer } });
  });

  it("dispatches fulfilled action on success", async () => {
    const mockUser = { id: 1, name: "Alice" };
    (getUser as jest.Mock).mockResolvedValue(mockUser);

    await store.dispatch(fetchUser(1));

    const actions = store.getState();
    expect(actions.users.list).toContainEqual(mockUser);
    expect(actions.users.loading).toBe(false);
  });

  it("dispatches rejected action on failure", async () => {
    (getUser as jest.Mock).mockRejectedValue(new Error("Network error"));

    await store.dispatch(fetchUser(1));

    const state = store.getState();
    expect(state.users.loading).toBe(false);
    expect(state.users.error).toBeTruthy();
  });

  it("dispatches pending then fulfilled in order", async () => {
    const mockUser = { id: 1, name: "Alice" };
    (getUser as jest.Mock).mockResolvedValue(mockUser);

    // Track dispatched action types
    const dispatched: string[] = [];
    const trackMiddleware = () => (next) => (action) => {
      dispatched.push(action.type);
      return next(action);
    };

    const trackedStore = configureStore({
      reducer: { users: usersReducer },
      middleware: (getDefault) => getDefault().concat(trackMiddleware),
    });

    await trackedStore.dispatch(fetchUser(1));

    expect(dispatched).toEqual(["users/fetchUser/pending", "users/fetchUser/fulfilled"]);
  });
});
```

---

## 63. How can you test a _Redux-connected React component_?

Testing connected components requires rendering them with a **real or mock Redux store** via a `<Provider>` — rather than mocking the Redux internals.

### Test Utilities Setup

```typescript
// test-utils/renderWithStore.tsx
import React, { PropsWithChildren }     from "react";
import { render, RenderOptions }         from "@testing-library/react";
import { Provider }                      from "react-redux";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import type { RootState, AppStore }      from "../store";
import rootReducer                       from "../store/rootReducer";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithStore(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
```

### Component Test

```tsx
// features/todos/TodoList.test.tsx
import { screen, fireEvent } from "@testing-library/react";
import { renderWithStore }    from "../../test-utils/renderWithStore";
import TodoList               from "./TodoList";

describe("TodoList Component", () => {
  const preloadedState = {
    todos: {
      items: [
        { id: 1, text: "Buy groceries", completed: false },
        { id: 2, text: "Learn Redux",   completed: true  },
      ],
      loading: false,
      error:   null,
    },
  };

  it("renders todos from the Redux store", () => {
    renderWithStore(<TodoList />, { preloadedState });

    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Learn Redux")).toBeInTheDocument();
  });

  it("dispatches toggleTodo action when checkbox is clicked", () => {
    const { store } = renderWithStore(<TodoList />, { preloadedState });

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    const state = store.getState();
    expect(state.todos.items[0].completed).toBe(true);
  });

  it("shows loading spinner when loading is true", () => {
    renderWithStore(<TodoList />, {
      preloadedState: { todos: { items: [], loading: true, error: null } },
    });

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
```

---

## 64. Describe the process of testing _asynchronous action creators_.

Testing async thunks involves verifying that the correct **sequence of actions** is dispatched and that the store state updates correctly for success and failure scenarios.

### Testing with a Real Store

```typescript
// features/users/usersSlice.test.ts
import { configureStore }      from "@reduxjs/toolkit";
import usersReducer, { fetchUsers, createUser } from "./usersSlice";
import * as usersApi           from "../../api/usersApi";

jest.mock("../../api/usersApi");
const mockedApi = usersApi as jest.Mocked<typeof usersApi>;

const buildStore = (preloadedState = {}) =>
  configureStore({ reducer: { users: usersReducer }, preloadedState });

describe("fetchUsers thunk", () => {
  it("fetches and stores users on success", async () => {
    const mockUsers = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
    mockedApi.getUsers.mockResolvedValue(mockUsers);

    const store = buildStore();
    await store.dispatch(fetchUsers());

    const { users } = store.getState();
    expect(users.list).toEqual(mockUsers);
    expect(users.loading).toBe(false);
    expect(users.error).toBeNull();
  });

  it("sets error state on failure", async () => {
    mockedApi.getUsers.mockRejectedValue(new Error("Server error"));

    const store = buildStore();
    await store.dispatch(fetchUsers());

    const { users } = store.getState();
    expect(users.list).toEqual([]);
    expect(users.loading).toBe(false);
    expect(users.error).toBe("Server error");
  });

  it("tracks correct action sequence", async () => {
    const mockUsers = [{ id: 1, name: "Alice" }];
    mockedApi.getUsers.mockResolvedValue(mockUsers);

    const dispatchedActions: string[] = [];
    const trackingMiddleware = () => (next) => (action) => {
      dispatchedActions.push(action.type);
      return next(action);
    };

    const store = configureStore({
      reducer: { users: usersReducer },
      middleware: (getDefault) => getDefault().concat(trackingMiddleware),
    });

    await store.dispatch(fetchUsers());

    expect(dispatchedActions).toEqual([
      "users/fetchAll/pending",
      "users/fetchAll/fulfilled",
    ]);
  });
});
```

### Testing Thunks with `rejectWithValue`

```typescript
// Testing error handling with rejectWithValue
describe("createUser thunk", () => {
  it("handles validation errors from server", async () => {
    const validationError = { email: "Email already taken" };
    mockedApi.createUser.mockRejectedValue({ response: { data: validationError } });

    const store  = buildStore();
    const result = await store.dispatch(createUser({ email: "alice@example.com" }));

    // Check the returned action
    expect(createUser.rejected.match(result)).toBe(true);
    expect(result.payload).toEqual(validationError);

    const { users } = store.getState();
    expect(users.validationErrors).toEqual(validationError);
  });
});
```

---

## 65. What tools can you use to facilitate testing in _Redux applications_?

A well-tested Redux application uses a combination of tools for **unit testing**, **integration testing**, and **end-to-end testing**.

### Core Testing Stack

```bash
# Install testing dependencies
npm install --save-dev \
  jest                          \  # test runner
  @testing-library/react        \  # component testing
  @testing-library/user-event   \  # user interaction simulation
  @testing-library/jest-dom     \  # custom DOM matchers
  msw                           \  # Mock Service Worker for API mocking
  redux-mock-store                 # mock Redux store for action testing
```

### Mock Service Worker (MSW) — API Mocking

```typescript
// mocks/handlers.ts — intercept API calls at the network level
import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) =>
    res(ctx.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]))
  ),
  rest.post("/api/users", async (req, res, ctx) => {
    const body = await req.json();
    return res(ctx.status(201), ctx.json({ id: 3, ...body }));
  }),
  rest.get("/api/users/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (id === "999") return res(ctx.status(404), ctx.json({ error: "Not found" }));
    return res(ctx.json({ id: Number(id), name: "Alice" }));
  }),
];

// mocks/server.ts
import { setupServer } from "msw/node";
import { handlers }    from "./handlers";

export const server = setupServer(...handlers);

// jest.setup.ts
import { server } from "./mocks/server";
beforeAll(()  => server.listen());
afterEach(()  => server.resetHandlers()); // reset between tests
afterAll(()   => server.close());
```

### Redux Mock Store — Action Testing

```typescript
import configureMockStore from "redux-mock-store";
import thunk              from "redux-thunk";
import { fetchUsers }      from "./usersSlice";

const mockStore = configureMockStore([thunk]);

describe("Using redux-mock-store", () => {
  it("dispatches correct action sequence", async () => {
    const store = mockStore({ users: { list: [], loading: false } });

    await store.dispatch(fetchUsers());

    const actions = store.getActions();
    expect(actions[0].type).toBe("users/fetchAll/pending");
    expect(actions[1].type).toBe("users/fetchAll/fulfilled");
  });
});
```

### Selector Testing

```typescript
// Test selectors independently from components
import { selectFilteredTodos, selectCompletedPercentage } from "./todosSelectors";

describe("Todo Selectors", () => {
  const mockState = {
    todos: {
      items: [
        { id: 1, text: "Buy milk",   completed: true  },
        { id: 2, text: "Learn RTK",  completed: false },
        { id: 3, text: "Write tests",completed: true  },
      ],
      filter: "completed",
    },
  };

  it("selectFilteredTodos returns only completed todos", () => {
    const result = selectFilteredTodos(mockState);
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.completed)).toBe(true);
  });

  it("selectCompletedPercentage calculates correctly", () => {
    const result = selectCompletedPercentage(mockState);
    expect(result).toBe(67); // 2/3 = 66.67% → rounded to 67
  });
});
```

---

## 66. How do you integrate _Redux_ with a framework other than _React_, like _Angular_ or _Vue_?

Redux is framework-agnostic — its core (`redux` package) works with any UI framework via **store subscriptions** and **manual integration**.

### Vanilla JS / Framework-Agnostic Integration

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer     from "./counterSlice";

const store = configureStore({ reducer: { counter: counterReducer } });

// Subscribe to store changes and update UI manually
store.subscribe(() => {
  const state = store.getState();
  document.getElementById("count").textContent = state.counter.value;
});

// Dispatch from DOM events
document.getElementById("increment").addEventListener("click", () => {
  store.dispatch({ type: "counter/increment" });
});
```

### Angular Integration — `@ngrx/store` (Recommended)

```typescript
// NgRx is the Angular-native Redux implementation (not plain Redux)
// It follows the same principles but integrates with Angular's DI system

// counter.reducer.ts
import { createReducer, on } from "@ngrx/store";
import { increment, decrement } from "./counter.actions";

export const counterReducer = createReducer(
  0,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

// app.module.ts
import { StoreModule } from "@ngrx/store";

@NgModule({
  imports: [StoreModule.forRoot({ counter: counterReducer })],
})
export class AppModule {}

// counter.component.ts
import { Store } from "@ngrx/store";

@Component({ template: `<p>{{ count$ | async }}</p>` })
export class CounterComponent {
  count$ = this.store.select((state) => state.counter);

  constructor(private store: Store) {}

  increment() { this.store.dispatch(increment()); }
}
```

### Vue Integration — Plain Redux

```javascript
// main.js — provide store via Vue's provide/inject
import { createApp }      from "vue";
import { configureStore } from "@reduxjs/toolkit";
import App                from "./App.vue";
import counterReducer     from "./counterSlice";

const store = configureStore({ reducer: { counter: counterReducer } });

const app = createApp(App);
app.provide("store", store);
app.mount("#app");

// CounterComponent.vue
<script setup>
import { inject, ref, onUnmounted } from "vue";
import { increment }                 from "./counterSlice";

const store = inject("store");
const count = ref(store.getState().counter.value);

const unsubscribe = store.subscribe(() => {
  count.value = store.getState().counter.value;
});

onUnmounted(() => unsubscribe());

const handleIncrement = () => store.dispatch(increment());
</script>

<template>
  <button @click="handleIncrement">{{ count }}</button>
</template>
```

---

## 67. Can _Redux_ be used with server-side rendering frameworks like _Next.js_?

Yes — Redux works well with Next.js, but requires careful handling of **server/client state isolation** to prevent state leaking between requests.

### Setup with Redux Toolkit + Next.js App Router

```typescript
// store/index.ts — factory function creates a new store per request
import { configureStore } from "@reduxjs/toolkit";
import counterReducer      from "./counterSlice";

export const makeStore = () =>
  configureStore({ reducer: { counter: counterReducer } });

export type AppStore    = ReturnType<typeof makeStore>;
export type RootState   = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
```

```typescript
// store/StoreProvider.tsx — client component that provides the store
"use client";
import { useRef }       from "react";
import { Provider }     from "react-redux";
import { makeStore, AppStore } from "./index";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  // useRef ensures we create the store only once per client session
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
```

```tsx
// app/layout.tsx — wrap the app in the store provider
import StoreProvider from "../store/StoreProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```

### Pre-populating Store from Server Components

```tsx
// app/dashboard/page.tsx — fetch on server, pass to client via props
import StoreProvider from "../../store/StoreProvider";
import Dashboard     from "./Dashboard";

async function DashboardPage() {
  // Fetch data on the server
  const initialUsers = await fetch("https://api.example.com/users").then((r) => r.json());

  return (
    <StoreProvider initialState={{ users: { list: initialUsers } }}>
      <Dashboard />
    </StoreProvider>
  );
}
```

---

## 68. Discuss the use of _Redux_ with _React Native_.

Redux integrates with React Native using the same **React-Redux** bindings as web — since React Native is just React with native components.

### Setup

```bash
npm install @reduxjs/toolkit react-redux
```

```typescript
// store/index.ts — identical to a web Redux setup
import { configureStore } from "@reduxjs/toolkit";
import cartReducer         from "./cartSlice";
import authReducer         from "./authSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, auth: authReducer },
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

```tsx
// App.tsx — wrap with Provider (same as web)
import { Provider }    from "react-redux";
import { store }       from "./store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* screens */}
      </NavigationContainer>
    </Provider>
  );
}
```

### React Native-Specific Considerations

```typescript
// Persistence with AsyncStorage (replaces localStorage in React Native)
import AsyncStorage                from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key:     "root",
  storage: AsyncStorage,           // ← use AsyncStorage instead of localStorage
  whitelist: ["auth", "settings"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store     = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);
```

```tsx
// Screens connect to Redux exactly like web components
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addToCart }                       from "../store/cartSlice";

function ProductScreen({ product }) {
  const cartCount = useAppSelector((state) => state.cart.items.length);
  const dispatch  = useAppDispatch();

  return (
    <View>
      <Text>{product.name}</Text>
      <TouchableOpacity onPress={() => dispatch(addToCart(product))}>
        <Text>Add to Cart ({cartCount})</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

## 69. What adaptations are needed to use _Redux_ outside of a UI environment (e.g., in a _Node.js_ backend)?

Redux's core works in any JavaScript environment — no React or browser APIs are required. In Node.js, you use the store directly without any UI bindings.

### Basic Node.js Redux Setup

```javascript
// store.js — plain Redux store, no React-Redux needed
import { configureStore, createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: { queue: [], processing: [], completed: [] },
  reducers: {
    enqueue:  (state, action) => { state.queue.push(action.payload);      },
    start:    (state, action) => {
      state.queue       = state.queue.filter((j) => j.id !== action.payload.id);
      state.processing.push(action.payload);
    },
    complete: (state, action) => {
      state.processing  = state.processing.filter((j) => j.id !== action.payload.id);
      state.completed.push(action.payload);
    },
  },
});

export const store = configureStore({ reducer: { jobs: jobsSlice.reducer } });
export const { enqueue, start, complete } = jobsSlice.actions;
```

```javascript
// worker.js — use Redux store as a job queue state machine
import { store, enqueue, start, complete } from "./store";

async function processJob(job) {
  store.dispatch(start(job));

  try {
    const result = await heavyComputation(job.data);
    store.dispatch(complete({ ...job, result }));
  } catch (err) {
    store.dispatch({ type: "jobs/fail", payload: { ...job, error: err.message } });
  }
}

// Subscribe to store changes for logging or side effects
store.subscribe(() => {
  const { jobs } = store.getState();
  console.log(`Queue: ${jobs.queue.length} | Processing: ${jobs.processing.length}`);
});

// Dispatch jobs from an API route or message queue
store.dispatch(enqueue({ id: "job-1", data: { /* ... */ } }));
```

### Express.js Middleware Integration

```javascript
// middleware/reduxAudit.js — log all state changes in an Express app
import { store }  from "./store";
import { logAudit } from "./auditSlice";

export function reduxAuditMiddleware(req, res, next) {
  const originalJson = res.json.bind(res);

  res.json = (body) => {
    // Dispatch an audit action for every API response
    store.dispatch(logAudit({
      method:    req.method,
      path:      req.path,
      status:    res.statusCode,
      userId:    req.user?.id,
      timestamp: Date.now(),
    }));
    return originalJson(body);
  };

  next();
}
```

---

## 70. How do you organize your files and folders in a large _Redux_ application?

Large Redux applications benefit from a **feature-based (slice-first) folder structure** — keeping all files related to a feature co-located.

### Feature-Based Structure (Recommended)

```
src/
├── app/
│   ├── store.ts              ← configureStore, RootState, AppDispatch
│   ├── hooks.ts              ← useAppSelector, useAppDispatch
│   └── rootReducer.ts        ← combineReducers (if needed)
│
├── features/
│   ├── auth/
│   │   ├── authSlice.ts      ← reducer + actions
│   │   ├── authSelectors.ts  ← memoized selectors
│   │   ├── authThunks.ts     ← createAsyncThunk actions
│   │   ├── authApi.ts        ← API calls for this feature
│   │   ├── authSlice.test.ts ← tests
│   │   ├── LoginForm.tsx     ← components
│   │   └── index.ts          ← public API (re-exports)
│   │
│   ├── todos/
│   │   ├── todosSlice.ts
│   │   ├── todosSelectors.ts
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   └── index.ts
│   │
│   └── dashboard/
│       ├── dashboardSlice.ts
│       └── Dashboard.tsx
│
├── shared/
│   ├── components/           ← shared UI components
│   ├── hooks/                ← shared custom hooks
│   └── utils/                ← shared utilities
│
└── services/
    ├── apiClient.ts          ← axios/fetch base config
    └── websocket.ts          ← WebSocket client
```

### Public API via Index Files

```typescript
// features/auth/index.ts — expose only what other features need
export { default as authReducer }    from "./authSlice";
export { login, logout }             from "./authSlice";
export { selectCurrentUser,
         selectIsAuthenticated }     from "./authSelectors";
export { loginUser, fetchProfile }   from "./authThunks";

// Other features import from the index — never from internal files
import { selectCurrentUser } from "../auth"; // ✅
import { selectCurrentUser } from "../auth/authSelectors"; // ❌ avoid
```

### Store Assembly

```typescript
// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { authReducer }    from "../features/auth";
import { todosReducer }   from "../features/todos";
import { usersApi }       from "../features/users/usersApi"; // RTK Query

export const store = configureStore({
  reducer: {
    auth:          authReducer,
    todos:         todosReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(usersApi.middleware),
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

## 71. What strategies can be used to scale _Redux actions_ and _reducers_?

Scaling Redux requires **modular organization**, **code generation patterns**, and **clear ownership boundaries** to keep large action/reducer sets manageable.

### Strategy 1 — Feature Slices with Clear Boundaries

```typescript
// Each feature owns its own slice — no cross-feature reducer imports
// features/orders/ordersSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrders  = createAsyncThunk("orders/fetchAll",  ordersApi.getAll);
export const createOrder  = createAsyncThunk("orders/create",    ordersApi.create);
export const cancelOrder  = createAsyncThunk("orders/cancel",    ordersApi.cancel);

const ordersSlice = createSlice({
  name: "orders",
  initialState: ordersAdapter.getInitialState({ loading: false }),
  reducers: {
    setFilter: (state, action) => { state.filter = action.payload; },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      ordersAdapter.setAll(state, action.payload);
    });
  },
});
```

### Strategy 2 — Cross-Slice Communication via `extraReducers`

```typescript
// auth slice resets orders when user logs out — without tight coupling
import { logout } from "../auth/authSlice";

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: { /* ... */ },
  extraReducers: (builder) => {
    // Listen to actions from OTHER slices
    builder.addCase(logout, () => initialState);
  },
});
```

### Strategy 3 — Action Namespacing

```typescript
// Consistent naming prevents collisions in large teams
// [domain]/[entity]/[verb]
"auth/session/start"
"auth/session/end"
"orders/item/add"
"orders/item/remove"
"inventory/product/update"
"inventory/product/archive"
```

### Strategy 4 — Dynamic Reducer Injection (Code Splitting)

```typescript
// inject-reducer.ts — add reducers to the store at runtime (lazy loading)
import { store } from "./store";
import type { Reducer } from "@reduxjs/toolkit";

export function injectReducer(key: string, reducer: Reducer) {
  if (!store.asyncReducers) store.asyncReducers = {};
  if (store.asyncReducers[key]) return; // already injected

  store.asyncReducers[key] = reducer;
  store.replaceReducer(
    combineReducers({ ...staticReducers, ...store.asyncReducers })
  );
}

// In a lazy-loaded route:
const AnalyticsPage = React.lazy(async () => {
  const { analyticsReducer } = await import("../features/analytics");
  injectReducer("analytics", analyticsReducer);  // inject at load time
  return import("./AnalyticsPage");
});
```

---

## 72. Can you explain the concept of "_domain-driven design_" in the context of a Redux state tree?

**Domain-Driven Design (DDD)** applied to Redux means organizing the state tree around **business domains** rather than technical layers — mirroring how the business thinks about the application.

### Technical Layers (Anti-Pattern)

```
// ❌ Organized by technical type — cross-cutting, hard to scale
state/
  actions/     ← all actions together
  reducers/    ← all reducers together
  selectors/   ← all selectors together
```

### Domain-Driven State Tree

```typescript
// ✅ Organized by business domain
const store = configureStore({
  reducer: {
    // Customer domain
    customers: customersReducer,    // customer profiles, preferences

    // Product domain
    catalog:   catalogReducer,      // products, categories, inventory
    pricing:   pricingReducer,      // discounts, promotions, rules

    // Order domain
    cart:      cartReducer,         // shopping cart state
    orders:    ordersReducer,       // order history, tracking

    // User experience domain
    ui:        uiReducer,           // modals, notifications, theme

    // Auth domain
    auth:      authReducer,         // session, permissions, tokens
  },
});
```

### Domain Boundaries — Bounded Contexts

```typescript
// Each domain encapsulates its own models, actions, and rules
// features/orders/ordersSlice.ts — the "Order" bounded context

interface OrderItem { productId: number; quantity: number; unitPrice: number; }
interface Order {
  id:         string;
  customerId: number;
  items:      OrderItem[];
  status:     "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  total:      number;
}

// Domain-specific actions — use business language (ubiquitous language)
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    confirmOrder:  (state, action) => { /* ... */ },  // business term
    shipOrder:     (state, action) => { /* ... */ },  // business term
    cancelOrder:   (state, action) => { /* ... */ },  // business term
    deliverOrder:  (state, action) => { /* ... */ },  // business term
  },
});

// Cross-domain communication via events — orders reacts to customer changes
builder.addCase(customerDeleted, (state, action) => {
  state.list = state.list.filter((o) => o.customerId !== action.payload.id);
});
```

---

## 73. How do feature modules and code splitting affect _Redux state management_?

**Code splitting** with Redux means loading feature reducers **on demand** — only when a route or feature is accessed — reducing initial bundle size.

### Dynamic Reducer Injection Pattern

```typescript
// store/reducerManager.ts — manages dynamic reducer registration
import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { staticReducers }           from "./staticReducers";

export function createReducerManager(initialReducers: Record<string, Reducer>) {
  let reducers     = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove:   string[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: any, action: any) => {
      // Clean up state for removed reducers
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => delete state[key]);
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    add: (key: string, reducer: Reducer) => {
      if (!key || reducers[key]) return;  // already registered
      reducers         = { ...reducers, [key]: reducer };
      combinedReducer  = combineReducers(reducers);
    },

    remove: (key: string) => {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
```

### Injecting Reducers in Lazy-Loaded Routes

```tsx
// hooks/useInjectReducer.ts
import { useEffect }  from "react";
import { useStore }   from "react-redux";
import type { Reducer } from "@reduxjs/toolkit";

export function useInjectReducer(key: string, reducer: Reducer) {
  const store = useStore() as any;
  useEffect(() => {
    store.reducerManager?.add(key, reducer);
    return () => store.reducerManager?.remove(key); // cleanup on unmount
  }, [key, reducer, store]);
}

// features/analytics/AnalyticsPage.tsx — lazy-loaded route component
import { useInjectReducer } from "../../hooks/useInjectReducer";
import analyticsReducer     from "./analyticsSlice";

function AnalyticsPage() {
  useInjectReducer("analytics", analyticsReducer); // injected on mount

  const data = useAppSelector((state: any) => state.analytics?.data);
  return <div>{/* analytics UI */}</div>;
}

// router — split at the route level
const AnalyticsPage = React.lazy(() => import("../features/analytics/AnalyticsPage"));
```

---

## 74. Discuss strategies for managing complex application state with _Redux_.

Complex applications require deliberate state architecture strategies to remain **maintainable, performant, and testable** as the codebase grows.

### Strategy 1 — State Colocation (Keep State Close to Use)

```typescript
// Not everything belongs in Redux — choose the right tool
// ✅ In Redux:  server data, auth, shared cross-component state
// ✅ In React:  UI state, form state, component-local state

// ❌ Over-using Redux
const uiSlice = createSlice({
  name: "ui",
  initialState: { isDropdownOpen: false },  // local UI state in Redux
  reducers: { toggleDropdown: (state) => { state.isDropdownOpen = !state.isDropdownOpen; } },
});

// ✅ Keep local UI state in React
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);  // local only → no Redux needed
  return <div onClick={() => setIsOpen(!isOpen)}>{/* ... */}</div>;
}
```

### Strategy 2 — RTK Query for Server State

```typescript
// RTK Query separates server state from client state cleanly
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery:   fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes:    ["Order"],
  endpoints:   (builder) => ({
    getOrders:   builder.query<Order[], void>({
      query: () => "/orders",
      providesTags: ["Order"],
    }),
    cancelOrder: builder.mutation<void, string>({
      query: (id) => ({ url: `/orders/${id}/cancel`, method: "POST" }),
      invalidatesTags: ["Order"],   // auto-refetch orders list after cancel
    }),
  }),
});

// Component — loading, error, caching handled automatically
function OrderList() {
  const { data: orders, isLoading } = useGetOrdersQuery();
  const [cancelOrder]               = useCancelOrderMutation();
  // ...
}
```

### Strategy 3 — State Machines with Redux

```typescript
// Model complex workflows as state machines for predictability
type CheckoutStatus =
  | "cart"
  | "shipping"
  | "payment"
  | "confirming"
  | "confirmed"
  | "failed";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { status: "cart" as CheckoutStatus },
  reducers: {
    proceedToShipping: (state) => {
      if (state.status === "cart") state.status = "shipping";      // guard transitions
    },
    proceedToPayment: (state) => {
      if (state.status === "shipping") state.status = "payment";
    },
    confirmOrder: (state) => {
      if (state.status === "payment") state.status = "confirming";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.fulfilled, (state) => { state.status = "confirmed"; })
      .addCase(submitOrder.rejected,  (state) => { state.status = "failed";    });
  },
});
```

---

## 75. How do you prevent unnecessary renders in _Redux-connected components_?

Unnecessary renders are one of the most common Redux performance issues. They occur when components subscribe to **more state than they need** or use **unstable selector references**.

### Problem — Over-Subscribing

```javascript
// ❌ Subscribes to entire state — re-renders on ANY state change
const everything = useSelector((state) => state);

// ❌ New object every call — always triggers re-render (referential inequality)
const { name, email } = useSelector((state) => ({
  name:  state.user.name,
  email: state.user.email,
}));
```

### Solution — Granular Selectors

```javascript
// ✅ Select only what the component needs
const name  = useSelector((state) => state.user.name);
const email = useSelector((state) => state.user.email);

// ✅ shallowEqual for object selections
import { shallowEqual } from "react-redux";
const { name, email } = useSelector(
  (state) => ({ name: state.user.name, email: state.user.email }),
  shallowEqual
);

// ✅ Memoized selectors — best for computed/derived values
const selectVisibleTodos = createSelector(
  [(state) => state.todos.items, (state) => state.todos.filter],
  (items, filter) => items.filter((t) => t.status === filter)
);
const visibleTodos = useSelector(selectVisibleTodos);
```

### Solution — `React.memo` + Stable Callbacks

```tsx
// ✅ Memoize pure presentational components
const TodoItem = React.memo(({ id }: { id: number }) => {
  const todo     = useAppSelector((state) => selectTodoById(state, id));
  const dispatch = useAppDispatch();

  // ✅ useCallback stabilizes the function reference
  const handleToggle = useCallback(
    () => dispatch(toggleTodo(id)),
    [dispatch, id]
  );

  return (
    <li>
      <input type="checkbox" checked={todo?.completed} onChange={handleToggle} />
      {todo?.text}
    </li>
  );
});

// Parent only passes IDs — children subscribe individually
function TodoList() {
  const ids = useAppSelector(selectTodoIds); // stable ID array
  return <ul>{ids.map((id) => <TodoItem key={id} id={id} />)}</ul>;
}
```

---

## 76. What techniques are available to reduce the size of the _Redux store_?

A bloated Redux store degrades performance and increases memory usage. These techniques keep your store **lean and efficient**.

### Technique 1 — Only Store What's Necessary

```typescript
// ❌ Storing derived/computed data in the store
const state = {
  todos:        [{ id: 1, text: "Learn Redux", completed: false }],
  completedTodos: [],    // ❌ derived — can be computed from todos
  todoCount:    1,       // ❌ derived — can be computed from todos
};

// ✅ Compute derived data in selectors
const selectCompletedTodos = createSelector(
  [(state) => state.todos],
  (todos) => todos.filter((t) => t.completed)
);

const selectTodoCount = (state) => state.todos.length;
```

### Technique 2 — Paginate Large Collections

```typescript
const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentPage: { ids: [], entities: {} },  // only store current page
    pagination:  { page: 1, perPage: 20, total: 0 },
  },
  reducers: {
    loadPage: (state, action) => {
      // Replace current page data — don't accumulate all pages
      usersAdapter.setAll(state.currentPage, action.payload.users);
      state.pagination = action.payload.pagination;
    },
  },
});
```

### Technique 3 — Clear Stale Data

```typescript
const ordersSlice = createSlice({
  name: "orders",
  initialState: ordersAdapter.getInitialState({
    loadedAt: null as number | null,
  }),
  reducers: {
    clearOldOrders: (state) => {
      const threshold = Date.now() - 5 * 60 * 1000; // 5 minutes
      if (state.loadedAt && state.loadedAt < threshold) {
        ordersAdapter.removeAll(state); // free memory
        state.loadedAt = null;
      }
    },
  },
});
```

### Technique 4 — RTK Query (Automatic Cache Management)

```typescript
// RTK Query automatically removes cached data after it's no longer needed
const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery:   fetchBaseQuery({ baseUrl: "/api" }),
  keepUnusedDataFor: 60,   // remove from cache after 60 seconds of no subscribers
  endpoints: (builder) => ({
    getOrders: builder.query({ query: () => "/orders" }),
  }),
});
```

---

## 77. How do you optimize _Redux action dispatch_ and _payload size_?

Frequent dispatching of large payloads can bottleneck your application. These strategies reduce dispatch overhead and payload size.

### Batch Dispatches

```typescript
// redux-batched-actions — combine multiple dispatches into one render cycle
import { batchActions } from "redux-batched-actions";

// ❌ Three separate dispatches — three re-renders
dispatch(setLoading(false));
dispatch(setUsers(users));
dispatch(setTotal(total));

// ✅ One batched dispatch — one re-render
dispatch(batchActions([
  setLoading(false),
  setUsers(users),
  setTotal(total),
]));

// RTK 2.0+ — built-in batching via unstable_batchedUpdates (React 18 auto-batches)
import { batch } from "react-redux";
batch(() => {
  dispatch(setLoading(false));
  dispatch(setUsers(users));
});
```

### Normalize Payloads Before Dispatch

```typescript
// ❌ Dispatching deeply nested / large object
dispatch(fetchOrdersSuccess(rawApiResponse)); // 500KB response

// ✅ Normalize and trim before dispatch
const fetchOrders = createAsyncThunk("orders/fetch", async () => {
  const rawData = await ordersApi.getAll();

  // Transform/normalize in the thunk — not the reducer
  return rawData.orders.map(({ id, status, total, customerId }) => ({
    id, status, total, customerId, // only keep what UI needs
  }));
});
```

### Debounce High-Frequency Actions

```typescript
// For rapid-fire events (typing, scroll, resize) — debounce before dispatching
import { debounce } from "lodash";

function SearchBox() {
  const dispatch = useAppDispatch();

  // Only dispatches after user stops typing for 300ms
  const debouncedSearch = useCallback(
    debounce((term: string) => dispatch(setSearchTerm(term)), 300),
    [dispatch]
  );

  return <input onChange={(e) => debouncedSearch(e.target.value)} />;
}
```

### Throttle Scroll/Resize Actions

```typescript
import { throttle } from "lodash";

useEffect(() => {
  const handleScroll = throttle(() => {
    dispatch(setScrollPosition(window.scrollY)); // max once per 100ms
  }, 100);

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [dispatch]);
```

---

## 78. What are best practices for ensuring a scalable _Redux state management_ with large datasets or frequent updates?

Scalable Redux with large datasets requires architectural decisions that minimize computation, reduce re-renders, and efficiently handle high-frequency updates.

### Use Entity Adapter for Large Collections

```typescript
// O(1) lookups instead of O(n) array scans
const usersAdapter = createEntityAdapter<User>({
  selectId:      (user) => user.id,
  sortComparer:  (a, b) => a.name.localeCompare(b.name),
});

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
  reducers: {
    upsertUser:  usersAdapter.upsertOne,    // add or update
    removeUser:  usersAdapter.removeOne,    // O(1) removal
    upsertMany:  usersAdapter.upsertMany,   // bulk upsert
  },
});
```

### Virtualize Large Lists

```tsx
// react-window renders only visible items — massive performance gain
import { FixedSizeList } from "react-window";
import { useAppSelector }  from "../store/hooks";
import { selectAllUsers }  from "../features/users/usersSlice";

function UserList() {
  const users = useAppSelector(selectAllUsers);

  return (
    <FixedSizeList
      height={600}
      itemCount={users.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <UserRow user={users[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}
```

### Selective State Updates for Real-Time Data

```typescript
// WebSocket — only dispatch if data actually changed
const wsMiddleware = (store) => {
  const socket = new WebSocket("wss://api.example.com/live");
  const prev   = new Map<string, string>();

  socket.onmessage = (event) => {
    const { id, data } = JSON.parse(event.data);
    const hash         = JSON.stringify(data);

    if (prev.get(id) !== hash) {    // only dispatch on actual change
      prev.set(id, hash);
      store.dispatch(updateEntity({ id, changes: data }));
    }
  };

  return (next) => (action) => next(action);
};
```

### RTK Query for Automatic Caching and Deduplication

```typescript
const dataApi = createApi({
  reducerPath:       "dataApi",
  baseQuery:         fetchBaseQuery({ baseUrl: "/api" }),
  keepUnusedDataFor: 300,              // cache for 5 minutes
  endpoints: (builder) => ({
    getLiveData: builder.query<Data, void>({
      query: () => "/live-data",
      // Auto-poll every 10 seconds — RTK Query deduplicates concurrent requests
      pollingInterval: 10_000,
    }),
  }),
});
```

---

## 79. How do you manage form state with _Redux_?

Form state management in Redux requires balancing **developer experience** with **performance** — not all form state belongs in Redux.

### When to Use Redux for Forms

```typescript
// ✅ Use Redux for form state when:
// 1. Form data is needed by multiple components
// 2. Form must persist across route changes
// 3. Form data feeds into other Redux state computations

// ❌ Use local React state or React Hook Form for:
// 1. Simple, isolated forms
// 2. High-frequency field updates (every keystroke)
```

### Simple Form Slice

```typescript
// features/checkout/checkoutFormSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutForm {
  email:   string;
  name:    string;
  address: string;
  city:    string;
  errors:  Record<string, string>;
  touched: Record<string, boolean>;
}

const checkoutFormSlice = createSlice({
  name: "checkoutForm",
  initialState: { email: "", name: "", address: "", city: "", errors: {}, touched: {} } as CheckoutForm,
  reducers: {
    setField: (state, action: PayloadAction<{ field: keyof CheckoutForm; value: string }>) => {
      const { field, value } = action.payload;
      (state as any)[field] = value;
      state.touched[field as string] = true;
    },
    setErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = action.payload;
    },
    resetForm: () => ({ email: "", name: "", address: "", city: "", errors: {}, touched: {} }),
  },
});

export const { setField, setErrors, resetForm } = checkoutFormSlice.actions;
```

### Integration with React Hook Form (Best of Both Worlds)

```tsx
// Use React Hook Form for local validation + sync to Redux on submit
import { useForm }      from "react-hook-form";
import { useAppDispatch } from "../store/hooks";
import { submitOrder }  from "./checkoutThunks";

function CheckoutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutForm>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: CheckoutForm) => {
    dispatch(submitOrder(data)); // only dispatch on submit — no per-keystroke updates
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "Email required" })} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">Place Order</button>
    </form>
  );
}
```

---

## 80. Discuss the use of libraries like _Redux Form_ or _React Final Form_ with _Redux_.

While `redux-form` was historically popular, the ecosystem has shifted toward **React Hook Form** and **Formik** — libraries that manage form state locally rather than in Redux.

### Redux Form (Legacy)

```javascript
// redux-form stores ALL form state in Redux — now largely deprecated
import { createStore, combineReducers } from "redux";
import { reducer as formReducer }       from "redux-form";

const store = createStore(combineReducers({ form: formReducer }));

// Form component
import { Field, reduxForm } from "redux-form";

const ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="email"   component="input" type="email" />
    <Field name="message" component="textarea" />
    <button type="submit">Send</button>
  </form>
);

export default reduxForm({ form: "contact" })(ContactForm);
// ⚠️ Deprecated — dispatches an action on every keystroke → performance issues
```

### React Hook Form + Redux (Recommended Modern Approach)

```tsx
// React Hook Form handles form state locally → dispatches to Redux on submit only
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch }         from "../store/hooks";
import { submitContactForm }       from "./contactThunks";

interface ContactFormValues { email: string; message: string; }

function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<ContactFormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    await dispatch(submitContactForm(data)).unwrap(); // throws on rejected
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: "Required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <textarea {...register("message", { required: "Required", minLength: { value: 10, message: "Too short" } })} />
      {errors.message && <p>{errors.message.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
```

---

## 81. What are the trade-offs of keeping form state in the _Redux store_?

Deciding whether to store form state in Redux involves weighing **debugging benefits** against **performance costs** and **architectural complexity**.

### Trade-offs Summary

| Concern | In Redux | In Local State |
|---|---|---|
| **DevTools visibility** | Full action log, time travel | No visibility |
| **Performance** | Re-renders on every keystroke | Isolated to form |
| **Persistence** | Survives route changes | Lost on unmount |
| **Shared access** | Any component can read it | Component-only |
| **Boilerplate** | More setup required | Minimal |
| **Testing** | Store-based testing | Simpler unit tests |

### When Redux Form State Makes Sense

```typescript
// ✅ Multi-step wizard — form state must persist across route changes
const wizardSlice = createSlice({
  name: "wizard",
  initialState: { step: 1, personalInfo: {}, addressInfo: {}, paymentInfo: {} },
  reducers: {
    savePersonalInfo:  (state, action) => { state.personalInfo = action.payload; },
    saveAddressInfo:   (state, action) => { state.addressInfo  = action.payload; },
    savePaymentInfo:   (state, action) => { state.paymentInfo  = action.payload; },
    nextStep:          (state) => { state.step += 1; },
    prevStep:          (state) => { state.step -= 1; },
  },
});

// Step 1 — /checkout/personal
function PersonalInfoStep() {
  const saved    = useAppSelector((state) => state.wizard.personalInfo);
  const dispatch = useAppDispatch();

  const onNext = (data) => {
    dispatch(savePersonalInfo(data));  // persists to Redux
    dispatch(nextStep());              // navigate to step 2
  };
}
```

### When to Avoid Redux for Forms

```tsx
// ❌ Simple contact form — Redux adds no value here
// Every keystroke dispatches an action → unnecessary overhead

// ✅ Keep simple forms local
function SimpleSearch() {
  const [query, setQuery] = useState("");  // local state is perfectly fine

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProducts(query));  // only dispatch on submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}
```

---

## 82. How do you manage user authentication and session state in _Redux_?

Authentication state in Redux stores **session information** (user profile, tokens, permissions) and drives access control across the entire application.

### Auth Slice

```typescript
// features/auth/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface User { id: number; name: string; email: string; role: "admin" | "user"; }
interface AuthState {
  user:        User | null;
  token:       string | null;
  loading:     boolean;
  error:       string | null;
  initialized: boolean;   // true after initial session check
}

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await authApi.login(credentials);
      return res;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message ?? "Login failed");
    }
  }
);

export const initializeSession = createAsyncThunk("auth/init", async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return authApi.getProfile(token); // validate token with server
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, loading: false, error: null, initialized: false } as AuthState,
  reducers: {
    logout: (state) => {
      state.user        = null;
      state.token       = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending,   (state)         => { state.loading = true; state.error = null; })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user    = action.payload.user;
        state.token   = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload as string;
      })
      .addCase(initializeSession.fulfilled, (state, action) => {
        state.initialized = true;
        state.user        = action.payload?.user ?? null;
        state.token       = action.payload?.token ?? null;
      });
  },
});

export const { logout } = authSlice.actions;
```

### Protected Route Component

```tsx
// components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector }    from "../store/hooks";

function ProtectedRoute({ requiredRole }: { requiredRole?: string }) {
  const { user, initialized } = useAppSelector((state) => state.auth);

  if (!initialized) return <LoadingScreen />;   // wait for session check
  if (!user)        return <Navigate to="/login" replace />;
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/forbidden" replace />;

  return <Outlet />;
}
```

---

## 83. What considerations should be made for security when storing tokens or sensitive information in _Redux_?

Redux state is held in **JavaScript memory** and can be inspected via browser DevTools — sensitive data requires careful handling.

### Key Security Principles

```typescript
// ❌ Storing sensitive data directly in state (visible in Redux DevTools)
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:         null,
    accessToken:  null,    // ❌ visible in DevTools
    refreshToken: null,    // ❌ should be in httpOnly cookie
    password:     null,    // ❌ NEVER store passwords
    creditCard:   null,    // ❌ NEVER store financial data
  },
});

// ✅ Store minimal, non-sensitive session data
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:        null,   // public profile info only
    isLoggedIn:  false,
    expiresAt:   null,   // token expiry time (not the token itself)
    // ✅ Access token managed by the API layer (not Redux)
    // ✅ Refresh token stored in httpOnly cookie (server-managed)
  },
});
```

### Sanitize DevTools

```typescript
// Hide sensitive fields from Redux DevTools
const store = configureStore({
  reducer: rootReducer,
  devTools: {
    actionSanitizer: (action) => {
      if (action.type === "auth/login/fulfilled") {
        return { ...action, payload: { ...action.payload, token: "***" } };
      }
      return action;
    },
    stateSanitizer: (state: any) => ({
      ...state,
      auth: { ...state.auth, token: "***REDACTED***" },
    }),
  },
});
```

### Token Management Best Practices

```typescript
// apiClient.ts — manage tokens outside Redux
import axios from "axios";

const apiClient = axios.create({ baseURL: "/api", withCredentials: true });

// Interceptor adds token from memory (not Redux store) to every request
let accessToken: string | null = null;

export const setAccessToken = (token: string) => { accessToken = token; };
export const clearAccessToken = ()             => { accessToken = null;  };

apiClient.interceptors.request.use((config) => {
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});
```

---

## 84. How do you manage login and logout workflows with _Redux actions_ and _reducers_?

A robust auth workflow handles **loading states**, **error feedback**, **token persistence**, and **global state cleanup** on logout.

### Complete Login/Logout Flow

```typescript
// features/auth/authThunks.ts
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: LoginCredentials, { dispatch, rejectWithValue }) => {
    try {
      const { user, token, expiresIn } = await authApi.login(credentials);

      // Store token in memory (not Redux) — more secure
      setAccessToken(token);

      // Schedule token refresh before expiry
      dispatch(scheduleTokenRefresh(expiresIn - 60));

      return { user, expiresAt: Date.now() + expiresIn * 1000 };
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message ?? "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      await authApi.logout();       // invalidate server session
    } finally {
      clearAccessToken();           // clear in-memory token
      dispatch({ type: "app/reset" }); // reset ALL store slices
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { token, expiresIn } = await authApi.refresh(); // uses httpOnly cookie
      setAccessToken(token);
      dispatch(scheduleTokenRefresh(expiresIn - 60));
      return { expiresAt: Date.now() + expiresIn * 1000 };
    } catch {
      dispatch(logoutUser()); // refresh failed → force logout
      return rejectWithValue("Session expired");
    }
  }
);
```

### Login UI Component

```tsx
// features/auth/LoginPage.tsx
function LoginPage() {
  const dispatch  = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const navigate  = useNavigate();

  const { register, handleSubmit } = useForm<LoginCredentials>();

  const onSubmit = async (data: LoginCredentials) => {
    const result = await dispatch(loginUser(data));
    if (loginUser.fulfilled.match(result)) {
      navigate("/dashboard");       // redirect on success
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")}    type="email"    placeholder="Email"    />
      <input {...register("password")} type="password" placeholder="Password" />
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
```

---

## 85. How do you approach migrating a legacy application state management to _Redux_?

Migrating to Redux works best **incrementally** — running Redux alongside legacy state management rather than replacing everything at once.

### Migration Strategy — Strangler Fig Pattern

```
Phase 1: Install Redux, set up store — no migration yet
Phase 2: Migrate one feature at a time (start with auth or shared state)
Phase 3: New features go straight into Redux
Phase 4: Migrate remaining legacy state as time permits
Phase 5: Remove legacy state management
```

### Phase 1 — Parallel Setup

```typescript
// Install Redux alongside existing state (e.g., MobX, Context, or local state)
// Both run simultaneously during migration

import { configureStore } from "@reduxjs/toolkit";
import authReducer         from "./features/auth/authSlice";

// Start with just one slice — don't migrate everything at once
export const store = configureStore({
  reducer: { auth: authReducer },
});
```

### Phase 2 — Bridge Pattern for Gradual Migration

```typescript
// Bridge existing Context API state to Redux during transition
function AuthBridge({ children }) {
  const { user, setUser } = useContext(LegacyAuthContext); // existing context
  const dispatch           = useAppDispatch();

  // Sync legacy context → Redux when context changes
  useEffect(() => {
    if (user) dispatch(setCurrentUser(user));
    else      dispatch(clearCurrentUser());
  }, [user, dispatch]);

  return children;
}
```

### Phase 3 — Feature Flag for Each Migration

```typescript
// Safely switch between old and new state management per feature
const useUserData = () => {
  const migrateUsers = useFeatureFlag("reduxUsers");

  if (migrateUsers) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAppSelector((state) => state.users); // new Redux
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useLegacyUsers(); // old implementation
};
```

---

## 86. Can you explain the concept of "_state hydration_" in the context of SSR and _Redux_?

**State hydration** is the process of initializing the client-side Redux store with state that was **pre-fetched on the server** — ensuring the client and server render the same HTML without a flash of empty content.

### How Hydration Works

```
Server:
  1. Receives request
  2. Fetches data (users, products, etc.)
  3. Creates Redux store with that data
  4. Renders React to HTML string
  5. Serializes store state into the HTML response

Client:
  1. Receives HTML (already rendered — no loading flash)
  2. Reads serialized state from the HTML
  3. Creates Redux store WITH that state (hydration)
  4. React rehydrates — attaches event handlers to existing HTML
```

### Next.js App Router Implementation

```typescript
// app/products/page.tsx — Server Component fetches data
import { makeStore }      from "../../store";
import { fetchProducts }  from "../../features/products/productsSlice";
import StoreProvider      from "../../store/StoreProvider";
import ProductList        from "./ProductList";

async function ProductsPage() {
  // Create a server-side store instance
  const store = makeStore();

  // Pre-fetch data on the server
  await store.dispatch(fetchProducts());

  // Extract the pre-loaded state
  const preloadedState = store.getState();

  return (
    // Pass preloadedState to client Provider
    <StoreProvider preloadedState={preloadedState}>
      <ProductList />
    </StoreProvider>
  );
}
```

```typescript
// store/StoreProvider.tsx — initializes client store with server state
"use client";
import { useRef }             from "react";
import { Provider }           from "react-redux";
import { makeStore, AppStore } from "./index";
import type { RootState }     from "./index";

export default function StoreProvider({
  children,
  preloadedState,
}: {
  children:       React.ReactNode;
  preloadedState?: Partial<RootState>;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Initialize client store with server-fetched state
    storeRef.current = makeStore(preloadedState);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
```

---

## 87. What challenges might arise when integrating _Redux_ into an existing application and how would you address them?

Integrating Redux into an existing application surfaces architectural, performance, and team challenges that require careful planning.

### Challenge 1 — State Ownership Conflicts

```typescript
// Problem: Both Redux and existing state (Context, MobX) manage the same data
// Solution: Define clear boundaries — one source of truth per domain

// ❌ Conflict — user state in both Context AND Redux
const UserContext = createContext({ user: null }); // existing
const userSlice   = createSlice({ name: "user", initialState: { data: null } }); // new

// ✅ Migrate one domain at a time — deprecate Context after Redux is stable
// 1. Move auth to Redux
// 2. Redirect Context consumers to useAppSelector
// 3. Remove Context once all consumers are migrated
```

### Challenge 2 — Performance Regressions

```typescript
// Problem: Components re-render more than before after connecting to Redux
// Solution: Audit subscriptions — use granular selectors and React.memo

// Debugging tool — log render reasons
import whyDidYouRender from "@welldone-software/why-did-you-render";
whyDidYouRender(React, { trackAllPureComponents: true });

// Fix — replace broad selectors with specific ones
// ❌ const everything = useSelector((state) => state);
// ✅ const name = useSelector((state) => state.user.name);
```

### Challenge 3 — Team Learning Curve

```typescript
// Solution: Provide team patterns and linting rules

// eslint-redux.config.js — enforce Redux best practices
module.exports = {
  rules: {
    // Prevent direct state mutation
    "no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["state"] }],
  },
};

// redux-toolkit-helper.ts — team utility to abstract common patterns
export const createFeatureSlice = <T>(name: string, initialState: T) =>
  createSlice({ name, initialState, reducers: {} });
```

### Challenge 4 — Circular Dependencies Between Slices

```typescript
// Problem: authSlice imports from userSlice, which imports from authSlice
// Solution: Use a shared types file and action creators from a central actions file

// shared/actionTypes.ts — action type constants (no imports from slices)
export const AUTH_LOGOUT    = "auth/logout";
export const USER_CLEARED   = "user/cleared";

// authSlice.ts — dispatches USER_CLEARED without importing userSlice
builder.addCase(logout, (state) => {
  state.token = null;
  // Broadcast the logout — userSlice listens without a direct import
});

// userSlice.ts — listens to AUTH_LOGOUT string to avoid circular import
builder.addMatcher(
  (action) => action.type === AUTH_LOGOUT,
  (state)  => { state.data = null; }
);
```

---

## 88. Describe the current trends and community practices around _Redux_.

The Redux ecosystem has matured significantly, with clear consensus around **Redux Toolkit** as the standard and emerging patterns for coexisting with React Server Components.

### Current Community Standards

```typescript
// 1. Redux Toolkit is now mandatory — vanilla Redux is discouraged
// The Redux team explicitly recommends against createStore in favor of configureStore
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 2. RTK Query for server state — reduces the need for manual thunks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery:   fetchBaseQuery({ baseUrl: "/api" }),
  endpoints:   (builder) => ({
    getPosts: builder.query({ query: () => "/posts" }),
  }),
});

// 3. TypeScript is now standard in Redux projects
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Trend — Redux Alongside React Query / SWR

```typescript
// Modern apps often use React Query for server state + Redux for client state
// Redux: auth, UI state, user preferences, feature flags
// React Query / RTK Query: API data, caching, pagination

// store — only client state
const store = configureStore({
  reducer: {
    auth:     authReducer,       // ← Redux
    ui:       uiReducer,         // ← Redux
    [api.reducerPath]: api.reducer, // ← RTK Query
  },
});

// React Query handles server state separately
const { data: posts } = useQuery("posts", fetchPosts);
```

### Trend — Zustand/Jotai for Simpler Use Cases

```typescript
// Community increasingly uses lighter alternatives for simple state
// Zustand is popular for small-to-medium apps
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count:     0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Redux remains the standard for large, complex enterprise applications
// where DevTools, middleware, and ecosystem maturity matter
```

---

## 89. How has _Redux_ evolved to fit into the modern _React ecosystem_ with hooks?

Redux's evolution mirrors React's own evolution — embracing **functional patterns**, **hooks**, and **minimal boilerplate** while maintaining its core principles.

### Evolution Timeline

```typescript
// ── Pre-Hooks Era (2015-2018) ──────────────────────────────────────────────
// connect() HOC + mapStateToProps + mapDispatchToProps
class Counter extends React.Component {
  render() {
    return <button onClick={this.props.increment}>{this.props.count}</button>;
  }
}
export default connect(
  (state)    => ({ count: state.counter }),
  (dispatch) => ({ increment: () => dispatch({ type: "INCREMENT" }) })
)(Counter);

// ── Hooks Era (2019+) — React-Redux v7.1 ──────────────────────────────────
// useSelector + useDispatch replace connect()
function Counter() {
  const count    = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch({ type: "INCREMENT" })}>{count}</button>;
}

// ── Redux Toolkit Era (2020+) ─────────────────────────────────────────────
// createSlice eliminates action types, action creators, and switch statements
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: { increment: (state) => { state.value += 1; } },
});

function Counter() {
  const count    = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return <button onClick={() => dispatch(counterSlice.actions.increment())}>{count}</button>;
}

// ── RTK Query Era (2021+) ─────────────────────────────────────────────────
// Built-in data fetching — replaces manual async thunks for API calls
const { data: count, isLoading } = useGetCounterQuery();
const [increment] = useIncrementMutation();
```

### Hooks API Improvements

```typescript
// useSelector — replaces mapStateToProps
const user = useSelector((state: RootState) => state.auth.user);

// useDispatch — replaces mapDispatchToProps
const dispatch = useDispatch<AppDispatch>();

// useSelectorWithEqualityFn — fine-grained render control
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";

const { name, email } = useSelector(
  (state) => ({ name: state.user.name, email: state.user.email }),
  shallowEqual
);
```

---

## 90. What do you believe is the future of _Redux_ given the context of emerging state management libraries?

Redux's future is **specialized and stable** — it remains the gold standard for complex enterprise state management while lighter alternatives handle simpler use cases.

### Current Landscape

```typescript
// The state management ecosystem has diversified:

// Simple local/shared state → Zustand, Jotai, Valtio
import { create } from "zustand";
const useStore = create((set) => ({ count: 0, inc: () => set((s) => ({ count: s.count + 1 })) }));

// Server state (fetching/caching) → React Query, SWR, RTK Query
const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

// Complex global state with DevTools → Redux Toolkit (still leading)
const store = configureStore({ reducer: rootReducer });

// React built-in → useReducer + Context (for small apps)
const [state, dispatch] = useReducer(reducer, initialState);
```

### Where Redux Remains Dominant

```typescript
// Redux excels where others struggle:

// 1. Complex state interactions across many features
// 2. Time-travel debugging (Redux DevTools)
// 3. Deterministic state updates for compliance/auditing
// 4. Large teams needing standardization
// 5. Applications requiring full action history

// Enterprise audit example — only Redux gives you this out of the box
const auditLog = store.getState().__devTools?.actionsById;
// Every state change is recorded, replayable, and exportable
```

### Redux's Roadmap Direction

```typescript
// RTK is actively evolving:
// 1. RTK Query — first-class data fetching built in
// 2. Better React Server Component integration
// 3. Improved TypeScript inference
// 4. Smaller bundle size optimizations

// Redux + React Server Components (emerging pattern)
// Server Components fetch data; Redux manages client-side UI state
"use server"; // RSC handles data fetching
async function ProductPage() {
  const products = await db.getProducts(); // server-side, no Redux needed
  return <ProductList initialProducts={products} />;
}

"use client"; // Redux manages client interactions
function ProductList({ initialProducts }) {
  const [cart, dispatch] = [
    useAppSelector((s) => s.cart),
    useAppDispatch(),
  ];
  // Redux handles cart state — RSC handled the initial data fetch
}
```

---

## 91. How do you model complex state dependencies and computations in _Redux_?

Complex state dependencies require a **selector composition strategy** that keeps components decoupled from data transformation logic.

### Layered Selector Architecture

```typescript
// selectors/index.ts — three-tier selector architecture

// ── Tier 1: Base selectors (raw state access) ─────────────────────────────
const selectOrderEntities  = (state: RootState) => state.orders.entities;
const selectProductEntities = (state: RootState) => state.products.entities;
const selectUserEntities   = (state: RootState) => state.users.entities;
const selectCurrentUserId  = (state: RootState) => state.auth.user?.id;

// ── Tier 2: Domain selectors (single entity enrichment) ───────────────────
export const selectOrderById = (id: string) =>
  createSelector(
    [selectOrderEntities, selectProductEntities, selectUserEntities],
    (orders, products, users) => {
      const order = orders[id];
      if (!order) return null;

      return {
        ...order,
        customer: users[order.customerId],
        items:    order.itemIds.map((itemId) => ({
          product:  products[order.items[itemId].productId],
          quantity: order.items[itemId].quantity,
          subtotal: products[order.items[itemId].productId]?.price *
                    order.items[itemId].quantity,
        })),
      };
    }
  );

// ── Tier 3: UI selectors (view-specific computations) ─────────────────────
export const selectCurrentUserOrderSummary = createSelector(
  [
    selectOrderEntities,
    selectCurrentUserId,
    selectProductEntities,
  ],
  (orders, userId, products) => {
    const userOrders = Object.values(orders)
      .filter((o) => o?.customerId === userId);

    return {
      totalOrders:  userOrders.length,
      totalSpent:   userOrders.reduce((sum, o) => sum + (o?.total ?? 0), 0),
      pendingCount: userOrders.filter((o) => o?.status === "pending").length,
    };
  }
);
```

---

## 92. Discuss your approach to type checking and ensuring state consistency.

TypeScript integration with Redux Toolkit provides **end-to-end type safety** from the store through selectors to components.

### Fully Typed Store Setup

```typescript
// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer         from "../features/auth/authSlice";
import todosReducer        from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: { auth: authReducer, todos: todosReducer },
});

// Derive types from the store — always stays in sync
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks — use these everywhere instead of raw hooks
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### Typed Slices and Actions

```typescript
// features/todos/todosSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Explicit interface — serves as documentation + compile-time check
interface Todo { id: number; text: string; completed: boolean; priority: "low" | "medium" | "high"; }
interface TodosState { items: Todo[]; loading: boolean; error: string | null; filter: "all" | "active" | "completed"; }

const todosSlice = createSlice({
  name: "todos",
  initialState: { items: [], loading: false, error: null, filter: "all" } as TodosState,
  reducers: {
    // PayloadAction<T> ensures payload matches the expected type
    addTodo:    (state, action: PayloadAction<Todo>)           => { state.items.push(action.payload); },
    removeTodo: (state, action: PayloadAction<number>)         => { state.items = state.items.filter((t) => t.id !== action.payload); },
    setFilter:  (state, action: PayloadAction<TodosState["filter"]>) => { state.filter = action.payload; },
  },
});
```

### Runtime Validation with Zod

```typescript
// Validate API responses match expected types at runtime
import { z } from "zod";

const TodoSchema = z.object({
  id:        z.number(),
  text:      z.string().min(1),
  completed: z.boolean(),
  priority:  z.enum(["low", "medium", "high"]),
});

export const fetchTodos = createAsyncThunk("todos/fetch", async (_, { rejectWithValue }) => {
  const raw  = await api.getTodos();
  const parsed = z.array(TodoSchema).safeParse(raw);

  if (!parsed.success) {
    return rejectWithValue(`Invalid data: ${parsed.error.message}`);
  }
  return parsed.data; // type-safe Todo[]
});
```

---

## 93. How do you tackle transactional updates in _Redux_?

**Transactional updates** mean applying multiple state changes **atomically** — either all succeed or none are applied.

### Batch Multiple Slice Updates

```typescript
// Dispatch a single action that multiple slices respond to
import { createAction } from "@reduxjs/toolkit";

// Shared action — acts as a transaction signal
export const orderCompleted = createAction<{
  orderId:    string;
  customerId: number;
  items:      CartItem[];
  total:      number;
}>("transactions/orderCompleted");

// ordersSlice — responds to the transaction
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(orderCompleted, (state, action) => {
      ordersAdapter.addOne(state, {
        id:     action.payload.orderId,
        status: "confirmed",
        total:  action.payload.total,
      });
    });
  },
});

// cartSlice — also responds atomically
const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(orderCompleted, (state) => {
      state.items = [];  // clear cart atomically with order creation
      state.total = 0;
    });
  },
});

// inventorySlice — also responds atomically
const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(orderCompleted, (state, action) => {
      action.payload.items.forEach(({ productId, quantity }) => {
        const product = state.entities[productId];
        if (product) product.stock -= quantity; // decrement stock atomically
      });
    });
  },
});

// Dispatch the transaction — ALL slices update in ONE render cycle
dispatch(orderCompleted({ orderId: "ord-123", customerId: 10, items, total: 99.99 }));
```

---

## 94. What strategies would you use for undo/redo functionality in a _Redux application_?

Undo/redo leverages Redux's **immutability** and **action history** to implement time-travel state management.

### Strategy 1 — `redux-undo` Library

```javascript
import undoable, { ActionCreators } from "redux-undo";
import todosReducer from "./todosSlice";

// Wrap reducer with undoable HOC
const undoableTodos = undoable(todosReducer, {
  limit:         20,                            // max undo steps
  filter:        includeAction(["todos/add", "todos/remove", "todos/toggle"]),
  groupBy:       (action) => action.meta?.group, // group related actions
});

// State shape becomes: { past: [], present: {...}, future: [] }
const count  = useSelector((state) => state.todos.present.items.length);
dispatch(ActionCreators.undo());  // undo last action
dispatch(ActionCreators.redo());  // redo undone action
dispatch(ActionCreators.jump(-2)); // jump back 2 steps
```

### Strategy 2 — Custom HOR (Full Control)

```typescript
// Higher-Order Reducer with full undo/redo control
interface HistoryState<T> { past: T[]; present: T; future: T[]; }

const UNDO = "@@history/UNDO";
const REDO = "@@history/REDO";

export const undo = () => ({ type: UNDO });
export const redo = () => ({ type: REDO });

function withUndoRedo<T>(reducer: Reducer<T>, limit = 20) {
  const initPresent = reducer(undefined, { type: "@@INIT" });
  const initState: HistoryState<T> = { past: [], present: initPresent, future: [] };

  return (state = initState, action: AnyAction): HistoryState<T> => {
    if (action.type === UNDO) {
      if (state.past.length === 0) return state;
      const [newPresent, ...newPast] = [...state.past].reverse();
      return { past: newPast.reverse(), present: newPresent, future: [state.present, ...state.future] };
    }

    if (action.type === REDO) {
      if (state.future.length === 0) return state;
      const [newPresent, ...newFuture] = state.future;
      return { past: [...state.past, state.present].slice(-limit), present: newPresent, future: newFuture };
    }

    const newPresent = reducer(state.present, action);
    if (newPresent === state.present) return state;

    return {
      past:    [...state.past, state.present].slice(-limit),
      present: newPresent,
      future:  [],   // clear redo history on new action
    };
  };
}

// Usage
const undoableTodosReducer = withUndoRedo(todosReducer, 50);
```

---

## 95. How does _Redux_ interact with _WebSockets_ or external data sources?

WebSockets and real-time data sources are integrated through **Redux middleware** that manages the connection lifecycle and dispatches actions as messages arrive.

### WebSocket Middleware

```typescript
// middleware/websocketMiddleware.ts
import { Middleware } from "@reduxjs/toolkit";

export const WS_CONNECT    = "ws/connect";
export const WS_DISCONNECT = "ws/disconnect";
export const WS_SEND       = "ws/send";

export const websocketMiddleware: Middleware = (store) => {
  let socket: WebSocket | null = null;

  return (next) => (action) => {
    switch (action.type) {
      case WS_CONNECT: {
        if (socket) socket.close();
        socket = new WebSocket(action.payload.url);

        socket.onopen = () => {
          store.dispatch({ type: "ws/connected" });
          // Authenticate on connect
          socket?.send(JSON.stringify({ type: "AUTH", token: action.payload.token }));
        };

        socket.onmessage = (event) => {
          const message = JSON.parse(event.data);

          // Route incoming messages to the appropriate slice
          switch (message.type) {
            case "PRICE_UPDATE":
              store.dispatch({ type: "prices/update",  payload: message.data }); break;
            case "ORDER_STATUS":
              store.dispatch({ type: "orders/update",  payload: message.data }); break;
            case "NOTIFICATION":
              store.dispatch({ type: "ui/notification", payload: message.data }); break;
          }
        };

        socket.onclose = () => store.dispatch({ type: "ws/disconnected" });
        socket.onerror = (err) => store.dispatch({ type: "ws/error", payload: err });
        break;
      }

      case WS_DISCONNECT:
        socket?.close();
        socket = null;
        break;

      case WS_SEND:
        socket?.send(JSON.stringify(action.payload));
        break;

      default:
        return next(action);
    }

    return next(action);
  };
};
```

### Usage in App

```typescript
// Initialize WebSocket connection on login
export const connectToLiveUpdates = createAsyncThunk(
  "ws/init",
  async (_, { dispatch, getState }) => {
    const { auth } = getState() as RootState;
    dispatch({ type: WS_CONNECT, payload: { url: "wss://api.example.com/live", token: auth.token } });
  }
);

// Disconnect on logout
builder.addCase(logout, (state, _, { dispatch }) => {
  dispatch({ type: WS_DISCONNECT });
});
```

---

## 96. Discuss the integration of _GraphQL_ in a _Redux_-managed application.

GraphQL can be integrated with Redux through **Apollo Client**, **RTK Query's custom baseQuery**, or **manual thunks** — each with different trade-offs.

### RTK Query with GraphQL Base Query

```typescript
// services/graphqlApi.ts — RTK Query using GraphQL
import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql }        from "graphql-request";

export const graphqlApi = createApi({
  reducerPath: "graphqlApi",
  baseQuery:   graphqlRequestBaseQuery({ url: "/graphql" }),
  endpoints: (builder) => ({
    getUser: builder.query<User, number>({
      query: (id) => ({
        document: gql`
          query GetUser($id: ID!) {
            user(id: $id) { id name email role avatar }
          }
        `,
        variables: { id },
      }),
      transformResponse: (response: { user: User }) => response.user,
    }),

    updateUser: builder.mutation<User, Partial<User> & { id: number }>({
      query: (user) => ({
        document: gql`
          mutation UpdateUser($id: ID!, $name: String, $email: String) {
            updateUser(id: $id, name: $name, email: $email) { id name email }
          }
        `,
        variables: user,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = graphqlApi;
```

### Manual GraphQL Thunks

```typescript
// Manually dispatch GraphQL queries as async thunks
import { gql, request } from "graphql-request";

const GET_PRODUCTS = gql`
  query GetProducts($category: String!, $limit: Int!) {
    products(category: $category, limit: $limit) {
      id title price imageUrl inStock
    }
  }
`;

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ category, limit }: { category: string; limit: number }, { rejectWithValue }) => {
    try {
      const data = await request<{ products: Product[] }>("/graphql", GET_PRODUCTS, { category, limit });
      return data.products;
    } catch (err: any) {
      return rejectWithValue(err.response?.errors?.[0]?.message ?? "GraphQL error");
    }
  }
);
```

---

## 97. How would you manage local vs. server state in a _Redux_ application?

Mixing local and server state in Redux leads to confusion — the modern pattern **separates them clearly** by responsibility and tooling.

### Clear Separation Strategy

```typescript
// ── Server State (RTK Query) ─────────────────────────────────────────────
// Characteristics: fetched from API, cached, stale-while-revalidate
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery:   fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes:    ["User", "Post", "Comment"],
  endpoints:   (builder) => ({
    getUsers: builder.query<User[], void>({ query: () => "/users", providesTags: ["User"] }),
    getPost:  builder.query<Post, number>({ query: (id) => `/posts/${id}`, providesTags: (r, e, id) => [{ type: "Post", id }] }),
  }),
});

// ── Client State (Redux slices) ──────────────────────────────────────────
// Characteristics: user preferences, UI state, session, feature flags
const uiSlice = createSlice({
  name: "ui",
  initialState: { sidebarOpen: false, theme: "light", activeModal: null },
  reducers: {
    toggleSidebar: (state) => { state.sidebarOpen = !state.sidebarOpen; },
    setTheme:      (state, action) => { state.theme = action.payload; },
    openModal:     (state, action) => { state.activeModal = action.payload; },
    closeModal:    (state) => { state.activeModal = null; },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, isAuthenticated: false },
  reducers: { /* ... */ },
});
```

### Combining Both in the Store

```typescript
export const store = configureStore({
  reducer: {
    // Client state (Redux slices)
    auth:     authReducer,
    ui:       uiReducer,
    settings: settingsReducer,

    // Server state (RTK Query) — managed automatically
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(apiSlice.middleware), // adds caching, invalidation
});
```

### Decision Guide

```typescript
// Ask: "Does this data live on a server?"
// Yes → RTK Query (caching, loading states, refetching handled)
// No  → Redux slice (or local useState for component-only state)

// Examples:
const users   = useGetUsersQuery();              // server → RTK Query
const isAdmin = user?.role === "admin";          // derived → compute in selector
const [open, setOpen] = useState(false);         // local UI → React state
const theme   = useAppSelector((s) => s.ui.theme); // client pref → Redux
```

---

## 98. How do you structure API requests in _Redux actions_?

Well-structured API requests in Redux separate **concerns** between the API layer, thunk logic, and reducer state transitions.

### Three-Layer Architecture

```typescript
// Layer 1 — API Layer (pure API calls, no Redux)
// services/usersApi.ts
export const usersApi = {
  getAll:   () =>         fetch("/api/users").then((r) => r.json()),
  getById:  (id: number) => fetch(`/api/users/${id}`).then((r) => r.json()),
  create:   (data: Partial<User>) =>
    fetch("/api/users", { method: "POST", body: JSON.stringify(data) }).then((r) => r.json()),
  update:   (id: number, data: Partial<User>) =>
    fetch(`/api/users/${id}`, { method: "PATCH", body: JSON.stringify(data) }).then((r) => r.json()),
  delete:   (id: number) =>
    fetch(`/api/users/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

// Layer 2 — Thunk Layer (orchestration, no UI logic)
// features/users/usersThunks.ts
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try   { return await usersApi.getAll(); }
    catch (err: any) { return rejectWithValue(err.message); }
  }
);

export const createUser = createAsyncThunk(
  "users/create",
  async (userData: Partial<User>, { dispatch, rejectWithValue }) => {
    try {
      const user = await usersApi.create(userData);
      dispatch(showNotification({ message: `${user.name} created!`, type: "success" }));
      return user;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// Layer 3 — Reducer Layer (pure state transitions)
const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({ loading: false, error: null }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending,   (state)         => { state.loading = true; state.error = null; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        usersAdapter.setAll(state, action.payload);
      })
      .addCase(fetchUsers.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.payload as string;
      });
  },
});
```

---

## 99. Discuss methods for caching API responses in the _Redux store_.

Caching API responses in Redux prevents redundant network requests and improves perceived performance.

### Method 1 — Manual Cache with Timestamps

```typescript
const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    lastFetched: null as number | null,
    loading:     false,
  }),
  reducers: {
    setLastFetched: (state) => { state.lastFetched = Date.now(); },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      usersAdapter.setAll(state, action.payload);
      state.lastFetched = Date.now();
      state.loading     = false;
    });
  },
});

// Conditional fetch — only fetch if cache is stale
export const fetchUsersIfStale = createAsyncThunk(
  "users/fetchIfStale",
  async (_, { dispatch, getState }) => {
    const { users } = getState() as RootState;
    const CACHE_TTL  = 5 * 60 * 1000; // 5 minutes

    if (users.lastFetched && Date.now() - users.lastFetched < CACHE_TTL) {
      return; // cache is fresh — skip the request
    }

    return dispatch(fetchUsers());
  }
);
```

### Method 2 — RTK Query (Automatic Caching — Recommended)

```typescript
// RTK Query handles ALL of this automatically
const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery:   fetchBaseQuery({ baseUrl: "/api" }),
  keepUnusedDataFor: 300, // cache for 5 minutes globally

  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query:             () => "/users",
      keepUnusedDataFor: 60, // override: 1 minute for this endpoint
    }),

    getUserById: builder.query<User, number>({
      query:    (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    updateUser: builder.mutation<User, Partial<User> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/users/${id}`, method: "PATCH", body }),
      // Automatically invalidates cached user after update
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
  }),
});

// Component — caching, deduplication, and refetching handled automatically
function UserProfile({ id }) {
  const { data: user, isLoading, isFetching } = useGetUserByIdQuery(id, {
    refetchOnMountOrArgChange: 30, // refetch if data is older than 30s
    pollingInterval:           60_000, // refetch every 60 seconds
  });

  return isLoading ? <Spinner /> : <div>{user?.name}</div>;
}
```

---

## 100. What patterns or libraries do you use to manage _RESTful_ or _GraphQL API_ interactions with _Redux_?

Modern Redux applications use **RTK Query** as the primary solution for both REST and GraphQL — replacing the traditional thunk + loading state pattern.

### RTK Query for REST (Recommended)

```typescript
// services/api.ts — centralized API definition
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery:   fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["User", "Post", "Comment"],
  endpoints: (builder) => ({
    // GET /users
    getUsers:   builder.query<User[], void>({ query: () => "/users", providesTags: ["User"] }),
    // GET /users/:id
    getUser:    builder.query<User, number>({ query: (id) => `/users/${id}`, providesTags: (r, e, id) => [{ type: "User", id }] }),
    // POST /users
    createUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({ url: "/users", method: "POST", body }),
      invalidatesTags: ["User"],
    }),
    // PATCH /users/:id
    updateUser: builder.mutation<User, Partial<User> & { id: number }>({
      query: ({ id, ...body }) => ({ url: `/users/${id}`, method: "PATCH", body }),
      // Optimistic update — apply immediately, revert on error
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getUser", id, (draft) => Object.assign(draft, patch))
        );
        try { await queryFulfilled; }
        catch { patchResult.undo(); }
      },
      invalidatesTags: (r, e, { id }) => [{ type: "User", id }],
    }),
    // DELETE /users/:id
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({ url: `/users/${id}`, method: "DELETE" }),
      invalidatesTags: (r, e, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = api;
```

### RTK Query for GraphQL

```typescript
// services/graphqlApi.ts
import { createApi }            from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql }                  from "graphql-request";

export const gqlApi = createApi({
  reducerPath: "gqlApi",
  baseQuery:   graphqlRequestBaseQuery({ url: "/graphql" }),
  endpoints: (builder) => ({
    getPost: builder.query<Post, number>({
      query: (id) => ({
        document: gql`query GetPost($id: ID!) { post(id: $id) { id title body author { name } } }`,
        variables: { id },
      }),
      transformResponse: (response: { post: Post }) => response.post,
    }),
  }),
});
```

### Comparison Table

| Pattern | Best For | Trade-offs |
|---|---|---|
| **RTK Query (REST)** | Standard REST APIs | Minimal boilerplate, built-in caching |
| **RTK Query (GraphQL)** | GraphQL APIs | Requires `@rtk-query/graphql-request-base-query` |
| **Apollo Client** | Complex GraphQL with subscriptions | Large bundle, separate state from Redux |
| **Manual Thunks** | Custom logic, non-standard APIs | Full control, more boilerplate |
| **SWR / React Query** | Simple fetching outside Redux | Great DX, doesn't integrate with Redux store |


#### Explore all 100 answers here 👉 [Devinterview.io - Redux](https://devinterview.io/questions/web-and-mobile-development/redux-interview-questions)

<br>

<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>
