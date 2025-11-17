# Domain Operation Simulator

---

# 📌 Problem Statement — `processDomainOperations`

Implement a function **`processDomainOperations(operations)`** to simulate a simplified DNS-like system.

Your function must support three operations:

### ✅ **1. PUT domain IP**

* Store the IP for the domain.
* If the domain already exists, overwrite the old IP.

### ✅ **2. GET domain**

* Return the stored IP.
* If the domain doesn’t exist → return `"404"`.

### ✅ **3. COUNT suffix**

* Count how many **stored domains end with the specified suffix**.
* Example: suffix `"apple.com"` should match:

  * `"www.apple.com"`
  * `"jobs.apple.com"`

Operations must run **in order**, and you must return an array containing results for **GET** and **COUNT** operations **in order of appearance**.

---

# 🧩 Function Signature

```ts
function processDomainOperations(operations: string[][]): string[]
```

---

# 📝 Arguments

### **operations**

* A 2D array where each inner array represents one operation.

### Format per operation:

| Operation | Format                | Example                            |
| --------- | --------------------- | ---------------------------------- |
| **PUT**   | `["PUT", domain, IP]` | `["PUT", "google.com", "8.8.8.8"]` |
| **GET**   | `["GET", domain]`     | `["GET", "google.com"]`            |
| **COUNT** | `["COUNT", suffix]`   | `["COUNT", "com"]`                 |

---

# 🔁 Returns

A flat array of strings containing:

* For every **GET** → the IP or `"404"`
* For every **COUNT** → the count as a string

Order must follow the input operations.

---

# 📌 Constraints & Notes

* Domains and IPs are valid formatted strings.
* `operations.length ≤ 100000`
* Multiple `PUT` for same domain overwrite the IP.
* `COUNT` is **case-sensitive**.
* Suffix may be a top-level domain (`"com"`).
* Only domains that **end exactly with the suffix** count.

---

# 🧪 Example

### **Input**

```js
[
  ["PUT", "www.devtools.tech", "10.20.30.40"],
  ["PUT", "jobs.devtools.tech", "10.20.30.50"],
  ["PUT", "sites.google.com", "142.258.145.693"],
  ["GET", "meta.com"],
  ["GET", "www.devtools.tech"],
  ["COUNT", "devtools.tech"],
  ["COUNT", "tech"]
]
```

### **Output Explanation**

* `GET meta.com` → domain not found → `"404"`
* `GET www.devtools.tech` → `"10.20.30.40"`
* `COUNT devtools.tech` → 2 matches
* `COUNT tech` → 2 matches (`www.devtools.tech`, `jobs.devtools.tech`)

### **Final Output**

```js
["404", "10.20.30.40", "2", "2"]
```

---

---

# ⭐ Bonus / Follow-ups

Your system can be extended with more advanced DNS-like features, such as:

### 🔹 **1. Wildcard domain matching**

Support patterns like:

* `"*.apple.com"` → matches all subdomains
  Examples matched:

  * `"www.apple.com"`
  * `"jobs.apple.com"`
  * `"mail.apple.com"`

### 🔹 **2. Exact domain + path matching**

Extend domain strings to include path segments, such as:

* `"www.apple.com/home"`
* `"google.com/search"`

Where:

* `"COUNT apple.com"` should still work
* `"GET www.apple.com/home"` should correctly resolve paths

---

# 🧠 Solution

```js
const OPERATIONS = {
  PUT: 'PUT',
  GET: 'GET',
  COUNT: 'COUNT'
}

function processDomainOperations(operations) {
  // domain => IP map
  const domainMap = new Map();
  const results = [];

  for (const op of operations) {
    // [PUT, 'www.devtools.tech', '10.20.30.40']
    const [command, domain, ipOrSuffix] = op;

    // if PUT command then store the value in the map
    if (command === OPERATIONS.PUT) {
      domainMap.set(domain, ipOrSuffix);
    } else if (command === OPERATIONS.GET) {
      // if GET command then store it as a result
      results.push(domainMap.get(domain) || "404");
    } else if (command === OPERATIONS.COUNT) {
      // count the occurrences of top level suffix
      let count = 0;

      for (const key of domainMap.keys()) {
        if (key.endsWith(domain)) {
          count++;
        }
      }

      results.push(count.toString());
    }
  }

  // return the result
  return results;
}

```

---

# 🚀 Possible Optimization

To improve repeated GET or COUNT performance:

### 🔸 **Caching with Maps**

Use caching for:

* frequently requested GET domains
* frequently requested COUNT suffixes

Example idea:

```js
const getCache = new Map();
const countCache = new Map();
```

On repeated calls:

* If the result is already cached → return instantly
* If underlying data changes (e.g., on PUT), invalidate cache

This can significantly improve performance with large input sizes.

---

# ✅ Test Cases for `processDomainOperations`

---

## **🔹 Test Case 1 — Basic happy path with PUT, GET, COUNT**

**Input:**

```js
const operations = [
  ["PUT", "www.apple.com", "10.20.30.40"],
  ["PUT", "jobs.apple.com", "10.20.30.50"],
  ["PUT", "sites.google.com", "142.258.145.693"],
  ["GET", "sample.com"],
  ["GET", "www.apple.com"],
  ["COUNT", "apple.com"],
  ["COUNT", "com"]
];
```

**Expected Output:**

```js
["404", "10.20.30.40", "2", "3"]
```

---

## **🔹 Test Case 2 — GET on domain not added (sad path)**

**Input:**

```js
const operations = [["GET", "nonexistent.com"]];
```

**Expected Output:**

```js
["404"]
```

---

## **🔹 Test Case 3 — COUNT on suffix with no matches (sad path)**

**Input:**

```js
const operations = [
  ["PUT", "a.com", "1.1.1.1"],
  ["COUNT", "notfound.com"]
];
```

**Expected Output:**

```js
["0"]
```

---

## **🔹 Test Case 4 — Overwriting an existing domain with PUT**

**Input:**

```js
const operations = [
  ["PUT", "test.com", "8.8.8.8"],
  ["PUT", "test.com", "9.9.9.9"],
  ["GET", "test.com"]
];
```

**Expected Output:**

```js
["9.9.9.9"]
```

---

## **🔹 Test Case 5 — COUNT on suffix 'com' across multiple domain levels**

**Input:**

```js
const operations = [
  ["PUT", "x.y.z.com", "1.1.1.1"],
  ["PUT", "a.b.com", "2.2.2.2"],
  ["PUT", "just.com", "3.3.3.3"],
  ["COUNT", "com"]
];
```

**Expected Output:**

```js
["3"]
```

---

## **🔹 Test Case 6 — Empty operations (edge case)**

**Input:**

```js
const operations = [];
```

**Expected Output:**

```js
[]
```

---

## **🔹 Test Case 7 — COUNT on exact domain without subdomains**

**Input:**

```js
const operations = [
  ["PUT", "example.com", "1.2.3.4"],
  ["COUNT", "example.com"]
];
```

**Expected Output:**

```js
["1"]
```

---

## **🔹 Test Case 8 — PUT with duplicate IP but different domain**

**Input:**

```js
const operations = [
  ["PUT", "a.com", "1.1.1.1"],
  ["PUT", "b.com", "1.1.1.1"],
  ["COUNT", "com"]
];
```

**Expected Output:**

```js
["2"]
```

---


