const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const startIndex = content.indexOf('107. ### What is the use of setTimeout');
const endIndexStr = '120. ### How do you redirect new page in javascript';
const endIndex = content.indexOf(endIndexStr, startIndex);
const finalEndIndex = content.indexOf('**[⬆ Back to Top](#table-of-contents)**', endIndex) + '**[⬆ Back to Top](#table-of-contents)**'.length;

const newBlock = `107. ### What is the use of setTimeout

**\`setTimeout()\`** is a method used to execute a function or evaluate an expression once after a specified delay (in milliseconds).

It allows you to defer the execution of code, making it non-blocking and allowing the rest of the script to continue running.

#### Syntax

\`\`\`javascript
setTimeout(function, delay, arg1, arg2, ...);
\`\`\`

#### Example: Basic Usage

For example, let's log a message after 2 seconds (2000 milliseconds) using the \`setTimeout\` method:

\`\`\`javascript
setTimeout(function () {
  console.log("Good morning");
}, 2000);
\`\`\`

#### Example: With Arguments and Arrow Functions

You can also pass arguments to the callback function and use arrow functions for a cleaner syntax:

\`\`\`javascript
const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};

setTimeout(greet, 1500, "Alice"); // Logs "Hello, Alice!" after 1.5 seconds
\`\`\`

#### Key Point

> The \`setTimeout()\` method allows you to schedule a function to run once after a specified number of milliseconds without blocking the execution of the main thread.


  **[⬆ Back to Top](#table-of-contents)**

108. ### What is the use of setInterval

**\`setInterval()\`** is a method used to repeatedly execute a function or evaluate an expression at specified time intervals (in milliseconds).

Unlike \`setTimeout()\`, which only runs once, \`setInterval()\` will continue to execute the code block until it is explicitly stopped using \`clearInterval()\`.

#### Syntax

\`\`\`javascript
setInterval(function, interval, arg1, arg2, ...);
\`\`\`

#### Example: Basic Usage

For example, let's log a message every 2 seconds using the \`setInterval\` method:

\`\`\`javascript
setInterval(function () {
  console.log("Good morning");
}, 2000);
\`\`\`

#### Example: Counter

Here is an example of using \`setInterval\` to create a simple counter:

\`\`\`javascript
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(\`Count: \${count}\`);
  if (count === 3) {
    clearInterval(intervalId); // Stops after 3 iterations
  }
}, 1000);
\`\`\`

#### Key Point

> The \`setInterval()\` method repeatedly calls a function or executes a code snippet with a fixed time delay between each call. It continues until \`clearInterval()\` is called or the window is closed.


  **[⬆ Back to Top](#table-of-contents)**

109. ### Why is JavaScript treated as Single threaded

**JavaScript is treated as a single-threaded language** because its engine contains only one Call Stack and one Memory Heap. It executes code sequentially, one line at a time, and must finish executing a piece of code before moving on to the next.

The language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel across multiple threads or processes, unlike languages like Java, Go, or C++.

#### How JavaScript Handles Concurrency

Even though the main thread is single-threaded, JavaScript can handle concurrent operations (like fetching data, timers, etc.) asynchronously using the **Event Loop** and Web APIs provided by the browser environment.

1. **Call Stack:** Executes synchronous code.
2. **Web APIs:** Browser features (like \`setTimeout\`, DOM events, Fetch) handle asynchronous tasks in the background.
3. **Callback Queue:** Once an asynchronous task completes, its callback is placed in the queue.
4. **Event Loop:** Continuously checks if the Call Stack is empty. If it is, it pushes the first callback from the Callback Queue onto the Call Stack to be executed.

#### Flow Diagram

\`\`\`text
Call Stack -> Web APIs (Background) -> Callback Queue -> Event Loop -> (Back to Call Stack)
\`\`\`

#### Key Point

> JavaScript is fundamentally single-threaded, executing one command at a time in its Call Stack. However, it achieves concurrency and non-blocking behavior by leveraging asynchronous Web APIs, the Callback Queue, and the Event Loop.


  **[⬆ Back to Top](#table-of-contents)**

110. ### What is an event delegation

**Event delegation** is a pattern based on the concept of **Event Bubbling**. It is a technique where you delegate a single parent element as the listener for events that happen inside its child elements, rather than attaching individual event listeners to each child.

When an event occurs on a child element, it "bubbles up" the DOM tree to the parent element, where the single event listener catches and handles it.

#### Benefits

* **Performance and Memory:** Reduces the number of event listeners in memory, improving performance.
* **Dynamic Elements:** Automatically handles events on child elements that are added to the DOM dynamically after the listener was attached.

#### Example: Without Event Delegation

If you have a list and want to listen for clicks on each item, attaching listeners to every item is inefficient:

\`\`\`javascript
const listItems = document.querySelectorAll("li");
listItems.forEach(item => {
  item.addEventListener("click", () => console.log("Item clicked"));
});
\`\`\`

#### Example: With Event Delegation

Instead, attach a single listener to the parent \`<ul>\` and check the event target:

\`\`\`javascript
const list = document.getElementById("my-list");

list.addEventListener("click", function(event) {
  // Check if a list item was clicked
  if (event.target && event.target.nodeName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});
\`\`\`

#### Key Point

> Event delegation is an optimization technique that takes advantage of event bubbling by attaching a single event listener to a parent element to manage events for all of its current and future descendants.


  **[⬆ Back to Top](#table-of-contents)**

111. ### What is ECMAScript

**ECMAScript** is a standardized specification for scripting languages. It forms the foundation and defines the core rules and features that JavaScript implements. 

It is standardized by the ECMA International standards organization within the ECMA-262 and ECMA-402 specifications. 

#### History and Evolution

The first edition of ECMAScript was released in 1997. Since then, it has evolved significantly:

| Edition | Year | Notable Features |
| :--- | :--- | :--- |
| ES5 | 2009 | Strict mode, JSON support, Array methods (forEach, map, filter) |
| ES6 (ES2015) | 2015 | Let/const, arrow functions, classes, promises, template literals |
| ES7+ | 2016+ | Async/await, optional chaining, nullish coalescing, and yearly updates |

#### JavaScript vs. ECMAScript

* **ECMAScript** is the blueprint or rulebook.
* **JavaScript** is the language that implements those rules (along with environment-specific APIs like the DOM or Node.js modules).

#### Key Point

> ECMAScript is the official standard specification that dictates how JavaScript and other conforming languages should operate, ensuring consistency and cross-platform compatibility.


  **[⬆ Back to Top](#table-of-contents)**

112. ### What is JSON

**JSON (JavaScript Object Notation)** is a lightweight, text-based data-interchange format. It is easy for humans to read and write, and it is easy for machines to parse and generate.

Although it is derived from the JavaScript object syntax, JSON is entirely language-independent. Most modern programming languages have built-in support for parsing and generating JSON data.

#### Structure and Types

JSON supports a limited set of data types:
* **String:** \`"Hello"\`
* **Number:** \`42\` or \`3.14\`
* **Boolean:** \`true\` or \`false\`
* **Null:** \`null\`
* **Object:** \`{"key": "value"}\`
* **Array:** \`[1, 2, 3]\`

#### Example

\`\`\`json
{
  "user": {
    "name": "John Doe",
    "age": 30,
    "isActive": true,
    "roles": ["admin", "editor"],
    "profilePic": null
  }
}
\`\`\`

#### Key Point

> JSON is a universal format for structuring and transmitting data between a server and a web application. It acts as a common language for data exchange across different programming environments.


  **[⬆ Back to Top](#table-of-contents)**

113. ### What are the syntax rules of JSON

JSON has strict syntax rules that must be followed for the data to be considered valid. Unlike JavaScript objects, JSON does not forgive trailing commas or unquoted keys.

#### Syntax Rules

Below is the list of syntax rules for JSON:

1. **The data is in name/value pairs.**
2. **The data is separated by commas.** (No trailing comma allowed after the last item).
3. **Curly braces \`{}\` hold objects.**
4. **Square brackets \`[]\` hold arrays.**
5. **Keys must be strings enclosed in double quotes \`""\`.**
6. **String values must also be enclosed in double quotes \`""\`.** (Single quotes are not allowed).

#### Example: Valid vs Invalid

**Valid JSON:**
\`\`\`json
{
  "name": "John",
  "age": 31
}
\`\`\`

**Invalid JSON:**
\`\`\`javascript
{
  name: 'John', // Keys need double quotes, string values need double quotes
  "age": 31,    // Trailing comma is not allowed in JSON
}
\`\`\`

#### Key Point

> JSON strict syntax rules require all keys and string values to be wrapped in double quotes. It does not support functions, undefined, or trailing commas.


  **[⬆ Back to Top](#table-of-contents)**

114. ### What is the purpose JSON stringify

The **\`JSON.stringify()\`** method is used to convert a JavaScript object, array, or primitive value into a JSON-formatted string.

When sending data to a web server or storing it in \`localStorage\`, the data must be in a string format. \`JSON.stringify()\` accomplishes this serialization.

#### Syntax

\`\`\`javascript
JSON.stringify(value, replacer, space);
\`\`\`

#### Example: Basic Usage

\`\`\`javascript
const userJSON = { name: "John", age: 31 };
const userString = JSON.stringify(userJSON);

console.log(userString); 
// Output: '{"name":"John","age":31}'
\`\`\`

#### Example: Formatting with the \`space\` argument

You can pass a third argument to format the output string for readability:

\`\`\`javascript
const userJSON = { name: "John", age: 31 };
const formattedString = JSON.stringify(userJSON, null, 2);

console.log(formattedString);
/* Output:
{
  "name": "John",
  "age": 31
}
*/
\`\`\`

#### Key Point

> \`JSON.stringify()\` serializes native JavaScript objects into a valid JSON string, which is necessary for transmitting data over a network or saving it in text-based storage.


  **[⬆ Back to Top](#table-of-contents)**

115. ### How do you parse JSON string

The **\`JSON.parse()\`** method is used to parse a JSON-formatted string and construct the native JavaScript value or object described by the string.

When receiving data from a web server or reading from \`localStorage\`, the data arrives as a string. You must convert this string back into a usable JavaScript object using \`parse()\`.

#### Syntax

\`\`\`javascript
JSON.parse(text, reviver);
\`\`\`

#### Example: Basic Usage

\`\`\`javascript
const userString = '{"name":"John","age":31}';
const userObject = JSON.parse(userString);

console.log(userObject.name); // "John"
console.log(userObject.age);  // 31
\`\`\`

#### Example: Handling Errors

If the string is not valid JSON, \`JSON.parse()\` will throw a \`SyntaxError\`. It is common to use a \`try...catch\` block when parsing data from unknown sources:

\`\`\`javascript
const malformedData = '{"name": "John",}'; // Trailing comma is invalid

try {
  const data = JSON.parse(malformedData);
} catch (error) {
  console.error("Failed to parse JSON:", error.message);
}
\`\`\`

#### Key Point

> \`JSON.parse()\` takes a valid JSON string and deserializes it into a JavaScript object, array, or primitive, allowing your application to interact with the data programmatically.


  **[⬆ Back to Top](#table-of-contents)**

116. ### Why do you need JSON

You need **JSON** because it serves as a lightweight, standard format for data exchange across the web. When exchanging data between a browser and a server, the data can only be text. 

#### Key Benefits of JSON

1. **Language Independent:** Since JSON is a text-only format, it can be parsed and generated by virtually any programming language (Python, Java, PHP, C#, etc.), making it ideal for API communication.
2. **Lightweight:** It has a minimal syntax compared to alternatives like XML, resulting in smaller file sizes and faster transmission over networks.
3. **Human-Readable:** Its structure is clean and easy to read and debug.
4. **Native JavaScript Compatibility:** Because it is based on JavaScript object syntax, it is exceptionally fast and easy to use within JS applications.

#### JSON vs XML

| Feature | JSON | XML |
| :--- | :--- | :--- |
| **Syntax** | Minimal and clean | Verbose, uses closing tags |
| **Parsing** | Native \`JSON.parse()\` in JS | Requires an XML DOM parser |
| **Data Types** | Supports strings, numbers, arrays, booleans | Everything is a string by default |

#### Key Point

> JSON is the de facto standard for data transmission on the web because it is lightweight, language-agnostic, easily readable by humans, and natively supported by JavaScript.


  **[⬆ Back to Top](#table-of-contents)**

117. ### What are PWAs

**Progressive Web Applications (PWAs)** are web applications built using common web technologies (HTML, CSS, and JavaScript) that are designed to deliver a native app-like user experience across all devices and platforms.

They leverage modern web capabilities to combine the best of web and mobile apps.

#### Core Characteristics

1. **Progressive:** Work for every user, regardless of browser choice.
2. **Responsive:** Fit any form factor (desktop, mobile, tablet).
3. **Offline Capable:** Use **Service Workers** to cache assets and allow the app to function even without a network connection.
4. **Installable:** Can be installed on the user's home screen or desktop without going through an app store, using a **Web App Manifest**.
5. **Safe:** Delivered via HTTPS to prevent snooping and ensure content hasn't been tampered with.

#### Example Scenario

A news website built as a PWA allows users to install it on their phone. If the user loses internet connection while on the subway, the PWA can still display previously loaded articles because the Service Worker cached them locally.

#### Key Point

> PWAs bridge the gap between traditional websites and native mobile applications by offering offline capabilities, installability, and responsive design, all delivered securely over the web.


  **[⬆ Back to Top](#table-of-contents)**

118. ### What is the purpose of clearTimeout method

The **\`clearTimeout()\`** function is used to cancel a timeout that was previously established by calling \`setTimeout()\`. 

When you call \`setTimeout()\`, it returns a unique numeric ID representing the timer. If you want to prevent the scheduled function from executing, you pass this ID to \`clearTimeout()\`.

#### Example: Canceling a Timer

In the example below, a message is scheduled to appear after 3 seconds. However, if the \`stop()\` function is called before the 3 seconds elapse, the timeout is cleared and the message will never appear.

\`\`\`javascript
let timerId;

function greeting() {
  console.log('Good morning!');
}

function start() {
  // Store the timer ID
  timerId = setTimeout(greeting, 3000);
}

function stop() {
  // Clear the timeout using the stored ID
  clearTimeout(timerId);
  console.log("Timer stopped.");
}

start();
stop(); // The greeting will not execute
\`\`\`

#### Use Case

\`clearTimeout()\` is heavily used in patterns like **Debouncing**, where you want to wait for a user to stop performing an action (like typing or scrolling) before executing a function.

#### Key Point

> \`clearTimeout()\` gives you the control to abort a delayed execution initiated by \`setTimeout()\`, provided the delay period has not yet finished.


  **[⬆ Back to Top](#table-of-contents)**

119. ### What is the purpose of clearInterval method

The **\`clearInterval()\`** function is used to cancel a repeating timed action that was previously established by calling \`setInterval()\`.

When you call \`setInterval()\`, it returns a unique numeric ID for the interval. Passing this ID into \`clearInterval()\` halts the repeated execution immediately.

#### Example: Stopping a Repeating Action

In this example, a message logs every 1 second. The interval is cleared after 3 seconds.

\`\`\`javascript
let intervalId;
let counter = 0;

function greeting() {
  counter++;
  console.log(\`Good morning! (Count: \${counter})\`);
  
  // Stop after 3 greetings
  if (counter >= 3) {
    stop();
  }
}

function start() {
  // Store the interval ID
  intervalId = setInterval(greeting, 1000);
}

function stop() {
  // Clear the interval using the stored ID
  clearInterval(intervalId);
  console.log("Interval cleared.");
}

start();
\`\`\`

#### Important Note

Failing to call \`clearInterval()\` when an interval is no longer needed can lead to **memory leaks** and degraded application performance, as the code will run endlessly in the background.

#### Key Point

> \`clearInterval()\` is essential for stopping the continuous execution loop created by \`setInterval()\`, preventing unwanted behavior and infinite loops.


  **[⬆ Back to Top](#table-of-contents)**

120. ### How do you redirect new page in javascript

In vanilla JavaScript, you can redirect a user to a new page or URL using the **\`window.location\`** object.

There are multiple ways to achieve this, each with slightly different behavior regarding the browser's history stack.

#### Methods for Redirection

| Method | Description | Browser History |
| :--- | :--- | :--- |
| \`location.href = "url"\` | Assigns a new URL. The most common way to redirect. | Saves the current page in history. The user can click the "Back" button. |
| \`location.assign("url")\` | Same as assigning to \`href\`. | Saves the current page in history. |
| \`location.replace("url")\` | Replaces the current document with a new one. | **Does not** save the current page in history. The user cannot click "Back" to return. |

#### Examples

**1. Using \`location.href\` (Standard Navigation)**

\`\`\`javascript
function standardRedirect() {
  window.location.href = "https://example.com/newpage";
}
\`\`\`

**2. Using \`location.replace()\` (No Back Button History)**

Use this when redirecting a user after a successful form submission or a login, so they can't hit "Back" to resubmit the form.

\`\`\`javascript
function strictRedirect() {
  window.location.replace("https://example.com/dashboard");
}
\`\`\`

#### Key Point

> You can redirect to a new page using \`window.location.href\`. If you want to prevent the user from returning to the original page via the browser's back button, use \`window.location.replace()\` instead.


  **[⬆ Back to Top](#table-of-contents)**`;

fs.writeFileSync('README.md', content.substring(0, startIndex) + newBlock + content.substring(finalEndIndex));
console.log('Update successful.');
