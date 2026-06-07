const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const startIndex = content.indexOf('161. ### What is the purpose of exec method');
const endIndexStr = '181. ### ';
let endIndex = content.indexOf(endIndexStr, startIndex);
if (endIndex === -1) {
    endIndex = content.indexOf('181. ###', startIndex);
}

const newBlock = `161. ### What is the purpose of exec method

The **\`exec()\`** method is a function of the \`RegExp\` object. Its purpose is to execute a search for a match in a specified string. 

Unlike the \`test()\` method, which simply returns \`true\` or \`false\`, \`exec()\` returns an array containing detailed information about the match (such as the matched text, capturing groups, and the index of the match), or \`null\` if no match is found.

#### Example

\`\`\`javascript
const pattern = /you/;
const result = pattern.exec("How are you doing?");

console.log(result); 
// Output: ["you", index: 8, input: "How are you doing?", groups: undefined]

console.log("Matched text:", result[0]); // "you"
console.log("Found at index:", result.index); // 8
\`\`\`

#### Example with Global flag (\`g\`)
When used with the \`g\` flag, \`exec()\` remembers the last index it matched at. You can call it repeatedly in a loop to find all occurrences.

\`\`\`javascript
const regex = /ab/g;
const str = "abab";
let match;

while ((match = regex.exec(str)) !== null) {
  console.log(\`Found '\${match[0]}' at index \${match.index}.\`);
}
// Found 'ab' at index 0.
// Found 'ab' at index 2.
\`\`\`

#### Key Point

> The \`RegExp.prototype.exec()\` method searches a string for a specified pattern and returns a detailed array with match information, or \`null\` if no match is found.


  **[⬆ Back to Top](#table-of-contents)**

162. ### How do you change the style of a HTML element

You can change the visual appearance of an HTML element using JavaScript through the DOM (Document Object Model). There are two primary ways to do this: modifying **inline styles** or modifying the **CSS classes** applied to the element.

#### 1. Using the \`style\` property (Inline Styles)
You can directly modify the CSS properties of an element. Note that CSS properties containing hyphens (like \`font-size\`) are converted to camelCase (like \`fontSize\`) in JavaScript.

\`\`\`javascript
const titleElement = document.getElementById("title");

// Changing individual styles
titleElement.style.color = "red";
titleElement.style.fontSize = "30px";
titleElement.style.marginTop = "10px";
\`\`\`

#### 2. Using the \`className\` or \`classList\` properties (Recommended)
Applying pre-defined CSS classes is generally preferred for separation of concerns (keeping styling in CSS and logic in JS).

\`\`\`javascript
const buttonElement = document.getElementById("submit-btn");

// Overwrites all existing classes
buttonElement.className = "btn btn-primary active"; 

// Better: Using classList to add/remove/toggle specific classes
buttonElement.classList.add("highlighted");
buttonElement.classList.remove("disabled");
buttonElement.classList.toggle("active");
\`\`\`

#### Key Point

> You can change an element's style by directly setting properties on its \`.style\` object (e.g., \`element.style.color\`), or preferably, by manipulating its CSS classes using \`.classList.add()\` / \`.classList.remove()\`.


  **[⬆ Back to Top](#table-of-contents)**

163. ### What would be the result of 1+2+'3'

The output will be the string **\`"33"\`**.

This happens due to JavaScript's order of operations (left-to-right) and **type coercion** rules.

#### Step-by-Step Breakdown

1. The expression evaluates left-to-right: \`1 + 2\` is evaluated first.
2. Since both \`1\` and \`2\` are numbers, standard addition occurs: \`1 + 2 = 3\`.
3. The expression now looks like this: \`3 + '3'\`.
4. Because one of the operands (\`'3'\`) is a string, JavaScript coerces the number \`3\` into a string and performs **string concatenation** instead of mathematical addition.
5. Therefore, \`"3" + "3"\` results in \`"33"\`.

#### Example Comparison

\`\`\`javascript
console.log(1 + 2 + '3'); // "33" (Add 1+2, then concatenate '3')

console.log('1' + 2 + 3); // "123" (String concatenation from the start)

console.log(1 + 2 - '3'); // 0 (Subtraction forces numeric coercion)
\`\`\`

#### Key Point

> The expression \`1 + 2 + '3'\` evaluates to the string \`"33"\`. JavaScript adds the first two numbers mathematically to get \`3\`, and then concatenates it with the string \`'3'\`.


  **[⬆ Back to Top](#table-of-contents)**

164. ### What is a debugger statement

The **\`debugger\`** statement is a built-in keyword in JavaScript used to trigger any available debugging functionality in the environment (like Chrome DevTools or Node.js Inspector).

If developer tools are open and active, execution of the script will pause exactly on the line where the \`debugger\` statement is placed, acting exactly like a manual breakpoint. 

If no debugging functionality is available (e.g., normal user browsing a website), the statement has absolutely no effect and the code continues running normally.

#### Example

\`\`\`javascript
function calculateDiscount(price, discount) {
  let finalPrice = price - (price * discount);
  
  // The browser will pause execution here if DevTools is open
  debugger; 
  
  return finalPrice;
}

calculateDiscount(100, 0.2);
\`\`\`

#### Key Point

> The \`debugger\` statement acts as a hardcoded breakpoint in your script. It pauses code execution to let you inspect variables and step through logic, provided a debugger (like browser DevTools) is currently active.


  **[⬆ Back to Top](#table-of-contents)**

165. ### What is the purpose of breakpoints in debugging

**Breakpoints** are intentional stopping points inserted into code that allow a developer to pause execution at a specific moment during runtime.

#### Purpose and Benefits
1. **State Inspection:** When paused at a breakpoint, you can inspect the current values of all variables, the call stack, and the scope chain to see exactly what state the application is in.
2. **Step-by-Step Execution:** Instead of guessing where an error occurs, you can step through the code one line at a time to observe exactly how the logic flows and where it deviates from expectations.
3. **Live Editing:** You can evaluate expressions, test logic, and sometimes even change variable values on the fly within the DevTools console while the code is paused.

#### Key Point

> Breakpoints allow developers to pause script execution at critical moments to inspect variable states, trace execution flow line-by-line, and identify the root cause of bugs efficiently.


  **[⬆ Back to Top](#table-of-contents)**

166. ### Can I use reserved words as identifiers

**No**, you cannot use reserved words as identifiers (variable names, function names, object keys in dot notation, or labels) in JavaScript.

Reserved words are keywords that are set aside by the language syntax to perform specific tasks (like control flow, variable declaration, etc.). Using them as identifiers confuses the JavaScript engine and results in a \`SyntaxError\`.

#### Examples of Reserved Words
* \`if\`, \`else\`, \`for\`, \`while\`, \`return\`, \`break\`
* \`var\`, \`let\`, \`const\`, \`function\`, \`class\`
* \`true\`, \`false\`, \`null\`
* \`import\`, \`export\`, \`default\`

#### Example Error

\`\`\`javascript
// ❌ Invalid
let else = "hello"; // Uncaught SyntaxError: Unexpected token 'else'

const class = 100;  // Uncaught SyntaxError: Unexpected token 'class'

// ✅ Valid (Object property names as strings are allowed)
const obj = {
  "else": "hello",
  "class": 100
};
console.log(obj.else); // "hello"
\`\`\`

#### Key Point

> Reserved words (like \`if\`, \`let\`, \`function\`) cannot be used as variable or function names because they are dedicated to the core syntax and grammar of the JavaScript language.


  **[⬆ Back to Top](#table-of-contents)**

167. ### How do you detect a mobile browser

Detecting whether a user is on a mobile device is traditionally done by inspecting the **\`navigator.userAgent\`** string, which contains information about the user's browser and operating system.

*(Note: User-agent sniffing is generally discouraged in modern development. **Feature detection** or **CSS Media Queries** are heavily preferred for responsive design. However, if strict detection is necessary, RegEx is often used).*

#### Example: Regular Expression Detection

You can use a comprehensive Regular Expression to match known mobile device signatures within the user agent.

\`\`\`javascript
function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // A simplified regex for example purposes
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  
  return mobileRegex.test(userAgent);
}

if (isMobileDevice()) {
  console.log("User is on a mobile device.");
} else {
  console.log("User is on a desktop device.");
}
\`\`\`

#### Key Point

> You can detect a mobile browser by running a Regular Expression against the \`navigator.userAgent\` string. However, relying on CSS Media Queries for responsive design is a much better practice.


  **[⬆ Back to Top](#table-of-contents)**

168. ### How do you detect a mobile browser without regexp

If you want to avoid complex Regular Expressions, you can detect mobile browsers by chaining multiple \`String.prototype.match()\` or \`String.prototype.includes()\` checks against the \`navigator.userAgent\` string.

#### Example: Using \`match()\`

\`\`\`javascript
function detectMob() {
  const ua = navigator.userAgent;
  
  if (
    ua.match(/Android/i) ||
    ua.match(/webOS/i) ||
    ua.match(/iPhone/i) ||
    ua.match(/iPad/i) ||
    ua.match(/iPod/i) ||
    ua.match(/BlackBerry/i) ||
    ua.match(/Windows Phone/i)
  ) {
    return true;
  }
  return false;
}
\`\`\`

#### Example: Modern alternative using \`navigator.userAgentData\` (Experimental)
Modern browsers are moving toward a newer API to reduce user-agent sniffing issues.

\`\`\`javascript
const isMobile = navigator.userAgentData ? navigator.userAgentData.mobile : detectMob();
console.log(isMobile);
\`\`\`

#### Key Point

> An alternative to complex regex is to manually check the \`navigator.userAgent\` string for specific device names (like "Android" or "iPhone") using \`.match()\` or \`.includes()\`.


  **[⬆ Back to Top](#table-of-contents)**

169. ### How do you get the image width and height using JS

You can get the dimensions (width and height) of an image programmatically by creating a new \`Image\` object in JavaScript, assigning a source URL, and reading its properties **after the image has fully loaded**.

#### Example

Because image loading is an asynchronous network request, you must wait for the \`onload\` event before trying to read the dimensions.

\`\`\`javascript
const img = new Image();

// Wait for the image to load
img.onload = function() {
  // 'this' refers to the img object
  console.log("Width:", this.width, "pixels");
  console.log("Height:", this.height, "pixels");
};

// Start downloading the image
img.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
\`\`\`

#### Fetching dimensions of an existing DOM image
If the image is already rendered on the page, you can get its dimensions immediately:

\`\`\`javascript
const existingImg = document.getElementById("my-image");
console.log(existingImg.naturalWidth, existingImg.naturalHeight); // Original image size
console.log(existingImg.clientWidth, existingImg.clientHeight);   // Rendered size on screen
\`\`\`

#### Key Point

> To get an image's dimensions, assign a URL to an \`Image\` object and read its \`.width\` and \`.height\` properties inside the \`onload\` event listener.


  **[⬆ Back to Top](#table-of-contents)**

170. ### How do you make synchronous HTTP request

You can make a synchronous HTTP request using the **\`XMLHttpRequest\`** object by passing \`false\` as the third parameter to the \`.open()\` method.

#### Warning! ⚠️
Synchronous requests on the main thread are **highly discouraged** and have been deprecated by modern browsers. They completely freeze the browser's UI and block all other JavaScript execution until the response is received, leading to a terrible user experience.

#### Example (Legacy)

\`\`\`javascript
function httpGetSynchronous(url) {
  const xhr = new XMLHttpRequest();
  
  // The third parameter 'false' makes it synchronous
  xhr.open("GET", url, false); 
  
  // This line freezes the browser until the request finishes
  xhr.send(null);
  
  if (xhr.status === 200) {
    return xhr.responseText;
  } else {
    throw new Error("Request failed: " + xhr.statusText);
  }
}

const data = httpGetSynchronous("https://jsonplaceholder.typicode.com/posts/1");
console.log(data);
\`\`\`

#### Key Point

> Passing \`false\` as the third parameter to \`XMLHttpRequest.open()\` creates a synchronous request. However, this freezes the UI and is strictly deprecated in modern web development.


  **[⬆ Back to Top](#table-of-contents)**

171. ### How do you make asynchronous HTTP request

In modern JavaScript, there are three primary ways to make asynchronous HTTP requests:

#### 1. Using the \`fetch()\` API (Modern Standard)
The \`fetch()\` API is a modern, promise-based approach built into browsers. It is the recommended way to make network requests.

\`\`\`javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch error:", error));
\`\`\`

#### 2. Using \`async/await\` with \`fetch()\`
This is syntactic sugar over promises that makes asynchronous code look synchronous and easier to read.

\`\`\`javascript
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPost();
\`\`\`

#### 3. Using \`XMLHttpRequest\` (Legacy)
By passing \`true\` as the third parameter, you can make an async request using callbacks.

\`\`\`javascript
function httpGetAsync(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.open("GET", url, true); // 'true' makes it async
  xhr.send(null);
}
\`\`\`

#### Key Point

> The modern and recommended way to make asynchronous HTTP requests is by using the Promise-based **\`fetch()\`** API, often combined with \`async/await\` for better readability.


  **[⬆ Back to Top](#table-of-contents)**

172. ### How do you convert date to another timezone in javascript

You can easily convert a date to a specific timezone using the **\`toLocaleString()\`** method on a \`Date\` object, combined with the \`timeZone\` property in its options object.

#### Example

JavaScript uses IANA time zone identifiers (like \`"America/New_York"\`, \`"Europe/London"\`, or \`"Asia/Tokyo"\`).

\`\`\`javascript
const date = new Date(); // Current local time

// Convert to British Time (London)
const britishTime = date.toLocaleString("en-GB", { timeZone: "Europe/London" });
console.log("London Time:", britishTime);

// Convert to US Eastern Time
const usEasternTime = date.toLocaleString("en-US", { timeZone: "America/New_York" });
console.log("New York Time:", usEasternTime);

// Output specific formats (e.g., just the time)
const tokyoTimeOnly = date.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
console.log("Tokyo Time:", tokyoTimeOnly);
\`\`\`

#### Key Point

> Use \`Date.prototype.toLocaleString()\` and pass an options object containing the desired \`timeZone\` string (e.g., \`{ timeZone: 'America/New_York' }\`) to accurately format a date for a different timezone.


  **[⬆ Back to Top](#table-of-contents)**

173. ### What are the properties used to get size of window

To get the size of the browser window (the viewport), you primarily use the \`window.innerWidth\` and \`window.innerHeight\` properties. 

However, to ensure cross-browser compatibility (especially for older browsers like IE8), developers often use a fallback chain combining \`window\`, \`document.documentElement\`, and \`document.body\`.

#### Example: Cross-Browser Window Size

\`\`\`javascript
// Get Viewport Width
const width = 
  window.innerWidth || 
  document.documentElement.clientWidth || 
  document.body.clientWidth;

// Get Viewport Height
const height = 
  window.innerHeight || 
  document.documentElement.clientHeight || 
  document.body.clientHeight;

console.log(\`Window size: \${width}px wide, \${height}px tall.\`);
\`\`\`

#### Difference between properties:
* **\`window.innerWidth\` / \`innerHeight\`**: Includes the scrollbar if it is visible. (Standard for viewport sizing).
* **\`document.documentElement.clientWidth\` / \`clientHeight\`**: Excludes the scrollbar width. Returns the dimensions of the \`<html>\` element.

#### Key Point

> The \`window.innerWidth\` and \`window.innerHeight\` properties are standard for finding the viewport size, often paired with \`document.documentElement.clientWidth\` as a fallback for older browsers.


  **[⬆ Back to Top](#table-of-contents)**

174. ### What is a conditional operator in javascript

The **conditional operator**, commonly referred to as the **ternary operator**, is a shortcut for an \`if...else\` statement. It is the only operator in JavaScript that takes three operands.

#### Syntax
\`\`\`javascript
condition ? expressionIfTrue : expressionIfFalse;
\`\`\`

#### How it works
1. The \`condition\` is evaluated.
2. If it is truthy, \`expressionIfTrue\` is executed and its value is returned.
3. If it is falsy, \`expressionIfFalse\` is executed and its value is returned.

#### Example

\`\`\`javascript
const age = 20;

// Using an if/else statement
let status1;
if (age >= 18) {
  status1 = "Adult";
} else {
  status1 = "Minor";
}

// Using the ternary operator (Much cleaner)
const status2 = (age >= 18) ? "Adult" : "Minor";

console.log(status2); // "Adult"
\`\`\`

#### Key Point

> The ternary operator (\`condition ? trueVal : falseVal\`) is a concise, one-line alternative to simple \`if...else\` block statements, frequently used for variable assignment.


  **[⬆ Back to Top](#table-of-contents)**

175. ### Can you apply chaining on conditional operator

Yes, you can chain ternary operators together. This simulates an \`if ... else if ... else if ... else\` chain. 

While it can significantly reduce lines of code, it can also become difficult to read if overused. It is best used for simple, distinct value assignments.

#### Example: Chained Ternary

\`\`\`javascript
function getFee(isMember) {
  return (isMember === true) ? "$2.00" 
       : (isMember === false) ? "$10.00" 
       : "$5.00"; // Fallback if isMember is neither true nor false
}

console.log(getFee(true));  // "$2.00"
console.log(getFee(false)); // "$10.00"
console.log(getFee(null));  // "$5.00"
\`\`\`

#### Example: Grading System

\`\`\`javascript
const score = 85;

const grade = score >= 90 ? "A" 
            : score >= 80 ? "B" 
            : score >= 70 ? "C" 
            : "F";

console.log(grade); // "B"
\`\`\`

#### Key Point

> Chaining ternary operators (\`cond1 ? val1 : cond2 ? val2 : val3\`) allows you to write compact \`else if\` logic, but should be formatted carefully across multiple lines to maintain readability.


  **[⬆ Back to Top](#table-of-contents)**

176. ### What are the ways to execute javascript after a page load

Executing JavaScript only after the HTML document has fully loaded ensures that the DOM elements your script interacts with actually exist.

There are several ways to accomplish this:

#### 1. The \`DOMContentLoaded\` Event (Recommended)
Fires as soon as the HTML is parsed and the DOM tree is built, without waiting for images, stylesheets, or iframes to finish downloading. This is the fastest and most efficient method.

\`\`\`javascript
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is ready! Images might still be loading.");
});
\`\`\`

#### 2. The \`load\` Event (\`window.onload\`)
Fires only after the DOM, images, stylesheets, and all external resources are 100% downloaded and ready.

\`\`\`javascript
window.addEventListener("load", function() {
  console.log("Entire page and all resources are fully loaded.");
});

// Legacy approach:
// window.onload = function() { ... };
\`\`\`

#### 3. Putting the \`<script>\` tag at the bottom of the \`<body>\`
If you place your script tag right before the closing \`</body>\` tag, the HTML above it will have already been parsed.

\`\`\`html
<body>
  <h1>Content</h1>
  <script src="app.js"></script>
</body>
\`\`\`

#### 4. The \`defer\` attribute
Adding \`defer\` to a \`<script>\` tag in the \`<head>\` tells the browser to download the script in the background but wait to execute it until the HTML parsing is complete.

\`\`\`html
<script src="app.js" defer></script>
\`\`\`

#### Key Point

> The most robust and modern ways to execute JavaScript after a page loads are using \`document.addEventListener("DOMContentLoaded", ...)\` or placing the \`<script defer>\` tag in the HTML head.


  **[⬆ Back to Top](#table-of-contents)**

177. ### What is the difference between proto and prototype

Both \`__proto__\` and \`prototype\` relate to JavaScript's prototypal inheritance, but they serve different roles.

#### 1. \`__proto__\` (The Object's internal link)
* \`__proto__\` is a property found on **every single object**.
* It points to the object's actual prototype (the object it inherits from). 
* It is the actual mechanism the JavaScript engine uses to traverse the "Prototype Chain" to look up properties and methods.
* *(Note: \`__proto__\` is deprecated in favor of \`Object.getPrototypeOf(obj)\`)*.

#### 2. \`prototype\` (The Constructor's blueprint)
* \`prototype\` is a property found **only on functions** (specifically constructor functions/classes).
* It does not point to the function's own prototype. Instead, it serves as the **blueprint object** that will be assigned as the \`__proto__\` of any *new* objects created when that function is called with the \`new\` keyword.

#### Example

\`\`\`javascript
// 1. A constructor function
function Person(name) {
  this.name = name;
}

// We add a method to the blueprint
Person.prototype.greet = function() { console.log("Hi!"); };

// 2. Instantiate an object
const john = new Person("John");

// 3. The relationship:
console.log(john.__proto__ === Person.prototype); // true

// The object has no 'prototype' property, only __proto__
console.log(john.prototype); // undefined
\`\`\`

#### Key Point

> \`prototype\` is a blueprint object found on constructor functions used to build instances. \`__proto__\` is the internal reference found on instantiated objects that points back to their creator's \`prototype\`.


  **[⬆ Back to Top](#table-of-contents)**

178. ### Can you give an example of when you really need a semicolon

JavaScript has a feature called **Automatic Semicolon Insertion (ASI)**, where the parser attempts to add missing semicolons at the end of lines. However, ASI is not perfect and can lead to catastrophic bugs if lines start with specific characters like \`(\`, \`[\`, or \`\`.

You **really need a semicolon** if the next line starts with parentheses \`()\`, commonly seen with Immediately Invoked Function Expressions (IIFEs).

#### Example: The IIFE Error

\`\`\`javascript
// Variable assignment without a semicolon
const a = 1
const b = 2

// Next line is an IIFE starting with (
(function() {
  console.log("Hello!");
})()
\`\`\`

**What JavaScript thinks you wrote:**
Because there is no semicolon after \`const b = 2\`, JavaScript assumes you are trying to invoke \`2\` as a function:
\`\`\`javascript
const b = 2(function() { console.log("Hello!"); })();
\`\`\`
**Result:** \`Uncaught TypeError: 2 is not a function\`

#### The Fix
To prevent this, you must explicitly use a semicolon at the end of the previous statement, or (as a defensive convention) place one at the start of the IIFE:

\`\`\`javascript
const b = 2; // Semicolon explicitly placed

(function() {
  console.log("Hello!");
})();

// OR defensively:
;(function() {
  console.log("Hello!");
})();
\`\`\`

#### Key Point

> Explicit semicolons are strictly required if a new line begins with \`(\`, \`[\`, or \`\` (template literal) to prevent the JavaScript parser from mistakenly treating the previous line's value as a function or array index.


  **[⬆ Back to Top](#table-of-contents)**

179. ### What is the freeze method

The **\`Object.freeze()\`** method is used to make an object immutable. 

When an object is frozen, it cannot be mutated in any way. The method returns the exact same object passed to it (it does not create a copy).

#### Effects of freezing an object:
1. You **cannot add** new properties.
2. You **cannot remove** existing properties.
3. You **cannot change the values** of existing properties.
4. You cannot change the configurability or enumerability of properties.

#### Example

\`\`\`javascript
const obj = { prop: 100 };

Object.freeze(obj);

// Attempts to mutate fail silently (or throw errors in Strict Mode)
obj.prop = 200;      // Cannot change existing
obj.newProp = "Hi";  // Cannot add new
delete obj.prop;     // Cannot delete

console.log(obj); // { prop: 100 }
console.log(Object.isFrozen(obj)); // true
\`\`\`

#### The "Shallow" Limitation
\`Object.freeze()\` is **shallow**. It only freezes the top-level properties. If a property is an object itself, that nested object can still be mutated.

\`\`\`javascript
const user = {
  name: "John",
  details: { age: 30 }
};

Object.freeze(user);

// user.name = "Jane"; // Fails
user.details.age = 40; // Succeeds! The nested object is not frozen.

console.log(user.details.age); // 40
\`\`\`

#### Key Point

> \`Object.freeze()\` completely locks down an object's top-level properties, preventing any additions, deletions, or modifications to those properties.


  **[⬆ Back to Top](#table-of-contents)**

180. ### What is the purpose of the freeze method

The primary purpose of \`Object.freeze()\` is to guarantee **Immutability**.

#### Why Immutability Matters

1. **State Management Reliability:** In complex applications (especially those using frameworks like React or Redux), ensuring that state objects cannot be accidentally mutated directly is critical to preventing deeply hidden, hard-to-trace bugs. It forces developers to create new copies of objects for state updates.
2. **Creating Constants:** While the \`const\` keyword prevents a variable from being reassigned to a *new* object, it doesn't prevent the object's *contents* from being changed. \`Object.freeze()\` combined with \`const\` creates a true constant object.
3. **Security and Integrity:** If an object contains critical configuration data or system flags, freezing it ensures no malicious or poorly written third-party script can alter those configurations at runtime.

#### Example: True Constants

\`\`\`javascript
// 'const' alone is weak for objects
const CONFIG = { apiUrl: "https://api.example.com" };
CONFIG.apiUrl = "http://hacked.com"; // Successfully mutated!

// 'const' + 'Object.freeze()' is secure
const SECURE_CONFIG = Object.freeze({ apiUrl: "https://api.example.com" });
SECURE_CONFIG.apiUrl = "http://hacked.com"; // Fails!
\`\`\`

#### Key Point

> The purpose of \`Object.freeze()\` is to enforce data immutability, creating strictly read-only objects that protect critical configuration data and ensure predictable application state behavior.


  **[⬆ Back to Top](#table-of-contents)**
`;

fs.writeFileSync('README.md', content.substring(0, startIndex) + newBlock + "\n" + content.substring(endIndex));
console.log('Update successful.');