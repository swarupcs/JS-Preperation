
# Count Nested Comments

https://devtools.tech/questions/s/count-total-comments---qid---ZOhP1z8MNP3Jo0RiK5mg

## Problem Statement


You are tasked with creating a function that counts the total number of comments in a nested comment thread, similar to what you might find on platforms like Reddit, Twitter, or any discussion forum. Each comment can have multiple replies, and those replies can themselves have replies, creating a tree-like structure.

---

## **Requirements**

Write a function called `countComments`.

### **Arguments**

`comments`: An object with the following structure:

```js
{
  text: String,
  replies: Array
}
````

Each reply object follows the same structure, potentially creating deep nesting.

---

## **Returns**

A single number representing the total count of all comments (including the root comment and all nested replies at any depth).

Throw an error if a **circular reference** is found.

---

## **Important Conditions**

* Must handle **any level of nesting**
* Should have **optimal time and space complexity**
* **The root comment counts as 1**
* Must detect **circular references**
* Must throw an error if **malformed comment object** is passed (missing keys)

---

## **Examples**

### Example 1

```js
const comments = {
  text: "some comment",
  replies: [
    { text: "some comment 1", replies: [] },
    { text: "some comment 2", replies: [] },
    { text: "some comment 3", replies: [
        { text: "some comment 5", replies: [] }
      ]
    }
  ]
};

// Should return 5
countComments(comments);
```

---

### Example 2

```js
const comments = {
  text: "root comment",
  replies: []
};

// Should return 1
countComments(comments);
```

---

### Example 3

```js
const comments = {
  text: "level 1",
  replies: [{
    text: "level 2",
    replies: [{
      text: "level 3",
      replies: [{
        text: "level 4",
        replies: []
      }]
    }]
  }]
};

// Should return 4
countComments(comments);
```



# Test Cases for `countComments`



### **Test Case 1: Single root comment with no replies**

**Input:**

```json
{
  "text": "root comment",
  "replies": []
}
````

**Expected Output:**

```
1
```

---

### **Test Case 2: Root comment with 3 direct replies**

**Input:**

```json
{
  "text": "root comment",
  "replies": [
    { "text": "reply 1", "replies": [] },
    { "text": "reply 2", "replies": [] },
    { "text": "reply 3", "replies": [] }
  ]
}
```

**Expected Output:**

```
4
```

---

### **Test Case 3: Null input**

**Input:**

```json
null
```

**Expected Output:**

```
0
```

---

### **Test Case 4: Deep nesting (1000 levels)**

**Input:**

```
1000-level nested comment
```

**Expected Output:**

```
1000
```

---

### **Test Case 5: Circular reference detection**

**Input:**

```json
{
  "text": "root",
  "replies": []
}
```

*(with circular reference added)*

**Expected Output:**

```
Error
```

---

### **Test Case 6: Malformed input missing replies**

**Input:**

```json
{
  "text": "broken comment"
}
```

**Expected Output:**

```
1
```


## Solution

```js
function countComments(comment) {
  /**
   * STEP 1 — Handle null/undefined input
   * If no comment is provided, simply return 0.
   */
  if (comment === null || comment === undefined) return 0;

  /**
   * STEP 2 — Validate that the input is a valid object
   * If it's anything other than a non-null object, it's invalid.
   */
  if (typeof comment !== "object" || comment === null) {
    throw new Error("Invalid comment: must be a non-null object");
  }

  /**
   * STEP 3 — Create a Set to track visited comment nodes
   * This helps detect circular references efficiently.
   * If we see the same object again, a cycle exists.
   */
  const visited = new Set();

  /**
   * Recursive DFS helper function
   * This function:
   *   - Validates each node
   *   - Detects circular references
   *   - Counts the current comment (1) // For every comment object we visit, we add 1 to the total count.
   *   - Recursively counts all nested replies
   */
  function dfs(node) {
    // STEP 4 — Ensure the node is a valid object
    if (typeof node !== "object" || node === null) {
      throw new Error("Malformed comment: must be an object");
    }

    // STEP 5 — Ensure the node has a 'text' field
    // Missing 'text' means invalid structure
    if (!("text" in node)) {
      throw new Error("Malformed comment: missing 'text' property");
    }

    /**
     * STEP 6 — Normalize 'replies'
     * If 'replies' is not provided or not an array,
     * treat it as an empty array.
     * (This supports Test Case 6)
     */
    const replies = Array.isArray(node.replies) ? node.replies : [];

    /**
     * STEP 7 — Circular reference detection
     * If this exact object was seen before, a cycle exists.
     */
    if (visited.has(node)) {
      throw new Error("Circular reference detected in comment structure");
    }

    // Mark current node as visited
    visited.add(node);

    /**
     * STEP 8 — Count this comment (itself)
     */
    let total = 1;

    /**
     * STEP 9 — Recursively count replies
     */
    for (const reply of replies) {
      total += dfs(reply);
    }

    // STEP 10 — Return the total count from this branch
    return total;
  }

  /**
   * STEP 11 — Begin DFS on the root comment
   */
  return dfs(comment);
}

```