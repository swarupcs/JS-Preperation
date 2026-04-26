https://github.com/Devinterview-io/express-interview-questions

# Top 58 Express.js Interview Questions in 2025.

<div>
<p align="center">
<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>

#### You can also find all 58 answers here 👉 [Devinterview.io - Express.js](https://devinterview.io/questions/web-and-mobile-development/express-interview-questions)

<br>

## 1. What is _Express.js_, and how does it relate to _Node.js_?

**Express.js** is a web application framework that runs on **Node.js**. It simplifies the process of building web applications and APIs by providing a range of powerful features, including robust routing, middleware support, and HTTP utility methods. Thanks to its modular design, you can expand its functionality through additional libraries and Node.js modules.

### Key Features

- **Middleware**: Express.js makes use of middleware functions that have access to the request-response cycle. This allows for a variety of operations such as logging, authentication, and data parsing.

- **Routing**: The framework offers a flexible and intuitive routing system, making it easy to handle different HTTP request methods on various URLs.

- **Templates**: Integrated support for template engines enables the dynamic rendering of HTML content.

- **HTTP Methods**: It provides built-in methods for all HTTP requests, such as `get`, `post`, `put`, `delete`, simplifying request handling.

- **Error Handling**: Express streamlines error management, and its middleware functions can specifically handle errors.

- **RESTful APIs**: Its features such as request and response object chaining, along with HTTP method support, make it ideal for creating RESTful APIs.

### Relationship with Node.js

Express.js is a web application framework specifically designed to extend the capabilities of **Node.js** for web development. Node.js, on the other hand, is a cross-platform JavaScript runtime environment that allows developers to build server-side and networking applications.

Express.js accomplishes this through a layer of abstractions and a more structured approach, which Node.js, by itself, doesn't provide out of the box.

### Code Example: Basic Express Server

Here is the Node.js code:

```javascript
// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000;

// Define a route and its callback function
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```
<br>

## 2. Explain the concept of _middleware_ in _Express.js_.

**Middleware** acts as a bridge between incoming HTTP requests and your Express.js application, allowing for a range of operations such as parsing request bodies, handling authentication, and even serving static files.

### Middleware Functions

A middleware function in Express is a **handler invoked in sequence** when an HTTP request is received. It has access to the request and response objects, as well as the `next` function to trigger the next middleware in line.

Each middleware function typically follows this signature:

```javascript
function middlewareFunction(req, res, next) {
    // ...middleware logic
    next(); // or next(err); based on whether to proceed or handle an error
}
```

Note that the `next()` call is essential to move on to the next middleware.

### Types of Middleware

#### Application-Level Middleware

Registered via `app.use(middlewareFunction)`, it's active for every incoming request, making it suitable for tasks like request logging or establishing cross-cutting concerns.

#### Router-Level Middleware

Operates on specific router paths and is defined using `router.use(middlewareFunction)`. It's useful for tasks related to particular sets of routes.

#### Error-Handling Middleware

Recognizable via its function signature `(err, req, res, next)`, this type of middleware specifically handles errors. In the middleware chain, it should be placed after regular middlewares and can be added using `app.use(function(err, req, res, next) { ... })`.

#### Built-In Middleware

Express offers ready-to-use middleware for tasks like serving static files or parsing the request body.

### Middleware Chaining

By **sequentially** calling `next()` within each middleware, you form a chain, facilitating a cascade of operations for an incoming request.

Consider a multi-tiered security setup, for example, with authentication, authorization, and request validation. Only when a request passes through all three tiers will it be processed by the actual route handler.

### Code Example: Middleware Chaining

Here is the code:

```javascript
const express = require('express');
const app = express();

// Sample middleware functions
function authenticationMiddleware(req, res, next) {
    console.log('Authenticating...');
    next();
}

function authorizationMiddleware(req, res, next) {
    console.log('Authorizing...');
    next();
}

function requestValidationMiddleware(req, res, next) {
    console.log('Validating request...');
    next();
}

// The actual route handler
app.get('/my-secured-endpoint', authenticationMiddleware, authorizationMiddleware, requestValidationMiddleware, (req, res) => {
    res.send('Welcome! You are authorized.');
});

app.listen(3000);
```
<br>

## 3. How would you set up a basic _Express.js_ application?

To set up a **basic Express.js** application, follow these steps:

### 1. Initialize the Project

Create a new directory for your project and run `npm init` to generate a `package.json` file.

### 2. Install Dependencies

Install **Express** as a dependency using the Node Package Manager (NPM):
```bash
npm install express
```

### 3. Create the Application

In your project directory, create a main file (usually named `app.js` or `index.js`) to set up the Express application.

Here is the JavaScript code:

```javascript
// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### 4. Run the Application

You can start your Express server using Node.js:
```bash
node app.js
```

For convenience, you might consider using **Nodemon** as a development dependency which automatically restarts the server upon file changes.
<br>

## 4. What is the purpose of the `app.use()` function?

In Express.js, the `app.use()` function is a powerful tool for **middleware management**. It can handle HTTP requests and responses, as well as prepare data or execute processes in between.

### Key Functions

- **Global Middleware**: Without a specified path, the middleware will process every request.
- **Route-specific Middleware**: When given a path, the middleware will only apply to the matched routes.

### Common Use-Cases

- **Body Parsing**: To extract data from incoming requests, especially useful for POST and PUT requests.

  ```javascript
  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  ```

- **Handling CORS**: Useful in API applications to manage cross-origin requests.

  ```javascript
  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });
  ```

- **Static File Serving**: For serving files like images, CSS, or client-side JavaScript.

  ```javascript
  app.use(express.static('public'));
  ```

- **Logging**: To record request details for debugging or analytics.

  ```javascript
  app.use(function(req, res, next) {
      console.log(`${new Date().toUTCString()}: ${req.method} ${req.originalUrl}`);
      next();
  });
  ```

- **Error Handling**: To manage and report errors during request processing.

  ```javascript
  app.use(function(err, req, res, next) {
      console.error(err);
      res.status(500).send('Internal Server Error');
  });
  ```

### Chaining Middleware

You can **stack multiple middleware** using `app.use()` in the order they need to execute. For a matched route, control can be passed to the next matching route or terminated early using `next()`.
<br>

## 5. How do you serve _static files_ using _Express.js_?

In an Express.js **web application**, you often need to **serve static files** such as stylesheets, client-side JavaScript, and images. You can accomplish this using the `express.static` middleware.

### Middleware for Serving Static Files

The `express.static` middleware function serves static files and is typically used to serve assets like images, **CSS**, and **client-side JavaScript**.

Here is the code example:

```javascript
app.use(express.static('public'));
```

In this example, the folder named `public` will be used to serve the static assets.

### Additional Configuration with Method Chaining

You can further configure the behavior of the `express.static` middleware by chaining methods.

For example, to set the cache-control header, the code looks like this:

```javascript
app.use(express.static('public', {
    maxAge: '1d'
}));
```

Here, the `'1d'` ensures that caching is enabled for a day.

### Using a Subdirectory

If you want to serve files from a subdirectory, you can specify it when using the `express.static` middleware.

Here is the code example:

```javascript
app.use('/static', express.static('public'));
```

This serves the files from the `public` folder but any requests for these files should start with `/static`.

### What `express.static` Serves

- **Images**: PNG, JPEG, GIF
- **Text Content**: HTML, CSS, JavaScript
- **Fonts**
- **JSON Data**

#### Not for dynamic content

While `express.static` is excellent for **static assets**, it's not suitable for dynamic content or data in **POST** requests.
<br>

## 6. Discuss the difference between `app.get()` and `app.post()` in _Express.js_.

In **Express.js**, `app.get()` and `app.post()` are two of the most commonly used HTTP method middleware. The choice between them (or using both) typically depends on whether you are **retrieving** or **submitting/persisting** data.

### Key Distinctions

#### HTTP Verbs: External Visibility

- **app.get()**: Listens for GET requests. Designed for data retrieval. Visible URLs typically trigger such requests (e.g., links or direct URL entry in the browser).

- **app.post()**: Listens for POST requests. Intended for data submission. Typically not visible in the URL bar, commonly used for form submissions.

#### Data Transmission

- **app.get()**: Uses query parameters for data transmission, visible in the URL. Useful for simple, non-sensitive, read-only data (e.g., filtering or pagination). 

- **app.post()**: Uses request body for data transmission, which can be in various formats (e.g., JSON, form data). Ideal for more complex data, file uploads, or sensitive information.

### Using Both `app.get()` and `app.post()` for the Same Route

There are cases, especially for **RESTful** design, where a single URL needs to handle both data retrieval and data submission.

- **Resource Retrieval and Creation**: 
   - **Fetch a Form**: Use `app.get()` to return a form for users to fill out.
   - **Form Submission**: Use `app.post()` to process and save the submitted form data.
- **Complete Entity Modification**: For a complete update (or replacement in REST), using `app.post()` ensures that the update action is triggered via a post request, not a get request. This distiction is important to obey the RESTful principles. 

### Code Example: Using both `app.get()` and `app.post()` for a single route

Here is the JavaScript code:
```javascript
const userRecords = {}; // in-memory "database" for the sake of example

// Handle user registration form
app.get('/users/register', (req, res) => {
    res.send('Please register: <form method="POST"><input name="username"></form>');
});

// Process submitted registration form
app.post('/users/register', (req, res) => {
    userRecords[req.body.username] = req.body;
    res.send('Registration complete');
});
```
<br>

## 7. How do you retrieve the _URL parameters_ from a _GET request_ in _Express.js_?

In **Express.js**, you can extract **URL parameters** from a **GET** request using the `req.params` object. Here's a quick look at the steps and the code example:

### Code Example: Retrieving URL Parameters

```javascript
// Sample URL: http://example.com/users/123
// Relevant Route: /users/:id

// Define the endpoint/route
app.get('/users/:id', (req, res) => {
    // Retrieve the URL parameter
    const userId = req.params.id;
    // ... (rest of the code)
});
```

In this example, the URL parameter `id` is extracted and used to fetch the corresponding user data.

### Additional Steps for Complex GET Requests

For simple and straightforward **GET** requests, supplying URL parameters directly works well. However, for more complex scenarios, such as parsing parameters from a URL with the help of `querystrings` or handling optional parameters, **Express.js** offers more advanced techniques which are outlined below:

#### Parsing Query Parameters

- **What It Is**: Additional data passed in a URL after the `?` character. Example: `http://example.com/resource?type=user&page=1`.

- **How to Access It**: Use `req.query`, an object that provides key-value pairs of the parsed query parameters.

#### Code Example: Parsing Query Parameters

```javascript
app.get('/search', (req, res) => {
    const { q, category } = req.query;
    // ... (rest of the code)
});
```

#### Optional and Catch-All Segments

- **Optional Segments**: URL segments enclosed in parentheses are optional and can be accessed using `req.params`. Example: `/book(/:title)`

- **Catch-All Segments**: Captures the remainder of the URL and is useful in cases like URL rewriting. Denoted by an asterisk (`*`) or double asterisk (`**`). Accessed using `req.params` as well. Example: `/documents/*`
<br>

## 8. What are _route handlers_, and how would you implement them?

**Route handlers** in Express.js are middleware functions designed to manage specific paths in your application.

Depending on the HTTP method and endpoint, they can perform diverse tasks, such as data retrieval from a database, view rendering, or HTTP response management.

### Code Example: Setting Up a Simple Route Handler

Here is the code:

```javascript
// Responds with "Hello, World!" for GET requests to the root URL (/)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

In this example, the route handler is `(req, res) => { res.send('Hello, World!'); }`. It listens for GET requests on the root URL and responds with "Hello, World!".

### What Are Route-Handler Chains?

You can associate numerous route-managing **middleware functions** to a single route. Every middleware function in the chain has to either proceed to the following function using `next()` or conclude the request-response cycle.

This allows for checks like user authentication before accessing a route.

### HTTP Method Convenience Methods

Express.js offers specialized, highly-readable methods for the most common HTTP requests:

- `app.get()`
- `app.post()`
- `app.put()`
- `app.delete()`
- `app.use()`

These methods streamline route handling setup.
<br>

## 9. How do you enable _CORS_ in an _Express.js_ application?

**Cross-Origin Resource Sharing** (CORS) is a mechanism that allows web pages to make requests to a different domain. In Express.js, you can enable CORS using the `cors` package or by setting headers manually.

### Using the `cors` Package

1. **Install `cors`**:

   Use npm or yarn to install the `cors` package.

   ```bash
   npm install cors
   ```

2. **Integrate with Your Express App**:

   Use the `app.use(cors())` middleware. You can also customize CORS behavior with options.

   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();

   // Enable CORS for all routes
   app.use(cors());

   // Example: Enable CORS only for a specific route
   app.get('/public-data', cors(), (req, res) => {
       // ...
   });

   // Example: Customize CORS options
   const customCorsOptions = {
       origin: 'https://example.com',
       optionsSuccessStatus: 200 // Some legacy browsers choke on 204
   };

   app.use(cors(customCorsOptions));
   ```

### Manual CORS Setup

Use the following code example to **set CORS headers manually** in your Express app:

```javascript
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
});
```

Make sure to place this middleware before your route definitions.
<br>

## 10. Explain the use of `next()` in _Express.js middleware_.

In Express.js, **middleware** functions are crucial for handling HTTP requests. A single request can pass through multiple middlewares before reaching its endpoint, providing opportunities for tasks like logging, data parsing, and error handling. The `next()` function is instrumental in this process, allowing for both regular middleware chaining and special error handling.

### What is `next()`?

- `next()`: A callback function that, when called within a middleware, passes control to the next middleware in the stack.
- `next()` is typically invoked to signal that a middleware has completed its tasks and that the request should move on to the next middleware.
- If a middleware doesn't call `next()`, the request flow can get **stuck**, and the subsequent middlewares won't be executed.

### Use-Cases

1. **Regular Flow**: Invoke `next()` to move the request and response objects through the middleware stack.
2. **Error Handling**: If a middleware detects an error, it can short-circuit the regular flow and jump directly to an error-handling middleware (defined with `app.use(function(err, req, res, next) {})`). This is achieved by calling `next(err)`, where `err` is the detected error.

### Code Example: Logging Middleware

Here is the code:

```javascript
const app = require('express')();

// Sample middleware: logs the request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Move to the next middleware
});

// Sample middleware: logs the current UTC time
app.use((req, res, next) => {
    console.log(new Date().toUTCString());
    next(); // Move to the next middleware
});

app.listen(3000);
```

In this example, both middlewares call `next()` to allow the request to progress to the next logging middleware and eventually to the **endpoint** (not shown, but would be the next in the chain).

Without the `next()` calls, the request would get **stuck** after the first middleware.
<br>

## 11. What is the role of the `express.Router` class?

The `express.Router` is a powerful tool for **managing multiple route controllers**. It helps in organizing routes and their handling functions into modular, self-contained groups.

### Key Features

- **Modularity**: Rely on separate route modules for improved code organization, maintainability, and collaboration.

- **Middlewares**: Like the main `express` app, the router can also use middlewares to process incoming requests.

- **HTTP Method Chaining**: Simplifies route handling by allowing method-specific routes to be defined using method names.

#### Example: Middleware and Route Handling

Here is the Node.js code:

```javascript
const express = require('express');
const router = express.Router();

// Logger Middleware
router.use((req, res, next) => {
  console.log('Router-specific Request Time:', Date.now());
  next();
});

// "GET" method route
router.get('/', (req, res) => {
  res.send('Router Home Page');
});

// "POST" method route
router.post('/', (req, res) => {
  res.send('Router Home Page - POST Request');
});

module.exports = router;
```

In this example, we:

- Utilize the built-in `express.Router`.
- Attach a general-purpose middleware and two different HTTP method-specific routes.
- The router is then integrated into the main `express` app using:

```javascript
const app = express();
const router = require('./myRouterModule');

app.use('/routerExample', router);
```

Here, `app.use('/routerExample', router);` assigns all routes defined in the router to `/routerExample`.
<br>

## 12. How do you handle _404 errors_ in _Express.js_?

**Handling 404 errors** in Express is essential for capturing and responding to requests for non-existent resources. You typically use both **middleware** and **HTTP response** mechanisms for this purpose.

### Middleware for 404s

1. Use `app.use` at the end of the middleware chain to capture unresolved routes.
2. Invoke the middleware with `next()` and an `Error` object to forward to the error-handling middleware.

Here is the Node.js code example:

```javascript
app.use((req, res, next) => {
    const err = new Error(`Not Found: ${req.originalUrl}`);
    err.status = 404;
    next(err);
});
```

### Error-Handling Middleware for 404s and Other Errors

1. Define an error-handling middleware with **four** arguments. The first one being the `error` object.
2. Check the error's status and respond accordingly. If it's a 404, handle it as a not-found error; otherwise, handle it as a server error.

Here is the Node.js code:

```javascript
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).send(message);
});
```

### Full Example: 

Here is the complete Node.js application:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Sample router for demonstration
const usersRouter = express.Router();
usersRouter.get('/profile', (req, res) => {
    res.send('User Profile');
});
app.use('/users', usersRouter);

// Capture 404s
app.use((req, res, next) => {
    const err = new Error(`Not Found: ${req.originalUrl}`);
    err.status = 404;
    next(err);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```
<br>

## 13. What are the differences between `req.query` and `req.params`?

In Express.js, `req.query` is used to access **GET** request parameters, while `req.params` is used to capture parameters defined in the **URL path**.

### Understanding Express.js Routing

Express.js uses **app.get()** and similar functions to handle different types of HTTP requests.

- **app.get('/users/:id')**: Matches GET requests to `/users/123` where `123` is the `:id` parameter in the path.

### Accessing Request Data

- **req.query**: Utilized to extract query string parameters from the request URL. Example: For the URL `/route?id=123`, use `req.query.id` to obtain `123`.
- **req.params**: Used to retrieve parameters from the request URL path. For the route `/users/:id`, use `req.params.id` to capture the ID, such as for `/users/123`.

### Code Example: Request Data

Here is the Express.js server setup:

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Endpoint to capture query string parameter
app.get('/query', (req, res) => {
  console.log(req.query);
  res.send('Received your query param!');
});

// Endpoint to capture URL parameter
app.get('/user/:id', (req, res) => {
  console.log(req.params);
  res.send('Received your URL param!');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
```
<br>

## 14. Describe the purpose of `req.body` and how you would access it.

In an Express.js application, `req.body` is a property of the **HTTP request object** that contains data submitted through an HTTP POST request.

The POST request might originate from an HTML form, a client-side JavaScript code, or another API client. The data in `req.body` is typically structured as a JSON object or a URL-encoded form.

### Middleware and Parsing Request Body

The `express.json()` and `express.urlencoded()` middleware parse incoming `Request` objects before passing them on. These middlewares populate `req.body` with the parsed JSON and URL-encoded data, respectively.

Here is an example of how you might set up body parsing in an Express app:

```javascript
const express = require('express');
const app = express();

// Parse JSON and URL-encoded data into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### Accessing `req.body` Data

Once the body parsing middleware is in place, you can access the parsed data in your **route handling** functions:

- **POST** or **PUT** Requests: When a client submits a POST or PUT request with a JSON payload in the request body, you can access this data through `req.body`.

Here is an example:

Client-side JavaScript:

```javascript
fetch('/example-route', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
});
```

Server-side Express route handler:

```javascript
app.post('/example-route', (req, res) => {
  console.log(req.body); // Outputs: { key: 'value' }
});
```

- **HTML Forms**: When a form is submitted using `<form>` with `action` pointing to your Express route and `method` as POST or PUT, and the form fields are input elements within the form, `req.body` will contain these form field values.

Here is an example:

HTML form:

```html
<form action="/form-endpoint" method="POST">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Submit</button>
</form>
```

Express route:

```javascript
app.post('/form-endpoint', (req, res) => {
  console.log(req.body.username, req.body.password);
});
```

A modern technique for sending form data using `fetch` is by setting the `Content-Type` header to `'application/x-www-form-urlencoded'` and using the `URLSearchParams` object:

```javascript
fetch('/form-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({ username: 'user', password: 'pass' })
});
```

- **Custom Parsers**: While Express provides built-in body parsers for JSON and URL-encoded data, you might receive data in another format. In such cases, you can create custom middleware to parse and shape the data as needed. This middleware should populate `req.body`.
<br>

## 15. How do you create a _middleware_ that logs the _request method_ and _URL_ for every request?

In Express.js, **middlewares** allow you to handle HTTP requests. Here, you will learn how to create a simple **logging middleware** that records the request method and URL.

### Setting Up the Express App

First, install Express via npm, and set up your `app.js` file:

```javascript
const express = require('express');
const app = express();
```

### Creating the Logging Middleware

Define a logging function that extracts the request method and URL, and then use `app.use()` to mount it as middleware.

```javascript
// Logging Middleware
const logRequest = (req, res, next) => {
  console.log(`Received ${req.method}  request for: ${req.url}`);
  next(); // Call next to proceed to the next middleware
};

// Mount the middleware for all routes
app.use(logRequest);
```

### Testing the Setup

Use `app.get()` to handle GET requests, and `app.listen()` to start the server.

```javascript
// Sample route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

When you visit `http://localhost:3000/` in your browser and check the server console, you should see the request being logged.
<br>

Here are the answers for questions 16–58 in the same format:

---

## 16. Explain how you would implement _nested routes_ in _Express.js_.

**Nested routes** in Express.js are achieved using `express.Router()` to create modular route handlers that can be mounted under a parent path.

### Approach

- Create a **child router** for the nested resource
- Mount it under a **parent router** using `router.use()`
- Mount the parent router on the **app**

### Code Example

```javascript
const express = require('express');
const app = express();

// Child router for comments
const commentRouter = express.Router({ mergeParams: true });

commentRouter.get('/', (req, res) => {
  res.send(`Get all comments for post ${req.params.postId}`);
});

commentRouter.post('/', (req, res) => {
  res.send(`Create comment for post ${req.params.postId}`);
});

// Parent router for posts
const postRouter = express.Router();

postRouter.get('/', (req, res) => res.send('Get all posts'));
postRouter.get('/:postId', (req, res) => res.send(`Get post ${req.params.postId}`));

// Mount child router under parent
postRouter.use('/:postId/comments', commentRouter);

// Mount parent router on app
app.use('/posts', postRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
```

> **Note:** `mergeParams: true` is essential on the child router so it can access params from the parent route (e.g., `postId`).

<br>

## 17. How can you _capture_ and _respond_ to _URL parameters_ in a route?

Express.js provides two mechanisms for capturing dynamic values from a URL: **route parameters** and **query strings**.

### Route Parameters

Defined with a colon prefix (`:paramName`) in the route path, accessible via `req.params`.

```javascript
const express = require('express');
const app = express();

// Single parameter
app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ message: `Fetching user ${userId}` });
});

// Multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});

app.listen(3000);
```

### Query Parameters

Appended to the URL after `?`, accessible via `req.query`.

```javascript
// GET /search?term=express&page=2
app.get('/search', (req, res) => {
  const { term, page = 1 } = req.query;
  res.json({ term, page });
});
```

### Optional Parameters

Use `?` after the param name to make it optional.

```javascript
app.get('/users/:userId/:role?', (req, res) => {
  const { userId, role = 'guest' } = req.params;
  res.json({ userId, role });
});
```

<br>

## 18. How do you serve different _content types_ (e.g., JSON, HTML) with _Express.js responses_?

Express provides several response methods that automatically set the appropriate `Content-Type` header.

### Common Response Methods

| Method | Content-Type | Use Case |
|---|---|---|
| `res.json()` | `application/json` | API responses |
| `res.send()` | Auto-detected | Strings, Buffers, Objects |
| `res.render()` | `text/html` | Template engines |
| `res.sendFile()` | Based on file extension | Static files |

### Code Example

```javascript
const express = require('express');
const path = require('path');
const app = express();

// JSON response
app.get('/api/users', (req, res) => {
  res.json({ users: [{ id: 1, name: 'Alice' }] });
});

// HTML response
app.get('/html', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

// File response
app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Content negotiation using Accept header
app.get('/data', (req, res) => {
  const data = { message: 'Hello' };
  res.format({
    'application/json': () => res.json(data),
    'text/html': () => res.send(`<p>${data.message}</p>`),
    default: () => res.status(406).send('Not Acceptable')
  });
});

app.listen(3000);
```

<br>

## 19. What are best practices for structuring a large _Express.js_ application with multiple routes?

A well-structured Express.js application separates concerns and keeps code modular and maintainable.

### Recommended Folder Structure

```
project/
├── src/
│   ├── config/          # Environment and app config
│   ├── controllers/     # Route handler logic
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   └── app.js           # App setup
├── tests/
└── server.js            # Entry point
```

### Code Example

```javascript
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, userController.getAllUsers);
router.get('/:id', authMiddleware, userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;

// controllers/userController.js
const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
```

<br>

## 20. Explain the concept and use of _built-in middleware_ in _Express.js_.

Express 4.x includes several **built-in middleware** functions that handle common tasks without needing third-party packages.

### Built-In Middleware Functions

| Middleware | Purpose |
|---|---|
| `express.json()` | Parses incoming JSON request bodies |
| `express.urlencoded()` | Parses URL-encoded form data |
| `express.static()` | Serves static files |
| `express.raw()` | Parses raw Buffer request bodies |
| `express.text()` | Parses plain text request bodies |

### Code Example

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (HTML form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files under a virtual path prefix
app.use('/static', express.static(path.join(__dirname, 'assets')));

app.post('/api/data', (req, res) => {
  console.log(req.body); // Available thanks to express.json()
  res.json({ received: req.body });
});

app.listen(3000);
```

> **Note:** Prior to Express 4.16, `body-parser` was required for JSON and URL-encoded parsing. These are now bundled directly into Express.

<br>

## 21. How do you write _custom middleware functions_ in _Express.js_?

A custom middleware function accepts `(req, res, next)` and can modify the request/response objects, end the request-response cycle, or call `next()` to pass control forward.

### Middleware Patterns

```javascript
const express = require('express');
const app = express();

// 1. Application-level middleware (runs on every request)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 2. Request-modifying middleware
const attachTimestamp = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

// 3. Guard / short-circuit middleware
const requireApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// 4. Middleware factory (configurable)
const rateLimit = (maxRequests) => {
  const requests = new Map();
  return (req, res, next) => {
    const ip = req.ip;
    const count = (requests.get(ip) || 0) + 1;
    requests.set(ip, count);
    if (count > maxRequests) {
      return res.status(429).json({ error: 'Too many requests' });
    }
    next();
  };
};

// Apply middleware
app.use(attachTimestamp);
app.use('/api', requireApiKey);
app.use('/api', rateLimit(100));

app.get('/api/data', (req, res) => {
  res.json({ time: req.requestTime });
});

app.listen(3000);
```

<br>

## 22. How do you handle _file uploads_ in _Express.js_?

File uploads in Express.js are typically handled using the **multer** middleware, which processes `multipart/form-data` requests.

### Setup

```bash
npm install multer
```

### Code Example

```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// Single file upload
app.post('/upload', upload.single('avatar'), (req, res) => {
  res.json({ filename: req.file.filename });
});

// Multiple file upload
app.post('/upload-many', upload.array('photos', 5), (req, res) => {
  const filenames = req.files.map(f => f.filename);
  res.json({ filenames });
});

// Error handling for multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

app.listen(3000);
```

<br>

## 23. What is `express-session`, and how would you use it?

`express-session` is a middleware that enables **server-side session management** in Express. It stores session data on the server and sends a session ID cookie to the client.

### Setup

```bash
npm install express-session
```

### Code Example

```javascript
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,            // Don't save session if unmodified
  saveUninitialized: false, // Don't create session until data is set
  cookie: {
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    httpOnly: true,   // Prevent XSS access to cookie
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
}));

// Login route — sets session data
app.post('/login', express.json(), (req, res) => {
  const { username } = req.body;
  req.session.user = { username, loggedInAt: new Date() };
  res.json({ message: 'Logged in successfully' });
});

// Protected route — reads session data
app.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  res.json({ user: req.session.user });
});

// Logout route — destroys session
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out' });
  });
});

app.listen(3000);
```

> **Note:** For production, use a persistent session store like `connect-redis` or `connect-mongo` instead of the default in-memory store.

<br>

## 24. Discuss _error handling_ in an _Express.js_ application. How do you define an _error-handling middleware_?

Express has a dedicated error-handling middleware pattern identified by **four parameters**: `(err, req, res, next)`.

### Error Handling Flow

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Route that throws an error
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await findUser(req.params.id);
    if (!user) throw new AppError('User not found', 404);
    res.json(user);
  } catch (err) {
    next(err); // Pass to error-handling middleware
  }
});

// Async error wrapper utility
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.get('/posts', asyncHandler(async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
}));

// 404 handler — must be after all routes
app.use((req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

// Global error-handling middleware — must be last
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal Server Error';

  if (process.env.NODE_ENV === 'development') {
    return res.status(statusCode).json({ message, stack: err.stack });
  }

  res.status(statusCode).json({ message });
});

app.listen(3000);
```

<br>

## 25. Provide an example of using _third-party middleware_, such as `body-parser` or `morgan`.

Third-party middleware packages extend Express with additional functionality.

### morgan — HTTP Request Logger

```bash
npm install morgan
```

```javascript
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();

// Console logging in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File logging in production
if (process.env.NODE_ENV === 'production') {
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
  );
  app.use(morgan('combined', { stream: accessLogStream }));
}

app.get('/', (req, res) => res.send('Hello!'));
app.listen(3000);
```

### helmet — Security Headers

```bash
npm install helmet
```

```javascript
const helmet = require('helmet');
app.use(helmet()); // Sets various security-related HTTP headers
```

### compression — Response Compression

```bash
npm install compression
```

```javascript
const compression = require('compression');
app.use(compression()); // Compresses responses with gzip
```

### cors — Cross-Origin Resource Sharing

```bash
npm install cors
```

```javascript
const cors = require('cors');

app.use(cors({
  origin: 'https://yourfrontend.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

<br>

## 26. How do you protect against _SQL injection_ or other _security threats_ in _Express.js_?

Security in Express requires a **layered approach** addressing multiple attack vectors.

### SQL Injection

Use parameterized queries or an ORM — never concatenate user input into SQL strings.

```javascript
const { Pool } = require('pg');
const pool = new Pool();

// ❌ Vulnerable
app.get('/user', async (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.query.id}`; // NEVER do this
  const result = await pool.query(query);
  res.json(result.rows);
});

// ✅ Safe — parameterized query
app.get('/user', async (req, res) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.query.id]);
  res.json(result.rows);
});
```

### XSS Protection

```javascript
const helmet = require('helmet');
const xss = require('xss-clean');

app.use(helmet()); // Sets Content-Security-Policy and other headers
app.use(xss());    // Sanitizes user input
```

### CSRF Protection

```javascript
const csrf = require('csurf');
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});
```

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use('/api', limiter);
```

### Input Validation

```javascript
const { body, validationResult } = require('express-validator');

app.post('/register',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // proceed
  }
);
```

<br>

## 27. How would you implement _caching_ in an _Express.js_ application?

Caching reduces server load and improves response times. Express supports several caching strategies.

### HTTP Cache Headers

```javascript
const express = require('express');
const app = express();

// Cache static assets for 1 day
app.use('/static', express.static('public', {
  maxAge: '1d',
  etag: true
}));

// Manual cache control headers
app.get('/api/products', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300'); // 5 minutes
  res.json({ products: [] });
});
```

### In-Memory Caching with node-cache

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // 5-minute TTL

const cacheMiddleware = (duration) => (req, res, next) => {
  const key = req.originalUrl;
  const cached = cache.get(key);

  if (cached) {
    return res.json(cached);
  }

  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body, duration);
    res.sendResponse(body);
  };
  next();
};

app.get('/api/expensive-data', cacheMiddleware(60), async (req, res) => {
  const data = await fetchExpensiveData();
  res.json(data);
});
```

### Redis Caching

```javascript
const redis = require('redis');
const client = redis.createClient();

const redisCache = async (req, res, next) => {
  const key = req.originalUrl;
  const cached = await client.get(key);

  if (cached) {
    return res.json(JSON.parse(cached));
  }
  next();
};

app.get('/api/data', redisCache, async (req, res) => {
  const data = await fetchData();
  await client.setEx(req.originalUrl, 300, JSON.stringify(data));
  res.json(data);
});
```

<br>

## 28. How do you _set cookies_ and _get cookies_ in an _Express.js_ application?

Express handles cookies using the built-in `res.cookie()` method and the `cookie-parser` middleware for reading them.

### Setup

```bash
npm install cookie-parser
```

### Code Example

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser(process.env.COOKIE_SECRET)); // Secret enables signed cookies

// Set a cookie
app.get('/set-cookie', (req, res) => {
  // Basic cookie
  res.cookie('username', 'Alice', {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,               // Not accessible via JavaScript
    secure: true,                 // HTTPS only
    sameSite: 'strict'            // CSRF protection
  });

  // Signed cookie
  res.cookie('sessionToken', 'abc123', {
    signed: true,
    httpOnly: true
  });

  res.json({ message: 'Cookie set' });
});

// Read cookies
app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;           // Regular cookie
  const token = req.signedCookies.sessionToken;    // Signed cookie

  res.json({ username, token });
});

// Clear a cookie
app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username');
  res.json({ message: 'Cookie cleared' });
});

app.listen(3000);
```

<br>

## 29. What are ways to _improve the performance_ of _Express.js_ applications?

Performance optimization in Express covers several layers of the stack.

### 1. Use Compression

```javascript
const compression = require('compression');
app.use(compression());
```

### 2. Enable Caching

```javascript
app.use(express.static('public', { maxAge: '1d' }));
```

### 3. Use Clustering to Utilize All CPU Cores

```javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died, restarting...`);
    cluster.fork();
  });
} else {
  const app = require('./app');
  app.listen(3000);
}
```

### 4. Async/Await and Non-Blocking Code

```javascript
// ❌ Blocking
app.get('/data', (req, res) => {
  const data = fs.readFileSync('data.json');
  res.json(JSON.parse(data));
});

// ✅ Non-blocking
app.get('/data', async (req, res) => {
  const data = await fs.promises.readFile('data.json');
  res.json(JSON.parse(data));
});
```

### 5. Use a Reverse Proxy

Place Nginx or Apache in front of Express to handle SSL termination, load balancing, and serving static assets.

### 6. Optimize Middleware Chain

Only apply middleware where needed — avoid attaching heavy middleware globally when it's only required for specific routes.

```javascript
// ❌ Applied globally
app.use(expensiveMiddleware);

// ✅ Applied only where needed
app.post('/api/upload', expensiveMiddleware, uploadHandler);
```

<br>

## 30. How do you _configure_ an Express.js app for a _reverse proxy_, like _Nginx_?

When Express runs behind a reverse proxy, you need to configure it to trust the proxy's forwarded headers.

### Express Configuration

```javascript
const express = require('express');
const app = express();

// Trust the first proxy in the chain
app.set('trust proxy', 1);

// Now req.ip reflects the real client IP from X-Forwarded-For
app.get('/ip', (req, res) => {
  res.send(`Your IP: ${req.ip}`);
});

app.listen(3000);
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

> **Note:** `trust proxy` values: `1` trusts one hop, `'loopback'` trusts loopback addresses, `true` trusts all proxies (use with caution).

<br>

## 31. Explain the purpose of _template engines_. How would you integrate one with _Express.js_?

**Template engines** allow you to generate dynamic HTML by combining static templates with runtime data on the server side.

### Popular Template Engines

| Engine | Syntax Style | npm package |
|---|---|---|
| EJS | HTML + `<%= %>` tags | `ejs` |
| Pug | Indentation-based | `pug` |
| Handlebars | `{{ }}` mustache | `express-handlebars` |

### Integration Example — EJS

```bash
npm install ejs
```

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Set the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.render('users', {
    title: 'User List',
    users
  });
});

app.listen(3000);
```

```html
<!-- views/users.ejs -->
<!DOCTYPE html>
<html>
<head><title><%= title %></title></head>
<body>
  <h1><%= title %></h1>
  <ul>
    <% users.forEach(user => { %>
      <li><%= user.name %> - <%= user.email %></li>
    <% }); %>
  </ul>
</body>
</html>
```

<br>

## 32. How do you test an _Express.js_ application?

Express apps are typically tested using **Jest** or **Mocha** combined with **Supertest** for HTTP assertions.

### Setup

```bash
npm install --save-dev jest supertest
```

### Code Example

```javascript
// app.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  res.status(201).json({ id: 2, name });
});

module.exports = app;

// app.test.js
const request = require('supertest');
const app = require('./app');

describe('GET /users', () => {
  it('returns a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toHaveProperty('name');
  });
});

describe('POST /users', () => {
  it('creates a user successfully', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Bob' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Bob');
  });

  it('returns 400 when name is missing', async () => {
    const res = await request(app).post('/users').send({});
    expect(res.statusCode).toBe(400);
  });
});
```

<br>

## 33. Discuss common _debugging techniques_ for _Express.js_ applications.

### 1. Built-in Debug Module

```bash
DEBUG=express:* node app.js
```

### 2. Using the Node.js Debugger

```bash
node --inspect app.js
# Then open chrome://inspect in Chrome
```

### 3. VS Code Debugger (launch.json)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Express",
      "program": "${workspaceFolder}/app.js",
      "env": { "DEBUG": "express:*" }
    }
  ]
}
```

### 4. Request/Response Logging with Morgan

```javascript
const morgan = require('morgan');
app.use(morgan('dev'));
```

### 5. Custom Debug Middleware

```javascript
app.use((req, res, next) => {
  console.log({
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
    query: req.query,
    params: req.params
  });
  next();
});
```

### 6. Error Stack Traces in Development

```javascript
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
    res.status(500).json({ error: err.message, stack: err.stack });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
```

<br>

## 34. What is the role of _environment variables_ in an _Express.js_ application?

Environment variables separate **configuration from code**, allowing the same application to behave differently across environments without code changes.

### Setup with dotenv

```bash
npm install dotenv
```

```bash
# .env
NODE_ENV=development
PORT=3000
DB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=supersecretkey
API_KEY=abc123
```

### Code Example

```javascript
// Load .env in development only
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

if (!DB_URI || !JWT_SECRET) {
  console.error('Missing required environment variables');
  process.exit(1);
}

app.get('/config', (req, res) => {
  // Never expose secrets — only safe config values
  res.json({ environment: process.env.NODE_ENV });
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
```

> **Note:** Always add `.env` to `.gitignore` and use a secrets manager (AWS Secrets Manager, Vault) in production.

<br>

## 35. How do you use a _debugger_ with an _Express.js_ app running in _Node.js_?

### 1. Chrome DevTools Inspector

```bash
# Start with inspector
node --inspect app.js

# Break on first line
node --inspect-brk app.js
```

Then navigate to `chrome://inspect` → click "inspect" under Remote Target.

### 2. VS Code Integrated Debugger

Add to `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Express",
      "program": "${workspaceFolder}/app.js",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal"
    }
  ]
}
```

### 3. Setting Breakpoints in Code

```javascript
app.get('/debug', (req, res) => {
  debugger; // Execution pauses here when debugger is attached
  const result = computeSomething();
  res.json(result);
});
```

### 4. Using ndb (Node Debugger)

```bash
npm install -g ndb
ndb node app.js
```

<br>

## 36. How would you connect a _MongoDB database_ with an _Express.js_ application?

The most common approach uses **Mongoose**, an ODM (Object Document Mapper) for MongoDB.

### Setup

```bash
npm install mongoose
```

### Code Example

```javascript
// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('DB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);

// app.js
const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/User');

require('dotenv').config();
const app = express();
app.use(express.json());

connectDB();

app.get('/users', async (req, res, next) => {
  try {
    const users = await User.find().lean();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

app.post('/users', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
```

<br>

## 37. Explain how to integrate an _ORM_ like _Sequelize_ with _Express.js_.

**Sequelize** is a promise-based ORM for SQL databases (PostgreSQL, MySQL, SQLite, etc.).

### Setup

```bash
npm install sequelize pg pg-hstore
```

### Code Example

```javascript
// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;

// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  }
}, {
  timestamps: true
});

module.exports = User;

// app.js
const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/User');

const app = express();
app.use(express.json());

// Sync models with database
sequelize.sync({ alter: process.env.NODE_ENV === 'development' })
  .then(() => console.log('Database synced'));

app.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

app.post('/users', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
```

<br>

## 38. How do you handle _database errors_ in _Express.js_?

Database errors should be caught, categorized, and forwarded to Express's error-handling middleware.

### Code Example

```javascript
const express = require('express');
const { UniqueConstraintError, ValidationError } = require('sequelize');
const app = express();
app.use(express.json());

// Async handler wrapper
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

app.post('/users', asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
}));

// Database-aware error handler
app.use((err, req, res, next) => {
  // Sequelize unique constraint violation
  if (err instanceof UniqueConstraintError) {
    return res.status(409).json({
      error: 'Resource already exists',
      fields: err.fields
    });
  }

  // Sequelize validation error
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: 'Validation failed',
      details: err.errors.map(e => ({ field: e.path, message: e.message }))
    });
  }

  // MongoDB duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({
      error: 'Duplicate key',
      field: Object.keys(err.keyValue)[0]
    });
  }

  // Generic DB connection error
  if (err.name === 'SequelizeConnectionError') {
    return res.status(503).json({ error: 'Database unavailable' });
  }

  // Fallback
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000);
```

<br>

## 39. What are the advantages of using a _database pooling mechanism_ in an _Express.js_ app?

**Connection pooling** maintains a cache of reusable database connections, avoiding the overhead of opening and closing a new connection for every request.

### Benefits

- **Performance**: Reusing connections eliminates TCP handshake and authentication overhead per request
- **Resource management**: Caps the maximum number of open connections, preventing database overload
- **Availability**: Queues requests when all connections are busy rather than failing immediately
- **Stability**: Handles connection drops by replacing dead connections automatically

### Code Example with pg Pool

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,              // Max connections in pool
  idleTimeoutMillis: 30000,  // Close idle connections after 30s
  connectionTimeoutMillis: 2000 // Fail if can't get connection in 2s
});

// Pool events for monitoring
pool.on('connect', () => console.log('New DB connection established'));
pool.on('error', (err) => console.error('Pool error:', err));

const query = (text, params) => pool.query(text, params);

module.exports = { query };
```

### Mongoose Pool Configuration

```javascript
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10,       // Max concurrent connections
  minPoolSize: 2,        // Keep at least 2 connections open
  serverSelectionTimeoutMS: 5000
});
```

<br>

## 40. Describe how you would implement _user authentication_ in _Express.js_.

A common authentication pattern uses **JWT (JSON Web Tokens)** for stateless auth.

### Setup

```bash
npm install jsonwebtoken bcryptjs
```

### Code Example

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;
const users = []; // Replace with your database

// Register
app.post('/auth/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = { id: Date.now(), email, password: hashedPassword };
    users.push(user);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    next(err);
  }
});

// Login
app.post('/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id, email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

// Auth middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token required' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Protected route
app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});

app.listen(3000);
```

<br>

## 41. Explain how _sessions_ are managed in _Express.js_.

Sessions allow the server to persist state across multiple requests from the same client.

### Session Lifecycle

1. Client sends first request — no session exists
2. Server creates a session, stores data server-side, sends a **session ID cookie** to client
3. Client sends the cookie on subsequent requests
4. Server looks up the session by ID and retrieves stored data

### Code Example with Redis Store

```javascript
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const client = redis.createClient({ url: process.env.REDIS_URL });
const app = express();

app.use(session({
  store: new RedisStore({ client }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 30 // 30 minutes
  },
  name: '__Host-sid' // More secure cookie name
}));

app.post('/login', (req, res) => {
  // After credential verification...
  req.session.regenerate((err) => { // Prevent session fixation
    if (err) return next(err);
    req.session.userId = authenticatedUser.id;
    req.session.role = authenticatedUser.role;
    res.json({ message: 'Logged in' });
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('__Host-sid');
    res.json({ message: 'Logged out' });
  });
});
```

<br>

## 42. Discuss how you would handle _user roles and permissions_ in an _Express.js_ application.

Role-based access control (RBAC) restricts routes based on the authenticated user's role.

### Code Example

```javascript
const express = require('express');
const app = express();

// Roles definition
const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  USER: 'user'
};

// Auth middleware (assumes JWT auth populates req.user)
const authenticate = (req, res, next) => {
  // ... verify token and set req.user
  next();
};

// Role authorization middleware factory
const authorize = (...allowedRoles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Insufficient permissions' });
  }
  next();
};

// Permission-level middleware (more granular)
const can = (permission) => (req, res, next) => {
  const permissions = {
    admin: ['read', 'write', 'delete', 'manage_users'],
    editor: ['read', 'write'],
    user: ['read']
  };
  const userPermissions = permissions[req.user?.role] || [];
  if (!userPermissions.includes(permission)) {
    return res.status(403).json({ error: `Permission denied: ${permission}` });
  }
  next();
};

// Routes with role protection
app.get('/admin/dashboard', authenticate, authorize(ROLES.ADMIN), (req, res) => {
  res.json({ data: 'Admin dashboard' });
});

app.put('/posts/:id', authenticate, can('write'), (req, res) => {
  res.json({ message: 'Post updated' });
});

app.delete('/posts/:id', authenticate, authorize(ROLES.ADMIN, ROLES.EDITOR), (req, res) => {
  res.json({ message: 'Post deleted' });
});
```

<br>

## 43. How can you secure _passwords_ and _sensitive information_ in your _Express.js_ app?

### Password Hashing with bcrypt

```javascript
const bcrypt = require('bcryptjs');

// Hash password before saving
const hashPassword = async (plaintext) => {
  const saltRounds = 12; // Higher = more secure but slower
  return bcrypt.hash(plaintext, saltRounds);
};

// Compare during login
const verifyPassword = async (plaintext, hash) => {
  return bcrypt.compare(plaintext, hash);
};
```

### Environment Variables for Secrets

```javascript
// Never hardcode secrets
// ❌ Bad
const secret = 'mysupersecretkey';

// ✅ Good
const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET not set');
```

### Preventing Sensitive Data Leaks

```javascript
// Mongoose: exclude password from query results by default
const userSchema = new mongoose.Schema({
  email: String,
  password: { type: String, select: false } // Not returned by default
});

// Sanitize response objects
const sanitizeUser = (user) => {
  const { password, __v, ...safeUser } = user.toObject();
  return safeUser;
};

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  res.json(user);
});
```

### Encryption for Sensitive Fields

```javascript
const crypto = require('crypto');

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', ENCRYPTION_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted.toString('hex')}`;
};
```

<br>

## 44. How do you integrate a _third-party API_ in an _Express.js_ application?

### Using axios for HTTP Requests

```bash
npm install axios
```

```javascript
const express = require('express');
const axios = require('axios');
const app = express();

// Create a configured axios instance
const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 5000,
  params: { appid: process.env.WEATHER_API_KEY, units: 'metric' }
});

// Service layer for API calls
const getWeather = async (city) => {
  const { data } = await weatherApi.get('/weather', { params: { q: city } });
  return data;
};

// Express route
app.get('/weather/:city', async (req, res, next) => {
  try {
    const data = await getWeather(req.params.city);
    res.json({
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description
    });
  } catch (err) {
    if (err.response?.status === 404) {
      return res.status(404).json({ error: 'City not found' });
    }
    next(err);
  }
});

// Webhook receiver (for APIs that push data)
app.post('/webhooks/payment', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['stripe-signature'];
  // Verify signature and process event
  res.sendStatus(200);
});

app.listen(3000);
```

<br>

## 45. Explain the steps to _deploy_ an _Express.js_ application to a cloud provider like _AWS_ or _Heroku_.

### Heroku Deployment

```bash
# 1. Install Heroku CLI and login
heroku login

# 2. Create app
heroku create my-express-app

# 3. Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-secret

# 4. Deploy
git push heroku main

# 5. Scale
heroku ps:scale web=1
```

```json
// package.json — required for Heroku
{
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": "18.x"
  }
}
```

### AWS EC2 Deployment

```bash
# 1. Connect to EC2 instance
ssh -i key.pem ec2-user@your-instance-ip

# 2. Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# 3. Clone and install
git clone https://github.com/yourrepo/app.git
cd app && npm install --production

# 4. Use PM2 for process management
npm install -g pm2
pm2 start server.js --name "express-app"
pm2 startup
pm2 save

# 5. Configure Nginx as reverse proxy (see Q30)
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

<br>

## 46. How can you ensure that your _Express.js_ application is scalable?

Scalability means your application can handle growing load. It can be achieved both horizontally and vertically.

### Horizontal Scaling with Clustering

```javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on('exit', () => cluster.fork());
} else {
  require('./app').listen(process.env.PORT || 3000);
}
```

### Stateless Design

```javascript
// ❌ Stateful — breaks with multiple instances
app.locals.visitCount = 0;
app.get('/', (req, res) => {
  res.json({ visits: ++app.locals.visitCount });
});

// ✅ Stateless — store state in Redis/DB
app.get('/', async (req, res) => {
  const count = await redis.incr('visit_count');
  res.json({ visits: count });
});
```

### Load Balancing with PM2

```bash
pm2 start app.js -i max  # Spawn one process per CPU
pm2 scale app 4          # Scale to 4 instances
```

### Key Scalability Practices

- Use a **CDN** for static assets
- Implement **caching** at multiple levels (Redis, HTTP headers, CDN)
- Use **async/non-blocking** operations throughout
- Design **stateless** services — all state in external stores
- Use **message queues** (RabbitMQ, SQS) for long-running tasks
- Set up **database read replicas** for read-heavy workloads

<br>

## 47. What is the _Twelve-Factor App methodology_, and how does it apply to _Express.js_?

The **Twelve-Factor App** is a methodology for building scalable, maintainable software-as-a-service applications.

### Key Factors Applied to Express.js

| Factor | Express.js Application |
|---|---|
| **Codebase** | One repo, multiple deploys (dev/staging/prod) |
| **Dependencies** | Declared in `package.json`, isolated with `node_modules` |
| **Config** | Environment variables via `dotenv`, never hardcoded |
| **Backing services** | DB/cache treated as attached resources via URLs |
| **Build/Release/Run** | Separate `npm run build`, deployment, and `npm start` |
| **Processes** | Stateless app processes, no sticky sessions |
| **Port binding** | `app.listen(process.env.PORT)` |
| **Concurrency** | Scale out via clustering or container replicas |
| **Disposability** | Fast startup, graceful shutdown |
| **Dev/Prod parity** | Same stack locally and in production |
| **Logs** | Write to stdout — let infrastructure handle log routing |
| **Admin processes** | Run migrations/scripts as one-off processes |

### Graceful Shutdown (Disposability)

```javascript
const server = app.listen(process.env.PORT);

process.on('SIGTERM', () => {
  console.log('SIGTERM received — shutting down gracefully');
  server.close(() => {
    mongoose.connection.close();
    process.exit(0);
  });
});
```

<br>

## 48. Write an _Express.js middleware_ function that limits requests to 100 per hour per _IP address_.

```javascript
const express = require('express');
const app = express();

// In-memory store (use Redis in production for multi-instance support)
const requestCounts = new Map();

const rateLimiter = (maxRequests, windowMs) => (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const windowStart = now - windowMs;

  // Get or initialize record for this IP
  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, []);
  }

  // Filter out timestamps outside the current window
  const timestamps = requestCounts.get(ip).filter(t => t > windowStart);
  timestamps.push(now);
  requestCounts.set(ip, timestamps);

  // Set informational headers
  res.set({
    'X-RateLimit-Limit': maxRequests,
    'X-RateLimit-Remaining': Math.max(0, maxRequests - timestamps.length),
    'X-RateLimit-Reset': Math.ceil((windowStart + windowMs) / 1000)
  });

  if (timestamps.length > maxRequests) {
    return res.status(429).json({
      error: 'Too Many Requests',
      retryAfter: Math.ceil(windowMs / 1000)
    });
  }

  next();
};

// Apply: 100 requests per hour (3,600,000 ms)
app.use('/api', rateLimiter(100, 60 * 60 * 1000));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Success' });
});

app.listen(3000);
```

> **Production note:** Replace the in-memory Map with Redis using `ioredis` to share rate limit state across all instances.

<br>

## 49. Create an _Express.js route_ that accepts a _JSON payload_ and responds with the same payload in reverse order.

```javascript
const express = require('express');
const app = express();

app.use(express.json());

const reversePayload = (value) => {
  if (Array.isArray(value)) {
    return [...value].reverse().map(reversePayload);
  }
  if (typeof value === 'string') {
    return value.split('').reverse().join('');
  }
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).reverse().map(([k, v]) => [k, reversePayload(v)])
    );
  }
  return value;
};

app.post('/reverse', (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty payload' });
  }
  const reversed = reversePayload(req.body);
  res.json(reversed);
});

app.listen(3000);

/*
  POST /reverse
  Input:  { "items": [1, 2, 3], "name": "hello" }
  Output: { "name": "olleh", "items": [3, 2, 1] }
*/
```

<br>

## 50. Develop a simple _REST API_ with _Express.js_ that includes _CRUD operations_ for managing books.

```javascript
const express = require('express');
const app = express();
app.use(express.json());

// In-memory data store
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', year: 1949 }
];
let nextId = 3;

// GET /books — list all books
app.get('/books', (req, res) => {
  const { author, year } = req.query;
  let result = books;
  if (author) result = result.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
  if (year) result = result.filter(b => b.year === Number(year));
  res.json(result);
});

// GET /books/:id — get single book
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// POST /books — create a book
app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  const book = { id: nextId++, title, author, year };
  books.push(book);
  res.status(201).json(book);
});

// PUT /books/:id — replace a book
app.put('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  const { title, author, year } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  books[index] = { id: books[index].id, title, author, year };
  res.json(books[index]);
});

// PATCH /books/:id — partial update
app.patch('/books/:id', (req, res) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  Object.assign(book, req.body);
  res.json(book);
});

// DELETE /books/:id — delete a book
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => console.log('Books API running on port 3000'));
```

<br>

## 51. Discuss strategies for building a _real-time application_ with _Express.js_.

### 1. WebSockets with Socket.IO

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

// Namespace for chat
const chat = io.of('/chat');

chat.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join-room', (room) => {
    socket.join(room);
    socket.to(room).emit('user-joined', { userId: socket.id });
  });

  socket.on('message', ({ room, text }) => {
    chat.to(room).emit('message', { userId: socket.id, text, time: Date.now() });
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000);
```

### 2. Server-Sent Events (SSE) — One-way streaming

```javascript
app.get('/events', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.flushHeaders();

  const interval = setInterval(() => {
    res.write(`data: ${JSON.stringify({ time: new Date() })}\n\n`);
  }, 1000);

  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});
```

### 3. Long Polling (Fallback)

```javascript
const pending = new Map();

app.get('/poll', (req, res) => {
  const clientId = req.query.clientId;
  pending.set(clientId, res);

  setTimeout(() => {
    if (pending.has(clientId)) {
      pending.get(clientId).json({ type: 'timeout' });
      pending.delete(clientId);
    }
  }, 30000);
});
```

<br>

## 52. What are some common _optimization techniques_ for _Express.js_ applications?

### 1. Response Compression

```javascript
const compression = require('compression');
app.use(compression({ level: 6, threshold: 1024 }));
```

### 2. HTTP/2 with SPDY

```javascript
const spdy = require('spdy');
const fs = require('fs');

spdy.createServer({
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
}, app).listen(443);
```

### 3. Route-Level Caching

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 });

const cacheRoute = (req, res, next) => {
  const hit = cache.get(req.url);
  if (hit) return res.json(hit);
  res.sendJson = res.json;
  res.json = (data) => { cache.set(req.url, data); res.sendJson(data); };
  next();
};
```

### 4. Database Query Optimization

```javascript
// Use lean() in Mongoose — skips Mongoose document overhead
const users = await User.find().lean().select('name email').limit(20);

// Use indexes
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });
```

### 5. Avoid Synchronous Operations

```javascript
// ❌ Blocks the event loop
const data = fs.readFileSync('./data.json');

// ✅ Non-blocking
const data = await fs.promises.readFile('./data.json');
```

### 6. Keep Middleware Lean

Only load what you need, and apply middleware at the router level rather than globally when possible.

<br>

## 53. Explain the concept and benefits of _server-side rendering_ with _Express.js_ and a _templating engine_.

**Server-Side Rendering (SSR)** generates the full HTML on the server for each request, sending complete markup to the client.

### Benefits

- **SEO**: Search engine crawlers receive complete HTML content
- **Faster initial load**: Browser renders HTML immediately without waiting for JavaScript
- **Accessibility**: Works without JavaScript enabled
- **Simpler client**: No frontend framework required for content rendering

### Code Example

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// Data from DB rendered server-side
app.get('/products', async (req, res) => {
  const products = await Product.find().lean();
  const categories = await Category.find().lean();

  res.render('products', {
    title: 'Our Products',
    products,
    categories,
    user: req.session?.user || null
  });
});

app.listen(3000);
```

```html
<!-- views/products.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <meta name="description" content="Browse our products">
</head>
<body>
  <% if (user) { %>
    <p>Welcome, <%= user.name %>!</p>
  <% } %>
  <div class="products">
    <% products.forEach(p => { %>
      <div class="product">
        <h2><%= p.name %></h2>
        <p><%= p.description %></p>
        <span>$<%= p.price %></span>
      </div>
    <% }); %>
  </div>
</body>
</html>
```

<br>

## 54. How do you ensure that your _Express.js code is maintainable_ and follows _best practices_?

### 1. Project Structure

Separate concerns into layers: routes → controllers → services → models.

### 2. Linting and Formatting

```json
// .eslintrc.json
{
  "extends": ["eslint:recommended", "plugin:node/recommended"],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error"
  }
}
```

```bash
npm install --save-dev eslint prettier eslint-config-prettier
```

### 3. Error Handling Consistency

Always use a centralized error handler and never let unhandled promise rejections go silent.

```javascript
process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});
```

### 4. Input Validation

```javascript
const { body, validationResult } = require('express-validator');
const validate = (rules) => async (req, res, next) => {
  await Promise.all(rules.map(rule => rule.run(req)));
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};
```

### 5. API Versioning

```javascript
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);
```

### 6. Documentation

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
```

<br>

## 55. How would you structure an _Express.js application_ for a large-scale _e-commerce platform_?

### Recommended Architecture

```
ecommerce-api/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   ├── redis.js
│   │   └── env.js
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.controller.js
│   │   │   └── auth.service.js
│   │   ├── products/
│   │   ├── orders/
│   │   ├── users/
│   │   └── payments/
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── rateLimiter.js
│   │   └── errorHandler.js
│   ├── utils/
│   └── app.js
├── tests/
└── server.js
```

### Module Example

```javascript
// modules/products/products.routes.js
const router = express.Router();
const { authenticate, authorize } = require('../../middleware/auth');
const controller = require('./products.controller');

router.get('/', controller.list);
router.get('/:id', controller.getOne);
router.post('/', authenticate, authorize('admin'), controller.create);
router.put('/:id', authenticate, authorize('admin'), controller.update);
router.delete('/:id', authenticate, authorize('admin'), controller.remove);

module.exports = router;

// app.js
app.use('/api/v1/auth', require('./modules/auth/auth.routes'));
app.use('/api/v1/products', require('./modules/products/products.routes'));
app.use('/api/v1/orders', require('./modules/orders/orders.routes'));
app.use('/api/v1/payments', require('./modules/payments/payments.routes'));
```

<br>

## 56. Describe the key considerations for building a _secure API_ with _Express.js_.

### Security Checklist

```javascript
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');

const app = express();

// 1. Security headers
app.use(helmet());

// 2. CORS — restrict to known origins
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  credentials: true
}));

// 3. Rate limiting
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// 4. Body parsing with size limits
app.use(express.json({ limit: '10kb' }));

// 5. NoSQL injection sanitization
app.use(mongoSanitize());

// 6. XSS protection
app.use(xss());

// 7. JWT verification middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// 8. HTTPS enforcement
app.use((req, res, next) => {
  if (req.secure || process.env.NODE_ENV !== 'production') return next();
  res.redirect(`https://${req.headers.host}${req.url}`);
});
```

<br>

## 57. Discuss how to handle _session management_ in a distributed _Express.js application_.

In a distributed system with multiple Express instances, **sessions cannot be stored in memory** — they must be stored in a shared external store.

### Redis-Based Distributed Sessions

```javascript
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const { createClient } = require('redis');

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: { reconnectStrategy: (retries) => Math.min(retries * 50, 1000) }
});

await redisClient.connect();

app.use(session({
  store: new RedisStore({
    client: redisClient,
    prefix: 'sess:',
    ttl: 86400 // 24 hours
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000
  }
}));
```

### JWT as Stateless Alternative

For fully distributed systems, JWT tokens eliminate the need for shared session storage entirely — each instance can independently verify a token using the shared secret or public key.

```javascript
// Stateless auth — no shared store needed
const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
  expiresIn: '1h',
  issuer: 'myapp.com'
});
```

<br>

## 58. What are the implications of _microservices architecture_ for an _Express.js application_?

In a microservices setup, each Express application serves as an **independent service** with a specific business domain responsibility.

### Key Implications

**Service Communication**

```javascript
// HTTP inter-service communication via axios
const axios = require('axios');

const getUserById = async (userId) => {
  const { data } = await axios.get(`${process.env.USER_SERVICE_URL}/users/${userId}`, {
    timeout: 3000,
    headers: { 'x-service-key': process.env.SERVICE_KEY }
  });
  return data;
};
```

**Health Check Endpoint**

```javascript
// Each service exposes a health check for orchestrators (Kubernetes, Docker Swarm)
app.get('/health', async (req, res) => {
  const dbStatus = await checkDatabase();
  res.status(dbStatus ? 200 : 503).json({
    status: dbStatus ? 'healthy' : 'unhealthy',
    service: 'order-service',
    timestamp: new Date().toISOString()
  });
});
```

**Circuit Breaker Pattern**

```javascript
const CircuitBreaker = require('opossum');

const breaker = new CircuitBreaker(getUserById, {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000
});

breaker.fallback(() => ({ id: null, name: 'Anonymous' }));
```

**Distributed Tracing**

```javascript
const { trace } = require('@opentelemetry/api');

app.use((req, res, next) => {
  const span = trace.getTracer('order-service').startSpan(req.path);
  req.span = span;
  res.on('finish', () => span.end());
  next();
});
```

#### Explore all 58 answers here 👉 [Devinterview.io - Express.js](https://devinterview.io/questions/web-and-mobile-development/express-interview-questions)

<br>

<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>
