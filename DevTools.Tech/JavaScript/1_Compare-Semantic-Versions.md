# Compare Semantic Versions

---

# 📌 Problem Statement — Implement `compareSemver(v1, v2)`

Semantic Versioning (**SemVer**) uses a three-part version number:

```
MAJOR.MINOR.PATCH
```

Example: `1.2.3`

Your task is to implement a function **`compareSemver(v1, v2)`** that compares two semantic version strings and determines which one is greater.

---

# 🔁 Expected Output

Your function must return:

* **1** → if `v1` is greater than `v2`
* **-1** → if `v1` is less than `v2`
* **0** → if both versions are equal

---

# 🧩 Function Signature

```ts
function compareSemver(v1: string, v2: string): number
```

---

# 📝 Arguments

### **v1**

A semantic version string. Example: `"12.1.0"`

### **v2**

Another semantic version string to compare against `v1`.

---

# 🔙 Return Type

```ts
number  // 1 | -1 | 0
```

---

# 📌 Constraints

* Both strings strictly follow the **MAJOR.MINOR.PATCH** format.
* Each segment is a **non-negative integer**.
* Compare segments **numerically, not lexicographically**.

  * e.g., `"10" > "2"` → true (numeric)
* There are **no pre-release** identifiers (e.g., `-beta`) and no build metadata (`+build`).
* **No leading zeros** allowed (e.g., `"01.0.0"` is invalid).

---

# 📘 Examples

```js
compareSemver('12.1.0', '12.0.9'); // Output: 1

compareSemver('12.1.0', '12.1.2'); // Output: -1

compareSemver('5.0.1', '5.0.1');   // Output: 0
```

---


---

# ⭐ Follow-up Questions & Extended Discussion

---

## 🔹 **1. How would your solution handle invalid inputs (e.g., missing segments or non-numeric values)?**

There are multiple approaches depending on system requirements:

### **A. Strict Mode (throw errors)**

* If an input doesn't follow `MAJOR.MINOR.PATCH`, throw an error.
* Best for **critical operations** like:

  * version-based migrations
  * dependency resolution
  * API compatibility checks

This ensures that *silent failures* do not cause bigger issues.

### **B. Safe/Lenient Mode (normalize inputs)**

Instead of throwing errors:

* Missing segments → treat as **0**

  * `"1.0"` → `"1.0.0"`
  * `"2"` → `"2.0.0"`
* Non-numeric values → **coerce to 0**

  * `"1.x.3"` → `"1.0.3"`

This prevents runtime errors and allows safe comparisons.

### **C. Returning a fallback value**

Some systems may return:

* `null`
* `undefined`
* or a safe default `0`

This prevents app crashes, but must be documented clearly.

---

## 🔹 **2. How would you extend this logic to handle pre-release tags like `1.2.3-beta`?**

Semantic Versioning rules:

* Pre-release versions have **lower precedence** than the same normal version:

  * `1.2.3-beta` < `1.2.3`
* Pre-release precedence is compared lexicographically + numerically:

  * `"alpha" < "beta"`
  * `"beta" < "rc"`
  * `"rc1" < "rc2"`

Parsing example:

```
1.2.3-beta.1
 | | |   |
 | | |   └─ pre-release identifiers
 | | └──── patch
 | └────── minor
 └──────── major
```

You would:

1. Split at `"-"`
2. Compare MAJOR.MINOR.PATCH normally
3. Compare pre-release identifiers if both exist
4. Normal version always beats pre-release

---

## 🔹 **3. When does it make sense to throw an error vs. return a default value?**

### ✔ **Throw errors when:**

* The version controls **critical behavior**
* Wrong version may cause:

  * data loss
  * failed migrations
  * incompatibility
  * security vulnerabilities

Throwing stops execution and forces developers to fix the issue.

---

### ✔ **Return default values (safe mode) when:**

* Inputs come from external/inconsistent sources
* Backward compatibility is needed
* Crashing the app is not acceptable
* You want to avoid noisy errors

In such cases, **normalization** keeps the app stable.

---

# 🧩 Possible Implementation (as given)

```js
function compareSemver(v1, v2) {
  const versionOne = v1.split('.');
  const versionTwo = v2.split('.');

  for (let i = 0; i < 3; i++) {
    const first = Number(versionOne[i]);
    const second = Number(versionTwo[i]);

    if (first > second) {
      return 1;
    } else if (first < second) {
      return -1;
    } else if (!isNaN(first) && isNaN(second)) {
      return 1;
    } else if (isNaN(first) && !isNaN(second)) {
      return -1;
    }
  }

  return 0;
}
```

---


---

# ✅ Test Cases for `compareSemver(v1, v2)`

---

## **🔹 Test Case 1 — First version is greater (minor difference)**

**Input:**

```js
compareSemver('12.1.0', '12.0.9');
```

**Expected Output:**

```js
1
```

---

## **🔹 Test Case 2 — Second version is greater (patch difference)**

**Input:**

```js
compareSemver('12.1.0', '12.1.2');
```

**Expected Output:**

```js
-1
```

---

## **🔹 Test Case 3 — Versions are equal**

**Input:**

```js
compareSemver('5.0.1', '5.0.1');
```

**Expected Output:**

```js
0
```

---

## **🔹 Test Case 4 — Identical semantic versions**

**Input:**

```js
compareSemver('1.0.0', '1.0.0');
```

**Expected Output:**

```js
0
```

---

## **🔹 Test Case 5 — First version greater by MINOR value**

**Input:**

```js
compareSemver('2.10.3', '2.3.15');
```

**Expected Output:**

```js
1
```

---

## **🔹 Test Case 6 — Second version greater by MAJOR value**

**Input:**

```js
compareSemver('3.0.0', '4.0.0');
```

**Expected Output:**

```js
-1
```

---

## **🔹 Test Case 7 — First version greater by PATCH value**

**Input:**

```js
compareSemver('1.2.10', '1.2.2');
```

**Expected Output:**

```js
1
```

---

## **🔹 Test Case 8 — First version significantly greater in MAJOR**

**Input:**

```js
compareSemver('10.0.0', '2.100.100');
```

**Expected Output:**

```js
1
```

---

