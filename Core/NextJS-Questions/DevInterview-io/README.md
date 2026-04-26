https://github.com/Devinterview-io/next-interview-questions


# 50 Essential Next.js Interview Questions in 2026

<div>
<p align="center">
<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>

#### You can also find all 50 answers here 👉 [Devinterview.io - Next.js](https://devinterview.io/questions/web-and-mobile-development/next-interview-questions)

<br>

## 1. What is _Next.js_ and what are its main features?

**Next.js** stands out as a production-grade React framework, offering both speed and specialization. Its versatility, data fetching techniques, search engine optimization (SEO), and various deployment options make it a top choice for modern web development.

### Main Features

1. **Server-Side Rendering (SSR)**: Next.js dynamically generates the HTML on the server for each page request, delivering consistently rendered content to users and ensuring optimal SEO.

2. **Static Site Generation (SSG)**: By pre-computing the HTML of individual pages at the build time, Next.js achieves superior performance and security. It's especially adept at handling content-heavy websites.

3. **Hybrid Rendering**: Combining SSR and SSG, Next.js provides the flexibility to render specific pages during build time (SSG) and others on-demand (SSR). This feature is valuable when creating applications comprising both dynamic and static content.

4.  **Routing**: Opt for either filesystem-based or dynamic routing. The former obviates the need for explicit route definition while the latter enables programmatic control. Both options synergize with SSG and SSR.

5. **Code Splitting**: Out of the box, Next.js identifies separate sections of your app and optimizes the bundling, dispatching only the necessary code (and resources) to clients, benefiting both performance and load times.

6. **Formidable Image Optimization**: Image components from Next.js automate image optimization, ensuring picture quality for varying devices while still upholding rapid load times.

7.  **Instant Deployment**: Rely on services like Vercel for swift, straightforward deployments, A/B testing, and other advanced features.

8. **API Routes**: Embrace Next.js API routes for seamless incorporation of backend resources into your application.

9. **Built-in CSS Support**: With Next.js, you can utilize standard CSS files, CSS modules, or even preprocessors like Sass, all without additional setup.

10. **Vast Plugin Ecosystem**: Extend the functionality of your Next.js project by plugging into a wide array of solutions from the Next.js community.
<br>

## 2. How does _Next.js_ differ from _Create React App_?

Let's look at the key differences between Next.js and Create React App.

### Core Functionality

- **Next.js**: Built-in server-side rendering (SSR) and client-side rendering (CSR). It also supports static site generation (SSG). Offers features like pre-fetching data to enhance performance. Provides integrated API routing.
  
- **Create React App**: Primarily focuses on client-side rendering (CSR). Doesn't provide built-in server-side rendering or advanced rendering modes such as SSG or ISR. Relies on third-party solutions for server-side rendering.

### Routing

- **Next.js**: Offers file-system-based routing, which simplifies route definition. It also supports custom routes. Dynamic routing and **code splitting** are automatic, enhancing performance.
  
- **Create React App**: Utilizes client-side routing with packages like React Router. Routes need to be explicitly defined in a configuration file or as components.

### File Structure and Configuration

- **Next.js**: Employs a zero-configuration model for quick setup. It comes with sensible defaults that promote best practices. Added configuration options can further customize its behavior.
  
- **Create React App**: Similar to Next.js, it uses a zero-configuration approach. Customizations are managed via `react-scripts` and some advanced, but extensive, `eject` configurations. This step irrevocably detaches from the default configuration, making it harder to integrate future updates.

### API Handling

- **Next.js**: Integrates seamless serverless API routes. Developers can design API endpoints using standard HTTP requests. The result is a simplified backend setup without the need for server management or additional server logic.

- **Create React App**: Leverages libraries like Axios or Fetch to interact with backend services. Unlike Next.js, it doesn't have a built-in solution for server-side API routes.

### Code Splitting

- **Next.js**: Automatically code-splits imports across pages and components. This on-demand loading optimizes initial page load times. Furthermore, module-level or even granular control over code splitting are possible.

- **Create React App**: Incorporates the `React.lazy` function and `Suspense` components to facilitate code splitting. Developers need to identify points for code splitting manually.

### Data Fetching

- **Next.js**: Offers numerous approaches for data retrieval, such as `getStaticProps`, `getStaticPaths`, `getServerSideProps`, and client-side methods. These functions are part of the **Data Fetching API** and are tailored for specific rendering strategies.

- **Create React App**: Lacks specialized data-fetching techniques inherent in Next.js. Instead, it integrates with data-fetching libraries or employs traditional strategies such as using `useEffect` in functional components.

### Deployment

- **Next.js**: Provides flexible deployment options. With serverless hosting, deploys are efficient and scalable, especially suited for small to medium projects. Traditional hosting with a Node.js server allows for more extensive customizations.

- **Create React App**: Most suitable for static or single-page applications, often deployed via content delivery networks (CDNs). For dynamic content, it needs to be paired with a backend like a REST API, and then deployed as two distinct applications.

### SEO and Meta-Tags

- **Next.js**: Offers superior support for search engine optimization (SEO). It covers foundational aspects like meta tags, but its advanced rendering modes, such as SSG and ISR, significantly benefit SEO, which is especially critical for content-heavy sites.

- **Create React App**: Lacks built-in mechanisms like SSR or specialized rendering modes for optimizing SEO. Developers have to leverage third-party tools or implement their own solutions to achieve search engine friendliness.
<br>

## 3. What command is used to create a new _Next.js_ app?

To create a new **Next.js** application, you can utilize `npx` in combination with the `create-next-app` package.

```bash
npx create-next-app folder-name
```

Replace **"folder-name"** with your desired workspace directory. Here, `npx` is a package runner that ensures you get the most recent version of `create-next-app`. If you're on Node.js 10 or earlier, you need to install `create-next-app` as a global package:

```bash
npm install -g create-next-app
create-next-app folder-name
```

This method, involving `npm` and a global package, is not recommended for more recent Node.js versions.
<br>

## 4. How does _Next.js_ handle _server-side rendering_ (SSR)?

**Next.js** handles Server-Side Rendering (SSR) through a simple and intuitive mechanism.

### Key Components

- **Page**: Represents the specific route that's being accessed.
- **Route**: A user-defined endpoint corresponding to a specific page or screen.
- **App**: The root of a Next.js application, managing the overall setup and state.

### The SSR Process

1. **Initial Request**: When a user accesses a specific route or page, Next.js intercepts this request.
2. **Data Fetching**: Any necessary page data is fetched, ensuring it's available before the page is rendered.
3. **SSR Render**: Next.js renders the requested page on the server and sends the generated content, including any fetched data, as a response to the user's initial request.

#### Benefit: Immediate Data Display

Since page content and data are rendered on the server and sent in the initial response, users see meaningful content faster, even for dynamic, data-driven pages.

#### Code Example: Basic Next.js Page

Here's the typical structure of a **Next.js** page:

```jsx
import Head from 'next/head';

const SamplePage = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Sample Page</title>
      </Head>
      <h1>Sample Content</h1>
      <p>{data}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Perform necessary data fetching
  let data = 'Some server-rendered data';
  return { props: { data } };
}

export default SamplePage;
```

In this example:

- The data-fetching function, `getServerSideProps`, ensures the data is available before the page is rendered. This method is specifically for Server-Side Rendering in Next.js.
- The `data` prop, obtained from the data-fetching function, is passed to the `SamplePage` component before its initial rendering. This permits immediate display of relevant data.
- The `Head` component from `next/head` encapsulates metadata specific to the page, such as the title.

### The Data-Hydration Stage

After the initial server-side rendering, the client-side JavaScript takes over. This process involves:

- **Page Navigation**: Whenever the user navigates to a new page within the application.
- **Client-Side Routing**: The browser takes control over route changes, and Next.js manages the synchronization.
- **Data Fetching**: If required, Next.js triggers additional data fetching on the client side for subsequent state updates or dynamic content changes.

#### Code Example: Next.js Link Component

Here is the code:

```jsx
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navigation;
```

In this example:

- The `Link` component encapsulates anchor tags, ensuring user navigation within the application is efficient and considers both server-rendered content and any subsequent client-rendered updates.

### Optimal User Experience

  - Initial Server Response: Delivers server-rendered content and necessary data in the first request, improving perceived loading times.
  - Enhanced Dynamic User Experience: Seamlessly combines server-rendered content with client-side updates, optimizing page state and content.
<br>

## 5. Can you explain the purpose of the _`pages` directory_ in a _Next.js_ project?

The **`pages` directory** serves as your primary **route definition tool** in a **Next.js app**. Each file within it represents a unique URL.

### Key Features

- **Automatic Routing**: No custom routing is needed. Any file added to `pages` becomes a route.

- **File-Route Mapping**: The file structure under `pages` maps to specific routes. For instance, `pages/post/index.js` is associated with `/post`.

- **Dynamic Routes**: Files using square brackets like `[id].js` allow for dynamic parameters. For example, `pages/post/[id].js` is tied to `/post/:id`.

### Code Example: Pages and Routes

Consider the following file structure:

```plaintext
pages/
  ├── index.js
  │
  ├── post/
  │    └── [id].js
  │
  └── about.js
```

This structure corresponds to the following routes:

- **/index.js**: Serves as the landing page.
- **/post**: Serves the `post` route. Should contain code to handle non-`id` requests.
- **/about.js**: Direct route to the about page and is also treated as a route.

- **/post/abc**:
    - Maps to `pages/post/[id].js` with `id` as "abc".

### Special Roles

Some specific filenames or subdirectories have distinct routing roles.

- **`404.js`**: If present, Next.js uses this file to render a custom 404 page.
- **`_app.js`**: Sits at the top level. It is the master page that wraps other pages. Useful for including global styles or contexts.
- **`_document.js`**: Also on the top level, controls the server-rendered HTML document. Strong for continuous UI across pages.
<br>

## 6. In _Next.js_, how do you create a page that is rendered on the server for every request?

In Next.js, you can configure server-side rendering for pages that **always need fresh data**. A good example is a real-time dashboard or a data-driven landing page.

### Server-Side Rendering (SSR) vs. Static Generation (SG)

- **SSR**: This sends the request to the server on every visit to fetch fresh data and generate the HTML response. This approach is often necessary if the data changes frequently.
- **SG**: All requests serve pre-built HTML, ideal for content that doesn't change upon every visit. However, SG could become inappropriate for certain use-cases where real-time data is a requirement.

### Implementing SSR in Next.js

To enable SSR in Next.js, follow these practical steps:

1. **Configure Your Page's Component**:
   - Along with the standard static `getStaticProps` method, include `getServerSideProps` for server-side rendering.
   - This method runs on **every request**, making it suitable for dynamic data.
   - Ensure you **export** this method within your page component.

2. **Using the Data**:
   - `getServerSideProps` should return the necessary data, as is common for data-fetching methods in Next.js.
   - Data will be available as props to your page component.

3. **Deploy on a System that Supports SSR**:
   - Next.js delivers SSR out-of-the-box, which means you do not need to change any configurations to support this concern.
   - For efficiency, you may utilize a **caching mechanism** to shape data that stays constant between subsequent requests.

### Code Example: Page Requiring Server-Side Rendering

Here is the code:

1. **Page Component**: Pages/ServerSide.js

   ```javascript
   export default function ServerSide({ time }) {
     return <p>Current time: {time}</p>;
   }

   export async function getServerSideProps() {
     return {
       props: {
         time: new Date().toISOString(),
       },
     };
   }
   ```

   This code provides a `time` prop that updates on each request, showcasing server-side rendering.

2. **Linking in Your Application**: ParentComponent.js

   ```javascript
   import Link from 'next/link';

   export default function ParentComponent() {
     return (
       <div>
         <Link href="/ServerSide">Live Time Page</Link>
       </div>
     );
   }
   ```

   Users see the updated time each time they access the "Live Time Page."
<br>

## 7. What file extensions does _Next.js_ support for pages?

**Next.js** allows great flexibility in defining page components, supporting a variety of file extensions.

### Supported Extensions

- `.js`: Traditional JavaScript.
- `.jsx`: React with JavaScript.
- `.ts`: TypeScript.
- `.tsx`: React with TypeScript.

### Text formats

- `.mdx`: MDX for markdown with JSX extensions, enabling interactivity.

### Styling Components

- `.css`: Standard CSS.
- `.module.css`: CSS Modules for local scoping.
- `.scss`: SCSS, with its extended features and nesting.

### Data Fetching

- `.fetch.js`: Client-side data fetching.
- `.fetch.ts`: Client-side TypeScript data fetching.

### Error Handling

- `_error.*`: Special filename used to define custom error pages.

### Examples

- Page using `.jsx` and `.scss`

```jsx
// myPage.jsx
import React from 'react';
import styles from './myPage.module.scss';

const MyPage = () => {
  return <div className={styles.myPage}>Hello, SCSS!</div>;
};

export default MyPage;
```

- MDX file with React components and styling

```jsx
// myMDXPage.mdx
import MyComponent from '../components/MyComponent';
import './myMDXPageStyles.css';

# My MDX Page

<MyComponent />
```
<br>

## 8. How do _environment variables_ work in _Next.js_?

**Environment variables**  in Next.js are used to configure deployment-specific values.

#### Server, Build, and Client-side Env Vars

- **Server**: Required before app/web server starts, e.g., API keys.
- **Build**: For settings during the build process.
- **Client**: For global client-side use. Ensure no sensitive information here.

#### Configuring Environment Variables

1. Create an `.env.local` file in the project's root, listing the key-value pairs, each on a separate line:

   ```plaintext
   DB_HOST=localhost
   DB_USER=myuser
   DB_PASS=mypassword
   ```

2. Access the defined variables in code using `process.env.<VARIABLE_NAME>`:

   ```javascript
   console.log(process.env.DB_HOST);
   ```

3. Secure sensitive information on platforms like Vercel, by using their environment variable management tools.

4. Establishing Default Values: 

   By adding defaults in the code, Next.js ensures the app doesn't break if an environment variable is missing:

   ```javascript
   const dbHost = process.env.DB_HOST || 'localhost';
   ```
<br>

## 9. What is _Automatic Static Optimization_ in _Next.js_?

**Automatic Static Optimization** in **Next.js** enables pages to be automatically prerendered to static HTML as long as they do not fetch data from an external source.

This technique eliminates the need for runtime server rendering when a page only relies on client-side data.

### How It Works

1. **Page Analysis**: During build time, Next.js analyzes each page to determine if it fetches data. If not, the page is marked for static optimization. This often includes pages that only use internal state, client-side libraries, or context.

2. **Prerendering**: For pages marked as static, Next.js generates HTML files during the build process. These optimized pages are then served without requiring server-side rendering.

3. **Data Revalidate**: Static pages can contain stale data. Next.js uses a revalidate strategy to periodically refresh data. This is an ideal trade-off for many applications, balancing performance and data accuracy.

### Use Cases

- **Content Pages**: Ideal for content-rich pages, such as blogs or marketing content, where the data doesn't change frequently and a slight delay in updates is acceptable.
- **Marketing Campaigns**: For promotional campaigns or one-time events, where real-time data isn't a priority and quick initial page loads are crucial.

### Caching and Limitations

- **Client Cache**: Since individual users might be served cached static pages, client-side data can still become out-of-date. Techniques like incremental static regeneration (ISR) offer better freshness guarantees by updating pages at specified intervals.

- **Data Dependencies**: Pages dependent on fresh, external data need server-side or hybrid rendering. Otherwise, they risk serving outdated content.

### Code Example: Using `getStaticProps` & `getServerSideProps`

```javascript
// pages/product/[id].jsx

// Using getStaticProps for static optimization
export async function getStaticProps({ params }) {
  const product = await someFetchFunction(params.id);
  return {
    props: { product },
    revalidate: 10, // Regenerate every 10 seconds for a more updated page
  };
}

// If real-time data is an absolute must, use getServerSideProps instead
export async function getServerSideProps({ params }) {
  const product = await someFetchFunction(params.id);
  return { props: { product } };
}

function Product({ product }) {
  // Render product details
}
```
<br>

## 10. How does _file-based routing_ work in _Next.js_?

File-based routing in Next.js simplifies the organization of web application pages. By adhering to specific file naming conventions in tandem with dedicated folders, developers can seamlessly structure their Next.js projects.

### Mechanism

The presence of **JavaScript or Markdown files** under specific directories signals Next.js to configure pages within the application. For instance, navigational links can be established using file directory structure.

#### Key Directories

- The `pages` directory serves as the **root** where the application pages are located.
-  Secondary folders, such as `pages/blog`, represent **sections** within the application.

#### File Formats

- For a standard page, use a `.js` or `.jsx` extension, or `.ts`/`.tsx` for TypeScript.
-  For blog or documentation-like sections, `.mdx` (Markdown and React hybrid) can be employed, allowing content to render alongside components.

### Benefits and Limitations

#### Benefits:

- **Straightforward Navigation**: The project's structure in the `pages` directory mirrors the website's structure.
- **Modularity**: Sections are self-contained in separate directories, contributing to a more manageable and structured codebase.
- **Isomorphism Support**: The presence of both client- and server-side code fosters web applications that run on both the client and server, enhancing SEO and initial load times.

#### Limitations:

- **Limited to Core Directories**: Unique configurations might necessitate stepping beyond the capabilities of file-based routing, demanding additional setup.
- **Directory Depth Complexity**: Managing a large number of deeply nested directories can be challenging, potentially triggering comprehension or performance issues.

### Code Example: File-Based Routing

Consider a simple e-commerce website. 

Below is the directory structure:

```plaintext
pages/
|__ index.js
|__ cart.js
|__ products/
     |__ index.js
     |__ [product-id].js
```

In the above structure, we see:

- `pages/index.js`: Serves as the landing page.
- `pages/cart.js`: Represents the shopping cart accessible via `yoursite.com/cart`.
- `pages/products/index.js`: Defines the 'Products' landing page.
- `pages/products/[product-id].js`: Corresponds to a product details page, accessible with the product's unique identifier, for example, `yoursite.com/products/123`.
<br>

## 11. How do you create _dynamic routes_ in _Next.js_?

**Dynamic Routes** in **Next.js** allow you to render pages or components based on URL parameters. This feature is useful for scenarios involving user dashboards, blog posts, or product pages, where content is tied to specific, dynamic URLs.

### Route Configuration

- **File Naming Structure**:
  - For top-level dynamic routes, depending on whether it's a page or a client-only route, use `[param].js` or `[param].client.js` respectively. For parameterized routes nested under a directory, the filename format is `[[...slug]].js`.

- **Route** and **Query Parameters**:
  - To capture route parameters, use `[param]` for a single parameter or `[[...slug]]` for chains of parameters.
  - Additionally, you can use the `useRouter` hook or `router` object to extract query parameters like a typical URL query.
  
### Code Example: Dynamic Route Parameter Extraction

Here is the Next.js and React code:

```jsx
// pages/post/[id].js
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Post: {id}</div>;
}
```

The URL `/post/abc` would render "Post: abc".

### URL Configuration

- **Grouped Page Paths**: To group a set of dynamic routes under a shared path segment, define a parameterized `pages/[category]/[id].js` page:
  - Inner pages like `/food/sandwich`, `/drinks/cola`, and so on would be caught within that route.

- **Shallow Routing**: Shallow routing, enabled with the `shallow` option of **`router.push`** or **`next/link`**, keeps query data when navigating:
  - For instance, when on `/view?user=48&page=1` and clicking on `<Link href='/view?user=12'>`, the URL remains `/view?user=12&page=1`.

### Code Example: Shallow Routing

Here is the Next.js and React code:

```jsx
// pages/view.js
import Link from 'next/link';

export default function View() {
  return (
    <div>
      <Link href={{ pathname: '/view', query: { user: 10 } }} shallow>
        <a>User 10</a>
      </Link>
    </div>
  );
}
```

### Tool Recommendations

- **Visual Studio Code** with the **Path Autocomplete** and **vscode-react-docgen** extensions streamlines route and query param management.
<br>

## 12. Explain how to access _URL parameters_ in a dynamic route.

**Next.js** simplifies the process of handling dynamic routes and URL parameters. Here are the steps to access URL parameters in a dynamic route.

### 1. Define a Dynamic Route

For instance, create a dynamic route as `pages/post/[id].js` where `id` denotes the unique identifier you'll extract as the parameter.

### 2. Access the Parameters

To access the parameter, use `router.query` in your component file. Here is the code snippet:

```javascript
import { useRouter } from "next/router";

const DynamicPost = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post ID: {id}</p>;
};

export default DynamicPost;
```

### Use-Cases for Dynamic Parameters

- **Fetching Content**: Ideal for retrieving specific content from a database.
- **Pagination**: Useful for navigating through multiple pages of data.
- **SEO Optimization**: Offers cleaner and more descriptive URLs.
- **Custom URL Structures**: Great for creating custom URL structures catering to unique requirements.
<br>

## 13. Describe the functionality of the _`Link`_ component in _Next.js_.

The **`Link`** component in **Next.js** simplifies client-side navigation within your application, enhancing performance and user experience.

### Key Features

- **Prefetching**: `Link` automatically pre-caches linked pages that the user is likely to visit next. This optimizes load times during navigation.

- **Accessibility**: Assists with navigational cues for screen readers and keyboard users.

- **Code Splitting**: Next.js employs this strategy by default, loading only the JavaScript code necessary for the specific page being visited.

- **Intelligent Routing**: Handles link clicks gracefully, enhancing the user experience by providing polished navigational effects.

### Example: Code Splitting

In the following `Example.tsx`, you can see how Next.js handles code splitting under the hood.

```tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      {/* Other navigational links */}
    </div>
  );
};

export default Home;
```

The `AboutUs` component is only loaded when the user navigates to that specific route, showcasing effective code splitting:

```tsx
const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      {/* About Us content */}
    </div>
  );
}

export default AboutUs;
```

### When to Use Link Component

The **`Link`** component excels for in-app navigations, particularly when:
- Directing users from one section of an app to another.
- Positive feedback is needed on user actions, such as in form submission success screens.

However, it's not the ideal choice for:
- Opening links in new browser tabs/windows.
- Managing dynamic state or side-effects.
<br>

## 14. How do you handle _catch-all routes_ in _Next.js_?

**Catch-All Routes** in **Next.js** allow dynamic URL matching with flexible path parameters, empowering your app's routing system.

### Key Features

- **Dynamic Parameters**: Access route wildcard segments through the `...` rest parameter.
- **Matching Order**: Definition order determines the route precedence.
- **Fallback behavior**: Optionally configure fallback settings.

### Configuration

Next.js routing file (`pages/foo/[...bar].js`):

- **Root Catch-All**: Load for any unmatched path or `/foo` route without further subpaths.

  ```jsx
  export default function CatchAll() {
    // Logic for Root Catch-All
  }
  ```

- **Nested Catch-Alls**: Triggered when the root path is accessed along with subdirectories.

  ```jsx
  export default function NestedCatchAll() {
    // Logic for Nested Catch-All
  }
  ```

- **Fallback Pages**: Ideal for error handling or awaiting dynamic data.

  ```js
  export async function getServerSideProps() {
    // Data-fetching logic
    return { props: { data } };
  }

  export default function Fallback({ data }) {
    return <div>{data}</div>;
  }
  ```

### Fallback Modes

Specify fallback behavior in the `getStaticPaths` method:

- **True**: Generates paths at build time and handles missing routes as fallbacks (SSG-only).
- **False**: Precisely predefines page paths during build (no fallback).
- **'blocking'**: Handles fallbacks via server at run-time (SSR or SSG).
<br>

## 15. What is `getStaticProps` and when would you use it?

**`getStaticProps`** in Next.js allows you to **pre-render** a page at **build time** by fetching data from an API, database, or any other data source.

However, the static page isn't rebuilt until you trigger a **redeployment**. This makes `getStaticProps` beneficial when content doesn't require frequent updates and can be cached for improved performance.

By choosing **when** content is updated based on a request or a rebuild, you can optimize your build and improve on tasks such as **SEO**.

### When to Use `getStaticProps`

- **Content Persistence**: For content that doesn't change often, like a blog post, where you don't need to rebuild the page every time there's a change.
  
- **Data Fetching**: When data is fetched from a headless CMS, internal API, external services, or databases that are not linked in real-time.

- **Performance**: To benefit from caching and serve pages faster, especially for content that's accessed frequently.

### Code Example: Using `getStaticProps`

Here is the JavaScript code:

```javascript
export async function getStaticProps() {
  // Fetch data from an API
  const res = await fetch('https://example.com/data');
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: { data },
    // Re-generate the page every 60 seconds (optional)
    revalidate: 60,
  };
}

export default function MyStaticPage({ data }) {
  // Render data on the page
  // ...
}
```
<br>

## 23. How can you include _CSS modules_ in your _Next.js_ application?

CSS Modules are supported out of the box in Next.js with zero configuration. Any file ending in `.module.css` is automatically treated as a CSS Module, scoping all class names locally to avoid style conflicts.

### How CSS Modules Work

- Class names are locally scoped — no global collisions
- Next.js generates unique class names at build time (e.g., `Button_primary__3xQm1`)
- Works in both Pages Router and App Router

### Code Example: Creating and Using a CSS Module

```javascript
// styles/Button.module.css

.button {
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
}

.primary {
  background-color: #0070f3;
  color: white;
}

.secondary {
  background-color: #f0f0f0;
  color: #333;
}

.button:hover {
  opacity: 0.85;
}
```

```javascript
// components/Button.js
// Import the CSS module as a plain JS object

import styles from "@/styles/Button.module.css";

export default function Button({ label, variant = "primary", onClick }) {
  // Combine multiple module classes using template literals or clsx
  const className = `${styles.button} ${styles[variant]}`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
```

### Combining Multiple Classes with `clsx`

```javascript
// components/Card.module.css

.card {
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.highlighted {
  border: 2px solid #0070f3;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

```javascript
// components/Card.js
import clsx from "clsx";                     // npm install clsx
import styles from "./Card.module.css";

export default function Card({ children, highlighted, disabled }) {
  return (
    <div
      className={clsx(
        styles.card,
        highlighted && styles.highlighted,    // Conditionally apply classes
        disabled    && styles.disabled,
      )}
    >
      {children}
    </div>
  );
}
```

### Using CSS Modules in App Router Layouts

```javascript
// app/layout.module.css

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.header {
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
}
```

```javascript
// app/layout.js
import styles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <span>My App</span>
        </header>
        <main className={styles.container}>
          {children}
        </main>
      </body>
    </html>
  );
}
```

---

## 24. Compare and contrast _CSS-in-JS_ and _styled-components_ in the context of _Next.js_.

Both CSS-in-JS and styled-components let you write styles in JavaScript, but they differ in API, runtime behavior, and compatibility with Next.js App Router's Server Components.

### Key Differences at a Glance

| Feature | CSS-in-JS (e.g., Emotion) | styled-components |
|---|---|---|
| API Style | `css` prop / `styled` | Tagged template literals |
| SSR Support | Yes (with setup) | Yes (with setup) |
| App Router (RSC) | Limited — needs `"use client"` | Limited — needs `"use client"` |
| Runtime overhead | Small | Small |
| Zero-runtime option | Emotion static extraction | No |

### Code Example: Emotion (CSS-in-JS)

```javascript
// npm install @emotion/react @emotion/styled

"use client";                           // Required in App Router

import { css }    from "@emotion/react";
import styled     from "@emotion/styled";

// ── Method 1: css prop ────────────────────────────────────────────────────
const cardStyle = css`
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export function CardWithCssProp() {
  return <div css={cardStyle}>Card content</div>;
}

// ── Method 2: styled API (similar to styled-components) ───────────────────
const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "#0070f3" : "#f0f0f0")};
  color:       ${(props) => (props.primary ? "white"   : "#333")};
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

export function EmotionExample() {
  return (
    <div>
      <StyledButton primary>Primary</StyledButton>
      <StyledButton>Secondary</StyledButton>
    </div>
  );
}
```

### Code Example: styled-components

```javascript
// npm install styled-components
// npm install --save-dev babel-plugin-styled-components

"use client";

import styled, { keyframes, ThemeProvider } from "styled-components";

// ── Keyframe animation ─────────────────────────────────────────────────────
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0);     }
`;

// ── Styled components ──────────────────────────────────────────────────────
const Card = styled.div`
  padding: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.cardBg};
  animation: ${fadeIn} 0.3s ease;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const Button = styled.button`
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : "transparent"};
  color: ${({ variant, theme }) =>
    variant === "primary" ? "white" : theme.colors.primary};
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
  }
`;

// ── Theme setup ────────────────────────────────────────────────────────────
const theme = {
  colors: {
    primary: "#0070f3",
    text:    "#333",
    cardBg:  "#fff",
  },
};

export default function StyledComponentsExample() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Title>Hello styled-components</Title>
        <Button variant="primary">Click Me</Button>
      </Card>
    </ThemeProvider>
  );
}
```

### SSR Setup for styled-components in Next.js App Router

```javascript
// lib/StyledComponentsRegistry.js
// Required to avoid style flash on first load in App Router

"use client";

import { useState }              from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
```

```javascript
// app/layout.js
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
```

---

## 25. Can _global styles_ be used in _Next.js_? If so, how?

Yes, Next.js fully supports global styles. They apply site-wide rules like resets, typography, and CSS variables. The approach differs slightly between the Pages Router and App Router.

### Pages Router: Import in `_app.js`

```javascript
// styles/globals.css
/* CSS reset and global base styles */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Design tokens as CSS variables */
  --color-primary:    #0070f3;
  --color-secondary:  #ff4081;
  --color-bg:         #ffffff;
  --color-text:       #333333;
  --font-sans:        'Inter', system-ui, sans-serif;
  --border-radius-md: 8px;
  --spacing-md:       16px;
}

body {
  font-family: var(--font-sans);
  color:        var(--color-text);
  background:   var(--color-bg);
  line-height:  1.6;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

```javascript
// pages/_app.js
// Global CSS must be imported here in the Pages Router

import "@/styles/globals.css";      // Applied to every page automatically

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### App Router: Import in `app/layout.js`

```javascript
// app/globals.css
/* Same global CSS content as above */

*, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --color-primary: #0070f3;
  --color-text:    #333;
  --font-sans:     'Inter', system-ui, sans-serif;
}

body {
  font-family: var(--font-sans);
  color:        var(--color-text);
}
```

```javascript
// app/layout.js
// Import global CSS in the root layout — applies to the entire app

import "@/app/globals.css";

export const metadata = {
  title:       "My Next.js App",
  description: "A Next.js 15 application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Using Third-Party Global CSS (e.g., normalize.css)

```javascript
// app/layout.js

import "normalize.css";             // npm install normalize.css
import "@/app/globals.css";         // Your own globals come after

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Dark Mode with Global CSS Variables

```javascript
// app/globals.css

:root {
  --bg:   #ffffff;
  --text: #333333;
}

/* Apply dark theme when OS preference is dark */
@media (prefers-color-scheme: dark) {
  :root {
    --bg:   #1a1a1a;
    --text: #f0f0f0;
  }
}

/* Or toggle via a data attribute set by JS */
[data-theme="dark"] {
  --bg:   #1a1a1a;
  --text: #f0f0f0;
}

body {
  background-color: var(--bg);
  color:            var(--text);
  transition: background-color 0.3s, color 0.3s;
}
```

---

## 26. What is the _Image component_ and how does it help optimize performance in _Next.js_?

The `next/image` component is a drop-in replacement for the HTML `<img>` tag that automatically handles image optimization — resizing, format conversion, lazy loading, and layout shift prevention.

### Key Optimizations It Provides

- Converts images to modern formats (WebP, AVIF) automatically
- Lazy loads images below the fold by default
- Prevents Cumulative Layout Shift (CLS) by reserving space
- Serves correctly sized images per device via responsive `srcset`
- Caches optimized images on the server

### Code Example: Basic Usage

```javascript
// app/page.js
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Local image — width/height auto-detected at build time */}
      <Image
        src="/images/hero.jpg"        // From /public/images/hero.jpg
        alt="Hero banner"
        width={1200}
        height={600}
        priority                      // Load eagerly — above the fold
      />

      {/* Remote image — requires config in next.config.js */}
      <Image
        src="https://cdn.example.com/avatar.jpg"
        alt="User avatar"
        width={80}
        height={80}
      />
    </main>
  );
}
```

### Responsive Images with `fill`

```javascript
// components/HeroBanner.js
import Image from "next/image";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    // Parent must have position: relative and a defined size
    <div className={styles.bannerWrapper}>
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        fill                          // Image fills the parent container
        sizes="100vw"                 // Hint for browser — full viewport width
        style={{ objectFit: "cover" }}
        priority
      />
      <h1 className={styles.title}>Welcome</h1>
    </div>
  );
}
```

```css
/* HeroBanner.module.css */
.bannerWrapper {
  position: relative;                 /* Required for fill mode */
  width: 100%;
  height: 500px;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
}
```

### Configuring Remote Image Domains

```javascript
// next.config.js
// Required to allow images from external domains

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.example.com",
        pathname: "/images/**",       // Only allow this path pattern
      },
      {
        protocol: "https",
        hostname: "*.cloudinary.com", // Wildcard subdomain support
      },
    ],
    formats: ["image/avif", "image/webp"], // Prefer AVIF, fallback to WebP
  },
};

module.exports = nextConfig;
```

### Responsive `sizes` for Art Direction

```javascript
// components/ProductCard.js
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        sizes="
          (max-width: 640px)  100vw,
          (max-width: 1024px)  50vw,
          33vw
        "                             // Tells browser what size image to download
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
```

---

## 27. How does _code splitting_ work in _Next.js_?

Code splitting means breaking your JavaScript bundle into smaller chunks so the browser only downloads code needed for the current page. Next.js does this automatically at multiple levels.

### Automatic Code Splitting

```javascript
// next.config.js
// Next.js splits bundles automatically — no extra config needed for basics
// But you can tweak chunk behavior here

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lodash", "date-fns", "lucide-react"],
  },
};

module.exports = nextConfig;
```

```javascript
// app/page.js
// Each page/route in the App Router gets its own JS chunk automatically
// Only the code for this page is sent to the browser

export default function HomePage() {
  return <h1>Home Page</h1>;
}
```

### Dynamic Imports (`next/dynamic`) — Manual Code Splitting

```javascript
// app/dashboard/page.js
import dynamic from "next/dynamic";

// ── Heavy component loaded only when rendered ──────────────────────────────
const HeavyChart = dynamic(
  () => import("@/components/HeavyChart"),
  {
    loading: () => <p>Loading chart...</p>,   // Shown while chunk downloads
    ssr:     false,                           // Skip SSR (client-only)
  }
);

// ── Modal loaded on demand ─────────────────────────────────────────────────
const Modal = dynamic(() => import("@/components/Modal"));

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />                          {/* Chunk loads when page renders */}
      <Modal />
    </div>
  );
}
```

### Conditional Dynamic Import (Load Only When Needed)

```javascript
"use client";

import { useState }  from "react";
import dynamic       from "next/dynamic";

// Don't load the editor until the user clicks "Edit"
const RichTextEditor = dynamic(
  () => import("@/components/RichTextEditor"),
  { loading: () => <p>Loading editor...</p>, ssr: false }
);

export default function PostPage() {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      <h1>My Post</h1>

      <button onClick={() => setEditing(true)}>Edit</button>

      {/* RichTextEditor JS is NOT downloaded until editing === true */}
      {editing && <RichTextEditor />}
    </div>
  );
}
```

### Library-Level Code Splitting with Named Exports

```javascript
// Dynamic import of a named export from a module
// Avoids loading the entire library upfront

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("@/components/ComponentList").then((mod) => mod.SpecificComponent),
  { loading: () => <p>Loading...</p> }
);

export default function Page() {
  return <DynamicComponent />;
}
```

---

## 28. What are the methods provided by _Next.js_ for _prefetching pages_?

Prefetching loads page assets in the background before the user navigates, making transitions feel instant. Next.js provides automatic and manual prefetching mechanisms.

### Automatic Prefetching via `<Link>`

```javascript
// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <nav>
      {/*
        Next.js automatically prefetches the linked page
        when this <Link> enters the viewport (in production).
        No extra props needed — this is the default behavior.
      */}
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>

      {/* Disable prefetching for rarely visited pages */}
      <Link href="/admin" prefetch={false}>
        Admin (no prefetch)
      </Link>

      {/* Force prefetch even on mobile / slow connections */}
      <Link href="/pricing" prefetch={true}>
        Pricing (always prefetch)
      </Link>
    </nav>
  );
}
```

### Manual Prefetching with `useRouter`

```javascript
"use client";

import { useRouter } from "next/navigation";  // App Router
import { useEffect } from "react";

export default function ProductListPage({ products }) {
  const router = useRouter();

  // Prefetch the most likely next page when component mounts
  useEffect(() => {
    router.prefetch("/products/featured");    // Loads JS chunk for this route
  }, [router]);

  // Prefetch on hover — user intent signal
  function handleMouseEnter(productId) {
    router.prefetch(`/products/${productId}`);
  }

  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          onMouseEnter={() => handleMouseEnter(product.id)}  // Prefetch on hover
        >
          <a href={`/products/${product.id}`}>{product.name}</a>
        </li>
      ))}
    </ul>
  );
}
```

### Programmatic Navigation with Prefetch

```javascript
"use client";

import { useRouter }   from "next/navigation";
import { useState }    from "react";

export default function CheckoutFlow() {
  const router   = useRouter();
  const [step, setStep] = useState(1);

  // After completing step 1, prefetch step 2 proactively
  async function handleStep1Complete(formData) {
    await submitStep1(formData);

    // Start prefetching step 2 during the submission
    router.prefetch("/checkout/shipping");

    setStep(2);
    router.push("/checkout/shipping");        // Navigate immediately after
  }

  return (
    <div>
      {step === 1 && (
        <button onClick={handleStep1Complete}>Continue to Shipping</button>
      )}
    </div>
  );
}
```

---

## 29. What are the benefits of deploying a _Next.js_ application to _Vercel_?

Vercel is the company behind Next.js and offers a first-class deployment platform that automatically understands Next.js project conventions.

### Code Example: `vercel.json` Configuration

```javascript
// vercel.json
// Optional — Vercel auto-detects Next.js with zero config

{
  "framework": "nextjs",
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",

  "regions": ["iad1", "sfo1"],          // Deploy to multiple edge regions

  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options",        "value": "DENY"    }
      ]
    }
  ],

  "rewrites": [
    {
      "source":      "/old-path",
      "destination": "/new-path"
    }
  ],

  "env": {
    "DATABASE_URL": "@database-url"       // Reference Vercel environment secrets
  }
}
```

### Environment Variables per Deployment Stage

```javascript
// Set in Vercel dashboard or via Vercel CLI:
// vercel env add DATABASE_URL production
// vercel env add DATABASE_URL preview
// vercel env add DATABASE_URL development

// app/lib/db.js
// Vercel automatically injects env vars per environment

const dbUrl = process.env.DATABASE_URL;  // Different value per stage

export async function getDbConnection() {
  return connect(dbUrl);
}
```

### Deploying via Vercel CLI

```javascript
// Terminal commands (not JS, but key workflow):

// npm install -g vercel

// vercel                    ← Deploy to preview URL
// vercel --prod             ← Deploy to production

// next.config.js — Vercel-specific optimizations are auto-applied
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel automatically enables:
  // - Edge Network CDN for static assets
  // - Serverless Functions for API routes
  // - Edge Functions for middleware
  // - Image Optimization via their CDN
  // - Analytics and Speed Insights

  experimental: {
    ppr: true,                          // Partial Prerendering (Vercel-optimized)
  },
};

module.exports = nextConfig;
```

---

## 30. How do you configure _custom domain names_ when deploying a _Next.js_ application?

Custom domains are configured through your hosting provider's dashboard combined with DNS settings at your domain registrar. The Next.js app itself needs no code changes — only infrastructure setup is required.

### next.config.js — Preparing the App

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // If serving from a subdirectory (e.g., example.com/blog/)
  // basePath: "/blog",

  // Allow images from your custom domain
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:  "yourdomain.com",
      },
    ],
  },

  // Redirect www → non-www (or vice versa)
  async redirects() {
    return [
      {
        source:      "/:path*",
        has: [{ type: "host", value: "www.yourdomain.com" }],
        destination: "https://yourdomain.com/:path*",
        permanent:   true,            // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
```

### Middleware-Based Domain Routing (Multi-Tenant)

```javascript
// middleware.js
// Route different custom domains to different parts of your app

import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname  = request.headers.get("host") || "";
  const pathname  = request.nextUrl.pathname;

  // Map custom domains to internal app paths
  const domainMap = {
    "shop.example.com":  "/store",
    "blog.example.com":  "/blog",
    "admin.example.com": "/admin",
  };

  const targetPath = domainMap[hostname];

  if (targetPath && !pathname.startsWith(targetPath)) {
    // Rewrite the URL internally without changing what the user sees
    return NextResponse.rewrite(
      new URL(`${targetPath}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
```

---

## 31. Explain how to deploy a _Next.js_ app using a different hosting service, such as _AWS_ or _Netlify_.

Next.js can be deployed to any Node.js-compatible host. The approach differs by provider — some require a standalone build, others use adapters or export modes.

### Standalone Build for AWS / Docker / VPS

```javascript
// next.config.js
// Enables a self-contained build with all dependencies bundled

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",             // Creates .next/standalone — no node_modules needed
};

module.exports = nextConfig;
```

```javascript
// Dockerfile
// Deploy the standalone build inside a Docker container (AWS ECS, EC2, etc.)

FROM node:20-alpine AS base

# ── Build stage ────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── Production stage ───────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only the standalone output — much smaller image
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static     ./.next/static
COPY --from=builder /app/public           ./public

EXPOSE 3000

CMD ["node", "server.js"]           // Standalone server entry point
```

### Netlify Deployment

```javascript
// netlify.toml
// Netlify auto-detects Next.js — this file is optional but useful for overrides

[build]
  command   = "npm run build"
  publish   = ".next"

[build.environment]
  NODE_VERSION = "20"

# Netlify's Next.js plugin handles SSR, ISR, and Edge Functions automatically
[[plugins]]
  package = "@netlify/plugin-nextjs"

# Custom headers
[[headers]]
  for     = "/api/*"
  [headers.values]
    Cache-Control = "no-store"
```

### Static Export (for CDN-only hosting like S3, GitHub Pages)

```javascript
// next.config.js
// Use only if your app has NO server-side rendering or API routes

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:    "export",              // Generates /out directory of static HTML/CSS/JS
  trailingSlash: true,              // Needed for some static hosts
  images: {
    unoptimized: true,              // next/image optimization requires a server
  },
};

module.exports = nextConfig;
```

```javascript
// package.json
{
  "scripts": {
    "build":  "next build",         // Generates /out when output: "export" is set
    "deploy": "aws s3 sync out/ s3://your-bucket-name --delete"
  }
}
```

---

## 32. How do you integrate a CSS framework like _Tailwind CSS_ into a _Next.js_ project?

Tailwind CSS is the most popular utility-first CSS framework for Next.js. Since Next.js 14+, Tailwind is included as a default option in `create-next-app`, but it can also be added manually.

### Setup via `create-next-app`

```javascript
// Terminal:
// npx create-next-app@latest my-app --tailwind
// Tailwind is fully configured automatically — skip manual steps below
```

### Manual Installation

```javascript
// Terminal:
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p        ← generates tailwind.config.js + postcss.config.js
```

```javascript
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files to scan for class names
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Extend the default theme
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],  // Use Next.js font variable
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),   // Prose styles for markdown
    require("@tailwindcss/forms"),        // Better default form styles
  ],
};
```

```javascript
// app/globals.css
/* Add Tailwind directives — required */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom base styles alongside Tailwind */
@layer base {
  h1 { @apply text-3xl font-bold; }
  h2 { @apply text-2xl font-semibold; }
}

/* Reusable component classes */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
           transition-colors duration-200 font-medium;
  }

  .card {
    @apply rounded-xl border border-gray-200 bg-white shadow-sm p-6;
  }
}
```

```javascript
// app/page.js
// Use Tailwind utility classes directly in JSX

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Next.js + Tailwind
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card">
              <h2 className="text-lg font-semibold text-gray-800">Card {i}</h2>
              <p className="text-gray-600 mt-2">Card description here.</p>
              <button className="btn-primary mt-4">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

---

## 33. What are some popular _plugins_ for _Next.js_ and what functionalities do they add?

Next.js plugins are typically `next.config.js` wrappers or npm packages that extend the framework's build pipeline, add new capabilities, or integrate third-party tools.

### Code Example: Composing Multiple Plugins

```javascript
// next.config.js
// Plugins wrap the config object using Higher-Order Function pattern

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",  // npm run build:analyze
});

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Support .mdx files as pages
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  experimental: {
    optimizePackageImports: ["@heroicons/react", "lodash-es"],
  },
};

// Compose plugins right-to-left
module.exports = withBundleAnalyzer(withMDX(nextConfig));
```

### Plugin: `next-pwa` — Progressive Web App Support

```javascript
// next.config.js
const withPWA = require("next-pwa")({
  dest:            "public",          // Output service worker to /public
  register:        true,              // Auto-register service worker
  skipWaiting:     true,
  disable:         process.env.NODE_ENV === "development", // Off in dev
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.example\.com\/.*/i,
      handler:    "NetworkFirst",     // Try network, fallback to cache
      options: {
        cacheName:        "api-cache",
        expiration: { maxEntries: 50, maxAgeSeconds: 300 },
      },
    },
  ],
});

module.exports = withPWA({ reactStrictMode: true });
```

### Plugin: `@next/third-parties` — Optimized Third-Party Scripts

```javascript
// app/layout.js
// Official Next.js package for performance-safe third-party integrations

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Loads GA script using next/script strategy automatically */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />

        {/* Or use GTM */}
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
      </body>
    </html>
  );
}
```

---

## 34. How do you enable _TypeScript support_ in a _Next.js_ project?

Next.js has built-in TypeScript support. You can either start a new project with TypeScript or add it to an existing JavaScript project.

### New Project with TypeScript

```bash
# TypeScript is included by default in create-next-app
npx create-next-app@latest my-app --typescript
```

### Adding TypeScript to an Existing Project

```javascript
// 1. Install TypeScript and type definitions
// npm install --save-dev typescript @types/react @types/node @types/react-dom

// 2. Create an empty tsconfig.json — Next.js auto-populates it on next dev
// touch tsconfig.json

// 3. Rename files: .js → .ts / .jsx → .tsx
```

```javascript
// tsconfig.json
// Next.js manages required settings — you only need to customize extras

{
  "compilerOptions": {
    "target":      "ES2017",
    "lib":         ["dom", "dom.iterable", "esnext"],
    "allowJs":     true,             // Allow JS files alongside TS
    "skipLibCheck": true,
    "strict":      true,             // Recommended: enable strict type checking
    "noEmit":      true,
    "esModuleInterop":     true,
    "module":              "esnext",
    "moduleResolution":    "bundler",
    "resolveJsonModule":   true,
    "isolatedModules":     true,
    "jsx":                 "preserve",
    "incremental":         true,
    "plugins": [{ "name": "next" }], // Next.js TypeScript plugin for IDE hints

    // Path aliases
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

```typescript
// app/page.tsx
// Typed page component

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:       "Home",
  description: "My Next.js TypeScript app",
};

interface Props {
  searchParams: { query?: string };
}

export default function HomePage({ searchParams }: Props) {
  const query = searchParams.query ?? "";

  return (
    <main>
      <h1>Search: {query}</h1>
    </main>
  );
}
```

---

## 35. How do you implement a _custom server_ in _Next.js_ and why would you do so?

A custom server wraps Next.js inside your own Node.js HTTP server (Express, Fastify, etc.), giving you full control over request handling before Next.js processes them.

### When to Use a Custom Server

- Complex WebSocket support
- Custom request logging or tracing
- Multi-tenant routing not achievable with middleware
- Integrating with existing Express/Fastify apps

### Code Example: Custom Express Server

```javascript
// server.js
// Run with: node server.js (instead of next start)

const express    = require("express");
const next       = require("next");
const { createServer } = require("http");
const { Server }       = require("socket.io");

const dev  = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app  = next({ dev });
const handle = app.getRequestHandler();    // Next.js default handler

async function startServer() {
  await app.prepare();                     // Compile Next.js app

  const server     = express();
  const httpServer = createServer(server);

  // ── WebSocket / Socket.IO ─────────────────────────────────────────────
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("message", (data) => {
      io.emit("message", data);            // Broadcast to all clients
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });

  // ── Custom middleware ─────────────────────────────────────────────────
  server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  // ── Custom routes handled before Next.js ──────────────────────────────
  server.get("/health", (req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
  });

  // ── Pass everything else to Next.js ──────────────────────────────────
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  httpServer.listen(port, () => {
    console.log(`> Server running on http://localhost:${port}`);
  });
}

startServer().catch((err) => {
  console.error("Server failed to start:", err);
  process.exit(1);
});
```

```javascript
// package.json — Update start script to use custom server
{
  "scripts": {
    "dev":   "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

---

## 36. What are the considerations when setting up _internationalized routing_ in _Next.js_?

Internationalized (i18n) routing lets you serve different languages/locales from locale-specific URLs like `/en/about`, `/fr/about`, or `about` with locale detection via headers.

### App Router i18n Setup

```javascript
// middleware.js
// Detect locale from Accept-Language header and redirect accordingly

import { NextResponse }    from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";  // npm install @formatjs/intl-localematcher negotiator
import Negotiator          from "negotiator";                           // npm install negotiator

const locales        = ["en", "fr", "de", "ja"];
const defaultLocale  = "en";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip locale redirect for static files and Next.js internals
  const isStaticFile = /\.(.*)$/.test(pathname) || pathname.startsWith("/_next");
  if (isStaticFile) return;

  // Check if locale is already in the path
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    const locale  = getLocale(request);
    const newPath = `/${locale}${pathname}`;
    return NextResponse.redirect(new URL(newPath, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

```javascript
// app/[lang]/layout.js
// Dynamic [lang] segment wraps all localized pages

import { getDictionary } from "@/lib/dictionary";

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "fr" },
    { lang: "de" },
    { lang: "ja" },
  ];
}

export default async function LocaleLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);   // Load translations server-side

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
```

```javascript
// lib/dictionary.js
// Load translation JSON files on the server

import "server-only";                       // Prevent client-side import

const dictionaries = {
  en: () => import("@/locales/en.json").then((m) => m.default),
  fr: () => import("@/locales/fr.json").then((m) => m.default),
  de: () => import("@/locales/de.json").then((m) => m.default),
  ja: () => import("@/locales/ja.json").then((m) => m.default),
};

export async function getDictionary(locale) {
  return dictionaries[locale]?.() ?? dictionaries["en"]();
}
```

```javascript
// locales/en.json
{
  "nav":  { "home": "Home", "about": "About", "contact": "Contact" },
  "home": { "title": "Welcome", "subtitle": "Built with Next.js" }
}
```

```javascript
// app/[lang]/page.js
import { getDictionary } from "@/lib/dictionary";

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <h1>{dict.home.title}</h1>
      <p>{dict.home.subtitle}</p>
    </main>
  );
}
```

---

## 37. How do you handle _custom error pages_ in a _Next.js_ application?

Next.js lets you replace the default error pages with custom ones for 404, 500, and any other error state.

### App Router: Custom Error Pages

```javascript
// app/not-found.js
// Shown for any 404 / notFound() call in the app

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">← Back to Home</Link>
    </div>
  );
}
```

```javascript
// app/error.js
// Catches runtime errors in the component tree (Client Component required)

"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message || "An unexpected error occurred."}</p>

      {/* reset() remounts the segment — gives user a chance to recover */}
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
```

```javascript
// app/global-error.js
// Catches errors in the root layout itself (rare but important)

"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{ textAlign: "center", padding: "80px" }}>
          <h1>Critical Error</h1>
          <p>{error.message}</p>
          <button onClick={reset}>Reload</button>
        </div>
      </body>
    </html>
  );
}
```

```javascript
// Triggering notFound() manually in a Server Component
// app/products/[id]/page.js

import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();                       // Renders app/not-found.js
  }

  return <h1>{product.name}</h1>;
}
```

---

## 38. What folder structure is recommended for large-scale _Next.js_ applications?

A scalable Next.js project separates concerns by feature/domain, keeps components colocated with their styles and tests, and uses clear naming conventions.

```javascript
// Recommended folder structure for large-scale Next.js 15 (App Router) apps

/*
my-app/
├── app/                          ← App Router (routing + pages)
│   ├── (auth)/                   ← Route group (no URL segment)
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── dashboard/page.tsx
│   ├── api/
│   │   └── users/route.ts
│   ├── globals.css
│   ├── layout.tsx                ← Root layout
│   └── page.tsx                  ← Home page
│
├── components/                   ← Reusable UI components
│   ├── ui/                       ← Atomic design system primitives
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── Button.test.tsx
│   │   ├── Input/
│   │   └── Modal/
│   └── layout/                   ← Layout-level components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Sidebar.tsx
│
├── features/                     ← Feature-based modules (domain logic)
│   ├── auth/
│   │   ├── components/           ← Feature-specific components
│   │   ├── hooks/
│   │   ├── actions.ts            ← Server Actions
│   │   └── types.ts
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types.ts
│   └── cart/
│
├── lib/                          ← Utilities, helpers, third-party wrappers
│   ├── db.ts                     ← Database client (Prisma, Drizzle, etc.)
│   ├── auth.ts                   ← Auth configuration (NextAuth, etc.)
│   ├── validations.ts            ← Zod schemas
│   └── utils.ts                  ← General utility functions
│
├── hooks/                        ← Shared custom React hooks
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
│
├── store/                        ← Global client state (Zustand, Redux)
│   └── useAppStore.ts
│
├── types/                        ← Global TypeScript types
│   └── index.ts
│
├── public/                       ← Static assets
│   ├── images/
│   └── icons/
│
├── middleware.ts                 ← Edge middleware
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
*/

// Example: A feature module (features/products/actions.ts)
"use server";

import { db }        from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const name  = formData.get("name") as string;
  const price = Number(formData.get("price"));

  await db.product.create({ data: { name, price } });
  revalidatePath("/products");
}
```

---

## 39. How should you structure components in a _Next.js_ application for optimal _code reusability_?

Reusable components follow a clear hierarchy: atomic primitives → composite components → feature components → page layouts.

```typescript
// components/ui/Button/Button.tsx
// Atomic: smallest, most reusable unit — no business logic

import styles from "./Button.module.css";
import clsx   from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  "primary" | "secondary" | "ghost" | "danger";
  size?:     "sm" | "md" | "lg";
  loading?:  boolean;
  leftIcon?: React.ReactNode;
}

export function Button({
  variant  = "primary",
  size     = "md",
  loading  = false,
  leftIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, styles[variant], styles[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading  && <span className={styles.spinner} aria-hidden />}
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
    </button>
  );
}
```

```typescript
// components/ui/DataTable/DataTable.tsx
// Composite: combines primitives, generic via TypeScript generics

interface Column<T> {
  key:       keyof T;
  header:    string;
  render?:   (value: T[keyof T], row: T) => React.ReactNode;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data:      T[];
  columns:   Column<T>[];
  onRowClick?: (row: T) => void;
  loading?:  boolean;
  emptyMessage?: string;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  onRowClick,
  loading = false,
  emptyMessage = "No data found.",
}: DataTableProps<T>) {
  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>{emptyMessage}</p>;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} onClick={() => onRowClick?.(row)}>
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

```typescript
// features/products/components/ProductTable.tsx
// Feature component: uses DataTable with product-specific logic

import { DataTable } from "@/components/ui/DataTable/DataTable";
import { Button }    from "@/components/ui/Button/Button";
import type { Product } from "@/features/products/types";

interface ProductTableProps {
  products: Product[];
  onDelete: (id: string) => void;
}

export function ProductTable({ products, onDelete }: ProductTableProps) {
  const columns = [
    { key: "name"  as const, header: "Name"  },
    { key: "price" as const, header: "Price",
      render: (val: number) => `$${val.toFixed(2)}` },
    { key: "stock" as const, header: "Stock" },
    { key: "id"    as const, header: "Actions",
      render: (_: unknown, row: Product) => (
        <Button variant="danger" size="sm" onClick={() => onDelete(row.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return <DataTable data={products} columns={columns} />;
}
```

---

## 40. What are some _security best practices_ you should follow in a _Next.js_ app?

```javascript
// next.config.js
// 1. Security headers — applied to every response

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",           value: "DENY"                          },
          { key: "X-Content-Type-Options",     value: "nosniff"                      },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=()" },
          {
            key:   "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",  // Tighten in prod
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "connect-src 'self' https://api.example.com",
            ].join("; "),
          },
          {
            key:   "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",  // Force HTTPS
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

```typescript
// middleware.ts
// 2. Authentication guard + CSRF protection

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // ── CSRF: Verify origin for state-changing API routes ─────────────────
  if (
    pathname.startsWith("/api/") &&
    ["POST", "PUT", "PATCH", "DELETE"].includes(request.method)
  ) {
    const requestOrigin = request.headers.get("origin");
    if (requestOrigin !== origin) {
      return NextResponse.json({ error: "CSRF check failed" }, { status: 403 });
    }
  }

  // ── Auth: Protect private routes ──────────────────────────────────────
  const isPrivate = pathname.startsWith("/dashboard") || pathname.startsWith("/admin");
  const token     = request.cookies.get("session")?.value;

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
```

```typescript
// app/api/users/route.ts
// 3. Input validation with Zod + rate limiting

import { NextResponse } from "next/server";
import { z }            from "zod";                  // npm install zod

// Strict input schema — reject anything unexpected
const CreateUserSchema = z.object({
  name:  z.string().min(2).max(50).trim(),
  email: z.string().email().toLowerCase(),
  role:  z.enum(["user", "editor"]),                 // Never allow "admin" from client
});

export async function POST(request: Request) {
  const body   = await request.json();
  const result = CreateUserSchema.safeParse(body);

  // Reject invalid input with clear error messages
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", details: result.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, role } = result.data;         // Safe, validated data

  // Never expose internal errors to the client
  try {
    const user = await db.createUser({ name, email, role });
    return NextResponse.json({ id: user.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

---

## 41. How do you manage _global state_ in a _Next.js_ application without using external libraries?

Next.js supports React's built-in Context API combined with `useReducer` for structured global state, without any third-party library.

```typescript
// context/AppContext.tsx
"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from "react";

// ── Types ─────────────────────────────────────────────────────────────────
interface User {
  id:    string;
  name:  string;
  email: string;
  role:  "user" | "admin";
}

interface Notification {
  id:      string;
  message: string;
  type:    "success" | "error" | "info";
}

interface AppState {
  user:          User | null;
  theme:         "light" | "dark";
  notifications: Notification[];
}

type Action =
  | { type: "SET_USER";            payload: User | null          }
  | { type: "TOGGLE_THEME"                                       }
  | { type: "ADD_NOTIFICATION";    payload: Notification         }
  | { type: "REMOVE_NOTIFICATION"; payload: string               };

// ── Reducer ────────────────────────────────────────────────────────────────
const initialState: AppState = {
  user:          null,
  theme:         "light",
  notifications: [],
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };

    default:
      return state;
  }
}

// ── Context ────────────────────────────────────────────────────────────────
interface AppContextValue {
  state:            AppState;
  setUser:          (user: User | null) => void;
  toggleTheme:      () => void;
  addNotification:  (message: string, type?: Notification["type"]) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

// ── Provider ───────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setUser = useCallback((user: User | null) => {
    dispatch({ type: "SET_USER", payload: user });
  }, []);

  const toggleTheme = useCallback(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, []);

  const addNotification = useCallback(
    (message: string, type: Notification["type"] = "info") => {
      const id = crypto.randomUUID();
      dispatch({ type: "ADD_NOTIFICATION", payload: { id, message, type } });

      // Auto-remove after 4 seconds
      setTimeout(() => {
        dispatch({ type: "REMOVE_NOTIFICATION", payload: id });
      }, 4000);
    },
    []
  );

  return (
    <AppContext.Provider value={{ state, setUser, toggleTheme, addNotification }}>
      {children}
    </AppContext.Provider>
  );
}

// ── Custom hook with null guard ────────────────────────────────────────────
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used inside AppProvider");
  return context;
}
```

```typescript
// app/layout.tsx
import { AppProvider } from "@/context/AppContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
```

```typescript
// components/Header.tsx — Consuming the global state
"use client";

import { useAppContext } from "@/context/AppContext";

export function Header() {
  const { state, toggleTheme, addNotification } = useAppContext();

  return (
    <header>
      <span>Welcome, {state.user?.name ?? "Guest"}</span>
      <button onClick={toggleTheme}>
        {state.theme === "light" ? "🌙" : "☀️"}
      </button>
      <button onClick={() => addNotification("Saved!", "success")}>
        Save
      </button>
    </header>
  );
}
```

---

## 42. When should you consider using a state management library like _Redux_ in a _Next.js_ project?

```typescript
// store/index.ts
// Redux Toolkit setup — use when Context + useReducer becomes insufficient

import { configureStore }    from "@reduxjs/toolkit";
import { useDispatch,
         useSelector,
         type TypedUseSelectorHook } from "react-redux";

import cartReducer     from "./cartSlice";
import productsReducer from "./productsSlice";
import uiReducer       from "./uiSlice";

export const store = configureStore({
  reducer: {
    cart:     cartReducer,
    products: productsReducer,
    ui:       uiReducer,
  },
  // Redux DevTools is enabled automatically in development
});

export type RootState    = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;

// Typed hooks — use these instead of plain useDispatch / useSelector
export const useAppDispatch: () => AppDispatch             = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

```typescript
// store/cartSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id:       string;
  name:     string;
  price:    number;
  quantity: number;
}

interface CartState {
  items:   CartItem[];
  status:  "idle" | "loading" | "succeeded" | "failed";
  error:   string | null;
}

// Async thunk — handles complex async flows better than Context
export const syncCartWithServer = createAsyncThunk(
  "cart/sync",
  async (items: CartItem[], { rejectWithValue }) => {
    try {
      const res = await fetch("/api/cart/sync", {
        method: "POST",
        body:   JSON.stringify({ items }),
        headers: { "Content-Type": "application/json" },
      });
      return await res.json();
    } catch (err) {
      return rejectWithValue("Failed to sync cart");
    }
  }
);

const cartSlice = createSlice({
  name:         "cart",
  initialState: { items: [], status: "idle", error: null } as CartState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(syncCartWithServer.pending,   (state) => { state.status = "loading";   })
      .addCase(syncCartWithServer.fulfilled, (state) => { state.status = "succeeded"; })
      .addCase(syncCartWithServer.rejected,  (state, action) => {
        state.status = "failed";
        state.error  = action.payload as string;
      });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

```typescript
// app/StoreProvider.tsx
// Required in App Router — Redux Provider must be a Client Component

"use client";

import { useRef }  from "react";
import { Provider } from "react-redux";
import { store }   from "@/store";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
```

---

## 43. Explain how to _persist state_ between page transitions in a _Next.js_ app.

```typescript
// ── Method 1: URL search params (shareable, bookmarkable) ─────────────────
// app/products/page.tsx

"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback }                              from "react";

export default function ProductsPage() {
  const router       = useRouter();
  const pathname     = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const page     = Number(searchParams.get("page") ?? "1");

  // Update URL without losing other params
  const setFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  return (
    <div>
      <select value={category} onChange={(e) => setFilter("category", e.target.value)}>
        <option value="all">All</option>
        <option value="shoes">Shoes</option>
        <option value="bags">Bags</option>
      </select>
    </div>
  );
}
```

```typescript
// ── Method 2: Zustand with localStorage persistence ───────────────────────
// npm install zustand

// store/useUserPrefsStore.ts
import { create }          from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserPrefs {
  theme:         "light" | "dark";
  language:      string;
  sidebarOpen:   boolean;
  setTheme:      (theme: "light" | "dark") => void;
  setLanguage:   (lang: string) => void;
  toggleSidebar: () => void;
}

export const useUserPrefsStore = create<UserPrefs>()(
  persist(
    (set) => ({
      theme:       "light",
      language:    "en",
      sidebarOpen: true,

      setTheme:      (theme)   => set({ theme }),
      setLanguage:   (language) => set({ language }),
      toggleSidebar: ()        => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
    }),
    {
      name:    "user-prefs",                      // localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({                   // Only persist these fields
        theme:    state.theme,
        language: state.language,
      }),
    }
  )
);
```

```typescript
// ── Method 3: Cookie-based persistence (survives hard refresh + SSR) ──────
// app/actions/theme.ts

"use server";

import { cookies } from "next/headers";

export async function setThemeCookie(theme: "light" | "dark") {
  const cookieStore = cookies();
  cookieStore.set("theme", theme, {
    maxAge:   60 * 60 * 24 * 365,  // 1 year
    httpOnly: false,                // Must be false if JS needs to read it
    secure:   process.env.NODE_ENV === "production",
    sameSite: "lax",
    path:     "/",
  });
}

export async function getThemeCookie(): Promise<"light" | "dark"> {
  const cookieStore = cookies();
  return (cookieStore.get("theme")?.value as "light" | "dark") ?? "light";
}
```

```typescript
// app/layout.tsx — Read theme cookie on the server to prevent flash
import { getThemeCookie } from "@/app/actions/theme";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = await getThemeCookie();

  return (
    <html lang="en" data-theme={theme}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 44. What are the advantages of using _TypeScript_ in a _Next.js_ project?

```typescript
// TypeScript advantages demonstrated through practical Next.js examples

// ── 1. Typed Server Actions ────────────────────────────────────────────────
// app/actions/product.ts
"use server";

import { z }            from "zod";
import { revalidatePath } from "next/cache";

const ProductSchema = z.object({
  name:     z.string().min(2).max(100),
  price:    z.number().positive(),
  category: z.enum(["electronics", "clothing", "food"]),
});

// Return type is inferred — TS catches mismatches at compile time
export async function createProduct(
  formData: FormData
): Promise<{ success: true; id: string } | { success: false; error: string }> {
  const raw = {
    name:     formData.get("name"),
    price:    Number(formData.get("price")),
    category: formData.get("category"),
  };

  const result = ProductSchema.safeParse(raw);

  if (!result.success) {
    return { success: false, error: result.error.message };
  }

  const product = await db.product.create({ data: result.data });
  revalidatePath("/products");
  return { success: true, id: product.id };
}
```

```typescript
// ── 2. Typed API Route Handlers ────────────────────────────────────────────
// app/api/products/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: { id: string };
}

interface ProductResponse {
  id:       string;
  name:     string;
  price:    number;
  category: string;
}

// TypeScript enforces correct return shape
export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse<ProductResponse | { error: string }>> {
  const product = await db.product.findUnique({ where: { id: params.id } });

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
```

```typescript
// ── 3. Typed page props (App Router) ──────────────────────────────────────
// app/products/[id]/page.tsx

import type { Metadata } from "next";

interface PageProps {
  params:       { id: string };
  searchParams: { tab?: string; ref?: string };
}

// Type-safe metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title:       product?.name ?? "Product Not Found",
    description: product?.description,
  };
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const product = await getProduct(params.id);    // params.id is always string
  const tab     = searchParams.tab ?? "details";  // searchParams.tab is string | undefined

  return <div>{product?.name}</div>;
}
```

---

## 45. How do you add type definitions for a _Next.js page's props_?

```typescript
// ── Pages Router: Typed props with InferGetServerSidePropsType ────────────
// pages/products/[id].tsx

import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

interface Product {
  id:    string;
  name:  string;
  price: number;
}

// Typed data fetching function
export const getServerSideProps: GetServerSideProps<{
  product: Product;
}> = async (context: GetServerSidePropsContext) => {
  const { id } = context.params as { id: string };

  const res     = await fetch(`https://api.example.com/products/${id}`);
  const product = await res.json() as Product;

  return { props: { product } };
};

// Props type is automatically inferred from getServerSideProps return type
export default function ProductPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { product } = props;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
}
```

```typescript
// ── Pages Router: Typed Static Props ─────────────────────────────────────
// pages/blog/[slug].tsx

import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

interface Post {
  slug:    string;
  title:   string;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths:    posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async (context) => {
  const slug = context.params?.slug as string;
  const post = await getPostBySlug(slug);

  if (!post) return { notFound: true };

  return { props: { post }, revalidate: 60 };
};

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

---

## 46. What steps are involved in migrating an existing _Next.js_ project to _TypeScript_?

```typescript
// Step 1: Install TypeScript and type definitions
// npm install --save-dev typescript @types/react @types/node @types/react-dom

// Step 2: Create tsconfig.json (Next.js auto-fills it on first `next dev`)
// touch tsconfig.json

// Step 3: Create a type declaration file for environment variables
// env.d.ts  ← placed at the project root

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV:         "development" | "production" | "test";
      DATABASE_URL:     string;
      NEXTAUTH_SECRET:  string;
      NEXTAUTH_URL:     string;
      NEXT_PUBLIC_API_URL: string;   // NEXT_PUBLIC_ prefix = exposed to browser
    }
  }
}

export {};
```

```typescript
// Step 4: Rename files incrementally — .js → .ts / .jsx → .tsx
// Start with utility files (lowest risk), then components, then pages

// BEFORE: lib/utils.js
export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

// AFTER: lib/utils.ts
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
```

```typescript
// Step 5: Fix implicit `any` types — common migration issues

// BEFORE: components/UserCard.jsx
export default function UserCard({ user, onSelect }) {
  return (
    <div onClick={() => onSelect(user.id)}>
      {user.name}
    </div>
  );
}

// AFTER: components/UserCard.tsx
interface User {
  id:    string;
  name:  string;
  email: string;
}

interface UserCardProps {
  user:     User;
  onSelect: (id: string) => void;
}

export default function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div onClick={() => onSelect(user.id)}>
      {user.name}
    </div>
  );
}
```

```typescript
// Step 6: Use allowJs: true during migration to run JS and TS side by side
// tsconfig.json

{
  "compilerOptions": {
    "allowJs":  true,               // Allow .js files — remove once migration is done
    "strict":   false,              // Start lenient, tighten after migration is complete
    "skipLibCheck": true
  }
}
```

---

## 47. Can you describe how to use _TypeScript_ for defining _API route handlers_ in _Next.js_?

```typescript
// app/api/users/route.ts
// Full TypeScript example for an App Router Route Handler

import { NextRequest, NextResponse } from "next/server";
import { z }                         from "zod";

// ── Shared types ──────────────────────────────────────────────────────────
interface User {
  id:        string;
  name:      string;
  email:     string;
  createdAt: string;
}

interface PaginatedResponse<T> {
  data:  T[];
  meta:  { page: number; limit: number; total: number };
}

// ── Input validation schema ────────────────────────────────────────────────
const CreateUserSchema = z.object({
  name:  z.string().min(2).max(50),
  email: z.string().email(),
});

type CreateUserInput = z.infer<typeof CreateUserSchema>;

// ── GET /api/users ─────────────────────────────────────────────────────────
export async function GET(
  request: NextRequest
): Promise<NextResponse<PaginatedResponse<User> | { error: string }>> {
  const { searchParams } = request.nextUrl;
  const page  = parseInt(searchParams.get("page")  ?? "1",  10);
  const limit = parseInt(searchParams.get("limit") ?? "10", 10);

  const users = await db.user.findMany({
    skip:  (page - 1) * limit,
    take:  limit,
  });

  const total = await db.user.count();

  return NextResponse.json({
    data: users,
    meta: { page, limit, total },
  });
}

// ── POST /api/users ────────────────────────────────────────────────────────
export async function POST(
  request: NextRequest
): Promise<NextResponse<User | { error: string; details?: unknown }>> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = CreateUserSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed", details: result.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email }: CreateUserInput = result.data;
  const newUser = await db.user.create({ data: { name, email } });

  return NextResponse.json(newUser, { status: 201 });
}
```

```typescript
// app/api/users/[id]/route.ts
// Typed dynamic route handler

import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: { id: string } };

type UpdateUserBody = Partial<{ name: string; email: string }>;

export async function PUT(
  request: NextRequest,
  { params }: RouteContext
): Promise<NextResponse> {
  const body: UpdateUserBody = await request.json();
  const updated = await db.user.update({
    where: { id: params.id },
    data:  body,
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: RouteContext
): Promise<NextResponse<{ message: string } | { error: string }>> {
  await db.user.delete({ where: { id: params.id } });
  return NextResponse.json({ message: `User ${params.id} deleted` });
}
```

---

## 48. How do you enforce _type checking_ for dynamic routes in _Next.js_ using _TypeScript_?

```typescript
// app/products/[id]/page.tsx
// Type-safe dynamic route params in App Router

interface ProductPageParams {
  params:       { id: string };
  searchParams: { color?: string; size?: string };
}

// TypeScript ensures params.id is always accessed correctly
export default async function ProductPage({
  params,
  searchParams,
}: ProductPageParams) {
  const { id }    = params;
  const { color } = searchParams;

  const product = await getProductById(id);
  return <div>{product.name} — {color ?? "default color"}</div>;
}
```

```typescript
// app/shop/[category]/[subcategory]/page.tsx
// Nested dynamic segments — each must be typed individually

interface NestedRouteParams {
  params: {
    category:    string;
    subcategory: string;
  };
}

export default function ShopPage({ params }: NestedRouteParams) {
  const { category, subcategory } = params;

  return <h1>{category} / {subcategory}</h1>;
}
```

```typescript
// app/blog/[...slug]/page.tsx
// Catch-all route — params.slug is always string[]

interface CatchAllParams {
  params: { slug: string[] };
}

export default function BlogPage({ params }: CatchAllParams) {
  const breadcrumb = params.slug.join(" > ");   // e.g., "tech > nextjs > routing"

  return <h1>{breadcrumb}</h1>;
}
```

```typescript
// app/docs/[[...path]]/page.tsx
// Optional catch-all — params.path can be undefined

interface OptionalCatchAllParams {
  params: { path?: string[] };
}

export default function DocsPage({ params }: OptionalCatchAllParams) {
  const section = params.path?.[0] ?? "introduction";
  const page    = params.path?.[1] ?? "overview";

  return <h1>{section} / {page}</h1>;
}
```

```typescript
// lib/routes.ts
// Type-safe route builder — eliminates hardcoded URL strings across the app

export const routes = {
  home:       ()                   => "/",
  product:    (id: string)         => `/products/${id}`,
  category:   (cat: string)        => `/shop/${cat}`,
  blogPost:   (slug: string[])     => `/blog/${slug.join("/")}`,
  userOrders: (userId: string,
               orderId?: string)   =>
    orderId ? `/users/${userId}/orders/${orderId}` : `/users/${userId}/orders`,
} as const;

// Usage — type errors caught at compile time:
// routes.product(123)         ← TS Error: number is not assignable to string
// routes.product("abc-123")   ← OK
```

---

## 49. How does _Next.js_ handle automatic _type generation_ for pages and API routes when using _TypeScript_?

```typescript
// Next.js generates types in .next/types/ at build/dev time
// These power IDE autocomplete and catch type errors automatically

// ── 1. next-env.d.ts — auto-generated, do NOT edit ────────────────────────
// next-env.d.ts (auto-generated at project root)
/// <reference types="next" />
/// <reference types="next/image-types/global" />
// NOTE: This file should not be edited and should be in your .gitignore


// ── 2. Type-safe Link href (Next.js 13+) ──────────────────────────────────
// When you have a typed route manifest, Next.js can validate Link hrefs

// next.config.js — enable experimental typed routes
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,              // Generates route manifest with all valid paths
  },
};

module.exports = nextConfig;
```

```typescript
// With typedRoutes: true, Next.js generates a RouteImpl type
// that covers all static + dynamic routes in your app

// app/components/Nav.tsx
import Link from "next/link";

export function Nav() {
  return (
    <nav>
      {/* TypeScript validates that /about exists as a real route */}
      <Link href="/about">About</Link>
      <Link href="/products/123">Product</Link>

      {/* TS Error if route doesn't exist — e.g., /typo would fail */}
      {/* <Link href="/typo">Bad Link</Link> */}
    </nav>
  );
}
```

```typescript
// ── 3. Typed generateMetadata ─────────────────────────────────────────────
// Next.js provides the Metadata type for full autocomplete on metadata fields

import type { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: { id: string };
}

// Return type Metadata is fully typed — IDE shows all available fields
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata             // Access parent metadata
): Promise<Metadata> {
  const product = await getProduct(params.id);
  const parentImages = (await parent).openGraph?.images ?? [];

  return {
    title:       product.name,
    description: product.description,
    openGraph: {
      images: [product.imageUrl, ...parentImages],
    },
    robots: {
      index:  true,
      follow: true,
    },
  };
}
```

```typescript
// ── 4. Typed Server Action return types ────────────────────────────────────
// app/actions/contact.ts

"use server";

// Next.js infers Server Action types automatically when imported in components
export async function submitContactForm(
  prevState: { message: string } | null,
  formData: FormData
): Promise<{ message: string }> {
  const email   = formData.get("email")   as string;
  const message = formData.get("message") as string;

  await sendEmail({ email, message });
  return { message: "Email sent successfully!" };
}

// app/contact/ContactForm.tsx — useActionState infers types from the action
"use client";
import { useActionState }    from "react";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  // state type is inferred as { message: string } | null
  const [state, action] = useActionState(submitContactForm, null);

  return (
    <form action={action}>
      <input name="email"   type="email"    required />
      <textarea name="message"              required />
      <button type="submit">Send</button>
      {state?.message && <p>{state.message}</p>}
    </form>
  );
}
```

---

## 50. What is the role of the `tsconfig.json` file in a Next.js project with TypeScript, and how do you customize it for your specific needs?

```typescript
// tsconfig.json is the TypeScript configuration file that controls how TypeScript
// compiles your code, what files are included, and how strict type checking is.
// Next.js auto-generates a sensible default — but you can customize it deeply.

// ── 1. Next.js default tsconfig.json ─────────────────────────────────────
{
  "compilerOptions": {
    // --- Output & Module Format ---
    "target": "ES2017",               // Compile to ES2017 (async/await kept as-is)
    "lib": ["dom", "dom.iterable", "esnext"], // Type definitions available globally
    "module": "esnext",              // Use ESModules (import/export)
    "moduleResolution": "bundler",   // Resolve modules like a bundler (Webpack/Turbopack)
    "resolveJsonModule": true,       // Allow: import data from './data.json'

    // --- Type Checking ---
    "strict": true,                  // Enables ALL strict checks (recommended)
    "noEmit": true,                  // Don't output JS — Next.js handles that
    "isolatedModules": true,         // Each file transpiled independently (required by SWC)

    // --- JSX ---
    "jsx": "preserve",               // Leave JSX as-is — Next.js transforms it

    // --- Interop ---
    "allowJs": true,                 // Allow .js files alongside .ts
    "esModuleInterop": false,        // Not needed with moduleResolution: bundler
    "allowSyntheticDefaultImports": true, // import React from 'react' without error

    // --- Paths (auto-set when you use src/ or path aliases) ---
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]                 // Enables: import { fn } from '@/lib/utils'
    },

    // --- Plugins ---
    "plugins": [
      { "name": "next" }             // Next.js Language Server plugin for IDE hints
    ]
  },

  "include": [
    "next-env.d.ts",                 // Auto-generated Next.js types (do NOT edit)
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"            // Generated route/page types
  ],
  "exclude": [
    "node_modules"
  ]
}
```

```typescript
// ── 2. Strict mode — what it actually enables ─────────────────────────────

// "strict": true is shorthand for ALL of these:
{
  "compilerOptions": {
    "strictNullChecks":          true, // null/undefined not assignable to other types
    "strictFunctionTypes":       true, // Stricter function parameter checking
    "strictBindCallApply":       true, // Typed .bind(), .call(), .apply()
    "strictPropertyInitialization": true, // Class properties must be initialized
    "noImplicitAny":             true, // No silent 'any' — must be explicit
    "noImplicitThis":            true, // 'this' must have a known type
    "alwaysStrict":              true, // Emits "use strict" in every file
    "useUnknownInCatchVariables": true // catch (e) → e is 'unknown', not 'any'
  }
}

// Example: strictNullChecks in action
async function getUser(id: string) {
  const user = await db.find(id);  // Returns User | null

  // ❌ Error without strictNullChecks awareness:
  console.log(user.name);          // user could be null!

  // ✅ Correct — guard the null case:
  if (!user) return null;
  console.log(user.name);          // Safe — TypeScript knows user is User here
}
```

```typescript
// ── 3. Path aliases — cleaner imports across your project ─────────────────

// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*":           ["./*"],            // @/components/Button
      "@components/*": ["./components/*"], // @components/Button
      "@lib/*":        ["./lib/*"],        // @lib/utils
      "@hooks/*":      ["./hooks/*"],      // @hooks/useAuth
      "@types/*":      ["./types/*"]       // @types/api
    }
  }
}

// Before path aliases — deeply nested relative imports:
import { Button }  from "../../../../components/ui/Button";
import { fetcher } from "../../../lib/api/fetcher";
import { useAuth } from "../../hooks/useAuth";

// After path aliases — clean and refactor-safe:
import { Button }  from "@/components/ui/Button";
import { fetcher } from "@/lib/api/fetcher";
import { useAuth } from "@/hooks/useAuth";

// ⚠️ Also update next.config.js if using Webpack (Turbopack reads tsconfig natively):
// next.config.js
const nextConfig = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};
```

```typescript
// ── 4. Separate configs for different environments ────────────────────────

// tsconfig.json — base config (shared settings)
{
  "compilerOptions": {
    "strict":   true,
    "target":   "ES2017",
    "noEmit":   true,
    "baseUrl":  ".",
    "paths": { "@/*": ["./*"] }
  }
}

// tsconfig.server.json — for Node.js API / scripts (emits JS output)
{
  "extends": "./tsconfig.json",         // Inherit all base settings
  "compilerOptions": {
    "noEmit":          false,           // We DO want output here
    "module":          "commonjs",      // Node requires CommonJS
    "outDir":          "./dist/server",
    "target":          "ES2020",
    "types":           ["node"],        // Node.js global types
    "esModuleInterop": true
  },
  "include": ["server/**/*.ts", "scripts/**/*.ts"],
  "exclude": ["node_modules", "app", "pages"]
}

// tsconfig.test.json — for Jest/Vitest
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx":   "react-jsx",              // Tests need full JSX transform
    "types": ["jest", "node", "@testing-library/jest-dom"]
  },
  "include": [
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.spec.ts",
    "jest.setup.ts"
  ]
}
```

```typescript
// ── 5. Useful non-strict additions for production hardening ───────────────

{
  "compilerOptions": {
    // --- Catch common bugs ---
    "noUnusedLocals":          true,  // Error on declared-but-unused variables
    "noUnusedParameters":      true,  // Error on declared-but-unused function params
    "noImplicitReturns":       true,  // All code paths must return a value
    "noFallthroughCasesInSwitch": true, // switch cases must break/return

    // --- Module safety ---
    "verbatimModuleSyntax":    true,  // Enforces 'import type' for type-only imports
    "forceConsistentCasingInFileNames": true, // Prevents case-sensitivity bugs

    // --- Incremental builds ---
    "incremental":             true,  // Cache build info for faster rebuilds
    "tsBuildInfoFile":         ".next/cache/tsconfig.tsbuildinfo"
  }
}

// verbatimModuleSyntax in practice:
// ❌ Error — value import used only as a type (gets erased at runtime anyway)
import { User } from "@/types/user";
const getUser = (): User => { /* ... */ };

// ✅ Correct — explicit type import (tree-shaken, zero runtime cost)
import type { User } from "@/types/user";
const getUser = (): User => { /* ... */ };
```

```typescript
// ── 6. Global type augmentation via tsconfig includes ─────────────────────

// types/global.d.ts — extend built-ins or declare module shapes
declare global {
  // Add custom property to process.env with full type safety
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL:    string;
      NEXTAUTH_SECRET: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}

// types/modules.d.ts — type untyped third-party packages
declare module "some-untyped-library" {
  export function doSomething(input: string): Promise<void>;
}

// tsconfig.json — make sure these files are always included
{
  "compilerOptions": { /* ... */ },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "types/**/*.d.ts"       // ← picks up all your global declarations
  ]
}

// Now across your entire app — fully typed env vars:
const url = process.env.DATABASE_URL;    // string (not string | undefined)
const api = process.env.NEXT_PUBLIC_API_URL; // string
```

**Key Takeaways:**

| Setting | Purpose |
|---|---|
| `"strict": true` | Enables all strict type checks — always recommended |
| `"noEmit": true` | Next.js compiles JS; TypeScript only type-checks |
| `"moduleResolution": "bundler"` | Matches how Webpack/Turbopack resolves modules |
| `"isolatedModules": true` | Required for SWC transpilation (each file is independent) |
| `"paths"` | Enables clean `@/` aliases instead of `../../../` |
| `"incremental": true` | Caches build info for faster subsequent type checks |
| Separate `tsconfig.*.json` | Different targets for app, server scripts, and tests |


#### Explore all 50 answers here 👉 [Devinterview.io - Next.js](https://devinterview.io/questions/web-and-mobile-development/next-interview-questions)

<br>

<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>
