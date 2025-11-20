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