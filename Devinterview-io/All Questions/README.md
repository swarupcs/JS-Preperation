https://github.com/Devinterview-io/react-interview-questions


# 100 Essential React Interview Questions in 2025

<div>
<p align="center">
<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>

#### You can also find all 100 answers here 👉 [Devinterview.io - React](https://devinterview.io/questions/web-and-mobile-development/react-interview-questions)

<br>

## 1. What is _React_ and why is it used?

**React** is an open-source, front-end JavaScript library for building user interfaces, that focuses on reusable components and virtual DOM for performance.

### Core Concepts

#### Virtual DOM

**React's Virtual DOM** is a lightweight in-memory representation of the actual DOM elements. When changes occur, React compares the current Virtual DOM with a shadow copy and efficiently updates only the changed portions in the real DOM.

This mechanism significantly reduces expensive direct DOM manipulations, resulting in improved performance and responsiveness in web applications.

#### Components

**React Components** encapsulate both the visual and the corresponding logic. They can be either classes or pure functions. This modular architecture and the ability to nest and reuse components make React a powerful UI toolkit.

Components are broken down into two main types:

1. **Class Components:** These are ES6 classes that can hold state and offer lifecycle methods.
2. **Functional Components:** Primarily plain JavaScript functions: until the advent of "hooks," they couldn't maintain states.

Key changes, starting from React 16.8:

- Introduction of new hooks API expanded state-management to functional components
- Popular hooks include `useState` for state management and `useEffect` for lifecycle management.

Beyond this foundational structure, hooks offer extensive state, lifecycle, and context APIs, making functional components powerful building blocks.

#### Unidirectional Data-flow

React mandates a **one-way** data flow, empowering developers to understand and manage data propagation more effectively. This simplifies tracking, debugging, and validating data changes across the application.

While sibling components can communicate indirectly through shared parent components, direct communication among sibling components is typically discouraged.

#### JSX: Syntactic Sugar

**JSX** empowers developers by offering a more intuitive, HTML-like syntax for embedding JavaScript expressions. This marriage of UI and logic not only renders extensive possibilities but also promotes code organization and readability.

### Why use React?

#### Declarative Programming Paradigm 

React enables a **declarative style** of programming: developers define the interface's desired state, and React ensures the DOM reflects that state. This approach is more intuitive and helps in designing clear, maintainable code.

#### Strong Community Backing and Ecosystem

React has been gaining momentum with an enthusiastic community regularly contributing new solutions, updates, and robust third-party libraries. The supportive ecosystem extends to comprehensive toolsets for better development and debugging (like React DevTools).

#### Reusability and Composability

React's architecture is built on **reusable components**, fostering modular, consistent UI elements and logic that can be redeployed across projects or shared with others.

#### Performance Optimization

The Virtual DOM serves as a powerful performance amplifier, and features like providing keys to iterated lists ensure efficient and targeted DOM updates. React is also capable of server-side rendering, bolstering app speed and SEO-friendliness.

#### Effective Data Management

For application-wide state management, React provides **Context API** and libraries like Redux. Meanwhile, local state management with hooks like `useState` streamlines state handling within components.

### Code Example: Functional vs Class-Based Components

Here is the React code:

```jsx
// Functional Component with useState hook
import React, { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

// Class-based Component
import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Clicked {this.state.count} times
      </button>
    );
  }
}
```
<br>

## 2. How is _React_ different from _Angular_ or _Vue_?

When comparing **React, Angular, and Vue.js**, a few key differentiators stand out.

### Core Philosophy

- **React**: Focuses on UI components. You need other libraries for state management, routing, etc.
- **Angular**: Provides a more comprehensive solution out of the box, often called "batteries included."
- **Vue.js**: A good balance of providing core libraries and flexibility for integration with third-party tools.

### Learning Curve

- **React**: Initially simpler to learn due to its focused nature, but can become complex as you add more external libraries.
- **Angular**: Steeper learning curve because of its complete ecosystem, including modules, services, and complex directives.
- **Vue.js**: Known for its gentle learning curve and clear, concise documentation.

### Community and Ecosystem

- **React**: Enjoys an enormous community, and users can pick and choose from a vast array of third-party libraries to complement its core features.
- **Angular**: Boasts a comprehensive ecosystem that's well-managed by its developers and is known for its enterprise support.
- **Vue.js**: While the newest of these frameworks, it has been growing rapidly, with a dedicated team and a flourishing community.

### Performance

- **React**: Focuses on efficient rendering and offers built-in tools for performance optimization.
- **Angular**: Optimizes performance through features like Ahead-Of-Time (AOT) compilation and Zone.js, which prevents unnecessary digest cycles.
- **Vue.js**: Also optimized for performance, with a small bundle size and features like lazy-loading components.

### Official State Management

- **React**: Employs component state (with `setState`) and also external state management libraries like **Redux**, **MobX**, and the newer **Context API**.
- **Angular**: Primarily uses services and **RxJS** for more structured reactive state management.
- **Vue.js**: Offers Vuex, a state management pattern and library dedicated to Vue applications.

### Language Support

- **React**: Developed with **JavaScript** and its supersets (**JSX** and **TypeScript**) in mind.
- **Angular**: Primarily designed for **TypeScript** but supports JavaScript and Dart as well.
- **Vue.js**: Offers support for both **JavaScript** and **TypeScript**.

### Templating Approach

- **React**: Utilizes JSX, which combines HTML and JS within JavaScript files. It offers a more concise approach and closely intertwines HTML with JS logic.
- **Angular**: Has a complete separation of concerns with TypeScript, HTML, and CSS in separate files.
- **Vue.js**: Allows for both **single-file components** (SFCs) that encapsulate HTML, JavaScript, and CSS, as well as the traditional trio of separate files.

### Language Server Support

- **React**: Known for limited tooling support due to *runtime-oriented* nature, but effective tooling is available for **TypeScript** and **Flow**.
- **Angular**: Offers full **TypeScript** support with features like auto-completion, refactoring, and more, thanks to its built-in language service.
- **Vue.js**: Supports comprehensive programming features, including type verification, integrated debugging, and intelligent code suggestions.
<br>

## 3. What is a _React component_?

A **React component** represents a modular, reusable piece of the user interface. It can encapsulate both **visual elements** (rendered in the Virtual DOM) and **application logic**. React components come in two primary forms: **function components** and **class components**.

### Function vs. Class Components

- **Function Components**: These are stateless, simpler to read, and ideally used for small, specialized UI elements known as 'dumb' components. They are pure functions, perceptually faster because of fewer checks. 

- **Class Components**: These can maintain state and expose more advanced features like lifecycle methods. However, the introduction of hooks to function components in React 16.8 technically made state management possible without classes.

### JSX and `render()`

React components generally use JSX (an XML-like syntax) to describe the UI and a `render()` method to define the **visual makeup**.

- **JSX**: This "syntactic sugar" streamlines component building. It is converted into standard JavaScript calls. Babel is often used to compile this code.
- **`render()`**: Required for class components, it tells React what the component's output should be when rendered.

### Structural Coherence

Components in React link together, forming a tree structure. A **root component** is the entry point, and from there, it houses other components. 

### Data Flow

React follows a **unidirectional data flow**. This means data moves from the top of the component tree (parent) down to leaves (children) through component **props**. Changes are signaled back up the tree via **callbacks**.

### State and Props

Both function and class components can receive data via two main routes:

- **Props**: Short for properties, these are akin to function arguments and are immutable. They're the mechanism for parent-child data transfer.
- **State**: This is functionally the component's "memory" and is mutable. Components keep track of their state and re-render upon state change.

### Lifecycle Operations

Class components support a series of **lifecycle methods**. These can be used to run code at specific points in the component's lifecycle, such as upon mounting (creation), updating, or unmounting (removal).

Custom classes and the lifecycle methods within were the primary mechanism for side effects earlier in React. While class-based components aren't as central to the framework with the advent of hooks, they're still relevant and in use, especially when using versions < 16.8.1 and realizing the components' lifecycle patterns in codebases.
<br>

## 4. How do you create a _component_ in _React_?

Creating a React component involves defining its structure, behavior, and sometimes lifecycle methods for dynamic updates. Components can be **functional** or **class-based**.

### Code Example

Here's a  **Class-based** component:

```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

And here's a **Functional** one:

```jsx
import React from 'react';

const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
```

Both examples showcase a basic greeting component that takes in a prop `name` and displays a greeting message.

#### Linters and JSX
Many modern text editors and IDEs support JSX and JavaScript syntax, especially when integrated with linters like ESLint. This setup provides real-time feedback on errors and formatting issues.

#### Code Styling with AirBNB and Prettier
It's common to see code bases following the **Airbnb** style guide, often coupled with **Prettier** for consistent and automated code formatting.

In the context of component creation, these standards can dictate whether to use single or double quotes for JSX attributes and the method for defining components.

### Key Takeaways

- JSX offers a natural, HTML-like syntax for building components in React.
- Components can be function-based or class-based.
- Use modern editing tools and linters for improved code consistency and spotting potential issues in real-time.
<br>

## 5. What is _JSX_ and why do we use it in _React_?

**JSX** is a powerful JavaScript Extension that enables the seamless integration of HTML-like structures within React. Notably, it allows for a more **intuitive** component declaration and enhanced developer **productivity**.

### Key Features

- **Readable Syntax**: Familiar HTML tags make parsing code and debugging simpler.

- **Component Embedding**: JSX supports direct embedding of components, which enhances modularity.

- **Automatic Babel Conversion**: Behind the scenes, JSX and its HTML-like tags are transpiled into JavaScript for browser compatibility.

### Benefits of Using JSX

- **Code Compactness**: JSX helps avoid lengthy `React.createElement` calls.
  
- **Type Safety**: Modern IDEs provide extensive support for type checking and autocompletion with JSX.

- **Compile-Time Optimizations**: JSX allows for compile-time optimizations, enhancing app performance.

- **Enable Optional Syntax Checks**: For those developing in TypeScript, JSX enables Syntax Checks to ensure code quality.

### Code Example: JSX and Its Transpiled Output

Here is the JSX code

```jsx
// JSX
const element = <h1>Hello, World!</h1>;
```

Here is the equivalent JS code transpiled by Babel:

```javascript
// Transpiled JS
const element = React.createElement('h1', null, 'Hello, World!');
```

### Why Use JSX?

- **Concise Syntax**: JSX provides a succinct, declarative approach to building UIs.

- **Improved Readability**: Its obvious resemblance to HTML promotes code clarity and reduces cognitive load.

- **Static Type Checking**: When used with TypeScript or Flow, JSX brings the benefits of type safety, reducing the probability of runtime errors.

- **Development Efficiency**: By simplifying UI code and providing helpful developer features, JSX accelerates the development process.

- **React Ecosystem Integration**: JSX is the preferred way to write components across the React ecosystem, fostering community best practices.
<br>

## 6. Can you explain the _virtual DOM_ in _React_?

The **Virtual DOM** is a key concept in React, responsible for its high performance. It efficiently manages the **DOM** setup, minimizes updates, and then syncs them to the actual DOM tree.

### How the Virtual DOM Works

1. **Initial Rendering**: When the application starts, React creates a simplified in-memory representation of the DOM, called the Virtual DOM.
  
2. **Tree Comparison**: During each state change, React builds a new Virtual DOM representation. It then compares this updated representation against the previous one to identify what has changed. This process is often called "reconciliation".
  
3. **Selective Rendering**: React determines the most minimal set of changes needed to keep the Virtual DOM in sync with the actual DOM. This approach, known as "reconciliation", is a performance booster as it reduces unnecessary updates.

4. **Batched Updates**: React performs the actual DOM updates in a batch, typically during the next animation frame or when no more updates are being made. This batching leads to optimized DOM operations, further enhancing performance.

5. **One-Way Sync**: After the in-memory Virtual DOM and the actual DOM have been reconciled and the necessary updates identified, React syncs these changes in a **one-way** process, from the Virtual DOM to the actual DOM. This approach helps prevent unnecessary visual glitches and performance hits.

6. **Asynchronous** Handling: React schedules state changes, ensuring performance by bundling multiple changes that can be processed together. This aids in avoiding unnecessary Virtual DOM updates and ensures efficient tree comparisons.

7. **Preventing Direct DOM Manipulation**: React applications typically avoid manual DOM manipulation. Instead, all changes are made through React, which then uses its Virtual DOM mechanism to batch and apply these changes to the actual DOM.

8. **Support for Cross-Platform Environments**: The Virtual DOM gives sturdy cross-platform capabilities, enabling consistent and optimized performance irrespective of the underlying operating system or hardware.

React's Virtual DOM is primarily powered through its component architecture and extensive use of JavaScript, fundamentally changing how web applications are built and perform. Its virtuous efficiency is a testament to React's prowess as a leading front-end framework and contributes to the seamless user experiences React applications are known for providing.
<br>

## 7. What are the differences between a _class component_ and a _functional component_?

Let's look at the various aspects and differences between **Class Components** and **Functional Components**.

### Core Distinctions

**Class Components**:

- Utilize the `class` keyword for component definition.
- Can have state management.
- Allow lifecycle methods.
- Are typically verbose.

**Functional Components**:

- Defined using ES6 functions.
- Lack inherent state or lifecycle management.
- Primarily used for UI representation.
- Introduced `Hooks` in **React 16.8** for state and lifecycle control.

### Detail Evaluation

#### Code Structure

**Class Components**:

- Consists of a `render()` method.
- Can incorporate other methods for state updates and lifecycle management.

**Functional Components**:

- Evolved with introduction of React hooks.
- `useState()` and `useEffect()` for state and lifecycle management respectively.

#### Purpose and Use-Cases

**Class Components**:

- Suitable for more complex components.
- May be necessary in older codebases.
- Gradually being replaced by hooks and functional components.

**Functional Components**:

- Focused on UI without managing state.
- Introduced hooks to handle state and lifecycle methods.

#### Editable State

**Class Components**:

- Use `this.state` and `this.setState()` to manage state.
- Useful when state contains complex data types.

**Functional Components**:

- Implement `useState` hook to enable state management in functions.
- Introduced for state management in functional components, simplifying state handling.

#### Lifecycle Methods

**Class Components**:

- Offer a wide range of lifecycle methods.
- Example methods include `componentDidMount` and `componentWillUnmount`.

**Functional Components**:

- Limited lifecycle management before the introduction of hooks.
- Use `useEffect()` to handle actions based on state and props changes. 

#### Context API and Redux Usage

**Class Components**:

- Can easily be paired with both Context API and Redux.
- Typically used with render props.

**Functional Components**:

- With hooks like `useContext`, have become proficient in handling shared state.
- Can now be seamlessly integrated with newer global state management libraries like Redux.

### Adoption and Transition

- Initial React versions were heavily reliant on class components.
- **Hooks'** introduction in **React 16.8** facilitated the shift towards fully functional components.
- While gradual migration from class to functional is encouraged because of performance benefits, both paradigms can still coexist.

### Key Takeaways

- **Class Components**:
  - Traditional class-based components.
  - Prefers `this` context.
  - Houses extensive lifecycle methods.
  - Stands as a more elaborate and structured option.

- **Functional Components**:
  - Evolved to include hooks for state management.
  - Favored for their simplicity and ease of reusability.
  - Perfect for simpler, stateless components.
<br>

## 8. How do you handle _events_ in _React_?

**React** simplifies the process of managing and handling events through its use of **synthetic events**.

### Handling Events in React

#### Synthetic Events

React **abstracts browser events** into what are known as *synthetic events*. This ensures a consistent interface across different browsers.

#### Event Subscription

- When handling events, **React behaves consistently** across all elements, not just form elements.

- React events use _camelCase_, unlike HTML, which is helpful for both **consistency and avoiding reserved words in JavaScript**.

- Use **boolean attributes** in JSX for default browser events.

#### Special Event Handling

React provides _special interfaces_ for certain types of events: input components benefit from the `value` attribute, while media components make use of `src` or other similar attributes specific to their type.



### Code Example: Event Handling

Here is the JavaScript code:

```javascript
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
<br>

## 9. What are _state_ and _props_ in _React_?

In React, **props** and **state** are both used to propagate and manage data. However, they have different roles and management patterns.

### Role & Life Cycle

- **Props (short for "properties")** are used **to pass data from a parent component to a child** one. Once passed, props in the child component are read-only and can't be directly modified by the child.

- **State** is used to manage data within a component, and is mutable. Any changes to state values trigger a component re-render.

### When to Use 

- **Props** are for data that does not change within the component and is provided by a parent.
- **State** is for data that does change within the component and is managed by that component itself.

### Management

- When a component receives new props, React will merge them with any existing state. However, it won't override state values unless you explicitly set them.
  
- Since React re-renders the entire component when you update state, it's important to be efficient in state management. Tools like `useMemo` or `shouldComponentUpdate` can help optimize re-renders.

### Unifying with Hooks

- The `useState` hook (along with other hooks like `useEffect`) allows functional components to manage state, bringing them closer in capability to class components.
  
- Prior to the introduction of hooks in React 16.8, state was the exclusive domain of class components. But now, both state and its associated lifecycle hooks belong to **functional components** as well.

### Code Example: State and Props Management

Here is the JavaScript code:

```javascript
import React, { useState } from 'react';

// Button Component
const Button = ({ text, color }) => {
  return <button style={{background: color}}>{text}</button>;
};

// ColorPicker Component
const ColorPicker = () => {
  const [color, setColor] = useState('blue');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <Button text="Red" color="red" onClick={() => changeColor('red')} />
      <Button text="Blue" color="blue" onClick={() => changeColor('blue')} />
      <Button text="Green" color="green" onClick={() => changeColor('green')} />
    </div>
  );
};

// App Component
const App = () => {
  return <ColorPicker />;
};
```
<br>

## 10. How do you pass _data_ between _components_ in _React_?

**Data propagation** in React components primarily relies on two mechanisms:

- **Props**: For unidirectional data flow, parent components pass data to their children via props.
  
- **Callback Functions**: Data moves up the tree when children invoke specific functions passed down from their parents.

Let's have a look at the best-practices for these two mechanisms.

### Using Props

  - **Role**: Primarily used for one-way data flow. The parent furnishes the child with props that the child component can neither alter nor reassign.
  
  - **Best Practices**:
    - Leverage props for read-only data in child components.
    - Rerender the child component, if necessary, when the prop values change.

  - **Code Example: Read-Only Checkbox**:

  Your task is to write the full code for the React Application to demonstrate passing data to child components using props.

### Children Built With Props

In this code example, `App` maintains the `optionSelected` state that it shares with the `DropDown` and `SelectedOption` components. `DropDown` uses the `optionSelected` state to determine which option was picked, shared with `SelectedOption` to display it.

```tsx
// src/components/DropDown.tsx
interface DropDownProps {
  options: string[]
}

const DropDown: React.FC<DropDownProps> = ({ options }) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <div>
      <div>Options:</div>
      {options.map((opt, index) => (
        <button key={index} onClick={() => setSelected(index)}>{opt}</button>
      )}
      <SelectedOption option={options[selected]} />
    </div>
  );
};

// src/components/SelectedOption.tsx
interface SelectedOptionProps {
  option: string
}

const SelectedOption: React.FC<SelectedOptionProps> = ({ option }) => {
  return <div>You selected: {option}</div>;
};

// src/App.tsx
const App: React.FC = () => {
  const options = ['Apple', 'Banana', 'Cherry'];
  return <DropDown options={options} />;
};

export default App;
```
<br>

## 11. What is a _stateful component_?

**Stateful components** in React are fueled by internal states, allowing them to adapt to user interactions and data changes.

By invoking `this.setState()`, components update their state, triggering a re-render and ensuring the UI and state are in sync.

### When to Use

- **Dynamic Interactions**: For components that require dynamic updates, such as a counter that increments on every click.
  
- **User Input Handling**: Useful for capturing and validating user inputs in forms.

- **Data Fetching**: To manage and display data obtained from API calls.

### Code Example: Stateful Component

Here is the JavaScript code:

```jsx
import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default ClickCounter;
```
<br>

## 12. Can you explain how _useState_ works?

**`useState`** is a built-in **React Hook** that empowers components to preserve stateful values. It amalgamates a stateful value with a state-modifying function, enabling direct manipulation.

**Hooks** are utility functions that enable you to manage state, side effects, and other React features in **function components**.

### Core Components of `useState`

1. **Stateful Value**: The first element in the tuple returned by `useState` carries the current state, like any other state in React.

2. **Setter Function**: The second element is a function that determines the state's new value. Upon invocation, it imparts this new state to the component, just as `setState` does in classes.

Given `value` as the stateful value and `setValue` as the setter function, calling `setValue(newValue)` will alter `value` to `newValue`.

### Behavioral Traits of `useState`

- **Lazy Initialization**: If the stateful value necessitates a computationally intensive or time-consuming setup, employing `useState` ensures that this setup occurs exclusively when the component is first rendered rather than on every update.

- **Referential Integrity**: If you employ the `useState` Hook at distinct spots within a component or even dissimilar components, React guarantees that each endeavor manages its unique state underlying value, akin to using `this.state` in classes.

### Code Example: useState

Here is the React Component:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```
<br>

## 13. How do you update the _state_ of a _parent component_ from a _child component_?

**React** encourages **unidirectional data flow**, primarily passing data from parent to child. However, occasional need arises to update parent state from a child component. This can be facilitated using specific patterns and techniques.

### Primary Methods

1. **Props Callback**: Pass a function `onStateChange` as a prop which the child can call to update parent state.
  
2. **Context API**: Use `Context` to make state accessible and modifiable from descendant components.

### Advanced Techniques

1. **UseRef and ForwardRef**: Utilize `useRef` and `forwardRef` to get a reference to a child component, allowing you to directly manipulate its properties.

2. **Global State Management**: Implement a global state management solution like Redux or MobX if state changes are pervasive.  

3. **Data Services**: Use a service to manage shared state, which can be updated and read by different components.

### Code Example: State Management

Here is the React Component:

```jsx
// App.js - Parent component
import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [state, setState] = useState('');

  const updateState = (newState) => {
    setState(newState);
  };

  return <Child updateParentState={updateState} />;
}
```

```jsx
// Child.js - Child component
import React from 'react';

function Child({ updateParentState }) {
  const handleClick = () => {
    updateParentState('New state from child!');
  };

  return <button onClick={handleClick}>Update Parent</button>;
}
```

In this example, the `Parent` component maintains the state, which is updated via the function `updateState` passed as a prop to `Child`. When a button inside `Child` is clicked, the `updateParentState` function updates the parent state.
<br>

## 14. What is _lifting state up_ in _React_?

**Lifting State Up** in React entails managing state in parent components to propagate it to multiple children, typically to ensure synchronization or data flow.

### Why Use Lifting State Up?

- **Consistent Data**: Prevents inconsistencies in related data scattered across components.
- **Easier Data Modifications**: Minimizes complexity when updating shared data, especially with complex data structures or numerous children.

### Core Mechanism: Props

React components communicate using `props`, where child components receive data from parents. During **lifting state up**, the parent maintains the state and passes down relevant data as props.

### Lifting State Up in Code

Here is the React code:

#### Parent Component: RectangleAreaCalculator

```jsx
class RectangleAreaCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  render() {
    return (
      <div>
        <ShapeInput
          type="number"
          label="Width"
          value={this.state.width}
          onChange={(e) => this.setState({ width: e.target.value })}
        />
        <ShapeInput
          type="number"
          label="Height"
          value={this.state.height}
          onChange={(e) => this.setState({ height: e.target.value })}
        />
        <ShapeArea area={this.state.width * this.state.height} />
      </div>
    );
  }
}
```

#### Child Components: ShapeInput and ShapeArea

```jsx
const ShapeInput = ({ type, label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} />
  </div>
);

const ShapeArea = ({ area }) => <div>Area: {area}</div>;
```

In this example, the `RectangleAreaCalculator` maintains the `width` and `height` state and passes them as props to the `ShapeInput` components. The `ShapeArea` component calculates the area and receives `width` and `height` as props, keeping its state logic-free.

### Advantages

- **Single Source of Truth**: Shared data lives in the parent, reducing complexities stemming from data redundancy or inconsistencies.
- **Predictable Data Flow**: Changes to the data layer (parent) trigger updates to all its children. This helps in maintaining the coding standards and data integrity.

### Most Common Implementations

- **Form State**: Centralizes form data management in one place, simplifying form submissions or data validation.
- **Shared Logic**: Multiple components using the same data or functionality can benefit from centralized state management.

### When It's Overkill

For small-scale apps or in situations with data that lacks a clear **source of "truth"**, the technique might introduce unnecessary complexity.

Aiming for a balance between centralized and localized state management is key, and React provides tools like `useContext` and `useState` that cater to both requirements.
<br>

## 15. When do you use _Redux_ or _Context API_ for state management?

**Redux** and the **Context API** serve as tools for managing state in large React applications. Here are situations which might call for one or the other, or even both:

### Advantages of Redux

1. **Full App Coverage**: Redux operates on a global state, enabling consistent app behavior and simplifying state transitions across components.

2. **Predictable State Changes**: Changes in Redux follow a strict flow, optimizing teamwork and troubleshooting.

3. **Time Travel**: Redux devtools allow for easy time travel, aiding in bug detection and state history visualization.

4. **Performance Optimization**: With its selective rendering feature, `connect` from `react-redux` ensures only the required components are updated, thus mitigating wasteful renders.

5. **Optimal for Bigger Apps**:

   - Reduces the need for props drilling.
   - Offers a centralized point for state changes.

### When to Pick Redux

- **Large Apps with Complex State**: Ideal for apps with intensive state requirements and a multitude of components.

- **Frequent Inter-Component Communications**: When different sections of your application need to exchange data often, a central store, such as Redux, can streamline this process.

### Advantages of Context API


   
1. **Simplicity**: The Context API is built into React and is more straightforward to set up, making it a more convenient choice for simpler state needs.

2. **Single Point of Configuration**: Context API allows for a centralized point of configuration for state, similar to Redux.

3. **Easier to Understand for Smaller Apps**: It's less intensive and thus, is easier to explain and understand, especially for junior developers or in smaller teams.

### When to Pick Context API

- **When No Nested Components**: Great for smaller applications or ones with minimal nesting of components, eliminating the need to prop-drill or create additional HOCs or render-props to share state.

- **For App-Wide Configurations**: It's useful for handling global configurations, such as themes or user authentication.

- **Newer React Projects Involving Hooks**: Since the Context API underwent significant improvements with the introduction of Hooks, it's an appealing choice for new projects.
<br>



# React Interview Questions (16-100)

## React Lifecycle & Hooks

## 16. Explain the lifecycle methods of a React class component

React class components have three main phases in their lifecycle:

### **Mounting Phase** (Component is being created and inserted into the DOM)

**constructor(props)**
- Called before component is mounted
- Initialize state and bind event handlers

**static getDerivedStateFromProps(props, state)**
- Called right before rendering
- Returns an object to update state, or null

**render()**
- Required method that returns JSX
- Should be pure (no side effects)

**componentDidMount()**
- Called after component is mounted
- Perfect for API calls, subscriptions, DOM manipulation

### **Updating Phase** (Component is being re-rendered due to props or state changes)

**static getDerivedStateFromProps(props, state)**
- Called before every render

**shouldComponentUpdate(nextProps, nextState)**
- Optimize performance by preventing unnecessary renders
- Return true to update, false to skip

**render()**
- Re-renders the component

**getSnapshotBeforeUpdate(prevProps, prevState)**
- Called right before DOM updates
- Return value passed to componentDidUpdate

**componentDidUpdate(prevProps, prevState, snapshot)**
- Called after component updates
- Good for DOM operations or network requests based on prop changes

### **Unmounting Phase** (Component is being removed from the DOM)

**componentWillUnmount()**
- Cleanup: remove event listeners, cancel network requests, clear timers

### **Example:**

```jsx
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
    console.log('1. Constructor called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps called');
    // Sync state with props if needed
    return null;
  }

  componentDidMount() {
    console.log('4. componentDidMount - Component mounted!');
    // Fetch data after component mounts
    fetch(`/api/users/${this.props.userId}`)
      .then(res => res.json())
      .then(user => this.setState({ user, loading: false }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. shouldComponentUpdate');
    // Only update if user data changed
    return nextState.user !== this.state.user;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('7. getSnapshotBeforeUpdate');
    // Capture scroll position before update
    return { scrollPosition: window.scrollY };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('8. componentDidUpdate');
    if (prevProps.userId !== this.props.userId) {
      // Fetch new user data when userId changes
      this.fetchUser(this.props.userId);
    }
  }

  componentWillUnmount() {
    console.log('9. componentWillUnmount - Cleanup');
    // Cancel any pending requests or subscriptions
  }

  render() {
    console.log('3/6. Render called');
    const { user, loading } = this.state;
    
    if (loading) return <div>Loading...</div>;
    return <div>Hello, {user.name}!</div>;
  }
}
```

---

## 17. How do hooks work in React?

Hooks are special functions that let you "hook into" React features in functional components. They allow you to use state, lifecycle features, and other React features without writing a class.

### **Key Concepts:**

1. **State Management**: Hooks maintain state between renders using a closure mechanism
2. **Execution Order**: React relies on the order hooks are called to associate state with components
3. **Fiber Architecture**: Hooks are stored in a linked list on the component's fiber node
4. **Re-rendering**: When state changes, React re-runs the component function

### **How React Tracks Hooks Internally:**

```jsx
// Simplified version of how React tracks hooks
let hooks = [];
let currentHookIndex = 0;

function useState(initialValue) {
  const hookIndex = currentHookIndex;
  
  // Initialize hook if first render
  if (hooks[hookIndex] === undefined) {
    hooks[hookIndex] = initialValue;
  }
  
  const setState = (newValue) => {
    hooks[hookIndex] = newValue;
    render(); // Trigger re-render
  };
  
  currentHookIndex++;
  return [hooks[hookIndex], setState];
}

function MyComponent() {
  currentHookIndex = 0; // Reset for each render
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');
  
  return `${name}: ${count}`;
}
```

### **Practical Example:**

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  // Hook #1: count state
  const [count, setCount] = useState(0);
  
  // Hook #2: name state
  const [name, setName] = useState('');
  
  // Hook #3: effect for document title
  useEffect(() => {
    document.title = `${name || 'User'}: ${count} clicks`;
  }, [count, name]); // Dependencies
  
  // Hook #4: effect for logging
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);
  
  return (
    <div>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Your name"
      />
      <p>{name || 'User'} clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

---

## 18. Can you describe the useEffect hook and its purpose?

`useEffect` lets you perform side effects in functional components. It combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

### **Syntax:**
```jsx
useEffect(effectFunction, dependencyArray);
```

### **Purpose:**
- Fetch data from APIs
- Subscribe to external data sources
- Manually change the DOM
- Set up timers or intervals
- Log analytics events

### **Three Patterns:**

**1. Run on Every Render** (no dependency array)
```jsx
useEffect(() => {
  console.log('Runs after every render');
});
```

**2. Run Once on Mount** (empty dependency array)
```jsx
useEffect(() => {
  console.log('Runs only once after initial render');
}, []);
```

**3. Run When Dependencies Change** (with dependencies)
```jsx
useEffect(() => {
  console.log('Runs when count or name changes');
}, [count, name]);
```

### **Comprehensive Example:**

```jsx
import { useState, useEffect } from 'react';

function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [isOnline, setIsOnline] = useState(false);

  // Effect 1: Fetch messages when room changes
  useEffect(() => {
    console.log(`Fetching messages for room ${roomId}`);
    
    fetch(`/api/rooms/${roomId}/messages`)
      .then(res => res.json())
      .then(data => setMessages(data));
    
    // No cleanup needed for fetch
  }, [roomId]); // Re-run when roomId changes

  // Effect 2: Subscribe to real-time updates
  useEffect(() => {
    console.log(`Subscribing to room ${roomId}`);
    
    const subscription = subscribeToRoom(roomId, (newMessage) => {
      setMessages(prev => [...prev, newMessage]);
    });
    
    // Cleanup function: unsubscribe when component unmounts
    // or before re-running effect
    return () => {
      console.log(`Unsubscribing from room ${roomId}`);
      subscription.unsubscribe();
    };
  }, [roomId]);

  // Effect 3: Update online status
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    
    ChatAPI.subscribeToStatus(roomId, handleStatusChange);
    
    return () => {
      ChatAPI.unsubscribeFromStatus(roomId, handleStatusChange);
    };
  }, [roomId]);

  // Effect 4: Set document title (runs on every render)
  useEffect(() => {
    document.title = `Room ${roomId} (${messages.length} messages)`;
  });

  return (
    <div>
      <h2>Room {roomId} {isOnline ? '🟢' : '🔴'}</h2>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 19. How do you fetch data with hooks in React?

There are several patterns for fetching data with hooks:

### **Pattern 1: Basic Fetch with useState and useEffect**

```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array = fetch once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### **Pattern 2: Fetch with Async/Await**

```jsx
function PostDetails({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Can't make useEffect callback async directly
    // So create an async function inside
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]); // Re-fetch when postId changes

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No post found</p>;

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}
```

### **Pattern 3: Abort Controller (Cancel Requests)**

```jsx
function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Don't fetch if query is empty
    if (!query) {
      setResults([]);
      return;
    }

    const abortController = new AbortController();
    
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.example.com/search?q=${query}`,
          { signal: abortController.signal } // Pass abort signal
        );
        const data = await response.json();
        setResults(data);
      } catch (err) {
        // Ignore abort errors
        if (err.name !== 'AbortError') {
          console.error('Fetch error:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResults();

    // Cleanup: abort fetch if query changes or component unmounts
    return () => {
      abortController.abort();
    };
  }, [query]);

  return (
    <div>
      {loading && <p>Searching...</p>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### **Pattern 4: Custom Hook for Reusable Fetch Logic**

```jsx
// Custom hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url, {
          signal: abortController.signal
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}

// Using the custom hook
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
```

---

## 20. What rules do you have to follow when using hooks?

### **The Two Golden Rules of Hooks:**

### **Rule 1: Only Call Hooks at the Top Level**

**DON'T** call hooks inside loops, conditions, or nested functions.

```jsx
// ❌ WRONG - Hook inside condition
function BadComponent({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // Error!
  }
  return <div>{state}</div>;
}

// ❌ WRONG - Hook inside loop
function AlsoWrong({ items }) {
  items.forEach(item => {
    const [value, setValue] = useState(item); // Error!
  });
}

// ✅ CORRECT - Hooks at top level
function GoodComponent({ condition }) {
  const [state, setState] = useState(0);
  
  if (condition) {
    // Use the state here, not declare it
    return <div>{state}</div>;
  }
  return null;
}
```

**Why?** React relies on the order hooks are called to maintain state correctly between renders.

### **Rule 2: Only Call Hooks from React Functions**

**Call hooks from:**
- ✅ React function components
- ✅ Custom hooks

**DON'T call from:**
- ❌ Regular JavaScript functions
- ❌ Class components

```jsx
// ❌ WRONG - Hook in regular function
function calculateTotal() {
  const [total, setTotal] = useState(0); // Error!
  return total;
}

// ❌ WRONG - Hook in class component
class MyClass extends React.Component {
  render() {
    const [state, setState] = useState(0); // Error!
    return <div>{state}</div>;
  }
}

// ✅ CORRECT - Hook in function component
function GoodComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// ✅ CORRECT - Hook in custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}
```

### **Additional Best Practices:**

**1. Dependency Arrays in useEffect**

```jsx
// ❌ WRONG - Missing dependencies
function BadEffect({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, []); // userId is missing!
  
  return <div>{user?.name}</div>;
}

// ✅ CORRECT - All dependencies included
function GoodEffect({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // userId included
  
  return <div>{user?.name}</div>;
}
```

**2. Custom Hook Naming**

```jsx
// ❌ WRONG - Doesn't start with 'use'
function fetchData() {
  const [data, setData] = useState(null);
  // ...
  return data;
}

// ✅ CORRECT - Starts with 'use'
function useFetchData() {
  const [data, setData] = useState(null);
  // ...
  return data;
}
```

### **Complete Example Following All Rules:**

```jsx
import { useState, useEffect, useCallback } from 'react';

// ✅ Custom hook following naming convention
function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ All hooks at top level
  useEffect(() => {
    // ✅ All dependencies included
    let cancelled = false;

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        
        if (!cancelled) {
          setUser(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    // ✅ Cleanup function
    return () => {
      cancelled = true;
    };
  }, [userId]); // ✅ Dependency included

  return { user, loading, error };
}

// ✅ Hooks in function component
function UserProfile({ userId }) {
  // ✅ All hooks at top level, same order every render
  const { user, loading, error } = useUserData(userId);
  const [expanded, setExpanded] = useState(false);

  // ✅ useCallback with proper dependencies
  const toggleExpanded = useCallback(() => {
    setExpanded(prev => !prev);
  }, []);

  // ✅ Conditional rendering AFTER hooks
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={toggleExpanded}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
      {expanded && (
        <div>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
```

### **ESLint Plugin**

To enforce these rules automatically, use the `eslint-plugin-react-hooks`:

```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Component Communication

# React Props and Context - Complete Guide with Examples

## 21. How do props work in React?

**Props** (short for "properties") are arguments passed from parent to child components. They are read-only and enable data flow down the component tree.

**Key Characteristics:**
- Unidirectional data flow (parent → child)
- Immutable within the child component
- Can pass any JavaScript value (strings, numbers, objects, functions, etc.)

**Example:**

```javascript
// Parent Component
function App() {
  const user = {
    name: "Alice",
    age: 28,
    isAdmin: true
  };

  return (
    <div>
      <UserCard 
        username={user.name}
        age={user.age}
        isAdmin={user.isAdmin}
        onGreet={() => alert(`Hello ${user.name}!`)}
      />
    </div>
  );
}

// Child Component
function UserCard({ username, age, isAdmin, onGreet }) {
  return (
    <div className="user-card">
      <h2>{username}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span className="badge">Admin</span>}
      <button onClick={onGreet}>Greet User</button>
    </div>
  );
}

// Using default props
UserCard.defaultProps = {
  age: 18,
  isAdmin: false
};
```

---

## 22. What is prop drilling and how can you avoid it?

**Prop drilling** occurs when you pass props through multiple intermediate components that don't need the data, just to get it to a deeply nested component.

**Problems:**
- Makes code harder to maintain
- Creates unnecessary dependencies
- Reduces component reusability

**Example of Prop Drilling:**

```javascript
// Level 1 - App
function App() {
  const [user, setUser] = useState({ name: "Bob", theme: "dark" });
  
  return <Dashboard user={user} />;
}

// Level 2 - Dashboard (doesn't use user, just passes it)
function Dashboard({ user }) {
  return (
    <div>
      <Sidebar user={user} />
    </div>
  );
}

// Level 3 - Sidebar (doesn't use user, just passes it)
function Sidebar({ user }) {
  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
}

// Level 4 - Finally uses the prop!
function UserProfile({ user }) {
  return <h3>Welcome, {user.name}</h3>;
}
```

**Solutions to Avoid Prop Drilling:**

### 1. **Context API**
```javascript
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Bob", theme: "dark" });
  
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return <Sidebar />; // No props needed!
}

function Sidebar() {
  return <UserProfile />; // No props needed!
}

function UserProfile() {
  const user = useContext(UserContext); // Direct access!
  return <h3>Welcome, {user.name}</h3>;
}
```

### 2. **Component Composition**
```javascript
function App() {
  const user = { name: "Bob" };
  
  return (
    <Dashboard>
      <Sidebar>
        <UserProfile user={user} />
      </Sidebar>
    </Dashboard>
  );
}

function Dashboard({ children }) {
  return <div className="dashboard">{children}</div>;
}

function Sidebar({ children }) {
  return <aside className="sidebar">{children}</aside>;
}
```

### 3. **State Management Libraries** (Redux, Zustand, Jotai)

---

## 23. Explain the Context API and its use cases

The **Context API** provides a way to share values between components without explicitly passing props through every level of the tree.

**When to Use Context:**
- Theme settings (dark/light mode)
- User authentication data
- Language/localization preferences
- Global app settings
- Shopping cart state

**Complete Example:**

```javascript
import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();
const AuthContext = createContext();

// 2. Create Provider Component
function AppProviders({ children }) {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const login = (username) => {
    setUser({ username, loggedIn: true });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

// 3. Create Custom Hooks (optional but recommended)
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// 4. Use in Components
function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
      {user && <span>Welcome, {user.username}!</span>}
      <button onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      {user && <button onClick={logout}>Logout</button>}
    </header>
  );
}

function App() {
  return (
    <AppProviders>
      <Header />
      <main>
        <LoginForm />
      </main>
    </AppProviders>
  );
}

function LoginForm() {
  const { login } = useAuth();
  const [name, setName] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); login(name); }}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Best Practices:**
- Don't overuse Context - it can cause unnecessary re-renders
- Split contexts by concern (theme, auth, etc.)
- Create custom hooks for cleaner consumption
- Consider performance with `useMemo` for context values

---

## 24. How do you use render props?

**Render props** is a pattern where a component receives a function as a prop that returns React elements. This allows sharing code between components using a prop whose value is a function.

**Example 1: Mouse Tracker**

```javascript
import { useState } from 'react';

// Component with render prop
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{ height: '100vh', border: '1px solid black' }}
    >
      {render(position)}
    </div>
  );
}

// Usage
function App() {
  return (
    <div>
      <h1>Mouse Tracker Examples</h1>
      
      {/* Example 1: Display coordinates */}
      <MouseTracker 
        render={({ x, y }) => (
          <h2>Mouse position: ({x}, {y})</h2>
        )}
      />

      {/* Example 2: Visual cursor follower */}
      <MouseTracker 
        render={({ x, y }) => (
          <div 
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'red',
              transform: 'translate(-50%, -50%)'
            }}
          />
        )}
      />
    </div>
  );
}
```

**Example 2: Data Fetching with Render Props**

```javascript
import { useState, useEffect } from 'react';

function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading, error });
}

// Usage
function UserList() {
  return (
    <DataFetcher 
      url="https://api.example.com/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        
        return (
          <ul>
            {data.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}
```

**Alternative: Using `children` as a function**

```javascript
function Toggle({ children }) {
  const [on, setOn] = useState(false);
  
  const toggle = () => setOn(!on);

  return children({ on, toggle });
}

// Usage
function App() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <button onClick={toggle}>
            {on ? 'ON' : 'OFF'}
          </button>
          {on && <p>The toggle is on!</p>}
        </div>
      )}
    </Toggle>
  );
}
```

**Note:** While render props are still valid, **custom hooks** are now the preferred pattern for sharing stateful logic in modern React.

---

## 25. What is the children prop?

The **`children` prop** is a special prop that contains the content between the opening and closing tags of a component. It enables component composition and nesting.

**Basic Example:**

```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>This is the card content</p>
      <button>Action</button>
    </Card>
  );
}
```

**Advanced Examples:**

### 1. **Layout Components**

```javascript
function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <header>My App Header</header>
      <main className="content">
        {children}
      </main>
      <footer>© 2025 My App</footer>
    </div>
  );
}

function HomePage() {
  return (
    <PageLayout>
      <h1>Welcome Home</h1>
      <p>This is the home page content</p>
    </PageLayout>
  );
}
```

### 2. **Manipulating Children**

```javascript
import { Children, cloneElement } from 'react';

function List({ children }) {
  // Add props to all children
  const childrenWithProps = Children.map(children, (child, index) => {
    return cloneElement(child, {
      index: index,
      className: 'list-item'
    });
  });

  return <ul>{childrenWithProps}</ul>;
}

// Usage
function App() {
  return (
    <List>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </List>
  );
}
```

### 3. **Conditional Rendering with Children**

```javascript
function Dialog({ children, title, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>{title}</h2>
        <div className="dialog-content">
          {children}
        </div>
        <button>Close</button>
      </div>
    </div>
  );
}

// Usage
function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      
      <Dialog title="Confirmation" isOpen={open}>
        <p>Are you sure you want to continue?</p>
        <button>Yes</button>
        <button>No</button>
      </Dialog>
    </>
  );
}
```

### 4. **Named Children Pattern**

```javascript
function SplitPane({ left, right }) {
  return (
    <div className="split-pane">
      <div className="split-pane-left">
        {left}
      </div>
      <div className="split-pane-right">
        {right}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <SplitPane
      left={
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
      }
      right={
        <main>
          <h1>Main Content</h1>
        </main>
      }
    />
  );
}
```

### 5. **Checking Children Type**

```javascript
function Alert({ children, type = 'info' }) {
  // Check if children is a string
  const hasText = typeof children === 'string';

  return (
    <div className={`alert alert-${type}`}>
      {hasText ? (
        <p>{children}</p>
      ) : (
        children
      )}
    </div>
  );
}

// Usage
function App() {
  return (
    <>
      <Alert type="success">Operation successful!</Alert>
      
      <Alert type="error">
        <h3>Error Occurred</h3>
        <p>Please try again later</p>
      </Alert>
    </>
  );
}
```

**Key Takeaways:**
- `children` enables flexible, reusable components
- Can be any valid React node (elements, strings, numbers, arrays)
- Essential for component composition patterns
- Use `React.Children` utilities for advanced manipulation

## Performance Optimization

# React Performance Optimization - Complete Guide with Examples

## 26. Why is performance optimization important in React?

Performance optimization in React is crucial for creating fast, responsive, and user-friendly applications. Poor performance can lead to a degraded user experience and higher resource consumption.

**Key Reasons:**

### 1. **User Experience**
- Slow apps frustrate users and increase bounce rates
- Users expect instant feedback (< 100ms feels instant)
- Smooth animations require 60fps (16.67ms per frame)

### 2. **Resource Efficiency**
- Unnecessary re-renders waste CPU cycles
- Large component trees can be expensive to reconcile
- Mobile devices have limited processing power and battery

### 3. **Business Impact**
- 1 second delay can reduce conversions by 7%
- 53% of mobile users abandon sites that take > 3 seconds to load
- Performance directly affects SEO rankings

### 4. **Scalability**
- Small performance issues compound as apps grow
- Inefficient patterns become bottlenecks at scale

**Common Performance Problems in React:**

```javascript
// ❌ Problem 1: Unnecessary Re-renders
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // This object is recreated on every render
  const user = { name: 'John', age: 30 };
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* ChildComponent re-renders even though user data hasn't changed */}
      <ChildComponent user={user} />
    </div>
  );
}

// ❌ Problem 2: Expensive Calculations on Every Render
function ProductList({ products }) {
  // This filter runs on every render
  const expensiveProducts = products.filter(p => p.price > 1000);
  
  return (
    <div>
      {expensiveProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ❌ Problem 3: Inline Function Creation
function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => (
        // New function created on every render for each todo
        <TodoItem 
          key={todo.id} 
          todo={todo}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}
```

**Solutions with Performance Optimization:**

```javascript
import { useState, useMemo, useCallback, memo } from 'react';

// ✅ Solution 1: Memoize Objects
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // user object only recreated if dependencies change
  const user = useMemo(() => ({ 
    name: 'John', 
    age: 30 
  }), []);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <MemoizedChild user={user} />
    </div>
  );
}

const MemoizedChild = memo(function ChildComponent({ user }) {
  console.log('ChildComponent rendered');
  return <div>{user.name}</div>;
});

// ✅ Solution 2: Use useMemo for Expensive Calculations
function ProductList({ products }) {
  // Only recalculates when products array changes
  const expensiveProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(p => p.price > 1000);
  }, [products]);
  
  return (
    <div>
      {expensiveProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ✅ Solution 3: Use useCallback for Functions
function TodoList({ todos, onDelete }) {
  return (
    <div>
      {todos.map(todo => (
        <MemoizedTodoItem 
          key={todo.id} 
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

const MemoizedTodoItem = memo(function TodoItem({ todo, onDelete }) {
  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [todo.id, onDelete]);
  
  return (
    <div>
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
});
```

**Performance Monitoring Example:**

```javascript
import { Profiler } from 'react';

function App() {
  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(`${id} (${phase}) took ${actualDuration}ms`);
  };

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <MyComponents />
    </Profiler>
  );
}
```

---

## 27. What is React.memo and when would you use it?

**React.memo** is a higher-order component (HOC) that memoizes a component, preventing unnecessary re-renders when props haven't changed. It performs a shallow comparison of props by default.

**How it Works:**
- Wraps a functional component
- Compares previous and current props
- Only re-renders if props have changed
- Similar to `PureComponent` for class components

**Basic Example:**

```javascript
import { memo, useState } from 'react';

// Without React.memo - re-renders every time parent updates
function ExpensiveComponent({ count }) {
  console.log('ExpensiveComponent rendered');
  
  // Simulate expensive operation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  
  return (
    <div>
      <h3>Count: {count}</h3>
      <p>Expensive calculation result: {result}</p>
    </div>
  );
}

// With React.memo - only re-renders when count changes
const MemoizedExpensiveComponent = memo(function ExpensiveComponent({ count }) {
  console.log('MemoizedExpensiveComponent rendered');
  
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  
  return (
    <div>
      <h3>Count: {count}</h3>
      <p>Expensive calculation result: {result}</p>
    </div>
  );
});

// Parent component
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something..."
      />
      <p>Name: {name}</p>
      
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      
      {/* This will re-render every time name changes */}
      <ExpensiveComponent count={count} />
      
      {/* This only re-renders when count changes */}
      <MemoizedExpensiveComponent count={count} />
    </div>
  );
}
```

**Custom Comparison Function:**

```javascript
import { memo } from 'react';

// Component with complex props
function UserCard({ user, settings }) {
  console.log('UserCard rendered');
  
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Theme: {settings.theme}</p>
    </div>
  );
}

// Custom comparison function
const MemoizedUserCard = memo(UserCard, (prevProps, nextProps) => {
  // Return true if props are equal (skip re-render)
  // Return false if props are different (do re-render)
  
  return (
    prevProps.user.id === nextProps.user.id &&
    prevProps.user.name === nextProps.user.name &&
    prevProps.settings.theme === nextProps.settings.theme
  );
});

// Usage
function App() {
  const [count, setCount] = useState(0);
  const [user] = useState({ 
    id: 1, 
    name: 'Alice', 
    email: 'alice@example.com',
    lastLogin: new Date() // This changes but we don't care
  });
  const [settings] = useState({ theme: 'dark', notifications: true });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Re-render Parent: {count}
      </button>
      
      {/* Only re-renders if id, name, or theme changes */}
      <MemoizedUserCard user={user} settings={settings} />
    </div>
  );
}
```

**When to Use React.memo:**

### ✅ **Good Use Cases:**

```javascript
// 1. Pure presentational components with stable props
const Header = memo(function Header({ title, logo }) {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>{title}</h1>
    </header>
  );
});

// 2. Components that render frequently with same props
const ListItem = memo(function ListItem({ item }) {
  return <li>{item.name} - ${item.price}</li>;
});

function ProductList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

// 3. Expensive rendering components
const Chart = memo(function Chart({ data }) {
  // Complex visualization logic
  return <canvas>/* render chart */</canvas>;
});

// 4. Components deep in the tree
const DeepNestedComponent = memo(function DeepNested({ value }) {
  return <div>{value}</div>;
});
```

### ❌ **When NOT to Use React.memo:**

```javascript
// 1. Props change frequently
function Counter({ count }) {
  return <div>{count}</div>; // count changes often, memo is useless
}

// 2. Component has internal state that changes
const SearchBox = memo(function SearchBox() {
  const [query, setQuery] = useState(''); // Has its own state
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
});

// 3. Props are always new objects/functions
function Parent() {
  return (
    <Child 
      data={{ key: 'value' }} // New object every render - memo won't help
      onClick={() => console.log('click')} // New function every render
    />
  );
}

// 4. Cheap/simple components
const SimpleDiv = memo(function SimpleDiv({ text }) {
  return <div>{text}</div>; // Too simple, memo overhead not worth it
});
```

**Complete Real-World Example:**

```javascript
import { memo, useState, useCallback } from 'react';

// Memoized list item
const TodoItem = memo(function TodoItem({ todo, onToggle, onDelete }) {
  console.log(`Rendering TodoItem: ${todo.id}`);
  
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none' 
      }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Master optimization', completed: false }
  ]);
  const [filter, setFilter] = useState('all');

  // Memoize callback functions
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <ul>
        {/* Only items with changed props will re-render */}
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
```

---

## 28. How does PureComponent differ from Component in React?

**PureComponent** is a base class for React class components that implements `shouldComponentUpdate()` with a shallow prop and state comparison. It automatically prevents unnecessary re-renders when props and state haven't changed.

**Key Differences:**

| Feature | Component | PureComponent |
|---------|-----------|---------------|
| Re-render Check | Always re-renders | Shallow comparison of props/state |
| shouldComponentUpdate | Must implement manually | Implemented automatically |
| Performance | Can be slower (more re-renders) | Generally faster (fewer re-renders) |
| Use Case | When you need full control | Simple components with primitive props |

**Basic Example:**

```javascript
import React, { Component, PureComponent } from 'react';

// Regular Component - always re-renders when parent updates
class RegularCounter extends Component {
  render() {
    console.log('RegularCounter rendered');
    return <div>Count: {this.props.count}</div>;
  }
}

// PureComponent - only re-renders when props/state actually change
class PureCounter extends PureComponent {
  render() {
    console.log('PureCounter rendered');
    return <div>Count: {this.props.count}</div>;
  }
}

// Parent component
class App extends Component {
  state = {
    count: 0,
    name: ''
  };

  render() {
    return (
      <div>
        <input 
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          placeholder="Type something..."
        />
        
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>

        {/* Re-renders on every parent update */}
        <RegularCounter count={this.state.count} />
        
        {/* Only re-renders when count changes */}
        <PureCounter count={this.state.count} />
      </div>
    );
  }
}
```

**Shallow Comparison Explained:**

```javascript
import React, { PureComponent } from 'react';

// Example 1: Primitive values (works well with PureComponent)
class UserName extends PureComponent {
  render() {
    console.log('UserName rendered');
    const { name, age } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

// Example 2: Object references (problematic with PureComponent)
class UserProfile extends PureComponent {
  render() {
    console.log('UserProfile rendered');
    const { user } = this.props;
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}

class App extends Component {
  state = {
    name: 'Alice',
    age: 25,
    user: { name: 'Bob', email: 'bob@example.com' }
  };

  updateUser = () => {
    // ❌ Problem: Mutating the object - PureComponent won't detect change
    this.state.user.email = 'newemail@example.com';
    this.setState({ user: this.state.user });
    
    // ✅ Solution: Create new object
    this.setState({
      user: { ...this.state.user, email: 'newemail@example.com' }
    });
  };

  render() {
    return (
      <div>
        <UserName name={this.state.name} age={this.state.age} />
        <UserProfile user={this.state.user} />
        <button onClick={this.updateUser}>Update User</button>
      </div>
    );
  }
}
```

**Manual shouldComponentUpdate (Regular Component):**

```javascript
import React, { Component } from 'react';

class OptimizedComponent extends Component {
  // Manually implementing what PureComponent does automatically
  shouldComponentUpdate(nextProps, nextState) {
    // Custom comparison logic
    return (
      this.props.count !== nextProps.count ||
      this.props.name !== nextProps.name ||
      this.state.expanded !== nextState.expanded
    );
  }

  state = { expanded: false };

  render() {
    console.log('OptimizedComponent rendered');
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Count: {this.props.count}</p>
        <button onClick={() => this.setState({ expanded: !this.state.expanded })}>
          Toggle Details
        </button>
        {this.state.expanded && <div>Additional details...</div>}
      </div>
    );
  }
}
```

**Deep Comparison Example:**

```javascript
import React, { Component, PureComponent } from 'react';
import _ from 'lodash';

// PureComponent with deep object props (won't work correctly)
class ShallowUserList extends PureComponent {
  render() {
    console.log('ShallowUserList rendered');
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

// Regular Component with deep comparison
class DeepUserList extends Component {
  shouldComponentUpdate(nextProps) {
    // Deep comparison using lodash
    return !_.isEqual(this.props.users, nextProps.users);
  }

  render() {
    console.log('DeepUserList rendered');
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

class App extends Component {
  state = {
    users: [
      { id: 1, name: 'Alice', profile: { age: 25 } },
      { id: 2, name: 'Bob', profile: { age: 30 } }
    ]
  };

  updateUserAge = () => {
    const updatedUsers = [...this.state.users];
    updatedUsers[0].profile.age = 26; // Nested change
    
    // ShallowUserList might not update correctly
    // DeepUserList will update correctly
    this.setState({ users: updatedUsers });
  };

  render() {
    return (
      <div>
        <ShallowUserList users={this.state.users} />
        <DeepUserList users={this.state.users} />
        <button onClick={this.updateUserAge}>Update Age</button>
      </div>
    );
  }
}
```

**Modern Equivalent (Functional Components):**

```javascript
import { memo, useState } from 'react';

// PureComponent equivalent
const MemoizedComponent = memo(function MyComponent({ count, name }) {
  console.log('MemoizedComponent rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
    </div>
  );
});

// PureComponent with custom comparison
const CustomMemoComponent = memo(
  function MyComponent({ user }) {
    console.log('CustomMemoComponent rendered');
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Return true if equal (skip render)
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name
    );
  }
);

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [user] = useState({ id: 1, name: 'Alice', email: 'alice@example.com' });

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <MemoizedComponent count={count} name="Test" />
      <CustomMemoComponent user={user} />
    </div>
  );
}
```

**When to Use Each:**

```javascript
// Use Component when:
// - You need full control over re-renders
// - Props change frequently
// - Deep object comparisons needed
class FlexibleComponent extends Component {
  shouldComponentUpdate(nextProps) {
    // Custom complex logic
    return this.customComparisonLogic(nextProps);
  }
  
  customComparisonLogic(nextProps) {
    // Your specific logic here
    return true;
  }
}

// Use PureComponent when:
// - Props are primitive values
// - Props are immutable objects
// - Simple shallow comparison is sufficient
class SimpleDisplayComponent extends PureComponent {
  render() {
    return <div>{this.props.text}</div>;
  }
}

// Modern approach: Use functional components with memo
const ModernComponent = memo(function ModernComponent(props) {
  return <div>{props.text}</div>;
});
```

**Key Takeaways:**
- **Component**: Always re-renders (unless you implement shouldComponentUpdate)
- **PureComponent**: Automatically does shallow comparison
- **Modern React**: Prefer functional components with `React.memo` and hooks
- Always ensure immutability when using PureComponent or memo
- Don't use PureComponent/memo everywhere - measure first!

# React Reconciliation and Re-render Prevention - Complete Guide

## 29. Can you explain the concept of reconciliation in React?

**Reconciliation** is the algorithm React uses to diff one tree with another to determine which parts need to be changed. It's the process by which React updates the DOM efficiently.

### How Reconciliation Works:

When a component's state or props change, React needs to determine what changes to make to the actual DOM. Instead of re-rendering everything, React uses a "diffing" algorithm to compare the new virtual DOM tree with the previous one.

**The Virtual DOM Process:**

```
1. State/Props Change
   ↓
2. Re-render Component (creates new Virtual DOM)
   ↓
3. Reconciliation (diff old vs new Virtual DOM)
   ↓
4. Calculate Minimal Changes
   ↓
5. Update Real DOM (batch updates)
```

### The Diffing Algorithm:

React uses heuristics to make reconciliation O(n) instead of O(n³):

**1. Different Element Types**

```javascript
// Example 1: Changing element types
function App() {
  const [isDiv, setIsDiv] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsDiv(!isDiv)}>
        Toggle Element Type
      </button>
      
      {isDiv ? (
        // When switching from div to span, React:
        // 1. Destroys old <div> and its children
        // 2. Creates new <span> from scratch
        // 3. Unmounts old component tree
        // 4. Mounts new component tree
        <div className="container">
          <Child />
        </div>
      ) : (
        <span className="container">
          <Child />
        </span>
      )}
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log('Child mounted');
    return () => console.log('Child unmounted');
  }, []);
  
  return <p>Child Component</p>;
}
```

**2. Same Element Type - Update Attributes**

```javascript
// Example 2: Same element type with different attributes
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      
      {/* React keeps the same DOM node and only updates className */}
      <div className={`container ${theme}`}>
        Content
      </div>
      
      {/* Before: <div class="container light">Content</div> */}
      {/* After:  <div class="container dark">Content</div> */}
      {/* React only updates the className attribute */}
    </div>
  );
}
```

**3. Recursing on Children**

```javascript
// Example 3: Children reconciliation
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'First' },
    { id: 2, text: 'Second' }
  ]);
  
  const addTodo = () => {
    // Adding to the end - efficient
    setTodos([
      ...todos,
      { id: Date.now(), text: 'New' }
    ]);
  };
  
  const addTodoAtStart = () => {
    // Adding to the start - inefficient without keys
    setTodos([
      { id: Date.now(), text: 'New' },
      ...todos
    ]);
  };
  
  return (
    <div>
      <button onClick={addTodo}>Add at End</button>
      <button onClick={addTodoAtStart}>Add at Start</button>
      
      {/* Without keys - inefficient */}
      <ul>
        {todos.map(todo => (
          <li>{todo.text}</li>
        ))}
      </ul>
      
      {/* With keys - efficient */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

### The Importance of Keys:

```javascript
// Example 4: Keys in reconciliation
import { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ]);
  
  const reverseList = () => {
    setUsers([...users].reverse());
  };
  
  const removeMiddle = () => {
    setUsers(users.filter((_, index) => index !== 1));
  };
  
  return (
    <div>
      <button onClick={reverseList}>Reverse</button>
      <button onClick={removeMiddle}>Remove Middle</button>
      
      <h3>❌ Without Proper Keys (using index)</h3>
      <ul>
        {users.map((user, index) => (
          // Using index as key causes issues
          <UserItem key={index} user={user} />
        ))}
      </ul>
      
      <h3>✅ With Proper Keys (using unique id)</h3>
      <ul>
        {users.map(user => (
          // Using unique id preserves component identity
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

function UserItem({ user }) {
  const [count, setCount] = useState(0);
  
  // Component has internal state
  return (
    <li>
      {user.name} (Age: {user.age}) - Clicks: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </li>
  );
}
```

### Reconciliation in Action:

```javascript
// Example 5: Complete reconciliation example
import { useState, useEffect } from 'react';

function Message({ id, text }) {
  useEffect(() => {
    console.log(`Message ${id} mounted`);
    return () => console.log(`Message ${id} unmounted`);
  }, [id]);
  
  useEffect(() => {
    console.log(`Message ${id} updated: ${text}`);
  }, [id, text]);
  
  return <div className="message">{text}</div>;
}

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello' },
    { id: 2, text: 'World' }
  ]);
  
  const updateSecondMessage = () => {
    // Same component, different props - component reuses
    setMessages([
      { id: 1, text: 'Hello' },
      { id: 2, text: 'Updated World' }
    ]);
    // Result: Message 2 updates but doesn't unmount/remount
  };
  
  const replaceSecondMessage = () => {
    // Different component (new id) - component recreates
    setMessages([
      { id: 1, text: 'Hello' },
      { id: 3, text: 'New Message' }
    ]);
    // Result: Message 2 unmounts, Message 3 mounts
  };
  
  const reorderMessages = () => {
    // Same components, different order - components reuse
    setMessages([...messages].reverse());
    // Result: Components keep their identity thanks to keys
  };
  
  return (
    <div>
      <button onClick={updateSecondMessage}>Update Message</button>
      <button onClick={replaceSecondMessage}>Replace Message</button>
      <button onClick={reorderMessages}>Reorder</button>
      
      <div className="messages">
        {messages.map(msg => (
          <Message key={msg.id} id={msg.id} text={msg.text} />
        ))}
      </div>
    </div>
  );
}
```

### Fiber Architecture (React 16+):

React Fiber is the reimplementation of React's reconciliation algorithm that enables:

```javascript
// Example 6: Understanding Fiber's benefits
function ExpensiveApp() {
  const [items, setItems] = useState(
    Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i }))
  );
  
  // In old React: This would block the entire UI
  // In Fiber: React can pause and resume work, keeping UI responsive
  
  const updateItems = () => {
    setItems(items.map(item => ({
      ...item,
      value: Math.random()
    })));
  };
  
  return (
    <div>
      {/* User can still interact while React processes updates */}
      <button onClick={updateItems}>Update 1000 Items</button>
      <input placeholder="This stays responsive" />
      
      <div className="items">
        {items.map(item => (
          <ExpensiveItem key={item.id} value={item.value} />
        ))}
      </div>
    </div>
  );
}

function ExpensiveItem({ value }) {
  // Simulate expensive rendering
  const result = value * 2;
  return <div className="item">{result}</div>;
}
```

### Reconciliation Optimization Strategies:

```javascript
// Example 7: Optimizing reconciliation
import { useState, memo, useMemo } from 'react';

// Strategy 1: Use stable keys
function StableKeysList({ items }) {
  return (
    <ul>
      {items.map(item => (
        // ✅ Use unique, stable IDs
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Strategy 2: Keep component structure stable
function ConditionalContent({ showDetails }) {
  return (
    <div>
      <h1>Title</h1>
      {/* ✅ Better: Keep structure stable */}
      <div style={{ display: showDetails ? 'block' : 'none' }}>
        <Details />
      </div>
      
      {/* ❌ Avoid: Mounting/unmounting frequently */}
      {/* {showDetails && <Details />} */}
    </div>
  );
}

// Strategy 3: Memoize expensive children
const ExpensiveChild = memo(function ExpensiveChild({ data }) {
  // Expensive rendering logic
  return <div>{/* ... */}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [data] = useState({ /* stable data */ });
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* ExpensiveChild won't re-render when count changes */}
      <ExpensiveChild data={data} />
    </div>
  );
}

// Strategy 4: Split components appropriately
function UserDashboard() {
  const [notifications, setNotifications] = useState([]);
  const [profile] = useState({ /* ... */ });
  
  return (
    <div>
      {/* Notifications change frequently */}
      <NotificationBell notifications={notifications} />
      
      {/* Profile is stable - won't re-render unnecessarily */}
      <ProfileSection profile={profile} />
    </div>
  );
}
```

### Visual Reconciliation Example:

```javascript
// Example 8: Visualizing the diff
function ReconciliationDemo() {
  const [version, setVersion] = useState(1);
  
  return (
    <div>
      <button onClick={() => setVersion(version + 1)}>
        Update Version: {version}
      </button>
      
      <div className="tree-comparison">
        <div className="old-tree">
          <h3>Previous Virtual DOM</h3>
          <pre>{`
<div>
  <h1>Title</h1>
  <p>Version ${version - 1}</p>
  <Button>Click</Button>
</div>
          `}</pre>
        </div>
        
        <div className="diff">
          <h3>Diff Algorithm</h3>
          <pre>{`
✓ <div> - Keep (same type)
✓ <h1> - Keep (same type)
! <p> - Update text content only
✓ <Button> - Keep (same type)
          `}</pre>
        </div>
        
        <div className="new-tree">
          <h3>New Virtual DOM</h3>
          <pre>{`
<div>
  <h1>Title</h1>
  <p>Version ${version}</p>
  <Button>Click</Button>
</div>
          `}</pre>
        </div>
      </div>
    </div>
  );
}
```

**Key Takeaways:**
- Reconciliation compares Virtual DOM trees efficiently
- Uses heuristics: different types → full rebuild, same types → update attributes
- Keys are critical for list reconciliation
- Fiber enables interruptible, prioritized updates
- Understanding reconciliation helps you write more performant React code

---

## 30. How can you prevent unnecessary re-renders in React?

Preventing unnecessary re-renders is crucial for React performance. Here are comprehensive strategies with examples:

### 1. React.memo (Functional Components)

```javascript
import { memo, useState } from 'react';

// Without memo - re-renders every time parent updates
function RegularChild({ name }) {
  console.log('RegularChild rendered');
  return <div>Hello, {name}</div>;
}

// With memo - only re-renders when props change
const MemoizedChild = memo(function MemoizedChild({ name }) {
  console.log('MemoizedChild rendered');
  return <div>Hello, {name}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name] = useState('Alice');
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      
      {/* Re-renders every time count changes */}
      <RegularChild name={name} />
      
      {/* Only re-renders when name changes */}
      <MemoizedChild name={name} />
    </div>
  );
}
```

### 2. useMemo Hook

```javascript
import { useState, useMemo } from 'react';

function ProductList({ products, category }) {
  const [sortOrder, setSortOrder] = useState('asc');
  
  // ❌ Bad: Recalculates on every render
  const filteredProducts = products
    .filter(p => p.category === category)
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  
  // ✅ Good: Only recalculates when dependencies change
  const filteredProductsMemo = useMemo(() => {
    console.log('Filtering and sorting products...');
    return products
      .filter(p => p.category === category)
      .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  }, [products, category, sortOrder]);
  
  return (
    <div>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort: {sortOrder}
      </button>
      
      <ul>
        {filteredProductsMemo.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Example: Expensive calculation
function Dashboard({ data }) {
  const [filter, setFilter] = useState('all');
  
  // Memoize expensive calculation
  const statistics = useMemo(() => {
    console.log('Calculating statistics...');
    
    // Simulate expensive operation
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].value;
    }
    
    return {
      total: sum,
      average: sum / data.length,
      max: Math.max(...data.map(d => d.value)),
      min: Math.min(...data.map(d => d.value))
    };
  }, [data]); // Only recalculate when data changes
  
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="high">High</option>
      </select>
      
      <div>Total: {statistics.total}</div>
      <div>Average: {statistics.average}</div>
      <div>Max: {statistics.max}</div>
      <div>Min: {statistics.min}</div>
    </div>
  );
}
```

### 3. useCallback Hook

```javascript
import { useState, useCallback, memo } from 'react';

// Child component that's memoized
const TodoItem = memo(function TodoItem({ todo, onDelete, onToggle }) {
  console.log(`TodoItem ${todo.id} rendered`);
  
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build app', completed: false }
  ]);
  const [filter, setFilter] = useState('all');
  
  // ❌ Bad: New function created on every render
  const handleDeleteBad = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };
  
  // ✅ Good: Function is memoized
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []); // No dependencies because we use functional update
  
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  }, []);
  
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}
```

### 4. State Colocation

```javascript
import { useState } from 'react';

// ❌ Bad: State at top level causes unnecessary re-renders
function BadExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  
  return (
    <div>
      <ExpensiveComponent1 />
      <ExpensiveComponent2 />
      
      {/* Only this form needs the state */}
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </form>
    </div>
  );
}

// ✅ Good: State colocated with component that uses it
function GoodExample() {
  return (
    <div>
      <ExpensiveComponent1 />
      <ExpensiveComponent2 />
      <UserForm />
    </div>
  );
}

function UserForm() {
  // State is now isolated
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
    </form>
  );
}
```

### 5. Component Composition (Children Prop)

```javascript
import { useState } from 'react';

// ❌ Bad: Expensive children re-render when count changes
function BadLayout() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="layout">
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* These re-render unnecessarily */}
      <ExpensiveSidebar />
      <ExpensiveContent />
      <ExpensiveFooter />
    </div>
  );
}

// ✅ Good: Children passed as props don't re-render
function GoodLayout({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <div className="layout">
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* Children don't re-render because they're created by parent */}
      {children}
    </div>
  );
}

function App() {
  return (
    <GoodLayout>
      <ExpensiveSidebar />
      <ExpensiveContent />
      <ExpensiveFooter />
    </GoodLayout>
  );
}
```

### 6. Lazy State Initialization

```javascript
import { useState } from 'react';

function ExpensiveComponent() {
  // ❌ Bad: Function runs on every render
  const [data, setData] = useState(expensiveCalculation());
  
  // ✅ Good: Function only runs once
  const [data2, setData2] = useState(() => expensiveCalculation());
  
  return <div>{/* ... */}</div>;
}

function expensiveCalculation() {
  console.log('Running expensive calculation...');
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  return result;
}
```

### 7. Avoiding Inline Objects and Arrays

```javascript
import { memo, useState } from 'react';

const UserProfile = memo(function UserProfile({ user, style, permissions }) {
  console.log('UserProfile rendered');
  return <div style={style}>{user.name}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  
  // ❌ Bad: New objects/arrays created on every render
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* memo won't work - new object every render */}
      <UserProfile 
        user={{ name: 'Alice' }}
        style={{ color: 'blue' }}
        permissions={['read', 'write']}
      />
    </div>
  );
}

// ✅ Good: Move objects outside or use useMemo
const userObject = { name: 'Alice' };
const styleObject = { color: 'blue' };
const permissionsArray = ['read', 'write'];

function GoodApp() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* memo works - same references */}
      <UserProfile 
        user={userObject}
        style={styleObject}
        permissions={permissionsArray}
      />
    </div>
  );
}
```

### 8. Splitting Components

```javascript
import { useState } from 'react';

// ❌ Bad: Single large component
function BadDashboard() {
  const [search, setSearch] = useState('');
  const [settings, setSettings] = useState({});
  
  return (
    <div>
      {/* Expensive chart re-renders when search changes */}
      <ExpensiveChart data={[/* ... */]} />
      
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <Settings settings={settings} onChange={setSettings} />
    </div>
  );
}

// ✅ Good: Split into smaller components
function GoodDashboard() {
  return (
    <div>
      <ChartSection />
      <SearchSection />
      <SettingsSection />
    </div>
  );
}

function ChartSection() {
  // Chart state isolated
  return <ExpensiveChart data={[/* ... */]} />;
}

function SearchSection() {
  // Search state isolated
  const [search, setSearch] = useState('');
  return (
    <input 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function SettingsSection() {
  // Settings state isolated
  const [settings, setSettings] = useState({});
  return <Settings settings={settings} onChange={setSettings} />;
}
```

### 9. Virtual Scrolling for Large Lists

```javascript
import { useState } from 'react';

// ❌ Bad: Rendering 10,000 items
function BadList() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));
  
  return (
    <div style={{ height: '500px', overflow: 'auto' }}>
      {items.map(item => (
        <div key={item.id} style={{ height: '50px' }}>
          {item.text}
        </div>
      ))}
    </div>
  );
}

// ✅ Good: Only render visible items
function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0);
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));
  
  const itemHeight = 50;
  const containerHeight = 500;
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = startIndex + visibleCount + 1;
  
  const visibleItems = items.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;
  
  return (
    <div 
      style={{ height: '500px', overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map(item => (
            <div key={item.id} style={{ height: itemHeight }}>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 10. Complete Real-World Example

```javascript
import { useState, useMemo, useCallback, memo } from 'react';

// Memoized child component
const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  console.log(`Rendering ProductCard: ${product.id}`);
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

function ProductListOptimized() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, category: 'electronics', image: '...' },
    { id: 2, name: 'Phone', price: 699, category: 'electronics', image: '...' },
    { id: 3, name: 'Shirt', price: 29, category: 'clothing', image: '...' },
    { id: 4, name: 'Shoes', price: 89, category: 'clothing', image: '...' }
  ]);
  
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState([]);
  
  // Memoize filtered and sorted products
  const displayProducts = useMemo(() => {
    console.log('Filtering and sorting products...');
    
    let filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);
    
    return filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });
  }, [products, category, sortBy]);
  
  // Memoize callback
  const handleAddToCart = useCallback((product) => {
    setCart(prev => [...prev, product]);
  }, []);
  
  // Memoize cart total
  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);
  
  return (
    <div className="product-list-optimized">
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
        
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      
      <div className="cart-info">
        Cart Items: {cart.length} | Total: ${cartTotal}
      </div>
      
      <div className="products-grid">
        {displayProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
```

**Key Takeaways:**
- Use `React.memo` for components with stable props
- Use `useMemo` for expensive calculations
- Use `useCallback` for functions passed as props
- Colocate state close to where it's used
- Use composition (children) to prevent re-renders
- Avoid creating new objects/arrays in render
- Split large components into smaller ones
- Consider virtual scrolling for long lists
- Always measure before optimizing!

## Styling in React

# React Reconciliation and Re-render Prevention - Complete Guide

## 29. Can you explain the concept of reconciliation in React?

**Reconciliation** is the algorithm React uses to diff one tree with another to determine which parts need to be changed. It's the process by which React updates the DOM efficiently.

### How Reconciliation Works:

When a component's state or props change, React needs to determine what changes to make to the actual DOM. Instead of re-rendering everything, React uses a "diffing" algorithm to compare the new virtual DOM tree with the previous one.

**The Virtual DOM Process:**

```
1. State/Props Change
   ↓
2. Re-render Component (creates new Virtual DOM)
   ↓
3. Reconciliation (diff old vs new Virtual DOM)
   ↓
4. Calculate Minimal Changes
   ↓
5. Update Real DOM (batch updates)
```

### The Diffing Algorithm:

React uses heuristics to make reconciliation O(n) instead of O(n³):

**1. Different Element Types**

```javascript
// Example 1: Changing element types
function App() {
  const [isDiv, setIsDiv] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsDiv(!isDiv)}>
        Toggle Element Type
      </button>
      
      {isDiv ? (
        // When switching from div to span, React:
        // 1. Destroys old <div> and its children
        // 2. Creates new <span> from scratch
        // 3. Unmounts old component tree
        // 4. Mounts new component tree
        <div className="container">
          <Child />
        </div>
      ) : (
        <span className="container">
          <Child />
        </span>
      )}
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log('Child mounted');
    return () => console.log('Child unmounted');
  }, []);
  
  return <p>Child Component</p>;
}
```

**2. Same Element Type - Update Attributes**

```javascript
// Example 2: Same element type with different attributes
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      
      {/* React keeps the same DOM node and only updates className */}
      <div className={`container ${theme}`}>
        Content
      </div>
      
      {/* Before: <div class="container light">Content</div> */}
      {/* After:  <div class="container dark">Content</div> */}
      {/* React only updates the className attribute */}
    </div>
  );
}
```

**3. Recursing on Children**

```javascript
// Example 3: Children reconciliation
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'First' },
    { id: 2, text: 'Second' }
  ]);
  
  const addTodo = () => {
    // Adding to the end - efficient
    setTodos([
      ...todos,
      { id: Date.now(), text: 'New' }
    ]);
  };
  
  const addTodoAtStart = () => {
    // Adding to the start - inefficient without keys
    setTodos([
      { id: Date.now(), text: 'New' },
      ...todos
    ]);
  };
  
  return (
    <div>
      <button onClick={addTodo}>Add at End</button>
      <button onClick={addTodoAtStart}>Add at Start</button>
      
      {/* Without keys - inefficient */}
      <ul>
        {todos.map(todo => (
          <li>{todo.text}</li>
        ))}
      </ul>
      
      {/* With keys - efficient */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

### The Importance of Keys:

```javascript
// Example 4: Keys in reconciliation
import { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ]);
  
  const reverseList = () => {
    setUsers([...users].reverse());
  };
  
  const removeMiddle = () => {
    setUsers(users.filter((_, index) => index !== 1));
  };
  
  return (
    <div>
      <button onClick={reverseList}>Reverse</button>
      <button onClick={removeMiddle}>Remove Middle</button>
      
      <h3>❌ Without Proper Keys (using index)</h3>
      <ul>
        {users.map((user, index) => (
          // Using index as key causes issues
          <UserItem key={index} user={user} />
        ))}
      </ul>
      
      <h3>✅ With Proper Keys (using unique id)</h3>
      <ul>
        {users.map(user => (
          // Using unique id preserves component identity
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

function UserItem({ user }) {
  const [count, setCount] = useState(0);
  
  // Component has internal state
  return (
    <li>
      {user.name} (Age: {user.age}) - Clicks: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </li>
  );
}
```

### Reconciliation in Action:

```javascript
// Example 5: Complete reconciliation example
import { useState, useEffect } from 'react';

function Message({ id, text }) {
  useEffect(() => {
    console.log(`Message ${id} mounted`);
    return () => console.log(`Message ${id} unmounted`);
  }, [id]);
  
  useEffect(() => {
    console.log(`Message ${id} updated: ${text}`);
  }, [id, text]);
  
  return <div className="message">{text}</div>;
}

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello' },
    { id: 2, text: 'World' }
  ]);
  
  const updateSecondMessage = () => {
    // Same component, different props - component reuses
    setMessages([
      { id: 1, text: 'Hello' },
      { id: 2, text: 'Updated World' }
    ]);
    // Result: Message 2 updates but doesn't unmount/remount
  };
  
  const replaceSecondMessage = () => {
    // Different component (new id) - component recreates
    setMessages([
      { id: 1, text: 'Hello' },
      { id: 3, text: 'New Message' }
    ]);
    // Result: Message 2 unmounts, Message 3 mounts
  };
  
  const reorderMessages = () => {
    // Same components, different order - components reuse
    setMessages([...messages].reverse());
    // Result: Components keep their identity thanks to keys
  };
  
  return (
    <div>
      <button onClick={updateSecondMessage}>Update Message</button>
      <button onClick={replaceSecondMessage}>Replace Message</button>
      <button onClick={reorderMessages}>Reorder</button>
      
      <div className="messages">
        {messages.map(msg => (
          <Message key={msg.id} id={msg.id} text={msg.text} />
        ))}
      </div>
    </div>
  );
}
```

### Fiber Architecture (React 16+):

React Fiber is the reimplementation of React's reconciliation algorithm that enables:

```javascript
// Example 6: Understanding Fiber's benefits
function ExpensiveApp() {
  const [items, setItems] = useState(
    Array.from({ length: 1000 }, (_, i) => ({ id: i, value: i }))
  );
  
  // In old React: This would block the entire UI
  // In Fiber: React can pause and resume work, keeping UI responsive
  
  const updateItems = () => {
    setItems(items.map(item => ({
      ...item,
      value: Math.random()
    })));
  };
  
  return (
    <div>
      {/* User can still interact while React processes updates */}
      <button onClick={updateItems}>Update 1000 Items</button>
      <input placeholder="This stays responsive" />
      
      <div className="items">
        {items.map(item => (
          <ExpensiveItem key={item.id} value={item.value} />
        ))}
      </div>
    </div>
  );
}

function ExpensiveItem({ value }) {
  // Simulate expensive rendering
  const result = value * 2;
  return <div className="item">{result}</div>;
}
```

### Reconciliation Optimization Strategies:

```javascript
// Example 7: Optimizing reconciliation
import { useState, memo, useMemo } from 'react';

// Strategy 1: Use stable keys
function StableKeysList({ items }) {
  return (
    <ul>
      {items.map(item => (
        // ✅ Use unique, stable IDs
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Strategy 2: Keep component structure stable
function ConditionalContent({ showDetails }) {
  return (
    <div>
      <h1>Title</h1>
      {/* ✅ Better: Keep structure stable */}
      <div style={{ display: showDetails ? 'block' : 'none' }}>
        <Details />
      </div>
      
      {/* ❌ Avoid: Mounting/unmounting frequently */}
      {/* {showDetails && <Details />} */}
    </div>
  );
}

// Strategy 3: Memoize expensive children
const ExpensiveChild = memo(function ExpensiveChild({ data }) {
  // Expensive rendering logic
  return <div>{/* ... */}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [data] = useState({ /* stable data */ });
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* ExpensiveChild won't re-render when count changes */}
      <ExpensiveChild data={data} />
    </div>
  );
}

// Strategy 4: Split components appropriately
function UserDashboard() {
  const [notifications, setNotifications] = useState([]);
  const [profile] = useState({ /* ... */ });
  
  return (
    <div>
      {/* Notifications change frequently */}
      <NotificationBell notifications={notifications} />
      
      {/* Profile is stable - won't re-render unnecessarily */}
      <ProfileSection profile={profile} />
    </div>
  );
}
```

### Visual Reconciliation Example:

```javascript
// Example 8: Visualizing the diff
function ReconciliationDemo() {
  const [version, setVersion] = useState(1);
  
  return (
    <div>
      <button onClick={() => setVersion(version + 1)}>
        Update Version: {version}
      </button>
      
      <div className="tree-comparison">
        <div className="old-tree">
          <h3>Previous Virtual DOM</h3>
          <pre>{`
<div>
  <h1>Title</h1>
  <p>Version ${version - 1}</p>
  <Button>Click</Button>
</div>
          `}</pre>
        </div>
        
        <div className="diff">
          <h3>Diff Algorithm</h3>
          <pre>{`
✓ <div> - Keep (same type)
✓ <h1> - Keep (same type)
! <p> - Update text content only
✓ <Button> - Keep (same type)
          `}</pre>
        </div>
        
        <div className="new-tree">
          <h3>New Virtual DOM</h3>
          <pre>{`
<div>
  <h1>Title</h1>
  <p>Version ${version}</p>
  <Button>Click</Button>
</div>
          `}</pre>
        </div>
      </div>
    </div>
  );
}
```

**Key Takeaways:**
- Reconciliation compares Virtual DOM trees efficiently
- Uses heuristics: different types → full rebuild, same types → update attributes
- Keys are critical for list reconciliation
- Fiber enables interruptible, prioritized updates
- Understanding reconciliation helps you write more performant React code

---

## 30. How can you prevent unnecessary re-renders in React?

Preventing unnecessary re-renders is crucial for React performance. Here are comprehensive strategies with examples:

### 1. React.memo (Functional Components)

```javascript
import { memo, useState } from 'react';

// Without memo - re-renders every time parent updates
function RegularChild({ name }) {
  console.log('RegularChild rendered');
  return <div>Hello, {name}</div>;
}

// With memo - only re-renders when props change
const MemoizedChild = memo(function MemoizedChild({ name }) {
  console.log('MemoizedChild rendered');
  return <div>Hello, {name}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name] = useState('Alice');
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      
      {/* Re-renders every time count changes */}
      <RegularChild name={name} />
      
      {/* Only re-renders when name changes */}
      <MemoizedChild name={name} />
    </div>
  );
}
```

### 2. useMemo Hook

```javascript
import { useState, useMemo } from 'react';

function ProductList({ products, category }) {
  const [sortOrder, setSortOrder] = useState('asc');
  
  // ❌ Bad: Recalculates on every render
  const filteredProducts = products
    .filter(p => p.category === category)
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  
  // ✅ Good: Only recalculates when dependencies change
  const filteredProductsMemo = useMemo(() => {
    console.log('Filtering and sorting products...');
    return products
      .filter(p => p.category === category)
      .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  }, [products, category, sortOrder]);
  
  return (
    <div>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort: {sortOrder}
      </button>
      
      <ul>
        {filteredProductsMemo.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Example: Expensive calculation
function Dashboard({ data }) {
  const [filter, setFilter] = useState('all');
  
  // Memoize expensive calculation
  const statistics = useMemo(() => {
    console.log('Calculating statistics...');
    
    // Simulate expensive operation
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].value;
    }
    
    return {
      total: sum,
      average: sum / data.length,
      max: Math.max(...data.map(d => d.value)),
      min: Math.min(...data.map(d => d.value))
    };
  }, [data]); // Only recalculate when data changes
  
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="high">High</option>
      </select>
      
      <div>Total: {statistics.total}</div>
      <div>Average: {statistics.average}</div>
      <div>Max: {statistics.max}</div>
      <div>Min: {statistics.min}</div>
    </div>
  );
}
```

### 3. useCallback Hook

```javascript
import { useState, useCallback, memo } from 'react';

// Child component that's memoized
const TodoItem = memo(function TodoItem({ todo, onDelete, onToggle }) {
  console.log(`TodoItem ${todo.id} rendered`);
  
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build app', completed: false }
  ]);
  const [filter, setFilter] = useState('all');
  
  // ❌ Bad: New function created on every render
  const handleDeleteBad = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };
  
  // ✅ Good: Function is memoized
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []); // No dependencies because we use functional update
  
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  }, []);
  
  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
}
```

### 4. State Colocation

```javascript
import { useState } from 'react';

// ❌ Bad: State at top level causes unnecessary re-renders
function BadExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  
  return (
    <div>
      <ExpensiveComponent1 />
      <ExpensiveComponent2 />
      
      {/* Only this form needs the state */}
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </form>
    </div>
  );
}

// ✅ Good: State colocated with component that uses it
function GoodExample() {
  return (
    <div>
      <ExpensiveComponent1 />
      <ExpensiveComponent2 />
      <UserForm />
    </div>
  );
}

function UserForm() {
  // State is now isolated
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
    </form>
  );
}
```

### 5. Component Composition (Children Prop)

```javascript
import { useState } from 'react';

// ❌ Bad: Expensive children re-render when count changes
function BadLayout() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="layout">
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* These re-render unnecessarily */}
      <ExpensiveSidebar />
      <ExpensiveContent />
      <ExpensiveFooter />
    </div>
  );
}

// ✅ Good: Children passed as props don't re-render
function GoodLayout({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <div className="layout">
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* Children don't re-render because they're created by parent */}
      {children}
    </div>
  );
}

function App() {
  return (
    <GoodLayout>
      <ExpensiveSidebar />
      <ExpensiveContent />
      <ExpensiveFooter />
    </GoodLayout>
  );
}
```

### 6. Lazy State Initialization

```javascript
import { useState } from 'react';

function ExpensiveComponent() {
  // ❌ Bad: Function runs on every render
  const [data, setData] = useState(expensiveCalculation());
  
  // ✅ Good: Function only runs once
  const [data2, setData2] = useState(() => expensiveCalculation());
  
  return <div>{/* ... */}</div>;
}

function expensiveCalculation() {
  console.log('Running expensive calculation...');
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  return result;
}
```

### 7. Avoiding Inline Objects and Arrays

```javascript
import { memo, useState } from 'react';

const UserProfile = memo(function UserProfile({ user, style, permissions }) {
  console.log('UserProfile rendered');
  return <div style={style}>{user.name}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  
  // ❌ Bad: New objects/arrays created on every render
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* memo won't work - new object every render */}
      <UserProfile 
        user={{ name: 'Alice' }}
        style={{ color: 'blue' }}
        permissions={['read', 'write']}
      />
    </div>
  );
}

// ✅ Good: Move objects outside or use useMemo
const userObject = { name: 'Alice' };
const styleObject = { color: 'blue' };
const permissionsArray = ['read', 'write'];

function GoodApp() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      
      {/* memo works - same references */}
      <UserProfile 
        user={userObject}
        style={styleObject}
        permissions={permissionsArray}
      />
    </div>
  );
}
```

### 8. Splitting Components

```javascript
import { useState } from 'react';

// ❌ Bad: Single large component
function BadDashboard() {
  const [search, setSearch] = useState('');
  const [settings, setSettings] = useState({});
  
  return (
    <div>
      {/* Expensive chart re-renders when search changes */}
      <ExpensiveChart data={[/* ... */]} />
      
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <Settings settings={settings} onChange={setSettings} />
    </div>
  );
}

// ✅ Good: Split into smaller components
function GoodDashboard() {
  return (
    <div>
      <ChartSection />
      <SearchSection />
      <SettingsSection />
    </div>
  );
}

function ChartSection() {
  // Chart state isolated
  return <ExpensiveChart data={[/* ... */]} />;
}

function SearchSection() {
  // Search state isolated
  const [search, setSearch] = useState('');
  return (
    <input 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

function SettingsSection() {
  // Settings state isolated
  const [settings, setSettings] = useState({});
  return <Settings settings={settings} onChange={setSettings} />;
}
```

### 9. Virtual Scrolling for Large Lists

```javascript
import { useState } from 'react';

// ❌ Bad: Rendering 10,000 items
function BadList() {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));
  
  return (
    <div style={{ height: '500px', overflow: 'auto' }}>
      {items.map(item => (
        <div key={item.id} style={{ height: '50px' }}>
          {item.text}
        </div>
      ))}
    </div>
  );
}

// ✅ Good: Only render visible items
function VirtualList() {
  const [scrollTop, setScrollTop] = useState(0);
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));
  
  const itemHeight = 50;
  const containerHeight = 500;
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = startIndex + visibleCount + 1;
  
  const visibleItems = items.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;
  
  return (
    <div 
      style={{ height: '500px', overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map(item => (
            <div key={item.id} style={{ height: itemHeight }}>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 10. Complete Real-World Example

```javascript
import { useState, useMemo, useCallback, memo } from 'react';

// Memoized child component
const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  console.log(`Rendering ProductCard: ${product.id}`);
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

function ProductListOptimized() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, category: 'electronics', image: '...' },
    { id: 2, name: 'Phone', price: 699, category: 'electronics', image: '...' },
    { id: 3, name: 'Shirt', price: 29, category: 'clothing', image: '...' },
    { id: 4, name: 'Shoes', price: 89, category: 'clothing', image: '...' }
  ]);
  
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState([]);
  
  // Memoize filtered and sorted products
  const displayProducts = useMemo(() => {
    console.log('Filtering and sorting products...');
    
    let filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);
    
    return filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price') return a.price - b.price;
      return 0;
    });
  }, [products, category, sortBy]);
  
  // Memoize callback
  const handleAddToCart = useCallback((product) => {
    setCart(prev => [...prev, product]);
  }, []);
  
  // Memoize cart total
  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);
  
  return (
    <div className="product-list-optimized">
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
        
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      
      <div className="cart-info">
        Cart Items: {cart.length} | Total: ${cartTotal}
      </div>
      
      <div className="products-grid">
        {displayProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
```

**Key Takeaways:**
- Use `React.memo` for components with stable props
- Use `useMemo` for expensive calculations
- Use `useCallback` for functions passed as props
- Colocate state close to where it's used
- Use composition (children) to prevent re-renders
- Avoid creating new objects/arrays in render
- Split large components into smaller ones
- Consider virtual scrolling for long lists
- Always measure before optimizing!

## 34. What are the advantages of using Sass or LESS in a React project?

Using CSS preprocessors like Sass or LESS in React projects provides several powerful advantages:

**Variables and Reusability**
You can define reusable values for colors, fonts, spacing, and other properties throughout your application, making it easy to maintain consistent theming and update styles globally.

**Nesting**
Write nested CSS that mirrors your component hierarchy, making styles more readable and maintainable. This is especially useful in React where components are naturally nested.

**Mixins and Functions**
Create reusable chunks of CSS that can accept parameters, reducing code duplication and making it easier to apply consistent patterns like responsive breakpoints or common animations.

**Mathematical Operations**
Perform calculations directly in your stylesheets for spacing, sizing, and color manipulation, which is particularly useful for creating systematic design systems.

**Modularity and Organization**
Split styles into multiple files and import them as needed, keeping your codebase organized and making it easier to locate and update styles for specific components.

**Better Maintainability**
The additional features make large codebases easier to maintain, especially when working in teams where consistent styling patterns are important.

### Example with Sass in React:

```scss
// styles/variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$spacing-unit: 8px;
$border-radius: 4px;

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin responsive($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 768px) { @content; }
  }
}

// components/Button.scss
@import '../styles/variables';

.button {
  @include flex-center;
  background-color: $primary-color;
  padding: $spacing-unit * 2 $spacing-unit * 3;
  border-radius: $border-radius;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &--secondary {
    background-color: $secondary-color;
    
    &:hover {
      background-color: darken($secondary-color, 10%);
    }
  }

  @include responsive(mobile) {
    width: 100%;
    padding: $spacing-unit * 1.5;
  }
}
```

```jsx
// components/Button.jsx
import React from 'react';
import './Button.scss';

const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button 
      className={`button ${variant === 'secondary' ? 'button--secondary' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

---

## 35. How do you use inline styles in React?

In React, inline styles are applied using the `style` attribute with a JavaScript object. The property names use camelCase instead of kebab-case, and values are typically strings (with units) or numbers.

**Key characteristics:**
- Style properties are written in camelCase (e.g., `backgroundColor` instead of `background-color`)
- Values are JavaScript expressions, so numeric values without units are treated as pixels
- The style attribute accepts an object, either defined inline or as a variable
- Inline styles have high specificity and override external stylesheets
- They're useful for dynamic styling based on props or state

### Example:

```jsx
import React, { useState } from 'react';

const InlineStylesExample = () => {
  const [isActive, setIsActive] = useState(false);
  const [boxSize, setBoxSize] = useState(100);

  // Styles defined as objects
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '20px auto'
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '15px',
    textAlign: 'center'
  };

  // Dynamic styles based on state
  const boxStyle = {
    width: `${boxSize}px`,
    height: `${boxSize}px`,
    backgroundColor: isActive ? '#3498db' : '#e74c3c',
    margin: '20px auto',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    boxShadow: isActive 
      ? '0 4px 12px rgba(52, 152, 219, 0.3)' 
      : '0 4px 12px rgba(231, 76, 60, 0.3)'
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#2ecc71',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Inline Styles Demo</h2>
      
      <div 
        style={boxStyle}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Active' : 'Inactive'}
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          style={buttonStyle}
          onClick={() => setBoxSize(boxSize - 10)}
        >
          Decrease Size
        </button>
        <button 
          style={buttonStyle}
          onClick={() => setBoxSize(boxSize + 10)}
        >
          Increase Size
        </button>
      </div>

      {/* Inline style with conditional rendering */}
      <p style={{
        textAlign: 'center',
        marginTop: '15px',
        color: '#666',
        fontSize: '14px',
        fontStyle: 'italic'
      }}>
        Current size: {boxSize}px
      </p>
    </div>
  );
};

export default InlineStylesExample;
```

**When to use inline styles:**
- For dynamic styles that change based on props or state
- For one-off styling that won't be reused
- For simple components where external CSS would be overkill
- When you need to calculate styles programmatically

**When to avoid inline styles:**
- For complex styling with pseudo-classes (`:hover`, `:focus`, etc.)
- For media queries and responsive design
- For animations and keyframes
- When you need better performance (CSS classes are more efficient)
- For styles that should be reused across multiple components

## React Routing

## 36. What is React Router?

React Router is the standard routing library for React applications. It enables navigation between different components/views in a single-page application (SPA) without refreshing the page, providing a seamless user experience.

**Key Features:**

**Dynamic Routing**
Routes are rendered as part of your application's component tree, allowing for flexible and conditional routing based on application state.

**Nested Routes**
Create hierarchical route structures that match your UI layout, making it easy to build complex applications with multiple levels of navigation.

**URL Parameters**
Extract dynamic values from URLs to display specific content, like user profiles or product details.

**Navigation Control**
Programmatically navigate between routes, intercept navigation attempts, and manage browser history.

**Route Protection**
Implement authentication and authorization by protecting certain routes from unauthorized access.

**Multiple Router Types**
Choose between BrowserRouter (uses HTML5 history API), HashRouter (uses URL hash), MemoryRouter (for testing), and others based on your needs.

### Example:

```jsx
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

// Components
const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to our application!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About Us</h2>
    <p>Learn more about our company.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with us!</p>
  </div>
);

const NotFound = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

const App = () => {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#333',
    marginBottom: '20px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '4px'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#3498db'
  };

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav style={navStyle}>
          <NavLink 
            to="/" 
            exact 
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            style={linkStyle}
            activeStyle={activeLinkStyle}
          >
            Contact
          </NavLink>
        </nav>

        {/* Route Configuration */}
        <div style={{ padding: '20px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
```

---

## 37. How do you create dynamic routes in React?

Dynamic routes in React Router use URL parameters to create flexible paths that can match multiple URLs with a pattern. They're essential for displaying content based on IDs, slugs, or other variable data.

**URL Parameters** are defined using a colon (`:`) syntax in the route path, and can be accessed through the `useParams` hook (v5.1+) or the `match.params` prop.

### Example with Multiple Dynamic Routes:

```jsx
import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  useParams,
  useHistory 
} from 'react-router-dom';

// Sample data
const users = {
  '1': { id: 1, name: 'John Doe', role: 'Developer' },
  '2': { id: 2, name: 'Jane Smith', role: 'Designer' },
  '3': { id: 3, name: 'Bob Johnson', role: 'Manager' }
};

const posts = {
  '101': { id: 101, title: 'Getting Started with React', author: 'John Doe' },
  '102': { id: 102, title: 'Advanced React Patterns', author: 'Jane Smith' },
  '103': { id: 103, title: 'State Management Guide', author: 'Bob Johnson' }
};

// User Profile Component with dynamic route
const UserProfile = () => {
  const { userId } = useParams();
  const history = useHistory();
  const user = users[userId];

  if (!user) {
    return (
      <div>
        <h2>User not found</h2>
        <button onClick={() => history.push('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

// Post Detail Component with dynamic route
const PostDetail = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Post ID:</strong> {post.id}</p>
    </div>
  );
};

// Multi-parameter dynamic route
const UserPost = () => {
  const { userId, postId } = useParams();
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Post View</h2>
      <p>Viewing post {postId} by user {userId}</p>
    </div>
  );
};

// Optional parameter example
const ProductCatalog = () => {
  const { category, subcategory } = useParams();
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Catalog</h2>
      <p><strong>Category:</strong> {category || 'All'}</p>
      {subcategory && <p><strong>Subcategory:</strong> {subcategory}</p>}
    </div>
  );
};

// Home component with links
const Home = () => (
  <div style={{ padding: '20px' }}>
    <h2>Dynamic Routes Demo</h2>
    
    <div style={{ marginTop: '20px' }}>
      <h3>User Profiles:</h3>
      {Object.values(users).map(user => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>

    <div style={{ marginTop: '20px' }}>
      <h3>Blog Posts:</h3>
      {Object.values(posts).map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>

    <div style={{ marginTop: '20px' }}>
      <h3>User Posts:</h3>
      <Link to="/user/1/post/101">John's Post</Link><br />
      <Link to="/user/2/post/102">Jane's Post</Link>
    </div>

    <div style={{ marginTop: '20px' }}>
      <h3>Products (Optional Parameters):</h3>
      <Link to="/products/electronics">Electronics</Link><br />
      <Link to="/products/electronics/laptops">Electronics - Laptops</Link>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        
        {/* Single parameter route */}
        <Route path="/user/:userId" component={UserProfile} />
        <Route path="/post/:postId" component={PostDetail} />
        
        {/* Multiple parameters route */}
        <Route path="/user/:userId/post/:postId" component={UserPost} />
        
        {/* Optional parameters route */}
        <Route path="/products/:category/:subcategory?" component={ProductCatalog} />
      </Switch>
    </Router>
  );
};

export default App;
```

---

## 38. How would you pass data to routes in React Router v5+?

In React Router v5+, there are multiple ways to pass data between routes, each suited for different use cases.

### Method 1: URL Parameters (Best for IDs and Simple Data)

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  return <h2>Product ID: {productId}</h2>;
};

const App = () => (
  <Router>
    <Link to="/product/123">View Product 123</Link>
    <Route path="/product/:productId" component={ProductDetail} />
  </Router>
);
```

### Method 2: Location State (Best for Complex Objects)

```jsx
import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  useLocation,
  useHistory 
} from 'react-router-dom';

// Source component
const UserList = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id} style={{ marginBottom: '10px' }}>
          <Link 
            to={{
              pathname: `/user/${user.id}`,
              state: { user }  // Passing entire user object
            }}
          >
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

// Destination component
const UserDetail = () => {
  const location = useLocation();
  const history = useHistory();
  const user = location.state?.user;

  if (!user) {
    return <div>No user data found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};
```

### Method 3: Query Parameters (Best for Filters and Options)

```jsx
import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  useLocation,
  useHistory 
} from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const history = useHistory();
  
  // Parse query parameters
  const params = new URLSearchParams(location.search);
  const query = params.get('q');
  const category = params.get('category');
  const sort = params.get('sort');

  const updateFilter = (key, value) => {
    params.set(key, value);
    history.push(`${location.pathname}?${params.toString()}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results</h2>
      <p><strong>Query:</strong> {query || 'None'}</p>
      <p><strong>Category:</strong> {category || 'All'}</p>
      <p><strong>Sort:</strong> {sort || 'relevance'}</p>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => updateFilter('sort', 'price')}>
          Sort by Price
        </button>
        <button onClick={() => updateFilter('sort', 'rating')} style={{ marginLeft: '10px' }}>
          Sort by Rating
        </button>
      </div>
    </div>
  );
};

const SearchPage = () => (
  <div style={{ padding: '20px' }}>
    <h2>Search</h2>
    <Link to="/search?q=laptop&category=electronics&sort=price">
      Search Laptops
    </Link>
  </div>
);
```

### Method 4: Using History Push (Programmatic Navigation)

```jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CheckoutForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Navigate with state
    history.push({
      pathname: '/confirmation',
      state: { 
        orderData: formData,
        orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase(),
        timestamp: new Date().toISOString()
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      <input 
        type="text" 
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />
      <input 
        type="email" 
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />
      <input 
        type="text" 
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({...formData, address: e.target.value})}
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
        Complete Order
      </button>
    </form>
  );
};

const Confirmation = () => {
  const location = useLocation();
  const { orderData, orderNumber, timestamp } = location.state || {};

  if (!orderData) {
    return <div>No order data found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Order Confirmation</h2>
      <p><strong>Order Number:</strong> {orderNumber}</p>
      <p><strong>Name:</strong> {orderData.name}</p>
      <p><strong>Email:</strong> {orderData.email}</p>
      <p><strong>Address:</strong> {orderData.address}</p>
      <p><strong>Time:</strong> {new Date(timestamp).toLocaleString()}</p>
    </div>
  );
};
```

### Complete Example App:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', backgroundColor: '#333' }}>
          <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
          <Link to="/users" style={{ color: 'white', margin: '0 10px' }}>Users</Link>
          <Link to="/search" style={{ color: 'white', margin: '0 10px' }}>Search</Link>
          <Link to="/checkout" style={{ color: 'white', margin: '0 10px' }}>Checkout</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={() => <h2 style={{ padding: '20px' }}>Home</h2>} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:id" component={UserDetail} />
          <Route path="/search" component={SearchResults} />
          <Route path="/checkout" component={CheckoutForm} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

**Best Practices:**
- Use URL parameters for data that should be shareable/bookmarkable
- Use location state for temporary data that doesn't need to persist in the URL
- Use query parameters for filters, search terms, and pagination
- Always handle cases where expected data might be missing
- Consider using Context API or state management for data that needs to be accessible across many routes

## 39. How do you programmatically navigate using React Router?

Programmatic navigation in React Router allows you to navigate between routes in response to events, form submissions, authentication changes, or any other logic in your application, rather than just through user clicks on links.

**Main Methods:**

**useHistory Hook (v5.1+)**
The most common and recommended approach for functional components. It provides access to the history instance with methods like `push`, `replace`, `goBack`, and `goForward`.

**history prop**
Available in components rendered by Route, providing the same functionality as the useHistory hook for class components.

**Redirect Component**
Used for declarative navigation based on conditions, typically in render logic.

**withRouter HOC**
Higher-order component that injects router props into components not directly rendered by a Route.

### Example with Multiple Navigation Patterns:

```jsx
import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect,
  useHistory,
  useLocation,
  withRouter
} from 'react-router-dom';

// Example 1: Basic useHistory navigation
const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Get the redirect path from location state, or default to dashboard
  const from = location.state?.from || '/dashboard';

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username && password) {
      // Simulate authentication
      localStorage.setItem('isAuthenticated', 'true');
      
      // Navigate to the intended page or dashboard
      history.push(from);
      
      // Alternative: Replace history (can't go back to login)
      // history.replace(from);
    } else {
      alert('Please enter credentials');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <button 
          type="submit"
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

// Example 2: Navigation with state
const ProductList = () => {
  const history = useHistory();

  const products = [
    { id: 1, name: 'Laptop', price: 999, stock: 5 },
    { id: 2, name: 'Phone', price: 699, stock: 10 },
    { id: 3, name: 'Tablet', price: 399, stock: 0 }
  ];

  const handleProductClick = (product) => {
    // Navigate and pass product data via state
    history.push({
      pathname: `/product/${product.id}`,
      state: { product }
    });
  };

  const handleCheckout = () => {
    // Navigate with query parameters
    history.push('/checkout?step=1&payment=card');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      {products.map(product => (
        <div 
          key={product.id}
          style={{ 
            padding: '15px', 
            margin: '10px 0', 
            border: '1px solid #ddd',
            cursor: 'pointer'
          }}
          onClick={() => handleProductClick(product)}
        >
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}</p>
        </div>
      ))}
      <button 
        onClick={handleCheckout}
        style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
      >
        Go to Checkout
      </button>
    </div>
  );
};

// Example 3: Conditional navigation with Redirect
const Dashboard = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

// Example 4: Navigation history methods
const NavigationControls = () => {
  const history = useHistory();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Navigation Controls</h2>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => history.push('/products')}
          style={{ padding: '10px', margin: '5px', cursor: 'pointer' }}
        >
          Go to Products (Push)
        </button>
        
        <button 
          onClick={() => history.replace('/products')}
          style={{ padding: '10px', margin: '5px', cursor: 'pointer' }}
        >
          Go to Products (Replace)
        </button>
        
        <button 
          onClick={() => history.goBack()}
          style={{ padding: '10px', margin: '5px', cursor: 'pointer' }}
        >
          Go Back
        </button>
        
        <button 
          onClick={() => history.goForward()}
          style={{ padding: '10px', margin: '5px', cursor: 'pointer' }}
        >
          Go Forward
        </button>
        
        <button 
          onClick={() => history.go(-2)}
          style={{ padding: '10px', margin: '5px', cursor: 'pointer' }}
        >
          Go Back 2 Pages
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p><strong>Current Path:</strong> {history.location.pathname}</p>
        <p><strong>History Length:</strong> {history.length}</p>
      </div>
    </div>
  );
};

// Example 5: withRouter HOC for class components
class LegacyComponent extends React.Component {
  handleNavigation = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Legacy Class Component</h2>
        <button onClick={this.handleNavigation}>
          Navigate to Dashboard
        </button>
      </div>
    );
  }
}

const LegacyComponentWithRouter = withRouter(LegacyComponent);

// Example 6: Delayed navigation
const SuccessPage = () => {
  const history = useHistory();
  const [countdown, setCountdown] = useState(5);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          history.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [history]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Success!</h2>
      <p>Redirecting to home in {countdown} seconds...</p>
      <button onClick={() => history.push('/')}>
        Go Now
      </button>
    </div>
  );
};

// Main App
const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', backgroundColor: '#333' }}>
          <a href="/" onClick={(e) => e.preventDefault()} style={{ color: 'white', margin: '0 10px' }}>
            Navigation Demo
          </a>
        </nav>

        <Switch>
          <Route exact path="/" component={NavigationControls} />
          <Route path="/login" component={LoginForm} />
          <Route path="/products" component={ProductList} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/legacy" component={LegacyComponentWithRouter} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

**Key Methods:**

- `history.push(path, [state])` - Adds new entry to history stack
- `history.replace(path, [state])` - Replaces current entry in history
- `history.goBack()` - Equivalent to clicking browser back button
- `history.goForward()` - Equivalent to clicking browser forward button
- `history.go(n)` - Navigate n entries forward (positive) or backward (negative)

---

## 40. What are route guards and how can you implement them in React?

Route guards (also called protected routes or private routes) are mechanisms that control access to specific routes based on conditions like authentication status, user roles, permissions, or other business logic. They prevent unauthorized users from accessing protected content.

**Common Use Cases:**

- Restricting routes to authenticated users only
- Role-based access control (admin, user, guest)
- Feature flags or subscription-based access
- Onboarding flow enforcement
- Age verification or terms acceptance

### Complete Implementation Example:

```jsx
import React, { createContext, useContext, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

// Authentication Context
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, role) => {
    setUser({ username, role });
    localStorage.setItem('user', JSON.stringify({ username, role }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Initialize from localStorage
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Route Guard Components

// 1. Basic Protected Route (Authentication Required)
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

// 2. Role-Based Route Guard
const RoleRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          );
        }

        if (roles && !roles.includes(user.role)) {
          return <Redirect to="/unauthorized" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

// 3. Guest Route (Redirect if already authenticated)
const GuestRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};

// 4. Conditional Route Guard with Custom Logic
const ConditionalRoute = ({ 
  component: Component, 
  condition, 
  redirectTo, 
  ...rest 
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        condition ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

// Components

const LoginPage = () => {
  const { login } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');

  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      login(username, role);
      history.replace(from);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <p>Your role: {user.role}</p>
      <button onClick={handleLogout} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
};

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel</h2>
      <p>Welcome, Admin {user.username}!</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0' }}>
        <h3>Admin Controls</h3>
        <p>This section is only accessible to administrators.</p>
        <button style={{ padding: '10px 20px', margin: '5px', cursor: 'pointer' }}>
          Manage Users
        </button>
        <button style={{ padding: '10px 20px', margin: '5px', cursor: 'pointer' }}>
          System Settings
        </button>
      </div>
    </div>
  );
};

const ModeratorPanel = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Moderator Panel</h2>
      <p>Welcome, Moderator {user.username}!</p>
      <p>You can moderate content but cannot access admin settings.</p>
    </div>
  );
};

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

const UnauthorizedPage = () => {
  const history = useHistory();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>403 - Unauthorized</h2>
      <p>You don't have permission to access this page.</p>
      <button 
        onClick={() => history.goBack()}
        style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '20px' }}
      >
        Go Back
      </button>
    </div>
  );
};

const HomePage = () => {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Home Page</h2>
      {user ? (
        <div>
          <p>Welcome back, {user.username}!</p>
          <button 
            onClick={() => history.push('/dashboard')}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <div>
          <p>Please login to access protected features.</p>
          <button 
            onClick={() => history.push('/login')}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const { user } = useAuth();

  const navStyle = {
    padding: '20px',
    backgroundColor: '#333',
    display: 'flex',
    gap: '15px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 15px',
    backgroundColor: '#555',
    borderRadius: '4px'
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={linkStyle}>Home</a>
      {user ? (
        <>
          <a href="/dashboard" style={linkStyle}>Dashboard</a>
          <a href="/profile" style={linkStyle}>Profile</a>
          {user.role === 'admin' && (
            <a href="/admin" style={linkStyle}>Admin</a>
          )}
          {(user.role === 'admin' || user.role === 'moderator') && (
            <a href="/moderator" style={linkStyle}>Moderator</a>
          )}
        </>
      ) : (
        <a href="/login" style={linkStyle}>Login</a>
      )}
    </nav>
  );
};

// Main App with Route Guards
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navigation />
          
          <Switch>
            <Route exact path="/" component={HomePage} />
            
            {/* Guest Route - Only accessible when not logged in */}
            <GuestRoute path="/login" component={LoginPage} />
            
            {/* Private Route - Requires authentication */}
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            
            {/* Role-Based Routes */}
            <RoleRoute 
              path="/admin" 
              component={AdminPanel} 
              roles={['admin']} 
            />
            <RoleRoute 
              path="/moderator" 
              component={ModeratorPanel} 
              roles={['admin', 'moderator']} 
            />
            
            <Route path="/unauthorized" component={UnauthorizedPage} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
```

**Best Practices:**

- Always preserve the original destination URL so users can be redirected after login
- Provide clear feedback when access is denied (unauthorized page)
- Handle edge cases like expired sessions or invalid tokens
- Use context or state management for authentication state
- Implement loading states while checking authentication
- Consider using middleware or HOCs for consistent guard logic
- Log unauthorized access attempts for security monitoring
- Implement token refresh logic for better UX
- Test guards thoroughly with different user roles and states

## React Patterns



## 41. What are higher-order components (HOCs)?

Higher-Order Components (HOCs) are advanced patterns in React for reusing component logic. An HOC is a function that takes a component and returns a new component with enhanced functionality or additional props.

**Key Characteristics:**

**Reusability**
HOCs allow you to extract common logic and share it across multiple components without repeating code.

**Composition**
They follow the principle of composition over inheritance, making code more flexible and maintainable.

**Props Manipulation**
HOCs can add, modify, or filter props before passing them to the wrapped component.

**Abstraction**
They abstract cross-cutting concerns like authentication, logging, data fetching, or error handling.

**Naming Convention**
HOCs typically start with "with" (e.g., withAuth, withLoading, withLogger).

### Complete HOC Examples:

```jsx
import React, { useState, useEffect } from 'react';

// Example 1: withLoading HOC - Adds loading state
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '24px' }}>⏳</div>
          <p>Loading...</p>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

// Example 2: withAuth HOC - Adds authentication check
const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
      // Simulate auth check
      const checkAuth = () => {
        const auth = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(auth);
        setIsChecking(false);
      };
      
      setTimeout(checkAuth, 500);
    }, []);

    if (isChecking) {
      return <div style={{ padding: '20px' }}>Checking authentication...</div>;
    }

    if (!isAuthenticated) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Access Denied</h2>
          <p>Please log in to view this content.</p>
          <button onClick={() => {
            localStorage.setItem('isAuthenticated', 'true');
            window.location.reload();
          }}>
            Login
          </button>
        </div>
      );
    }

    return <WrappedComponent {...props} isAuthenticated={isAuthenticated} />;
  };
};

// Example 3: withLogger HOC - Adds logging capability
const withLogger = (WrappedComponent) => {
  return function WithLoggerComponent(props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted with props:`, props);
      
      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, [props]);

    const handleClick = (e) => {
      console.log(`Click event in ${WrappedComponent.name}:`, e.target);
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
};

// Example 4: withDataFetching HOC - Adds data fetching logic
const withDataFetching = (url) => (WrappedComponent) => {
  return function WithDataFetchingComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockData = {
            users: [
              { id: 1, name: 'John Doe', email: 'john@example.com' },
              { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ],
            posts: [
              { id: 1, title: 'First Post', content: 'Hello World' },
              { id: 2, title: 'Second Post', content: 'React is awesome' }
            ]
          };
          
          setData(mockData[url] || []);
          setError(null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    if (loading) return <div style={{ padding: '20px' }}>Loading {url}...</div>;
    if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

    return <WrappedComponent {...props} data={data} />;
  };
};

// Example 5: withToggle HOC - Adds toggle functionality
const withToggle = (WrappedComponent) => {
  return function WithToggleComponent(props) {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(prev => !prev);

    return (
      <WrappedComponent 
        {...props} 
        isOn={isOn} 
        toggle={toggle} 
      />
    );
  };
};

// Example 6: Composable HOC - Multiple HOCs combined
const withEnhancements = (Component) => {
  return withAuth(withLogger(withLoading(Component)));
};

// Base Components to wrap

const UserList = ({ data }) => (
  <div style={{ padding: '20px' }}>
    <h2>User List</h2>
    {data && data.map(user => (
      <div key={user.id} style={{ padding: '10px', border: '1px solid #ddd', margin: '10px 0' }}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
);

const PostList = ({ data }) => (
  <div style={{ padding: '20px' }}>
    <h2>Post List</h2>
    {data && data.map(post => (
      <div key={post.id} style={{ padding: '10px', border: '1px solid #ddd', margin: '10px 0' }}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);

const Dashboard = ({ isAuthenticated }) => (
  <div style={{ padding: '20px' }}>
    <h2>Dashboard</h2>
    <p>Welcome! You are {isAuthenticated ? 'authenticated' : 'not authenticated'}.</p>
  </div>
);

const ToggleButton = ({ isOn, toggle }) => (
  <div style={{ padding: '20px' }}>
    <button 
      onClick={toggle}
      style={{ 
        padding: '15px 30px', 
        backgroundColor: isOn ? '#2ecc71' : '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
    <p style={{ marginTop: '10px' }}>Status: {isOn ? 'Active' : 'Inactive'}</p>
  </div>
);

// Enhanced Components
const EnhancedUserList = withDataFetching('users')(withLoading(UserList));
const EnhancedPostList = withDataFetching('posts')(withLoading(PostList));
const SecureDashboard = withAuth(withLogger(Dashboard));
const EnhancedToggle = withToggle(withLogger(ToggleButton));

// Demo App
const App = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Higher-Order Components Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button style={buttonStyle} onClick={() => setShowUsers(!showUsers)}>
          {showUsers ? 'Hide' : 'Show'} Users
        </button>
        <button style={buttonStyle} onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? 'Hide' : 'Show'} Posts
        </button>
      </div>

      {showUsers && <EnhancedUserList isLoading={false} />}
      {showPosts && <EnhancedPostList isLoading={false} />}
      
      <hr style={{ margin: '30px 0' }} />
      
      <SecureDashboard />
      
      <hr style={{ margin: '30px 0' }} />
      
      <EnhancedToggle />
    </div>
  );
};

export default App;
```

**Advantages:**
- Code reusability and DRY principle
- Separation of concerns
- Easy to compose multiple HOCs
- Can be used with any component

**Disadvantages:**
- Can lead to "wrapper hell" with many nested HOCs
- Props collision possible
- Harder to debug
- Modern hooks often provide simpler alternatives

---

## 42. Explain the container/presenter (smart/dumb) component pattern.

The Container/Presenter pattern (also known as Smart/Dumb or Stateful/Stateless pattern) is a design pattern that separates component responsibilities into two distinct categories for better organization, reusability, and testability.

**Container Components (Smart):**
- Manage state and business logic
- Handle data fetching and side effects
- Connect to state management (Redux, Context)
- Pass data and callbacks to presenters
- Usually use hooks or class components
- Focus on "how things work"

**Presenter Components (Dumb):**
- Receive data via props
- Focus purely on UI rendering
- No state management (except local UI state)
- Highly reusable and testable
- Can be pure or functional components
- Focus on "how things look"

### Complete Implementation Example:

```jsx
import React, { useState, useEffect } from 'react';

// ============================================
// PRESENTER COMPONENTS (Dumb/UI Components)
// ============================================

// Pure presentational component - User Card
const UserCard = ({ user, onEdit, onDelete }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    padding: '8px 15px',
    margin: '5px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0 }}>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Status:</strong> <span style={{ color: user.active ? 'green' : 'red' }}>
        {user.active ? 'Active' : 'Inactive'}
      </span></p>
      <div>
        <button 
          style={{ ...buttonStyle, backgroundColor: '#3498db', color: 'white' }}
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
        <button 
          style={{ ...buttonStyle, backgroundColor: '#e74c3c', color: 'white' }}
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

// Presentational component - User List
const UserList = ({ users, onEdit, onDelete, loading, error }) => {
  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading users...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  if (users.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>No users found.</div>;
  }

  return (
    <div>
      <h2>Users ({users.length})</h2>
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

// Presentational component - User Form
const UserForm = ({ user, onSave, onCancel, onChange }) => {
  const formStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 5px 0 0',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px'
  };

  return (
    <div style={formStyle}>
      <h3>{user.id ? 'Edit User' : 'Add New User'}</h3>
      <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={onChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={onChange}
          style={inputStyle}
          required
        />
        <select
          name="role"
          value={user.role}
          onChange={onChange}
          style={inputStyle}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
        <label style={{ display: 'block', margin: '10px 0' }}>
          <input
            type="checkbox"
            name="active"
            checked={user.active}
            onChange={onChange}
            style={{ marginRight: '8px' }}
          />
          Active
        </label>
        <div>
          <button 
            type="submit"
            style={{ ...buttonStyle, backgroundColor: '#2ecc71', color: 'white' }}
          >
            {user.id ? 'Update' : 'Create'}
          </button>
          <button 
            type="button"
            onClick={onCancel}
            style={{ ...buttonStyle, backgroundColor: '#95a5a6', color: 'white' }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

// Presentational component - Filter Bar
const FilterBar = ({ filter, onFilterChange, onAddNew }) => {
  const barStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const selectStyle = {
    padding: '8px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px'
  };

  const buttonStyle = {
    padding: '8px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <div style={barStyle}>
      <div>
        <label style={{ marginRight: '10px' }}>Filter by status:</label>
        <select value={filter} onChange={onFilterChange} style={selectStyle}>
          <option value="all">All Users</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>
      </div>
      <button onClick={onAddNew} style={buttonStyle}>
        + Add New User
      </button>
    </div>
  );
};

// ============================================
// CONTAINER COMPONENT (Smart Component)
// ============================================

const UserManagementContainer = () => {
  // State management
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Initial form state
  const emptyUser = {
    id: null,
    name: '',
    email: '',
    role: 'user',
    active: true
  };

  const [formData, setFormData] = useState(emptyUser);

  // Data fetching (simulated)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', active: true },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', active: true },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', active: false },
          { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'moderator', active: true }
        ];
        
        setUsers(mockUsers);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = users;
    
    if (filter === 'active') {
      filtered = users.filter(user => user.active);
    } else if (filter === 'inactive') {
      filtered = users.filter(user => !user.active);
    }
    
    setFilteredUsers(filtered);
  }, [users, filter]);

  // Business logic - handlers
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddNew = () => {
    setFormData(emptyUser);
    setEditingUser(null);
    setShowForm(true);
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    if (editingUser) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUser.id ? { ...formData } : user
      ));
    } else {
      // Add new user
      const newUser = {
        ...formData,
        id: Math.max(...users.map(u => u.id), 0) + 1
      };
      setUsers([...users, newUser]);
    }
    
    handleCancel();
  };

  const handleCancel = () => {
    setFormData(emptyUser);
    setEditingUser(null);
    setShowForm(false);
  };

  // Render - Container passes data and handlers to presenters
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>User Management System</h1>
      
      {showForm && (
        <UserForm
          user={formData}
          onSave={handleSave}
          onCancel={handleCancel}
          onChange={handleFormChange}
        />
      )}
      
      <FilterBar
        filter={filter}
        onFilterChange={handleFilterChange}
        onAddNew={handleAddNew}
      />
      
      <UserList
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default UserManagementContainer;
```

**Benefits:**
- **Separation of Concerns**: Logic and UI are separated
- **Reusability**: Presenters can be reused with different containers
- **Testability**: Presenters are easy to test (just props in, UI out)
- **Maintainability**: Changes to logic don't affect UI and vice versa
- **Collaboration**: Designers can work on presenters, developers on containers

**Modern Approach:**
With hooks, the distinction is less strict. Custom hooks often replace container logic while keeping components presentational.

---

# 43. How would you implement a compound component pattern in React?

The **Compound Component Pattern** allows you to create a set of components that work together to share implicit state, providing a flexible and expressive API.

## Key Concepts:
- Components share state without prop drilling
- Uses React Context API
- Provides flexible, declarative API
- Parent manages state, children consume it

## Implementation Example:

```javascript
import React, { useState, createContext, useContext } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Create Context for sharing state
const AccordionContext = createContext();

// Custom hook to use accordion context
const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion compound components must be used within Accordion');
  }
  return context;
};

// Main Accordion Component (Parent)
const Accordion = ({ children, defaultIndex = null }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, toggle }}>
      <div className="w-full max-w-2xl mx-auto space-y-2">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Item Component
const AccordionItem = ({ children, index }) => {
  const { activeIndex } = useAccordionContext();
  const isActive = activeIndex === index;

  return (
    <div className={`border rounded-lg overflow-hidden transition-all ${
      isActive ? 'border-blue-500 shadow-md' : 'border-gray-200'
    }`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { index, isActive })
      )}
    </div>
  );
};

// Header Component
const AccordionHeader = ({ children, index, isActive }) => {
  const { toggle } = useAccordionContext();

  return (
    <button
      onClick={() => toggle(index)}
      className={`w-full px-6 py-4 flex items-center justify-between text-left font-medium transition-colors ${
        isActive ? 'bg-blue-50 text-blue-700' : 'bg-white hover:bg-gray-50'
      }`}
    >
      <span>{children}</span>
      {isActive ? (
        <ChevronUp className="w-5 h-5" />
      ) : (
        <ChevronDown className="w-5 h-5" />
      )}
    </button>
  );
};

// Content Component
const AccordionContent = ({ children, isActive }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isActive ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <div className="px-6 py-4 bg-gray-50 text-gray-700">
        {children}
      </div>
    </div>
  );
};

// Attach sub-components to main component
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

// Demo Application
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Compound Component Pattern
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Flexible, declarative accordion with shared state
        </p>

        <Accordion defaultIndex={0}>
          <Accordion.Item index={0}>
            <Accordion.Header>What is the Compound Component Pattern?</Accordion.Header>
            <Accordion.Content>
              The Compound Component Pattern is a React design pattern where multiple
              components work together by sharing implicit state through Context API.
              This allows for flexible composition while maintaining a clean API.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item index={1}>
            <Accordion.Header>Key Benefits</Accordion.Header>
            <Accordion.Content>
              <ul className="list-disc list-inside space-y-2">
                <li>Flexible API that's easy to understand</li>
                <li>No prop drilling required</li>
                <li>Components can be rearranged freely</li>
                <li>Cleaner, more maintainable code</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item index={2}>
            <Accordion.Header>Common Use Cases</Accordion.Header>
            <Accordion.Content>
              This pattern is perfect for UI components like accordions, tabs, dropdowns,
              select menus, and any component where multiple parts need to coordinate
              behavior while maintaining flexibility in composition.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item index={3}>
            <Accordion.Header>Technical Implementation</Accordion.Header>
            <Accordion.Content>
              Uses React Context to share state between parent and children. The parent
              component manages state and provides it via Context Provider, while child
              components consume the context using custom hooks.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>

        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Pattern Structure:</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>{`<Accordion>
  <Accordion.Item index={0}>
    <Accordion.Header>Title</Accordion.Header>
    <Accordion.Content>Content</Accordion.Content>
  </Accordion.Item>
</Accordion>`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
```

# 44. Explain the use of custom hooks in React

**Custom Hooks** are reusable functions that encapsulate stateful logic and can be shared across multiple components. They follow the "use" naming convention and can use other React hooks.

## Key Benefits:
- **Reusability**: Share logic between components
- **Separation of Concerns**: Extract complex logic from components
- **Composition**: Combine multiple hooks together
- **Testability**: Easier to test logic in isolation

## Implementation Examples:

```javascript
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Wifi, WifiOff, Copy, Check, MousePointer2 } from 'lucide-react';

// 1. useLocalStorage - Persist state in localStorage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// 2. useOnlineStatus - Track online/offline status
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

// 3. useDebounce - Debounce any value
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// 4. useCopyToClipboard - Copy text to clipboard
const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      setIsCopied(false);
      return false;
    }
  }, []);

  return [isCopied, copyToClipboard];
};

// 5. useMousePosition - Track mouse position
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

// 6. useToggle - Boolean toggle hook
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle, setValue];
};

// Demo Component
export default function App() {
  const [name, setName] = useLocalStorage('userName', '');
  const isOnline = useOnlineStatus();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [isCopied, copyToClipboard] = useCopyToClipboard();
  const mousePosition = useMousePosition();
  const [showMouse, toggleShowMouse] = useToggle(false);

  const codeExample = `const [value, setValue] = useLocalStorage('key', 'default');`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Custom Hooks in React
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Reusable stateful logic across components
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* useLocalStorage Demo */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. useLocalStorage
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Persists state in browser storage
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="mt-3 text-sm text-gray-700">
              {name ? `Stored: ${name}` : 'Type to save in localStorage'}
            </p>
          </div>

          {/* useOnlineStatus Demo */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. useOnlineStatus
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Tracks network connectivity
            </p>
            <div className={`flex items-center gap-3 p-4 rounded-lg ${
              isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {isOnline ? <Wifi className="w-6 h-6" /> : <WifiOff className="w-6 h-6" />}
              <span className="font-medium">
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Try disconnecting your network to test
            </p>
          </div>

          {/* useDebounce Demo */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. useDebounce
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Delays value update (500ms)
            </p>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type to search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="mt-3 space-y-1">
              <p className="text-sm text-gray-600">
                Current: <span className="font-mono">{searchTerm}</span>
              </p>
              <p className="text-sm text-purple-600">
                Debounced: <span className="font-mono">{debouncedSearch}</span>
              </p>
            </div>
          </div>

          {/* useCopyToClipboard Demo */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. useCopyToClipboard
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Copy text with feedback
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs mb-3">
              {codeExample}
            </div>
            <button
              onClick={() => copyToClipboard(codeExample)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isCopied
                  ? 'bg-green-500 text-white'
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Code
                </>
              )}
            </button>
          </div>

          {/* useMousePosition Demo */}
          <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  5. useMousePosition
                </h2>
                <p className="text-sm text-gray-600">
                  Tracks cursor coordinates
                </p>
              </div>
              <button
                onClick={toggleShowMouse}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                {showMouse ? 'Hide' : 'Show'} Tracker
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 relative h-48 overflow-hidden">
              <div className="text-lg font-mono text-gray-700">
                X: {mousePosition.x}px, Y: {mousePosition.y}px
              </div>
              {showMouse && (
                <div
                  className="absolute w-4 h-4 bg-purple-500 rounded-full pointer-events-none transition-all duration-75"
                  style={{
                    left: `${(mousePosition.x % 300)}px`,
                    top: `${(mousePosition.y % 150)}px`,
                  }}
                >
                  <MousePointer2 className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Custom Hook Benefits */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Why Use Custom Hooks?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800">Reusability</h3>
              <p className="text-sm text-gray-600">
                Share complex logic across multiple components without duplication
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800">Clean Code</h3>
              <p className="text-sm text-gray-600">
                Extract logic from components, making them simpler and more focused
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800">Composability</h3>
              <p className="text-sm text-gray-600">
                Combine multiple hooks to create more complex behaviors
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-800">Testability</h3>
              <p className="text-sm text-gray-600">
                Test logic independently without rendering components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

## Summary

**Compound Component Pattern:**
- Creates flexible, declarative APIs
- Uses Context to share state implicitly
- Perfect for UI components like tabs, accordions, dropdowns
- Components work together as a cohesive unit

**Custom Hooks:**
- Encapsulate and reuse stateful logic
- Must start with "use" prefix
- Can combine multiple built-in hooks
- Make components cleaner and more maintainable

Both patterns are essential for building scalable, maintainable React applications!

# 45. What is a Render Prop Pattern?

The **Render Prop Pattern** is a technique where a component receives a function as a prop that returns a React element, allowing you to share code between components using a prop whose value is a function.

## Key Concepts:
- **Function as a Prop**: Component accepts a function that returns JSX
- **Inversion of Control**: Child controls what to render, parent controls logic
- **Flexible Rendering**: Consumer decides how to use the provided data
- **Code Reusability**: Share stateful logic without inheritance

## Implementation Examples:

```javascript
import React, { useState, useEffect } from 'react';
import { MousePointer2, Eye, Zap, Database } from 'lucide-react';

// 1. Mouse Tracker - Classic Render Prop Example
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
};

// 2. Toggle Component with Render Prop
const Toggle = ({ render }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);
  const turnOn = () => setIsOn(true);
  const turnOff = () => setIsOn(false);

  return render({ isOn, toggle, turnOn, turnOff });
};

// 3. Data Fetcher with Render Prop
const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (mounted) {
          // Mock data based on URL
          const mockData = {
            users: [
              { id: 1, name: 'Alice Johnson', role: 'Developer' },
              { id: 2, name: 'Bob Smith', role: 'Designer' },
              { id: 3, name: 'Carol White', role: 'Manager' }
            ]
          };
          setData(mockData);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return render({ data, loading, error });
};

// 4. Viewport Observer with Render Prop
const ViewportObserver = ({ render }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return render({ isVisible, dimensions });
};

// Demo Application
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Render Prop Pattern
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Share code between components using a function prop
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Example 1: Mouse Tracker */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MousePointer2 className="w-6 h-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-800">
                1. Mouse Tracker
              </h2>
            </div>
            
            <MouseTracker
              render={({ x, y }) => (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6 h-48 relative overflow-hidden">
                    <div
                      className="absolute w-8 h-8 bg-indigo-500 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 flex items-center justify-center"
                      style={{ left: `${(x % 400)}px`, top: `${(y % 150)}px` }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow">
                      <p className="text-sm font-mono text-gray-700">
                        X: {x}px, Y: {y}px
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono overflow-x-auto">
                    {`<MouseTracker
  render={({ x, y }) => (
    <div>X: {x}, Y: {y}</div>
  )}
/>`}
                  </div>
                </div>
              )}
            />
          </div>

          {/* Example 2: Toggle Component */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-800">
                2. Toggle Component
              </h2>
            </div>
            
            <Toggle
              render={({ isOn, toggle, turnOn, turnOff }) => (
                <div className="space-y-4">
                  <div className={`p-6 rounded-lg transition-all duration-300 ${
                    isOn 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100' 
                      : 'bg-gradient-to-r from-gray-100 to-slate-100'
                  }`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOn ? 'bg-green-500 scale-110' : 'bg-gray-400'
                      }`}>
                        <Zap className={`w-8 h-8 transition-all duration-300 ${
                          isOn ? 'text-white' : 'text-gray-200'
                        }`} />
                      </div>
                    </div>
                    <p className="text-center text-lg font-semibold text-gray-700">
                      Status: {isOn ? 'ON' : 'OFF'}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={toggle}
                      className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      Toggle
                    </button>
                    <button
                      onClick={turnOn}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      On
                    </button>
                    <button
                      onClick={turnOff}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Off
                    </button>
                  </div>

                  <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono overflow-x-auto">
                    {`<Toggle
  render={({ isOn, toggle }) => (
    <button onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )}
/>`}
                  </div>
                </div>
              )}
            />
          </div>

          {/* Example 3: Data Fetcher */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-6 h-6 text-pink-500" />
              <h2 className="text-xl font-semibold text-gray-800">
                3. Data Fetcher
              </h2>
            </div>
            
            <DataFetcher
              url="/api/users"
              render={({ data, loading, error }) => (
                <div className="space-y-4">
                  {loading && (
                    <div className="flex items-center justify-center p-8">
                      <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                      Error: {error}
                    </div>
                  )}
                  
                  {data && !loading && (
                    <div className="space-y-2">
                      {data.users.map(user => (
                        <div
                          key={user.id}
                          className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200"
                        >
                          <p className="font-semibold text-gray-800">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.role}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono overflow-x-auto">
                    {`<DataFetcher url="/api/users"
  render={({ data, loading }) => (
    loading ? <Spinner /> : <List data={data} />
  )}
/>`}
                  </div>
                </div>
              )}
            />
          </div>

          {/* Example 4: Viewport Observer */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-800">
                4. Viewport Observer
              </h2>
            </div>
            
            <ViewportObserver
              render={({ isVisible, dimensions }) => (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          isVisible ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <span className="font-semibold text-gray-700">
                          Tab {isVisible ? 'Visible' : 'Hidden'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/50 p-3 rounded">
                          <p className="text-xs text-gray-600 mb-1">Width</p>
                          <p className="text-lg font-bold text-gray-800">
                            {dimensions.width}px
                          </p>
                        </div>
                        <div className="bg-white/50 p-3 rounded">
                          <p className="text-xs text-gray-600 mb-1">Height</p>
                          <p className="text-lg font-bold text-gray-800">
                            {dimensions.height}px
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 italic">
                        Try resizing window or switching tabs
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono overflow-x-auto">
                    {`<ViewportObserver
  render={({ isVisible, dimensions }) => (
    <div>
      Visible: {isVisible}
      Size: {dimensions.width}x{dimensions.height}
    </div>
  )}
/>`}
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* Pattern Comparison */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Render Props vs Other Patterns
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700">Pattern</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Pros</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-indigo-600">Render Props</td>
                  <td className="p-3 text-gray-600">Flexible, explicit data flow</td>
                  <td className="p-3 text-gray-600">Callback hell, verbose</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-purple-600">Custom Hooks</td>
                  <td className="p-3 text-gray-600">Clean, reusable, composable</td>
                  <td className="p-3 text-gray-600">Functional components only</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-pink-600">HOC</td>
                  <td className="p-3 text-gray-600">Works with class components</td>
                  <td className="p-3 text-gray-600">Wrapper hell, prop collision</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">💡 Modern Approach</h3>
            <p className="text-sm text-gray-700">
              While render props are still valid, <strong>Custom Hooks</strong> are now 
              the preferred pattern for sharing stateful logic in modern React applications. 
              They offer cleaner syntax and better composition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

```



## Summary

### Render Prop Pattern:

**What it is:**
- A component that takes a function prop and calls it to determine what to render
- The function receives data/methods from the component and returns JSX

**Key Benefits:**
- ✅ Flexible rendering logic controlled by consumer
- ✅ Explicit data flow
- ✅ Works with both class and functional components
- ✅ Easy to understand what data is available

**Common Use Cases:**
- Mouse/keyboard tracking
- Data fetching with loading states
- Toggle/modal logic
- Viewport/scroll detection
- Animation controllers

**Modern Alternative:**
Most render prop patterns can now be replaced with **Custom Hooks**, which offer cleaner syntax and better composition. However, render props remain useful when you need more control over the rendering logic or when working with class components.

**Syntax Variations:**
```javascript
// Traditional render prop
<Component render={(data) => <div>{data}</div>} />

// Children as function
<Component>
  {(data) => <div>{data}</div>}
</Component>
```

Both patterns achieve the same goal: sharing logic while giving consumers control over presentation!

## Form Handling

# React Forms: Complete Guide with Examples

## 46. How do you handle forms in React?

Forms in React are handled by managing form data through state and handling form events. There are two main approaches: **controlled components** (React manages form state) and **uncontrolled components** (DOM manages form state).

### Basic Form Handling Example

```jsx
import { useState } from 'react';

function BasicForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', formData);
    // Process form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Handling Different Input Types

```jsx
function ComplexForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    country: '',
    hobbies: [],
    newsletter: false,
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'newsletter') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle multiple checkboxes (hobbies)
        setFormData(prev => ({
          ...prev,
          hobbies: checked
            ? [...prev.hobbies, value]
            : prev.hobbies.filter(h => h !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text Input */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* Radio Buttons */}
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
        Female
      </label>

      {/* Select Dropdown */}
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
        <option value="india">India</option>
      </select>

      {/* Checkboxes */}
      <label>
        <input
          type="checkbox"
          name="hobbies"
          value="reading"
          checked={formData.hobbies.includes('reading')}
          onChange={handleChange}
        />
        Reading
      </label>
      <label>
        <input
          type="checkbox"
          name="hobbies"
          value="sports"
          checked={formData.hobbies.includes('sports')}
          onChange={handleChange}
        />
        Sports
      </label>

      {/* Single Checkbox */}
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>

      {/* Textarea */}
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 47. What are Controlled and Uncontrolled Components?

### **Controlled Components**

In controlled components, form data is handled by React state. The input's value is controlled by React, making React the "single source of truth."

**Characteristics:**
- React state controls the input value
- Value updates through `onChange` handler
- More control and predictability
- Easier to implement validation
- Required for dynamic form behavior

```jsx
function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value} // Controlled by React state
        onChange={handleChange}
      />
      <p>Current value: {value}</p>
    </div>
  );
}
```

**Advanced Controlled Example:**

```jsx
function ControlledFormExample() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email });
  };

  // Convert to uppercase as user types
  const handleUsernameChange = (e) => {
    setUsername(e.target.value.toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username (auto-uppercase)"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
      
      <div>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </form>
  );
}
```

### **Uncontrolled Components**

In uncontrolled components, form data is handled by the DOM itself. You access values using refs instead of state.

**Characteristics:**
- DOM maintains the input state
- Use `ref` to access values when needed
- Less React code required
- Closer to traditional HTML forms
- Useful for integrating with non-React code

```jsx
import { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access value directly from DOM
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef} // Uncontrolled - no value prop
        defaultValue="Initial value" // Use defaultValue, not value
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**Complete Uncontrolled Form Example:**

```jsx
function UncontrolledFormExample() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      file: fileRef.current.files[0]
    };
    
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameRef}
        defaultValue="John Doe"
        placeholder="Name"
      />
      
      <input
        type="email"
        ref={emailRef}
        placeholder="Email"
      />
      
      <select ref={genderRef} defaultValue="male">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      
      {/* File inputs are always uncontrolled */}
      <input
        type="file"
        ref={fileRef}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

### **Comparison Table**

| Feature | Controlled | Uncontrolled |
|---------|-----------|--------------|
| Data source | React state | DOM |
| Access value | Via state variable | Via ref |
| Real-time validation | Easy | Difficult |
| Dynamic behavior | Easy | Limited |
| Code complexity | More verbose | Less code |
| Performance | Re-renders on change | No re-renders |
| Use case | Most forms | Simple forms, file inputs |

---

## 48. How do you validate forms in React?

### **1. Basic Manual Validation**

```jsx
function BasicValidation() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form is valid:', formData);
      // Submit form
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

### **2. Real-time Validation**

```jsx
function RealtimeValidation() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'username':
        if (!value) {
          error = 'Username is required';
        } else if (value.length < 3) {
          error = 'Username must be at least 3 characters';
        }
        break;

      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          error = 'Password must contain uppercase, lowercase, and number';
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate only if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      username: true,
      email: true,
      password: true,
      confirmPassword: true
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <span style={{ color: 'red' }}>{errors.username}</span>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span style={{ color: 'red' }}>{errors.email}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span style={{ color: 'red' }}>{errors.password}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm Password"
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
```

### **3. Custom Validation Hook**

```jsx
function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
    
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  };
}

// Usage
function FormWithCustomHook() {
  const validate = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    return errors;
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormValidation(
    { email: '', password: '' },
    validate
  );

  const onSubmit = () => {
    console.log('Form submitted:', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span style={{ color: 'red' }}>{errors.email}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span style={{ color: 'red' }}>{errors.password}</span>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
```

### **4. HTML5 Validation**

```jsx
function HTML5Validation() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if form is valid using HTML5 validation
    if (e.target.checkValidity()) {
      const formData = new FormData(e.target);
      console.log('Form data:', Object.fromEntries(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
      />
      
      <input
        type="password"
        name="password"
        required
        minLength={8}
        placeholder="Password (min 8 chars)"
      />
      
      <input
        type="url"
        name="website"
        placeholder="Website URL"
      />
      
      <input
        type="number"
        name="age"
        min={18}
        max={100}
        placeholder="Age (18-100)"
      />
      
      <input
        type="text"
        name="phone"
        pattern="[0-9]{10}"
        placeholder="Phone (10 digits)"
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

### **Popular Validation Libraries**

For complex forms, consider using validation libraries:

1. **Formik** - Full-featured form library
2. **React Hook Form** - Performance-focused with minimal re-renders
3. **Yup** - Schema validation library (works great with Formik)
4. **Zod** - TypeScript-first schema validation

These libraries handle validation, error messages, touched states, and submission automatically, reducing boilerplate code significantly.

# Formik and File Uploads in React

## 49. What is Formik and how is it used in React forms?

**Formik** is a popular open-source library for building forms in React. It helps manage form state, validation, error messages, and form submission with minimal boilerplate code.

### **Why Use Formik?**

**Problems it solves:**
- Managing form state (values, errors, touched fields)
- Form validation and error messages
- Handling form submission
- Reducing repetitive code
- Complex form scenarios (arrays, nested objects)

### **Basic Formik Example**

```jsx
import { useFormik } from 'formik';

function BasicFormikExample() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: values => {
      const errors = {};
      
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }
      
      return errors;
    },
    onSubmit: values => {
      console.log('Form submitted:', values);
      // API call here
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

### **Formik with Yup Validation**

Yup is a schema validation library that works seamlessly with Formik.

```jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikWithYup() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      website: '',
      terms: false
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      age: Yup.number()
        .min(18, 'Must be at least 18 years old')
        .max(100, 'Must be less than 100')
        .required('Age is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
      website: Yup.string()
        .url('Must be a valid URL'),
      terms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
    }),
    onSubmit: values => {
      console.log('Form values:', values);
      // Submit to API
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
        )}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          {...formik.getFieldProps('age')}
        />
        {formik.touched.age && formik.errors.age && (
          <div style={{ color: 'red' }}>{formik.errors.age}</div>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          {...formik.getFieldProps('confirmPassword')}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
        )}
      </div>

      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          {...formik.getFieldProps('website')}
        />
        {formik.touched.website && formik.errors.website && (
          <div style={{ color: 'red' }}>{formik.errors.website}</div>
        )}
      </div>

      <div>
        <label>
          <input
            name="terms"
            type="checkbox"
            {...formik.getFieldProps('terms')}
          />
          I accept the terms and conditions
        </label>
        {formik.touched.terms && formik.errors.terms && (
          <div style={{ color: 'red' }}>{formik.errors.terms}</div>
        )}
      </div>

      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
}
```

### **Using Formik Components (Declarative Approach)**

```jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikComponentsExample() {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    gender: Yup.string()
      .required('Please select a gender'),
    country: Yup.string()
      .required('Please select a country'),
    hobbies: Yup.array()
      .min(1, 'Select at least one hobby'),
    bio: Yup.string()
      .max(200, 'Bio must be 200 characters or less')
  });

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        gender: '',
        country: '',
        hobbies: [],
        bio: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log('Form submitted:', values);
          setSubmitting(false);
          resetForm();
        }, 1000);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Gender</label>
            <div role="group">
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <Field type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
            <ErrorMessage name="gender" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <Field as="select" name="country">
              <option value="">Select a country</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="india">India</option>
              <option value="canada">Canada</option>
            </Field>
            <ErrorMessage name="country" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Hobbies</label>
            <div role="group">
              <label>
                <Field type="checkbox" name="hobbies" value="reading" />
                Reading
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="sports" />
                Sports
              </label>
              <label>
                <Field type="checkbox" name="hobbies" value="music" />
                Music
              </label>
            </div>
            <ErrorMessage name="hobbies" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <Field as="textarea" name="bio" rows="4" />
            <ErrorMessage name="bio" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {/* Display current values */}
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}
```

### **Formik with FieldArray (Dynamic Forms)**

```jsx
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function DynamicFormWithFieldArray() {
  const validationSchema = Yup.object({
    friends: Yup.array()
      .of(
        Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email').required('Email is required')
        })
      )
      .min(1, 'Add at least one friend')
  });

  return (
    <Formik
      initialValues={{
        friends: [{ name: '', email: '' }]
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log('Friends list:', values);
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="friends">
            {({ push, remove }) => (
              <div>
                <h3>Friends List</h3>
                {values.friends.map((friend, index) => (
                  <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <h4>Friend {index + 1}</h4>
                    
                    <div>
                      <label>Name</label>
                      <Field name={`friends.${index}.name`} />
                      <ErrorMessage 
                        name={`friends.${index}.name`} 
                        component="div" 
                        style={{ color: 'red' }} 
                      />
                    </div>

                    <div>
                      <label>Email</label>
                      <Field name={`friends.${index}.email`} type="email" />
                      <ErrorMessage 
                        name={`friends.${index}.email`} 
                        component="div" 
                        style={{ color: 'red' }} 
                      />
                    </div>

                    {values.friends.length > 1 && (
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    )}
                  </div>
                ))}

                <button type="button" onClick={() => push({ name: '', email: '' })}>
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
```

### **Formik Key Features Summary**

| Feature | Description |
|---------|-------------|
| `initialValues` | Initial form values |
| `validationSchema` | Yup schema for validation |
| `validate` | Custom validation function |
| `onSubmit` | Form submission handler |
| `getFieldProps` | Returns onChange, onBlur, value, and name |
| `touched` | Tracks which fields have been visited |
| `errors` | Validation error messages |
| `isSubmitting` | Boolean for submit state |
| `resetForm` | Resets form to initial state |
| `setFieldValue` | Manually set field value |
| `setFieldError` | Manually set field error |

---

# How to Handle File Uploads in React

File uploads in React are handled through controlled or uncontrolled components using the HTML `<input type="file">` element. Here's a comprehensive guide with examples:

## Basic File Upload

```jsx
import { useState } from 'react';

function FileUploadBasic() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log('File to upload:', selectedFile);
      // Upload logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>Selected: {selectedFile.name}</p>}
      <button type="submit">Upload</button>
    </form>
  );
}
```

## Complete File Upload with Preview

```jsx
import { useState } from 'react';

function FileUploadWithPreview() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      setSelectedFile(file);
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Upload successful:', data);
        alert('File uploaded successfully!');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed!');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleFileChange}
        accept="image/*"
      />
      
      {preview && (
        <div>
          <img src={preview} alt="Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}
      
      {selectedFile && (
        <div>
          <p>File: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload File'}
          </button>
        </div>
      )}
    </div>
  );
}
```

## Multiple File Upload

```jsx
import { useState } from 'react';

function MultipleFileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });

    try {
      const response = await fetch('/api/upload-multiple', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('All files uploaded successfully');
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        multiple 
        onChange={handleFileChange}
      />
      
      {files.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <button onClick={handleUpload}>Upload All</button>
        </div>
      )}
    </div>
  );
}
```

## Drag and Drop File Upload

```jsx
import { useState } from 'react';

function DragDropUpload() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: isDragging ? '2px dashed blue' : '2px dashed gray',
          padding: '40px',
          textAlign: 'center',
          backgroundColor: isDragging ? '#f0f0f0' : 'white'
        }}
      >
        <p>Drag and drop files here</p>
        <p>or</p>
        <input type="file" multiple onChange={handleFileInput} />
      </div>

      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## Key Concepts

**File Input Element**: Use `<input type="file">` to allow file selection.

**FileList Object**: `e.target.files` returns a FileList object containing selected files.

**FormData API**: Used to construct key-value pairs for file uploads, especially for multipart/form-data.

**FileReader API**: Used to read file contents and create previews (especially for images).

**File Validation**: Check file type, size, and other properties before upload.

**Multiple Files**: Add the `multiple` attribute to allow selecting multiple files.

**Accept Attribute**: Use `accept="image/*"` or `accept=".pdf,.doc"` to filter file types.

## Important Notes

- Always validate file size and type on both client and server side
- Use FormData to send files with other form data
- Handle loading states during upload
- Provide feedback to users about upload progress
- Clean up object URLs created with `URL.createObjectURL()` to prevent memory leaks
- Consider using libraries like `react-dropzone` for advanced file upload features

## React with TypeScript

# TypeScript with React - Complete Guide

## 51. Benefits of Using TypeScript with React

TypeScript provides numerous advantages when working with React applications:

### **Type Safety**
Catches errors at compile-time rather than runtime, reducing bugs in production.

```tsx
// TypeScript catches this error before running
const MyComponent = ({ name }: { name: string }) => {
  return <div>{name}</div>;
};

// Error: Type 'number' is not assignable to type 'string'
<MyComponent name={123} />
```

### **Better IDE Support**
Enhanced autocomplete, IntelliSense, and refactoring capabilities.

### **Self-Documenting Code**
Types serve as inline documentation for component APIs.

```tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

// Clear understanding of what props are available and their types
```

### **Easier Refactoring**
TypeScript helps track changes across the codebase when refactoring.

### **Better Team Collaboration**
Explicit contracts between components make it easier for teams to work together.

### **Prevents Common Mistakes**
- Misspelled prop names
- Missing required props
- Incorrect prop types
- Accessing undefined properties

### **Enhanced Component Reusability**
Generic types allow creating flexible, reusable components.

---

## 52. How to Define Types for Props and State in TypeScript with React

### **Defining Props Types**

```tsx
import { FC } from 'react';

// Method 1: Inline type definition
const Greeting = ({ name, age }: { name: string; age: number }) => {
  return <div>Hello {name}, you are {age} years old</div>;
};

// Method 2: Type alias
type UserProps = {
  name: string;
  age: number;
  email?: string; // Optional prop
};

const UserCard = ({ name, age, email }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {email && <p>Email: {email}</p>}
    </div>
  );
};

// Method 3: Using FC (Functional Component) type
const Profile: FC<UserProps> = ({ name, age, email }) => {
  return <div>{name}</div>;
};
```

### **Props with Children**

```tsx
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  title: string;
};

const Container = ({ children, title }: ContainerProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
```

### **Props with Functions**

```tsx
type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onHover?: () => void;
  label: string;
};

const Button = ({ onClick, onHover, label }: ButtonProps) => {
  return (
    <button onClick={onClick} onMouseEnter={onHover}>
      {label}
    </button>
  );
};
```

### **Defining State Types**

```tsx
import { useState } from 'react';

// Simple state
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

// Complex state object
type User = {
  id: number;
  name: string;
  email: string;
};

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  
  const loadUser = () => {
    setUser({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    });
  };
  
  return <div>{user?.name}</div>;
};

// Array state
const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  
  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };
  
  return <div>{todos.length} todos</div>;
};
```

### **State with Complex Types**

```tsx
type FormState = {
  username: string;
  email: string;
  age: number;
  isSubmitting: boolean;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormState>({
    username: '',
    email: '',
    age: 0,
    isSubmitting: false
  });
  
  const handleChange = (field: keyof FormState, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return <form>{/* form fields */}</form>;
};
```

---

## 53. Using Interfaces with React Components and TypeScript

### **Basic Interface Definition**

```tsx
interface UserProps {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

const UserComponent = ({ id, name, email, isActive = true }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{isActive ? 'Active' : 'Inactive'}</span>
    </div>
  );
};
```

### **Extending Interfaces**

```tsx
interface BaseProps {
  id: number;
  createdAt: Date;
}

interface ProductProps extends BaseProps {
  name: string;
  price: number;
  inStock: boolean;
}

const Product = ({ id, name, price, inStock, createdAt }: ProductProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};
```

### **Interface with Event Handlers**

```tsx
interface FormProps {
  onSubmit: (data: FormData) => void;
  onChange: (field: string, value: string) => void;
  initialValues?: Record<string, string>;
}

interface FormData {
  username: string;
  password: string;
}

const LoginForm = ({ onSubmit, onChange, initialValues }: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username: 'test', password: 'test123' });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => onChange('username', e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};
```

### **Generic Interfaces**

```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  onItemClick?: (item: T) => void;
}

const List = <T,>({ items, renderItem, onItemClick }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li 
          key={index} 
          onClick={() => onItemClick?.(item)}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

// Usage
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

<List 
  items={users} 
  renderItem={(user) => <span>{user.name}</span>}
  onItemClick={(user) => console.log(user.id)}
/>
```

### **Interface with Children**

```tsx
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  variant?: 'default' | 'primary' | 'danger';
}

const Card = ({ title, children, footer, variant = 'default' }: CardProps) => {
  return (
    <div className={`card card-${variant}`}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};
```

### **Interface vs Type - When to Use Each**

```tsx
// Use Interface for object shapes (preferred for React components)
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Use Type for unions, intersections, and primitives
type Status = 'pending' | 'success' | 'error';
type ButtonVariant = 'primary' | 'secondary' | 'danger';

// Interfaces can be merged (declaration merging)
interface Window {
  customProperty: string;
}

interface Window {
  anotherProperty: number;
}

// Types cannot be merged but can create intersections
type A = { a: string };
type B = { b: number };
type C = A & B; // { a: string; b: number }
```

### **Complex Component with Interfaces**

```tsx
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormField {
  name: string;
  value: string;
  type: 'text' | 'email' | 'password';
  required: boolean;
}

interface ValidationError {
  field: string;
  message: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
  onValidationError?: (errors: ValidationError[]) => void;
}

const DynamicForm = ({ fields, onSubmit, onValidationError }: FormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = (): boolean => {
    const newErrors: ValidationError[] = [];
    
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors.push({
          field: field.name,
          message: `${field.name} is required`
        });
      }
    });

    setErrors(newErrors);
    if (newErrors.length > 0 && onValidationError) {
      onValidationError(newErrors);
    }
    
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name}>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            required={field.required}
          />
          {errors.find(e => e.field === field.name) && (
            <span className="error">
              {errors.find(e => e.field === field.name)?.message}
            </span>
          )}
        </div>
      ))}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
```

## Key Takeaways

**Type vs Interface**: Use interfaces for component props (extensible), types for unions/intersections.

**Optional Properties**: Use `?` to mark optional props.

**Generic Components**: Use generics for flexible, reusable components.

**Event Types**: Import event types from React (`React.MouseEvent`, `React.ChangeEvent`, etc.).

**Children Prop**: Use `ReactNode` type for children prop.

**State Inference**: TypeScript can often infer state types, but explicit typing is better for complex states.

**Readonly Props**: Props are immutable by default in TypeScript with React.

# 54. How TypeScript Generics Enhance React Components

TypeScript generics allow you to create flexible, reusable, and type-safe React components that can work with different data types while maintaining full type checking. Here's a comprehensive guide:

## What Are Generics?

Generics are like placeholders for types that get specified when the component is used, allowing components to work with any data type while preserving type safety.

```tsx
// Without generics - limited to one type
interface UserListProps {
  items: User[];
  renderItem: (item: User) => ReactNode;
}

// With generics - works with any type
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}
```

---

## Benefits of Generics in React Components

### **1. Type Safety Across Different Data Types**

```tsx
import { ReactNode } from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string | number;
}

const List = <T,>({ items, renderItem, keyExtractor }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

// Usage with different types
interface User {
  id: number;
  name: string;
}

interface Product {
  sku: string;
  title: string;
  price: number;
}

// TypeScript knows the exact type in each case
<List<User>
  items={users}
  renderItem={(user) => <span>{user.name}</span>} // user is typed as User
  keyExtractor={(user) => user.id}
/>

<List<Product>
  items={products}
  renderItem={(product) => <span>{product.title}</span>} // product is typed as Product
  keyExtractor={(product) => product.sku}
/>
```

### **2. Reusable Data Fetching Components**

```tsx
import { useState, useEffect } from 'react';

interface DataFetcherProps<T> {
  url: string;
  render: (data: T) => ReactNode;
  loadingComponent?: ReactNode;
  errorComponent?: (error: Error) => ReactNode;
}

const DataFetcher = <T,>({ 
  url, 
  render, 
  loadingComponent, 
  errorComponent 
}: DataFetcherProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data: T) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  if (loading) return <>{loadingComponent || 'Loading...'}</>;
  if (error) return <>{errorComponent?.(error) || 'Error!'}</>;
  if (!data) return null;

  return <>{render(data)}</>;
};

// Usage
interface UserData {
  id: number;
  name: string;
  email: string;
}

<DataFetcher<UserData>
  url="/api/user/1"
  render={(user) => (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )}
/>
```

### **3. Generic Form Components**

```tsx
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormProps<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  render: (
    values: T,
    handleChange: (field: keyof T, value: any) => void,
    handleSubmit: (e: FormEvent) => void
  ) => ReactNode;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

const Form = <T extends Record<string, any>>({
  initialValues,
  onSubmit,
  render,
  validate
}: FormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (field: keyof T, value: any) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }
    
    onSubmit(values);
  };

  return <>{render(values, handleChange, handleSubmit)}</>;
};

// Usage
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

<Form<LoginFormData>
  initialValues={{ email: '', password: '', rememberMe: false }}
  onSubmit={(values) => console.log(values)}
  validate={(values) => {
    const errors: Partial<Record<keyof LoginFormData, string>> = {};
    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';
    return errors;
  }}
  render={(values, handleChange, handleSubmit) => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <input
        type="password"
        value={values.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={values.rememberMe}
          onChange={(e) => handleChange('rememberMe', e.target.checked)}
        />
        Remember Me
      </label>
      <button type="submit">Login</button>
    </form>
  )}
/>
```

### **4. Generic Table Component**

```tsx
import { ReactNode } from 'react';

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  keyExtractor: (row: T) => string | number;
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
  onRowClick,
  keyExtractor
}: TableProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr 
            key={keyExtractor(row)} 
            onClick={() => onRowClick?.(row)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
          >
            {columns.map((column) => (
              <td key={String(column.key)}>
                {column.render 
                  ? column.render(row[column.key], row)
                  : String(row[column.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Usage
interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
  active: boolean;
}

const employees: Employee[] = [
  { id: 1, name: 'Alice', department: 'Engineering', salary: 90000, active: true },
  { id: 2, name: 'Bob', department: 'Marketing', salary: 75000, active: false }
];

<Table<Employee>
  data={employees}
  keyExtractor={(emp) => emp.id}
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'department', header: 'Department' },
    { 
      key: 'salary', 
      header: 'Salary',
      render: (value) => `$${value.toLocaleString()}`
    },
    {
      key: 'active',
      header: 'Status',
      render: (value) => value ? '✓ Active' : '✗ Inactive'
    }
  ]}
  onRowClick={(employee) => console.log('Clicked:', employee.name)}
/>
```

### **5. Generic Select/Dropdown Component**

```tsx
interface SelectProps<T> {
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string | number;
  placeholder?: string;
  disabled?: boolean;
}

const Select = <T,>({
  options,
  value,
  onChange,
  getOptionLabel,
  getOptionValue,
  placeholder = 'Select an option',
  disabled = false
}: SelectProps<T>) => {
  return (
    <select
      value={value ? String(getOptionValue(value)) : ''}
      onChange={(e) => {
        const selectedOption = options.find(
          opt => String(getOptionValue(opt)) === e.target.value
        );
        if (selectedOption) onChange(selectedOption);
      }}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option 
          key={String(getOptionValue(option))} 
          value={String(getOptionValue(option))}
        >
          {getOptionLabel(option)}
        </option>
      ))}
    </select>
  );
};

// Usage
interface Country {
  code: string;
  name: string;
  population: number;
}

const countries: Country[] = [
  { code: 'US', name: 'United States', population: 331000000 },
  { code: 'UK', name: 'United Kingdom', population: 67000000 }
];

const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

<Select<Country>
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  getOptionLabel={(country) => country.name}
  getOptionValue={(country) => country.code}
  placeholder="Select a country"
/>
```

### **6. Generic Modal Component**

```tsx
interface ModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  data: T;
  render: (data: T, onClose: () => void) => ReactNode;
  title?: string;
}

const Modal = <T,>({ 
  isOpen, 
  onClose, 
  data, 
  render, 
  title 
}: ModalProps<T>) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <h2>{title}</h2>}
        <button onClick={onClose}>×</button>
        {render(data, onClose)}
      </div>
    </div>
  );
};

// Usage
interface UserDetails {
  id: number;
  name: string;
  email: string;
  bio: string;
}

const [isModalOpen, setIsModalOpen] = useState(false);
const userDetails: UserDetails = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  bio: 'Software developer'
};

<Modal<UserDetails>
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  data={userDetails}
  title="User Details"
  render={(user, onClose) => (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.bio}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )}
/>
```

### **7. Generic Hook with Generics**

```tsx
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then((data: T) => {
        setData(data);
        setError(null);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

// Usage
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const BlogPost = () => {
  const { data, loading, error, refetch } = useFetch<Post>(
    'https://api.example.com/posts/1'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <button onClick={refetch}>Refresh</button>
    </article>
  );
};
```

### **8. Constrained Generics**

```tsx
// Generic with constraints - T must have an 'id' property
interface Identifiable {
  id: string | number;
}

interface CrudProps<T extends Identifiable> {
  items: T[];
  onCreate: (item: Omit<T, 'id'>) => void;
  onUpdate: (id: T['id'], item: Partial<T>) => void;
  onDelete: (id: T['id']) => void;
  renderItem: (item: T) => ReactNode;
}

const CrudList = <T extends Identifiable>({
  items,
  onCreate,
  onUpdate,
  onDelete,
  renderItem
}: CrudProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {renderItem(item)}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

// Usage - TypeScript ensures the type has an 'id' property
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

<CrudList<Task>
  items={tasks}
  onCreate={(task) => console.log('Create', task)}
  onUpdate={(id, updates) => console.log('Update', id, updates)}
  onDelete={(id) => console.log('Delete', id)}
  renderItem={(task) => <span>{task.title}</span>}
/>
```

---

## Key Advantages of Generics

✅ **Type Safety**: Catch errors at compile-time
✅ **Reusability**: Write once, use with multiple types
✅ **Intellisense**: Better autocomplete and IDE support
✅ **Maintainability**: Easier to refactor and update
✅ **Documentation**: Self-documenting code through types
✅ **Flexibility**: Components adapt to different data structures
✅ **No Type Casting**: Avoid `as` or type assertions

## Best Practices

1. **Use meaningful generic names**: `<T>` for single type, `<TData>`, `<TItem>` for clarity
2. **Add constraints when needed**: `<T extends SomeInterface>`
3. **Provide default types**: `<T = string>` when appropriate
4. **Keep it simple**: Don't over-engineer with too many generics
5. **Document generic parameters**: Explain what types are expected
6. **Use utility types**: `Partial<T>`, `Pick<T, K>`, `Omit<T, K>` for flexibility

Generics transform React components from single-purpose to multi-purpose tools, making your codebase more maintainable and type-safe!

## Testing in React

# Testing in React - Complete Guide

## 55. Why is Testing Important in React?

Testing is crucial for building reliable, maintainable React applications. Here's why:

### **1. Catches Bugs Early**

Identifies issues before they reach production, saving time and money.

```tsx
// Without tests, this bug might go unnoticed
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// Test reveals the bug when items is undefined
test('calculateTotal handles empty array', () => {
  expect(calculateTotal([])).toBe(0);
  // This would fail if items is null/undefined
  expect(calculateTotal(null)).toBe(0); // Bug caught!
});
```

### **2. Ensures Component Reliability**

Verifies that components behave correctly under different conditions.

```tsx
// Component
const LoginButton = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <button onClick={isAuthenticated ? onLogout : onLogin}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};

// Tests ensure all scenarios work
test('shows Login when not authenticated', () => {
  render(<LoginButton isAuthenticated={false} onLogin={jest.fn()} />);
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('shows Logout when authenticated', () => {
  render(<LoginButton isAuthenticated={true} onLogout={jest.fn()} />);
  expect(screen.getByText('Logout')).toBeInTheDocument();
});
```

### **3. Facilitates Refactoring**

Allows you to change code confidently, knowing tests will catch breaking changes.

```tsx
// Original implementation
const UserCard = ({ user }) => {
  return <div>{user.firstName} {user.lastName}</div>;
};

// After refactoring to use full name
const UserCard = ({ user }) => {
  const fullName = `${user.firstName} ${user.lastName}`;
  return <div>{fullName}</div>;
};

// Tests ensure behavior remains the same
test('displays full name correctly', () => {
  const user = { firstName: 'John', lastName: 'Doe' };
  render(<UserCard user={user} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});
```

### **4. Improves Code Quality**

Writing testable code leads to better architecture and design patterns.

```tsx
// Hard to test - tightly coupled
const BadComponent = () => {
  const data = fetch('/api/data'); // Direct API call
  return <div>{data}</div>;
};

// Easy to test - dependency injection
const GoodComponent = ({ dataFetcher }) => {
  const data = dataFetcher();
  return <div>{data}</div>;
};

// Can now mock the data fetcher
test('renders with mocked data', () => {
  const mockFetcher = () => 'Test Data';
  render(<GoodComponent dataFetcher={mockFetcher} />);
  expect(screen.getByText('Test Data')).toBeInTheDocument();
});
```

### **5. Documents Component Behavior**

Tests serve as living documentation showing how components should be used.

```tsx
describe('Pagination Component', () => {
  test('disables previous button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('disables next button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} />);
    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('calls onPageChange with correct page number', () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination 
        currentPage={2} 
        totalPages={5} 
        onPageChange={handlePageChange} 
      />
    );
    
    fireEvent.click(screen.getByText('Next'));
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });
});
```

### **6. Prevents Regression**

Ensures that new features don't break existing functionality.

```tsx
describe('Shopping Cart', () => {
  test('adds item to cart', () => {
    const { getByText, getByTestId } = render(<ShoppingCart />);
    fireEvent.click(getByText('Add to Cart'));
    expect(getByTestId('cart-count')).toHaveTextContent('1');
  });

  test('removes item from cart', () => {
    const { getByText, getByTestId } = render(<ShoppingCart />);
    fireEvent.click(getByText('Add to Cart'));
    fireEvent.click(getByText('Remove'));
    expect(getByTestId('cart-count')).toHaveTextContent('0');
  });

  // This test prevents regression when adding new features
  test('maintains cart state when component re-renders', () => {
    const { getByText, getByTestId, rerender } = render(<ShoppingCart />);
    fireEvent.click(getByText('Add to Cart'));
    rerender(<ShoppingCart />);
    expect(getByTestId('cart-count')).toHaveTextContent('1');
  });
});
```

### **7. Speeds Up Development**

Automated tests are faster than manual testing for regression checks.

```tsx
// Manual testing: Open browser, click through UI, verify each scenario
// Automated testing: Run command, get instant feedback

// Run all tests in seconds
npm test

// Watch mode for continuous feedback
npm test -- --watch
```

### **8. Builds Confidence**

Comprehensive test coverage gives confidence when deploying to production.

```tsx
describe('PaymentForm', () => {
  test('validates credit card number', () => {
    render(<PaymentForm />);
    const input = screen.getByLabelText('Card Number');
    
    fireEvent.change(input, { target: { value: '1234' } });
    expect(screen.getByText('Invalid card number')).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: '4532015112830366' } });
    expect(screen.queryByText('Invalid card number')).not.toBeInTheDocument();
  });

  test('prevents submission with invalid data', () => {
    const handleSubmit = jest.fn();
    render(<PaymentForm onSubmit={handleSubmit} />);
    
    fireEvent.click(screen.getByText('Pay Now'));
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
```

### **9. Enables Continuous Integration/Deployment**

Tests are essential for automated deployment pipelines.

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test
      - run: npm run build
```

### **10. Reduces Technical Debt**

Tests make it easier to maintain and evolve the codebase over time.

---

## 56. Common Testing Libraries for React

### **1. Jest**

**What it is**: A comprehensive JavaScript testing framework developed by Facebook.

**Features**:
- Zero configuration for React apps created with Create React App
- Built-in test runner, assertion library, and mocking capabilities
- Snapshot testing
- Code coverage reports
- Watch mode for continuous testing

**Installation**:
```bash
npm install --save-dev jest
```

**Example**:
```tsx
// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import { sum } from './sum';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
```

**Matchers**:
```tsx
// Common Jest matchers
expect(value).toBe(4);                    // Strict equality
expect(value).toEqual({ name: 'John' }); // Deep equality
expect(value).toBeTruthy();              // Boolean true
expect(value).toBeFalsy();               // Boolean false
expect(array).toContain('item');         // Array contains
expect(fn).toThrow();                    // Function throws error
expect(string).toMatch(/pattern/);       // Regex match
```

---

### **2. React Testing Library (RTL)**

**What it is**: A testing library that encourages testing components the way users interact with them.

**Philosophy**: Test behavior, not implementation details.

**Features**:
- Query elements by accessibility attributes
- User-centric testing approach
- Works with Jest
- Promotes best practices

**Installation**:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

**Example**:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Counter } from './Counter';

test('increments counter when button is clicked', () => {
  render(<Counter />);
  
  // Query by role (accessible way)
  const button = screen.getByRole('button', { name: /increment/i });
  const count = screen.getByText(/count: 0/i);
  
  expect(count).toBeInTheDocument();
  
  fireEvent.click(button);
  
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
```

**Query Methods**:
```tsx
// Queries - find elements
screen.getByRole('button');              // By ARIA role
screen.getByLabelText('Username');       // By label
screen.getByPlaceholderText('Enter...');  // By placeholder
screen.getByText('Submit');              // By text content
screen.getByTestId('custom-element');    // By data-testid

// Async queries - wait for elements
await screen.findByText('Loaded');

// Query variants
getBy...    // Throws error if not found
queryBy...  // Returns null if not found
findBy...   // Returns promise, waits for element
```

**User Event Example**:
```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('form submission', async () => {
  const user = userEvent.setup();
  render(<LoginForm />);
  
  await user.type(screen.getByLabelText('Email'), 'user@example.com');
  await user.type(screen.getByLabelText('Password'), 'password123');
  await user.click(screen.getByRole('button', { name: /login/i }));
  
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
});
```

---

### **3. Enzyme**

**What it is**: A testing utility for React developed by Airbnb (note: less commonly used now, RTL is preferred).

**Features**:
- Component shallow rendering
- Full DOM rendering
- Component instance manipulation

**Installation**:
```bash
npm install --save-dev enzyme enzyme-adapter-react-16
```

**Example**:
```tsx
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button component', () => {
  test('renders button text', () => {
    const wrapper = shallow(<Button>Click me</Button>);
    expect(wrapper.text()).toBe('Click me');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button onClick={handleClick}>Click</Button>);
    
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

### **4. Cypress**

**What it is**: End-to-end testing framework for testing complete application workflows.

**Features**:
- Real browser testing
- Time-travel debugging
- Automatic waiting
- Screenshots and videos
- Network stubbing

**Installation**:
```bash
npm install --save-dev cypress
```

**Example**:
```tsx
// cypress/e2e/login.cy.js
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('successfully logs in', () => {
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back!').should('be.visible');
  });

  it('shows error with invalid credentials', () => {
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    
    cy.contains('Invalid credentials').should('be.visible');
  });
});
```

---

### **5. Vitest**

**What it is**: A blazing fast unit test framework powered by Vite.

**Features**:
- Very fast execution
- Compatible with Jest API
- Built-in TypeScript support
- Hot module replacement for tests

**Installation**:
```bash
npm install --save-dev vitest
```

**Example**:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('renders hello message', () => {
    render(<App />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
```

---

### **6. Playwright**

**What it is**: Modern end-to-end testing framework for web applications.

**Features**:
- Multi-browser support (Chrome, Firefox, Safari)
- Auto-wait for elements
- Network interception
- Mobile emulation

**Installation**:
```bash
npm install --save-dev @playwright/test
```

**Example**:
```tsx
import { test, expect } from '@playwright/test';

test('homepage has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  await expect(page).toHaveTitle(/My App/);
  
  await page.click('text=Get Started');
  await expect(page).toHaveURL(/.*getting-started/);
});
```

---

### **7. MSW (Mock Service Worker)**

**What it is**: API mocking library for testing HTTP requests.

**Features**:
- Intercepts requests at network level
- Works in both browser and Node.js
- Realistic API mocking

**Installation**:
```bash
npm install --save-dev msw
```

**Example**:
```tsx
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import { UserProfile } from './UserProfile';

const server = setupServer(
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json({ name: 'John Doe', email: 'john@example.com' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays user profile', async () => {
  render(<UserProfile userId={1} />);
  
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});
```

---

### **8. React Hooks Testing Library**

**What it is**: Testing utilities for React Hooks.

**Features**:
- Test custom hooks in isolation
- Simulates component lifecycle

**Installation**:
```bash
npm install --save-dev @testing-library/react-hooks
```

**Example**:
```tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

test('useCounter hook increments', () => {
  const { result } = renderHook(() => useCounter());
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
```

---

## Comparison Table

| Library | Type | Use Case | Learning Curve |
|---------|------|----------|----------------|
| **Jest** | Unit/Integration | General testing framework | Low |
| **React Testing Library** | Unit/Integration | Component testing | Low |
| **Enzyme** | Unit/Integration | Component testing (legacy) | Medium |
| **Cypress** | E2E | Full application flows | Medium |
| **Playwright** | E2E | Cross-browser testing | Medium |
| **Vitest** | Unit/Integration | Fast Vite-based testing | Low |
| **MSW** | Integration | API mocking | Low |

---

## Testing Best Practices

```tsx
// ✅ Good - Test behavior
test('shows error message on failed login', async () => {
  render(<LoginForm />);
  
  await userEvent.type(screen.getByLabelText('Email'), 'wrong@email.com');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));
  
  expect(await screen.findByText('Invalid credentials')).toBeInTheDocument();
});

// ❌ Bad - Test implementation details
test('sets error state to true', () => {
  const { result } = renderHook(() => useLoginForm());
  
  act(() => {
    result.current.setError(true);
  });
  
  expect(result.current.error).toBe(true);
});
```

**Recommended Stack**:
- **Unit/Integration Tests**: Jest + React Testing Library
- **E2E Tests**: Cypress or Playwright
- **API Mocking**: MSW
- **Custom Hooks**: React Hooks Testing Library

This combination provides comprehensive coverage for modern React applications!

# Testing React Components - Complete Guide

## 57. How Do You Test a React Component with Jest?

Jest is a comprehensive testing framework that works seamlessly with React. Here's a complete guide:

### **Setup**

```bash
# Jest comes pre-configured with Create React App
# For manual setup:
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

**Configure Jest** (if not using CRA):
```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"]
  }
}
```

**Setup file**:
```tsx
// src/setupTests.js
import '@testing-library/jest-dom';
```

---

### **Basic Component Testing**

```tsx
// Button.jsx
import React from 'react';

export const Button = ({ children, onClick, disabled = false, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};
```

```tsx
// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  test('applies correct variant class', () => {
    const { rerender } = render(<Button variant="secondary">Click me</Button>);
    
    let button = screen.getByText('Click me');
    expect(button).toHaveClass('btn-secondary');
    
    rerender(<Button variant="danger">Click me</Button>);
    button = screen.getByText('Click me');
    expect(button).toHaveClass('btn-danger');
  });
});
```

---

### **Testing Components with State**

```tsx
// Counter.jsx
import { useState } from 'react';

export const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
};
```

```tsx
// Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
  test('renders with initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter initialCount={10} />);
    
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    
    expect(screen.getByText('Count: 9')).toBeInTheDocument();
  });

  test('resets to initial count', () => {
    render(<Counter initialCount={5} />);
    
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 7')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  test('uses custom step value', () => {
    render(<Counter step={5} />);
    
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 10')).toBeInTheDocument();
  });
});
```

---

### **Testing Async Components**

```tsx
// UserProfile.jsx
import { useState, useEffect } from 'react';

export const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
```

```tsx
// UserProfile.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import { UserProfile } from './UserProfile';

// Mock fetch
global.fetch = jest.fn();

describe('UserProfile Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('shows loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {})); // Never resolves
    
    render(<UserProfile userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays user data after successful fetch', async () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com'
    };

    fetch.mockResolvedValueOnce({
      json: async () => mockUser
    });

    render(<UserProfile userId={1} />);

    // Wait for loading to finish
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('displays error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.getByText('Error: Network error')).toBeInTheDocument();
    });
  });

  test('refetches data when userId changes', async () => {
    const mockUser1 = { name: 'User 1', email: 'user1@example.com' };
    const mockUser2 = { name: 'User 2', email: 'user2@example.com' };

    fetch
      .mockResolvedValueOnce({ json: async () => mockUser1 })
      .mockResolvedValueOnce({ json: async () => mockUser2 });

    const { rerender } = render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.getByText('User 1')).toBeInTheDocument();
    });

    rerender(<UserProfile userId={2} />);

    await waitFor(() => {
      expect(screen.getByText('User 2')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
```

---

### **Testing Forms**

```tsx
// LoginForm.jsx
import { useState } from 'react';

export const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
```

```tsx
// LoginForm.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('LoginForm Component', () => {
  test('renders form fields', () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('updates input values when typing', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={jest.fn()} />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  test('shows validation errors for empty fields', async () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    
    const submitButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  test('shows error for short password', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={jest.fn()} />);
    
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), '12345');
    
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(
      await screen.findByText('Password must be at least 6 characters')
    ).toBeInTheDocument();
  });

  test('calls onSubmit with valid data', async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();
    
    render(<LoginForm onSubmit={handleSubmit} />);
    
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Password'), 'password123');
    
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });
});
```

---

### **Snapshot Testing**

```tsx
// Card.jsx
export const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```

```tsx
// Card.test.jsx
import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component Snapshots', () => {
  test('matches snapshot with all props', () => {
    const { container } = render(
      <Card
        title="Test Card"
        description="This is a test card"
        imageUrl="https://example.com/image.jpg"
      />
    );
    
    expect(container.firstChild).toMatchSnapshot();
  });

  test('matches snapshot without image', () => {
    const { container } = render(
      <Card
        title="Test Card"
        description="This is a test card"
      />
    );
    
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

---

### **Testing with Context**

```tsx
// ThemeContext.jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);

// ThemedButton.jsx
export const ThemedButton = ({ children }) => {
  const theme = useTheme();
  
  return (
    <button style={{ backgroundColor: theme.primary }}>
      {children}
    </button>
  );
};
```

```tsx
// ThemedButton.test.jsx
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { ThemedButton } from './ThemedButton';

describe('ThemedButton Component', () => {
  test('applies theme color', () => {
    const theme = { primary: '#007bff' };
    
    render(
      <ThemeProvider theme={theme}>
        <ThemedButton>Click me</ThemedButton>
      </ThemeProvider>
    );
    
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle({ backgroundColor: '#007bff' });
  });

  test('works with different theme', () => {
    const darkTheme = { primary: '#333333' };
    
    render(
      <ThemeProvider theme={darkTheme}>
        <ThemedButton>Click me</ThemedButton>
      </ThemeProvider>
    );
    
    const button = screen.getByText('Click me');
    expect(button).toHaveStyle({ backgroundColor: '#333333' });
  });
});
```

---

## 58. Shallow Rendering vs Mount Rendering in Enzyme

**Note**: Enzyme is now considered legacy. React Testing Library is the modern standard. However, understanding Enzyme is still valuable for maintaining older codebases.

### **Shallow Rendering**

Renders only the component itself without its children. Child components are not rendered.

```tsx
import { shallow } from 'enzyme';

// Component
const Parent = () => (
  <div>
    <h1>Parent Component</h1>
    <Child />
  </div>
);

const Child = () => <p>Child Component</p>;

// Test with shallow
test('shallow rendering', () => {
  const wrapper = shallow(<Parent />);
  
  // Parent is rendered
  expect(wrapper.find('h1').text()).toBe('Parent Component');
  
  // Child component exists but is NOT rendered
  expect(wrapper.find(Child)).toHaveLength(1);
  
  // Child's content is NOT accessible
  expect(wrapper.find('p')).toHaveLength(0); // Child's <p> tag not found
});
```

**Characteristics of Shallow Rendering**:
- ✅ Fast and lightweight
- ✅ Tests component in isolation
- ✅ Good for unit testing
- ✅ Doesn't test child component integration
- ❌ Doesn't test lifecycle methods fully
- ❌ Doesn't test hooks completely

---

### **Mount Rendering (Full DOM Rendering)**

Renders the entire component tree including all children.

```tsx
import { mount } from 'enzyme';

// Test with mount
test('mount rendering', () => {
  const wrapper = mount(<Parent />);
  
  // Parent is rendered
  expect(wrapper.find('h1').text()).toBe('Parent Component');
  
  // Child component is fully rendered
  expect(wrapper.find(Child)).toHaveLength(1);
  
  // Child's content IS accessible
  expect(wrapper.find('p').text()).toBe('Child Component');
});
```

**Characteristics of Mount Rendering**:
- ✅ Full component lifecycle
- ✅ Tests child components
- ✅ Tests hooks completely
- ✅ Tests integration between components
- ✅ Can test DOM interactions
- ❌ Slower than shallow
- ❌ Requires more setup (DOM environment)

---

### **Comparison Examples**

```tsx
import { shallow, mount } from 'enzyme';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

const TodoItem = ({ todo }) => (
  <li className={todo.completed ? 'completed' : ''}>
    {todo.text}
  </li>
);

describe('Shallow vs Mount', () => {
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Testing', completed: false }
  ];

  test('shallow - child components not rendered', () => {
    const wrapper = shallow(<TodoList todos={todos} />);
    
    // TodoItem components exist
    expect(wrapper.find(TodoItem)).toHaveLength(2);
    
    // But their content (<li> elements) is NOT accessible
    expect(wrapper.find('li')).toHaveLength(0);
    
    // Props are accessible
    expect(wrapper.find(TodoItem).at(0).prop('todo')).toEqual(todos[0]);
  });

  test('mount - full rendering', () => {
    const wrapper = mount(<TodoList todos={todos} />);
    
    // TodoItem components exist
    expect(wrapper.find(TodoItem)).toHaveLength(2);
    
    // Their content IS accessible
    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('li').at(0).text()).toBe('Learn React');
    
    // Can test classes applied by child
    expect(wrapper.find('li').at(0).hasClass('completed')).toBe(true);
    expect(wrapper.find('li').at(1).hasClass('completed')).toBe(false);
  });
});
```

---

### **When to Use Each**

```tsx
// ✅ Use SHALLOW when:
// - Testing component logic in isolation
// - Component has many complex children
// - You don't need to test child integration

test('shallow: button click handler', () => {
  const handleClick = jest.fn();
  const wrapper = shallow(<Button onClick={handleClick}>Click</Button>);
  
  wrapper.find('button').simulate('click');
  expect(handleClick).toHaveBeenCalled();
});

// ✅ Use MOUNT when:
// - Testing component lifecycle
// - Testing hooks (useEffect, useContext, etc.)
// - Testing DOM interactions
// - Testing integration with children

test('mount: useEffect side effects', () => {
  const wrapper = mount(<DataFetcher url="/api/data" />);
  
  // useEffect runs
  expect(wrapper.find('.loading')).toHaveLength(1);
  
  // Can test full DOM tree
  wrapper.update();
  expect(wrapper.find('.data')).toHaveLength(1);
});
```

---

### **Lifecycle Testing Differences**

```tsx
class MyComponent extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return <div>Hello</div>;
  }
}

// Shallow - lifecycle methods DON'T run by default
test('shallow lifecycle', () => {
  const onMount = jest.fn();
  shallow(<MyComponent onMount={onMount} />);
  
  expect(onMount).not.toHaveBeenCalled(); // componentDidMount not called
});

// Mount - lifecycle methods DO run
test('mount lifecycle', () => {
  const onMount = jest.fn();
  mount(<MyComponent onMount={onMount} />);
  
  expect(onMount).toHaveBeenCalled(); // componentDidMount was called
});
```

---

## 59. React Testing Library vs Enzyme

### **Philosophy Differences**

**Enzyme**:
- Tests implementation details
- Accesses component internals (state, props, instances)
- Can test components in isolation

**React Testing Library (RTL)**:
- Tests user behavior
- Encourages accessible queries
- Tests components as users would interact with them

---

### **Query Approach**

```tsx
// Component
const UserCard = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      {expanded && <p className="bio">{user.bio}</p>}
    </div>
  );
};
```

**Enzyme Approach** (Implementation-focused):
```tsx
import { shallow } from 'enzyme';

test('Enzyme: tests implementation', () => {
  const user = { name: 'John', bio: 'Developer' };
  const wrapper = shallow(<UserCard user={user} />);
  
  // Access component state directly
  expect(wrapper.state('expanded')).toBe(false);
  
  // Find by className
  expect(wrapper.find('.bio')).toHaveLength(0);
  
  // Simulate event
  wrapper.find('button').simulate('click');
  
  // Check state again
  expect(wrapper.state('expanded')).toBe(true);
  expect(wrapper.find('.bio')).toHaveLength(1);
});
```

**RTL Approach** (User-focused):
```tsx
import { render, screen, fireEvent } from '@testing-library/react';

test('RTL: tests behavior', () => {
  const user = { name: 'John', bio: 'Developer' };
  render(<UserCard user={user} />);
  
  // Query by user-visible text
  expect(screen.getByText('John')).toBeInTheDocument();
  
  // Bio is not visible initially
  expect(screen.queryByText('Developer')).not.toBeInTheDocument();
  
  // Click button by its visible text
  fireEvent.click(screen.getByText('Expand'));
  
  // Now bio is visible
  expect(screen.getByText('Developer')).toBeInTheDocument();
});
```

---

### **Accessing Component Internals**

```tsx
class Counter extends React.Component {
  state = { count: 0 };
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
```

**Enzyme** - CAN access internals:
```tsx
test('Enzyme: access state and instance', () => {
  const wrapper = shallow(<Counter />);
  
  // Access state directly
  expect(wrapper.state('count')).toBe(0);
  
  // Access instance methods
  wrapper.instance().increment();
  expect(wrapper.state('count')).toBe(1);
  
  // Check prop
  wrapper.setProps({ initialCount: 5 });
});
```

**RTL** - CANNOT access internals (by design):
```tsx
test('RTL: tests visible behavior only', () => {
  render(<Counter />);
  
  // Can only test what user sees
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  
  // Interact as user would
  fireEvent.click(screen.getByText('+'));
  
  // Verify visible outcome
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
  
  // ❌ Cannot access: wrapper.state(), wrapper.instance()
});
```

---

### **Query Methods Comparison**

**Enzyme**:
```tsx
const wrapper = shallow(<MyComponent />);

// Query by component type
wrapper.find(Button);

// Query by className
wrapper.find('.my-button');

// Query by prop
wrapper.find('[data-test="submit"]');

// Query by tag
wrapper.find('button');

// Check props
wrapper.find(Button).prop('onClick');
```

**RTL** (Accessibility-focused):
```tsx
render(<MyComponent />);

// Query by role (ARIA)
screen.getByRole('button', { name: 'Submit' });

// Query by label (accessible)
screen.getByLabelText('Username');

// Query by text content
screen.getByText('Submit');

// Query by test ID (last resort)
screen.getByTestId('submit-button');

// Query by placeholder
screen.getByPlaceholderText('Enter email');
```

---

### **Testing Forms**

```tsx
const LoginForm = () => {
  const [email, setEmail] = useState('');
  
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
```

**Enzyme**:
```tsx
test('Enzyme: form input', () => {
  const wrapper = shallow(<LoginForm />);
  
  // Find input by id
  const input = wrapper.find('#email');
  
  // Simulate change
  input.simulate('change', { target: { value: 'test@example.com' } });
  
  // Check state
  expect(wrapper.state('email')).toBe('test@example.com');
});
```

**RTL**:
```tsx
test('RTL: form input', async () => {
  const user = userEvent.setup();
  render(<LoginForm />);
  
  // Find input by accessible label
  const input = screen.getByLabelText('Email');
  
  // Type as user would
  await user.type(input, 'test@example.com');
  
  // Check visible value
  expect(input).toHaveValue('test@example.com');
});
```

---

### **Handling Async Operations**

**Enzyme**:
```tsx
test('Enzyme: async', async () => {
  const wrapper = mount(<AsyncComponent />);
  
  // Wait manually
  await new Promise(resolve => setTimeout(resolve, 100));
  wrapper.update();
  
  expect(wrapper.find('.loaded')).toHaveLength(1);
});
```

**RTL** (Built-in async utilities):
```tsx
test('RTL: async', async () => {
  render(<AsyncComponent />);
  
  // Automatic waiting
  const element = await screen.findByText('Loaded');
  expect(element).toBeInTheDocument();
  
  // Or use waitFor
  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  });
});
```

---

### **Pros and Cons**

**Enzyme**:
- ✅ Can test implementation details
- ✅ Shallow rendering option
- ✅ Access to component internals
- ❌ Encourages testing implementation over behavior
- ❌ Less maintainable tests
- ❌ Not actively maintained
- ❌ Harder to ensure accessibility

**React Testing Library**:
- ✅ Encourages accessibility
- ✅ Tests user behavior
- ✅ More maintainable tests
- ✅ Actively maintained
- ✅ Works with modern React (Hooks)
- ✅ Simpler API
- ❌ Cannot access component internals
- ❌ No shallow rendering

---

### **Migration Example**

**Enzyme Code**:
```tsx
test('Enzyme test', () => {
  const wrapper = shallow(<TodoList />);
  
  expect(wrapper.find('.todo-item')).toHaveLength(0);
  
  wrapper.instance().addTodo('New Todo');
  wrapper.update();
  
  expect(wrapper.find('.todo-item')).toHaveLength(1);
  expect(wrapper.state('todos')).toHaveLength(1);
});
```

**Migrated to RTL**:
```tsx
test('RTL test', async () => {
  const user = userEvent.setup();
  render(<TodoList />);
  
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  
  await user.type(screen.getByPlaceholderText('New todo'), 'New Todo');
  await user.click(screen.getByRole('button', { name: /add/i }));
  
  expect(screen.getByRole('listitem')).toHaveTextContent('New Todo');
});
```

---

## Summary

**Jest**: Testing framework with assertions, mocking, and test runner
**Enzyme**: Legacy library focusing on implementation details (shallow/mount)
**RTL**: Modern library focusing on user behavior and accessibility

**Recommendation**: Use **Jest + React Testing Library** for new projects. RTL's user-centric approach leads to more maintainable tests that better reflect real-world usage.

## Advanced React Topics

# React Fragments, Portals, and Error Boundaries

## 60. What are React fragments and why are they useful?

**React Fragments** let you group multiple elements without adding extra nodes to the DOM.

### Why are they useful?

1. **Avoid unnecessary wrapper divs** - Keeps DOM clean
2. **Better semantic HTML** - No meaningless containers
3. **Proper CSS layouts** - Flexbox/Grid work correctly
4. **Performance** - Fewer DOM nodes
5. **Valid HTML** - Some elements can't have div parents (e.g., `<tr>`, `<td>`)

### Example:

```jsx
import React from 'react';

// ❌ Without Fragment - adds extra div
function TableRowBad() {
  return (
    <div> {/* Unnecessary wrapper - breaks table structure! */}
      <td>Cell 1</td>
      <td>Cell 2</td>
    </div>
  );
}

// ✅ With Fragment - no extra DOM node
function TableRowGood() {
  return (
    <React.Fragment>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </React.Fragment>
  );
}

// ✅ Short syntax (most common)
function TableRowBest() {
  return (
    <>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </>
  );
}

// ✅ With key prop (needed in lists)
function TableBody({ items }) {
  return (
    <tbody>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <tr>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
          <tr>
            <td colSpan="2">{item.description}</td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  );
}

// Real-world example: Form fields
function UserForm() {
  return (
    <form>
      <>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" />
      </>
      <>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
      </>
    </form>
  );
}
```

---

## 61. What is React Portal and when would you use it?

**React Portals** let you render components outside their parent DOM hierarchy while maintaining the React component tree relationship.

### Syntax:
```jsx
ReactDOM.createPortal(child, domNode)
```

### When to use Portals:

1. **Modals/Dialogs** - Render at document root to avoid z-index issues
2. **Tooltips** - Position freely without overflow constraints
3. **Dropdowns** - Escape parent's `overflow: hidden`
4. **Notifications/Toasts** - Fixed positioning at app level
5. **Full-screen overlays** - Break out of parent containers

### Example:

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Modal Component using Portal
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Render modal outside the parent hierarchy
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Target DOM node
  );
}

// Tooltip Component
function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setPosition({ x: rect.left, y: rect.top - 30 });
    setShow(true);
  };

  return (
    <>
      <span 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      {show && ReactDOM.createPortal(
        <div 
          className="tooltip"
          style={{ 
            position: 'fixed', 
            left: position.x, 
            top: position.y 
          }}
        >
          {text}
        </div>,
        document.body
      )}
    </>
  );
}

// App Component
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app" style={{ overflow: 'hidden', position: 'relative' }}>
      <h1>My App</h1>
      
      {/* This button opens a modal */}
      <button onClick={() => setModalOpen(true)}>
        Open Modal
      </button>

      {/* Tooltip example */}
      <Tooltip text="This is helpful info!">
        <span>Hover me</span>
      </Tooltip>

      {/* Modal rendered via Portal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This modal is rendered outside the parent div!</p>
        <p>Event bubbling still works through React tree.</p>
      </Modal>
    </div>
  );
}

// HTML Structure needed:
// <body>
//   <div id="root"></div>
//   <div id="modal-root"></div>  <!-- Portal target -->
// </body>
```

**Key Benefits:**
- Events bubble through React tree (not DOM tree)
- Context works normally
- Avoids CSS issues (z-index, overflow, positioning)

---

## 62. How does Error Boundary work in React?

**Error Boundaries** are React components that catch JavaScript errors in their child component tree, log errors, and display fallback UI instead of crashing.

### How it works:

Error Boundaries catch errors during:
- Rendering
- Lifecycle methods
- Constructors of child components

They **DON'T** catch errors in:
- Event handlers (use try-catch)
- Asynchronous code (setTimeout, promises)
- Server-side rendering
- Errors in the error boundary itself

### Implementation:

```jsx
import React from 'react';

// Error Boundary Class Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }

  // Catch errors and update state
  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  // Log error details
  componentDidCatch(error, errorInfo) {
    // You can log to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Example: Send to error tracking service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="error-boundary">
          <h2>Something went wrong 😢</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Buggy Component
function BuggyCounter() {
  const [count, setCount] = React.useState(0);

  if (count === 3) {
    // Simulate error
    throw new Error('I crashed at 3!');
  }

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Component with async error (NOT caught by error boundary)
function AsyncBuggyComponent() {
  const [error, setError] = React.useState(false);

  const handleClick = () => {
    // Must use try-catch for event handlers
    try {
      throw new Error('Event handler error');
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  if (error) return <div>Error in event handler!</div>;

  return <button onClick={handleClick}>Click me</button>;
}

// App with multiple error boundaries
function App() {
  return (
    <div>
      <h1>My App</h1>
      
      {/* Separate error boundary for sidebar */}
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>

      {/* Separate error boundary for main content */}
      <ErrorBoundary>
        <h2>Main Content</h2>
        <BuggyCounter />
      </ErrorBoundary>

      {/* Another independent section */}
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

// Reusable Error Boundary with custom fallback
function CustomErrorBoundary({ fallback, children }) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}
```

### Best Practices:

1. **Place error boundaries strategically** - At route level, widget level
2. **Don't wrap entire app** - Use granular boundaries
3. **Provide helpful fallback UI** - Show what went wrong
4. **Log errors** - Send to monitoring service (Sentry, LogRocket)
5. **Allow recovery** - Provide reset/retry options
6. **Handle event errors separately** - Use try-catch in event handlers

### Real-world Example:

```jsx
// Production-ready error boundary
class ProductionErrorBoundary extends React.Component {
  state = { hasError: false, errorId: null };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error tracking service
    const errorId = logToErrorService({
      error: error.toString(),
      errorInfo: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userId: getCurrentUserId(),
      url: window.location.href
    });

    this.setState({ errorId });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>We're sorry, something went wrong</h2>
          <p>Error ID: {this.state.errorId}</p>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

**Note:** Error Boundaries must be class components (no hook equivalent yet, though you can wrap them for use with functional components).

# Server-Side Rendering and Suspense/Lazy Loading in React

## 63. What is Server-Side Rendering (SSR) and how is it done with React?

**Server-Side Rendering (SSR)** is the process of rendering React components on the server and sending fully rendered HTML to the client, instead of sending an empty HTML shell and rendering everything in the browser.

### Benefits of SSR:

1. **Better SEO** - Search engines can crawl fully rendered content
2. **Faster First Contentful Paint (FCP)** - Users see content immediately
3. **Better performance on slow devices** - Less client-side JavaScript execution
4. **Social media sharing** - Proper meta tags and preview images
5. **Improved accessibility** - Content available without JavaScript

### How SSR Works:

```
1. User requests page
2. Server renders React components to HTML string
3. Server sends HTML + JavaScript bundle
4. Browser displays HTML (content visible)
5. JavaScript loads and "hydrates" (makes interactive)
```

### Implementation Examples:

#### Basic SSR with Node.js:

```jsx
// server.js - Node.js server
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  // Render React component to HTML string
  const appHtml = ReactDOMServer.renderToString(<App />);
  
  // Read the HTML template
  const indexFile = path.resolve(__dirname, 'build', 'index.html');
  
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html', err);
      return res.status(500).send('Error');
    }

    // Inject rendered app into HTML
    const html = data.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`SSR server running on port ${PORT}`);
});
```

```jsx
// App.js - React component
import React from 'react';

function App() {
  return (
    <div>
      <h1>Server-Side Rendered App</h1>
      <p>This content was rendered on the server!</p>
    </div>
  );
}

export default App;
```

```jsx
// client.js - Client-side hydration
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Hydrate instead of render for SSR
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);
```

#### SSR with Data Fetching:

```jsx
// server.js - SSR with data
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const app = express();

app.get('*', async (req, res) => {
  try {
    // Fetch data on server
    const data = await fetchDataForRoute(req.url);
    
    // Create context to pass data
    const context = { data };
    
    // Render with router and context
    const appHtml = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App initialData={data} />
      </StaticRouter>
    );

    // Serialize data to inject into HTML
    const preloadedState = JSON.stringify(data).replace(/</g, '\\u003c');

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR App</title>
          <meta charset="UTF-8" />
        </head>
        <body>
          <div id="root">${appHtml}</div>
          <script>
            window.__PRELOADED_STATE__ = ${preloadedState};
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `;

    res.send(html);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

async function fetchDataForRoute(url) {
  // Simulate API call
  const response = await fetch(`https://api.example.com/data?route=${url}`);
  return response.json();
}
```

```jsx
// App.js - Using preloaded data
import React, { useState, useEffect } from 'react';

function App({ initialData }) {
  const [data, setData] = useState(initialData || window.__PRELOADED_STATE__);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default App;
```

#### Using Next.js (Popular SSR Framework):

```jsx
// pages/index.js - Next.js automatic SSR
import React from 'react';

// This runs on the server
export async function getServerSideProps(context) {
  // Fetch data on every request
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts }, // Passed to component as props
  };
}

// Component receives data from getServerSideProps
export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

```jsx
// pages/posts/[id].js - Dynamic SSR routes
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export default function Post({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

### SSR vs CSR vs SSG:

```jsx
// Client-Side Rendering (CSR) - Traditional React
function CSRComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div>{data.content}</div>;
}

// Server-Side Rendering (SSR) - Next.js
export async function getServerSideProps() {
  const data = await fetch('/api/data').then(r => r.json());
  return { props: { data } };
}

// Static Site Generation (SSG) - Build time
export async function getStaticProps() {
  const data = await fetch('/api/data').then(r => r.json());
  return { 
    props: { data },
    revalidate: 60 // Regenerate every 60 seconds (ISR)
  };
}
```

---

## 64. Can you explain the concept of Suspense and Lazy Loading in React?

**Suspense** is a React component that lets you display a fallback while waiting for some code or data to load. **Lazy Loading** is code-splitting technique to load components only when needed.

### React.lazy() - Code Splitting:

```jsx
import React, { lazy, Suspense } from 'react';

// ❌ Normal import - loads immediately
import HeavyComponent from './HeavyComponent';

// ✅ Lazy import - loads when needed
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      
      {/* Suspense wraps lazy components */}
      <Suspense fallback={<div>Loading component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```

### Practical Examples:

#### Route-based Code Splitting:

```jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

// Loading component
function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      {/* Wrap routes with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
```

#### Conditional Component Loading:

```jsx
import React, { lazy, Suspense, useState } from 'react';

// Heavy components loaded only when needed
const VideoPlayer = lazy(() => import('./VideoPlayer'));
const ImageEditor = lazy(() => import('./ImageEditor'));
const ChartComponent = lazy(() => import('./ChartComponent'));

function MediaApp() {
  const [activeTab, setActiveTab] = useState('none');

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('video')}>Video</button>
        <button onClick={() => setActiveTab('image')}>Image Editor</button>
        <button onClick={() => setActiveTab('chart')}>Charts</button>
      </div>

      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          {activeTab === 'video' && <VideoPlayer />}
          {activeTab === 'image' && <ImageEditor />}
          {activeTab === 'chart' && <ChartComponent />}
        </Suspense>
      </div>
    </div>
  );
}
```

#### Modal/Dialog Lazy Loading:

```jsx
import React, { lazy, Suspense, useState } from 'react';

// Lazy load heavy modal components
const UserSettingsModal = lazy(() => import('./UserSettingsModal'));
const CheckoutModal = lazy(() => import('./CheckoutModal'));

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSettings(true)}>
        Open Settings
      </button>
      <button onClick={() => setShowCheckout(true)}>
        Checkout
      </button>

      {/* Only load when modal is opened */}
      {showSettings && (
        <Suspense fallback={<div>Loading settings...</div>}>
          <UserSettingsModal onClose={() => setShowSettings(false)} />
        </Suspense>
      )}

      {showCheckout && (
        <Suspense fallback={<div>Loading checkout...</div>}>
          <CheckoutModal onClose={() => setShowCheckout(false)} />
        </Suspense>
      )}
    </div>
  );
}
```

#### Named Exports with Lazy:

```jsx
// components.js - Named exports
export function ComponentA() {
  return <div>Component A</div>;
}

export function ComponentB() {
  return <div>Component B</div>;
}

// App.js - Lazy load named exports
const ComponentA = lazy(() => 
  import('./components').then(module => ({ default: module.ComponentA }))
);

const ComponentB = lazy(() => 
  import('./components').then(module => ({ default: module.ComponentB }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentA />
      <ComponentB />
    </Suspense>
  );
}
```

### Suspense for Data Fetching (Experimental):

```jsx
import React, { Suspense } from 'react';

// Resource wrapper (simplified example)
function wrapPromise(promise) {
  let status = 'pending';
  let result;
  
  const suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    }
  };
}

// Fetch data
const fetchUser = () => 
  fetch('/api/user').then(res => res.json());

const userResource = wrapPromise(fetchUser());

// Component that uses Suspense for data
function UserProfile() {
  // This will suspend if data isn't ready
  const user = userResource.read();
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>User Profile</h1>
      <Suspense fallback={<div>Loading user data...</div>}>
        <UserProfile />
      </Suspense>
    </div>
  );
}
```

### Advanced Suspense Patterns:

```jsx
import React, { Suspense, lazy } from 'react';

// Multiple fallback levels
function App() {
  return (
    <Suspense fallback={<div>Loading app...</div>}>
      <Header />
      
      <Suspense fallback={<div>Loading sidebar...</div>}>
        <Sidebar />
      </Suspense>

      <Suspense fallback={<div>Loading main content...</div>}>
        <MainContent />
      </Suspense>

      <Footer />
    </Suspense>
  );
}

// Preloading components
const Dashboard = lazy(() => import('./Dashboard'));

function NavigationButton() {
  const handleMouseEnter = () => {
    // Preload component on hover
    import('./Dashboard');
  };

  return (
    <button 
      onMouseEnter={handleMouseEnter}
      onClick={() => navigateToDashboard()}
    >
      Go to Dashboard
    </button>
  );
}

// Error handling with Suspense
function AppWithErrorBoundary() {
  return (
    <ErrorBoundary fallback={<div>Error loading component</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

// Custom loading component with timeout
function LoadingWithTimeout({ timeout = 5000 }) {
  const [showSlow, setShowSlow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowSlow(true), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <div>
      <div className="spinner" />
      <p>Loading...</p>
      {showSlow && <p>This is taking longer than usual...</p>}
    </div>
  );
}
```

### Best Practices:

1. **Use lazy loading for routes** - Separate bundles per route
2. **Lazy load heavy components** - Modals, charts, editors
3. **Provide meaningful fallbacks** - Show loading states
4. **Combine with Error Boundaries** - Handle loading failures
5. **Preload on interaction** - Import on hover/focus
6. **Don't over-split** - Balance bundle size vs HTTP requests
7. **Use Suspense boundaries strategically** - Don't wrap too granularly

### Performance Impact:

```jsx
// ❌ Without code splitting - Large initial bundle
import Dashboard from './Dashboard';      // 500KB
import Analytics from './Analytics';      // 300KB
import Settings from './Settings';        // 200KB
// Total: 1MB loaded immediately

// ✅ With code splitting - Small initial + load on demand
const Dashboard = lazy(() => import('./Dashboard'));  // Loaded when route visited
const Analytics = lazy(() => import('./Analytics'));  // Loaded when route visited
const Settings = lazy(() => import('./Settings'));    // Loaded when route visited
// Initial bundle: ~100KB, rest loads as needed
```

**Key Takeaways:**
- **Suspense** shows fallback UI while waiting
- **Lazy** splits code and loads on demand
- Great for improving initial load time
- Works best with route-based splitting
- Combine with Error Boundaries for robust loading

## React and SEO

# React and SEO: Complete Guide

## 65. How does React affect SEO?

React can negatively impact SEO when used with **Client-Side Rendering (CSR)** because search engines may struggle to index JavaScript-heavy applications.

### How React Affects SEO:

#### **Negative Impacts (CSR):**

1. **Empty HTML Shell** - Initial HTML has no content
2. **Search Engine Crawling Issues** - Bots may not wait for JS execution
3. **Slow First Contentful Paint** - Content appears after JS loads
4. **Meta Tags Problems** - Dynamic meta tags not recognized
5. **Poor Social Media Sharing** - No preview images/descriptions
6. **Increased Load Time** - JavaScript must download and execute first

#### **Example of SEO Problem:**

```html
<!-- What search engines see with CSR React app -->
<!DOCTYPE html>
<html>
  <head>
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>  <!-- Empty! No content for crawlers -->
    <script src="/bundle.js"></script>
  </body>
</html>
```

```jsx
// React renders content in browser AFTER JavaScript loads
function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // This data isn't visible to search engines initially
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Modern Search Engines & React:

**Google (Googlebot):**
- Can execute JavaScript and render React apps
- But rendering happens in a **second wave** of indexing (delayed)
- May timeout on slow sites or complex JavaScript
- Still prefers server-rendered HTML

**Bing, Baidu, Yandex:**
- Limited or no JavaScript execution
- Heavily penalizes CSR-only React apps

**Social Media Crawlers (Facebook, Twitter):**
- **Don't execute JavaScript** at all
- Require static HTML with meta tags

### Comparison Table:

| Factor | CSR (Client-Side) | SSR (Server-Side) | SSG (Static) |
|--------|-------------------|-------------------|--------------|
| SEO | ⚠️ Poor | ✅ Excellent | ✅ Excellent |
| Initial Load | ❌ Slow | ✅ Fast | ✅ Fast |
| Social Sharing | ❌ Broken | ✅ Works | ✅ Works |
| Crawlability | ⚠️ Delayed | ✅ Immediate | ✅ Immediate |
| Dynamic Content | ✅ Easy | ✅ Easy | ⚠️ Build-time |

---

## 66. What strategies would you use to make a React application SEO-friendly?

Here are comprehensive strategies to optimize React apps for search engines:

### 1. **Use Server-Side Rendering (SSR) or Static Site Generation (SSG)**

```jsx
// Next.js - SSR (renders on every request)
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  return {
    props: { products }
  };
}

export default function Products({ products }) {
  return (
    <div>
      <h1>Our Products</h1>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// Next.js - SSG (renders at build time)
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  return {
    props: { products },
    revalidate: 3600 // Regenerate every hour (ISR)
  };
}
```

### 2. **Implement Dynamic Meta Tags**

```jsx
// Using React Helmet for meta tags
import { Helmet } from 'react-helmet-async';

function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        {/* Title Tag */}
        <title>{product.name} - Buy Now | MyStore</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content={product.description.substring(0, 160)} 
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://mystore.com/products/${product.slug}`} />
        
        {/* Open Graph (Facebook) */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://mystore.com/products/${product.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.image,
            "description": product.description,
            "offers": {
              "@type": "Offer",
              "price": product.price,
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
      </div>
    </>
  );
}
```

```jsx
// Next.js built-in Head component
import Head from 'next/head';

function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>{product.name} - MyStore</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:image" content={product.image} />
      </Head>

      <div>
        <h1>{product.name}</h1>
        {/* Content */}
      </div>
    </>
  );
}
```

### 3. **Implement Proper URL Structure and Routing**

```jsx
// Use React Router with meaningful URLs
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Good: Descriptive URLs */}
        <Route path="/products/:category/:slug" element={<ProductPage />} />
        <Route path="/blog/:year/:month/:slug" element={<BlogPost />} />
        <Route path="/about-us" element={<About />} />
        
        {/* ❌ Bad: Generic URLs */}
        {/* <Route path="/product?id=123" element={<ProductPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// Generate sitemap.xml
function generateSitemap(products, posts) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://mysite.com/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${products.map(p => `
        <url>
          <loc>https://mysite.com/products/${p.slug}</loc>
          <lastmod>${p.updatedAt}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>
  `;
  
  return sitemap;
}
```

### 4. **Optimize Images and Media**

```jsx
// Image optimization component
function OptimizedImage({ src, alt, width, height }) {
  return (
    <picture>
      {/* WebP for modern browsers */}
      <source 
        type="image/webp" 
        srcSet={`${src}.webp 1x, ${src}@2x.webp 2x`} 
      />
      
      {/* Fallback */}
      <img 
        src={src}
        alt={alt}  // Always include descriptive alt text
        width={width}
        height={height}  // Prevent layout shift
        loading="lazy"  // Native lazy loading
        decoding="async"
      />
    </picture>
  );
}

// Next.js Image component (automatic optimization)
import Image from 'next/image';

function ProductImage({ product }) {
  return (
    <Image
      src={product.image}
      alt={`${product.name} - High quality product image`}
      width={600}
      height={400}
      priority={false}  // Lazy load below fold
      placeholder="blur"
      blurDataURL={product.thumbnailBase64}
    />
  );
}
```

### 5. **Implement Structured Data (Schema.org)**

```jsx
function ArticlePage({ article }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.image,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Person",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "MyBlog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myblog.com/logo.png"
      }
    },
    "description": article.excerpt
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <article>
        <h1>{article.title}</h1>
        <time dateTime={article.publishedAt}>
          {new Date(article.publishedAt).toLocaleDateString()}
        </time>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </>
  );
}

// Breadcrumb Schema
function Breadcrumbs({ items }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <nav aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={index}>
            <a href={item.url}>{item.name}</a>
            {index < items.length - 1 && ' > '}
          </span>
        ))}
      </nav>
    </>
  );
}
```

### 6. **Semantic HTML and Accessibility**

```jsx
// ✅ Good: Semantic HTML
function BlogPost({ post }) {
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.formattedDate}</time>
      </header>
      
      <main>
        <p>{post.content}</p>
      </main>
      
      <footer>
        <nav aria-label="Related posts">
          <h2>Related Articles</h2>
          <ul>
            {post.related.map(r => (
              <li key={r.id}>
                <a href={r.url}>{r.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </article>
  );
}

// ❌ Bad: Div soup
function BlogPostBad({ post }) {
  return (
    <div>
      <div>
        <div>{post.title}</div>
        <div>{post.date}</div>
      </div>
      <div>{post.content}</div>
    </div>
  );
}
```

### 7. **Performance Optimization**

```jsx
// Code splitting for faster initial load
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// Prefetch important pages
function Navigation() {
  const prefetchPage = (url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  };

  return (
    <nav>
      <a 
        href="/products" 
        onMouseEnter={() => prefetchPage('/products')}
      >
        Products
      </a>
    </nav>
  );
}
```

### 8. **Create robots.txt and Sitemap**

```txt
# public/robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://mysite.com/sitemap.xml
```

```jsx
// Generate dynamic sitemap in Next.js
// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
  const products = await fetchAllProducts();
  const posts = await fetchAllPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${products.map(p => `
        <url>
          <loc>https://mysite.com/products/${p.slug}</loc>
          <lastmod>${p.updatedAt}</lastmod>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
```

### 9. **Mobile Optimization**

```jsx
// Responsive meta tags
<Helmet>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="mobile-web-app-capable" content="yes" />
</Helmet>

// Mobile-first CSS
const styles = {
  container: {
    padding: '1rem',
    '@media (min-width: 768px)': {
      padding: '2rem'
    }
  }
};
```

### 10. **Monitor and Test**

```jsx
// Add Google Analytics
function App() {
  useEffect(() => {
    // Track page views
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: window.location.pathname
    });
  }, []);

  return <YourApp />;
}

// Performance monitoring
function reportWebVitals(metric) {
  // Send to analytics
  console.log(metric);
}
```

---

## 67. How can server-side rendering improve SEO with React applications?

**Server-Side Rendering (SSR)** dramatically improves SEO by sending fully-rendered HTML to search engines and users, solving most React SEO problems.

### How SSR Improves SEO:

#### **1. Immediate Content Availability**

```jsx
// ❌ CSR - Search engines see empty HTML
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>  <!-- Empty -->
    <script src="bundle.js"></script>
  </body>
</html>

// ✅ SSR - Search engines see full content
<!DOCTYPE html>
<html>
  <head>
    <title>Buy iPhone 15 Pro - Best Price</title>
    <meta name="description" content="iPhone 15 Pro with..." />
  </head>
  <body>
    <div id="root">
      <h1>iPhone 15 Pro</h1>
      <p>The most advanced iPhone ever...</p>
      <img src="iphone.jpg" alt="iPhone 15 Pro" />
      <button>Add to Cart - $999</button>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```

#### **2. Faster First Contentful Paint (FCP)**

```
CSR Flow:
1. Browser requests page (100ms)
2. Downloads HTML shell (50ms)
3. Downloads JavaScript bundle (500ms)
4. Executes JavaScript (300ms)
5. Fetches data from API (200ms)
6. Renders content (100ms)
Total: 1.25 seconds

SSR Flow:
1. Browser requests page (100ms)
2. Server renders React + fetches data (200ms)
3. Sends complete HTML (100ms)
4. Content visible immediately!
5. JavaScript hydrates in background
Total: 400ms to visible content
```

#### **3. Better Social Media Sharing**

```jsx
// SSR automatically provides meta tags for social media
export async function getServerSideProps({ params }) {
  const product = await fetchProduct(params.id);

  return {
    props: { product }
  };
}

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        {/* These tags are available immediately for Facebook/Twitter */}
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        
        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:image" content={product.image} />
      </Head>

      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
      </div>
    </>
  );
}
```

**Result:** When shared on Facebook/Twitter, shows proper image and description instead of generic site info.

#### **4. Complete Implementation Example**

```jsx
// pages/products/[slug].js - Next.js SSR
import Head from 'next/head';

// This runs on the server for each request
export async function getServerSideProps({ params, req }) {
  // Fetch product data on server
  const product = await fetch(
    `https://api.mystore.com/products/${params.slug}`
  ).then(res => res.json());

  // If product not found, return 404
  if (!product) {
    return {
      notFound: true
    };
  }

  // Get user location from request headers for personalization
  const userCountry = req.headers['cf-ipcountry'] || 'US';
  const localizedPrice = await getLocalizedPrice(product.price, userCountry);

  return {
    props: {
      product,
      localizedPrice,
      canonicalUrl: `https://mystore.com/products/${params.slug}`
    }
  };
}

export default function ProductPage({ product, localizedPrice, canonicalUrl }) {
  // Schema.org structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "price": localizedPrice.amount,
      "priceCurrency": localizedPrice.currency,
      "availability": product.inStock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{product.name} - {product.brand} | MyStore</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.mainImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="product:price:amount" content={localizedPrice.amount} />
        <meta property="product:price:currency" content={localizedPrice.currency} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.mainImage} />

        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>

      <article itemScope itemType="https://schema.org/Product">
        {/* Breadcrumbs for SEO */}
        <nav aria-label="Breadcrumb">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href="/"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href={`/${product.category}`}>
                <span itemProp="name">{product.category}</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">{product.name}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Product content */}
        <h1 itemProp="name">{product.name}</h1>
        
        <img 
          itemProp="image"
          src={product.mainImage} 
          alt={`${product.name} - ${product.brand}`}
          width="600"
          height="600"
        />

        <div itemProp="description">
          {product.description}
        </div>

        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <span itemProp="price">{localizedPrice.formatted}</span>
          <meta itemProp="priceCurrency" content={localizedPrice.currency} />
          <link itemProp="availability" href={
            product.inStock 
              ? "https://schema.org/InStock" 
              : "https://schema.org/OutOfStock"
          } />
        </div>

        {/* Reviews section with schema */}
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <span itemProp="ratingValue">{product.rating}</span> stars
          (<span itemProp="reviewCount">{product.reviewCount}</span> reviews)
        </div>
      </article>
    </>
  );
}
```

#### **5. SSR with Dynamic Data**

```jsx
// Real-time content that still needs SEO
export async function getServerSideProps({ params, req }) {
  // Fetch multiple data sources in parallel
  const [product, reviews, recommendations] = await Promise.all([
    fetchProduct(params.slug),
    fetchReviews(params.slug),
    fetchRecommendations(params.slug)
  ]);

  return {
    props: {
      product,
      reviews,
      recommendations,
      // Pass server time for freshness
      serverTime: new Date().toISOString()
    }
  };
}
```

#### **6. Hybrid Rendering (Best of Both Worlds)**

```jsx
// Static generation for stable content + ISR for updates
export async function getStaticProps({ params }) {
  const product = await fetchProduct(params.slug);

  return {
    props: { product },
    // Incremental Static Regeneration
    // Rebuild page every 60 seconds if requested
    revalidate: 60
  };
}

// Define which pages to pre-render
export async function getStaticPaths() {
  const products = await fetchPopularProducts();

  return {
    paths: products.map(p => ({ params: { slug: p.slug } })),
    fallback: 'blocking' // SSR for pages not pre-rendered
  };
}
```

### SSR Benefits Summary:

| Benefit | Impact |
|---------|--------|
| **Immediate Indexing** | Search engines see full content instantly |
| **Social Sharing** | Proper previews on Facebook/Twitter |
| **First Paint** | Content visible 3-5x faster |
| **JavaScript-Free** | Works without JS (accessibility) |
| **Dynamic Meta Tags** | Unique titles/descriptions per page |
| **Structured Data** | Rich snippets in search results |
| **Mobile Performance** | Faster on slow networks/devices |
| **Conversion Rate** | Faster load = more sales |

### Performance Comparison:

```
Metric               CSR          SSR          SSG
-------------------------------------------------
Time to First Byte   50ms         200ms        50ms
First Paint          1000ms       300ms        200ms
SEO Score            60/100       95/100       100/100
Social Sharing       ❌           ✅           ✅
Dynamic Content      ✅           ✅           ⚠️
Server Cost          Low          High         Low
```

**Best Practice:** Use SSG for static content (blog, marketing), SSR for dynamic content (product pages, user dashboards), and CSR for interactive features (after hydration).

## React Native

# React Native: Complete Guide

## 68. What is React Native and how is it different from React?

**React Native** is a framework for building native mobile applications (iOS and Android) using React and JavaScript. It allows you to write mobile apps using React syntax that compile to native platform components.

### Key Differences:

| Aspect | React (Web) | React Native (Mobile) |
|--------|-------------|----------------------|
| **Platform** | Web browsers | iOS & Android apps |
| **Rendering** | DOM elements | Native components |
| **Styling** | CSS | StyleSheet (CSS-like) |
| **Components** | `<div>`, `<span>`, `<button>` | `<View>`, `<Text>`, `<TouchableOpacity>` |
| **Navigation** | React Router | React Navigation |
| **Events** | onClick, onChange | onPress, onChangeText |
| **Layout** | Flexbox + CSS Grid | Flexbox only |
| **Output** | HTML/CSS/JS | Native iOS/Android code |
| **Performance** | Browser rendering | Native rendering |
| **Access** | Web APIs | Native device APIs |

### Core Concepts:

#### **1. Component Differences**

```jsx
// ❌ React (Web) - Uses HTML elements
import React from 'react';

function WebApp() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <p>Welcome to my app</p>
      <button onClick={handleClick}>
        Click Me
      </button>
      <input 
        type="text" 
        placeholder="Enter text"
        onChange={handleChange}
      />
    </div>
  );
}
```

```jsx
// ✅ React Native - Uses native components
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

function MobileApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text>Welcome to my app</Text>
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Enter text"
        onChangeText={handleChange}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  }
});
```

#### **2. Styling Differences**

```jsx
// React (Web) - CSS
<div style={{ 
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',
  padding: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}}>
  <p style={{ color: 'red', fontSize: '16px' }}>Text</p>
</div>

// React Native - StyleSheet
import { View, Text, StyleSheet } from 'react-native';

<View style={styles.container}>
  <Text style={styles.text}>Text</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3  // Android shadow
  },
  text: {
    color: 'red',
    fontSize: 16
  }
});
```

#### **3. Platform-Specific Code**

```jsx
import { Platform, StyleSheet } from 'react-native';

// Platform module for conditional code
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3
      },
      android: {
        elevation: 5
      }
    })
  }
});

// Platform-specific files
// Button.ios.js - Used on iOS
// Button.android.js - Used on Android
// Button.js - Fallback
```

#### **4. Complete React Native Example**

```jsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch todos
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.example.com/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    } else {
      Alert.alert('Invalid Input', 'Please enter a todo');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    Alert.alert(
      'Delete Todo',
      'Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => setTodos(todos.filter(todo => todo.id !== id))
        }
      ]
    );
  };

  const renderTodo = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity 
        onPress={() => toggleTodo(item.id)}
        style={styles.todoContent}
      >
        <Text style={[
          styles.todoText,
          item.completed && styles.completedText
        ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => deleteTodo(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a todo..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
        <TouchableOpacity 
          style={styles.addButton}
          onPress={addTodo}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No todos yet!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    fontSize: 16
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  listContainer: {
    padding: 15
  },
  todoItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  todoContent: {
    flex: 1
  },
  todoText: {
    fontSize: 16,
    color: '#333'
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999'
  },
  deleteButton: {
    backgroundColor: '#ff3b30',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: 'center'
  },
  deleteText: {
    color: '#fff',
    fontWeight: '600'
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
    marginTop: 50
  }
});

export default TodoApp;
```

#### **5. Native Device APIs**

```jsx
import {
  Camera,
  Geolocation,
  AsyncStorage,
  Linking,
  Share,
  Vibration
} from 'react-native';

// Camera access
import { Camera } from 'expo-camera';

function CameraComponent() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return <Camera style={{ flex: 1 }} />;
}

// Geolocation
import * as Location from 'expo-location';

async function getLocation() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status === 'granted') {
    const location = await Location.getCurrentPositionAsync({});
    console.log(location.coords.latitude, location.coords.longitude);
  }
}

// Local storage
import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveData() {
  await AsyncStorage.setItem('userToken', 'abc123');
}

async function getData() {
  const token = await AsyncStorage.getItem('userToken');
  return token;
}

// Share content
import { Share } from 'react-native';

async function shareContent() {
  await Share.share({
    message: 'Check out this app!',
    url: 'https://myapp.com'
  });
}
```

### How React Native Works:

```
┌─────────────────────────────────────────┐
│         JavaScript Thread               │
│   (Your React Native Code)             │
│   - React components                    │
│   - Business logic                      │
│   - State management                    │
└───────────────┬─────────────────────────┘
                │
                │ Bridge (JSON messages)
                │
┌───────────────▼─────────────────────────┐
│         Native Thread                   │
│   - UIKit (iOS) / Android Views         │
│   - Native modules                      │
│   - Device APIs                         │
└─────────────────────────────────────────┘
```

**New Architecture (Fabric & TurboModules):**
- Direct JSI (JavaScript Interface) instead of Bridge
- Synchronous native calls
- Better performance

---

## 69. How do you bridge native modules in React Native?

**Native Modules** allow you to write platform-specific code (Swift/Objective-C for iOS, Java/Kotlin for Android) and call it from JavaScript in React Native.

### When to Use Native Modules:

1. **Access native APIs** not available in React Native
2. **Performance-critical operations** (image processing, complex calculations)
3. **Use existing native libraries** (SDKs, frameworks)
4. **Custom native UI components**
5. **Background tasks** (location tracking, push notifications)

### Creating a Native Module:

#### **iOS (Swift) Native Module:**

```swift
// RCTCalendarModule.swift
import Foundation

@objc(CalendarModule)
class CalendarModule: NSObject {
  
  // Export module to JavaScript
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  // Simple method
  @objc
  func createCalendarEvent(_ name: String, location: String) {
    print("Creating event: \(name) at \(location)")
    // iOS Calendar API code here
  }
  
  // Method with callback
  @objc
  func findEvents(_ callback: @escaping RCTResponseSenderBlock) {
    let events = ["Event 1", "Event 2", "Event 3"]
    callback([NSNull(), events])  // [error, result]
  }
  
  // Method with promise
  @objc
  func getEventCount(_ resolve: @escaping RCTPromiseResolveBlock,
                     rejecter reject: @escaping RCTPromiseRejectBlock) {
    let count = 42
    
    if count > 0 {
      resolve(count)
    } else {
      let error = NSError(domain: "", code: 404, userInfo: nil)
      reject("EVENT_ERROR", "No events found", error)
    }
  }
  
  // Send events to JavaScript
  @objc
  func addEvent(_ name: String) {
    // Emit event to JavaScript
    self.sendEvent(withName: "EventAdded", body: ["name": name])
  }
  
  // Register events that can be sent to JS
  @objc
  override func supportedEvents() -> [String]! {
    return ["EventAdded"]
  }
}

// RCTCalendarModule.m - Bridge file
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(CalendarModule, RCTEventEmitter)

RCT_EXTERN_METHOD(createCalendarEvent:(NSString *)name 
                  location:(NSString *)location)

RCT_EXTERN_METHOD(findEvents:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(getEventCount:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name)

@end
```

#### **Android (Kotlin) Native Module:**

```kotlin
// CalendarModule.kt
package com.myapp

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class CalendarModule(reactContext: ReactApplicationContext) : 
    ReactContextBaseJavaModule(reactContext) {
  
  // Module name (used in JavaScript)
  override fun getName(): String {
    return "CalendarModule"
  }
  
  // Simple method
  @ReactMethod
  fun createCalendarEvent(name: String, location: String) {
    println("Creating event: $name at $location")
    // Android Calendar API code here
  }
  
  // Method with callback
  @ReactMethod
  fun findEvents(callback: Callback) {
    val events = arrayOf("Event 1", "Event 2", "Event 3")
    callback.invoke(null, events)  // (error, result)
  }
  
  // Method with promise
  @ReactMethod
  fun getEventCount(promise: Promise) {
    try {
      val count = 42
      if (count > 0) {
        promise.resolve(count)
      } else {
        promise.reject("EVENT_ERROR", "No events found")
      }
    } catch (e: Exception) {
      promise.reject("EVENT_ERROR", e)
    }
  }
  
  // Send events to JavaScript
  @ReactMethod
  fun addEvent(name: String) {
    val params = Arguments.createMap().apply {
      putString("name", name)
    }
    sendEvent("EventAdded", params)
  }
  
  private fun sendEvent(eventName: String, params: WritableMap?) {
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(eventName, params)
  }
}

// CalendarPackage.kt - Register module
package com.myapp

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class CalendarPackage : ReactPackage {
  override fun createNativeModules(
    reactContext: ReactApplicationContext
  ): List<NativeModule> {
    return listOf(CalendarModule(reactContext))
  }

  override fun createViewManagers(
    reactContext: ReactApplicationContext
  ): List<ViewManager<*, *>> {
    return emptyList()
  }
}

// MainApplication.java - Add package
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new CalendarPackage()  // Add this
  );
}
```

#### **Using Native Module in JavaScript:**

```jsx
// CalendarManager.js - JavaScript wrapper
import { NativeModules, NativeEventEmitter } from 'react-native';

const { CalendarModule } = NativeModules;

// Create event emitter
const calendarEmitter = new NativeEventEmitter(CalendarModule);

// Export wrapped methods
export default {
  // Simple call
  createEvent: (name, location) => {
    CalendarModule.createCalendarEvent(name, location);
  },

  // With callback
  findEvents: (callback) => {
    CalendarModule.findEvents((error, events) => {
      if (error) {
        console.error(error);
      } else {
        callback(events);
      }
    });
  },

  // With promise (recommended)
  getEventCount: async () => {
    try {
      const count = await CalendarModule.getEventCount();
      return count;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // Listen to events
  addListener: (callback) => {
    return calendarEmitter.addListener('EventAdded', callback);
  },

  removeAllListeners: () => {
    calendarEmitter.removeAllListeners('EventAdded');
  }
};
```

```jsx
// App.js - Using the native module
import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import CalendarManager from './CalendarManager';

function App() {
  const [eventCount, setEventCount] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event count
    fetchEventCount();

    // Listen for new events
    const subscription = CalendarManager.addListener((event) => {
      console.log('New event added:', event.name);
      fetchEventCount();
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const fetchEventCount = async () => {
    try {
      const count = await CalendarManager.getEventCount();
      setEventCount(count);
    } catch (error) {
      console.error('Failed to fetch event count:', error);
    }
  };

  const handleCreateEvent = () => {
    CalendarManager.createEvent('Team Meeting', 'Office');
  };

  const handleFindEvents = () => {
    CalendarManager.findEvents((foundEvents) => {
      setEvents(foundEvents);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Event Count: {eventCount}</Text>
      
      <Button 
        title="Create Event" 
        onPress={handleCreateEvent} 
      />
      
      <Button 
        title="Find Events" 
        onPress={handleFindEvents} 
      />

      {events.map((event, index) => (
        <Text key={index}>{event}</Text>
      ))}
    </View>
  );
}

export default App;
```

### Advanced Example - Native UI Component:

```swift
// iOS - CustomButtonManager.swift
import UIKit

@objc(CustomButtonManager)
class CustomButtonManager: RCTViewManager {
  
  override func view() -> UIView! {
    return CustomButton()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

class CustomButton: UIButton {
  @objc var onCustomPress: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    addTarget(self, action: #selector(buttonTapped), for: .touchUpInside)
    backgroundColor = .blue
    setTitleColor(.white, for: .normal)
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  @objc func buttonTapped() {
    if let onCustomPress = onCustomPress {
      onCustomPress(["message": "Button pressed!"])
    }
  }
  
  @objc func setButtonTitle(_ title: String) {
    setTitle(title, for: .normal)
  }
}

// CustomButtonManager.m
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CustomButtonManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(onCustomPress, RCTBubblingEventBlock)
RCT_EXTERN_METHOD(setButtonTitle:(NSString *)title)
@end
```

```jsx
// JavaScript component
import { requireNativeComponent } from 'react-native';

const CustomButton = requireNativeComponent('CustomButtonManager');

function MyComponent() {
  return (
    <CustomButton
      style={{ width: 200, height: 50 }}
      onCustomPress={(event) => {
        console.log(event.nativeEvent.message);
      }}
    />
  );
}
```

### Using Third-Party Native Libraries:

```javascript
// Install native module
// npm install react-native-camera
// cd ios && pod install

// Link manually if needed (older RN versions)
// react-native link react-native-camera

// Use in your app
import { RNCamera } from 'react-native-camera';

function CameraScreen() {
  return (
    <RNCamera
      style={{ flex: 1 }}
      type={RNCamera.Constants.Type.back}
      onBarCodeRead={({ data }) => {
        console.log('Scanned:', data);
      }}
    />
  );
}
```

### Best Practices:

1. **Use Promises over Callbacks** - Modern async/await syntax
2. **Type Safety** - Use TypeScript for native module interfaces
3. **Error Handling** - Always handle native errors gracefully
4. **Threading** - Keep heavy operations off main thread
5. **Memory Management** - Clean up listeners and resources
6. **Platform Checks** - Use Platform.OS for conditional code
7. **Documentation** - Document native module APIs clearly

### Modern Alternative - Turbo Modules (New Architecture):

```jsx
// Turbo Module specification
import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getEventCount(): Promise<number>;
  createEvent(name: string, location: string): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('CalendarModule');
```

**Benefits of Turbo Modules:**
- Type-safe by default
- Lazy loading (loaded when needed)
- Synchronous calls possible
- Better performance
- Easier to maintain

**Key Takeaway:** Native modules bridge the gap between JavaScript and native code, allowing React Native apps to access any native functionality while maintaining the React development experience.

# React Native Layout System

React Native uses **Flexbox** for layout, which is similar to CSS Flexbox but with some differences. It provides a powerful and flexible way to arrange components on the screen.

## Key Concepts

### 1. **Flexbox by Default**
Every component in React Native uses Flexbox layout by default. The main differences from web CSS:
- `flexDirection` defaults to `column` (not `row`)
- `alignContent` defaults to `flex-start` (not `stretch`)
- `flexShrink` defaults to `0` (not `1`)

### 2. **Main Layout Properties**

**flex**: Defines how a component should grow or shrink
**flexDirection**: Defines the primary axis (`row`, `column`, `row-reverse`, `column-reverse`)
**justifyContent**: Aligns children along the main axis
**alignItems**: Aligns children along the cross axis
**flexWrap**: Controls whether children wrap to new lines

## Example: Complete Layout System Demo

```javascript
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LayoutExample = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Example 1: Basic Flex */}
      <View style={styles.section}>
        <Text style={styles.title}>1. Basic Flex Distribution</Text>
        <View style={styles.row}>
          <View style={[styles.box, styles.box1, { flex: 1 }]}>
            <Text style={styles.boxText}>flex: 1</Text>
          </View>
          <View style={[styles.box, styles.box2, { flex: 2 }]}>
            <Text style={styles.boxText}>flex: 2</Text>
          </View>
          <View style={[styles.box, styles.box3, { flex: 1 }]}>
            <Text style={styles.boxText}>flex: 1</Text>
          </View>
        </View>
      </View>

      {/* Example 2: Flex Direction */}
      <View style={styles.section}>
        <Text style={styles.title}>2. Flex Direction</Text>
        <View style={[styles.row, { flexDirection: 'row' }]}>
          <View style={[styles.smallBox, styles.box1]}>
            <Text style={styles.boxText}>1</Text>
          </View>
          <View style={[styles.smallBox, styles.box2]}>
            <Text style={styles.boxText}>2</Text>
          </View>
          <View style={[styles.smallBox, styles.box3]}>
            <Text style={styles.boxText}>3</Text>
          </View>
        </View>
        <Text style={styles.label}>flexDirection: 'row'</Text>

        <View style={[styles.row, { flexDirection: 'column' }]}>
          <View style={[styles.smallBox, styles.box1]}>
            <Text style={styles.boxText}>1</Text>
          </View>
          <View style={[styles.smallBox, styles.box2]}>
            <Text style={styles.boxText}>2</Text>
          </View>
          <View style={[styles.smallBox, styles.box3]}>
            <Text style={styles.boxText}>3</Text>
          </View>
        </View>
        <Text style={styles.label}>flexDirection: 'column'</Text>
      </View>

      {/* Example 3: Justify Content */}
      <View style={styles.section}>
        <Text style={styles.title}>3. Justify Content (Main Axis)</Text>
        
        <View style={[styles.row, { justifyContent: 'flex-start' }]}>
          <View style={[styles.smallBox, styles.box1]} />
          <View style={[styles.smallBox, styles.box2]} />
          <View style={[styles.smallBox, styles.box3]} />
        </View>
        <Text style={styles.label}>justifyContent: 'flex-start'</Text>

        <View style={[styles.row, { justifyContent: 'center' }]}>
          <View style={[styles.smallBox, styles.box1]} />
          <View style={[styles.smallBox, styles.box2]} />
          <View style={[styles.smallBox, styles.box3]} />
        </View>
        <Text style={styles.label}>justifyContent: 'center'</Text>

        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <View style={[styles.smallBox, styles.box1]} />
          <View style={[styles.smallBox, styles.box2]} />
          <View style={[styles.smallBox, styles.box3]} />
        </View>
        <Text style={styles.label}>justifyContent: 'space-between'</Text>

        <View style={[styles.row, { justifyContent: 'space-around' }]}>
          <View style={[styles.smallBox, styles.box1]} />
          <View style={[styles.smallBox, styles.box2]} />
          <View style={[styles.smallBox, styles.box3]} />
        </View>
        <Text style={styles.label}>justifyContent: 'space-around'</Text>
      </View>

      {/* Example 4: Align Items */}
      <View style={styles.section}>
        <Text style={styles.title}>4. Align Items (Cross Axis)</Text>
        
        <View style={[styles.tallRow, { alignItems: 'flex-start' }]}>
          <View style={[styles.smallBox, styles.box1]} />
          <View style={[styles.smallBox, styles.box2]} />
          <View style={[styles.smallBox, styles.box3]} />
        </View>
        <Text style={styles.label}>alignItems: 'flex-start'</Text>

        <View style={[styles.tallRow, { alignItems: 'center' }]}>
          <View style={[styles.smallBox, styles.box1]} />
          <View style={[styles.smallBox, styles.box2]} />
          <View style={[styles.smallBox, styles.box3]} />
        </View>
        <Text style={styles.label}>alignItems: 'center'</Text>

        <View style={[styles.tallRow, { alignItems: 'flex-end' }]}>
          <View style={[styles.smallBox, styles.box1]} />
          <View style={[styles.smallBox, styles.box2]} />
          <View style={[styles.smallBox, styles.box3]} />
        </View>
        <Text style={styles.label}>alignItems: 'flex-end'</Text>
      </View>

      {/* Example 5: Position Absolute */}
      <View style={styles.section}>
        <Text style={styles.title}>5. Position Absolute</Text>
        <View style={styles.relativeContainer}>
          <View style={[styles.absoluteBox, styles.topLeft]}>
            <Text style={styles.boxText}>Top Left</Text>
          </View>
          <View style={[styles.absoluteBox, styles.topRight]}>
            <Text style={styles.boxText}>Top Right</Text>
          </View>
          <View style={[styles.absoluteBox, styles.bottomLeft]}>
            <Text style={styles.boxText}>Bottom Left</Text>
          </View>
          <View style={[styles.absoluteBox, styles.bottomRight]}>
            <Text style={styles.boxText}>Bottom Right</Text>
          </View>
        </View>
      </View>

      {/* Example 6: Practical Card Layout */}
      <View style={styles.section}>
        <Text style={styles.title}>6. Practical Card Layout</Text>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>User Profile</Text>
            <Text style={styles.cardSubtitle}>Active</Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.avatar} />
            <View style={styles.cardInfo}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>john@example.com</Text>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Message</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>View Profile</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
  },
  tallRow: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  smallBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#FF6B6B',
  },
  box2: {
    backgroundColor: '#4ECDC4',
  },
  box3: {
    backgroundColor: '#45B7D1',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  relativeContainer: {
    position: 'relative',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  absoluteBox: {
    position: 'absolute',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    borderRadius: 4,
  },
  topLeft: {
    top: 10,
    left: 10,
  },
  topRight: {
    top: 10,
    right: 10,
  },
  bottomLeft: {
    bottom: 10,
    left: 10,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#4CAF50',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4ECDC4',
    marginRight: 16,
  },
  cardInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default LayoutExample;
```

## Key Differences from Web CSS

| Property | React Native | Web CSS |
|----------|-------------|---------|
| `flexDirection` | `column` (default) | `row` (default) |
| Units | Numbers (density-independent pixels) | px, em, rem, % |
| `position` | Only `relative` and `absolute` | relative, absolute, fixed, sticky |
| Box Model | All dimensions are unitless | Various units available |

## Common Layout Patterns

1. **Centering Content**: Use `justifyContent: 'center'` and `alignItems: 'center'`
2. **Full Width**: Use `flex: 1` or `width: '100%'`
3. **Spacing**: Use `margin` and `padding` properties
4. **Responsive**: Use `Dimensions` API or percentage-based widths

This layout system makes it easy to create responsive, flexible UIs that work across different screen sizes!

## State Management Libraries & GraphQL

# 71. What is Apollo Client and how does it integrate with React?

## What is Apollo Client?

**Apollo Client** is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It's the most popular GraphQL client for React applications.

### Key Features:
- **Declarative data fetching** with queries and mutations
- **Intelligent caching** with automatic updates
- **Optimistic UI** updates
- **Pagination** support
- **Real-time updates** with subscriptions
- **Error handling** and loading states
- **DevTools** for debugging

## Integration with React

### Installation

```bash
npm install @apollo/client graphql
```

### Basic Setup Example

```javascript
// App.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, useMutation } from '@apollo/client';

// 1. Create Apollo Client instance
const client = new ApolloClient({
  uri: 'https://api.example.com/graphql', // Your GraphQL endpoint
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('token') || '',
  }
});

// 2. Define GraphQL queries
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
      avatar
    }
  }
`;

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
        content
      }
    }
  }
`;

// 3. Define GraphQL mutations
const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String!) {
    updateUser(id: $id, name: $name) {
      id
      name
      email
    }
  }
`;

// 4. Component using useQuery hook
function UsersList() {
  const { loading, error, data, refetch } = useQuery(GET_USERS, {
    pollInterval: 5000, // Poll every 5 seconds (optional)
    fetchPolicy: 'cache-and-network', // Fetch policy
  });

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Users List</h2>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 5. Component using useMutation hook
function CreateUserForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    // Update cache after mutation
    update(cache, { data: { createUser } }) {
      const existingUsers = cache.readQuery({ query: GET_USERS });
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: [...existingUsers.users, createUser]
        }
      });
    },
    // Optimistic response
    optimisticResponse: {
      createUser: {
        __typename: 'User',
        id: 'temp-id',
        name,
        email
      }
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ variables: { name, email } });
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </button>
      {error && <div>Error: {error.message}</div>}
      {data && <div>User created successfully!</div>}
    </form>
  );
}

// 6. Component with variables
function UserDetail({ userId }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
    skip: !userId, // Skip query if no userId
  });

  if (!userId) return <div>Select a user</div>;
  if (loading) return <div>Loading user details...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{data.user.name}</h2>
      <p>Email: {data.user.email}</p>
      <h3>Posts:</h3>
      <ul>
        {data.user.posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 7. Main App with ApolloProvider
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Apollo Client with React</h1>
        <CreateUserForm />
        <UsersList />
      </div>
    </ApolloProvider>
  );
}

export default App;
```

### Advanced Example: Error Handling & Loading States

```javascript
import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts($limit: Int, $offset: Int) {
    posts(limit: $limit, offset: $offset) {
      id
      title
      author {
        name
      }
      createdAt
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      success
      message
    }
  }
`;

function PostsWithPagination() {
  const [page, setPage] = React.useState(0);
  const limit = 10;

  const { loading, error, data, fetchMore, networkStatus } = useQuery(GET_POSTS, {
    variables: { limit, offset: page * limit },
    notifyOnNetworkStatusChange: true,
  });

  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS, variables: { limit, offset: page * limit } }],
    onCompleted: (data) => {
      alert(data.deletePost.message);
    },
    onError: (error) => {
      alert('Error deleting post: ' + error.message);
    }
  });

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await deletePost({ variables: { id } });
    }
  };

  const loadMore = () => {
    fetchMore({
      variables: { offset: data.posts.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          posts: [...prev.posts, ...fetchMoreResult.posts]
        };
      }
    });
  };

  if (networkStatus === 1) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      {data.posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{post.title}</h3>
          <p>By: {post.author.name}</p>
          <p>Created: {new Date(post.createdAt).toLocaleDateString()}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
      <button onClick={loadMore} disabled={networkStatus === 3}>
        {networkStatus === 3 ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}

export default PostsWithPagination;
```

---

# 72. How do you manage local state in Apollo Client?

Apollo Client 3+ provides powerful **local state management** capabilities, allowing you to manage both server and client state in one place.

## Methods for Managing Local State

### 1. **Reactive Variables** (Recommended)

```javascript
import { makeVar, useReactiveVar } from '@apollo/client';

// 1. Create reactive variables
export const cartItemsVar = makeVar([]);
export const isLoggedInVar = makeVar(false);
export const userPreferencesVar = makeVar({
  theme: 'light',
  language: 'en'
});

// 2. Component using reactive variables
function ShoppingCart() {
  // Subscribe to reactive variable
  const cartItems = useReactiveVar(cartItemsVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const addToCart = (item) => {
    const currentCart = cartItemsVar();
    cartItemsVar([...currentCart, item]);
  };

  const removeFromCart = (itemId) => {
    const currentCart = cartItemsVar();
    cartItemsVar(currentCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    cartItemsVar([]);
  };

  return (
    <div>
      <h2>Shopping Cart {!isLoggedIn && '(Guest)'}</h2>
      <p>Items: {cartItems.length}</p>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: Date.now(), name: 'New Item', price: 10 })}>
        Add Item
      </button>
      <button onClick={clearCart}>Clear Cart</button>
      <p>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}</p>
    </div>
  );
}
```

### 2. **Local-Only Fields** (Type Policies)

```javascript
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

// 1. Define cache with type policies
const cache = new InMemoryCache({
  typePolicies: {
    Product: {
      fields: {
        // Local-only field
        isInCart: {
          read(_, { variables, readField }) {
            const cartItems = cartItemsVar();
            const productId = readField('id');
            return cartItems.some(item => item.id === productId);
          }
        },
        // Another local field
        discount: {
          read(existing, { readField }) {
            const price = readField('price');
            return price > 100 ? 0.1 : 0; // 10% discount for items > $100
          }
        }
      }
    },
    Query: {
      fields: {
        // Local-only query field
        cartItems: {
          read() {
            return cartItemsVar();
          }
        },
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'https://api.example.com/graphql',
  cache
});

// 2. Query mixing server and local data
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      isInCart @client
      discount @client
    }
    cartItems @client
    isLoggedIn @client
  }
`;

function ProductList() {
  const { loading, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Products</h2>
      <p>Logged In: {data.isLoggedIn ? 'Yes' : 'No'}</p>
      <p>Cart Items: {data.cartItems.length}</p>
      {data.products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          {product.discount > 0 && <p>Discount: {product.discount * 100}%</p>}
          <p>{product.isInCart ? '✓ In Cart' : 'Not in cart'}</p>
          <button onClick={() => {
            const currentCart = cartItemsVar();
            if (product.isInCart) {
              cartItemsVar(currentCart.filter(item => item.id !== product.id));
            } else {
              cartItemsVar([...currentCart, product]);
            }
          }}>
            {product.isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
}
```

### 3. **Cache Manipulation**

```javascript
import { useApolloClient, gql } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query GetCurrentUser {
    currentUser @client {
      id
      name
      email
    }
  }
`;

function UserProfile() {
  const client = useApolloClient();

  // Read from cache
  const readUser = () => {
    try {
      const data = client.readQuery({
        query: CURRENT_USER_QUERY
      });
      console.log('Current user:', data.currentUser);
    } catch (error) {
      console.log('No user in cache');
    }
  };

  // Write to cache
  const writeUser = () => {
    client.writeQuery({
      query: CURRENT_USER_QUERY,
      data: {
        currentUser: {
          __typename: 'User',
          id: '1',
          name: 'John Doe',
          email: 'john@example.com'
        }
      }
    });
  };

  // Modify specific field
  const updateUserName = (newName) => {
    client.cache.modify({
      id: client.cache.identify({ __typename: 'User', id: '1' }),
      fields: {
        name() {
          return newName;
        }
      }
    });
  };

  return (
    <div>
      <button onClick={readUser}>Read User</button>
      <button onClick={writeUser}>Write User</button>
      <button onClick={() => updateUserName('Jane Doe')}>Update Name</button>
    </div>
  );
}
```

### 4. **Complete Example: Theme Manager**

```javascript
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, makeVar, useReactiveVar, gql, useQuery } from '@apollo/client';

// Reactive variables for local state
const themeVar = makeVar('light');
const notificationsVar = makeVar([]);

// Apollo Client setup
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        theme: {
          read() {
            return themeVar();
          }
        },
        notifications: {
          read() {
            return notificationsVar();
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'https://api.example.com/graphql',
  cache
});

// Local query
const GET_LOCAL_STATE = gql`
  query GetLocalState {
    theme @client
    notifications @client
  }
`;

// Theme toggle component
function ThemeToggle() {
  const theme = useReactiveVar(themeVar);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    themeVar(newTheme);
    
    // Add notification
    const currentNotifications = notificationsVar();
    notificationsVar([
      ...currentNotifications,
      { id: Date.now(), message: `Theme changed to ${newTheme}` }
    ]);
  };

  return (
    <div style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff',
      padding: '20px'
    }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// Notifications component
function Notifications() {
  const { data } = useQuery(GET_LOCAL_STATE);

  const clearNotifications = () => {
    notificationsVar([]);
  };

  return (
    <div>
      <h3>Notifications ({data?.notifications.length || 0})</h3>
      <button onClick={clearNotifications}>Clear All</button>
      <ul>
        {data?.notifications.map(notif => (
          <li key={notif.id}>{notif.message}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <ThemeToggle />
        <Notifications />
      </div>
    </ApolloProvider>
  );
}

export default App;
```

---

# 73. What is Redux and how does it contrast with the Context API?

## What is Redux?

**Redux** is a predictable state container for JavaScript apps. It helps you write applications that behave consistently and are easy to test.

### Core Concepts:
- **Single source of truth**: One store for entire app state
- **State is read-only**: Only changed via actions
- **Changes made with pure functions**: Reducers

## Redux vs Context API Comparison

| Feature | Redux | Context API |
|---------|-------|-------------|
| **Purpose** | Global state management library | Built-in React feature for passing data |
| **Boilerplate** | More (actions, reducers, store) | Less (provider, consumer) |
| **Performance** | Optimized with selectors | Can cause unnecessary re-renders |
| **DevTools** | Excellent time-travel debugging | Limited debugging tools |
| **Middleware** | Robust (thunks, sagas) | None built-in |
| **Learning Curve** | Steeper | Gentler |
| **Best For** | Large, complex apps | Small to medium apps, theming |

## Redux Example

```javascript
// 1. Redux Setup
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { thunk } from 'redux-thunk';

// ===== ACTIONS =====
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_FILTER = 'SET_FILTER';
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action Creators
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), text, completed: false }
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

// Async Action Creator (Thunk)
const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

// ===== REDUCERS =====
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const usersReducer = (state = { loading: false, data: [], error: null }, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case FETCH_USERS_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  users: usersReducer
});

// ===== STORE =====
const store = createStore(rootReducer, applyMiddleware(thunk));

// ===== COMPONENTS =====
function TodoInput() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList() {
  const dispatch = useDispatch();
  
  // Selectors
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'COMPLETED') return todo.completed;
    if (filter === 'ACTIVE') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h3>Todos ({filteredTodos.length})</h3>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterButtons() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter('ALL'))}
        disabled={currentFilter === 'ALL'}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('ACTIVE'))}
        disabled={currentFilter === 'ACTIVE'}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter('COMPLETED'))}
        disabled={currentFilter === 'COMPLETED'}
      >
        Completed
      </button>
    </div>
  );
}

function UsersList() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.users);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Users from API</h3>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

function ReduxApp() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Redux Todo App</h1>
        <TodoInput />
        <FilterButtons />
        <TodoList />
        <hr />
        <UsersList />
      </div>
    </Provider>
  );
}
```

## Context API Example

```javascript
import React, { createContext, useContext, useReducer, useState } from 'react';

// ===== CONTEXT API SETUP =====
const TodoContext = createContext();
const FilterContext = createContext();

// Reducer (similar to Redux)
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

// Provider Component
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function FilterProvider({ children }) {
  const [filter, setFilter] = useState('ALL');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom Hooks
function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}

function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within FilterProvider');
  }
  return context;
}

// ===== COMPONENTS =====
function TodoInputContext() {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: 'ADD_TODO',
        payload: { id: Date.now(), text, completed: false }
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoListContext() {
  const { todos, dispatch } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter(todo => {
    if (filter === 'COMPLETED') return todo.completed;
    if (filter === 'ACTIVE') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h3>Todos ({filteredTodos.length})</h3>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterButtonsContext() {
  const { filter, setFilter } = useFilter();

  return (
    <div>
      <button onClick={() => setFilter('ALL')} disabled={filter === 'ALL'}>
        All
      </button>
      <button onClick={() => setFilter('ACTIVE')} disabled={filter === 'ACTIVE'}>
        Active
      </button>
      <button onClick={() => setFilter('COMPLETED')} disabled={filter === 'COMPLETED'}>
        Completed
      </button>
    </div>
  );
}

function ContextApp() {
  return (
    <TodoProvider>
      <FilterProvider>
        <div style={{ padding: '20px' }}>
          <h1>Context API Todo App</h1>
          <TodoInputContext />
          <FilterButtonsContext />
          <TodoListContext />
        </div>
      </FilterProvider>
    </TodoProvider>
  );
}
```

## When to Use What?

### Use **Redux** when:
- Large application with complex state
- Need powerful debugging with time-travel
- Multiple locations need to update state
- Need middleware for async logic
- Team is familiar with Redux patterns

### Use **Context API** when:
- Small to medium app
- Passing props through many levels (prop drilling)
- Theming, localization, authentication state
- Want to avoid external dependencies
- State changes are infrequent

### Modern Alternative: **Redux Toolkit**

```javascript
import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload); // Immer makes this safe
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    }
  }
});

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});
```

This significantly reduces Redux boilerplate!

# 74. Can you detail the Redux workflow?

## Redux Workflow Overview

Redux follows a **unidirectional data flow** pattern. Here's the complete workflow:

```
View → Action → Dispatcher → Reducer → Store → View
  ↑                                              ↓
  └──────────────── (re-render) ────────────────┘
```

## The Redux Workflow Steps

### 1. **User Interaction / Event**
User interacts with the UI (clicks button, submits form, etc.)

### 2. **Action Dispatch**
Component dispatches an action (plain JavaScript object)

### 3. **Action Reaches Reducer**
Store passes the action to the reducer

### 4. **Reducer Processes Action**
Reducer returns new state (pure function)

### 5. **Store Updates**
Store saves the new state

### 6. **UI Re-renders**
Components subscribed to the store re-render with new data

## Complete Redux Workflow Example

```javascript
import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { thunk } from 'redux-thunk';

// ==================== STEP 1: ACTION TYPES ====================
// Define constants to avoid typos and enable better IDE support
const ActionTypes = {
  // Counter actions
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
  RESET: 'counter/RESET',
  INCREMENT_BY_AMOUNT: 'counter/INCREMENT_BY_AMOUNT',
  
  // User actions
  FETCH_USER_REQUEST: 'user/FETCH_REQUEST',
  FETCH_USER_SUCCESS: 'user/FETCH_SUCCESS',
  FETCH_USER_FAILURE: 'user/FETCH_FAILURE',
  UPDATE_USER: 'user/UPDATE',
  
  // Cart actions
  ADD_TO_CART: 'cart/ADD_ITEM',
  REMOVE_FROM_CART: 'cart/REMOVE_ITEM',
  UPDATE_QUANTITY: 'cart/UPDATE_QUANTITY',
  CLEAR_CART: 'cart/CLEAR',
};

// ==================== STEP 2: ACTION CREATORS ====================
// Functions that return action objects
// These are dispatched to trigger state changes

// Counter Action Creators
const increment = () => ({
  type: ActionTypes.INCREMENT,
});

const decrement = () => ({
  type: ActionTypes.DECREMENT,
});

const reset = () => ({
  type: ActionTypes.RESET,
});

const incrementByAmount = (amount) => ({
  type: ActionTypes.INCREMENT_BY_AMOUNT,
  payload: amount,
});

// User Action Creators (Sync)
const fetchUserRequest = () => ({
  type: ActionTypes.FETCH_USER_REQUEST,
});

const fetchUserSuccess = (user) => ({
  type: ActionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

const fetchUserFailure = (error) => ({
  type: ActionTypes.FETCH_USER_FAILURE,
  payload: error,
});

const updateUser = (userData) => ({
  type: ActionTypes.UPDATE_USER,
  payload: userData,
});

// User Action Creators (Async Thunk)
const fetchUser = (userId) => {
  // This returns a function (thunk) instead of an action
  return async (dispatch, getState) => {
    // Can access current state
    console.log('Current state:', getState());
    
    // Dispatch request action
    dispatch(fetchUserRequest());
    
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      
      // Dispatch success action with data
      dispatch(fetchUserSuccess(data));
      
      // Can dispatch multiple actions
      console.log('User fetched successfully');
    } catch (error) {
      // Dispatch failure action
      dispatch(fetchUserFailure(error.message));
    }
  };
};

// Cart Action Creators
const addToCart = (product) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: product,
});

const removeFromCart = (productId) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: productId,
});

const updateQuantity = (productId, quantity) => ({
  type: ActionTypes.UPDATE_QUANTITY,
  payload: { productId, quantity },
});

const clearCart = () => ({
  type: ActionTypes.CLEAR_CART,
});

// ==================== STEP 3: REDUCERS ====================
// Pure functions that take (state, action) and return new state
// NEVER mutate state directly - always return new objects

// Counter Reducer
const initialCounterState = {
  value: 0,
  history: [],
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        history: [...state.history, state.value + 1],
      };
      
    case ActionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        history: [...state.history, state.value - 1],
      };
      
    case ActionTypes.INCREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value + action.payload,
        history: [...state.history, state.value + action.payload],
      };
      
    case ActionTypes.RESET:
      return initialCounterState;
      
    default:
      return state;
  }
};

// User Reducer
const initialUserState = {
  data: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      
    case ActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
      
    case ActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
      
    default:
      return state;
  }
};

// Cart Reducer
const initialCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Update quantity if item exists
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    }
    
    case ActionTypes.REMOVE_FROM_CART: {
      const item = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (item ? item.price * item.quantity : 0),
      };
    }
    
    case ActionTypes.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);
      const oldQuantity = item ? item.quantity : 0;
      const priceDiff = item ? item.price * (quantity - oldQuantity) : 0;
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        ),
        total: state.total + priceDiff,
      };
    }
    
    case ActionTypes.CLEAR_CART:
      return initialCartState;
      
    default:
      return state;
  }
};

// ==================== STEP 4: ROOT REDUCER ====================
// Combine all reducers into one
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
});

// ==================== STEP 5: MIDDLEWARE ====================
// Custom logging middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('Dispatching:', action);
  console.log('Previous State:', store.getState());
  
  const result = next(action); // Pass action to next middleware/reducer
  
  console.log('Next State:', store.getState());
  console.groupEnd();
  
  return result;
};

// ==================== STEP 6: STORE ====================
// Create the Redux store with reducers and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);

// ==================== STEP 7: REACT COMPONENTS ====================

// Counter Component
function Counter() {
  const dispatch = useDispatch();
  
  // STEP 8: SELECT STATE FROM STORE
  const counter = useSelector(state => state.counter);
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', margin: '10px 0' }}>
      <h2>Counter: {counter.value}</h2>
      
      {/* STEP 9: DISPATCH ACTIONS */}
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
      
      <div>
        <h4>History:</h4>
        <p>{counter.history.join(' → ')}</p>
      </div>
    </div>
  );
}

// User Component
function UserProfile() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('1');
  
  const { data: user, loading, error } = useSelector(state => state.user);
  
  const handleFetchUser = () => {
    dispatch(fetchUser(userId));
  };
  
  const handleUpdateUser = () => {
    dispatch(updateUser({ name: 'Updated Name' }));
  };
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', margin: '10px 0' }}>
      <h2>User Profile</h2>
      
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={handleFetchUser} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch User'}
      </button>
      
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={handleUpdateUser}>Update Name</button>
        </div>
      )}
    </div>
  );
}

// Shopping Cart Component
function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Keyboard', price: 79 },
  ];
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', margin: '10px 0' }}>
      <h2>Shopping Cart</h2>
      
      <h3>Products</h3>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.name} - ${product.price}
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
      
      <h3>Cart Items ({cart.items.length})</h3>
      {cart.items.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          {item.name} - ${item.price} x {item.quantity}
          <button onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}>
            +
          </button>
          <button onClick={() => dispatch(updateQuantity(item.id, Math.max(1, item.quantity - 1)))}>
            -
          </button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      
      <h3>Total: ${cart.total.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

// ==================== STEP 10: APP WITH PROVIDER ====================
function ReduxWorkflowApp() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Redux Workflow Demo</h1>
        <p>Open console to see the workflow in action!</p>
        <Counter />
        <UserProfile />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default ReduxWorkflowApp;
```

## Visual Workflow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         REDUX STORE                          │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Current State Tree                     │    │
│  │  {                                                  │    │
│  │    counter: { value: 5, history: [...] },         │    │
│  │    user: { data: {...}, loading: false },         │    │
│  │    cart: { items: [...], total: 150 }            │    │
│  │  }                                                  │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    ┌─────────────────┐
                    │   useSelector   │
                    │  (Subscribe)    │
                    └─────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      REACT COMPONENT                         │
│                                                               │
│  const count = useSelector(state => state.counter.value)    │
│  const dispatch = useDispatch()                             │
│                                                               │
│  <button onClick={() => dispatch(increment())}>+</button>   │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    ┌─────────────────┐
                    │   User Action   │
                    │  (Click button) │
                    └─────────────────┘
                              ↓
                    ┌─────────────────┐
                    │    dispatch()   │
                    └─────────────────┘
                              ↓
                    ┌─────────────────┐
                    │  Action Creator │
                    │  increment()    │
                    │  Returns:       │
                    │  {type:'INC'}   │
                    └─────────────────┘
                              ↓
                    ┌─────────────────┐
                    │   Middleware    │
                    │  (Logger,Thunk) │
                    └─────────────────┘
                              ↓
                    ┌─────────────────┐
                    │    Reducer      │
                    │  (Pure Function)│
                    │  oldState+action│
                    │  → newState     │
                    └─────────────────┘
                              ↓
                    ┌─────────────────┐
                    │  Store Update   │
                    └─────────────────┘
                              ↓
                    ┌─────────────────┐
                    │  Component      │
                    │  Re-render      │
                    └─────────────────┘
```

---

# 75. How do you handle side effects in Redux applications?

## What are Side Effects?

Side effects are operations that interact with the outside world:
- API calls
- Local storage access
- Timers
- Logging
- WebSocket connections
- Browser API calls

## Methods to Handle Side Effects

### 1. **Redux Thunk** (Most Popular)

```javascript
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';

// ==================== ACTION TYPES ====================
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';

// ==================== THUNK ACTION CREATORS ====================

// Simple async thunk
const fetchPosts = () => {
  return async (dispatch, getState) => {
    // Access to dispatch and getState
    dispatch({ type: FETCH_POSTS_REQUEST });
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Conditional thunk (checks state before fetching)
const fetchPostsIfNeeded = () => {
  return (dispatch, getState) => {
    const { posts } = getState();
    
    // Only fetch if not already loading or if cache is stale
    if (!posts.loading && (!posts.data || posts.lastFetch < Date.now() - 60000)) {
      return dispatch(fetchPosts());
    }
  };
};

// Chained thunks
const createPostAndRefresh = (postData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST });
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: data,
      });
      
      // Dispatch another thunk after success
      dispatch(fetchPosts());
    } catch (error) {
      console.error(error);
    }
  };
};

// Multiple API calls in sequence
const fetchUserWithPosts = (userId) => {
  return async (dispatch) => {
    try {
      // Fetch user
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await userResponse.json();
      
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
      
      // Then fetch user's posts
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const posts = await postsResponse.json();
      
      dispatch({ type: 'FETCH_USER_POSTS_SUCCESS', payload: posts });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };
};

// Parallel API calls
const fetchAllData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_ALL_REQUEST' });
    
    try {
      const [users, posts, comments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json()),
      ]);
      
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
      dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: comments });
    } catch (error) {
      dispatch({ type: 'FETCH_ALL_FAILURE', payload: error.message });
    }
  };
};

// ==================== REDUCER ====================
const initialState = {
  data: [],
  loading: false,
  error: null,
  lastFetch: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        lastFetch: Date.now(),
      };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// ==================== COMPONENT ====================
function PostsList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.posts);
  
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

### 2. **Redux Saga** (Advanced)

```javascript
import { call, put, takeLatest, takeEvery, all, fork, delay } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

// ==================== ACTION TYPES ====================
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
const SEARCH_REQUEST = 'SEARCH_REQUEST';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

// ==================== API FUNCTIONS ====================
const api = {
  fetchUser: (userId) => 
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(r => r.json()),
  
  searchPosts: (query) =>
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`).then(r => r.json()),
};

// ==================== SAGAS ====================

// Worker saga: performs the actual side effect
function* fetchUserSaga(action) {
  try {
    // 'call' is used for functions that return promises
    const user = yield call(api.fetchUser, action.payload);
    
    // 'put' is used to dispatch actions
    yield put({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message });
  }
}

// Debounced search saga
function* searchSaga(action) {
  // Wait 500ms before executing (debounce)
  yield delay(500);
  
  try {
    const results = yield call(api.searchPosts, action.payload);
    yield put({ type: SEARCH_SUCCESS, payload: results });
  } catch (error) {
    console.error(error);
  }
}

// Saga with retry logic
function* fetchWithRetrySaga(action) {
  let retries = 3;
  
  while (retries > 0) {
    try {
      const data = yield call(api.fetchUser, action.payload);
      yield put({ type: FETCH_USER_SUCCESS, payload: data });
      return; // Success, exit
    } catch (error) {
      retries--;
      if (retries === 0) {
        yield put({ type: FETCH_USER_FAILURE, payload: error.message });
      } else {
        yield delay(1000); // Wait before retry
      }
    }
  }
}

// Parallel API calls
function* fetchAllDataSaga() {
  try {
    // Execute multiple sagas in parallel
    const [users, posts] = yield all([
      call(api.fetchUser, 1),
      call(api.searchPosts, 'test'),
    ]);
    
    yield put({ type: 'FETCH_ALL_SUCCESS', payload: { users, posts } });
  } catch (error) {
    yield put({ type: 'FETCH_ALL_FAILURE', payload: error.message });
  }
}

// Racing saga (whichever finishes first)
function* fetchWithTimeoutSaga(action) {
  const { response, timeout } = yield race({
    response: call(api.fetchUser, action.payload),
    timeout: delay(5000), // 5 second timeout
  });
  
  if (response) {
    yield put({ type: FETCH_USER_SUCCESS, payload: response });
  } else {
    yield put({ type: FETCH_USER_FAILURE, payload: 'Request timeout' });
  }
}

// Watcher saga: watches for dispatched actions
function* watchFetchUser() {
  // takeLatest: cancels previous if new action comes
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}

function* watchSearch() {
  // takeEvery: allows concurrent actions
  yield takeEvery(SEARCH_REQUEST, searchSaga);
}

// Root saga
function* rootSaga() {
  yield all([
    fork(watchFetchUser),
    fork(watchSearch),
  ]);
}

// ==================== SETUP ====================
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
```

### 3. **Redux Toolkit with createAsyncThunk** (Modern Approach)

```javascript
import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

// ==================== ASYNC THUNKS ====================

// Basic async thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk with parameters
export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!response.ok) throw new Error('Post not found');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk with conditional logic
export const fetchPostsIfNeeded = createAsyncThunk(
  'posts/fetchIfNeeded',
  async (_, { getState, dispatch }) => {
    const state = getState();
    const { lastFetch, data } = state.posts;
    
    // Only fetch if cache is older than 1 minute
    if (data.length && Date.now() - lastFetch < 60000) {
      return data; // Return cached data
    }
    
    return dispatch(fetchPosts()).unwrap();
  }
);

// Create and delete in sequence
export const createPost = createAsyncThunk(
  'posts/createPost',
  async (postData, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      
      // Refresh list after creation
      await dispatch(fetchPosts()).unwrap();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==================== SLICE ====================
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    currentPost: null,
    loading: false,
    error: null,
    lastFetch: null,
  },
  reducers: {
    // Synchronous actions
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentPost: (state) => {
      state.currentPost = null;
    },
  },
  extraReducers: (builder) => {
    // fetchPosts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastFetch = Date.now();
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    
    // fetchPost
    builder
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPost = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    
    // createPost
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        // Optimistically add to list
        state.data.unshift(action.payload);
      });
  },
});

```javascript
export const { clearError, clearCurrentPost } = postsSlice.actions;
export default postsSlice.reducer;

// ==================== STORE ====================
const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

// ==================== COMPONENTS ====================

// Component using async thunk
function PostsListRTK() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.posts);
  
  React.useEffect(() => {
    // Dispatch async thunk
    dispatch(fetchPosts());
  }, [dispatch]);
  
  const handleRefresh = () => {
    dispatch(fetchPosts());
  };
  
  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>Posts ({data.length})</h2>
      <button onClick={handleRefresh}>Refresh</button>
      <ul>
        {data.slice(0, 10).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Component with form submission
function CreatePostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const { loading } = useSelector(state => state.posts);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // unwrap() returns the payload or throws an error
      await dispatch(createPost({ title, body, userId: 1 })).unwrap();
      
      setTitle('');
      setBody('');
      alert('Post created successfully!');
    } catch (error) {
      alert('Failed to create post: ' + error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
}

export { PostsListRTK, CreatePostForm, store };
```

### 4. **Custom Middleware**

```javascript
// ==================== CUSTOM MIDDLEWARE ====================

// API middleware
const apiMiddleware = (store) => (next) => async (action) => {
  // Check if action has API metadata
  if (!action.meta || !action.meta.api) {
    return next(action);
  }
  
  const { url, method = 'GET', body, onSuccess, onError } = action.meta.api;
  
  // Dispatch request action
  next({ ...action, type: `${action.type}_REQUEST` });
  
  try {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
    };
    
    if (body) {
      options.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, options);
    const data = await response.json();
    
    // Dispatch success action
    next({
      type: `${action.type}_SUCCESS`,
      payload: data,
    });
    
    if (onSuccess) {
      store.dispatch(onSuccess(data));
    }
  } catch (error) {
    // Dispatch error action
    next({
      type: `${action.type}_FAILURE`,
      payload: error.message,
    });
    
    if (onError) {
      store.dispatch(onError(error));
    }
  }
};

// WebSocket middleware
const websocketMiddleware = () => {
  let socket = null;
  
  return (store) => (next) => (action) => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket) socket.close();
        
        socket = new WebSocket(action.payload.url);
        
        socket.onopen = () => {
          store.dispatch({ type: 'WS_CONNECTED' });
        };
        
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          store.dispatch({ type: 'WS_MESSAGE', payload: data });
        };
        
        socket.onerror = (error) => {
          store.dispatch({ type: 'WS_ERROR', payload: error });
        };
        
        socket.onclose = () => {
          store.dispatch({ type: 'WS_DISCONNECTED' });
        };
        break;
        
      case 'WS_DISCONNECT':
        if (socket) {
          socket.close();
          socket = null;
        }
        break;
        
      case 'WS_SEND':
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(action.payload));
        }
        break;
        
      default:
        break;
    }
    
    return next(action);
  };
};

// Analytics middleware
const analyticsMiddleware = (store) => (next) => (action) => {
  // Track certain actions
  if (action.type.endsWith('_SUCCESS')) {
    console.log('Analytics: Action succeeded', action.type);
    // Send to analytics service
    // analytics.track(action.type, action.payload);
  }
  
  return next(action);
};

// Local storage middleware
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Save specific parts of state to localStorage
  if (action.type === 'USER_LOGIN_SUCCESS') {
    localStorage.setItem('user', JSON.stringify(action.payload));
  }
  
  if (action.type === 'USER_LOGOUT') {
    localStorage.removeItem('user');
  }
  
  return result;
};

// Usage with store
const storeWithMiddleware = createStore(
  rootReducer,
  applyMiddleware(
    apiMiddleware,
    websocketMiddleware(),
    analyticsMiddleware,
    localStorageMiddleware
  )
);

// Using API middleware
const fetchUsersAction = {
  type: 'FETCH_USERS',
  meta: {
    api: {
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
      onSuccess: (data) => ({ type: 'CACHE_USERS', payload: data }),
    }
  }
};
```

### 5. **Complete Real-World Example**

```javascript
import React, { useState, useEffect } from 'react';
import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// ==================== API SERVICE ====================
const api = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  },
  
  getUsers() {
    return this.request('/users');
  },
  
  getUser(id) {
    return this.request(`/users/${id}`);
  },
  
  getUserPosts(userId) {
    return this.request(`/posts?userId=${userId}`);
  },
  
  createPost(post) {
    return this.request('/posts', {
      method: 'POST',
      body: JSON.stringify(post),
    });
  },
  
  updatePost(id, post) {
    return this.request(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
    });
  },
  
  deletePost(id) {
    return this.request(`/posts/${id}`, {
      method: 'DELETE',
    });
  },
};

// ==================== ASYNC THUNKS ====================

// Fetch all users
export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await api.getUsers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch user with their posts
export const fetchUserWithPosts = createAsyncThunk(
  'users/fetchWithPosts',
  async (userId, { rejectWithValue }) => {
    try {
      const [user, posts] = await Promise.all([
        api.getUser(userId),
        api.getUserPosts(userId),
      ]);
      return { user, posts };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create post with optimistic update
export const createPostOptimistic = createAsyncThunk(
  'posts/create',
  async (postData, { rejectWithValue }) => {
    try {
      const newPost = await api.createPost(postData);
      return newPost;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update post
export const updatePost = createAsyncThunk(
  'posts/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await api.updatePost(id, data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete post with undo capability
export const deletePost = createAsyncThunk(
  'posts/delete',
  async (postId, { getState, rejectWithValue }) => {
    try {
      await api.deletePost(postId);
      
      // Return deleted post for undo functionality
      const deletedPost = getState().posts.data.find(p => p.id === postId);
      return { postId, deletedPost };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==================== USERS SLICE ====================
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    selectedUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserWithPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserWithPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload.user;
      })
      .addCase(fetchUserWithPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ==================== POSTS SLICE ====================
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    userPosts: [],
    loading: false,
    error: null,
    deletedPosts: [], // For undo
  },
  reducers: {
    // Optimistic add
    addPostOptimistic: (state, action) => {
      state.data.unshift(action.payload);
    },
    // Undo delete
    undoDelete: (state, action) => {
      const post = state.deletedPosts.find(p => p.id === action.payload);
      if (post) {
        state.data.push(post);
        state.deletedPosts = state.deletedPosts.filter(p => p.id !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch user with posts
      .addCase(fetchUserWithPosts.fulfilled, (state, action) => {
        state.userPosts = action.payload.posts;
      })
      // Create post
      .addCase(createPostOptimistic.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPostOptimistic.fulfilled, (state, action) => {
        state.loading = false;
        // Update optimistic post with real data
        const index = state.data.findIndex(p => p.id === 'temp-id');
        if (index !== -1) {
          state.data[index] = action.payload;
        } else {
          state.data.unshift(action.payload);
        }
      })
      .addCase(createPostOptimistic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // Remove optimistic post on error
        state.data = state.data.filter(p => p.id !== 'temp-id');
      })
      // Update post
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.data.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      // Delete post
      .addCase(deletePost.fulfilled, (state, action) => {
        const { postId, deletedPost } = action.payload;
        state.data = state.data.filter(p => p.id !== postId);
        if (deletedPost) {
          state.deletedPosts.push(deletedPost);
        }
      });
  },
});

export const { clearSelectedUser } = usersSlice.actions;
export const { addPostOptimistic, undoDelete } = postsSlice.actions;

// ==================== STORE ====================
const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
  },
});

// ==================== COMPONENTS ====================

function UsersList() {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector(state => state.users);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  const handleSelectUser = (userId) => {
    dispatch(fetchUserWithPosts(userId));
  };
  
  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', marginBottom: '20px' }}>
      <h2>Users</h2>
      <ul>
        {users.slice(0, 5).map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleSelectUser(user.id)}>
              View Posts
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserPosts() {
  const dispatch = useDispatch();
  const selectedUser = useSelector(state => state.users.selectedUser);
  const userPosts = useSelector(state => state.posts.userPosts);
  const deletedPosts = useSelector(state => state.posts.deletedPosts);
  
  const handleDelete = async (postId) => {
    await dispatch(deletePost(postId));
    
    // Show undo notification
    setTimeout(() => {
      if (window.confirm('Post deleted. Undo?')) {
        dispatch(undoDelete(postId));
      }
    }, 100);
  };
  
  if (!selectedUser) {
    return <div>Select a user to view their posts</div>;
  }
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', marginBottom: '20px' }}>
      <h2>Posts by {selectedUser.name}</h2>
      <button onClick={() => dispatch(clearSelectedUser())}>
        Clear Selection
      </button>
      
      {deletedPosts.length > 0 && (
        <div style={{ background: '#fff3cd', padding: '10px', margin: '10px 0' }}>
          {deletedPosts.length} post(s) deleted. You can undo.
        </div>
      )}
      
      <div>
        {userPosts.map(post => (
          <div key={post.id} style={{ border: '1px solid #eee', padding: '10px', margin: '10px 0' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreatePostWithOptimistic() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create optimistic post
    const optimisticPost = {
      id: 'temp-id',
      title,
      body,
      userId: 1,
    };
    
    // Add optimistically to UI
    dispatch(addPostOptimistic(optimisticPost));
    
    // Make actual API call
    try {
      await dispatch(createPostOptimistic({ title, body, userId: 1 })).unwrap();
      setTitle('');
      setBody('');
      alert('Post created!');
    } catch (error) {
      alert('Error: ' + error);
    }
  };
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h2>Create Post (with Optimistic Update)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

// ==================== MAIN APP ====================
function SideEffectsApp() {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Redux Side Effects - Complete Example</h1>
        <UsersList />
        <UserPosts />
        <CreatePostWithOptimistic />
      </div>
    </Provider>
  );
}

export default SideEffectsApp;
```

## Comparison of Side Effect Solutions

| Method | Best For | Complexity | Learning Curve |
|--------|----------|------------|----------------|
| **Redux Thunk** | Simple async operations, API calls | Low | Easy |
| **Redux Saga** | Complex async flows, background tasks | High | Steep |
| **Redux Toolkit (createAsyncThunk)** | Modern apps, standard CRUD | Low | Easy |
| **Custom Middleware** | Specific patterns (WebSockets, analytics) | Medium | Medium |

## Best Practices for Side Effects

1. **Keep side effects out of reducers** - Reducers must be pure functions
2. **Use async middleware** - Don't put async logic in components
3. **Handle loading and error states** - Always provide feedback to users
4. **Implement optimistic updates** - For better UX
5. **Add retry logic** - For resilient applications
6. **Use cancellation** - Cancel pending requests when appropriate
7. **Normalize data** - Use normalized state shape for complex data
8. **Cache strategically** - Avoid unnecessary API calls

This covers the complete workflow and side effects handling in Redux!

## React Development Environment & Tooling

# Complete Answers with Examples

## 76. How do you set up a React project from scratch?

There are two main approaches to set up a React project from scratch:

### Method 1: Using Create React App (Recommended for Beginners)

Create React App is the official tool that sets up everything automatically.

```bash
# Install Node.js first (if not already installed)
# Then run:

npx create-react-app my-app
cd my-app
npm start
```

**What this does:**
- Creates a new folder with all necessary files
- Installs React, ReactDOM, and build tools
- Sets up Webpack, Babel, and ESLint
- Creates a development server
- Provides build scripts for production

**Project Structure:**
```
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

### Method 2: Manual Setup (From Absolute Scratch)

For learning purposes or custom configurations:

**Step 1: Initialize the project**
```bash
mkdir my-react-app
cd my-react-app
npm init -y
```

**Step 2: Install React dependencies**
```bash
npm install react react-dom
```

**Step 3: Install development dependencies**
```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev babel-loader html-webpack-plugin
```

**Step 4: Create project structure**
```
my-react-app/
├── src/
│   ├── index.js
│   └── App.js
├── public/
│   └── index.html
├── webpack.config.js
├── .babelrc
└── package.json
```

**Step 5: Configure Babel** (`.babelrc`)
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

**Step 6: Configure Webpack** (`webpack.config.js`)
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 3000
  }
};
```

**Step 7: Create HTML template** (`public/index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

**Step 8: Create React components** (`src/App.js`)
```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>This is a React app set up from scratch.</p>
    </div>
  );
}

export default App;
```

**Step 9: Create entry point** (`src/index.js`)
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Step 10: Add scripts to package.json**
```json
{
  "scripts": {
    "start": "webpack serve --mode development --open",
    "build": "webpack --mode production"
  }
}
```

**Step 11: Run the project**
```bash
npm start
```

---

## 77. What is Babel and why do we use it with React?

**Babel** is a JavaScript compiler (transpiler) that converts modern JavaScript code (ES6+) and JSX into backwards-compatible JavaScript that browsers can understand.

### Why We Need Babel with React:

**1. JSX Transformation**

Browsers don't understand JSX syntax natively. Babel converts JSX to regular JavaScript.

**Before Babel (JSX):**
```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
```

**After Babel (JavaScript):**
```javascript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

**2. Modern JavaScript Features**

Babel allows you to use latest JavaScript features that might not be supported in all browsers.

**Before Babel (ES6+):**
```javascript
// Arrow functions
const greeting = (name) => `Hello, ${name}`;

// Destructuring
const { firstName, lastName } = user;

// Async/await
const fetchData = async () => {
  const response = await fetch('/api/data');
  return response.json();
};

// Optional chaining
const userName = user?.profile?.name;
```

**After Babel (ES5 - browser compatible):**
```javascript
// Regular functions
var greeting = function(name) {
  return 'Hello, ' + name;
};

// Manual property access
var firstName = user.firstName;
var lastName = user.lastName;

// Promises
var fetchData = function() {
  return fetch('/api/data').then(function(response) {
    return response.json();
  });
};

// Conditional checks
var userName = user && user.profile && user.profile.name;
```

### Babel Configuration Example:

**`.babelrc` file:**
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

**What each preset does:**
- `@babel/preset-env`: Converts ES6+ JavaScript to ES5
- `@babel/preset-react`: Converts JSX to JavaScript

### Real Example:

**Input (React component with modern syntax):**
```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
```

**Output (Babel-transformed code - simplified):**
```javascript
"use strict";

var _react = require('react');

var Counter = function Counter() {
  var _useState = (0, _react.useState)(0),
      count = _useState[0],
      setCount = _useState[1];

  return _react.default.createElement(
    'div',
    { className: 'counter' },
    _react.default.createElement('h2', null, 'Count: ', count),
    _react.default.createElement(
      'button',
      { onClick: function onClick() { return setCount(count + 1); } },
      'Increment'
    )
  );
};

module.exports = Counter;
```

---

## 78. What is Webpack and what role does it play in React development?

**Webpack** is a module bundler that takes all your project files (JavaScript, CSS, images, etc.) and bundles them into optimized files for the browser.

### Key Roles of Webpack in React:

### 1. **Module Bundling**

Combines multiple files into fewer bundles.

**Before bundling (separate files):**
```
src/
├── App.js
├── Header.js
├── Footer.js
├── utils.js
└── styles.css
```

**After bundling:**
```
dist/
├── bundle.js (contains all JS)
└── styles.css (contains all CSS)
```

### 2. **Code Transformation via Loaders**

Webpack uses loaders to transform files before bundling.

**Webpack config with loaders:**
```javascript
module.exports = {
  module: {
    rules: [
      // Babel loader for JS/JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      // CSS loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Image loader
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  }
};
```

### 3. **Development Server**

Provides hot reloading during development.

```javascript
module.exports = {
  devServer: {
    static: './dist',
    port: 3000,
    hot: true, // Hot Module Replacement
    open: true // Opens browser automatically
  }
};
```

### 4. **Code Splitting**

Splits code into smaller chunks for better performance.

```javascript
// Dynamic import for code splitting
import React, { lazy, Suspense } from 'react';

// This component will be in a separate bundle
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
```

### 5. **Asset Management**

Handles images, fonts, and other assets.

```javascript
// Import images directly in React
import logo from './assets/logo.png';

function Header() {
  return <img src={logo} alt="Logo" />;
}
```

### Complete Webpack Configuration Example:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry point
  entry: './src/index.js',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true // Cleans dist folder before each build
  },
  
  // Module rules (loaders)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    })
  ],
  
  // Development server
  devServer: {
    static: './dist',
    port: 3000,
    hot: true
  },
  
  // Optimization
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
```

### Benefits of Webpack in React:

1. **Fast Development**: Hot reloading updates code without full page refresh
2. **Optimization**: Minifies and optimizes code for production
3. **Asset Management**: Handles all types of files (JS, CSS, images, fonts)
4. **Code Splitting**: Loads only necessary code, improving performance
5. **Module System**: Supports ES6 imports/exports
6. **Source Maps**: Makes debugging easier by mapping bundled code to source

### Example of Build Output:

**Development build:**
```bash
npm start
# Fast build with source maps
# File size: ~2MB (unminified)
```

**Production build:**
```bash
npm run build
# Optimized, minified code
# File size: ~200KB (minified + gzipped)
```

**Production bundle structure:**
```
dist/
├── index.html
├── bundle.a1b2c3d4.js (main bundle with hash)
├── vendors.e5f6g7h8.js (vendor libraries)
└── styles.i9j0k1l2.css (extracted CSS)
```

These tools work together: **Babel** transforms your code, and **Webpack** bundles it all together for the browser!

# Complete Answers with Examples

## 79. How does hot module replacement work in React?

**Hot Module Replacement (HMR)** is a feature that allows you to update modules in your application while it's running, without requiring a full page reload. It preserves application state and only updates the changed code.

### How HMR Works:

**1. The HMR Process Flow:**

```
Code Change → Webpack detects → Creates update → 
Browser receives → Updates module → Preserves state
```

**Step-by-step:**
1. You save a file in your editor
2. Webpack detects the change and recompiles only that module
3. Webpack sends the update to the browser via WebSocket
4. The HMR runtime replaces the old module with the new one
5. React re-renders only the affected components
6. Application state is preserved

### Without HMR vs With HMR:

**Without HMR (Full Reload):**
```javascript
// You're filling out a form
const [name, setName] = useState('John');
const [email, setEmail] = useState('john@example.com');
const [step, setStep] = useState(3);

// You make a CSS change
// → Full page reload
// → All state is lost
// → Back to step 1, empty form 😞
```

**With HMR (Hot Reload):**
```javascript
// You're filling out a form
const [name, setName] = useState('John');
const [email, setEmail] = useState('john@example.com');
const [step, setStep] = useState(3);

// You make a CSS change
// → Only CSS updates
// → State preserved
// → Still on step 3 with data intact 😊
```

### Practical Examples:

**Example 1: Basic Component Update**

```javascript
// Counter.js - Initial version
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

**User clicks button 5 times** → count is now 5

**You update the component:**
```javascript
// Counter.js - Updated version
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click to Increment
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
```

**Result:** UI updates with new styling and reset button, but **count stays at 5**!

**Example 2: Styling Updates**

```javascript
// Before
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div className="app">
      <h1 style={{ color: 'blue' }}>My App</h1>
      <button onClick={() => setTheme('dark')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

**You change the color:**
```javascript
// After
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div className="app">
      <h1 style={{ color: 'red', fontSize: '2rem' }}>My App</h1>
      <button onClick={() => setTheme('dark')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

**Result:** Color and font size update instantly without losing the theme state.

### Configuring HMR:

**In Webpack (Manual Setup):**

```javascript
// webpack.config.js
module.exports = {
  devServer: {
    hot: true, // Enable HMR
    port: 3000,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
```

**With React Fast Refresh (Modern Approach):**

```bash
npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

```javascript
// webpack.config.js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel']
          }
        }
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    hot: true
  }
};
```

**In Your Application Entry Point:**

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Enable HMR
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(<NextApp />);
  });
}
```

### HMR Limitations:

**Cases where HMR requires a full reload:**

```javascript
// 1. Changes to component constructor or initial state
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 }; // Changing this requires reload
  }
}

// 2. Changes to module exports
export default App;
// Changing to: export { App as default }; // May require reload

// 3. Changes to files that affect many other modules
// Like changing a global constant used everywhere
```

### React Fast Refresh (Modern HMR):

React Fast Refresh is the modern implementation of HMR specifically for React. It's included by default in Create React App.

**Features:**
- Preserves React component state
- Only updates changed components
- Shows syntax and runtime errors as overlay
- Works with hooks and function components

**Example with Fast Refresh:**

```javascript
// Form.js
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <form>
      <input
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Name"
      />
      <input
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Email"
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}
```

**User types data into the form, then you add a character counter:**

```javascript
// Form.js - Updated
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <form>
      <input
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Name"
      />
      <input
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Email"
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Message"
      />
      <p>Characters: {formData.message.length}/500</p> {/* NEW */}
      <button type="submit">Send</button>
    </form>
  );
}
```

**Result:** Character counter appears, but **all typed text remains intact**!

---

## 80. What are the features of create-react-app and how do you eject from it?

**Create React App (CRA)** is the official tool for setting up a new React project with zero configuration. It provides a pre-configured development environment.

### Features of Create React App:

### 1. **Zero Configuration Setup**

```bash
npx create-react-app my-app
cd my-app
npm start
```

No need to configure Webpack, Babel, ESLint, etc. Everything works out of the box.

### 2. **Development Server with Hot Reloading**

```bash
npm start
# Starts development server at http://localhost:3000
# Automatically opens browser
# Hot reloading enabled
```

### 3. **Built-in Build Scripts**

```bash
# Development mode
npm start

# Production build
npm run build

# Run tests
npm test

# Eject (irreversible)
npm run eject
```

### 4. **Production Optimization**

When you run `npm run build`, CRA automatically:

```javascript
// Minification
// Before: 50KB
function MyComponent() {
  const [count, setCount] = useState(0);
  return <div>Count: {count}</div>;
}

// After: 5KB (minified + gzipped)
function MyComponent(){const[e,t]=useState(0);return <div>Count: {e}</div>}

// Code splitting
// Tree shaking (removes unused code)
// Asset optimization
```

### 5. **JSX and ES6+ Support**

```javascript
// All these modern features work automatically:

// JSX
const element = <h1>Hello</h1>;

// Arrow functions
const greet = (name) => `Hello, ${name}`;

// Destructuring
const { name, age } = user;

// Spread operator
const newUser = { ...user, updated: true };

// Async/await
const fetchData = async () => {
  const response = await fetch('/api');
  return response.json();
};

// Optional chaining
const userName = user?.profile?.name;
```

### 6. **CSS and Asset Imports**

```javascript
// Import CSS
import './App.css';

// Import images
import logo from './logo.png';

// Import JSON
import data from './data.json';

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Logo" />
    </div>
  );
}
```

### 7. **CSS Modules**

```css
/* Button.module.css */
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
}

.primary {
  background: green;
}
```

```javascript
// Button.js
import styles from './Button.module.css';

function Button() {
  return (
    <button className={styles.button}>
      Click Me
    </button>
  );
}
```

### 8. **Environment Variables**

```bash
# .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key
```

```javascript
// Access in your code
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

fetch(`${apiUrl}/data`, {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});
```

### 9. **Testing Setup**

```javascript
// App.test.js (included by default)
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

```bash
npm test
# Runs tests in watch mode
```

### 10. **Progressive Web App (PWA) Support**

```javascript
// index.js
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Enable PWA features
serviceWorkerRegistration.register();
```

### 11. **TypeScript Support**

```bash
# Create new app with TypeScript
npx create-react-app my-app --template typescript

# Or add to existing app
npm install --save typescript @types/node @types/react @types/react-dom
```

---

## How to Eject from Create React App:

**⚠️ WARNING: Ejecting is a ONE-WAY operation. You CANNOT go back!**

### What is Ejecting?

Ejecting removes the single build dependency from your project and copies all configuration files and dependencies into your project, giving you full control.

### Before Ejecting:

```
my-app/
├── node_modules/
├── public/
├── src/
├── package.json
└── README.md

Hidden configuration in react-scripts
```

### After Ejecting:

```
my-app/
├── config/
│   ├── webpack.config.js
│   ├── webpackDevServer.config.js
│   ├── jest/
│   └── paths.js
├── scripts/
│   ├── build.js
│   ├── start.js
│   └── test.js
├── node_modules/
├── public/
├── src/
└── package.json (with 50+ new dependencies)
```

### When to Eject:

**✅ Good reasons to eject:**
- Need to customize Webpack configuration
- Want to add custom Babel plugins
- Need to modify build process significantly
- Want to use libraries that require specific Webpack configuration

**❌ Bad reasons to eject:**
- Just want to change one small thing (use alternatives instead)
- Don't understand what ejecting does
- Trying to learn React (stick with CRA)

### How to Eject:

```bash
# Step 1: Commit all changes (ejecting is irreversible)
git add .
git commit -m "Before ejecting"

# Step 2: Eject
npm run eject

# You'll see a warning:
? Are you sure you want to eject? This action is permanent. (y/N)

# Type 'y' and press Enter
```

**What happens after ejecting:**

```bash
✔ Ejecting...
✔ Copying files into /my-app
✔ Adding dependencies to package.json
✔ Updating scripts in package.json

Created:
  config/
  scripts/
  
Added dependencies:
  @babel/core
  @babel/preset-env
  @babel/preset-react
  webpack
  webpack-dev-server
  babel-loader
  css-loader
  ... (50+ more)

Removed:
  react-scripts
```

### After Ejecting - Customization Example:

**Before Ejecting (impossible to customize):**
```javascript
// Hidden inside react-scripts
// Can't modify
```

**After Ejecting (full control):**

```javascript
// config/webpack.config.js - Now you can edit!
module.exports = {
  // Add custom loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Add custom file loader
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  
  // Add custom plugin
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionPlugin()
  ],
  
  // Modify optimization
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  }
};
```

### Alternatives to Ejecting:

**1. Using CRACO (Create React App Configuration Override)**

```bash
npm install @craco/craco
```

```javascript
// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Modify webpack config without ejecting
      return webpackConfig;
    }
  },
  babel: {
    plugins: ['babel-plugin-styled-components']
  }
};
```

**2. Using react-app-rewired**

```bash
npm install react-app-rewired
```

```javascript
// config-overrides.js
module.exports = function override(config, env) {
  // Modify config
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  });
  
  return config;
};
```

**3. Switching to Vite**

```bash
# Modern alternative to CRA
npm create vite@latest my-app -- --template react
```

### Comparison:

| Feature | Create React App | After Ejecting | CRACO/Rewired |
|---------|-----------------|----------------|---------------|
| Configuration | Hidden | Full access | Selective override |
| Maintenance | Easy | Your responsibility | Easy |
| Upgrades | Automatic | Manual | Automatic |
| Complexity | Simple | Complex | Moderate |
| Reversible | N/A | No | Yes |

### Best Practice:

**Instead of ejecting, consider:**
1. Using CRACO or react-app-rewired for small customizations
2. Switching to Vite or Next.js for new projects
3. Only eject if you absolutely need full control and understand the implications

**Example Decision Tree:**
```
Need customization?
├─ Yes
│  ├─ Small change (one plugin/loader)
│  │  └─ Use CRACO ✅
│  └─ Major changes (complete rebuild)
│     └─ Consider Vite or Next.js ✅
└─ No
   └─ Stay with CRA ✅
```

## Integrations and API Handling

# 81. How do you handle API calls in React?

API calls in React are typically handled using hooks like `useEffect` for side effects and `useState` for managing data. Here are the common approaches:

## Best Practices for API Calls:

1. **Use `useEffect` hook** - Make API calls when component mounts
2. **Manage loading states** - Show loading indicators during fetches
3. **Handle errors** - Implement proper error handling
4. **Cleanup** - Cancel requests on unmount to prevent memory leaks
5. **Separate concerns** - Use custom hooks or services for API logic

## Example - Basic API Call:

```javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user data
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.example.com/users/${userId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

## Example - Custom Hook for API Calls:

```javascript
// useApi.js - Reusable custom hook
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to abort fetch on unmount
    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage in component
function ProductList() {
  const { data: products, loading, error } = useApi('https://api.example.com/products');

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

## Example - POST Request:

```javascript
import { useState } from 'react';

function CreateUser() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const result = await response.json();
      setMessage(`User created successfully: ${result.name}`);
      setFormData({ name: '', email: '' });
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Creating...' : 'Create User'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

---

# 82. What is Axios and how is it used over fetch in React applications?

**Axios** is a popular promise-based HTTP client library for making API requests in JavaScript. It provides a more feature-rich and convenient API compared to the native `fetch` API.

## Key Advantages of Axios over Fetch:

1. **Automatic JSON transformation** - No need to call `.json()`
2. **Better error handling** - Rejects on HTTP error status codes
3. **Request/response interceptors** - Modify requests/responses globally
4. **Request cancellation** - Built-in support with cancel tokens
5. **Progress tracking** - Monitor upload/download progress
6. **Timeout support** - Set request timeout easily
7. **CSRF protection** - Built-in XSRF token handling
8. **Older browser support** - Works in older browsers without polyfills

## Installation:

```bash
npm install axios
# or
yarn add axios
```

## Example - Basic GET Request Comparison:

### Using Fetch:
```javascript
import { useState, useEffect } from 'react';

function FetchExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Need to manually parse JSON
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

### Using Axios:
```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data); // Data is automatically parsed
        setLoading(false);
      })
      .catch(err => {
        // Axios automatically rejects on error status codes
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

## Example - POST Request with Axios:

```javascript
import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [post, setPost] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const result = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        post,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setResponse(result.data);
      setPost({ title: '', body: '' });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {response && <p>Created post with ID: {response.id}</p>}
    </form>
  );
}
```

## Example - Axios Instance with Interceptors:

```javascript
// api.js - Create configured Axios instance
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor - Add auth token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// Usage in component
import { useState, useEffect } from 'react';
import api from './api';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/dashboard')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, []);

  return <div>{data && <h1>Welcome, {data.userName}</h1>}</div>;
}
```

## Example - Request Cancellation:

```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const searchUsers = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.example.com/search?q=${query}`,
          { cancelToken: cancelToken.token }
        );
        setResults(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error('Error:', err);
        }
      }
    };

    const timeoutId = setTimeout(searchUsers, 500); // Debounce

    return () => {
      clearTimeout(timeoutId);
      cancelToken.cancel('Request canceled');
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## When to Use Axios vs Fetch:

**Use Axios when:**
- You need interceptors for authentication or logging
- You want automatic request/response transformation
- You need built-in timeout and progress tracking
- You're working with complex API requirements

**Use Fetch when:**
- You want to minimize dependencies
- You're building a simple application
- You need native browser support without extra libraries
- Bundle size is a critical concern

# 83. How would you handle WebSocket connections in a React application?

WebSocket connections enable real-time, bidirectional communication between the client and server. In React, you need to manage the WebSocket lifecycle carefully to avoid memory leaks and ensure proper cleanup.

## Best Practices for WebSocket in React:

1. **Initialize in `useEffect`** - Create connection when component mounts
2. **Cleanup on unmount** - Close connection to prevent memory leaks
3. **Handle reconnection** - Implement automatic reconnection logic
4. **Manage connection state** - Track connected/disconnected status
5. **Error handling** - Handle connection errors gracefully
6. **Use custom hooks** - Encapsulate WebSocket logic for reusability

## Example - Basic WebSocket Implementation:

```javascript
import { useState, useEffect, useRef } from 'react';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef(null);

  useEffect(() => {
    // Create WebSocket connection
    const ws = new WebSocket('ws://localhost:8080/chat');
    wsRef.current = ws;

    // Connection opened
    ws.onopen = () => {
      console.log('WebSocket Connected');
      setIsConnected(true);
    };

    // Listen for messages
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    // Connection closed
    ws.onclose = () => {
      console.log('WebSocket Disconnected');
      setIsConnected(false);
    };

    // Handle errors
    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setIsConnected(false);
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array - connect once

  const sendMessage = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'message',
        text: inputMessage,
        timestamp: new Date().toISOString()
      }));
      setInputMessage('');
    }
  };

  return (
    <div>
      <div>
        Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
      </div>
      
      <div style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          disabled={!isConnected}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} disabled={!isConnected}>
          Send
        </button>
      </div>
    </div>
  );
}
```

## Example - Custom Hook with Reconnection Logic:

```javascript
// useWebSocket.js
import { useState, useEffect, useRef, useCallback } from 'react';

function useWebSocket(url, options = {}) {
  const {
    reconnectInterval = 3000,
    reconnectAttempts = 5,
    onOpen,
    onClose,
    onMessage,
    onError
  } = options;

  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const wsRef = useRef(null);
  const reconnectCountRef = useRef(0);
  const reconnectTimeoutRef = useRef(null);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = (event) => {
        console.log('WebSocket Connected');
        setIsConnected(true);
        reconnectCountRef.current = 0;
        onOpen?.(event);
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setLastMessage(data);
        onMessage?.(data);
      };

      ws.onclose = (event) => {
        console.log('WebSocket Disconnected');
        setIsConnected(false);
        onClose?.(event);

        // Attempt to reconnect
        if (reconnectCountRef.current < reconnectAttempts) {
          reconnectCountRef.current++;
          console.log(`Reconnection attempt ${reconnectCountRef.current}/${reconnectAttempts}`);
          
          reconnectTimeoutRef.current = setTimeout(() => {
            connect();
          }, reconnectInterval);
        } else {
          console.log('Max reconnection attempts reached');
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
        onError?.(error);
      };
    } catch (error) {
      console.error('Connection error:', error);
    }
  }, [url, reconnectInterval, reconnectAttempts, onOpen, onClose, onMessage, onError]);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [connect]);

  const sendMessage = useCallback((data) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(data));
      return true;
    }
    console.warn('WebSocket is not connected');
    return false;
  }, []);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
    if (wsRef.current) {
      wsRef.current.close();
    }
  }, []);

  return {
    isConnected,
    lastMessage,
    sendMessage,
    disconnect
  };
}

export default useWebSocket;

// Usage in component
function LiveDashboard() {
  const [stats, setStats] = useState({ users: 0, messages: 0 });

  const { isConnected, lastMessage, sendMessage } = useWebSocket(
    'ws://localhost:8080/dashboard',
    {
      reconnectInterval: 3000,
      reconnectAttempts: 5,
      onMessage: (data) => {
        if (data.type === 'stats') {
          setStats(data.payload);
        }
      },
      onOpen: () => {
        console.log('Dashboard connected');
        sendMessage({ type: 'subscribe', channel: 'stats' });
      }
    }
  );

  return (
    <div>
      <h2>Live Dashboard {isConnected ? '🟢' : '🔴'}</h2>
      <div>Active Users: {stats.users}</div>
      <div>Total Messages: {stats.messages}</div>
      <div>Last Update: {lastMessage?.timestamp}</div>
    </div>
  );
}
```

## Example - Real-time Notifications:

```javascript
import { useState, useEffect } from 'react';

function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/notifications');
    setWs(socket);

    socket.onopen = () => {
      console.log('Notification service connected');
      // Authenticate
      socket.send(JSON.stringify({
        type: 'auth',
        token: localStorage.getItem('authToken')
      }));
    };

    socket.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      
      setNotifications((prev) => [notification, ...prev].slice(0, 10));
      
      // Show browser notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(notification.title, {
          body: notification.message,
          icon: '/notification-icon.png'
        });
      }
    };

    socket.onerror = (error) => {
      console.error('Notification service error:', error);
    };

    socket.onclose = () => {
      console.log('Notification service disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  const markAsRead = (id) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'mark_read',
        notificationId: id
      }));
      
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    }
  };

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul>
          {notifications.map((notif) => (
            <li
              key={notif.id}
              style={{
                backgroundColor: notif.read ? '#f0f0f0' : '#e3f2fd',
                padding: '10px',
                marginBottom: '5px'
              }}
            >
              <strong>{notif.title}</strong>
              <p>{notif.message}</p>
              <small>{new Date(notif.timestamp).toLocaleString()}</small>
              {!notif.read && (
                <button onClick={() => markAsRead(notif.id)}>
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## Example - Using Socket.IO (Popular WebSocket Library):

```javascript
// First install: npm install socket.io-client
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function CollaborativeEditor() {
  const [content, setContent] = useState('');
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to Socket.IO server
    const newSocket = io('http://localhost:8080', {
      auth: {
        token: localStorage.getItem('authToken')
      },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5
    });

    setSocket(newSocket);

    // Listen for events
    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('document:update', (data) => {
      setContent(data.content);
    });

    newSocket.on('users:update', (data) => {
      setUsers(data.users);
    });

    newSocket.on('user:joined', (data) => {
      console.log(`${data.username} joined`);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Cleanup
    return () => {
      newSocket.close();
    };
  }, []);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    // Emit changes to server
    if (socket) {
      socket.emit('document:edit', {
        content: newContent,
        timestamp: Date.now()
      });
    }
  };

  return (
    <div>
      <div>
        <h3>Active Users: {users.length}</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <textarea
        value={content}
        onChange={handleContentChange}
        style={{ width: '100%', height: '400px' }}
        placeholder="Start typing..."
      />
    </div>
  );
}
```

---

# 84. What are some strategies used to connect a React front end to a backend server?

Connecting a React frontend to a backend involves various strategies depending on your architecture, requirements, and scale. Here are the most common approaches:

## 1. REST API (Most Common)

Using REST APIs with fetch or Axios to communicate with backend endpoints.

```javascript
// api/userService.js - Centralized API service
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// User service
export const userService = {
  getAll: () => apiClient.get('/users'),
  getById: (id) => apiClient.get(`/users/${id}`),
  create: (data) => apiClient.post('/users', data),
  update: (id, data) => apiClient.put(`/users/${id}`, data),
  delete: (id) => apiClient.delete(`/users/${id}`)
};

// Usage in component
import { useState, useEffect } from 'react';
import { userService } from './api/userService';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService.getAll()
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 2. GraphQL (Apollo Client)

GraphQL provides a flexible query language for APIs with efficient data fetching.

```javascript
// First install: npm install @apollo/client graphql

// apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;

// index.js - Wrap app with ApolloProvider
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// Usage in component
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function UserManagement() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => refetch()
  });

  const handleCreate = async () => {
    await createUser({
      variables: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={handleCreate}>Add User</button>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 3. WebSocket / Real-time Communication

For real-time data updates and bidirectional communication.

```javascript
// socketService.js
import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect(url, token) {
    this.socket = io(url, {
      auth: { token },
      reconnection: true
    });

    this.socket.on('connect', () => {
      console.log('Socket connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    return this.socket;
  }

  emit(event, data) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event) {
    if (this.socket) {
      this.socket.off(event);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketService();

// Usage in component
import { useEffect, useState } from 'react';
import socketService from './socketService';

function RealTimeChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketService.connect('http://localhost:8080', localStorage.getItem('token'));

    socketService.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      socketService.off('message');
      socketService.disconnect();
    };
  }, []);

  const sendMessage = (text) => {
    socketService.emit('send_message', { text, timestamp: Date.now() });
  };

  return (
    <div>
      {messages.map((msg, idx) => (
        <div key={idx}>{msg.text}</div>
      ))}
      <button onClick={() => sendMessage('Hello!')}>Send</button>
    </div>
  );
}
```

## 4. Server-Side Rendering (SSR) with Next.js

Next.js provides built-in API routes and server-side data fetching.

```javascript
// pages/api/users.js - API route in Next.js
export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch from database
    const users = await db.users.findAll();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const user = await db.users.create(req.body);
    res.status(201).json(user);
  }
}

// pages/users.js - Server-side rendering
export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return {
    props: { users }
  };
}

function UsersPage({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersPage;

// Static generation with revalidation
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();

  return {
    props: { users },
    revalidate: 60 // Revalidate every 60 seconds
  };
}
```

## 5. Backend for Frontend (BFF) Pattern

Create a dedicated backend layer specifically for your React frontend.

```javascript
// server/bff.js - Express BFF server
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Aggregate data from multiple services
app.get('/api/dashboard', async (req, res) => {
  try {
    const [users, stats, activities] = await Promise.all([
      axios.get('http://user-service:5001/users'),
      axios.get('http://analytics-service:5002/stats'),
      axios.get('http://activity-service:5003/recent')
    ]);

    res.json({
      users: users.data,
      stats: stats.data,
      activities: activities.data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log('BFF running on port 4000'));

// React component consuming BFF
function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Users: {data.users.length}</h2>
      <h2>Total Views: {data.stats.views}</h2>
      <h2>Recent Activities: {data.activities.length}</h2>
    </div>
  );
}
```

## 6. Proxy Configuration (Development)

Configure proxy in package.json to avoid CORS issues during development.

```json
// package.json
{
  "proxy": "http://localhost:5000"
}

// Now you can make requests without full URL
fetch('/api/users')  // Proxies to http://localhost:5000/api/users
```

## 7. State Management Integration (Redux + RTK Query)

Redux Toolkit Query provides powerful data fetching and caching.

```javascript
// store/api/usersApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User']
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['User']
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['User']
    })
  })
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation
} = usersApi;

// Usage in component
function UserList() {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();

  const handleAdd = async () => {
    await createUser({ name: 'New User', email: 'user@example.com' });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={handleAdd}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Summary of Strategies:

| Strategy | Best For | Complexity |
|----------|----------|------------|
| REST API | Standard CRUD operations | Low |
| GraphQL | Complex data requirements | Medium |
| WebSocket | Real-time features | Medium |
| SSR/Next.js | SEO, performance | Medium-High |
| BFF Pattern | Microservices architecture | High |
| RTK Query | Redux applications | Medium |

Choose the strategy that best fits your application's requirements, team expertise, and scalability needs!

## Deployment and Optimization

# 85. How would you deploy a React application?

Deploying a React application involves building the production bundle and hosting it on a server or platform. Here are the most common deployment strategies:

## 1. Build Process

First, create an optimized production build:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# This creates a 'build' folder with optimized static files
```

The build folder contains:
- Minified JavaScript bundles
- Optimized CSS files
- Compressed assets
- index.html entry point

## 2. Vercel (Recommended for Next.js/React)

**Easiest deployment with automatic CI/CD**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Using Vercel Dashboard:**
1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Automatic deployment on every push

```json
// vercel.json - Configuration file
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": { "cache-control": "s-maxage=31536000,immutable" },
      "dest": "/static/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 3. Netlify

**Great for static React apps with continuous deployment**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

**Using Netlify Dashboard:**
1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Deploy automatically on git push

```toml
# netlify.toml - Configuration file
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 4. AWS S3 + CloudFront

**Scalable and cost-effective for static sites**

```bash
# Install AWS CLI
# Configure AWS credentials
aws configure

# Build the app
npm run build

# Sync to S3 bucket
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Deployment Script (deploy.sh):**
```bash
#!/bin/bash

# Build the application
echo "Building React app..."
npm run build

# Upload to S3
echo "Uploading to S3..."
aws s3 sync build/ s3://my-react-app-bucket \
  --delete \
  --cache-control max-age=31536000,public \
  --exclude index.html

# Upload index.html separately with no-cache
aws s3 cp build/index.html s3://my-react-app-bucket/index.html \
  --cache-control no-cache,no-store,must-revalidate

# Invalidate CloudFront
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"

echo "Deployment complete!"
```

## 5. Docker Deployment

**For containerized applications**

```dockerfile
# Dockerfile
# Stage 1: Build the application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

```nginx
# nginx.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

```bash
# Build and run Docker container
docker build -t my-react-app .
docker run -p 80:80 my-react-app

# Using docker-compose
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

## 6. GitHub Pages

**Free hosting for public repositories**

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}

# Deploy
npm run deploy
```

## 7. Traditional Server (Node.js + Express)

**For self-hosted deployments**

```javascript
// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from build folder
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: '1y',
  etag: false
}));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

```json
// package.json
{
  "scripts": {
    "start": "node server.js",
    "build": "react-scripts build"
  }
}
```

## 8. CI/CD Pipeline (GitHub Actions)

**Automated deployment on every push**

```yaml
# .github/workflows/deploy.yml
name: Deploy React App

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test -- --watchAll=false
    
    - name: Build
      run: npm run build
      env:
        CI: false
        REACT_APP_API_URL: ${{ secrets.API_URL }}
    
    - name: Deploy to S3
      uses: jakejarvis/s3-sync-action@master
      with:
        args: --delete
      env:
        AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        SOURCE_DIR: 'build'
```

## Environment Variables

```bash
# .env.production
REACT_APP_API_URL=https://api.production.com
REACT_APP_ENV=production
REACT_APP_ANALYTICS_ID=UA-XXXXXXXXX-X

# .env.staging
REACT_APP_API_URL=https://api.staging.com
REACT_APP_ENV=staging
```

---

# 86. How do you optimize the performance of a React application for production?

Performance optimization is crucial for providing a fast, smooth user experience. Here are comprehensive strategies:

## 1. Code Splitting & Lazy Loading

Split your bundle to load only necessary code initially.

```javascript
// Using React.lazy and Suspense
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// Route-based code splitting with loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">Loading...</div>
);

// Lazy load with retry logic
function lazyWithRetry(componentImport) {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem('page-has-been-force-refreshed') || 'false'
    );

    try {
      const component = await componentImport();
      window.localStorage.setItem('page-has-been-force-refreshed', 'false');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        window.localStorage.setItem('page-has-been-force-refreshed', 'true');
        return window.location.reload();
      }
      throw error;
    }
  });
}

const HeavyComponent = lazyWithRetry(() => import('./HeavyComponent'));
```

## 2. Memoization Techniques

Prevent unnecessary re-renders using React.memo, useMemo, and useCallback.

```javascript
import { memo, useMemo, useCallback, useState } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.data.length === nextProps.data.length &&
         prevProps.onUpdate === nextProps.onUpdate;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);

  // useMemo for expensive calculations
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return items.reduce((acc, item) => acc + item.name.length, 0);
  }, [items]); // Only recalculate when items change

  // useCallback for function memoization
  const handleUpdate = useCallback(() => {
    console.log('Update called');
    setItems(prev => [...prev, { 
      id: prev.length + 1, 
      name: `Item ${prev.length + 1}` 
    }]);
  }, []); // Function reference stays the same

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <p>Total characters: {expensiveValue}</p>
      <ExpensiveComponent data={items} onUpdate={handleUpdate} />
    </div>
  );
}
```

## 3. Virtual Scrolling for Large Lists

Use libraries like react-window or react-virtualized for rendering large lists.

```javascript
// npm install react-window
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  // Row renderer
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      <h3>{items[index].title}</h3>
      <p>{items[index].description}</p>
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={100}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// For variable size items
import { VariableSizeList } from 'react-window';

function VariableList({ items }) {
  const getItemSize = (index) => {
    // Calculate dynamic height based on content
    return items[index].expanded ? 200 : 50;
  };

  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].content}
    </div>
  );

  return (
    <VariableSizeList
      height={600}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </VariableSizeList>
  );
}
```

## 4. Image Optimization

Optimize images for faster loading and better performance.

```javascript
// Lazy loading images
function LazyImage({ src, alt, placeholder }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    
    if (imageRef && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.01, rootMargin: '75px' }
      );
      observer.observe(imageRef);
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      loading="lazy"
    />
  );
}

// Responsive images with srcset
function ResponsiveImage({ src, alt }) {
  return (
    <img
      src={src}
      srcSet={`
        ${src}?w=320 320w,
        ${src}?w=640 640w,
        ${src}?w=1024 1024w
      `}
      sizes="(max-width: 320px) 280px,
             (max-width: 640px) 600px,
             1024px"
      alt={alt}
      loading="lazy"
    />
  );
}

// Using modern image formats
function ModernImage({ src, alt }) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.avif`} type="image/avif" />
      <img src={`${src}.jpg`} alt={alt} loading="lazy" />
    </picture>
  );
}
```

## 5. Bundle Size Optimization

Analyze and reduce bundle size.

```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer

# Add to package.json
{
  "scripts": {
    "analyze": "source-map-explorer 'build/static/js/*.js'"
  }
}

# Install source-map-explorer
npm install --save-dev source-map-explorer
npm run build
npm run analyze
```

```javascript
// Tree shaking - Import only what you need
// Bad
import _ from 'lodash';
_.debounce(fn, 300);

// Good
import debounce from 'lodash/debounce';
debounce(fn, 300);

// Even better - use ES modules
import { debounce } from 'lodash-es';
```

## 6. Debouncing & Throttling

Optimize event handlers for better performance.

```javascript
import { useState, useCallback, useEffect, useRef } from 'react';

// Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// Search component with debouncing
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // API call only happens after user stops typing for 500ms
      fetch(`/api/search?q=${debouncedSearchTerm}`)
        .then(res => res.json())
        .then(setResults);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Custom throttle hook
function useThrottle(callback, delay) {
  const lastRun = useRef(Date.now());

  return useCallback((...args) => {
    const now = Date.now();
    
    if (now - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = now;
    }
  }, [callback, delay]);
}

// Scroll event with throttling
function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useThrottle(() => {
    setScrollPosition(window.scrollY);
  }, 100); // Update at most every 100ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <div>Scroll position: {scrollPosition}px</div>;
}
```

## 7. Production Build Optimizations

```json
// package.json - Build optimizations
{
  "scripts": {
    "build": "GENERATE_SOURCEMAP=false react-scripts build",
    "build:analyze": "npm run build && source-map-explorer 'build/static/js/*.js'"
  }
}
```

```javascript
// webpack.config.js (if ejected or using custom config)
module.exports = {
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
    hints: 'warning'
  }
};
```

## 8. Preloading & Prefetching

```javascript
// Preload critical resources
function App() {
  useEffect(() => {
    // Preload critical font
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = '/fonts/main-font.woff2';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  return <div>App Content</div>;
}

// Prefetch route on hover
function NavigationLink({ to, children }) {
  const prefetchRoute = () => {
    // Dynamically import the route component
    import(`./pages${to}`);
  };

  return (
    <Link 
      to={to} 
      onMouseEnter={prefetchRoute}
      onFocus={prefetchRoute}
    >
      {children}
    </Link>
  );
}
```

## 9. Performance Monitoring

```javascript
// Using React Profiler API
import { Profiler } from 'react';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualDuration}ms`);
  console.log(`Base time: ${baseDuration}ms`);
  
  // Send to analytics
  if (actualDuration > 16) { // Longer than one frame
    analytics.track('slow-render', {
      component: id,
      duration: actualDuration
    });
  }
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
      <Profiler id="Sidebar" onRender={onRenderCallback}>
        <Sidebar />
      </Profiler>
    </Profiler>
  );
}

// Web Vitals monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  // Send metrics to analytics endpoint
  fetch('/analytics', {
    method: 'POST',
    body: JSON.stringify({ name, delta, id })
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

# Service Workers and HTTPS in React Applications

## 87. What are Service Workers and How Can They Benefit a React Application?

### What are Service Workers?

**Service workers** are JavaScript files that run in the background, separate from the main browser thread. They act as a programmable proxy between your web application and the network, intercepting network requests and enabling powerful features like offline functionality, push notifications, and background sync.

### Key Characteristics:
- Run on a separate thread (no DOM access)
- Event-driven (activate on specific events)
- HTTPS required (except localhost)
- Can't access localStorage directly
- Have a specific lifecycle (install → activate → fetch)

### Benefits for React Applications:

1. **Offline Functionality** - App works without internet
2. **Faster Load Times** - Cache assets for quick retrieval
3. **Better Performance** - Reduce server requests
4. **Progressive Web App (PWA)** - Enable app-like experience
5. **Background Sync** - Queue requests when offline
6. **Push Notifications** - Engage users even when app is closed
7. **Improved Reliability** - Handle flaky network connections

### Example Implementation:

#### 1. Basic Service Worker Registration (React)

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker
serviceWorkerRegistration.register({
  onSuccess: () => console.log('Service worker registered successfully'),
  onUpdate: (registration) => {
    console.log('New content available, please refresh');
    // Optionally show update notification to user
  }
});
```

#### 2. Service Worker Registration Helper

```javascript
// src/serviceWorkerRegistration.js
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config) {
  if ('serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content available
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Content cached for offline use
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection. App is running in offline mode.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
```

#### 3. Service Worker File with Caching Strategy

```javascript
// public/service-worker.js
const CACHE_NAME = 'my-react-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/logo192.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Return offline page if available
        return caches.match('/offline.html');
      })
  );
});
```

#### 4. React Component with Update Notification

```javascript
// src/components/UpdateNotification.jsx
import React, { useState, useEffect } from 'react';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

function UpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: (reg) => {
        setRegistration(reg);
        setShowUpdate(true);
      }
    });
  }, []);

  const handleUpdate = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  if (!showUpdate) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#4CAF50',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <p style={{ margin: '0 0 10px 0' }}>
        A new version is available!
      </p>
      <button 
        onClick={handleUpdate}
        style={{
          background: 'white',
          color: '#4CAF50',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Update Now
      </button>
    </div>
  );
}

export default UpdateNotification;
```

#### 5. Advanced Caching Strategies

```javascript
// public/service-worker-advanced.js

// Network First Strategy (for API calls)
const networkFirst = async (request) => {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
};

// Cache First Strategy (for static assets)
const cacheFirst = async (request) => {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Use network-first for API calls
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
  } 
  // Use cache-first for static assets
  else {
    event.respondWith(cacheFirst(request));
  }
});
```

---

## 88. How Do You Configure HTTPS in a React App?

### Why HTTPS is Important:

1. **Security** - Encrypts data transmission
2. **Service Workers** - Required for PWA features
3. **Browser Features** - Geolocation, camera access require HTTPS
4. **SEO** - Google ranks HTTPS sites higher
5. **Trust** - Users trust secure sites more

### Configuration Methods:

### Method 1: Development Environment (Local HTTPS)

#### Using HTTPS in Create React App

```bash
# Windows (Command Prompt)
set HTTPS=true&&npm start

# Windows (PowerShell)
($env:HTTPS = "true") -and (npm start)

# macOS/Linux
HTTPS=true npm start
```

#### Using .env File

```bash
# .env file in project root
HTTPS=true
SSL_CRT_FILE=./localhost.crt
SSL_KEY_FILE=./localhost.key
```

#### Generate Self-Signed Certificate (Development)

```bash
# Using OpenSSL
openssl req -x509 -newkey rsa:4096 -keyout localhost.key -out localhost.crt -days 365 -nodes

# Using mkcert (Recommended)
# Install mkcert
brew install mkcert  # macOS
choco install mkcert # Windows

# Create local CA
mkcert -install

# Generate certificate
mkcert localhost 127.0.0.1 ::1

# This creates:
# localhost+2.pem (certificate)
# localhost+2-key.pem (key)
```

#### Package.json Script Configuration

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "start:https": "HTTPS=true react-scripts start",
    "start:https-custom": "HTTPS=true SSL_CRT_FILE=./localhost+2.pem SSL_KEY_FILE=./localhost+2-key.pem react-scripts start",
    "build": "react-scripts build"
  }
}
```

### Method 2: Custom Webpack Dev Server Configuration

```javascript
// config/webpack.dev.js
const fs = require('fs');
const path = require('path');

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../localhost+2-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../localhost+2.pem')),
    },
    host: 'localhost',
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  // ... other webpack config
};
```

### Method 3: Vite Configuration (for Vite-based React apps)

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost+2-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost+2.pem')),
    },
    host: 'localhost',
    port: 3000,
  },
});
```

### Method 4: Production Deployment with HTTPS

#### A. Using Nginx as Reverse Proxy

```nginx
# /etc/nginx/sites-available/myapp

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Certificate (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    root /var/www/myapp/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### B. Using Apache

```apache
# /etc/apache2/sites-available/myapp.conf

<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    # Redirect to HTTPS
    Redirect permanent / https://yourdomain.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    DocumentRoot /var/www/myapp/build
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/yourdomain.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/yourdomain.com/privkey.pem
    
    # Security Headers
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    
    <Directory /var/www/myapp/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Handle React Router
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

#### C. Getting Free SSL Certificate with Let's Encrypt

```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# For Nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# For Apache
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (runs twice daily)
sudo systemctl status certbot.timer

# Test renewal
sudo certbot renew --dry-run
```

### Method 5: Platform-Specific Deployments

#### Vercel (Automatic HTTPS)

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

#### Netlify (Automatic HTTPS)

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
```

### Method 6: Docker with HTTPS

```dockerfile
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  react-app:
    build: .
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    restart: unless-stopped
```

### Security Best Practices:

```javascript
// src/config/security.js

// 1. Force HTTPS Redirect (in App.js)
useEffect(() => {
  if (window.location.protocol !== 'https:' && 
      window.location.hostname !== 'localhost') {
    window.location.href = 
      'https:' + window.location.href.substring(window.location.protocol.length);
  }
}, []);

// 2. Secure API Calls
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.yourdomain.com';

export const fetchSecure = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    credentials: 'include', // Include cookies
    ...options,
  };
  
  try {
    const response = await fetch(url, defaultOptions);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
```

These examples provide comprehensive coverage of service workers and HTTPS configuration for React applications, from development to production deployment.
## Accessibility in React

# Accessibility in React Applications

## 89. Why is Accessibility Important in Web Development?

### Definition

**Accessibility (a11y)** refers to designing and developing websites and applications that can be used by everyone, including people with disabilities. The "a11y" numeronym represents "a" + 11 letters + "y".

### Key Reasons Why Accessibility is Important:

### 1. **Inclusive Design - Reaching Everyone**
- **1 billion people** worldwide have some form of disability
- 15% of the global population experiences some form of disability
- Temporary disabilities (broken arm, eye surgery)
- Situational limitations (bright sunlight, noisy environment)

### 2. **Legal Compliance**
- **ADA (Americans with Disabilities Act)** - US law
- **Section 508** - US federal agencies requirement
- **WCAG (Web Content Accessibility Guidelines)** - International standard
- **European Accessibility Act** - EU legislation
- Lawsuits and legal penalties for non-compliance

### 3. **Business Benefits**
- **Larger audience** - Don't exclude potential users/customers
- **Better SEO** - Accessible sites rank better
- **Improved usability** - Benefits all users
- **Brand reputation** - Shows social responsibility

### 4. **Technical Advantages**
- **Better code quality** - Semantic HTML improves maintainability
- **Enhanced SEO** - Screen readers and search engines work similarly
- **Mobile-friendly** - Accessibility features help mobile users
- **Future-proof** - Easier to adapt to new devices

### 5. **Ethical Responsibility**
- Equal access to information
- Digital rights are human rights
- Social inclusion and equality

### Types of Disabilities to Consider:

```javascript
// Visual Impairments
const visualDisabilities = {
  blindness: 'Screen readers, braille displays',
  lowVision: 'Screen magnifiers, high contrast',
  colorBlindness: 'Color contrast, not relying on color alone',
  lightSensitivity: 'Dark mode, reduced motion'
};

// Auditory Impairments
const auditoryDisabilities = {
  deafness: 'Captions, transcripts',
  hardOfHearing: 'Volume controls, visual indicators'
};

// Motor Disabilities
const motorDisabilities = {
  limitedDexterity: 'Keyboard navigation, large click targets',
  tremors: 'Larger buttons, undo functionality',
  paralysis: 'Voice controls, switch access'
};

// Cognitive Disabilities
const cognitiveDisabilities = {
  dyslexia: 'Clear fonts, good spacing',
  adhd: 'Minimal distractions, clear focus',
  autism: 'Consistent patterns, clear instructions',
  memoryImpairments: 'Simple navigation, save progress'
};
```

---

## 90. How Can You Make a React Application Accessible?

### Core Accessibility Principles (POUR):

- **P**erceivable - Users can perceive the information
- **O**perable - Users can operate the interface
- **U**nderstandable - Users can understand the content
- **R**obust - Content works across different technologies

### 1. Semantic HTML

```javascript
// ❌ Bad - Non-semantic
function BadExample() {
  return (
    <div onClick={handleClick}>Click me</div>
  );
}

// ✅ Good - Semantic HTML
function GoodExample() {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}

// ✅ Semantic Structure
function SemanticLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <article>
          <h1>Main Heading</h1>
          <section>
            <h2>Section Heading</h2>
            <p>Content here...</p>
          </section>
        </article>
        
        <aside>
          <h2>Related Content</h2>
        </aside>
      </main>
      
      <footer>
        <p>&copy; 2025 Company Name</p>
      </footer>
    </>
  );
}
```

### 2. Keyboard Navigation

```javascript
import React, { useState, useRef, useEffect } from 'react';

// Accessible Dropdown Menu
function AccessibleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  
  const menuItems = ['Profile', 'Settings', 'Logout'];

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
      items?.[focusedIndex]?.focus();
    }
  }, [focusedIndex, isOpen]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => 
            prev < menuItems.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => 
            prev > 0 ? prev - 1 : menuItems.length - 1
          );
        }
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(menuItems.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        Menu
      </button>
      
      {isOpen && (
        <ul
          ref={menuRef}
          id="dropdown-menu"
          role="menu"
          style={{
            position: 'absolute',
            background: 'white',
            border: '1px solid #ccc',
            listStyle: 'none',
            padding: '0.5rem 0'
          }}
        >
          {menuItems.map((item, index) => (
            <li key={item} role="none">
              <button
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
                onClick={() => {
                  console.log(`${item} clicked`);
                  setIsOpen(false);
                  buttonRef.current?.focus();
                }}
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  background: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Skip to Main Content Link
function SkipLink() {
  return (
    
      href="#main-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 999,
        padding: '1rem',
        background: '#000',
        color: '#fff',
        textDecoration: 'none'
      }}
      onFocus={(e) => {
        e.target.style.left = '0';
      }}
      onBlur={(e) => {
        e.target.style.left = '-9999px';
      }}
    >
      Skip to main content
    </a>
  );
}
```

### 3. Focus Management

```javascript
import React, { useRef, useEffect } from 'react';

// Modal with Focus Trap
function AccessibleModal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocusRef.current = document.activeElement;
      
      // Focus first element in modal
      closeButtonRef.current?.focus();
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore previous focus
      previousFocusRef.current?.focus();
      
      // Restore body scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }

    if (e.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 id="modal-title">{title}</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close modal"
            style={{
              border: 'none',
              background: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
```

### 4. Form Accessibility

```javascript
import React, { useState } from 'react';

function AccessibleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    subscribe: false
  });
  
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Text Input with Label */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">
          Name <span aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.25rem',
            border: errors.name ? '2px solid red' : '1px solid #ccc'
          }}
        />
        {errors.name && (
          <span
            id="name-error"
            role="alert"
            style={{ color: 'red', fontSize: '0.875rem' }}
          >
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">
          Email <span aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error email-hint' : 'email-hint'}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.25rem',
            border: errors.email ? '2px solid red' : '1px solid #ccc'
          }}
        />
        <span id="email-hint" style={{ fontSize: '0.875rem', color: '#666' }}>
          We'll never share your email
        </span>
        {errors.email && (
          <span
            id="email-error"
            role="alert"
            style={{ color: 'red', fontSize: '0.875rem', display: 'block' }}
          >
            {errors.email}
          </span>
        )}
      </div>

      {/* Password Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password">
          Password <span aria-label="required">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.password}
          aria-describedby="password-requirements"
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.25rem',
            border: errors.password ? '2px solid red' : '1px solid #ccc'
          }}
        />
        <span id="password-requirements" style={{ fontSize: '0.875rem', color: '#666' }}>
          Must be at least 8 characters
        </span>
      </div>

      {/* Checkbox */}
      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={formData.subscribe}
            onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
            aria-describedby="subscribe-description"
          />
          {' '}Subscribe to newsletter
        </label>
        <span id="subscribe-description" style={{ display: 'block', fontSize: '0.875rem', color: '#666' }}>
          Get weekly updates about new features
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Submit
      </button>
    </form>
  );
}
```

### 5. Images and Alt Text

```javascript
function AccessibleImages() {
  return (
    <div>
      {/* Informative image */}
      <img
        src="/chart.png"
        alt="Bar chart showing 50% increase in sales from Q1 to Q2"
      />

      {/* Decorative image */}
      <img
        src="/decoration.png"
        alt=""
        role="presentation"
      />

      {/* Linked image */}
      <a href="/profile">
        <img
          src="/avatar.jpg"
          alt="John Doe's profile"
        />
      </a>

      {/* Complex image with description */}
      <figure>
        <img
          src="/complex-diagram.png"
          alt="System architecture diagram"
          aria-describedby="diagram-description"
        />
        <figcaption id="diagram-description">
          The diagram shows three main components: the frontend React application,
          the Node.js backend API, and the PostgreSQL database. Arrows indicate
          data flow between components.
        </figcaption>
      </figure>

      {/* Background image with text alternative */}
      <div
        style={{
          backgroundImage: 'url(/hero.jpg)',
          height: '400px'
        }}
        role="img"
        aria-label="Mountain landscape at sunset"
      >
        <h1>Welcome to Our Site</h1>
      </div>
    </div>
  );
}
```

### 6. Color Contrast and Visual Design

```javascript
import React, { useState } from 'react';

function AccessibleButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        // Minimum 4.5:1 contrast ratio for normal text
        background: isHovered ? '#0056b3' : '#007bff',
        color: '#ffffff',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        // Visible focus indicator
        outline: isFocused ? '3px solid #ff0' : 'none',
        outlineOffset: '2px',
        // Minimum touch target size 44x44px (WCAG 2.1)
        minWidth: '44px',
        minHeight: '44px'
      }}
    >
      Click Me
    </button>
  );
}

// Status indicators without relying only on color
function StatusIndicator({ status, message }) {
  const statusConfig = {
    success: { icon: '✓', color: '#28a745', label: 'Success' },
    error: { icon: '✗', color: '#dc3545', label: 'Error' },
    warning: { icon: '⚠', color: '#ffc107', label: 'Warning' },
    info: { icon: 'ℹ', color: '#17a2b8', label: 'Information' }
  };

  const config = statusConfig[status];

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        padding: '1rem',
        background: `${config.color}20`,
        border: `2px solid ${config.color}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <span aria-label={config.label} style={{ fontSize: '1.5rem' }}>
        {config.icon}
      </span>
      <span>{message}</span>
    </div>
  );
}
```

### 7. Live Regions for Dynamic Content

```javascript
import React, { useState } from 'react';

function LiveRegionExample() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const announceMessage = (msg) => {
    setMessage(msg);
    // Clear message after announcement
    setTimeout(() => setMessage(''), 100);
  };

  return (
    <div>
      {/* Polite live region - waits for current speech to finish */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        {message}
      </div>

      {/* Assertive live region - interrupts current speech */}
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ 
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        {count > 10 && 'Warning: Count exceeds 10!'}
      </div>

      <button
        onClick={() => {
          setCount(count + 1);
          announceMessage(`Count increased to ${count + 1}`);
        }}
      >
        Increment: {count}
      </button>

      <button
        onClick={() => {
          announceMessage('Item added to cart successfully');
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
```

### 8. Accessible Data Tables

```javascript
function AccessibleTable() {
  const data = [
    { name: 'John Doe', role: 'Developer', department: 'Engineering' },
    { name: 'Jane Smith', role: 'Designer', department: 'Design' },
    { name: 'Bob Johnson', role: 'Manager', department: 'Operations' }
  ];

  return (
    <table>
      <caption>Employee Directory</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee, index) => (
          <tr key={index}>
            <th scope="row">{employee.name}</th>
            <td>{employee.role}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### 9. Reduced Motion

```javascript
import React, { useEffect, useState } from 'react';

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: prefersReducedMotion 
          ? 'none' 
          : 'all 0.3s ease-in-out'
      }}
    >
      Content here
    </div>
  );
}
```

---

## 91. What is ARIA and How is it Used in React?

### What is ARIA?

**ARIA (Accessible Rich Internet Applications)** is a set of attributes that define ways to make web content and applications more accessible to people with disabilities. It's maintained by the W3C.

### ARIA Purpose:

- Bridge gaps where HTML semantics fall short
- Provide additional context for assistive technologies
- Make dynamic content and complex UI components accessible
- **Should NOT replace semantic HTML**

### ARIA Principles:

1. **First Rule of ARIA**: Don't use ARIA if you can use semantic HTML
2. **Don't change native semantics** unless absolutely necessary
3. **All interactive elements must be keyboard accessible**
4. **Don't use `role="presentation"` or `aria-hidden="true"` on focusable elements**
5. **All interactive elements must have an accessible name**

### ARIA Attributes Categories:

```javascript
// 1. Roles - Define what an element is
const roles = {
  landmark: ['banner', 'navigation', 'main', 'complementary', 'contentinfo'],
  widget: ['button', 'checkbox', 'tab', 'tabpanel', 'dialog', 'menu'],
  document: ['article', 'document', 'feed', 'list', 'listitem']
};

// 2. States - Define current state of an element
const states = {
  'aria-checked': 'true | false | mixed',
  'aria-disabled': 'true | false',
  'aria-expanded': 'true | false',
  'aria-hidden': 'true | false',
  'aria-invalid': 'true | false',
  'aria-pressed': 'true | false | mixed',
  'aria-selected': 'true | false'
};

// 3. Properties - Define characteristics
const properties = {
  'aria-label': 'string',
  'aria-labelledby': 'id reference',
  'aria-describedby': 'id reference',
  'aria-controls': 'id reference',
  'aria-live': 'off | polite | assertive',
  'aria-required': 'true | false',
  'aria-haspopup': 'true | false | menu | dialog'
};
```

### ARIA in React Examples:

### 1. Custom Button with ARIA

```javascript
function CustomButton({ onClick, isPressed, disabled, children }) {
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={isPressed}
      aria-disabled={disabled}
      style={{
        padding: '0.5rem 1rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        background: isPressed ? '#0056b3' : '#007bff',
        color: 'white',
        borderRadius: '4px'
      }}
    >
      {children}
    </div>
  );
}

// Usage
function App() {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <CustomButton
      onClick={() => setIsPressed(!isPressed)}
      isPressed={isPressed}
    >
      Toggle Button
    </CustomButton>
  );
}
```

### 2. Accessible Tabs Component

```javascript
import React, { useState } from 'react';

function AccessibleTabs() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 'tab-1', label: 'Profile', content: 'Profile content here' },
    { id: 'tab-2', label: 'Settings', content: 'Settings content here' },
    { id: 'tab-3', label: 'Messages', content: 'Messages content here' }
  ];

  const handleKeyDown = (e, index) => {
    let newIndex = index;
    
    switch (e.key) {
      case 'ArrowLeft':
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    
    e.preventDefault();
    setActiveTab(newIndex);
    document.getElementById(tabs[newIndex].id)?.focus();
  };

  return (
    <div>
      {/* Tab List */}
      <div role="tablist" aria-label="Account tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderBottom: activeTab === index ? '2px solid #007bff' : '2px solid transparent',
              background: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === index ? 'bold' : 'normal'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab, index) => (
        <div
          key={`panel-${tab.id}`}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={tab.id}
          hidden={activeTab !== index}
          tabIndex={0}
          style={{
            padding: '1rem',
            border: '1px solid #ccc',
            borderTop: 'none'
          }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

### 3. Accessible Accordion

```javascript
import React, { useState } from 'react';

function AccordionItem({ id, title, children, isOpen, onToggle }) {
  const headingId = `accordion-heading-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '0.5rem' }}>
      <h3>
        <button
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          style={{
            width: '100%',
            padding: '1rem',
            border: 'none',
            background: isOpen ? '#f0f0f0' : 'white',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {title}
          <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </h3>
      
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
        style={{
          padding: isOpen ? '1rem' : '0',
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease'
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Accordion() {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const items = [
    { title: 'What is React?', content: 'React is a JavaScript library for building user interfaces.' },
    { title: 'What is ARIA?', content: 'ARIA stands for Accessible Rich Internet Applications.' },
    { title: 'Why accessibility?', content: 'Accessibility ensures everyone can use your application.' }
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
```

### 4. Accessible Alert/Notification

```javascript
import React, { useState, useEffect } from 'react';

function Alert({ type = 'info', message, onClose, autoClose = true }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!isVisible) return null;

  const types = {
    success: { icon: '✓', bg: '#d4edda', border: '#c3e6cb', color: '#155724' },
    error: { icon: '✗', bg: '#f8d7da', border: '#f5c6cb', color: '#721c24' },
    warning: { icon: '⚠', bg: '#fff3cd', border: '#ffeaa7', color: '#856404' },
    info: { icon: 'ℹ', bg: '#d1ecf1', border: '#bee5eb', color: '#0c5460' }
  };

  const config = types[type];

  return (
    <div
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        marginBottom: '1rem',
        background: config.bg,
        border: `1px solid ${config.border}`,
        color: config.color,
        borderRadius: '4px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span aria-hidden="true" style={{ fontSize: '1.25rem' }}>
          {config.icon}
        </span>
        <span>{message}</span>
      </div>
      
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        aria-label="Close alert"
        style={{
          background: 'none',
          border: 'none',
          color: config.color,
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0',
          lineHeight: '1'
        }}
      >
        ×
      </button>
    </div>
  );
}

// Usage
function AlertExample() {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (type, message) => {
    const id = Date.now();
    setAlerts([...alerts, { id, type, message }]);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => addAlert('success', 'Operation completed successfully!')}>
          Success Alert
        </button>
        <button onClick={() => addAlert('error', 'An error occurred!')}>
          Error Alert
        </button>
      </div>

      <div aria-label="Notifications" role="region">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={() => setAlerts(alerts.filter((a) => a.id !== alert.id))}
          />
        ))}
      </div>
    </div>
  );
}
```

### 5. Accessible Tooltip

```javascript
import React, { useState, useRef, useEffect } from 'react';

function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [describedById] = useState(`tooltip-${Math.random().toString(36).substr(2, 9)}`);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible]);

  const positions = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' }
  };

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-describedby={isVisible ? describedById : undefined}
        tabIndex={0}
      >
        {children}
      </span>

      {isVisible && (
        <span
          ref={tooltipRef}
          id={describedById}
          role="tooltip"
          style={{
            position: 'absolute',
            ...positions[position],
            background: '#333',
            color: '#fff',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
}

// Usage
function TooltipExample() {
  return (
    <div style={{ padding: '2rem' }}>
      <p>
        Hover or focus on{' '}
        <Tooltip content="This is helpful information">
          <span style={{ textDecoration: 'underline', cursor: 'help' }}>
            this text
          </span>
        </Tooltip>
        {' '}to see the tooltip.
      </p>
    </div>
  );
}
```

### 6. Accessible Loading States

```javascript
import React, { useState } from 'react';

function LoadingButton({ onClick, children, isLoading }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      aria-busy={isLoading}
      aria-live="polite"
      style={{
        padding: '0.75rem 1.5rem',
        background: isLoading ? '#ccc' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      {isLoading && (
        <span
          role="status"
          aria-label="Loading"
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid #fff',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }}
        />
      )}
      <span>{isLoading ? 'Loading...' : children}</span>
    </button>
  );
}

// Skeleton Loading Screen
function SkeletonLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading content"
    >
      <div style={{
        width: '100%',
        height: '20px',
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        borderRadius: '4px',
        marginBottom: '0.5rem'
      }} />
      <div style={{
        width: '80%',
        height: '20px',
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        borderRadius: '4px'
      }} />
      
      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
}

// Progress Bar
function ProgressBar({ progress, label }) {
  return (
    <div>
      <label htmlFor="progress-bar" id="progress-label">
        {label}
      </label>
      <div
        style={{
          width: '100%',
          height: '20px',
          background: '#e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          marginTop: '0.5rem'
        }}
      >
        <div
          id="progress-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-labelledby="progress-label"
          style={{
            width: `${progress}%`,
            height: '100%',
            background: '#007bff',
            transition: 'width 0.3s ease'
          }}
        />
      </div>
      <span aria-live="polite" style={{ fontSize: '0.875rem', color: '#666' }}>
        {progress}% complete
      </span>
    </div>
  );
}
```

### 7. Accessible Combobox (Autocomplete)

```javascript
import React, { useState, useRef, useEffect } from 'react';

function Combobox({ options, label, placeholder }) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      const option = listRef.current?.querySelector(`[data-index="${focusedIndex}"]`);
      option?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        setFocusedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case 'Enter':
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          e.preventDefault();
          selectOption(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      default:
        break;
    }
  };

  const selectOption = (option) => {
    setInputValue(option);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <label id="combobox-label" htmlFor="combobox-input">
        {label}
      </label>
      
      <input
        ref={inputRef}
        id="combobox-input"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls="combobox-listbox"
        aria-labelledby="combobox-label"
        aria-activedescendant={
          focusedIndex >= 0 ? `option-${focusedIndex}` : undefined
        }
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsOpen(true);
          setFocusedIndex(-1);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginTop: '0.25rem',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul
          ref={listRef}
          id="combobox-listbox"
          role="listbox"
          aria-labelledby="combobox-label"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            maxHeight: '200px',
            overflowY: 'auto',
            margin: '0.25rem 0 0 0',
            padding: 0,
            listStyle: 'none',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 1000
          }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              id={`option-${index}`}
              data-index={index}
              role="option"
              aria-selected={focusedIndex === index}
              onClick={() => selectOption(option)}
              onMouseEnter={() => setFocusedIndex(index)}
              style={{
                padding: '0.5rem',
                cursor: 'pointer',
                background: focusedIndex === index ? '#e0e0e0' : 'white'
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {isOpen && filteredOptions.length === 0 && inputValue && (
        <div
          role="status"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            padding: '0.5rem',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginTop: '0.25rem'
          }}
        >
          No results found
        </div>
      )}
    </div>
  );
}

// Usage
function ComboboxExample() {
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'France', 'Spain', 'Italy', 'Japan', 'China'
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <Combobox
        options={countries}
        label="Select a country"
        placeholder="Start typing..."
      />
    </div>
  );
}
```

### 8. Accessible Breadcrumbs

```javascript
function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}
      >
        {items.map((item, index) => (
          <li
            key={item.label}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {index < items.length - 1 ? (
              <>
                <a href={item.href} style={{ color: '#007bff', textDecoration: 'none' }}>
                  {item.label}
                </a>
                <span
                  aria-hidden="true"
                  style={{ margin: '0 0.5rem', color: '#666' }}
                >
                  /
                </span>
              </>
            ) : (
              <span aria-current="page" style={{ color: '#666' }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Usage
function BreadcrumbExample() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptop' }
  ];

  return <Breadcrumbs items={breadcrumbItems} />;
}
```

### 9. Screen Reader Only Text (Utility)

```css
/* Add to your CSS */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

```javascript
// React component for screen reader only content
function ScreenReaderOnly({ children, focusable = false }) {
  return (
    <span className={focusable ? 'sr-only sr-only-focusable' : 'sr-only'}>
      {children}
    </span>
  );
}

// Usage
function IconButton() {
  return (
    <button>
      <span aria-hidden="true">🗑️</span>
      <ScreenReaderOnly>Delete item</ScreenReaderOnly>
    </button>
  );
}
```

### 10. Testing Accessibility in React

```javascript
// Example with React Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('button is accessible', async () => {
  const { container } = render(
    <button aria-label="Close dialog">X</button>
  );

  // Check for accessibility violations
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  // Test keyboard interaction
  const button = screen.getByRole('button', { name: /close dialog/i });
  expect(button).toBeInTheDocument();
  
  await userEvent.tab();
  expect(button).toHaveFocus();
  
  await userEvent.keyboard('{Enter}');
  // Assert expected behavior
});

test('form has proper labels', () => {
  render(
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </form>
  );

  const input = screen.getByLabelText(/email/i);
  expect(input).toBeInTheDocument();
});
```

### Best Practices Summary:

1. **Use semantic HTML first** - Don't use ARIA if HTML can do it
2. **Provide text alternatives** - Alt text, labels, descriptions
3. **Ensure keyboard accessibility** - All interactive elements must be keyboard accessible
4. **Maintain focus management** - Visible focus indicators, logical tab order
5. **Use sufficient color contrast** - Minimum 4.5:1 for normal text
6. **Support screen readers** - ARIA labels, live regions, proper roles
7. **Test with real users** - Include people with disabilities in testing
8. **Use automated tools** - Lighthouse, axe, WAVE, ESLint plugins
9. **Make content understandable** - Clear language, consistent navigation
10. **Provide alternatives** - Captions for videos, transcripts for audio

These comprehensive examples demonstrate how to implement accessibility features in React applications using ARIA attributes effectively while following best practices!
---

### 92. What is internationalization (i18n) in React?

### 93. How do you implement localization (l10n) in a React app?

## React Code Structure & Best Practices

### 94. How do you structure large React applications?

### 95. What are some best practices when writing React code?

### 96. How do you ensure code quality and maintainability in a React project?

## React and Git Workflows

### 97. How do you manage feature branches in React development with Git?

### 98. What are your strategies for resolving merge conflicts in React projects?

## React Interviews Problem Solving and Scenarios

### 99. How would you handle a feature request or bug report in an ongoing React project?

### 100. Describe your process for optimizing a component that has complex state logic and several child components.