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

#### Key Note

> The \`RegExp.prototype.exec()\` method searches a string for a specified pattern and returns a detailed array with match information, or \`null\` if no match is found.


  **[⬆ Back to Top](#table-of-contents)**

162. ### How do you change the style of a HTML element

You can change the visual appearance of an HTML element using JavaScript through the DOM (Document Object Model). There are two primary ways to do this: modifying **inline styles** or modifying the **CSS classes** applied to the element.

#### Example

1. **Using the \`style\` property (Inline Styles):** Note that CSS properties with hyphens are converted to camelCase.

\`\`\`javascript
const titleElement = document.getElementById("title");
titleElement.style.color = "red";
titleElement.style.fontSize = "30px";
\`\`\`

2. **Using \`classList\` (Recommended):** Modifying CSS classes keeps styling logic separated.

\`\`\`javascript
const buttonElement = document.getElementById("submit-btn");
buttonElement.classList.add("highlighted");
buttonElement.classList.remove("disabled");
buttonElement.classList.toggle("active");
\`\`\`

#### Key Note

> You can change an element's style by setting properties on its \`.style\` object (e.g., \`element.style.color\`), or preferably, by manipulating its classes using \`.classList.add()\` / \`.classList.remove()\`.


  **[⬆ Back to Top](#table-of-contents)**

163. ### What would be the result of 1+2+'3'

The output will be the string **\`"33"\`**.

This happens due to JavaScript's order of operations (left-to-right) and **type coercion** rules.

#### Example

1. \`1 + 2\` evaluates to the number \`3\`.
2. The expression becomes \`3 + '3'\`.
3. Because one operand is a string, the number \`3\` is coerced into a string, resulting in concatenation.

\`\`\`javascript
console.log(1 + 2 + '3'); // "33" (Mathematical addition, then string concatenation)

// Compare with:
console.log('1' + 2 + 3); // "123" (String concatenation from the very beginning)
console.log(1 + 2 - '3'); // 0 (Subtraction forces numeric coercion)
\`\`\`

#### Key Note

> The expression \`1 + 2 + '3'\` evaluates to the string \`"33"\` because JavaScript evaluates left-to-right: it adds the first two numbers mathematically, and then concatenates the resulting number with the string.


  **[⬆ Back to Top](#table-of-contents)**

164. ### What is a debugger statement

The **\`debugger\`** statement is a built-in keyword in JavaScript used to trigger any available debugging functionality in the environment (like Chrome DevTools or Node.js Inspector).

If developer tools are open and active, execution of the script will pause exactly on the line where the \`debugger\` statement is placed. If no debugging functionality is available, the statement is ignored.

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

#### Key Note

> The \`debugger\` statement acts as a hardcoded breakpoint in your script. It pauses code execution to let you inspect variables, provided a debugger (like browser DevTools) is active.


  **[⬆ Back to Top](#table-of-contents)**

165. ### What is the purpose of breakpoints in debugging

**Breakpoints** are intentional stopping points inserted into code that allow a developer to pause execution at a specific moment during runtime to inspect the application's state.

#### Example

You can set breakpoints either manually in the DevTools UI by clicking on a line number, or programmatically using the \`debugger\` keyword. When paused, you can evaluate expressions in the console:

\`\`\`javascript
function processData(data) {
  for (let i = 0; i < data.length; i++) {
    // If you place a breakpoint on the line below, execution pauses on every loop iteration
    let currentItem = data[i]; 
    console.log(currentItem);
  }
}
processData([1, 2, 3]);
\`\`\`

#### Key Note

> Breakpoints allow developers to pause script execution at critical moments to inspect variable states, trace execution flow line-by-line, and identify the root cause of bugs efficiently.


  **[⬆ Back to Top](#table-of-contents)**

166. ### Can I use reserved words as identifiers

**No**, you cannot use reserved words as identifiers (variable names, function names, object keys in dot notation, or labels) in JavaScript.

Reserved words are keywords that are set aside by the language syntax to perform specific tasks (like \`if\`, \`else\`, \`let\`, \`function\`). Using them as identifiers results in a \`SyntaxError\`.

#### Example

\`\`\`javascript
// ❌ Invalid: 'else' and 'class' are reserved words
let else = "hello"; // Uncaught SyntaxError: Unexpected token 'else'
const class = 100;  // Uncaught SyntaxError: Unexpected token 'class'

// ✅ Valid: They can be used as string keys in an object
const obj = {
  "else": "hello",
  "class": 100
};
console.log(obj.else); // "hello"
\`\`\`

#### Key Note

> Reserved words (like \`if\`, \`let\`, \`function\`) cannot be used as variable or function names because they are dedicated to the core syntax and grammar of the JavaScript language.


  **[⬆ Back to Top](#table-of-contents)**

167. ### How do you detect a mobile browser

Detecting whether a user is on a mobile device is traditionally done by inspecting the **\`navigator.userAgent\`** string, which contains information about the user's browser and operating system.

#### Example

You can use a comprehensive Regular Expression to match known mobile device signatures within the user agent.

\`\`\`javascript
function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // A regex to match common mobile devices
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  
  return mobileRegex.test(userAgent);
}

if (isMobileDevice()) {
  console.log("User is on a mobile device.");
}
\`\`\`

#### Key Note

> You can detect a mobile browser by running a Regular Expression against the \`navigator.userAgent\` string to look for keywords like "Android" or "iPhone".


  **[⬆ Back to Top](#table-of-contents)**

168. ### How do you detect a mobile browser without regexp

If you want to avoid complex Regular Expressions, you can detect mobile browsers by chaining multiple \`String.prototype.match()\` or \`String.prototype.includes()\` checks against the \`navigator.userAgent\` string.

#### Example

\`\`\`javascript
function detectMobile() {
  const ua = navigator.userAgent;
  
  if (
    ua.match(/Android/i) ||
    ua.match(/iPhone/i) ||
    ua.match(/iPad/i) ||
    ua.match(/BlackBerry/i) ||
    ua.match(/Windows Phone/i)
  ) {
    return true;
  }
  return false;
}

console.log("Is Mobile?", detectMobile());
\`\`\`

#### Key Note

> An alternative to complex regex is to manually check the \`navigator.userAgent\` string for specific device names using multiple \`.match()\` or \`.includes()\` conditions.


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
img.src = "https://example.com/logo.png";
\`\`\`

#### Key Note

> To dynamically get an image's dimensions, assign a URL to an \`Image\` object and read its \`.width\` and \`.height\` properties inside the \`onload\` event listener.


  **[⬆ Back to Top](#table-of-contents)**

170. ### How do you make synchronous HTTP request

You can make a synchronous HTTP request using the **\`XMLHttpRequest\`** object by passing \`false\` as the third parameter to the \`.open()\` method. 

*Warning: Synchronous requests completely freeze the browser UI and are deprecated.*

#### Example

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
    throw new Error("Request failed");
  }
}

const data = httpGetSynchronous("https://jsonplaceholder.typicode.com/posts/1");
console.log(data);
\`\`\`

#### Key Note

> Passing \`false\` as the third parameter to \`XMLHttpRequest.open()\` creates a synchronous request. However, this freezes the UI and is strictly deprecated in modern web development.


  **[⬆ Back to Top](#table-of-contents)**

171. ### How do you make asynchronous HTTP request

In modern JavaScript, the recommended way to make asynchronous HTTP requests is using the Promise-based **\`fetch()\`** API. Legacy codebases may use \`XMLHttpRequest\` with the async flag set to \`true\`.

#### Example

Using \`fetch()\` combined with \`async/await\` provides clean, readable asynchronous logic.

\`\`\`javascript
async function getPostData() {
  try {
    // Awaits the network response asynchronously
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    if (!response.ok) throw new Error("Network response was not ok");
    
    // Awaits the JSON parsing
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

getPostData();
\`\`\`

#### Key Note

> The modern and recommended way to make asynchronous HTTP requests is by using the Promise-based **\`fetch()\`** API, often combined with \`async/await\` for better readability.


  **[⬆ Back to Top](#table-of-contents)**

172. ### How do you convert date to another timezone in javascript

You can convert a date to a specific timezone using the **\`toLocaleString()\`** method on a \`Date\` object, combined with the \`timeZone\` property in its options object (using IANA time zone identifiers).

#### Example

\`\`\`javascript
const date = new Date(); // Current local time

// Convert to British Time (London)
const britishTime = date.toLocaleString("en-GB", { timeZone: "Europe/London" });
console.log("London Time:", britishTime);

// Convert to US Eastern Time
const usEasternTime = date.toLocaleString("en-US", { timeZone: "America/New_York" });
console.log("New York Time:", usEasternTime);
\`\`\`

#### Key Note

> Use \`Date.prototype.toLocaleString()\` and pass an options object containing the desired \`timeZone\` string (e.g., \`{ timeZone: 'America/New_York' }\`) to format a date for a different timezone.


  **[⬆ Back to Top](#table-of-contents)**

173. ### What are the properties used to get size of window

To get the size of the browser window (the viewport), you primarily use the \`window.innerWidth\` and \`window.innerHeight\` properties. 

To ensure cross-browser compatibility (especially for very old browsers), developers often use a fallback chain combining \`window\`, \`document.documentElement\`, and \`document.body\`.

#### Example

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

console.log(\`Window size is \${width}x\${height}\`);
\`\`\`

#### Key Note

> The \`window.innerWidth\` and \`window.innerHeight\` properties are standard for finding the viewport size, often paired with \`document.documentElement.clientWidth\` as a fallback for older browsers.


  **[⬆ Back to Top](#table-of-contents)**

174. ### What is a conditional operator in javascript

The **conditional operator**, commonly referred to as the **ternary operator**, is a shortcut for an \`if...else\` statement. It is the only operator in JavaScript that takes three operands.

#### Example

It follows the syntax: \`condition ? expressionIfTrue : expressionIfFalse\`.

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

#### Key Note

> The ternary operator (\`condition ? trueVal : falseVal\`) is a concise, one-line alternative to simple \`if...else\` block statements, frequently used for variable assignment.


  **[⬆ Back to Top](#table-of-contents)**

175. ### Can you apply chaining on conditional operator

Yes, you can chain ternary operators together. This simulates an \`if ... else if ... else if ... else\` chain. It is useful for distinct value assignments based on multiple conditions.

#### Example

\`\`\`javascript
const score = 85;

// Chained ternary operator
const grade = score >= 90 ? "A" 
            : score >= 80 ? "B" 
            : score >= 70 ? "C" 
            : "F";

console.log(grade); // "B"

// Equivalent if/else block
let blockGrade;
if (score >= 90) blockGrade = "A";
else if (score >= 80) blockGrade = "B";
else if (score >= 70) blockGrade = "C";
else blockGrade = "F";
\`\`\`

#### Key Note

> Chaining ternary operators (\`cond1 ? val1 : cond2 ? val2 : val3\`) allows you to write compact \`else if\` logic, but should be formatted carefully across multiple lines to maintain readability.


  **[⬆ Back to Top](#table-of-contents)**

176. ### What are the ways to execute javascript after a page load

Executing JavaScript only after the HTML document has fully loaded ensures that the DOM elements your script interacts with actually exist.

#### Example

1. **The \`DOMContentLoaded\` Event (Recommended):** Fires as soon as the HTML is parsed, without waiting for external images or stylesheets.
\`\`\`javascript
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is ready!");
});
\`\`\`

2. **The \`load\` Event:** Waits for EVERYTHING (images, iframes, stylesheets) to finish loading.
\`\`\`javascript
window.addEventListener("load", function() {
  console.log("Entire page and resources are fully loaded.");
});
\`\`\`

3. **The \`defer\` attribute:** Placed on a \`<script>\` tag, it downloads in the background but waits to execute until HTML parsing completes.
\`\`\`html
<script src="app.js" defer></script>
\`\`\`

#### Key Note

> The most robust and modern ways to execute JavaScript after a page loads are using \`document.addEventListener("DOMContentLoaded", ...)\` or placing the \`<script defer>\` tag in the HTML head.


  **[⬆ Back to Top](#table-of-contents)**

177. ### What is the difference between proto and prototype

Both \`__proto__\` and \`prototype\` relate to JavaScript's prototypal inheritance, but they serve different roles.
* **\`prototype\`** is a blueprint object found **only on functions** (constructors).
* **\`__proto__\`** is a property found on **every single object** that points back to its creator's \`prototype\`.

#### Example

\`\`\`javascript
// 1. A constructor function has a 'prototype' blueprint
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() { console.log("Hi!"); };

// 2. Instantiate an object
const john = new Person("John");

// 3. The object's __proto__ points to the constructor's prototype
console.log(john.__proto__ === Person.prototype); // true

// The instance itself does not have a 'prototype' property
console.log(john.prototype); // undefined
\`\`\`

#### Key Note

> \`prototype\` is a blueprint object found on constructor functions used to build instances. \`__proto__\` is the internal reference found on instantiated objects that points back to their creator's \`prototype\`.


  **[⬆ Back to Top](#table-of-contents)**

178. ### Can you give an example of when you really need a semicolon

JavaScript attempts to automatically insert missing semicolons (ASI). However, you **really need a semicolon** if a line begins with parentheses \`()\`, commonly seen with Immediately Invoked Function Expressions (IIFEs), or brackets \`[]\`.

#### Example

Without a semicolon, JavaScript thinks the \`2\` on the first line is trying to invoke the function on the second line.

\`\`\`javascript
// Variable assignment without a semicolon
const b = 2

// Next line is an IIFE starting with (
(function() {
  console.log("Hello!");
})()

// JavaScript engine interprets it as:
// const b = 2(function() { console.log("Hello!"); })();
// Result: Uncaught TypeError: 2 is not a function
\`\`\`

To fix this, you must explicitly use a semicolon:

\`\`\`javascript
const b = 2; // Semicolon explicitly placed

(function() {
  console.log("Hello!");
})();
\`\`\`

#### Key Note

> Explicit semicolons are strictly required if a new line begins with \`(\`, \`[\`, or \`\` (template literal) to prevent the parser from mistakenly treating the previous line's value as a function or array index.


  **[⬆ Back to Top](#table-of-contents)**

179. ### What is the freeze method

The **\`Object.freeze()\`** method is used to make an object immutable. When an object is frozen, it cannot be mutated in any way. 

It prevents adding new properties, removing existing ones, or changing the values of existing properties.

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

*Note: \`Object.freeze()\` is shallow. Nested objects inside a frozen object can still be mutated.*

#### Key Note

> \`Object.freeze()\` completely locks down an object's top-level properties, preventing any additions, deletions, or modifications to those properties.


  **[⬆ Back to Top](#table-of-contents)**

180. ### What is the purpose of the freeze method

The primary purpose of \`Object.freeze()\` is to guarantee **Immutability**. This is crucial for maintaining predictable application state and preventing accidental modifications to constant configuration objects.

#### Example

While \`const\` prevents variable reassignment, it does not prevent object mutation. \`Object.freeze()\` provides true constant object structures.

\`\`\`javascript
// 'const' alone is weak for objects
const CONFIG = { apiUrl: "https://api.example.com" };
CONFIG.apiUrl = "http://hacked.com"; // Successfully mutated!

// 'const' + 'Object.freeze()' is highly secure
const SECURE_CONFIG = Object.freeze({ apiUrl: "https://api.example.com" });
SECURE_CONFIG.apiUrl = "http://hacked.com"; // Fails to mutate!

console.log(SECURE_CONFIG.apiUrl); // "https://api.example.com"
\`\`\`

#### Key Note

> The purpose of \`Object.freeze()\` is to enforce data immutability, creating strictly read-only objects that protect critical configuration data and ensure predictable application state behavior.

`;

fs.writeFileSync('README.md', content.substring(0, startIndex) + newBlock + "\n" + content.substring(endIndex));
console.log('Update successful.');
