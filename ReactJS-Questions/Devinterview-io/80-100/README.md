
## 80. What are the features of create-react-app and how do you eject from it?

**Create React App (CRA)** is the official tool for setting up a new React project with zero configuration. It provides a pre-configured development environment.

### Features of Create React App:

### 1. **Zero Configuration Setup**

```bash
npx create-react-app my-app
cd my-app
npm start
```

No need to configure Webpack, Babel, ESLint, etc. Everything works out of the box.

### 2. **Development Server with Hot Reloading**

```bash
npm start
# Starts development server at http://localhost:3000
# Automatically opens browser
# Hot reloading enabled
```

### 3. **Built-in Build Scripts**

```bash
# Development mode
npm start

# Production build
npm run build

# Run tests
npm test

# Eject (irreversible)
npm run eject
```

### 4. **Production Optimization**

When you run `npm run build`, CRA automatically:

```javascript
// Minification
// Before: 50KB
function MyComponent() {
  const [count, setCount] = useState(0);
  return <div>Count: {count}</div>;
}

// After: 5KB (minified + gzipped)
function MyComponent(){const[e,t]=useState(0);return <div>Count: {e}</div>}

// Code splitting
// Tree shaking (removes unused code)
// Asset optimization
```

### 5. **JSX and ES6+ Support**

```javascript
// All these modern features work automatically:

// JSX
const element = <h1>Hello</h1>;

// Arrow functions
const greet = (name) => `Hello, ${name}`;

// Destructuring
const { name, age } = user;

// Spread operator
const newUser = { ...user, updated: true };

// Async/await
const fetchData = async () => {
  const response = await fetch('/api');
  return response.json();
};

// Optional chaining
const userName = user?.profile?.name;
```

### 6. **CSS and Asset Imports**

```javascript
// Import CSS
import './App.css';

// Import images
import logo from './logo.png';

// Import JSON
import data from './data.json';

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Logo" />
    </div>
  );
}
```

### 7. **CSS Modules**

```css
/* Button.module.css */
.button {
  background: blue;
  color: white;
  padding: 10px 20px;
}

.primary {
  background: green;
}
```

```javascript
// Button.js
import styles from './Button.module.css';

function Button() {
  return (
    <button className={styles.button}>
      Click Me
    </button>
  );
}
```

### 8. **Environment Variables**

```bash
# .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key
```

```javascript
// Access in your code
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

fetch(`${apiUrl}/data`, {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
});
```

### 9. **Testing Setup**

```javascript
// App.test.js (included by default)
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

```bash
npm test
# Runs tests in watch mode
```

### 10. **Progressive Web App (PWA) Support**

```javascript
// index.js
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Enable PWA features
serviceWorkerRegistration.register();
```

### 11. **TypeScript Support**

```bash
# Create new app with TypeScript
npx create-react-app my-app --template typescript

# Or add to existing app
npm install --save typescript @types/node @types/react @types/react-dom
```

---

## How to Eject from Create React App:

**⚠️ WARNING: Ejecting is a ONE-WAY operation. You CANNOT go back!**

### What is Ejecting?

Ejecting removes the single build dependency from your project and copies all configuration files and dependencies into your project, giving you full control.

### Before Ejecting:

```
my-app/
├── node_modules/
├── public/
├── src/
├── package.json
└── README.md

Hidden configuration in react-scripts
```

### After Ejecting:

```
my-app/
├── config/
│   ├── webpack.config.js
│   ├── webpackDevServer.config.js
│   ├── jest/
│   └── paths.js
├── scripts/
│   ├── build.js
│   ├── start.js
│   └── test.js
├── node_modules/
├── public/
├── src/
└── package.json (with 50+ new dependencies)
```

### When to Eject:

**✅ Good reasons to eject:**
- Need to customize Webpack configuration
- Want to add custom Babel plugins
- Need to modify build process significantly
- Want to use libraries that require specific Webpack configuration

**❌ Bad reasons to eject:**
- Just want to change one small thing (use alternatives instead)
- Don't understand what ejecting does
- Trying to learn React (stick with CRA)

### How to Eject:

```bash
# Step 1: Commit all changes (ejecting is irreversible)
git add .
git commit -m "Before ejecting"

# Step 2: Eject
npm run eject

# You'll see a warning:
? Are you sure you want to eject? This action is permanent. (y/N)

# Type 'y' and press Enter
```

**What happens after ejecting:**

```bash
✔ Ejecting...
✔ Copying files into /my-app
✔ Adding dependencies to package.json
✔ Updating scripts in package.json

Created:
  config/
  scripts/
  
Added dependencies:
  @babel/core
  @babel/preset-env
  @babel/preset-react
  webpack
  webpack-dev-server
  babel-loader
  css-loader
  ... (50+ more)

Removed:
  react-scripts
```

### After Ejecting - Customization Example:

**Before Ejecting (impossible to customize):**
```javascript
// Hidden inside react-scripts
// Can't modify
```

**After Ejecting (full control):**

```javascript
// config/webpack.config.js - Now you can edit!
module.exports = {
  // Add custom loader
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Add custom file loader
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  
  // Add custom plugin
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionPlugin()
  ],
  
  // Modify optimization
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  }
};
```

### Alternatives to Ejecting:

**1. Using CRACO (Create React App Configuration Override)**

```bash
npm install @craco/craco
```

```javascript
// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Modify webpack config without ejecting
      return webpackConfig;
    }
  },
  babel: {
    plugins: ['babel-plugin-styled-components']
  }
};
```

**2. Using react-app-rewired**

```bash
npm install react-app-rewired
```

```javascript
// config-overrides.js
module.exports = function override(config, env) {
  // Modify config
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  });
  
  return config;
};
```

**3. Switching to Vite**

```bash
# Modern alternative to CRA
npm create vite@latest my-app -- --template react
```

### Comparison:

| Feature | Create React App | After Ejecting | CRACO/Rewired |
|---------|-----------------|----------------|---------------|
| Configuration | Hidden | Full access | Selective override |
| Maintenance | Easy | Your responsibility | Easy |
| Upgrades | Automatic | Manual | Automatic |
| Complexity | Simple | Complex | Moderate |
| Reversible | N/A | No | Yes |

### Best Practice:

**Instead of ejecting, consider:**
1. Using CRACO or react-app-rewired for small customizations
2. Switching to Vite or Next.js for new projects
3. Only eject if you absolutely need full control and understand the implications

**Example Decision Tree:**
```
Need customization?
├─ Yes
│  ├─ Small change (one plugin/loader)
│  │  └─ Use CRACO ✅
│  └─ Major changes (complete rebuild)
│     └─ Consider Vite or Next.js ✅
└─ No
   └─ Stay with CRA ✅
```

## Integrations and API Handling

# 81. How do you handle API calls in React?

API calls in React are typically handled using hooks like `useEffect` for side effects and `useState` for managing data. Here are the common approaches:

## Best Practices for API Calls:

1. **Use `useEffect` hook** - Make API calls when component mounts
2. **Manage loading states** - Show loading indicators during fetches
3. **Handle errors** - Implement proper error handling
4. **Cleanup** - Cancel requests on unmount to prevent memory leaks
5. **Separate concerns** - Use custom hooks or services for API logic

## Example - Basic API Call:

```javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user data
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.example.com/users/${userId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

## Example - Custom Hook for API Calls:

```javascript
// useApi.js - Reusable custom hook
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to abort fetch on unmount
    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage in component
function ProductList() {
  const { data: products, loading, error } = useApi('https://api.example.com/products');

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

## Example - POST Request:

```javascript
import { useState } from 'react';

function CreateUser() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const result = await response.json();
      setMessage(`User created successfully: ${result.name}`);
      setFormData({ name: '', email: '' });
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Creating...' : 'Create User'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

---

# 82. What is Axios and how is it used over fetch in React applications?

**Axios** is a popular promise-based HTTP client library for making API requests in JavaScript. It provides a more feature-rich and convenient API compared to the native `fetch` API.

## Key Advantages of Axios over Fetch:

1. **Automatic JSON transformation** - No need to call `.json()`
2. **Better error handling** - Rejects on HTTP error status codes
3. **Request/response interceptors** - Modify requests/responses globally
4. **Request cancellation** - Built-in support with cancel tokens
5. **Progress tracking** - Monitor upload/download progress
6. **Timeout support** - Set request timeout easily
7. **CSRF protection** - Built-in XSRF token handling
8. **Older browser support** - Works in older browsers without polyfills

## Installation:

```bash
npm install axios
# or
yarn add axios
```

## Example - Basic GET Request Comparison:

### Using Fetch:
```javascript
import { useState, useEffect } from 'react';

function FetchExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Need to manually parse JSON
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

### Using Axios:
```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data); // Data is automatically parsed
        setLoading(false);
      })
      .catch(err => {
        // Axios automatically rejects on error status codes
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

## Example - POST Request with Axios:

```javascript
import { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [post, setPost] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const result = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        post,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setResponse(result.data);
      setPost({ title: '', body: '' });
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {response && <p>Created post with ID: {response.id}</p>}
    </form>
  );
}
```

## Example - Axios Instance with Interceptors:

```javascript
// api.js - Create configured Axios instance
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor - Add auth token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// Usage in component
import { useState, useEffect } from 'react';
import api from './api';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/dashboard')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, []);

  return <div>{data && <h1>Welcome, {data.userName}</h1>}</div>;
}
```

## Example - Request Cancellation:

```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const searchUsers = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.example.com/search?q=${query}`,
          { cancelToken: cancelToken.token }
        );
        setResults(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error('Error:', err);
        }
      }
    };

    const timeoutId = setTimeout(searchUsers, 500); // Debounce

    return () => {
      clearTimeout(timeoutId);
      cancelToken.cancel('Request canceled');
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## When to Use Axios vs Fetch:

**Use Axios when:**
- You need interceptors for authentication or logging
- You want automatic request/response transformation
- You need built-in timeout and progress tracking
- You're working with complex API requirements

**Use Fetch when:**
- You want to minimize dependencies
- You're building a simple application
- You need native browser support without extra libraries
- Bundle size is a critical concern

# 83. How would you handle WebSocket connections in a React application?

WebSocket connections enable real-time, bidirectional communication between the client and server. In React, you need to manage the WebSocket lifecycle carefully to avoid memory leaks and ensure proper cleanup.

## Best Practices for WebSocket in React:

1. **Initialize in `useEffect`** - Create connection when component mounts
2. **Cleanup on unmount** - Close connection to prevent memory leaks
3. **Handle reconnection** - Implement automatic reconnection logic
4. **Manage connection state** - Track connected/disconnected status
5. **Error handling** - Handle connection errors gracefully
6. **Use custom hooks** - Encapsulate WebSocket logic for reusability

## Example - Basic WebSocket Implementation:

```javascript
import { useState, useEffect, useRef } from 'react';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef(null);

  useEffect(() => {
    // Create WebSocket connection
    const ws = new WebSocket('ws://localhost:8080/chat');
    wsRef.current = ws;

    // Connection opened
    ws.onopen = () => {
      console.log('WebSocket Connected');
      setIsConnected(true);
    };

    // Listen for messages
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    // Connection closed
    ws.onclose = () => {
      console.log('WebSocket Disconnected');
      setIsConnected(false);
    };

    // Handle errors
    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setIsConnected(false);
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array - connect once

  const sendMessage = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'message',
        text: inputMessage,
        timestamp: new Date().toISOString()
      }));
      setInputMessage('');
    }
  };

  return (
    <div>
      <div>
        Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
      </div>
      
      <div style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          disabled={!isConnected}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} disabled={!isConnected}>
          Send
        </button>
      </div>
    </div>
  );
}
```

## Example - Custom Hook with Reconnection Logic:

```javascript
// useWebSocket.js
import { useState, useEffect, useRef, useCallback } from 'react';

function useWebSocket(url, options = {}) {
  const {
    reconnectInterval = 3000,
    reconnectAttempts = 5,
    onOpen,
    onClose,
    onMessage,
    onError
  } = options;

  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const wsRef = useRef(null);
  const reconnectCountRef = useRef(0);
  const reconnectTimeoutRef = useRef(null);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = (event) => {
        console.log('WebSocket Connected');
        setIsConnected(true);
        reconnectCountRef.current = 0;
        onOpen?.(event);
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setLastMessage(data);
        onMessage?.(data);
      };

      ws.onclose = (event) => {
        console.log('WebSocket Disconnected');
        setIsConnected(false);
        onClose?.(event);

        // Attempt to reconnect
        if (reconnectCountRef.current < reconnectAttempts) {
          reconnectCountRef.current++;
          console.log(`Reconnection attempt ${reconnectCountRef.current}/${reconnectAttempts}`);
          
          reconnectTimeoutRef.current = setTimeout(() => {
            connect();
          }, reconnectInterval);
        } else {
          console.log('Max reconnection attempts reached');
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
        onError?.(error);
      };
    } catch (error) {
      console.error('Connection error:', error);
    }
  }, [url, reconnectInterval, reconnectAttempts, onOpen, onClose, onMessage, onError]);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [connect]);

  const sendMessage = useCallback((data) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(data));
      return true;
    }
    console.warn('WebSocket is not connected');
    return false;
  }, []);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
    if (wsRef.current) {
      wsRef.current.close();
    }
  }, []);

  return {
    isConnected,
    lastMessage,
    sendMessage,
    disconnect
  };
}

export default useWebSocket;

// Usage in component
function LiveDashboard() {
  const [stats, setStats] = useState({ users: 0, messages: 0 });

  const { isConnected, lastMessage, sendMessage } = useWebSocket(
    'ws://localhost:8080/dashboard',
    {
      reconnectInterval: 3000,
      reconnectAttempts: 5,
      onMessage: (data) => {
        if (data.type === 'stats') {
          setStats(data.payload);
        }
      },
      onOpen: () => {
        console.log('Dashboard connected');
        sendMessage({ type: 'subscribe', channel: 'stats' });
      }
    }
  );

  return (
    <div>
      <h2>Live Dashboard {isConnected ? '🟢' : '🔴'}</h2>
      <div>Active Users: {stats.users}</div>
      <div>Total Messages: {stats.messages}</div>
      <div>Last Update: {lastMessage?.timestamp}</div>
    </div>
  );
}
```

## Example - Real-time Notifications:

```javascript
import { useState, useEffect } from 'react';

function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/notifications');
    setWs(socket);

    socket.onopen = () => {
      console.log('Notification service connected');
      // Authenticate
      socket.send(JSON.stringify({
        type: 'auth',
        token: localStorage.getItem('authToken')
      }));
    };

    socket.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      
      setNotifications((prev) => [notification, ...prev].slice(0, 10));
      
      // Show browser notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(notification.title, {
          body: notification.message,
          icon: '/notification-icon.png'
        });
      }
    };

    socket.onerror = (error) => {
      console.error('Notification service error:', error);
    };

    socket.onclose = () => {
      console.log('Notification service disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  const markAsRead = (id) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'mark_read',
        notificationId: id
      }));
      
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    }
  };

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul>
          {notifications.map((notif) => (
            <li
              key={notif.id}
              style={{
                backgroundColor: notif.read ? '#f0f0f0' : '#e3f2fd',
                padding: '10px',
                marginBottom: '5px'
              }}
            >
              <strong>{notif.title}</strong>
              <p>{notif.message}</p>
              <small>{new Date(notif.timestamp).toLocaleString()}</small>
              {!notif.read && (
                <button onClick={() => markAsRead(notif.id)}>
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## Example - Using Socket.IO (Popular WebSocket Library):

```javascript
// First install: npm install socket.io-client
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function CollaborativeEditor() {
  const [content, setContent] = useState('');
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to Socket.IO server
    const newSocket = io('http://localhost:8080', {
      auth: {
        token: localStorage.getItem('authToken')
      },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5
    });

    setSocket(newSocket);

    // Listen for events
    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('document:update', (data) => {
      setContent(data.content);
    });

    newSocket.on('users:update', (data) => {
      setUsers(data.users);
    });

    newSocket.on('user:joined', (data) => {
      console.log(`${data.username} joined`);
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Cleanup
    return () => {
      newSocket.close();
    };
  }, []);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    // Emit changes to server
    if (socket) {
      socket.emit('document:edit', {
        content: newContent,
        timestamp: Date.now()
      });
    }
  };

  return (
    <div>
      <div>
        <h3>Active Users: {users.length}</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <textarea
        value={content}
        onChange={handleContentChange}
        style={{ width: '100%', height: '400px' }}
        placeholder="Start typing..."
      />
    </div>
  );
}
```

---

# 84. What are some strategies used to connect a React front end to a backend server?

Connecting a React frontend to a backend involves various strategies depending on your architecture, requirements, and scale. Here are the most common approaches:

## 1. REST API (Most Common)

Using REST APIs with fetch or Axios to communicate with backend endpoints.

```javascript
// api/userService.js - Centralized API service
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// User service
export const userService = {
  getAll: () => apiClient.get('/users'),
  getById: (id) => apiClient.get(`/users/${id}`),
  create: (data) => apiClient.post('/users', data),
  update: (id, data) => apiClient.put(`/users/${id}`, data),
  delete: (id) => apiClient.delete(`/users/${id}`)
};

// Usage in component
import { useState, useEffect } from 'react';
import { userService } from './api/userService';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService.getAll()
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 2. GraphQL (Apollo Client)

GraphQL provides a flexible query language for APIs with efficient data fetching.

```javascript
// First install: npm install @apollo/client graphql

// apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;

// index.js - Wrap app with ApolloProvider
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// Usage in component
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function UserManagement() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => refetch()
  });

  const handleCreate = async () => {
    await createUser({
      variables: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={handleCreate}>Add User</button>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 3. WebSocket / Real-time Communication

For real-time data updates and bidirectional communication.

```javascript
// socketService.js
import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect(url, token) {
    this.socket = io(url, {
      auth: { token },
      reconnection: true
    });

    this.socket.on('connect', () => {
      console.log('Socket connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    return this.socket;
  }

  emit(event, data) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event) {
    if (this.socket) {
      this.socket.off(event);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketService();

// Usage in component
import { useEffect, useState } from 'react';
import socketService from './socketService';

function RealTimeChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketService.connect('http://localhost:8080', localStorage.getItem('token'));

    socketService.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      socketService.off('message');
      socketService.disconnect();
    };
  }, []);

  const sendMessage = (text) => {
    socketService.emit('send_message', { text, timestamp: Date.now() });
  };

  return (
    <div>
      {messages.map((msg, idx) => (
        <div key={idx}>{msg.text}</div>
      ))}
      <button onClick={() => sendMessage('Hello!')}>Send</button>
    </div>
  );
}
```

## 4. Server-Side Rendering (SSR) with Next.js

Next.js provides built-in API routes and server-side data fetching.

```javascript
// pages/api/users.js - API route in Next.js
export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch from database
    const users = await db.users.findAll();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const user = await db.users.create(req.body);
    res.status(201).json(user);
  }
}

// pages/users.js - Server-side rendering
export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return {
    props: { users }
  };
}

function UsersPage({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersPage;

// Static generation with revalidation
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();

  return {
    props: { users },
    revalidate: 60 // Revalidate every 60 seconds
  };
}
```

## 5. Backend for Frontend (BFF) Pattern

Create a dedicated backend layer specifically for your React frontend.

```javascript
// server/bff.js - Express BFF server
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Aggregate data from multiple services
app.get('/api/dashboard', async (req, res) => {
  try {
    const [users, stats, activities] = await Promise.all([
      axios.get('http://user-service:5001/users'),
      axios.get('http://analytics-service:5002/stats'),
      axios.get('http://activity-service:5003/recent')
    ]);

    res.json({
      users: users.data,
      stats: stats.data,
      activities: activities.data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log('BFF running on port 4000'));

// React component consuming BFF
function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Users: {data.users.length}</h2>
      <h2>Total Views: {data.stats.views}</h2>
      <h2>Recent Activities: {data.activities.length}</h2>
    </div>
  );
}
```

## 6. Proxy Configuration (Development)

Configure proxy in package.json to avoid CORS issues during development.

```json
// package.json
{
  "proxy": "http://localhost:5000"
}

// Now you can make requests without full URL
fetch('/api/users')  // Proxies to http://localhost:5000/api/users
```

## 7. State Management Integration (Redux + RTK Query)

Redux Toolkit Query provides powerful data fetching and caching.

```javascript
// store/api/usersApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User']
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['User']
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['User']
    })
  })
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation
} = usersApi;

// Usage in component
function UserList() {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();

  const handleAdd = async () => {
    await createUser({ name: 'New User', email: 'user@example.com' });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={handleAdd}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Summary of Strategies:

| Strategy | Best For | Complexity |
|----------|----------|------------|
| REST API | Standard CRUD operations | Low |
| GraphQL | Complex data requirements | Medium |
| WebSocket | Real-time features | Medium |
| SSR/Next.js | SEO, performance | Medium-High |
| BFF Pattern | Microservices architecture | High |
| RTK Query | Redux applications | Medium |

Choose the strategy that best fits your application's requirements, team expertise, and scalability needs!

## Deployment and Optimization

# 85. How would you deploy a React application?

Deploying a React application involves building the production bundle and hosting it on a server or platform. Here are the most common deployment strategies:

## 1. Build Process

First, create an optimized production build:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# This creates a 'build' folder with optimized static files
```

The build folder contains:
- Minified JavaScript bundles
- Optimized CSS files
- Compressed assets
- index.html entry point

## 2. Vercel (Recommended for Next.js/React)

**Easiest deployment with automatic CI/CD**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Using Vercel Dashboard:**
1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Automatic deployment on every push

```json
// vercel.json - Configuration file
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": { "cache-control": "s-maxage=31536000,immutable" },
      "dest": "/static/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 3. Netlify

**Great for static React apps with continuous deployment**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

**Using Netlify Dashboard:**
1. Connect GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Deploy automatically on git push

```toml
# netlify.toml - Configuration file
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 4. AWS S3 + CloudFront

**Scalable and cost-effective for static sites**

```bash
# Install AWS CLI
# Configure AWS credentials
aws configure

# Build the app
npm run build

# Sync to S3 bucket
aws s3 sync build/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Deployment Script (deploy.sh):**
```bash
#!/bin/bash

# Build the application
echo "Building React app..."
npm run build

# Upload to S3
echo "Uploading to S3..."
aws s3 sync build/ s3://my-react-app-bucket \
  --delete \
  --cache-control max-age=31536000,public \
  --exclude index.html

# Upload index.html separately with no-cache
aws s3 cp build/index.html s3://my-react-app-bucket/index.html \
  --cache-control no-cache,no-store,must-revalidate

# Invalidate CloudFront
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"

echo "Deployment complete!"
```

## 5. Docker Deployment

**For containerized applications**

```dockerfile
# Dockerfile
# Stage 1: Build the application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

```nginx
# nginx.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

```bash
# Build and run Docker container
docker build -t my-react-app .
docker run -p 80:80 my-react-app

# Using docker-compose
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

## 6. GitHub Pages

**Free hosting for public repositories**

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}

# Deploy
npm run deploy
```

## 7. Traditional Server (Node.js + Express)

**For self-hosted deployments**

```javascript
// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from build folder
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: '1y',
  etag: false
}));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

```json
// package.json
{
  "scripts": {
    "start": "node server.js",
    "build": "react-scripts build"
  }
}
```

## 8. CI/CD Pipeline (GitHub Actions)

**Automated deployment on every push**

```yaml
# .github/workflows/deploy.yml
name: Deploy React App

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test -- --watchAll=false
    
    - name: Build
      run: npm run build
      env:
        CI: false
        REACT_APP_API_URL: ${{ secrets.API_URL }}
    
    - name: Deploy to S3
      uses: jakejarvis/s3-sync-action@master
      with:
        args: --delete
      env:
        AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        SOURCE_DIR: 'build'
```

## Environment Variables

```bash
# .env.production
REACT_APP_API_URL=https://api.production.com
REACT_APP_ENV=production
REACT_APP_ANALYTICS_ID=UA-XXXXXXXXX-X

# .env.staging
REACT_APP_API_URL=https://api.staging.com
REACT_APP_ENV=staging
```

---

# 86. How do you optimize the performance of a React application for production?

Performance optimization is crucial for providing a fast, smooth user experience. Here are comprehensive strategies:

## 1. Code Splitting & Lazy Loading

Split your bundle to load only necessary code initially.

```javascript
// Using React.lazy and Suspense
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// Route-based code splitting with loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">Loading...</div>
);

// Lazy load with retry logic
function lazyWithRetry(componentImport) {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem('page-has-been-force-refreshed') || 'false'
    );

    try {
      const component = await componentImport();
      window.localStorage.setItem('page-has-been-force-refreshed', 'false');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        window.localStorage.setItem('page-has-been-force-refreshed', 'true');
        return window.location.reload();
      }
      throw error;
    }
  });
}

const HeavyComponent = lazyWithRetry(() => import('./HeavyComponent'));
```

## 2. Memoization Techniques

Prevent unnecessary re-renders using React.memo, useMemo, and useCallback.

```javascript
import { memo, useMemo, useCallback, useState } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.data.length === nextProps.data.length &&
         prevProps.onUpdate === nextProps.onUpdate;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);

  // useMemo for expensive calculations
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return items.reduce((acc, item) => acc + item.name.length, 0);
  }, [items]); // Only recalculate when items change

  // useCallback for function memoization
  const handleUpdate = useCallback(() => {
    console.log('Update called');
    setItems(prev => [...prev, { 
      id: prev.length + 1, 
      name: `Item ${prev.length + 1}` 
    }]);
  }, []); // Function reference stays the same

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <p>Total characters: {expensiveValue}</p>
      <ExpensiveComponent data={items} onUpdate={handleUpdate} />
    </div>
  );
}
```

## 3. Virtual Scrolling for Large Lists

Use libraries like react-window or react-virtualized for rendering large lists.

```javascript
// npm install react-window
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  // Row renderer
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      <h3>{items[index].title}</h3>
      <p>{items[index].description}</p>
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={100}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// For variable size items
import { VariableSizeList } from 'react-window';

function VariableList({ items }) {
  const getItemSize = (index) => {
    // Calculate dynamic height based on content
    return items[index].expanded ? 200 : 50;
  };

  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].content}
    </div>
  );

  return (
    <VariableSizeList
      height={600}
      itemCount={items.length}
      itemSize={getItemSize}
      width="100%"
    >
      {Row}
    </VariableSizeList>
  );
}
```

## 4. Image Optimization

Optimize images for faster loading and better performance.

```javascript
// Lazy loading images
function LazyImage({ src, alt, placeholder }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    
    if (imageRef && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.01, rootMargin: '75px' }
      );
      observer.observe(imageRef);
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      loading="lazy"
    />
  );
}

// Responsive images with srcset
function ResponsiveImage({ src, alt }) {
  return (
    <img
      src={src}
      srcSet={`
        ${src}?w=320 320w,
        ${src}?w=640 640w,
        ${src}?w=1024 1024w
      `}
      sizes="(max-width: 320px) 280px,
             (max-width: 640px) 600px,
             1024px"
      alt={alt}
      loading="lazy"
    />
  );
}

// Using modern image formats
function ModernImage({ src, alt }) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.avif`} type="image/avif" />
      <img src={`${src}.jpg`} alt={alt} loading="lazy" />
    </picture>
  );
}
```

## 5. Bundle Size Optimization

Analyze and reduce bundle size.

```bash
# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer

# Add to package.json
{
  "scripts": {
    "analyze": "source-map-explorer 'build/static/js/*.js'"
  }
}

# Install source-map-explorer
npm install --save-dev source-map-explorer
npm run build
npm run analyze
```

```javascript
// Tree shaking - Import only what you need
// Bad
import _ from 'lodash';
_.debounce(fn, 300);

// Good
import debounce from 'lodash/debounce';
debounce(fn, 300);

// Even better - use ES modules
import { debounce } from 'lodash-es';
```

## 6. Debouncing & Throttling

Optimize event handlers for better performance.

```javascript
import { useState, useCallback, useEffect, useRef } from 'react';

// Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// Search component with debouncing
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // API call only happens after user stops typing for 500ms
      fetch(`/api/search?q=${debouncedSearchTerm}`)
        .then(res => res.json())
        .then(setResults);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Custom throttle hook
function useThrottle(callback, delay) {
  const lastRun = useRef(Date.now());

  return useCallback((...args) => {
    const now = Date.now();
    
    if (now - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = now;
    }
  }, [callback, delay]);
}

// Scroll event with throttling
function ScrollTracker() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useThrottle(() => {
    setScrollPosition(window.scrollY);
  }, 100); // Update at most every 100ms

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <div>Scroll position: {scrollPosition}px</div>;
}
```

## 7. Production Build Optimizations

```json
// package.json - Build optimizations
{
  "scripts": {
    "build": "GENERATE_SOURCEMAP=false react-scripts build",
    "build:analyze": "npm run build && source-map-explorer 'build/static/js/*.js'"
  }
}
```

```javascript
// webpack.config.js (if ejected or using custom config)
module.exports = {
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
    hints: 'warning'
  }
};
```

## 8. Preloading & Prefetching

```javascript
// Preload critical resources
function App() {
  useEffect(() => {
    // Preload critical font
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = '/fonts/main-font.woff2';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  return <div>App Content</div>;
}

// Prefetch route on hover
function NavigationLink({ to, children }) {
  const prefetchRoute = () => {
    // Dynamically import the route component
    import(`./pages${to}`);
  };

  return (
    <Link 
      to={to} 
      onMouseEnter={prefetchRoute}
      onFocus={prefetchRoute}
    >
      {children}
    </Link>
  );
}
```

## 9. Performance Monitoring

```javascript
// Using React Profiler API
import { Profiler } from 'react';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualDuration}ms`);
  console.log(`Base time: ${baseDuration}ms`);
  
  // Send to analytics
  if (actualDuration > 16) { // Longer than one frame
    analytics.track('slow-render', {
      component: id,
      duration: actualDuration
    });
  }
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
      <Profiler id="Sidebar" onRender={onRenderCallback}>
        <Sidebar />
      </Profiler>
    </Profiler>
  );
}

// Web Vitals monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  // Send metrics to analytics endpoint
  fetch('/analytics', {
    method: 'POST',
    body: JSON.stringify({ name, delta, id })
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

# Service Workers and HTTPS in React Applications

## 87. What are Service Workers and How Can They Benefit a React Application?

### What are Service Workers?

**Service workers** are JavaScript files that run in the background, separate from the main browser thread. They act as a programmable proxy between your web application and the network, intercepting network requests and enabling powerful features like offline functionality, push notifications, and background sync.

### Key Characteristics:
- Run on a separate thread (no DOM access)
- Event-driven (activate on specific events)
- HTTPS required (except localhost)
- Can't access localStorage directly
- Have a specific lifecycle (install → activate → fetch)

### Benefits for React Applications:

1. **Offline Functionality** - App works without internet
2. **Faster Load Times** - Cache assets for quick retrieval
3. **Better Performance** - Reduce server requests
4. **Progressive Web App (PWA)** - Enable app-like experience
5. **Background Sync** - Queue requests when offline
6. **Push Notifications** - Engage users even when app is closed
7. **Improved Reliability** - Handle flaky network connections

### Example Implementation:

#### 1. Basic Service Worker Registration (React)

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker
serviceWorkerRegistration.register({
  onSuccess: () => console.log('Service worker registered successfully'),
  onUpdate: (registration) => {
    console.log('New content available, please refresh');
    // Optionally show update notification to user
  }
});
```

#### 2. Service Worker Registration Helper

```javascript
// src/serviceWorkerRegistration.js
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config) {
  if ('serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content available
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Content cached for offline use
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection. App is running in offline mode.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
```

#### 3. Service Worker File with Caching Strategy

```javascript
// public/service-worker.js
const CACHE_NAME = 'my-react-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/logo192.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Return offline page if available
        return caches.match('/offline.html');
      })
  );
});
```

#### 4. React Component with Update Notification

```javascript
// src/components/UpdateNotification.jsx
import React, { useState, useEffect } from 'react';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

function UpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: (reg) => {
        setRegistration(reg);
        setShowUpdate(true);
      }
    });
  }, []);

  const handleUpdate = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  if (!showUpdate) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#4CAF50',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <p style={{ margin: '0 0 10px 0' }}>
        A new version is available!
      </p>
      <button 
        onClick={handleUpdate}
        style={{
          background: 'white',
          color: '#4CAF50',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Update Now
      </button>
    </div>
  );
}

export default UpdateNotification;
```

#### 5. Advanced Caching Strategies

```javascript
// public/service-worker-advanced.js

// Network First Strategy (for API calls)
const networkFirst = async (request) => {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
};

// Cache First Strategy (for static assets)
const cacheFirst = async (request) => {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Use network-first for API calls
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
  } 
  // Use cache-first for static assets
  else {
    event.respondWith(cacheFirst(request));
  }
});
```

---

## 88. How Do You Configure HTTPS in a React App?

### Why HTTPS is Important:

1. **Security** - Encrypts data transmission
2. **Service Workers** - Required for PWA features
3. **Browser Features** - Geolocation, camera access require HTTPS
4. **SEO** - Google ranks HTTPS sites higher
5. **Trust** - Users trust secure sites more

### Configuration Methods:

### Method 1: Development Environment (Local HTTPS)

#### Using HTTPS in Create React App

```bash
# Windows (Command Prompt)
set HTTPS=true&&npm start

# Windows (PowerShell)
($env:HTTPS = "true") -and (npm start)

# macOS/Linux
HTTPS=true npm start
```

#### Using .env File

```bash
# .env file in project root
HTTPS=true
SSL_CRT_FILE=./localhost.crt
SSL_KEY_FILE=./localhost.key
```

#### Generate Self-Signed Certificate (Development)

```bash
# Using OpenSSL
openssl req -x509 -newkey rsa:4096 -keyout localhost.key -out localhost.crt -days 365 -nodes

# Using mkcert (Recommended)
# Install mkcert
brew install mkcert  # macOS
choco install mkcert # Windows

# Create local CA
mkcert -install

# Generate certificate
mkcert localhost 127.0.0.1 ::1

# This creates:
# localhost+2.pem (certificate)
# localhost+2-key.pem (key)
```

#### Package.json Script Configuration

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "start:https": "HTTPS=true react-scripts start",
    "start:https-custom": "HTTPS=true SSL_CRT_FILE=./localhost+2.pem SSL_KEY_FILE=./localhost+2-key.pem react-scripts start",
    "build": "react-scripts build"
  }
}
```

### Method 2: Custom Webpack Dev Server Configuration

```javascript
// config/webpack.dev.js
const fs = require('fs');
const path = require('path');

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../localhost+2-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../localhost+2.pem')),
    },
    host: 'localhost',
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  // ... other webpack config
};
```

### Method 3: Vite Configuration (for Vite-based React apps)

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost+2-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost+2.pem')),
    },
    host: 'localhost',
    port: 3000,
  },
});
```

### Method 4: Production Deployment with HTTPS

#### A. Using Nginx as Reverse Proxy

```nginx
# /etc/nginx/sites-available/myapp

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Certificate (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    root /var/www/myapp/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### B. Using Apache

```apache
# /etc/apache2/sites-available/myapp.conf

<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    # Redirect to HTTPS
    Redirect permanent / https://yourdomain.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com
    
    DocumentRoot /var/www/myapp/build
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/yourdomain.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/yourdomain.com/privkey.pem
    
    # Security Headers
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    
    <Directory /var/www/myapp/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Handle React Router
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

#### C. Getting Free SSL Certificate with Let's Encrypt

```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# For Nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# For Apache
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (runs twice daily)
sudo systemctl status certbot.timer

# Test renewal
sudo certbot renew --dry-run
```

### Method 5: Platform-Specific Deployments

#### Vercel (Automatic HTTPS)

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

#### Netlify (Automatic HTTPS)

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
```

### Method 6: Docker with HTTPS

```dockerfile
# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  react-app:
    build: .
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    restart: unless-stopped
```

### Security Best Practices:

```javascript
// src/config/security.js

// 1. Force HTTPS Redirect (in App.js)
useEffect(() => {
  if (window.location.protocol !== 'https:' && 
      window.location.hostname !== 'localhost') {
    window.location.href = 
      'https:' + window.location.href.substring(window.location.protocol.length);
  }
}, []);

// 2. Secure API Calls
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.yourdomain.com';

export const fetchSecure = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    credentials: 'include', // Include cookies
    ...options,
  };
  
  try {
    const response = await fetch(url, defaultOptions);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
```

These examples provide comprehensive coverage of service workers and HTTPS configuration for React applications, from development to production deployment.
## Accessibility in React

# Accessibility in React Applications

## 89. Why is Accessibility Important in Web Development?

### Definition

**Accessibility (a11y)** refers to designing and developing websites and applications that can be used by everyone, including people with disabilities. The "a11y" numeronym represents "a" + 11 letters + "y".

### Key Reasons Why Accessibility is Important:

### 1. **Inclusive Design - Reaching Everyone**
- **1 billion people** worldwide have some form of disability
- 15% of the global population experiences some form of disability
- Temporary disabilities (broken arm, eye surgery)
- Situational limitations (bright sunlight, noisy environment)

### 2. **Legal Compliance**
- **ADA (Americans with Disabilities Act)** - US law
- **Section 508** - US federal agencies requirement
- **WCAG (Web Content Accessibility Guidelines)** - International standard
- **European Accessibility Act** - EU legislation
- Lawsuits and legal penalties for non-compliance

### 3. **Business Benefits**
- **Larger audience** - Don't exclude potential users/customers
- **Better SEO** - Accessible sites rank better
- **Improved usability** - Benefits all users
- **Brand reputation** - Shows social responsibility

### 4. **Technical Advantages**
- **Better code quality** - Semantic HTML improves maintainability
- **Enhanced SEO** - Screen readers and search engines work similarly
- **Mobile-friendly** - Accessibility features help mobile users
- **Future-proof** - Easier to adapt to new devices

### 5. **Ethical Responsibility**
- Equal access to information
- Digital rights are human rights
- Social inclusion and equality

### Types of Disabilities to Consider:

```javascript
// Visual Impairments
const visualDisabilities = {
  blindness: 'Screen readers, braille displays',
  lowVision: 'Screen magnifiers, high contrast',
  colorBlindness: 'Color contrast, not relying on color alone',
  lightSensitivity: 'Dark mode, reduced motion'
};

// Auditory Impairments
const auditoryDisabilities = {
  deafness: 'Captions, transcripts',
  hardOfHearing: 'Volume controls, visual indicators'
};

// Motor Disabilities
const motorDisabilities = {
  limitedDexterity: 'Keyboard navigation, large click targets',
  tremors: 'Larger buttons, undo functionality',
  paralysis: 'Voice controls, switch access'
};

// Cognitive Disabilities
const cognitiveDisabilities = {
  dyslexia: 'Clear fonts, good spacing',
  adhd: 'Minimal distractions, clear focus',
  autism: 'Consistent patterns, clear instructions',
  memoryImpairments: 'Simple navigation, save progress'
};
```

---

## 90. How Can You Make a React Application Accessible?

### Core Accessibility Principles (POUR):

- **P**erceivable - Users can perceive the information
- **O**perable - Users can operate the interface
- **U**nderstandable - Users can understand the content
- **R**obust - Content works across different technologies

### 1. Semantic HTML

```javascript
// ❌ Bad - Non-semantic
function BadExample() {
  return (
    <div onClick={handleClick}>Click me</div>
  );
}

// ✅ Good - Semantic HTML
function GoodExample() {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}

// ✅ Semantic Structure
function SemanticLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <article>
          <h1>Main Heading</h1>
          <section>
            <h2>Section Heading</h2>
            <p>Content here...</p>
          </section>
        </article>
        
        <aside>
          <h2>Related Content</h2>
        </aside>
      </main>
      
      <footer>
        <p>&copy; 2025 Company Name</p>
      </footer>
    </>
  );
}
```

### 2. Keyboard Navigation

```javascript
import React, { useState, useRef, useEffect } from 'react';

// Accessible Dropdown Menu
function AccessibleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  
  const menuItems = ['Profile', 'Settings', 'Logout'];

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      const items = menuRef.current?.querySelectorAll('[role="menuitem"]');
      items?.[focusedIndex]?.focus();
    }
  }, [focusedIndex, isOpen]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => 
            prev < menuItems.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => 
            prev > 0 ? prev - 1 : menuItems.length - 1
          );
        }
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(menuItems.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        Menu
      </button>
      
      {isOpen && (
        <ul
          ref={menuRef}
          id="dropdown-menu"
          role="menu"
          style={{
            position: 'absolute',
            background: 'white',
            border: '1px solid #ccc',
            listStyle: 'none',
            padding: '0.5rem 0'
          }}
        >
          {menuItems.map((item, index) => (
            <li key={item} role="none">
              <button
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
                onClick={() => {
                  console.log(`${item} clicked`);
                  setIsOpen(false);
                  buttonRef.current?.focus();
                }}
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem',
                  border: 'none',
                  background: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Skip to Main Content Link
function SkipLink() {
  return (
    
      href="#main-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        zIndex: 999,
        padding: '1rem',
        background: '#000',
        color: '#fff',
        textDecoration: 'none'
      }}
      onFocus={(e) => {
        e.target.style.left = '0';
      }}
      onBlur={(e) => {
        e.target.style.left = '-9999px';
      }}
    >
      Skip to main content
    </a>
  );
}
```

### 3. Focus Management

```javascript
import React, { useRef, useEffect } from 'react';

// Modal with Focus Trap
function AccessibleModal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Save current focus
      previousFocusRef.current = document.activeElement;
      
      // Focus first element in modal
      closeButtonRef.current?.focus();
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore previous focus
      previousFocusRef.current?.focus();
      
      // Restore body scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }

    if (e.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 id="modal-title">{title}</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close modal"
            style={{
              border: 'none',
              background: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
```

### 4. Form Accessibility

```javascript
import React, { useState } from 'react';

function AccessibleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    subscribe: false
  });
  
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Text Input with Label */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">
          Name <span aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.25rem',
            border: errors.name ? '2px solid red' : '1px solid #ccc'
          }}
        />
        {errors.name && (
          <span
            id="name-error"
            role="alert"
            style={{ color: 'red', fontSize: '0.875rem' }}
          >
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">
          Email <span aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error email-hint' : 'email-hint'}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.25rem',
            border: errors.email ? '2px solid red' : '1px solid #ccc'
          }}
        />
        <span id="email-hint" style={{ fontSize: '0.875rem', color: '#666' }}>
          We'll never share your email
        </span>
        {errors.email && (
          <span
            id="email-error"
            role="alert"
            style={{ color: 'red', fontSize: '0.875rem', display: 'block' }}
          >
            {errors.email}
          </span>
        )}
      </div>

      {/* Password Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password">
          Password <span aria-label="required">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          aria-required="true"
          aria-invalid={!!errors.password}
          aria-describedby="password-requirements"
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            marginTop: '0.25rem',
            border: errors.password ? '2px solid red' : '1px solid #ccc'
          }}
        />
        <span id="password-requirements" style={{ fontSize: '0.875rem', color: '#666' }}>
          Must be at least 8 characters
        </span>
      </div>

      {/* Checkbox */}
      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={formData.subscribe}
            onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
            aria-describedby="subscribe-description"
          />
          {' '}Subscribe to newsletter
        </label>
        <span id="subscribe-description" style={{ display: 'block', fontSize: '0.875rem', color: '#666' }}>
          Get weekly updates about new features
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Submit
      </button>
    </form>
  );
}
```

### 5. Images and Alt Text

```javascript
function AccessibleImages() {
  return (
    <div>
      {/* Informative image */}
      <img
        src="/chart.png"
        alt="Bar chart showing 50% increase in sales from Q1 to Q2"
      />

      {/* Decorative image */}
      <img
        src="/decoration.png"
        alt=""
        role="presentation"
      />

      {/* Linked image */}
      <a href="/profile">
        <img
          src="/avatar.jpg"
          alt="John Doe's profile"
        />
      </a>

      {/* Complex image with description */}
      <figure>
        <img
          src="/complex-diagram.png"
          alt="System architecture diagram"
          aria-describedby="diagram-description"
        />
        <figcaption id="diagram-description">
          The diagram shows three main components: the frontend React application,
          the Node.js backend API, and the PostgreSQL database. Arrows indicate
          data flow between components.
        </figcaption>
      </figure>

      {/* Background image with text alternative */}
      <div
        style={{
          backgroundImage: 'url(/hero.jpg)',
          height: '400px'
        }}
        role="img"
        aria-label="Mountain landscape at sunset"
      >
        <h1>Welcome to Our Site</h1>
      </div>
    </div>
  );
}
```

### 6. Color Contrast and Visual Design

```javascript
import React, { useState } from 'react';

function AccessibleButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        // Minimum 4.5:1 contrast ratio for normal text
        background: isHovered ? '#0056b3' : '#007bff',
        color: '#ffffff',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        // Visible focus indicator
        outline: isFocused ? '3px solid #ff0' : 'none',
        outlineOffset: '2px',
        // Minimum touch target size 44x44px (WCAG 2.1)
        minWidth: '44px',
        minHeight: '44px'
      }}
    >
      Click Me
    </button>
  );
}

// Status indicators without relying only on color
function StatusIndicator({ status, message }) {
  const statusConfig = {
    success: { icon: '✓', color: '#28a745', label: 'Success' },
    error: { icon: '✗', color: '#dc3545', label: 'Error' },
    warning: { icon: '⚠', color: '#ffc107', label: 'Warning' },
    info: { icon: 'ℹ', color: '#17a2b8', label: 'Information' }
  };

  const config = statusConfig[status];

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        padding: '1rem',
        background: `${config.color}20`,
        border: `2px solid ${config.color}`,
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      <span aria-label={config.label} style={{ fontSize: '1.5rem' }}>
        {config.icon}
      </span>
      <span>{message}</span>
    </div>
  );
}
```

### 7. Live Regions for Dynamic Content

```javascript
import React, { useState } from 'react';

function LiveRegionExample() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const announceMessage = (msg) => {
    setMessage(msg);
    // Clear message after announcement
    setTimeout(() => setMessage(''), 100);
  };

  return (
    <div>
      {/* Polite live region - waits for current speech to finish */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        {message}
      </div>

      {/* Assertive live region - interrupts current speech */}
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ 
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        {count > 10 && 'Warning: Count exceeds 10!'}
      </div>

      <button
        onClick={() => {
          setCount(count + 1);
          announceMessage(`Count increased to ${count + 1}`);
        }}
      >
        Increment: {count}
      </button>

      <button
        onClick={() => {
          announceMessage('Item added to cart successfully');
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
```

### 8. Accessible Data Tables

```javascript
function AccessibleTable() {
  const data = [
    { name: 'John Doe', role: 'Developer', department: 'Engineering' },
    { name: 'Jane Smith', role: 'Designer', department: 'Design' },
    { name: 'Bob Johnson', role: 'Manager', department: 'Operations' }
  ];

  return (
    <table>
      <caption>Employee Directory</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee, index) => (
          <tr key={index}>
            <th scope="row">{employee.name}</th>
            <td>{employee.role}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### 9. Reduced Motion

```javascript
import React, { useEffect, useState } from 'react';

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

function AnimatedComponent() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: prefersReducedMotion 
          ? 'none' 
          : 'all 0.3s ease-in-out'
      }}
    >
      Content here
    </div>
  );
}
```

---

## 91. What is ARIA and How is it Used in React?

### What is ARIA?

**ARIA (Accessible Rich Internet Applications)** is a set of attributes that define ways to make web content and applications more accessible to people with disabilities. It's maintained by the W3C.

### ARIA Purpose:

- Bridge gaps where HTML semantics fall short
- Provide additional context for assistive technologies
- Make dynamic content and complex UI components accessible
- **Should NOT replace semantic HTML**

### ARIA Principles:

1. **First Rule of ARIA**: Don't use ARIA if you can use semantic HTML
2. **Don't change native semantics** unless absolutely necessary
3. **All interactive elements must be keyboard accessible**
4. **Don't use `role="presentation"` or `aria-hidden="true"` on focusable elements**
5. **All interactive elements must have an accessible name**

### ARIA Attributes Categories:

```javascript
// 1. Roles - Define what an element is
const roles = {
  landmark: ['banner', 'navigation', 'main', 'complementary', 'contentinfo'],
  widget: ['button', 'checkbox', 'tab', 'tabpanel', 'dialog', 'menu'],
  document: ['article', 'document', 'feed', 'list', 'listitem']
};

// 2. States - Define current state of an element
const states = {
  'aria-checked': 'true | false | mixed',
  'aria-disabled': 'true | false',
  'aria-expanded': 'true | false',
  'aria-hidden': 'true | false',
  'aria-invalid': 'true | false',
  'aria-pressed': 'true | false | mixed',
  'aria-selected': 'true | false'
};

// 3. Properties - Define characteristics
const properties = {
  'aria-label': 'string',
  'aria-labelledby': 'id reference',
  'aria-describedby': 'id reference',
  'aria-controls': 'id reference',
  'aria-live': 'off | polite | assertive',
  'aria-required': 'true | false',
  'aria-haspopup': 'true | false | menu | dialog'
};
```

### ARIA in React Examples:

### 1. Custom Button with ARIA

```javascript
function CustomButton({ onClick, isPressed, disabled, children }) {
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={isPressed}
      aria-disabled={disabled}
      style={{
        padding: '0.5rem 1rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        background: isPressed ? '#0056b3' : '#007bff',
        color: 'white',
        borderRadius: '4px'
      }}
    >
      {children}
    </div>
  );
}

// Usage
function App() {
  const [isPressed, setIsPressed] = useState(false);
  
  return (
    <CustomButton
      onClick={() => setIsPressed(!isPressed)}
      isPressed={isPressed}
    >
      Toggle Button
    </CustomButton>
  );
}
```

### 2. Accessible Tabs Component

```javascript
import React, { useState } from 'react';

function AccessibleTabs() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 'tab-1', label: 'Profile', content: 'Profile content here' },
    { id: 'tab-2', label: 'Settings', content: 'Settings content here' },
    { id: 'tab-3', label: 'Messages', content: 'Messages content here' }
  ];

  const handleKeyDown = (e, index) => {
    let newIndex = index;
    
    switch (e.key) {
      case 'ArrowLeft':
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    
    e.preventDefault();
    setActiveTab(newIndex);
    document.getElementById(tabs[newIndex].id)?.focus();
  };

  return (
    <div>
      {/* Tab List */}
      <div role="tablist" aria-label="Account tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              borderBottom: activeTab === index ? '2px solid #007bff' : '2px solid transparent',
              background: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === index ? 'bold' : 'normal'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {tabs.map((tab, index) => (
        <div
          key={`panel-${tab.id}`}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={tab.id}
          hidden={activeTab !== index}
          tabIndex={0}
          style={{
            padding: '1rem',
            border: '1px solid #ccc',
            borderTop: 'none'
          }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

### 3. Accessible Accordion

```javascript
import React, { useState } from 'react';

function AccordionItem({ id, title, children, isOpen, onToggle }) {
  const headingId = `accordion-heading-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '0.5rem' }}>
      <h3>
        <button
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          style={{
            width: '100%',
            padding: '1rem',
            border: 'none',
            background: isOpen ? '#f0f0f0' : 'white',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {title}
          <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </h3>
      
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
        style={{
          padding: isOpen ? '1rem' : '0',
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease'
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Accordion() {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const items = [
    { title: 'What is React?', content: 'React is a JavaScript library for building user interfaces.' },
    { title: 'What is ARIA?', content: 'ARIA stands for Accessible Rich Internet Applications.' },
    { title: 'Why accessibility?', content: 'Accessibility ensures everyone can use your application.' }
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
```

### 4. Accessible Alert/Notification

```javascript
import React, { useState, useEffect } from 'react';

function Alert({ type = 'info', message, onClose, autoClose = true }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!isVisible) return null;

  const types = {
    success: { icon: '✓', bg: '#d4edda', border: '#c3e6cb', color: '#155724' },
    error: { icon: '✗', bg: '#f8d7da', border: '#f5c6cb', color: '#721c24' },
    warning: { icon: '⚠', bg: '#fff3cd', border: '#ffeaa7', color: '#856404' },
    info: { icon: 'ℹ', bg: '#d1ecf1', border: '#bee5eb', color: '#0c5460' }
  };

  const config = types[type];

  return (
    <div
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        marginBottom: '1rem',
        background: config.bg,
        border: `1px solid ${config.border}`,
        color: config.color,
        borderRadius: '4px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span aria-hidden="true" style={{ fontSize: '1.25rem' }}>
          {config.icon}
        </span>
        <span>{message}</span>
      </div>
      
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        aria-label="Close alert"
        style={{
          background: 'none',
          border: 'none',
          color: config.color,
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0',
          lineHeight: '1'
        }}
      >
        ×
      </button>
    </div>
  );
}

// Usage
function AlertExample() {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (type, message) => {
    const id = Date.now();
    setAlerts([...alerts, { id, type, message }]);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => addAlert('success', 'Operation completed successfully!')}>
          Success Alert
        </button>
        <button onClick={() => addAlert('error', 'An error occurred!')}>
          Error Alert
        </button>
      </div>

      <div aria-label="Notifications" role="region">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={() => setAlerts(alerts.filter((a) => a.id !== alert.id))}
          />
        ))}
      </div>
    </div>
  );
}
```

### 5. Accessible Tooltip

```javascript
import React, { useState, useRef, useEffect } from 'react';

function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [describedById] = useState(`tooltip-${Math.random().toString(36).substr(2, 9)}`);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible]);

  const positions = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' }
  };

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-describedby={isVisible ? describedById : undefined}
        tabIndex={0}
      >
        {children}
      </span>

      {isVisible && (
        <span
          ref={tooltipRef}
          id={describedById}
          role="tooltip"
          style={{
            position: 'absolute',
            ...positions[position],
            background: '#333',
            color: '#fff',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          {content}
        </span>
      )}
    </span>
  );
}

// Usage
function TooltipExample() {
  return (
    <div style={{ padding: '2rem' }}>
      <p>
        Hover or focus on{' '}
        <Tooltip content="This is helpful information">
          <span style={{ textDecoration: 'underline', cursor: 'help' }}>
            this text
          </span>
        </Tooltip>
        {' '}to see the tooltip.
      </p>
    </div>
  );
}
```

### 6. Accessible Loading States

```javascript
import React, { useState } from 'react';

function LoadingButton({ onClick, children, isLoading }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      aria-busy={isLoading}
      aria-live="polite"
      style={{
        padding: '0.75rem 1.5rem',
        background: isLoading ? '#ccc' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      {isLoading && (
        <span
          role="status"
          aria-label="Loading"
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid #fff',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }}
        />
      )}
      <span>{isLoading ? 'Loading...' : children}</span>
    </button>
  );
}

// Skeleton Loading Screen
function SkeletonLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading content"
    >
      <div style={{
        width: '100%',
        height: '20px',
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        borderRadius: '4px',
        marginBottom: '0.5rem'
      }} />
      <div style={{
        width: '80%',
        height: '20px',
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        borderRadius: '4px'
      }} />
      
      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
}

// Progress Bar
function ProgressBar({ progress, label }) {
  return (
    <div>
      <label htmlFor="progress-bar" id="progress-label">
        {label}
      </label>
      <div
        style={{
          width: '100%',
          height: '20px',
          background: '#e0e0e0',
          borderRadius: '10px',
          overflow: 'hidden',
          marginTop: '0.5rem'
        }}
      >
        <div
          id="progress-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-labelledby="progress-label"
          style={{
            width: `${progress}%`,
            height: '100%',
            background: '#007bff',
            transition: 'width 0.3s ease'
          }}
        />
      </div>
      <span aria-live="polite" style={{ fontSize: '0.875rem', color: '#666' }}>
        {progress}% complete
      </span>
    </div>
  );
}
```

### 7. Accessible Combobox (Autocomplete)

```javascript
import React, { useState, useRef, useEffect } from 'react';

function Combobox({ options, label, placeholder }) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && focusedIndex >= 0) {
      const option = listRef.current?.querySelector(`[data-index="${focusedIndex}"]`);
      option?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        setFocusedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case 'Enter':
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          e.preventDefault();
          selectOption(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      default:
        break;
    }
  };

  const selectOption = (option) => {
    setInputValue(option);
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <label id="combobox-label" htmlFor="combobox-input">
        {label}
      </label>
      
      <input
        ref={inputRef}
        id="combobox-input"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls="combobox-listbox"
        aria-labelledby="combobox-label"
        aria-activedescendant={
          focusedIndex >= 0 ? `option-${focusedIndex}` : undefined
        }
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsOpen(true);
          setFocusedIndex(-1);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginTop: '0.25rem',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul
          ref={listRef}
          id="combobox-listbox"
          role="listbox"
          aria-labelledby="combobox-label"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            maxHeight: '200px',
            overflowY: 'auto',
            margin: '0.25rem 0 0 0',
            padding: 0,
            listStyle: 'none',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 1000
          }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={option}
              id={`option-${index}`}
              data-index={index}
              role="option"
              aria-selected={focusedIndex === index}
              onClick={() => selectOption(option)}
              onMouseEnter={() => setFocusedIndex(index)}
              style={{
                padding: '0.5rem',
                cursor: 'pointer',
                background: focusedIndex === index ? '#e0e0e0' : 'white'
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {isOpen && filteredOptions.length === 0 && inputValue && (
        <div
          role="status"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            padding: '0.5rem',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginTop: '0.25rem'
          }}
        >
          No results found
        </div>
      )}
    </div>
  );
}

// Usage
function ComboboxExample() {
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia',
    'Germany', 'France', 'Spain', 'Italy', 'Japan', 'China'
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <Combobox
        options={countries}
        label="Select a country"
        placeholder="Start typing..."
      />
    </div>
  );
}
```

### 8. Accessible Breadcrumbs

```javascript
function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}
      >
        {items.map((item, index) => (
          <li
            key={item.label}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {index < items.length - 1 ? (
              <>
                <a href={item.href} style={{ color: '#007bff', textDecoration: 'none' }}>
                  {item.label}
                </a>
                <span
                  aria-hidden="true"
                  style={{ margin: '0 0.5rem', color: '#666' }}
                >
                  /
                </span>
              </>
            ) : (
              <span aria-current="page" style={{ color: '#666' }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Usage
function BreadcrumbExample() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptop' }
  ];

  return <Breadcrumbs items={breadcrumbItems} />;
}
```

### 9. Screen Reader Only Text (Utility)

```css
/* Add to your CSS */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

```javascript
// React component for screen reader only content
function ScreenReaderOnly({ children, focusable = false }) {
  return (
    <span className={focusable ? 'sr-only sr-only-focusable' : 'sr-only'}>
      {children}
    </span>
  );
}

// Usage
function IconButton() {
  return (
    <button>
      <span aria-hidden="true">🗑️</span>
      <ScreenReaderOnly>Delete item</ScreenReaderOnly>
    </button>
  );
}
```

### 10. Testing Accessibility in React

```javascript
// Example with React Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('button is accessible', async () => {
  const { container } = render(
    <button aria-label="Close dialog">X</button>
  );

  // Check for accessibility violations
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  // Test keyboard interaction
  const button = screen.getByRole('button', { name: /close dialog/i });
  expect(button).toBeInTheDocument();
  
  await userEvent.tab();
  expect(button).toHaveFocus();
  
  await userEvent.keyboard('{Enter}');
  // Assert expected behavior
});

test('form has proper labels', () => {
  render(
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </form>
  );

  const input = screen.getByLabelText(/email/i);
  expect(input).toBeInTheDocument();
});
```

### Best Practices Summary:

1. **Use semantic HTML first** - Don't use ARIA if HTML can do it
2. **Provide text alternatives** - Alt text, labels, descriptions
3. **Ensure keyboard accessibility** - All interactive elements must be keyboard accessible
4. **Maintain focus management** - Visible focus indicators, logical tab order
5. **Use sufficient color contrast** - Minimum 4.5:1 for normal text
6. **Support screen readers** - ARIA labels, live regions, proper roles
7. **Test with real users** - Include people with disabilities in testing
8. **Use automated tools** - Lighthouse, axe, WAVE, ESLint plugins
9. **Make content understandable** - Clear language, consistent navigation
10. **Provide alternatives** - Captions for videos, transcripts for audio

These comprehensive examples demonstrate how to implement accessibility features in React applications using ARIA attributes effectively while following best practices!
---

# 92. What is Internationalization (i18n) in React?

**Internationalization (i18n)** is the process of designing and preparing your React application to support multiple languages and regions without requiring engineering changes. The term "i18n" comes from the 18 letters between "i" and "n" in "internationalization."

## Key Concepts:

- **Separating text content** from your code
- **Supporting multiple locales** (languages, date formats, number formats, currencies)
- **Dynamic content loading** based on user preferences
- **Right-to-left (RTL) language support**

## Why i18n Matters:

- Reach global audiences
- Better user experience for non-English speakers
- Compliance with regional requirements
- Increased market penetration

---

# 93. How to Implement Localization (l10n) in React

**Localization (l10n)** is the actual process of adapting your internationalized app for a specific region or language. Here are practical examples using popular libraries:

## Example 1: Using react-i18next (Most Popular)

```javascript
// 1. Install dependencies
// npm install i18next react-i18next i18next-browser-languagedetector

// 2. Create translation files
// locales/en/translation.json
{
  "welcome": "Welcome to React",
  "greeting": "Hello, {{name}}!",
  "itemCount": "You have {{count}} item",
  "itemCount_plural": "You have {{count}} items",
  "description": "This is an internationalized app"
}

// locales/es/translation.json
{
  "welcome": "Bienvenido a React",
  "greeting": "¡Hola, {{name}}!",
  "itemCount": "Tienes {{count}} artículo",
  "itemCount_plural": "Tienes {{count}} artículos",
  "description": "Esta es una aplicación internacionalizada"
}

// locales/fr/translation.json
{
  "welcome": "Bienvenue à React",
  "greeting": "Bonjour, {{name}}!",
  "itemCount": "Vous avez {{count}} article",
  "itemCount_plural": "Vous avez {{count}} articles",
  "description": "Ceci est une application internationalisée"
}
```

```javascript
// 3. Configure i18n (i18n.js)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      fr: { translation: frTranslation }
    },
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already escapes
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
```

```javascript
// 4. Wrap your app with I18nextProvider (App.js)
import React from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <span style={{ marginLeft: '10px' }}>
        Current: {i18n.language}
      </span>
    </div>
  );
}

function App() {
  const { t } = useTranslation();
  const [count, setCount] = React.useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <LanguageSwitcher />
      
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'John' })}</p>
      <p>{t('description')}</p>
      
      {/* Pluralization */}
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: '0 10px' }}>
          {t('itemCount', { count })}
        </span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
```

## Example 2: Using react-intl (by FormatJS)

```javascript
// 1. Install
// npm install react-intl

// 2. Create message files
// messages/en.json
{
  "app.welcome": "Welcome to React",
  "app.greeting": "Hello, {name}!",
  "app.price": "Price: {price, number, USD}",
  "app.date": "Today is {date, date, long}"
}

// messages/es.json
{
  "app.welcome": "Bienvenido a React",
  "app.greeting": "¡Hola, {name}!",
  "app.price": "Precio: {price, number, USD}",
  "app.date": "Hoy es {date, date, long}"
}
```

```javascript
// 3. Setup IntlProvider
import React, { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedNumber, FormattedDate } from 'react-intl';
import enMessages from './messages/en.json';
import esMessages from './messages/es.json';

const messages = {
  en: enMessages,
  es: esMessages
};

function App() {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div style={{ padding: '20px' }}>
        {/* Language Switcher */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setLocale('en')}>English</button>
          <button onClick={() => setLocale('es')}>Español</button>
        </div>

        {/* Translated Messages */}
        <h1>
          <FormattedMessage id="app.welcome" />
        </h1>
        
        <p>
          <FormattedMessage 
            id="app.greeting" 
            values={{ name: 'Maria' }} 
          />
        </p>

        {/* Formatted Numbers */}
        <p>
          <FormattedMessage
            id="app.price"
            values={{
              price: 1234.56
            }}
          />
        </p>

        {/* Formatted Dates */}
        <p>
          <FormattedMessage
            id="app.date"
            values={{
              date: new Date()
            }}
          />
        </p>

        {/* Direct formatting */}
        <p>
          <FormattedNumber value={9999.99} style="currency" currency="USD" />
        </p>
        
        <p>
          <FormattedDate value={new Date()} year="numeric" month="long" day="numeric" />
        </p>
      </div>
    </IntlProvider>
  );
}

export default App;
```

## Example 3: Manual Implementation (Simple Cases)

```javascript
// translations.js
export const translations = {
  en: {
    welcome: 'Welcome',
    logout: 'Logout',
    settings: 'Settings'
  },
  es: {
    welcome: 'Bienvenido',
    logout: 'Cerrar sesión',
    settings: 'Configuración'
  },
  fr: {
    welcome: 'Bienvenue',
    logout: 'Déconnexion',
    settings: 'Paramètres'
  }
};

// LanguageContext.js
import React, { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// App.js
import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';

function Content() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div style={{ padding: '20px' }}>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>

      <h1>{t('welcome')}</h1>
      <button>{t('logout')}</button>
      <button>{t('settings')}</button>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}

export default App;
```

## Best Practices for i18n/l10n:

1. **Extract all strings** - Never hardcode user-facing text
2. **Use namespaces** - Organize translations by feature/page
3. **Handle pluralization** - Different languages have different plural rules
4. **Format dates/numbers** - Use locale-specific formatting
5. **Support RTL languages** - Arabic, Hebrew need right-to-left layout
6. **Lazy load translations** - Don't bundle all languages at once
7. **Provide context** - Add comments for translators
8. **Test with pseudo-localization** - Find hardcoded strings
9. **Use professional translators** - Machine translation isn't enough
10. **Handle missing translations** - Always have fallback values

These examples show different approaches from using full-featured libraries to simple manual implementations, depending on your project's needs!

## React Code Structure & Best Practices

# 94. How Do You Structure Large React Applications?

Structuring large React applications is crucial for maintainability, scalability, and team collaboration. Here are proven approaches with examples:

## 1. Feature-Based Structure (Recommended for Large Apps)

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   └── PasswordReset.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useLogin.js
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── store/
│   │   │   ├── authSlice.js
│   │   │   └── authSelectors.js
│   │   ├── utils/
│   │   │   └── validation.js
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.js
│   │
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── index.js
│   │
│   ├── products/
│   │   ├── components/
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductDetails.jsx
│   │   ├── hooks/
│   │   │   └── useProducts.js
│   │   ├── services/
│   │   │   └── productService.js
│   │   └── index.js
│   │
│   └── cart/
│       ├── components/
│       ├── hooks/
│       └── index.js
│
├── shared/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.test.jsx
│   │   │   └── Button.module.css
│   │   ├── Modal/
│   │   ├── Input/
│   │   └── Layout/
│   │
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   ├── useLocalStorage.js
│   │   └── useMediaQuery.js
│   │
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── constants.js
│   │
│   └── types/
│       └── common.types.ts
│
├── core/
│   ├── api/
│   │   ├── axios.config.js
│   │   ├── apiClient.js
│   │   └── endpoints.js
│   │
│   ├── store/
│   │   ├── store.js
│   │   └── rootReducer.js
│   │
│   ├── router/
│   │   ├── AppRouter.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── routes.js
│   │
│   └── theme/
│       ├── theme.js
│       └── globalStyles.js
│
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
│
├── config/
│   ├── env.js
│   └── app.config.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## 2. Atomic Design Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Label/
│   │   └── Icon/
│   │
│   ├── molecules/       # Simple component groups
│   │   ├── FormField/
│   │   ├── SearchBar/
│   │   └── Card/
│   │
│   ├── organisms/       # Complex components
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── ProductGrid/
│   │   └── CheckoutForm/
│   │
│   ├── templates/       # Page layouts
│   │   ├── MainLayout/
│   │   ├── AuthLayout/
│   │   └── DashboardLayout/
│   │
│   └── pages/          # Complete pages
│       ├── HomePage/
│       ├── ProductPage/
│       └── CheckoutPage/
```

## 3. Practical Example: E-commerce App Structure

```javascript
// features/products/index.js - Feature entry point
export { default as ProductList } from './components/ProductList';
export { default as ProductDetails } from './components/ProductDetails';
export { useProducts } from './hooks/useProducts';
export { productService } from './services/productService';

// features/products/hooks/useProducts.js
import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export function useProducts(filters = {}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await productService.getAll(filters);
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [JSON.stringify(filters)]);

  return { products, loading, error };
}

// features/products/services/productService.js
import { apiClient } from '@/core/api/apiClient';

export const productService = {
  async getAll(filters) {
    const response = await apiClient.get('/products', { params: filters });
    return response.data;
  },

  async getById(id) {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  },

  async create(productData) {
    const response = await apiClient.post('/products', productData);
    return response.data;
  },

  async update(id, productData) {
    const response = await apiClient.put(`/products/${id}`, productData);
    return response.data;
  },

  async delete(id) {
    await apiClient.delete(`/products/${id}`);
  }
};

// features/products/components/ProductList.jsx
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { Loader, ErrorMessage } from '@/shared/components';

export default function ProductList({ filters }) {
  const { products, loading, error } = useProducts(filters);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// core/api/apiClient.js
import axios from 'axios';
import { getAuthToken } from '@/features/auth/utils/storage';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export { apiClient };

// core/router/AppRouter.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from '@/shared/components';

// Lazy load pages
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
const ProductsPage = lazy(() => import('@/features/products/pages/ProductsPage'));
const DashboardPage = lazy(() => import('@/features/dashboard/pages/DashboardPage'));
const LoginPage = lazy(() => import('@/features/auth/pages/LoginPage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// shared/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  ...props 
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func
};
```

## 4. Key Principles

### Separation of Concerns
```javascript
// ❌ Bad: Everything in one file
function ProductPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return <div>{/* render products */}</div>;
}

// ✅ Good: Separated concerns
function ProductPage() {
  const { products, loading } = useProducts(); // Custom hook
  return <ProductList products={products} loading={loading} />;
}
```

### Barrel Exports
```javascript
// features/auth/index.js
export { LoginForm } from './components/LoginForm';
export { RegisterForm } from './components/RegisterForm';
export { useAuth } from './hooks/useAuth';
export { authService } from './services/authService';

// Usage in other files
import { LoginForm, useAuth } from '@/features/auth';
```

---

# 95. Best Practices When Writing React Code

## 1. Component Design

### Keep Components Small and Focused
```javascript
// ❌ Bad: God component doing everything
function UserDashboard() {
  // 500 lines of code handling user profile, settings, orders, etc.
}

// ✅ Good: Split into focused components
function UserDashboard() {
  return (
    <div>
      <UserProfile />
      <UserSettings />
      <UserOrders />
    </div>
  );
}
```

### Use Composition Over Props
```javascript
// ❌ Bad: Too many conditional props
function Card({ title, showHeader, showFooter, headerColor }) {
  return (
    <div>
      {showHeader && <header style={{ color: headerColor }}>{title}</header>}
      {/* content */}
      {showFooter && <footer>Footer</footer>}
    </div>
  );
}

// ✅ Good: Composition pattern
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Card.Header({ children, color }) {
  return <header style={{ color }}>{children}</header>;
}

function Card.Body({ children }) {
  return <div className="card-body">{children}</div>;
}

function Card.Footer({ children }) {
  return <footer className="card-footer">{children}</footer>;
}

// Usage
<Card>
  <Card.Header color="blue">Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

## 2. State Management

### Lift State Up Appropriately
```javascript
// ❌ Bad: State too high up
function App() {
  const [modalOpen, setModalOpen] = useState(false); // Only used in Settings
  return (
    <div>
      <Header />
      <Settings modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

// ✅ Good: State at the right level
function Settings() {
  const [modalOpen, setModalOpen] = useState(false);
  // Use it locally
}
```

### Use the Right State Management Tool
```javascript
// For local state
const [count, setCount] = useState(0);

// For complex local state
const [state, dispatch] = useReducer(reducer, initialState);

// For global state (Context)
const { user, setUser } = useContext(AuthContext);

// For server state (React Query/SWR)
const { data, isLoading } = useQuery('products', fetchProducts);

// For complex global state (Redux/Zustand)
const products = useSelector(state => state.products);
```

## 3. Performance Optimization

### Memoization
```javascript
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
const ProductCard = memo(function ProductCard({ product }) {
  return <div>{product.name}</div>;
});

// Memoize expensive computations
function ProductList({ products }) {
  const sortedProducts = useMemo(() => {
    return products.sort((a, b) => b.price - a.price);
  }, [products]);

  // Memoize callbacks passed to children
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);

  return (
    <div>
      {sortedProducts.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
```

### Code Splitting & Lazy Loading
```javascript
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));
const AdminPanel = lazy(() => import('./AdminPanel'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyChart />
    </Suspense>
  );
}
```

## 4. Error Handling

### Error Boundaries
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### Async Error Handling
```javascript
function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/user');
        
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <div>No user found</div>;

  return <div>{user.name}</div>;
}
```

## 5. Code Organization

### Custom Hooks for Reusable Logic
```javascript
// hooks/useFormInput.js
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset
  };
}

// Usage
function LoginForm() {
  const email = useFormInput('');
  const password = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value, password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" {...email} />
      <input type="password" {...password} />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Prop Types / TypeScript
```javascript
// With PropTypes
import PropTypes from 'prop-types';

function UserCard({ user, onEdit, onDelete }) {
  return <div>{user.name}</div>;
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

UserCard.defaultProps = {
  onEdit: () => {},
  onDelete: () => {}
};

// With TypeScript
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onEdit?: () => void;
  onDelete?: () => void;
}

function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return <div>{user.name}</div>;
}
```

## 6. Naming Conventions

```javascript
// ✅ Good naming
// Components: PascalCase
function UserProfile() {}

// Hooks: camelCase with 'use' prefix
function useAuth() {}

// Event handlers: handle prefix
const handleClick = () => {};
const handleSubmit = () => {};

// Boolean props/state: is/has prefix
const [isLoading, setIsLoading] = useState(false);
const [hasError, setHasError] = useState(false);

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 100;
const API_BASE_URL = 'https://api.example.com';
```

---

# 96. How to Ensure Code Quality and Maintainability

## 1. Linting and Formatting

### ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'error',
    'react/jsx-no-target-blank': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
```

### Prettier Configuration
```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "arrowParens": "always"
}
```

## 2. Testing Strategy

### Unit Tests (Jest + React Testing Library)
```javascript
// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button when loading', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

// Custom Hook Test
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('increments counter', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

### Integration Tests
```javascript
// LoginForm.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';
import { authService } from '../services/authService';

jest.mock('../services/authService');

describe('LoginForm Integration', () => {
  it('submits form with valid credentials', async () => {
    authService.login.mockResolvedValue({ token: 'abc123' });
    
    render(<LoginForm />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(authService.login).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });

  it('displays error message on failed login', async () => {
    authService.login.mockRejectedValue(new Error('Invalid credentials'));
    
    render(<LoginForm />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'wrong');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });
});
```

### E2E Tests (Cypress/Playwright)
```javascript
// cypress/e2e/login.cy.js
describe('Login Flow', () => {
  it('allows user to login successfully', () => {
    cy.visit('/login');
    
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });
});
```

## 3. Code Reviews

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console.log statements
- [ ] Code follows style guidelines
- [ ] Self-review completed

## Screenshots (if applicable)

## Related Issues
Closes #123
```

## 4. Documentation

### Component Documentation
```javascript
/**
 * Button component for user interactions
 * 
 * @component
 * @example
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Button content
 * @param {('primary'|'secondary'|'danger')} props.variant - Button style variant
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {Function} props.onClick - Click handler function
 */
export function Button({ children, variant, disabled, onClick }) {
  // Implementation
}
```

### README Files
```markdown
# User Authentication Feature

## Overview
Handles user login, registration, and session management.

## Components
- `LoginForm`: User login interface
- `RegisterForm`: New user registration
- `PasswordReset`: Password recovery flow

## Usage
```javascript
import { LoginForm } from '@/features/auth';

function App() {
  return <LoginForm onSuccess={handleLoginSuccess} />;
}
```

## API
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`
```

## 5. Continuous Integration

### GitHub Actions Workflow
```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm run test:ci
      
      - name: Build
        run: npm run build
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## 6. Performance Monitoring

### Web Vitals Tracking
```javascript
// reportWebVitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric);
}

export function reportWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}

// main.jsx
import { reportWebVitals } from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

reportWebVitals();
```

### Bundle Size Analysis
```json
// package.json
{
  "scripts": {
    "analyze": "vite-bundle-visualizer"
  }
}
```

These practices together ensure a maintainable, scalable, and high-quality React codebase! 🚀

## React and Git Workflows

# 97. How Do You Manage Feature Branches in React Development with Git?

Managing feature branches effectively is crucial for team collaboration and maintaining code quality in React projects. Here are comprehensive strategies and workflows:

## 1. Git Branching Strategy (Git Flow)

```bash
# Main branches
main (or master)     # Production-ready code
develop              # Integration branch for features

# Supporting branches
feature/*           # New features
bugfix/*            # Bug fixes
hotfix/*            # Emergency production fixes
release/*           # Release preparation
```

### Branch Naming Conventions

```bash
# Feature branches
feature/user-authentication
feature/product-catalog
feature/shopping-cart
feature/JIRA-123-payment-integration

# Bug fix branches
bugfix/login-redirect-issue
bugfix/cart-total-calculation

# Hotfix branches
hotfix/security-vulnerability
hotfix/payment-gateway-error

# Release branches
release/v1.2.0
release/2024-Q1
```

## 2. Complete Feature Branch Workflow

### Step 1: Create Feature Branch

```bash
# Update local develop branch
git checkout develop
git pull origin develop

# Create and switch to new feature branch
git checkout -b feature/user-profile

# Alternative: Create from specific branch
git checkout -b feature/user-profile develop

# Push branch to remote
git push -u origin feature/user-profile
```

### Step 2: Work on Feature

```bash
# Make changes to files
# src/features/profile/components/UserProfile.jsx

# Check status
git status

# Stage specific files
git add src/features/profile/

# Or stage all changes
git add .

# Commit with descriptive message
git commit -m "feat: add user profile component with avatar upload

- Create UserProfile component
- Implement avatar upload functionality
- Add profile edit form
- Include unit tests"

# Push to remote
git push origin feature/user-profile
```

### Step 3: Keep Branch Updated

```bash
# Regularly sync with develop branch
git checkout develop
git pull origin develop

git checkout feature/user-profile

# Option 1: Rebase (cleaner history)
git rebase develop

# If conflicts occur, resolve them, then:
git add .
git rebase --continue

# Option 2: Merge (preserves branch history)
git merge develop

# Force push after rebase (use with caution)
git push --force-with-lease origin feature/user-profile
```

### Step 4: Create Pull Request

```bash
# Ensure all changes are pushed
git push origin feature/user-profile

# Then create PR on GitHub/GitLab/Bitbucket
# From: feature/user-profile
# To: develop
```

## 3. Commit Message Conventions (Conventional Commits)

```bash
# Format
<type>(<scope>): <subject>

<body>

<footer>

# Types
feat:     # New feature
fix:      # Bug fix
docs:     # Documentation only
style:    # Code style (formatting, missing semicolons)
refactor: # Code refactoring
perf:     # Performance improvement
test:     # Adding tests
chore:    # Build process or auxiliary tool changes
ci:       # CI configuration files and scripts

# Examples
git commit -m "feat(auth): implement JWT authentication

- Add login endpoint integration
- Store token in httpOnly cookie
- Create auth context provider
- Add protected route wrapper

Closes #123"

git commit -m "fix(cart): correct total price calculation

The cart was not including tax in final total.
Now correctly applies 18% tax rate.

Fixes #456"

git commit -m "refactor(components): extract reusable Button component"

git commit -m "test(auth): add unit tests for login flow"

git commit -m "docs(readme): update installation instructions"
```

## 4. Advanced Git Workflows

### Interactive Rebase (Clean Up Commits)

```bash
# Clean up last 3 commits before creating PR
git rebase -i HEAD~3

# In the editor that opens:
# pick abc123 feat: add user profile
# squash def456 fix: typo in profile
# squash ghi789 fix: another small fix

# This combines 3 commits into 1

# Alternative: Squash all commits in feature branch
git rebase -i develop

# Force push (after team review)
git push --force-with-lease origin feature/user-profile
```

### Cherry-Pick Specific Commits

```bash
# Pick specific commit from another branch
git checkout feature/user-profile
git cherry-pick abc123def

# Cherry-pick without committing (for review)
git cherry-pick -n abc123def
```

### Stash Changes

```bash
# Temporarily save uncommitted changes
git stash save "WIP: profile validation"

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove from stash list
git stash pop

# Apply specific stash
git stash apply stash@{1}

# Drop a stash
git stash drop stash@{0}
```

## 5. Practical React Project Example

### Project Structure with Git

```bash
my-react-app/
├── .git/
├── .gitignore
├── .github/
│   ├── workflows/
│   │   └── ci.yml
│   └── pull_request_template.md
├── src/
├── package.json
└── README.md
```

### .gitignore for React Projects

```bash
# .gitignore

# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Cache
.cache/
.parcel-cache/
.eslintcache

# Misc
.temp/
.tmp/
```

### Pull Request Template

```markdown
<!-- .github/pull_request_template.md -->

## 🎯 Description
Brief description of what this PR does.

## 🔗 Related Issues
Closes #123
Related to #456

## 📸 Screenshots (if applicable)
[Add screenshots for UI changes]

## 🧪 Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed
- [ ] Tested in different browsers

## 📝 Type of Change
- [ ] 🐛 Bug fix (non-breaking change fixing an issue)
- [ ] ✨ New feature (non-breaking change adding functionality)
- [ ] 💥 Breaking change (fix or feature causing existing functionality to change)
- [ ] 📚 Documentation update

## ✅ Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented complex code
- [ ] I have updated documentation
- [ ] My changes generate no new warnings
- [ ] No console.log statements
- [ ] All tests pass locally

## 🚀 Deployment Notes
[Any special deployment instructions]
```

## 6. Team Collaboration Workflows

### Workflow 1: GitHub Flow (Simple)

```bash
# 1. Create feature branch from main
git checkout -b feature/new-feature main

# 2. Work and commit
git commit -m "feat: implement feature"

# 3. Push and create PR
git push -u origin feature/new-feature

# 4. After review and approval, merge to main
# 5. Delete feature branch
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

### Workflow 2: Git Flow (Complex Projects)

```bash
# 1. Start feature from develop
git checkout -b feature/new-feature develop

# 2. Work on feature
git commit -m "feat: add new feature"

# 3. Finish feature - merge to develop
git checkout develop
git merge --no-ff feature/new-feature
git branch -d feature/new-feature
git push origin develop

# 4. Create release branch
git checkout -b release/1.2.0 develop

# 5. Finalize release and merge to main and develop
git checkout main
git merge --no-ff release/1.2.0
git tag -a v1.2.0 -m "Release version 1.2.0"

git checkout develop
git merge --no-ff release/1.2.0
git branch -d release/1.2.0

# 6. Hotfix if needed
git checkout -b hotfix/1.2.1 main
# Fix the issue
git checkout main
git merge --no-ff hotfix/1.2.1
git tag -a v1.2.1

git checkout develop
git merge --no-ff hotfix/1.2.1
git branch -d hotfix/1.2.1
```

### Workflow 3: Trunk-Based Development

```bash
# 1. Create short-lived feature branch
git checkout -b feature/quick-fix main

# 2. Make small changes and commit
git commit -m "feat: small feature"

# 3. Merge back to main quickly (same day)
git checkout main
git merge feature/quick-fix
git push origin main

# 4. Delete branch immediately
git branch -d feature/quick-fix
```

## 7. Git Aliases for Productivity

```bash
# ~/.gitconfig

[alias]
    # Status shortcuts
    st = status
    s = status -s
    
    # Checkout shortcuts
    co = checkout
    cob = checkout -b
    
    # Commit shortcuts
    cm = commit -m
    ca = commit --amend
    
    # Branch management
    br = branch
    brd = branch -d
    brD = branch -D
    
    # Log shortcuts
    lg = log --oneline --graph --decorate --all
    last = log -1 HEAD --stat
    
    # Diff shortcuts
    df = diff
    dfs = diff --staged
    
    # Pull/Push shortcuts
    pl = pull
    ps = push
    pso = push origin
    psf = push --force-with-lease
    
    # Stash shortcuts
    st = stash
    stp = stash pop
    stl = stash list
    
    # Undo shortcuts
    undo = reset HEAD~1 --mixed
    unstage = reset HEAD --
    
    # Feature branch workflow
    feature = "!f() { git checkout develop && git pull && git checkout -b feature/$1; }; f"
    finish = "!f() { git checkout develop && git merge --no-ff $1 && git branch -d $1; }; f"

# Usage
git feature user-auth          # Creates feature/user-auth from develop
git cm "feat: add login"       # Quick commit
git lg                         # Beautiful log
git finish feature/user-auth   # Merge and delete branch
```

## 8. Pre-commit Hooks (Husky + lint-staged)

```javascript
// package.json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.{json,md,css,scss}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

```bash
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🔍 Running pre-commit checks..."

# Run lint-staged
npx lint-staged

# Run tests on staged files
npm run test:staged

echo "✅ Pre-commit checks passed!"
```

```bash
# .husky/commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Validate commit message format
npx --no-install commitlint --edit $1
```

## 9. Branch Protection Rules

### GitHub Branch Protection Settings

```yaml
# Recommended settings for main/develop branches:

Required:
- Require pull request reviews before merging (2 approvals)
- Require status checks to pass before merging
  - CI/CD pipeline must pass
  - All tests must pass
  - Code coverage threshold met
- Require branches to be up to date before merging
- Require signed commits
- Include administrators (no one bypasses rules)

Optional:
- Dismiss stale pull request approvals when new commits are pushed
- Require review from code owners
- Restrict who can push to matching branches
```

---

# 98. Strategies for Resolving Merge Conflicts in React Projects

Merge conflicts are inevitable in team development. Here's how to handle them effectively:

## 1. Understanding Merge Conflicts

```bash
# Conflict occurs when:
# - Two branches modify the same line in a file
# - One branch deletes a file that another branch modifies
# - Two branches create files with the same name

# Example conflict message:
Auto-merging src/components/Header.jsx
CONFLICT (content): Merge conflict in src/components/Header.jsx
Automatic merge failed; fix conflicts and then commit the result.
```

## 2. Identifying Conflicts

```bash
# Check which files have conflicts
git status

# Output:
# Unmerged paths:
#   (use "git add <file>..." to mark resolution)
#         both modified:   src/components/Header.jsx
#         both modified:   src/utils/api.js
```

### Conflict Markers in Files

```javascript
// src/components/Header.jsx

import React from 'react';

function Header() {
<<<<<<< HEAD (Current Branch)
  return (
    <header className="main-header">
      <h1>My App</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
=======
  return (
    <header className="app-header">
      <h1>My Application</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
>>>>>>> feature/update-navigation (Incoming Branch)
}

export default Header;
```

## 3. Manual Conflict Resolution

### Step-by-Step Resolution

```javascript
// BEFORE: Conflict in src/components/Header.jsx
<<<<<<< HEAD
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="main-header">
      <h1>My App</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
    </header>
  );
}
=======
import React from 'react';
import { Logo } from './Logo';

function Header() {
  return (
    <header className="app-header">
      <Logo />
      <h1>My Application</h1>
      <nav>Navigation here</nav>
    </header>
  );
}
>>>>>>> feature/add-logo

// AFTER: Resolved (combining both changes)
import { useState } from 'react';
import { Logo } from './Logo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="app-header">
      <Logo />
      <h1>My Application</h1>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <nav>Navigation here</nav>
      )}
    </header>
  );
}

export default Header;
```

### Resolution Commands

```bash
# 1. Open conflicted file in editor and resolve manually
code src/components/Header.jsx

# 2. After resolving, stage the file
git add src/components/Header.jsx

# 3. Continue the merge/rebase
git commit  # For merge
# or
git rebase --continue  # For rebase

# If you want to abort
git merge --abort
# or
git rebase --abort
```

## 4. Using Merge Tools

### Configure Merge Tool

```bash
# VS Code as merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Vimdiff
git config --global merge.tool vimdiff

# Meld (GUI tool)
git config --global merge.tool meld
```

### Launch Merge Tool

```bash
# Open merge tool for all conflicts
git mergetool

# This will open each conflicted file
# After resolving, save and close
# Git will automatically stage resolved files
```

## 5. Common React-Specific Conflicts

### Conflict 1: Component Props

```javascript
// Conflict in component props
<<<<<<< HEAD
function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
=======
function ProductCard({ product, onAddToCart, showDiscount }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {showDiscount && <span>20% OFF</span>}
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
}
>>>>>>> feature/add-discount

// RESOLUTION: Combine both features
function ProductCard({ product, onAddToCart, showDiscount = false }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {showDiscount && <span className="discount-badge">20% OFF</span>}
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
```

### Conflict 2: Import Statements

```javascript
// Conflict in imports
<<<<<<< HEAD
import React, { useState } from 'react';
import { Button } from './components/Button';
import { formatPrice } from './utils/format';
=======
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { formatCurrency } from '@/utils/currency';
>>>>>>> feature/refactor-imports

// RESOLUTION: Merge all unique imports
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { formatPrice, formatCurrency } from '@/utils/format';
```

### Conflict 3: State Management

```javascript
// Conflict in Redux slice
<<<<<<< HEAD
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    }
  }
});
=======
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    }
  }
});
>>>>>>> feature/add-error-handling

// RESOLUTION: Include all reducers and state
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    }
  }
});
```

### Conflict 4: Package.json

```json
// Conflict in package.json dependencies
<<<<<<< HEAD
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.4.0",
    "lodash": "^4.17.21"
  }
}
=======
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.0",
    "react-query": "^3.39.3"
  }
}
>>>>>>> feature/add-react-query

// RESOLUTION: Include all dependencies with latest versions
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.0",
    "lodash": "^4.17.21",
    "react-query": "^3.39.3"
  }
}

// Then run:
// npm install
```

## 6. Prevention Strategies

### Strategy 1: Frequent Syncing

```bash
# Daily routine: sync with main branch
git checkout develop
git pull origin develop

git checkout feature/my-feature
git rebase develop  # or git merge develop

# This keeps your branch up-to-date and reduces conflicts
```

### Strategy 2: Small, Focused Commits

```bash
# ❌ Bad: Large commits with many changes
git commit -m "feat: complete user dashboard with settings and profile"

# ✅ Good: Small, focused commits
git commit -m "feat: add user profile component"
git commit -m "feat: add user settings page"
git commit -m "feat: integrate profile with dashboard"
```

### Strategy 3: Code Organization

```javascript
// ❌ Bad: Multiple features in one file
// UserDashboard.jsx - 500 lines
// Multiple developers editing same file = conflicts

// ✅ Good: Split into smaller files
// UserDashboard.jsx - 50 lines
// UserProfile.jsx - 80 lines
// UserSettings.jsx - 100 lines
// Less chance of conflicts
```

### Strategy 4: Communication

```bash
# Before starting work on a file
# Check with team: "I'm working on Header.jsx"
# Use GitHub/Slack: "Working on authentication feature"

# This prevents multiple people from modifying same code
```

## 7. Advanced Conflict Resolution

### Using Git Rerere (Reuse Recorded Resolution)

```bash
# Enable rerere (reuse recorded resolution)
git config --global rerere.enabled true

# Git will remember how you resolved conflicts
# and automatically apply same resolution if conflict occurs again
```

### Accept Theirs or Ours

```bash
# Accept all changes from incoming branch
git checkout --theirs src/components/Header.jsx
git add src/components/Header.jsx

# Accept all changes from current branch
git checkout --ours src/components/Header.jsx
git add src/components/Header.jsx

# For entire merge
git merge -X theirs feature/branch-name
git merge -X ours feature/branch-name
```

### Three-Way Merge Visualization

```bash
# Show common ancestor, current, and incoming changes
git show :1:src/components/Header.jsx  # Common ancestor
git show :2:src/components/Header.jsx  # Current branch (ours)
git show :3:src/components/Header.jsx  # Incoming branch (theirs)
```

## 8. Conflict Resolution Checklist

```markdown
## Merge Conflict Resolution Checklist

- [ ] Identify all conflicted files (`git status`)
- [ ] Understand the context of both changes
- [ ] Open conflicted files in editor
- [ ] Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- [ ] Communicate with team members if needed
- [ ] Decide on resolution strategy (combine, choose one, rewrite)
- [ ] Remove all conflict markers
- [ ] Test the changes
- [ ] Run linter and formatter
- [ ] Run tests
- [ ] Stage resolved files (`git add`)
- [ ] Complete merge/rebase
- [ ] Push changes
- [ ] Update PR if applicable
```

## 9. Testing After Conflict Resolution

```bash
# After resolving conflicts, always:

# 1. Run linter
npm run lint

# 2. Run tests
npm test

# 3. Build the project
npm run build

# 4. Start dev server and manually test
npm run dev

# 5. Check for console errors
# Open browser DevTools and verify no errors
```

## 10. Tools for Better Conflict Management

### VS Code Extensions

```bash
# Git Graph - Visualize branches
# GitLens - Enhanced Git capabilities
# Merge Conflict - Better conflict resolution UI
```

### Git GUI Clients

```bash
# GitKraken - Visual merge conflict resolution
# SourceTree - Free Git GUI
# GitHub Desktop - Simple interface
```

These strategies and workflows will help you manage branches and resolve conflicts effectively in React projects! 🚀

## React Interviews Problem Solving and Scenarios

# 99. How would you handle a feature request or bug report in an ongoing React project?

## Process Overview

### For Bug Reports:

**1. Reproduce and Verify**
- Gather all necessary information (steps to reproduce, environment, expected vs actual behavior)
- Reproduce the bug locally
- Check if it's a known issue

**2. Isolate and Debug**
- Use React DevTools to inspect component state and props
- Add logging/breakpoints to trace the issue
- Check console for errors and warnings

**3. Fix and Test**
- Implement the fix
- Write/update tests to prevent regression
- Test in multiple scenarios

**4. Document and Deploy**
- Create clear commit messages
- Update documentation if needed
- Deploy through proper channels (staging → production)

### Example Bug Fix:

```javascript
// BUG REPORT: Cart total doesn't update when quantity changes

// BEFORE (Buggy Code)
function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product A', price: 10, quantity: 2 }
  ]);
  
  // Bug: Total calculated once, doesn't recalculate
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const updateQuantity = (id, newQuantity) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  return (
    <div>
      <h2>Total: ${total}</h2>
      {items.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onQuantityChange={updateQuantity}
        />
      ))}
    </div>
  );
}

// AFTER (Fixed Code)
function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product A', price: 10, quantity: 2 }
  ]);
  
  // Fix: Use useMemo to recalculate when items change
  const total = useMemo(() => 
    items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  
  const updateQuantity = useCallback((id, newQuantity) => {
    setItems(prevItems => prevItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  }, []);
  
  return (
    <div>
      <h2>Total: ${total}</h2>
      {items.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onQuantityChange={updateQuantity}
        />
      ))}
    </div>
  );
}

// Add test to prevent regression
describe('ShoppingCart', () => {
  it('updates total when quantity changes', () => {
    const { getByText, getByRole } = render(<ShoppingCart />);
    
    expect(getByText(/Total: \$20/)).toBeInTheDocument();
    
    const increaseBtn = getByRole('button', { name: /increase/i });
    fireEvent.click(increaseBtn);
    
    expect(getByText(/Total: \$30/)).toBeInTheDocument();
  });
});
```

### For Feature Requests:

**1. Understand Requirements**
- Discuss with stakeholders
- Define acceptance criteria
- Create user stories

**2. Design and Plan**
- Break down into smaller tasks
- Consider impact on existing features
- Plan for scalability and maintainability

**3. Implement**
- Follow existing code patterns
- Keep components reusable
- Write tests alongside code

**4. Review and Iterate**
- Code review
- QA testing
- Gather feedback

### Example Feature Implementation:

```javascript
// FEATURE REQUEST: Add search functionality to product list with filters

// Step 1: Create reusable search hook
function useProductSearch(products) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    inStock: false
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search term filter
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = 
        filters.category === 'all' || product.category === filters.category;
      
      // Price range filter
      const matchesPrice = 
        filters.priceRange === 'all' || 
        isPriceInRange(product.price, filters.priceRange);
      
      // Stock filter
      const matchesStock = !filters.inStock || product.inStock;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });
  }, [products, searchTerm, filters]);

  return {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    filteredProducts
  };
}

// Step 2: Create search UI component
function ProductSearch({ onSearchChange, onFilterChange, filters }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      
      <div className="filters">
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ 
            ...filters, 
            category: e.target.value 
          })}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
        
        <select
          value={filters.priceRange}
          onChange={(e) => onFilterChange({ 
            ...filters, 
            priceRange: e.target.value 
          })}
        >
          <option value="all">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
        </select>
        
        <label>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => onFilterChange({ 
              ...filters, 
              inStock: e.target.checked 
            })}
          />
          In Stock Only
        </label>
      </div>
    </div>
  );
}

// Step 3: Integrate into main component
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    filteredProducts
  } = useProductSearch(products);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="product-list-container">
      <ProductSearch
        onSearchChange={setSearchTerm}
        onFilterChange={setFilters}
        filters={filters}
      />
      
      <div className="results-info">
        Showing {filteredProducts.length} of {products.length} products
      </div>
      
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-results">
          No products found. Try adjusting your filters.
        </div>
      )}
    </div>
  );
}

// Step 4: Add tests
describe('ProductSearch', () => {
  it('filters products by search term', () => {
    const products = [
      { id: 1, name: 'Laptop', category: 'electronics' },
      { id: 2, name: 'Shirt', category: 'clothing' }
    ];
    
    const { result } = renderHook(() => useProductSearch(products));
    
    act(() => {
      result.current.setSearchTerm('lap');
    });
    
    expect(result.current.filteredProducts).toHaveLength(1);
    expect(result.current.filteredProducts[0].name).toBe('Laptop');
  });
});
```

---

# 100. Describe your process for optimizing a component that has complex state logic and several child components

## Optimization Strategy

### 1. Analyze Performance Issues

**Identify Bottlenecks:**
- Use React DevTools Profiler
- Check for unnecessary re-renders
- Measure render times
- Monitor component update frequency

### 2. State Management Optimization

**Strategies:**
- Split complex state into smaller pieces
- Move state closer to where it's used
- Use `useReducer` for complex state logic
- Consider state management libraries for very complex cases

### 3. Prevent Unnecessary Re-renders

**Techniques:**
- Memoize components with `React.memo`
- Memoize callbacks with `useCallback`
- Memoize computed values with `useMemo`
- Optimize context usage

### 4. Component Architecture

**Improvements:**
- Break down large components
- Lift heavy computations out of render
- Lazy load components when appropriate
- Virtualize long lists

## Complete Example: Optimizing a Complex Dashboard

### BEFORE (Unoptimized):

```javascript
// Problematic: Everything re-renders on any state change
function Dashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    role: 'all',
    status: 'all'
  });
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Problem 1: Expensive calculation runs on every render
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesRole = filters.role === 'all' || user.role === filters.role;
    const matchesStatus = filters.status === 'all' || user.status === filters.status;
    return matchesSearch && matchesRole && matchesStatus;
  }).sort((a, b) => {
    // Expensive sorting logic
    return a[sortBy] > b[sortBy] ? 1 : -1;
  });

  // Problem 2: New function created on every render
  const handleUserClick = (user) => {
    setSelectedUser(user);
    // More logic...
  };

  // Problem 3: All child components re-render
  return (
    <div className="dashboard">
      <Header /> {/* Re-renders unnecessarily */}
      <Sidebar 
        filters={filters} 
        onFilterChange={setFilters}
      />
      <UserList 
        users={filteredUsers}
        onUserClick={handleUserClick}
        viewMode={viewMode}
      />
      <UserDetails user={selectedUser} />
      <Footer /> {/* Re-renders unnecessarily */}
    </div>
  );
}

function UserList({ users, onUserClick, viewMode }) {
  // Problem 4: All UserCards re-render when any prop changes
  return (
    <div className={`user-list ${viewMode}`}>
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onClick={onUserClick}
        />
      ))}
    </div>
  );
}

function UserCard({ user, onClick }) {
  return (
    <div onClick={() => onClick(user)}>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.role}</p>
    </div>
  );
}
```

### AFTER (Optimized):

```javascript
// Step 1: Extract state management logic with useReducer
function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SELECT_USER':
      return { ...state, selectedUser: action.payload };
    case 'UPDATE_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
    case 'SET_VIEW_MODE':
      return { ...state, viewMode: action.payload };
    default:
      return state;
  }
}

// Step 2: Create custom hook for filtering logic
function useFilteredUsers(users, filters, sortBy) {
  return useMemo(() => {
    console.log('Filtering and sorting users...');
    
    const filtered = users.filter(user => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesRole = filters.role === 'all' || user.role === filters.role;
      const matchesStatus = filters.status === 'all' || user.status === filters.status;
      return matchesSearch && matchesRole && matchesStatus;
    });

    return filtered.sort((a, b) => {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    });
  }, [users, filters, sortBy]); // Only recalculate when these change
}

// Step 3: Memoize static components
const Header = memo(() => {
  console.log('Header rendered');
  return <header>Dashboard Header</header>;
});

const Footer = memo(() => {
  console.log('Footer rendered');
  return <footer>Dashboard Footer</footer>;
});

// Step 4: Memoize Sidebar with proper dependencies
const Sidebar = memo(({ filters, onFilterChange }) => {
  console.log('Sidebar rendered');
  
  return (
    <aside>
      <input
        type="text"
        value={filters.search}
        onChange={(e) => onFilterChange({ search: e.target.value })}
        placeholder="Search users..."
      />
      <select
        value={filters.role}
        onChange={(e) => onFilterChange({ role: e.target.value })}
      >
        <option value="all">All Roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </aside>
  );
});

// Step 5: Memoize UserCard to prevent unnecessary re-renders
const UserCard = memo(({ user, onClick }) => {
  console.log(`UserCard rendered: ${user.name}`);
  
  return (
    <div onClick={() => onClick(user)} className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      <span className={`status ${user.status}`}>{user.status}</span>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if user data changed
  return prevProps.user.id === nextProps.user.id &&
         prevProps.user.name === nextProps.user.name &&
         prevProps.user.status === nextProps.user.status;
});

// Step 6: Optimize UserList with virtualization (for large lists)
const UserList = memo(({ users, onUserClick, viewMode }) => {
  console.log('UserList rendered');
  
  // For very large lists, use react-window or react-virtualized
  if (users.length > 100) {
    return (
      <FixedSizeList
        height={600}
        itemCount={users.length}
        itemSize={150}
        width="100%"
      >
        {({ index, style }) => (
          <div style={style}>
            <UserCard user={users[index]} onClick={onUserClick} />
          </div>
        )}
      </FixedSizeList>
    );
  }
  
  return (
    <div className={`user-list ${viewMode}`}>
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onClick={onUserClick}
        />
      ))}
    </div>
  );
});

// Step 7: Memoize UserDetails
const UserDetails = memo(({ user }) => {
  if (!user) return <div>Select a user</div>;
  
  console.log('UserDetails rendered');
  
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>Status: {user.status}</p>
      <p>Email: {user.email}</p>
    </div>
  );
});

// Step 8: Optimized main component
function Dashboard() {
  const [state, dispatch] = useReducer(userReducer, {
    users: [],
    selectedUser: null,
    filters: { search: '', role: 'all', status: 'all' },
    sortBy: 'name',
    viewMode: 'grid'
  });

  // Load users
  useEffect(() => {
    fetchUsers().then(users => {
      dispatch({ type: 'SET_USERS', payload: users });
    });
  }, []);

  // Memoized filtered users
  const filteredUsers = useFilteredUsers(
    state.users, 
    state.filters, 
    state.sortBy
  );

  // Memoize callbacks
  const handleUserClick = useCallback((user) => {
    dispatch({ type: 'SELECT_USER', payload: user });
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    dispatch({ type: 'UPDATE_FILTERS', payload: newFilters });
  }, []);

  console.log('Dashboard rendered');

  return (
    <div className="dashboard">
      <Header />
      <Sidebar 
        filters={state.filters} 
        onFilterChange={handleFilterChange}
      />
      <UserList 
        users={filteredUsers}
        onUserClick={handleUserClick}
        viewMode={state.viewMode}
      />
      <UserDetails user={state.selectedUser} />
      <Footer />
    </div>
  );
}

export default Dashboard;
```

### Optimization Results:

**Before:**
- Every state change re-renders entire dashboard
- Filtering/sorting runs on every render
- All child components re-render
- ~200ms render time with 1000 users

**After:**
- Only affected components re-render
- Filtering/sorting only when dependencies change
- Memoized components skip unnecessary renders
- ~20ms render time with 1000 users (10x faster)

### Key Takeaways:

1. **Use `useMemo`** for expensive calculations
2. **Use `useCallback`** for functions passed to children
3. **Use `memo`** for components that render often with same props
4. **Use `useReducer`** for complex state logic
5. **Split state** to minimize re-render scope
6. **Virtualize** large lists
7. **Profile regularly** to catch regressions