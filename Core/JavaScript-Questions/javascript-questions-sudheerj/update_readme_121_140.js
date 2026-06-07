const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const startIndex = content.indexOf('121. ### How do you check whether a string contains a substring');
const endIndexStr = '141. ### ';
let endIndex = content.indexOf(endIndexStr, startIndex);
if (endIndex === -1) {
    // fallback if 141 is not found immediately after
    const fallbackEnd = '141. ###';
    endIndex = content.indexOf(fallbackEnd, startIndex);
}

const newBlock = `121. ### How do you check whether a string contains a substring

There are several ways to check whether a string contains a specific substring in JavaScript, depending on your environment and specific requirements.

#### 1. Using \`includes()\` (ES6+)
The most modern and readable approach is the \`String.prototype.includes()\` method. It returns \`true\` if the substring is found, and \`false\` otherwise.

\`\`\`javascript
const mainString = "hello world";
const subString = "world";

console.log(mainString.includes(subString)); // true
console.log(mainString.includes("planet")); // false
\`\`\`

#### 2. Using \`indexOf()\` (ES5 and older)
For older browser compatibility, you can use \`String.prototype.indexOf()\`. It returns the starting index of the substring. If the substring is not found, it returns \`-1\`.

\`\`\`javascript
const mainString = "hello world";
const subString = "world";

console.log(mainString.indexOf(subString) !== -1); // true
\`\`\`

#### 3. Using Regular Expressions
If you need to perform a case-insensitive search or complex pattern matching, use \`RegExp.prototype.test()\`.

\`\`\`javascript
const mainString = "Hello World";
const regex = /world/i; // 'i' flag makes it case-insensitive

console.log(regex.test(mainString)); // true
\`\`\`

#### Key Point

> Use \`includes()\` for simple substring checks in modern JavaScript. Use \`indexOf()\` for legacy support, and Regular Expressions (\`.test()\`) for complex or case-insensitive matching.


  **[⬆ Back to Top](#table-of-contents)**

122. ### How do you validate an email in javascript

You can validate an email in JavaScript using **Regular Expressions (RegEx)**. However, it is important to remember that client-side validation is primarily for user experience (providing immediate feedback). **Always perform server-side validation** as well, because client-side JavaScript can be bypassed or disabled.

#### Example: Regular Expression Validation

Here is a standard, widely-used regular expression for email validation:

\`\`\`javascript
function validateEmail(email) {
  const emailRegex = /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("invalid-email"));    // false
\`\`\`

#### HTML5 Validation
In modern web development, you can also leverage native HTML5 validation before falling back to JavaScript:

\`\`\`html
<input type="email" id="emailInput" required>
\`\`\`

#### Key Point

> Use a Regular Expression via \`RegExp.test()\` to validate email format in JavaScript, but always ensure you validate the email address on your backend server for security.


  **[⬆ Back to Top](#table-of-contents)**

123. ### How do you get the current url with javascript

You can get the full current URL of the page using the **\`window.location.href\`** property. 

The \`window.location\` object contains a wealth of information about the current page's URL, and modifying its \`href\` property can also be used to navigate the user to a new page.

#### Example: Getting the URL

\`\`\`javascript
// Retrieve the current URL
const currentUrl = window.location.href;
console.log("The current URL is:", currentUrl); 
// Output e.g., "https://www.example.com/page?user=123#section"
\`\`\`

#### Alternative: \`document.URL\`
You can also use \`document.URL\` for read-only purposes. However, \`window.location.href\` is generally preferred as it is completely consistent across all browsers and allows both reading and writing.

\`\`\`javascript
console.log(document.URL);
\`\`\`

#### Key Point

> Read the \`window.location.href\` property to retrieve the complete URL of the current webpage as a string.


  **[⬆ Back to Top](#table-of-contents)**

124. ### What are the various url properties of location object

The \`window.location\` object provides several properties that allow you to access specific components of the current URL individually.

#### Location Object Properties

Assume the current URL is: 
\`http://www.example.com:8080/path/page.html?search=query#section1\`

1. **\`href\`**: The entire URL.
   * \`http://www.example.com:8080/path/page.html?search=query#section1\`
2. **\`protocol\`**: The protocol scheme (including the colon).
   * \`http:\`
3. **\`host\`**: The hostname and port number.
   * \`www.example.com:8080\`
4. **\`hostname\`**: Just the domain name without the port.
   * \`www.example.com\`
5. **\`port\`**: The port number.
   * \`8080\`
6. **\`pathname\`**: The path to the file/page.
   * \`/path/page.html\`
7. **\`search\`**: The query string portion (including the question mark).
   * \`?search=query\`
8. **\`hash\`**: The fragment identifier (including the pound sign).
   * \`#section1\`

#### Example

\`\`\`javascript
console.log(window.location.protocol); // "https:"
console.log(window.location.hostname); // "github.com"
console.log(window.location.pathname); // "/sudheerj/javascript-questions"
\`\`\`

#### Key Point

> The \`location\` object breaks down the current URL into accessible properties like \`protocol\`, \`hostname\`, \`pathname\`, \`search\`, and \`hash\`, making it easy to parse and manipulate URL components.


  **[⬆ Back to Top](#table-of-contents)**

125. ### How do you get query string values in javascript

The most modern and robust way to extract values from the URL query string (e.g., \`?name=John&age=30\`) is by using the **\`URLSearchParams\`** interface.

#### Example: Using \`URLSearchParams\`

Assuming your current URL is \`https://example.com/?clientCode=1001&status=active\`:

\`\`\`javascript
// 1. Pass the query string into URLSearchParams
const urlParams = new URLSearchParams(window.location.search);

// 2. Use the .get() method to retrieve specific values
const clientCode = urlParams.get("clientCode");
const status = urlParams.get("status");

console.log(clientCode); // "1001"
console.log(status);     // "active"
\`\`\`

#### Example: Checking for Existence
You can also check if a parameter exists using \`has()\`:

\`\`\`javascript
if (urlParams.has("clientCode")) {
  console.log("Client code is provided.");
}
\`\`\`

#### Key Point

> Use the \`URLSearchParams\` API in combination with \`window.location.search\` to easily parse, extract, and manipulate query string parameters in modern JavaScript.


  **[⬆ Back to Top](#table-of-contents)**

126. ### How do you check if a key exists in an object

There are three primary ways to check whether a specific key (property) exists within a JavaScript object.

#### 1. Using the \`in\` operator
The \`in\` operator checks if the key exists in the object itself **or anywhere in its prototype chain**.

\`\`\`javascript
const user = { name: "John", age: 30 };

console.log("name" in user); // true
console.log("toString" in user); // true (inherited from Object prototype)
\`\`\`

#### 2. Using \`hasOwnProperty()\` method
The \`hasOwnProperty()\` method checks if the key exists **directly on the object itself**, ignoring inherited properties. This is usually the safest method.

\`\`\`javascript
const user = { name: "John", age: 30 };

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("toString")); // false
\`\`\`

#### 3. Using \`undefined\` comparison
If you access a non-existent property, JavaScript returns \`undefined\`. You can use this to check for existence, **but this fails if the key exists but is explicitly set to \`undefined\`**.

\`\`\`javascript
const user = { name: "John", age: undefined };

console.log(user.name !== undefined); // true
console.log(user.nickName !== undefined); // false
console.log(user.age !== undefined); // false (Fails! The key exists but value is undefined)
\`\`\`

#### Key Point

> Use \`hasOwnProperty()\` to check if an object specifically owns a key without looking at its prototype chain. Use the \`in\` operator if you also want to check inherited properties.


  **[⬆ Back to Top](#table-of-contents)**

127. ### How do you loop through or enumerate javascript object

You can iterate through the properties of an object using several techniques, ranging from the traditional \`for...in\` loop to modern \`Object\` methods.

#### 1. Using \`Object.keys()\`, \`Object.values()\`, or \`Object.entries()\` (Modern/ES6+)
These methods return arrays, allowing you to use array methods like \`forEach()\` or \`for...of\` loops. They only enumerate **own, enumerable** properties.

\`\`\`javascript
const user = { name: "John", age: 30 };

// Iterate over keys and values using Object.entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}
// Output:
// name: John
// age: 30
\`\`\`

#### 2. Using \`for...in\` loop
The \`for...in\` loop iterates over all enumerable properties, **including inherited ones**. To prevent iterating over inherited properties, you must combine it with \`hasOwnProperty()\`.

\`\`\`javascript
const user = { name: "John", age: 30 };

for (let key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(key + " -> " + user[key]);
  }
}
\`\`\`

#### Key Point

> Use \`Object.keys()\`, \`Object.values()\`, or \`Object.entries()\` in modern JavaScript to safely loop through an object's own properties without accidentally iterating over its prototype chain.


  **[⬆ Back to Top](#table-of-contents)**

128. ### How do you test for an empty object

Testing if an object is entirely empty (i.e., \`{}\`) depends on the ECMAScript version you are using. Since \`typeof {}\` is "object" and \`{} === {}\` is false (reference comparison), you must check its keys.

#### 1. Using \`Object.keys()\` (Modern/ES5+)
This is the most common and robust approach. It checks if the array of keys has a length of 0. Adding a constructor check ensures it's specifically an Object (and not an instance of \`Date\`, \`Map\`, etc.).

\`\`\`javascript
const obj = {};

const isEmpty = Object.keys(obj).length === 0 && obj.constructor === Object;
console.log(isEmpty); // true
\`\`\`

#### 2. Using \`Object.entries()\` (ES8/ECMA 7+)
Similar to \`Object.keys()\`, but uses entries.

\`\`\`javascript
const isEmpty = Object.entries(obj).length === 0 && obj.constructor === Object;
\`\`\`

#### 3. Using a \`for...in\` loop (Legacy Pre-ES5)
If you need to support very old environments, loop through the properties. If the loop executes even once for an own property, the object is not empty.

\`\`\`javascript
function isObjectEmpty(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}
\`\`\`

#### Key Point

> The most standard and reliable way to check for an empty object is by verifying that \`Object.keys(obj).length === 0\` and ensuring \`obj.constructor === Object\`.


  **[⬆ Back to Top](#table-of-contents)**

129. ### What is an arguments object

The **\`arguments\` object** is a local, Array-like object available inside all non-arrow functions. It contains the values of the arguments passed to that function.

Even if a function is defined without parameters, you can still access any passed arguments using this object.

#### Example

\`\`\`javascript
function sum() {
  let total = 0;
  // arguments is array-like, so it has a .length property
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // Returns 6
console.log(sum(10, 20));  // Returns 30
\`\`\`

#### Important Limitations

1. **Not a true Array:** While it has a \`.length\` property and indexed elements, it lacks array methods like \`map()\`, \`forEach()\`, or \`filter()\`. 
2. **Arrow Functions:** The \`arguments\` object is **not available** in ES6 Arrow Functions.

#### Modern Alternative: Rest Parameters
In modern JavaScript (ES6+), **Rest Parameters (\`...args\`)** are strongly preferred over the \`arguments\` object because they return a real Array and work in arrow functions.

\`\`\`javascript
const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
\`\`\`

#### Key Point

> The \`arguments\` object is an array-like structure inside standard functions containing all passed parameters. In modern JavaScript, ES6 Rest Parameters (\`...args\`) are preferred as they provide a real array.


  **[⬆ Back to Top](#table-of-contents)**

130. ### How do you make first letter of the string in an uppercase

JavaScript does not have a built-in \`capitalize()\` method. To capitalize the first letter of a string, you must isolate the first character, convert it to uppercase, and then concatenate it with the rest of the string.

#### Example: Using \`charAt()\` and \`slice()\`

\`\`\`javascript
function capitalizeFirstLetter(string) {
  if (!string) return ''; // Handle empty strings safely
  
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("javascript")); // "Javascript"
\`\`\`

* \`string.charAt(0).toUpperCase()\` grabs the first letter ('j') and makes it 'J'.
* \`string.slice(1)\` grabs the rest of the string from index 1 onwards ('avascript').

#### Example: Using Array Destructuring (ES6)

You can also use string destructuring combined with template literals:

\`\`\`javascript
function capitalize([first, ...rest]) {
  if (!first) return '';
  return first.toUpperCase() + rest.join('');
}

console.log(capitalize("hello")); // "Hello"
\`\`\`

#### Key Point

> Capitalize the first letter of a string by combining \`string.charAt(0).toUpperCase()\` with \`string.slice(1)\` which appends the remaining characters.


  **[⬆ Back to Top](#table-of-contents)**

131. ### What are the pros and cons of for loops

The standard \`for\` loop (\`for (let i = 0; i < len; i++)\`) is a foundational control flow statement in JavaScript used for iterating over arrays or executing code a specific number of times.

#### Pros

1. **Universally Supported:** It works in every JavaScript environment and is compatible with very old browsers.
2. **Maximum Control:** You have complete control over the iteration step (e.g., incrementing by 2, iterating backwards).
3. **Flow Control:** You can use \`break\` to exit the loop early, or \`continue\` to skip an iteration. (Methods like \`forEach()\` cannot be broken out of early).
4. **Performance:** It is historically one of the fastest iteration methods natively available in JavaScript engines.

#### Cons

1. **Verbose and Imperative:** It requires a lot of boilerplate code (initialization, condition, final expression), making it harder to read than declarative methods.
2. **Off-by-One Errors:** It is highly susceptible to logical bugs, such as \`i <= array.length\` instead of \`i < array.length\`.
3. **Scope Issues (Historically):** Before ES6 \`let\`, declaring the iterator with \`var\` leaked it into the outer scope.

#### Key Point

> Traditional \`for\` loops offer high performance and excellent control flow (like \`break\`/\`continue\`), but they are verbose and prone to manual "off-by-one" calculation errors compared to modern declarative methods like \`map()\` or \`for...of\`.


  **[⬆ Back to Top](#table-of-contents)**

132. ### How do you display the current date in javascript

You can instantiate a new **\`Date\`** object to capture the current date and time from the user's system. You can then use its built-in methods to extract the day, month, and year to format it as desired.

#### Example: Formatting to MM/DD/YYYY

\`\`\`javascript
const today = new Date();

// .getDate() returns the day of the month (1-31)
const dd = String(today.getDate()).padStart(2, "0");

// .getMonth() returns 0-11 (January is 0!), so we add 1
const mm = String(today.getMonth() + 1).padStart(2, "0"); 

// .getFullYear() returns the 4 digit year
const yyyy = today.getFullYear();

const formattedDate = mm + "/" + dd + "/" + yyyy;
console.log(formattedDate); // e.g., "06/07/2026"
\`\`\`

*(Note: \`padStart(2, "0")\` ensures single-digit days/months are prefixed with a zero).*

#### Example: Native Localization

For easier, localized formatting without manual concatenation, use \`toLocaleDateString()\`:

\`\`\`javascript
const date = new Date();
console.log(date.toLocaleDateString("en-US")); // Output: "6/7/2026"
\`\`\`

#### Key Point

> Create a \`new Date()\` object to capture the current time, and use methods like \`getFullYear()\`, \`getMonth()\`, and \`getDate()\` to format it, or simply rely on \`toLocaleDateString()\` for regional formatting.


  **[⬆ Back to Top](#table-of-contents)**

133. ### How do you compare two date objects

Directly comparing two \`Date\` objects using equality operators (\`==\` or \`===\`) will yield \`false\` because they refer to different objects in memory, even if they represent the exact same moment in time.

To properly compare two dates, you must convert them to their numeric **Unix Timestamp** values using the \`.getTime()\` method.

#### Example: Equality Comparison

\`\`\`javascript
const d1 = new Date("2026-01-01");
const d2 = new Date("2026-01-01");

// Incorrect approach (compares memory references)
console.log(d1 === d2); // false

// Correct approach (compares numeric timestamps)
console.log(d1.getTime() === d2.getTime()); // true
\`\`\`

#### Example: Greater Than / Less Than

For inequalities, you can actually use \`>\` and \`<\` directly on the \`Date\` objects because JavaScript automatically coerces them into numeric timestamps during these specific comparisons:

\`\`\`javascript
const past = new Date("2020-01-01");
const future = new Date("2030-01-01");

console.log(future > past); // true
\`\`\`

#### Key Point

> Use \`date.getTime()\` to convert \`Date\` objects into numeric Unix timestamps for accurate strict equality (\`===\`) comparisons.


  **[⬆ Back to Top](#table-of-contents)**

134. ### How do you check if a string starts with another string

In modern JavaScript (ES6+), you can use the **\`String.prototype.startsWith()\`** method. It determines whether a string begins with the characters of a specified substring, returning \`true\` or \`false\`.

#### Example: Using \`startsWith()\`

\`\`\`javascript
const phrase = "Good morning everyone";

console.log(phrase.startsWith("Good"));    // true
console.log(phrase.startsWith("morning")); // false
\`\`\`

#### Using an Offset
You can also pass a second argument specifying the index at which to start the search:

\`\`\`javascript
console.log(phrase.startsWith("morning", 5)); // true
\`\`\`

#### Pre-ES6 Alternative
If you must support ancient browsers (like IE), use \`indexOf()\`:

\`\`\`javascript
const str = "Good morning";
console.log(str.indexOf("Good") === 0); // true if it starts at index 0
\`\`\`

#### Key Point

> The ES6 \`startsWith()\` method is the cleanest and most semantic way to check if a string begins with a specific substring.


  **[⬆ Back to Top](#table-of-contents)**

135. ### How do you trim a string in javascript

JavaScript provides the **\`trim()\`** method on the String prototype to remove whitespace characters from both the beginning and the end of a string.

Whitespace includes spaces, tabs, and newline characters. It does *not* affect spaces between words in the middle of the string.

#### Example: Using \`trim()\`

\`\`\`javascript
const messyString = "   Hello World   \\n";
const cleanString = messyString.trim();

console.log(cleanString); // "Hello World"
\`\`\`

#### Related Methods
If you only need to trim one side of the string, you can use:
* **\`trimStart()\`** (or \`trimLeft()\`)
* **\`trimEnd()\`** (or \`trimRight()\`)

\`\`\`javascript
console.log("   Hello".trimStart()); // "Hello"
console.log("Hello   ".trimEnd());   // "Hello"
\`\`\`

#### Key Point

> Use the \`String.prototype.trim()\` method to sanitize input by stripping out leading and trailing whitespace.


  **[⬆ Back to Top](#table-of-contents)**

136. ### How do you add a key value pair in javascript

You can add a new key-value pair to an existing JavaScript object using either **Dot Notation** or **Square Bracket Notation**.

#### 1. Using Dot Notation
This is the most common and readable syntax. Use this when the key is a valid JavaScript identifier (no spaces, doesn't start with a number, and isn't a reserved keyword).

\`\`\`javascript
const user = { name: "John" };

// Adding a new key-value pair
user.age = 30;

console.log(user); // { name: "John", age: 30 }
\`\`\`

#### 2. Using Square Bracket Notation
Use this method when the key name is stored in a variable, contains spaces, or uses special characters (e.g., "user-name").

\`\`\`javascript
const user = { name: "John" };

// Adding via dynamic variable
const dynamicKey = "country";
user[dynamicKey] = "USA";

// Adding a key with special characters
user["favorite-color"] = "blue";

console.log(user); 
// { name: "John", country: "USA", "favorite-color": "blue" }
\`\`\`

#### Key Point

> Add properties to an object using dot notation (\`obj.key = value\`) for static, valid identifiers, and bracket notation (\`obj["key"] = value\`) for dynamic variables or invalid identifiers.


  **[⬆ Back to Top](#table-of-contents)**

137. ### Is the !-- notation represents a special operator

No, **\`!--\`** is not a special, single operator in JavaScript. 

It is actually the combination of two completely separate standard operators placed consecutively:
1. **\`!\` (Logical NOT):** Evaluates a value to a boolean and reverses it.
2. **\`--\` (Prefix Decrement):** Subtracts one from its operand and returns the updated value.

#### Example Breakdown

\`\`\`javascript
let x = 1;

// The expression
if (!--x) {
  console.log("It was falsy!");
}
\`\`\`

Here is exactly what the engine does:
1. **\`--x\`** executes first. The variable \`x\` (which was 1) is decremented to \`0\`.
2. The expression now looks like **\`!(0)\`**.
3. In JavaScript, \`0\` is a falsy value. Applying the Logical NOT (\`!\`) to a falsy value evaluates to \`true\`.
4. Therefore, the \`if\` condition passes.

#### Key Point

> \`!--\` is not a unique operator; it is simply a Logical NOT (\`!\`) being applied to the result of a Prefix Decrement (\`--\`).


  **[⬆ Back to Top](#table-of-contents)**

138. ### How do you assign default values to variables

There are a few ways to assign default values to variables, with ES6 introducing the most robust methods.

#### 1. Default Parameters (ES6+)
When defining functions, you can assign default values directly in the parameter list. The default is applied only if the argument passed is \`undefined\`.

\`\`\`javascript
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();        // "Hello, Guest"
greet("Alice"); // "Hello, Alice"
\`\`\`

#### 2. Logical OR Operator (\`||\`)
Historically, developers used \`||\` to provide fallbacks. This checks for *any* falsy value (e.g., \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`, \`false\`).

\`\`\`javascript
let input = ""; // User leaves input blank
let value = input || "Default Value"; 
console.log(value); // "Default Value" (because "" is falsy)
\`\`\`

#### 3. Nullish Coalescing Operator (\`??\`) (ES2020)
If you only want to provide a default when the value is strictly \`null\` or \`undefined\` (but allow \`0\` or empty strings), use \`??\`.

\`\`\`javascript
let count = 0;
let finalCount = count ?? 10; 
console.log(finalCount); // 0 (unlike ||, which would have output 10)
\`\`\`

#### Key Point

> Assign default function parameters directly using \`param = default\`. For variable assignment, use the Nullish Coalescing Operator (\`??\`) to fall back only on \`null\` or \`undefined\`.


  **[⬆ Back to Top](#table-of-contents)**

139. ### How do you define multiline strings

Modern JavaScript provides **Template Literals** (introduced in ES6) to cleanly define multi-line strings without needing concatenation or escape characters.

#### 1. Template Literals (Recommended)
By using backticks (\` \` \` \`), the string will literally respect line breaks exactly as they appear in the source code.

\`\`\`javascript
const poem = \`Roses are red,
Violets are blue,
JavaScript is great,
And so are you.\`;

console.log(poem);
\`\`\`

#### 2. Using the Escaped Line Terminator (Legacy)
Prior to ES6, you had to use a backslash (\`\\\`) at the very end of a line to indicate that the string continues on the next line. 

\`\`\`javascript
var str = "This is a very \\
lengthy sentence spanning \\
multiple lines.";
\`\`\`
*Warning: If you accidentally place a space after the backslash, it will throw a SyntaxError.*

#### 3. String Concatenation (Legacy)
\`\`\`javascript
var str = "This is line one\\n" + 
          "This is line two";
\`\`\`

#### Key Point

> Use ES6 Template Literals (wrapped in backticks) to easily and cleanly define strings spanning multiple lines.


  **[⬆ Back to Top](#table-of-contents)**

140. ### What is an app shell model

The **App Shell Model** is a design pattern used in building **Progressive Web Apps (PWAs)** to provide a fast, app-like user experience.

An application "shell" is the minimal HTML, CSS, and JavaScript required to power the user interface (such as the header, navigation bar, and footer layout). 

#### How It Works
1. **Caching:** The shell is cached locally on the device by a Service Worker upon the first visit.
2. **Instant Loading:** On subsequent visits, the shell is loaded instantly from the cache, making the app appear blazingly fast and providing immediate feedback.
3. **Dynamic Content:** Once the shell is on screen, the dynamic content specific to that page is pulled from the network or a local database and injected into the shell.

#### Analogy
Think of it like a native mobile app downloaded from an app store. The UI framework (the shell) is already installed on your phone. When you open the app, the UI loads instantly, and only the specific data (like news feed items) is fetched from the internet.

#### Key Point

> The App Shell Model is a PWA architectural pattern where the core UI layout is cached locally to load instantly, separating the application's framework from its dynamic content.


  **[⬆ Back to Top](#table-of-contents)**
`;

fs.writeFileSync('README.md', content.substring(0, startIndex) + newBlock + "\n" + content.substring(endIndex));
console.log('Update successful.');
