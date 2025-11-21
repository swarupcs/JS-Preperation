# 1. What would be the return value (if any)?

### What would be the output of the following code snippet and why?

```js
function init() {
 try {
   return 1;
 } finally {
   return 2;
 }
}

// What would be the return value (if any)?
init();

```

### Output

```
3
```

```
The answer would be option 3 and the return value would be 2.

Return does not immediately return control the caller like you might expect.

It actually creates a 'Completion Record', which tells the runtime why the function stopped running, and any associated data (return value, exception, etc).

It is at this time (once the function has returned but before control is passed back to the caller) that finally blocks are run.

The finally block also creates a completion record. The runtime now has two completion records with different return values, and it has to pick between them.

It picks the one from the finally block because that's what the spec says it should do.
```

# 2. What is the output of the following code snippet? | JavaScript Fundamentals | Frontend Interview Question


## If we have the following code snippet then what would be the output if we execute it?

```js
const name = { firstName: "devtools", lastName: "tech" };
const nameCopy = name;

nameCopy.firstName = "dev";

// what would be the output of the following?
console.log(name);

```

### Output

```
{ firstname: 'dev', lastname: 'tech' }
```

```
The answer would be Option 3 as in JavaScript nameCopy is a reference to the name object. Any changes done through nameCopy would reflect on the original object. If we want to stop this reflection then we need deep copy the object using methods like window.structuredClone or methods like deepClone, clone provided by famous libraries such as lodash.
```

# 3. Can you identify the behaviour of following code snippet? | JavaScript Output Questions | Problem Solving | JavaScript Copy

### If asked to glance over the following code snippet and identify the behaviour of the duplicate function then what do you think is happening in the following code snippet?


```js
const original = {
  id: 'xhdyt0123',
  link: 'https://www.youtube.com/watch?v=_eaCs-pzaVg',
  metadata: {
    title: 'Build Your Own Redux',
    description: 'In this video we are going to see how we an build our own Redux',
  },
  published: true
}

const duplicate = (original) => {
  if (!original.published) {
    throw new Error('Your post needs to published before duplication'); 
  }

  const copy = {
    id: +new Date(),
    link: original.link,
    metadata: original.metadata,
    published: original.published
  };

  copy.metadata.title = `Copy of ${original.metadata.title}`;

  return copy;
};

duplicate(original);

```
### Output

```
The function duplicates a video post.
It throws an error if the original video post isn’t published.
It prepends “Copy of” to the new video post's title and original video post's title.
```
### Explanation
```
The answer would be Option 4 because the function duplicate accidentally changes the title of the original video post's title too as non-primitive data-types are passed by reference in JavaScript.
```

# 4. Is Fetch API part of JavaScript Engine or JavaScript Runtime?
### 


### Output
```
JavaScript Runtime
```
### Explanation
```
Different APIs like Fetch API, DOM API, Web Storage API are part of the JavaScript Runtime like Browser.

Browser APIs (or web APIs) are the APIs that come built-in with the browsers. They allow developers to perform complex operations without dealing with the sophisticated lower-level code. There are a number of browser APIs for manipulating the DOM, making network requests, managing client-side storage, and retrieving device media streams, etc.
```

# 5. What would be the output of the following code? (Based on Spread Operator)


```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

```
### Output
```
6
```
### Explanation
```
The answer would be Option 3 as we are using the Spread Syntax here. The array numbers would be expanded into its elements and the function sum receives 3 arguments x = 1, y = 2, and z = 3 respectively.

Read more about Spread Syntax here.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
```

# 6. What would be the output of the following code? (Based on Array Slice)


```js
const array = [1,2,3,4,5];

console.log(array.slice(2,4));

```
### Output
```
[3, 4]
```
### Explanation
```
The answer would be Option 1 as the slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
```

# 7. Which function is used to serialize an object into a JSON string in Javascript?
### 


### Output
```
JSON.stringify()
```
### Explanation
```
The JSON.stringify() function is used to convert a JSON object into string format.
```

### Follow-up

```
JSON.convert()
JSON.string()
JSON.parse()

```
# 8. What is the process in which an object or data structure is converted to series of bytes for easy storage or network transfer?
### 



### Output
```
Object Serialization
```
### Explanation
```
Serialization is the conversion of an object to a series of bytes, so that the object can be easily saved to persistent storage or streamed across a communication link. The byte stream can then be deserialized - converted into a replica of the original object.
```

### Follow-up

```
Object Encapsulation
Object Inheritance
Object Polymorphism

```

# 9. What will be the output of the following code snippet? JavaScript Min, Max
### 


```js
const isMinGreater = Math.min() > Math.max();
const isMaxGreater = Math.max() > Math.min();

console.log(isMinGreater, isMaxGreater);

```
### Output
```
true false
```
### Explanation
```
In Javascript Math.max() is lesser than Math.min() because Math.max() returns -Infinity and Math.min() returns Infinity.
```

# 10. How the comparison happens with switch cases in JavaScript?
### The switch statement is used to perform different actions based on different conditions in JavaScript.

### Output
```
Both the expression's value and datatype are matched
```
### Explanation
```
The switch expression is evaluated once. Then an === based comparison is performed i.e. both the value of the expression and its datatype is compared. If there is a match, the associated block of code is executed else the default code block is executed.
```


# 11. What is the output of the following code snippet? | JavaScript Fundamentals
### Let us consider the following code snippet, in which we are fetching a question based on the questionId.


```js
const User = require("../models/User");
const Question = require("../models/Question");
const { getCurrentSession } = require('../utils');

async function getQuestion(questionId) {
  const isIdInvalid = !questionId || !questionId.trim().length;

  if (isIdInvalid) {
    throw new Error("Bad Request");
  }

  const question = await Question.getQuestionById(questionId);
 
  // assume we have this utility to find current session
  // computes to an object with proper user data
  const session = getCurrentSession();

  if (session) {    
    // computes to false
    const isAuthorRequest = question.author.id === session.user.id;
    const author = isAuthorRequest ? session.user : await User.getUserById(question.author.id);
  }  

  return {
    ...question,
    author: author || null,
  };
};

const question = await getQuestion('Iahbvfkg5H86a6KL8yBD');

console.log(question);

```

```
Assume that all the functions getQuestionById, getUserById, getCurrentSession return proper data.

If we run this code snippet then what would be the output?
```
### Output
```
Error
```
### Explanation
```
Because the variable author is declared inside the code-block created by the if statement. Accessing the variable outside its scope would throw a ReferenceError.
https://devtools.tech/blog/scoping-in-javascript-explained-or-javascript-interview-questions---rid---Iahbvfkg5H86a6KL8yBD?ref=scoping-mcq
```



# 12. Which of the following keywords are used to define a variable in JavaScript?
### A variable is a “named storage” for data. We can use variables to store different types of data.


### Output
```
var
let
const
All of the above
```
### Explanation
```
We can use var, let, and const to create variables in the JavaScript language.
```

# 13. What is the paradigm of JavaScript language?
### A paradigm can be defined as an approach to solving a problem. A programming paradigm is a way to solve problems by using a programming language.

JavaScript is the language of the web. In the question, you need to answer what is the paradigm of JavaScript language?



### Output
```
Object-Oriented
Imperative
Functional
All of the above
```
### Explanation
```
JavaScript is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.

You can read more about JavaScript programming paradigm here.
https://developer.mozilla.org/en-US/docs/Web/JavaScript
```

# 14. What would be the output? [New Operator | Explicit Primitive Return]
### 


```js
function Person(name) {
  this.name = name;

  function person() {
    return {
      name: 'Prithvi'
    };
  }

  var person = {
    name: 'Ajay'
  };

  var person = false;

  return person;
}

var yomesh = new Person('Yomesh');
console.log(yomesh);

```
### Output
```
{"name":"Yomesh"}
```
### Explanation
```
https://www.youtube.com/watch?v=1FkZwBpti0o
```

# 15. What is the output of the following code? - Promise Scheduling | Event Loop | JavaScript Quiz
### What would be the output of the following code snippet?


```js
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

```
### Output
```
1 7 3 5 2 6 4
```
### Explanation

---

### Understanding the Output Order

```js
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);
```

---

### Step-by-Step Execution

#### **1. Synchronous Code Executes First**

* `console.log(1)` → prints **1**
* `console.log(7)` → prints **7**

So far:

```
1 7
```

---

### **2. Task Scheduling**

* `setTimeout(() => console.log(2))` → macrotask
* `Promise.resolve().then(() => console.log(3))` → microtask
* `Promise.resolve().then(() => setTimeout(() => console.log(4)))` → microtask (but schedules a macrotask inside)
* `Promise.resolve().then(() => console.log(5))` → microtask
* `setTimeout(() => console.log(6))` → macrotask

---

### **3. Microtasks Run Before Macrotasks**

#### Microtask Queue execution:

1. `console.log(3)` → prints **3**
2. `setTimeout(() => console.log(4))` → a new macrotask is added
3. `console.log(5)` → prints **5**

Current output:

```
1 7 3 5
```

---

### **4. Now the Macrotask Queue Executes**

Order of macrotasks:

1. `console.log(2)`
2. `console.log(6)`
3. `console.log(4)` (added during microtask stage)

Final output:

```
1 7 3 5 2 6 4
```

---

### ✅ **Final Result**

```
1 7 3 5 2 6 4
```

---

# 16. What does this function print? JavaScript Quiz | Interview Question
### What would be the output of the following code snippet if we execute it as it is.


```js
let number;
for (var i = 0; i < 5; i++) {
  number = i;
  setTimeout(function() {
    console.log(number);
  }, 1000);
}

```
### Output
```
4
4
4
4
4
```
### Explanation


---

## ❗ Key Points to Understand

### 1. **`var i` is function-scoped, not block-scoped**

`var` does **not** create a new variable for each loop iteration.
There is only **one `i` variable** shared across all iterations.

After the loop ends:

* `i = 5`
* `number = 4` (because last assignment was `number = i` when `i = 4`)

---

### 2. **`setTimeout` callbacks run *after* the loop finishes**

Each `setTimeout` schedules a function to run later (after ~1000 ms).
By the time those callbacks run:

* The **loop is already finished**
* `i` is now `5`
* `number` is now **4**

So inside every callback, `console.log(number)` sees the same final value: **4**

---

## 📌 Final Output

```
4
4
4
4
4
```

Because all 5 callbacks print the **same shared variable value**.

---

## ✔ Extra Visualization

Timeline:

| Time             | What Happens      | `i` | `number` |
| ---------------- | ----------------- | --- | -------- |
| Loop iteration 0 | number = 0        | 0   | 0        |
| Loop iteration 1 | number = 1        | 1   | 1        |
| Loop iteration 2 | number = 2        | 2   | 2        |
| Loop iteration 3 | number = 3        | 3   | 3        |
| Loop iteration 4 | number = 4        | 4   | 4        |
| Loop ends        | i becomes 5       | 5   | **4**    |
| After 1 sec      | All callbacks run | 5   | **4**    |

Every callback prints `4`.

---

## Want the output to be 0 1 2 3 4?

Use `let` or an IIFE:

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

# 17. What would be the output? [JavaScript Inheritance]
### Let us talk about JavaScript Inheritance today. This is an interesting question that I recently came across.

What do you think would be the output of the following code snippet?


```js
class Person {
	constructor(name) {
		this.name = name;
	}

	print = () => {
		console.log(this.name);
	}
};

class Employee extends Person {
	constructor(name, id) {
		super(name);
		this.id = id;
	}

	print() {
		console.log(this.name, this.id);
	}
};

const one = new Person('one');
one.print();

const two = new Employee('two', 2);
two.print();

```
### Output
```
one
two
```
### Explanation
```
Watch short explanation here -- https://www.youtube.com/watch?v=7bsA6Poxvy4&list=PL4ruoTJ8LTT8250F2ZrYVmRO6o5gWZKpG&index=1

The Person class print() being an arrow function would be associated with object instance when created.

The Employee print() being a regular one, would be available on Employee’s prototype.

In case of one.print(), the output seems reasonable.

In case of two.print(), one might expect the method overriding to work from initial impression. But in this case, two is an object created using Employee which extends Person. Now Person had print() method associated with instance. Meanwhile, Employee’s print() is available on its prototype.

So two being an instance of Employee will look for print() in its instance first which it will find no thanks to Person’s implementation. And so proto of two will never be looked for print().
```

# 18. What would the output of the following code snippet? [Promises in JavaScript]
### What would be the output of the following code snippet if we run this as it is?


```js
function processing() {
  return Promise.reject("Something went wrong!");
}

function init() {
  try {
    return processing();
  } catch (err) {
    console.log("Error in processing.");
  }
}

init().then(() => {
  console.log("End");
});

```
### Output
```
Uncaught (in promise) Something went wrong!
```
### Explanation
```
Because in function processing our error is async in nature. Traditional try/catch blocks doesn't catch async errors in the promise chain because of their sync nature. You might say they work in case of async/await syntax. Yes, they work because when we are using await keyword then we are kind of suspending the execution of the function till promised is resolved so it behaves in a sync manner.
```
# 19. What would be the output of the following code? [Scoping in JavaScript]
### Consider the follow code snippet. What would be the output if we invoke the print function?


```js
var name = "Yomesh";

function print(name) {
  console.log(name);
  var name = "Ajay";
  console.log(name); 
} 

print(name);

```
### Output
```
Yomesh
Ajay
```
### Explanation

---

1. We are using `var` here to declare the variable.
2. The variable name already exists in the global scope.

3. If we think in terms of hoisting, then you might think the answer would be **Option 1** because inside the `print` function, the `name` variable would be hoisted to the top and its value would be `undefined`.
However, one thing to remember about hoisting is that while variable **declarations** are hoisted to the top, if the variable is already **initialised** with a value, then that value is retained.

4. We are capturing the variable in function arguments.


# 20. What would be the output? [Object Destructuring]
### Let say we have a variable state which represents our current application state.


```js
const state = {
  user: {
    id: null,
    name: '', // empty string
    subscribe: false,
    link: '', // empty string
  },
};

```
We want to destructure `user` information.
```js
function getUser() {
  const {
    user: {
      id = 1,
      name = 'Devtools Tech',
      subscribe = true,
      link = 'https://bit.ly/devtools-yt',
    } = {},
  } = state;

  return {
    userId: id,
    name,
    subscribe,
    link,
  };
}

```
Now, what would be the output if we call `getUser`function.

```
console.log(getUser());
```
### Output
```
{
  "userId": null,
  "name": "",
  "subscribe": false,
  "link": ""
}
```
### Explanation
because while destructing of objects, default values would only be assigned when the key doesn't exist or value is `undefined`. If the `state` is the following
```js
const state = {
  user: {
    id: undefined,
    name: undefined,
    subscribe: undefined,
    link: undefined,
  },
};

```
and now if we destructure

```js
function getUser() {
  const {
    user: {
      id = 1,
      name = 'Devtools Tech',
      subscribe = true,
      link = 'https://bit.ly/devtools-yt',
    } = {},
  } = state;

  return {
    userId: id,
    name,
    subscribe,
    link,
  };
}

console.log(getUser());

```

Output would be:

```js
{
  "userId": 1,
  "name": "Devtools Tech",
  "subscribe": true,
  "link": "https://bit.ly/devtools-yt"
}

```

Always remember, `null`, `false`, `''`, and `0` are all still values!

# 21. What would be the output of the following code snippet? [Prototypes & Scopes]
### 


```js
var name = "Puneet";

function Engineer() {
	this.name = "Yomesh";
}

console.log(new Engineer().name);
Engineer.prototype.name = "Saloni";
Engineer.prototype.channel = "https://bit.ly/devtools-yt";
console.log(new Engineer().channel);
console.log(new Engineer().name);

```
### Output
```
Yomesh
https://bit.ly/devtools-yt
Yomesh
```
### Explanation
Final object would look like
```js
{
  name: "Yomesh",
  __proto__: {
    name: "Saloni",
    channel: "https://bit.ly/devtools-yt"
  }
}

```
While searching for property `name`, first look up would be on the direct enumerable properties of the object and since that exists (`this.name = "Yomesh"`), it would be printed. If no direct property is present then `Prototype chain` is traversed and in that case value would be `Saloni`. In case of `channel` property, `Prototype chain` is traversed and value is printed.

# 22. What would be the output of the following code snippet? [ES6 Classes]



```js
function parseData(data) {
  /* Some computation */
  return data;
};

class User {
  constructor(name, data) {
    const parsedData = parseData(data);

    this.name = name;
    this.data = parseData;

    return parsedData;
  }

  getData() {
    return this.data;
  }
}

const yomesh = new User('Yomesh', {
  youtubeChannel: 'https://bit.ly/devtools-yt',
  shouldSubscribe: true
});

// What would be the output of the following statement?
console.log(yomesh.getData());

```
### Output
```
Error
```
### Explanation

because `Class` in JavaScript is (mostly) just syntactical sugar. The underlying working is same as the constructor function. Since, in the code snippet we are creating an instance, using the `new` operator, but returning a non-primitive value from the constructor so implicit `this` will be lost and instance won't have any getData method to call.

# 23. What would be the output? [New Operator | Explicit Non Primitive Return]



```js
function Person(name) {
  this.name = name;

  var person = {
    name: 'Ajay'
  };

  function person() {
    return {
      name: 'Prithvi'
    };
  }

  return person;
}

var yomesh = new Person('Yomesh');
console.log(yomesh);

```
### Output
```
{"name":"Ajay"}
```
### Explanation
```

```

# 24. What would be the output? (Different ways of Prototype calls)
### 


```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
}

var yomesh = new Person('yomesh');

console.log(yomesh.sayName());
console.log(Person.prototype.sayName());
console.log(Object.getPrototypeOf(yomesh).sayName());
console.log(yomesh.__proto__.sayName());

```
### Output
```
yomesh
undefined
undefined
undefined
```
### Explanation

Because in the first case `this === yomesh` and in rest of the cases `this === Person.prototype` during invocation.

# 25. What will be the output of the following code snippet? (in operator)

```js
const first = 2 in [1, 2];
const second = '2' in [0, 1, 2];

console.log(first, second);

```
### Output
```
false true
```
### Explanation

The `in` operator returns `true` if the specified property is in the specified object or its prototype chain. Also remember, property names are strings!

# 26. Switch Statement Output
### 


```js
const a = "1";

switch (+a) {
  case "1":
    console.log("🍕");
    break;
  case 1:
    console.log("🚀");
    break;
  default:
    console.log("👻");
}

```
### Output
```
🚀
```
### Explanation : 



### Matching Cases

Switch uses **strict equality (`===`)** — meaning **type + value** must match.

#### **Case "1"**

```js
case "1":
```

* `"1"` is a **string**
* `1` is a **number**

`1 === "1"` → ❌ **false**

So this case is skipped.

#### **Case 1**

```js
case 1:
```

* `1` === `1` → ✅ **true**

This case runs.

So output is:

```
🚀
```

---

### **Final Output → 🚀**
---

# 27. What would be the output of the following code snippet? (Prototype method invocation)
### 


```js
function Person(name) {
  this.name = name;
}
Person.prototype.getName = () => {
  return this.name;
};
const yomesh = new Person('Yomesh');
console.log(yomesh.getName());

```
### Output
```
Value of the property name on the global object
```
### Explanation

Because the snippet above is using an arrow function for `getName`. Arrow functions cannot create a context and therefore `this` will be the global object in non-strict mode.


# 28. What will be the output for the following question in browser ?

```js
class Pandav {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
}
class Kaurav {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
}
class Guru {
  constructor(name, weapon) {
    this.name = name
  }
}

var Duryodhana = new Kaurav('Duryodhana', 'Gada')
let Arjuna = new Pandav('Arjuna', 'Gandiva')
const Dronacharya = new Guru('Dronacharya')
console.log(
  Arjuna.weapon,
  window.Arjuna,
  Duryodhana.weapon,
  window.Duryodhana,
  Dronacharya.name,
  window.Dronacharya
)

```
### Output
```
Gandiva undefined Gada Kaurav Dronacharya undefined
```
### Explanation


## 🔍 **Key Concept: Global Variables on window**

In the browser:

* `var` variables declared in the global scope → **added to `window`**
* `let` and `const` declared in the global scope → ❌ **NOT added to `window`**

So:

| Variable            | Declaration | Added to `window`? |
| ------------------- | ----------- | ------------------ |
| `var Duryodhana`    | var         | ✅ Yes              |
| `let Arjuna`        | let         | ❌ No               |
| `const Dronacharya` | const       | ❌ No               |

---

## 🔥 Let's evaluate each log value

### **1. `Arjuna.weapon`**

Arjuna = `new Pandav('Arjuna', 'Gandiva')`
So:

```
"Gandiva"
```

---

### **2. `window.Arjuna`**

`Arjuna` was created using **let**, so it's **NOT attached** to window.

```
undefined
```

---

### **3. `Duryodhana.weapon`**

Duryodhana = `new Kaurav('Duryodhana', 'Gada')`

```
"Gada"
```

---

### **4. `window.Duryodhana`**

Because it was declared using **var**, it is added to `window`.

```
Kaurav { name: "Duryodhana", weapon: "Gada" }
```

---

### **5. `Dronacharya.name`**

Guru constructor only stores the name, no weapon.

```
"Dronacharya"
```

---

### **6. `window.Dronacharya`**

Declared using **const**, so not added to window.

```
undefined
```

---

## ✅ **Final Output Will Be:**

```
Gandiva
undefined
Gada
Kaurav {name: "Duryodhana", weapon: "Gada"}
Dronacharya
undefined
```

---

### Follow-up:

* prototype chain of these classes
* how to attach objects manually to window
* how global scope works differently in Node.js vs browser

# 29. What will be the output of the following code snippet? (Based on setTimeout) | JavaScript Quiz
### 


```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}

```
### Output
```
55555
```
### Explanation

## 🔍 What happens?

### **Reason: `var` is function-scoped**

`var i` is **not block-scoped**, so there is only **one shared `i` variable** for the entire loop.

The loop finishes *before* any `setTimeout` callback runs.

After the loop ends:

```
i = 5
```

So when all the callbacks run, they all read the same final value.

## ✅ Output:

```
5
5
5
5
5
```

---

## ✔ How to fix (using `let`):

```js
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
```

Output:

```
0 1 2 3 4
```

Because `let` is block-scoped → each iteration gets its own copy of `i`.

---

## ✔ Another fix (using IIFE closure):

```js
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, 10);
  })(i);
}
```

Same output:

```
0 1 2 3 4
```

---

### Follow-up

1. Changing `var` to `let` which we redeclare `i` on every iteration.
```js
for (let i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 10);
}

```
2. Returning an inner function and using closures.

```js
for (var i = 0; i < 5; i++) {
	setTimeout(function(i) {
		return function() { console.log(i); }
	}(i), 10);
}

```
# 30. What is the time complexity of the following code snippet?
### 


```js
function findIntersection(first, second) {
  const firstSet = new Set(first);

  return second.reduce((acc, current) => {
    return firstSet.has(current) ? [...acc, current] : acc;
  }, []);
}

function init() {
  const first = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const second = [1, 2, 3, 4, 5];
  console.log(findIntersection(first, second));
}

```
### Output
```
O(n^2)
```
### Explanation
Because
``` js
// loops n times i.e. O(n)
return second.reduce((acc, current) => {
    // spread operator operation would be O(n) every time
	return firstSet.has(current) ? [...acc, current] : acc;
}, []);

```
Hence, overall time complexity would be `O(n^2)`.

P.S. This is not the best way to find intersection and approach can be improved so please do not use this code anywhere. Code is written in a certain way to test logic.



# 31. What would be the output of the following snippet? (Based on Arithmetic operators)
### 


```js
let x = 1;

do {
  let y = --x;
  console.log(x++ + --y);
} while (x++ < 5);

```
### Output
```
-1
1
3
5
7
```
### Explanation
---

## 🧠 Step-by-step dry run

### **Initial**

```
x = 1
```

---

## ✅ **Iteration 1**

```
y = --x   → x = 0, y = 0
console.log(x++ + --y)
```

* `x++` → returns **0**, then x becomes **1**
* `--y` → y becomes **-1**

Result:

```
0 + (-1) = -1
```

**After while check:**
`x++ < 5` → compares **1 < 5 = true**, then x becomes **2**

---

## ✅ **Iteration 2** (x = 2)

```
y = --x → x = 1, y = 1
console.log(x++ + --y)
```

* `x++` → returns **1**, x becomes **2**
* `--y` → y = 0

Result:

```
1 + 0 = 1
```

**While check:**
`x++ < 5` → 2 < 5 = true → x becomes **3**

---

## ✅ **Iteration 3** (x = 3)

```
y = --x → x = 2, y = 2
console.log(x++ + --y)
```

* `x++` → 2 (then x = 3)
* `--y` → 1

Result:

```
2 + 1 = 3
```

**While:**
`3 < 5 = true`, x becomes **4**

---

## ✅ **Iteration 4** (x = 4)

```
y = --x → x = 3, y = 3
console.log(x++ + --y)
```

* `x++` → 3 (then x = 4)
* `--y` → 2

Result:

```
3 + 2 = 5
```

**While:**
`4 < 5 = true`, x becomes **5**

---

## ✅ **Iteration 5** (x = 5)

```
y = --x → x = 4, y = 4
console.log(x++ + --y)
```

* `x++` → 4 (then x = 5)
* `--y` → 3

Result:

```
4 + 3 = 7
```

**While:**
`5 < 5 = false`, loop ends.

---

## 🎉 **Final Output**

```
-1
1
3
5
7
```

# 32. What is the use of the <noscript> tag in Javascript?
### In the question, you need to select the correct behavior of the noscript tag.

### Output
```
The <noscript> tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script.
```
### Explanation
```

```

# 33. What do you think would be the output? [HTML Collection | NodeList]
### Suppose we have the following HTML structure.


```js
<div>Hello World</div>
<div>How are you?</div>

```

### What would be the output if we run the following code snippet?
```js
var divs = document.getElementsByTagName("div");

for ( var i = 0; i<divs.length; i++ ) {
	divs[i].appendChild(document.createElement("div"));
}

console.log(divs.length);


```

### Output

```
Infinite
```

### Explanation

This would lead to an infinite loop as `document.getElementsByClassName()` is an `HTMLCollection` and is live.


# 34. What is the output of the following? (Exotic Array Objects JavaScript)
### 


```js
let items = [];

items[null] = "foo";
console.log(items.length);
items[100] = "bar";
console.log(items.length);

```
### Output
```
0
101
```
### Explanation
```
Arrays are exotic objects in JavaScript and they behave differently than ordinary objects. To know more about this behavior, checkout: https://www.youtube.com/watch?v=-5Nmn68xxSU
```



# 35. Difference between Defer and Async keywords?
### What are the differences between the keyword async and defer?


```js
<p>Hello World</p>

<script type="text/javascript" src="/script2.js" async></script>
<script type="text/javascript" src="/script1.js" defer></script>
<script type="text/javascript" src="/script3.js" defer></script>
<script type="text/javascript" src="/script4.js" async></script>

```
### Output
```
Defer:
1. Execute after the document is loaded and parsed (they wait if needed), right before DOMContentLoaded.
2. Order of execution matters.
3. Does not blocks parsing of the page.
4. Used for scripts that need the whole DOM and/or their relative execution order is important.

Async:
1. May load and execute while the document has not yet been fully downloaded.
2. Load first order -- executes which ever scripts loads first.
3. Blocks Parsing of the page.
4. Used for independent scripts, like counters or ads. And their relative execution order does not matter.
```
### Explanation
```
Learn here: https://medium.com/@puneetahuja_23950/script-tag-defer-and-async-2aa3cc82e5cb
```
# 36. What would be the output? (Array sum problem)
### 


```js
function sum(first, ...middle, last) {
  return first + middle.reduce((acc, num) => acc + num, 0) + last;
}

console.log(sum(1, 2, 3, 4, 5));

```
### Output
```
Uncaught Error
```
### Explanation
 Because the above code snippet will throw an error `Uncaught SyntaxError: Rest parameter must be last formal parameter` i.e. Rest parameter should always be the last parameter in function definition as it combines all the remaining arguments into an array.


# 37. What would be the output? (Based on setTimeout)
### 


```js
function sayName() {
  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}
sayName.call({
  name: 'Yomesh'
});

```
### Output
```
Yomesh
```
### Explanation

Because we are passing an arrow function to the `setTimeout`. Arrow functions retains the scope of their definition. Hence, when the arrow function will be called then context will be same as `sayName` function.


# 38. Would the output be the same for the following code snippet?


```js
var nums1 = [1, 2, 3, 4];
var squared1 = nums1.map(x => x * x);

var nums2 = new Array(4);
nums2 = nums2.map((x, i) => i + 1);
var squared2 = nums2.map(x => x * x);

console.log(squared1, squared2);

```

Output of the both arrays would be the same? As in `[1, 4, 9, 16]`?

### Output
```
No
```
### Explanation
Output of both the arrays would be not be the same.

```js
squared1 array - [1, 4, 9, 16]
squared2 array - [empty x 4]
```

When we create an array using the Array constructor providing the length of the array as argument then it returns empty slots as array elements. Function like map, forEach checks if the property/key exists on the array and then only invokes the passed callback. Hence, we will get the value of `squared2` as `[empty x 4]`.

To fix this, we either copy the array or use `.fill`.

```js
var nums2 = new Array(4);
nums2 = [...nums2];

or

var nums2 = new Array(4).fill(0);

```

# 39. What would be the output? (Based on Temporal Dead Zone)


```js
var firstname = computeName();

let name = "Yomesh";

function computeName() {
  return `${name} Gupta`;
}

console.log(firstname);

```
### Output
```
Error
```
### Explanation
Answer would be `Uncaught ReferenceError: name is not defined` as in the line no. 1 `computeName()` call jumps control flow to the execution of the function which tries to access the variable `name` which is still in the `Temporal Dead Zone`. Hence, it is not accessible.

To know more, visit -- https://medium.com/@yomesh.gupta/understanding-temporal-dead-zone-in-javascript-53a735a682

---

# 40. What would be the output? (Based on Array prototype forEach)
### 


```js
var first = [1, , 3];

var second = [...first];

first.forEach((value, index) => {
  console.log(index, value);
});

second.forEach((value, index) => {
  console.log(index, value);
});

```
### Output
```
0 1
2 3
0 1
1 undefined
2 3
```
### Explanation
because the length of the first array would be `3`. `first` is a sparse array i.e. array with empty slots in between. The indices in sparse array itself doesn't exist rather than having `undefined` as value.

```js
console.log(first.length); // 3

first[0] -- 1
first[1] -- empty slot
first[2] -- 3

Since the array is just an object then its representation would be
// first
{
    "0": 1,
    "2": 3
}

```
Now, when we use the spread operator to create a copy then it will iterate over the array as in `i: 0 to n - 1` and set the value `second[i] = first[i]`. Since, when we access empty slots in an array then the returned value would be `undefined`, therefore, `second[1]` would be `undefined`. By spreading, we just created a dense array.

```js
// second
{
    "0": 1,
    "1": undefined,
    "2": 3
}

```

`Array.prototype.forEach` iterates over the array and check if the indices exist in the array. If yes, then only callback will be invoked with index & value as arguments.

To know more --

https://github.com/v8/v8/blob/ca6e40d7ba853319c15196fef3f4536c8b3929fe/src/js/array.js#L1059

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


# 41. What will be the output for the following?
### 


```js
function kidsLove(x) {
  console.log(x);
}
["JavaScript","Python"].forEach(num=>kidsLove(num));

const menLove=function(x) {
  console.log(x);
};
["C++","Java"].forEach(num=>menLove(num));

const legendsLove = (x) => {
  console.log(x);
};
["01010"].forEach(num=>legendsLove(num));

```
### Output
```
JavaScript 
Python
C++
Java
01010
```
### Explanation
```

```

# 42. What would be the output of the following code snippet? | Promise Based Output Question | Part Three
### 


```js
function processing() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject("Failed");
    resolve(2);
    console.log("After resolve/reject");
  });
}

function init() {
  processing()
    .then((v) => console.log(v + 1))
    .catch((err) => console.log(err));
}

init();

```
### Output
```
After resolve/reject
2
```
### Explanation
Because `resolve` and `reject` doesn't work like `return`. Even if they are called, the function completes its execution. Hence, `console.log` will be called even though `resolve/reject` is already invoked before and `.then callback` will be called after that. Yes, `resolve/reject` will be called once as per order of invocation.

P.S. There is an exception and we will discuss that in further questions.

# 43. What would be the output of the following code snippet? | Promise Based Output Question | Part Two
### 


```js
function processing() {
  return new Promise((resolve, reject) => {
    resolve(1);
    reject("Failed");
    resolve(2);
  });
}

function init() {
  processing()
    .then((v) => console.log(v + 1))
    .catch((err) => console.log(err));
}

init();

```
### Output
```
2
```
### Explanation
Answer would be `2` because the `resolve` or `reject` only execute once in the order they are called. No matter if there is a `reject` after `resolve` or vice versa it won't be executed.

# 44. What will be the output for the following question (Copying in JavaScript)?

```js
let saiyan = {
  name: "Vegeta",
  chiBlasts: {
    low: "Big bang attack",
    med: "Gallic gun",
    high: "Final flash",
  },
};

let anotherSaiyan = { ...saiyan };
anotherSaiyan.name = "Goku";
anotherSaiyan.chiBlasts.high = "Spirit Bomb";

let sonOfSaiyan = Object.assign({}, saiyan);
sonOfSaiyan.name = "Trunks";
sonOfSaiyan.chiBlasts.high = "Finish Buster";

let sonOfAnotherSaiyan = JSON.parse(JSON.stringify(anotherSaiyan));
sonOfAnotherSaiyan.name = "Gohan";
sonOfAnotherSaiyan.chiBlasts.high = "Kamehameha";

console.log(
  saiyan.name,
  anotherSaiyan.name,
  sonOfSaiyan.name,
  sonOfAnotherSaiyan.name
);
console.log(
  saiyan.chiBlasts.high,
  anotherSaiyan.chiBlasts.high,
  sonOfSaiyan.chiBlasts.high,
  sonOfAnotherSaiyan.chiBlasts.high
);

```
### Output
```
Vegeta Goku Trunks Gohan
Finish Buster Finish Buster Finish Buster Kamehameha
```
### Explanation
```

```

# 45. What would be the output of the following? (Based on IIFE in JS)
### 


```js
(function () {
  var first = second = 5;
})();

console.log(second);

```
### Output
```
5
```
### Explanation
The answer would be 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because

```js
var first = second = 5;
```

is interpreted the following way:

```js
var first = second;
second = 5;
```

But `second` is not declared anywhere in the function with `var` so it is set equal to `5` in the global scope.


# 46. What will be the output for below in the browser?
### 


```js
"use strict";

let foo = {
  barX: function () {
    console.log(this);
  },
  barY: () => {
    console.log(this);
  },
};

let barX = foo.barX;
let barY = foo.barY;

foo.barX(); // Output1?
foo.barY(); // Output2?
barX(); // Output3?
barY(); // Output4?

```
### Output
```

```
### Explanation
```

```






---------------------------



# 
### 


```js

```
### Output
```

```
### Explanation
```

```