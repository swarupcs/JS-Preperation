https://github.com/Devinterview-io/node-interview-questions


# 100 Must-Know Node.js Interview Questions in 2026

<div>
<p align="center">
<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>

#### You can also find all 100 answers here 👉 [Devinterview.io - Node.js](https://devinterview.io/questions/web-and-mobile-development/node-interview-questions)

<br>

## 1. What is Node.js and why is it used?

**Node.js** is an open-source, cross-platform JavaScript runtime environment that executes code outside of a web browser. It is built on V8, the same JavaScript engine within Chrome, and optimized for high performance. This environment, coupled with an event-driven, non-blocking I/O framework, is tailored for server-side web development and more.

### Key Features

- **Asynchronous & Non-Blocking**: Ideal for handling a myriad of concurrent connections with efficiency.
- **V8 Engine**: Powered by Google's V8, Node.js boasts top-tier JavaScript execution.
- **Libuv Library**: Ensures consistent performance across platforms and assists in managing I/O operations.
- **NPM**: A vast package ecosystem simplifies module management and deployment.
- **Full-Stack JavaScript**: Allows for unified server and client-side code in JavaScript.

### Use Cases

- **Data Streaming**: Suited for real-time streaming of audio, video, and lightweight data.
- **API Servers**: Ideal for building fast, scalable, and data-intensive applications.
- **Microservices**: Its module-oriented design facilitates the development of decoupled, independently scalable services.
- **Single Page Applications**: Often used with frameworks like Angular, React, or Vue to craft robust, server-side backends.
- **Chat Applications**: Its real-time capabilities are advantageous in building instant messaging systems.
- **Internet of Things (IoT)**: Provides a lightweight environment for running applications on constrained devices like Raspberry Pi.

### Why Node.js?

- **Unified Language**: Utilizing JavaScript both on the frontend and backend brings coherence to development efforts, potentially reducing debugging time and enabling shared libraries.
- **NPM Ecosystem**: The NPM repository offers myriad open-source packages, empowering rapid development and feature expansion.
- **Rapid Prototyping**: Express, a minimalist web framework for Node.js, and NPM's wealth of modules expedite early application development and testing.
- **Scalability**: Cluster modules, load balancers, and Microservice Architecture aid in linear, on-demand scaling for both simple and intricate applications.
- **Real-Time Power**: With built-in WebSockets and event-based architecture, Node.js excels in constructing real-time applications such as multiplayer games, stock trading platforms, and chat applications.
- **Open Source**: Being an open-source technology, Node.js continuously benefits from community contributions, updates, and enhanced packages.
<br>

## 2. How does Node.js handle child threads?

**Node.js** employs event-driven architecture and non-blocking I/O for efficiency.

While Node.js **operates off a single main thread**, it can harness the full power of multi-core systems by launching child threads for specific tasks, such as file compression or image processing.

### Thread Pool and Worker Threads

To manage these child threads, Node.js uses a combination of:
- A **thread pool**, powered by the libuv library.
- **Worker threads** for dedicated, offloaded computation.

### Node.js Event Loop

When a task in Node.js is designated to operate on a child thread, the main event loop hands it over to the thread pool. This setup allows Node.js to **stay responsive to incoming requests**, benefiting from asynchronous I/O.

The main event loop regains control once the task on the child thread is completed, and results are ready.

### Advantages

- **Boosted Efficiency**: Offloading certain tasks to worker threads prevents I/O or computation-heavy jobs from blocking the event loop.
- **Convenient Multi-Threading**: Node.js enables multi-threading without the complexities of managing threads directly.

### Code Example: Basic Multi-Threading Task

Here is the JavaScript code:

```javascript
// Import the built-in 'worker_threads' module
const { Worker, isMainThread, parentPort } = require('worker_threads');

// Check if it's the main module
if (isMainThread) {
  // Create a new child worker
  const worker = new Worker(__filename);

  // Listen for messages from the worker
  worker.on('message', message => console.log('Received:', message));

  // Send a message to the worker
  worker.postMessage('Hello from the main thread!');
} else {
  // Listen for messages from the main thread
  parentPort.on('message', message => {
    console.log('Received in the worker:', message);
    // Send a message back to the main thread
    parentPort.postMessage('Hello from the worker thread!');
  });
}
```
<br>

## 3. Describe the event-driven programming in Node.js.

**Event-driven programming,** a hallmark of Node.js, uses an **event, listener,** and **emitter** architecture to handle asynchronous tasks. This design centers around events and how they trigger actions in the attached listeners.

### Core Components

- **Event Emitter**: Acts as the event registry and dispatcher, letting objects register interest in particular events and emit these events when they occur.
  
- **Event Handler (Listener)**: Associates with a particular event through registration. These callback functions will be asynchronously carried out when a matching event is emitted.

#### Code Example: Event Emitter and Handlers

Here is the Node.js code:

```javascript
const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.on('event-name', (eventArgs) => {
    console.log(`Event-name was emitted with arguments: ${eventArgs}`);
});

emitter.emit('event-name', 'Some Payload');
```

In this code, when `emit` is called, the `on` method's callback is executed asynchronously.

### Event Loop Mechanism in Node.js

- **Call Stack**: Maintains the call order of the functions and methods being executed.

- **Node APIs** and **Callbacks Queue**: Handle I/O tasks and timers.

- **Event Loop**: Constantly watches the execution stack and checks whether it's clear to execute pending tasks from the Callback Queue.

### Practical Applications in Node.js

- **HTTP Server**: Listens for and serves requests.
  
- **File System Operations**: Execute I/O tasks.

- **Database Operations**: Such as data retrieval.
<br>

## 4. What is the event loop in Node.js?

The **event loop** is a fundamental concept in Node.js for managing asynchronous operations. Its efficiency is a key reason behind Node.js's high performance.

### How Does the Event Loop Work?

1. **Initialization**: When Node.js starts, it initializes the **event loop** to watch for I/O operations and other asynchronous tasks.

2. **Queueing**: Any task or I/O operation is added to a **queue**, which can be either the `microtask queue` or the `macrotask/Callback queue`.

3. **Polling**: The event loop iteratively checks for tasks in the queue while also **waiting** for I/O and timers.

4. **Execution Phases**: When the event loop detects tasks in the queue, it executes them in specific phases, ensuring order efficiency.

### Task Scheduler Zones: microtask and Callback Queue

- **Microtask Queue**: This is a highly prioritized queue, usually acting over tasks in the **Callback Queue**. Useful for tasks that require immediate attention.
- **Callback Queue (Macrotask Queue)**: Also known as the 'Task Queue,' it manages events and I/O operations.

### Event Loop Phases

- **Timers**: Manages timer events for scheduled tasks.
- **Pending callbacks**: Handles system events such as I/O, which are typically queued by the kernel.
- **Idle / prepare**: Ensures internal actions are managed before I/O events handling.
- **Poll**: Retrieves New I/O events.
- **Check**: Executes 'setImmediate' functions.
- **Close**: Handles close events, such as 'socket.close'.

### Task Scheduling: microtasks and macrotasks

- **Microtasks (process.nextTick and Promises)**: Executed after each task.
- **Macrotasks**: Executed after the poll phase when the event loop is not behind any file I/O or scheduled time. This includes timers, setImmediate, and I/O events.

### Code Example: Timers and Task Queues

Here is the JavaScript code:

**Node.js**

```js
// Code Example
console.log('Start');

setTimeout(() => {  
  console.log('Set Timeout - 1');
  
  Promise.resolve().then(() => {
    console.log('Promise - 1');
  }).then(() => {
    console.log('Promise - 2');
  });

}, 0);

setImmediate(() => {
  console.log('Set Immediate');
});

process.nextTick(() => {
  console.log('Next Tick');
  // It's like an infinite loop point for microtask queue
  process.nextTick(() => console.log('Next Tick - nested'));
});

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('File Read');
});

console.log('End');
```
<br>

## 5. What is the difference between Node.js and traditional web server technologies?

**Node.js** revolutionized server-side development with its non-blocking, event-driven architecture. Let's look at how it differs from traditional web servers and how it leverages a **Single Input-Output (I/O)** model.

### Key Distinctions

#### Multi-threading (Traditional Servers) vs. Event Loop (Node.js)

- **Traditional Servers**: Employ multi-threading. Each client request spawns a new thread, requiring resources even when idle.
- **Node.js**: Utilizes a single-thread with non-blocking, asynchronous functions for I/O tasks. This makes it exceptionally suitable for scenarios like real-time updates and microservices.

#### Blocking vs. Non-blocking I/O

- **Traditional Servers**: Primarily rely on blocking I/O, meaning that the server waits for each I/O operation to finish before moving on to the next task.
- **Node.js**: Leverages non-blocking I/O, allowing the server to continue handling other tasks while waiting for I/O operations. Callbacks, Promises, and async/await support this approach.

#### Language Consistency

- **Traditional Servers**: Often pair with languages like Java, C#, or PHP for server-side logic. Front-end developers might need to be proficient in both the server language and client-side technologies like JavaScript.
- **Node.js**: Employs JavaScript both client-side and server-side, fostering full-stack developer coherence and code reusability.

#### Code Execution

- **Traditional Servers**: Generally compile and execute code. Alterations might necessitate recompilation and possible downtime.
- **Node.js**: Facilitates a "write, save, and run" approach, without the need for recompilation.

#### Package Management

- **Traditional Servers**: Rely on package managers like Maven or NuGet, with each language typically having its own package dependency system.
- **Node.js**: Centralizes dependency management via npm, simplifying the sharing and integration of libraries.

#### Deployment

- **Traditional Servers**: Often necessitate coordination with systems, database administrators, and IT teams for deployment.
- **Node.js**: Offers flexible, straightforward deployments. It's especially suited for cloud-native applications.

### Use Cases

- **Traditional Servers**: Ideal for enterprise systems, legacy applications, or when extensive computational tasks are required.
- **Node.js**: Well-suited for data-intensive, real-time applications like collaborative tools, gaming, or social media platforms. Its lightweight, scalable nature also complements cloud deployments.
<br>

## 6. Explain what "non-blocking" means in Node.js.

**Node.js leverages non-blocking I/O** to handle multiple operations without waiting for each to complete separately.

This particular I/O model, coupled with the event-driven paradigm of Node.js, is key to its high performance and scalability, making it **ideal** for tasks such as data streaming, background tasks, and concurrent operations.

### Non-Blocking I/O

With non-blocking I/O, an application **doesn't halt** or wait for a resource to become available. Instead, it goes on executing other tasks that don't depend on that resource.

For instance, if a file operation is in progress, Node.js doesn't pause the entire application until the file is read or written. This allows for a more responsive and efficient system, especially when handling multiple, concurrent I/O operations.

### Event Loop

Node.js constantly monitors tasks and I/O operations. When a task or operation is ready, it triggers an event. This mechanism is referred to as the **event loop**.

When an event fires, a corresponding event handler or callback function is executed.

### Concurrency Without Threads

Traditionally, concurrency can be achieved in languages that support multithreading (e.g., Java). However, managing and coordinating multiple threads can be challenging and is a common source of bugs.

Node.js, on the other hand, provides a simplified yet effective concurrency model using non-blocking I/O and the event loop. It achieves parallelism through mechanisms such as **callbacks**, **Promises**, and **async/await**.

By not using threads, Node.js eliminates many of the complexities associated with traditional multithreaded architectures, making it easier to **develop** and **maintain** applications, particularly those requiring high concurrency.

### Code Example: File I/O

Here is the JavaScript code:

```javascript
const fs = require('fs');

// Perform non-blocking file read operation
fs.readFile('path/to/file', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Other non-blocking operations continue without waiting for file read
console.log('This message is displayed immediately.');
```

In this example, the file read operation is non-blocking. Node.js does not halt the thread of execution to wait for the file read to complete. Instead, the supplied callback function is invoked when the read operation finishes.
<br>

## 7. How do you update Node.js to the latest version?

Regular updates ensure that your **Node.js** setup is secure, efficient, and equipped with the latest features. Here's how to keep it up-to-date.

### Using Package Managers

- **NPM**: Run the following commands to find and install the latest stable version of Node.js:

  ```shell
  npm cache clean -f
  ```
  ```shell
  npm install -g n
  ```

- **Yarn**: Execute the following command that fetches the latest version and updates Node.js in your system:

  ```shell
  yarn global add n
  ```

### Using the Official Installer

You can use the official installer to upgrade to the latest stable version.

### Version Management Tools

Tools like **nvm** (Node Version Manager), **n** (Node Version Manager) and **nvs** (Node Version Switcher) can be convenient for managing multiple Node.js versions and performing updates.

### Windows via Scoop

On Windows, **Scoop** simplifies the task of updating:

```shell
scoop update nodejs-lts
```

### Check the Updated Version

Verify that the update was successful by checking the version number:

```shell
node -v
```
<br>

## 8. What is "npm" and what is it used for?

**npm (Node Package Manager)** is a powerful and highly popular package manager that is focused on the Node.js environment. Its primary purpose is to simplify the installation, management, and sharing of libraries or tools written in Node.js.

npm is more than just a package manager: It's also a thriving ecosystem, offering a plethora of ready-to-use modules and tools, thereby making the development workflow for Node.js even more efficient.

### Key Functions

- **Package Installation**: npm makes it easy to install and specify dependencies for Node.js applications. Developers can simply define required packages in a `package.json` file, and npm resolves and installs all dependencies.

- **Dependency Management**: npm establishes a tiered dependency system, effectively managing the versions and interdependencies of various packages.

- **Registry Access**: It acts as a central repository for Node.js packages, where developers can host, discover, and access modules.

- **Version Control**: npm enables version control to ensure consistent and predictable package installations. It supports features such as semantic versioning and lock files.

- **Lifecycle Scripts**: It allows developers to define custom scripts for tasks like application start or build, making it convenient to execute routine operations.

- **Packaging and Publication**: Developers can use npm to bundle their applications and publish them, ready for use by others.

### npm Client and Registry

- The **npm client** is the command-line tool that developers interact with locally. It provides a set of commands to manage a project's packages, scripts, and configuration.

- The **npm registry** is a global, central database of published Node.js packages. It's where modules and libraries are made available to the Node.js community. The official, public registry is managed by npm, Inc.

### npm vs yarn

- **yarn** is another popular package manager, introduced by Facebook. Like npm, it's designed for Node.js and excels in areas like performance and determinism. However, both npm and yarn are continuously evolving, and their differences are becoming more nuanced.

### Famous Commands

- **install**: This command downloads and installs the specified packages and their dependencies.
- **init**: This command initializes a `package.json` file for the project.
- **start**: This command typically begins the execution of a Node.js application, as specified in the `scripts` section of `package.json`.
- **publish**: This command is used to publish the package to the npm registry.

### npm Scripts

One of the key features of npm is the ability to define scripts in the `package.json` file, executing them with the `npm run` command. This allows for automation of tasks such as testing, building, and starting the application.

These scripts have access to a variety of built-in and environment-specific variables, helping you to customize the script's behavior.

For example:

In `package.json`:

```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

You can then execute:

```sh
npm start
```

to start the server.

### npm Web Interface

While most developers interact with npm via the command line, it also offers a web interface called `npmjs.com`. The website allows users to search for packages, view documentation, and explore related modules. It is also where developers publish and manage their packages.
<br>

## 9. How do you manage packages in a Node.js project?

**Node.js** utilizes **npm** (Node Package Manager) or yarn for **package management**.

### npm vs. Yarn

Both tools create a `node_modules` folder, but they have subtle differences:

- **Yarn's** `yarn.lock` provides deterministic package versions, while npm uses `package-lock.json`.
- npm uses `npm install` while Yarn uses `yarn add` to install a package.

Yarn also has advanced features like parallel package installations and a lockfile ensuring consistent installations across machines.

### Core npm Commands

- **npm init**: Initializes a new project and creates a `package.json` file.
- **npm install [package] (-D)**: Installs a package and updates the `package.json` file. The `-D` flag indicates a devDependency.
- **npm update [package]**: Updates installed packages to their latest versions.

#### Using npm Scripts

The `package.json` can include custom scripts for tasks like testing, building, and deployment, opening up the terminal from the current project directory and running `npm run SCRIPT_NAME`.

#### CLI Examples

- **Install lodash**: `npm install lodash`
- **Install express and save as a devDependency**: `npm install express --save-dev`
- **Update all packages**: `npm update`
<br>

## 10. What is a package.json file?

The **package.json** file in Node.js projects contains valuable information, such as project metadata and dependencies. This file is essential for managing project modules, scripts, and version control and helps ensure the consistency and stability of your project.

### Key Elements

The `package.json` file consists of several essential sections:

1. **Name and Version**: Required elements that identify the project and its version.

2. **Dependencies**: Separated into `dependencies`, `devDependencies`, and `optionalDependencies` which list package dependencies needed for development, production, or as optional features, respectively.

3. **Scripts**: Encompasses a series of custom commands, managed by npm or yarn, that can be executed to perform various tasks.

4. **Git Repository Information**: Optional but helpful for version control.

5. **Project Metadata**: Such as the description and the author-related details.

6. **Peer Dependencies**: A list of dependencies that must be installed alongside the module but are not bundled with it.

7. **Private/Public Status**: Indicates whether the package is publicly available.

### Creating `package.json`

You can **generate** the initial `package.json` file by running `npm init` or `yarn init` in the project directory. This command will guide you through a set of interactive prompts to configure your project.

### Managing Dependencies

#### Adding Packages

To add a package to your project, use `npm install package-name` or `yarn add package-name`. This will also automatically update your `package.json` file.

#### Removing Packages

Remove a package from the project and update the `package.json` file by running `npm uninstall package-name` or `yarn remove package-name`.

### Scripts

The `scripts` section allows you to define **task shortcuts**. Each entry is a command or group of sub-commands that can be invoked via `npm run` or `yarn run`.

For example, the following `scripts` section would enable the executing of `babel src -d lib` by running `npm run build`.

```json
{
  "scripts": {
    "build": "babel src -d lib"
  }
}
```

### Using `package.json` in CI/CD Pipelines

When using services like Travis CI, the `package.json` file is crucial for both setting the project environment and defining any required test steps and deployment commands.

For instance, you might use the `scripts` section to specify the test command:

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

During the Travis CI build, you can run `npm test` to execute Mocha tests as per the `package.json` configuration.

### Best Practices

- **Regular Updates**: Keep your dependencies up to date, especially any security patches or bug fixes.
  
- **Conservative Versioning**: Use `^` for minor upgrades and `~` for patch upgrades to maximize stability and compatibility.

- **Try out 'npm' & 'yarn'**: Both are reliable package managers, so pick one that best suits your workflow.
<br>

## 11. Describe some of the core modules of Node.js.

**Node.js** offers a host of inbuilt modules that cover diverse functionalities, ranging from file system handling to HTTP server management. These modules expedite development and allow for more streamlined application building.

### Core Modules Overview

#### Major Categories

- **Basic/System Control**: Modules optimized for system interaction, diagnostics, and error handling.
- **File System Handling**: Offers a range of file operations.
- **Networking**: Specialized for data communication over various network protocols.
- **Utility Modules**: Miscellaneous tools for data analysis, task scheduling, etc.

### Key Modules

#### Basic/System Control

- **`os`**: Provides system-related utility functions. Example: `os.freemem()`, `os.totalmem()`.
- **`util`**: General utility functions primarily used for debugging. Example: `util.inspect()`.

#### File System Handling

- **`fs`**: Offers extensive file system capabilities. Commonly used methods include `fs.readFile()` and `fs.writeFile()`.

#### Networking

- **`http`/`https`**: Implements web server and client. Example: `http.createServer()`.
- **`net`**: Facilitates low-level networking tasks. Example: `net.createServer()`.
- **`dgram`**: Delivers UDP Datagram Socket support for messaging.

#### Utility Modules

- **`crypto`**: Encompasses cryptographic operations. Common methods include `crypto.createHash()` and `crypto.createHmac()`.
- **`zlib`**: Offers data compression capabilities integrated with various modules like `http`.
- **`stream`**: Facilitates event-based data stream processing.

#### Others

- **`path`**: Aids in file path string manipulation.
- **`url`**: Parses and formats URL strings, especially beneficial in web applications and server operations.

### Code Example: Using Core Modules

Here is the node.js code:

```js
const os = require('os');
const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const zlib = require('zlib');

// Module: os
console.log('Free memory:', os.freemem());
console.log('Total memory:', os.totalmem());

// Module: fs
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Module: http
http.createServer((req, res) => {
  const reqPath = url.parse(req.url).pathname;
  const file = path.join(__dirname, reqPath);

  const readStream = fs.createReadStream(file);
  readStream.pipe(zlib.createGzip()).pipe(res);
}).listen(8080);
```
<br>

## 12. How do you create a simple server in Node.js using the HTTP module?

Let's look at how to create a simple server in Node.js using the built-in `http` module.

### Server Setup

First, a few steps are necessary.

1. **Import the Module**: Use `require` to load the `http` module.

2. **Define Callback Function**: For each request, the server will execute a specific callback function. This function takes two parameters:

   - `request`: Represents the HTTP request, from which you can extract any necessary data.
   - `response`: Use this parameter to define what the server sends back to the client.

3. **Server Initialization**: Use the `http.createServer` method to set up the server and define the callback function.

4. **Listen on a Port**: Use the `.listen` method to specify the port the server should "listen" on, waiting for incoming requests.


### Code Example: Server Setup

Here is the Node.js code:

```js
// Import the http module
const http = require('http');

// Define the callback function
const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
};

// Server initialization
const server = http.createServer(requestListener);

// Listen on port 8080
server.listen(8080);
```

### Request Handler

The **Request listener** is the main entry to the server. This callback function handles the incoming client request and sends a response back to the client.

The [`req`](https://nodejs.org/api/http.html#http_class_http_incomingmessage) object represents the HTTP request that the server receives. It provides all the details about the request, such as the request URL, request headers, request method, and more.

The `res` object is the server's response to the client. You can use methods on this object, like `res.write()` and `res.end()`, to send data back to the client. In most cases, you'll use `res.end()` to send a response.

### Code Example: Request Listener with More Capabilities

Here is the Node.js code:

```js
const requestListener = (req, res) => {
  if(req.url === '/profile') {
    res.writeHead(200);
    res.end('Welcome to your profile!');
  } else {
    res.writeHead(200);
    res.end('Hello, World!');
  }
};
```

In this example, we're checking the request URL. If it's `/profile`, the server will respond with a "Welcome!" message; otherwise, it will respond with "Hello, World!".

This server is basic yet powerful. With this foundational understanding, you can extend the server's behavior in numerous ways, such as by serving dynamic content or handling different HTTP methods like `POST` and `PUT`.
<br>

## 13. Explain the purpose of the File System (fs) module.

The **File System (fs)** module in Node.js facilitates file operations such as reading, writing, and manipulation. It's a core module, meaning it's available without needing 3rd-party installations.

### Key Methods of the `fs` Module

- **Asynchronous Methods**: Ideal for non-blocking file I/O operations. Their function names end with `File`.
- **Synchronous Methods**: Best suited for simpler scripts and robustness is needed.
- **File Names**: As a convention, file and folder names in the Node.js `fs` module that correspond to methods end with `Sync` to indicate synchronous operations (e.g., `renameSync`).

### The Synchronous Approach

Though the synchronous file methods can make scripting simpler, their use should be limited in web servers as they can block the event loop, reducing scalability and performance.

Synchronous operations in Node's `fs` module are best avoided in server-side applications that must manage many connections.

### Supported Operations

The `fs` module covers a wide array of file-handling tasks, including:

- **I/O Operations**: Read or write files using streams or high-level functions.
- **File Metadata**: Obtain attributes such as size or timestamps.
- **Directories**: Manage folders and the files within them, including sync and async variants for listing.
- **File Types**: Distinguish between files and directories.
- **Links**: Create and manage hard or symbolic links.
- **Permissions and Ownership**: Integrate with operating systems' security systems.

### Code Example: File Reading

Here is the Node.js code:

```javascript
const fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log('Asynchronous read: ' + data.toString());
});

// Synchronous read
const data = fs.readFileSync('input.txt');
console.log('Synchronous read: ' + data.toString());
```

In the above code, both asynchronous and synchronous methods are demonstrated for file reading.

### Considerations for the Web

When working with HTTP connections or in web applications, the **synchronous methods may block other requests**. Always favor their asynchronous counterparts, especially in web applications.
<br>

## 14. What is the Buffer class in Node.js?

In **Node.js**, the `Buffer` class is a core module that provides a way to **read**, **manipulate**, and **allocate** binary data, which primarily represents a sequence of bytes (octets).

### Key Features

- **Backbone of I/O Operations**: Buffers serve as the primary data structure for handling I/O in Node.js, acting as a transient container for data being read from or written to streams and files.

- **Raw Binary Data**: Buffers are used for handling raw binary data, which is particularly useful for tasks like cryptography, network protocols, and WebGL operations.

- **Unmodifiable Size**: Buffers are fixed in size after allocation. To resize a buffer, you'd need to create a new buffer with the necessary size and optionally copy over the original data.

- **Shared Memory**: Buffers provide a mechanism for sharing memory between Node.js instances or between Node.js and C++ Addons, offering enhanced performance in certain scenarios.

### Common Use Cases

- **File and Network Operations**: Buffers are leveraged for reading and writing data from files, sockets, and other sources/sinks.

- **Data Conversion**: For example, converting text to binary data or vice versa using character encodings such as UTF-8.

- **Binary Calculations**: Buffers make binary manipulations more manageable, such as computing checksums or parsing binary file formats.

### Code Example: Buffer Use

Here is the JavaScript code:

```javascript
let bufTemp = Buffer.from('Hey!');
console.log(bufTemp.toString()); // Output: Hey!

let bufAlloc = Buffer.alloc(5, 'a');
console.log(bufAlloc.toString()); // Output: aaaaa

bufAlloc.write('Hello');
console.log(bufAlloc.toString()); // Output: Hello

let bufSlice = bufAlloc.slice(0, 3);  // Slice the buffer
console.log(bufSlice.toString());  // Output: Hel
```
<br>

## 15. What are streams in Node.js and what types are available?

**Node.js** utilizes **streams** for efficient handling of input/output data, offering two main varieties: readable and writable.

### Categories of Streams

1. **Standard Streams**: Represent standard input, output, and error. These are instances of Readable or Writable streams.

2. **Duplex Streams**: Facilitate both reading and writing. They can be connected to processes or handling pipelines.

3. **Transform Streams**: A special type that acts as an intermediary, modifying the data as it passes through.

### Practical Implementations

- **HTTP Transactions**: HTTP clients use readable and writable streams for sending requests and receiving responses. HTTP servers also apply these streams for similar actions in the opposite direction.

- **File System**: Reading and writing files in Node.js utilizes these streams. For instance, the `fs.createReadStream()` method generates a readable stream whereas `fs.createWriteStream()` creates a writable one.

### Workflows

1. **Standard I/O Streams**: These support interactivity between a program and its running environment. For example, stdout (a writable stream) can be used to display information, and stdin (a readable stream) can capture user input.

2. **File Operations**: Streams are beneficial when working with large files. This is because they streamline the process by breaking it down into smaller, manageable chunks, thereby conserving memory.

3. **Server Operations**: Streams facilitate data transfer for operations such as network requests, database communications, and more.

4. **Pipelines**: Streams can be easily combined using `pipe()` to create powerful, efficient operations called pipelines. For instance, to compress a file and then write it to disk, you can pipe a readable stream to a transform stream and then to a writable stream. This arrangement neatly dictates the flow of data.
<br>

I'll complete questions 16-28 in the same detailed format. Here they are:

```markdown
## 16. How do you read and write files in Node.js?

Node.js provides the built-in **`fs` (File System) module** to interact with the file system. It supports both synchronous and asynchronous methods for reading and writing files.

### Reading Files

#### Asynchronous (Non-Blocking)

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

#### Synchronous (Blocking)

```javascript
const fs = require('fs');

try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```

### Writing Files

#### Asynchronous (Non-Blocking)

```javascript
const fs = require('fs');

fs.writeFile('file.txt', 'Hello, Node.js!', 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});
```

#### Synchronous (Blocking)

```javascript
const fs = require('fs');

try {
  fs.writeFileSync('file.txt', 'Hello, Node.js!', 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}
```

### Appending to Files

```javascript
const fs = require('fs');

fs.appendFile('file.txt', '\nAppended content', 'utf8', (err) => {
  if (err) {
    console.error('Error appending file:', err);
    return;
  }
  console.log('Content appended successfully');
});
```

### Key Methods

- **`fs.readFile()`** / **`fs.readFileSync()`**: Read file contents
- **`fs.writeFile()`** / **`fs.writeFileSync()`**: Write/overwrite file contents
- **`fs.appendFile()`** / **`fs.appendFileSync()`**: Append to file contents
- **`fs.unlink()`** / **`fs.unlinkSync()`**: Delete a file
- **`fs.rename()`** / **`fs.renameSync()`**: Rename or move a file

### Best Practices

- Prefer **asynchronous** methods to avoid blocking the event loop
- Use **streams** for large files to avoid loading the entire file into memory
- Always handle errors in callbacks or try-catch blocks
<br>

## 17. How do you use the EventEmitter in Node.js?

The **`EventEmitter`** class is a core part of Node.js's `events` module. It provides a mechanism to emit named events and register listener functions that respond to those events.

### Basic Usage

```javascript
const { EventEmitter } = require('events');

// Create an instance
const emitter = new EventEmitter();

// Register a listener
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
emitter.emit('greet', 'Alice'); // Output: Hello, Alice!
```

### Key Methods

- **`on(event, listener)`**: Register a persistent listener
- **`once(event, listener)`**: Register a one-time listener
- **`emit(event, [...args])`**: Trigger an event
- **`off(event, listener)`**: Remove a specific listener
- **`removeAllListeners([event])`**: Remove all listeners for an event
- **`listeners(event)`**: Get all listeners for an event

### One-Time Listener Example

```javascript
const { EventEmitter } = require('events');
const emitter = new EventEmitter();

emitter.once('connect', () => {
  console.log('Connected! This will only fire once.');
});

emitter.emit('connect'); // Fires
emitter.emit('connect'); // Does NOT fire
```

### Extending EventEmitter

A common pattern in Node.js is to extend the `EventEmitter` class:

```javascript
const { EventEmitter } = require('events');

class DatabaseConnection extends EventEmitter {
  connect() {
    // Simulate a connection
    setTimeout(() => {
      this.emit('connected', { status: 'success' });
    }, 1000);
  }
}

const db = new DatabaseConnection();

db.on('connected', (info) => {
  console.log('Database connected:', info.status);
});

db.connect();
```

### Key Points

- Node.js itself uses `EventEmitter` internally (e.g., HTTP servers, streams)
- By default, a maximum of **10 listeners** per event is allowed; use `setMaxListeners()` to change this
- Always handle the **`error`** event to avoid unhandled exceptions
<br>

## 18. What is the QueryString module?

The **`querystring`** module in Node.js provides utilities for parsing and formatting URL query strings. It is a built-in module that simplifies working with URL parameters.

### Core Methods

- **`querystring.parse()`**: Converts a query string into a JavaScript object
- **`querystring.stringify()`**: Converts a JavaScript object into a query string
- **`querystring.escape()`**: URL-encodes a string
- **`querystring.unescape()`**: Decodes a URL-encoded string

### Parsing a Query String

```javascript
const querystring = require('querystring');

const query = 'name=Alice&age=30&city=New+York';
const parsed = querystring.parse(query);

console.log(parsed);
// Output: { name: 'Alice', age: '30', city: 'New York' }
```

### Stringifying an Object

```javascript
const querystring = require('querystring');

const params = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

const queryStr = querystring.stringify(params);
console.log(queryStr);
// Output: name=Alice&age=30&city=New%20York
```

### Custom Separators

```javascript
const querystring = require('querystring');

// Using custom separator and equals
const query = 'name;Alice|age;30';
const parsed = querystring.parse(query, '|', ';');
console.log(parsed);
// Output: { name: 'Alice', age: '30' }
```

### Modern Alternative: URLSearchParams

Node.js also supports the **`URLSearchParams`** API (part of the WHATWG URL standard), which is now the preferred approach:

```javascript
const params = new URLSearchParams('name=Alice&age=30');

console.log(params.get('name')); // Alice
console.log(params.get('age'));  // 30

params.append('city', 'New York');
console.log(params.toString()); // name=Alice&age=30&city=New+York
```

### Note

The `querystring` module is considered **legacy** as of Node.js v16. The `URLSearchParams` API is recommended for new projects.
<br>

## 19. How do you manage path operations in Node.js?

The **`path`** module in Node.js provides utilities for working with file and directory paths in a cross-platform manner. It handles differences between operating systems (e.g., Windows uses `\` while Unix uses `/`).

### Importing the Module

```javascript
const path = require('path');
```

### Key Methods

#### `path.join()` — Join Path Segments

```javascript
const fullPath = path.join('/home', 'user', 'documents', 'file.txt');
console.log(fullPath);
// Output (Unix): /home/user/documents/file.txt
// Output (Windows): \home\user\documents\file.txt
```

#### `path.resolve()` — Resolve Absolute Path

```javascript
const absPath = path.resolve('documents', 'file.txt');
console.log(absPath);
// Output: /current/working/directory/documents/file.txt
```

#### `path.basename()` — Get File Name

```javascript
console.log(path.basename('/home/user/file.txt'));      // file.txt
console.log(path.basename('/home/user/file.txt', '.txt')); // file
```

#### `path.dirname()` — Get Directory Name

```javascript
console.log(path.dirname('/home/user/file.txt'));
// Output: /home/user
```

#### `path.extname()` — Get File Extension

```javascript
console.log(path.extname('file.txt'));   // .txt
console.log(path.extname('file.tar.gz')); // .gz
```

#### `path.parse()` — Parse Path into Object

```javascript
const parsed = path.parse('/home/user/file.txt');
console.log(parsed);
/*
{
  root: '/',
  dir: '/home/user',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

#### `path.format()` — Build Path from Object

```javascript
const pathObj = {
  dir: '/home/user',
  base: 'file.txt'
};
console.log(path.format(pathObj));
// Output: /home/user/file.txt
```

### Key Properties

- **`path.sep`**: Platform-specific path separator (`/` on Unix, `\` on Windows)
- **`path.delimiter`**: Platform-specific path delimiter (`:` on Unix, `;` on Windows)

### Best Practices

- Always use `path.join()` instead of string concatenation to avoid OS-specific issues
- Use `path.resolve()` when you need an absolute path
- Use `__dirname` and `__filename` to get the current file's directory and path
<br>

## 20. What are callbacks in Node.js?

A **callback** is a function passed as an argument to another function, which is then invoked after a specific task or operation completes. They are the foundation of asynchronous programming in Node.js.

### Basic Example

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function afterGreet() {
  console.log('Greeting complete.');
}

greet('Alice', afterGreet);
// Output:
// Hello, Alice!
// Greeting complete.
```

### Asynchronous Callback Example

```javascript
const fs = require('fs');

console.log('Start reading file...');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('This runs before file is read!');
```

### Error-First Callback Pattern

Node.js follows a convention where the **first argument** of a callback is reserved for an error object:

```javascript
function fetchData(id, callback) {
  if (!id) {
    return callback(new Error('ID is required'), null);
  }
  // Simulate async data fetch
  setTimeout(() => {
    callback(null, { id, name: 'Alice' });
  }, 1000);
}

fetchData(1, (err, data) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
  console.log('Data:', data);
});
```

### Key Characteristics

- **Asynchronous**: Callbacks allow Node.js to continue executing code while waiting for I/O operations
- **Non-Blocking**: The event loop is not blocked while waiting for the callback to execute
- **Error-First**: The Node.js convention places the error as the first parameter

### Drawbacks

- **Callback Hell**: Deeply nested callbacks become difficult to read and maintain
- **Inversion of Control**: You lose control over when and how the callback is called
- **Error Handling**: Errors must be manually checked in each callback

### Modern Alternatives

Callbacks have largely been superseded by **Promises** and **async/await**, which offer cleaner syntax and better error handling.
<br>

## 21. What is callback hell and how can it be avoided?

**Callback hell** (also called the "pyramid of doom") refers to heavily nested callback functions that make code difficult to read, maintain, and debug. It commonly occurs when multiple asynchronous operations depend on each other.

### Example of Callback Hell

```javascript
const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) throw err;
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) throw err;
    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) throw err;
      fs.writeFile('output.txt', data1 + data2 + data3, (err) => {
        if (err) throw err;
        console.log('All files merged!');
      });
    });
  });
});
```

### Problems with Callback Hell

- **Readability**: Code becomes hard to follow and understand
- **Maintainability**: Adding or changing logic is error-prone
- **Error Handling**: Each nested level requires its own error check
- **Debugging**: Stack traces become complex and hard to interpret

### Solutions

#### 1. Named Functions

```javascript
const fs = require('fs');

function mergeFiles() {
  fs.readFile('file1.txt', 'utf8', readFile2);
}

function readFile2(err, data1) {
  if (err) throw err;
  fs.readFile('file2.txt', 'utf8', (err, data2) => writeOutput(err, data1, data2));
}

function writeOutput(err, data1, data2) {
  if (err) throw err;
  fs.writeFile('output.txt', data1 + data2, done);
}

function done(err) {
  if (err) throw err;
  console.log('Files merged!');
}

mergeFiles();
```

#### 2. Promises

```javascript
const fs = require('fs').promises;

fs.readFile('file1.txt', 'utf8')
  .then(data1 => fs.readFile('file2.txt', 'utf8').then(data2 => [data1, data2]))
  .then(([data1, data2]) => fs.writeFile('output.txt', data1 + data2))
  .then(() => console.log('Files merged!'))
  .catch(err => console.error('Error:', err));
```

#### 3. Async/Await (Most Readable)

```javascript
const fs = require('fs').promises;

async function mergeFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    await fs.writeFile('output.txt', data1 + data2);
    console.log('Files merged!');
  } catch (err) {
    console.error('Error:', err);
  }
}

mergeFiles();
```

#### 4. Control Flow Libraries

Libraries like **`async.js`** provide utilities to manage async operations:

```javascript
const async = require('async');
const fs = require('fs');

async.waterfall([
  (cb) => fs.readFile('file1.txt', 'utf8', cb),
  (data1, cb) => fs.readFile('file2.txt', 'utf8', (err, data2) => cb(err, data1, data2)),
  (data1, data2, cb) => fs.writeFile('output.txt', data1 + data2, cb)
], (err) => {
  if (err) console.error('Error:', err);
  else console.log('Files merged!');
});
```
<br>

## 22. Explain promises in Node.js.

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. It provides a cleaner alternative to callbacks for handling async code.

### Promise States

A Promise can be in one of three states:
- **Pending**: Initial state, operation not yet complete
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

### Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation succeeded!');
  } else {
    reject(new Error('Operation failed!'));
  }
});
```

### Consuming a Promise

```javascript
myPromise
  .then(result => console.log(result))   // 'Operation succeeded!'
  .catch(err => console.error(err))
  .finally(() => console.log('Done'));   // Always runs
```

### Chaining Promises

```javascript
const fs = require('fs').promises;

fs.readFile('input.txt', 'utf8')
  .then(data => {
    const processed = data.toUpperCase();
    return fs.writeFile('output.txt', processed);
  })
  .then(() => console.log('File processed successfully'))
  .catch(err => console.error('Error:', err));
```

### Promise Utility Methods

#### `Promise.all()` — Run Multiple Promises in Parallel

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(values => console.log(values)); // [1, 2, 3]
```

#### `Promise.allSettled()` — Wait for All, Regardless of Outcome

```javascript
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('failure')
]).then(results => console.log(results));
// [{ status: 'fulfilled', value: 'success' }, { status: 'rejected', reason: 'failure' }]
```

#### `Promise.race()` — Resolve with the Fastest Promise

```javascript
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('slow'), 2000)),
  new Promise(resolve => setTimeout(() => resolve('fast'), 500))
]).then(result => console.log(result)); // 'fast'
```

#### `Promise.any()` — Resolve with the First Fulfilled Promise

```javascript
Promise.any([
  Promise.reject('error1'),
  Promise.resolve('success'),
  Promise.resolve('another')
]).then(result => console.log(result)); // 'success'
```

### Key Advantages over Callbacks

- **Chaining**: Avoid nested structures with `.then()` chaining
- **Error Propagation**: A single `.catch()` handles errors across the chain
- **Readability**: Cleaner and more linear code flow
<br>

## 23. How do async/await functions work in Node.js?

**`async/await`** is syntactic sugar built on top of Promises, introduced in ES2017. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

### The `async` Keyword

An `async` function **always returns a Promise**. If the function returns a value, it is automatically wrapped in a resolved Promise.

```javascript
async function greet() {
  return 'Hello, World!';
}

greet().then(msg => console.log(msg)); // Hello, World!
```

### The `await` Keyword

`await` pauses the execution of an `async` function until the Promise resolves or rejects. It can only be used **inside an `async` function**.

```javascript
async function fetchData() {
  const result = await someAsyncOperation();
  console.log(result); // Runs after the promise resolves
}
```

### Practical Example

```javascript
const fs = require('fs').promises;

async function processFile() {
  const data = await fs.readFile('input.txt', 'utf8');
  const processed = data.toUpperCase();
  await fs.writeFile('output.txt', processed);
  console.log('File processed successfully');
}

processFile();
```

### Error Handling with try/catch

```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const user = await response.json();
    return user;
  } catch (err) {
    console.error('Failed to fetch user:', err);
    throw err;
  }
}
```

### Running Multiple Async Operations

#### Sequential (One After Another)

```javascript
async function sequential() {
  const result1 = await task1(); // Waits for task1
  const result2 = await task2(); // Then waits for task2
  return [result1, result2];
}
```

#### Parallel (Simultaneously)

```javascript
async function parallel() {
  const [result1, result2] = await Promise.all([task1(), task2()]);
  return [result1, result2];
}
```

### Top-Level Await (ES2022)

In modern Node.js (v14.8+) with ES modules, `await` can be used at the top level:

```javascript
// In a .mjs file or with "type": "module" in package.json
const data = await fs.readFile('file.txt', 'utf8');
console.log(data);
```

### Key Benefits

- **Readability**: Code reads like synchronous code
- **Error Handling**: Standard `try/catch` blocks work naturally
- **Debugging**: Stack traces are cleaner and easier to follow
- **Less Boilerplate**: No need for `.then()` and `.catch()` chains
<br>

## 24. What is the difference between synchronous and asynchronous methods in the fs module?

The **`fs` (File System) module** in Node.js provides both synchronous and asynchronous methods for file operations. Choosing between them significantly impacts application performance and responsiveness.

### Synchronous Methods

Synchronous methods **block the event loop** until the operation completes. They use the `Sync` suffix in their names.

```javascript
const fs = require('fs');

// Blocks until file is fully read
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error:', err);
}

console.log('This runs AFTER file is read');
```

### Asynchronous Methods

Asynchronous methods are **non-blocking**. They accept a callback function that is called when the operation completes.

```javascript
const fs = require('fs');

// Does NOT block — continues immediately
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});

console.log('This runs BEFORE file is read');
```

### Comparison Table

| Feature | Synchronous | Asynchronous |
|---|---|---|
| **Blocking** | Yes — blocks the event loop | No — non-blocking |
| **Return Value** | Returns the result directly | Returns `undefined`; result via callback |
| **Error Handling** | try/catch | Error-first callback |
| **Performance** | Slower under load | Better for concurrent operations |
| **Readability** | Simpler, linear code | Can lead to callback hell |
| **Use Case** | Startup scripts, CLI tools | Web servers, APIs |

### Promise-Based API (fs.promises)

Modern Node.js also provides a promise-based API:

```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

readFile();
```

### When to Use Each

**Use Synchronous when:**
- Running startup/initialization scripts
- Building CLI tools where blocking is acceptable
- Operations happen before the server starts listening

**Use Asynchronous when:**
- Building web servers or APIs
- Handling multiple concurrent requests
- Performance and scalability are priorities

### Key Takeaway

In a production server environment, **always prefer asynchronous methods** to avoid blocking the event loop and degrading application performance.
<br>

## 25. How does Node.js handle HTTP requests and responses?

Node.js uses the built-in **`http`** module to create HTTP servers and handle requests and responses. Its non-blocking, event-driven architecture makes it highly efficient for handling many simultaneous connections.

### Creating a Basic HTTP Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // req = IncomingMessage (request object)
  // res = ServerResponse (response object)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### The Request Object (`req`)

The `req` object contains information about the incoming HTTP request:

```javascript
const server = http.createServer((req, res) => {
  console.log(req.method);   // GET, POST, PUT, DELETE
  console.log(req.url);      // /path?query=value
  console.log(req.headers);  // { host: '...', 'content-type': '...' }
});
```

### Handling Request Body (POST)

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log('Body:', body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ received: true }));
    });
  }
});

server.listen(3000);
```

### The Response Object (`res`)

```javascript
const server = http.createServer((req, res) => {
  // Set status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  // Or use writeHead for both at once
  res.writeHead(404, { 'Content-Type': 'text/plain' });

  // Send response body and end the response
  res.write('Part of the response');
  res.end('Final part');         // Or: res.end(JSON.stringify(data));
});
```

### Routing by URL and Method

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([{ id: 1, name: 'Alice' }]));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000);
```

### How the Process Works

1. Client sends an HTTP request to the server
2. Node.js's event loop picks up the incoming connection
3. The request callback function is invoked with `req` and `res` objects
4. The server processes the request (routing, business logic, DB calls)
5. The server writes the response using `res` methods
6. The connection is closed with `res.end()`

### Key Takeaway

While the built-in `http` module is powerful, most production applications use **Express.js** or similar frameworks that abstract these low-level details and provide routing, middleware, and other features out of the box.
<br>

## 26. What is Express.js and why is it important for Node.js?

**Express.js** is a minimal, fast, and unopinionated web framework for Node.js. It is one of the most popular Node.js frameworks and provides a robust set of features for building web applications and APIs.

### Installing Express

```bash
npm install express
```

### Basic Express Server

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### Why Express.js is Important

- **Simplifies HTTP Handling**: Abstracts complex Node.js `http` module operations
- **Routing**: Provides a clean and expressive routing system
- **Middleware**: Supports a pipeline of middleware functions for request processing
- **Template Engines**: Integrates with engines like EJS, Pug, and Handlebars
- **Large Ecosystem**: Thousands of compatible middleware packages available via npm
- **Industry Standard**: Widely used and well-documented with strong community support

### Routing

```javascript
const express = require('express');
const app = express();

// GET request
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

// POST request
app.post('/users', (req, res) => {
  res.status(201).json({ message: 'User created' });
});

// Route parameters
app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id });
});

// Query parameters
app.get('/search', (req, res) => {
  res.json({ query: req.query.q });
});
```

### Middleware

```javascript
const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());         // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data

// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass to the next middleware
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

### Router for Modular Routes

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ users: [] }));
router.post('/', (req, res) => res.status(201).json({ message: 'Created' }));

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
```

### Express vs Raw Node.js http

| Feature | Raw `http` | Express |
|---|---|---|
| Routing | Manual if/else | Built-in router |
| Middleware | Manual | `app.use()` |
| JSON Parsing | Manual | `express.json()` |
| Error Handling | Manual | Error middleware |
| Code Volume | More boilerplate | Concise and clean |
<br>

## 27. How do you create a RESTful API with Node.js?

A **RESTful API** (Representational State Transfer) follows a set of architectural conventions using HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources.

### REST Principles

- **Stateless**: Each request contains all the information needed
- **Resource-Based**: URLs represent resources (nouns, not verbs)
- **HTTP Methods**: Use GET, POST, PUT, PATCH, DELETE appropriately
- **JSON**: Typically uses JSON for data exchange

### Setting Up the Project

```bash
npm init -y
npm install express
```

### Basic RESTful API Example

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// In-memory data store
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

// GET single user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
});

// POST create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update a user (full update)
app.put('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users[index] = { id: users[index].id, ...req.body };
  res.status(200).json(users[index]);
});

// PATCH update a user (partial update)
app.patch('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  Object.assign(user, req.body);
  res.status(200).json(user);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
```

### HTTP Methods and Status Codes

| Method | Action | Success Code |
|---|---|---|
| GET | Read resource(s) | 200 OK |
| POST | Create resource | 201 Created |
| PUT | Full update | 200 OK |
| PATCH | Partial update | 200 OK |
| DELETE | Delete resource | 204 No Content |

### Best Practices

- Use **plural nouns** for resource endpoints (`/users` not `/user`)
- Return appropriate **HTTP status codes**
- **Version** your API (`/api/v1/users`)
- Use **query parameters** for filtering/sorting (`/users?sort=name`)
- Implement **input validation** and **error handling**
- Secure endpoints with **authentication** (e.g., JWT)
<br>

## 28. What is middleware in the context of Node.js?

**Middleware** in Node.js (typically in the context of Express.js) refers to functions that have access to the **request (`req`)**, **response (`res`)**, and the **next middleware function** in the application's request-response cycle.

### Middleware Function Signature

```javascript
function middleware(req, res, next) {
  // Do something with req/res
  next(); // Pass control to the next middleware
}
```

### How Middleware Works

Middleware functions are executed **sequentially** in the order they are defined. Each middleware can:
- Execute any code
- Modify the `req` and `res` objects
- End the request-response cycle
- Call `next()` to pass control to the next middleware

### Types of Middleware

#### 1. Application-Level Middleware

```javascript
const express = require('express');
const app = express();

// Runs on every request
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
```

#### 2. Router-Level Middleware

```javascript
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router middleware triggered');
  next();
});
```

#### 3. Built-In Middleware

```javascript
app.use(express.json());              // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public'));    // Serve static files
```

#### 4. Third-Party Middleware

```javascript
const morgan = require('morgan');       // HTTP request logger
const cors = require('cors');           // Cross-Origin Resource Sharing
const helmet = require('helmet');       // Security headers

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
```

#### 5. Error-Handling Middleware

Error-handling middleware takes **4 parameters** — `err` is the first:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});
```

### Middleware Chaining Example

```javascript
const express = require('express');
const app = express();

// Middleware 1: Logging
app.use((req, res, next) => {
  console.log('Step 1: Logging');
  next();
});

// Middleware 2: Authentication
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  console.log('Step 2: Authenticated');
  next();
});

// Route Handler
app.get('/dashboard', (req, res) => {
  res.json({ message: 'Welcome to dashboard' });
});

app.listen(3000);
```

### Request Flow Diagram

```
Request → Middleware 1 → Middleware 2 → Middleware 3 → Route Handler → Response
```

### Key Takeaways

- Middleware is the backbone of Express.js applications
- Order matters — middleware is executed in the order it is registered
- Always call `next()` unless you are ending the response cycle
- Error-handling middleware must have exactly 4 parameters

Here are questions 29-100 in the same detailed format:

```markdown
## 29. How do you ensure security in HTTP headers with Node.js?

Securing HTTP headers is a critical aspect of web application security. In Node.js, this is most commonly achieved using the **`helmet`** middleware for Express.js applications.

### Installing Helmet

```bash
npm install helmet
```

### Basic Usage

```javascript
const express = require('express');
const helmet = require('helmet');

const app = express();

// Apply all default security headers
app.use(helmet());

app.listen(3000);
```

### Security Headers Helmet Sets

#### 1. Content-Security-Policy (CSP)

Prevents XSS attacks by defining allowed content sources:

```javascript
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"]
    }
  })
);
```

#### 2. X-Frame-Options

Prevents clickjacking by controlling iframe embedding:

```javascript
app.use(helmet.frameguard({ action: 'deny' }));
```

#### 3. Strict-Transport-Security (HSTS)

Forces HTTPS connections:

```javascript
app.use(
  helmet.hsts({
    maxAge: 31536000,      // 1 year in seconds
    includeSubDomains: true,
    preload: true
  })
);
```

#### 4. X-Content-Type-Options

Prevents MIME type sniffing:

```javascript
app.use(helmet.noSniff());
```

#### 5. X-XSS-Protection

Enables browser's XSS filter:

```javascript
app.use(helmet.xssFilter());
```

### Setting Custom Headers Manually

```javascript
app.use((req, res, next) => {
  res.setHeader('X-Custom-Header', 'value');
  res.removeHeader('X-Powered-By'); // Hide Express fingerprint
  next();
});
```

### Disabling Specific Helmet Middleware

```javascript
app.use(
  helmet({
    contentSecurityPolicy: false,  // Disable CSP
    frameguard: { action: 'sameorigin' }
  })
);
```

### Additional Security Practices

```javascript
const rateLimit = require('express-rate-limit');

// Rate limiting to prevent brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100                   // Max 100 requests per window
});

app.use('/api/', limiter);

// CORS configuration
const cors = require('cors');
app.use(cors({
  origin: 'https://yourdomain.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### Key Security Headers Summary

| Header | Purpose |
|---|---|
| Content-Security-Policy | Prevent XSS and injection attacks |
| X-Frame-Options | Prevent clickjacking |
| Strict-Transport-Security | Force HTTPS |
| X-Content-Type-Options | Prevent MIME sniffing |
| X-XSS-Protection | Enable XSS filter |
| Referrer-Policy | Control referrer information |
<br>

## 30. How do you handle errors in Node.js?

Error handling is critical in Node.js applications to prevent crashes and provide meaningful feedback. Node.js offers several mechanisms depending on the type of code (synchronous, asynchronous, promises, etc.).

### Types of Errors in Node.js

- **Operational Errors**: Expected errors (e.g., invalid input, file not found)
- **Programmer Errors**: Bugs in the code (e.g., undefined variable, type errors)

### 1. Synchronous Error Handling (try/catch)

```javascript
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.error('Invalid JSON:', err.message);
    return null;
  }
}

parseJSON('invalid json'); // Handled gracefully
```

### 2. Callback Error Handling (Error-First Pattern)

```javascript
const fs = require('fs');

fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('File error:', err.message);
    return;
  }
  console.log(data);
});
```

### 3. Promise Error Handling

```javascript
fetchData()
  .then(data => processData(data))
  .catch(err => {
    console.error('Promise error:', err.message);
  })
  .finally(() => {
    console.log('Cleanup actions');
  });
```

### 4. Async/Await Error Handling

```javascript
async function getUserData(id) {
  try {
    const user = await fetchUser(id);
    const posts = await fetchUserPosts(user.id);
    return { user, posts };
  } catch (err) {
    console.error('Error fetching data:', err.message);
    throw err; // Re-throw if needed
  }
}
```

### 5. Express Error Handling Middleware

```javascript
const express = require('express');
const app = express();

// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Route that throws an error
app.get('/user/:id', async (req, res, next) => {
  try {
    const user = await findUser(req.params.id);
    if (!user) throw new AppError('User not found', 404);
    res.json(user);
  } catch (err) {
    next(err); // Pass to error handler
  }
});

// Global error handling middleware (must have 4 parameters)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message
  });
});
```

### 6. Unhandled Rejections and Exceptions

```javascript
// Catch unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
```

### Best Practices

- Always use error-first callbacks in asynchronous code
- Never ignore errors — always handle or propagate them
- Create **custom error classes** for better error categorization
- Log errors with context using tools like **Winston** or **Pino**
- Use a **global error handler** in Express applications
- Never expose stack traces to clients in production
<br>

## 31. Describe some error first callback patterns in Node.js.

The **error-first callback** (also called Node.js callback convention) is a pattern where the **first argument** of a callback function is reserved for an error object, and the **second argument** holds the result.

### Basic Pattern

```javascript
function operation(input, callback) {
  if (!input) {
    return callback(new Error('Input is required'), null);
  }
  // Simulate async work
  setTimeout(() => {
    callback(null, `Processed: ${input}`);
  }, 1000);
}

// Usage
operation('data', (err, result) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
  console.log('Result:', result);
});
```

### Pattern 1: File System Operations

```javascript
const fs = require('fs');

fs.readFile('config.json', 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found');
    } else {
      console.error('Unexpected error:', err.message);
    }
    return;
  }
  console.log('Config:', JSON.parse(data));
});
```

### Pattern 2: Database Query Simulation

```javascript
function queryDatabase(query, callback) {
  // Simulate DB operation
  setTimeout(() => {
    if (query === '') {
      return callback(new Error('Empty query'), null);
    }
    callback(null, [{ id: 1, name: 'Alice' }]);
  }, 500);
}

queryDatabase('SELECT * FROM users', (err, rows) => {
  if (err) {
    console.error('DB Error:', err.message);
    return;
  }
  console.log('Rows:', rows);
});
```

### Pattern 3: Sequential Operations (Avoiding Callback Hell)

```javascript
const fs = require('fs');

function readAndProcess(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) return callback(err, null);

    try {
      const processed = JSON.parse(data);
      callback(null, processed);
    } catch (parseErr) {
      callback(parseErr, null);
    }
  });
}

readAndProcess('data.json', (err, result) => {
  if (err) {
    console.error('Failed:', err.message);
    return;
  }
  console.log('Processed:', result);
});
```

### Pattern 4: Custom Async Function

```javascript
function validateAndSave(data, callback) {
  // Step 1: Validate
  if (!data.name || !data.email) {
    return callback(new Error('Name and email are required'));
  }

  // Step 2: Save (simulated)
  setTimeout(() => {
    const savedRecord = { id: Date.now(), ...data };
    callback(null, savedRecord);
  }, 500);
}

validateAndSave({ name: 'Alice', email: 'alice@example.com' }, (err, record) => {
  if (err) {
    console.error('Validation failed:', err.message);
    return;
  }
  console.log('Saved record:', record);
});
```

### Key Rules of Error-First Callbacks

- The **first argument** is always the error (`null` if no error)
- The **second argument** is the result (`null` if there's an error)
- **Always check** the error before using the result
- **Return** after calling the callback with an error to prevent further execution
- Never call a callback **more than once**
<br>

## 32. What are some common debugging techniques for Node.js applications?

Debugging Node.js applications can be done using several tools and techniques, ranging from simple `console.log` to powerful IDE-based debuggers.

### 1. Console Logging

The simplest debugging approach:

```javascript
console.log('Variable value:', myVar);
console.error('Error occurred:', err);
console.warn('Warning:', warning);
console.table([{ id: 1, name: 'Alice' }]); // Tabular display
console.time('operation');
// ... code to measure
console.timeEnd('operation'); // Prints elapsed time
console.trace('Stack trace here'); // Prints stack trace
```

### 2. Node.js Built-in Debugger

```bash
node inspect app.js
```

Commands in the debugger:
- `n` — next line
- `c` — continue
- `repl` — open REPL at current position
- `watch('variableName')` — watch a variable

### 3. Chrome DevTools Debugger (--inspect flag)

```bash
node --inspect app.js
# or pause on first line:
node --inspect-brk app.js
```

Then open `chrome://inspect` in Chrome browser to attach the debugger.

```javascript
// Add breakpoints programmatically
debugger; // Pauses execution when inspector is attached
```

### 4. VS Code Debugger

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Node App",
      "program": "${workspaceFolder}/app.js",
      "console": "integratedTerminal"
    }
  ]
}
```

### 5. Debug Module

```bash
npm install debug
```

```javascript
const debug = require('debug');
const dbDebug = debug('app:database');
const routeDebug = debug('app:routes');

dbDebug('Connecting to database...');
routeDebug('GET /users route hit');
```

Enable specific namespaces:

```bash
DEBUG=app:database node app.js
DEBUG=app:* node app.js  # Enable all
```

### 6. Node.js Process Warnings

```bash
node --trace-warnings app.js
node --trace-deprecation app.js
```

### 7. Logging Libraries

#### Winston

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.info('Server started');
logger.error('Error occurred', { error: err.message });
```

### 8. Memory and Performance Profiling

```bash
# Generate CPU profile
node --prof app.js
node --prof-process isolate-*.log > profile.txt

# Using clinic.js
npm install -g clinic
clinic doctor -- node app.js
```

### Key Debugging Tools Summary

| Tool | Use Case |
|---|---|
| `console.log` | Quick, simple debugging |
| `--inspect` flag | Full Chrome DevTools debugging |
| VS Code Debugger | IDE-integrated debugging |
| `debug` module | Namespace-based debug logging |
| Winston/Pino | Production-grade logging |
| clinic.js | Performance profiling |
<br>

## 33. Explain process.nextTick().

**`process.nextTick()`** is a Node.js function that schedules a callback to be executed **at the end of the current operation**, before the event loop continues to the next iteration (tick).

### Basic Usage

```javascript
console.log('Start');

process.nextTick(() => {
  console.log('Next tick callback');
});

console.log('End');

// Output:
// Start
// End
// Next tick callback
```

### How It Works in the Event Loop

`process.nextTick()` sits **outside** of the event loop phases. It processes all callbacks in the nextTick queue before moving to any I/O, timers, or other event loop phases.

```
Current Operation
      ↓
nextTick Queue (all callbacks drained)
      ↓
Promise microtasks
      ↓
Event Loop Phases (timers → I/O → etc.)
```

### process.nextTick() vs setImmediate() vs setTimeout()

```javascript
console.log('1: Synchronous');

setTimeout(() => console.log('2: setTimeout'), 0);

setImmediate(() => console.log('3: setImmediate'));

process.nextTick(() => console.log('4: nextTick'));

Promise.resolve().then(() => console.log('5: Promise'));

console.log('6: Synchronous');

// Output:
// 1: Synchronous
// 6: Synchronous
// 4: nextTick
// 5: Promise
// 2: setTimeout
// 3: setImmediate
```

### Common Use Cases

#### 1. Allow Event Listeners to Be Registered Before Emitting

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    // Without nextTick, 'ready' event fires before listener is registered
    process.nextTick(() => {
      this.emit('ready');
    });
  }
}

const emitter = new MyEmitter();
emitter.on('ready', () => {
  console.log('Emitter is ready!');
});
```

#### 2. Defer Execution to Ensure Synchronous Code Completes First

```javascript
function asyncOperation(callback) {
  // Ensure callback is always called asynchronously
  process.nextTick(() => {
    callback(null, 'result');
  });
}

asyncOperation((err, result) => {
  console.log('Result:', result);
});

console.log('This runs first');
```

#### 3. Break Up CPU-Intensive Work

```javascript
function processLargeArray(arr, callback) {
  let index = 0;

  function processNext() {
    if (index >= arr.length) return callback(null, 'done');
    // Process one item
    doWork(arr[index++]);
    // Yield to event loop between items
    process.nextTick(processNext);
  }

  processNext();
}
```

### Caution: Recursive nextTick

Avoid infinite recursive calls as they will starve the I/O event loop:

```javascript
// DANGEROUS — blocks I/O indefinitely
function recursive() {
  process.nextTick(recursive);
}
recursive();
```
<br>

## 34. What is the global object in Node.js?

In Node.js, the **`global`** object is the top-level scope object, similar to `window` in browsers. Properties and methods defined on `global` are accessible from anywhere in the application without importing.

### Accessing the Global Object

```javascript
console.log(global); // Prints all global properties

// Properties are accessible without 'global.' prefix
global.myVar = 'Hello';
console.log(myVar); // 'Hello'
```

### Built-in Global Properties and Functions

#### Timing Functions

```javascript
// Execute after delay
const timer = setTimeout(() => console.log('Timeout'), 1000);
clearTimeout(timer);

// Execute repeatedly
const interval = setInterval(() => console.log('Interval'), 1000);
clearInterval(interval);

// Execute after current event loop iteration
setImmediate(() => console.log('Immediate'));
clearImmediate(handle);
```

#### Process Object

```javascript
console.log(process.version);       // Node.js version
console.log(process.platform);      // 'linux', 'win32', 'darwin'
console.log(process.env.NODE_ENV);  // Environment variables
console.log(process.argv);          // Command-line arguments
console.log(process.cwd());         // Current working directory
console.log(process.pid);           // Process ID
process.exit(0);                    // Exit with code
```

#### Console

```javascript
console.log('Info message');
console.error('Error message');
console.warn('Warning message');
console.table({ name: 'Alice', age: 30 });
```

#### Buffer

```javascript
const buf = Buffer.from('Hello, World!');
console.log(buf.toString('utf8'));    // 'Hello, World!'
console.log(buf.toString('base64')); // Base64 encoded
```

#### URL and URLSearchParams

```javascript
const url = new URL('https://example.com/path?name=Alice');
console.log(url.hostname);   // example.com
console.log(url.pathname);   // /path
console.log(url.searchParams.get('name')); // Alice
```

### Module-Level "Globals"

These appear global but are actually **module-scoped**:

```javascript
console.log(__filename); // Full path to current file
console.log(__dirname);  // Directory of current file
console.log(module);     // Current module object
console.log(exports);    // Module exports
console.log(require);    // Module import function
```

### Global vs Browser Window

| Feature | Node.js (`global`) | Browser (`window`) |
|---|---|---|
| Top-level object | `global` | `window` |
| DOM access | Not available | Available |
| `__dirname` | Available | Not available |
| `process` | Available | Not available |
| `fetch` | Available (v18+) | Available |

### Creating Custom Globals (Not Recommended)

```javascript
// Avoid polluting global scope
global.config = {
  dbHost: 'localhost',
  port: 5432
};

// Better practice: use modules instead
module.exports = { dbHost: 'localhost', port: 5432 };
```
<br>

## 35. What frameworks are available for testing Node.js applications?

Node.js has a rich ecosystem of testing frameworks and libraries for unit, integration, and end-to-end testing.

### 1. Jest

The most popular all-in-one testing framework with built-in assertion, mocking, and coverage:

```bash
npm install --save-dev jest
```

```javascript
// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// math.test.js
const { add } = require('./math');

describe('add function', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('handles negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});
```

```bash
npx jest
```

### 2. Mocha

A flexible testing framework that needs separate assertion and mocking libraries:

```bash
npm install --save-dev mocha chai
```

```javascript
const { expect } = require('chai');
const { add } = require('./math');

describe('add function', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });
});
```

### 3. Jasmine

A behavior-driven development (BDD) framework with built-in assertions:

```bash
npm install --save-dev jasmine
```

```javascript
describe('add function', () => {
  it('should return sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

### 4. Vitest

A fast, Vite-native test runner compatible with Jest API:

```bash
npm install --save-dev vitest
```

```javascript
import { describe, it, expect } from 'vitest';

describe('add', () => {
  it('adds numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

### 5. Supertest (HTTP Integration Testing)

```bash
npm install --save-dev supertest jest
```

```javascript
const request = require('supertest');
const app = require('./app');

describe('GET /users', () => {
  it('should return 200 and list of users', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });
});
```

### 6. Node.js Built-in Test Runner (v18+)

```javascript
const { test, describe } = require('node:test');
const assert = require('node:assert');

describe('add', () => {
  test('adds two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });
});
```

### Framework Comparison

| Framework | Built-in Assertions | Mocking | Coverage | Best For |
|---|---|---|---|---|
| Jest | Yes | Yes | Yes | All-in-one solution |
| Mocha | No (needs Chai) | No (needs Sinon) | No (needs nyc) | Flexible setup |
| Jasmine | Yes | Yes | No | BDD style |
| Vitest | Yes | Yes | Yes | Vite/ES Module projects |
<br>

## 36. Explain the concept of mocking in Node.js.

**Mocking** is a testing technique where real dependencies (databases, APIs, file system, etc.) are replaced with simulated versions to isolate the unit being tested.

### Why Mock?

- Avoid slow or expensive real operations (DB, API calls)
- Test edge cases and error scenarios easily
- Ensure tests are predictable and repeatable
- Isolate the unit under test from external dependencies

### 1. Manual Mocking

```javascript
// Original module: userService.js
async function getUserById(id) {
  return db.query(`SELECT * FROM users WHERE id = ${id}`);
}

// In test: Replace with manual mock
const userService = {
  getUserById: jest.fn().mockResolvedValue({ id: 1, name: 'Alice' })
};
```

### 2. Jest Mocking

#### Mock a Function

```javascript
const { sendEmail } = require('./emailService');
jest.mock('./emailService');

test('sends welcome email after registration', async () => {
  sendEmail.mockResolvedValue({ success: true });

  await registerUser({ email: 'alice@example.com' });

  expect(sendEmail).toHaveBeenCalledWith(
    'alice@example.com',
    'Welcome!'
  );
  expect(sendEmail).toHaveBeenCalledTimes(1);
});
```

#### Mock an Entire Module

```javascript
// Mock the entire fs module
jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue('mock file content'),
  writeFileSync: jest.fn()
}));

const fs = require('fs');

test('reads config file', () => {
  const config = loadConfig();
  expect(fs.readFileSync).toHaveBeenCalledWith('config.json', 'utf8');
  expect(config).toBe('mock file content');
});
```

#### Mock Return Values

```javascript
const mockFn = jest.fn();

// Return same value every time
mockFn.mockReturnValue(42);

// Return different values on each call
mockFn
  .mockReturnValueOnce('first call')
  .mockReturnValueOnce('second call')
  .mockReturnValue('default');

// Mock async functions
mockFn.mockResolvedValue({ data: 'success' });
mockFn.mockRejectedValue(new Error('API failed'));
```

### 3. Sinon.js Mocking

```bash
npm install --save-dev sinon
```

```javascript
const sinon = require('sinon');
const userService = require('./userService');

describe('User Controller', () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(userService, 'getUser').resolves({ id: 1, name: 'Alice' });
  });

  afterEach(() => {
    stub.restore();
  });

  it('returns user data', async () => {
    const result = await userController.getUser(1);
    expect(result.name).to.equal('Alice');
    sinon.assert.calledOnce(stub);
  });
});
```

### 4. Spies

A spy is like a mock but lets the real function also execute:

```javascript
const spy = jest.spyOn(console, 'log');

myFunction(); // Calls real console.log

expect(spy).toHaveBeenCalledWith('expected output');
spy.mockRestore();
```

### Key Mocking Concepts

| Concept | Description |
|---|---|
| **Mock** | Replaces a function entirely with a fake |
| **Stub** | Replaces a function and controls its output |
| **Spy** | Wraps a function to observe calls without replacing it |
| **Fake** | A working but simplified implementation |
<br>

## 37. Why is benchmarking important in Node.js?

**Benchmarking** is the process of measuring the performance of code to identify bottlenecks, compare implementations, and ensure the application meets performance requirements.

### Why It Matters

- Identify performance regressions between code changes
- Compare different implementations of the same logic
- Understand how the application behaves under load
- Set baseline performance expectations
- Justify architectural decisions with data

### 1. Simple Benchmarking with console.time

```javascript
console.time('operation');

for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}

console.timeEnd('operation'); // operation: 12.345ms
```

### 2. Using the `perf_hooks` Module

```javascript
const { performance, PerformanceObserver } = require('perf_hooks');

performance.mark('start');

// Code to benchmark
for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}

performance.mark('end');
performance.measure('My Operation', 'start', 'end');

const measure = performance.getEntriesByName('My Operation')[0];
console.log(`Duration: ${measure.duration.toFixed(2)}ms`);
```

### 3. Benchmark.js

```bash
npm install benchmark
```

```javascript
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

suite
  .add('String concatenation', () => {
    let str = '';
    for (let i = 0; i < 100; i++) str += i;
  })
  .add('Array join', () => {
    const arr = [];
    for (let i = 0; i < 100; i++) arr.push(i);
    arr.join('');
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest: ' + this.filter('fastest').map('name'));
  })
  .run();
```

### 4. Load Testing with Artillery

```bash
npm install -g artillery
```

```yaml
# load-test.yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 20
scenarios:
  - flow:
    - get:
        url: '/api/users'
```

```bash
artillery run load-test.yml
```

### 5. Autocannon (HTTP Benchmarking)

```bash
npm install -g autocannon
```

```bash
autocannon -c 100 -d 30 http://localhost:3000/api/users
# -c: connections, -d: duration in seconds
```

### Key Benchmarking Metrics

| Metric | Description |
|---|---|
| **Throughput** | Requests per second the server can handle |
| **Latency** | Time to receive a response |
| **Memory Usage** | RAM consumed during operation |
| **CPU Usage** | Processor time consumed |
| **Error Rate** | Percentage of failed requests |
<br>

## 38. How do you test an HTTP server in Node.js?

Testing HTTP servers in Node.js involves sending real HTTP requests to your server and verifying the responses. The most popular approach uses **Supertest** combined with a testing framework like **Jest** or **Mocha**.

### Setting Up

```bash
npm install --save-dev jest supertest
```

### Basic Express App to Test

```javascript
// app.js
const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'Alice' }];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(user);
});

app.post('/users', (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

module.exports = app; // Export without listen()
```

### Writing Tests with Supertest

```javascript
// app.test.js
const request = require('supertest');
const app = require('./app');

describe('User API', () => {
  describe('GET /users', () => {
    it('should return all users with status 200', async () => {
      const res = await request(app).get('/users');

      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /users/:id', () => {
    it('should return a single user', async () => {
      const res = await request(app).get('/users/1');

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('name', 'Alice');
    });

    it('should return 404 for non-existent user', async () => {
      const res = await request(app).get('/users/999');

      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe('Not found');
    });
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const newUser = { name: 'Bob', email: 'bob@example.com' };
      const res = await request(app)
        .post('/users')
        .send(newUser)
        .set('Content-Type', 'application/json');

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe('Bob');
    });
  });
});
```

### Testing with Authentication Headers

```javascript
it('should return 401 without auth token', async () => {
  const res = await request(app).get('/protected');
  expect(res.statusCode).toBe(401);
});

it('should return 200 with valid token', async () => {
  const res = await request(app)
    .get('/protected')
    .set('Authorization', 'Bearer valid-token');

  expect(res.statusCode).toBe(200);
});
```

### Testing File Uploads

```javascript
it('should upload a file', async () => {
  const res = await request(app)
    .post('/upload')
    .attach('file', './test/fixtures/sample.pdf');

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('filename');
});
```

### Starting/Stopping Real Server

```javascript
let server;

beforeAll((done) => {
  server = app.listen(4000, done);
});

afterAll((done) => {
  server.close(done);
});
```
<br>

## 39. How do you connect a MySQL database with Node.js?

Node.js can connect to MySQL using the **`mysql2`** package, which is faster and supports Promises and async/await natively.

### Installation

```bash
npm install mysql2
```

### Basic Connection

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) {
    console.error('Connection error:', err);
    return;
  }
  console.log('Connected to MySQL!');
});
```

### Running Queries (Callback Style)

```javascript
connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Query error:', err);
    return;
  }
  console.log('Users:', results);
});

// Parameterized query (prevents SQL injection)
connection.query(
  'SELECT * FROM users WHERE id = ?',
  [userId],
  (err, results) => {
    if (err) throw err;
    console.log(results[0]);
  }
);
```

### Using Connection Pool (Recommended for Production)

```javascript
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,  // Max concurrent connections
  queueLimit: 0
});

pool.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});
```

### Async/Await with Promise API

```javascript
const mysql = require('mysql2/promise');

async function getUsers() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
  });

  try {
    const [rows] = await connection.execute('SELECT * FROM users');
    return rows;
  } finally {
    await connection.end();
  }
}
```

### Promise Pool (Best Practice)

```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
  connectionLimit: 10
});

// CRUD operations
async function getAllUsers() {
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows;
}

async function getUserById(id) {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE id = ?', [id]
  );
  return rows[0];
}

async function createUser(name, email) {
  const [result] = await pool.execute(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  );
  return result.insertId;
}

async function deleteUser(id) {
  const [result] = await pool.execute(
    'DELETE FROM users WHERE id = ?', [id]
  );
  return result.affectedRows;
}
```

### Environment Variables for Security

```javascript
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
```
<br>

## 40. Explain how NoSQL databases like MongoDB can be used with Node.js.

**MongoDB** is the most popular NoSQL database used with Node.js. The official **`mongoose`** ODM (Object Document Mapper) and the native **`mongodb`** driver are the primary ways to interact with it.

### Installation

```bash
npm install mongoose
# or native driver
npm install mongodb
```

### Connecting with Mongoose

```javascript
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error:', err);
    process.exit(1);
  }
}

connectDB();
```

### Defining a Schema and Model

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```

### CRUD Operations

```javascript
const User = require('./models/User');

// CREATE
async function createUser(data) {
  const user = new User(data);
  return await user.save();
  // Or: return await User.create(data);
}

// READ
async function getUsers() {
  return await User.find({});
}

async function getUserById(id) {
  return await User.findById(id);
}

// Filtering, sorting, selecting fields
async function getActiveUsers() {
  return await User
    .find({ active: true })
    .sort({ createdAt: -1 })
    .select('name email')
    .limit(10);
}

// UPDATE
async function updateUser(id, data) {
  return await User.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true, runValidators: true }
  );
}

// DELETE
async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}
```

### Relationships with Mongoose (Population)

```javascript
const postSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Post = mongoose.model('Post', postSchema);

// Populate (join) author data
const posts = await Post.find().populate('author', 'name email');
```

### MongoDB vs SQL Comparison

| SQL | MongoDB |
|---|---|
| Table | Collection |
| Row | Document |
| Column | Field |
| JOIN | `$lookup` / `populate` |
| Primary Key | `_id` |
| Schema required | Schema optional (flexible) |
<br>

## 41. What's the role of ORM in Node.js?

An **ORM (Object-Relational Mapper)** or **ODM (Object-Document Mapper)** is a library that maps database operations to programming language objects, eliminating the need to write raw SQL or database queries.

### What ORM Does

- Maps database tables/collections to JavaScript classes/models
- Generates SQL/queries automatically from method calls
- Provides schema definition and validation
- Handles migrations and relationships
- Improves code readability and maintainability

### 1. Sequelize (SQL ORM)

```bash
npm install sequelize pg pg-hstore  # PostgreSQL
```

```javascript
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

// Define Model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: { isEmail: true }
  },
  age: DataTypes.INTEGER
});

// Sync schema
await sequelize.sync({ alter: true });

// CRUD
const user = await User.create({ name: 'Alice', email: 'alice@example.com' });
const users = await User.findAll({ where: { age: { [Op.gt]: 18 } } });
const found = await User.findByPk(1);
await User.update({ name: 'Bob' }, { where: { id: 1 } });
await User.destroy({ where: { id: 1 } });
```

### 2. Prisma (Modern ORM)

```bash
npm install @prisma/client
npx prisma init
```

```prisma
// schema.prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  authorId Int
  author   User   @relation(fields: [authorId], references: [id])
}
```

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create
const user = await prisma.user.create({
  data: { name: 'Alice', email: 'alice@example.com' }
});

// Read with relation
const users = await prisma.user.findMany({
  include: { posts: true }
});

// Update
await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Bob' }
});

// Delete
await prisma.user.delete({ where: { id: 1 } });
```

### 3. TypeORM

```bash
npm install typeorm reflect-metadata
```

```javascript
const { Entity, PrimaryGeneratedColumn, Column, BaseEntity } = require('typeorm');

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  name;

  @Column({ unique: true })
  email;
}

// CRUD
const user = User.create({ name: 'Alice', email: 'alice@example.com' });
await user.save();
const users = await User.find({ where: { name: 'Alice' } });
```

### ORM Benefits and Drawbacks

| Pros | Cons |
|---|---|
| No raw SQL required | Performance overhead |
| Database abstraction | Complex queries can be harder |
| Built-in validation | Learning curve |
| Migrations | Can hide inefficient queries |
| Type safety (Prisma/TypeORM) | Less control over SQL |
<br>

## 42. How can you monitor the performance of a Node.js app?

Performance monitoring involves tracking metrics like CPU usage, memory consumption, response times, and error rates to identify and resolve bottlenecks.

### 1. Built-in os and process Modules

```javascript
const os = require('os');
const process = require('process');

// System metrics
console.log('CPU count:', os.cpus().length);
console.log('Free memory:', (os.freemem() / 1024 / 1024).toFixed(2) + ' MB');
console.log('Total memory:', (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB');

// Process metrics
const memUsage = process.memoryUsage();
console.log('RSS:', (memUsage.rss / 1024 / 1024).toFixed(2) + ' MB');
console.log('Heap Used:', (memUsage.heapUsed / 1024 / 1024).toFixed(2) + ' MB');
console.log('Heap Total:', (memUsage.heapTotal / 1024 / 1024).toFixed(2) + ' MB');
console.log('CPU usage:', process.cpuUsage());
```

### 2. Express Response Time Middleware

```javascript
const responseTime = require('response-time');

app.use(responseTime((req, res, time) => {
  console.log(`${req.method} ${req.url} - ${time.toFixed(2)}ms`);
}));
```

### 3. Prometheus + Grafana

```bash
npm install prom-client
```

```javascript
const client = require('prom-client');

// Collect default metrics (CPU, memory, etc.)
client.collectDefaultMetrics({ timeout: 5000 });

// Custom counter
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Custom histogram for response times
const responseTimeHistogram = new client.Histogram({
  name: 'http_response_time_seconds',
  help: 'HTTP response time in seconds',
  buckets: [0.1, 0.5, 1, 2, 5]
});

// Middleware
app.use((req, res, next) => {
  const end = responseTimeHistogram.startTimer();
  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode
    });
    end();
  });
  next();
});

// Metrics endpoint for Prometheus to scrape
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
```

### 4. New Relic / Datadog (APM Tools)

```bash
npm install newrelic
```

```javascript
// Must be required first in your app
require('newrelic');
const express = require('express');
// ...
```

### 5. clinic.js (Profiling)

```bash
npm install -g clinic
clinic doctor -- node app.js
clinic flame -- node app.js   # Flame graphs
clinic bubbleprof -- node app.js
```

### 6. Node.js Performance Hooks

```javascript
const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((list) => {
  list.getEntries().forEach(entry => {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
  });
});

obs.observe({ entryTypes: ['measure'] });

performance.mark('db-start');
await dbQuery();
performance.mark('db-end');
performance.measure('DB Query', 'db-start', 'db-end');
```

### Key Metrics to Monitor

| Metric | Healthy Range | Tool |
|---|---|---|
| CPU Usage | < 70% | `process.cpuUsage()` |
| Heap Memory | < 80% of limit | `process.memoryUsage()` |
| Response Time | < 200ms p95 | Prometheus |
| Error Rate | < 1% | APM tools |
| Throughput | Depends on app | Autocannon |
<br>

## 43. What is clustering in Node.js and how does it work?

**Clustering** is a technique that allows Node.js to create **multiple worker processes** that share the same server port, taking advantage of multi-core CPUs to improve performance and throughput.

### Why Clustering?

Node.js is single-threaded by default, which means it runs on only **one CPU core**. Clustering allows you to run multiple instances of your application, each on a separate core.

### Basic Cluster Setup

```javascript
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master PID: ${process.pid}`);
  console.log(`Forking ${numCPUs} workers...`);

  // Fork a worker for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart workers if they die
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  // Each worker runs its own HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker PID: ${process.pid} started`);
}
```

### Cluster with Express

```javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.id} died, restarting...`);
    cluster.fork();
  });

} else {
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send(`Response from worker: ${process.pid}`);
  });

  app.listen(3000);
}
```

### Inter-Worker Communication

```javascript
if (cluster.isMaster) {
  const worker = cluster.fork();

  // Send message to worker
  worker.send({ task: 'process-data', data: [1, 2, 3] });

  // Receive message from worker
  worker.on('message', (msg) => {
    console.log('Worker result:', msg);
  });

} else {
  process.on('message', (msg) => {
    const result = msg.data.reduce((a, b) => a + b, 0);
    process.send({ result });
  });
}
```

### PM2 Cluster Mode (Production)

PM2 handles clustering automatically:

```bash
pm2 start app.js -i max    # Use all CPU cores
pm2 start app.js -i 4      # Use 4 cores
pm2 list                   # View all processes
```

### Cluster Architecture

```
         Master Process
        /       |       \
   Worker1  Worker2  Worker3
      |         |        |
   Port 3000 Port 3000 Port 3000
        (Shared listening port)
```
<br>

## 44. How can you prevent memory leaks in a Node.js application?

A **memory leak** occurs when the application retains references to objects that are no longer needed, preventing garbage collection and causing memory usage to grow indefinitely.

### Common Causes of Memory Leaks

```javascript
// 1. Global variables accumulate data
global.cache = {};
app.get('/user/:id', (req, res) => {
  global.cache[req.params.id] = fetchUser(req.params.id); // Never cleared!
});

// 2. Forgotten event listeners
const EventEmitter = require('events');
const emitter = new EventEmitter();

setInterval(() => {
  // Adds a new listener on every tick — never removed!
  emitter.on('data', (data) => processData(data));
}, 1000);

// 3. Closures holding references
function createLeak() {
  const largeArray = new Array(1000000).fill('data');
  return function() {
    return largeArray.length; // largeArray is never freed
  };
}

// 4. Uncleaned timers
function startTimer() {
  const data = loadHugeDataset();
  setInterval(() => process(data), 1000); // data stays in memory forever
}
```

### Prevention Techniques

#### 1. Use WeakMap and WeakSet for Caches

```javascript
// Weak references — GC can reclaim if no other references exist
const cache = new WeakMap();

function processUser(user) {
  if (cache.has(user)) return cache.get(user);

  const result = expensiveOperation(user);
  cache.set(user, result);
  return result;
}
```

#### 2. Always Remove Event Listeners

```javascript
const http = require('http');

const server = http.createServer();

function onRequest(req, res) {
  res.end('Hello');
}

server.on('request', onRequest);

// Remove when no longer needed
server.removeListener('request', onRequest);
// Or: server.off('request', onRequest);
```

#### 3. Limit Event Listener Count

```javascript
const emitter = new EventEmitter();
emitter.setMaxListeners(20); // Default is 10; adjust as needed

// Use once() for one-time listeners
emitter.once('data', handleData);
```

#### 4. Clear Timers and Intervals

```javascript
class Service {
  constructor() {
    this.interval = setInterval(() => this.doWork(), 1000);
  }

  doWork() {
    console.log('Working...');
  }

  destroy() {
    clearInterval(this.interval); // Must clean up!
    this.interval = null;
  }
}
```

#### 5. Use Streams for Large Data

```javascript
// BAD: Loads entire file into memory
const data = fs.readFileSync('huge-file.csv');
processData(data);

// GOOD: Stream data in chunks
const stream = fs.createReadStream('huge-file.csv');
stream.on('data', chunk => processChunk(chunk));
stream.on('end', () => console.log('Done'));
```

#### 6. Monitor Memory Usage

```javascript
// Log memory at intervals
setInterval(() => {
  const used = process.memoryUsage();
  console.log({
    rss: `${Math.round(used.rss / 1024 / 1024)}MB`,
    heap: `${Math.round(used.heapUsed / 1024 / 1024)}MB`
  });
}, 10000);
```

### Detecting Memory Leaks

```bash
# Using heapdump
npm install heapdump

# Using --expose-gc flag and clinic
node --expose-gc app.js
clinic doctor -- node app.js
```

```javascript
// Force GC and measure
if (global.gc) {
  global.gc();
}
console.log('Heap after GC:', process.memoryUsage().heapUsed);
```
<br>

## 45. Explain the use of the --inspect flag in Node.js.

The **`--inspect`** flag enables the **V8 Inspector Protocol** in Node.js, allowing you to attach debugging tools like Chrome DevTools or VS Code to inspect, debug, and profile your running Node.js application.

### Basic Usage

```bash
# Start with inspector on default port 9229
node --inspect app.js

# Start and pause on first line (useful for startup issues)
node --inspect-brk app.js

# Use a custom port
node --inspect=9230 app.js

# Allow connections from any host (use carefully)
node --inspect=0.0.0.0:9229 app.js
```

### Attaching Chrome DevTools

1. Run `node --inspect app.js`
2. Open Chrome and navigate to `chrome://inspect`
3. Click **"Open dedicated DevTools for Node"**
4. Set breakpoints, inspect variables, profile performance

### Attaching VS Code Debugger

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Node",
      "port": 9229,
      "restart": true,
      "localRoot": "${workspaceFolder}",
      "remoteRoot": "."
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch with Inspect",
      "program": "${workspaceFolder}/app.js",
      "runtimeArgs": ["--inspect-brk"]
    }
  ]
}
```

### Programmatic Breakpoints

```javascript
function processOrder(order) {
  debugger; // Pauses here when inspector is attached

  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  return total;
}
```

### Inspecting with Node.js REPL

```bash
node inspect app.js
```

Commands:
- `c` — continue
- `n` — next (step over)
- `s` — step into
- `o` — step out
- `repl` — enter REPL at breakpoint
- `watch('expression')` — watch an expression
- `list(5)` — show 5 lines of code around current position

### Remote Debugging (Production)

```bash
# On the remote server
node --inspect=0.0.0.0:9229 app.js

# Create SSH tunnel to securely expose the port
ssh -L 9229:localhost:9229 user@remote-server
```

### --inspect vs --inspect-brk

| Flag | Behavior |
|---|---|
| `--inspect` | Starts normally; inspector available when attached |
| `--inspect-brk` | Pauses on the first line until debugger attaches |
<br>

## 46. How does Node.js handle concurrency?

Despite being **single-threaded**, Node.js achieves high concurrency through its **event-driven, non-blocking I/O model** powered by the **event loop** and **libuv** library.

### The Event Loop

The event loop is the core mechanism that allows Node.js to handle thousands of concurrent operations without using multiple threads.

```
   ┌───────────────────────────┐
┌─>│           timers          │ ← setTimeout, setInterval
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ ← I/O errors from prev iteration
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ ← internal use
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           poll            │ ← retrieve new I/O events
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │           check           │ ← setImmediate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ ← socket.on('close', ...)
   └───────────────────────────┘
```

### Concurrency Without Threads

```javascript
const fs = require('fs');
const https = require('https');

// All three run concurrently — no thread per request
fs.readFile('file1.txt', () => console.log('File 1 done'));
fs.readFile('file2.txt', () => console.log('File 2 done'));
https.get('https://api.example.com/data', () => console.log('API done'));

console.log('All initiated — event loop handles the rest');
```

### Thread Pool (libuv)

For CPU-intensive or blocking operations, libuv uses a **thread pool** (default 4 threads):

```javascript
// These use the thread pool internally
fs.readFile(...)    // File I/O
crypto.pbkdf2(...)  // CPU-intensive crypto
dns.lookup(...)     // DNS resolution
zlib.gzip(...)      // Compression
```

Increase thread pool size:

```bash
UV_THREADPOOL_SIZE=8 node app.js
```

### Worker Threads for CPU-Bound Tasks

```javascript
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Create a worker for CPU-intensive work
  const worker = new Worker(__filename, {
    workerData: { numbers: [1, 2, 3, 4, 5] }
  });

  worker.on('message', (result) => {
    console.log('Sum:', result);
  });

} else {
  const sum = workerData.numbers.reduce((a, b) => a + b, 0);
  parentPort.postMessage(sum);
}
```

### Handling 10,000 Concurrent Connections

```javascript
const http = require('http');

// Node.js handles all requests with a single thread via the event loop
const server = http.createServer((req, res) => {
  // Non-blocking async operations let other requests run in between
  someAsyncDatabaseQuery(req.params.id).then(data => {
    res.end(JSON.stringify(data));
  });
});

server.listen(3000);
// Can handle thousands of concurrent requests
```

### Node.js vs Multi-Threaded Servers

| Aspect | Node.js | Multi-Threaded (Java/PHP) |
|---|---|---|
| Threading | Single thread + event loop | Thread per request |
| Memory | Low (shared event loop) | Higher (per-thread overhead) |
| I/O Performance | Excellent | Good |
| CPU-Intensive | Poor (single thread) | Better (multiple threads) |
| Scalability | Horizontal (cluster/PM2) | Vertical and horizontal |
<br>

## 47. What is the difference between process and child_process modules?

The **`process`** and **`child_process`** modules both deal with processes in Node.js, but serve very different purposes.

### The `process` Module

The `process` module provides information and control over the **current** Node.js process. It is a **global object** — no import needed.

```javascript
// No require needed — it's global
console.log(process.pid);           // Current process ID
console.log(process.version);       // Node.js version
console.log(process.platform);      // 'linux', 'darwin', 'win32'
console.log(process.cwd());         // Current working directory
console.log(process.env.NODE_ENV);  // Environment variables
console.log(process.argv);          // Command-line arguments
console.log(process.memoryUsage()); // Memory stats
console.log(process.uptime());      // Process uptime in seconds

// Control
process.exit(0);       // Exit with success code
process.exit(1);       // Exit with failure code
process.chdir('/tmp'); // Change working directory

// Event handling
process.on('exit', (code) => {
  console.log(`Exiting with code: ${code}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});
```

### The `child_process` Module

The `child_process` module allows you to **spawn new processes** — either shell commands or other Node.js scripts.

```javascript
const { exec, execSync, spawn, spawnSync, fork } = require('child_process');
```

#### `exec()` — Run a shell command (buffered output)

```javascript
const { exec } = require('child_process');

exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Output:', stdout);
});
```

#### `spawn()` — Run a command with streaming output

```javascript
const { spawn } = require('child_process');

const ls = spawn('ls', ['-la', '/tmp']);

ls.stdout.on('data', (data) => {
  console.log('stdout:', data.toString());
});

ls.stderr.on('data', (data) => {
  console.error('stderr:', data.toString());
});

ls.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});
```

#### `fork()` — Spawn a new Node.js process with IPC

```javascript
// parent.js
const { fork } = require('child_process');

const child = fork('./child.js');

child.send({ number: 10 });

child.on('message', (result) => {
  console.log('Result from child:', result);
});

// child.js
process.on('message', (msg) => {
  const result = msg.number * 2;
  process.send(result);
});
```

#### `execSync()` / `spawnSync()` — Synchronous versions

```javascript
const { execSync } = require('child_process');

const output = execSync('echo Hello World').toString();
console.log(output); // 'Hello World\n'
```

### Key Differences

| Feature | `process` | `child_process` |
|---|---|---|
| Scope | Current process | Spawns new processes |
| Import | Global (no require) | `require('child_process')` |
| Use Case | Monitor/control current process | Run external commands/scripts |
| Communication | `process.env`, `process.argv` | IPC, stdin/stdout/stderr |
| Methods | `.exit()`, `.env`, `.argv` | `.exec()`, `.spawn()`, `.fork()` |
<br>

## 48. How do worker threads work in Node.js?

**Worker threads** (available via the `worker_threads` module since Node.js v10.5) allow Node.js to run JavaScript in **parallel on multiple threads**, making them suitable for CPU-intensive tasks.

### Key Concepts

- Worker threads run in **separate V8 instances** with their own memory
- They communicate with the main thread via **message passing**
- They can share memory using **SharedArrayBuffer** and **Atomics**
- Each worker has its own **event loop**

### Basic Worker Thread

```javascript
// main.js
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Main thread: create a worker
  const worker = new Worker(__filename, {
    workerData: { start: 1, end: 1000000 }
  });

  worker.on('message', (result) => {
    console.log('Sum:', result);
  });

  worker.on('error', (err) => {
    console.error('Worker error:', err);
  });

  worker.on('exit', (code) => {
    console.log('Worker exited with code:', code);
  });

} else {
  // Worker thread: perform heavy computation
  const { start, end } = workerData;
  let sum = 0;
  for (let i = start; i <= end; i++) sum += i;
  parentPort.postMessage(sum);
}
```

### Separate Worker File

```javascript
// worker.js
const { parentPort, workerData } = require('worker_threads');

function heavyComputation(data) {
  return data.reduce((sum, n) => sum + n * n, 0);
}

const result = heavyComputation(workerData.numbers);
parentPort.postMessage(result);

// main.js
const { Worker } = require('worker_threads');
const path = require('path');

const worker = new Worker(path.join(__dirname, 'worker.js'), {
  workerData: { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
});

worker.on('message', (result) => {
  console.log('Sum of squares:', result); // 385
});
```

### Worker Pool Pattern

```javascript
const { Worker } = require('worker_threads');

class WorkerPool {
  constructor(workerPath, numWorkers) {
    this.workers = [];
    this.queue = [];

    for (let i = 0; i < numWorkers; i++) {
      this.addWorker(workerPath);
    }
  }

  addWorker(workerPath) {
    const worker = new Worker(workerPath);
    worker.on('message', (result) => {
      const { resolve } = this.queue.shift();
      resolve(result);
      worker.busy = false;
    });
    worker.busy = false;
    this.workers.push(worker);
  }

  runTask(data) {
    return new Promise((resolve, reject) => {
      const freeWorker = this.workers.find(w => !w.busy);
      if (freeWorker) {
        freeWorker.busy = true;
        freeWorker.postMessage(data);
        this.queue.push({ resolve, reject });
      }
    });
  }
}

const pool = new WorkerPool('./worker.js', 4);
const result = await pool.runTask({ numbers: [1, 2, 3] });
```

### Shared Memory with SharedArrayBuffer

```javascript
const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
  const sharedBuffer = new SharedArrayBuffer(4); // 4 bytes
  const sharedArray = new Int32Array(sharedBuffer);
  sharedArray[0] = 0;

  const worker = new Worker(__filename, {
    workerData: { sharedBuffer }
  });

  setTimeout(() => {
    console.log('Shared value:', sharedArray[0]); // Modified by worker
  }, 1000);

} else {
  const sharedArray = new Int32Array(workerData.sharedBuffer);
  Atomics.add(sharedArray, 0, 42); // Thread-safe increment
}
```

### When to Use Worker Threads

| Use Worker Threads For | Use Event Loop For |
|---|---|
| Image/video processing | HTTP requests |
| Cryptography | Database queries |
| Data parsing (CSV, XML) | File I/O |
| Machine learning inference | WebSocket messaging |
| Complex mathematical computations | Caching |
<br>

## 49. How is Node.js used in microservices architecture?

**Microservices** is an architectural pattern where an application is built as a collection of small, independently deployable services that communicate over a network. Node.js is an excellent fit for microservices due to its lightweight, fast startup, and event-driven nature.

### Why Node.js for Microservices

- **Fast startup time**: Ideal for containerized, auto-scaled services
- **Lightweight**: Low memory footprint per service
- **Non-blocking I/O**: Handles high-throughput inter-service communication
- **NPM ecosystem**: Rich libraries for HTTP, messaging, and more
- **JavaScript everywhere**: Shared code across services

### Basic Microservice Example

```javascript
// user-service/app.js
const express = require('express');
const app = express();

app.use(express.json());

const users = [{ id: 1, name: 'Alice' }];

app.get('/users', (req, res) => res.json(users));
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ error: 'Not found' });
});

app.listen(3001, () => console.log('User service on port 3001'));
```

```javascript
// order-service/app.js
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/orders', async (req, res) => {
  try {
    // Call user service to validate user
    const user = await axios.get(
      `http://user-service:3001/users/${req.body.userId}`
    );

    const order = {
      id: Date.now(),
      userId: user.data.id,
      items: req.body.items
    };

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: 'User not found' });
  }
});

app.listen(3002, () => console.log('Order service on port 3002'));
```

### API Gateway Pattern

```javascript
// api-gateway/app.js
const express = require('express');
const httpProxy = require('http-proxy-middleware');

const app = express();

// Route to appropriate microservice
app.use('/api/users', httpProxy.createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/users' }
}));

app.use('/api/orders', httpProxy.createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true,
  pathRewrite: { '^/api/orders': '/orders' }
}));

app.listen(3000, () => console.log('API Gateway on port 3000'));
```

### Docker Compose for Microservices

```yaml
# docker-compose.yml
version: '3'
services:
  api-gateway:
    build: ./api-gateway
    ports:
      - "3000:3000"
    depends_on:
      - user-service
      - order-service

  user-service:
    build: ./user-service
    ports:
      - "3001:3001"

  order-service:
    build: ./order-service
    ports:
      - "3002:3002"
```

### NestJS for Microservices (Advanced)

```javascript
// NestJS built-in microservice support
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.TCP,
  options: { port: 3001 }
});

await app.listen();
```
<br>

## 50. Explain inter-process communication in a Node.js microservice architecture.

**Inter-Process Communication (IPC)** in microservices refers to the methods by which separate services communicate with each other. In Node.js microservices, there are several approaches depending on the use case.

### 1. HTTP/REST Communication

The simplest synchronous communication:

```javascript
const axios = require('axios');

// Service A calls Service B synchronously
async function getUserOrders(userId) {
  const [userRes, ordersRes] = await Promise.all([
    axios.get(`http://user-service/users/${userId}`),
    axios.get(`http://order-service/orders?userId=${userId}`)
  ]);

  return {
    user: userRes.data,
    orders: ordersRes.data
  };
}
```

### 2. Message Queues (RabbitMQ)

Asynchronous, decoupled communication:

```javascript
const amqp = require('amqplib');

// Producer (Order Service)
async function publishOrderCreated(order) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('order.created');
  channel.sendToQueue(
    'order.created',
    Buffer.from(JSON.stringify(order))
  );

  console.log('Order event published:', order.id);
}

// Consumer (Notification Service)
async function listenForOrders() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('order.created');

  channel.consume('order.created', (msg) => {
    const order = JSON.parse(msg.content.toString());
    sendOrderConfirmationEmail(order);
    channel.ack(msg);
  });
}
```

### 3. Event Streaming (Kafka)

```javascript
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'order-service',
  brokers: ['kafka:9092']
});

// Producer
const producer = kafka.producer();
await producer.connect();

await producer.send({
  topic: 'orders',
  messages: [{ value: JSON.stringify(newOrder) }]
});

// Consumer
const consumer = kafka.consumer({ groupId: 'notification-group' });
await consumer.connect();
await consumer.subscribe({ topic: 'orders' });

await consumer.run({
  eachMessage: async ({ message }) => {
    const order = JSON.parse(message.value.toString());
    await processOrderNotification(order);
  }
});
```

### 4. Redis Pub/Sub

```javascript
const redis = require('redis');

const publisher = redis.createClient();
const subscriber = redis.createClient();

// Publisher (Payment Service)
async function publishPaymentSuccess(payment) {
  await publisher.publish(
    'payment:success',
    JSON.stringify(payment)
  );
}

// Subscriber (Order Service)
await subscriber.subscribe('payment:success', (message) => {
  const payment = JSON.parse(message);
  updateOrderStatus(payment.orderId, 'paid');
});
```

### 5. gRPC (High Performance)

```javascript
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load protobuf definition
const packageDef = protoLoader.loadSync('user.proto');
const proto = grpc.loadPackageDefinition(packageDef).user;

// Client calling another service
const client = new proto.UserService(
  'user-service:50051',
  grpc.credentials.createInsecure()
);

client.getUser({ id: 1 }, (err, user) => {
  if (err) console.error(err);
  else console.log('User:', user);
});
```

### IPC Methods Comparison

| Method | Type | Coupling | Speed | Use Case |
|---|---|---|---|---|
| HTTP/REST | Sync | Loose | Medium | Simple service calls |
| Message Queue | Async | Very Loose | Medium | Task processing, events |
| Kafka | Async | Very Loose | High | High-volume event streaming |
| Redis Pub/Sub | Async | Loose | High | Real-time notifications |
| gRPC | Sync/Async | Moderate | Very High | High-performance internal APIs |
<br>

## 51. What are some common security best practices for Node.js applications?

Security in Node.js requires protecting against common vulnerabilities like injection attacks, authentication bypass, data exposure, and denial of service.

### 1. Use Environment Variables for Secrets

```javascript
// NEVER hardcode secrets
const dbPassword = 'mysecretpassword'; // BAD!

// Always use environment variables
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD; // GOOD
```

### 2. Validate and Sanitize Input

```javascript
const { body, param, validationResult } = require('express-validator');

app.post('/users',
  body('email').isEmail().normalizeEmail(),
  body('name').isLength({ min: 2, max: 50 }).trim().escape(),
  body('age').isInt({ min: 0, max: 120 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process valid input
  }
);
```

### 3. Secure HTTP Headers (Helmet)

```javascript
const helmet = require('helmet');
app.use(helmet()); // Sets 11 security headers
```

### 4. Prevent SQL/NoSQL Injection

```javascript
// SQL — use parameterized queries
const [rows] = await db.execute(
  'SELECT * FROM users WHERE email = ?',
  [email] // Never interpolate directly
);

// MongoDB — use Mongoose or validate input
const user = await User.findOne({
  email: { $eq: req.body.email } // Sanitize
});
```

### 5. Implement Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests, please try again later'
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5 // Stricter for auth endpoints
});

app.use('/api/', apiLimiter);
app.use('/auth/login', loginLimiter);
```

### 6. Use HTTPS and Secure Cookies

```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

https.createServer(options, app).listen(443);

// Secure cookie settings
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,  // Prevent JS access
    secure: true,    // HTTPS only
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));
```

### 7. Implement JWT Authentication Properly

```javascript
const jwt = require('jsonwebtoken');

// Signing
const token = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '1h', algorithm: 'HS256' }
);

// Verification middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
}
```

### 8. Avoid Prototype Pollution

```javascript
const safeData = JSON.parse(JSON.stringify(userInput));
// Or use libraries like 'object.assign' carefully

// Block prototype pollution
app.use((req, res, next) => {
  if (req.body && '__proto__' in req.body) {
    return res.status(400).json({ error: 'Invalid request' });
  }
  next();
});
```

### Security Checklist

| Area | Action |
|---|---|
| Dependencies | Run `npm audit` regularly |
| Secrets | Use `.env` and secret managers |
| Input | Validate and sanitize all inputs |
| Headers | Use Helmet.js |
| Auth | Use JWT/OAuth with proper expiry |
| HTTPS | Always use TLS in production |
| Rate Limiting | Protect all public endpoints |
<br>

## 52. How would you protect your Node.js application from XSS attacks?

**Cross-Site Scripting (XSS)** is an attack where malicious scripts are injected into web pages, potentially stealing cookies, session tokens, or other sensitive data.

### Types of XSS

- **Stored XSS**: Malicious script is stored in the database
- **Reflected XSS**: Script is reflected from the server in a response
- **DOM-based XSS**: Script is executed through DOM manipulation

### 1. Escape Output Data

```javascript
const escapeHtml = require('escape-html');

app.get('/profile', (req, res) => {
  const userInput = req.query.name;
  // Escape before rendering
  const safeOutput = escapeHtml(userInput);
  res.send(`<h1>Hello, ${safeOutput}!</h1>`);
});
```

### 2. Use Template Engines with Auto-Escaping

```javascript
// EJS auto-escapes with <%= %>
app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
  res.render('profile', {
    name: req.query.name // Automatically escaped in template
  });
});

// profile.ejs
// <h1>Hello, <%= name %>!</h1>  ← escaped (safe)
// <h1>Hello, <%- name %>!</h1>  ← unescaped (dangerous!)
```

### 3. Content Security Policy (CSP)

```javascript
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'nonce-RANDOM_NONCE'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:', 'https:'],
    connectSrc: ["'self'"],
    fontSrc: ["'self'"],
    objectSrc: ["'none'"],
    frameSrc: ["'none'"]
  }
}));
```

### 4. Sanitize User Input with DOMPurify / sanitize-html

```javascript
const sanitizeHtml = require('sanitize-html');

app.post('/comments', (req, res) => {
  const cleanComment = sanitizeHtml(req.body.comment, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
    allowedAttributes: {
      'a': ['href']
    },
    allowedSchemes: ['http', 'https']
  });

  saveComment(cleanComment);
  res.json({ message: 'Comment saved' });
});
```

### 5. Input Validation with express-validator

```javascript
const { body, validationResult } = require('express-validator');

app.post('/post',
  body('content')
    .isLength({ max: 5000 })
    .trim()
    .escape(), // HTML-encodes special characters
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    createPost(req.body.content);
  }
);
```

### 6. HttpOnly Cookies

```javascript
// Prevent JavaScript from accessing cookies
res.cookie('sessionId', token, {
  httpOnly: true,   // Not accessible via document.cookie
  secure: true,     // Only sent over HTTPS
  sameSite: 'strict'
});
```

### 7. Set X-XSS-Protection Header

```javascript
app.use((req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Or with Helmet (includes this header)
app.use(helmet());
```

### XSS Prevention Summary

| Technique | Protection Against |
|---|---|
| Output escaping | Reflected and stored XSS |
| CSP headers | Inline script execution |
| Input sanitization | Stored XSS |
| HttpOnly cookies | Cookie theft via XSS |
| Template auto-escaping | Rendering user data |
<br>

## 53. What are environment variables and how could you use them in Node.js?

**Environment variables** are key-value pairs stored outside of the application code that configure runtime behavior. They are used to store sensitive configuration like API keys, database credentials, and environment-specific settings.

### Why Use Environment Variables?

- Keep secrets out of source code
- Allow different configurations per environment (dev, staging, prod)
- Follow the 12-Factor App methodology
- Easily change configuration without modifying code

### Accessing Built-in Environment Variables

```javascript
console.log(process.env.NODE_ENV);    // 'development', 'production', 'test'
console.log(process.env.PORT);        // Server port
console.log(process.env.HOME);        // User home directory
console.log(process.env.PATH);        // System PATH
```

### Setting Variables on the Command Line

```bash
# Unix/Mac
NODE_ENV=production PORT=3000 node app.js

# Windows (Command Prompt)
set NODE_ENV=production && node app.js

# Windows (PowerShell)
$env:NODE_ENV="production"; node app.js
```

### Using .env Files with dotenv

```bash
npm install dotenv
```

```bash
# .env file (never commit to git!)
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_NAME=myapp
DB_USER=root
DB_PASSWORD=secret123
JWT_SECRET=my-super-secret-jwt-key
API_KEY=abc123xyz
```

```javascript
// Load .env variables at the top of your entry file
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST;
const JWT_SECRET = process.env.JWT_SECRET;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
```

### Environment-Specific Configuration

```javascript
// config.js
require('dotenv').config();

const config = {
  development: {
    port: process.env.PORT || 3000,
    db: process.env.DB_HOST || 'localhost',
    debug: true
  },
  production: {
    port: process.env.PORT || 80,
    db: process.env.DB_HOST,
    debug: false
  },
  test: {
    port: 4000,
    db: 'localhost',
    debug: false
  }
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];
```

### .gitignore for .env Files

```bash
# .gitignore
.env
.env.local
.env.production
```

### .env.example File (Share Structure Safely)

```bash
# .env.example — commit this to git
PORT=
DB_HOST=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
API_KEY=
```

### Validating Required Variables

```javascript
const required = ['DB_HOST', 'DB_PASSWORD', 'JWT_SECRET'];

required.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});
```
<br>

## 54. What are WebSockets and how do they work with Node.js?

**WebSockets** provide a **full-duplex, persistent communication channel** between a client and a server over a single TCP connection. Unlike HTTP, which is request-response, WebSockets allow both the client and server to send messages at any time.

### HTTP vs WebSocket

| Feature | HTTP | WebSocket |
|---|---|---|
| Connection | New connection per request | Persistent single connection |
| Direction | Client → Server (request only) | Both directions (full-duplex) |
| Overhead | Headers with each request | Minimal after handshake |
| Use Case | REST APIs, file transfers | Chat, gaming, live data |

### How WebSocket Connection Works

```
1. Client sends HTTP Upgrade request:
   GET /chat HTTP/1.1
   Upgrade: websocket
   Connection: Upgrade
   Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==

2. Server responds with 101 Switching Protocols

3. Persistent two-way connection established

4. Either party can send messages at any time

5. Connection closed with Close frame
```

### Basic WebSocket Server (ws library)

```bash
npm install ws
```

```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
  console.log('Client connected from:', req.socket.remoteAddress);

  // Receive message from client
  ws.on('message', (message) => {
    console.log('Received:', message.toString());

    // Send reply to this client
    ws.send(`Echo: ${message}`);

    // Broadcast to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`Broadcast: ${message}`);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (err) => {
    console.error('WebSocket error:', err);
  });

  // Send welcome message
  ws.send('Welcome to the WebSocket server!');
});

console.log('WebSocket server running on ws://localhost:8080');
```

### WebSocket Client (Browser)

```javascript
// Browser-side JavaScript
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
  console.log('Connected to server');
  socket.send('Hello from browser!');
};

socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

socket.onclose = () => {
  console.log('Disconnected from server');
};
```

### WebSocket with Express

```javascript
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    // Broadcast to all clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });
});

server.listen(3000, () => {
  console.log('Server on http://localhost:3000');
});
```
<br>

## 55. How do you set up a WebSocket server in Node.js?

Setting up a WebSocket server can be done with the bare **`ws`** library or with **Socket.IO**, which provides additional features like fallbacks and rooms.

### Method 1: Using ws Library

```bash
npm install ws
```

```javascript
const WebSocket = require('ws');
const http = require('http');

// Create HTTP server
const server = http.createServer();

// Attach WebSocket to HTTP server
const wss = new WebSocket.Server({ server });

// Connection handling
wss.on('connection', (ws, req) => {
  // Assign unique ID to each client
  ws.id = Date.now();
  ws.isAlive = true;

  console.log(`Client ${ws.id} connected`);

  // Handle incoming messages
  ws.on('message', (data, isBinary) => {
    const message = isBinary ? data : data.toString();
    console.log(`Message from ${ws.id}:`, message);

    try {
      const parsed = JSON.parse(message);
      handleMessage(ws, parsed);
    } catch {
      ws.send(JSON.stringify({ error: 'Invalid JSON' }));
    }
  });

  // Ping-pong for connection health
  ws.on('pong', () => { ws.isAlive = true; });

  // Handle disconnection
  ws.on('close', (code, reason) => {
    console.log(`Client ${ws.id} disconnected. Code: ${code}`);
  });

  // Send initial message
  ws.send(JSON.stringify({ type: 'welcome', id: ws.id }));
});

// Heartbeat mechanism to detect dead connections
const heartbeat = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', () => clearInterval(heartbeat));

function handleMessage(ws, message) {
  switch (message.type) {
    case 'chat':
      broadcast(wss, { type: 'chat', text: message.text, from: ws.id });
      break;
    default:
      ws.send(JSON.stringify({ error: 'Unknown message type' }));
  }
}

function broadcast(wss, data) {
  const message = JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

server.listen(8080, () => {
  console.log('WebSocket server running on ws://localhost:8080');
});
```

### Method 2: Using Socket.IO

```bash
npm install socket.io
```

```javascript
// server.js
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: 'http://localhost:3000' }
});

// Room-based chat example
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join a room
  socket.on('join-room', (room) => {
    socket.join(room);
    socket.to(room).emit('user-joined', socket.id);
  });

  // Send message to room
  socket.on('chat-message', ({ room, message }) => {
    io.to(room).emit('chat-message', {
      from: socket.id,
      message,
      timestamp: new Date()
    });
  });

  // Private message
  socket.on('private-message', ({ to, message }) => {
    io.to(to).emit('private-message', {
      from: socket.id,
      message
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3000);
```

```javascript
// client (browser)
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  socket.emit('join-room', 'general');
});

socket.emit('chat-message', {
  room: 'general',
  message: 'Hello everyone!'
});

socket.on('chat-message', (data) => {
  console.log(`${data.from}: ${data.message}`);
});
```
<br>

## 56. How do you deploy a Node.js application in production?

Deploying a Node.js application to production requires careful consideration of process management, environment configuration, security, performance, and monitoring.

### 1. Prepare the Application

```javascript
// Set NODE_ENV to production
process.env.NODE_ENV === 'production';

// Use environment variables for all config
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;

// Disable verbose error messages in production
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(err.status || 500).json({ error: 'Internal server error' });
  } else {
    res.status(err.status || 500).json({ error: err.message, stack: err.stack });
  }
});
```

### 2. package.json Scripts

```json
{
  "scripts": {
    "start": "node app.js",
    "start:prod": "NODE_ENV=production node app.js",
    "dev": "nodemon app.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### 3. Process Management with PM2

```bash
npm install -g pm2

# Start application
pm2 start app.js --name "my-app"

# Cluster mode (use all CPU cores)
pm2 start app.js -i max --name "my-app"

# Auto-restart on crash
pm2 start app.js --watch

# Persist across reboots
pm2 startup
pm2 save

# Useful commands
pm2 list          # View all processes
pm2 logs my-app   # View logs
pm2 monit         # Real-time monitoring
pm2 restart my-app
pm2 stop my-app
```

```json
// ecosystem.config.js (PM2 config)
module.exports = {
  apps: [{
    name: 'my-app',
    script: 'app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    max_memory_restart: '500M'
  }]
};
```

### 4. Nginx as Reverse Proxy

```nginx
# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name mydomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name mydomain.com;

    ssl_certificate /etc/letsencrypt/live/mydomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mydomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["node", "app.js"]
```

```bash
docker build -t my-app .
docker run -d -p 3000:3000 --env-file .env my-app
```

### 6. Cloud Deployments

```bash
# Heroku
heroku create my-app
git push heroku main

# AWS Elastic Beanstalk
eb init
eb deploy

# Vercel (for Next.js/serverless)
vercel --prod
```
<br>

## 57. What is PM2 and how is it used in Node.js?

**PM2 (Process Manager 2)** is a production-grade process manager for Node.js applications. It keeps applications alive, restarts them on crashes, manages logs, enables clustering, and provides monitoring.

### Installation

```bash
npm install -g pm2
```

### Basic Commands

```bash
# Start an application
pm2 start app.js

# Start with a name
pm2 start app.js --name "my-api"

# Start in cluster mode (multi-core)
pm2 start app.js -i max      # All CPU cores
pm2 start app.js -i 4        # 4 instances

# View all running processes
pm2 list
pm2 status

# Stop, restart, delete
pm2 stop my-api
pm2 restart my-api
pm2 reload my-api      # Zero-downtime reload
pm2 delete my-api

# View logs
pm2 logs
pm2 logs my-api
pm2 logs --lines 100   # Last 100 lines

# Real-time monitoring dashboard
pm2 monit
```

### Ecosystem Configuration File

```javascript
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'web-api',
      script: './src/app.js',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true
    },
    {
      name: 'worker',
      script: './src/worker.js',
      instances: 2,
      exec_mode: 'fork'
    }
  ]
};
```

```bash
# Use ecosystem file
pm2 start ecosystem.config.js
pm2 start ecosystem.config.js --env production
```

### Auto-Restart on Server Reboot

```bash
# Generate startup script
pm2 startup

# Save current process list
pm2 save

# Restore saved processes
pm2 resurrect
```

### Zero-Downtime Deployment

```bash
# Gracefully reload all cluster instances one at a time
pm2 reload my-api

# With ecosystem file
pm2 reload ecosystem.config.js
```

### PM2 with Docker

```dockerfile
FROM node:18-alpine

RUN npm install -g pm2

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]
```

### Key PM2 Features Summary

| Feature | Command |
|---|---|
| Start/Stop/Restart | `pm2 start/stop/restart` |
| Cluster mode | `pm2 start app.js -i max` |
| Monitoring | `pm2 monit` |
| Logs | `pm2 logs` |
| Startup persistence | `pm2 startup && pm2 save` |
| Zero-downtime reload | `pm2 reload` |
<br>

## 58. Explain how you would use Docker with a Node.js application.

**Docker** packages a Node.js application and all its dependencies into a portable container that runs consistently across environments.

### 1. Create a Dockerfile

```dockerfile
# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for layer caching)
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy application source code
COPY . .

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001
USER nodeuser

# Expose the port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Start the application
CMD ["node", "app.js"]
```

### 2. Create .dockerignore

```bash
# .dockerignore
node_modules
npm-debug.log
.env
.git
*.md
coverage/
tests/
.github/
```

### 3. Docker Commands

```bash
# Build image
docker build -t my-node-app .
docker build -t my-node-app:1.0 .

# Run container
docker run -d \
  -p 3000:3000 \
  --name my-app \
  --env-file .env \
  my-node-app

# View running containers
docker ps

# View logs
docker logs my-app
docker logs -f my-app  # Follow/stream logs

# Stop and remove
docker stop my-app
docker rm my-app
```

### 4. Docker Compose (Multi-Container)

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=mongo
      - DB_NAME=myapp
    depends_on:
      - mongo
      - redis
    restart: unless-stopped

  mongo:
    image: mongo:6
    volumes:
      - mongo-data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=secret

  redis:
    image: redis:7-alpine
    volumes:
      - redis-data:/data

volumes:
  mongo-data:
  redis-data:
```

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f app

# Rebuild and restart
docker-compose up -d --build
```

### 5. Multi-Stage Build (Optimize Image Size)

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build  # If you have a build step

# Stage 2: Production
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist  # Copy only built files
EXPOSE 3000
CMD ["node", "dist/app.js"]
```

### 6. Pushing to Docker Hub

```bash
docker tag my-node-app username/my-node-app:latest
docker login
docker push username/my-node-app:latest
```
<br>

## 59. How do you manage versioning of a Node.js API?

**API versioning** ensures backward compatibility when changes are made, allowing existing clients to continue working while new clients can use updated features.

### Versioning Strategies

### 1. URL Path Versioning (Most Common)

```javascript
const express = require('express');
const app = express();

// Version 1 routes
const v1Router = express.Router();
v1Router.get('/users', (req, res) => {
  res.json({ version: 'v1', users: [{ id: 1, name: 'Alice' }] });
});

// Version 2 routes (new format)
const v2Router = express.Router();
v2Router.get('/users', (req, res) => {
  res.json({
    version: 'v2',
    data: {
      users: [{ id: 1, firstName: 'Alice', lastName: 'Smith' }],
      total: 1
    }
  });
});

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);
```

### 2. Query Parameter Versioning

```javascript
app.get('/api/users', (req, res) => {
  const version = req.query.version || 'v1';

  if (version === 'v2') {
    return res.json({ data: { users: [] }, meta: { total: 0 } });
  }

  res.json([]);  // v1 response
});

// Usage: GET /api/users?version=v2
```

### 3. Header-Based Versioning

```javascript
app.get('/api/users', (req, res) => {
  const version = req.headers['api-version'] || '1';

  if (version === '2') {
    return res.json({ users: [], total: 0 });
  }

  res.json([]);
});

// Usage: GET /api/users with header: API-Version: 2
```

### 4. Accept Header Versioning (Content Negotiation)

```javascript
app.get('/api/users', (req, res) => {
  const accept = req.headers['accept'];

  if (accept.includes('application/vnd.myapp.v2+json')) {
    return res.json({ data: { users: [] } });
  }

  // Default to v1
  res.json([]);
});

// Usage: GET /api/users with header:
// Accept: application/vnd.myapp.v2+json
```

### Organizing Versioned Routes

```
project/
├── routes/
│   ├── v1/
│   │   ├── users.js
│   │   └── orders.js
│   └── v2/
│       ├── users.js
│       └── orders.js
├── controllers/
│   ├── v1/
│   │   └── userController.js
│   └── v2/
│       └── userController.js
└── app.js
```

```javascript
// app.js
const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');

app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// routes/v1/index.js
const router = express.Router();
router.use('/users', require('./users'));
router.use('/orders', require('./orders'));
module.exports = router;
```

### Deprecating Old Versions

```javascript
// Middleware to warn about deprecated versions
function deprecationWarning(version) {
  return (req, res, next) => {
    res.setHeader('Deprecation', 'true');
    res.setHeader('Sunset', 'Sat, 31 Dec 2025 00:00:00 GMT');
    res.setHeader('Link', '</api/v2/users>; rel="successor-version"');
    next();
  };
}

app.use('/api/v1', deprecationWarning('v1'), v1Routes);
```
<br>

## 60. What are semantic versioning (semver) and its importance in Node.js development?

**Semantic Versioning (SemVer)** is a versioning scheme that uses a three-part version number: **MAJOR.MINOR.PATCH** (e.g., `2.4.1`), where each part has a specific meaning.

### SemVer Format: MAJOR.MINOR.PATCH

```
2.4.1
│ │ └── PATCH: Bug fixes, no API changes
│ └──── MINOR: New features, backward compatible
└────── MAJOR: Breaking changes, not backward compatible
```

### When to Increment Each Part

```
v1.0.0  → Initial release
v1.0.1  → Bug fix (backward compatible)
v1.1.0  → New feature added (backward compatible)
v1.1.1  → Bug fix for new feature
v2.0.0  → Breaking API change
```

### Pre-release and Build Metadata

```
1.0.0-alpha         → Alpha pre-release
1.0.0-alpha.1       → Alpha pre-release iteration 1
1.0.0-beta.2        → Beta version
1.0.0-rc.1          → Release candidate
1.0.0+build.123     → Build metadata
```

### SemVer in package.json

```json
{
  "dependencies": {
    "express": "4.18.2",      // Exact version only
    "lodash": "~4.17.21",     // Patch updates: >=4.17.21 <4.18.0
    "axios": "^1.4.0",        // Minor updates: >=1.4.0 <2.0.0
    "react": ">=18.0.0",      // Any version 18 and above
    "debug": "*"              // Any version (not recommended)
  }
}
```

### Range Operators Explained

| Operator | Example | Meaning |
|---|---|---|
| `^` | `^1.4.0` | Compatible: `>=1.4.0 <2.0.0` |
| `~` | `~1.4.0` | Approximate: `>=1.4.0 <1.5.0` |
| `>=` | `>=1.0.0` | Greater than or equal |
| `<` | `<2.0.0` | Less than |
| `*` | `*` | Any version |
| Exact | `1.4.0` | Exactly this version |

### npm Version Commands

```bash
# Bump versions automatically
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0

# Pre-release versions
npm version prerelease --preid=alpha  # 1.0.0 → 1.0.1-alpha.0
npm version prerelease --preid=beta   # → 1.0.1-beta.0

# Check current version
npm version
```

### package-lock.json and Reproducible Installs

```json
// package-lock.json locks exact versions for reproducible builds
{
  "name": "my-app",
  "lockfileVersion": 3,
  "packages": {
    "node_modules/express": {
      "version": "4.18.2",  // Exact locked version
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
      "integrity": "sha512-..."
    }
  }
}
```

### Why SemVer Matters

- **Predictable updates**: Know what to expect from each upgrade
- **Dependency management**: npm uses semver to resolve compatible versions
- **Communication**: Clearly signals impact of changes to users
- **Automation**: CI/CD pipelines can safely auto-update patch versions
<br>

## 61. What is the difference between exports and module.exports in Node.js?

In Node.js's CommonJS module system, both `exports` and `module.exports` are used to expose functionality from a module. Understanding their relationship prevents subtle bugs.

### How They Relate

`exports` is simply a **reference** to `module.exports`. Initially they point to the same empty object:

```javascript
// Behind the scenes, Node.js does:
const module = { exports: {} };
const exports = module.exports; // exports points to same object

// What you require() always gets is: module.exports
```

### Using exports (Adding Properties)

```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.PI = 3.14159;

// Usage
const math = require('./math');
console.log(math.add(2, 3));    // 5
console.log(math.PI);           // 3.14159
```

### Using module.exports (Replacing the Entire Export)

```javascript
// user.js — export a class
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

module.exports = User; // Replace with the class itself

// Usage
const User = require('./user');
const user = new User('Alice');
console.log(user.greet()); // Hello, I'm Alice
```

```javascript
// config.js — export a single function
module.exports = function(options) {
  return { ...defaultOptions, ...options };
};
```

### The Critical Difference

```javascript
// This WORKS — mutating the shared object
exports.greet = () => 'Hello';
// module.exports is still { greet: [Function] } ✓

// This BREAKS — reassigning exports severs the link
exports = { greet: () => 'Hello' };
// module.exports is still {} — exports no longer points to it! ✗

// This WORKS — reassigning module.exports
module.exports = { greet: () => 'Hello' };
// This is what gets returned ✓
```

### Common Patterns

```javascript
// Pattern 1: Export multiple named functions
exports.add = (a, b) => a + b;
exports.multiply = (a, b) => a * b;

// Pattern 2: Export an object
module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

// Pattern 3: Export a class
module.exports = class Database { ... };

// Pattern 4: Export a function
module.exports = function createApp(config) { ... };

// Pattern 5: Export with properties (hybrid)
module.exports = mainFunction;
module.exports.helper = helperFunction;
```

### ES Modules Alternative (Modern)

```javascript
// Using ES Modules (with .mjs or "type":"module")
export const add = (a, b) => a + b;
export default class User { ... }

import { add } from './math.js';
import User from './user.js';
```
<br>

## 62. How can you create a simple TCP server in Node.js?

Node.js provides the built-in **`net`** module for creating TCP (Transmission Control Protocol) servers and clients.

### Basic TCP Server

```javascript
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected:', socket.remoteAddress, socket.remotePort);

  // Receive data from client
  socket.on('data', (data) => {
    console.log('Received:', data.toString());

    // Send response back to client
    socket.write(`Server received: ${data}`);
  });

  // Handle client disconnect
  socket.on('end', () => {
    console.log('Client disconnected');
  });

  // Handle errors
  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });

  // Send welcome message to client
  socket.write('Welcome to the TCP server!\n');
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Start listening
server.listen(8080, '127.0.0.1', () => {
  console.log('TCP server listening on port 8080');
});
```

### TCP Client

```javascript
const net = require('net');

const client = net.createConnection({ port: 8080, host: '127.0.0.1' }, () => {
  console.log('Connected to server');
  client.write('Hello, Server!');
});

client.on('data', (data) => {
  console.log('Server response:', data.toString());
  client.end(); // Close connection after receiving response
});

client.on('end', () => {
  console.log('Disconnected from server');
});

client.on('error', (err) => {
  console.error('Client error:', err.message);
});
```

### Echo Server (Sends Back What It Receives)

```javascript
const net = require('net');

const echoServer = net.createServer((socket) => {
  socket.pipe(socket); // Pipes all received data back to sender
});

echoServer.listen(8080);
console.log('Echo server on port 8080');
```

### Chat Server with Multiple Clients

```javascript
const net = require('net');

const clients = new Set();

const server = net.createServer((socket) => {
  socket.name = `${socket.remoteAddress}:${socket.remotePort}`;
  clients.add(socket);

  socket.write('Welcome! You are now in the chat.\n');
  broadcast(`${socket.name} joined the chat.\n`, socket);

  socket.on('data', (data) => {
    broadcast(`${socket.name}: ${data}`, socket);
  });

  socket.on('end', () => {
    clients.delete(socket);
    broadcast(`${socket.name} left the chat.\n`, socket);
  });
});

function broadcast(message, sender) {
  clients.forEach(client => {
    if (client !== sender) {
      client.write(message);
    }
  });
}

server.listen(8080, () => {
  console.log('Chat server running on port 8080');
  console.log('Connect with: telnet localhost 8080');
});
```
<br>

## 63. What is REPL in Node.js?

**REPL (Read-Eval-Print Loop)** is an interactive programming environment that reads user input, evaluates it, prints the result, and loops back for more input. Node.js includes a built-in REPL accessible from the command line.

### Starting the REPL

```bash
node
# or
node --experimental-repl-await  # For top-level await support
```

### Basic REPL Usage

```bash
> 2 + 2
4

> 'Hello'.toUpperCase()
'HELLO'

> const arr = [1, 2, 3, 4, 5]
undefined

> arr.filter(n => n > 2)
[ 3, 4, 5 ]

> new Date()
2024-01-01T00:00:00.000Z

> require('os').platform()
'linux'
```

### REPL Special Commands

```bash
.help       # Show all special commands
.exit       # Exit the REPL (or Ctrl+C twice)
.break      # Escape from multiline input
.clear      # Reset context
.save file  # Save session to a file
.load file  # Load a file into the REPL
.editor     # Enter editor mode (Ctrl+D to evaluate)
```

### REPL Special Variables

```bash
> 5 * 5
25
> _       # _ holds the last result
25
> _ + 5
30
```

### Creating a Custom REPL

```javascript
const repl = require('repl');

// Create custom REPL with context
const server = repl.start({
  prompt: 'my-app > ',
  input: process.stdin,
  output: process.stdout,
  eval: customEval,
  ignoreUndefined: true
});

// Inject variables into REPL context
server.context.db = require('./database');
server.context.User = require('./models/User');
server.context.help = function() {
  console.log('Available: db, User');
};

// Custom eval function
function customEval(cmd, context, filename, callback) {
  let result;
  try {
    result = eval(cmd);
  } catch (err) {
    return callback(err);
  }
  callback(null, result);
}
```

### Remote REPL (Debugging Running Apps)

```javascript
const net = require('net');
const repl = require('repl');

// Start a REPL server for remote debugging
net.createServer((socket) => {
  const r = repl.start({
    prompt: 'remote> ',
    input: socket,
    output: socket
  });

  // Inject app context
  r.context.app = require('./app');
  r.context.db = require('./db');

  socket.on('error', () => {});
}).listen(5001, () => {
  console.log('Remote REPL on port 5001');
  console.log('Connect: telnet localhost 5001');
});
```

### Use Cases

- Quick prototyping and testing code snippets
- Exploring Node.js APIs interactively
- Debugging live applications via remote REPL
- Learning and experimenting with JavaScript
<br>

## 64. Explain the role of a reverse proxy with Node.js applications.

A **reverse proxy** sits in front of a Node.js application server and forwards incoming client requests to it, providing benefits like SSL termination, load balancing, caching, and improved security.

### What is a Reverse Proxy?

```
Client → [Reverse Proxy (Nginx/Apache)] → [Node.js App]
```

Without a reverse proxy:
```
Client → [Node.js App on port 3000]
```

### Why Use a Reverse Proxy?

#### 1. SSL/TLS Termination

```nginx
server {
    listen 443 ssl;
    server_name myapp.com;

    ssl_certificate /etc/letsencrypt/live/myapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/myapp.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;  # Forward to Node.js (plain HTTP internally)
        proxy_set_header X-Forwarded-Proto https;
    }
}
```

#### 2. Load Balancing

```nginx
upstream nodejs_cluster {
    least_conn;                    # Use least-connections algorithm
    server localhost:3001;
    server localhost:3002;
    server localhost:3003;
    server localhost:3004;
}

server {
    listen 80;

    location / {
        proxy_pass http://nodejs_cluster;
    }
}
```

#### 3. Static File Serving

```nginx
server {
    listen 80;
    server_name myapp.com;

    # Nginx serves static files directly (faster)
    location /static/ {
        root /var/www/myapp;
        expires 30d;
    }

    # Only dynamic requests go to Node.js
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

#### 4. Caching

```nginx
proxy_cache_path /tmp/nginx_cache levels=1:2
    keys_zone=my_cache:10m max_size=1g;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 10m;  # Cache 200 responses for 10 minutes
    proxy_pass http://localhost:3000;
}
```

#### 5. Rate Limiting

```nginx
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

location /api/ {
    limit_req zone=api burst=20 nodelay;
    proxy_pass http://localhost:3000;
}
```

### Full Nginx Configuration for Node.js

```nginx
server {
    listen 80;
    server_name myapp.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name myapp.com;

    ssl_certificate /etc/ssl/certs/myapp.crt;
    ssl_certificate_key /etc/ssl/private/myapp.key;

    # Gzip compression
    gzip on;
    gzip_types text/plain application/json;

    # Static files
    location /static/ {
        root /var/www/myapp;
        expires 1y;
    }

    # API proxy to Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
    }
}
```

### Node.js: Reading Proxy Headers

```javascript
app.set('trust proxy', 1); // Trust first proxy

app.get('/ip', (req, res) => {
  res.json({
    ip: req.ip,                           // Client IP (forwarded)
    protocol: req.protocol,               // https (forwarded)
    host: req.hostname                    // Original host
  });
});
```
<br>

## 65. How do Node.js streams enhance performance?

**Streams** in Node.js provide a way to process data piece by piece (in chunks) rather than loading it all into memory at once. This significantly improves performance and memory efficiency when handling large datasets.

### The Problem Without Streams

```javascript
// BAD: Loads entire 2GB file into memory
const fs = require('fs');

app.get('/download', (req, res) => {
  const data = fs.readFileSync('large-file.mp4'); // 2GB in RAM!
  res.send(data);
});
```

### The Solution With Streams

```javascript
// GOOD: Streams 2GB file using tiny memory buffer
app.get('/download', (req, res) => {
  const stream = fs.createReadStream('large-file.mp4');
  stream.pipe(res); // Streams directly to HTTP response
});
```

### Types of Streams

```javascript
const fs = require('fs');
const zlib = require('zlib');
const { Transform } = require('stream');

// 1. Readable — source of data
const readable = fs.createReadStream('input.txt');

// 2. Writable — destination of data
const writable = fs.createWriteStream('output.txt');

// 3. Duplex — both readable and writable
const { Duplex } = require('stream');
const duplex = new Duplex({
  read(size) { this.push('data'); this.push(null); },
  write(chunk, encoding, callback) {
    console.log('Received:', chunk.toString());
    callback();
  }
});

// 4. Transform — reads and writes, transforming data
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
```

### Piping Streams

```javascript
const fs = require('fs');
const zlib = require('zlib');

// Chain streams: read → compress → write
fs.createReadStream('large-file.txt')
  .pipe(zlib.createGzip())             // Compress
  .pipe(fs.createWriteStream('large-file.txt.gz'))
  .on('finish', () => console.log('Compressed!'));
```

### Stream Pipeline (Error-Safe Piping)

```javascript
const { pipeline } = require('stream/promises');
const fs = require('fs');
const zlib = require('zlib');

async function compressFile() {
  await pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('output.txt.gz')
  );
  console.log('Pipeline completed');
}

compressFile().catch(console.error);
```

### Custom Transform Stream

```javascript
const { Transform } = require('stream');

class CSVParser extends Transform {
  constructor() {
    super({ objectMode: true });
    this.headers = null;
  }

  _transform(chunk, encoding, callback) {
    const lines = chunk.toString().split('\n').filter(Boolean);

    lines.forEach(line => {
      const values = line.split(',');
      if (!this.headers) {
        this.headers = values;
      } else {
        const row = {};
        this.headers.forEach((header, i) => {
          row[header.trim()] = values[i]?.trim();
        });
        this.push(row);
      }
    });

    callback();
  }
}

// Usage
fs.createReadStream('data.csv')
  .pipe(new CSVParser())
  .on('data', (row) => console.log(row))
  .on('end', () => console.log('Done'));
```

### HTTP Streaming

```javascript
// Stream large API response
app.get('/large-data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write('[');

  let first = true;
  const dbStream = db.collection('logs').find().stream();

  dbStream.on('data', (doc) => {
    if (!first) res.write(',');
    res.write(JSON.stringify(doc));
    first = false;
  });

  dbStream.on('end', () => {
    res.write(']');
    res.end();
  });
});
```

### Streams vs Buffering Performance

| Aspect | Buffering | Streaming |
|---|---|---|
| Memory usage | O(file size) | O(chunk size) |
| Time to first byte | After full load | Immediate |
| 4GB file | Out of memory | Works fine |
| CPU usage | High peak | Steady |
<br>

## 66. Describe some popular frameworks and libraries in the Node.js ecosystem.

The Node.js ecosystem has one of the richest sets of frameworks and libraries across all programming environments, available through npm.

### Web Frameworks

#### Express.js — Minimal and Flexible

```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000);
```

#### Fastify — High Performance

```javascript
const fastify = require('fastify')({ logger: true });

fastify.get('/api/users', async (request, reply) => {
  return { users: [] };
});

fastify.listen({ port: 3000 });
```

#### NestJS — Enterprise-Grade

```typescript
@Controller('users')
export class UsersController {
  @Get()
  findAll(): User[] { return []; }

  @Post()
  create(@Body() dto: CreateUserDto): User { ... }
}
```

#### Koa — Modern Middleware

```javascript
const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

router.get('/users', async ctx => {
  ctx.body = { users: [] };
});

app.use(router.routes());
app.listen(3000);
```

### Database Libraries

```javascript
// Mongoose (MongoDB ODM)
const mongoose = require('mongoose');
const User = mongoose.model('User', new Schema({ name: String }));

// Sequelize (SQL ORM)
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// Prisma (Modern ORM)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Redis client
const redis = require('redis');
const client = redis.createClient();
```

### Testing Libraries

```javascript
// Jest — Testing framework
const { test, expect } = require('@jest/globals');
test('adds numbers', () => expect(1 + 2).toBe(3));

// Supertest — HTTP testing
const request = require('supertest');
await request(app).get('/users').expect(200);

// Sinon — Mocks and stubs
const sinon = require('sinon');
const stub = sinon.stub(service, 'getUser').resolves({ id: 1 });
```

### Utility Libraries

```javascript
// Lodash — Utility functions
const _ = require('lodash');
_.chunk([1, 2, 3, 4], 2); // [[1,2],[3,4]]
_.groupBy(users, 'role');

// Moment/Day.js — Date handling
const dayjs = require('dayjs');
dayjs().format('YYYY-MM-DD');
dayjs().add(7, 'day');

// Axios — HTTP client
const axios = require('axios');
const { data } = await axios.get('https://api.example.com/users');

// Joi — Schema validation
const Joi = require('joi');
const schema = Joi.object({
  email: Joi.string().email().required(),
  age: Joi.number().min(0).max(120)
});
```

### Popular Libraries Summary

| Category | Library | Use Case |
|---|---|---|
| Web Framework | Express, Fastify, NestJS | HTTP servers, APIs |
| Database | Mongoose, Sequelize, Prisma | Data persistence |
| Auth | Passport, jsonwebtoken | Authentication |
| Testing | Jest, Mocha, Supertest | Unit/integration tests |
| Logging | Winston, Pino, Morgan | Application logging |
| Validation | Joi, express-validator | Input validation |
| Real-time | Socket.IO, ws | WebSockets |
| Queue | Bull, RabbitMQ, Kafka | Background jobs |
<br>

## 67. How is Koa different from Express.js?

**Koa** was created by the same team that built Express.js, designed as a smaller, more expressive, and more robust foundation for web applications, using modern JavaScript features.

### 1. Middleware Handling

#### Express — Callback-based Middleware

```javascript
const express = require('express');
const app = express();

// Express middleware uses callbacks
app.use((req, res, next) => {
  console.log('Before');
  next(); // Must call next()
  // Code here runs AFTER next() returns (synchronously)
  console.log('After (may run before async next completes)');
});
```

#### Koa — async/await Middleware (Cascading)

```javascript
const Koa = require('koa');
const app = new Koa();

// Koa uses async/await — true "onion" model
app.use(async (ctx, next) => {
  console.log('Before request');
  await next(); // Wait for all downstream middleware
  console.log('After response'); // Runs AFTER all downstream is done
});

app.use(async ctx => {
  ctx.body = 'Hello';
});
```

### 2. Context Object

#### Express — Separate req and res

```javascript
app.get('/users', (req, res) => {
  const id = req.params.id;
  const query = req.query.sort;
  res.status(200).json({ users: [] });
  res.setHeader('X-Custom', 'value');
});
```

#### Koa — Unified ctx Object

```javascript
router.get('/users', async ctx => {
  const id = ctx.params.id;
  const query = ctx.query.sort;
  ctx.status = 200;
  ctx.body = { users: [] };
  ctx.set('X-Custom', 'value');
});
```

### 3. Error Handling

#### Express — Error Middleware (4 params)

```javascript
// Express requires separate error middleware at the end
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```

#### Koa — try/catch in Middleware

```javascript
// Koa handles errors elegantly with try/catch
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { error: err.message };
  }
});
```

### 4. No Built-in Router or Body Parser

#### Express — Includes Basic Routing

```javascript
const express = require('express');
const app = express();
app.use(express.json()); // Built-in
app.get('/users', handler);
```

#### Koa — Requires External Packages

```javascript
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser()); // External package needed
router.get('/users', handler);
app.use(router.routes());
```

### Key Differences Summary

| Feature | Express | Koa |
|---|---|---|
| Middleware | Callback-based | async/await (cascading) |
| Request/Response | Separate `req`, `res` | Unified `ctx` |
| Built-in router | Yes | No (use `@koa/router`) |
| Body parsing | `express.json()` built-in | External `koa-bodyparser` |
| Error handling | Error middleware | try/catch in middleware |
| Bundle size | ~200KB | ~30KB |
| Community | Larger | Smaller but growing |
<br>

## 68. What is NestJS and when would you choose it for your Node.js project?

**NestJS** is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is heavily inspired by Angular and uses **TypeScript**, **decorators**, and **dependency injection**.

### Core Concepts

#### Modules

```typescript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]  // Share with other modules
})
export class UsersModule {}
```

#### Controllers

```typescript
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
```

#### Services (Providers)

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }
}
```

#### DTOs with Validation

```typescript
import { IsEmail, IsString, MinLength, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  @Max(120)
  age: number;
}
```

#### Guards (Authentication)

```typescript
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    try {
      request.user = this.jwtService.verify(token);
      return true;
    } catch {
      return false;
    }
  }
}

// Usage in controller
@UseGuards(JwtAuthGuard)
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}
```

### When to Choose NestJS

**Choose NestJS when:**
- Building **large-scale enterprise applications**
- Team is familiar with **TypeScript** and **Angular**
- You want **built-in structure** (modules, DI, guards)
- Building **microservices** with built-in transport support
- **Code maintainability** and testability are priorities

**Choose Express/Fastify when:**
- Building **small to medium APIs**
- Team prefers **JavaScript** over TypeScript
- You need **maximum flexibility** and minimal convention
- **Rapid prototyping** is the priority
<br>

## 69. What are the benefits of using TypeScript with Node.js?

**TypeScript** is a statically typed superset of JavaScript that compiles to plain JavaScript. When used with Node.js, it provides significant improvements to code quality, developer experience, and maintainability.

### Setting Up TypeScript with Node.js

```bash
npm install --save-dev typescript ts-node @types/node
npx tsc --init  # Creates tsconfig.json
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 1. Static Type Checking

```typescript
// TypeScript catches errors at compile time
function add(a: number, b: number): number {
  return a + b;
}

add(2, 3);        // ✓ Correct
add('2', 3);      // ✗ Error: Argument of type 'string' not assignable to 'number'
add(2, 3, 4);     // ✗ Error: Expected 2 arguments, but got 3
```

### 2. Interfaces and Types

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: Date;
  address?: {            // Optional nested object
    city: string;
    country: string;
  };
}

type CreateUserDTO = Omit<User, 'id' | 'createdAt'>;
type UpdateUserDTO = Partial<CreateUserDTO>;

function createUser(dto: CreateUserDTO): User {
  return {
    id: Date.now(),
    createdAt: new Date(),
    ...dto
  };
}
```

### 3. Better IntelliSense and Autocomplete

```typescript
import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Full type support for req, res, next
app.get('/users/:id', (req: Request, res: Response) => {
  const id = req.params.id;  // TypeScript knows this is string
  const query = req.query;   // TypeScript knows the shape

  res.status(200).json({ id });
  // res.nonExistentMethod(); // ✗ Compile error!
});
```

### 4. Generics

```typescript
// Reusable, type-safe functions
async function findById<T>(id: number, model: any): Promise<T | null> {
  return await model.findOne({ where: { id } });
}

const user = await findById<User>(1, UserModel);  // Returns User | null
const post = await findById<Post>(1, PostModel);  // Returns Post | null
```

### 5. Decorators (Used in NestJS)

```typescript
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class UserService {
  @log
  async getUser(id: number): Promise<User> {
    return await User.findById(id);
  }
}
```

### 6. Enum Types

```typescript
enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500
}

res.status(HttpStatus.OK).json(data);
res.status(HttpStatus.NOT_FOUND).json({ error: 'Not found' });
```

### Benefits Summary

| Benefit | Description |
|---|---|
| Compile-time errors | Catch bugs before runtime |
| IntelliSense | Better IDE autocomplete |
| Refactoring | Safe renaming and restructuring |
| Documentation | Types serve as documentation |
| Maintainability | Easier to understand large codebases |
| Team collaboration | Explicit contracts between modules |
<br>

## 70. How would you integrate a Node.js app with a third-party API?

Integrating with third-party APIs involves making HTTP requests, handling authentication, managing errors, and optionally caching responses.

### 1. Using Axios (Most Popular)

```bash
npm install axios
```

```javascript
const axios = require('axios');

// Basic GET request
async function getWeather(city) {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: process.env.WEATHER_API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      // API returned an error response
      throw new Error(`API Error ${err.response.status}: ${err.response.data.message}`);
    }
    throw err;
  }
}
```

### 2. Axios Instance with Base Config

```javascript
const axios = require('axios');

// Create a reusable configured instance
const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
});

// Request interceptor (logging, auth)
apiClient.interceptors.request.use(
  (config) => {
    console.log(`→ ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (error handling, data transformation)
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Refresh token logic
    }
    return Promise.reject(error);
  }
);

// Usage
const user = await apiClient.get('/users/octocat');
const repos = await apiClient.get('/users/octocat/repos', {
  params: { per_page: 10, sort: 'updated' }
});
```

### 3. Built-in fetch (Node.js 18+)

```javascript
async function getUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}
```

### 4. Caching API Responses

```javascript
const axios = require('axios');
const redis = require('redis');

const redisClient = redis.createClient();

async function getCachedData(key, fetchFn, ttl = 300) {
  // Check cache
  const cached = await redisClient.get(key);
  if (cached) return JSON.parse(cached);

  // Fetch fresh data
  const data = await fetchFn();

  // Store in cache
  await redisClient.setEx(key, ttl, JSON.stringify(data));
  return data;
}

async function getStockPrice(symbol) {
  return getCachedData(
    `stock:${symbol}`,
    () => axios.get(`https://api.finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.API_KEY}`)
      .then(r => r.data),
    60 // Cache for 60 seconds
  );
}
```

### 5. Retry Logic

```javascript
async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url, options);
    } catch (err) {
      if (attempt === retries) throw err;
      const waitTime = delay * Math.pow(2, attempt - 1); // Exponential backoff
      console.log(`Attempt ${attempt} failed. Retrying in ${waitTime}ms...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
}
```
<br>

## 71. What is Socket.IO and how does it work with Node.js?

**Socket.IO** is a library that enables real-time, bidirectional, event-based communication between web clients and servers. It builds on WebSockets but adds fallbacks (long-polling), rooms, namespaces, and automatic reconnection.

### Socket.IO vs Raw WebSockets

| Feature | WebSocket (ws) | Socket.IO |
|---|---|---|
| Fallback | No | Yes (long-polling) |
| Rooms | No | Yes |
| Namespaces | No | Yes |
| Auto-reconnect | No | Yes |
| Broadcasting | Manual | Built-in |
| Events | Manual protocol | Named events |

### Installation

```bash
npm install socket.io
```

### Basic Server Setup

```javascript
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for custom events
  socket.on('chat-message', (data) => {
    console.log('Message:', data);
    // Emit to all connected clients
    io.emit('chat-message', data);
  });

  socket.on('disconnect', (reason) => {
    console.log('User disconnected:', reason);
  });
});

server.listen(3000);
```

### Rooms — Group Messaging

```javascript
io.on('connection', (socket) => {

  // Join a room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', {
      userId: socket.id,
      room: roomId
    });
  });

  // Leave a room
  socket.on('leave-room', (roomId) => {
    socket.leave(roomId);
    socket.to(roomId).emit('user-left', socket.id);
  });

  // Send to specific room only
  socket.on('room-message', ({ roomId, message }) => {
    io.to(roomId).emit('room-message', {
      from: socket.id,
      message,
      timestamp: new Date()
    });
  });
});
```

### Namespaces — Separate Channels

```javascript
// Admin namespace
const adminNs = io.of('/admin');
adminNs.use((socket, next) => {
  if (isAdmin(socket.handshake.auth.token)) next();
  else next(new Error('Unauthorized'));
});

adminNs.on('connection', (socket) => {
  socket.emit('welcome', 'Admin channel');
});

// Public chat namespace
const chatNs = io.of('/chat');
chatNs.on('connection', (socket) => {
  socket.on('message', (data) => {
    chatNs.emit('message', data); // Broadcast to all in namespace
  });
});
```

### Emit Patterns

```javascript
socket.emit('event', data);                        // To this socket only
io.emit('event', data);                            // To ALL sockets
socket.to('room').emit('event', data);             // To room (excluding sender)
io.to('room').emit('event', data);                 // To room (including sender)
socket.broadcast.emit('event', data);              // To all except sender
io.to(socketId).emit('event', data);               // To specific socket
socket.except('room').emit('event', data);          // To all except room
```

### Client-Side

```javascript
// In browser
const socket = io('http://localhost:3000', {
  auth: { token: 'user-jwt-token' }
});

socket.on('connect', () => {
  console.log('Connected:', socket.id);
  socket.emit('join-room', 'general');
});

socket.on('chat-message', (data) => {
  displayMessage(data);
});

function sendMessage(text) {
  socket.emit('chat-message', { text, user: 'Alice' });
}

socket.on('disconnect', () => {
  console.log('Disconnected');
});
```
<br>

## 72. Explain how GraphQL can be used with Node.js.

**GraphQL** is a query language and runtime for APIs that allows clients to request exactly the data they need, unlike REST APIs that return fixed data structures.

### REST vs GraphQL

```
REST:
GET /users/1          → { id, name, email, address, orders, ... }
GET /users/1/orders   → [{ id, items, total, ... }]
(Over-fetching or multiple requests)

GraphQL:
POST /graphql
query {
  user(id: 1) {
    name            ← Only what you need
    orders {
      total
    }
  }
}
```

### Setting Up Apollo Server

```bash
npm install @apollo/server graphql
```

```javascript
const { ApolloServer, gql } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// Define schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String!, authorId: ID!): Post!
    deleteUser(id: ID!): Boolean!
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    users: async () => await User.findAll(),
    user: async (_, { id }) => await User.findByPk(id),
    posts: async () => await Post.findAll()
  },

  User: {
    posts: async (parent) => await Post.findAll({ where: { authorId: parent.id } })
  },

  Post: {
    author: async (parent) => await User.findByPk(parent.authorId)
  },

  Mutation: {
    createUser: async (_, { name, email }) => {
      return await User.create({ name, email });
    },
    createPost: async (_, { title, content, authorId }) => {
      return await Post.create({ title, content, authorId });
    },
    deleteUser: async (_, { id }) => {
      const deleted = await User.destroy({ where: { id } });
      return deleted > 0;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`GraphQL server ready at ${url}`);
```

### GraphQL with Express

```javascript
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

await server.start();

app.use('/graphql', express.json(), expressMiddleware(server, {
  context: async ({ req }) => ({
    user: await authenticate(req.headers.authorization)
  })
}));

app.listen(4000);
```

### Making GraphQL Queries

```javascript
// JavaScript client
const { data } = await axios.post('http://localhost:4000/graphql', {
  query: `
    query GetUser($id: ID!) {
      user(id: $id) {
        name
        email
        posts {
          title
        }
      }
    }
  `,
  variables: { id: '1' }
});

console.log(data.data.user);
```

### Key GraphQL Concepts

| Concept | Description |
|---|---|
| Schema | Defines types and their relationships |
| Query | Read data (GET equivalent) |
| Mutation | Write data (POST/PUT/DELETE equivalent) |
| Subscription | Real-time updates via WebSockets |
| Resolver | Function that resolves a field's data |
| Fragment | Reusable selection sets |
<br>

## 73. How does Node.js interact with frontend frameworks like Angular or React?

Node.js serves as the **backend** for React and Angular applications, providing APIs, data, authentication, and file serving while the frontend frameworks handle UI rendering.

### Architecture Overview

```
React/Angular (Browser)
         ↕ HTTP/WebSocket
Node.js Express API
         ↕
Database / External Services
```

### 1. Node.js as REST API Backend

```javascript
// Node.js Express API
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Allow React dev server
app.use(express.json());

app.get('/api/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

app.listen(4000);
```

```jsx
// React frontend consuming the API
import { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}
```

### 2. Serving React Build from Node.js

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve React static build
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.use('/api', apiRoutes);

// Catch-all: serve React app for any non-API route (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3000);
```

### 3. Next.js — React + Node.js (Full-Stack)

```javascript
// pages/api/users.js — Next.js API route (Node.js)
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).json(user);
  }
}

// pages/users.js — React component (SSR with Node.js)
export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  return { props: { users } };
}

export default function UsersPage({ users }) {
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

### 4. Angular with Node.js

```typescript
// Angular Service calling Node.js API
@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  createUser(user: CreateUserDto): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }
}
```

### 5. Real-time Updates with Socket.IO

```javascript
// Node.js server
io.on('connection', (socket) => {
  socket.on('new-order', async (order) => {
    const saved = await Order.create(order);
    io.emit('order-created', saved); // Notify all clients
  });
});
```

```jsx
// React component with real-time updates
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    socket.on('order-created', (order) => {
      setOrders(prev => [order, ...prev]);
    });
    return () => socket.off('order-created');
  }, []);
}
```
<br>

## 74. What is server-side rendering and how can it be achieved with Node.js?

**Server-Side Rendering (SSR)** is a technique where the HTML of a web page is generated on the server and sent to the client, rather than building the HTML in the browser using JavaScript (client-side rendering).

### SSR vs CSR Comparison

| Feature | SSR | CSR |
|---|---|---|
| Initial load | Fast (full HTML returned) | Slow (JS loads then renders) |
| SEO | Excellent | Poor (bots see empty page) |
| TTFB | Slower (server processing) | Faster |
| Interactivity | Slower (hydration needed) | Faster after initial load |
| Server load | Higher | Lower |

### 1. Basic SSR with Express + Template Engine (EJS)

```bash
npm install express ejs
```

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/users', async (req, res) => {
  // Data fetched on server
  const users = await User.findAll();

  // HTML generated on server with data
  res.render('users', { users, title: 'User List' });
});
```

```html
<!-- views/users.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Users</h1>
  <ul>
    <% users.forEach(user => { %>
      <li><%= user.name %> - <%= user.email %></li>
    <% }) %>
  </ul>
</body>
</html>
```

### 2. React SSR with ReactDOMServer

```javascript
const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');

function App({ users }) {
  return React.createElement('div', null,
    users.map(u => React.createElement('div', { key: u.id }, u.name))
  );
}

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  const html = renderToString(React.createElement(App, { users }));

  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(users)};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});
```

### 3. Next.js (Recommended for React SSR)

```javascript
// pages/users/index.js

// SSR — runs on every request
export async function getServerSideProps(context) {
  const { req, query } = context;
  const users = await prisma.user.findMany({
    take: parseInt(query.limit) || 10
  });

  return {
    props: { users }
  };
}

// SSG — runs at build time
export async function getStaticProps() {
  const users = await prisma.user.findMany();
  return {
    props: { users },
    revalidate: 60  // ISR: revalidate every 60 seconds
  };
}

export default function UsersPage({ users }) {
  return (
    <main>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </main>
  );
}
```

### 4. Nuxt.js (Vue SSR)

```javascript
// pages/users.vue
export default {
  async asyncData({ $axios }) {
    const users = await $axios.$get('/api/users');
    return { users };
  }
}
```

### Hydration

SSR sends fully rendered HTML, then React/Vue "hydrates" it — attaching event listeners and making it interactive:

```javascript
// client.js — hydrate (not render) existing server-rendered HTML
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const initialData = window.__INITIAL_DATA__;

hydrateRoot(
  document.getElementById('root'),
  <App users={initialData} />
);
```
<br>

## 75. What are some coding conventions and best practices in Node.js?

Following coding conventions and best practices ensures Node.js code is maintainable, performant, secure, and consistent across a team.

### 1. Project Structure

```
project/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   └── app.js           # Express setup
├── tests/
├── .env.example
├── .eslintrc.js
├── .gitignore
└── package.json
```

### 2. Use Async/Await Over Callbacks

```javascript
// BAD — callback hell
function getUser(id, callback) {
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, user) => {
    if (err) return callback(err);
    db.query('SELECT * FROM orders WHERE user_id = ?', [user.id], (err, orders) => {
      if (err) return callback(err);
      callback(null, { user, orders });
    });
  });
}

// GOOD — async/await
async function getUser(id) {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  const orders = await db.query('SELECT * FROM orders WHERE user_id = ?', [user.id]);
  return { user, orders };
}
```

### 3. Environment Configuration

```javascript
// config.js
require('dotenv').config();

module.exports = {
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h'
  }
};
```

### 4. Error Handling

```javascript
// Custom error class
class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Async handler wrapper (avoids try/catch in every route)
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Usage
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new AppError('User not found', 404);
  res.json(user);
}));
```

### 5. Input Validation

```javascript
const { body, param, validationResult } = require('express-validator');

const validateCreateUser = [
  body('email').isEmail().normalizeEmail(),
  body('name').isLength({ min: 2, max: 50 }).trim(),
  body('password').isLength({ min: 8 }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

app.post('/users', validateCreateUser, createUser);
```

### 6. Use ESLint and Prettier

```javascript
// .eslintrc.js
module.exports = {
  env: { node: true, es2021: true },
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error'
  }
};
```

### 7. Security Best Practices

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

app.use(helmet());
app.use(mongoSanitize());  // Prevent NoSQL injection
app.use(xss());            // Prevent XSS
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
```

### Key Conventions Summary

| Convention | Rule |
|---|---|
| Naming | camelCase for variables, PascalCase for classes |
| Files | kebab-case for filenames |
| Modules | One class/feature per file |
| Error Handling | Always handle async errors |
| Secrets | Always use environment variables |
| Logging | Use a logger (not just console.log) |
<br>

## 76. How do you ensure your Node.js application adheres to the twelve-factor app principles?

The **Twelve-Factor App** is a methodology for building modern, scalable, maintainable web applications. Each factor addresses a common aspect of software development.

### Factor 1: Codebase

```bash
# One codebase tracked in version control, many deploys
git init
git remote add origin https://github.com/myorg/myapp.git

# Different environments from same codebase via config
NODE_ENV=production pm2 start app.js
NODE_ENV=staging pm2 start app.js
```

### Factor 2: Dependencies

```json
// package.json — explicitly declare all dependencies
{
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

```bash
npm ci  # Install exact versions from package-lock.json
```

### Factor 3: Config

```javascript
// All config via environment variables
require('dotenv').config();

const config = {
  database: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  port: process.env.PORT
};
```

### Factor 4: Backing Services

```javascript
// Treat external services as attached resources via URLs/credentials
const db = new Sequelize(process.env.DATABASE_URL);
const redis = require('redis').createClient({ url: process.env.REDIS_URL });
const storage = new AWS.S3({ region: process.env.AWS_REGION });
// Swap services by changing env vars only
```

### Factor 5: Build, Release, Run

```yaml
# CI/CD pipeline (GitHub Actions)
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci          # Build stage
      - run: npm test
      - run: docker build .  # Create release artifact

  deploy:
    needs: build
    steps:
      - run: docker push registry/myapp:${{ github.sha }}
      - run: kubectl set image deployment/myapp myapp=registry/myapp:${{ github.sha }}
```

### Factor 6: Processes

```javascript
// Keep processes stateless — no in-memory sessions
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

// Store session in Redis, not process memory
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET
}));
```

### Factor 7: Port Binding

```javascript
// App exports its own HTTP service via port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
```

### Factor 8: Concurrency

```javascript
// Scale out via process model (cluster/PM2)
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());
}
```

### Factor 9: Disposability

```javascript
// Fast startup, graceful shutdown
const server = app.listen(PORT);

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    db.close();
    process.exit(0);
  });
});
```

### Factor 10: Dev/Prod Parity

```yaml
# docker-compose.yml — same stack in all environments
services:
  app:
    image: node:18-alpine
  db:
    image: postgres:15
  cache:
    image: redis:7
```

### Factor 11: Logs

```javascript
// Treat logs as event streams
const winston = require('winston');
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.json()
    })
  ]
});
// Log management handled by platform (ELK, Datadog, etc.)
```

### Factor 12: Admin Processes

```javascript
// Run one-off tasks as separate scripts
// scripts/migrate.js
const { sequelize } = require('./src/db');
async function migrate() {
  await sequelize.sync({ force: false, alter: true });
  console.log('Migration complete');
  process.exit(0);
}
migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
```
<br>

## 77. What is code linting and how is it applied in Node.js?

**Code linting** is the process of using a static analysis tool to identify programming errors, stylistic issues, and suspicious code patterns without executing it. In Node.js, **ESLint** is the most widely used linter.

### Why Linting Matters

- Catches bugs before runtime (undefined variables, unreachable code)
- Enforces consistent code style across a team
- Identifies potential security issues
- Integrates with CI/CD to enforce code quality

### Installing ESLint

```bash
npm install --save-dev eslint
npx eslint --init  # Interactive setup
```

### ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended'
  ],
  plugins: ['node', 'security'],
  parserOptions: {
    ecmaVersion: 2021
  },
  rules: {
    // Error prevention
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-dupe-keys': 'error',

    // Best practices
    'prefer-const': 'error',
    'no-var': 'error',
    'eqeqeq': ['error', 'always'],
    'no-eval': 'error',
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-process-exit': 'warn',

    // Code style
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],

    // Security
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-regexp': 'warn'
  }
};
```

### ESLint with TypeScript

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```javascript
// .eslintrc.js for TypeScript
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'error'
  }
};
```

### Prettier Integration

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

```javascript
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5"
}

// .eslintrc.js — add prettier config
module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
```

### package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write src/**/*.js"
  }
}
```

### Pre-commit Hooks with Husky

```bash
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

```json
// package.json
{
  "lint-staged": {
    "*.js": ["eslint --fix", "prettier --write"],
    "*.ts": ["eslint --fix", "prettier --write"]
  }
}
```

### ESLint in CI/CD

```yaml
# .github/workflows/ci.yml
- name: Lint
  run: npm run lint

- name: Type Check
  run: npx tsc --noEmit
```
<br>

## 78. What are some strategies for scaling Node.js applications?

Scaling Node.js applications involves both **vertical scaling** (more resources per server) and **horizontal scaling** (more servers) to handle increased traffic and load.

### 1. Clustering (Vertical Scaling with Multi-core)

```javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  os.cpus().forEach(() => cluster.fork());

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.id} died, restarting...`);
    cluster.fork();
  });
} else {
  require('./app');
}
```

### 2. PM2 Cluster Mode

```bash
pm2 start app.js -i max  # Automatically uses all CPU cores
pm2 reload app           # Zero-downtime restart
```

### 3. Horizontal Scaling with Load Balancer

```nginx
# Nginx load balancer
upstream node_servers {
    least_conn;
    server server1:3000;
    server server2:3000;
    server server3:3000;
}

server {
    listen 80;
    location / {
        proxy_pass http://node_servers;
    }
}
```

### 4. Caching (Redis)

```javascript
const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

async function getCachedUsers(req, res) {
  const cacheKey = `users:${JSON.stringify(req.query)}`;

  // Check cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  // Fetch from DB
  const users = await User.findAll({ where: req.query });

  // Cache result
  await client.setEx(cacheKey, 300, JSON.stringify(users));

  res.json(users);
}
```

### 5. Database Connection Pooling

```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 20,       // Max connections
  waitForConnections: true,
  queueLimit: 0
});
```

### 6. Asynchronous Job Queue

```javascript
const Bull = require('bull');

const emailQueue = new Bull('email', { redis: { port: 6379 } });

// Producer: add jobs without blocking the API
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  await emailQueue.add({ email: user.email, type: 'welcome' });
  res.status(201).json(user);
});

// Consumer: process in background
emailQueue.process(async (job) => {
  await sendEmail(job.data.email, job.data.type);
});
```

### 7. CDN for Static Assets

```javascript
// Serve static assets via CDN
app.use('/static', express.static('public', {
  maxAge: '1y',                         // Cache for 1 year
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.setHeader('CDN-Cache-Control', 'max-age=31536000');
  }
}));
```

### 8. Microservices

```javascript
// Split monolith into independently scalable services
// user-service: scale based on auth traffic
// product-service: scale based on browse traffic
// order-service: scale based on purchase traffic
```

### Scaling Strategies Summary

| Strategy | Type | Benefit |
|---|---|---|
| Clustering | Vertical | Use all CPU cores |
| Load Balancing | Horizontal | Distribute traffic |
| Caching | Performance | Reduce DB load |
| Job Queues | Async | Offload heavy work |
| Microservices | Architectural | Scale independently |
| CDN | Network | Reduce server load |
<br>

## 79. How do you handle session management in a scaled Node.js application?

In a scaled application with multiple Node.js instances, in-memory sessions don't work because different requests may go to different servers. **Shared session storage** (like Redis) is required.

### The Problem with In-Memory Sessions

```javascript
// BAD — in-memory sessions don't work with multiple instances
const session = require('express-session');
app.use(session({
  secret: 'secret',
  // Sessions stored in memory — lost on restart,
  // not shared between instances!
}));
```

### Solution 1: Redis Session Store

```bash
npm install express-session connect-redis redis
```

```javascript
const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({ url: process.env.REDIS_URL });

await redisClient.connect();

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  name: 'sessionId',
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24  // 24 hours
  }
}));

// Session usage
app.post('/login', async (req, res) => {
  const user = await authenticateUser(req.body);
  req.session.userId = user.id;  // Saved to Redis
  req.session.role = user.role;
  res.json({ message: 'Logged in' });
});

app.get('/profile', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  res.json({ userId: req.session.userId });
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.clearCookie('sessionId');
    res.json({ message: 'Logged out' });
  });
});
```

### Solution 2: JWT (Stateless)

JWT is the recommended approach for truly scalable, stateless auth:

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  // Store refresh token hash in Redis for invalidation
  await redis.setEx(`refresh:${user.id}`, 7 * 24 * 3600, refreshToken);

  res.json({ accessToken, refreshToken });
});

// Refresh token endpoint
app.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const stored = await redis.get(`refresh:${payload.userId}`);

    if (!stored || stored !== refreshToken) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const newAccessToken = jwt.sign(
      { userId: payload.userId },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});
```
<br>

## 80. How does the use of microservices affect the scalability of a Node.js application?

Microservices architecture breaks a monolithic application into small, independently deployable services. This has a profound effect on how Node.js applications scale.

### Monolith vs Microservices Scaling

```
MONOLITH — Scale the entire app
┌─────────────────────┐
│ Users + Orders + Pay │ × 5 instances (inefficient)
└─────────────────────┘

MICROSERVICES — Scale only what needs it
┌────────┐     ┌────────┐ × 10 ← Heavy traffic
│  Users │     │ Orders │
└────────┘     └────────┘
┌────────┐     ┌────────┐ × 2 ← Light traffic
│  Auth  │     │  Pay   │
└────────┘     └────────┘
```

### 1. Independent Scaling Per Service

```yaml
# Kubernetes deployment — scale services independently
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 10  # Scale orders independently based on load
  selector:
    matchLabels:
      app: order-service
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3   # Less traffic — fewer replicas needed
```

### 2. Service Discovery and Load Balancing

```javascript
// API Gateway routing to services
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/users' }
}));

app.use('/api/orders', createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true,
  pathRewrite: { '^/api/orders': '/orders' }
}));
```

### 3. Asynchronous Communication (Reduces Tight Coupling)

```javascript
// Using RabbitMQ for async service communication
const amqp = require('amqplib');

// Order service publishes event
async function createOrder(orderData) {
  const order = await OrderModel.create(orderData);

  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertExchange('orders', 'fanout');
  channel.publish('orders', '', Buffer.from(JSON.stringify({
    event: 'ORDER_CREATED',
    data: order
  })));

  return order;
}

// Inventory service consumes event
async function listenForOrders() {
  const channel = await (await amqp.connect(process.env.RABBITMQ_URL)).createChannel();
  await channel.assertExchange('orders', 'fanout');

  const q = await channel.assertQueue('', { exclusive: true });
  channel.bindQueue(q.queue, 'orders', '');

  channel.consume(q.queue, (msg) => {
    const event = JSON.parse(msg.content.toString());
    if (event.event === 'ORDER_CREATED') {
      reserveInventory(event.data);
    }
  });
}
```

### 4. Circuit Breaker Pattern

```javascript
const CircuitBreaker = require('opossum');
const axios = require('axios');

const fetchUser = (id) => axios.get(`http://user-service/users/${id}`);

const circuitBreaker = new CircuitBreaker(fetchUser, {
  timeout: 3000,        // 3s timeout
  errorThresholdPercentage: 50, // Open if 50% fail
  resetTimeout: 30000   // Try again after 30s
});

circuitBreaker.fallback((id) => ({ id, name: 'Unknown', cached: true }));

app.get('/orders/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  const user = await circuitBreaker.fire(order.userId);
  res.json({ order, user });
});
```

### Microservices Scalability Benefits

| Benefit | Impact |
|---|---|
| Independent scaling | Scale only bottleneck services |
| Technology diversity | Use best tool per service |
| Fault isolation | One service failure doesn't crash all |
| Deployment independence | Deploy and update services separately |
| Team autonomy | Teams own their services end-to-end |
<br>

## 81. What are message queues and how are they used in Node.js?

A **message queue** is an asynchronous communication mechanism where producers send messages to a queue, and consumers process them independently. This decouples services and enables reliable asynchronous processing.

### Why Use Message Queues?

- **Decouple services**: Producers and consumers don't need to be available simultaneously
- **Load leveling**: Handle traffic spikes without overwhelming services
- **Reliability**: Messages persist until successfully processed
- **Retry logic**: Failed messages can be retried automatically

### 1. Bull Queue (Redis-based)

```bash
npm install bull
```

```javascript
const Bull = require('bull');
const redis = { host: 'localhost', port: 6379 };

// Email queue
const emailQueue = new Bull('email-queue', { redis });

// Producer: Add jobs to the queue
app.post('/users/register', async (req, res) => {
  const user = await User.create(req.body);

  // Don't wait for email — add to queue
  await emailQueue.add({
    to: user.email,
    subject: 'Welcome!',
    template: 'welcome',
    userId: user.id
  }, {
    attempts: 3,               // Retry up to 3 times
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: true
  });

  res.status(201).json(user);
});

// Consumer: Process jobs
emailQueue.process(async (job) => {
  const { to, subject, template, userId } = job.data;
  await sendEmail(to, subject, template);
  console.log(`Email sent to ${to}`);
});

// Event handlers
emailQueue.on('completed', (job) => console.log(`Job ${job.id} done`));
emailQueue.on('failed', (job, err) => console.error(`Job ${job.id} failed:`, err));
```

### 2. Bull Board (Queue Dashboard)

```javascript
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
const { ExpressAdapter } = require('@bull-board/express');

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullAdapter(emailQueue), new BullAdapter(smsQueue)],
  serverAdapter
});

app.use('/admin/queues', serverAdapter.getRouter());
```

### 3. Multiple Queue Types

```javascript
// Priority queue
const orderQueue = new Bull('orders', { redis });

await orderQueue.add({ orderId: 1 }, { priority: 1 });  // Low priority
await orderQueue.add({ orderId: 2 }, { priority: 10 }); // High priority

// Delayed jobs
await emailQueue.add(
  { type: 'reminder', userId: 1 },
  { delay: 24 * 60 * 60 * 1000 } // Delay 24 hours
);

// Recurring jobs (cron)
await reportQueue.add(
  { report: 'daily-stats' },
  { repeat: { cron: '0 8 * * *' } } // Every day at 8 AM
);
```

### Queue Use Cases

| Use Case | Queue Type | Example |
|---|---|---|
| Email sending | Background job | Welcome/reset emails |
| Image processing | Background job | Resize/compress uploads |
| Report generation | Delayed/scheduled | Daily reports |
| Order processing | Priority queue | Payments before tracking |
| Notifications | Fan-out | Push notifications to many users |
<br>

## 82. How do you implement RabbitMQ with Node.js?

**RabbitMQ** is an open-source message broker that implements the AMQP protocol. The **`amqplib`** package is the most popular way to integrate it with Node.js.

### Installation

```bash
npm install amqplib
```

### Basic Producer and Consumer

```javascript
const amqp = require('amqplib');

// Producer: Send messages to a queue
async function sendMessage(queue, message) {
  const connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
  const channel = await connection.createChannel();

  // Ensure queue exists
  await channel.assertQueue(queue, { durable: true });

  // Send message
  channel.sendToQueue(
    queue,
    Buffer.from(JSON.stringify(message)),
    { persistent: true } // Messages survive broker restart
  );

  console.log('Sent:', message);

  setTimeout(() => connection.close(), 500);
}

// Consumer: Process messages from a queue
async function consumeMessages(queue, handler) {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue(queue, { durable: true });
  channel.prefetch(1); // Process one message at a time

  channel.consume(queue, async (msg) => {
    if (!msg) return;

    const content = JSON.parse(msg.content.toString());
    console.log('Received:', content);

    try {
      await handler(content);
      channel.ack(msg);          // Acknowledge success
    } catch (err) {
      console.error('Processing failed:', err);
      channel.nack(msg, false, true); // Nack and requeue
    }
  });

  console.log(`Waiting for messages in '${queue}'...`);
}

// Usage
await sendMessage('tasks', { type: 'email', to: 'user@example.com' });
await consumeMessages('tasks', async (task) => {
  if (task.type === 'email') await sendEmail(task.to);
});
```

### Pub/Sub (Fanout Exchange)

```javascript
const amqp = require('amqplib');

// Publisher
async function publishEvent(event, data) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertExchange(event, 'fanout', { durable: false });
  channel.publish(event, '', Buffer.from(JSON.stringify(data)));

  console.log(`Event published: ${event}`);
}

// Subscriber
async function subscribeToEvent(event, handler) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertExchange(event, 'fanout', { durable: false });

  // Exclusive queue — created fresh for each subscriber
  const q = await channel.assertQueue('', { exclusive: true });
  channel.bindQueue(q.queue, event, '');

  channel.consume(q.queue, (msg) => {
    handler(JSON.parse(msg.content.toString()));
  }, { noAck: true });
}

// Usage
await publishEvent('user.created', { id: 1, email: 'alice@example.com' });

// Multiple services can subscribe to the same event
await subscribeToEvent('user.created', (user) => sendWelcomeEmail(user));
await subscribeToEvent('user.created', (user) => createUserProfile(user));
```

### Topic Exchange (Routing)

```javascript
// Routing messages based on routing key pattern
const channel = await connection.createChannel();
await channel.assertExchange('logs', 'topic', { durable: false });

// Publisher
channel.publish('logs', 'user.error', Buffer.from('User error message'));
channel.publish('logs', 'order.info', Buffer.from('Order created'));

// Subscriber — only gets user.* messages
const q = await channel.assertQueue('', { exclusive: true });
channel.bindQueue(q.queue, 'logs', 'user.*');

// Subscriber — gets all error messages
const q2 = await channel.assertQueue('', { exclusive: true });
channel.bindQueue(q2.queue, 'logs', '*.error');
```
<br>

## 83. What is the significance of ZeroMQ in Node.js applications?

**ZeroMQ (ØMQ or ZMQ)** is a high-performance asynchronous messaging library that provides socket-like APIs for various communication patterns. Unlike RabbitMQ, it has no broker — messages pass directly between endpoints.

### ZeroMQ vs Traditional Message Brokers

| Feature | ZeroMQ | RabbitMQ/Kafka |
|---|---|---|
| Broker | None (brokerless) | Required |
| Latency | Extremely low | Higher |
| Persistence | No (in-memory) | Yes |
| Complexity | Lower | Higher |
| Use Case | In-process/same datacenter | Cross-datacenter, durability |

### Installation

```bash
npm install zeromq
```

### 1. Request-Reply Pattern

```javascript
const zmq = require('zeromq');

// Server (Reply socket)
async function server() {
  const sock = new zmq.Reply();
  await sock.bind('tcp://127.0.0.1:3000');
  console.log('Server ready');

  for await (const [msg] of sock) {
    const request = JSON.parse(msg.toString());
    console.log('Request:', request);

    const response = { result: request.a + request.b };
    await sock.send(JSON.stringify(response));
  }
}

// Client (Request socket)
async function client() {
  const sock = new zmq.Request();
  sock.connect('tcp://127.0.0.1:3000');

  await sock.send(JSON.stringify({ a: 10, b: 20 }));
  const [result] = await sock.receive();
  console.log('Result:', JSON.parse(result.toString())); // { result: 30 }
}

server();
setTimeout(client, 500);
```

### 2. Publish-Subscribe Pattern

```javascript
const zmq = require('zeromq');

// Publisher
async function publisher() {
  const sock = new zmq.Publisher();
  await sock.bind('tcp://127.0.0.1:3001');

  setInterval(async () => {
    const price = { symbol: 'AAPL', price: (Math.random() * 200 + 100).toFixed(2) };
    await sock.send(['stocks', JSON.stringify(price)]); // Topic + data
  }, 1000);
}

// Subscriber
async function subscriber(filter) {
  const sock = new zmq.Subscriber();
  sock.connect('tcp://127.0.0.1:3001');
  sock.subscribe(filter); // Subscribe to 'stocks' topic

  for await (const [topic, data] of sock) {
    console.log(`[${topic}]`, JSON.parse(data.toString()));
  }
}

publisher();
subscriber('stocks');
```

### 3. Push-Pull (Worker Queue)

```javascript
const zmq = require('zeromq');

// Ventilator (distributes work)
async function ventilator() {
  const sock = new zmq.Push();
  await sock.bind('tcp://127.0.0.1:5557');

  for (let i = 0; i < 100; i++) {
    await sock.send(JSON.stringify({ task: i, data: `task-${i}` }));
  }
}

// Worker (pulls and processes work)
async function worker(id) {
  const sock = new zmq.Pull();
  sock.connect('tcp://127.0.0.1:5557');

  for await (const [msg] of sock) {
    const task = JSON.parse(msg.toString());
    console.log(`Worker ${id} processing:`, task.task);
    await process(task);
  }
}

ventilator();
worker(1);
worker(2);
worker(3);
```

### When to Use ZeroMQ

- **High-frequency messaging** within a datacenter
- **Low-latency** inter-process communication
- **Building custom messaging systems** without broker overhead
- **Distributed computing** and **parallel task processing**
<br>

## 84. How do cloud platforms like AWS, Azure, or GCP facilitate Node.js application deployment?

Cloud platforms provide managed services that simplify deploying, scaling, and maintaining Node.js applications, reducing infrastructure management burden.

### AWS (Amazon Web Services)

#### Elastic Beanstalk (PaaS)

```bash
# Install EB CLI
pip install awsebcli

# Initialize and deploy
eb init my-node-app --platform node.js
eb create production
eb deploy

# Environment variables
eb setenv NODE_ENV=production DB_URL=mongodb://...
```

```json
// .elasticbeanstalk/config.yml
branch-defaults:
  main:
    environment: production
global:
  application_name: my-node-app
  default_platform: Node.js 18
```

#### AWS Lambda (Serverless)

```javascript
// Lambda handler
exports.handler = async (event, context) => {
  const { httpMethod, path, body } = event;

  if (httpMethod === 'GET' && path === '/users') {
    const users = await User.findAll();
    return {
      statusCode: 200,
      body: JSON.stringify(users),
      headers: { 'Content-Type': 'application/json' }
    };
  }

  return { statusCode: 404, body: 'Not Found' };
};
```

```yaml
# serverless.yml (Serverless Framework)
service: my-api
provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    DB_URL: ${env:DB_URL}

functions:
  api:
    handler: handler.handler
    events:
      - http:
          path: /{proxy+}
          method: ANY
```

#### ECS (Elastic Container Service)

```yaml
# task-definition.json
{
  "family": "my-node-app",
  "containerDefinitions": [{
    "name": "node-app",
    "image": "123456789.dkr.ecr.us-east-1.amazonaws.com/my-app:latest",
    "portMappings": [{ "containerPort": 3000 }],
    "environment": [
      { "name": "NODE_ENV", "value": "production" }
    ],
    "memory": 512,
    "cpu": 256
  }]
}
```

### Google Cloud Platform (GCP)

#### Cloud Run (Serverless Containers)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
ENV PORT 8080
CMD ["node", "app.js"]
```

```bash
# Build and deploy
gcloud builds submit --tag gcr.io/PROJECT_ID/my-app
gcloud run deploy my-app \
  --image gcr.io/PROJECT_ID/my-app \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### App Engine

```yaml
# app.yaml
runtime: nodejs18
env: standard
automatic_scaling:
  target_cpu_utilization: 0.65
  min_instances: 1
  max_instances: 10

env_variables:
  NODE_ENV: production
```

```bash
gcloud app deploy
```

### Azure

#### Azure App Service

```bash
az webapp create \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --name my-node-app \
  --runtime "NODE:18-lts"

az webapp config appsettings set \
  --name my-node-app \
  --settings NODE_ENV=production PORT=3000

# Deploy from GitHub
az webapp deployment source config \
  --name my-node-app \
  --repo-url https://github.com/myuser/myapp \
  --branch main
```

### Platform Comparison

| Feature | Heroku | AWS EB | GCP Cloud Run | Azure App Service |
|---|---|---|---|---|
| Ease of Use | Easiest | Easy | Moderate | Moderate |
| Scaling | Auto | Auto | Auto (to 0) | Auto |
| Cost | Higher | Moderate | Pay-per-use | Moderate |
| Vendor Lock-in | Low | Moderate | Moderate | Moderate |
<br>

## 85. What is serverless architecture, and how does it relate to Node.js?

**Serverless architecture** is a cloud execution model where the cloud provider manages the server infrastructure and automatically allocates resources when code is executed. Developers only write functions — no server management required.

### How Serverless Works

```
Request → Cloud Provider → Allocate Container → Run Function → Return Response → Deallocate
```

### Why Node.js is Ideal for Serverless

- **Fast cold start**: Node.js starts faster than Java/Python in most cases
- **Event-driven**: Matches serverless's event-triggered execution model
- **Lightweight**: Small memory footprint
- **NPM ecosystem**: Rich libraries available

### AWS Lambda with Node.js

```javascript
// handler.js — Lambda function
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.getUser = async (event) => {
  const userId = event.pathParameters.userId;

  const params = {
    TableName: 'Users',
    Key: { userId }
  };

  const result = await dynamoDB.get(params).promise();

  if (!result.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'User not found' })
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result.Item)
  };
};

exports.createUser = async (event) => {
  const body = JSON.parse(event.body);
  const user = { userId: Date.now().toString(), ...body, createdAt: new Date().toISOString() };

  await dynamoDB.put({ TableName: 'Users', Item: user }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(user)
  };
};
```

### Serverless Framework

```yaml
# serverless.yml
service: user-api
provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  stage: ${opt:stage, 'dev'}
  environment:
    USERS_TABLE: ${self:service}-users-${self:provider.stage}
  iam:
    role:
      statements:
        - Effect: Allow
          Action: ['dynamodb:*']
          Resource: '*'

functions:
  getUser:
    handler: handler.getUser
    events:
      - http:
          path: users/{userId}
          method: GET

  createUser:
    handler: handler.createUser
    events:
      - http:
          path: users
          method: POST

  scheduledTask:
    handler: tasks.cleanup
    events:
      - schedule: rate(1 hour)  # Runs every hour

resources:
  Resources:
    UsersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: ${self:provider.environment.USERS_TABLE}
        BillingMode: PAY_PER_REQUEST
        AttributeDefinitions:
          - AttributeName: userId
            AttributeType: S
        KeySchema:
          - AttributeName: userId
            KeyType: HASH
```

### Express in Lambda (Adapter Pattern)

```javascript
// Wrap existing Express app for Lambda
const serverless = require('serverless-http');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Export as Lambda handler
exports.handler = serverless(app);
```

### Cold Start Problem

```javascript
// Minimize cold starts by:

// 1. Keeping the Lambda warm with scheduled pings
// serverless.yml
functions:
  warmup:
    handler: warmup.handler
    events:
      - schedule: rate(5 minutes)

// 2. Reuse connections outside handler
const db = require('./db'); // Initialized once, reused across invocations

exports.handler = async (event) => {
  // db connection already established
  const result = await db.query('SELECT 1');
  return result;
};

// 3. Minimize package size
// Use esbuild/webpack to bundle and tree-shake
```

### Serverless Trade-offs

| Benefit | Challenge |
|---|---|
| No server management | Cold starts |
| Auto-scaling | Vendor lock-in |
| Pay-per-execution | Debugging complexity |
| Fast deployment | Stateless (no filesystem) |
| High availability | Execution time limits |
<br>

## 86. How can you manage multiple Node.js versions on the same machine?

Managing multiple Node.js versions is important when working on projects that require different versions. **NVM (Node Version Manager)** is the most popular tool for this.

### NVM (Node Version Manager)

#### Installation

```bash
# Unix/Mac
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Windows: install nvm-windows from GitHub releases
```

#### Basic Usage

```bash
# List available versions
nvm ls-remote
nvm ls-remote --lts  # LTS versions only

# Install specific versions
nvm install 18       # Install Node.js 18 (latest)
nvm install 18.17.0  # Install specific patch
nvm install --lts    # Install latest LTS
nvm install node     # Install latest version

# Switch versions
nvm use 18
nvm use 16.20.0
nvm use --lts

# List installed versions
nvm ls

# Set default version
nvm alias default 18
nvm alias default node  # Always latest

# Run command with specific version without switching
nvm exec 16 node app.js
nvm run 16 app.js

# Uninstall a version
nvm uninstall 14

# Check current version
node --version
nvm current
```

### .nvmrc File (Per-Project Version)

```bash
# Create .nvmrc in project root
echo "18.17.0" > .nvmrc
# or
echo "lts/hydrogen" > .nvmrc

# Automatically use the project's version
cd my-project
nvm use       # Reads .nvmrc and switches

# Auto-switch when entering directory (add to .bashrc/.zshrc)
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"
  if [ -n "$nvmrc_path" ]; then
    nvm use > /dev/null
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

### Package.json Engine Specification

```json
{
  "engines": {
    "node": ">=18.0.0 <20.0.0",
    "npm": ">=9.0.0"
  }
}
```

### FNM (Fast Node Manager — Alternative)

```bash
# Installation (faster than nvm)
curl -fsSL https://fnm.vercel.app/install | bash

# Usage (similar to nvm)
fnm install 18
fnm use 18
fnm default 18
fnm list
```

### Volta (Alternative — Pins per Project)

```bash
# Install Volta
curl https://get.volta.sh | bash

# Pin Node version to project
volta pin node@18
volta pin npm@9

# Install global tools with version pinning
volta install node@18
volta install yarn

# package.json automatically gets:
# "volta": { "node": "18.17.0", "npm": "9.8.0" }
```

### Summary of Tools

| Tool | Speed | Auto-switching | Windows Support |
|---|---|---|---|
| nvm | Medium | Yes (with config) | Separate nvm-windows |
| fnm | Fast | Yes | Yes |
| Volta | Fast | Yes (automatic) | Yes |
| n | Fast | No | No |
<br>

## 87. What are .env files and how do they work in a Node.js application?

**`.env` files** are plain text files that store environment-specific configuration as key-value pairs. They provide a simple way to manage configuration without hardcoding values in source code.

### .env File Format

```bash
# .env — Never commit to version control!

# Server
NODE_ENV=development
PORT=3000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp_dev
DB_USER=postgres
DB_PASSWORD=mysecretpassword

# Authentication
JWT_SECRET=my-very-secret-jwt-key-at-least-32-chars
JWT_EXPIRES_IN=1h
JWT_REFRESH_SECRET=another-very-secret-key
JWT_REFRESH_EXPIRES_IN=7d

# External APIs
STRIPE_SECRET_KEY=sk_test_...
SENDGRID_API_KEY=SG....
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=us-east-1

# Redis
REDIS_URL=redis://localhost:6379

# Feature Flags
ENABLE_FEATURE_X=true
MAX_UPLOAD_SIZE=10485760
```

### Loading .env with dotenv

```bash
npm install dotenv
```

```javascript
// app.js — Load FIRST, before any other imports
require('dotenv').config();

// Or with path option for non-standard location
require('dotenv').config({ path: '.env.local' });

// Now process.env variables are available everywhere
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const DB_URL = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
```

### Multiple Environment Files

```bash
.env                # Default (shared settings)
.env.local          # Local overrides (not committed)
.env.development    # Development-specific
.env.test           # Test environment
.env.production     # Production values (often managed by CI/CD)
```

```javascript
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
```

### Validating Required Variables

```javascript
// config/env.js — Validate at startup
const required = [
  'DATABASE_URL',
  'JWT_SECRET',
  'REDIS_URL'
];

const missing = required.filter(key => !process.env[key]);

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`);
  process.exit(1);
}

module.exports = {
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  database: {
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  }
};
```

### Using envalid for Typed Validation

```bash
npm install envalid
```

```javascript
const { cleanEnv, str, port, url, bool } = require('envalid');

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
  PORT: port({ default: 3000 }),
  DATABASE_URL: url(),
  JWT_SECRET: str({ minLength: 32 }),
  ENABLE_EMAILS: bool({ default: false })
});

// env is now a validated, typed object
console.log(env.PORT);          // number (not string!)
console.log(env.ENABLE_EMAILS); // boolean
```

### .gitignore Setup

```bash
# .gitignore
.env
.env.local
.env.*.local
.env.production

# But commit the example file
# .env.example or .env.template
```
<br>

## 88. Describe the usage of the config module in Node.js.

The **`config`** module provides a robust hierarchical configuration management system, allowing different configurations for different environments with inheritance and overrides.

### Installation

```bash
npm install config
```

### Directory Structure

```
project/
├── config/
│   ├── default.json     # Base configuration for all environments
│   ├── development.json # Development overrides
│   ├── test.json        # Test environment overrides
│   ├── production.json  # Production overrides
│   └── custom-environment-variables.json  # Map env vars to config
└── app.js
```

### Configuration Files

```json
// config/default.json — base config for all environments
{
  "server": {
    "port": 3000,
    "host": "localhost"
  },
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "myapp",
    "pool": {
      "min": 2,
      "max": 10
    }
  },
  "cache": {
    "ttl": 300,
    "enabled": true
  },
  "logging": {
    "level": "debug",
    "format": "simple"
  }
}
```

```json
// config/production.json — overrides for production
{
  "server": {
    "port": 8080
  },
  "database": {
    "pool": {
      "min": 5,
      "max": 50
    }
  },
  "cache": {
    "ttl": 3600
  },
  "logging": {
    "level": "error",
    "format": "json"
  }
}
```

```json
// config/test.json — overrides for testing
{
  "database": {
    "name": "myapp_test"
  },
  "cache": {
    "enabled": false
  }
}
```

### Mapping Environment Variables

```json
// config/custom-environment-variables.json
{
  "database": {
    "host": "DB_HOST",
    "port": "DB_PORT",
    "name": "DB_NAME",
    "user": "DB_USER",
    "password": "DB_PASSWORD"
  },
  "server": {
    "port": "PORT"
  },
  "jwt": {
    "secret": "JWT_SECRET"
  }
}
```

### Using the Config Module

```javascript
const config = require('config');

// Access values
const port = config.get('server.port');
const dbHost = config.get('database.host');
const cacheEnabled = config.get('cache.enabled');

// Check if value exists
if (config.has('feature.newDashboard')) {
  // Use feature flag
}

// Get nested config object
const dbConfig = config.get('database');
console.log(dbConfig.host, dbConfig.port, dbConfig.name);

// Full application config usage
const express = require('express');
const app = express();
const port = config.get('server.port');

// Database connection
const pool = new Pool({
  host: config.get('database.host'),
  port: config.get('database.port'),
  database: config.get('database.name'),
  user: config.get('database.user'),
  password: config.get('database.password'),
  max: config.get('database.pool.max'),
  min: config.get('database.pool.min')
});

app.listen(port, () => {
  console.log(`Server running in ${config.util.getEnv('NODE_ENV')} mode on port ${port}`);
});
```

### Setting Environment

```bash
NODE_ENV=production node app.js
NODE_ENV=test npm test
```

### Config vs dotenv

| Feature | config | dotenv |
|---|---|---|
| Hierarchy | Yes (inherit/override) | No |
| Type safety | Manual | Manual |
| Environment mapping | Yes | N/A |
| File format | JSON, YAML, JS | .env |
| Complexity | More | Less |
| Best for | Complex multi-env apps | Simple key-value config |
<br>

## 89. What is continuous integration/deployment and how is it implemented for Node.js apps?

**CI/CD (Continuous Integration/Continuous Deployment)** is a practice of automating the building, testing, and deployment of applications to ensure rapid, reliable delivery.

### CI/CD Pipeline Stages

```
Code Push → Lint → Test → Build → Deploy → Monitor
```

### GitHub Actions CI/CD Pipeline

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # Stage 1: Lint and Test
  test:
    name: Lint and Test
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_DB: testdb
          POSTGRES_PASSWORD: testpass
        options: >-
          --health-cmd pg_isready
          --health-interval 10s

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run unit tests
        run: npm test
        env:
          NODE_ENV: test
          DATABASE_URL: postgresql://postgres:testpass@localhost:5432/testdb

      - name: Upload coverage
        uses: codecov/codecov-action@v3

  # Stage 2: Build Docker Image
  build:
    name: Build Docker Image
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    outputs:
      image-tag: ${{ steps.meta.outputs.tags }}

    steps:
      - uses: actions/checkout@v3

      - name: Log in to Container Registry
        uses: docker/login-action@v2
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v4
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=sha,prefix=sha-
            type=ref,event=branch

      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # Stage 3: Deploy
  deploy:
    name: Deploy to Production
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production

    steps:
      - name: Deploy to AWS ECS
        uses: aws-actions/amazon-ecs-deploy-task-definition@v1
        with:
          task-definition: task-definition.json
          service: my-service
          cluster: my-cluster

      # Or deploy to Heroku
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "my-node-app"
          heroku_email: "user@example.com"
```

### package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint src/**/*.js",
    "test": "jest --coverage --forceExit",
    "test:integration": "jest --config jest.integration.config.js",
    "build": "tsc",
    "start": "node dist/app.js",
    "start:dev": "nodemon src/app.ts"
  }
}
```

### Jest Configuration

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterFramework: ['./tests/setup.js']
};
```
<br>

## 90. How do you set up a CI/CD pipeline for a Node.js project?

A complete CI/CD pipeline for Node.js involves source control, automated testing, containerization, and deployment. Here's a comprehensive example using GitHub Actions with Docker and AWS.

### Project Structure

```
my-node-app/
├── .github/
│   └── workflows/
│       ├── ci.yml          # PR checks
│       └── deploy.yml      # Deployment
├── src/
├── tests/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── package.json
```

### PR/CI Workflow

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main, develop]

jobs:
  quality:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]  # Test on multiple Node versions

    steps:
      - uses: actions/checkout@v3

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm test -- --coverage

      - name: Comment coverage on PR
        uses: romeovs/lcov-reporter-action@v0.3.1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          lcov-file: ./coverage/lcov.info
```

### Deployment Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:  # Allow manual trigger
    inputs:
      environment:
        description: 'Target environment'
        required: true
        default: 'staging'

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    environment: staging

    steps:
      - uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build, tag, and push image
        id: build-image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          ECR_REPOSITORY: my-node-app
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
          echo "image=$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG" >> $GITHUB_OUTPUT

      - name: Deploy to staging
        run: |
          aws ecs update-service \
            --cluster staging-cluster \
            --service my-node-app \
            --force-new-deployment

      - name: Wait for deployment
        run: |
          aws ecs wait services-stable \
            --cluster staging-cluster \
            --services my-node-app

      - name: Run smoke tests
        run: npm run test:smoke -- --url https://staging.myapp.com

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production  # Requires manual approval in GitHub

    steps:
      - name: Deploy to production
        run: |
          aws ecs update-service \
            --cluster production-cluster \
            --service my-node-app \
            --force-new-deployment

      - name: Notify Slack
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "Deployed ${{ github.sha }} to production ✅"
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### Rollback Strategy

```bash
# Store previous version
PREVIOUS_VERSION=$(aws ecs describe-services --cluster prod-cluster --services my-app \
  --query 'services[0].deployments[1].taskDefinition' --output text)

# Rollback if needed
aws ecs update-service \
  --cluster prod-cluster \
  --service my-app \
  --task-definition $PREVIOUS_VERSION
```
<br>

## 91. How would you troubleshoot a slow running Node.js application?

Troubleshooting performance issues in Node.js involves profiling CPU, memory, event loop, and I/O to identify bottlenecks.

### Step 1: Identify the Bottleneck

```javascript
// Add response time logging
const responseTime = require('response-time');

app.use(responseTime((req, res, time) => {
  if (time > 1000) { // Log slow requests (>1s)
    console.warn(`SLOW REQUEST: ${req.method} ${req.url} - ${time.toFixed(0)}ms`);
  }
}));
```

### Step 2: Profile with --inspect

```bash
# Start with CPU profiler
node --inspect --prof app.js

# Run load test to generate profile data
npx autocannon -c 50 -d 30 http://localhost:3000/api/users

# Process the profile
node --prof-process isolate-*.log > profile.txt
```

### Step 3: CPU Profiling with clinic.js

```bash
npm install -g clinic

# Generate flame graph (CPU)
clinic flame -- node app.js

# Doctor (overall health)
clinic doctor -- node app.js

# Bubbleprof (async operations)
clinic bubbleprof -- node app.js
```

### Step 4: Find Memory Leaks

```javascript
const heapdump = require('heapdump');

// Take heap snapshots via endpoint
app.get('/debug/heapdump', (req, res) => {
  const filename = `/tmp/heapdump-${Date.now()}.heapsnapshot`;
  heapdump.writeSnapshot(filename);
  res.json({ file: filename });
});

// Monitor memory over time
setInterval(() => {
  const mem = process.memoryUsage();
  console.log({
    rss: `${Math.round(mem.rss / 1024 / 1024)}MB`,
    heapUsed: `${Math.round(mem.heapUsed / 1024 / 1024)}MB`,
    heapTotal: `${Math.round(mem.heapTotal / 1024 / 1024)}MB`
  });
}, 30000);
```

### Step 5: Event Loop Lag

```javascript
const { monitorEventLoopDelay } = require('perf_hooks');

// Monitor event loop delay
const histogram = monitorEventLoopDelay({ resolution: 10 });
histogram.enable();

setInterval(() => {
  console.log('Event Loop Delay (ms):', {
    min: histogram.min / 1e6,
    max: histogram.max / 1e6,
    mean: histogram.mean / 1e6,
    p99: histogram.percentile(99) / 1e6
  });
}, 10000);
```

### Step 6: Database Query Analysis

```javascript
// Log slow queries
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const originalQuery = pool.query.bind(pool);
pool.query = async (...args) => {
  const start = Date.now();
  const result = await originalQuery(...args);
  const duration = Date.now() - start;

  if (duration > 100) {
    console.warn('SLOW QUERY:', {
      sql: args[0],
      duration: `${duration}ms`
    });
  }

  return result;
};
```

### Step 7: Common Fixes

```javascript
// 1. Add proper indexes to DB
await db.query('CREATE INDEX CONCURRENTLY idx_users_email ON users(email)');

// 2. Use Redis caching for repeated queries
async function getUserById(id) {
  const cached = await redis.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  const user = await User.findByPk(id);
  await redis.setEx(`user:${id}`, 300, JSON.stringify(user));
  return user;
}

// 3. Use pagination instead of loading all records
app.get('/users', async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const offset = (page - 1) * limit;
  const users = await User.findAll({ limit, offset });
  res.json(users);
});

// 4. Move CPU-intensive work to worker threads
const { Worker } = require('worker_threads');
app.post('/process', (req, res) => {
  const worker = new Worker('./processor.js', { workerData: req.body });
  worker.on('message', result => res.json(result));
});
```
<br>

```markdown
## 92. Describe how to handle file uploads in a Node.js application.

Handling file uploads in Node.js typically involves parsing multipart/form-data, validating files, and storing them safely — either locally or in cloud storage.

### Step 1: Basic Setup with Multer

```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configure disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});
```

### Step 2: File Validation

```javascript
// Whitelist allowed MIME types and enforce file size limits
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  }
});
```

### Step 3: Upload Routes

```javascript
// Single file upload
app.post('/upload/single', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ filename: req.file.filename, size: req.file.size });
});

// Multiple file upload
app.post('/upload/multiple', upload.array('files', 10), (req, res) => {
  const files = req.files.map(f => ({ name: f.filename, size: f.size }));
  res.json({ uploaded: files });
});
```

### Step 4: Upload to AWS S3

```javascript
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');

const s3 = new S3Client({ region: process.env.AWS_REGION });

const s3Upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now()}-${file.originalname}`);
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

app.post('/upload/s3', s3Upload.single('file'), (req, res) => {
  res.json({ url: req.file.location });
});
```

### Step 5: Streaming Large Files

```javascript
const fs = require('fs');
const { pipeline } = require('stream/promises');

// Stream directly to disk without loading into memory
app.post('/upload/stream', async (req, res) => {
  const filename = `uploads/${Date.now()}-upload.bin`;
  const writeStream = fs.createWriteStream(filename);

  try {
    await pipeline(req, writeStream);
    res.json({ message: 'Upload complete', file: filename });
  } catch (err) {
    res.status(500).json({ error: 'Stream failed', detail: err.message });
  }
});
```

### Step 6: Error Handling

```javascript
// Centralized multer error handler
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'File too large' });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err.message === 'Invalid file type') {
    return res.status(415).json({ error: 'Unsupported media type' });
  }
  next(err);
});
```

---

## 93. How would you handle heavy computation tasks in a Node.js application?

Since Node.js runs on a single thread, CPU-intensive tasks block the event loop. The solution is to offload heavy work using Worker Threads, child processes, or job queues.

### Step 1: Worker Threads (Recommended)

```javascript
// main.js
const { Worker } = require('worker_threads');

function runHeavyTask(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: data });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker exited with code ${code}`));
    });
  });
}

app.post('/compute', async (req, res) => {
  const result = await runHeavyTask(req.body);
  res.json(result);
});
```

```javascript
// worker.js
const { workerData, parentPort } = require('worker_threads');

function heavyComputation(data) {
  // Simulate CPU-intensive work (e.g., matrix multiplication, hashing)
  let result = 0;
  for (let i = 0; i < 1e8; i++) result += i * data.factor;
  return result;
}

parentPort.postMessage(heavyComputation(workerData));
```

### Step 2: Worker Thread Pool

```javascript
const { StaticPool } = require('node-worker-threads-pool');

// Reuse threads instead of spawning new ones per request
const pool = new StaticPool({
  size: require('os').cpus().length,
  task: './worker.js'
});

app.post('/compute', async (req, res) => {
  const result = await pool.exec(req.body);
  res.json({ result });
});
```

### Step 3: Child Processes for Isolated Tasks

```javascript
const { fork } = require('child_process');

app.post('/report', (req, res) => {
  const child = fork('./reportGenerator.js');

  child.send({ data: req.body });

  child.on('message', result => {
    res.json(result);
    child.kill();
  });

  child.on('error', err => {
    res.status(500).json({ error: err.message });
  });
});
```

### Step 4: Offload with a Job Queue (BullMQ + Redis)

```javascript
const { Queue, Worker } = require('bullmq');
const IORedis = require('ioredis');

const connection = new IORedis();
const computeQueue = new Queue('heavy-compute', { connection });

// Enqueue job
app.post('/compute', async (req, res) => {
  const job = await computeQueue.add('task', req.body, {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 }
  });
  res.json({ jobId: job.id });
});

// Check job status
app.get('/compute/:id', async (req, res) => {
  const job = await computeQueue.getJob(req.params.id);
  const state = await job.getState();
  res.json({ state, result: job.returnvalue });
});

// Worker process (run separately)
const worker = new Worker('heavy-compute', async job => {
  return performHeavyWork(job.data);
}, { connection });
```

### Step 5: Caching Results of Repeated Computations

```javascript
const crypto = require('crypto');

async function cachedCompute(input) {
  const key = `compute:${crypto.createHash('md5').update(JSON.stringify(input)).digest('hex')}`;
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const result = await runHeavyTask(input);
  await redis.setEx(key, 3600, JSON.stringify(result)); // Cache for 1 hour
  return result;
}
```

---

## 94. What is the role of a Node.js application in DevOps?

Node.js plays multiple roles in DevOps pipelines — from tooling scripts and automation to serving APIs that drive CI/CD workflows and monitoring systems.

### Role 1: Build & Automation Scripts

```javascript
// build.js — Custom build pipeline using Node
const { execSync } = require('child_process');
const fs = require('fs');

const steps = [
  { name: 'Lint', cmd: 'npx eslint src/' },
  { name: 'Test', cmd: 'npx jest --coverage' },
  { name: 'Build', cmd: 'npx tsc' },
  { name: 'Docker Build', cmd: 'docker build -t myapp:latest .' }
];

for (const step of steps) {
  console.log(`\n▶ Running: ${step.name}`);
  try {
    execSync(step.cmd, { stdio: 'inherit' });
    console.log(`✓ ${step.name} passed`);
  } catch {
    console.error(`✗ ${step.name} failed`);
    process.exit(1);
  }
}
```

### Role 2: CI/CD Integration with GitHub Actions

```yaml
# .github/workflows/node-ci.yml
name: Node.js CI/CD

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install & Test
        run: |
          npm ci
          npm test
          npm run build

      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .

      - name: Push to registry
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USER }} --password-stdin
          docker push myapp:${{ github.sha }}
```

### Role 3: Health Check & Readiness Endpoints

```javascript
const os = require('os');

// Used by Kubernetes liveness/readiness probes
app.get('/health/live', (req, res) => {
  res.json({ status: 'alive', uptime: process.uptime() });
});

app.get('/health/ready', async (req, res) => {
  try {
    await db.query('SELECT 1');
    await redis.ping();
    res.json({ status: 'ready', memory: process.memoryUsage() });
  } catch (err) {
    res.status(503).json({ status: 'not ready', error: err.message });
  }
});
```

### Role 4: Infrastructure Scripting with AWS SDK

```javascript
const { EC2Client, DescribeInstancesCommand } = require('@aws-sdk/client-ec2');

const ec2 = new EC2Client({ region: 'us-east-1' });

async function listRunningInstances() {
  const command = new DescribeInstancesCommand({
    Filters: [{ Name: 'instance-state-name', Values: ['running'] }]
  });
  const response = await ec2.send(command);
  return response.Reservations.flatMap(r => r.Instances);
}
```

### Role 5: Custom Metrics & Alerting

```javascript
const client = require('prom-client');

// Expose Prometheus metrics
const httpDuration = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'status'],
  buckets: [50, 100, 300, 500, 1000]
});

app.use((req, res, next) => {
  const end = httpDuration.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.path, status: res.statusCode });
  });
  next();
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.send(await client.register.metrics());
});
```

---

## 95. Describe containerization and its benefits for Node.js applications.

Containerization packages a Node.js app with all its dependencies into an isolated, portable unit (container) using Docker, ensuring consistent behavior across all environments.

### Step 1: Production-Ready Dockerfile

```dockerfile
# Multi-stage build — keeps final image small
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS runner
WORKDIR /app

# Security: run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /app/node_modules ./node_modules
COPY . .

USER appuser
EXPOSE 3000

# Use exec form to handle signals correctly
CMD ["node", "server.js"]
```

### Step 2: Docker Compose for Local Dev

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
      - REDIS_URL=redis://cache:6379
    volumes:
      - .:/app
      - /app/node_modules   # Prevent host node_modules from overwriting
    depends_on:
      db:
        condition: service_healthy
      cache:
        condition: service_started

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 5s
      timeout: 5s
      retries: 5

  cache:
    image: redis:7-alpine
```

### Step 3: Kubernetes Deployment

```yaml
# k8s/deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: node-app
  template:
    metadata:
      labels:
        app: node-app
    spec:
      containers:
        - name: node-app
          image: myrepo/node-app:latest
          ports:
            - containerPort: 3000
          resources:
            requests:
              memory: "128Mi"
              cpu: "250m"
            limits:
              memory: "256Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /health/live
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 15
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
```

### Key Benefits Summary

```
┌─────────────────────┬────────────────────────────────────────────┐
│ Benefit             │ What it Means for Node.js                  │
├─────────────────────┼────────────────────────────────────────────┤
│ Consistency         │ Same Node version & deps everywhere        │
│ Isolation           │ No global package conflicts                │
│ Scalability         │ Spin up replicas in seconds (K8s)         │
│ Fast Startup        │ Node containers boot in ~1s               │
│ Immutable Deploys   │ Roll back by re-tagging an image          │
│ Resource Limits     │ Prevent one app from starving others      │
└─────────────────────┴────────────────────────────────────────────┘
```

---

## 96. How is Node.js used in IoT (Internet of Things)?

Node.js is well-suited for IoT due to its event-driven, non-blocking architecture, which efficiently handles thousands of concurrent sensor connections and message streams.

### Use Case 1: MQTT Broker Client (Sensor Data Ingestion)

```javascript
const mqtt = require('mqtt');

const broker = mqtt.connect('mqtt://broker.hivemq.com', {
  clientId: `gateway-${Date.now()}`,
  keepalive: 60,
  reconnectPeriod: 1000
});

broker.on('connect', () => {
  console.log('Connected to MQTT broker');
  broker.subscribe('sensors/+/temperature', { qos: 1 });
  broker.subscribe('sensors/+/humidity', { qos: 1 });
});

broker.on('message', (topic, payload) => {
  const [, deviceId, metric] = topic.split('/');
  const value = parseFloat(payload.toString());

  console.log(`Device ${deviceId} → ${metric}: ${value}`);
  storeReading(deviceId, metric, value); // Persist to time-series DB
});
```

### Use Case 2: HTTP Gateway for Sensor Devices

```javascript
const express = require('express');
const app = express();
app.use(express.json());

const readings = new Map();

// Devices POST their sensor data here
app.post('/devices/:id/data', (req, res) => {
  const { id } = req.params;
  const { temperature, humidity, battery } = req.body;

  readings.set(id, {
    temperature,
    humidity,
    battery,
    timestamp: new Date().toISOString()
  });

  // Emit to connected dashboards via WebSocket
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ deviceId: id, ...req.body }));
    }
  });

  res.json({ status: 'received' });
});
```

### Use Case 3: Real-Time Dashboard with WebSockets

```javascript
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Dashboard client connected');

  // Send current snapshot of all device readings
  ws.send(JSON.stringify({ type: 'snapshot', data: Object.fromEntries(readings) }));

  ws.on('close', () => console.log('Dashboard client disconnected'));
});
```

### Use Case 4: Hardware Control with Johnny-Five (Raspberry Pi)

```javascript
const { Board, Sensor, Led } = require('johnny-five');
const RaspiIO = require('raspi-io').RaspiIO;

const board = new Board({ io: new RaspiIO() });

board.on('ready', () => {
  const tempSensor = new Sensor({ pin: 'A0', freq: 2000 });
  const alertLed = new Led(13);

  tempSensor.on('change', value => {
    const celsius = (value * 0.488) - 50; // Convert raw ADC to °C
    console.log(`Temperature: ${celsius.toFixed(1)}°C`);

    if (celsius > 40) {
      alertLed.blink(500); // Flash LED on overheat
    } else {
      alertLed.stop().off();
    }
  });
});
```

### Use Case 5: Time-Series Storage with InfluxDB

```javascript
const { InfluxDB, Point } = require('@influxdata/influxdb-client');

const influx = new InfluxDB({ url: process.env.INFLUX_URL, token: process.env.INFLUX_TOKEN });
const writeApi = influx.getWriteApi('myorg', 'iot-bucket');

async function storeReading(deviceId, metric, value) {
  const point = new Point('sensor_reading')
    .tag('device_id', deviceId)
    .floatField(metric, value)
    .timestamp(new Date());

  writeApi.writePoint(point);
  await writeApi.flush();
}
```

---

## 97. What would you consider when developing a Node.js application for IoT devices?

IoT development adds constraints beyond typical web apps: unreliable networks, constrained hardware, security risks, and massive device scale all require deliberate design.

### Consideration 1: Reliable Messaging with QoS

```javascript
const mqtt = require('mqtt');

const client = mqtt.connect(process.env.MQTT_BROKER, {
  clientId: `device-${process.env.DEVICE_ID}`,
  clean: false,            // Persist session across reconnects
  reconnectPeriod: 5000,  // Retry every 5s
  connectTimeout: 30000
});

// QoS 1 = at-least-once delivery; QoS 2 = exactly-once
client.publish('sensors/data', JSON.stringify(payload), {
  qos: 1,
  retain: false
}, (err) => {
  if (err) console.error('Publish failed, will retry:', err.message);
});
```

### Consideration 2: Local Data Buffering (Offline Support)

```javascript
const Database = require('better-sqlite3');
const db = new Database('local-buffer.db');

// Buffer readings locally when offline
db.exec(`CREATE TABLE IF NOT EXISTS buffer (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  payload TEXT NOT NULL,
  created_at INTEGER DEFAULT (strftime('%s','now'))
)`);

function bufferReading(data) {
  db.prepare('INSERT INTO buffer (payload) VALUES (?)').run(JSON.stringify(data));
}

// Sync buffered data when connection is restored
client.on('connect', async () => {
  const rows = db.prepare('SELECT * FROM buffer ORDER BY id LIMIT 100').all();
  for (const row of rows) {
    client.publish('sensors/data', row.payload, { qos: 1 });
    db.prepare('DELETE FROM buffer WHERE id = ?').run(row.id);
  }
});
```

### Consideration 3: Security (TLS + Auth)

```javascript
const tls = require('tls');
const fs = require('fs');

const client = mqtt.connect('mqtts://broker.example.com:8883', {
  ca: fs.readFileSync('ca.crt'),
  cert: fs.readFileSync('device.crt'),
  key: fs.readFileSync('device.key'),
  rejectUnauthorized: true  // Never disable in production
});
```

### Consideration 4: Memory Management for Constrained Devices

```javascript
// Avoid memory leaks — clean up listeners after use
function sendReading(data) {
  const tempClient = mqtt.connect(BROKER_URL, options);

  tempClient.once('connect', () => {
    tempClient.publish('sensors/data', JSON.stringify(data), { qos: 1 }, () => {
      tempClient.end(); // Always close when done
    });
  });
}

// Monitor heap and trigger GC warning early
setInterval(() => {
  const { heapUsed, heapTotal } = process.memoryUsage();
  const usage = heapUsed / heapTotal;
  if (usage > 0.85) {
    console.warn(`High memory usage: ${(usage * 100).toFixed(1)}% — consider restarting`);
  }
}, 60000);
```

### Consideration 5: OTA (Over-The-Air) Update Support

```javascript
const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');

async function checkForUpdate(currentVersion) {
  const manifest = await fetch(`${process.env.UPDATE_SERVER}/manifest.json`);
  const { latestVersion, downloadUrl } = await manifest.json();

  if (latestVersion !== currentVersion) {
    console.log(`Updating from ${currentVersion} to ${latestVersion}`);
    const dest = fs.createWriteStream('/tmp/update.tar.gz');
    https.get(downloadUrl, res => {
      res.pipe(dest);
      dest.on('finish', () => {
        execSync('tar -xzf /tmp/update.tar.gz -C /app && pm2 restart all');
      });
    });
  }
}
```

---

## 98. Can you use Node.js for machine learning? If so, how?

Yes — Node.js can run inference, preprocess data, and even train lightweight models using TensorFlow.js. For heavy training, it integrates with Python-based services via REST or child processes.

### Approach 1: TensorFlow.js for Inference

```javascript
const tf = require('@tensorflow/tfjs-node');

async function loadAndPredict() {
  // Load a pre-trained model (e.g., exported from Python Keras)
  const model = await tf.loadLayersModel('file://./model/model.json');

  // Preprocess input
  const input = tf.tensor2d([[5.1, 3.5, 1.4, 0.2]]); // Example: Iris features

  // Run inference
  const prediction = model.predict(input);
  const result = await prediction.data();

  console.log('Predicted class probabilities:', Array.from(result));
}

loadAndPredict();
```

### Approach 2: Training a Simple Model in Node.js

```javascript
const tf = require('@tensorflow/tfjs-node');

async function trainModel() {
  const model = tf.sequential({
    layers: [
      tf.layers.dense({ inputShape: [1], units: 8, activation: 'relu' }),
      tf.layers.dense({ units: 1 })
    ]
  });

  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  // y = 2x + 1
  const xs = tf.tensor2d([1, 2, 3, 4, 5], [5, 1]);
  const ys = tf.tensor2d([3, 5, 7, 9, 11], [5, 1]);

  await model.fit(xs, ys, { epochs: 100, verbose: 0 });

  const prediction = model.predict(tf.tensor2d([[6]], [1, 1]));
  console.log('Prediction for x=6:', (await prediction.data())[0]); // ~13
  await model.save('file://./trained-model');
}
```

### Approach 3: Calling Python ML via Child Process

```javascript
const { spawn } = require('child_process');

function runPythonModel(inputData) {
  return new Promise((resolve, reject) => {
    const py = spawn('python3', ['predict.py']);

    py.stdin.write(JSON.stringify(inputData));
    py.stdin.end();

    let output = '';
    py.stdout.on('data', chunk => (output += chunk));
    py.stderr.on('data', err => console.error('Python error:', err.toString()));
    py.on('close', () => {
      try {
        resolve(JSON.parse(output));
      } catch {
        reject(new Error('Failed to parse Python output'));
      }
    });
  });
}

app.post('/predict', async (req, res) => {
  const result = await runPythonModel(req.body);
  res.json(result);
});
```

### Approach 4: Serving a Python ML Model via REST

```javascript
// Node.js acts as an API gateway; Python Flask/FastAPI runs the model
async function callMLService(features) {
  const response = await fetch(`${process.env.ML_SERVICE_URL}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ features })
  });

  if (!response.ok) throw new Error(`ML service error: ${response.status}`);
  return response.json();
}
```

### Approach 5: ONNX Runtime for Cross-Platform Models

```javascript
const ort = require('onnxruntime-node');

async function runOnnxModel(inputArray) {
  const session = await ort.InferenceSession.create('./model.onnx');
  const inputTensor = new ort.Tensor('float32', Float32Array.from(inputArray), [1, inputArray.length]);

  const results = await session.run({ input: inputTensor });
  return Array.from(results.output.data);
}
```

---

## 99. What are some machine learning libraries or tools available for Node.js?

Node.js has a growing ML ecosystem covering inference, NLP, classical ML, and data wrangling.

### Library 1: TensorFlow.js

```javascript
// Deep learning — training and inference in Node.js
const tf = require('@tensorflow/tfjs-node');     // CPU (native bindings)
// const tf = require('@tensorflow/tfjs-node-gpu'); // GPU variant

const model = tf.sequential();
model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });
```

### Library 2: ONNX Runtime Node

```javascript
// Run models exported from PyTorch, Scikit-learn, or Keras as ONNX
const ort = require('onnxruntime-node');

const session = await ort.InferenceSession.create('./resnet50.onnx', {
  executionProviders: ['cpu']  // or 'cuda' for GPU
});
console.log('Input names:', session.inputNames);
console.log('Output names:', session.outputNames);
```

### Library 3: Natural (NLP)

```javascript
// Classical NLP tasks — tokenization, stemming, sentiment, classifiers
const natural = require('natural');

// Sentiment analysis
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
const score = analyzer.getSentiment(['The', 'product', 'is', 'absolutely', 'amazing']);
console.log('Sentiment score:', score); // Positive = > 0

// Naive Bayes classifier
const classifier = new natural.BayesClassifier();
classifier.addDocument('I love this', 'positive');
classifier.addDocument('This is terrible', 'negative');
classifier.train();
console.log(classifier.classify('I really enjoy this')); // → 'positive'
```

### Library 4: ml.js (Classical ML)

```javascript
const { RandomForestClassifier } = require('ml-random-forest');

const trainingSet = [[1, 2], [2, 3], [3, 4], [4, 5]];
const labels = [0, 0, 1, 1];

const classifier = new RandomForestClassifier({ nEstimators: 50 });
classifier.train(trainingSet, labels);

const prediction = classifier.predict([[2.5, 3.5]]);
console.log('Predicted class:', prediction); // → [0] or [1]
```

### Library 5: Transformers.js (Hugging Face)

```javascript
// Run HuggingFace transformer models entirely in Node.js
const { pipeline } = require('@xenova/transformers');

// Zero-shot classification
const classifier = await pipeline('zero-shot-classification', 'Xenova/bart-large-mnli');
const result = await classifier(
  'Node.js is great for building APIs',
  ['technology', 'sports', 'politics']
);
console.log(result.labels[0]); // → 'technology'

// Text generation
const generator = await pipeline('text-generation', 'Xenova/gpt2');
const output = await generator('Node.js was created', { max_new_tokens: 50 });
console.log(output[0].generated_text);
```

### Quick Reference Table

```
┌──────────────────────┬────────────────────────────────────┬──────────────┐
│ Library              │ Best For                           │ Backend      │
├──────────────────────┼────────────────────────────────────┼──────────────┤
│ TensorFlow.js        │ Deep learning, training            │ TF C++ lib   │
│ ONNX Runtime         │ Cross-platform inference           │ ONNX Runtime │
│ Transformers.js      │ NLP, HuggingFace models            │ ONNX Runtime │
│ Natural              │ Classical NLP, text classification │ Pure JS      │
│ ml.js                │ Classical ML (RF, SVM, KNN)        │ Pure JS      │
│ brain.js             │ Neural networks in pure JS         │ Pure JS      │
└──────────────────────┴────────────────────────────────────┴──────────────┘
```

---

## 100. What are best practices for designing RESTful APIs in Node.js?

Well-designed REST APIs are consistent, versioned, secure, and performant. These practices cover structure, error handling, security, and documentation.

### Practice 1: Consistent Resource Naming & HTTP Methods

```javascript
// Use plural nouns for resources, never verbs
// ✓ Correct
router.get('/users',          getUsers);        // List
router.get('/users/:id',      getUserById);     // Read
router.post('/users',         createUser);      // Create
router.put('/users/:id',      replaceUser);     // Full replace
router.patch('/users/:id',    updateUser);      // Partial update
router.delete('/users/:id',   deleteUser);      // Delete

// Nested resources for relationships
router.get('/users/:id/orders',         getUserOrders);
router.get('/users/:id/orders/:orderId', getOrderDetail);

// ✗ Avoid verb-based routes
// router.post('/createUser');
// router.get('/getUserById');
```

### Practice 2: Versioning

```javascript
const v1 = require('./routes/v1');
const v2 = require('./routes/v2');

// URL versioning — clear and cache-friendly
app.use('/api/v1', v1);
app.use('/api/v2', v2);

// Or header versioning
app.use((req, res, next) => {
  const version = req.headers['api-version'] || 'v1';
  req.apiVersion = version;
  next();
});
```

### Practice 3: Standardized Error Responses

```javascript
// Consistent error shape across all endpoints
class AppError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

// Global error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message, code = 'INTERNAL_ERROR' } = err;
  res.status(statusCode).json({
    error: {
      code,
      message,
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
      requestId: req.id   // For tracing
    }
  });
});

// Usage
throw new AppError('User not found', 404, 'USER_NOT_FOUND');
```

### Practice 4: Input Validation with Zod

```javascript
const { z } = require('zod');

const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  age: z.number().int().min(0).max(120).optional()
});

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: { code: 'VALIDATION_ERROR', details: result.error.flatten() }
      });
    }
    req.validated = result.data;
    next();
  };
}

router.post('/users', validate(createUserSchema), createUser);
```

### Practice 5: Pagination, Filtering & Sorting

```javascript
app.get('/users', async (req, res) => {
  const {
    page = 1,
    limit = 20,
    sort = 'createdAt',
    order = 'desc',
    search
  } = req.query;

  const offset = (page - 1) * Math.min(limit, 100); // Cap at 100

  const where = search ? { name: { [Op.iLike]: `%${search}%` } } : {};

  const { count, rows } = await User.findAndCountAll({
    where,
    limit,
    offset,
    order: [[sort, order.toUpperCase()]]
  });

  res.json({
    data: rows,
    pagination: {
      total: count,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(count / limit)
    }
  });
});
```

### Practice 6: Authentication & Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');

// Rate limiting per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,
  standardHeaders: true,
  message: { error: { code: 'RATE_LIMITED', message: 'Too many requests' } }
});

// JWT authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: { code: 'UNAUTHORIZED' } });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: { code: 'INVALID_TOKEN' } });
  }
}

app.use('/api/', apiLimiter);
app.use('/api/v1/protected', authenticate);
```

### Practice 7: API Documentation with OpenAPI (Swagger)

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const spec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'My API', version: '1.0.0' }
  },
  apis: ['./routes/*.js']
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(spec));

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get('/users/:id', getUserById);
```


#### Explore all 100 answers here 👉 [Devinterview.io - Node.js](https://devinterview.io/questions/web-and-mobile-development/node-interview-questions)

<br>

<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>
