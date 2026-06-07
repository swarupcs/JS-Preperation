const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const startIndex = content.indexOf('141. ### Can we define properties for functions');
const endIndexStr = '161. ### ';
let endIndex = content.indexOf(endIndexStr, startIndex);
if (endIndex === -1) {
    endIndex = content.indexOf('161. ###', startIndex);
}

const newBlock = `141. ### Can we define properties for functions

Yes, you can define properties and methods on functions because **functions are First-Class Objects** in JavaScript. 

Just like standard objects, you can use dot notation or bracket notation to attach custom data directly to a function.

#### Example

\`\`\`javascript
// 1. Define a standard function
function greet() {
  console.log("Hello!");
}

// 2. Attach custom properties directly to the function object
greet.customName = "GreetingFunction";
greet.executionCount = 0;

// 3. Attach a custom method
greet.profile = function() {
  console.log(\`Function \${this.customName} has run \${this.executionCount} times.\`);
}

// Usage:
greet(); // "Hello!"
greet.executionCount++;

greet.profile(); // "Function GreetingFunction has run 1 times."
\`\`\`

#### Key Point

> Because functions in JavaScript are fundamentally objects, they can have their own custom properties and methods assigned to them dynamically using dot notation.


  **[⬆ Back to Top](#table-of-contents)**

142. ### What is the way to find the number of parameters expected by a function

You can find the number of parameters a function expects (its **arity**) by accessing the **\`length\`** property of the function object.

#### Example

\`\`\`javascript
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}

console.log(sum.length); // 4
\`\`\`

#### Important Exceptions (ES6+)
The \`length\` property only counts parameters up to the **first default parameter** and **excludes Rest parameters (\`...args\`)**.

\`\`\`javascript
function example1(a, b, c = 3) {}
console.log(example1.length); // 2 (stops at the default parameter)

function example2(a, ...rest) {}
console.log(example2.length); // 1 (rest parameter is not counted)
\`\`\`

#### Key Point

> Use the \`function.length\` property to determine a function's arity (the number of named arguments it formally expects), keeping in mind that default and rest parameters affect the count.


  **[⬆ Back to Top](#table-of-contents)**

143. ### What is a polyfill

A **polyfill** is a piece of JavaScript code (usually a script or plugin) that provides modern functionality on older browsers that do not natively support it. 

It "fills in" the missing API, allowing developers to write modern code without worrying about older environments breaking.

#### Polyfill vs Transpiler
* **Transpiler (like Babel):** Converts modern *syntax* (like arrow functions \`() => {}\`) into older syntax (\`function() {}\`).
* **Polyfill:** Adds missing *methods and objects* (like \`Array.prototype.includes\` or \`Promise\`).

#### Example: A simple polyfill for \`Math.trunc\`
If an old browser doesn't have \`Math.trunc\`, you can polyfill it:

\`\`\`javascript
if (!Math.trunc) {
  Math.trunc = function(v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
  };
}
\`\`\`

#### Popular Polyfill Libraries
1. **core-js**: The most widely used modular standard library polyfill.
2. **Polyfill.io**: A service that automatically serves tailored polyfills based on the user's specific browser.

#### Key Point

> A polyfill is fallback code that replicates modern APIs and methods, ensuring that newer JavaScript features function correctly in older, unsupported browsers.


  **[⬆ Back to Top](#table-of-contents)**

144. ### What are break and continue statements

The **\`break\`** and **\`continue\`** statements are used to strictly control the flow of loops in JavaScript.

#### The \`break\` Statement
The \`break\` statement is used to completely "jump out" of a loop. It terminates the loop immediately and resumes execution at the next statement following the loop.

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Loop completely stops when i is 3
  }
  console.log(i); // Outputs: 0, 1, 2
}
\`\`\`

#### The \`continue\` Statement
The \`continue\` statement is used to "jump over" the current iteration. It stops the current loop cycle and immediately proceeds to the next iteration.

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skips the console.log for 3, moves to 4
  }
  console.log(i); // Outputs: 0, 1, 2, 4
}
\`\`\`

#### Key Point

> Use \`break\` to completely terminate a loop early, and use \`continue\` to skip the remainder of the current iteration and proceed directly to the next one.


  **[⬆ Back to Top](#table-of-contents)**

145. ### What are js labels

A **Label** provides an identifier (a name) for a statement or a block of code (most commonly loops). You can then use this label in conjunction with \`break\` or \`continue\` to dictate exactly which nested loop should be broken or continued.

#### Syntax
\`\`\`javascript
labelName: statement
\`\`\`

#### Example: Breaking an Outer Loop
Normally, \`break\` only exits the innermost loop. Using a label allows you to break out of the parent loop from within the child loop.

\`\`\`javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Stops both loops entirely
    }
    console.log(\`i = \${i}, j = \${j}\`);
  }
}
// Output: 
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
\`\`\`

#### Key Point

> Labels allow you to name loops, giving you precise control over nested loop structures by allowing \`break\` and \`continue\` to target specific outer loops.


  **[⬆ Back to Top](#table-of-contents)**

146. ### What are the benefits of keeping declarations at the top

Historically in JavaScript, it has been a best practice to keep all variable and function declarations at the very top of their respective scope (a script or a function). 

#### Benefits
1. **Visual Clarity:** Provides a single, predictable place to look for local variables, giving a cleaner code structure.
2. **Mitigates Hoisting Confusion:** Because \`var\` and \`function\` declarations are hoisted to the top of their scope during compilation, manually placing them there aligns the written code with how the engine interprets it, preventing unexpected \`undefined\` behaviors.
3. **Avoids Re-declarations:** Makes it immediately obvious if a variable name has already been used in that scope.
4. **Minimizes Accidental Globals:** Helps prevent accidental global variables caused by assigning values to undeclared variables deep within logic blocks.

*(Note: While modern ES6 \`let\` and \`const\` are block-scoped and mitigate many hoisting issues, keeping declarations organized at the top of a block remains a strong stylistic convention).*

#### Key Point

> Grouping variable and function declarations at the top of a scope improves code readability and prevents logic errors caused by JavaScript's hoisting mechanism.


  **[⬆ Back to Top](#table-of-contents)**

147. ### What are the benefits of initializing variables

It is a highly recommended practice to initialize variables (assign them an initial value) at the same time you declare them, rather than leaving them \`undefined\`.

#### Benefits
1. **Prevents \`undefined\` Errors:** An uninitialized variable holds the value \`undefined\`. Using it in mathematical operations results in \`NaN\`, and accessing properties on it throws runtime errors.
2. **Type Hinting:** Initializing a variable provides immediate context about what type of data it is meant to hold (e.g., \`let count = 0;\` clearly implies a number, \`let users = [];\` implies an array). This allows the JavaScript engine to optimize performance.
3. **Cleaner Code:** It condenses declaration and assignment into a single, readable line.

#### Example
\`\`\`javascript
// Bad: Uninitialized
let total;
console.log(total + 5); // NaN

// Good: Initialized
let sum = 0;
console.log(sum + 5); // 5
\`\`\`

#### Key Point

> Initializing variables prevents runtime errors caused by \`undefined\` values, provides implicit type hinting for developers and the JS engine, and leads to more robust code.


  **[⬆ Back to Top](#table-of-contents)**

148. ### What are the recommendations to create new object

It is highly recommended to use **Literal Syntax** instead of **Constructor Functions** (like \`new Object()\`) when creating base data types. 

#### Recommended Literal Syntaxes

1. **Objects:** Assign \`{}\` instead of \`new Object()\`
2. **Strings:** Assign \`""\` instead of \`new String()\`
3. **Numbers:** Assign \`0\` instead of \`new Number()\`
4. **Booleans:** Assign \`false\` instead of \`new Boolean()\`
5. **Arrays:** Assign \`[]\` instead of \`new Array()\`
6. **Regex:** Assign \`/()/\` instead of \`new RegExp()\`
7. **Functions:** Assign \`function() {}\` (or \`() => {}\`) instead of \`new Function()\`

#### Example

\`\`\`javascript
// ❌ Not Recommended (Slower, verbose, potential type issues)
const obj = new Object();
const arr = new Array();
const str = new String("Hello"); 

// ✅ Recommended (Faster, readable, strict typing)
const obj = {};
const arr = [];
const str = "Hello"; 
\`\`\`

#### Why?
Using constructors like \`new String()\` creates a complex object wrapper rather than a primitive value, which can cause equality checks (\`===\`) to fail unexpectedly and slows down execution.

#### Key Point

> Always prefer literal syntax (like \`{}\`, \`[]\`, \`""\`) over constructor functions (like \`new Object()\`) for better performance, readability, and predictable type behaviors.


  **[⬆ Back to Top](#table-of-contents)**

149. ### How do you define JSON arrays

**JSON arrays** are defined using square brackets \`[]\`. They are syntactically identical to JavaScript arrays but are used exclusively to hold JSON objects, arrays, or primitive data types (strings, numbers, booleans, null).

#### Syntax Rules
* Must be wrapped in \`[]\`.
* Elements are separated by commas.
* All object keys and string values inside the array **must use double quotes \`""\`**.
* Trailing commas are strictly prohibited.

#### Example

Here is a JSON array containing a list of user objects:

\`\`\`json
{
  "users": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Shane", "lastName": "Warn" }
  ],
  "activeIds": [101, 102, 105]
}
\`\`\`

#### Key Point

> JSON arrays are defined using square brackets \`[]\` and contain comma-separated values or objects, strictly adhering to JSON formatting rules (like double-quoted strings).


  **[⬆ Back to Top](#table-of-contents)**

150. ### How do you generate random integers

You can generate random integers by combining two native Math methods: **\`Math.random()\`** and **\`Math.floor()\`**.

1. \`Math.random()\` returns a floating-point number between \`0\` (inclusive) and \`1\` (exclusive) (e.g., \`0.54321\`).
2. You multiply this by your desired range.
3. \`Math.floor()\` rounds the result down to the nearest whole number.

#### Example

\`\`\`javascript
// Generate a random integer from 0 to 9
const num1 = Math.floor(Math.random() * 10); 

// Generate a random integer from 1 to 10
const num2 = Math.floor(Math.random() * 10) + 1; 

// Generate a random integer from 1 to 100
const num3 = Math.floor(Math.random() * 100) + 1; 
\`\`\`

#### Key Point

> Combine \`Math.random()\` (to get a random decimal) with \`Math.floor()\` (to round down) and a multiplier to generate random integers in JavaScript.


  **[⬆ Back to Top](#table-of-contents)**

151. ### Can you write a random integers function to print integers within a range

Yes, you can create a reusable function to return a random integer securely between a specific \`min\` and \`max\` range (where both \`min\` and \`max\` are included).

#### The Formula
To ensure both the minimum and maximum numbers are possible outcomes, you use:
\`Math.floor(Math.random() * (max - min + 1)) + min\`

#### Example Function

\`\`\`javascript
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage:
console.log(randomInteger(1, 10));   // E.g., 7
console.log(randomInteger(50, 100)); // E.g., 82
\`\`\`

#### Key Point

> The reliable formula \`Math.floor(Math.random() * (max - min + 1)) + min\` allows you to safely generate a random integer between any specified minimum and maximum values (inclusive).


  **[⬆ Back to Top](#table-of-contents)**

152. ### What is tree shaking

**Tree Shaking** is a form of dead code elimination used during the build step of modern JavaScript applications.

It analyzes your code to determine which modules, functions, or variables are imported but never actually used, and completely removes them from the final production bundle.

#### How it works
Tree shaking heavily relies on the static structure of ES6 module syntax (\`import\` and \`export\`). Because ES6 modules are static (they cannot be dynamically imported via conditional variables at runtime in the same way CommonJS \`require()\` can), the bundler can determine exactly what is used before the code runs.

#### Tooling
It was popularized by the **Rollup** module bundler and is now a core optimization feature in **Webpack** and **Vite**.

#### Key Point

> Tree shaking is a build-time optimization process that statically analyzes ES6 \`import\` and \`export\` statements to automatically remove unused "dead" code from the final application bundle.


  **[⬆ Back to Top](#table-of-contents)**

153. ### What is the need of tree shaking

The primary need for Tree Shaking is to **reduce the final bundle size** of an application, which directly impacts web performance.

#### Key Benefits
1. **Faster Download Times:** Less code sent over the network means the browser downloads the application much faster, especially critical for users on slow mobile networks.
2. **Faster Parsing and Execution:** The browser's JavaScript engine has to parse, compile, and execute less code, reducing the Time to Interactive (TTI).
3. **Optimized Libraries:** Modern libraries (like Lodash-ES or Material-UI) are massive. Without tree shaking, importing one small utility function might bundle the entire library. Tree shaking ensures you only ship the exact functions you utilized.

#### Example
If you build a "Hello World" app using a heavy SPA framework without tree shaking, it might be 2MB. With tree shaking, it could be reduced to 100KB by stripping away all the framework features you didn't use.

#### Key Point

> Tree shaking is essential for maximizing web performance by drastically reducing the amount of JavaScript delivered to the browser, leading to faster download, parsing, and execution times.


  **[⬆ Back to Top](#table-of-contents)**

154. ### Is it recommended to use eval

**No, using \`eval()\` is highly discouraged.**

The \`eval()\` function evaluates JavaScript code represented as a string. Its use is considered an anti-pattern for several critical reasons.

#### Why to Avoid \`eval()\`
1. **Security Vulnerabilities (XSS):** If you execute a string that has been influenced by user input or a third-party API, a malicious user could run dangerous scripts inside your application.
2. **Terrible Performance:** The JavaScript engine cannot safely optimize \`eval()\` code during compilation because the engine has no way of knowing what the string will contain until runtime. 
3. **Scope Pollution:** \`eval()\` can interact with and modify local variables in the scope it was called, leading to unpredictable bugs.
4. **Debugging Difficulty:** Code executed via strings is notoriously difficult to debug and doesn't provide helpful stack traces.

#### Example
\`\`\`javascript
// ❌ Dangerous and slow
let x = 10;
eval("x = 20; console.log(x);"); 
\`\`\`

#### Key Point

> Never use \`eval()\`. It opens severe security risks (like Cross-Site Scripting), degrades application performance, and makes code exceptionally difficult to debug and maintain.


  **[⬆ Back to Top](#table-of-contents)**

155. ### What is a Regular Expression

A **Regular Expression (RegEx)** is a sequence of characters that forms a powerful search pattern. 

They are used extensively in JavaScript (and most programming languages) for searching, matching, validating, and replacing text within strings.

#### Syntax
In JavaScript, regular expressions are usually defined between two forward slashes, optionally followed by modifiers.

\`\`\`javascript
/pattern/modifiers;
\`\`\`

#### Example
If you want to search a string for the word "John" regardless of case, you would create this RegEx:

\`\`\`javascript
const regex = /John/i; 
\`\`\`

#### Key Point

> Regular Expressions are specialized syntax patterns used to perform complex text search, validation (like email formatting), and replace operations on strings.


  **[⬆ Back to Top](#table-of-contents)**

156. ### What are the string methods that accept Regular expression

JavaScript provides several built-in String methods that are designed to work seamlessly with Regular Expressions.

#### 1. \`search()\`
Searches for a match and returns the index position of the first match (or -1 if not found).
\`\`\`javascript
const msg = "Hello John";
console.log(msg.search(/John/i)); // 6
\`\`\`

#### 2. \`replace()\` and \`replaceAll()\`
Replaces the matched pattern with a new substring.
\`\`\`javascript
const msg = "ball bat";
console.log(msg.replace(/b/g, "c")); // "call cat"
\`\`\`

#### 3. \`match()\`
Returns an array of the matches. If the \`g\` modifier is used, it returns all matches; otherwise, it returns just the first match with detailed capture groups.
\`\`\`javascript
const msg = "Hello John";
console.log(msg.match(/[A-Z]/g)); // ["H", "J"]
\`\`\`

#### 4. \`matchAll()\`
Returns an iterator containing all matches, including capturing groups, useful for deep string parsing.

#### 5. \`split()\`
Splits a string into an array based on the matched pattern.
\`\`\`javascript
const msg = "Hello John";
console.log(msg.split(/\\s/)); // ["Hello", "John"] (splits by whitespace)
\`\`\`

#### Key Point

> JavaScript strings integrate deeply with Regular Expressions via methods like \`search()\`, \`replace()\`, \`match()\`, and \`split()\` for advanced text manipulation.


  **[⬆ Back to Top](#table-of-contents)**

157. ### What are modifiers in regular expression

**Modifiers** (also known as flags) are optional characters appended to the end of a Regular Expression to change its default search behavior.

#### Common Modifiers

| Modifier | Description | Example Behavior |
| :--- | :--- | :--- |
| **\`i\`** | **Case-insensitive** matching. | \`/hello/i\` matches "Hello", "HELLO", or "hello". |
| **\`g\`** | **Global** match. | Finds all matches rather than stopping after the first one. |
| **\`m\`** | **Multiline** matching. | Changes the behavior of \`^\` and \`$\` to match the start/end of every line, not just the whole string. |

#### Example: Using the \`g\` modifier
Without \`g\`, a replace operation only affects the first match.

\`\`\`javascript
const text = "Learn JS one by one";

const pattern1 = /one/;
console.log(text.replace(pattern1, "two")); // "Learn JS two by one"

const pattern2 = /one/g;
console.log(text.replace(pattern2, "two")); // "Learn JS two by two"
\`\`\`

#### Key Point

> Modifiers (flags) like \`i\` (case-insensitive) and \`g\` (global) are placed at the end of a RegEx to fundamentally alter how the pattern searches the target string.


  **[⬆ Back to Top](#table-of-contents)**

158. ### What are regular expression patterns

Regular Expressions rely on specific patterns to match combinations of characters. These are grouped into three main categories:

#### 1. Brackets (Ranges and Groups)
Used to find any character within a specific range.
* **\`[abc]\`**: Matches 'a', 'b', or 'c'.
* **\`[0-9]\`**: Matches any digit.
* **\`(a|b)\`**: Matches 'a' OR 'b' (alternatives).

#### 2. Metacharacters (Special Classes)
Characters with a pre-defined special meaning.
* **\`\\d\`**: Matches any digit (same as \`[0-9]\`).
* **\`\\s\`**: Matches any whitespace character (spaces, tabs).
* **\`\\w\`**: Matches any alphanumeric character (word character).
* **\`\\b\`**: Matches a word boundary (beginning or ending of a word).

#### 3. Quantifiers (Counts)
Defines how many times a character or group should be present.
* **\`n+\`**: Matches strings containing at least one 'n'.
* **\`n*\`**: Matches strings containing zero or more occurrences of 'n'.
* **\`n?\`**: Matches strings containing zero or one occurrences of 'n'.
* **\`n{2,4}\`**: Matches strings containing a sequence of two to four 'n's.

#### Example
\`\`\`javascript
const regex = /\\d{3}-\\d{4}/; // Matches a phone number format like "123-4567"
\`\`\`

#### Key Point

> RegEx patterns use Brackets to define character sets, Metacharacters (like \`\\d\` or \`\\s\`) as shortcuts for common types, and Quantifiers (like \`+\` or \`*\`) to dictate required amounts.


  **[⬆ Back to Top](#table-of-contents)**

159. ### What is a RegExp object

The **\`RegExp\` object** is a native JavaScript object constructor used to instantiate regular expressions dynamically. 

While literal syntax (\`/pattern/\`) is evaluated at compile time and is better for static patterns, the \`RegExp\` constructor is evaluated at runtime, making it essential when the search pattern is derived from a variable (like user input).

#### Syntax
\`\`\`javascript
new RegExp(pattern, modifiers);
\`\`\`

#### Example: Dynamic Regex from a Variable

\`\`\`javascript
const searchWord = "John";
const flags = "gi"; // Global, case-insensitive

// Creating dynamically
const dynamicRegex = new RegExp(searchWord, flags);

console.log(dynamicRegex); // /John/gi

const text = "John and johnny went to see JOHN";
console.log(text.match(dynamicRegex)); // ["John", "john", "JOHN"]
\`\`\`

*(Note: When using strings to create regexes, you must double-escape special metacharacters. E.g., \`\\w+\` becomes \`"\\\\w+"\`)*.

#### Key Point

> Use the \`new RegExp("pattern", "flags")\` constructor when you need to generate a regular expression dynamically at runtime based on variables or user input.


  **[⬆ Back to Top](#table-of-contents)**

160. ### How do you search a string for a pattern

If you only need to know whether a pattern exists within a string (returning \`true\` or \`false\`), the most efficient method is using the **\`test()\`** method provided by the Regular Expression object itself.

#### Example: Using \`test()\`

\`\`\`javascript
const pattern = /you/i;
const phrase = "How are you doing?";

console.log(pattern.test(phrase)); // true
console.log(/they/.test(phrase));  // false
\`\`\`

#### Alternative: Using \`exec()\`
If you need to know *where* it is or capture specific groups, you can use \`exec()\`. It returns an array of information if it finds a match, or \`null\` if it fails.

\`\`\`javascript
const pattern = /you/i;
const result = pattern.exec("How are you doing?");

console.log(result.index); // 8 (The position where "you" starts)
\`\`\`

#### Key Point

> The fastest and simplest way to search a string for a boolean match is using the \`RegExp.prototype.test()\` method (e.g., \`regex.test("string")\`).


  **[⬆ Back to Top](#table-of-contents)**
`;

fs.writeFileSync('README.md', content.substring(0, startIndex) + newBlock + "\n" + content.substring(endIndex));
console.log('Update successful.');