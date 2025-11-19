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

# How the comparison happens with switch cases in JavaScript?
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

# What would be the output? [New Operator | Explicit Primitive Return]
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