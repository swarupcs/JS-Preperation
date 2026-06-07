const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const startIndex = content.indexOf('181. ### Why do I need to use the freeze method');
const endIndexStr = '201. ### ';
let endIndex = content.indexOf(endIndexStr, startIndex);
if (endIndex === -1) {
    endIndex = content.indexOf('201. ###', startIndex);
}
if (endIndex === -1) {
    endIndex = content.length; // Fallback to end of file if 201 doesn't exist yet
}

const newBlock = `181. ### Why do I need to use the freeze method

The primary reason to use \`Object.freeze()\` is to guarantee **data integrity and immutability**. 

In Object-Oriented Programming and complex application state management (like Redux or Vuex), passing objects around can be dangerous because JavaScript passes objects by reference. If a child component mutates an object, it mutates it for the entire application.

#### Benefits of Freezing
1. **Prevents accidental mutation:** It acts similarly to the \`final\` keyword in other languages. Elements that are not intended to be extended or modified outside their context are protected.
2. **Safer State Management:** Forces developers to create new, modified copies of an object (using the spread operator) rather than altering the original state directly.
3. **Security:** Protects critical configuration objects from being hijacked or altered at runtime by malicious scripts.

#### Example

\`\`\`javascript
const defaultSettings = Object.freeze({
  theme: "dark",
  version: "1.0.0"
});

// Any attempt to mutate will fail
defaultSettings.theme = "light"; 
console.log(defaultSettings.theme); // Still "dark"
\`\`\`

#### Key Note

> Use \`Object.freeze()\` to enforce immutability, preventing accidental or malicious modifications to configuration objects and application state data.


  **[⬆ Back to Top](#table-of-contents)**

182. ### How do you detect a browser language preference

You can detect the user's preferred language using the **\`navigator\`** object in JavaScript. 

The most modern and reliable property is \`navigator.languages\` (an array of preferred locales), falling back to \`navigator.language\`.

#### Example

\`\`\`javascript
const userLanguage = 
  (navigator.languages && navigator.languages[0]) || // Modern browsers (Chrome, Firefox, Safari)
  navigator.language ||                              // Older implementations
  navigator.userLanguage ||                          // Very old IE
  "en-US";                                           // Default fallback

console.log("User's preferred language is:", userLanguage); 
// Output e.g., "en-US" or "fr-FR"
\`\`\`

#### Key Note

> Access the \`navigator.languages[0]\` or \`navigator.language\` properties to detect the language preference set in the user's browser, which is useful for Internationalization (i18n).


  **[⬆ Back to Top](#table-of-contents)**

183. ### How to convert a string to title case with javascript

JavaScript does not have a built-in \`toTitleCase()\` method. You have to write a custom function to capitalize the first letter of each word in a string.

#### Example: Using Regular Expressions
This method finds the first character of every word (\`\\w\`) that follows a non-whitespace character (or start of string) and capitalizes it, while lowercasing the rest.

\`\`\`javascript
function toTitleCaseRegex(str) {
  return str.replace(/\\w\\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

console.log(toTitleCaseRegex("good morning john")); // "Good Morning John"
console.log(toTitleCaseRegex("jAvaScriPt is FUN")); // "Javascript Is Fun"
\`\`\`

#### Example: Using Array Methods
You can also split the string into an array of words, map over them, and join them back.

\`\`\`javascript
function toTitleCaseArray(str) {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}
\`\`\`

#### Key Note

> Convert a string to Title Case by either using a Regex replacement (\`str.replace(/\\w\\S*/g, ...)\`) or by splitting the string into words, capitalizing the first letter of each, and joining them back.


  **[⬆ Back to Top](#table-of-contents)**

184. ### How do you detect if javascript is disabled on the page

You cannot detect if JavaScript is disabled *using JavaScript*, because if it's disabled, your script won't run at all!

Instead, you use the **HTML \`<noscript>\` tag**. The content inside the \`<noscript>\` tag is only rendered by the browser if JavaScript is disabled or completely unsupported.

#### Example

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <script src="app.js"></script>
</head>
<body>
  
  <div id="app">
    <!-- JavaScript will render the app here -->
  </div>

  <noscript>
    <div style="color: red; border: 1px solid red; padding: 10px;">
      <strong>Error:</strong> JavaScript is disabled in your browser. 
      Please enable JavaScript or click <a href="basic_page.html">here</a> for a basic version.
    </div>     
  </noscript>

</body>
</html>
\`\`\`

#### Key Note

> Use the HTML \`<noscript>\` tag to provide alternative content or warnings to users who have disabled JavaScript in their browser settings.


  **[⬆ Back to Top](#table-of-contents)**

185. ### What are various operators supported by javascript

An operator is a special symbol capable of manipulating (performing mathematical or logical computations on) a certain value or operand. JavaScript supports several categories of operators.

#### 1. Arithmetic Operators
Used for mathematical calculations.
* \`+\` (Addition), \`-\` (Subtraction), \`*\` (Multiplication), \`/\` (Division), \`%\` (Modulus/Remainder), \`++\` (Increment), \`--\` (Decrement), \`**\` (Exponentiation).

#### 2. Comparison Operators
Used to compare two values, returning a boolean.
* \`==\` (Loose Equal), \`===\` (Strict Equal), \`!=\` (Loose Not Equal), \`!==\` (Strict Not Equal).
* \`>\` (Greater), \`>=\` (Greater or Equal), \`<\` (Less), \`<=\` (Less or Equal).

#### 3. Logical Operators
Used to determine the logic between variables or values.
* \`&&\` (Logical AND), \`||\` (Logical OR), \`!\` (Logical NOT).
* \`??\` (Nullish Coalescing - ES2020).

#### 4. Assignment Operators
Used to assign values to JavaScript variables.
* \`=\` (Assign), \`+=\` (Add and Assign), \`-=\` (Subtract and Assign), \`*=\`, \`/=\`, \`%=\`.

#### 5. Ternary Operator
The only operator that takes three operands, acting as a shortcut for \`if...else\`.
* \`condition ? trueVal : falseVal\`

#### 6. Type Operators
* **\`typeof\`**: Returns the data type of a variable.
* **\`instanceof\`**: Returns true if an object is an instance of an object type.

#### Key Note

> JavaScript provides a rich set of operators categorized into Arithmetic, Comparison, Logical, Assignment, Ternary, and Type operators to manipulate values and control logic.


  **[⬆ Back to Top](#table-of-contents)**

186. ### What is a rest parameter

The **Rest Parameter** (\`...\`) is an ES6 feature that allows a function to accept an indefinite number of arguments as an array.

It provides a much cleaner and more modern alternative to the legacy \`arguments\` object.

#### Example: Collecting Indefinite Arguments

\`\`\`javascript
// The ...numbers parameter collects all passed arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2));          // 3
console.log(sum(1, 2, 3, 4, 5)); // 15
\`\`\`

#### Example: Collecting "Remaining" Arguments

It is called the "rest" parameter because it collects the *rest* of the arguments after any specifically named parameters.

\`\`\`javascript
function multiplyMultiplier(multiplier, ...theArgs) {
  return theArgs.map(element => multiplier * element);
}

// 2 is the multiplier. 10, 20, 30 are gathered into theArgs array.
console.log(multiplyMultiplier(2, 10, 20, 30)); // [20, 40, 60]
\`\`\`

#### Key Note

> The Rest parameter (\`...args\`) gathers an unknown number of remaining arguments passed to a function and compiles them into a standard JavaScript array.


  **[⬆ Back to Top](#table-of-contents)**

187. ### What happens if you do not use rest parameter as a last argument

A Rest parameter **must strictly be the last parameter** in the function definition. 

Its specific job is to gather all the *remaining* arguments into an array. If you place another parameter after it, the JavaScript engine cannot determine when the rest parameter is supposed to stop collecting arguments.

#### Example

If you define a function with a rest parameter in the middle, it will throw a **SyntaxError** at compile time (before the code even runs).

\`\`\`javascript
// ❌ Invalid Syntax
function someFunc(a, ...b, c) {
  return a + c;
}
// Uncaught SyntaxError: Rest parameter must be last formal parameter
\`\`\`

#### Key Note

> Placing a rest parameter anywhere other than the very end of the parameter list will immediately result in a \`SyntaxError: Rest parameter must be last formal parameter\`.


  **[⬆ Back to Top](#table-of-contents)**

188. ### What are the bitwise operators available in javascript

Bitwise operators treat their operands as a set of 32-bit (zeros and ones) rather than as decimal, hexadecimal, or octal numbers. They perform their operations on such binary representations, but they return standard JavaScript numerical values.

*(Note: Bitwise operators are rarely used in standard web development, but are useful for low-level systems programming, cryptography, or performance optimization).*

#### Available Bitwise Operators

1. **\`&\` (Bitwise AND):** Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
2. **\`|\` (Bitwise OR):** Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
3. **\`^\` (Bitwise XOR):** Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
4. **\`~\` (Bitwise NOT):** Inverts the bits of its operand.
5. **\`<<\` (Left Shift):** Shifts a in binary representation b bits to the left, shifting in zeros from the right.
6. **\`>>\` (Sign-Propagating Right Shift):** Shifts a in binary representation b bits to the right, discarding bits shifted off.
7. **\`>>>\` (Zero-Fill Right Shift):** Shifts a in binary representation b bits to the right, shifting in zeros from the left.

#### Example

\`\`\`javascript
// 5 in binary: 0101
// 1 in binary: 0001
console.log(5 & 1); // 1  (0001)
console.log(5 | 1); // 5  (0101)
\`\`\`

#### Key Note

> JavaScript supports low-level Bitwise operators (AND \`&\`, OR \`|\`, XOR \`^\`, NOT \`~\`, and Shifts \`<<\`, \`>>\`, \`>>>\`) which operate directly on the 32-bit binary representation of numbers.


  **[⬆ Back to Top](#table-of-contents)**

189. ### What is a spread operator

The **Spread Operator** (also denoted by \`...\`) is an ES6 feature that allows an iterable (like an array, string, or object) to be "expanded" or "spread" into individual elements.

While the Rest parameter *collects* elements into an array, the Spread operator *unpacks* elements out of an array or object.

#### Example: Spreading into Function Arguments

\`\`\`javascript
function calculateSum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
// Expands the array into individual arguments: calculateSum(1, 2, 3)
console.log(calculateSum(...numbers)); // 6
\`\`\`

#### Example: Copying and Merging Arrays

\`\`\`javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

// Merge arrays
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Copy array (shallow copy)
const copy = [...arr1];
\`\`\`

#### Example: Copying and Merging Objects

\`\`\`javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

const mergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3 }
\`\`\`

#### Key Note

> The Spread operator (\`...\`) cleanly unpacks iterable objects (arrays, strings, objects) into individual elements, making copying, merging, and passing arguments significantly easier.


  **[⬆ Back to Top](#table-of-contents)**

190. ### How do you determine whether object is frozen or not

You can determine if an object has been locked down by the \`Object.freeze()\` method by using the **\`Object.isFrozen()\`** static method. It returns a boolean.

An object is strictly considered "frozen" if all of the following are true:
1. It is not extensible (no new properties can be added).
2. All of its properties are non-configurable (cannot be deleted or reconfigured).
3. All of its data properties are non-writable.

#### Example

\`\`\`javascript
const user = { name: "Sudheer" };

console.log(Object.isFrozen(user)); // false

// Freeze the object
Object.freeze(user);

console.log(Object.isFrozen(user)); // true
\`\`\`

#### Key Note

> Use the \`Object.isFrozen(obj)\` method to check if an object is completely immutable (meaning no properties can be added, removed, or changed).


  **[⬆ Back to Top](#table-of-contents)**

191. ### How do you determine two values same or not using object

In ES6, JavaScript introduced the **\`Object.is()\`** method to determine if two values are exactly the same. 

It behaves very similarly to the strict equality operator (\`===\`), but it fixes two specific mathematical quirks associated with \`===\`.

#### Example Comparison

\`\`\`javascript
// Standard strict equality behaviors
Object.is("hello", "hello"); // true
Object.is([], []);           // false (different references in memory)
Object.is(window, window);   // true
\`\`\`

#### The Differences from \`===\`
The \`===\` operator treats \`+0\` and \`-0\` as equal, and treats \`NaN\` and \`NaN\` as NOT equal. \`Object.is()\` fixes both of these logic flaws.

\`\`\`javascript
// Quirk 1: Signed Zeros
console.log(0 === -0);           // true
console.log(Object.is(0, -0));   // false

// Quirk 2: NaN (Not-a-Number)
console.log(NaN === NaN);        // false
console.log(Object.is(NaN, NaN));// true
\`\`\`

#### Key Note

> \`Object.is(val1, val2)\` evaluates if two values are identical. It acts like strict equality (\`===\`) but correctly identifies \`NaN === NaN\` as true, and \`+0 === -0\` as false.


  **[⬆ Back to Top](#table-of-contents)**

192. ### What is the purpose of using object is method

The primary purpose of \`Object.is()\` is to provide a robust, mathematically accurate comparison between two values, bypassing the quirks of the standard \`===\` operator.

#### Applications
1. **Accurate NaN comparison:** Useful when validating if a calculated value resulted in \`NaN\` without using the global \`isNaN()\` function.
2. **Polarity comparison:** Differentiating between \`+0\` and \`-0\`, which is necessary in certain complex mathematical or physics calculations.
3. **General Strict Comparison:** Comparing two strings, numbers, or object references just like \`===\`.

#### Example: Checking for NaN

\`\`\`javascript
const result = 10 / "apple"; // Results in NaN

// Old way
if (Number.isNaN(result)) { console.log("Failed"); }

// Using Object.is
if (Object.is(result, NaN)) { console.log("Failed"); }
\`\`\`

#### Key Note

> The purpose of \`Object.is()\` is to provide an absolutely strict equivalence check that accurately handles edge cases regarding \`NaN\` and signed zeroes (\`-0\`).


  **[⬆ Back to Top](#table-of-contents)**

193. ### How do you copy properties from one object to other

Before the spread operator (\`...\`) became standard for objects, the primary way to copy properties from one or more source objects into a target object was the **\`Object.assign()\`** method.

#### Syntax
\`\`\`javascript
Object.assign(target, ...sources);
\`\`\`

#### Example: Simple Cloning (Shallow Copy)
To clone an object without modifying the original, pass an empty object \`{}\` as the target.

\`\`\`javascript
const source = { a: 1, b: 2 };
const clone = Object.assign({}, source);

console.log(clone); // { a: 1, b: 2 }
\`\`\`

#### Example: Merging Objects
If multiple objects have the same property key, the value from the object furthest to the right will overwrite the previous ones.

\`\`\`javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 }; // Overwrites 'b'
const source2 = { c: 5 };       // Overwrites 'c'

const merged = Object.assign(target, source1, source2);

console.log(merged); // { a: 1, b: 3, c: 5 }
// Note: 'target' is also mutated!
console.log(target); // { a: 1, b: 3, c: 5 } 
\`\`\`

#### Key Note

> \`Object.assign(target, source)\` is used to copy or merge the enumerable properties from one or more source objects into a target object. It performs a shallow copy.


  **[⬆ Back to Top](#table-of-contents)**

194. ### What are the applications of the assign method

The \`Object.assign()\` method is a highly versatile tool in JavaScript for object manipulation.

#### Primary Applications

1. **Cloning an Object:** Creating a shallow copy of an object so you can mutate the copy without affecting the original.
   \`\`\`javascript
   const copy = Object.assign({}, original);
   \`\`\`
2. **Merging Multiple Objects:** Combining configurations, states, or options together.
   \`\`\`javascript
   const finalConfig = Object.assign({}, defaultOptions, userOptions);
   \`\`\`
3. **Adding Methods to Prototypes:** A clean way to add multiple methods to a class prototype at once.
   \`\`\`javascript
   Object.assign(MyClass.prototype, {
     method1() {},
     method2() {}
   });
   \`\`\`
4. **State Management:** Prior to the spread operator, it was the standard way to update state immutably in frameworks like Redux.

#### Key Note

> \`Object.assign()\` is primarily applied to shallow-clone objects, merge default and user configurations, and update state immutably by assigning data to a new, empty target object.


  **[⬆ Back to Top](#table-of-contents)**

195. ### What is a proxy object

A **Proxy** object wraps another object (the target) and intercepts fundamental operations performed on that object, allowing you to redefine custom behavior for things like property lookup, assignment, enumeration, and function invocation.

Think of it as a "middleman" or "interceptor" between your code and an object.

#### Syntax
\`\`\`javascript
const proxy = new Proxy(target, handler);
\`\`\`
* **Target:** The original object you want to wrap.
* **Handler:** An object defining "traps" (methods that intercept operations, like \`get\` or \`set\`).

#### Example: Default Value / Property Interception
Here, we use the \`get\` trap to return a default value if a property doesn't exist, rather than returning \`undefined\`.

\`\`\`javascript
const user = { name: "Sudheer" };

const handler = {
  get: function(target, property) {
    // If the property exists, return it. Otherwise, return a default string.
    return property in target ? target[property] : "Property not found!";
  }
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name); // "Sudheer"
console.log(proxyUser.age);  // "Property not found!"
\`\`\`

#### Common Use Cases
1. **Validation:** Intercepting \`set\` to ensure a user only assigns numbers to an \`age\` property.
2. **Logging/Profiling:** Tracking exactly when and what properties are accessed.
3. **Data Binding:** Used under the hood by frameworks like Vue 3 to detect when data changes and trigger UI re-renders.

#### Key Note

> A Proxy object acts as a wrapper around an original object, using a "handler" to intercept and customize fundamental operations like reading (\`get\`) and writing (\`set\`) properties.


  **[⬆ Back to Top](#table-of-contents)**

196. ### What is the purpose of the seal method

The **\`Object.seal()\`** method is a slightly less restrictive version of \`Object.freeze()\`. It "seals" an object, which prevents any structural changes to the object, but allows existing data to be modified.

#### Effects of Sealing
1. You **cannot add** new properties.
2. You **cannot remove** existing properties.
3. You **can change** the values of existing properties (as long as they are writable).

#### Example

\`\`\`javascript
const car = { make: "Toyota", model: "Camry" };

Object.seal(car);

// 1. You CAN change existing properties
car.model = "Corolla"; 

// 2. You CANNOT add new properties (Fails silently or throws in strict mode)
car.year = 2022; 

// 3. You CANNOT delete properties
delete car.make; 

console.log(car); // { make: "Toyota", model: "Corolla" }
console.log(Object.isSealed(car)); // true
\`\`\`

#### Key Note

> \`Object.seal()\` prevents the addition or deletion of properties on an object, locking its structure, but unlike freeze, it still permits the modification of existing property values.


  **[⬆ Back to Top](#table-of-contents)**

197. ### What are the applications of the seal method

The \`Object.seal()\` method is applied in scenarios where you want a strictly defined data structure, but the data within that structure needs to remain dynamic and mutable.

#### Applications
1. **Fixed Data Schemas:** Ensuring that an object representing a database record or a strictly typed API payload doesn't accidentally gain extra properties or lose required keys during execution, while still allowing the values to be updated.
2. **State Protection:** When passing an object to a third-party library, sealing it ensures the library can update the data but cannot mess with the structural integrity of your object (like deleting your ID keys).

#### Example

\`\`\`javascript
// We have a strict structure for a user session
const userSession = {
  userId: 101,
  token: "abc-123",
  lastActive: Date.now()
};

Object.seal(userSession);

// We can update the timestamp
userSession.lastActive = Date.now(); 

// But we can't accidentally add typos or delete the ID
userSession.tokn = "new-token"; // Fails
delete userSession.userId;      // Fails
\`\`\`

#### Key Note

> Apply \`Object.seal()\` when you need to enforce a strict data structure or schema (preventing accidental additions/deletions) while still allowing the internal data values to be updated dynamically.


  **[⬆ Back to Top](#table-of-contents)**

198. ### What are the differences between the freeze and seal methods

Both methods restrict how an object can be modified, but **\`Object.freeze()\` is absolute**, whereas **\`Object.seal()\` is structural**.

| Feature | \`Object.seal()\` | \`Object.freeze()\` |
| :--- | :---: | :---: |
| Can add new properties? | ❌ No | ❌ No |
| Can delete properties? | ❌ No | ❌ No |
| Can reconfigure properties? | ❌ No | ❌ No |
| **Can modify existing values?** | **✅ Yes** | **❌ No** |

#### Example Comparison

\`\`\`javascript
const sealedObj = { value: 10 };
Object.seal(sealedObj);
sealedObj.value = 20; // ✅ Works! The value is now 20.

const frozenObj = { value: 10 };
Object.freeze(frozenObj);
frozenObj.value = 20; // ❌ Fails! The value remains 10.
\`\`\`

#### Key Note

> The core difference is mutability of existing values: \`freeze()\` makes an object entirely read-only, whereas \`seal()\` locks the object's structure but allows you to modify the existing values.


  **[⬆ Back to Top](#table-of-contents)**

199. ### How do you determine if an object is sealed or not

You can verify if an object has been structurally locked by the \`Object.seal()\` method by using the **\`Object.isSealed()\`** static method. It returns a boolean.

An object is strictly considered "sealed" if:
1. It is not extensible (cannot add new properties).
2. All of its properties are non-configurable (cannot be deleted).

#### Example

\`\`\`javascript
const user = { name: "Sudheer" };

// Check before sealing
console.log(Object.isSealed(user)); // false

// Seal the object
Object.seal(user);

// Check after sealing
console.log(Object.isSealed(user)); // true
\`\`\`

*(Note: Because a frozen object meets all the criteria of a sealed object, calling \`Object.isSealed()\` on an object that has been passed to \`Object.freeze()\` will also return \`true\`).*

#### Key Note

> Use the \`Object.isSealed(obj)\` method to check if an object's structure is locked (meaning no properties can be added or deleted).


  **[⬆ Back to Top](#table-of-contents)**

200. ### How do you get enumerable key and value pairs

You can extract all the key-value pairs from an object using the **\`Object.entries()\`** method. 

It takes an object and returns a two-dimensional array (an array of arrays), where each inner array contains two elements: \`[key, value]\`.

#### Example

\`\`\`javascript
const user = {
  name: "John",
  age: 30,
  role: "Admin"
};

const entries = Object.entries(user);
console.log(entries);
// Output: 
// [
//   ["name", "John"],
//   ["age", 30],
//   ["role", "Admin"]
// ]
\`\`\`

#### Example: Using in a \`for...of\` loop
This is incredibly useful for iterating over an object cleanly using ES6 array destructuring.

\`\`\`javascript
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}
// name: John
// age: 30
// role: Admin
\`\`\`

#### Key Note

> Use \`Object.entries(obj)\` to convert an object into an array of \`[key, value]\` arrays, making it incredibly easy to iterate over both keys and values simultaneously using a \`for...of\` loop.


  **[⬆ Back to Top](#table-of-contents)**
`;

const updatedContent = content.substring(0, startIndex) + newBlock + "\n" + content.substring(endIndex);
fs.writeFileSync('README.md', updatedContent);
console.log('Update successful.');
