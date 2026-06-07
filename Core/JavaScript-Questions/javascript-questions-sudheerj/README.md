# JavaScript Interview Questions & Answers

> Click :star:if you like the project and follow [@SudheerJonna](https://twitter.com/SudheerJonna) for more updates. Coding questions available [here](#coding-exercise). Check [DataStructures and Algorithms](https://github.com/sudheerj/datastructures-algorithms) for DSA related questions and [ECMAScript](https://github.com/sudheerj/ECMAScript-features) for all ES features.)

---

<div>
<p align="center">
  <a href="https://www.greatfrontend.com/questions/formats/javascript-functions?utm_source=github&utm_medium=referral&utm_campaign=sudheerj-js&fpr=sudheerj&gnrs=sudheerj">
    <img src="./images/collab/greatfrontend-js.gif" alt="GreatFrontEnd JavaScript Interview Questions" width="100%">
  </a>
</p>
</div>

> Practice 280+ JavaScript coding interview questions in-browser. Built by ex-FAANG interviewers. No AI-generated fluff. No fake reviews. [Try GreatFrontEnd →](https://www.greatfrontend.com/questions/formats/javascript-functions?utm_source=github&utm_medium=referral&utm_campaign=sudheerj-js&fpr=sudheerj&gnrs=sudheerj) 💡

---

### Table of Contents

<!-- TOC_START -->
| No. | Questions |
| --- | --------- |
| 1 | [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript) |
| 2 | [What is a prototype chain](#what-is-a-prototype-chain) |
| 3 | [What is the Difference Between `call`, `apply`, and `bind`](#what-is-the-difference-between-call-apply-and-bind) |
| 4 | [What is JSON and its common operations](#what-is-json-and-its-common-operations) |
| 5 | [What is the purpose of the array slice method](#what-is-the-purpose-of-the-array-slice-method) |
| 6 | [What is the purpose of the array splice method](#what-is-the-purpose-of-the-array-splice-method) |
| 7 | [What is the difference between slice and splice](#what-is-the-difference-between-slice-and-splice) |
| 8 | [How do you compare Object and Map](#how-do-you-compare-object-and-map) |
| 9 | [What is the difference between == and === operators](#what-is-the-difference-between--and--operators) |
| 10 | [What are lambda expressions or arrow functions](#what-are-lambda-expressions-or-arrow-functions) |
| 11 | [What is a first class function](#what-is-a-first-class-function) |
| 12 | [What is a first order function](#what-is-a-first-order-function) |
| 13 | [What is a higher order function](#what-is-a-higher-order-function) |
| 14 | [What is a unary function](#what-is-a-unary-function) |
| 15 | [What is the currying function](#what-is-the-currying-function) |
| 16 | [What is a pure function](#what-is-a-pure-function) |
| 17 | [What are the benefits of pure functions](#what-are-the-benefits-of-pure-functions) |
| 18 | [What is the purpose of the let keyword](#what-is-the-purpose-of-the-let-keyword) |
| 19 | [What is the difference between let and var](#what-is-the-difference-between-let-and-var) |
| 20 | [What is the reason to choose the name let as a keyword](#what-is-the-reason-to-choose-the-name-let-as-a-keyword) |
| 21 | [How do you redeclare variables in a switch block without an error](#how-do-you-redeclare-variables-in-a-switch-block-without-an-error) |
| 22 | [What is the Temporal Dead Zone](#what-is-the-temporal-dead-zone) |
| 23 | [What is an IIFE (Immediately Invoked Function Expression)](#what-is-an-iife-immediately-invoked-function-expression) |
| 24 | [How do you decode or encode a URL in JavaScript?](#how-do-you-decode-or-encode-a-url-in-javascript) |
| 25 | [What is memoization](#what-is-memoization) |
| 26 | [What is Hoisting](#what-is-hoisting) |
| 27 | [What are classes in ES6](#what-are-classes-in-es6) |
| 28 | [What are closures](#what-are-closures) |
| 29 | [What are modules](#what-are-modules) |
| 30 | [Why do you need modules](#why-do-you-need-modules) |
| 31 | [What is scope in javascript](#what-is-scope-in-javascript) |
| 32 | [What is a service worker](#what-is-a-service-worker) |
| 33 | [How do you manipulate DOM using a service worker](#how-do-you-manipulate-dom-using-a-service-worker) |
| 34 | [How do you reuse information across service worker restarts](#how-do-you-reuse-information-across-service-worker-restarts) |
| 35 | [What is IndexedDB](#what-is-indexeddb) |
| 36 | [What is web storage](#what-is-web-storage) |
| 37 | [What is a post message](#what-is-a-post-message) |
| 38 | [What is a Cookie](#what-is-a-cookie) |
| 39 | [Why do you need a Cookie](#why-do-you-need-a-cookie) |
| 40 | [What are the options in a cookie](#what-are-the-options-in-a-cookie) |
| 41 | [How do you delete a cookie](#how-do-you-delete-a-cookie) |
| 42 | [What are the differences between cookie, local storage and session storage](#what-are-the-differences-between-cookie-local-storage-and-session-storage) |
| 43 | [What is the main difference between localStorage and sessionStorage](#what-is-the-main-difference-between-localstorage-and-sessionstorage) |
| 44 | [How do you access web storage](#how-do-you-access-web-storage) |
| 45 | [What are the methods available on session storage](#what-are-the-methods-available-on-session-storage) |
| 46 | [What is a storage event and its event handler](#what-is-a-storage-event-and-its-event-handler) |
| 47 | [Why do you need web storage](#why-do-you-need-web-storage) |
| 48 | [How do you check web storage browser support](#how-do-you-check-web-storage-browser-support) |
| 49 | [How do you check web workers browser support](#how-do-you-check-web-workers-browser-support) |
| 50 | [Give an example of a web worker](#give-an-example-of-a-web-worker) |
| 51 | [What are the restrictions of web workers on DOM](#what-are-the-restrictions-of-web-workers-on-dom) |
| 52 | [What is a promise](#what-is-a-promise) |
| 53 | [Why do you need a promise](#why-do-you-need-a-promise) |
| 54 | [Explain the three states of promise](#explain-the-three-states-of-promise) |
| 55 | [What is a callback function](#what-is-a-callback-function) |
| 56 | [Why do we need callbacks](#why-do-we-need-callbacks) |
| 57 | [What is a callback hell](#what-is-a-callback-hell) |
| 58 | [What are server-sent events](#what-are-server-sent-events) |
| 59 | [How do you receive server-sent event notifications](#how-do-you-receive-server-sent-event-notifications) |
| 60 | [How do you check browser support for server-sent events](#how-do-you-check-browser-support-for-server-sent-events) |
| 61 | [What are the events available for server sent events](#what-are-the-events-available-for-server-sent-events) |
| 62 | [What are the main rules of promise](#what-are-the-main-rules-of-promise) |
| 63 | [What is callback in callback](#what-is-callback-in-callback) |
| 64 | [What is promise chaining](#what-is-promise-chaining) |
| 65 | [What is promise.all](#what-is-promiseall) |
| 66 | [What is the purpose of the race method in promise](#what-is-the-purpose-of-the-race-method-in-promise) |
| 67 | [What is a strict mode in javascript](#what-is-a-strict-mode-in-javascript) |
| 68 | [Why do you need strict mode](#why-do-you-need-strict-mode) |
| 69 | [How do you declare strict mode](#how-do-you-declare-strict-mode) |
| 70 | [What is the purpose of double exclamation](#what-is-the-purpose-of-double-exclamation) |
| 71 | [What is the purpose of the delete operator](#what-is-the-purpose-of-the-delete-operator) |
| 72 | [What is typeof operator](#what-is-typeof-operator) |
| 73 | [What is undefined property](#what-is-undefined-property) |
| 74 | [What is null value](#what-is-null-value) |
| 75 | [What is the difference between null and undefined](#what-is-the-difference-between-null-and-undefined) |
| 76 | [What is eval](#what-is-eval) |
| 77 | [What is the difference between window and document](#what-is-the-difference-between-window-and-document) |
| 78 | [How do you access history in javascript](#how-do-you-access-history-in-javascript) |
| 79 | [How do you detect caps lock key turned on or not](#how-do-you-detect-caps-lock-key-turned-on-or-not) |
| 80 | [What is isNaN](#what-is-isnan) |
| 81 | [What are the differences between undeclared and undefined variables](#what-are-the-differences-between-undeclared-and-undefined-variables) |
| 82 | [What are global variables](#what-are-global-variables) |
| 83 | [What are the problems with global variables](#what-are-the-problems-with-global-variables) |
| 84 | [What is NaN property](#what-is-nan-property) |
| 85 | [What is the purpose of isFinite function](#what-is-the-purpose-of-isfinite-function) |
| 86 | [What is an event flow](#what-is-an-event-flow) |
| 87 | [What is event capturing](#what-is-event-capturing) |
| 88 | [What is event bubbling](#what-is-event-bubbling) |
| 89 | [How do you submit a form using JavaScript](#how-do-you-submit-a-form-using-javascript) |
| 90 | [How do you find operating system details](#how-do-you-find-operating-system-details) |
| 91 | [What is the difference between document load and DOMContentLoaded events](#what-is-the-difference-between-document-load-and-domcontentloaded-events) |
| 92 | [What is the difference between native, host and user objects](#what-is-the-difference-between-native-host-and-user-objects) |
| 93 | [What are the tools or techniques used for debugging JavaScript code](#what-are-the-tools-or-techniques-used-for-debugging-javascript-code) |
| 94 | [What are the pros and cons of promises over callbacks](#what-are-the-pros-and-cons-of-promises-over-callbacks) |
| 95 | [What is the difference between an attribute and a property](#what-is-the-difference-between-an-attribute-and-a-property) |
| 96 | [What is same-origin policy](#what-is-same-origin-policy) |
| 97 | [What is the purpose of void 0](#what-is-the-purpose-of-void-0) |
| 98 | [Is JavaScript a compiled or interpreted language](#is-javascript-a-compiled-or-interpreted-language) |
| 99 | [Is JavaScript a case-sensitive language](#is-javascript-a-case-sensitive-language) |
| 100 | [Is there any relation between Java and JavaScript](#is-there-any-relation-between-java-and-javascript) |
| 101 | [What are events](#what-are-events) |
| 102 | [Who created javascript](#who-created-javascript) |
| 103 | [What is the use of preventDefault method](#what-is-the-use-of-preventdefault-method) |
| 104 | [What is the use of stopPropagation method](#what-is-the-use-of-stoppropagation-method) |
| 105 | [What are the steps involved in return false usage](#what-are-the-steps-involved-in-return-false-usage) |
| 106 | [What is BOM](#what-is-bom) |
| 107 | [What is the use of setTimeout](#what-is-the-use-of-settimeout) |
| 108 | [What is the use of setInterval](#what-is-the-use-of-setinterval) |
| 109 | [Why is JavaScript treated as Single threaded](#why-is-javascript-treated-as-single-threaded) |
| 110 | [What is an event delegation](#what-is-an-event-delegation) |
| 111 | [What is ECMAScript](#what-is-ecmascript) |
| 112 | [What is JSON](#what-is-json) |
| 113 | [What are the syntax rules of JSON](#what-are-the-syntax-rules-of-json) |
| 114 | [What is the purpose JSON stringify](#what-is-the-purpose-json-stringify) |
| 115 | [How do you parse JSON string](#how-do-you-parse-json-string) |
| 116 | [Why do you need JSON](#why-do-you-need-json) |
| 117 | [What are PWAs](#what-are-pwas) |
| 118 | [What is the purpose of clearTimeout method](#what-is-the-purpose-of-cleartimeout-method) |
| 119 | [What is the purpose of clearInterval method](#what-is-the-purpose-of-clearinterval-method) |
| 120 | [How do you redirect new page in javascript](#how-do-you-redirect-new-page-in-javascript) |
| 121 | [How do you check whether a string contains a substring](#how-do-you-check-whether-a-string-contains-a-substring) |
| 122 | [How do you validate an email in javascript](#how-do-you-validate-an-email-in-javascript) |
| 123 | [How do you get the current url with javascript](#how-do-you-get-the-current-url-with-javascript) |
| 124 | [What are the various url properties of location object](#what-are-the-various-url-properties-of-location-object) |
| 125 | [How do you get query string values in javascript](#how-do-you-get-query-string-values-in-javascript) |
| 126 | [How do you check if a key exists in an object](#how-do-you-check-if-a-key-exists-in-an-object) |
| 127 | [How do you loop through or enumerate javascript object](#how-do-you-loop-through-or-enumerate-javascript-object) |
| 128 | [How do you test for an empty object](#how-do-you-test-for-an-empty-object) |
| 129 | [What is an arguments object](#what-is-an-arguments-object) |
| 130 | [How do you make first letter of the string in an uppercase](#how-do-you-make-first-letter-of-the-string-in-an-uppercase) |
| 131 | [What are the pros and cons of for loops](#what-are-the-pros-and-cons-of-for-loops) |
| 132 | [How do you display the current date in javascript](#how-do-you-display-the-current-date-in-javascript) |
| 133 | [How do you compare two date objects](#how-do-you-compare-two-date-objects) |
| 134 | [How do you check if a string starts with another string](#how-do-you-check-if-a-string-starts-with-another-string) |
| 135 | [How do you trim a string in javascript](#how-do-you-trim-a-string-in-javascript) |
| 136 | [How do you add a key value pair in javascript](#how-do-you-add-a-key-value-pair-in-javascript) |
| 137 | [Is the !-- notation represents a special operator](#is-the----notation-represents-a-special-operator) |
| 138 | [How do you assign default values to variables](#how-do-you-assign-default-values-to-variables) |
| 139 | [How do you define multiline strings](#how-do-you-define-multiline-strings) |
| 140 | [What is an app shell model](#what-is-an-app-shell-model) |
| 141 | [Can we define properties for functions](#can-we-define-properties-for-functions) |
| 142 | [What is the way to find the number of parameters expected by a function](#what-is-the-way-to-find-the-number-of-parameters-expected-by-a-function) |
| 143 | [What is a polyfill](#what-is-a-polyfill) |
| 144 | [What are break and continue statements](#what-are-break-and-continue-statements) |
| 145 | [What are js labels](#what-are-js-labels) |
| 146 | [What are the benefits of keeping declarations at the top](#what-are-the-benefits-of-keeping-declarations-at-the-top) |
| 147 | [What are the benefits of initializing variables](#what-are-the-benefits-of-initializing-variables) |
| 148 | [What are the recommendations to create new object](#what-are-the-recommendations-to-create-new-object) |
| 149 | [How do you define JSON arrays](#how-do-you-define-json-arrays) |
| 150 | [How do you generate random integers](#how-do-you-generate-random-integers) |
| 151 | [Can you write a random integers function to print integers within a range](#can-you-write-a-random-integers-function-to-print-integers-within-a-range) |
| 152 | [What is tree shaking](#what-is-tree-shaking) |
| 153 | [What is the need of tree shaking](#what-is-the-need-of-tree-shaking) |
| 154 | [Is it recommended to use eval](#is-it-recommended-to-use-eval) |
| 155 | [What is a Regular Expression](#what-is-a-regular-expression) |
| 156 | [What are the string methods that accept Regular expression](#what-are-the-string-methods-that-accept-regular-expression) |
| 157 | [What are modifiers in regular expression](#what-are-modifiers-in-regular-expression) |
| 158 | [What are regular expression patterns](#what-are-regular-expression-patterns) |
| 159 | [What is a RegExp object](#what-is-a-regexp-object) |
| 160 | [How do you search a string for a pattern](#how-do-you-search-a-string-for-a-pattern) |
| 161 | [What is the purpose of exec method](#what-is-the-purpose-of-exec-method) |
| 162 | [How do you change the style of a HTML element](#how-do-you-change-the-style-of-a-html-element) |
| 163 | [What would be the result of 1+2+'3'](#what-would-be-the-result-of-123) |
| 164 | [What is a debugger statement](#what-is-a-debugger-statement) |
| 165 | [What is the purpose of breakpoints in debugging](#what-is-the-purpose-of-breakpoints-in-debugging) |
| 166 | [Can I use reserved words as identifiers](#can-i-use-reserved-words-as-identifiers) |
| 167 | [How do you detect a mobile browser](#how-do-you-detect-a-mobile-browser) |
| 168 | [How do you detect a mobile browser without regexp](#how-do-you-detect-a-mobile-browser-without-regexp) |
| 169 | [How do you get the image width and height using JS](#how-do-you-get-the-image-width-and-height-using-js) |
| 170 | [How do you make synchronous HTTP request](#how-do-you-make-synchronous-http-request) |
| 171 | [How do you make asynchronous HTTP request](#how-do-you-make-asynchronous-http-request) |
| 172 | [How do you convert date to another timezone in javascript](#how-do-you-convert-date-to-another-timezone-in-javascript) |
| 173 | [What are the properties used to get size of window](#what-are-the-properties-used-to-get-size-of-window) |
| 174 | [What is a conditional operator in javascript](#what-is-a-conditional-operator-in-javascript) |
| 175 | [Can you apply chaining on conditional operator](#can-you-apply-chaining-on-conditional-operator) |
| 176 | [What are the ways to execute javascript after a page load](#what-are-the-ways-to-execute-javascript-after-a-page-load) |
| 177 | [What is the difference between proto and prototype](#what-is-the-difference-between-proto-and-prototype) |
| 178 | [Can you give an example of when you really need a semicolon](#can-you-give-an-example-of-when-you-really-need-a-semicolon) |
| 179 | [What is the freeze method](#what-is-the-freeze-method) |
| 180 | [What is the purpose of the freeze method](#what-is-the-purpose-of-the-freeze-method) |
| 181 | [Why do I need to use the freeze method](#why-do-i-need-to-use-the-freeze-method) |
| 182 | [How do you detect a browser language preference](#how-do-you-detect-a-browser-language-preference) |
| 183 | [How to convert a string to title case with javascript](#how-to-convert-a-string-to-title-case-with-javascript) |
| 184 | [How do you detect if javascript is disabled on the page](#how-do-you-detect-if-javascript-is-disabled-on-the-page) |
| 185 | [What are various operators supported by javascript](#what-are-various-operators-supported-by-javascript) |
| 186 | [What is a rest parameter](#what-is-a-rest-parameter) |
| 187 | [What happens if you do not use rest parameter as a last argument](#what-happens-if-you-do-not-use-rest-parameter-as-a-last-argument) |
| 188 | [What are the bitwise operators available in javascript](#what-are-the-bitwise-operators-available-in-javascript) |
| 189 | [What is a spread operator](#what-is-a-spread-operator) |
| 190 | [How do you determine whether object is frozen or not](#how-do-you-determine-whether-object-is-frozen-or-not) |
| 191 | [How do you determine two values same or not using object](#how-do-you-determine-two-values-same-or-not-using-object) |
| 192 | [What is the purpose of using object is method](#what-is-the-purpose-of-using-object-is-method) |
| 193 | [How do you copy properties from one object to other](#how-do-you-copy-properties-from-one-object-to-other) |
| 194 | [What are the applications of the assign method](#what-are-the-applications-of-the-assign-method) |
| 195 | [What is a proxy object](#what-is-a-proxy-object) |
| 196 | [What is the purpose of the seal method](#what-is-the-purpose-of-the-seal-method) |
| 197 | [What are the applications of the seal method](#what-are-the-applications-of-the-seal-method) |
| 198 | [What are the differences between the freeze and seal methods](#what-are-the-differences-between-the-freeze-and-seal-methods) |
| 199 | [How do you determine if an object is sealed or not](#how-do-you-determine-if-an-object-is-sealed-or-not) |
| 200 | [How do you get enumerable key and value pairs](#how-do-you-get-enumerable-key-and-value-pairs) |
| 201 | [What is the main difference between Object.values and Object.entries method](#what-is-the-main-difference-between-objectvalues-and-objectentries-method) |
| 202 | [How can you get the list of keys of any object](#how-can-you-get-the-list-of-keys-of-any-object) |
| 203 | [How do you create an object with a prototype](#how-do-you-create-an-object-with-a-prototype) |
| 204 | [What is a WeakSet](#what-is-a-weakset) |
| 205 | [What are the differences between WeakSet and Set](#what-are-the-differences-between-weakset-and-set) |
| 206 | [List down the collection of methods available on WeakSet](#list-down-the-collection-of-methods-available-on-weakset) |
| 207 | [What is a WeakMap](#what-is-a-weakmap) |
| 208 | [What are the differences between WeakMap and Map](#what-are-the-differences-between-weakmap-and-map) |
| 209 | [List down the collection of methods available on WeakMap](#list-down-the-collection-of-methods-available-on-weakmap) |
| 210 | [What is the purpose of uneval](#what-is-the-purpose-of-uneval) |
| 211 | [How do you encode an URL](#how-do-you-encode-an-url) |
| 212 | [How do you decode an URL](#how-do-you-decode-an-url) |
| 213 | [How do you print the contents of web page](#how-do-you-print-the-contents-of-web-page) |
| 214 | [What is the difference between uneval and eval](#what-is-the-difference-between-uneval-and-eval) |
| 215 | [What is an anonymous function](#what-is-an-anonymous-function) |
| 216 | [What is the precedence order between local and global variables](#what-is-the-precedence-order-between-local-and-global-variables) |
| 217 | [What are javascript accessors](#what-are-javascript-accessors) |
| 218 | [How do you define property on Object constructor](#how-do-you-define-property-on-object-constructor) |
| 219 | [What is the difference between get and defineProperty](#what-is-the-difference-between-get-and-defineproperty) |
| 220 | [What are the advantages of Getters and Setters](#what-are-the-advantages-of-getters-and-setters) |
| 221 | [Can I add getters and setters using defineProperty method](#can-i-add-getters-and-setters-using-defineproperty-method) |
| 222 | [What is the purpose of switch-case](#what-is-the-purpose-of-switch-case) |
| 223 | [What are the conventions to be followed for the usage of switch case](#what-are-the-conventions-to-be-followed-for-the-usage-of-switch-case) |
| 224 | [What are primitive data types](#what-are-primitive-data-types) |
| 225 | [What are the different ways to access object properties](#what-are-the-different-ways-to-access-object-properties) |
| 226 | [What are the function parameter rules](#what-are-the-function-parameter-rules) |
| 227 | [What is an error object](#what-is-an-error-object) |
| 228 | [When do you get a syntax error](#when-do-you-get-a-syntax-error) |
| 229 | [What are the different error names from error object](#what-are-the-different-error-names-from-error-object) |
| 230 | [What are the various statements in error handling](#what-are-the-various-statements-in-error-handling) |
| 231 | [What are the two types of loops in javascript](#what-are-the-two-types-of-loops-in-javascript) |
| 232 | [What is nodejs](#what-is-nodejs) |
| 233 | [What is the Intl object](#what-is-the-intl-object) |
| 234 | [How do you perform language specific date and time formatting](#how-do-you-perform-language-specific-date-and-time-formatting) |
| 235 | [What is an Iterator](#what-is-an-iterator) |
| 236 | [How does synchronous iteration works](#how-does-synchronous-iteration-works) |
| 237 | [What is the event loop](#what-is-the-event-loop) |
| 238 | [What is the call stack](#what-is-the-call-stack) |
| 239 | [What is the event queue](#what-is-the-event-queue) |
| 240 | [What is a decorator](#what-is-a-decorator) |
| 241 | [What are the properties of the Intl object](#what-are-the-properties-of-the-intl-object) |
| 242 | [What is an Unary operator](#what-is-an-unary-operator) |
| 243 | [How do you sort elements in an array](#how-do-you-sort-elements-in-an-array) |
| 244 | [What is the purpose of compareFunction while sorting arrays](#what-is-the-purpose-of-comparefunction-while-sorting-arrays) |
| 245 | [How do you reverse an array](#how-do-you-reverse-an-array) |
| 246 | [How do you find the min and max values in an array](#how-do-you-find-the-min-and-max-values-in-an-array) |
| 247 | [How do you find the min and max values without Math functions](#how-do-you-find-the-min-and-max-values-without-math-functions) |
| 248 | [What is an empty statement and purpose of it](#what-is-an-empty-statement-and-purpose-of-it) |
| 249 | [How do you get the metadata of a module](#how-do-you-get-the-metadata-of-a-module) |
| 250 | [What is the comma operator](#what-is-the-comma-operator) |
| 251 | [What is the advantage of the comma operator](#what-is-the-advantage-of-the-comma-operator) |
| 252 | [What is typescript](#what-is-typescript) |
| 253 | [What are the differences between javascript and typescript](#what-are-the-differences-between-javascript-and-typescript) |
| 254 | [What are the advantages of typescript over javascript](#what-are-the-advantages-of-typescript-over-javascript) |
| 255 | [What is an object initializer](#what-is-an-object-initializer) |
| 256 | [What is a constructor method](#what-is-a-constructor-method) |
| 257 | [What happens if you write constructor more than once in a class](#what-happens-if-you-write-constructor-more-than-once-in-a-class) |
| 258 | [How do you call the constructor of a parent class](#how-do-you-call-the-constructor-of-a-parent-class) |
| 259 | [How do you get the prototype of an object](#how-do-you-get-the-prototype-of-an-object) |
| 260 | [What happens If I pass string type for getPrototype method](#what-happens-if-i-pass-string-type-for-getprototype-method) |
| 261 | [How do you set the prototype of one object to another](#how-do-you-set-the-prototype-of-one-object-to-another) |
| 262 | [How do you check whether an object can be extended or not](#how-do-you-check-whether-an-object-can-be-extended-or-not) |
| 263 | [How do you prevent an object from being extend](#how-do-you-prevent-an-object-from-being-extend) |
| 264 | [What are the different ways to make an object non-extensible](#what-are-the-different-ways-to-make-an-object-non-extensible) |
| 265 | [How do you define multiple properties on an object](#how-do-you-define-multiple-properties-on-an-object) |
| 266 | [What is the MEAN stack](#what-is-the-mean-stack) |
| 267 | [What is obfuscation in javascript](#what-is-obfuscation-in-javascript) |
| 268 | [Why do you need Obfuscation](#why-do-you-need-obfuscation) |
| 269 | [What is Minification](#what-is-minification) |
| 270 | [What are the advantages of minification](#what-are-the-advantages-of-minification) |
| 271 | [What are the differences between obfuscation and Encryption](#what-are-the-differences-between-obfuscation-and-encryption) |
| 272 | [What are the common tools used for minification](#what-are-the-common-tools-used-for-minification) |
| 273 | [How do you perform form validation using javascript](#how-do-you-perform-form-validation-using-javascript) |
| 274 | [How do you perform form validation without javascript](#how-do-you-perform-form-validation-without-javascript) |
| 275 | [What are the DOM methods available for constraint validation](#what-are-the-dom-methods-available-for-constraint-validation) |
| 276 | [What are the available constraint validation DOM properties](#what-are-the-available-constraint-validation-dom-properties) |
| 277 | [What are the validity properties](#what-are-the-validity-properties) |
| 278 | [Give an example usage of the rangeOverflow property](#give-an-example-usage-of-the-rangeoverflow-property) |
| 279 | [Are enums available in javascript](#are-enums-available-in-javascript) |
| 280 | [What is an enum](#what-is-an-enum) |
| 281 | [How do you list all properties of an object](#how-do-you-list-all-properties-of-an-object) |
| 282 | [How do you get property descriptors of an object](#how-do-you-get-property-descriptors-of-an-object) |
| 283 | [What are the attributes provided by a property descriptor](#what-are-the-attributes-provided-by-a-property-descriptor) |
| 284 | [How do you extend classes](#how-do-you-extend-classes) |
| 285 | [How do I modify the url without reloading the page](#how-do-i-modify-the-url-without-reloading-the-page) |
| 286 | [How do you check whether or not an array includes a particular value](#how-do-you-check-whether-or-not-an-array-includes-a-particular-value) |
| 287 | [How do you compare scalar arrays](#how-do-you-compare-scalar-arrays) |
| 288 | [How to get the value from get parameters](#how-to-get-the-value-from-get-parameters) |
| 289 | [How do you print numbers with commas as thousand separators](#how-do-you-print-numbers-with-commas-as-thousand-separators) |
| 290 | [What is the difference between java and javascript](#what-is-the-difference-between-java-and-javascript) |
| 291 | [Does JavaScript support namespaces](#does-javascript-support-namespaces) |
| 292 | [How do you declare a namespace](#how-do-you-declare-a-namespace) |
| 293 | [How do you invoke javascript code in an iframe from the parent page](#how-do-you-invoke-javascript-code-in-an-iframe-from-the-parent-page) |
| 294 | [How do you get the timezone offset of a date object](#how-do-you-get-the-timezone-offset-of-a-date-object) |
| 295 | [How do you load CSS and JS files dynamically](#how-do-you-load-css-and-js-files-dynamically) |
| 296 | [What are the different methods to find HTML elements in DOM](#what-are-the-different-methods-to-find-html-elements-in-dom) |
| 297 | [What is jQuery](#what-is-jquery) |
| 298 | [What is V8 JavaScript engine](#what-is-v8-javascript-engine) |
| 299 | [Why do we call javascript as dynamic language](#why-do-we-call-javascript-as-dynamic-language) |
| 300 | [What is a void operator](#what-is-a-void-operator) |
| 301 | [How to set the cursor to wait](#how-to-set-the-cursor-to-wait) |
| 302 | [How do you create an infinite loop](#how-do-you-create-an-infinite-loop) |
| 303 | [Why do you need to avoid with statement](#why-do-you-need-to-avoid-with-statement) |
| 304 | [What is the output of the following for loops](#what-is-the-output-of-the-following-for-loops) |
| 305 | [List down some of the features of ES6](#list-down-some-of-the-features-of-es6) |
| 306 | [What is ES6](#what-is-es6) |
| 307 | [Can I redeclare let and const variables](#can-i-redeclare-let-and-const-variables) |
| 308 | [Does the `const` variable make the value immutable](#does-the-const-variable-make-the-value-immutable) |
| 309 | [What are default parameters](#what-are-default-parameters) |
| 310 | [What are template literals](#what-are-template-literals) |
| 311 | [How do you write multi-line strings in template literals](#how-do-you-write-multi-line-strings-in-template-literals) |
| 312 | [What are nesting templates](#what-are-nesting-templates) |
| 313 | [What are tagged templates](#what-are-tagged-templates) |
| 314 | [What are raw strings](#what-are-raw-strings) |
| 315 | [What is destructuring assignment](#what-is-destructuring-assignment) |
| 316 | [What are default values in destructuring assignment](#what-are-default-values-in-destructuring-assignment) |
| 317 | [How do you swap variables in destructuring assignment](#how-do-you-swap-variables-in-destructuring-assignment) |
| 318 | [What are enhanced object literals](#what-are-enhanced-object-literals) |
| 319 | [What are dynamic imports](#what-are-dynamic-imports) |
| 320 | [What are the use cases for dynamic imports](#what-are-the-use-cases-for-dynamic-imports) |
| 321 | [What are typed arrays](#what-are-typed-arrays) |
| 322 | [What are the advantages of module loaders](#what-are-the-advantages-of-module-loaders) |
| 323 | [What is collation](#what-is-collation) |
| 324 | [What is for...of statement](#what-is-forof-statement) |
| 325 | [What is the output of below spread operator array](#what-is-the-output-of-below-spread-operator-array) |
| 326 | [Is PostMessage secure](#is-postmessage-secure) |
| 327 | [What are the problems with postmessage target origin as wildcard](#what-are-the-problems-with-postmessage-target-origin-as-wildcard) |
| 328 | [How do you avoid receiving postMessages from attackers](#how-do-you-avoid-receiving-postmessages-from-attackers) |
| 329 | [Can I avoid using postMessages completely](#can-i-avoid-using-postmessages-completely) |
| 330 | [Is postMessages synchronous](#is-postmessages-synchronous) |
| 331 | [What paradigm is Javascript](#what-paradigm-is-javascript) |
| 332 | [What is the difference between internal and external javascript](#what-is-the-difference-between-internal-and-external-javascript) |
| 333 | [Is JavaScript faster than server side script](#is-javascript-faster-than-server-side-script) |
| 334 | [How do you get the status of a checkbox](#how-do-you-get-the-status-of-a-checkbox) |
| 335 | [What is the purpose of double tilde operator](#what-is-the-purpose-of-double-tilde-operator) |
| 336 | [How do you convert character to ASCII code](#how-do-you-convert-character-to-ascii-code) |
| 337 | [What is ArrayBuffer](#what-is-arraybuffer) |
| 338 | [What is the output of below string expression](#what-is-the-output-of-below-string-expression) |
| 339 | [What is the purpose of Error object](#what-is-the-purpose-of-error-object) |
| 340 | [What is the purpose of EvalError object](#what-is-the-purpose-of-evalerror-object) |
| 341 | [What are the list of cases error thrown from non-strict mode to strict mode](#what-are-the-list-of-cases-error-thrown-from-non-strict-mode-to-strict-mode) |
| 342 | [Do all objects have prototypes](#do-all-objects-have-prototypes) |
| 343 | [What is the difference between a parameter and an argument](#what-is-the-difference-between-a-parameter-and-an-argument) |
| 344 | [What is the purpose of some method in arrays](#what-is-the-purpose-of-some-method-in-arrays) |
| 345 | [How do you combine two or more arrays](#how-do-you-combine-two-or-more-arrays) |
| 346 | [What is the difference between Shallow and Deep copy](#what-is-the-difference-between-shallow-and-deep-copy) |
| 347 | [How do you create specific number of copies of a string](#how-do-you-create-specific-number-of-copies-of-a-string) |
| 348 | [How do you return all matching strings against a regular expression](#how-do-you-return-all-matching-strings-against-a-regular-expression) |
| 349 | [How do you trim a string at the beginning or ending](#how-do-you-trim-a-string-at-the-beginning-or-ending) |
| 350 | [What is the output of below console statement with unary operator](#what-is-the-output-of-below-console-statement-with-unary-operator) |
| 351 | [Does javascript uses mixins](#does-javascript-uses-mixins) |
| 352 | [Mixin Example using Object composition](#mixin-example-using-object-composition) |
| 353 | [Benefits](#benefits) |
| 354 | [What is a thunk function](#what-is-a-thunk-function) |
| 355 | [What are asynchronous thunks](#what-are-asynchronous-thunks) |
| 356 | [What is the output of below function calls](#what-is-the-output-of-below-function-calls) |
| 357 | [How to remove all line breaks from a string](#how-to-remove-all-line-breaks-from-a-string) |
| 358 | [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint) |
| 359 | [What happens with negating an array](#what-happens-with-negating-an-array) |
| 360 | [What happens if we add two arrays](#what-happens-if-we-add-two-arrays) |
| 361 | [What is the output of prepend additive operator on falsy values](#what-is-the-output-of-prepend-additive-operator-on-falsy-values) |
| 362 | [How do you create self string using special characters](#how-do-you-create-self-string-using-special-characters) |
| 363 | [How do you remove falsy values from an array](#how-do-you-remove-falsy-values-from-an-array) |
| 364 | [How do you get unique values of an array](#how-do-you-get-unique-values-of-an-array) |
| 365 | [What is destructuring aliases](#what-is-destructuring-aliases) |
| 366 | [How do you map the array values without using map method](#how-do-you-map-the-array-values-without-using-map-method) |
| 367 | [How do you empty an array](#how-do-you-empty-an-array) |
| 368 | [How do you round numbers to certain decimals](#how-do-you-round-numbers-to-certain-decimals) |
| 369 | [What is the easiest way to convert an array to an object](#what-is-the-easiest-way-to-convert-an-array-to-an-object) |
| 370 | [How do you create an array with some data](#how-do-you-create-an-array-with-some-data) |
| 371 | [What are the placeholders from console object](#what-are-the-placeholders-from-console-object) |
| 372 | [Is it possible to add CSS to console messages](#is-it-possible-to-add-css-to-console-messages) |
| 373 | [What is the purpose of dir method of console object](#what-is-the-purpose-of-dir-method-of-console-object) |
| 374 | [Is it possible to debug HTML elements in console](#is-it-possible-to-debug-html-elements-in-console) |
| 375 | [How do you display data in a tabular format using console object](#how-do-you-display-data-in-a-tabular-format-using-console-object) |
| 376 | [How do you verify that an argument is a Number or not](#how-do-you-verify-that-an-argument-is-a-number-or-not) |
| 377 | [How do you create copy to clipboard button](#how-do-you-create-copy-to-clipboard-button) |
| 378 | [What is the shortcut to get timestamp](#what-is-the-shortcut-to-get-timestamp) |
| 379 | [How do you flattening multi dimensional arrays](#how-do-you-flattening-multi-dimensional-arrays) |
| 380 | [What is the easiest multi condition checking](#what-is-the-easiest-multi-condition-checking) |
| 381 | [How do you capture browser back button](#how-do-you-capture-browser-back-button) |
| 382 | [How do you disable right click in the web page](#how-do-you-disable-right-click-in-the-web-page) |
| 383 | [What are wrapper objects](#what-are-wrapper-objects) |
| 384 | [What is AJAX](#what-is-ajax) |
| 385 | [What are the different ways to deal with Asynchronous Code](#what-are-the-different-ways-to-deal-with-asynchronous-code) |
| 386 | [How to cancel a fetch request](#how-to-cancel-a-fetch-request) |
| 387 | [What is web speech API](#what-is-web-speech-api) |
| 388 | [What is minimum timeout throttling](#what-is-minimum-timeout-throttling) |
| 389 | [How do you implement zero timeout in modern browsers](#how-do-you-implement-zero-timeout-in-modern-browsers) |
| 390 | [What are tasks in event loop](#what-are-tasks-in-event-loop) |
| 391 | [What is microtask](#what-is-microtask) |
| 392 | [What are different event loops](#what-are-different-event-loops) |
| 393 | [What is the purpose of queueMicrotask](#what-is-the-purpose-of-queuemicrotask) |
| 394 | [How do you use javascript libraries in typescript file](#how-do-you-use-javascript-libraries-in-typescript-file) |
| 395 | [What are the differences between promises and observables](#what-are-the-differences-between-promises-and-observables) |
| 396 | [What is heap](#what-is-heap) |
| 397 | [What is an event table](#what-is-an-event-table) |
| 398 | [What is a microTask queue](#what-is-a-microtask-queue) |
| 399 | [What is the difference between shim and polyfill](#what-is-the-difference-between-shim-and-polyfill) |
| 400 | [How do you detect primitive or non primitive value type](#how-do-you-detect-primitive-or-non-primitive-value-type) |
| 401 | [What is babel](#what-is-babel) |
| 402 | [Is Node.js completely single threaded](#is-nodejs-completely-single-threaded) |
| 403 | [What are the common use cases of observables](#what-are-the-common-use-cases-of-observables) |
| 404 | [What is RxJS](#what-is-rxjs) |
| 405 | [What is the difference between Function constructor and function declaration](#what-is-the-difference-between-function-constructor-and-function-declaration) |
| 406 | [What is a Short circuit condition](#what-is-a-short-circuit-condition) |
| 407 | [What is the easiest way to resize an array](#what-is-the-easiest-way-to-resize-an-array) |
| 408 | [What is an observable](#what-is-an-observable) |
| 409 | [What is the difference between function and class declarations](#what-is-the-difference-between-function-and-class-declarations) |
| 410 | [What is an async function](#what-is-an-async-function) |
| 411 | [How do you prevent promises swallowing errors](#how-do-you-prevent-promises-swallowing-errors) |
| 412 | [What is deno](#what-is-deno) |
| 413 | [How do you make an object iterable in javascript](#how-do-you-make-an-object-iterable-in-javascript) |
| 414 | [What is a Proper Tail Call](#what-is-a-proper-tail-call) |
| 415 | [How do you check an object is a promise or not](#how-do-you-check-an-object-is-a-promise-or-not) |
| 416 | [How to detect if a function is called as constructor](#how-to-detect-if-a-function-is-called-as-constructor) |
| 417 | [What are the differences between arguments object and rest parameter](#what-are-the-differences-between-arguments-object-and-rest-parameter) |
| 418 | [What are the differences between spread operator and rest parameter](#what-are-the-differences-between-spread-operator-and-rest-parameter) |
| 419 | [What are the different kinds of generators](#what-are-the-different-kinds-of-generators) |
| 420 | [What are the built-in iterables](#what-are-the-built-in-iterables) |
| 421 | [What are the differences between for...of and for...in statements](#what-are-the-differences-between-forof-and-forin-statements) |
| 422 | [How do you define instance and non-instance properties](#how-do-you-define-instance-and-non-instance-properties) |
| 423 | [What is the difference between isNaN and Number.isNaN?](#what-is-the-difference-between-isnan-and-numberisnan) |
| 424 | [How to invoke an IIFE without any extra brackets?](#how-to-invoke-an-iife-without-any-extra-brackets) |
| 425 | [Is that possible to use expressions in switch cases?](#is-that-possible-to-use-expressions-in-switch-cases) |
| 426 | [What is the easiest way to ignore promise errors?](#what-is-the-easiest-way-to-ignore-promise-errors) |
| 427 | [How do style the console output using CSS?](#how-do-style-the-console-output-using-css) |
| 428 | [What is nullish coalescing operator (??)?](#what-is-nullish-coalescing-operator-) |
| 429 | [How do you group and nest console output?](#how-do-you-group-and-nest-console-output) |
| 430 | [What is the difference between dense and sparse arrays?](#what-is-the-difference-between-dense-and-sparse-arrays) |
| 431 | [What are the different ways to create sparse arrays?](#what-are-the-different-ways-to-create-sparse-arrays) |
| 432 | [What is the difference between setTimeout, setImmediate and process.nextTick?](#what-is-the-difference-between-settimeout-setimmediate-and-processnexttick) |
| 433 | [How do you reverse an array without modifying original array?](#how-do-you-reverse-an-array-without-modifying-original-array) |
| 434 | [How do you create custom HTML element?](#how-do-you-create-custom-html-element) |
| 435 | [What is global execution context?](#what-is-global-execution-context) |
| 436 | [What is function execution context?](#what-is-function-execution-context) |
| 437 | [What is debouncing?](#what-is-debouncing) |
| 438 | [What is throttling?](#what-is-throttling) |
| 439 | [What is optional chaining?](#what-is-optional-chaining) |
| 440 | [What is an environment record?](#what-is-an-environment-record) |
| 441 | [How to verify if a variable is an array?](#how-to-verify-if-a-variable-is-an-array) |
| 442 | [What is pass by value and pass by reference?](#what-is-pass-by-value-and-pass-by-reference) |
| 443 | [What are the differences between primitives and non-primitives?](#what-are-the-differences-between-primitives-and-non-primitives) |
| 444 | [How do you create your own bind method using either call or apply method?](#how-do-you-create-your-own-bind-method-using-either-call-or-apply-method) |
| 445 | [What are the differences between pure and impure functions?](#what-are-the-differences-between-pure-and-impure-functions) |
| 446 | [What is referential transparency?](#what-is-referential-transparency) |
| 447 | [What are the possible side-effects in javascript?](#what-are-the-possible-side-effects-in-javascript) |
| 448 | [What are compose and pipe functions?](#what-are-compose-and-pipe-functions) |
| 449 | [What is module pattern?](#what-is-module-pattern) |
| 450 | [What is Function Composition?](#what-is-function-composition) |
| 451 | [How to use await outside of async function prior to ES2022?](#how-to-use-await-outside-of-async-function-prior-to-es2022) |
| 452 | [What is the purpose of the this keyword in JavaScript?](#what-is-the-purpose-of-the-this-keyword-in-javascript) |
| 453 | [What are the uses of closures?](#what-are-the-uses-of-closures) |
| 454 | [What are the phases of execution context?](#what-are-the-phases-of-execution-context) |
| 455 | [What are the possible reasons for memory leaks?](#what-are-the-possible-reasons-for-memory-leaks) |
| 456 | [What are the optimization techniques of V8 engine?](#what-are-the-optimization-techniques-of-v8-engine) |
| 457 | [What are the examples of built-in higher order functions?](#what-are-the-examples-of-built-in-higher-order-functions) |
| 458 | [What are the benefits higher order functions?](#what-are-the-benefits-higher-order-functions) |
| 459 | [How do you create polyfills for map, filter and reduce methods?](#how-do-you-create-polyfills-for-map-filter-and-reduce-methods) |
| 460 | [What is the difference between map and forEach functions?](#what-is-the-difference-between-map-and-foreach-functions) |
| 461 | [Give an example of statements affected by automatic semicolon insertion?](#give-an-example-of-statements-affected-by-automatic-semicolon-insertion) |
| 462 | [What are the event phases of a browser?](#what-are-the-event-phases-of-a-browser) |
| 463 | [What are the real world use cases of proxy?](#what-are-the-real-world-use-cases-of-proxy) |
| 464 | [What are hidden classes?](#what-are-hidden-classes) |
| 465 | [What is inline caching?](#what-is-inline-caching) |
| 466 | [What are the different ways to execute external scripts?](#what-are-the-different-ways-to-execute-external-scripts) |
| 467 | [What is Lexical Scope?](#what-is-lexical-scope) |
| 468 | [How to detect system dark mode in javascript?](#how-to-detect-system-dark-mode-in-javascript) |
| 469 | [What is the purpose of requestAnimationFrame method?](#what-is-the-purpose-of-requestanimationframe-method) |
| 470 | [What is the difference between substring and substr methods?](#what-is-the-difference-between-substring-and-substr-methods) |
| 471 | [How to find the number of parameters expected by a function?](#how-to-find-the-number-of-parameters-expected-by-a-function) |
| 472 | [What is globalThis, and what is the importance of it?](#what-is-globalthis-and-what-is-the-importance-of-it) |
| 473 | [What are the array mutation methods?](#what-are-the-array-mutation-methods) |
| 474 | [What is module scope in JavaScript?](#what-is-module-scope-in-javascript) |
| 475 | [What are shadowing and illegal shadowing?](#what-are-shadowing-and-illegal-shadowing) |
| 476 | [Why is it important to remove event listeners after use?](#why-is-it-important-to-remove-event-listeners-after-use) |
| 477 | [What is structuredClone and how is it used for deep copying objects?](#what-is-structuredclone-and-how-is-it-used-for-deep-copying-objects) |
| 478 | [What is the difference between const and Object.freeze](#what-is-the-difference-between-const-and-objectfreeze) |
<!-- TOC_END -->

<!-- QUESTIONS_START -->

1. ### What are the possible ways to create objects in JavaScript

    There are many ways to create objects in javascript as mentioned below:

    1. **Object literal syntax:**

       The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

       ```javascript
       var object = {
         name: "Sudheer",
         age: 34,
       };
       ```

       Object literal property values can be of any data type, including array, function, and nested object.

       **Note:** This is one of the easiest ways to create an object and it's most commonly used for creating simple, ad-hoc objects.

    2. **Object constructor:**

       The simplest way to create an empty object is using the `Object` constructor. Currently this approach is not recommended.

       ```javascript
       var object = new Object();
       ```

       The `Object()` is a built-in constructor function so "new" keyword is not required for creating plain objects. The above code snippet can be re-written as:

       ```javascript
       var object = Object();
       ```
       However, `Object()` can be used to either create a plain object or convert a given value into its corresponding object wrapper, whereas `new Object()` is specifically used to explicitly create a new object instance.
       
    3. **Object's create method:**

       The `create` method of Object is used to create a new object by passing the specified prototype object and properties as arguments, i.e., this pattern is helpful to create new objects based on existing objects. In other words, this is useful for setting up **prototypal inheritance**. The second argument is optional and it is used to create properties on a newly created object.

       The following code creates a new empty object whose prototype is null.

       ```javascript
       var object = Object.create(null);
       ```

       The following example creates an object along with additional new properties.

       ```javascript
       let vehicle = {
         wheels: "4",
         fuelType: "Gasoline",
         color: "Green",
       };
       let carProps = {
         type: {
           value: "Volkswagen",
         },
         model: {
           value: "Golf",
         },
       };

       var car = Object.create(vehicle, carProps);
       console.log(car);
       ```

    4. **Function constructor:**

       In this approach, create any function and apply the new operator to create object instances. This was the main way to do constructor-based OOP before ES6 classes.

       ```javascript
       function Person(name) {
         this.name = name;
         this.age = 21;
       }
       var object = new Person("Sudheer");
       ```
    5. **Function constructor with prototype:**

       This is similar to function constructor but it uses prototype for their properties and methods. Using prototype means you're sharing methods/properties across instances, which saves memory and improve performance.

       ```javascript
       function Person() {}
       Person.prototype.name = "Sudheer";
       var object = new Person();
       ```

       This is equivalent to creating an instance with `Object.create` method with a function prototype and then calling that function with an instance and parameters as arguments.

       ```javascript
       function func(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
       }

       var instance = new func(1, 2, 3);
       ```

       **(OR)**

       ```javascript
       function func(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
       }
       // Create a new instance using function prototype.
       var newInstance = Object.create(func.prototype);

       // Call the function
       var result = func.call(newInstance, 1, 2, 3);

       // If the result is a non-null object then use it otherwise just use the new instance.
       console.log(result && typeof result === 'object' ? result : newInstance);
       ```

    6. **Object's assign method:**

       The `Object.assign` method is used to copy all the properties from one or more source objects and stores them into a target object. This is mainly used for cloning and merging

       The following code creates a new staff object by copying properties of his working company and the car he owns.

       ```javascript
       const orgObject = { company: "XYZ Corp" };
       const carObject = { name: "Toyota" };
       const staff = Object.assign({}, orgObject, carObject);
       ```

    7. **ES6 Class syntax:**

       ES6 introduces class feature to create objects. This is syntactic sugar over the prototype-based system.

       ```javascript
       class Person {
         constructor(name) {
           this.name = name;
         }
       }

       var object = new Person("Sudheer");
       ```

    8. **Singleton pattern:**

       A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance. This way one can ensure that they don't accidentally create multiple instances.

        ##### Singleton with Closure (Classic JS Pattern)
        ```javascript
        const Singleton = (function () {
        let instance;

        function createInstance() {
          return { name: "Sudheer" };
        }

        return {
          getInstance: function () {
            if (!instance) {
              instance = createInstance();
            }
            return instance;
          }
        };
        })();

        // Usage
        const obj1 = Singleton.getInstance();
        const obj2 = Singleton.getInstance();

        console.log(obj1 === obj2); // true
        ```
         In modern JavaScript applications, singletons are commonly implemented using ES6 modules for their built-in caching behavior, or closures for encapsulated state management.

      **[⬆ Back to Top](#table-of-contents)**

2. ### What is the Prototype Chain?

    The **prototype chain** is a core concept in JavaScript’s inheritance system. It allows objects to inherit properties and methods from other objects.

    When you try to access a property or method on an object, JavaScript first checks whether that property exists directly on the object itself. If it is not found, JavaScript looks at the object’s prototype (its internal `[[Prototype]]` reference). If the property still is not found, the search continues up the prototype chain until the property is found or the chain ends with `null`.

    You can access an object’s prototype using:

    ```javascript
    Object.getPrototypeOf(obj)
    ```

    or the deprecated:

    ```javascript
    obj.__proto__
    ```

    For objects created using constructor functions, the prototype chain works like this:

    ```javascript
    function Person() {}

    const person1 = new Person();

    console.log(Object.getPrototypeOf(person1) === Person.prototype); // true
    ```

    Here:

    * `person1` is an instance object.
    * Its prototype is `Person.prototype`.
    * `Person.prototype` itself inherits from `Object.prototype`.
    * `Object.prototype` is the top of the standard prototype chain, whose prototype is `null`.

    So the chain looks like:

    ```text
    person1
      ↓
    Person.prototype
      ↓
    Object.prototype
      ↓
    null
    ```

    Example of inheritance through the prototype chain:

    ```javascript
    function Person(name) {
      this.name = name;
    }

    Person.prototype.greet = function () {
      console.log(`Hello, my name is ${this.name}`);
    };

    const user = new Person("Swarup");

    user.greet(); // Hello, my name is Swarup
    ```

    In this example:

    * `greet()` is not directly inside `user`.
    * JavaScript searches for it in `Person.prototype`.
    * Since it finds the method there, it executes it.

    ### Summary

    * The prototype chain enables inheritance in JavaScript.
    * If a property or method is not found on an object, JavaScript searches its prototype chain.
    * An object’s prototype can be accessed using `Object.getPrototypeOf(obj)`.
    * Constructor functions use their `.prototype` object for shared methods and properties.
    * The prototype chain ends when the prototype becomes `null`.

    
    ![Screenshot](images/prototype_chain.png)

    **[⬆ Back to Top](#table-of-contents)**

3. ### What is the Difference Between `call`, `apply`, and `bind`

  In JavaScript, `call`, `apply`, and `bind` are methods that allow you to control the context (`this` value) in which a function is executed. While their purposes are similar, they differ in how they handle arguments and when the function is invoked.

  ---

  #### `call`

  - **Description:**  
    The `call()` method invokes a function immediately, allowing you to specify the value of `this` and pass arguments individually (comma-separated).

  - **Syntax:**  
    ```js
    func.call(thisArg, arg1, arg2, ...)
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
    invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### `apply`

  - **Description:**  
    The `apply()` method is similar to `call()`, but it takes the function arguments as an array (or array-like object) instead of individual arguments.

  - **Syntax:**  
    ```js
    func.apply(thisArg, [argsArray])
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
    invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### `bind`

  - **Description:**  
    The `bind()` method creates a new function with a specific `this` value and, optionally, preset initial arguments. Unlike `call` and `apply`, `bind` does **not** immediately invoke the function; instead, it returns a new function that you can call later.

  - **Syntax:**  
    ```js
    var boundFunc = func.bind(thisArg[, arg1[, arg2[, ...]]])
    ```

  - **Example:**
    ```js
    var employee1 = { firstName: "John", lastName: "Rodson" };
    var employee2 = { firstName: "Jimmy", lastName: "Baily" };

    function invite(greeting1, greeting2) {
      console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
      );
    }

    var inviteEmployee1 = invite.bind(employee1);
    var inviteEmployee2 = invite.bind(employee2);

    inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
    inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
    ```

  ---

  #### Summary

  | Method | Invokes Function Immediately? | How Arguments Are Passed         | Returns      |
  |--------|-------------------------------|----------------------------------|--------------|
  | `call` | Yes                           | Comma-separated list             | Function's result |
  | `apply`| Yes                           | Array or array-like object       | Function's result |
  | `bind` | No                            | (Optional) preset, then rest     | New function      |

  ---

  ## Key Points

  - **`call`** and **`apply`** are almost interchangeable; both invoke the function immediately, but differ in how arguments are passed.
      - _Tip:_ "Call is for Comma-separated, Apply is for Array."
  - **`bind`** does not execute the function immediately. Instead, it creates a new function with the specified `this` value and optional arguments, which can be called later.

  - Use `call` or `apply` when you want to immediately invoke a function with a specific `this` context. Use `bind` when you want to create a new function with a specific `this` context to be invoked later.
  
  ---

  **[⬆ Back to Top](#table-of-contents)**

4. ### What is JSON and its common operations

    **JSON (JavaScript Object Notation)** is a lightweight, text-based data format that uses JavaScript object syntax for structuring data. It was popularized by Douglas Crockford and is widely used for transmitting data between a server and a client in web applications. JSON files typically have a `.json` extension and use the MIME type `application/json`. 

    #### Common Operations with JSON

    1. **Parsing**: Transforming a JSON-formatted string into a native JavaScript object.
      ```js
      const obj = JSON.parse(jsonString);
      ```
      - Example:  
        ```js
        const jsonString = '{"name":"John","age":30}';
        const obj = JSON.parse(jsonString);  // { name: "John", age: 30 }
        ```

    2. **Stringification**: Converting a JavaScript object into a JSON-formatted string, commonly used for data transmission or storage.
      ```js
      const jsonString = JSON.stringify(object);
      ```
      - Example:  
        ```js
        const obj = { name: "Jane", age: 25 };
        const jsonString = JSON.stringify(obj);  // '{"name":"Jane","age":25}'
        ```

    **[⬆ Back to Top](#table-of-contents)**

5. ### What is the purpose of the array slice method

    The `slice()` method in JavaScript is used to extract a section of an array, returning a new array containing the selected elements. It does not modify the original array. The method takes two arguments:

    - **start**: The index at which extraction begins (inclusive).
    - **end** (optional): The index before which to end extraction (exclusive). If omitted, extraction continues to the end of the array.

    You can also use negative indices, which count from the end of the array.

    #### Examples:

    ```js
    let arrayIntegers = [1, 2, 3, 4, 5];

    let arrayIntegers1 = arrayIntegers.slice(0, 2);    // [1, 2]
    let arrayIntegers2 = arrayIntegers.slice(2, 3);    // [3]
    let arrayIntegers3 = arrayIntegers.slice(4);       // [5]
    let arrayIntegers4 = arrayIntegers.slice(-3, -1);  // [3, 4]
    ```

    **Note:**  
    The `slice()` method does **not** mutate (change) the original array; instead, it returns a new array containing the extracted elements.

    **[⬆ Back to Top](#table-of-contents)**

6. ### What is the purpose of the array splice method

    The `splice()` method in JavaScript is used to add, remove, or replace elements within an array. Unlike `slice()`, which creates a shallow copy and does not alter the original array, `splice()` **modifies the original array in place** and returns an array containing the removed elements.

    #### Syntax

    ```javascript
    array.splice(start, deleteCount, item1, item2, ...)
    ```
    - **start:** The index at which to start changing the array.
    - **deleteCount:** (Optional) The number of elements to remove from the array. If omitted, all elements from the start index to the end of the array will be removed.
    - **item1, item2, ...:** (Optional) Elements to add to the array, starting at the start position.

    #### Examples

    ```javascript
    let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
    let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

    // Remove the first two elements
    let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); 
    // arrayIntegers1: [1, 2]
    // arrayIntegersOriginal1 (after): [3, 4, 5]

    // Remove all elements from index 3 onwards
    let arrayIntegers2 = arrayIntegersOriginal2.splice(3);     
    // arrayIntegers2: [4, 5]
    // arrayIntegersOriginal2 (after): [1, 2, 3]

    // Remove 1 element at index 3, then insert "a", "b", "c" at that position
    let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); 
    // arrayIntegers3: [4]
    // arrayIntegersOriginal3 (after): [1, 2, 3, "a", "b", "c", 5]
    ```

    **Note:**  
    - The `splice()` method **modifies the original array**.
    - It returns an array containing the elements that were removed (if any).
    - You can use it both to remove and insert elements in a single operation.

    **[⬆ Back to Top](#table-of-contents)**

7. ### What is the difference between slice and splice
   
    Here are the key differences between `slice()` and `splice()` methods in JavaScript arrays:

    | `slice()`                                         | `splice()`                                          |
    | ------------------------------------------------- | --------------------------------------------------- |
    | Does **not** modify the original array (immutable) | Modifies the original array (mutable)               |
    | Returns a **shallow copy** (subset) of selected elements | Returns an array of the **removed** elements           |
    | Used to **extract** elements from an array         | Used to **add**, **remove**, or **replace** elements in an array |
    | Syntax: `array.slice(start, end)`                  | Syntax: `array.splice(start, deleteCount, ...items)`             |

    **Summary:**  
    - Use `slice()` when you want to copy or extract elements without altering the original array.
    - Use `splice()` when you need to add, remove, or replace elements and want to change the original array.

    **[⬆ Back to Top](#table-of-contents)**

8. ### How do you compare Object and Map

    **Objects** and **Maps** both allow you to associate keys with values, retrieve those values, delete keys, and check if a key exists. Historically, Objects have been used as Maps, but there are several key differences that make `Map` a better choice in certain scenarios:

    | Feature                  | Object                                              | Map                                                      |
    |--------------------------|-----------------------------------------------------|----------------------------------------------------------|
    | **Key Types**            | Only strings and symbols are valid keys             | Any value can be used as a key (objects, functions, primitives) |
    | **Key Order**            | Keys are unordered (in practice, insertion order is mostly preserved for string keys, but not guaranteed) | Keys are ordered by insertion; iteration follows insertion order |
    | **Size Property**        | No built-in way to get the number of keys; must use `Object.keys(obj).length` | Use the `.size` property for the number of entries        |
    | **Iterability**          | Not directly iterable; must use `Object.keys`, `Object.values`, or `Object.entries` | Directly iterable with `for...of`, `.keys()`, `.values()`, `.entries()` |
    | **Prototype**            | Has a prototype chain; may have default properties that can collide with custom keys (can be avoided with `Object.create(null)`) | Does not have a prototype, so there are no default keys   |
    | **Performance**          | May be less efficient for frequent additions/removals | Optimized for frequent additions and deletions            |
    | **Serialization**        | Can be easily serialized to JSON                    | Cannot be directly serialized to JSON                     |

    **[⬆ Back to Top](#table-of-contents)**

9. ### What is the difference between == and === operators
    JavaScript provides two types of equality operators:

    - **Loose equality (`==`, `!=`)**: Performs type conversion if the types differ, comparing values after converting them to a common type.
    - **Strict equality (`===`, `!==`)**: Compares both value and type, without any type conversion.

    #### Strict Equality (`===`)
    - Two strings are strictly equal if they have exactly the same sequence of characters and length.
    - Two numbers are strictly equal if they have the same numeric value.
      - **Special cases:**
        - `NaN === NaN` is `false`
        - `+0 === -0` is `true`
    - Two booleans are strictly equal if both are `true` or both are `false`.
    - Two objects are strictly equal if they refer to the **same object** in memory.
    - `null` and `undefined` are **not** strictly equal.

    #### Loose Equality (`==`)
    - Converts operands to the same type before making the comparison.
    - `null == undefined` is `true`.
    - `"1" == 1` is `true` because the string is converted to a number.
    - `0 == false` is `true` because `false` is converted to `0`.

    #### Examples:

    ```javascript
    0 == false            // true      (loose equality, type coercion)
    0 === false           // false     (strict equality, different types)
    1 == "1"              // true      (string converted to number)
    1 === "1"             // false     (different types)
    null == undefined     // true      (special case)
    null === undefined    // false     (different types)
    '0' == false          // true      ('0' is converted to 0)
    '0' === false         // false     (different types)
    NaN == NaN            // false     (NaN is never equal to itself)
    NaN === NaN           // false
    [] == []              // false     (different array objects)
    [] === []             // false
    {} == {}              // false     (different object references)
    {} === {}             // false
    ```
    **[⬆ Back to Top](#table-of-contents)**

10. ### What are lambda expressions or arrow functions

    **Arrow functions** (also known as "lambda expressions") provide a concise syntax for writing function expressions in JavaScript. Introduced in ES6, arrow functions are often shorter and more readable, especially for simple operations or callbacks.

    #### Key Features:
    - Arrow functions do **not** have their own `this`, `arguments`, `super`, or `new.target` bindings. They inherit these from their surrounding (lexical) context.
    - They are best suited for non-method functions, such as callbacks or simple computations.
    - Arrow functions **cannot** be used as constructors and do not have a `prototype` property.
    - They also cannot be used with `new`, `yield`, or as generator functions.

    #### Syntax Examples:

    ```javascript
    const arrowFunc1 = (a, b) => a + b;    // Multiple parameters, returns a + b
    const arrowFunc2 = a => a * 10;        // Single parameter (parentheses optional), returns a * 10
    const arrowFunc3 = () => {};           // No parameters, returns undefined
    const arrowFunc4 = (a, b) => {
      // Multiple statements require curly braces and explicit return
      const sum = a + b;
      return sum * 2;
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

11. ### What is a first class function

    In JavaScript, **first-class functions(first-class citizens)** mean that functions are treated like any other variable. That means:

    1. You can assign a function to a variable.
    2. You can pass a function as an argument to another function.
    3. You can return a function from another function.

    This capability enables powerful patterns like callbacks, higher-order functions, event handling, and functional programming in JavaScript.
    
    For example, the handler function below is assigned to a variable and then passed as an argument to the `addEventListener` method.

    ```javascript
    const handler = () => console.log("This is a click handler function");
    document.addEventListener("click", handler);
    ```

    **[⬆ Back to Top](#table-of-contents)**

12. ### What is a first order function

    A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value. i.e,  It's a regular function that works with primitive or non-function values.

    ```javascript
    const firstOrder = () => console.log("I am a first order function!");
    ```

    **[⬆ Back to Top](#table-of-contents)**

13. ### What is a higher order function

    A higher-order function is a function that either accepts another function as an argument, returns a function as its result, or both. This concept is a core part of JavaScript's functional programming capabilities and is widely used for creating modular, reusable, and expressive code.

    The syntactic structure of higher order function will be explained with an example as follows,

      ```javascript
      // First-order function (does not accept or return another function)
      const firstOrderFunc = () => 
        console.log("Hello, I am a first-order function");

      // Higher-order function (accepts a function as an argument)
      const higherOrder = (callback) => callback();

      // Passing the first-order function to the higher-order function
      higherOrder(firstOrderFunc);
      ```

    In this example:

    1. `firstOrderFunc` is a regular (first-order) function.

    2. `higherOrder` is a higher-order function because it takes another function as an argument.

    3. `firstOrderFunc` is also called a **callback function** because it is passed to and executed by another function.

    **[⬆ Back to Top](#table-of-contents)**

14. ### What is a unary function

    A unary function (also known as a **monadic** function) is a function that **accepts exactly one argument**. The term "unary" simply refers to the function's arity—the number of arguments it takes.

    Let us take an example of unary function,

    ```javascript
    const unaryFunction = (a) => console.log(a + 10); // This will add 10 to the input and log the result
    unaryFunction(5); // Output: 15
    ```
    In this example:

    - `unaryFunction` takes a single parameter `a`, making it a unary function.
    - It performs a simple operation: adding 10 to the input and printing the result.

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is the currying function
    
    **Currying** is the process of transforming a function with **multiple arguments** into a sequence of **nested functions**, each accepting **only one argument** at a time.

    This concept is named after mathematician **Haskell Curry**, and is commonly used in functional programming to enhance modularity and reuse.


    ## Before Currying (Normal n-ary Function)

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;

    console.log(multiArgFunction(1, 2, 3)); // Output: 6
    ```
    This is a standard function that takes three arguments at once.

    ## After Currying (Unary Function Chain)
    ```javascript
    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

    console.log(curryUnaryFunction(1));       // Returns: function (b) => ...
    console.log(curryUnaryFunction(1)(2));    // Returns: function (c) => ...
    console.log(curryUnaryFunction(1)(2)(3)); // Output: 6

    ```
    Each function in the chain accepts one argument and returns the next function, until all arguments are provided and the final result is computed.

    ## Benefits of Currying
      - Improves code reusability
      → You can partially apply functions with known arguments.

      - Enhances functional composition
      → Easier to compose small, pure functions.

      - Encourages clean, modular code
      → You can split logic into smaller single-responsibility functions.

    **[⬆ Back to Top](#table-of-contents)**

16. ### What is a pure function

    A **pure function** is a function whose output depends only on its input arguments and produces no side effects. This means that given the same inputs, a pure function will always return the same output, and it does not modify any external state or data.

    Let's take an example to see the difference between pure and impure functions,

    #### Example: Pure vs. Impure Functions

    ```javascript
    // Impure Function
    let numberArray = [];
    const impureAddNumber = (number) => numberArray.push(number);

    // Pure Function
    const pureAddNumber = (number) => (inputArray) =>
      inputArray.concat([number]);

    // Usage
    console.log(impureAddNumber(6)); // returns 1
    console.log(numberArray);        // returns [6]

    console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
    console.log(numberArray);                   // remains [6]
    ```
    - `impureAddNumber` changes the external variable numberArray and returns the new length of the array, making it impure.
    - `pureAddNumber` creates a new array with the added number and does not modify the original array, making it pure.

17. ### What are the benefits of pure functions
    Some of the major benefits of pure functions are listed below,

    - **Easier testing:** Since output depends only on input, pure functions are simple to test.
    - **Predictability:** No hidden side effects make behavior easier to reason about.
    - **Immutability:** Pure functions align with ES6 best practices, such as preferring const over let, supporting safer and more maintainable code.
    - **No side effects:** Reduces bugs related to shared state or mutation.

    **[⬆ Back to Top](#table-of-contents)**

18. ### What is the purpose of the let keyword

    The `let` keyword in JavaScript is used to declare a **block-scoped local variable**. This means that variables declared with `let` are only accessible within the block, statement, or expression where they are defined. This is a significant improvement over the older `var` keyword, which is function-scoped (or globally-scoped if declared outside a function), and does not respect block-level scoping.

    #### Key Features of `let`:
    - **Block Scope:** The variable exists only within the nearest enclosing block (e.g., inside an `{}` pair).
    - **No Hoisting Issues:** While `let` declarations are hoisted, they are not initialized until the code defining them is executed. Accessing them before declaration results in a ReferenceError (temporal dead zone).
    - **No Redeclaration:** The same variable cannot be declared twice in the same scope with `let`.

    #### Example:

    ```javascript
    let counter = 30;
    if (counter === 30) {
      let counter = 31;
      console.log(counter); // Output: 31 (block-scoped variable inside if-block)
    }
    console.log(counter); // Output: 30 (outer variable, unaffected by inner block)
    ```

    In this example, the `counter` inside the `if` block is a separate variable from the one outside. The `let` keyword ensures that both have their own distinct scope.

    In summary, you need to use `let` when you want variables to be limited to the block in which they are defined, preventing accidental overwrites and bugs related to variable scope.

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is the difference between let and var

    You can list out the differences in a tabular format

    | var                                                            | let                                           |
    | -------------------------------------------------------------- | --------------------------------------------- |
    | It has been available from the beginning of JavaScript         | Introduced as part of ES6                     |
    | It has function scope                                          | It has block scope                            |
    | Variable declaration will be hoisted, initialized as undefined | Hoisted but not initialized                   |
    | It is possible to re-declare the variable in the same scope    | It is not possible to re-declare the variable |

    Let's take an example to see the difference,

    ```javascript
    function userDetails(username) {
      if (username) {
        console.log(salary); // undefined due to hoisting
        console.log(age); // ReferenceError: Cannot access 'age' before initialization
        let age = 30;
        var salary = 10000;
      }
      console.log(salary); //10000 (accessible due to function scope)
      console.log(age); //error: age is not defined(due to block scope)
    }
    userDetails("John");
    ```

    **[⬆ Back to Top](#table-of-contents)**

20. ### What is the reason to choose the name let as a keyword

    The keyword `let` was chosen because it originates from mathematical notation, where "let" is used to introduce new variables (for example, "let x = 5"). This term was adopted by several early programming languages such as Scheme and BASIC, establishing a tradition in computer science. JavaScript follows this convention by using `let` to declare variables with block scope, providing a modern alternative to `var`. The choice helps make the language more familiar to programmers coming from other languages and aligns with the mathematical practice of variable assignment.

    **[⬆ Back to Top](#table-of-contents)**

21. ### How do you redeclare variables in a switch block without an error

    When you try to redeclare variables using `let` or `const` in multiple `case` clauses of a `switch` statement, you will get a SyntaxError. This happens because, in JavaScript, all `case` clauses within a `switch` statement share the same block scope. For example:
    
    ```javascript
    let counter = 1;
    switch (x) {
      case 0:
        let name;
        break;
      case 1:
        let name; // SyntaxError: Identifier 'name' has already been declared
        break;
    }
    ```
    
    To avoid this error, you can create a new block scope within each `case` clause by wrapping the code in curly braces `{}`. This way, each `let` or `const` declaration is scoped only to that block, and redeclaration errors are avoided:
    
    ```javascript
    let counter = 1;
    switch (x) {
      case 0: {
        let name;
        // code for case 0
        break;
      }
      case 1: {
        let name; // No SyntaxError
        // code for case 1
        break;
      }
    }
    ```
    
    That means, to safely redeclare variables in different cases of a switch statement, wrap each case’s code in its own block using curly braces. This ensures each variable declaration is scoped to its specific case block.
    
    **[⬆ Back to Top](#table-of-contents)**

22. ### What is the Temporal Dead Zone

    The **Temporal Dead Zone (TDZ)** refers to the period between the start of a block and the point where a variable declared with `let` or `const` is initialized. During this time, the variable exists in scope but **cannot be accessed**, and attempting to do so results in a `ReferenceError`.
    
    This behavior is part of **JavaScript's ES6 (ECMAScript 2015)** specification and applies **only to variables declared with `let` and `const`**, not `var`. Variables declared with `var` are **hoisted** and initialized with `undefined`, so accessing them before the declaration does not throw an error, though it can lead to unexpected results.
    
    #### Example
    
    ```javascript
    function someMethod() {
        console.log(counter1); // Output: undefined (due to var hoisting)
        console.log(counter2); // Throws ReferenceError (TDZ for let)
    
        var counter1 = 1;
        let counter2 = 2;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### What is an IIFE (Immediately Invoked Function Expression)

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    ```javascript
    (function () {
      // logic here
    })();
    ```

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an error as below,

    ```javascript
    (function () {
      var message = "IIFE";
      console.log(message);
    })();
    console.log(message); //Error: message is not defined
    ```

    **[⬆ Back to Top](#table-of-contents)**

24. ### How do you decode or encode a URL in JavaScript?

    `encodeURI()` function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string.
    `decodeURI()` function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

    **Note:** If you want to encode characters such as `/ ? : @ & = + $ #` then you need to use `encodeURIComponent()`.

    ```javascript
    let uri = "employeeDetails?name=john&occupation=manager";
    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);
    ```

    **[⬆ Back to Top](#table-of-contents)**

25. ### What is memoization

    Memoization is a functional programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.
    Let's take an example of adding function with memoization,

    ```javascript
    const memoizeAddition = () => {
      let cache = {};
      return (value) => {
        if (value in cache) {
          console.log("Fetching from cache");
          return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        } else {
          console.log("Calculating result");
          let result = value + 20;
          cache[value] = result;
          return result;
        }
      };
    };
    // returned function from memoizeAddition
    const addition = memoizeAddition();
    console.log(addition(20)); //output: 40 calculated
    console.log(addition(20)); //output: 40 cached
    ```

    **[⬆ Back to Top](#table-of-contents)**

26. ### What is Hoisting

 
Hoisting is JavaScript's default behavior where **variable and function declarations** are moved to the top of their scope before code execution. This means you can access certain variables and functions even before they are defined in the code.


Example of variable hoisting:

```js
console.log(message); // Output: undefined
var message = "The variable has been hoisted";
```

```js
var message;
console.log(message); // undefined
message = "The variable has been hoisted";
```

Example of function hoisting:

```js
message("Good morning"); // Output: Good morning

function message(name) {
  console.log(name);
}
```

Because of hoisting, functions can be used before they are declared.

  **[⬆ Back to Top](#table-of-contents)**

27. ### What are Classes in ES6?

ES6 introduced **classes** as a cleaner and more intuitive syntax for creating objects and implementing inheritance in JavaScript. However, classes do **not** introduce a new inheritance model. They are primarily **syntactic sugar** over JavaScript's existing prototype-based inheritance system.

Before ES6, constructor functions and prototypes were commonly used to create objects and share methods:

```javascript
function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + " bike has " + this.color + " color";
};
```

The same functionality can be written using ES6 class syntax:

```javascript
class Bike {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  getDetails() {
    return this.model + " bike has " + this.color + " color";
  }
}
```

Although the syntax is different, both approaches create objects that use prototypes under the hood. Methods defined inside a class are automatically added to the class's prototype rather than being copied to each instance.

For example:

```javascript
const bike = new Bike("Honda", "Red");

console.log(bike.getDetails());
// Honda bike has Red color
```

### Summary

* ES6 classes provide a cleaner and more readable syntax for creating objects.
* Classes are built on top of JavaScript's prototype-based inheritance system.
* Methods defined in a class are stored on the class's prototype.
* Classes support features such as constructors, inheritance (`extends`), and parent method access (`super`).
* Under the hood, ES6 classes still use prototypes for inheritance.


    **[⬆ Back to Top](#table-of-contents)**

28. ### What are Closures?

A **closure** is the combination of a function and the **lexical environment** in which that function was declared. In other words, a closure allows a function to access variables from its outer (enclosing) scope even after the outer function has finished executing.

A closure has access to:

1. Its own scope (variables declared inside the function).
2. Variables and parameters of its outer (enclosing) function.
3. Global variables.

Consider the following example:

```javascript
function welcome(name) {
  function greetingInfo(message) {
    console.log(message + " " + name);
  }

  return greetingInfo;
}

const myFunction = welcome("John");

myFunction("Welcome");   // Output: Welcome John
myFunction("Hello Mr."); // Output: Hello Mr. John
```

### How does this work?

When `welcome("John")` is called, it returns the inner function `greetingInfo`. Even after `welcome()` has finished executing, `greetingInfo` still has access to the parameter `name` because it forms a **closure** over the lexical environment of `welcome()`.

As a result, whenever `myFunction` is invoked, it can access the value of `name` (`"John"`) that was available when the closure was created.

### Summary

* A closure is a function bundled together with its lexical environment.
* Closures allow inner functions to access variables from their outer scopes even after the outer function has returned.
* They have access to their own scope, outer function scopes, and the global scope.
* Closures are commonly used for data encapsulation, private variables, callbacks, and maintaining state between function calls.


    **[⬆ Back to Top](#table-of-contents)**

29. ### What are Modules?

Modules are small, independent, and reusable pieces of code that encapsulate specific functionality. They help organize code into separate files, making applications easier to develop, maintain, test, and reuse.

A module can export variables, functions, classes, or objects so that other modules can use them. Modules are a fundamental part of modern JavaScript and form the basis of many design patterns.

#### Benefits of Modules

1. **Code Reusability** – Write once and use in multiple places.
2. **Maintainability** – Keep related code together in separate files.
3. **Encapsulation** – Hide internal implementation details and expose only what is needed.
4. **Avoid Global Scope Pollution** – Prevent naming conflicts by keeping variables scoped to the module.
5. **Dependency Management** – Explicitly define what a module imports and exports.

#### Example

**math.js**

```javascript
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;
```

**app.js**

```javascript
import { add, PI } from "./math.js";

console.log(add(2, 3)); // 5
console.log(PI); // 3.14159
```

In this example:

* `math.js` exports a function and a constant.
* `app.js` imports and uses them.

Most JavaScript modules export one or more of the following:

* Variables
* Functions
* Classes
* Objects
* Constructor functions

This modular approach makes JavaScript applications more scalable and easier to manage.


  **[⬆ Back to Top](#table-of-contents)**

30. ### Why do you need modules?

Modules are used to organize JavaScript code into small, independent, and reusable units. They help improve code quality, maintainability, and scalability, especially in large applications.

#### Benefits of Using Modules

1. **Maintainability**

   * Code is divided into smaller, focused files.
   * Easier to understand, debug, test, and update.
   * Changes in one module are less likely to affect other parts of the application.

2. **Reusability**

   * Modules can be imported and used across different parts of an application or even in multiple projects.
   * Reduces code duplication and promotes the DRY (Don't Repeat Yourself) principle.

3. **Namespacing**

   * Each module has its own scope.
   * Prevents variables, functions, and classes from polluting the global scope.
   * Avoids naming conflicts between different parts of the application.

#### Example

```javascript
// math.js
export function add(a, b) {
  return a + b;
}
```

```javascript
// app.js
import { add } from "./math.js";

console.log(add(2, 3)); // 5
```

Here, the `add` function is encapsulated within `math.js` and can be reused wherever needed without affecting the global namespace.

**[⬆ Back to Top](#table-of-contents)**

31. ### What is Scope in JavaScript?

**Scope** refers to the accessibility or visibility of variables, functions, and objects in different parts of a JavaScript program during runtime. It determines where a variable can be accessed or referenced within the code.

In other words, **scope defines the region of code in which a variable or other resource is available and can be used**.

#### Types of Scope in JavaScript

1. **Global Scope**

   * Variables declared outside any function or block are accessible from anywhere in the program.

   ```javascript
   let name = "John";

   function greet() {
     console.log(name);
   }

   greet(); // John
   ```

2. **Function Scope**

   * Variables declared inside a function are accessible only within that function.

   ```javascript
   function greet() {
     let message = "Hello";
     console.log(message);
   }

   greet(); // Hello
   // console.log(message); // ReferenceError
   ```

3. **Block Scope**

   * Variables declared with `let` and `const` inside a block (`{}`) are accessible only within that block.

   ```javascript
   if (true) {
     let age = 25;
     const city = "Kolkata";
     console.log(age, city);
   }

   // console.log(age);  // ReferenceError
   // console.log(city); // ReferenceError
   ```

#### Why is Scope Important?

* Prevents variable naming conflicts.
* Improves code organization and maintainability.
* Helps achieve data hiding and encapsulation.
* Controls the lifetime and accessibility of variables.

**In summary:** Scope is the mechanism that determines where variables, functions, and objects can be accessed in a JavaScript program.

  **[⬆ Back to Top](#table-of-contents)**

32. ### What is a Service Worker?

A **Service Worker** is a JavaScript file that runs in the background, separate from the web page. It acts as a proxy between the web application and the network, enabling advanced features that do not require direct user interaction or an active webpage.

Service workers are event-driven and can continue working even when the web page is closed, making them a key technology behind **Progressive Web Apps (PWAs)**.

#### Key Features of Service Workers

1. **Offline Support**

   * Cache application assets and API responses.
   * Allow applications to work even when the user has no internet connection.

2. **Network Request Interception**

   * Intercept and handle network requests.
   * Serve cached content when appropriate.

3. **Background Sync**

   * Synchronize data with the server when connectivity is restored.
   * Useful for sending queued requests after going back online.

4. **Push Notifications**

   * Receive and display notifications even when the application is not open.

5. **Cache Management**

   * Programmatically store, update, and remove cached resources.
   * Improve application performance and reduce network usage.

#### How Service Workers Work

1. The browser registers the service worker.
2. The service worker is installed and activated.
3. It listens for events such as:

   * `install`
   * `activate`
   * `fetch`
   * `push`
   * `sync`
4. It can intercept network requests and respond with cached or network data.

#### Example

**Registering a Service Worker**

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker registered"))
    .catch((error) => console.error("Registration failed:", error));
}
```

**Basic Service Worker**

```javascript
self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
});
```

#### Benefits

* Faster page loading through caching.
* Better user experience in poor network conditions.
* Offline-first application support.
* Background synchronization capabilities.
* Push notification support.

**In summary:** A Service Worker is a background script that enables offline experiences, caching, push notifications, background synchronization, and network request interception, making modern web applications faster, more reliable, and capable of working without a constant internet connection.


  **[⬆ Back to Top](#table-of-contents)**

33. ### How do you manipulate the DOM using a Service Worker?

A **Service Worker cannot access or manipulate the DOM directly** because it runs in a separate background thread, independent of any web page.

However, a service worker can communicate with the web pages it controls using the **`postMessage()`** API. The page can then receive the message and perform the required DOM manipulation.

#### Service Worker (`service-worker.js`)

```javascript
self.addEventListener("message", (event) => {
  console.log("Message received:", event.data);
});

self.clients.matchAll().then((clients) => {
  clients.forEach((client) => {
    client.postMessage({
      type: "UPDATE_UI",
      message: "Update the page content",
    });
  });
});
```

#### Web Page (`app.js`)

```javascript
navigator.serviceWorker.addEventListener("message", (event) => {
  if (event.data.type === "UPDATE_UI") {
    document.getElementById("status").textContent =
      event.data.message;
  }
});
```

#### How It Works

1. The service worker runs in the background.
2. It sends a message to one or more controlled pages using `postMessage()`.
3. The page receives the message through the `message` event.
4. The page updates the DOM based on the received data.

#### Key Point

> Service Workers **cannot directly access the DOM** because they run outside the browser's main UI thread. Any DOM manipulation must be performed by the web page after receiving messages from the service worker.


  **[⬆ Back to Top](#table-of-contents)**

34. ### How do you reuse information across Service Worker restarts?

A **Service Worker is not always running**. The browser can terminate it when it is idle and restart it later when needed. Therefore, you **cannot rely on global variables or in-memory state** to persist data across service worker restarts.

To store data that survives restarts, service workers can use persistent storage mechanisms such as **IndexedDB**.

#### Why Global State Doesn't Work

```javascript
let counter = 0;

self.addEventListener("fetch", () => {
  counter++;
  console.log(counter);
});
```

In the example above, `counter` may be reset whenever the service worker is terminated and restarted by the browser.

#### Using IndexedDB for Persistent Storage

```javascript
// Save data to IndexedDB
async function saveData(key, value) {
  const db = await openDatabase();
  const transaction = db.transaction("store", "readwrite");
  transaction.objectStore("store").put(value, key);
}

// Retrieve data from IndexedDB
async function getData(key) {
  const db = await openDatabase();
  const transaction = db.transaction("store", "readonly");
  return transaction.objectStore("store").get(key);
}
```

#### Common Use Cases

* Caching application data
* Storing offline user actions
* Saving application settings
* Queueing requests for background sync
* Maintaining state across service worker restarts

#### Other Storage Options

Service workers can also use:

* **Cache Storage API** – for storing network requests and responses.
* **IndexedDB** – for structured and persistent data storage.

#### Key Point

> Since service workers can be terminated and restarted at any time, any data that needs to persist across restarts should be stored in persistent storage such as **IndexedDB** rather than in global variables.


  **[⬆ Back to Top](#table-of-contents)**

35. ### What is IndexedDB?

**IndexedDB** is a low-level, browser-based API for storing and retrieving large amounts of structured data on the client side. It allows web applications to persist data locally, including JavaScript objects, files, and blobs, even when the user is offline.

Unlike `localStorage`, IndexedDB supports large datasets, transactions, and efficient querying through indexes.

#### Key Features

1. **Large Storage Capacity**

   * Can store significantly more data than `localStorage`.

2. **Structured Data Storage**

   * Stores JavaScript objects directly without manual serialization.

3. **Indexed Searches**

   * Uses indexes to enable fast and efficient data retrieval.

4. **Asynchronous API**

   * Operations are non-blocking, preventing UI freezes.

5. **Transactional**

   * Supports transactions to ensure data integrity.

6. **Offline Support**

   * Commonly used by Progressive Web Apps (PWAs) and Service Workers.

#### Example

```javascript
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.createObjectStore("users", {
    keyPath: "id",
  });
};

request.onsuccess = (event) => {
  const db = event.target.result;

  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");

  store.add({
    id: 1,
    name: "John",
  });
};
```

#### IndexedDB vs localStorage

| Feature          | IndexedDB                        | localStorage            |
| ---------------- | -------------------------------- | ----------------------- |
| Storage Capacity | Large (MBs to GBs)               | ~5–10 MB                |
| Data Type        | Structured objects, files, blobs | Strings only            |
| API Type         | Asynchronous                     | Synchronous             |
| Querying         | Supports indexes and searches    | Key-value lookup only   |
| Transactions     | Supported                        | Not supported           |
| Performance      | Better for large datasets        | Suitable for small data |

#### Common Use Cases

* Offline web applications
* Progressive Web Apps (PWAs)
* Caching API responses
* Storing user preferences and settings
* Managing large datasets locally
* Saving files and blobs in the browser

#### Key Point

> **IndexedDB** is a low-level, transactional, client-side database that stores large amounts of structured data and provides high-performance retrieval through indexes, making it ideal for offline-capable and data-intensive web applications.


  **[⬆ Back to Top](#table-of-contents)**

36. ### What is Web Storage?

**Web Storage** is a browser API that allows web applications to store data locally in the user's browser as **key-value pairs**. It provides a simpler and more intuitive way to store client-side data compared to cookies.

Unlike cookies, web storage data is not sent to the server with every HTTP request, making it more efficient for storing application data.

#### Types of Web Storage

1. **Local Storage (`localStorage`)**

   * Stores data with **no expiration date**.
   * Data persists even after the browser is closed and reopened.
   * Available until explicitly removed by the application or user.

   ```javascript
   localStorage.setItem("username", "John");

   const username = localStorage.getItem("username");

   console.log(username); // John
   ```

2. **Session Storage (`sessionStorage`)**

   * Stores data for a **single browser session**.
   * Data is cleared when the browser tab or window is closed.
   * Not shared across different tabs.

   ```javascript
   sessionStorage.setItem("theme", "dark");

   const theme = sessionStorage.getItem("theme");

   console.log(theme); // dark
   ```

#### Common Methods

```javascript
// Store data
localStorage.setItem("key", "value");

// Retrieve data
localStorage.getItem("key");

// Remove a specific item
localStorage.removeItem("key");

// Clear all items
localStorage.clear();
```

#### localStorage vs sessionStorage

| Feature            | localStorage             | sessionStorage             |
| ------------------ | ------------------------ | -------------------------- |
| Lifetime           | Persistent until removed | Until tab/window is closed |
| Shared Across Tabs | Yes (same origin)        | No                         |
| Storage Type       | Key-value pairs          | Key-value pairs            |
| Capacity           | Typically 5–10 MB        | Typically 5–10 MB          |

#### Advantages Over Cookies

* Larger storage capacity.
* Data is not sent with every HTTP request.
* Simple JavaScript API.
* Better performance for client-side storage.

#### Key Point

> **Web Storage** is a client-side storage API that allows browsers to store data as key-value pairs. It provides two storage mechanisms:
>
> * **`localStorage`**: Persistent storage with no expiration date.
> * **`sessionStorage`**: Temporary storage that lasts only for the current browser session.


  **[⬆ Back to Top](#table-of-contents)**

37. ### What is `postMessage`?

`postMessage()` is a method that enables **secure cross-origin communication** between different `Window` objects, such as:

* A web page and a pop-up window it opened.
* A web page and an embedded iframe.
* Different browser windows or tabs.

Normally, JavaScript follows the **Same-Origin Policy (SOP)**, which allows scripts to access each other only when they share the same:

* Protocol (e.g., `https`)
* Host (e.g., `example.com`)
* Port (e.g., `443`)

The `postMessage()` API provides a controlled way for windows from different origins to exchange data without violating the Same-Origin Policy.

#### Sending a Message

```javascript
// Parent window
iframe.contentWindow.postMessage(
  "Hello from parent!",
  "https://example.com"
);
```

#### Receiving a Message

```javascript
window.addEventListener("message", (event) => {
  // Verify the sender's origin
  if (event.origin !== "https://example.com") {
    return;
  }

  console.log(event.data);
});
```

#### Parameters of `postMessage()`

```javascript
targetWindow.postMessage(message, targetOrigin);
```

* **message**: Data to send.
* **targetOrigin**: The expected origin of the receiving window. Using a specific origin improves security.

#### Common Use Cases

1. Communication between a page and an iframe.
2. Communication between a page and a popup window.
3. Cross-origin data exchange.
4. Integration with third-party widgets and payment gateways.
5. Communication between browser extensions and web pages.

#### Security Considerations

Always verify the sender's origin before processing a message:

```javascript
window.addEventListener("message", (event) => {
  if (event.origin !== "https://trusted-site.com") {
    return;
  }

  // Process trusted message
});
```

#### Key Point

> `postMessage()` is a browser API that enables secure communication between different windows or frames, including those from different origins, while maintaining the security guarantees of the Same-Origin Policy.


  **[⬆ Back to Top](#table-of-contents)**

38. ### What is a Cookie?

A **cookie** is a small piece of data stored by a web browser on a user's device. Cookies are stored as **key-value pairs** and are commonly used to remember user information, maintain sessions, and track user preferences across web pages.

Unlike `localStorage` and `sessionStorage`, cookies are automatically sent to the server with every HTTP request that matches the cookie's domain and path.

#### Creating a Cookie

```javascript
document.cookie = "username=John";
```

This creates a cookie with:

* Key: `username`
* Value: `John`

#### Reading Cookies

```javascript
console.log(document.cookie);
```

Output:

```text
username=John
```

#### Setting an Expiration Date

```javascript
document.cookie =
  "username=John; expires=Fri, 31 Dec 2027 23:59:59 GMT";
```

#### Common Uses of Cookies

1. **Session Management**

   * User login sessions
   * Authentication tokens

2. **Personalization**

   * Language preferences
   * Theme settings

3. **Tracking and Analytics**

   * User behavior tracking
   * Website analytics

#### Cookie Attributes

```javascript
document.cookie =
  "username=John; expires=Fri, 31 Dec 2027 23:59:59 GMT; path=/; Secure; SameSite=Strict";
```

* **expires**: Specifies when the cookie expires.
* **path**: Defines the URL path where the cookie is accessible.
* **domain**: Specifies the domain for which the cookie is valid.
* **Secure**: Sends the cookie only over HTTPS.
* **HttpOnly**: Prevents JavaScript access (can only be set by the server).
* **SameSite**: Controls cross-site cookie behavior.

#### Cookies vs Web Storage

| Feature                  | Cookies               | localStorage | sessionStorage   |
| ------------------------ | --------------------- | ------------ | ---------------- |
| Storage Limit            | ~4 KB                 | ~5–10 MB     | ~5–10 MB         |
| Sent to Server           | Yes                   | No           | No               |
| Expiration               | Configurable          | Persistent   | Until tab closes |
| Accessible by JavaScript | Yes (unless HttpOnly) | Yes          | Yes              |

#### Key Point

> A **cookie** is a small piece of data stored in the browser as a key-value pair. It is commonly used for session management, personalization, and tracking, and is automatically included in relevant HTTP requests sent to the server.


  ![Screenshot](images/cookie.png)

  **[⬆ Back to Top](#table-of-contents)**

39. ### Why do you need Cookies?

Cookies are used to **store and remember information about a user** across multiple visits to a website. They help websites provide a personalized and seamless user experience.

#### How Cookies Work

1. **Store User Information**

   * When a user visits a website, information such as a username, session ID, language preference, or theme setting can be stored in a cookie.

2. **Retrieve User Information**

   * On subsequent visits, the browser sends the cookie back to the server, allowing the website to recognize the user and restore their preferences or session.

#### Example

```javascript
document.cookie = "username=John";
```

When the user returns to the website, the application can read the cookie and display a personalized greeting:

```javascript
console.log(document.cookie);
// username=John
```

#### Common Uses of Cookies

1. **Authentication and Session Management**

   * Keep users logged in across page requests.
   * Store session identifiers.

2. **Remembering User Preferences**

   * Language settings.
   * Theme preferences (light/dark mode).

3. **Personalization**

   * Display customized content based on previous visits.

4. **Analytics and Tracking**

   * Understand user behavior and website usage patterns.

#### Example Scenario

* User logs into a website.
* The server creates a session cookie.
* The browser stores the cookie.
* On future requests, the browser automatically sends the cookie.
* The server recognizes the user and maintains their logged-in state.

#### Key Point

> Cookies are primarily used to remember user information and maintain state between requests, enabling features such as user authentication, personalization, preference storage, and session management.


  **[⬆ Back to Top](#table-of-contents)**

40. ### What are the options in a Cookie?

Cookies support several attributes (options) that control their behavior, lifetime, scope, and security.

#### 1. `expires`

By default, a cookie is deleted when the browser is closed (session cookie). You can make it persistent by specifying an expiration date in UTC/GMT format.

```javascript id="a1b2c3"
document.cookie =
  "username=John; expires=Sat, 08 Jun 2029 12:00:00 UTC";
```

#### 2. `path`

By default, a cookie belongs to the current page's path. You can specify a different path to make the cookie available to pages under that path.

```javascript id="d4e5f6"
document.cookie = "username=John; path=/services";
```

#### 3. `domain`

Specifies the domain for which the cookie is valid.

```javascript id="g7h8i9"
document.cookie =
  "username=John; domain=example.com";
```

This cookie will be available to `example.com` and its subdomains.

#### 4. `max-age`

Sets the lifetime of a cookie in seconds.

```javascript id="j1k2l3"
document.cookie =
  "username=John; max-age=3600";
```

The cookie expires after 1 hour (3600 seconds).

#### 5. `secure`

Ensures the cookie is sent only over HTTPS connections.

```javascript id="m4n5o6"
document.cookie =
  "username=John; Secure";
```

#### 6. `HttpOnly`

Prevents JavaScript from accessing the cookie. This attribute can only be set by the server.

```http
Set-Cookie: username=John; HttpOnly
```

This helps protect against XSS attacks.

#### 7. `SameSite`

Controls whether cookies are sent with cross-site requests.

```javascript id="p7q8r9"
document.cookie =
  "username=John; SameSite=Strict";
```

Possible values:

* `Strict` – Sent only for same-site requests.
* `Lax` – Sent for same-site requests and some top-level navigations.
* `None` – Sent for all requests (must also use `Secure`).

#### Example

```javascript id="s1t2u3"
document.cookie =
  "username=John; expires=Sat, 08 Jun 2029 12:00:00 UTC; path=/; Secure; SameSite=Strict";
```

#### Summary of Common Cookie Options

| Option     | Purpose                             |
| ---------- | ----------------------------------- |
| `expires`  | Sets the expiration date            |
| `max-age`  | Sets lifetime in seconds            |
| `path`     | Defines URL path accessibility      |
| `domain`   | Defines domain accessibility        |
| `secure`   | Sends cookie only over HTTPS        |
| `HttpOnly` | Prevents JavaScript access          |
| `SameSite` | Controls cross-site cookie behavior |

#### Key Point

> Cookie options (attributes) determine how long a cookie exists, where it is accessible, and how securely it is transmitted. Common attributes include `expires`, `path`, `domain`, `max-age`, `Secure`, `HttpOnly`, and `SameSite`.


  **[⬆ Back to Top](#table-of-contents)**

41. ### How do you delete a Cookie?

You can delete a cookie by setting its expiration date to a date in the past. Once the browser sees that the cookie has expired, it removes the cookie automatically.

```javascript id="x7m2kq"
document.cookie =
  "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
```

In the example above:

* The cookie name is `username`.
* The value is set to an empty string.
* The expiration date is set to a past date.
* The `path` is specified to identify the correct cookie.

#### Modern Alternative Using `max-age`

You can also delete a cookie by setting `max-age` to `0`:

```javascript id="r4n8tz"
document.cookie =
  "username=; max-age=0; path=/";
```

#### Important Note

When deleting a cookie, you should use the **same attributes** that were used when the cookie was created, especially:

* `path`
* `domain` (if specified)

For example:

```javascript id="p9w6cy"
document.cookie =
  "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=example.com";
```

If the `path` or `domain` does not match the original cookie, some browsers may not delete the cookie.

#### Key Point

> To delete a cookie, set its expiration date to a past date (or `max-age=0`). Make sure to specify the same `path` and `domain` attributes that were used when the cookie was created so the browser can identify and remove the correct cookie.


  **[⬆ Back to Top](#table-of-contents)**

42. ### What are the differences between Cookies, Local Storage, and Session Storage?

Cookies, Local Storage, and Session Storage are all used to store data in the browser, but they differ in terms of storage capacity, lifetime, accessibility, and usage.

| Feature                               | Cookie                                                                                        | Local Storage                                       | Session Storage                                       |
| ------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| **Accessed on client or server side** | Both client-side and server-side. Servers can set cookies using the `Set-Cookie` HTTP header. | Client-side only                                    | Client-side only                                      |
| **Expiry**                            | Configurable using `Expires` or `Max-Age`                                                     | Persists until explicitly deleted                   | Removed when the browser tab/window is closed         |
| **Storage Capacity**                  | Approximately 4 KB                                                                            | Approximately 5–10 MB                               | Approximately 5–10 MB                                 |
| **Sent with HTTP Requests**           | Yes, automatically                                                                            | No                                                  | No                                                    |
| **Accessible From**                   | Any window/tab for the same domain (subject to path/domain restrictions)                      | Any window/tab of the same origin                   | Only the same browser tab/session                     |
| **Security Attributes**               | Supports `Secure`, `HttpOnly`, and `SameSite` attributes                                      | No built-in security attributes                     | No built-in security attributes                       |
| **Performance Impact**                | Can increase request size because cookies are sent with every request                         | Better performance for client-side storage          | Better performance for temporary client-side storage  |
| **Typical Use Cases**                 | Authentication, session management, tracking                                                  | User preferences, application settings, cached data | Temporary form data, wizard steps, tab-specific state |

#### Example

**Cookie**

```javascript id="c1a2b3"
document.cookie = "username=John";
```

**Local Storage**

```javascript id="d4e5f6"
localStorage.setItem("username", "John");
```

**Session Storage**

```javascript id="g7h8i9"
sessionStorage.setItem("username", "John");
```

#### When to Use What?

* **Cookies**

  * Authentication tokens (preferably `HttpOnly` cookies)
  * Session management
  * Server-required user information

* **Local Storage**

  * Persistent user preferences
  * Theme settings
  * Cached application data

* **Session Storage**

  * Temporary data for the current tab
  * Multi-step forms
  * Data that should disappear when the tab closes

#### Key Point

> Use **Cookies** when data needs to be sent to the server, **Local Storage** for long-term client-side persistence, and **Session Storage** for temporary data that should exist only for the lifetime of a browser tab.

  **[⬆ Back to Top](#table-of-contents)**

43. ### What is the main difference between `localStorage` and `sessionStorage`?

The main difference between **`localStorage`** and **`sessionStorage`** is their **lifetime**.

* **`localStorage`** stores data with no expiration date. The data remains available even after the browser is closed and reopened.
* **`sessionStorage`** stores data only for the duration of the current page session. The data is automatically cleared when the browser tab or window is closed.

#### Example

**localStorage**

```javascript id="ls1abc"
localStorage.setItem("username", "John");
```

The data persists even after:

* Refreshing the page
* Closing the browser
* Reopening the browser

**sessionStorage**

```javascript id="ss1def"
sessionStorage.setItem("username", "John");
```

The data persists only until:

* The current tab or window is closed

#### Comparison

| Feature                          | localStorage                        | sessionStorage                 |
| -------------------------------- | ----------------------------------- | ------------------------------ |
| Lifetime                         | Persistent until explicitly deleted | Until the tab/window is closed |
| Survives Browser Restart         | Yes                                 | No                             |
| Survives Page Refresh            | Yes                                 | Yes                            |
| Shared Across Tabs (same origin) | Yes                                 | No                             |
| Storage Capacity                 | ~5–10 MB                            | ~5–10 MB                       |

#### Use Cases

**localStorage**

* Theme preferences
* Language settings
* User preferences
* Cached application data

**sessionStorage**

* Multi-step form data
* Temporary session information
* Tab-specific state

#### Key Point

> `localStorage` persists data indefinitely until it is explicitly removed, whereas `sessionStorage` stores data only for the lifetime of the current browser tab or window.


  **[⬆ Back to Top](#table-of-contents)**

44. ### How do you access Web Storage?

The **Web Storage API** is accessible through the `localStorage` and `sessionStorage` properties of the `window` object.

* `window.localStorage` provides access to **Local Storage**.
* `window.sessionStorage` provides access to **Session Storage**.

Both properties return a **Storage** object that allows you to store, retrieve, update, and remove data as key-value pairs for a specific origin (domain).

#### Storing Data

```javascript id="w1x2y3"
localStorage.setItem(
  "logo",
  document.getElementById("logo").value
);
```

#### Retrieving Data

```javascript id="z4a5b6"
const logo = localStorage.getItem("logo");
console.log(logo);
```

#### Removing Data

```javascript id="c7d8e9"
localStorage.removeItem("logo");
```

#### Clearing All Data

```javascript id="f1g2h3"
localStorage.clear();
```

#### Using Session Storage

```javascript id="i4j5k6"
sessionStorage.setItem("username", "John");

const username =
  sessionStorage.getItem("username");

console.log(username);
```

#### Common Storage Methods

| Method                | Description                          |
| --------------------- | ------------------------------------ |
| `setItem(key, value)` | Stores a value                       |
| `getItem(key)`        | Retrieves a value                    |
| `removeItem(key)`     | Removes a specific item              |
| `clear()`             | Removes all stored items             |
| `key(index)`          | Returns the key at a specified index |

#### Access via `window`

The following statements are equivalent:

```javascript id="l7m8n9"
localStorage.setItem("name", "John");
```

```javascript id="o1p2q3"
window.localStorage.setItem("name", "John");
```

#### Key Point

> Web Storage is accessed through the `localStorage` and `sessionStorage` properties of the `window` object. These properties provide a `Storage` object with methods such as `setItem()`, `getItem()`, `removeItem()`, and `clear()` for managing client-side data.


   **[⬆ Back to Top](#table-of-contents)**

45. ### What are the methods available on `sessionStorage`?

The `sessionStorage` object provides methods for storing, retrieving, removing, and clearing data for the current browser session.

#### 1. `setItem()`

Stores a key-value pair in session storage.

```javascript
sessionStorage.setItem("key", "value");
```

#### 2. `getItem()`

Retrieves the value associated with a key.

```javascript
let data = sessionStorage.getItem("key");
console.log(data); // value
```

#### 3. `removeItem()`

Removes a specific key-value pair from session storage.

```javascript
sessionStorage.removeItem("key");
```

#### 4. `clear()`

Removes all data stored in session storage for the current origin.

```javascript
sessionStorage.clear();
```

#### Other Useful Methods and Properties

##### `key()`

Returns the key at the specified index.

```javascript
let firstKey = sessionStorage.key(0);
```

##### `length`

Returns the number of items stored.

```javascript
console.log(sessionStorage.length);
```

#### Example

```javascript
// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();
```

#### Summary

| Method/Property       | Description                        |
| --------------------- | ---------------------------------- |
| `setItem(key, value)` | Stores a value                     |
| `getItem(key)`        | Retrieves a value                  |
| `removeItem(key)`     | Removes a specific item            |
| `clear()`             | Removes all items                  |
| `key(index)`          | Returns the key at a given index   |
| `length`              | Returns the number of stored items |

#### Key Point

> `sessionStorage` provides methods such as `setItem()`, `getItem()`, `removeItem()`, and `clear()` to manage data that persists only for the lifetime of the current browser tab or window.


  **[⬆ Back to Top](#table-of-contents)**

46. ### What is a Storage Event and its Event Handler?

The **`StorageEvent`** is an event that fires when a storage area (`localStorage` or `sessionStorage`) is modified in the context of another document that shares the same origin.

The **`onstorage`** property is an event handler that allows you to respond to storage changes.

#### Syntax

```javascript id="s9k3m1"
window.onstorage = functionRef;
```

or using `addEventListener`:

```javascript id="t7n2p8"
window.addEventListener("storage", function (event) {
  // Handle storage changes
});
```

#### Example

The following example logs the storage key and its old and new values whenever the storage changes:

```javascript id="u5q8w4"
window.onstorage = function (e) {
  console.log(
    "The " +
      e.key +
      " key has been changed from " +
      e.oldValue +
      " to " +
      e.newValue +
      "."
  );
};
```

#### StorageEvent Properties

| Property      | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| `key`         | The key that was changed                                         |
| `oldValue`    | The previous value of the key                                    |
| `newValue`    | The new value of the key                                         |
| `storageArea` | The affected storage object (`localStorage` or `sessionStorage`) |
| `url`         | The URL of the document that made the change                     |

#### Example Using `addEventListener`

```javascript id="v6r9x2"
window.addEventListener("storage", (event) => {
  console.log("Key:", event.key);
  console.log("Old Value:", event.oldValue);
  console.log("New Value:", event.newValue);
});
```

#### Important Note

The `storage` event is **not fired in the same window/tab that made the change**. It is only fired in **other windows, tabs, or iframes** of the same origin.

For example:

* Tab A updates `localStorage`.
* Tab B receives the `storage` event.
* Tab A does **not** receive the event.

#### Key Point

> The `StorageEvent` is triggered when `localStorage` or `sessionStorage` changes in another document of the same origin. The `onstorage` event handler (or `storage` event listener) can be used to detect and respond to these changes across tabs or windows.


  **[⬆ Back to Top](#table-of-contents)**

47. ### Why do you need Web Storage?

**Web Storage** provides a way to store data locally in the browser that is more convenient and efficient than cookies for many client-side use cases.

#### Benefits of Web Storage

1. **Larger Storage Capacity**

   * Web Storage can typically store **5–10 MB** of data per origin.
   * Cookies are limited to about **4 KB**.

2. **Better Performance**

   * Data is stored locally in the browser.
   * Unlike cookies, web storage data is **not sent with every HTTP request**, reducing network overhead.

3. **Client-Side Storage**

   * Information remains on the user's device and is not automatically transferred to the server.

4. **Simple API**

   * Provides easy-to-use methods such as:

     * `setItem()`
     * `getItem()`
     * `removeItem()`
     * `clear()`

5. **Supports Persistent and Session-Based Storage**

   * `localStorage` for persistent data.
   * `sessionStorage` for temporary session data.

#### Example

```javascript id="a7b8c9"
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");

console.log(theme); // dark
```

#### Web Storage vs Cookies

| Feature                 | Web Storage                                 | Cookies                            |
| ----------------------- | ------------------------------------------- | ---------------------------------- |
| Storage Capacity        | ~5–10 MB                                    | ~4 KB                              |
| Sent with HTTP Requests | No                                          | Yes                                |
| Performance             | Better for client-side data                 | Can increase request size          |
| API                     | Simple JavaScript API                       | String-based API                   |
| Typical Use Cases       | Preferences, cached data, application state | Authentication, session management |

#### When to Use Web Storage

* Saving user preferences (theme, language, settings)
* Storing application state
* Caching client-side data
* Maintaining data between page reloads
* Storing temporary session data

#### Important Security Note

Web Storage is **not inherently more secure than cookies**. In fact, data stored in `localStorage` and `sessionStorage` is accessible via JavaScript, making it vulnerable to XSS attacks. Sensitive data such as authentication tokens are often better stored in **HttpOnly cookies**, which cannot be accessed by JavaScript.

#### Key Point

> Web Storage is useful because it provides larger storage capacity, better performance, and a simple API for storing client-side data. Since data is not automatically sent with every request, it is often a more efficient choice than cookies for storing non-sensitive application data.


  **[⬆ Back to Top](#table-of-contents)**

48. ### How do you check Web Storage browser support?

Before using **Web Storage** (`localStorage` or `sessionStorage`), it is a good practice to check whether the browser supports the Web Storage API.

You can do this by checking the existence of the `Storage` object:

```javascript id="x3p7q2"
if (typeof Storage !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support.
}
```

#### Example

```javascript id="k8m4r1"
if (typeof Storage !== "undefined") {
  localStorage.setItem("username", "John");
  console.log(localStorage.getItem("username"));
} else {
  console.log("Web Storage is not supported.");
}
```

#### Checking Individual Storage Types

You can also check support for `localStorage` and `sessionStorage` separately:

```javascript id="n5t9v3"
if (window.localStorage) {
  console.log("localStorage is supported");
}

if (window.sessionStorage) {
  console.log("sessionStorage is supported");
}
```

#### Why Check for Support?

* Ensures compatibility with older browsers.
* Prevents runtime errors when storage APIs are unavailable.
* Allows you to provide fallback mechanisms such as cookies or in-memory storage.

#### Key Point

> To check if Web Storage is supported, verify that the `Storage` object exists using `typeof Storage !== "undefined"`. If it does, you can safely use `localStorage` and `sessionStorage`; otherwise, provide an alternative storage mechanism.


  **[⬆ Back to Top](#table-of-contents)**

49. ### How do you check Web Workers browser support?

Before using **Web Workers**, it is a good practice to check whether the browser supports the `Worker` API.

You can do this by checking the existence of the `Worker` object:

```javascript
if (typeof Worker !== "undefined") {
  // Code for Web Worker support.
} else {
  // Sorry! No Web Worker support.
}
```

#### Example

```javascript
if (typeof Worker !== "undefined") {
  const worker = new Worker("worker.js");

  worker.onmessage = function (event) {
    console.log("Message from worker:", event.data);
  };
} else {
  console.log("Web Workers are not supported in this browser.");
}
```

#### Why Check for Support?

* Ensures compatibility with older browsers.
* Prevents runtime errors when creating workers.
* Allows you to provide a fallback solution if Web Workers are unavailable.

#### What are Web Workers?

Web Workers allow JavaScript code to run in a **background thread**, separate from the main UI thread. This helps perform computationally intensive tasks without blocking the user interface.

#### Key Point

> To check if Web Workers are supported, verify that the `Worker` object exists using `typeof Worker !== "undefined"`. If it does, you can safely create and use Web Workers; otherwise, provide an alternative implementation.


  **[⬆ Back to Top](#table-of-contents)**

50. ### Give an example of a Web Worker

A **Web Worker** allows JavaScript code to run in a background thread without blocking the main UI thread. Below is a simple example that continuously increments a counter and sends the updated value back to the web page.

#### 1. Create a Web Worker File (`counter.js`)

```javascript id="wk1a2b"
let i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout(timedCount, 500);
}

timedCount();
```

Here:

* `postMessage()` sends data from the worker back to the main thread.
* The counter value is incremented every 500 milliseconds.

#### 2. Create a Web Worker Object (`web_worker_example.js`)

First, check whether the browser supports Web Workers and create a worker instance:

```javascript id="wk3c4d"
let w;

if (typeof Worker !== "undefined") {
  if (typeof w === "undefined") {
    w = new Worker("counter.js");
  }
}
```

Receive messages from the worker:

```javascript id="wk5e6f"
w.onmessage = function (event) {
  document.getElementById("message").innerHTML =
    event.data;
};
```

#### 3. Terminate a Web Worker

A worker continues running until it is explicitly terminated.

```javascript id="wk7g8h"
w.terminate();
```

#### 4. Reuse the Web Worker

After terminating the worker, you can reset the variable and create a new worker later.

```javascript id="wk9i0j"
w = undefined;
```

#### Complete HTML Example

```html id="wkhtml1"
<!DOCTYPE html>
<html>
<body>
  <p>Count: <span id="message">0</span></p>

  <script>
    let w;

    if (typeof Worker !== "undefined") {
      w = new Worker("counter.js");

      w.onmessage = function (event) {
        document.getElementById("message").innerHTML =
          event.data;
      };
    } else {
      document.getElementById("message").innerHTML =
        "Web Workers are not supported.";
    }
  </script>
</body>
</html>
```

#### Key Points

* Web Workers run JavaScript in a background thread.
* `postMessage()` is used to communicate from the worker to the main thread.
* `onmessage` receives messages from the worker.
* `terminate()` stops the worker.
* Workers help perform CPU-intensive tasks without freezing the user interface.


  **[⬆ Back to Top](#table-of-contents)**

51. ### What are the restrictions of Web Workers on the DOM?

Web Workers run in a separate background thread from the main JavaScript execution thread. Because of this isolation, they **cannot directly access or manipulate the DOM**.

Web Workers do **not** have access to the following browser objects:

1. **`window` object**
2. **`document` object**
3. **`parent` object** (for accessing the parent window's DOM)

For example, the following code will throw an error inside a Web Worker:

```javascript id="ww1a2b"
document.getElementById("message").innerHTML =
  "Hello World";
```

#### Why These Restrictions Exist

* Web Workers are designed to run in the background.
* Direct DOM manipulation is restricted to the main UI thread.
* This prevents race conditions and keeps the user interface responsive.

#### How Web Workers Interact with the DOM

Although Web Workers cannot access the DOM directly, they can communicate with the main thread using `postMessage()`.

**Worker (`worker.js`)**

```javascript id="ww3c4d"
postMessage("Update the page content");
```

**Main Thread**

```javascript id="ww5e6f"
worker.onmessage = function (event) {
  document.getElementById("message").textContent =
    event.data;
};
```

#### What Web Workers Can Access

Web Workers can still use many JavaScript APIs, including:

* `setTimeout()` and `setInterval()`
* `fetch()`
* `XMLHttpRequest`
* `WebSocket`
* `IndexedDB`
* `navigator`
* `location`
* `postMessage()`

#### Key Point

> Web Workers cannot directly access the DOM because they run in a separate thread. They do not have access to objects such as `window`, `document`, and `parent`. To update the UI, a worker must communicate with the main thread using `postMessage()`, and the main thread performs the DOM manipulation.


  **[⬆ Back to Top](#table-of-contents)**

52. ### What is a Promise?

A **Promise** is a JavaScript object that represents the eventual completion - success or failure of an asynchronous operation and its resulting value. It acts as a placeholder for a value that may not be available immediately but will be available at some point in the future.

Promises help manage asynchronous code in a cleaner and more readable way compared to nested callbacks.

#### Promise States

A Promise can be in one of **three states**:

1. **`pending`**

   * Initial state.
   * The operation is still in progress.

2. **`fulfilled`**

   * The operation completed successfully.
   * The promise is resolved with a value.

3. **`rejected`**

   * The operation failed.
   * The promise is rejected with a reason (error).

#### Promise Syntax

```javascript id="pr1a2b"
const promise = new Promise((resolve, reject) => {
  // Perform asynchronous operation

  if (/* success */) {
    resolve(result);
  } else {
    reject(error);
  }
});
```

#### Example: Creating and Using a Promise

```javascript id="pr3c4d"
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm a Promise!");
  }, 5000);
});

promise
  .then((value) => console.log(value))
  .catch((error) => console.error(error))
  .finally(() => console.log("Done"));
```

**Output after 5 seconds:**

```text
I'm a Promise!
Done
```

#### Promise Methods

##### `then()`

Handles a fulfilled promise.

```javascript id="pr5e6f"
promise.then((value) => {
  console.log(value);
});
```

##### `catch()`

Handles a rejected promise.

```javascript id="pr7g8h"
promise.catch((error) => {
  console.error(error);
});
```

##### `finally()`

Executes regardless of whether the promise is fulfilled or rejected.

```javascript id="pr9i0j"
promise.finally(() => {
  console.log("Cleanup");
});
```

#### Promise Lifecycle

```text
          Pending
             |
      ----------------
      |              |
   Resolve        Reject
      |              |
  Fulfilled      Rejected
      |              |
    then()        catch()
      \            /
       \          /
        finally()
```

#### Why Use Promises?

* Avoid callback hell.
* Improve code readability.
* Simplify asynchronous error handling.
* Support chaining of asynchronous operations.
* Serve as the foundation for `async/await`.

#### Key Point

> A Promise is an object that represents the future result of an asynchronous operation. It can be in one of three states: `pending`, `fulfilled`, or `rejected`, and is typically handled using `.then()`, `.catch()`, and `.finally()`.


  ![Screenshot](images/promises.png)

  **[⬆ Back to Top](#table-of-contents)**

53. ### Why do you need a Promise?

Promises are used to **handle asynchronous operations** in JavaScript. Since operations such as API calls, file reading, database queries, and timers take time to complete, Promises provide a structured way to handle their results without blocking the main thread.

#### Benefits of Promises

1. **Handle Asynchronous Operations**

   * Manage operations that complete in the future, such as network requests, file I/O, and timers.

2. **Provide a Cleaner Alternative to Callbacks**

   * Promises offer a more organized and readable approach compared to deeply nested callbacks.

3. **Avoid Callback Hell**

   * Reduce excessive nesting and make asynchronous code easier to follow.

4. **Improve Readability and Maintainability**

   * Promise chaining with `.then()` and `.catch()` makes code more structured and easier to debug.

5. **Centralized Error Handling**

   * Errors can be handled in one place using `.catch()` instead of multiple callback error checks.

6. **Foundation for `async/await`**

   * Modern JavaScript's `async/await` syntax is built on top of Promises.

#### Without Promises (Callback Hell)

```javascript id="cb1a2b"
getUser(userId, function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0].id, function (details) {
      console.log(details);
    });
  });
});
```

#### With Promises

```javascript id="pr1c2d"
getUser(userId)
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0].id))
  .then((details) => console.log(details))
  .catch((error) => console.error(error));
```

#### With `async/await`

```javascript id="aw1e2f"
async function getData() {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);

    console.log(details);
  } catch (error) {
    console.error(error);
  }
}
```

#### Key Point

> Promises are used to handle asynchronous operations in a clean and structured way. They help avoid callback hell, improve readability and maintainability, provide centralized error handling, and serve as the foundation for modern `async/await` syntax.


  **[⬆ Back to Top](#table-of-contents)**

54. ### Explain the three states of a Promise

A Promise represents the eventual result of an asynchronous operation. During its lifecycle, a Promise can be in one of **three states**:

#### 1. `Pending`

* This is the **initial state** of a Promise.
* The asynchronous operation has not completed yet.
* The Promise is neither fulfilled nor rejected.

```javascript id="p1a2b3"
const promise = new Promise((resolve, reject) => {
  // Promise is pending here
});
```

#### 2. `Fulfilled`

* The asynchronous operation completed successfully.
* The Promise is resolved with a value.
* Any callbacks registered with `.then()` are executed.

```javascript id="p4c5d6"
const promise = new Promise((resolve) => {
  resolve("Success");
});

promise.then((value) => {
  console.log(value); // Success
});
```

#### 3. `Rejected`

* The asynchronous operation failed.
* The Promise is rejected with a reason or error.
* Any callbacks registered with `.catch()` are executed.

```javascript id="p7e8f9"
const promise = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong"));
});

promise.catch((error) => {
  console.error(error.message);
});
```

#### Promise State Transition

A Promise starts in the **Pending** state and can transition only once:

```text
           Pending
          /       \
         /         \
   Fulfilled     Rejected
```

* `Pending → Fulfilled`
* `Pending → Rejected`

Once a Promise is **fulfilled** or **rejected**, its state becomes **settled** and cannot change again.

#### Example

```javascript id="p0g1h2"
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});
```

State flow:

1. Promise is **Pending**.
2. After 2 seconds, `resolve()` is called.
3. Promise becomes **Fulfilled**.
4. The `.then()` callback executes.

#### Key Point

> A Promise has three states: **Pending** (operation in progress), **Fulfilled** (operation completed successfully), and **Rejected** (operation failed). Once a Promise becomes fulfilled or rejected, its state is final and cannot be changed.


  **[⬆ Back to Top](#table-of-contents)**

55. ### What is a Callback Function?

A **callback function** is a function that is passed as an argument to another function and is executed later by that function. Callbacks are commonly used in JavaScript to handle asynchronous operations, event handling, and custom logic.

#### Example

```javascript id="cbf1a2"
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);
```

#### How It Works

1. `callbackFunction` is defined to accept a `name` parameter.
2. `outerFunction` accepts a function as an argument (`callback`).
3. Inside `outerFunction`, the user's name is collected using `prompt()`.
4. The callback function is invoked with the entered name.
5. The output is displayed.

For example, if the user enters `"John"`:

```text id="cbfout"
Hello John
```

#### Callback with Anonymous Function

```javascript id="cbf3b4"
function greet(callback) {
  callback();
}

greet(function () {
  console.log("Hello World!");
});
```

#### Callback in Asynchronous Code

```javascript id="cbf5c6"
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

Here, the callback function is executed after the timer completes.

#### Why Use Callback Functions?

* Handle asynchronous operations.
* Respond to events (clicks, key presses, etc.).
* Customize the behavior of functions.
* Promote code reusability and flexibility.

#### Key Point

> A callback function is a function passed as an argument to another function and executed later by that function. It is widely used in JavaScript for asynchronous programming, event handling, and creating flexible, reusable code.


  **[⬆ Back to Top](#table-of-contents)**

56. ### Why do we need Callbacks?

Callbacks are needed because JavaScript is a **single-threaded, event-driven language**. Instead of blocking execution and waiting for a task to complete, JavaScript continues executing other code while asynchronous operations (such as API calls, timers, or file operations) run in the background.

Callbacks provide a way to execute code **after** an asynchronous operation has completed.

#### Example Without a Callback

```javascript id="cb1a2b"
function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}

function secondFunction() {
  console.log("Second function called");
}

firstFunction();
secondFunction();
```

**Output:**

```text id="cbout1"
Second function called
First function called
```

Even though `firstFunction()` is called first, `secondFunction()` executes before it because `setTimeout()` is asynchronous.

#### Using a Callback

```javascript id="cb3c4d"
function firstFunction(callback) {
  setTimeout(function () {
    console.log("First function called");
    callback();
  }, 1000);
}

function secondFunction() {
  console.log("Second function called");
}

firstFunction(secondFunction);
```

**Output:**

```text id="cbout2"
First function called
Second function called
```

Now, `secondFunction()` executes only after `firstFunction()` has completed.

#### Why Callbacks Are Useful

1. **Handle Asynchronous Operations**

   * API requests
   * Database queries
   * Timers
   * File operations

2. **Control Execution Order**

   * Ensure certain code runs only after another task finishes.

3. **Support Event-Driven Programming**

   * Respond to user actions such as clicks, key presses, and form submissions.

4. **Improve Flexibility**

   * Functions can accept custom behavior as arguments.

#### Common Examples

```javascript id="cb5e6f"
button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

```javascript id="cb7g8h"
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

#### Limitation: Callback Hell

Excessive nesting of callbacks can make code difficult to read and maintain:

```javascript id="cb9i0j"
getUser(function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0].id, function (details) {
      console.log(details);
    });
  });
});
```

This problem led to the introduction of **Promises** and **async/await**.

#### Key Point

> Callbacks are needed to handle asynchronous operations and control the order of execution in JavaScript. They allow code to run only after a task has completed, making them essential for event-driven and non-blocking programming.

  **[⬆ Back to Top](#table-of-contents)**

57. ### What is Callback Hell?

**Callback Hell** is an anti-pattern that occurs when multiple asynchronous operations are nested inside one another using callbacks. This results in deeply indented code that is difficult to read, understand, maintain, and debug.

Callback Hell is also known as the **"Pyramid of Doom"** because the code structure resembles a pyramid.

#### Example of Callback Hell

```javascript id="ch1a2b"
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {
        // More nested callbacks...
      });
    });
  });
});
```

As the number of asynchronous operations grows, the code becomes increasingly difficult to manage.

#### Real-World Example

```javascript id="ch3c4d"
getUser(userId, function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0].id, function (details) {
      getPaymentInfo(details.id, function (payment) {
        console.log(payment);
      });
    });
  });
});
```

#### Problems with Callback Hell

1. **Poor Readability**

   * Deep nesting makes the code difficult to follow.

2. **Hard to Debug**

   * Error handling becomes complicated.

3. **Difficult Maintenance**

   * Modifying or extending the code becomes challenging.

4. **Error Propagation Issues**

   * Errors must often be handled at multiple levels.

#### Solutions to Callback Hell

##### 1. Use Named Functions

```javascript id="ch5e6f"
function handlePayment(payment) {
  console.log(payment);
}

function handleDetails(details) {
  getPaymentInfo(details.id, handlePayment);
}

function handleOrders(orders) {
  getOrderDetails(orders[0].id, handleDetails);
}

function handleUser(user) {
  getOrders(user.id, handleOrders);
}

getUser(userId, handleUser);
```

##### 2. Use Promises

```javascript id="ch7g8h"
getUser(userId)
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0].id))
  .then((details) => getPaymentInfo(details.id))
  .then((payment) => console.log(payment))
  .catch((error) => console.error(error));
```

##### 3. Use `async/await`

```javascript id="ch9i0j"
async function getPayment() {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    const payment = await getPaymentInfo(details.id);

    console.log(payment);
  } catch (error) {
    console.error(error);
  }
}
```

#### Key Point

> Callback Hell is an anti-pattern caused by deeply nested callbacks in asynchronous code. It makes code difficult to read, maintain, and debug. Modern JavaScript addresses this problem using **Promises** and **`async/await`**, which provide a cleaner and more manageable approach to asynchronous programming.


  **[⬆ Back to Top](#table-of-contents)**

58. ### What are Server-Sent Events (SSE)?

**Server-Sent Events (SSE)** is a web technology that allows a server to push real-time updates to a browser over a single, long-lived HTTP connection. Unlike traditional polling, where the client repeatedly requests updates, SSE enables the server to automatically send data whenever new information is available.

SSE provides **one-way communication**, meaning data flows only from the **server to the client**.

#### Key Features

1. **Server-to-Client Communication**

   * The server can continuously send updates to the browser.

2. **Uses Standard HTTP**

   * No special protocol is required.

3. **Automatic Reconnection**

   * Browsers automatically attempt to reconnect if the connection is lost.

4. **Lightweight**

   * Simpler and more efficient than repeated polling.

5. **One-Way Communication**

   * Data flows only from the server to the client.
   * If two-way communication is needed, use **WebSockets**.

#### Common Use Cases

* Social media feeds (Facebook, Twitter/X updates)
* Live news feeds
* Stock price updates
* Sports score updates
* Real-time notifications
* Monitoring dashboards

#### Client-Side Example

```javascript id="sse1a2b"
const eventSource = new EventSource("/events");

eventSource.onmessage = function (event) {
  console.log("Received:", event.data);
};
```

#### Server-Side Example (Node.js)

```javascript id="sse3c4d"
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  setInterval(() => {
    res.write(`data: ${new Date().toISOString()}\n\n`);
  }, 1000);
});
```

#### SSE vs WebSockets

| Feature                | SSE                           | WebSockets                           |
| ---------------------- | ----------------------------- | ------------------------------------ |
| Communication          | One-way (Server → Client)     | Two-way (Client ↔ Server)            |
| Protocol               | HTTP                          | WebSocket Protocol                   |
| Automatic Reconnection | Yes                           | Must be handled manually             |
| Complexity             | Simple                        | More complex                         |
| Best For               | Notifications, feeds, updates | Chat apps, games, collaborative apps |

#### How SSE Works

```text id="sseflow"
Client (Browser)
       |
       | EventSource Connection
       |
       v
Server
       |
       | Sends Events
       v
Client Receives Updates
```

#### Key Point

> Server-Sent Events (SSE) is a technology that allows a server to push real-time updates to a browser over a persistent HTTP connection. It supports one-way communication (server to client) and is commonly used for live feeds, notifications, stock prices, and other real-time updates.


  **[⬆ Back to Top](#table-of-contents)**

59. ### How do you receive Server-Sent Event (SSE) notifications?

The **`EventSource`** object is used to receive **Server-Sent Events (SSE)** from a server. It opens a persistent HTTP connection to the server and listens for incoming events automatically.

Before creating an `EventSource`, it is a good practice to check whether the browser supports SSE.

#### Example

```javascript id="sse1r2c"
if (typeof EventSource !== "undefined") {
  const source = new EventSource("sse_generator.js");

  source.onmessage = function (event) {
    document.getElementById("output").innerHTML +=
      event.data + "<br>";
  };
} else {
  console.log(
    "Sorry, your browser does not support Server-Sent Events."
  );
}
```

#### How It Works

1. Create an `EventSource` object and provide the server endpoint URL.
2. The browser establishes a persistent connection with the server.
3. Whenever the server sends an event, the `onmessage` handler is triggered.
4. The received data is available through `event.data`.

#### Handling Custom Events

The server can send named events, and the client can listen for them:

```javascript id="sse3d4e"
source.addEventListener("notification", function (event) {
  console.log("Notification:", event.data);
});
```

Server response:

```text id="sseevent"
event: notification
data: New message received

```

#### Handling Errors

```javascript id="sse5f6g"
source.onerror = function (error) {
  console.error("SSE connection error:", error);
};
```

#### Closing the Connection

```javascript id="sse7h8i"
source.close();
```

#### Key Properties and Methods

| Property/Method      | Description                |
| -------------------- | -------------------------- |
| `onmessage`          | Handles incoming messages  |
| `addEventListener()` | Listens for custom events  |
| `onerror`            | Handles connection errors  |
| `close()`            | Closes the SSE connection  |
| `readyState`         | Indicates connection state |

#### Key Point

> Server-Sent Event notifications are received using the `EventSource` object. The browser maintains a persistent HTTP connection with the server, and incoming messages can be handled through the `onmessage` event or custom event listeners.


  **[⬆ Back to Top](#table-of-contents)**

60. ### How do you check browser support for Server-Sent Events?

Before using **Server-Sent Events (SSE)**, you should verify that the browser supports the `EventSource` API.

You can check for support by testing whether the `EventSource` object is defined:

```javascript id="sse9j0k"
if (typeof EventSource !== "undefined") {
  // Server-Sent Events are supported
} else {
  // Server-Sent Events are not supported
}
```

#### Example

```javascript id="sse1l2m"
if (typeof EventSource !== "undefined") {
  const source = new EventSource("/events");

  source.onmessage = function (event) {
    console.log(event.data);
  };
} else {
  console.log(
    "Sorry, your browser does not support Server-Sent Events."
  );
}
```

#### Why Check for Support?

* Ensures compatibility with older browsers.
* Prevents runtime errors when creating an `EventSource`.
* Allows you to provide fallback mechanisms such as polling or WebSockets.

#### Key Point

> To check whether a browser supports Server-Sent Events, verify that the `EventSource` object exists using `typeof EventSource !== "undefined"`. If it exists, you can safely create an `EventSource` connection and receive server-sent updates.

  **[⬆ Back to Top](#table-of-contents)**

61. ### What are the events available for Server-Sent Events (SSE)?

The `EventSource` interface provides several event handlers that allow you to respond to different stages of the SSE connection lifecycle.

| Event       | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `onopen`    | Fired when a connection to the server is successfully established.         |
| `onmessage` | Fired when a message is received from the server.                          |
| `onerror`   | Fired when an error occurs, such as a connection failure or network issue. |

#### 1. `onopen`

This event is triggered when the SSE connection is opened successfully.

```javascript id="sseopen1"
const source = new EventSource("/events");

source.onopen = function () {
  console.log("Connection established");
};
```

#### 2. `onmessage`

This event is triggered whenever the server sends a message.

```javascript id="ssemsg1"
source.onmessage = function (event) {
  console.log("Received:", event.data);
};
```

#### 3. `onerror`

This event is triggered when an error occurs with the connection.

```javascript id="sseerr1"
source.onerror = function (error) {
  console.error("SSE Error:", error);
};
```

#### Complete Example

```javascript id="ssefull1"
const source = new EventSource("/events");

source.onopen = function () {
  console.log("Connected to server");
};

source.onmessage = function (event) {
  console.log("Message:", event.data);
};

source.onerror = function (error) {
  console.error("Connection error:", error);
};
```

#### Custom Events

In addition to the built-in events, SSE supports custom event types using `addEventListener()`:

```javascript id="ssecustom1"
source.addEventListener("notification", (event) => {
  console.log("Notification:", event.data);
});
```

#### Key Point

> The three primary Server-Sent Events are:
>
> * **`onopen`** – Fired when the connection is established.
> * **`onmessage`** – Fired when a message is received.
> * **`onerror`** – Fired when an error occurs.
>
> These events allow the client to monitor and respond to the SSE connection lifecycle.


  **[⬆ Back to Top](#table-of-contents)**

62. ### What are the main rules of a Promise?

A Promise follows a well-defined set of rules specified by the **Promises/A+** specification to ensure consistent and predictable behavior.

#### Rules of a Promise

1. **A Promise is an object that provides a `.then()` method**

   * The `.then()` method is used to register callbacks for fulfilled and rejected states.

2. **A pending Promise can transition only once**

   * A Promise starts in the `pending` state.
   * It may transition to either:

     * `fulfilled`, or
     * `rejected`.

3. **A settled Promise cannot change state**

   * Once a Promise becomes `fulfilled` or `rejected`, it is considered **settled**.
   * A settled Promise cannot transition to any other state.

4. **A settled Promise's value or reason is immutable**

   * Once fulfilled, the fulfillment value cannot change.
   * Once rejected, the rejection reason cannot change.

#### Example

```javascript id="prule1"
const promise = new Promise((resolve, reject) => {
  resolve("Success");

  // Ignored because the Promise is already settled
  reject("Error");
});

promise.then((value) => {
  console.log(value);
});
```

**Output:**

```text id="pruleout"
Success
```

The call to `reject()` is ignored because the Promise has already been fulfilled.

#### State Transition Diagram

```text id="prulestate"
           Pending
          /       \
         /         \
   Fulfilled     Rejected
         \         /
          \       /
          Settled
```

#### Example Showing Immutability

```javascript id="prule2"
const promise = new Promise((resolve) => {
  resolve("First Value");

  // Ignored
  resolve("Second Value");
});

promise.then((value) => {
  console.log(value);
});
```

**Output:**

```text id="pruleout2"
First Value
```

The second `resolve()` call has no effect.

#### Key Point

> A Promise starts in the **pending** state and can transition only once to either **fulfilled** or **rejected**. Once settled, its state and value (or rejection reason) become immutable and cannot be changed.

  **[⬆ Back to Top](#table-of-contents)**

63. ### What is a Callback in Callback?

A **callback in callback** refers to the practice of nesting one callback function inside another callback function. This is commonly done when multiple asynchronous operations need to be executed **sequentially**, where each operation depends on the completion of the previous one.

#### Example

```javascript id="cbcb1"
loadScript("/script1.js", function (script) {
  console.log("First script is loaded");

  loadScript("/script2.js", function (script) {
    console.log("Second script is loaded");

    loadScript("/script3.js", function (script) {
      console.log("Third script is loaded");

      // All scripts are loaded
    });
  });
});
```

#### How It Works

1. Load `script1.js`.
2. After it finishes loading, load `script2.js`.
3. After `script2.js` finishes loading, load `script3.js`.
4. Execute the final logic after all scripts have loaded.

This ensures that each operation runs only after the previous one has completed.

#### Problem with Nested Callbacks

As the number of nested callbacks increases, the code becomes:

* Difficult to read.
* Difficult to maintain.
* Difficult to debug.

This situation is commonly known as **Callback Hell** or the **Pyramid of Doom**.

```javascript id="cbcb2"
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {
        // More nesting...
      });
    });
  });
});
```

#### Better Alternatives

Modern JavaScript provides cleaner ways to handle asynchronous operations:

##### Using Promises

```javascript id="cbcb3"
loadScript("/script1.js")
  .then(() => loadScript("/script2.js"))
  .then(() => loadScript("/script3.js"))
  .then(() => {
    console.log("All scripts loaded");
  })
  .catch((error) => console.error(error));
```

##### Using `async/await`

```javascript id="cbcb4"
async function loadScripts() {
  try {
    await loadScript("/script1.js");
    await loadScript("/script2.js");
    await loadScript("/script3.js");

    console.log("All scripts loaded");
  } catch (error) {
    console.error(error);
  }
}
```

#### Key Point

> A callback in callback is the nesting of one callback function inside another to execute asynchronous operations sequentially. While it ensures the correct execution order, excessive nesting can lead to **Callback Hell**, which is why modern JavaScript often uses **Promises** and **`async/await`** instead.


  **[⬆ Back to Top](#table-of-contents)**

64. ### What is Promise Chaining?

**Promise Chaining** is the process of executing a sequence of asynchronous operations one after another by chaining multiple `.then()` methods. Each `.then()` receives the result of the previous Promise and can return a new value or another Promise.

This allows asynchronous code to be written in a clean and readable manner without deeply nested callbacks.

#### Example

```javascript id="pc1a2b"
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
```

#### Output

```text id="pcout1"
1
2
6
```

#### How Promise Chaining Works

1. The initial Promise resolves with the value `1` after 1 second.
2. The first `.then()` receives `1`, logs it, and returns `1 * 2 = 2`.
3. The second `.then()` receives `2`, logs it, and returns `2 * 3 = 6`.
4. The third `.then()` receives `6`, logs it, and returns `6 * 4 = 24`.

Each `.then()` returns a new Promise, allowing the chain to continue.

#### Promise Chain Flow

```text id="pcflow"
Promise(1)
    |
    v
then() -> 2
    |
    v
then() -> 6
    |
    v
then() -> 24
```

#### Chaining Asynchronous Operations

A `.then()` can also return another Promise:

```javascript id="pc3c4d"
fetchUser()
  .then((user) => fetchOrders(user.id))
  .then((orders) => fetchOrderDetails(orders[0].id))
  .then((details) => console.log(details))
  .catch((error) => console.error(error));
```

Here, each asynchronous operation waits for the previous one to complete.

#### Benefits of Promise Chaining

1. **Avoids Callback Hell**
2. **Improves Readability**
3. **Simplifies Error Handling**
4. **Makes Asynchronous Code Easier to Maintain**

#### Error Handling in Chains

Any error thrown in the chain can be caught by a single `.catch()`:

```javascript id="pc5e6f"
fetchData()
  .then((data) => processData(data))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

#### Key Point

> Promise Chaining is the technique of linking multiple `.then()` handlers together so that the result of one asynchronous operation is passed to the next. Each `.then()` returns a new Promise, enabling sequential execution of asynchronous tasks and avoiding callback hell.


  **[⬆ Back to Top](#table-of-contents)**

65. ### What is `Promise.all()`?

`Promise.all()` is a static method that takes an **iterable (usually an array) of Promises** as input and returns a single Promise.

The returned Promise:

* **Resolves** when **all** input Promises are fulfilled.
* **Rejects immediately** if **any one** of the input Promises is rejected.

#### Syntax

```javascript id="pa1a2b"
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Example

```javascript id="pa3c4d"
const promise1 = Promise.resolve(10);

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(20), 1000);
});

const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

**Output:**

```text id="paout1"
[10, 20, 30]
```

#### Important Characteristics

##### 1. Waits for All Promises

The returned Promise resolves only after every Promise in the array has been fulfilled.

```javascript id="pa5e6f"
Promise.all([
  fetch("/users"),
  fetch("/posts"),
  fetch("/comments"),
]).then((responses) => {
  console.log("All requests completed");
});
```

##### 2. Fails Fast

If any Promise rejects, `Promise.all()` immediately rejects.

```javascript id="pa7g8h"
Promise.all([
  Promise.resolve(1),
  Promise.reject("Something went wrong"),
  Promise.resolve(3),
])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
```

**Output:**

```text id="paout2"
Something went wrong
```

##### 3. Maintains Input Order

The results array preserves the order of the input Promises, regardless of which Promise completes first.

```javascript id="pa9i0j"
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 3000)
);

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 1000)
);

Promise.all([p1, p2]).then((results) => {
  console.log(results);
});
```

**Output:**

```text id="paout3"
["First", "Second"]
```

Even though `p2` resolves first, the results are returned in the same order as the input array.

#### Common Use Cases

* Multiple API requests in parallel
* Loading multiple resources simultaneously
* Running independent asynchronous tasks together
* Improving performance by avoiding sequential execution

#### Key Point

> `Promise.all()` takes an array of Promises and returns a single Promise that resolves when all input Promises are fulfilled or rejects immediately if any Promise is rejected. The order of results is always preserved according to the input order.


  **[⬆ Back to Top](#table-of-contents)**

66. ### What is the purpose of the `Promise.race()` method?

`Promise.race()` is a static Promise method that takes an iterable (usually an array) of Promises and returns a new Promise that settles as soon as the **first input Promise settles**.

The first Promise can either:

* **Resolve** → the returned Promise resolves with that value.
* **Reject** → the returned Promise rejects with that reason.

#### Syntax

```javascript id="prace1"
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

#### Example

```javascript id="prace2"
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
```

**Output:**

```text id="praceout1"
two
```

Although both Promises resolve successfully, `promise2` resolves first, so its value is returned.

#### Example with Rejection

```javascript id="prace3"
const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, "Success");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Error");
});

Promise.race([promise1, promise2])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
```

**Output:**

```text id="praceout2"
Error
```

Since `promise2` rejects first, the Promise returned by `Promise.race()` is rejected immediately.

#### How `Promise.race()` Works

```text id="praceflow"
Promise 1 (500ms) -----> Resolve
Promise 2 (100ms) -----> Resolve

Winner: Promise 2
Result: Resolve with Promise 2's value
```

#### Common Use Cases

1. **Implementing Request Timeouts**

```javascript id="prace4"
const fetchData = fetch("/api/data");

const timeout = new Promise((_, reject) =>
  setTimeout(() => reject("Request timed out"), 5000)
);

Promise.race([fetchData, timeout])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

2. **Choosing the Fastest Response**

   * Multiple servers or APIs.
   * Use the first available result.

#### `Promise.race()` vs `Promise.all()`

| Feature                | `Promise.race()`                 | `Promise.all()`                |
| ---------------------- | -------------------------------- | ------------------------------ |
| Waits for all Promises | No                               | Yes                            |
| Settles when           | First Promise settles            | All Promises fulfill           |
| Rejection behavior     | First settled Promise can reject | Rejects if any Promise rejects |
| Result                 | Single value/reason              | Array of values                |

#### Key Point

> `Promise.race()` returns a Promise that settles as soon as the first Promise in the iterable settles (either fulfills or rejects). It is commonly used for implementing timeouts and selecting the fastest asynchronous operation.


  **[⬆ Back to Top](#table-of-contents)**

67. ### What is Strict Mode in JavaScript?

**Strict Mode** is a feature introduced in **ECMAScript 5 (ES5)** that enables a stricter parsing and error-handling mode for JavaScript code. It helps developers write cleaner, more secure, and less error-prone code by preventing certain unsafe actions and throwing errors for common mistakes that would otherwise fail silently.

Strict Mode is enabled by adding the directive:

```javascript
"use strict";
```

#### Enabling Strict Mode

For an entire script:

```javascript id="sm1a2b"
"use strict";

x = 10; // ReferenceError
```

For a specific function:

```javascript id="sm3c4d"
function myFunction() {
  "use strict";

  y = 20; // ReferenceError
}
```

#### Benefits of Strict Mode

1. **Prevents Accidental Global Variables**

```javascript id="sm5e6f"
"use strict";

x = 10; // ReferenceError: x is not defined
```

Without strict mode, `x` would become a global variable.

2. **Throws Errors for Unsafe Operations**

```javascript id="sm7g8h"
"use strict";

delete Object.prototype; // SyntaxError
```

3. **Disallows Duplicate Parameter Names**

```javascript id="sm9i0j"
"use strict";

function add(a, a) { // SyntaxError
  return a + a;
}
```

4. **Makes `this` Safer**

```javascript id="sm1k2l"
"use strict";

function show() {
  console.log(this);
}

show(); // undefined
```

Without strict mode, `this` would refer to the global object (`window` in browsers).

5. **Reserves Future JavaScript Keywords**

```javascript id="sm3m4n"
"use strict";

// let public = "test"; // SyntaxError
```

#### Common Restrictions in Strict Mode

* No implicit global variables.
* No duplicate parameter names.
* No deleting variables, functions, or function arguments.
* `this` is `undefined` in standalone functions.
* Certain silent errors become explicit errors.

#### Important Note

The statement:

> "Strict mode enables block-scoped variables"

is **not correct**.

Block-scoped variables are provided by **`let`** and **`const`**, which were introduced in **ES6**, and they work independently of strict mode.

```javascript id="sm5o6p"
{
  let x = 10;
  const y = 20;
}
```

#### Key Point

> Strict Mode (`"use strict";`) is a special JavaScript mode that enforces stricter parsing and error handling. It helps catch common mistakes, prevents unsafe actions, improves code security, and makes JavaScript behavior more predictable. It was introduced in ECMAScript 5 and can be applied to an entire script or a specific function.


   **[⬆ Back to Top](#table-of-contents)**

68. ### Why do you need Strict Mode?

**Strict Mode** helps you write safer, cleaner, and more reliable JavaScript code by converting many silent errors into explicit errors. It catches common programming mistakes early, making debugging easier and reducing the chances of unexpected behavior.

#### Benefits of Strict Mode

1. **Prevents Accidental Global Variables**

   * Throws an error when assigning a value to an undeclared variable.

   ```javascript id="sm1a2b"
   "use strict";

   x = 10; // ReferenceError
   ```

2. **Throws Errors for Invalid Assignments**

   * Prevents assignment to read-only properties.

   ```javascript id="sm3c4d"
   "use strict";

   const obj = {};

   Object.defineProperty(obj, "id", {
     value: 1,
     writable: false,
   });

   obj.id = 2; // TypeError
   ```

3. **Prevents Use of Undeclared Variables**

   ```javascript id="sm5e6f"
   "use strict";

   console.log(user); // ReferenceError
   ```

4. **Disallows Duplicate Function Parameters**

   ```javascript id="sm7g8h"
   "use strict";

   function add(a, a) { // SyntaxError
     return a + a;
   }
   ```

5. **Makes `this` Behavior More Predictable**

   ```javascript id="sm9i0j"
   "use strict";

   function show() {
     console.log(this);
   }

   show(); // undefined
   ```

6. **Prevents Deleting Variables and Functions**

   ```javascript id="sm1k2l"
   "use strict";

   let x = 10;

   delete x; // SyntaxError
   ```

7. **Reserves Future JavaScript Keywords**

   * Helps ensure compatibility with future ECMAScript versions.

#### Example: Accidental Global Variable

Without Strict Mode:

```javascript id="sm3m4n"
function test() {
  message = "Hello";
}

test();

console.log(message); // Hello
```

With Strict Mode:

```javascript id="sm5o6p"
"use strict";

function test() {
  message = "Hello"; // ReferenceError
}

test();
```

#### Why It Improves Security

Strict Mode prevents several unsafe language features and common mistakes that can lead to bugs, security vulnerabilities, or unintended modifications to the global scope.

#### Key Point

> Strict Mode (`"use strict";`) is used to make JavaScript code more secure and reliable by catching common errors, preventing accidental globals, enforcing safer language behavior, and converting many silent failures into explicit exceptions.


  **[⬆ Back to Top](#table-of-contents)**

69. ### How do you declare Strict Mode?

Strict Mode is declared by adding the string literal `"use strict";` at the beginning of a script or a function.

#### 1. Strict Mode for an Entire Script (Global Scope)

When `"use strict";` is placed at the top of a script, it applies to the entire script.

```javascript id="sm1a2b"
"use strict";

x = 3.14; // ReferenceError: x is not defined
```

Since `x` is not declared using `let`, `const`, or `var`, Strict Mode throws an error instead of creating a global variable.

#### 2. Strict Mode for a Specific Function (Local Scope)

When `"use strict";` is placed inside a function, it applies only to that function.

```javascript id="sm3c4d"
x = 3.14; // No error (outside strict mode)

myFunction();

function myFunction() {
  "use strict";

  y = 3.14; // ReferenceError: y is not defined
}
```

In this example:

* `x = 3.14` does not throw an error because it is outside Strict Mode.
* `y = 3.14` throws an error because it is inside a strict-mode function.

#### Scope Comparison

| Location of `"use strict"` | Scope              |
| -------------------------- | ------------------ |
| Top of a script            | Entire script      |
| Inside a function          | That function only |

#### Important Note

The `"use strict";` directive must appear at the beginning of the script or function, before any executable statements.

```javascript id="sm5e6f"
function test() {
  "use strict";

  let x = 10;
}
```

If it appears after other statements, it will not activate Strict Mode for that scope.

#### Modern JavaScript Modules

ES Modules (`import`/`export`) automatically run in Strict Mode, so you do not need to add `"use strict";`.

```javascript id="sm7g8h"
export function greet() {
  // Strict Mode is enabled automatically
}
```

#### Key Point

> Strict Mode is enabled by placing `"use strict";` at the beginning of a script or function. When declared at the script level, it applies globally to the entire script; when declared inside a function, it applies only to that function.


  **[⬆ Back to Top](#table-of-contents)**

70. ### What is the purpose of Double Exclamation (`!!`)?

The **double exclamation (`!!`)** is a common JavaScript technique used to convert any value into its corresponding **boolean** value.

It works by applying the logical NOT operator (`!`) twice:

1. The first `!` converts the value to a boolean and negates it.
2. The second `!` negates the result again, producing the original truthiness as a boolean.

#### Syntax

```javascript id="de1a2b"
!!value
```

#### Example

```javascript id="de3c4d"
let isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);

console.log(isIE8); // true or false
```

Without `!!`, the `match()` method returns either:

* An `Array` (if a match is found)
* `null` (if no match is found)

```javascript id="de5e6f"
console.log(
  navigator.userAgent.match(/MSIE 8.0/)
);

// Returns an Array or null
```

Using `!!` converts these values to a boolean:

```javascript id="de7g8h"
console.log(
  !!navigator.userAgent.match(/MSIE 8.0/)
);

// Returns true or false
```

#### Examples of Type Conversion

```javascript id="de9i0j"
console.log(!!"Hello");     // true
console.log(!!123);         // true
console.log(!![]);          // true
console.log(!!{});          // true

console.log(!!"");          // false
console.log(!!0);           // false
console.log(!!null);        // false
console.log(!!undefined);   // false
console.log(!!NaN);         // false
```

#### Truthy and Falsy Values

| Value       | `!!value` |
| ----------- | --------- |
| `"Hello"`   | `true`    |
| `1`         | `true`    |
| `[]`        | `true`    |
| `{}`        | `true`    |
| `""`        | `false`   |
| `0`         | `false`   |
| `null`      | `false`   |
| `undefined` | `false`   |
| `NaN`       | `false`   |

#### Alternative

The `Boolean()` constructor can achieve the same result:

```javascript id="de1k2l"
Boolean("Hello"); // true
Boolean(0);       // false
```

```javascript id="de3m4n"
!!"Hello"; // true
!!0;       // false
```

#### Important Note

> `!!` is not a separate JavaScript operator. It is simply the logical NOT operator (`!`) applied twice.

#### Key Point

> The double exclamation (`!!`) is used to explicitly convert any value to a boolean. Truthy values become `true`, and falsy values become `false`. It is a concise alternative to using `Boolean(value)`.


  **[⬆ Back to Top](#table-of-contents)**

71. ### What is the purpose of the `delete` operator?

The **`delete`** operator is used to remove a property from an object. When a property is deleted, both the property and its associated value are removed from the object.

#### Example

```javascript id="del1a2b"
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
};

delete user.age;

console.log(user);
```

**Output:**

```javascript id="delout1"
{
  firstName: "John",
  lastName: "Doe"
}
```

#### How `delete` Works

```javascript id="del3c4d"
const obj = {
  name: "John",
};

delete obj.name;

console.log(obj.name); // undefined
```

#### Important Notes

##### 1. Deletes Object Properties Only

```javascript id="del5e6f"
const person = {
  age: 25,
};

delete person.age;

console.log(person); // {}
```

##### 2. Does Not Delete Local Variables

```javascript id="del7g8h"
let age = 25;

delete age; // false

console.log(age); // 25
```

Variables declared with `let`, `const`, or `var` cannot be deleted using `delete`.

##### 3. Array Elements Are Not Removed Completely

```javascript id="del9i0j"
const numbers = [10, 20, 30];

delete numbers[1];

console.log(numbers);
```

**Output:**

```javascript id="delout2"
[10, empty, 30]
```

The array length remains unchanged:

```javascript id="del1k2l"
console.log(numbers.length); // 3
```

To remove array elements properly, use `splice()`:

```javascript id="del3m4n"
numbers.splice(1, 1);
```

##### 4. Returns a Boolean

```javascript id="del5o6p"
const user = {
  name: "John",
};

console.log(delete user.name); // true
```

* `true` → Property deleted successfully.
* `false` → Property could not be deleted.

#### Key Point

> The `delete` operator removes a property and its value from an object. It works on object properties but does not delete variables declared with `var`, `let`, or `const`. When used on arrays, it removes the element's value but does not change the array's length.


  **[⬆ Back to Top](#table-of-contents)**

72. ### What is the `typeof` operator?

The **`typeof`** operator is a JavaScript operator used to determine the data type of a variable, value, or expression. It returns a string indicating the type of the operand.

#### Syntax

```javascript
typeof operand
```

or

```javascript
typeof(operand)
```

#### Examples

```javascript id="type1a2b"
typeof "John Abraham"; // "string"
typeof (1 + 2);        // "number"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof [1, 2, 3];      // "object"
typeof { name: "John" }; // "object"
typeof function () {}; // "function"
```

#### Common Return Values

| Value          | Result of `typeof` |
| -------------- | ------------------ |
| `"Hello"`      | `"string"`         |
| `123`          | `"number"`         |
| `true`         | `"boolean"`        |
| `undefined`    | `"undefined"`      |
| `null`         | `"object"`         |
| `{}`           | `"object"`         |
| `[]`           | `"object"`         |
| `function(){}` | `"function"`       |
| `Symbol()`     | `"symbol"`         |
| `10n`          | `"bigint"`         |

#### Important Notes

##### Arrays Return `"object"`

```javascript id="type3c4d"
typeof [1, 2, 3]; // "object"
```

Arrays are a special type of object in JavaScript. To check if a value is an array, use:

```javascript id="type5e6f"
Array.isArray([1, 2, 3]); // true
```

##### `null` Returns `"object"`

```javascript id="type7g8h"
typeof null; // "object"
```

This is a well-known historical bug in JavaScript that has been preserved for backward compatibility.

##### Functions Return `"function"`

```javascript id="type9i0j"
typeof function () {}; // "function"
```

Although functions are technically objects, JavaScript returns `"function"` for convenience.

#### Practical Example

```javascript id="type1k2l"
let value = "Hello";

if (typeof value === "string") {
  console.log("Value is a string");
}
```

#### Key Point

> The `typeof` operator is used to determine the type of a variable, value, or expression. It returns a string such as `"string"`, `"number"`, `"boolean"`, `"object"`, `"function"`, `"undefined"`, `"symbol"`, or `"bigint"`. Be aware that `typeof null` returns `"object"` and `typeof []` returns `"object"` due to JavaScript's type system.


  **[⬆ Back to Top](#table-of-contents)**

73. ### What is `undefined` in JavaScript?

`undefined` is a primitive value in JavaScript that indicates a variable has been declared but has not been assigned a value. The type of `undefined` is also `"undefined"`.

#### Example: Declared but Not Initialized

```javascript id="und1a2b"
let user;

console.log(user);         // undefined
console.log(typeof user);  // "undefined"
```

In this example:

* `user` is declared.
* No value is assigned.
* Therefore, its value is `undefined`.

#### Assigning `undefined`

A variable can be explicitly assigned the value `undefined`:

```javascript id="und3c4d"
let user = "John";

user = undefined;

console.log(user); // undefined
```

#### Other Cases Where `undefined` Appears

##### Function Without a Return Value

```javascript id="und5e6f"
function greet() {
  console.log("Hello");
}

const result = greet();

console.log(result); // undefined
```

##### Accessing a Non-Existent Object Property

```javascript id="und7g8h"
const user = {
  name: "John",
};

console.log(user.age); // undefined
```

##### Missing Function Arguments

```javascript id="und9i0j"
function greet(name) {
  console.log(name);
}

greet(); // undefined
```

#### `undefined` vs `null`

| Feature     | `undefined`        | `null`                                 |
| ----------- | ------------------ | -------------------------------------- |
| Meaning     | Value not assigned | Intentional absence of value           |
| Type        | `"undefined"`      | `"object"` (historical JavaScript bug) |
| Assigned by | JavaScript         | Developer                              |

```javascript id="und1k2l"
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

#### Best Practice

Instead of explicitly assigning `undefined`, it is generally better to use `null` when you intentionally want to indicate the absence of a value.

```javascript id="und3m4n"
let user = null;
```

#### Key Point

> `undefined` is a primitive value that indicates a variable has been declared but not assigned a value. It is also returned when accessing non-existent properties, missing function arguments, or functions that do not return a value. The type of `undefined` is `"undefined"`.


  **[⬆ Back to Top](#table-of-contents)**

74. ### What is `null` in JavaScript?

`null` is a primitive value in JavaScript that represents the **intentional absence of any object value**. It is used when a variable should explicitly have **no value** or **no object reference**.

Unlike `undefined`, which usually indicates that a value has not been assigned, `null` is assigned intentionally by the developer.

#### Example

```javascript id="null1a2b"
let user = null;

console.log(user);         // null
console.log(typeof user);  // "object"
```

#### Why Does `typeof null` Return `"object"`?

```javascript id="null3c4d"
typeof null; // "object"
```

This is a **historical bug** in JavaScript that has been preserved for backward compatibility. Although `null` is a primitive value, `typeof null` returns `"object"`.

#### Assigning `null`

You can explicitly clear a variable by assigning `null`:

```javascript id="null5e6f"
let user = {
  name: "John",
};

user = null;

console.log(user); // null
```

#### `null` vs `undefined`

| Feature        | `null`                         | `undefined`             |
| -------------- | ------------------------------ | ----------------------- |
| Meaning        | Intentional absence of a value | Value not assigned      |
| Type           | `"object"` (historical bug)    | `"undefined"`           |
| Assigned by    | Developer                      | JavaScript or developer |
| Primitive Type | Yes                            | Yes                     |

```javascript id="null7g8h"
let a = null;
let b;

console.log(a); // null
console.log(b); // undefined
```

#### Equality Comparison

```javascript id="null9i0j"
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

* `==` performs type coercion, so `null` and `undefined` are considered equal.
* `===` checks both value and type, so they are different.

#### Common Use Cases

* Resetting object references.
* Indicating that data is intentionally unavailable.
* Representing "no value" in APIs and databases.

#### Key Point

> `null` is a primitive value that represents the intentional absence of a value or object reference. Although it is a primitive type, `typeof null` returns `"object"` due to a historical JavaScript bug. It is commonly used to explicitly indicate that a variable should have no value.


  **[⬆ Back to Top](#table-of-contents)**

75. ### What is the difference between `null` and `undefined`?

Both `null` and `undefined` represent the absence of a value in JavaScript, but they have different meanings and use cases.

| `null`                                                                                          | `undefined`                                                                       |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| It is an assignment value that indicates a variable intentionally points to no value or object. | It indicates that a variable has been declared but has not been assigned a value. |
| `typeof null` returns `"object"` (a historical JavaScript bug).                                 | `typeof undefined` returns `"undefined"`.                                         |
| It is a primitive value representing an intentional absence of value.                           | It is a primitive value representing an uninitialized or missing value.           |
| Usually assigned explicitly by the developer.                                                   | Usually assigned automatically by JavaScript.                                     |
| Indicates the absence of a value.                                                               | Indicates that a value has not been assigned.                                     |
| Converted to `0` in numeric operations.                                                         | Converted to `NaN` in numeric operations.                                         |

#### Example: `null`

```javascript id="nu1a2b"
let user = null;

console.log(user);         // null
console.log(typeof user);  // "object"
```

#### Example: `undefined`

```javascript id="nu3c4d"
let user;

console.log(user);         // undefined
console.log(typeof user);  // "undefined"
```

#### Numeric Conversion

```javascript id="nu5e6f"
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
```

#### Equality Comparison

```javascript id="nu7g8h"
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

* `==` performs type coercion, so they are considered equal.
* `===` checks both type and value, so they are different.

#### Common Scenarios

##### `undefined`

```javascript id="nu9i0j"
let name;

console.log(name); // undefined
```

```javascript id="nu1k2l"
const user = {};

console.log(user.age); // undefined
```

##### `null`

```javascript id="nu3m4n"
let selectedUser = null;

// No user selected yet
```

#### Key Point

> `undefined` means a variable exists but has not been assigned a value, whereas `null` is an intentional assignment that represents the absence of a value. Although both indicate "no value," `null` is typically set by the developer, while `undefined` is usually assigned by JavaScript automatically.


  **[⬆ Back to Top](#table-of-contents)**

76. ### What is `eval()`?

The **`eval()`** function evaluates and executes JavaScript code represented as a string. The string passed to `eval()` can contain a JavaScript expression, statement, or a sequence of statements.

#### Syntax

```javascript id="eval1a2b"
eval(string);
```

#### Example: Evaluating an Expression

```javascript id="eval3c4d"
console.log(eval("1 + 2")); // 3
```

#### Example: Executing Statements

```javascript id="eval5e6f"
let x = 10;

eval("x = x + 5");

console.log(x); // 15
```

#### Example: Declaring Variables

```javascript id="eval7g8h"
eval("let message = 'Hello World';");
```

#### Why is `eval()` Discouraged?

Using `eval()` is generally considered a **bad practice** because:

1. **Security Risks**

   * Executing arbitrary strings can lead to code injection attacks.

2. **Performance Issues**

   * JavaScript engines cannot optimize code executed through `eval()` efficiently.

3. **Harder to Debug**

   * Dynamically generated code is difficult to read, maintain, and debug.

#### Unsafe Example

```javascript id="eval9i0j"
const userInput = "alert('Hacked!')";

eval(userInput);
```

If `userInput` comes from an untrusted source, malicious code could be executed.

#### Alternatives to `eval()`

Instead of:

```javascript id="eval1k2l"
eval("1 + 2");
```

Use:

```javascript id="eval3m4n"
Function("return 1 + 2")();
```

Or better yet, avoid executing strings as code whenever possible.

For JSON parsing:

```javascript id="eval5o6p"
// Avoid
eval("(" + jsonString + ")");
```

Use:

```javascript id="eval7q8r"
JSON.parse(jsonString);
```

#### Key Point

> `eval()` executes JavaScript code contained in a string and returns the result of the evaluated code. Although powerful, it is generally discouraged because it introduces security risks, hurts performance, and makes code harder to maintain. Modern JavaScript applications should avoid `eval()` whenever possible.


  **[⬆ Back to Top](#table-of-contents)**

77. ### What is the difference between `window` and `document`?

The `window` and `document` objects are fundamental parts of the Browser Object Model (BOM) and Document Object Model (DOM), respectively.

| Window                                                                                       | Document                                                                                                 |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| It is the top-level (global) object in a browser environment.                                | It is a property of the `window` object that represents the HTML document loaded in the browser.         |
| Represents the browser window or tab.                                                        | Represents the web page content (DOM).                                                                   |
| Available implicitly throughout JavaScript code running in the browser.                      | Can be accessed as `window.document` or simply `document`.                                               |
| Provides browser-related APIs and properties.                                                | Provides methods and properties for manipulating HTML elements.                                          |
| Contains objects such as `document`, `location`, `history`, `navigator`, and `localStorage`. | Contains DOM methods such as `getElementById()`, `querySelector()`, and `createElement()`.               |
| Has methods like `alert()`, `confirm()`, `prompt()`, `setTimeout()`, and `setInterval()`.    | Has methods like `getElementById()`, `getElementsByTagName()`, `querySelector()`, and `createElement()`. |

#### Relationship Between `window` and `document`

```text
Window
 ├── Document
 ├── Location
 ├── Navigator
 ├── History
 └── LocalStorage
```

The `document` object is a property of the `window` object:

```javascript id="wd1a2b"
console.log(window.document === document);
// true
```

#### Example: Using `window`

```javascript id="wd3c4d"
window.alert("Hello World");
```

Since `window` is the global object, you can omit it:

```javascript id="wd5e6f"
alert("Hello World");
```

#### Example: Using `document`

```javascript id="wd7g8h"
const heading =
  document.getElementById("title");

console.log(heading);
```

#### Common `window` Properties

```javascript id="wd9i0j"
window.location;
window.navigator;
window.history;
window.localStorage;
```

#### Common `document` Methods

```javascript id="wd1k2l"
document.getElementById("id");
document.querySelector(".class");
document.createElement("div");
```

#### Key Point

> The **`window`** object represents the browser window and acts as the global object in the browser, while the **`document`** object represents the HTML page (DOM) loaded within that window. The `document` object is a property of the `window` object and is used to access and manipulate page content.


  **[⬆ Back to Top](#table-of-contents)**

78. ### How do you access History in JavaScript?

The browser's session history can be accessed through the **`history`** object, which is a property of the `window` object.

```javascript id="hist1a2b"
window.history
```

Since `window` is the global object in browsers, you can also access it directly:

```javascript id="hist3c4d"
history
```

#### Navigating Through History

##### Go Back to the Previous Page

```javascript id="hist5e6f"
function goBack() {
  window.history.back();
}
```

Equivalent to:

```javascript id="hist7g8h"
function goBack() {
  history.back();
}
```

##### Go Forward to the Next Page

```javascript id="hist9i0j"
function goForward() {
  window.history.forward();
}
```

#### Other Useful History Methods

##### `history.go()`

Moves to a specific page in the session history.

```javascript id="hist1k2l"
history.go(-1); // Same as back()
history.go(1);  // Same as forward()
history.go(0);  // Reload current page
```

##### `history.length`

Returns the number of entries in the session history.

```javascript id="hist3m4n"
console.log(history.length);
```

#### Example

```javascript id="hist5o6p"
document
  .getElementById("backBtn")
  .addEventListener("click", () => {
    history.back();
  });

document
  .getElementById("forwardBtn")
  .addEventListener("click", () => {
    history.forward();
  });
```

#### History API for Single-Page Applications (SPA)

Modern applications often use additional History API methods:

```javascript id="hist7q8r"
history.pushState(
  { page: 1 },
  "",
  "/profile"
);
```

```javascript id="hist9s0t"
history.replaceState(
  { page: 1 },
  "",
  "/dashboard"
);
```

These methods update the URL without reloading the page.

#### Key Point

> The browser history is accessed through the `window.history` object (or simply `history`). It provides methods such as `back()`, `forward()`, and `go()` to navigate through the browser's session history, along with modern APIs like `pushState()` and `replaceState()` for single-page applications.


  **[⬆ Back to Top](#table-of-contents)**

79. ### How do you detect whether the Caps Lock key is turned on?

You can use the **`getModifierState()`** method of a keyboard or mouse event to determine whether a modifier key such as **CapsLock**, **NumLock**, or **ScrollLock** is currently active.

The method returns:

* `true` → Modifier key is active.
* `false` → Modifier key is not active.

#### Syntax

```javascript id="caps1a2b"
event.getModifierState("CapsLock");
```

#### Example

```html
<input type="password" onkeydown="checkCapsLock(event)" />

<p id="feedback"></p>

<script>
  function checkCapsLock(event) {
    const isCapsLockOn =
      event.getModifierState("CapsLock");

    document.getElementById("feedback").textContent =
      isCapsLockOn
        ? "Caps Lock is ON"
        : "Caps Lock is OFF";
  }
</script>
```

#### Explanation

1. The user types in the password field.
2. The `keydown` event is triggered.
3. `getModifierState("CapsLock")` checks whether Caps Lock is active.
4. A message is displayed accordingly.

#### Alternative Example

```javascript id="caps3c4d"
document.addEventListener(
  "keydown",
  function (event) {
    if (event.getModifierState("CapsLock")) {
      console.log("Caps Lock is ON");
    } else {
      console.log("Caps Lock is OFF");
    }
  }
);
```

#### Other Supported Modifier Keys

```javascript id="caps5e6f"
event.getModifierState("CapsLock");
event.getModifierState("NumLock");
event.getModifierState("ScrollLock");
event.getModifierState("Shift");
event.getModifierState("Control");
event.getModifierState("Alt");
```

#### Important Note

Although `getModifierState()` works with mouse events, **keyboard events (`keydown`, `keyup`) are generally preferred** for detecting Caps Lock status because they provide more reliable and immediate feedback while the user is typing.

#### Key Point

> The `getModifierState()` method can be used to detect whether Caps Lock is enabled. Calling `event.getModifierState("CapsLock")` returns `true` if Caps Lock is active and `false` otherwise. It is commonly used in password fields to warn users when Caps Lock is turned on.


  **[⬆ Back to Top](#table-of-contents)**

80. ### What is `isNaN()`?

The **`isNaN()`** function is used to determine whether a value is **Not-a-Number (`NaN`)** or cannot be converted to a valid number.

It returns:

* `true` → If the value is `NaN` or cannot be converted to a number.
* `false` → If the value is a valid number or can be converted to one.

#### Syntax

```javascript id="isnan1a2b"
isNaN(value);
```

#### Examples

```javascript id="isnan3c4d"
isNaN("Hello"); // true
isNaN("100");   // false
isNaN(100);     // false
isNaN(NaN);     // true
```

#### How `isNaN()` Works

The global `isNaN()` function first attempts to convert the value to a number before checking it.

```javascript id="isnan5e6f"
isNaN("123"); // false
```

Equivalent to:

```javascript id="isnan7g8h"
isNaN(Number("123")); // false
```

#### Some Surprising Results

```javascript id="isnan9i0j"
isNaN("");       // false
isNaN(" ");      // false
isNaN(null);     // false
isNaN(true);     // false
isNaN(undefined); // true
```

Explanation:

```javascript id="isnan1k2l"
Number("");        // 0
Number(" ");       // 0
Number(null);      // 0
Number(true);      // 1
Number(undefined); // NaN
```

#### `isNaN()` vs `Number.isNaN()`

The modern and recommended approach is **`Number.isNaN()`** because it does not perform type coercion.

```javascript id="isnan3m4n"
Number.isNaN(NaN);       // true
Number.isNaN("Hello");   // false
```

```javascript id="isnan5o6p"
isNaN("Hello");          // true
```

Comparison:

| Expression  | `isNaN()` | `Number.isNaN()` |
| ----------- | --------- | ---------------- |
| `NaN`       | `true`    | `true`           |
| `"Hello"`   | `true`    | `false`          |
| `undefined` | `true`    | `false`          |
| `"100"`     | `false`   | `false`          |

#### Best Practice

To check specifically for the `NaN` value, prefer:

```javascript id="isnan7q8r"
Number.isNaN(value);
```

#### Key Point

> `isNaN()` checks whether a value is not a valid number by first attempting to convert it to a number. It returns `true` for values that result in `NaN` and `false` otherwise. For more precise checks without type coercion, use `Number.isNaN()`.


  **[⬆ Back to Top](#table-of-contents)**

81. ### What are the differences between undeclared and undefined variables?

In JavaScript, **undeclared** and **undefined** are different concepts, although they are often confused.

| Undeclared Variable                                        | Undefined Variable                                                |
| ---------------------------------------------------------- | ----------------------------------------------------------------- |
| The variable has never been declared in the current scope. | The variable has been declared but has not been assigned a value. |
| Accessing it throws a `ReferenceError`.                    | Accessing it returns `undefined`.                                 |
| `typeof` returns `"undefined"` without throwing an error.  | `typeof` returns `"undefined"`.                                   |
| Does not exist in memory as a declared variable.           | Exists in memory but has no assigned value.                       |

#### Undefined Variable Example

```javascript id="uv1a2b"
let a;

console.log(a); // undefined
console.log(typeof a); // "undefined"
```

Here, `a` is declared but not initialized, so its value is `undefined`.

#### Undeclared Variable Example

```javascript id="uv3c4d"
console.log(b);
```

**Output:**

```text id="uvout1"
ReferenceError: b is not defined
```

Here, `b` was never declared, so JavaScript throws a runtime error.

#### Comparison Example

```javascript id="uv5e6f"
let a;

console.log(a); // undefined

console.log(b); // ReferenceError
```

#### Using `typeof`

One interesting behavior is that `typeof` does not throw an error for undeclared variables:

```javascript id="uv7g8h"
console.log(typeof a); // "undefined"
console.log(typeof b); // "undefined"
```

Even though `b` is undeclared, `typeof b` safely returns `"undefined"`.

#### Why the Error Says "not defined"

```javascript id="uv9i0j"
console.log(b);
```

Chrome typically reports:

```text id="uvout2"
Uncaught ReferenceError: b is not defined
```

This message can be confusing because `b` is actually **undeclared**, not merely **undefined**. The error message is a historical wording used by JavaScript engines.

#### Key Point

> An **undefined variable** has been declared but not assigned a value, whereas an **undeclared variable** has never been declared at all. Accessing an undefined variable returns `undefined`, while accessing an undeclared variable throws a `ReferenceError`.


  **[⬆ Back to Top](#table-of-contents)**


82. ### What are Global Variables?

**Global variables** are variables that are accessible from anywhere in the program. They are declared in the global scope and can be accessed by all functions and blocks within the application.

#### Declaring a Global Variable

A variable declared outside any function or block becomes a global variable.

```javascript id="gv1a2b"
let message = "Hello";

function greet() {
  console.log(message);
}

greet(); // Hello
```

#### Accidental Global Variables

In non-strict mode, assigning a value to an undeclared variable creates a global variable:

```javascript id="gv3c4d"
msg = "Hello";

console.log(msg); // Hello
```

This is equivalent to:

```javascript id="gv5e6f"
window.msg = "Hello";
```

in a browser environment.

#### Example

```javascript id="gv7g8h"
let name = "John";

function displayName() {
  console.log(name);
}

displayName(); // John
console.log(name); // John
```

The variable `name` is accessible both inside and outside the function.

#### Global Variables and the `window` Object

In browsers, global variables declared with `var` become properties of the `window` object:

```javascript id="gv9i0j"
var user = "John";

console.log(window.user); // John
```

However, variables declared with `let` and `const` do not become properties of `window`:

```javascript id="gv1k2l"
let age = 25;

console.log(window.age); // undefined
```

#### Strict Mode Prevents Accidental Globals

```javascript id="gv3m4n"
"use strict";

msg = "Hello"; // ReferenceError
```

Strict Mode prevents accidental creation of global variables.

#### Problems with Global Variables

1. **Namespace Pollution**

   * Global variables can conflict with other variables.

2. **Harder to Maintain**

   * Any part of the code can modify them.

3. **Potential Bugs**

   * Unintended changes can affect the entire application.

#### Best Practice

Prefer using `let` and `const` with the smallest possible scope instead of relying on global variables.

```javascript id="gv5o6p"
function greet() {
  const message = "Hello";
  console.log(message);
}
```

#### Key Point

> Global variables are variables declared in the global scope and can be accessed from anywhere in the program. In non-strict mode, assigning a value to an undeclared variable creates an accidental global variable. To avoid bugs and improve maintainability, use `let` and `const` with appropriate scope and enable Strict Mode.


  **[⬆ Back to Top](#table-of-contents)**

83. ### What are the problems with Global Variables?

Global variables can be accessed and modified from anywhere in the program. While this may seem convenient, it can lead to several issues in large applications.

#### Problems with Global Variables

1. **Name Collisions**

   * A global variable can conflict with a local variable or another global variable having the same name.

   ```javascript
   let user = "John";

   function displayUser() {
     let user = "Jane";
     console.log(user); // Jane
   }
   ```

   Such naming conflicts can make code confusing and error-prone.

2. **Difficult to Debug**

   * Since any part of the application can modify a global variable, it becomes difficult to track where its value changed.

   ```javascript
   let count = 0;

   function increment() {
     count++;
   }

   function reset() {
     count = 0;
   }
   ```

   Debugging unexpected changes to `count` can be challenging in large codebases.

3. **Harder to Test**

   * Functions that depend on global variables are less predictable and harder to test because their behavior depends on external state.

   ```javascript
   let taxRate = 0.18;

   function calculateTax(amount) {
     return amount * taxRate;
   }
   ```

   Testing `calculateTax()` requires controlling the global `taxRate`.

4. **Unintended Side Effects**

   * Changes made in one part of the application can unexpectedly affect other parts.

5. **Reduced Maintainability**

   * As applications grow, managing and understanding global state becomes increasingly difficult.

6. **Namespace Pollution**

   * Too many global variables clutter the global namespace and increase the risk of naming conflicts.

#### Best Practices

* Minimize the use of global variables.
* Use `let` and `const` with block or function scope.
* Encapsulate data inside functions, modules, or classes.
* Enable Strict Mode (`"use strict";`) to prevent accidental global variables.

#### Example Using Local Scope

```javascript
function calculateTax(amount) {
  const taxRate = 0.18;
  return amount * taxRate;
}
```

This approach avoids relying on global state and makes the function easier to test and maintain.

#### Key Point

> Global variables can lead to name collisions, unintended side effects, debugging difficulties, and testing challenges. To write maintainable and reliable code, minimize the use of global variables and prefer local scope, modules, or classes for encapsulating data.


  **[⬆ Back to Top](#table-of-contents)**

84. ### What is the `NaN` property?

The **`NaN` (Not-a-Number)** property is a global property in JavaScript that represents a value that is **not a valid number**. It is typically produced when a mathematical operation or numeric conversion fails.

`NaN` is a special value of the **Number** type.

#### Examples

```javascript id="nan1a2b"
Math.sqrt(-1); // NaN
```

```javascript id="nan3c4d"
parseInt("Hello"); // NaN
```

```javascript id="nan5e6f"
Number("JavaScript"); // NaN
```

#### Type of `NaN`

Although `NaN` means "Not-a-Number", its type is actually `"number"`:

```javascript id="nan7g8h"
console.log(typeof NaN); // "number"
```

#### Checking for `NaN`

Since `NaN` is not equal to itself, a direct comparison does not work:

```javascript id="nan9i0j"
console.log(NaN === NaN); // false
```

Use `Number.isNaN()` instead:

```javascript id="nan1k2l"
console.log(Number.isNaN(NaN)); // true
```

or:

```javascript id="nan3m4n"
console.log(isNaN("Hello")); // true
```

#### Common Operations That Return `NaN`

```javascript id="nan5o6p"
0 / 0;               // NaN
```

```javascript id="nan7q8r"
Math.sqrt(-1);       // NaN
```

```javascript id="nan9s0t"
parseInt("Hello");   // NaN
```

```javascript id="nan1u2v"
Number(undefined);   // NaN
```

#### Important Characteristics

```javascript id="nan3w4x"
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
```

```javascript id="nan5y6z"
console.log(Number.isNaN(NaN)); // true
```

#### Key Point

> `NaN` (Not-a-Number) is a global property that represents an invalid numeric value. It is returned when a mathematical operation or numeric conversion fails. Although it represents "not a number," its type is `"number"`, and it is the only JavaScript value that is not equal to itself.


  **[⬆ Back to Top](#table-of-contents)**

85. ### What is the purpose of the `isFinite()` function?

The **`isFinite()`** function is used to determine whether a value is a **finite number**. It returns:

* `true` if the value is a finite number.
* `false` if the value is:

  * `Infinity`
  * `-Infinity`
  * `NaN` (Not-a-Number)

#### Syntax

```javascript
isFinite(value);
```

#### Examples

```javascript id="finite1a2b"
isFinite(Infinity);   // false
isFinite(-Infinity);  // false
isFinite(NaN);        // false

isFinite(100);        // true
isFinite(3.14);       // true
isFinite(-50);        // true
```

#### Type Coercion Behavior

The global `isFinite()` function converts the value to a number before checking it:

```javascript id="finite3c4d"
isFinite("100"); // true
isFinite(null);  // true
isFinite(true);  // true
```

Equivalent conversions:

```javascript id="finite5e6f"
Number("100"); // 100
Number(null);  // 0
Number(true);  // 1
```

#### Some Interesting Examples

```javascript id="finite7g8h"
isFinite("Hello");    // false
isFinite(undefined);  // false
isFinite("");         // true
isFinite("123");      // true
```

#### `isFinite()` vs `Number.isFinite()`

Modern JavaScript provides `Number.isFinite()`, which is more strict because it does **not** perform type coercion.

```javascript id="finite9i0j"
Number.isFinite(100);   // true
Number.isFinite("100"); // false
```

Comparison:

| Expression | `isFinite()` | `Number.isFinite()` |
| ---------- | ------------ | ------------------- |
| `100`      | `true`       | `true`              |
| `"100"`    | `true`       | `false`             |
| `null`     | `true`       | `false`             |
| `Infinity` | `false`      | `false`             |
| `NaN`      | `false`      | `false`             |

#### Practical Example

```javascript id="finite1k2l"
const value = Number(userInput);

if (Number.isFinite(value)) {
  console.log("Valid number");
} else {
  console.log("Invalid number");
}
```

#### Key Point

> The `isFinite()` function checks whether a value is a finite number. It returns `false` for `Infinity`, `-Infinity`, and `NaN`, and `true` for valid finite numbers. Since `isFinite()` performs type coercion, `Number.isFinite()` is generally preferred for stricter and more predictable checks.


  **[⬆ Back to Top](#table-of-contents)**

86. ### What is Event Flow?

**Event Flow** refers to the order in which an event propagates through the DOM (Document Object Model) when a user interacts with a webpage, such as clicking a button, typing in an input field, or hovering over an element.

When an event occurs on a nested element, the event travels through the DOM in three phases:

1. **Event Capturing Phase (Top → Bottom)**
2. **Target Phase**
3. **Event Bubbling Phase (Bottom → Top)**

#### Event Flow Diagram

```text
Window
  ↓
Document
  ↓
<html>
  ↓
<body>
  ↓
<div>
  ↓
<button>  ← Target Element
  ↑
<div>
  ↑
<body>
  ↑
<html>
  ↑
Document
  ↑
Window
```

#### 1. Event Capturing Phase

The event starts at the root (`window`) and travels down through the DOM tree toward the target element.

```javascript
element.addEventListener(
  "click",
  handler,
  true // Capturing phase
);
```

#### 2. Target Phase

The event reaches the target element—the element on which the event actually occurred.

```html
<button id="btn">Click Me</button>
```

If the user clicks the button, the button is the target element.

#### 3. Event Bubbling Phase

After reaching the target, the event bubbles back up through its ancestors toward the root.

```javascript
element.addEventListener(
  "click",
  handler
); // Bubbling phase (default)
```

#### Example

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```javascript
document
  .getElementById("parent")
  .addEventListener("click", () => {
    console.log("Parent clicked");
  });

document
  .getElementById("child")
  .addEventListener("click", () => {
    console.log("Button clicked");
  });
```

When the button is clicked:

```text
Button clicked
Parent clicked
```

This happens because the event bubbles from the button to its parent.

#### Stopping Event Propagation

You can stop the event from continuing through the DOM using `stopPropagation()`:

```javascript
document
  .getElementById("child")
  .addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button clicked");
  });
```

Now only:

```text
Button clicked
```

is logged.

#### Key Point

> Event Flow is the process by which an event travels through the DOM. It consists of three phases: **Capturing** (top to bottom), **Target** (event reaches the target element), and **Bubbling** (bottom to top). By default, most event listeners handle events during the bubbling phase.


  **[⬆ Back to Top](#table-of-contents)**

87. ### What is Event Capturing?

**Event Capturing** (also called **trickling**) is the first phase of event propagation in the DOM. During this phase, an event starts from the outermost ancestor (`window` → `document`) and travels downward through the DOM tree until it reaches the target element.

#### Event Propagation Phases

```text
1. Capturing Phase  (Top → Bottom)
2. Target Phase
3. Bubbling Phase   (Bottom → Top)
```

#### Enabling Event Capturing

To listen for an event during the capturing phase, pass `true` as the third argument to `addEventListener()`:

```javascript
element.addEventListener(
  "click",
  handler,
  true
);
```

A more modern approach is:

```javascript
element.addEventListener(
  "click",
  handler,
  { capture: true }
);
```

#### Example

```html
<div>
  <button class="child">Hello</button>
</div>

<script>
  const parent = document.querySelector("div");
  const child = document.querySelector(".child");

  // Capturing phase
  parent.addEventListener(
    "click",
    function () {
      console.log("Parent (capturing)");
    },
    true
  );

  // Bubbling phase (default)
  child.addEventListener("click", function () {
    console.log("Child (bubbling)");
  });
</script>
```

**Output when the button is clicked:**

```text
Parent (capturing)
Child (bubbling)
```

#### Why Does the Parent Execute First?

When the button is clicked:

1. The event starts at the top of the DOM tree.
2. It travels downward during the **capturing phase**.
3. The parent's capturing listener executes before the event reaches the button.
4. The event reaches the button (**target phase**).
5. The event then bubbles upward (**bubbling phase**).

#### Event Flow Visualization

```text
Window
  ↓
Document
  ↓
<html>
  ↓
<body>
  ↓
<div>      ← Parent (capturing listener)
  ↓
<button>   ← Target
```

#### Capturing vs Bubbling

| Event Capturing                             | Event Bubbling                            |
| ------------------------------------------- | ----------------------------------------- |
| Event travels from parent to child.         | Event travels from child to parent.       |
| Enabled with `addEventListener(..., true)`. | Default behavior of `addEventListener()`. |
| Executed before the target phase.           | Executed after the target phase.          |

#### Key Point

> Event Capturing is the first phase of event propagation in which an event travels from the outermost ancestor down to the target element. To handle events during this phase, pass `true` (or `{ capture: true }`) as the third argument to `addEventListener()`.


  **[⬆ Back to Top](#table-of-contents)**

88. ### What is Event Bubbling?

**Event Bubbling** is a phase of event propagation in which an event first occurs on the **target element** (the element the user interacted with) and then propagates upward through its ancestor elements in the DOM hierarchy, eventually reaching the `document` and `window`.

By default, event listeners added with `addEventListener()` listen during the **bubbling phase**.

#### Event Bubbling Flow

```text
Window
  ↑
Document
  ↑
<html>
  ↑
<body>
  ↑
<div>      ← Parent
  ↑
<button>   ← Target Element
```

When the button is clicked:

1. The event is triggered on the button (target element).
2. The event bubbles up to the parent `<div>`.
3. Then to `<body>`, `<html>`, `document`, and finally `window`.

#### Example

```html
<div>
  <button class="child">Hello</button>
</div>

<script>
  const parent = document.querySelector("div");
  const child = document.querySelector(".child");

  // Bubbling phase (default)
  parent.addEventListener("click", function () {
    console.log("Parent");
  });

  child.addEventListener("click", function () {
    console.log("Child");
  });
</script>
```

**Output when the button is clicked:**

```text
Child
Parent
```

#### Why Does This Happen?

* The click event first occurs on the button (`child`).
* After executing the button's event handler, the event bubbles up to its parent (`div`).
* The parent's event handler is then executed.

#### Stopping Event Bubbling

You can stop the event from propagating to parent elements using `stopPropagation()`:

```javascript
child.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Child");
});

parent.addEventListener("click", function () {
  console.log("Parent");
});
```

**Output:**

```text
Child
```

The parent's event handler will not execute.

#### Event Bubbling vs Event Capturing

| Event Bubbling                            | Event Capturing                                                     |
| ----------------------------------------- | ------------------------------------------------------------------- |
| Event travels from child to parent.       | Event travels from parent to child.                                 |
| Default behavior of `addEventListener()`. | Enabled using `addEventListener(..., true)` or `{ capture: true }`. |
| Occurs after the target phase.            | Occurs before the target phase.                                     |

#### Common Use Case: Event Delegation

Event bubbling enables **event delegation**, where a parent element handles events for its child elements.

```javascript
document
  .getElementById("list")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log(event.target.textContent);
    }
  });
```

This approach is efficient because only one event listener is attached to the parent element.

#### Key Point

> Event Bubbling is the process by which an event propagates from the target element upward through its ancestor elements in the DOM. It is the default event propagation mechanism in JavaScript and forms the basis for techniques such as event delegation.

    
  **[⬆ Back to Top](#table-of-contents)**


89. ### How do you submit a form using JavaScript?

You can submit a form programmatically using the form's **`submit()`** method.

#### Using `document.forms`

```javascript
function submitForm() {
  document.forms[0].submit();
}
```

Here:

* `document.forms` returns a collection of all forms in the document.
* `document.forms[0]` refers to the first form.
* `submit()` submits the form to the server.

#### Example

```html
<form action="/submit" method="post">
  <input type="text" name="username" />
  <button type="button" onclick="submitForm()">
    Submit
  </button>
</form>

<script>
  function submitForm() {
    document.forms[0].submit();
  }
</script>
```

#### Using `getElementById()`

A more readable approach is to select the form by its ID:

```html
<form id="userForm" action="/submit" method="post">
  <input type="text" name="username" />
</form>

<script>
  document
    .getElementById("userForm")
    .submit();
</script>
```

#### Using the `onsubmit` Event

The `onsubmit` event is triggered when a form is submitted:

```html
<form
  id="userForm"
  onsubmit="handleSubmit(event)"
>
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>

<script>
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");
  }
</script>
```

#### Important Note

Calling `form.submit()`:

```javascript
form.submit();
```

**does not trigger**:

* The `submit` event
* HTML5 form validation

If you want validation and the `submit` event to run, use:

```javascript
form.requestSubmit();
```

```javascript
document
  .getElementById("userForm")
  .requestSubmit();
```

#### Key Point

> A form can be submitted programmatically using the `submit()` method, such as `document.forms[0].submit()`. However, `submit()` bypasses form validation and the `submit` event. For modern applications, `requestSubmit()` is often preferred because it behaves like a user-initiated form submission and triggers validation and event handlers.


  **[⬆ Back to Top](#table-of-contents)**

90. ### How do you find operating system details in JavaScript?

The **`navigator`** object provides information about the browser and the user's environment. You can use properties of the `navigator` object to get operating system-related information.

#### Using `navigator.platform`

The `platform` property returns information about the platform on which the browser is running.

```javascript id="os1a2b"
console.log(navigator.platform);
```

**Possible outputs:**

```text id="osout1"
Win32
MacIntel
Linux x86_64
```

#### Example

```javascript id="os3c4d"
if (navigator.platform.includes("Win")) {
  console.log("Windows OS");
} else if (navigator.platform.includes("Mac")) {
  console.log("macOS");
} else if (navigator.platform.includes("Linux")) {
  console.log("Linux OS");
}
```

#### Using `navigator.userAgent`

You can also inspect the user agent string:

```javascript id="os5e6f"
console.log(navigator.userAgent);
```

Example output:

```text id="osout2"
Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...
```

#### Modern Alternative: `navigator.userAgentData`

Some modern browsers provide the `userAgentData` API:

```javascript id="os7g8h"
if (navigator.userAgentData) {
  console.log(
    navigator.userAgentData.platform
  );
}
```

#### Important Note

* `navigator.platform` and `navigator.userAgent` can be spoofed and should not be relied upon for security-sensitive decisions.
* Some browsers are reducing the amount of information exposed for privacy reasons.
* Feature detection is generally preferred over OS detection whenever possible.

#### Key Point

> Operating system details can be obtained from the `navigator` object, commonly using `navigator.platform` or `navigator.userAgent`. For example, `navigator.platform` returns information such as `"Win32"`, `"MacIntel"`, or `"Linux x86_64"` indicating the user's operating system platform.


  **[⬆ Back to Top](#table-of-contents)**

91. ### What is the difference between `DOMContentLoaded` and `load` events?

Both `DOMContentLoaded` and `load` are browser events related to page loading, but they are triggered at different stages of the loading process.

| `DOMContentLoaded`                                                          | `load`                                                                               |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Fired when the HTML document has been completely loaded and parsed.         | Fired when the entire page and all dependent resources have finished loading.        |
| Does **not** wait for images, iframes, and most external resources to load. | Waits for images, stylesheets, iframes, fonts, scripts, and other resources to load. |
| Occurs earlier.                                                             | Occurs later.                                                                        |
| Commonly used to initialize DOM-related JavaScript.                         | Commonly used when you need all resources to be available.                           |

#### `DOMContentLoaded` Example

```javascript id="dom1a2b"
document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("DOM is ready");
  }
);
```

This event fires as soon as the browser has:

* Downloaded the HTML.
* Parsed the HTML.
* Built the DOM tree.

It does **not** wait for images and other resources.

#### `load` Example

```javascript id="dom3c4d"
window.addEventListener("load", () => {
  console.log(
    "Page and all resources loaded"
  );
});
```

This event fires only after:

* HTML is parsed.
* CSS files are loaded.
* Images are loaded.
* Fonts are loaded.
* Iframes and other resources are loaded.

#### Loading Timeline

```text id="domtimeline"
HTML Downloaded
        ↓
HTML Parsed
        ↓
DOMContentLoaded
        ↓
Images / CSS / Fonts Loaded
        ↓
load
```

#### Practical Example

```html id="dom5e6f"
<img src="large-image.jpg" />

<script>
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      console.log("DOM Ready");
    }
  );

  window.addEventListener(
    "load",
    () => {
      console.log("Everything Loaded");
    }
  );
</script>
```

**Output:**

```text id="domout1"
DOM Ready
Everything Loaded
```

The first message appears before the image finishes loading, while the second appears after the image is fully loaded.

#### When to Use Which?

##### Use `DOMContentLoaded`

```javascript id="dom7g8h"
document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);
```

* Setting up event listeners.
* Manipulating DOM elements.
* Initializing UI components.

##### Use `load`

```javascript id="dom9i0j"
window.addEventListener(
  "load",
  initializeImageGallery
);
```

* Working with image dimensions.
* Canvas rendering based on images.
* Tasks requiring all page resources.

#### Key Point

> `DOMContentLoaded` fires when the HTML document has been fully parsed and the DOM is ready, without waiting for images or other resources. The `load` event fires later, after the entire page and all dependent resources (images, stylesheets, iframes, fonts, etc.) have finished loading.

  **[⬆ Back to Top](#table-of-contents)**

92. ### What is the difference between Native, Host, and User Objects?

JavaScript objects can be broadly classified into **Native Objects**, **Host Objects**, and **User Objects** based on their origin.

| Type               | Description                                                                                          | Examples                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Native Objects** | Objects that are part of the JavaScript language itself and defined by the ECMAScript specification. | `Object`, `Array`, `String`, `Number`, `Boolean`, `Date`, `Math`, `RegExp`, `Function`, `Promise` |
| **Host Objects**   | Objects provided by the environment in which JavaScript runs (browser, Node.js, etc.).               | `window`, `document`, `navigator`, `XMLHttpRequest`, `fetch`, DOM elements                        |
| **User Objects**   | Objects created by developers in their own code.                                                     | User-defined objects, classes, and instances                                                      |

#### 1. Native Objects

Native objects are built into JavaScript and are available regardless of the execution environment.

```javascript
const name = new String("John");

console.log(name instanceof String); // true
```

Other examples:

```javascript
const arr = [1, 2, 3];
const date = new Date();
const regex = /abc/;
```

#### 2. Host Objects

Host objects are supplied by the runtime environment.

**Browser Examples:**

```javascript
window.alert("Hello");
document.getElementById("title");
```

```javascript
const xhr = new XMLHttpRequest();
```

**Node.js Examples:**

```javascript
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

```javascript
process.version;
```

These objects are not part of the ECMAScript specification; they are provided by the host environment.

#### 3. User Objects

User objects are created by developers to model application-specific data.

```javascript
const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
};
```

Or using a class:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User("John");
```

#### Visual Representation

```text
JavaScript Objects
│
├── Native Objects
│   ├── Object
│   ├── Array
│   ├── String
│   └── Promise
│
├── Host Objects
│   ├── window
│   ├── document
│   ├── XMLHttpRequest
│   └── fetch
│
└── User Objects
    ├── user
    ├── product
    └── Employee
```

#### Key Point

> **Native objects** are built into JavaScript and defined by the ECMAScript specification. **Host objects** are provided by the execution environment (such as browsers or Node.js). **User objects** are created by developers within their own applications to represent custom data and behavior.


  **[⬆ Back to Top](#table-of-contents)**

93. ### What are the tools or techniques used for debugging JavaScript code?

Debugging is the process of identifying and fixing errors in your code. JavaScript provides several tools and techniques to help developers debug applications effectively.

#### 1. Chrome DevTools

**Chrome DevTools** is one of the most powerful debugging tools available in modern browsers.

Features include:

* Setting breakpoints
* Stepping through code
* Inspecting variables and scope
* Viewing the call stack
* Monitoring network requests
* Profiling performance

**Example:**

1. Open DevTools (`F12` or `Ctrl + Shift + I`).
2. Go to the **Sources** tab.
3. Set a breakpoint by clicking on a line number.
4. Execute the code and inspect its behavior.

#### 2. `debugger` Statement

The `debugger` statement programmatically pauses JavaScript execution when developer tools are open.

```javascript id="debug1a2b"
function calculateSum(a, b) {
  debugger;

  return a + b;
}

calculateSum(10, 20);
```

When execution reaches the `debugger` statement, the browser pauses and allows you to inspect variables and the execution context.

#### 3. `console.log()` Statements

The simplest and most commonly used debugging technique is logging values to the console.

```javascript id="debug3c4d"
const user = {
  name: "John",
  age: 25,
};

console.log(user);
```

You can also log multiple values:

```javascript id="debug5e6f"
const x = 10;
const y = 20;

console.log("x =", x, "y =", y);
```

#### Other Useful Console Methods

##### `console.error()`

```javascript id="debug7g8h"
console.error("Something went wrong");
```

##### `console.warn()`

```javascript id="debug9i0j"
console.warn("Warning message");
```

##### `console.table()`

```javascript id="debug1k2l"
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

console.table(users);
```

##### `console.time()` and `console.timeEnd()`

```javascript id="debug3m4n"
console.time("loop");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("loop");
```

#### 4. Browser Breakpoints

You can set breakpoints directly in DevTools without modifying your code.

Types of breakpoints:

* Line breakpoints
* Conditional breakpoints
* Event listener breakpoints
* DOM change breakpoints
* XHR/Fetch breakpoints

#### 5. Source Maps

Source maps help debug original source code when working with transpiled or bundled JavaScript (e.g., TypeScript, Babel, Webpack).

#### Best Practice

* Use **Chrome DevTools** for in-depth debugging.
* Use **`debugger`** for temporary breakpoints during development.
* Use **`console.log()`** and related console methods for quick inspection.
* Remove unnecessary debugging statements before production deployment.

#### Key Point

> The most common JavaScript debugging tools and techniques are **Chrome DevTools**, the **`debugger` statement**, and **`console.log()`**. Chrome DevTools provides advanced debugging capabilities, `debugger` pauses code execution for inspection, and `console.log()` helps quickly examine values and program flow.


  **[⬆ Back to Top](#table-of-contents)**

94. ### What are the pros and cons of Promises over Callbacks?

Promises were introduced to improve the handling of asynchronous operations in JavaScript and address many limitations of callbacks.

#### Pros of Promises

1. **Avoid Callback Hell**

   * Promises eliminate deeply nested callbacks, making code more readable and maintainable.

   **Callback Hell:**

   ```javascript
   getUser(function (user) {
     getOrders(user.id, function (orders) {
       getOrderDetails(
         orders[0].id,
         function (details) {
           console.log(details);
         }
       );
     });
   });
   ```

   **Using Promises:**

   ```javascript
   getUser()
     .then((user) => getOrders(user.id))
     .then((orders) =>
       getOrderDetails(orders[0].id)
     )
     .then((details) => console.log(details));
   ```

2. **Easy Sequential Asynchronous Operations**

   * Promise chaining with `.then()` makes it easy to execute asynchronous tasks one after another.

   ```javascript
   fetchUser()
     .then((user) => fetchOrders(user.id))
     .then((orders) => console.log(orders));
   ```

3. **Easy Parallel Execution**

   * `Promise.all()` allows multiple asynchronous operations to run in parallel.

   ```javascript
   Promise.all([
     fetchUsers(),
     fetchPosts(),
     fetchComments(),
   ]).then((results) => {
     console.log(results);
   });
   ```

4. **Better Error Handling**

   * Errors can be handled in one place using `.catch()`.

   ```javascript
   fetchData()
     .then(processData)
     .catch((error) =>
       console.error(error)
     );
   ```

5. **Prevents Common Callback Issues**

   * Promises help avoid problems such as:

     * Calling a callback too early.
     * Calling a callback too late.
     * Calling a callback multiple times.
     * Swallowing exceptions.

6. **Foundation for `async/await`**

   * Modern JavaScript's `async/await` syntax is built on top of Promises.

   ```javascript
   async function loadData() {
     const user = await fetchUser();
     console.log(user);
   }
   ```

#### Cons of Promises

1. **Slightly More Complex Than Simple Callbacks**

   * For very simple asynchronous tasks, Promises may introduce additional syntax and concepts.

   ```javascript
   Promise.resolve("Hello")
     .then(console.log);
   ```

2. **Requires Polyfills in Older Environments**

   * Older browsers that do not support ES6 Promises require a polyfill.

3. **Can Lead to Long Promise Chains**

   * Excessive chaining may still become difficult to read, though usually much better than nested callbacks.

4. **No Built-In Cancellation**

   * Native Promises cannot be canceled once started (although modern APIs such as `AbortController` help address this limitation).

#### Callback vs Promise Comparison

| Feature                            | Callbacks                    | Promises                    |
| ---------------------------------- | ---------------------------- | --------------------------- |
| Readability                        | Can lead to callback hell    | More readable with chaining |
| Error Handling                     | Distributed across callbacks | Centralized with `.catch()` |
| Sequential Operations              | Nested callbacks             | `.then()` chaining          |
| Parallel Operations                | Manual coordination          | `Promise.all()`             |
| Multiple Callback Execution Issues | Possible                     | Prevented by design         |
| Foundation for `async/await`       | No                           | Yes                         |

#### Key Point

> Promises provide a cleaner and more reliable way to handle asynchronous operations than callbacks. They improve readability, support chaining and parallel execution, provide centralized error handling, and form the basis of `async/await`. Their main drawbacks are slightly increased complexity and the need for polyfills in older JavaScript environments.


  **[⬆ Back to Top](#table-of-contents)**

95. ### What is the difference between an Attribute and a Property?

**Attributes** are defined in the HTML markup, whereas **properties** are part of the DOM object created by the browser when the HTML is parsed.

#### Example

```html
<input type="text" value="Name:" />
```

In the above HTML:

* `type` and `value` are **attributes**.
* When the browser parses the HTML, it creates an `HTMLInputElement` object with corresponding **properties** such as `type` and `value`.

#### Key Differences

| Attribute                                        | Property                                                             |
| ------------------------------------------------ | -------------------------------------------------------------------- |
| Defined in HTML markup.                          | Defined on the DOM object.                                           |
| Retrieved using `getAttribute()`.                | Accessed directly via JavaScript object properties.                  |
| Represents the initial value from the HTML.      | Represents the current state of the element.                         |
| Always stored as strings.                        | Can be of any JavaScript type (`string`, `boolean`, `number`, etc.). |
| Changes in the DOM may not update the attribute. | Reflects the live state of the element.                              |

#### Example: Input Value

```html
<input id="name" type="text" value="John" />
```

```javascript
const input =
  document.getElementById("name");

console.log(
  input.getAttribute("value")
); // "John"

console.log(input.value); // "John"
```

After the user types `"Good Morning"` into the input field:

```javascript
console.log(
  input.getAttribute("value")
); // "John"

console.log(input.value); // "Good Morning"
```

> **Note:** The original question's example is incorrect. `getAttribute("value")` does **not** automatically change when the user edits the input. It continues to return the original HTML attribute value unless explicitly updated using `setAttribute()`.

#### Example: Updating the Attribute

```javascript
input.setAttribute(
  "value",
  "Good Evening"
);

console.log(
  input.getAttribute("value")
); // "Good Evening"
```

#### Boolean Attribute Example

```html
<input type="checkbox" checked />
```

```javascript
const checkbox =
  document.querySelector("input");

console.log(
  checkbox.getAttribute("checked")
); // ""

console.log(checkbox.checked); // true
```

After unchecking the checkbox:

```javascript
console.log(
  checkbox.getAttribute("checked")
); // ""

console.log(checkbox.checked); // false
```

Again, the attribute remains unchanged while the property reflects the current state.

#### Relationship Between Attributes and Properties

```text
HTML Markup
     ↓
 Attributes
     ↓
Browser parses HTML
     ↓
DOM Object
     ↓
 Properties
```

#### Key Point

> **Attributes** are the values defined in the HTML markup and represent the element's initial state, while **properties** are part of the DOM object and represent the element's current state. For form elements such as `<input>`, user interactions update the property (`input.value`) but do not automatically update the corresponding attribute (`getAttribute("value")`).


  **[⬆ Back to Top](#table-of-contents)**

96. ### What is the Same-Origin Policy?

The **Same-Origin Policy (SOP)** is a browser security mechanism that restricts how documents or scripts loaded from one origin can interact with resources from another origin.

Its primary purpose is to prevent malicious websites from accessing sensitive data belonging to other websites.

#### What is an Origin?

An **origin** is defined by the combination of:

1. **Protocol (Scheme)** – `http`, `https`
2. **Hostname (Domain)** – `example.com`
3. **Port Number** – `80`, `443`, `3000`, etc.

Two URLs have the same origin only if all three components match.

#### Examples

| URL 1                 | URL 2                      | Same Origin?              |
| --------------------- | -------------------------- | ------------------------- |
| `https://example.com` | `https://example.com`      | ✅ Yes                     |
| `https://example.com` | `http://example.com`       | ❌ No (different protocol) |
| `https://example.com` | `https://api.example.com`  | ❌ No (different hostname) |
| `https://example.com` | `https://example.com:3000` | ❌ No (different port)     |

#### Why is Same-Origin Policy Important?

Without SOP, a malicious website could:

* Read another site's cookies.
* Access a user's private data.
* Manipulate another site's DOM.
* Perform unauthorized actions on behalf of the user.

For example:

```text
bank.com
     ↑
Sensitive user data

evil.com
     ↓
Attempts to read bank.com data
```

The browser blocks this access.

#### Example

Suppose a user is logged in to:

```text
https://bank.com
```

If the user visits:

```text
https://evil.com
```

The JavaScript running on `evil.com` cannot:

```javascript
bankWindow.document.cookie;
bankWindow.document.body.innerHTML;
```

because of the Same-Origin Policy.

#### What Does SOP Restrict?

##### DOM Access

```javascript
iframe.contentWindow.document;
```

Blocked if the iframe is from a different origin.

##### AJAX / Fetch Requests

```javascript
fetch("https://api.otherdomain.com/data");
```

Blocked unless the server explicitly allows it through CORS.

##### Cookies and Local Storage

Scripts can only access cookies and storage belonging to their own origin.

#### Cross-Origin Resource Sharing (CORS)

Browsers allow controlled cross-origin requests using **CORS**.

Server:

```http
Access-Control-Allow-Origin: https://example.com
```

Client:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

If the server permits the origin, the request succeeds.

#### Important Note

The Same-Origin Policy does **not** completely prevent sending cross-origin requests. Browsers can still send requests to other domains, but they prevent JavaScript from reading the response unless the server allows it via CORS.

#### Key Point

> The Same-Origin Policy (SOP) is a browser security feature that restricts scripts from accessing data from a different origin. An origin is defined by the combination of protocol, hostname, and port. SOP protects users by preventing malicious websites from accessing sensitive information, manipulating another site's DOM, or reading responses from unauthorized cross-origin requests.


  **[⬆ Back to Top](#table-of-contents)**

97. ### What is the purpose of `void(0)`?

The **`void`** operator evaluates an expression and returns **`undefined`**, regardless of the expression's result.

```javascript
void expression;
```

or

```javascript
void(0);
```

Since `0` evaluates to `0`, and `void` always returns `undefined`, the result is:

```javascript
console.log(void(0)); // undefined
```

#### Why was `void(0)` commonly used?

Historically, `void(0)` was used in hyperlinks to prevent navigation when the link was clicked.

```html
<a href="javascript:void(0);">
  Click Me
</a>
```

Since `javascript:void(0)` evaluates to `undefined`, the browser does not navigate to a new page.

#### Example

```html
<a
  href="javascript:void(0);"
  onclick="alert('Well done!')"
>
  Click Me!
</a>
```

When the link is clicked:

1. The `onclick` handler executes.
2. `void(0)` returns `undefined`.
3. No navigation occurs.

#### Important Clarification

The statement:

> "`void(0)` is used to prevent the page from refreshing"

is not entirely accurate.

`void(0)` does **not directly prevent page refreshes**. Instead, it prevents the browser from navigating to a new URL when used inside a JavaScript URL such as:

```html
href="javascript:void(0)"
```

#### Modern Best Practice

Using `javascript:void(0)` in links is generally discouraged today.

Instead, use a button:

```html
<button onclick="alert('Well done!')">
  Click Me!
</button>
```

Or prevent the default action with JavaScript:

```html
<a href="#" id="myLink">Click Me</a>

<script>
  document
    .getElementById("myLink")
    .addEventListener("click", function (event) {
      event.preventDefault();
      alert("Well done!");
    });
</script>
```

#### Other Uses of `void`

```javascript
const result = void(10 + 20);

console.log(result); // undefined
```

No matter what expression is provided, `void` always returns `undefined`.

#### Key Point

> The `void` operator evaluates an expression and always returns `undefined`. `void(0)` was historically used in hyperlinks (`href="javascript:void(0)"`) to prevent navigation when a link was clicked. In modern web development, using buttons or `event.preventDefault()` is generally preferred over `javascript:void(0)`.


  **[⬆ Back to Top](#table-of-contents)**

98. ### Is JavaScript a Compiled or Interpreted Language?

JavaScript is often described as an **interpreted language**, but modern JavaScript engines make the answer more nuanced.

Historically, JavaScript was interpreted line by line by the browser. However, modern JavaScript engines such as:

* Google V8 (Chrome, Node.js)
* Mozilla SpiderMonkey (Firefox)
* Apple JavaScriptCore (Safari)

use a combination of **interpretation and Just-In-Time (JIT) compilation** to improve performance.

#### How Modern JavaScript Executes

1. **Parsing**

   * The JavaScript source code is parsed into an Abstract Syntax Tree (AST).

2. **Compilation to Bytecode**

   * The engine generates bytecode from the AST.

3. **Interpretation**

   * The bytecode is interpreted and executed.

4. **JIT Compilation**

   * Frequently executed ("hot") code is compiled into optimized machine code for faster execution.

#### Simplified Flow

```text
JavaScript Source Code
          ↓
        Parser
          ↓
         AST
          ↓
      Bytecode
          ↓
     Interpreter
          ↓
   JIT Compiler
          ↓
   Machine Code
```

#### Example

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

The browser does not directly execute this source code. Instead, it parses, compiles, and optimizes it internally before execution.

#### Interview Answer

If asked in an interview:

> JavaScript is traditionally considered an interpreted language, but modern JavaScript engines use Just-In-Time (JIT) compilation. The code is first parsed and converted into bytecode, then interpreted and optimized into machine code at runtime for better performance. Therefore, modern JavaScript is neither purely interpreted nor purely compiled—it uses a combination of both approaches.

#### Key Point

> JavaScript was originally an interpreted language, but modern JavaScript engines use **Just-In-Time (JIT) compilation**. They parse the source code, compile it into bytecode, interpret it, and then optimize frequently executed code into machine code. As a result, JavaScript today is best described as a language that uses both interpretation and compilation techniques.


  **[⬆ Back to Top](#table-of-contents)**

99. ### Is JavaScript a Case-Sensitive Language?

Yes, **JavaScript is a case-sensitive language**. This means that uppercase and lowercase letters are treated as different characters.

As a result:

* Keywords must be written with the correct capitalization.
* Variable names are case-sensitive.
* Function names are case-sensitive.
* Object properties and methods are case-sensitive.

#### Example: Variables

```javascript
let name = "John";
let Name = "Jane";

console.log(name); // John
console.log(Name); // Jane
```

Here, `name` and `Name` are treated as two different variables.

#### Example: Functions

```javascript
function greet() {
  console.log("Hello");
}

greet(); // Works

// Greet(); // ReferenceError: Greet is not defined
```

`greet()` and `Greet()` are different identifiers.

#### Example: Keywords

JavaScript keywords must use the correct case:

```javascript
let age = 25; // Correct

// Let age = 25; // SyntaxError
```

`let` is a valid keyword, but `Let` is not.

#### Example: Object Properties

```javascript
const user = {
  firstName: "John",
};

console.log(user.firstName); // John

// console.log(user.firstname); // undefined
```

`firstName` and `firstname` are different property names.

#### Why It Matters

Case sensitivity helps JavaScript distinguish between identifiers, but it can also lead to bugs if naming conventions are not followed consistently.

#### Best Practice

Use consistent naming conventions:

```javascript
const firstName = "John";

function getUser() {}

class UserProfile {}
```

Common conventions:

* Variables and functions: `camelCase`
* Classes: `PascalCase`
* Constants: `UPPER_SNAKE_CASE`

#### Key Point

> JavaScript is a case-sensitive language. Identifiers such as variables, functions, object properties, and keywords must be written with consistent capitalization because `name`, `Name`, and `NAME` are all considered different identifiers.


  **[⬆ Back to Top](#table-of-contents)**

100. ### Is there any relation between Java and JavaScript?

**No, Java and JavaScript are completely different programming languages.** Despite their similar names, they were designed for different purposes and have different architectures, runtimes, and use cases.

The name "JavaScript" was chosen largely for marketing reasons during its early development, but it is not a subset of Java and is not directly related to it.

#### Similarities

Both languages:

* Support object-oriented programming concepts.
* Use C-style syntax.
* Have similar control flow statements such as:

  * `if`
  * `else`
  * `for`
  * `while`
  * `switch`
  * `break`
  * `continue`

Example:

```java
if (age >= 18) {
    System.out.println("Adult");
}
```

```javascript
if (age >= 18) {
  console.log("Adult");
}
```

#### Key Differences

| Java                                                                                 | JavaScript                                                                                                                                   |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Compiled to bytecode and runs on the JVM.                                            | Interpreted/JIT-compiled and runs in browsers or JavaScript runtimes.                                                                        |
| Statically typed.                                                                    | Dynamically typed.                                                                                                                           |
| Class-based object-oriented language.                                                | Prototype-based object-oriented language.                                                                                                    |
| Requires compilation before execution.                                               | Executes directly in the browser or runtime.                                                                                                 |
| Commonly used for enterprise applications, Android development, and backend systems. | Commonly used for web development, frontend applications, and backend development with [Node.js](https://nodejs.org?utm_source=chatgpt.com). |

#### Example

**Java**

```java
String name = "John";
int age = 25;
```

**JavaScript**

```javascript
let name = "John";
let age = 25;
```

Java requires explicit types, whereas JavaScript determines types at runtime.

#### Interview Answer

> Java and JavaScript are two entirely different programming languages with different purposes, runtimes, and type systems. They share some syntactic similarities because both were influenced by C-style languages, but JavaScript is not related to Java beyond the similarity in name.

#### Key Point

> Java and JavaScript are separate programming languages with different designs and use cases. Although they share some syntax and both support object-oriented programming concepts, Java is a statically typed, class-based language that runs on the JVM, while JavaScript is a dynamically typed, prototype-based language primarily used for web development.


  **[⬆ Back to Top](#table-of-contents)**

101. ### What are Events?

**Events** are actions or occurrences that happen in the browser and can be detected and handled by JavaScript. They allow web pages to respond to user interactions and browser activities.

When an event occurs, JavaScript can execute a function known as an **event handler** to react to that event.

#### Common Examples of Events

1. A web page has finished loading (`load`)
2. A user clicks a button (`click`)
3. An input field value changes (`change`)
4. A key is pressed (`keydown`)
5. The mouse moves over an element (`mouseover`)
6. A form is submitted (`submit`)

#### Example: Click Event

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    function greeting() {
      alert("Hello! Good morning");
    }
  </script>
</head>
<body>
  <button type="button" onclick="greeting()">
    Click Me
  </button>
</body>
</html>
```

When the user clicks the button:

1. A `click` event is triggered.
2. The `greeting()` function is executed.
3. An alert box is displayed.

#### Modern Approach Using `addEventListener()`

Instead of inline event handlers, modern JavaScript prefers `addEventListener()`:

```html
<button id="btn">Click Me</button>

<script>
  const button = document.getElementById("btn");

  button.addEventListener("click", function () {
    alert("Hello! Good morning");
  });
</script>
```

#### Event Flow

When an event occurs, it goes through three phases:

1. **Capturing Phase** (Top → Bottom)
2. **Target Phase**
3. **Bubbling Phase** (Bottom → Top)

```text
Window
  ↓
Document
  ↓
Target Element
  ↑
Document
  ↑
Window
```

#### Common Event Types

| Event       | Description                         |
| ----------- | ----------------------------------- |
| `click`     | User clicks an element              |
| `dblclick`  | User double-clicks an element       |
| `keydown`   | A keyboard key is pressed           |
| `keyup`     | A keyboard key is released          |
| `change`    | Value of an input element changes   |
| `submit`    | A form is submitted                 |
| `load`      | A page or resource finishes loading |
| `mouseover` | Mouse enters an element             |
| `mouseout`  | Mouse leaves an element             |

#### Key Point

> Events are actions or occurrences that happen in the browser, such as clicks, key presses, form submissions, or page loads. JavaScript can listen for these events and execute code in response, making web pages interactive and dynamic.


    **[⬆ Back to Top](#table-of-contents)**

102. ### Who created javascript

      JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name `Mocha`, but later the language was officially called `LiveScript` when it first shipped in beta releases of Netscape.

    **[⬆ Back to Top](#table-of-contents)**

103. ### What is the use of preventDefault method

      The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

      ```javascript
      document
        .getElementById("link")
        .addEventListener("click", function (event) {
          event.preventDefault();
        });
      ```

      **Note:** Remember that not all events are cancelable.

    **[⬆ Back to Top](#table-of-contents)**

104. ### What is the use of stopPropagation method

      The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

      ```javascript
      <p>Click DIV1 Element</p>
      <div onclick="secondFunc()">DIV 2
        <div onclick="firstFunc(event)">DIV 1</div>
      </div>

      <script>
      function firstFunc(event) {
        alert("DIV 1");
        event.stopPropagation();
      }

      function secondFunc() {
        alert("DIV 2");
      }
      </script>
      ```

    **[⬆ Back to Top](#table-of-contents)**

105. ### What are the steps involved in return false usage

      The return false statement in event handlers performs the below steps,

      1. First it stops the browser's default action or behaviour.
      2. It prevents the event from propagating the DOM
      3. Stops callback execution and returns immediately when called.

    **[⬆ Back to Top](#table-of-contents)**

106. ### What is BOM

      The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

      ![Screenshot](images/bom.png)

    **[⬆ Back to Top](#table-of-contents)**

107. ### What is the use of setTimeout

      The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,

      ```javascript
      setTimeout(function () {
        console.log("Good morning");
      }, 2000);
      ```

    **[⬆ Back to Top](#table-of-contents)**

108. ### What is the use of setInterval

      The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,

      ```javascript
      setInterval(function () {
        console.log("Good morning");
      }, 2000);
      ```

    **[⬆ Back to Top](#table-of-contents)**

109. ### Why is JavaScript treated as Single threaded

      JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

    **[⬆ Back to Top](#table-of-contents)**

110. ### What is an event delegation

      Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

      For example, if you wanted to detect field changes inside a specific form, you can use event delegation technique,

      ```javascript
      var form = document.querySelector("#registration-form");

      // Listen for changes to fields inside the form
      form.addEventListener(
        "input",
        function (event) {
          // Log the field that was changed
          console.log(event.target);
        },
        false
      );
      ```

    **[⬆ Back to Top](#table-of-contents)**

111. ### What is ECMAScript

      ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.

    **[⬆ Back to Top](#table-of-contents)**

112. ### What is JSON

      JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

    **[⬆ Back to Top](#table-of-contents)**

113. ### What are the syntax rules of JSON

      Below are the list of syntax rules of JSON

      1. The data is in name/value pairs
      2. The data is separated by commas
      3. Curly braces hold objects
      4. Square brackets hold arrays

    **[⬆ Back to Top](#table-of-contents)**

114. ### What is the purpose JSON stringify

      When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

      ```javascript
      var userJSON = { name: "John", age: 31 };
      var userString = JSON.stringify(userJSON);
      console.log(userString); //"{"name":"John","age":31}"
      ```

    **[⬆ Back to Top](#table-of-contents)**

115. ### How do you parse JSON string

      When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

      ```javascript
      var userString = '{"name":"John","age":31}';
      var userJSON = JSON.parse(userString);
      console.log(userJSON); // {name: "John", age: 31}
      ```

    **[⬆ Back to Top](#table-of-contents)**

116. ### Why do you need JSON

      When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

    **[⬆ Back to Top](#table-of-contents)**

117. ### What are PWAs

      Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

    **[⬆ Back to Top](#table-of-contents)**

118. ### What is the purpose of clearTimeout method

      The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.

      For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by the clearTimeout() method.

      ```javascript
      <script>
           var msg;
           function greeting() {
              alert('Good morning');
           }
           function start() {
             msg =setTimeout(greeting, 3000);

           }

           function stop() {
               clearTimeout(msg);
           }
      </script>
      ```

    **[⬆ Back to Top](#table-of-contents)**

119. ### What is the purpose of clearInterval method

      The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.

      For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by the clearInterval() method.

      ```javascript
      <script>
           var msg;
           function greeting() {
              alert('Good morning');
           }
           function start() {
             msg = setInterval(greeting, 3000);

           }

           function stop() {
               clearInterval(msg);
           }
      </script>
      ```

    **[⬆ Back to Top](#table-of-contents)**

120. ### How do you redirect new page in javascript

      In vanilla javascript, you can redirect to a new page using the `location` property of window object. The syntax would be as follows,

      ```javascript
      function redirect() {
        window.location.href = "newPage.html";
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

121. ### How do you check whether a string contains a substring

      There are 3 possible ways to check whether a string contains a substring or not,

      1. **Using includes:** ES6 provided `String.prototype.includes` method to test a string contains a substring

      ```javascript
      var mainString = "hello",
        subString = "hell";
      mainString.includes(subString);
      ```

      2. **Using indexOf:** In an ES5 or older environment, you can use `String.prototype.indexOf` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.

      ```javascript
      var mainString = "hello",
        subString = "hell";
      mainString.indexOf(subString) !== -1;
      ```

      3. **Using RegEx:** The advanced solution is using Regular expression's test method(`RegExp.test`), which allows for testing for against regular expressions

      ```javascript
      var mainString = "hello",
        regex = /hell/;
      regex.test(mainString);
      ```

    **[⬆ Back to Top](#table-of-contents)**

122. ### How do you validate an email in javascript

      You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.

      ```javascript
      function validateEmail(email) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

      The above regular expression accepts unicode characters.

123. ### How do you get the current url with javascript

      You can use `window.location.href` expression to get the current url path and you can use the same expression for updating the URL too. You can also use `document.URL` for read-only purposes but this solution has issues in FF.

      ```javascript
      console.log("location.href", window.location.href); // Returns full URL
      ```

    **[⬆ Back to Top](#table-of-contents)**

124. ### What are the various url properties of location object

      The below `Location` object properties can be used to access URL components of the page,

      1. href - The entire URL
      2. protocol - The protocol of the URL
      3. host - The hostname and port of the URL
      4. hostname - The hostname of the URL
      5. port - The port number in the URL
      6. pathname - The path name of the URL
      7. search - The query portion of the URL
      8. hash - The anchor portion of the URL

    **[⬆ Back to Top](#table-of-contents)**

125. ### How do you get query string values in javascript

      You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,

      ```javascript
      const urlParams = new URLSearchParams(window.location.search);
      const clientCode = urlParams.get("clientCode");
      ```

    **[⬆ Back to Top](#table-of-contents)**

126. ### How do you check if a key exists in an object

      You can check whether a key exists in an object or not using three approaches,

      1. **Using in operator:** You can use the in operator whether a key exists in an object or not

         ```javascript
         "key" in obj;
         ```

         and If you want to check if a key doesn't exist, remember to use parenthesis,

         ```javascript
         !("key" in obj);
         ```

      2. **Using hasOwnProperty method:** You can use `hasOwnProperty` to particularly test for properties of the object instance (and not inherited properties)

         ```javascript
         obj.hasOwnProperty("key"); // true
         ```

      3. **Using undefined comparison:** If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.

         ```javascript
         const user = {
           name: "John",
         };

         console.log(user.name !== undefined); // true
         console.log(user.nickName !== undefined); // false
         ```

    **[⬆ Back to Top](#table-of-contents)**

127. ### How do you loop through or enumerate javascript object

      You can use the `for-in` loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using `hasOwnProperty` method.

      ```javascript
      var object = {
        k1: "value1",
        k2: "value2",
        k3: "value3",
      };

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          console.log(key + " -> " + object[key]); // k1 -> value1 ...
        }
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

128. ### How do you test for an empty object

      There are different solutions based on ECMAScript versions

      1. **Using Object entries(ECMA 7+):** You can use object entries length along with constructor type.

      ```javascript
      Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
      ```

      2. **Using Object keys(ECMA 5+):** You can use object keys length along with constructor type.

      ```javascript
      Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
      ```

      3. **Using for-in with hasOwnProperty(Pre-ECMA 5):** You can use a for-in loop along with hasOwnProperty.

      ```javascript
      function isEmpty(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            return false;
          }
        }

        return JSON.stringify(obj) === JSON.stringify({});
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

129. ### What is an arguments object

      The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

      ```javascript
      function sum() {
        var total = 0;
        for (var i = 0, len = arguments.length; i < len; ++i) {
          total += arguments[i];
        }
        return total;
      }

      sum(1, 2, 3); // returns 6
      ```

      **Note:** You can't apply array methods on arguments object. But you can convert into a regular array as below.

      ```javascript
      var argsArray = Array.prototype.slice.call(arguments);
      ```

    **[⬆ Back to Top](#table-of-contents)**

130. ### How do you make first letter of the string in an uppercase

      You can create a function which uses a chain of string methods such as charAt, toUpperCase and slice methods to generate a string with the first letter in uppercase.

      ```javascript
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

131. ### What are the pros and cons of for loops

      The for-loop is a commonly used iteration syntax in javascript. It has both pros and cons

      #### Pros

      1. Works on every environment
      2. You can use break and continue flow control statements

      #### Cons

      3. Too verbose
      4. Imperative
      5. You might face off-by-one errors.

    **[⬆ Back to Top](#table-of-contents)**

132. ### How do you display the current date in javascript

      You can use `new Date()` to generate a new Date object containing the current date and time. For example, let's display the current date in mm/dd/yyyy

      ```javascript
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      document.write(today);
      ```

    **[⬆ Back to Top](#table-of-contents)**

133. ### How do you compare two date objects

      You need to use date.getTime() method in order to compare unix timestamp values

      ```javascript
      var d1 = new Date();
      var d2 = new Date(d1);
      console.log(d1.getTime() === d2.getTime()); //True
      console.log(d1 === d2); // False
      ```

    **[⬆ Back to Top](#table-of-contents)**

134. ### How do you check if a string starts with another string

      You can use ECMAScript 6's `String.prototype.startsWith()` method to check if a string starts with another string or not. But it is not yet supported in all browsers. Let's see an example to see this usage,

      ```javascript
      "Good morning".startsWith("Good"); // true
      "Good morning".startsWith("morning"); // false
      ```

    **[⬆ Back to Top](#table-of-contents)**

135. ### How do you trim a string in javascript

      JavaScript provided a trim method on string types to trim any whitespaces present at the beginning or ending of the string.

      ```javascript
      "  Hello World   ".trim(); //Hello World
      ```

      If your browser(<IE9) doesn't support this method then you can use below polyfill.

      ```javascript
      if (!String.prototype.trim) {
        (function () {
          // Make sure we trim BOM and NBSP
          var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          String.prototype.trim = function () {
            return this.replace(rtrim, "");
          };
        })();
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

136. ### How do you add a key value pair in javascript

      There are two possible solutions to add new properties to an object.

      Let's take a simple object to explain these solutions.

      ```javascript
      var object = {
        key1: value1,
        key2: value2,
      };
      ```

      1. **Using dot notation:** This solution is useful when you know the name of the property

      ```javascript
      object.key3 = "value3";
      ```

      2. **Using square bracket notation:** This solution is useful when the name of the property is dynamically determined or the key's name is non-JS like "user-name"

      ```javascript
      obj["key3"] = "value3";
      ```

    **[⬆ Back to Top](#table-of-contents)**

137. ### Is the !-- notation represents a special operator

      No,that's not a special operator. But it is a combination of 2 standard operators one after the other,

      1. A logical not (!)
      2. A prefix decrement (--)

      At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.

    **[⬆ Back to Top](#table-of-contents)**

138. ### How do you assign default values to variables

      You can use the logical or operator `||` in an assignment expression to provide a default value. The syntax looks like as below,

      ```javascript
      var a = b || c;
      ```

      As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.

    **[⬆ Back to Top](#table-of-contents)**

139. ### How do you define multiline strings

      You can define multiline string literals using the '\n' character followed by line terminator('\').

      ```javascript
      var str = "This is a \n very lengthy \n sentence!";
      console.log(str);
      ```

      But if you have a space after the '\n' character, there will be indentation inconsistencies.

    **[⬆ Back to Top](#table-of-contents)**

140. ### What is an app shell model

      An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.

    **[⬆ Back to Top](#table-of-contents)**

141. ### Can we define properties for functions

      Yes, we can define properties for functions because functions are also objects.

      ```javascript
      fn = function (x) {
        //Function code goes here
      };

      fn.name = "John";

      fn.profile = function (y) {
        //Profile code goes here
      };
      ```

    **[⬆ Back to Top](#table-of-contents)**

142. ### What is the way to find the number of parameters expected by a function

      You can use `function.length` syntax to find the number of parameters expected by a function. Let's take an example of `sum` function to calculate the sum of numbers,

      ```javascript
      function sum(num1, num2, num3, num4) {
        return num1 + num2 + num3 + num4;
      }
      sum.length; // 4 is the number of parameters expected.
      ```

    **[⬆ Back to Top](#table-of-contents)**

143. ### What is a polyfill

      A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

      There are two main polyfill libraries available,

      1. **Core.js**: It is a modular javascript library used for cutting-edge ECMAScript features.
      2. **Polyfill.io:** It provides polyfills that are required for browser needs.

    **[⬆ Back to Top](#table-of-contents)**

144. ### What are break and continue statements

      The break statement is used to "jump out" of a loop. i.e, It breaks the loop and continues executing the code after the loop.

      ```javascript
      for (i = 0; i < 10; i++) {
        if (i === 5) {
          break;
        }
        text += "Number: " + i + "<br>";
      }
      ```

      The continue statement is used to "jump over" one iteration in the loop. i.e, It breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

      ```javascript
      for (i = 0; i < 10; i++) {
        if (i === 5) {
          continue;
        }
        text += "Number: " + i + "<br>";
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

145. ### What are js labels

      The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,

      ```javascript
      var i, j;

      loop1: for (i = 0; i < 3; i++) {
        loop2: for (j = 0; j < 3; j++) {
          if (i === j) {
            continue loop1;
          }
          console.log("i = " + i + ", j = " + j);
        }
      }

      // Output is:
      //   "i = 1, j = 0"
      //   "i = 2, j = 0"
      //   "i = 2, j = 1"
      ```

    **[⬆ Back to Top](#table-of-contents)**

146. ### What are the benefits of keeping declarations at the top

      It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,

      1. Gives cleaner code
      2. It provides a single place to look for local variables
      3. Easy to avoid unwanted global variables
      4. It reduces the possibility of unwanted re-declarations

    **[⬆ Back to Top](#table-of-contents)**

147. ### What are the benefits of initializing variables

      It is recommended to initialize variables because of the below benefits,

      1. It gives cleaner code
      2. It provides a single place to initialize variables
      3. Avoid undefined values in the code

    **[⬆ Back to Top](#table-of-contents)**

148. ### What are the recommendations to create new object

      It is recommended to avoid creating new objects using `new Object()`. Instead you can initialize values based on it's type to create the objects.

      1. Assign {} instead of new Object()
      2. Assign "" instead of new String()
      3. Assign 0 instead of new Number()
      4. Assign false instead of new Boolean()
      5. Assign [] instead of new Array()
      6. Assign /()/ instead of new RegExp()
      7. Assign function (){} instead of new Function()

      You can define them as an example,

      ```javascript
      var v1 = {};
      var v2 = "";
      var v3 = 0;
      var v4 = false;
      var v5 = [];
      var v6 = /()/;
      var v7 = function () {};
      ```

    **[⬆ Back to Top](#table-of-contents)**

149. ### How do you define JSON arrays

      JSON arrays are written inside square brackets and arrays contain javascript objects. For example, the JSON array of users would be as below,

      ```javascript
      "users":[
        {"firstName":"John", "lastName":"Abrahm"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Shane", "lastName":"Warn"}
      ]
      ```

    **[⬆ Back to Top](#table-of-contents)**

150. ### How do you generate random integers

      You can use `Math.random()` with `Math.floor()` to return random integers. For example, if you want generate random integers between 1 to 10, the multiplication factor should be 10,

      ```javascript
      Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
      Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
      ```

      **Note:** `Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive)

    **[⬆ Back to Top](#table-of-contents)**

151. ### Can you write a random integers function to print integers within a range

      Yes, you can create a proper random function to return a random number between min and max (both included)

      ```javascript
      function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      randomInteger(1, 100); // returns a random integer from 1 to 100
      randomInteger(1, 1000); // returns a random integer from 1 to 1000
      ```

    **[⬆ Back to Top](#table-of-contents)**

152. ### What is tree shaking

      Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler `rollup`, these days practically all bundlers use this technique.

    **[⬆ Back to Top](#table-of-contents)**

153. ### What is the need of tree shaking

      Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.

    **[⬆ Back to Top](#table-of-contents)**

154. ### Is it recommended to use eval

      No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.

    **[⬆ Back to Top](#table-of-contents)**

155. ### What is a Regular Expression

      A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,

      ```javascript
      /pattern/modifiers;
      ```

      For example, the regular expression or search pattern with case-insensitive username would be,

      ```javascript
      /John/i;
      ```

    **[⬆ Back to Top](#table-of-contents)**

156. ### What are the string methods that accept Regular expression

      There are six string methods: `search()`, `replace()`, `replaceAll()`, `match()`, `matchAll()`, and `split()`.

      The `search()` method uses an expression to search for a match, and returns the position of the match.

      ```javascript
      var msg = "Hello John";
      var n = msg.search(/John/i); // 6
      ```

      The `replace()` and `replaceAll()` methods are used to return a modified string where the pattern is replaced.

      ```javascript
      var msg = "ball bat";
      var n1 = msg.replace(/b/i, "c"); // call bat
      var n2 = msg.replaceAll(/b/i, "c"); // call cat
      ```

      The `match()` and `matchAll()` methods are used to return the matches when matching a string against a regular expression.

      ```javascript
      var msg = "Hello John";
      var n1 = msg.match(/[A-Z]/g); // ["H", "J"]
      var n2 = msg.matchAll(/[A-Z]/g); // this returns an iterator
      ```

      The `split()` method is used to split a string into an array of substrings, and returns the new array.

      ```javascript
      var msg = "Hello John";
      var n = msg.split(/\s/); // ["Hello", "John"]
      ```

    **[⬆ Back to Top](#table-of-contents)**

157. ### What are modifiers in regular expression

      Modifiers can be used to perform case-insensitive and global searches. Let's list some of the modifiers,

      | Modifier | Description                                             |
      | -------- | ------------------------------------------------------- |
      | i        | Perform case-insensitive matching                       |
      | g        | Perform a global match rather than stops at first match |
      | m        | Perform multiline matching                              |

      Let's take an example of global modifier,

      ```javascript
      var text = "Learn JS one by one";
      var pattern = /one/g;
      var result = text.match(pattern); // one,one
      ```

    **[⬆ Back to Top](#table-of-contents)**

158. ### What are regular expression patterns

      Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,

      1. **Brackets:** These are used to find a range of characters.
         For example, below are some use cases,
         1. [abc]: Used to find any of the characters between the brackets(a,b,c)
         2. [0-9]: Used to find any of the digits between the brackets
         3. (a|b): Used to find any of the alternatives separated with |
      2. **Metacharacters:** These are characters with a special meaning.
         For example, below are some use cases,
         1. \\d: Used to find a digit
         2. \\s: Used to find a whitespace character
         3. \\b: Used to find a match at the beginning or ending of a word
      3. **Quantifiers:** These are useful to define quantities.
         For example, below are some use cases,
         1. n+: Used to find matches for any string that contains at least one n
         2. n\*: Used to find matches for any string that contains zero or more occurrences of n
         3. n?: Used to find matches for any string that contains zero or one occurrences of n

    **[⬆ Back to Top](#table-of-contents)**

159. ### What is a RegExp object

      RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,

      ```javascript
      var regexp = new RegExp("\\w+");
      console.log(regexp);
      // expected output: /\w+/
      ```

    **[⬆ Back to Top](#table-of-contents)**

160. ### How do you search a string for a pattern

      You can use the `test()` method of regular expression in order to search a string for a pattern, and return true or false depending on the result.

      ```javascript
      var pattern = /you/;
      console.log(pattern.test("How are you?")); //true
      ```

    **[⬆ Back to Top](#table-of-contents)**

161. ### What is the purpose of exec method

      The purpose of exec method is similar to test method but it executes a search for a match in a specified string and returns a result array, or null instead of returning true/false.

      ```javascript
      var pattern = /you/;
      console.log(pattern.exec("How are you?")); //["you", index: 8, input: "How are you?", groups: undefined]
      ```

    **[⬆ Back to Top](#table-of-contents)**

162. ### How do you change the style of a HTML element

      You can change inline style or classname of a HTML element using javascript DOM-manipulation

      1. **Using style property:** You can modify inline style using style property

      ```javascript
      document.getElementById("title").style.fontSize = "30px";
      ```

      2. **Using ClassName property:** It is easy to modify element class using className property

      ```javascript
      document.getElementById("title").className = "custom-title";
      ```

    **[⬆ Back to Top](#table-of-contents)**

163. ### What would be the result of 1+2+'3'

      The output is going to be `33`. Since `1` and `2` are numeric values, the result of the first two digits is going to be a numeric value `3`. The next digit is a string type value because of that the addition of numeric value `3` and string type value `3` is just going to be a concatenation value `33`. Other operations like `3 * '3'` do yield correct results because the string is coerced into a number.

    **[⬆ Back to Top](#table-of-contents)**

164. ### What is a debugger statement

      The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
      For example, in the below function a debugger statement has been inserted. So
      execution is paused at the debugger statement just like a breakpoint in the script source.

      ```javascript
      function getProfile() {
        // code goes here
        debugger;
        // code goes here
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

165. ### What is the purpose of breakpoints in debugging

      You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

    **[⬆ Back to Top](#table-of-contents)**

166. ### Can I use reserved words as identifiers

      No, you cannot use the reserved words as variables, labels, object or function names. Let's see one simple example,

      ```javascript
      var else = "hello"; // Uncaught SyntaxError: Unexpected token else
      ```

    **[⬆ Back to Top](#table-of-contents)**

167. ### How do you detect a mobile browser

      You can use regex which returns a true or false value depending on whether or not the user is browsing with a mobile.

      ```javascript
      window.mobilecheck = function () {
        var mobileCheck = false;
        (function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            mobileCheck = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return mobileCheck;
      };
      ```

    **[⬆ Back to Top](#table-of-contents)**

168. ### How do you detect a mobile browser without regexp

      You can detect mobile browsers by simply running through a list of devices and checking if the useragent matches anything. This is an alternative solution for RegExp usage,

      ```javascript
      function detectmob() {
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          return true;
        } else {
          return false;
        }
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

169. ### How do you get the image width and height using JS

      You can programmatically get the image and check the dimensions(width and height) using JavaScript.

      ```javascript
      var img = new Image();
      img.onload = function () {
        console.log(this.width + "x" + this.height);
      };
      img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";
      ```

    **[⬆ Back to Top](#table-of-contents)**

170. ### How do you make synchronous HTTP request

      Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript.

      ```javascript
      function httpGet(theUrl) {
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", theUrl, false); // false for synchronous request
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

171. ### How do you make asynchronous HTTP request

      Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP requests from JavaScript by passing the 3rd parameter as true.

      ```javascript
      function httpGetAsync(theUrl, callback) {
        var xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.onreadystatechange = function () {
          if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
            callback(xmlHttpReq.responseText);
        };
        xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
        xmlHttpReq.send(null);
      }
      ```

      Today this is considered deprecated, because an async `fetch` call (in browsers later than 2016) is simpler and more robust.

    **[⬆ Back to Top](#table-of-contents)**

172. ### How do you convert date to another timezone in javascript

      You can use the toLocaleString() method to convert dates in one timezone to another. For example, let's convert current date to British English timezone as below,

      ```javascript
      console.log(new Date().toLocaleString("en-GB", { timeZone: "UTC" })); //29/06/2019, 09:56:00
      ```

    **[⬆ Back to Top](#table-of-contents)**

173. ### What are the properties used to get size of window

      You can use innerWidth, innerHeight, clientWidth, clientHeight properties of windows, document element and document body objects to find the size of a window. Let's use a combination of these properties to calculate the size of a window or document,

      ```javascript
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      var height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      ```

    **[⬆ Back to Top](#table-of-contents)**

174. ### What is a conditional operator in javascript

      The conditional (ternary) operator is the only JavaScript operator that takes three operands which acts as a shortcut for `if` statements.

      ```javascript
      var isAuthenticated = false;
      console.log(
        isAuthenticated ? "Hello, welcome" : "Sorry, you are not authenticated"
      ); // Sorry, you are not authenticated
      ```

    **[⬆ Back to Top](#table-of-contents)**

175. ### Can you apply chaining on conditional operator

      Yes, you can apply chaining on conditional operators similar to **`if … else if … else if … else`** chain. The syntax is going to be as below,

      ```javascript
      function traceValue(someParam) {
        return condition1
          ? value1
          : condition2
          ? value2
          : condition3
          ? value3
          : value4;
      }

      // The above conditional operator is equivalent to:

      function traceValue(someParam) {
        if (condition1) {
          return value1;
        } else if (condition2) {
          return value2;
        } else if (condition3) {
          return value3;
        } else {
          return value4;
        }
      }
      ```

     **[⬆ Back to Top](#table-of-contents)**

176. ### What are the ways to execute javascript after a page load

      You can execute javascript after page load in many different ways,

      1. **window.onload:**

      ```javascript
      window.onload = function ...
      ```

      2. **document.onload:**

      ```javascript
      document.onload = function ...
      ```

      3. **body onload:**

      ```javascript
      <body onload="script();">
      ```

    **[⬆ Back to Top](#table-of-contents)**

177. ### What is the difference between proto and prototype

      The `__proto__` object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas `prototype` is the object that is used to build `__proto__` when you create an object with the `new` operator (a special variant of a function call).

      ```javascript
      new Employee().__proto__ === Employee.prototype;
      new Employee().prototype === undefined;
      ```

      There are few more differences,

      | feature    | Prototype                                                    | proto                                                      |
      | ---------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
      | Access     | All function constructors have prototype properties.         | All objects have \_\_proto\_\_ property                    |
      | Purpose    | Used to reduce memory wastage with a single copy of function | Used in lookup chain to resolve methods, constructors etc. |
      | ECMAScript | Introduced in ES6                                            | Introduced in ES5                                          |
      | Usage      | Frequently used                                              | Rarely used                                                |

    **[⬆ Back to Top](#table-of-contents)**

178. ### Can you give an example of when you really need a semicolon

      It is recommended to use semicolons after every statement in JavaScript. For example, in the below case (that is an IIFE = Immediately Invoked Function Expression) it throws an error ".. is not a function" at runtime due to missing semicolon.

      ```javascript
      // define a function
      var fn = (function () {
        //...
      })(
        // semicolon missing at this line

        // then execute some code inside a closure
        function () {
          //...
        }
      )();
      ```

      and it will be interpreted as

      ```javascript
      var fn = (function () {
        //...
      })(function () {
        //...
      })();
      ```

      In this case, we are passing the second function as an argument to the first function and then trying to call the result of the first function call as a function. Hence, the second function will fail with a "... is not a function" error at runtime.

    **[⬆ Back to Top](#table-of-contents)**

179. ### What is the freeze method

      The **`freeze()`** method is used to freeze an object. Freezing an object does not allow adding new properties to an object, prevents removing, and prevents changing the enumerability, configurability, or writability of existing properties. i.e. It returns the passed object and does not create a frozen copy.

      ```javascript
      const obj = {
        prop: 100,
      };

      Object.freeze(obj);
      obj.prop = 200; // Throws an error in strict mode

      console.log(obj.prop); //100
      ```

      Remember freezing is only applied to the top-level properties in objects but not for nested objects.
      For example, let's try to freeze user object which has employment details as nested object and observe that details have been changed.

      ```javascript
      const user = {
        name: "John",
        employment: {
          department: "IT",
        },
      };

      Object.freeze(user);
      user.employment.department = "HR";
      ```

      **Note:** It causes a TypeError if the argument passed is not an object.

    **[⬆ Back to Top](#table-of-contents)**

180. ### What is the purpose of the freeze method

      Below are the main benefits of using freeze method,

      1. It is used for freezing objects and arrays.
      2. It is used to make an object immutable.

    **[⬆ Back to Top](#table-of-contents)**

181. ### Why do I need to use the freeze method

      In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the `final` keyword which is used in various languages.

    **[⬆ Back to Top](#table-of-contents)**

182. ### How do you detect a browser language preference

      You can use the navigator object to detect a browser language preference as below,

      ```javascript
      var language =
        (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
        navigator.language || // All browsers
        navigator.userLanguage; // IE <= 10

      console.log(language);
      ```

    **[⬆ Back to Top](#table-of-contents)**

183. ### How to convert a string to title case with javascript

      Title case means that the first letter of each word is capitalized. You can convert a string to title case using the below function,

      ```javascript
      function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        });
      }
      toTitleCase("good morning john"); // Good Morning John
      ```

    **[⬆ Back to Top](#table-of-contents)**

184. ### How do you detect if javascript is disabled on the page

      You can use the `<noscript>` tag to detect javascript disabled or not. The code block inside `<noscript>` gets executed when JavaScript is disabled, and is typically used to display alternative content when the page generated in JavaScript.

      ```javascript
      <script type="javascript">
          // JS related code goes here
      </script>
      <noscript>
          <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
      </noscript>
      ```

    **[⬆ Back to Top](#table-of-contents)**

185. ### What are various operators supported by javascript

      An operator is capable of manipulating(mathematical and logical computations) a certain value or operand. There are various operators supported by JavaScript as below,

      1. **Arithmetic Operators:** Includes + (Addition), – (Subtraction), \* (Multiplication), / (Division), % (Modulus), ++ (Increment) and – – (Decrement)
      2. **Comparison Operators:** Includes == (Equal), != (Not Equal), === (Equal with type), > (Greater than), >= (Greater than or Equal to), < (Less than), <= (Less than or Equal to)
      3. **Logical Operators:** Includes && (Logical AND), || (Logical OR), ! (Logical NOT)
      4. **Assignment Operators:** Includes = (Assignment Operator), += (Add and Assignment Operator), –= (Subtract and Assignment Operator), \*= (Multiply and Assignment), /= (Divide and Assignment), %= (Modules and Assignment)
      5. **Ternary Operators:** It includes conditional(: ?) Operator
      6. **typeof Operator:** It uses to find type of variable. The syntax looks like `typeof variable`

    **[⬆ Back to Top](#table-of-contents)**

186. ### What is a rest parameter

      Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,

      ```javascript
      function f(a, b, ...theArgs) {
        // ...
      }
      ```

      For example, let's take a sum example to calculate on dynamic number of parameters,

      ```javascript
      function sum(...args) {
        let total = 0;
        for (const i of args) {
          total += i;
        }
        return total;
      }

      console.log(sum(1, 2)); //3
      console.log(sum(1, 2, 3)); //6
      console.log(sum(1, 2, 3, 4)); //10
      console.log(sum(1, 2, 3, 4, 5)); //15
      ```

      **Note:** Rest parameter is added in ES2015 or ES6

    **[⬆ Back to Top](#table-of-contents)**

187. ### What happens if you do not use rest parameter as a last argument

      The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.

      ```javascript
      function someFunc(a,…b,c){
      //You code goes here
      return;
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

188. ### What are the bitwise operators available in javascript

      Below are the list of bitwise logical operators used in JavaScript

      1. Bitwise AND ( & )
      2. Bitwise OR ( | )
      3. Bitwise XOR ( ^ )
      4. Bitwise NOT ( ~ )
      5. Left Shift ( << )
      6. Sign Propagating Right Shift ( >> )
      7. Zero fill Right Shift ( >>> )

    **[⬆ Back to Top](#table-of-contents)**

189. ### What is a spread operator

      Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,

      ```javascript
      function calculateSum(x, y, z) {
        return x + y + z;
      }

      const numbers = [1, 2, 3];

      console.log(calculateSum(...numbers)); // 6
      ```

    **[⬆ Back to Top](#table-of-contents)**

190. ### How do you determine whether object is frozen or not

      `Object.isFrozen()` method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,

      1. If it is not extensible.
      2. If all of its properties are non-configurable.
      3. If all its data properties are non-writable.
         The usage is going to be as follows,

      ```javascript
      const object = {
        property: "Welcome JS world",
      };
      Object.freeze(object);
      console.log(Object.isFrozen(object));
      ```

    **[⬆ Back to Top](#table-of-contents)**

191. ### How do you determine two values same or not using object

      The `Object.is()` method determines whether two values are the same value. For example, the usage with different types of values would be,

      ```javascript
      Object.is("hello", "hello"); // true
      Object.is(window, window); // true
      Object.is([], []); // false
      ```

      Two values are considered identical if one of the following holds:

      1. both undefined
      2. both null
      3. both true or both false
      4. both strings of the same length with the same characters in the same order
      5. both the same object (means both object have same reference)
      6. both numbers and
         both +0
         both -0
         both NaN
         both non-zero and both not NaN and both have the same value.

    **[⬆ Back to Top](#table-of-contents)**

192. ### What is the purpose of using object is method

      Some of the applications of Object's `is` method are follows,

      1. It is used for comparison of two strings.
      2. It is used for comparison of two numbers.
      3. It is used for comparing the polarity of two numbers.
      4. It is used for comparison of two objects.

    **[⬆ Back to Top](#table-of-contents)**

193. ### How do you copy properties from one object to other

      You can use the `Object.assign()` method which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects. The syntax would be as below,

      ```javascript
      Object.assign(target, ...sources);
      ```

      Let's take example with one source and one target object,

      ```javascript
      const target = { a: 1, b: 2 };
      const source = { b: 3, c: 4 };

      const returnedTarget = Object.assign(target, source);

      console.log(target); // { a: 1, b: 3, c: 4 }

      console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
      ```

      As observed in the above code, there is a common property(`b`) from source to target so it's value has been overwritten.

    **[⬆ Back to Top](#table-of-contents)**

194. ### What are the applications of the assign method

      Below are the some of main applications of `Object.assign()` method,

      1. It is used for cloning an object.
      2. It is used to merge objects with the same properties.

    **[⬆ Back to Top](#table-of-contents)**

195. ### What is a proxy object

      The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc.

      A proxy is created with two parameters: a target object which you want to proxy and a handler object which contains methods to intercept fundamental operations. The syntax would be as follows,

      ```javascript
      var p = new Proxy(target, handler);
      ```

      Let's take a look at below examples of proxy object and how the get method which customize the lookup behavior,

      ```javascript
      //Example1:

      const person = {
        name: "Sudheer Jonna",
        age: 35,
      };

      const handler = {
        get(target, prop) {
          if (prop === "name") {
            return "Mr. " + target[prop];
          }
          return target[prop];
        },
      };

      const proxy = new Proxy(person, handler);

      //Example2:

      var handler1 = {
        get: function (obj, prop) {
          return prop in obj ? obj[prop] : 100;
        },
      };

      var p = new Proxy({}, handler1);
      p.a = 10;
      p.b = null;

      console.log(p.a, p.b); // 10, null
      console.log("c" in p, p.c); // false, 100
      ```

      In the above code, it uses `get` handler which define the behavior of the proxy when an operation is performed on it. These proxies are mainly used for some of the below cross-cutting concerns.

      1. Logging
      2. Authentication or Authorization
      3. Data binding and observables
      4. Function parameter validation

      **Note:** This feature was introduced with ES6.

    **[⬆ Back to Top](#table-of-contents)**

196. ### What is the purpose of the seal method

      The `Object.seal()` method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But **values of present properties can still be changed as long as they are writable**. The next level of immutability would be the [`Object.freeze()`](#what-is-a-freeze-method) method. Let's see the below example to understand more about `seal()` method

      ```javascript
      const object = {
        property: "Welcome JS world",
      };
      Object.seal(object);
      object.property = "Welcome to object world";
      console.log(Object.isSealed(object)); // true
      delete object.property; // You cannot delete when sealed
      console.log(object.property); //Welcome to object world
      ```

    **[⬆ Back to Top](#table-of-contents)**

197. ### What are the applications of the seal method

      Below are the main applications of `Object.seal()` method,

      1. It is used for sealing objects and arrays.
      2. It is used to make properties of an object non-configurable.

    **[⬆ Back to Top](#table-of-contents)**

198. ### What are the differences between the freeze and seal methods

      If an object is frozen using the `Object.freeze()` method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the `Object.seal()` method then the changes can be made in the existing properties of the object.

    **[⬆ Back to Top](#table-of-contents)**

199. ### How do you determine if an object is sealed or not

      The `Object.isSealed()` method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true

      1. If it is not extensible.
      2. If all of its properties are non-configurable.
      3. If it is not removable (but not necessarily non-writable).
         Let's see it in the action

      ```javascript
      const object = {
        property: "Hello, Good morning",
      };

      Object.seal(object); // Using seal() method to seal the object

      console.log(Object.isSealed(object)); // checking whether the object is sealed or not
      ```

    **[⬆ Back to Top](#table-of-contents)**

200. ### How do you get enumerable key and value pairs

      The `Object.entries()` method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a `for...in` loop. Let's see the functionality of `object.entries()` method in an example,

      ```javascript
      const object = {
        a: "Good morning",
        b: 100,
      };

      for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`); // a: 'Good morning'
        // b: 100
      }
      ```

      **Note:** The order is not guaranteed as object defined.

    **[⬆ Back to Top](#table-of-contents)**

201. ### What is the main difference between Object.values and Object.entries method

      The `Object.values()` method's behavior is similar to `Object.entries()` method but it returns an array of values instead [key,value] pairs.

      ```javascript
      const object = {
        a: "Good morning",
        b: 100,
      };

      for (let value of Object.values(object)) {
        console.log(`${value}`); // 'Good morning \n100'
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

202. ### How can you get the list of keys of any object

      You can use the `Object.keys()` method which is used to return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object,

      ```javascript
      const user = {
        name: "John",
        gender: "male",
        age: 40,
      };

      console.log(Object.keys(user)); //['name', 'gender', 'age']
      ```

    **[⬆ Back to Top](#table-of-contents)**

203. ### How do you create an object with a prototype

      The `Object.create()` method is used to create a new object with the specified prototype object and properties. i.e, It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.

      ```javascript
      const user = {
        name: "John",
        printInfo: function () {
          console.log(`My name is ${this.name}.`);
        },
      };

      const admin = Object.create(user);

      admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

      admin.printInfo(); // My name is Nick
      ```

    **[⬆ Back to Top](#table-of-contents)**

204. ### What is a WeakSet

      A `WeakSet` is used to store a collection of weakly(weak references) held objects. The syntax would be as follows,

      ```javascript
      new WeakSet([iterable]);
      ```

      Let's see the below example to explain it's behavior,

      ```javascript
      var ws = new WeakSet();
      var user = {};
      ws.add(user);
      ws.has(user); // true
      ws.delete(user); // removes user from the set
      ws.has(user); // false, user has been removed
      ```

    **[⬆ Back to Top](#table-of-contents)**

205. ### What are the differences between WeakSet and Set

      The main difference is that references to objects in `Set` are strong while references to objects in `WeakSet` are weak. i.e, An object in `WeakSet` can be garbage collected if there is no other reference to it.
      Other differences are:

      1. `Set` can store any value whereas `WeakSet` can store only collections of objects
      2. `WeakSet` does not have size property unlike `Set`
      3. `WeakSet` does not have methods such as clear, keys, values, entries, forEach.
      4. `WeakSet` is not iterable.

    **[⬆ Back to Top](#table-of-contents)**

206. ### List down the collection of methods available on WeakSet

      Below are the list of methods available on `WeakSet`,

      1. `add(value)`: A new object is appended with the given value
      2. `delete(value)`: Deletes the value from the collection.
      3. `has(value)`: It returns true if the value is present in the collection, otherwise it returns false.

      Let's see the functionality of all the above methods in an example,

      ```javascript
      var weakSetObject = new WeakSet();
      var firstObject = {};
      var secondObject = {};
      // add(value)
      weakSetObject.add(firstObject);
      weakSetObject.add(secondObject);
      console.log(weakSetObject.has(firstObject)); //true
      weakSetObject.delete(secondObject);
      ```

    **[⬆ Back to Top](#table-of-contents)**

207. ### What is a WeakMap

      A `WeakMap` object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax looks like the following:

      ```javascript
      new WeakMap([iterable]);
      ```

      Let's see the below example to explain it's behavior,

      ```javascript
      var ws = new WeakMap();
      var user = {};
      ws.set(user);
      ws.has(user); // true
      ws.delete(user); // removes user from the map
      ws.has(user); // false, user has been removed
      ```

    **[⬆ Back to Top](#table-of-contents)**

208. ### What are the differences between WeakMap and Map

      The main difference is that references to key objects in `Map` are strong while references to key objects in `WeakMap` are weak. i.e, A key object in `WeakMap` can be garbage collected if there is no other reference to it.
      Other differences are,

      1. `Map` can store any key type whereas `WeakMap` can store only collections of key objects
      2. `WeakMap` does not have size property unlike `Map`
      3. `WeakMap` does not have methods such as clear, keys, values, entries, forEach.
      4. `WeakMap` is not iterable.

    **[⬆ Back to Top](#table-of-contents)**

209. ### List down the collection of methods available on WeakMap

      Below are the list of methods available on `WeakMap`,

      1. `set(key, value)`: Sets the value for the key in the `WeakMap` object. Returns the `WeakMap` object.
      2. `delete(key)`: Removes any value associated to the key.
      3. `has(key)`: Returns a Boolean asserting whether a value has been associated to the key in the `WeakMap` object or not.
      4. `get(key)`: Returns the value associated to the key, or undefined if there is none.
         Let's see the functionality of all the above methods in an example,

      ```javascript
      var weakMapObject = new WeakMap();
      var firstObject = {};
      var secondObject = {};
      // set(key, value)
      weakMapObject.set(firstObject, "John");
      weakMapObject.set(secondObject, 100);
      console.log(weakMapObject.has(firstObject)); //true
      console.log(weakMapObject.get(firstObject)); // John
      weakMapObject.delete(secondObject);
      ```

    **[⬆ Back to Top](#table-of-contents)**

210. ### What is the purpose of uneval

      The `uneval()` is an builtin function which is used to create a string representation of the source code of an Object. It is a top-level function and is not associated with any object. Let's see the below example to know more about it's functionality,

      ```javascript
      var a = 1;
      uneval(a); // returns a String containing 1
      uneval(function user() {}); // returns "(function user(){})"
      ```

      The `uneval()` function has been deprecated. It is recommended to use `toString()` for functions and `JSON.stringify()` for other cases.

      ```javascript
      function user() {}
      console.log(user.toString()); // returns "(function user(){})"
      ```

    **[⬆ Back to Top](#table-of-contents)**

211. ### How do you encode an URL

      The `encodeURI()` function is used to encode complete URI which has special characters except (, / ? : @ & = + $ #) characters.

      ```javascript
      var uri = "https://mozilla.org/?x=шеллы";
      var encoded = encodeURI(uri);
      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
      ```

    **[⬆ Back to Top](#table-of-contents)**

212. ### How do you decode an URL

      The `decodeURI()` function is used to decode a Uniform Resource Identifier (URI) previously created by `encodeURI()`.

      ```javascript
      var uri = "https://mozilla.org/?x=шеллы";
      var encoded = encodeURI(uri);
      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
      try {
        console.log(decodeURI(encoded)); // "https://mozilla.org/?x=шеллы"
      } catch (e) {
        // catches a malformed URI
        console.error(e);
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

213. ### How do you print the contents of web page

      The `window` object provides a `print()` method which is used to print the contents of the current window. It opens a Print dialog box which lets you choose between various printing options. Let's see the usage of print method in an example,

      ```html
      <input type="button" value="Print" onclick="window.print()" />
      ```

      **Note:** In most browsers, it will block while the print dialog is open.

    **[⬆ Back to Top](#table-of-contents)**

214. ### What is the difference between uneval and eval

      The `uneval` function returns the source of a given object; whereas the `eval` function does the opposite, by evaluating that source code in a different memory area. Let's see an example to clarify the difference,

      ```javascript
      var msg = uneval(function greeting() {
        return "Hello, Good morning";
      });
      var greeting = eval(msg);
      greeting(); // returns "Hello, Good morning"
      ```

    **[⬆ Back to Top](#table-of-contents)**

215. ### What is an anonymous function

      An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

      ```javascript
      function (optionalParameters) {
        //do something
      }

      const myFunction = function(){ //Anonymous function assigned to a variable
        //do something
      };

      [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
        //do something
      });
      ```

      Let's see the above anonymous function in an example,

      ```javascript
      var x = function (a, b) {
        return a * b;
      };
      var z = x(5, 10);
      console.log(z); // 50
      ```

    **[⬆ Back to Top](#table-of-contents)**

216. ### What is the precedence order between local and global variables

      A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.

      ```javascript
      var msg = "Good morning";
      function greeting() {
        msg = "Good Evening";
        console.log(msg); // Good Evening
      }
      greeting();
      ```

    **[⬆ Back to Top](#table-of-contents)**

217. ### What are javascript accessors

      ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. Getters uses the `get` keyword whereas Setters uses the `set` keyword.

      ```javascript
      var user = {
        firstName: "John",
        lastName: "Abraham",
        language: "en",
        get lang() {
          return this.language;
        },
        set lang(lang) {
          this.language = lang;
        },
      };
      console.log(user.lang); // getter access lang as en
      user.lang = "fr";
      console.log(user.lang); // setter used to set lang as fr
      ```

    **[⬆ Back to Top](#table-of-contents)**

218. ### How do you define property on Object constructor

      The `Object.defineProperty()` static method is used to define a new property directly on an object, or modify an existing property on an object, and returns the object. Let's see an example to know how to define property,

      ```javascript
      const newObject = {};

      Object.defineProperty(newObject, "newProperty", {
        value: 100,
        writable: false,
      });

      console.log(newObject.newProperty); // 100

      newObject.newProperty = 200; // It throws an error in strict mode due to writable setting
      ```

    **[⬆ Back to Top](#table-of-contents)**

219. ### What is the difference between get and defineProperty

      Both have similar results unless you use classes. If you use `get` the property will be defined on the prototype of the object whereas using `Object.defineProperty()` the property will be defined on the instance it is applied to.

    **[⬆ Back to Top](#table-of-contents)**

220. ### What are the advantages of Getters and Setters

      Below are the list of benefits of Getters and Setters,

      1. They provide simpler syntax
      2. They are used for defining computed properties, or accessors in JS.
      3. Useful to provide equivalence relation between properties and methods
      4. They can provide better data quality
      5. Useful for doing things behind the scenes with the encapsulated logic.

    **[⬆ Back to Top](#table-of-contents)**

221. ### Can I add getters and setters using defineProperty method

      Yes, You can use the `Object.defineProperty()` method to add Getters and Setters. For example, the below counter object uses increment, decrement, add and subtract properties,

      ```javascript
      var obj = { counter: 0 };

      // Define getters
      Object.defineProperty(obj, "increment", {
        get: function () {
          this.counter++;
          return this.counter;
        },
      });
      Object.defineProperty(obj, "decrement", {
        get: function () {
          this.counter--;
          return this.counter;
        },
      });

      // Define setters
      Object.defineProperty(obj, "add", {
        set: function (value) {
          this.counter += value;
        },
      });
      Object.defineProperty(obj, "subtract", {
        set: function (value) {
          this.counter -= value;
        },
      });

      obj.add = 10;
      obj.subtract = 5;
      console.log(obj.increment); //6
      console.log(obj.decrement); //5
      ```

    **[⬆ Back to Top](#table-of-contents)**

222. ### What is the purpose of switch-case

      The `switch case` statement in JavaScript is used for decision making purposes. In a few cases, using the `switch case` statement is going to be more convenient than `if-else` statements. The syntax would be as below,

      ```javascript
      switch (expression)
      {
          case value1:
              statement1;
              break;
          case value2:
              statement2;
              break;
          .
          .
          case valueN:
              statementN;
              break;
          default:
              statementDefault;
      }
      ```

      The above multi-way branch statement provides an easy way to dispatch execution to different parts of code based on the value of the expression.

    **[⬆ Back to Top](#table-of-contents)**

223. ### What are the conventions to be followed for the usage of switch case

      Below are the list of conventions should be taken care,

      1. The expression can be of type either number or string.
      2. Duplicate values are not allowed for the expression.
      3. The default statement is optional. If the expression passed to switch does not match with any case value then the statement within default case will be executed.
      4. The break statement is used inside the switch to terminate a statement sequence.
      5. The break statement is optional. But if it is omitted, the execution will continue on into the next case.

    **[⬆ Back to Top](#table-of-contents)**

224. ### What are primitive data types

      A primitive data type is data that has a primitive value (which has no properties or methods). There are 7 types of primitive data types.

      1. string
      2. number
      3. boolean
      4. null
      5. undefined
      6. bigint
      7. symbol

    **[⬆ Back to Top](#table-of-contents)**

225. ### What are the different ways to access object properties

      There are 3 possible ways for accessing the property of an object.

      1. **Dot notation:** It uses dot for accessing the properties

      ```javascript
      objectName.property;
      ```

      2. **Square brackets notation:** It uses square brackets for property access

      ```javascript
      objectName["property"];
      ```

      3. **Expression notation:** It uses expression in the square brackets

      ```javascript
      objectName[expression];
      ```

    **[⬆ Back to Top](#table-of-contents)**

226. ### What are the function parameter rules

      JavaScript functions follow below rules for parameters,

      1. The function definitions do not specify data types for parameters.
      2. Do not perform type checking on the passed arguments.
      3. Do not check the number of arguments received.
         i.e, The below function follows the above rules,

      ```javascript
      function functionName(parameter1, parameter2, parameter3) {
        console.log(parameter1); // 1
      }
      functionName(1);
      ```

    **[⬆ Back to Top](#table-of-contents)**

227. ### What is an error object

      An error object is a built in error object that provides error information when an error occurs. It has two properties: name and message. For example, the below function logs error details,

      ```javascript
      try {
        greeting("Welcome");
      } catch (err) {
        console.log(err.name + "<br>" + err.message);
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

228. ### When do you get a syntax error

      A SyntaxError is thrown if you try to evaluate code with a syntax error. For example, the below missing quote for the function parameter throws a syntax error

      ```javascript
      try {
        eval("greeting('welcome)"); // Missing ' will produce an error
      } catch (err) {
        console.log(err.name);
      }
      ```

    **[⬆ Back to Top](#table-of-contents)**

229. ### What are the different error names from error object

      There are 7 different types of error names returned from error object,
      | Error Name | Description |
      |---- | ---------
      | `AggregateError` | An error indicating that multiple errors occurred |
      | `EvalError` | An error has occurred in the eval() function |
      | `RangeError` | An error has occurred with a number "out of range" |
      | `ReferenceError` | An error due to an illegal reference|
      | `SyntaxError` | An error due to a syntax error|
      | `TypeError` | An error due to a type error |
      | `URIError` | An error due to encodeURI() |

    **[⬆ Back to Top](#table-of-contents)**

230. ### What are the various statements in error handling

      Below are the list of statements used in an error handling,

      1. **try:** This statement is used to test a block of code for errors
      2. **catch:** This statement is used to handle the error
      3. **throw:** This statement is used to create custom errors.
      4. **finally:** This statement is used to execute code after try and catch regardless of the result.

    **[⬆ Back to Top](#table-of-contents)**

231. ### What are the two types of loops in javascript

      1. **Entry Controlled loops:** In this kind of loop type, the test condition is tested before entering the loop body. For example, For Loop and While Loop comes under this category.
      2. **Exit Controlled Loops:** In this kind of loop type, the test condition is tested or evaluated at the end of the loop body. i.e, the loop body will execute at least once irrespective of test condition true or false. For example, do-while loop comes under this category.

    **[⬆ Back to Top](#table-of-contents)**

232. ### What is nodejs

      Node.js is a server-side platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. It is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.

    **[⬆ Back to Top](#table-of-contents)**

233. ### What is the Intl object

      The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. It provides access to several constructors and language sensitive functions.

    **[⬆ Back to Top](#table-of-contents)**

234. ### How do you perform language specific date and time formatting

      You can use the `Intl.DateTimeFormat` object which is a constructor for objects that enable language-sensitive date and time formatting. Let's see this behavior with an example,

      ```javascript
      var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
      console.log(new Intl.DateTimeFormat("en-GB").format(date)); // 07/08/2019
      console.log(new Intl.DateTimeFormat("en-AU").format(date)); // 07/08/2019
      ```

    **[⬆ Back to Top](#table-of-contents)**

235. ### What is an Iterator

      An iterator is an object which defines a sequence and a return value upon its termination. It implements the Iterator protocol with a `next()` method which returns an object with two properties: `value` (the next value in the sequence) and `done` (which is true if the last value in the sequence has been consumed).

    **[⬆ Back to Top](#table-of-contents)**

236. ### How does synchronous iteration works

      Synchronous iteration was introduced in ES6 and it works with below set of components,

      **Iterable:** It is an object which can be iterated over via a method whose key is Symbol.iterator.

      **Iterator:** It is an object returned by invoking `[Symbol.iterator]()` on an iterable. This iterator object wraps each iterated element in an object and returns it via `next()` method one by one.

      **IteratorResult:** It is an object returned by `next()` method. The object contains two properties; the `value` property contains an iterated element and the `done` property determines whether the element is the last element or not.

      Let's demonstrate synchronous iteration with an array as below

      ```javascript
      const iterable = ["one", "two", "three"];
      const iterator = iterable[Symbol.iterator]();
      console.log(iterator.next()); // { value: 'one', done: false }
      console.log(iterator.next()); // { value: 'two', done: false }
      console.log(iterator.next()); // { value: 'three', done: false }
      console.log(iterator.next()); // { value: 'undefined, done: true }
      ```

    **[⬆ Back to Top](#table-of-contents)**

237. ### What is the event loop

      The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.

      **Note:** The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.

    **[⬆ Back to Top](#table-of-contents)**

238. ### What is the call stack

      Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,

      1. Whenever you call a function for its execution, you are pushing it to the stack.
      2. Whenever the execution is completed, the function is popped out of the stack.

      Let's take an example and it's state representation in a diagram format

      ```javascript
      function hungry() {
        eatFruits();
      }
      function eatFruits() {
        return "I'm eating fruits";
      }

      // Invoke the `hungry` function
      hungry();
      ```

      The above code processed in a call stack as below,

      3. Add the `hungry()` function to the call stack list and execute the code.
      4. Add the `eatFruits()` function to the call stack list and execute the code.
      5. Delete the `eatFruits()` function from our call stack list.
      6. Delete the `hungry()` function from the call stack list since there are no items anymore.

      ![Screenshot](images/call-stack.png)

    **[⬆ Back to Top](#table-of-contents)**

239. ### What is the event queue

      The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.

      Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of a promise is moved into the microtask queue).

      The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event loop moves the callback into the call stack. But if there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.

    **[⬆ Back to Top](#table-of-contents)**

240. ### What is a decorator

      A decorator is an expression that evaluates to a function and that takes the target, name, and decorator descriptor as arguments. Also, it optionally returns a decorator descriptor to install on the target object. Let's define admin decorator for user class at design time,

      ```javascript
      function admin(isAdmin) {
         return function(target) {
             target.isAdmin = isAdmin;
         }
      }

      @admin(true)
      class User() {
      }
      console.log(User.isAdmin); //true

       @admin(false)
       class User() {
       }
       console.log(User.isAdmin); //false
      ```

    **[⬆ Back to Top](#table-of-contents)**

241. ### What are the properties of the Intl object

      Below are the list of properties available on the `Intl` object,

      1. **Collator:** These are the objects that enable language-sensitive string comparison.
      2. **DateTimeFormat:** These are the objects that enable language-sensitive date and time formatting.
      3. **ListFormat:** These are the objects that enable language-sensitive list formatting.
      4. **NumberFormat:** Objects that enable language-sensitive number formatting.
      5. **PluralRules:** Objects that enable plural-sensitive formatting and language-specific rules for plurals.
      6. **RelativeTimeFormat:** Objects that enable language-sensitive relative time formatting.

    **[⬆ Back to Top](#table-of-contents)**

242. ### What is an Unary operator

      The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, it will still become a number but with the value NaN. Let's see this behavior in an action.

      ```javascript
      var x = "100";
      var y = +x;
      console.log(typeof x, typeof y); // string, number

      var a = "Hello";
      var b = +a;
      console.log(typeof a, typeof b, b); // string, number, NaN
      ```

    **[⬆ Back to Top](#table-of-contents)**

243. ### How do you sort elements in an array

      The `sort()` method is used to sort the elements of an array in place and returns the sorted array. The default sort order is ascending, based on the string Unicode order. The example usage would be as below,

      ```javascript
      var months = ["Aug", "Sep", "Jan", "June"];
      months.sort();
      console.log(months); //  ["Aug", "Jan", "June", "Sep"]
      ```

      **Beware:** `sort()` is changing the original array.

    **[⬆ Back to Top](#table-of-contents)**

244. ### What is the purpose of compareFunction while sorting arrays

      The compareFunction is used to define the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

      Let's take an example to see the usage of compareFunction,

      ```javascript
      let numbers = [1, 2, 5, 3, 4];
      numbers.sort((a, b) => b - a);
      console.log(numbers); // [5, 4, 3, 2, 1]
      ```

    **[⬆ Back to Top](#table-of-contents)**

245. ### How do you reverse an array

      You can use the `reverse()` method to reverse the elements in an array. This method is useful to sort an array in descending order. Let's see the usage of `reverse()` method in an example,

      ```javascript
      let numbers = [1, 2, 5, 3, 4];
      numbers.sort((a, b) => b - a);
      numbers.reverse();
      console.log(numbers); // [1, 2, 3, 4 ,5]
      ```

    **[⬆ Back to Top](#table-of-contents)**

246. ### How do you find the min and max values in an array

      You can use `Math.min` and `Math.max` methods on array variables to find the minimum and maximum elements within an array. Let's create two functions to find the min and max value with in an array,

      ```javascript
      var marks = [50, 20, 70, 60, 45, 30];
      function findMin(arr) {
        return Math.min.apply(null, arr);
      }
      function findMax(arr) {
        return Math.max.apply(null, arr);
      }

      console.log(findMin(marks));
      console.log(findMax(marks));
      ```

    **[⬆ Back to Top](#table-of-contents)**

247. ### How do you find the min and max values without Math functions

      You can write functions which loop through an array comparing each value with the lowest value or highest value to find the min and max values. Let's create those functions to find min and max values,

      ```javascript
      var marks = [50, 20, 70, 60, 45, 30];
      function findMin(arr) {
        var length = arr.length;
        var min = Infinity;
        while (length--) {
          if (arr[length] < min) {
            min = arr[length];
          }
        }
        return min;
      }

      function findMax(arr) {
        var length = arr.length;
        var max = -Infinity;
        while (length--) {
          if (arr[length] > max) {
            max = arr[length];
          }
        }
        return max;
      }

      console.log(findMin(marks));
      console.log(findMax(marks));
      ```

    **[⬆ Back to Top](#table-of-contents)**

248. ### What is an empty statement and purpose of it

      The empty statement is a semicolon (;) indicating that no statement will be executed, even if JavaScript syntax requires one. Since there is no action with an empty statement you might think that it's usage is quite less, but the empty statement is occasionally useful when you want to create a loop that has an empty body. For example, you can initialize an array with zero values as below,

      ```javascript
      // Initialize an array a
      for (let i = 0; i < a.length; a[i++] = 0);
      ```

    **[⬆ Back to Top](#table-of-contents)**

249. ### How do you get the metadata of a module

      You can use the `import.meta` object which is a meta-property exposing context-specific meta data to a JavaScript module. It contains information about the current module, such as the module's URL. In browsers, you might get different meta data than NodeJS.

      ```javascript
      <script type="module" src="welcome-module.js"></script>;
      console.log(import.meta); // { url: "file:///home/user/welcome-module.js" }
      ```

    **[⬆ Back to Top](#table-of-contents)**

250. ### What is the comma operator

      The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. This is totally different from comma usage within arrays, objects, and function arguments and parameters. For example, the usage for numeric expressions would be as below,

      ```javascript
      var x = 1;
      x = (x++, x);

      console.log(x); // 2
      ```

    **[⬆ Back to Top](#table-of-contents)**

251. ### What is the advantage of the comma operator

      It is normally used to include multiple expressions in a location that requires a single expression. One of the common usages of this comma operator is to supply multiple parameters in a `for` loop. For example, the below for loop uses multiple expressions in a single location using comma operator,

      ```javascript
      for (var a = 0, b =10; a <= 10; a++, b--)
      ```

      You can also use the comma operator in a return statement where it processes before returning.

      ```javascript
      function myFunction() {
        var a = 1;
        return (a += 10), a; // 11
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

252. ### What is typescript

      TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes
      and many other features, and compiles to plain JavaScript. Angular is built entirely in TypeScript and it is used as the primary language there. You can install it globally as

      ```bash
      npm install -g typescript
      ```

      Let's see a simple example of TypeScript usage,

      ```typescript
      function greeting(name: string): string {
        return "Hello, " + name;
      }

      let user = "Sudheer";

      console.log(greeting(user));
      ```

      The greeting method allows only string type as argument.

      **[⬆ Back to Top](#table-of-contents)**

253. ### What are the differences between javascript and typescript

      Below are the list of differences between javascript and typescript,

      | feature             | typescript                            | javascript                                      |
      | ------------------- | ------------------------------------- | ----------------------------------------------- |
      | Language paradigm   | Object oriented programming language  | Multi-paradigm language                         |
      | Typing support      | Supports static typing                | Dynamic typing                                  |
      | Modules             | Supported                             | Not supported                                   |
      | Interface           | It has interfaces concept             | Doesn't support interfaces                      |
      | Optional parameters | Functions support optional parameters | No support of optional parameters for functions |

      **[⬆ Back to Top](#table-of-contents)**

254. ### What are the advantages of typescript over javascript

      Below are some of the advantages of typescript over javascript,

      1. TypeScript is able to find compile time errors at the development time only and it makes sures less runtime errors. Whereas javascript is an interpreted language.
      2. TypeScript is strongly-typed or supports static typing which allows for checking type correctness at compile time. This is not available in javascript.
      3. TypeScript compiler can compile the .ts files into ES3,ES4 and ES5 unlike ES6 features of javascript which may not be supported in some browsers.

      **[⬆ Back to Top](#table-of-contents)**

255. ### What is an object initializer

      An object initializer is an expression that describes the initialization of an Object. The syntax for this expression is represented as a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). This is also known as literal notation. It is one of the ways to create an object.

      ```javascript
      var initObject = { a: "John", b: 50, c: {} };

      console.log(initObject.a); // John
      ```

      **[⬆ Back to Top](#table-of-contents)**

256. ### What is a constructor method

      The constructor method is a special method for creating and initializing an object created within a class. If you do not specify a constructor method, a default constructor is used. The example usage of constructor would be as below,

      ```javascript
      class Employee {
        constructor() {
          this.name = "John";
        }
      }

      var employeeObject = new Employee();

      console.log(employeeObject.name); // John
      ```

      **[⬆ Back to Top](#table-of-contents)**

257. ### What happens if you write constructor more than once in a class

      The "constructor" in a class is a special method and it should be defined only once in a class. i.e, If you write a constructor method more than once in a class it will throw a `SyntaxError` error.

      ```javascript
       class Employee {
         constructor() {
           this.name = "John";
         }
         constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
           this.age = 30;
         }
       }

       var employeeObject = new Employee();

       console.log(employeeObject.name);
      ```

      This constructor is called by using the special function call `new` (see example above).

      **[⬆ Back to Top](#table-of-contents)**

258. ### How do you call the constructor of a parent class

      You can use the `super` keyword to call the constructor of a parent class. Remember that `super()` must be called before using `this` reference. Otherwise it will cause a reference error. Let's the usage of it,

      ```javascript
      class Square extends Rectangle {
        constructor(length) {
          super(length, length);
          this.name = "Square";
        }

        get area() {
          return this.width * this.height;
        }

        set area(value) {
          this.area = value;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

259. ### How do you get the prototype of an object

      You can use the `Object.getPrototypeOf(obj)` method to return the prototype of the specified object. i.e. The value of the internal `prototype` property. If there are no inherited properties then `null` value is returned.

      ```javascript
      const newPrototype = {};
      const newObject = Object.create(newPrototype);

      console.log(Object.getPrototypeOf(newObject) === newPrototype); // true
      ```

      **[⬆ Back to Top](#table-of-contents)**

260. ### What happens If I pass string type for getPrototype method

      In ES5, it will throw a TypeError exception if the obj parameter isn't an object. Whereas in ES2015, the parameter will be coerced to an `Object`.

      ```javascript
      // ES5
      Object.getPrototypeOf("James"); // TypeError: "James" is not an object
      // ES2015
      Object.getPrototypeOf("James"); // String.prototype
      ```

      **[⬆ Back to Top](#table-of-contents)**

261. ### How do you set the prototype of one object to another

      You can use the `Object.setPrototypeOf()` method that sets the prototype (i.e., the internal `Prototype` property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,

      ```javascript
      Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
      Object.setPrototypeOf({}, null);
      ```

      **[⬆ Back to Top](#table-of-contents)**

262. ### How do you check whether an object can be extended or not

      The `Object.isExtensible()` method is used to determine if an object is extendable or not. i.e, Whether it can have new properties added to it or not.

      ```javascript
      const newObject = {};
      console.log(Object.isExtensible(newObject)); //true
      ```

      **Note:** By default, all the objects are extendable. i.e, The new properties can be added or modified.

      **[⬆ Back to Top](#table-of-contents)**

263. ### How do you prevent an object from being extend

      The `Object.preventExtensions()` method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object. Let's see the usage of this property,

      ```javascript
      const newObject = {};
      Object.preventExtensions(newObject); // NOT extendable

      try {
        Object.defineProperty(newObject, "newProperty", {
          // Adding new property
          value: 100,
        });
      } catch (e) {
        console.log(e); // TypeError: Cannot define property newProperty, object is not extensible
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

264. ### What are the different ways to make an object non-extensible

      You can mark an object non-extensible in 3 ways,

      1. `Object.preventExtensions`
      2. `Object.seal`
      3. `Object.freeze`

      ```javascript
      var newObject = {};

      Object.preventExtensions(newObject); // Prevent objects are non-extensible
      Object.isExtensible(newObject); // false

      var sealedObject = Object.seal({}); // Sealed objects are non-extensible
      Object.isExtensible(sealedObject); // false

      var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
      Object.isExtensible(frozenObject); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

265. ### How do you define multiple properties on an object

      The `Object.defineProperties()` method is used to define new or modify existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,

      ```javascript
      const newObject = {};

      Object.defineProperties(newObject, {
        newProperty1: {
          value: "John",
          writable: true,
        },
        newProperty2: {},
      });
      ```

      **[⬆ Back to Top](#table-of-contents)**

266. ### What is the MEAN stack

      The MEAN (MongoDB, Express, AngularJS, and Node.js) stack is the most popular open-source JavaScript software tech stack available for building dynamic web apps where you can write both the server-side and client-side halves of the web project entirely in JavaScript.

      **[⬆ Back to Top](#table-of-contents)**

267. ### What is obfuscation in javascript

      Obfuscation is the deliberate act of creating obfuscated javascript code(i.e, source or machine code) that is difficult for humans to understand. It is something similar to encryption, but a machine can understand the code and execute it.
      Let's see the below function before Obfuscation,

      ```javascript
      function greeting() {
        console.log("Hello, welcome to JS world");
      }
      ```

      And after the code Obfuscation, it would be appeared as below,

      ```javascript
      eval(
        (function (p, a, c, k, e, d) {
          e = function (c) {
            return c;
          };
          if (!"".replace(/^/, String)) {
            while (c--) {
              d[c] = k[c] || c;
            }
            k = [
              function (e) {
                return d[e];
              },
            ];
            e = function () {
              return "\\w+";
            };
            c = 1;
          }
          while (c--) {
            if (k[c]) {
              p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
            }
          }
          return p;
        })(
          "2 1(){0.3('4, 7 6 5 8')}",
          9,
          9,
          "console|greeting|function|log|Hello|JS|to|welcome|world".split("|"),
          0,
          {}
        )
      );
      ```

      **[⬆ Back to Top](#table-of-contents)**

268. ### Why do you need Obfuscation

      Below are the few reasons for Obfuscation,

      1. The Code size will be reduced. So data transfers between server and client will be fast.
      2. It hides the business logic from outside world and protects the code from others
      3. Reverse engineering is highly difficult
      4. The download time will be reduced

      **[⬆ Back to Top](#table-of-contents)**

269. ### What is Minification

      Minification is the process of removing all unnecessary characters(empty spaces are removed) and variables will be renamed without changing it's functionality. It is also a type of obfuscation .

      **[⬆ Back to Top](#table-of-contents)**

270. ### What are the advantages of minification

      Normally it is recommended to use minification for heavy traffic and intensive requirements of resources. It reduces file sizes with below benefits,

      1. Decreases loading times of a web page
      2. Saves bandwidth usages

      **[⬆ Back to Top](#table-of-contents)**

271. ### What are the differences between obfuscation and Encryption

      Below are the main differences between obfuscation and encryption,

      | Feature            | Obfuscation                                     | Encryption                                                              |
      | ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------- |
      | Definition         | Changing the form of any data in any other form | Changing the form of information to an unreadable format by using a key |
      | A key to decode    | It can be decoded without any key               | It is required                                                          |
      | Target data format | It will be converted to a complex form          | Converted into an unreadable format                                     |

      **[⬆ Back to Top](#table-of-contents)**

272. ### What are the common tools used for minification

      There are many online/offline tools to minify the javascript files,

      1. Google's Closure Compiler
      2. UglifyJS2
      3. jsmin
      4. javascript-minifier.com/
      5. prettydiff.com

      **[⬆ Back to Top](#table-of-contents)**

273. ### How do you perform form validation using javascript

      JavaScript can be used to perform HTML form validation. For example, if the form field is empty, the function needs to notify, and return false, to prevent the form being submitted.
      Let's perform user login in an html form,

      ```html
      <form name="myForm" onsubmit="return validateForm()" method="post">
        User name:
        <input type="text" name="uname" />
        <input type="submit" value="Submit" />
      </form>
      ```

      And the validation on user login is below,

      ```javascript
      function validateForm() {
        var x = document.forms["myForm"]["uname"].value;
        if (x == "") {
          alert("The username shouldn't be empty");
          return false;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

274. ### How do you perform form validation without javascript

      You can perform HTML form validation automatically without using javascript. The validation enabled by applying the `required` attribute to prevent form submission when the input is empty.

      ```html
      <form method="post">
        <input type="text" name="uname" required />
        <input type="submit" value="Submit" />
      </form>
      ```

      **Note:** Automatic form validation does not work in Internet Explorer 9 or earlier.

      **[⬆ Back to Top](#table-of-contents)**

275. ### What are the DOM methods available for constraint validation

      The below DOM methods are available for constraint validation on an invalid input,

      1. `checkValidity()`: It returns true if an input element contains valid data.
      2. `setCustomValidity()`: It is used to set the `validationMessage` property of an input element.
         Let's take an user login form with DOM validations

      ```javascript
      function myFunction() {
        var userName = document.getElementById("uname");
        if (!userName.checkValidity()) {
          document.getElementById("message").innerHTML =
            userName.validationMessage;
        } else {
          document.getElementById("message").innerHTML =
            "Entered a valid username";
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

276. ### What are the available constraint validation DOM properties

      Below are the list of some of the constraint validation DOM properties available,

      1. `validity`: It provides a list of boolean properties related to the validity of an input element.
      2. `validationMessage`: It displays the message when the validity is false.
      3. `willValidate`: It indicates if an input element will be validated or not.

      **[⬆ Back to Top](#table-of-contents)**

277. ### What are the validity properties

      The validity property of an input element provides a set of properties related to the validity of data.

      1. `customError`: It returns true, if a custom validity message is set.
      2. `patternMismatch`: It returns true, if an element's value does not match its pattern attribute.
      3. `rangeOverflow`: It returns true, if an element's value is greater than its max attribute.
      4. `rangeUnderflow`: It returns true, if an element's value is less than its min attribute.
      5. `stepMismatch`: It returns true, if an element's value is invalid according to step attribute.
      6. `tooLong`: It returns true, if an element's value exceeds its maxLength attribute.
      7. `typeMismatch`: It returns true, if an element's value is invalid according to type attribute.
      8. `valueMissing`: It returns true, if an element with a required attribute has no value.
      9. `valid`: It returns true, if an element's value is valid.

      **[⬆ Back to Top](#table-of-contents)**

278. ### Give an example usage of the rangeOverflow property

      If an element's value is greater than its max attribute then the `rangeOverflow` property is true. For example, the below form submission throws an error if the value is more than 100,

      ```html
      <input id="age" type="number" max="100" />
      <button onclick="myOverflowFunction()">OK</button>
      ```

      ```javascript
      function myOverflowFunction() {
        if (document.getElementById("age").validity.rangeOverflow) {
          alert("The mentioned age is not allowed");
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

279. ### Are enums available in javascript

      No, javascript does not natively support enums. But there are different kinds of solutions to simulate them even though they may not provide exact equivalents. For example, you can use freeze or seal on object,

      ```javascript
      var DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})
      ```

      **[⬆ Back to Top](#table-of-contents)**

280. ### What is an enum

      An enum is a type restricting variables to one value from a predefined set of constants. JavaScript has no enums but typescript provides built-in enum support.

      ```javascript
      enum Color {
       RED, GREEN, BLUE
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

281. ### How do you list all properties of an object

      You can use the `Object.getOwnPropertyNames()` method which returns an array of all properties found directly in a given object. Let's see the usage of this in an example below:

      ```javascript
      const newObject = {
        a: 1,
        b: 2,
        c: 3,
      };

      console.log(Object.getOwnPropertyNames(newObject));
      ["a", "b", "c"];
      ```

      **[⬆ Back to Top](#table-of-contents)**

282. ### How do you get property descriptors of an object

      You can use the `Object.getOwnPropertyDescriptors()` method which returns all own property descriptors of a given object. The example usage of this method is below,

      ```javascript
      const newObject = {
        a: 1,
        b: 2,
        c: 3,
      };
      const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
      console.log(descriptorsObject.a.writable); //true
      console.log(descriptorsObject.a.configurable); //true
      console.log(descriptorsObject.a.enumerable); //true
      console.log(descriptorsObject.a.value); // 1
      ```

      **[⬆ Back to Top](#table-of-contents)**

283. ### What are the attributes provided by a property descriptor

      A property descriptor is a record which has the following attributes

      1. `value`: The value associated with the property
      2. `writable`: Determines whether the value associated with the property can be changed or not
      3. `configurable`: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.
      4. `enumerable`: Determines whether the property appears during enumeration of the properties on the corresponding object or not.
      5. `set`: A function which serves as a setter for the property
      6. `get`: A function which serves as a getter for the property

      **[⬆ Back to Top](#table-of-contents)**

284. ### How do you extend classes

      The `extends` keyword is used in class declarations/expressions to create a class which is a child of another class. It can be used to subclass custom classes as well as built-in objects. The syntax would be as below,

      ```javascript
      class ChildClass extends ParentClass { ... }
      ```

      Let's take an example of Square subclass from Polygon parent class,

      ```javascript
      class Square extends Rectangle {
        constructor(length) {
          super(length, length);
          this.name = "Square";
        }

        get area() {
          return this.width * this.height;
        }

        set area(value) {
          this.area = value;
        }
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

285. ### How do I modify the url without reloading the page

      The `window.location.href` property will be helpful to modify the url but it reloads the page. HTML5 introduced the `history.pushState()` and `history.replaceState()` methods, which allow you to add and modify history entries, respectively. For example, you can use pushState as below,

      ```javascript
      window.history.pushState("page2", "Title", "/page2.html");
      ```

      This mechanism is used by routing libraries of frameworks like React and Angular in order to simulate the behaviour of a multi-page-website, even though they are only SPA (Single Page Applications).

      **[⬆ Back to Top](#table-of-contents)**

286. ### How do you check whether or not an array includes a particular value

      The `Array#includes()` method is used to determine whether an array includes a particular value among its entries by returning either true or false. Let's see an example to find an element(numeric and string) within an array.

      ```javascript
      var numericArray = [1, 2, 3, 4];
      console.log(numericArray.includes(3)); // true

      var stringArray = ["green", "yellow", "blue"];
      console.log(stringArray.includes("blue")); //true
      ```

      **[⬆ Back to Top](#table-of-contents)**

287. ### How do you compare scalar arrays

      You can use length and every method of arrays to compare two scalars (compared directly using `===`) arrays. The combination of these expressions can give the expected result,

      ```javascript
      const arrayFirst = [1, 2, 3, 4, 5];
      const arraySecond = [1, 2, 3, 4, 5];
      console.log(
        arrayFirst.length === arraySecond.length &&
          arrayFirst.every((value, index) => value === arraySecond[index])
      ); // true
      ```

      If you would like to compare arrays irrespective of order then you should sort them before,

      ```javascript
      const arrayFirst = [2, 3, 1, 4, 5];
      const arraySecond = [1, 2, 3, 4, 5];
      console.log(
        arrayFirst.length === arraySecond.length &&
          arrayFirst
            .sort()
            .every((value, index) => value === arraySecond[index])
      ); //true
      ```

      **[⬆ Back to Top](#table-of-contents)**

288. ### How to get the value from get parameters

      The `new URL()` object accepts the url string and `searchParams` property of this object can be used to access the get parameters.

      ```javascript
      let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
      let url = new URL(urlString);
      let parameterZ = url.searchParams.get("z");
      console.log(parameterZ); // 3
      ```

      **[⬆ Back to Top](#table-of-contents)**

289. ### How do you print numbers with commas as thousand separators

      You can use the `Number.prototype.toLocaleString()` method which returns a string with a language-sensitive representation such as thousand separator, currency etc. of this number.

      ```javascript
      function convertToThousandFormat(x) {
        return x.toLocaleString(); // 12,345.679
      }

      console.log(convertToThousandFormat(12345.6789));
      ```

      **[⬆ Back to Top](#table-of-contents)**

290. ### What is the difference between java and javascript

      Both are totally unrelated programming languages and no relation between them. Java is statically typed, compiled, runs on its own VM. Whereas JavaScript is dynamically typed, interpreted, and runs in a browser and nodejs environments. Let's see the major differences in a tabular format,
      | Feature | Java | JavaScript |
      |---- | ---- | -----
      | Typed | It's a strongly typed language | It's a dynamic typed language |
      | Paradigm | Object oriented programming | Prototype based programming |
      | Scoping | Block scoped | Function-scoped, block scoped since ES6 |
      | Concurrency | Thread based | event based |

      **[⬆ Back to Top](#table-of-contents)**

291. ### Does JavaScript support namespaces

      JavaScript doesn’t support namespaces by default. So if you create any element (function, method, object, variable) then it becomes global and pollutes the global namespace. Let's take an example of defining two functions without any namespace,

      ```javascript
      function func1() {
        console.log("This is a first definition");
      }
      function func1() {
        console.log("This is a second definition");
      }
      func1(); // This is a second definition
      ```

      It always calls the second function definition. In this case, namespaces will solve the name collision problem.

      **[⬆ Back to Top](#table-of-contents)**

292. ### How do you declare a namespace

      Even though JavaScript lacks namespaces, we can use Objects, an IIFE (Immediately Invoked Function Expression) or `let`/`const` to create namespaces.

      1. **Using Object Literal Notation:** Let's wrap variables and functions inside an Object literal which acts as a namespace. After that you can access them using object notation

         ```javascript
         var namespaceOne = {
             function func1() {
                 console.log("This is a first definition");
             }
         }
         var namespaceTwo = {
               function func1() {
                   console.log("This is a second definition");
               }
           }
         namespaceOne.func1(); // This is a first definition
         namespaceTwo.func1(); // This is a second definition
         ```

      2. **Using IIFE (Immediately invoked function expression):** The outer pair of parentheses of IIFE creates a local scope for all the code inside of it and makes the anonymous function a function expression. Due to that, you can create the same function in two different function expressions to act as a namespace.

         ```javascript
         (function () {
           function fun1() {
             console.log("This is a first definition");
           }
           fun1();
         })();

         (function () {
           function fun1() {
             console.log("This is a second definition");
           }
           fun1();
         })();
         ```

      3. **Using a block and a let/const declaration:** In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a variable to a block.

         ```javascript
         {
           let myFunction = function fun1() {
             console.log("This is a first definition");
           };
           myFunction();
         }
         //myFunction(): ReferenceError: myFunction is not defined.

         {
           let myFunction = function fun1() {
             console.log("This is a second definition");
           };
           myFunction();
         }
         //myFunction(): ReferenceError: myFunction is not defined.
         ```

      **[⬆ Back to Top](#table-of-contents)**

293. ### How do you invoke javascript code in an iframe from the parent page

      Initially iFrame needs to be accessed using either `document.getElementBy` or `window.frames`. After that `contentWindow` property of iFrame gives the access for targetFunction

      ```javascript
      document.getElementById("targetFrame").contentWindow.targetFunction();
      window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox
      ```

      **[⬆ Back to Top](#table-of-contents)**

294. ### How do you get the timezone offset of a date object

      You can use the `getTimezoneOffset` method of the date object. This method returns the time zone difference, in minutes, from current locale (host system settings) to UTC

      ```javascript
      var offset = new Date().getTimezoneOffset();
      console.log(offset); // -480
      ```

      **[⬆ Back to Top](#table-of-contents)**

295. ### How do you load CSS and JS files dynamically

      You can create both link and script elements in the DOM and append them as child to head tag. Let's create a function to add script and style resources as below,

      ```javascript
      function loadAssets(filename, filetype) {
        if (filetype == "css") {
          // External CSS file
          var fileReference = document.createElement("link");
          fileReference.setAttribute("rel", "stylesheet");
          fileReference.setAttribute("type", "text/css");
          fileReference.setAttribute("href", filename);
        } else if (filetype == "js") {
          // External JavaScript file
          var fileReference = document.createElement("script");
          fileReference.setAttribute("type", "text/javascript");
          fileReference.setAttribute("src", filename);
        }
        if (typeof fileReference != "undefined")
          document.getElementsByTagName("head")[0].appendChild(fileReference);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

296. ### What are the different methods to find HTML elements in DOM

      If you want to access any element in an HTML page, you need to start with accessing the document object. Later you can use any of the below methods to find the HTML element,

      1. `document.getElementById(id)`: It finds an element by Id
      2. `document.getElementsByTagName(name)`: It finds an element by tag name (returns an node list)
      3. `document.getElementsByClassName(name)`: It finds an element by class name (returns an node list)
      4. `document.querySelector(cssSelector)`: It finds an element by css selector
      5. `document.querySelectorAll(cssSelector)`: It finds all elements by css selector (returns a node list)

      **[⬆ Back to Top](#table-of-contents)**

297. ### What is jQuery

      jQuery is a popular cross-browser JavaScript library that provides Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. It is widely famous with its philosophy of “Write less, do more”. For example, you can display welcome message on the page load using jQuery as below,

      ```javascript
      $(document).ready(function () {
        // It selects the document and apply the function on page load
        alert("Welcome to jQuery world");
      });
      ```

      **Note:** You can download it from jquery's official site or install it from CDNs, like google.

      **[⬆ Back to Top](#table-of-contents)**

298. ### What is V8 JavaScript engine

      V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors.
      **Note:** It can run standalone, or can be embedded into any C++ application.

      **[⬆ Back to Top](#table-of-contents)**

299. ### Why do we call javascript as dynamic language

      JavaScript is a loosely typed or a dynamic language because variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned/reassigned with values of all types.

      ```javascript
      let age = 50; // age is a number now
      age = "old"; // age is a string now
      age = true; // age is a boolean
      ```

      **[⬆ Back to Top](#table-of-contents)**

300. ### What is a void operator

      The `void` operator evaluates the given expression and then returns `undefined` (i.e, without returning value). The syntax would be as below,

      ```javascript
      void expression;
      void expression;
      ```

      Let's display a message without any redirection or reload

      ```javascript
      <a href="javascript:void(alert('Welcome to JS world'))">
        Click here to see a message
      </a>
      ```

      **Note:** This operator is often used to obtain the undefined primitive value, using `void(0)`. Also it can be used to call asynchronous functions without waiting for the result.

      **[⬆ Back to Top](#table-of-contents)**

301. ### How to set the cursor to wait

      The cursor can be set to wait in JavaScript by using the property `cursor`. Let's perform this behavior on page load using the below function.

      ```javascript
      function myFunction() {
        window.document.body.style.cursor = "wait";
      }
      ```

      and this function invoked on page load

      ```html
      <body onload="myFunction()"></body>
      ```

      **[⬆ Back to Top](#table-of-contents)**

302. ### How do you create an infinite loop

      You can create infinite loops using for and while loops without using any expressions. The for loop construct or syntax is better approach in terms of ESLint and code optimizer tools,

      ```javascript
      for (;;) {}
      while (true) {}
      ```

      **[⬆ Back to Top](#table-of-contents)**

303. ### Why do you need to avoid with statement

      JavaScript's with statement was intended to provide a shorthand for writing recurring accesses to objects. So it can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty. Let's take an example where it is used to avoid redundancy when accessing an object several times.

      ```javascript
      a.b.c.greeting = "welcome";
      a.b.c.age = 32;
      ```

      Using `with` it turns this into:

      ```javascript
      with (a.b.c) {
        greeting = "welcome";
        age = 32;
      }
      ```

      But this `with` statement creates performance problems since one cannot predict whether an argument will refer to a real variable or to a property inside the with argument.

      **[⬆ Back to Top](#table-of-contents)**

304. ### What is the output of the following for loops

      ```javascript
      for (var i = 0; i < 4; i++) {
        // global scope
        setTimeout(() => console.log(i));
      }

      for (let i = 0; i < 4; i++) {
        // block scope
        setTimeout(() => console.log(i));
      }
      ```

      The output of the above for loops is 4 4 4 4 and 0 1 2 3

      **Explanation:** Due to the event queue/loop of javascript, the `setTimeout` callback function is called after the loop has been executed. Since the variable i is declared with the `var` keyword it became a global variable and the value was equal to 4 using iteration when the time `setTimeout` function is invoked. Hence, the output of the second loop is `4 4 4 4`.

      Whereas in the second loop, the variable i is declared as the `let` keyword it becomes a block scoped variable and it holds a new value(0, 1 ,2 3) for each iteration. Hence, the output of the first loop is `0 1 2 3`.

      **[⬆ Back to Top](#table-of-contents)**

305. ### List down some of the features of ES6

      Below are the list of some new features of ES6,

      1. Support for constants or immutable variables
      2. Block-scope support for variables, constants and functions
      3. Arrow functions
      4. Default parameters
      5. Rest and Spread Parameters
      6. Template Literals
      7. Multi-line Strings
      8. Destructuring Assignment
      9. Enhanced Object Literals
      10. Promises
      11. Classes
      12. Modules

      **[⬆ Back to Top](#table-of-contents)**

306. ### What is ES6

      ES6 is the sixth edition of the javascript language and it was released in June 2015. It was initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015. Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, like Babel.js etc.

      **[⬆ Back to Top](#table-of-contents)**

307. ### Can I redeclare let and const variables

      No, you cannot redeclare let and const variables. If you do, it throws below error

      ```bash
      Uncaught SyntaxError: Identifier 'someVariable' has already been declared
      ```

      **Explanation:** The variable declaration with `var` keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let's take an example of re-declaring variables in the same scope for both var and let/const variables.

      ```javascript
      var name = "John";
      function myFunc() {
        var name = "Nick";
        var name = "Abraham"; // Re-assigned in the same function block
        alert(name); // Abraham
      }
      myFunc();
      alert(name); // John
      ```

      The block-scoped multi-declaration throws syntax error,

      ```javascript
      let name = "John";
      function myFunc() {
        let name = "Nick";
        let name = "Abraham"; // Uncaught SyntaxError: Identifier 'name' has already been declared
        alert(name);
      }

      myFunc();
      alert(name);
      ```

      **[⬆ Back to Top](#table-of-contents)**

308. ### Does the `const` variable make the value immutable

      No, the `const` variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

      ```javascript
      const userList = [];
      userList.push("John"); // Can mutate even though it can't re-assign
      console.log(userList); // ['John']
      ```

      **[⬆ Back to Top](#table-of-contents)**

309. ### What are default parameters

      In ES5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,

      ```javascript
      //ES5
      var calculateArea = function (height, width) {
        height = height || 50;
        width = width || 60;

        return width * height;
      };
      console.log(calculateArea()); //300
      ```

      The default parameters makes the initialization more simpler,

      ```javascript
      //ES6
      var calculateArea = function (height = 50, width = 60) {
        return width * height;
      };

      console.log(calculateArea()); //300
      ```

      **[⬆ Back to Top](#table-of-contents)**

310. ### What are template literals

      Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (`) character instead of double or single quotes.
      In ES6, this feature enables using dynamic expressions as below,

      ```javascript
      var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;
      ```

      In ES5, you need break string like below,

      ```javascript
      var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
      ```

      **Note:** You can use multi-line strings and string interpolation features with template literals.

      **[⬆ Back to Top](#table-of-contents)**

311. ### How do you write multi-line strings in template literals

      In ES5, you would have to use newline escape characters('\\n') and concatenation symbols(+) in order to get multi-line strings.

      ```javascript
      console.log("This is string sentence 1\n" + "This is string sentence 2");
      ```

      Whereas in ES6, You don't need to mention any newline sequence character,

      ```javascript
      console.log(`This is string sentence
      'This is string sentence 2`);
      ```

      **[⬆ Back to Top](#table-of-contents)**

312. ### What are nesting templates

      The nesting template is a feature supported within template literals syntax to allow inner backticks inside a placeholder ${ } within the template. For example, the below nesting template is used to display the icons based on user permissions whereas outer template checks for platform type,

      ```javascript
      const iconStyles = `icon ${
        isMobilePlatform()
          ? ""
          : `icon-${user.isAuthorized ? "submit" : "disabled"}`
      }`;
      ```

      You can write the above use case without nesting template features as well. However, the nesting template feature is more compact and readable.

      ```javascript
      //Without nesting templates
      const iconStyles = `icon ${
        isMobilePlatform()
          ? ""
          : user.isAuthorized
          ? "icon-submit"
          : "icon-disabled"
      }`;
      ```

      **[⬆ Back to Top](#table-of-contents)**

313. ### What are tagged templates

      Tagged templates are the advanced form of templates in which tags allow you to parse template literals with a function. The tag function accepts the first parameter as an array of strings and remaining parameters as expressions. This function can also return manipulated strings based on parameters. Let's see the usage of this tagged template behavior of an IT professional skill set in an organization,

      ```javascript
      var user1 = "John";
      var skill1 = "JavaScript";
      var experience1 = 15;

      var user2 = "Kane";
      var skill2 = "JavaScript";
      var experience2 = 5;

      function myInfoTag(strings, userExp, experienceExp, skillExp) {
        var str0 = strings[0]; // "Mr/Ms. "
        var str1 = strings[1]; // " is a/an "
        var str2 = strings[2]; // "in"

        var expertiseStr;
        if (experienceExp > 10) {
          expertiseStr = "expert developer";
        } else if (skillExp > 5 && skillExp <= 10) {
          expertiseStr = "senior developer";
        } else {
          expertiseStr = "junior developer";
        }

        return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;
      }

      var output1 = myInfoTag`Mr/Ms. ${user1} is a/an ${experience1} in ${skill1}`;
      var output2 = myInfoTag`Mr/Ms. ${user2} is a/an ${experience2} in ${skill2}`;

      console.log(output1); // Mr/Ms. John is a/an expert developer in JavaScript
      console.log(output2); // Mr/Ms. Kane is a/an junior developer in JavaScript
      ```

      **[⬆ Back to Top](#table-of-contents)**

314. ### What are raw strings

      ES6 provides a raw strings feature using the `String.raw()` method which is used to get the raw string form of template strings. This feature allows you to access the raw strings as they were entered, without processing escape sequences. For example, the usage would be as below,

      ```javascript
      var calculationString = String.raw`The sum of numbers is \n${
        1 + 2 + 3 + 4
      }!`;
      console.log(calculationString); // The sum of numbers is \n10!
      ```

      If you don't use raw strings, the newline character sequence will be processed by displaying the output in multiple lines

      ```javascript
      var calculationString = `The sum of numbers is \n${1 + 2 + 3 + 4}!`;
      console.log(calculationString);
      // The sum of numbers is
      // 10!
      ```

      Also, the raw property is available on the first argument to the tag function

      ```javascript
      function tag(strings) {
        console.log(strings.raw[0]);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

315. ### What is destructuring assignment

      The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.
      Let's get the month values from an array using destructuring assignment

      ```javascript
      var [one, two, three] = ["JAN", "FEB", "MARCH"];

      console.log(one); // "JAN"
      console.log(two); // "FEB"
      console.log(three); // "MARCH"
      ```

      and you can get user properties of an object using destructuring assignment,

      ```javascript
      var { name, age } = { name: "John", age: 32 };

      console.log(name); // John
      console.log(age); // 32
      ```

      **[⬆ Back to Top](#table-of-contents)**

316. ### What are default values in destructuring assignment

      A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object use cases,

      **Arrays destructuring:**

      ```javascript
      var x, y, z;

      [x = 2, y = 4, z = 6] = [10];
      console.log(x); // 10
      console.log(y); // 4
      console.log(z); // 6
      ```

      **Objects destructuring:**

      ```javascript
      var { x = 2, y = 4, z = 6 } = { x: 10 };

      console.log(x); // 10
      console.log(y); // 4
      console.log(z); // 6
      ```

      **[⬆ Back to Top](#table-of-contents)**

317. ### How do you swap variables in destructuring assignment

      If you don't use destructuring assignment, swapping two values requires a temporary variable. Whereas using a destructuring feature, two variable values can be swapped in one destructuring expression. Let's swap two number variables in array destructuring assignment,

      ```javascript
      var x = 10,
        y = 20;

      [x, y] = [y, x];
      console.log(x); // 20
      console.log(y); // 10
      ```

      **[⬆ Back to Top](#table-of-contents)**

318. ### What are enhanced object literals

      Object literals make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as below.

      ```javascript
      //ES6
      var x = 10,
        y = 20;
      obj = { x, y };
      console.log(obj); // {x: 10, y:20}
      //ES5
      var x = 10,
        y = 20;
      obj = { x: x, y: y };
      console.log(obj); // {x: 10, y:20}
      ```

      **[⬆ Back to Top](#table-of-contents)**

319. ### What are dynamic imports

      The dynamic imports using `import()` function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this feature is in [stage4 proposal](https://github.com/tc39/proposal-dynamic-import). The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience.
      The syntax of dynamic imports would be as below,

      ```javascript
      import("./Module").then((Module) => Module.method());
      ```

      **[⬆ Back to Top](#table-of-contents)**

320. ### What are the use cases for dynamic imports

      Below are some of the use cases of using dynamic imports over static imports,

      1. Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser

         ```javascript
         if (isLegacyBrowser()) {
             import(···)
             .then(···);
         }
         ```

      2. Compute the module specifier at runtime. For example, you can use it for internationalization.

         ```javascript
         import(`messages_${getLocale()}.js`).then(···);
         ```

      3. Import a module from within a regular script instead a module.

      **[⬆ Back to Top](#table-of-contents)**

321. ### What are typed arrays

      Typed arrays are array-like objects from ECMAScript 6 API for handling binary data. JavaScript provides 12 Typed array types,

      1. Int8Array: An array of 8-bit signed integers
      2. Uint8Array: An array of 8-bit unsigned integers
      3. Uint8ClampedArray: An array of 8-bit unsigned integers clamped to 0-255
      4. Int16Array: An array of 16-bit signed integers
      5. Uint16Array: An array of 16-bit unsigned integers
      6. Int32Array: An array of 32-bit signed integers
      7. Uint32Array: An array of 32-bit unsigned integers
      8. BigInt64Array: An array of 64-bit signed BigInts
      9. BigUint64Array: An array of 64-bit unsigned BigInts
      10. Float16Array: An array of 16-bit floating point numbers
      11. Float32Array: An array of 32-bit floating point numbers
      12. Float64Array: An array of 64-bit floating point numbers

      For example, you can create an array of 8-bit signed integers as below

      ```javascript
      const a = new Int8Array();
      // You can pre-allocate n bytes
      const bytes = 1024;
      const a = new Int8Array(bytes);
      ```

      **[⬆ Back to Top](#table-of-contents)**

322. ### What are the advantages of module loaders

      The module loaders provides the below features,

      1. Dynamic loading
      2. State isolation
      3. Global namespace isolation
      4. Compilation hooks
      5. Nested virtualization

      **[⬆ Back to Top](#table-of-contents)**

323. ### What is collation

      Collation is used for sorting a set of strings and searching within a set of strings. It is parameterized by locale and aware of Unicode. Let's take comparison and sorting features,

      1. **Comparison:**

      ```javascript
      var list = ["ä", "a", "z"]; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
      var l10nDE = new Intl.Collator("de");
      var l10nSV = new Intl.Collator("sv");
      console.log(l10nDE.compare("ä", "z") === -1); // true
      console.log(l10nSV.compare("ä", "z") === +1); // true
      ```

      2. **Sorting:**

      ```javascript
      var list = ["ä", "a", "z"]; // In German,  "ä" sorts with "a" Whereas in Swedish, "ä" sorts after "z"
      var l10nDE = new Intl.Collator("de");
      var l10nSV = new Intl.Collator("sv");
      console.log(list.sort(l10nDE.compare)); // [ "a", "ä", "z" ]
      console.log(list.sort(l10nSV.compare)); // [ "a", "z", "ä" ]
      ```

      **[⬆ Back to Top](#table-of-contents)**

324. ### What is for...of statement

      The for...of statement creates a loop iterating over iterable objects or elements such as built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. The basic usage of for...of statement on arrays would be as below,

      ```javascript
      let arrayIterable = [10, 20, 30, 40, 50];

      for (let value of arrayIterable) {
        value++;
        console.log(value); // 11 21 31 41 51
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

325. ### What is the output of below spread operator array

      ```javascript
      [..."John Resig"];
      ```

      The output of the array is ['J', 'o', 'h', 'n', ' ', 'R', 'e', 's', 'i', 'g']

      **Explanation:** The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

      **[⬆ Back to Top](#table-of-contents)**

326. ### Is PostMessage secure

      Yes, postMessages can be considered very secure as long as the programmer/developer is careful about checking the origin and source of an arriving message. But if you try to send/receive a message without verifying its source will create cross-site scripting attacks.

      **[⬆ Back to Top](#table-of-contents)**

327. ### What are the problems with postmessage target origin as wildcard

      The second argument of postMessage method specifies which origin is allowed to receive the message. If you use the wildcard “\*” as an argument then any origin is allowed to receive the message. In this case, there is no way for the sender window to know if the target window is at the target origin when sending the message. If the target window has been navigated to another origin, the other origin would receive the data. Hence, this may lead to XSS vulnerabilities.

      ```javascript
      targetWindow.postMessage(message, "*");
      ```

      **[⬆ Back to Top](#table-of-contents)**

328. ### How do you avoid receiving postMessages from attackers

      Since the listener listens for any message, an attacker can trick the application by sending a message from the attacker’s origin, which gives an impression that the receiver received the message from the actual sender’s window. You can avoid this issue by validating the origin of the message on the receiver's end using the “message.origin” attribute.

      For example, let's check the sender's origin [http://www.some-sender.com](http://www.some-sender.com) on receiver side [www.some-receiver.com](www.some-receiver.com),

      ```javascript
      //Listener on http://www.some-receiver.com/
      window.addEventListener("message", function(message){
          if(/^http://www\.some-sender\.com$/.test(message.origin)){
               console.log('You received the data from valid sender', message.data);
         }
      });
      ```

      **[⬆ Back to Top](#table-of-contents)**

329. ### Can I avoid using postMessages completely

      You cannot avoid using postMessages completely(or 100%). Even though your application doesn’t use postMessage considering the risks, a lot of third party scripts use postMessage to communicate with the third party service. So your application might be using postMessage without your knowledge.

      **[⬆ Back to Top](#table-of-contents)**

330. ### Is postMessages synchronous

      The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all other modern browsers (i.e, IE9+, Firefox, Chrome, Safari).Due to this asynchronous behaviour, we use a callback mechanism when the postMessage is returned.

      **[⬆ Back to Top](#table-of-contents)**

331. ### What paradigm is Javascript

      JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance.

      **[⬆ Back to Top](#table-of-contents)**

332. ### What is the difference between internal and external javascript

      **Internal JavaScript:** It is the source code within the script tag.
      **External JavaScript:** The source code is stored in an external file(stored with .js extension) and referred with in the tag.

      **[⬆ Back to Top](#table-of-contents)**

333. ### Is JavaScript faster than server side script

      Yes, JavaScript is faster than server side scripts. Because JavaScript is a client-side script it does not require any web server’s help for its computation or calculation. So JavaScript is always faster than any server-side script like ASP, PHP, etc.

      **[⬆ Back to Top](#table-of-contents)**

334. ### How do you get the status of a checkbox

      You can apply the `checked` property on the selected checkbox in the DOM. If the value is `true` it means the checkbox is checked, otherwise it is unchecked. For example, the below HTML checkbox element can be access using javascript as below:

      ```html
      <input type="checkbox" id="checkboxname" value="Agree" />
      Agree the conditions
      <br />
      ```

      ```javascript
      console.log(document.getElementById(‘checkboxname’).checked); // true or false
      ```

      **[⬆ Back to Top](#table-of-contents)**

335. ### What is the purpose of double tilde operator

      The double tilde operator(~~) is known as double NOT bitwise operator. This operator is a slightly quicker substitute for Math.floor().

      **[⬆ Back to Top](#table-of-contents)**

336. ### How do you convert character to ASCII code

      You can use the `String.prototype.charCodeAt()` method to convert string characters to ASCII numbers. For example, let's find ASCII code for the first letter of 'ABC' string,

      ```javascript
      "ABC".charCodeAt(0); // returns 65
      ```

      Whereas `String.fromCharCode()` method converts numbers to equal ASCII characters.

      ```javascript
      String.fromCharCode(65, 66, 67); // returns 'ABC'
      ```

      **[⬆ Back to Top](#table-of-contents)**

337. ### What is ArrayBuffer

      An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can create it as below,

      ```javascript
      let buffer = new ArrayBuffer(16); // create a buffer of length 16
      alert(buffer.byteLength); // 16
      ```

      To manipulate an ArrayBuffer, we need to use a “view” object.

      ```javascript
      //Create a DataView referring to the buffer
      let view = new DataView(buffer);
      ```

      **[⬆ Back to Top](#table-of-contents)**

338. ### What is the output of below string expression

      ```javascript
      console.log("Welcome to JS world"[0]);
      ```

      The output of the above expression is "W".
      **Explanation:** The bracket notation with specific index on a string returns the character at a specific location. Hence, it returns the character "W" of the string. Since this is not supported in IE7 and below versions, you may need to use the .charAt() method to get the desired result.

      **[⬆ Back to Top](#table-of-contents)**

339. ### What is the purpose of Error object

      The Error constructor creates an error object and the instances of error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. The syntax of error object would be as below,

      ```javascript
      new Error([message[, fileName[, lineNumber]]])
      ```

      You can throw user defined exceptions or errors using Error object in try...catch block as below,

      ```javascript
      try {
        if (withdraw > balance)
          throw new Error("Oops! You don't have enough balance");
      } catch (e) {
        console.log(e.name + ": " + e.message);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

340. ### What is the purpose of EvalError object

      The EvalError object indicates an error regarding the global `eval()` function. Even though this exception is not thrown by JavaScript anymore, the EvalError object remains for compatibility. The syntax of this expression would be as below,

      ```javascript
      new EvalError([message[, fileName[, lineNumber]]])
      ```

      You can throw EvalError with in try...catch block as below,

      ```javascript
      try {
        throw new EvalError('Eval function error', 'someFile.js', 100);
      } catch (e) {
        console.log(e.message, e.name, e.fileName);              // "Eval function error", "EvalError", "someFile.js"
      ```

      **[⬆ Back to Top](#table-of-contents)**

341. ### What are the list of cases error thrown from non-strict mode to strict mode

      When you apply 'use strict'; syntax, some of the below cases will throw a SyntaxError before executing the script

      1. When you use Octal syntax

      ```javascript
      var n = 022;
      ```

      2. Using `with` statement
      3. When you use delete operator on a variable name
      4. Using eval or arguments as variable or function argument name
      5. When you use newly reserved keywords
      6. When you declare a function in a block and access it from outside of the block

      ```javascript
      if (someCondition) {
        function f() {}
      }
      f(); // ReferenceError: f is not defined
      ```

      Hence, the errors from above cases are helpful to avoid errors in development/production environments.

      **[⬆ Back to Top](#table-of-contents)**

342. ### Do all objects have prototypes

      No. All objects have prototypes except two exceptions:
      *  **Object.prototype** itself — This is the base object in the prototype chain, and **its prototype is** `null`.
      *   **Objects created with** `**Object.create(null)**` — These are deliberately created with **no prototype**, so they don’t inherit from `Object.prototype`.

      All other standard objects do have a prototype.  

      **[⬆ Back to Top](#table-of-contents)**

343. ### What is the difference between a parameter and an argument

      Parameter is the variable name of a function definition whereas an argument represents the value given to a function when it is invoked. Let's explain this with a simple function

      ```javascript
      function myFunction(parameter1, parameter2, parameter3) {
        console.log(arguments[0]); // "argument1"
        console.log(arguments[1]); // "argument2"
        console.log(arguments[2]); // "argument3"
      }
      myFunction("argument1", "argument2", "argument3");
      ```

      **[⬆ Back to Top](#table-of-contents)**

344. ### What is the purpose of some method in arrays

      The some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The method returns a boolean value. Let's take an example to test for any odd elements,

      ```javascript
      var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      var odd = (element) => element % 2 !== 0;

      console.log(array.some(odd)); // true (the odd element exists)
      ```

      **[⬆ Back to Top](#table-of-contents)**

345. ### How do you combine two or more arrays

      The concat() method is used to join two or more arrays by returning a new array containing all the elements. The syntax would be as below,

      ```javascript
      array1.concat(array2, array3, ..., arrayX)
      ```

      Let's take an example of array's concatenation with veggies and fruits arrays,

      ```javascript
      var veggies = ["Tomato", "Carrot", "Cabbage"];
      var fruits = ["Apple", "Orange", "Pears"];
      var veggiesAndFruits = veggies.concat(fruits);
      console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears
      ```

      **[⬆ Back to Top](#table-of-contents)**

346. ### What is the difference between Shallow and Deep copy

      There are two ways to copy an object,

      **Shallow Copy:**
      Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

      **Example**

      ```javascript
      var empDetails = {
        name: "John",
        age: 25,
        expertise: "Software Developer",
      };
      ```

      to create a duplicate

      ```javascript
      var empDetailsShallowCopy = empDetails; //Shallow copying!
      ```

      if we change some property value in the duplicate one like this:

      ```javascript
      empDetailsShallowCopy.name = "Johnson";
      ```

      The above statement will also change the name of `empDetails`, since we have a shallow copy. That means we're losing the original data as well.

      **Deep copy:**
      A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

      **Example**

      ```javascript
      var empDetails = {
        name: "John",
        age: 25,
        expertise: "Software Developer",
      };
      ```

      Create a deep copy by using the properties from the original object into new variable

      ```javascript
      var empDetailsDeepCopy = {
        name: empDetails.name,
        age: empDetails.age,
        expertise: empDetails.expertise,
      };
      ```

      Now if you change `empDetailsDeepCopy.name`, it will only affect `empDetailsDeepCopy` & not `empDetails`

      **[⬆ Back to Top](#table-of-contents)**

347. ### How do you create specific number of copies of a string

      The `repeat()` method is used to construct and return a new string which contains the specified number of copies of the string on which it was called, concatenated together. Remember that this method has been added to the ECMAScript 2015 specification.
      Let's take an example of Hello string to repeat it 4 times,

      ```javascript
      "Hello".repeat(4); // 'HelloHelloHelloHello'
      ```

348. ### How do you return all matching strings against a regular expression

      The `matchAll()` method can be used to return an iterator of all results matching a string against a regular expression. For example, the below example returns an array of matching string results against a regular expression,

      ```javascript
      let regexp = /Hello(\d?)/g;
      let greeting = "Hello1Hello2Hello3";

      let greetingList = [...greeting.matchAll(regexp)];

      console.log(greetingList[0][0]); //Hello1
      console.log(greetingList[1][0]); //Hello2
      console.log(greetingList[2][0]); //Hello3
      ```

      **[⬆ Back to Top](#table-of-contents)**

349. ### How do you trim a string at the beginning or ending

      The `trim` method of string prototype is used to trim on both sides of a string. But if you want to trim especially at the beginning or ending of the string then you can use `trimStart/trimLeft` and `trimEnd/trimRight` methods. Let's see an example of these methods on a greeting message,

      ```javascript
      var greeting = "   Hello, Goodmorning!   ";

      console.log(greeting); // "   Hello, Goodmorning!   "
      console.log(greeting.trimStart()); // "Hello, Goodmorning!   "
      console.log(greeting.trimLeft()); // "Hello, Goodmorning!   "

      console.log(greeting.trimEnd()); // "   Hello, Goodmorning!"
      console.log(greeting.trimRight()); // "   Hello, Goodmorning!"
      ```

      **[⬆ Back to Top](#table-of-contents)**

350. ### What is the output of below console statement with unary operator

      Let's take console statement with unary operator as given below,

      ```javascript
      console.log(+"Hello"); // NaN
      ```

      The output of the above console log statement returns NaN. Because the element is prefixed by the unary operator and the JavaScript interpreter will try to convert that element into a number type. Since the conversion fails, the value of the statement results in NaN value.

      **[⬆ Back to Top](#table-of-contents)**

351. ### Does javascript uses mixins

      JavaScript does not have built-in support for mixins as a formal language feature. However, developers commonly implement mixins using various patterns to enable code reuse and composition.

      A mixin is a way to add reusable functionality from one or more objects into a class or another object, without using classical inheritance. It promotes object composition by combining behaviors or properties from different sources into a single destination.

352. ### Mixin Example using Object composition
      ```javascript
      // Define a mixin
      const canEat = {
        eat() {
          console.log("Eating...");
        }
      };

      const canWalk = {
        walk() {
          console.log("Walking...");
        }
      };

      const canRead = {
        read() {
          console.log("Reading...");
        }
      };

      // Create a class
      class Person {
        constructor(name) {
          this.name = name;
        }
      }

      // Apply mixins
      Object.assign(Person.prototype, canEat, canWalk, canRead);

      // Use it
      const person = new Person("Sudheer");
      person.eat();  // Output: Eating...
      person.walk(); // Output: Walking...
      person.read(); // Output: Reading...
      ```
353. ### Benefits
      - Avoids deep inheritance hierarchies
      - Encourages composition over inheritance
      - Promotes reusable and modular code
  
      Modern JavaScript favors mixin alternatives like composition, delegation, higher-order functions, and class mixins to promote reusable and modular code. Libraries like Lodash offer utilities for object composition, while frameworks like Vue.js provide built-in mixin features to promote reusable and modular code.

      **[⬆ Back to Top](#table-of-contents)**

354. ### What is a thunk function

      A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example,

      ```javascript
      const add = (x, y) => x + y;

      const thunk = () => add(2, 3);

      thunk(); // 5
      ```

      **[⬆ Back to Top](#table-of-contents)**

355. ### What are asynchronous thunks

      The asynchronous thunks are useful to make network requests. Let's see an example of network requests,

      ```javascript
      function fetchData(fn) {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => response.json())
          .then((json) => fn(json));
      }

      const asyncThunk = function () {
        return fetchData(function getData(data) {
          console.log(data);
        });
      };

      asyncThunk();
      ```

      The `getData` function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.

      **[⬆ Back to Top](#table-of-contents)**

356. ### What is the output of below function calls

      **Code snippet:**

      ```javascript
      const circle = {
        radius: 20,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this?.radius,
      };
      ```

      ```javascript
      console.log(circle.diameter());
      console.log(circle.perimeter());
      ```

      **Output:**

      The output is 40 and NaN. Remember that diameter is a regular function, whereas the value of perimeter is an arrow function. The `this` keyword of a regular function(i.e, diameter) refers to the surrounding scope which is a class(i.e, Shape object). Whereas this keyword of perimeter function refers to the surrounding scope which is a window object. Since there is no radius property on window objects it returns an undefined value and the multiple of number value returns NaN value.

      **[⬆ Back to Top](#table-of-contents)**

357. ### How to remove all line breaks from a string

      The easiest approach is using regular expressions to detect and replace newlines in the string. In this case, we use replace function along with string to replace with, which in our case is an empty string.

      ```javascript
      function remove_linebreaks( var message ) {
          return message.replace( /[\r\n]+/gm, "" );
      }
      ```

      In the above expression, g and m are for global and multiline flags.

      **[⬆ Back to Top](#table-of-contents)**

358. ### What is the difference between reflow and repaint

      A _repaint_ occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. A _reflow_ involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.

      **[⬆ Back to Top](#table-of-contents)**

359. ### What happens with negating an array

      Negating an array with `!` character will coerce the array into a boolean. Since Arrays are considered to be truthy So negating it will return `false`.

      ```javascript
      console.log(![]); // false
      ```

      **[⬆ Back to Top](#table-of-contents)**

360. ### What happens if we add two arrays

      If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,

      ```javascript
      console.log(["a"] + ["b"]); // "ab"
      console.log([] + []); // ""
      console.log(![] + []); // "false", because ![] returns false.
      ```

      **[⬆ Back to Top](#table-of-contents)**

361. ### What is the output of prepend additive operator on falsy values

      If you prepend the additive(+) operator on falsy values(null, undefined, NaN, false, ""), the falsy value converts to a number value zero. Let's display them on browser console as below,

      ```javascript
      console.log(+null); // 0
      console.log(+undefined); // NaN
      console.log(+false); // 0
      console.log(+NaN); // NaN
      console.log(+""); // 0
      ```

      **[⬆ Back to Top](#table-of-contents)**

362. ### How do you create self string using special characters

      The self string can be formed with the combination of `[]()!+` characters. You need to remember the below conventions to achieve this pattern.

      1. Since Arrays are truthful values, negating the arrays will produce false: ![] === false
      2. As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""
      3. Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1

      By applying the above rules, we can derive below conditions

      ```javascript
      (![] + [] === "false" + !+[]) === 1;
      ```

      Now the character pattern would be created as below,

      ```javascript
            s               e               l               f
       ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^

       (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]
       ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^
      (![] + [])[+!+[]+!+[]+!+[]] +
      (![] + [])[+!+[]+!+[]+!+[]+!+[]] +
      (![] + [])[+!+[]+!+[]] +
      (![] + [])[+[]]
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      (![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]
      ```

      **[⬆ Back to Top](#table-of-contents)**

363. ### How do you remove falsy values from an array

      You can apply the filter method on the array by passing Boolean as a parameter. This way it removes all falsy values(0, undefined, null, false and "") from the array.

      ```javascript
      const myArray = [false, null, 1, 5, undefined];
      myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
      ```

      **[⬆ Back to Top](#table-of-contents)**

364. ### How do you get unique values of an array

      You can get unique values of an array with the combination of `Set` and rest expression/spread(...) syntax.

      ```javascript
      console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]
      ```

      **[⬆ Back to Top](#table-of-contents)**

365. ### What is destructuring aliases

      Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a `: newName` to specify a name for the variable. This process is called destructuring aliases.

      ```javascript
      const obj = { x: 1 };
      // Grabs obj.x as { otherName }
      const { x: otherName } = obj;
      ```

      **[⬆ Back to Top](#table-of-contents)**

366. ### How do you map the array values without using map method

      You can map the array values without using the `map` method by just using the `from` method of Array. Let's map city names from Countries array,

      ```javascript
      const countries = [
        { name: "India", capital: "Delhi" },
        { name: "US", capital: "Washington" },
        { name: "Russia", capital: "Moscow" },
        { name: "Singapore", capital: "Singapore" },
        { name: "China", capital: "Beijing" },
        { name: "France", capital: "Paris" },
      ];

      const cityNames = Array.from(countries, ({ capital }) => capital);
      console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']
      ```

      **[⬆ Back to Top](#table-of-contents)**

367. ### How do you empty an array

      You can empty an array quickly by setting the array length to zero.

      ```javascript
      let cities = ["Singapore", "Delhi", "London"];
      cities.length = 0; // cities becomes []
      ```

      **[⬆ Back to Top](#table-of-contents)**

368. ### How do you round numbers to certain decimals

      You can round numbers to a certain number of decimals using `toFixed` method from native javascript.

      ```javascript
      let pie = 3.141592653;
      pie = pie.toFixed(3); // 3.142
      ```

      **[⬆ Back to Top](#table-of-contents)**

369. ### What is the easiest way to convert an array to an object

      You can convert an array to an object with the same data using spread(...) operator.

      ```javascript
      var fruits = ["banana", "apple", "orange", "watermelon"];
      var fruitsObject = { ...fruits };
      console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}
      ```

      **[⬆ Back to Top](#table-of-contents)**

370. ### How do you create an array with some data

      You can create an array with some data or an array with the same values using `fill` method.

      ```javascript
      var newArray = new Array(5).fill("0");
      console.log(newArray); // ["0", "0", "0", "0", "0"]
      ```

      **[⬆ Back to Top](#table-of-contents)**

371. ### What are the placeholders from console object

      Below are the list of placeholders available from console object,

      1. %o — It takes an object,
      2. %s — It takes a string,
      3. %d — It is used for a decimal or integer
         These placeholders can be represented in the console.log as below

      ```javascript
      const user = { name: "John", id: 1, city: "Delhi" };
      console.log(
        "Hello %s, your details %o are available in the object form",
        "John",
        user
      ); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object
      ```

      **[⬆ Back to Top](#table-of-contents)**

372. ### Is it possible to add CSS to console messages

      Yes, you can apply CSS styles to console messages similar to html text on the web page.

      ```javascript
      console.log(
        "%c The text has blue color, with large font and red background",
        "color: blue; font-size: x-large; background: red"
      );
      ```

      The text will be displayed as below,
      ![Screenshot](images/console-css.png)

      **Note:** All CSS styles can be applied to console messages.

      **[⬆ Back to Top](#table-of-contents)**

373. ### What is the purpose of dir method of console object

      The `console.dir()` is used to display an interactive list of the properties of the specified JavaScript object as JSON.

      ```javascript
      const user = { name: "John", id: 1, city: "Delhi" };
      console.dir(user);
      ```

      The user object displayed in JSON representation
      ![Screenshot](images/console-dir.png)

      **[⬆ Back to Top](#table-of-contents)**

374. ### Is it possible to debug HTML elements in console

      Yes, it is possible to get and debug HTML elements in the console just like inspecting elements.

      ```javascript
      const element = document.getElementsByTagName("body")[0];
      console.log(element);
      ```

      It prints the HTML element in the console,

      ![Screenshot](images/console-html.png)

      **[⬆ Back to Top](#table-of-contents)**

375. ### How do you display data in a tabular format using console object

      The `console.table()` is used to display data in the console in a tabular format to visualize complex arrays or objects.

      ```js
      const users = [
        { name: "John", id: 1, city: "Delhi" },
        { name: "Max", id: 2, city: "London" },
        { name: "Rod", id: 3, city: "Paris" },
      ];
      console.table(users);
      ```

      The data visualized in a table format,

      ![Screenshot](images/console-table.png)
      **Not:** Remember that `console.table()` is not supported in IE.

      **[⬆ Back to Top](#table-of-contents)**

376. ### How do you verify that an argument is a Number or not

      The combination of IsNaN and isFinite methods are used to confirm whether an argument is a number or not.

      ```javascript
      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

377. ### How do you create copy to clipboard button

      You need to select the content(using .select() method) of the input element and execute the copy command with execCommand (i.e, execCommand('copy')). You can also execute other system commands like cut and paste.

      ```javascript
      document.querySelector("#copy-button").onclick = function () {
        // Select the content
        document.querySelector("#copy-input").select();
        // Copy to the clipboard
        document.execCommand("copy");
      };
      ```

      **[⬆ Back to Top](#table-of-contents)**

378. ### What is the shortcut to get timestamp

      You can use `new Date().getTime()` to get the current timestamp. There is an alternative shortcut to get the value.

      ```javascript
      console.log(+new Date());
      console.log(Date.now());
      ```

      **[⬆ Back to Top](#table-of-contents)**

379. ### How do you flattening multi dimensional arrays

      Flattening bi-dimensional arrays is trivial with Spread operator.

      ```javascript
      const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
      const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
      ```

      But you can make it work with multi-dimensional arrays by recursive calls,

      ```javascript
      function flattenMultiArray(arr) {
        const flattened = [].concat(...arr);
        return flattened.some((item) => Array.isArray(item))
          ? flattenMultiArray(flattened)
          : flattened;
      }
      const multiDimensionalArr = [
        11,
        [22, 33],
        [44, [55, 66, [77, [88]], 99]],
      ];
      const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
      ```

      Also you can use the `flat` method of Array.

      ```javascript
      const arr = [1, [2, 3], 4, 5, [6, 7]];
      const fllattenArr = arr.flat(); // [1, 2, 3, 4, 5, 6, 7]

      // And for multiDimensional arrays
      const multiDimensionalArr = [
        11,
        [22, 33],
        [44, [55, 66, [77, [88]], 99]],
      ];
      const oneStepFlat = multiDimensionalArr.flat(1); // [11, 22, 33, 44, [55, 66, [77, [88]], 99]]
      const towStep = multiDimensionalArr.flat(2); // [11, 22, 33, 44, 55, 66, [77, [88]], 99]
      const fullyFlatArray = multiDimensionalArr.flat(Infinity); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
      ```

      **[⬆ Back to Top](#table-of-contents)**

380. ### What is the easiest multi condition checking

      You can use `indexOf` to compare input with multiple values instead of checking each value as one condition.

      ```javascript
      // Verbose approach
      if (
        input === "first" ||
        input === 1 ||
        input === "second" ||
        input === 2
      ) {
        someFunction();
      }
      // Shortcut
      if (["first", 1, "second", 2].indexOf(input) !== -1) {
        someFunction();
      }
      ```

      **[⬆ Back to Top](#table-of-contents)**

381. ### How do you capture browser back button

      The `beforeunload` event is triggered when the window, the document and its resources are about to be unloaded. This event is helpful to warn users about losing the current data and detect back button event.

      ```javascript
      window.addEventListener("beforeunload", () => {
        console.log("Clicked browser back button");
      });
      ```

      You can also use `popstate` event to detect the browser back button.
      **Note:** The history entry has been activated using `history.pushState` method.

      ```javascript
      window.addEventListener("popstate", () => {
        console.log("Clicked browser back button");
        box.style.backgroundColor = "white";
      });

      const box = document.getElementById("div");

      box.addEventListener("click", () => {
        box.style.backgroundColor = "blue";
        window.history.pushState({}, null, null);
      });
      ```


    In the preceeding code, When the box element clicked, its background color appears in blue color and changed to while color upon clicking the browser back button using `popstate` event handler. The `state` property of `popstate` contains the copy of history entry's state object.

     **[⬆ Back to Top](#table-of-contents)**

382. ### How do you disable right click in the web page

     The right click on the page can be disabled by returning false from the `oncontextmenu` attribute on the body element.

     ```html
     <body oncontextmenu="return false;"></body>
     ```

     **[⬆ Back to Top](#table-of-contents)**

383. ### What are wrapper objects

     Primitive Values like string,number and boolean don't have properties and methods but they are temporarily converted or coerced to an object(Wrapper object) when you try to perform actions on them. For example, if you apply toUpperCase() method on a primitive string value, it does not throw an error but returns uppercase of the string.

     ```javascript
     let name = "john";

     console.log(name.toUpperCase()); // Behind the scenes treated as console.log(new String(name).toUpperCase());
     ```

     i.e, Every primitive except null and undefined have Wrapper Objects and the list of wrapper objects are String,Number,Boolean,Symbol and BigInt.

     **[⬆ Back to Top](#table-of-contents)**

384. ### What is AJAX

     AJAX stands for Asynchronous JavaScript and XML and it is a group of related technologies(HTML, CSS, JavaScript, XMLHttpRequest API etc) used to display data asynchronously. i.e. We can send data to the server and get data from the server without reloading the web page.

     **[⬆ Back to Top](#table-of-contents)**

385. ### What are the different ways to deal with Asynchronous Code

     Below are the list of different ways to deal with Asynchronous code.

     1. Callbacks
     2. Promises
     3. Async/await
     4. Third-party libraries such as async.js,bluebird etc

     **[⬆ Back to Top](#table-of-contents)**

386. ### How to cancel a fetch request

     Until a few days back, One shortcoming of native promises is no direct way to cancel a fetch request. But the new `AbortController` from js specification allows you to use a signal to abort one or multiple fetch calls.
     The basic flow of cancelling a fetch request would be as below,

     1. Create an `AbortController` instance
     2. Get the signal property of an instance and pass the signal as a fetch option for signal
     3. Call the AbortController's abort property to cancel all fetches that use that signal
        For example, passing the same signal to multiple fetch calls will cancel all requests with that signal,

     ```javascript
     const controller = new AbortController();
     const { signal } = controller;

     fetch("http://localhost:8000", { signal })
       .then((response) => {
         console.log(`Request 1 is complete!`);
       })
       .catch((e) => {
         if (e.name === "AbortError") {
           // We know it's been canceled!
         }
       });

     fetch("http://localhost:8000", { signal })
       .then((response) => {
         console.log(`Request 2 is complete!`);
       })
       .catch((e) => {
         if (e.name === "AbortError") {
           // We know it's been canceled!
         }
       });

     // Wait 2 seconds to abort both requests
     setTimeout(() => controller.abort(), 2000);
     ```

     **[⬆ Back to Top](#table-of-contents)**

387. ### What is web speech API

     Web speech API is used to enable modern browsers recognize and synthesize speech(i.e, voice data into web apps). This API was introduced by W3C Community in the year 2012. It has two main parts:

     1. **SpeechRecognition (Asynchronous Speech Recognition or Speech-to-Text):** It provides the ability to recognize voice context from an audio input and respond accordingly. This is accessed by the `SpeechRecognition` interface.
        The example below shows how to use this API to get text from speech,

     ```javascript
     window.SpeechRecognition =
       window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
     const recognition = new window.SpeechRecognition();
     recognition.onresult = (event) => {
       // SpeechRecognitionEvent type
       const speechToText = event.results[0][0].transcript;
       console.log(speechToText);
     };
     recognition.start();
     ```

     In this API, browser is going to ask you for permission to use your microphone

     2. **SpeechSynthesis (Text-to-Speech):** It provides the ability to recognize voice context from an audio input and respond. This is accessed by the `SpeechSynthesis` interface.
        For example, the below code is used to get voice/speech from text,

     ```javascript
     if ("speechSynthesis" in window) {
       var speech = new SpeechSynthesisUtterance("Hello World!");
       speech.lang = "en-US";
       window.speechSynthesis.speak(speech);
     }
     ```

     The above examples can be tested on chrome(33+) browser's developer console.
     **Note:** This API is still a working draft and only available in Chrome and Firefox browsers(ofcourse Chrome only implemented the specification)

     **[⬆ Back to Top](#table-of-contents)**

388. ### What is minimum timeout throttling

     Both browser and NodeJS javascript environments throttles with a minimum delay that is greater than 0ms. That means even though setting a delay of 0ms will not happen instantaneously.
     **Browsers:** They have a minimum delay of 4ms. This throttle occurs when successive calls are triggered due to callback nesting(certain depth) or after a certain number of successive intervals.
     Note: The older browsers have a minimum delay of 10ms.
     **Nodejs:** They have a minimum delay of 1ms. This throttle happens when the delay is larger than 2147483647 or less than 1.
     The best example to explain this timeout throttling behavior is the order of below code snippet.

     ```javascript
     function runMeFirst() {
       console.log("My script is initialized");
     }
     setTimeout(runMeFirst, 0);
     console.log("Script loaded");
     ```

     and the output would be in

     ```cmd
     Script loaded
     My script is initialized
     ```

     If you don't use `setTimeout`, the order of logs will be sequential.

     ```javascript
     function runMeFirst() {
       console.log("My script is initialized");
     }
     runMeFirst();
     console.log("Script loaded");
     ```

     and the output is,

     ```cmd
     My script is initialized
     Script loaded
     ```

     **[⬆ Back to Top](#table-of-contents)**

389. ### How do you implement zero timeout in modern browsers

     You can't use setTimeout(fn, 0) to execute the code immediately due to minimum delay of greater than 0ms. But you can use window.postMessage() to achieve this behavior.

     **[⬆ Back to Top](#table-of-contents)**

390. ### What are tasks in event loop

     A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue.
     Below are the list of use cases to add tasks to the task queue,

     1. When a new javascript program is executed directly from console or running by the `<script>` element, the task will be added to the task queue.
     2. When an event fires, the event callback added to task queue
     3. When a setTimeout or setInterval is reached, the corresponding callback added to task queue

     **[⬆ Back to Top](#table-of-contents)**

391. ### What is microtask
     
     A microtask is a type of JavaScript callback that is scheduled to run immediately after the currently executing script and before the next event loop tick. Microtasks are executed after the current task completes and before any new tasks (macrotasks) are run. This ensures a fast and predictable update cycle.

     Common sources of microtasks stored in the microtask queue include:

     1. **Promises:**
        When a Promise is resolved or rejected, its `.then()`, `.catch()`, and `.finally()` callbacks are placed in the microtask queue.

        ```javascript
        Promise.resolve().then(() => {
         console.log('Microtask from a Promise');
        });
        ```

      2. **queueMicrotask():**
     
         A method that explicitly schedules a function to be run in the microtask queue.

         ```javascript
          queueMicrotask(() => {
             console.log('Microtask from  queueMicrotask');
           });
         ```

      3. **MutationObserver callbacks:**

         Observers changes in the DOM and triggers a callback as a microtask.

         ```javascript
            const observer = new MutationObserver(() => {
              console.log('Microtask from MutationObserver');
            })
            observer.observe(document.body, {childList: true});
         ```

      4. **await:**  
         Await internally uses Promises, so the code after `await` is scheduled as a microtask.

         ```javascript
          async function asyncFunction() {
            await null;
            console.log('Microtask from Await'); // Schedule this code as microtask
          }
         ```
     **Note:** All of these microtasks are processed in the same turn of the event loop.

     **[⬆ Back to Top](#table-of-contents)**

392. ### What are different event loops

     In JavaScript, there are multiple event loops that can be used depending on the context of your application. The most common event loops are:

     1. The Browser Event Loop
     2. The Node.js Event Loop

- Browser Event Loop: The Browser Event Loop is used in client-side JavaScript applications and is responsible for handling events that occur within the browser environment, such as user interactions (clicks, keypresses, etc.), HTTP requests, and other asynchronous actions.

- The Node.js Event Loop is used in server-side JavaScript applications and is responsible for handling events that occur within the Node.js runtime environment, such as file I/O, network I/O, and other asynchronous actions.

  **[⬆ Back to Top](#table-of-contents)**

393. ### What is the purpose of queueMicrotask

     The `queueMicrotask` function is used to schedule a microtask, which is a function that will be executed asynchronously in the microtask queue. The purpose of `queueMicrotask` is to ensure that a function is executed after the current task has finished, but before the browser performs any rendering or handles user events.

     Example:

     ```javascript
     console.log("Start"); //1

     queueMicrotask(() => {
       console.log("Inside microtask"); // 3
     });

     console.log("End"); //2
     ```

     By using queueMicrotask, you can ensure that certain tasks or callbacks are executed at the earliest opportunity during the JavaScript event loop, making it useful for performing work that needs to be done asynchronously but with higher priority than regular `setTimeout` or `setInterval` callbacks.

     **[⬆ Back to Top](#table-of-contents)**

394. ### How do you use javascript libraries in typescript file

     It is known that not all JavaScript libraries or frameworks have TypeScript declaration files. But if you still want to use libraries or frameworks in your TypeScript files without getting compilation errors, the only solution is `declare` keyword along with a variable declaration. For example, let's imagine you have a library called `customLibrary` that doesn’t have a TypeScript declaration and have a namespace called `customLibrary` in the global namespace. You can use this library in typescript code as below,

     ```javascript
     declare var customLibrary;
     ```

     In the runtime, typescript will provide the type to the `customLibrary` variable as `any` type. The another alternative without using declare keyword is below

     ```javascript
     var customLibrary: any;
     ```

     **[⬆ Back to Top](#table-of-contents)**

395. ### What are the differences between promises and observables

     Some of the major difference in a tabular form

     | Promises                                                           | Observables                                                                              |
     | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
     | Emits only a single value at a time                                | Emits multiple values over a period of time(stream of values ranging from 0 to multiple) |
     | Eager in nature; they are going to be called immediately           | Lazy in nature; they require subscription to be invoked                                  |
     | Promise is always asynchronous even though it resolved immediately | Observable can be either synchronous or asynchronous                                     |
     | Doesn't provide any operators                                      | Provides operators such as map, forEach, filter, reduce, retry, and retryWhen etc        |
     | Cannot be canceled                                                 | Canceled by using unsubscribe() method                                                   |

     **[⬆ Back to Top](#table-of-contents)**

396. ### What is heap

     Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime.
     Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

     ![Screenshot](images/heap.png)

     **[⬆ Back to Top](#table-of-contents)**

397. ### What is an event table

     Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests. i.e Whenever you call a setTimeout function or invoke async operation, it is added to the Event Table.
     It doesn't not execute functions on it’s own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.

     ![Screenshot](images/event-table.png)

     **[⬆ Back to Top](#table-of-contents)**

398. ### What is a microTask queue

     Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue.
     The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.

     **[⬆ Back to Top](#table-of-contents)**

399. ### What is the difference between shim and polyfill

     A shim is a library that brings a new API to an older environment, using only the means of that environment. It isn't necessarily restricted to a web application. For example, es5-shim.js is used to emulate ES5 features on older browsers (mainly pre IE9).
     Whereas polyfill is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.
     In a simple sentence, a polyfill is a shim for a browser API.

     **[⬆ Back to Top](#table-of-contents)**

400. ### How do you detect primitive or non primitive value type

     In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined. Whereas non-primitive types include the Objects. But you can easily identify them with the below function,

     ```javascript
     var myPrimitive = 30;
     var myNonPrimitive = {};
     function isPrimitive(val) {
       return Object(val) !== val;
     }

     isPrimitive(myPrimitive);
     isPrimitive(myNonPrimitive);
     ```

     If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.

     **[⬆ Back to Top](#table-of-contents)**

401. ### What is babel

     Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Some of the main features are listed below,

     1. Transform syntax
     2. Polyfill features that are missing in your target environment (using @babel/polyfill)
     3. Source code transformations (or codemods)

     **[⬆ Back to Top](#table-of-contents)**

402. ### Is Node.js completely single threaded

     Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

     **[⬆ Back to Top](#table-of-contents)**

403. ### What are the common use cases of observables

     Some of the most common use cases of observables are web sockets with push notifications, user input changes, repeating intervals, etc

     **[⬆ Back to Top](#table-of-contents)**

404. ### What is RxJS

     RxJS (Reactive Extensions for JavaScript) is a library for implementing reactive programming using observables that makes it easier to compose asynchronous or callback-based code. It also provides utility functions for creating and working with observables.

     **[⬆ Back to Top](#table-of-contents)**

405. ### What is the difference between Function constructor and function declaration

     The functions which are created with `Function constructor` do not create closures to their creation contexts but they are always created in the global scope. i.e, the function can access its own local variables and global scope variables only. Whereas function declarations can access outer function variables(closures) too.

     Let's see this difference with an example,

     **Function Constructor:**

     ```javascript
     var a = 100;
     function createFunction() {
       var a = 200;
       return new Function("return a;");
     }
     console.log(createFunction()()); // 100
     ```

     **Function declaration:**

     ```javascript
     var a = 100;
     function createFunction() {
       var a = 200;
       return function func() {
         return a;
       };
     }
     console.log(createFunction()()); // 200
     ```

     **[⬆ Back to Top](#table-of-contents)**

406. ### What is a Short circuit condition

     Short circuit conditions are meant for condensed way of writing simple if statements. Let's demonstrate the scenario using an example. If you would like to login to a portal with an authentication condition, the expression would be as below,

     ```javascript
     if (authenticate) {
       loginToPorta();
     }
     ```

     Since the javascript logical operators evaluated from left to right, the above expression can be simplified using && logical operator

     ```javascript
     authenticate && loginToPorta();
     ```

     **[⬆ Back to Top](#table-of-contents)**

407. ### What is the easiest way to resize an array

     The length property of an array is useful to resize or empty an array quickly. Let's apply length property on number array to resize the number of elements from 5 to 2,

     ```javascript
     var array = [1, 2, 3, 4, 5];
     console.log(array.length); // 5

     array.length = 2;
     console.log(array.length); // 2
     console.log(array); // [1,2]
     ```

     and the array can be emptied too

     ```javascript
     var array = [1, 2, 3, 4, 5];
     array.length = 0;
     console.log(array.length); // 0
     console.log(array); // []
     ```

     **[⬆ Back to Top](#table-of-contents)**

408. ### What is an observable

     An Observable is basically a function that can return a stream of values either synchronously or asynchronously to an observer over time. The consumer can get the value by calling `subscribe()` method.
     Let's look at a simple example of an Observable

     ```javascript
     import { Observable } from "rxjs";

     const observable = new Observable((observer) => {
       setTimeout(() => {
         observer.next("Message from a Observable!");
       }, 3000);
     });

     observable.subscribe((value) => console.log(value));
     ```

     ![Screenshot](images/observables.png)

     **Note:** Observables are not part of the JavaScript language yet but they are being proposed to be added to the language

     **[⬆ Back to Top](#table-of-contents)**

409. ### What is the difference between function and class declarations

     The main difference between function declarations and class declarations is `hoisting`. The function declarations are hoisted but not class declarations.

     **Classes:**

     ```javascript
     const user = new User(); // ReferenceError

     class User {}
     ```

     **Constructor Function:**

     ```javascript
     const user = new User(); // No error

     function User() {}
     ```

     **[⬆ Back to Top](#table-of-contents)**

410. ### What is an async function

     An async function is a function declared with the `async` keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains. These functions can contain zero or more `await` expressions.

     Let's take a below async function example,

     ```javascript
     async function logger() {
       let data = await fetch("http://someapi.com/users"); // pause until fetch returns
       console.log(data);
     }
     logger();
     ```

     It is basically syntax sugar over ES2015 promises and generators.

     **[⬆ Back to Top](#table-of-contents)**

411. ### How do you prevent promises swallowing errors

     While using asynchronous code, JavaScript’s ES6 promises can make your life a lot easier without having callback pyramids and error handling on every second line. But Promises have some pitfalls and the biggest one is swallowing errors by default.

     Let's say you expect to print an error to the console for all the below cases,

     ```javascript
     Promise.resolve("promised value").then(function () {
       throw new Error("error");
     });

     Promise.reject("error value").catch(function () {
       throw new Error("error");
     });

     new Promise(function (resolve, reject) {
       throw new Error("error");
     });
     ```

     But there are many modern JavaScript environments that won't print any errors. You can fix this problem in different ways,

     1. **Add catch block at the end of each chain:** You can add catch block to the end of each of your promise chains

        ```javascript
        Promise.resolve("promised value")
          .then(function () {
            throw new Error("error");
          })
          .catch(function (error) {
            console.error(error.stack);
          });
        ```

        But it is quite difficult to type for each promise chain and verbose too.

     2. **Add done method:** You can replace first solution's then and catch blocks with done method

        ```javascript
        Promise.resolve("promised value").done(function () {
          throw new Error("error");
        });
        ```

        Let's say you want to fetch data using HTTP and later perform processing on the resulting data asynchronously. You can write `done` block as below,

        ```javascript
        getDataFromHttp()
          .then(function (result) {
            return processDataAsync(result);
          })
          .done(function (processed) {
            displayData(processed);
          });
        ```

        In future, if the processing library API changed to synchronous then you can remove `done` block as below,

        ```javascript
        getDataFromHttp().then(function (result) {
          return displayData(processDataAsync(result));
        });
        ```

        and then you forgot to add `done` block to `then` block leads to silent errors.

     3. **Extend ES6 Promises by Bluebird:**
        Bluebird extends the ES6 Promises API to avoid the issue in the second solution. This library has a “default” onRejection handler which will print all errors from rejected Promises to stderr. After installation, you can process unhandled rejections

        ```javascript
        Promise.onPossiblyUnhandledRejection(function (error) {
          throw error;
        });
        ```

        and discard a rejection, just handle it with an empty catch

        ```javascript
        Promise.reject("error value").catch(function () {});
        ```

     **[⬆ Back to Top](#table-of-contents)**

412. ### What is deno

     Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 JavaScript engine and the Rust programming language. It solves the inherent problems of Node.Js and has been officially released in May 2018. Unlike Node.JS, by default Deno executes the code in a sandbox, which means that runtime has no access to below areas:

     1. The file system
     2. The network
     3. Execution of other scripts
     4. The environment variables

     **[⬆ Back to Top](#table-of-contents)**

413. ### How do you make an object iterable in javascript

     By default, plain objects are not iterable. But you can make the object iterable by defining a `Symbol.iterator` property on it.

     Let's demonstrate this with an example,

     ```javascript
     const collection = {
       one: 1,
       two: 2,
       three: 3,
       [Symbol.iterator]() {
         const values = Object.keys(this);
         let i = 0;
         return {
           next: () => {
             return {
               value: this[values[i++]],
               done: i > values.length,
             };
           },
         };
       },
     };

     const iterator = collection[Symbol.iterator]();

     console.log(iterator.next()); // → {value: 1, done: false}
     console.log(iterator.next()); // → {value: 2, done: false}
     console.log(iterator.next()); // → {value: 3, done: false}
     console.log(iterator.next()); // → {value: undefined, done: true}
     ```

     The above process can be simplified using a generator function,

     ```javascript
     const collection = {
       one: 1,
       two: 2,
       three: 3,
       [Symbol.iterator]: function* () {
         for (let key in this) {
           yield this[key];
         }
       },
     };
     const iterator = collection[Symbol.iterator]();
     console.log(iterator.next()); // {value: 1, done: false}
     console.log(iterator.next()); // {value: 2, done: false}
     console.log(iterator.next()); // {value: 3, done: false}
     console.log(iterator.next()); // {value: undefined, done: true}
     ```

     **[⬆ Back to Top](#table-of-contents)**

414. ### What is a Proper Tail Call

     First, we should know about tail call before talking about "Proper Tail Call". A tail call is a subroutine or function call performed as the final action of a calling function. Whereas **Proper tail call(PTC)** is a technique where the program or code will not create additional stack frames for a recursion when the function call is a tail call.

     For example, the below classic or head recursion of factorial function relies on stack for each step. Each step need to be processed upto `n * factorial(n - 1)`

     ```javascript
     function factorial(n) {
       if (n === 0) {
         return 1;
       }
       return n * factorial(n - 1);
     }
     console.log(factorial(5)); //120
     ```

     But if you use Tail recursion functions, they keep passing all the necessary data it needs down the recursion without relying on the stack.

     ```javascript
     function factorial(n, acc = 1) {
       if (n === 0) {
         return acc;
       }
       return factorial(n - 1, n * acc);
     }
     console.log(factorial(5)); //120
     ```

     The above pattern returns the same output as the first one. But the accumulator keeps track of total as an argument without using stack memory on recursive calls.

     **[⬆ Back to Top](#table-of-contents)**

415. ### How do you check an object is a promise or not

     If you don't know if a value is a promise or not, wrapping the value as `Promise.resolve(value)` which returns a promise

     ```javascript
     function isPromise(object) {
       if (Promise && Promise.resolve) {
         return Promise.resolve(object) == object;
       } else {
         throw "Promise not supported in your environment";
       }
     }

     var i = 1;
     var promise = new Promise(function (resolve, reject) {
       resolve();
     });

     console.log(isPromise(i)); // false
     console.log(isPromise(promise)); // true
     ```

     Another way is to check for `.then()` handler type

     ```javascript
     function isPromise(value) {
       return Boolean(value && typeof value.then === "function");
     }
     var i = 1;
     var promise = new Promise(function (resolve, reject) {
       resolve();
     });

     console.log(isPromise(i)); // false
     console.log(isPromise(promise)); // true
     ```

     **[⬆ Back to Top](#table-of-contents)**

416. ### How to detect if a function is called as constructor

     You can use `new.target` pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.

     1. If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.
     2. For function calls, new.target is undefined.

     ```javascript
     function Myfunc() {
       if (new.target) {
         console.log("called with new");
       } else {
         console.log("not called with new");
       }
     }

     new Myfunc(); // called with new
     Myfunc(); // not called with new
     Myfunc.call({}); // not called with new
     ```

     **[⬆ Back to Top](#table-of-contents)**

417. ### What are the differences between arguments object and rest parameter

     There are three main differences between arguments object and rest parameters

     1. The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
     2. The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
     3. The rest parameters are only the ones that haven’t been given a separate name, while the arguments object contains all arguments passed to the function

     **[⬆ Back to Top](#table-of-contents)**

418. ### What are the differences between spread operator and rest parameter

     Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. i.e, Rest parameter is opposite to the spread operator.

     **[⬆ Back to Top](#table-of-contents)**

419. ### What are the different kinds of generators

     There are five kinds of generators,

     1. **Generator function declaration:**

        ```javascript
        function* myGenFunc() {
          yield 1;
          yield 2;
          yield 3;
        }
        const genObj = myGenFunc();
        ```

     2. **Generator function expressions:**

        ```javascript
        const myGenFunc = function* () {
          yield 1;
          yield 2;
          yield 3;
        };
        const genObj = myGenFunc();
        ```

     3. **Generator method definitions in object literals:**

        ```javascript
        const myObj = {
          *myGeneratorMethod() {
            yield 1;
            yield 2;
            yield 3;
          },
        };
        const genObj = myObj.myGeneratorMethod();
        ```

     4. **Generator method definitions in class:**

        ```javascript
        class MyClass {
          *myGeneratorMethod() {
            yield 1;
            yield 2;
            yield 3;
          }
        }
        const myObject = new MyClass();
        const genObj = myObject.myGeneratorMethod();
        ```

     5. **Generator as a computed property:**

        ```javascript
        const SomeObj = {
          *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
          },
        };

        console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]
        ```

     **[⬆ Back to Top](#table-of-contents)**

420. ### What are the built-in iterables

     Below are the list of built-in iterables in javascript,

     1. Arrays and TypedArrays
     2. Strings: Iterate over each character or Unicode code-points
     3. Maps: iterate over its key-value pairs
     4. Sets: iterates over their elements
     5. arguments: An array-like special variable in functions
     6. DOM collection such as NodeList

     **[⬆ Back to Top](#table-of-contents)**

421. ### What are the differences between for...of and for...in statements

     Both for...in and for...of statements iterate over js data structures. The only difference is over what they iterate:

     1. for..in iterates over all enumerable property keys of an object
     2. for..of iterates over the values of an iterable object.

     Let's explain this difference with an example,

     ```javascript
     let arr = ["a", "b", "c"];

     arr.newProp = "newVlue";

     // key are the property keys
     for (let key in arr) {
       console.log(key); // 0, 1, 2 & newProp
     }

     // value are the property values
     for (let value of arr) {
       console.log(value); // a, b, c
     }
     ```

     Since for..in loop iterates over the keys of the object, the first loop logs 0, 1, 2 and newProp while iterating over the array object. The for..of loop iterates over the values of a arr data structure and logs a, b, c in the console.

     **[⬆ Back to Top](#table-of-contents)**

422. ### How do you define instance and non-instance properties

     The Instance properties must be defined inside of class methods. For example, name and age properties defined inside constructor as below,

     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
     }
     ```

     But Static(class) and prototype data properties must be defined outside of the ClassBody declaration. Let's assign the age value for Person class as below,

     ```javascript
     Person.staticAge = 30;
     Person.prototype.prototypeAge = 40;
     ```

     **[⬆ Back to Top](#table-of-contents)**

423. ### What is the difference between isNaN and Number.isNaN?

     1. **isNaN**: The global function `isNaN` converts the argument to a Number and returns true if the resulting value is NaN.
     2. **Number.isNaN**: This method does not convert the argument. But it returns true when the type is a Number and value is NaN.

     Let's see the difference with an example,

     ```javascript
     isNaN(‘hello’);   // true
     Number.isNaN('hello'); // false
     ```

     **[⬆ Back to Top](#table-of-contents)**

424. ### How to invoke an IIFE without any extra brackets?

     Immediately Invoked Function Expressions(IIFE) requires a pair of parenthesis to wrap the function which contains set of statements.

     ```js
     (function (dt) {
       console.log(dt.toLocaleTimeString());
     })(new Date());
     ```

     Since both IIFE and void operator discard the result of an expression, you can avoid the extra brackets using `void operator` for IIFE as below,

     ```js
     void (function (dt) {
       console.log(dt.toLocaleTimeString());
     })(new Date());
     ```

     **[⬆ Back to Top](#table-of-contents)**

425. ### Is that possible to use expressions in switch cases?

     You might have seen expressions used in switch condition but it is also possible to use for switch cases by assigning true value for the switch condition. Let's see the weather condition based on temperature as an example,

     ```js
     const weather = (function getWeather(temp) {
       switch (true) {
         case temp < 0:
           return "freezing";
         case temp < 10:
           return "cold";
         case temp < 24:
           return "cool";
         default:
           return "unknown";
       }
     })(10);
     ```

     **[⬆ Back to Top](#table-of-contents)**

426. ### What is the easiest way to ignore promise errors?

     The easiest and safest way to ignore promise errors is void that error. This approach is ESLint friendly too.

     ```js
     await promise.catch((e) => void e);
     ```

     **[⬆ Back to Top](#table-of-contents)**

427. ### How do style the console output using CSS?

     You can add CSS styling to the console output using the CSS format content specifier %c. The console string message can be appended after the specifier and CSS style in another argument. Let's print the red color text using console.log and CSS specifier as below,

     ```js
     console.log("%cThis is a red text", "color:red");
     ```

     It is also possible to add more styles for the content. For example, the font-size can be modified for the above text

     ```js
     console.log(
       "%cThis is a red text with bigger font",
       "color:red; font-size:20px"
     );
     ```

     **[⬆ Back to Top](#table-of-contents)**

428. ### What is nullish coalescing operator (??)?

     It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.

     ```js
     console.log(null ?? true); // true
     console.log(false ?? true); // false
     console.log(undefined ?? true); // true
     ```

     **[⬆ Back to Top](#table-of-contents)**

429. ### How do you group and nest console output?

     The `console.group()` can be used to group related log messages to be able to easily read the logs and use console.groupEnd()to close the group. Along with this, you can also nest groups which allows to output message in hierarchical manner.

     For example, if you’re logging a user’s details:

     ```js
     console.group("User Details");
     console.log("name: Sudheer Jonna");
     console.log("job: Software Developer");

     // Nested Group
     console.group("Address");
     console.log("Street: Commonwealth");
     console.log("City: Los Angeles");
     console.log("State: California");

     // Close nested group
     console.groupEnd();

     // Close outer group
     console.groupEnd();
     ```

     You can also use `console.groupCollapsed()` instead of `console.group()` if you want the groups to be collapsed by default.

     **[⬆ Back to Top](#table-of-contents)**

430. ### What is the difference between dense and sparse arrays?

     An array contains items at each index starting from first(0) to last(array.length - 1) is called as Dense array. Whereas if at least one item is missing at any index, the array is called as sparse.

     Let's see the below two kind of arrays,

     ```js
     const avengers = ["Ironman", "Hulk", "CaptainAmerica"];
     console.log(avengers[0]); // 'Ironman'
     console.log(avengers[1]); // 'Hulk'
     console.log(avengers[2]); // 'CaptainAmerica'
     console.log(avengers.length); // 3

     const justiceLeague = ["Superman", "Aquaman", , "Batman"];
     console.log(justiceLeague[0]); // 'Superman'
     console.log(justiceLeague[1]); // 'Aquaman'
     console.log(justiceLeague[2]); // undefined
     console.log(justiceLeague[3]); // 'Batman'
     console.log(justiceLeague.length); // 4
     ```

     **[⬆ Back to Top](#table-of-contents)**

431. ### What are the different ways to create sparse arrays?

     There are 4 different ways to create sparse arrays in JavaScript

     1. **Array literal:** Omit a value when using the array literal
        ```js
        const justiceLeague = ["Superman", "Aquaman", , "Batman"];
        console.log(justiceLeague); // ['Superman', 'Aquaman', empty ,'Batman']
        ```
     2. **Array() constructor:** Invoking Array(length) or new Array(length)
        ```js
        const array = Array(3);
        console.log(array); // [empty, empty ,empty]
        ```
     3. **Delete operator:** Using delete array[index] operator on the array
        ```js
        const justiceLeague = ["Superman", "Aquaman", "Batman"];
        delete justiceLeague[1];
        console.log(justiceLeague); // ['Superman', empty, ,'Batman']
        ```
     4. **Increase length property:** Increasing length property of an array
        ```js
        const justiceLeague = ["Superman", "Aquaman", "Batman"];
        justiceLeague.length = 5;
        console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty]
        ```

     **[⬆ Back to Top](#table-of-contents)**

432. ### What is the difference between setTimeout, setImmediate and process.nextTick?

     1. **Set Timeout:** setTimeout() is to schedule execution of a one-time callback after delay milliseconds.
     2. **Set Immediate:** The setImmediate function is used to execute a function right after the current event loop finishes.
     3. **Process NextTick:** If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively.

     **[⬆ Back to Top](#table-of-contents)**

433. ### How do you reverse an array without modifying original array?

     The `reverse()` method reverses the order of the elements in an array but it mutates the original array. Let's take a simple example to demonistrate this case,

     ```javascript
     const originalArray = [1, 2, 3, 4, 5];
     const newArray = originalArray.reverse();

     console.log(newArray); // [ 5, 4, 3, 2, 1]
     console.log(originalArray); // [ 5, 4, 3, 2, 1]
     ```

     There are few solutions that won't mutate the original array. Let's take a look.

     1. **Using slice and reverse methods:**
        In this case, just invoke the `slice()` method on the array to create a shallow copy followed by `reverse()` method call on the copy.

        ```javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ```

     2. **Using spread and reverse methods:**
        In this case, let's use the spread syntax (...) to create a copy of the array followed by `reverse()` method call on the copy.

        ```javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = [...originalArray].reverse();

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ```

     3. **Using reduce and spread methods:**
        Here execute a reducer function on an array elements and append the accumulated array on right side using spread syntax

        ```javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.reduce((accumulator, value) => {
          return [value, ...accumulator];
        }, []);

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ```

     4. **Using reduceRight and spread methods:**
        Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and append the accumulated array on left side using spread syntax

        ```javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.reduceRight((accumulator, value) => {
          return [...accumulator, value];
        }, []);

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ```

     5. **Using reduceRight and push methods:**
        Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and push the iterated value to the accumulator

        ```javascript
        const originalArray = [1, 2, 3, 4, 5];
        const newArray = originalArray.reduceRight((accumulator, value) => {
          accumulator.push(value);
          return accumulator;
        }, []);

        console.log(originalArray); // [1, 2, 3, 4, 5]
        console.log(newArray); // [ 5, 4, 3, 2, 1]
        ```

     **[⬆ Back to Top](#table-of-contents)**

434. ### How do you create custom HTML element?

     The creation of custom HTML elements involves two main steps,

     1. **Define your custom HTML element:** First you need to define some custom class by extending HTMLElement class.
        After that define your component properties (styles,text etc) using `connectedCallback` method.
        **Note:** The browser exposes a function called `customElements.define` inorder to reuse the element.
        ```javascript
        class CustomElement extends HTMLElement {
          connectedCallback() {
            this.innerHTML = "This is a custom element";
          }
        }
        customElements.define("custom-element", CustomElement);
        ```
     2. **Use custom element just like other HTML element:** Declare your custom element as a HTML tag.

     ```javascript
        <body>
             <custom-element>
        </body>
     ```

     **[⬆ Back to Top](#table-of-contents)**

435. ### What is global execution context?

     The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the global code that is not inside a function or object will be executed inside this global execution context. Since JS engine is single threaded there will be only one global environment and there will be only one global execution context.

     For example, the below code other than code inside any function or object is executed inside the global execution context.

     ```javascript
     var x = 10;

     function A() {
       console.log("Start function A");

       function B() {
         console.log("In function B");
       }

       B();
     }

     A();

     console.log("GlobalContext");
     ```

     **[⬆ Back to Top](#table-of-contents)**

436. ### What is function execution context?

     Whenever a function is invoked, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the Global Execution Context (GEC) to evaluate and execute the code within that function.

     **[⬆ Back to Top](#table-of-contents)**

437. ### What is debouncing?

    Debouncing is a programming technique used to limit how often a function is executed. Specifically, it ensures that a function is only triggered after a certain amount of time has passed since it was last invoked. This prevents unnecessary or excessive function calls, which can help optimize performance and reduce unnecessary CPU usage or API requests.

    For example, when a user types in a search box, you typically want to wait until they’ve finished typing before fetching suggestions. Without debouncing, an API call would be triggered on every keystroke, potentially causing performance issues. With debouncing, the function call is postponed until the user stops typing for a specified period (e.g., 300ms). If the user types again before this time elapses, the timer resets.

    **Typical use cases for debouncing include:**

    *   Search box suggestions (wait until typing pauses before fetching results)
    *   Auto-saving text fields (save only after the user stops typing)
    *   Preventing double-clicks on buttons
    *   Handling window resize or scroll events efficiently

    **Example Debounce Function:**

    JavaScript

    ```css
    function debounce(func, timeout = 500) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }
    ```

    **Usage Example:**

    JavaScript

    ```css
    function fetchResults() {
      console.log("Fetching input suggestions");
    }
    const processChange = debounce(fetchResults, 300);

    // Attach to input element
    <input type="text" onkeyup="processChange()" />

    // Attach to button
    <button onclick="processChange()">Click me</button>

    // Attach to window event
    window.addEventListener("scroll", processChange);
    ```

    **How it works:**  
    When `processChange` is invoked (e.g., by typing or clicking), any pending execution is canceled, and the function is scheduled to run after the specified delay. If another event occurs before the delay is up, the timer resets, and the function will only run after events have stopped for the delay duration.

    Debouncing is an essential tool for improving user experience and application performance, especially when dealing with events that can fire rapidly and repeatedly.

 **[⬆ Back to Top](#table-of-contents)**

438. ### What is throttling?
      Throttling is a programming technique used to control the rate at which a function is executed. When an event is triggered continuously—such as during window resizing, scrolling, or mouse movement—throttling ensures that the associated event handler is not called more often than a specified interval. This helps improve performance by reducing the number of expensive function calls and preventing performance bottlenecks.

      **Common use cases:**

      *   Window resize events
      *   Scroll events
      *   Mouse movement or drag events
      *   API rate limiting

      **How does throttling work?**  
      Throttling will execute the function at most once every specified time interval, ignoring additional calls until the interval has passed.

      **Example: Throttle Implementation and Usage**

      JavaScript

      ```css
      // Simple throttle function: allows 'func' to run at most once every 'limit' ms
      function throttle(func, limit) {
        let inThrottle = false;
        return function(...args) {
          if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
          }
        };
      }

      // Usage: throttling a scroll event handler
      function handleScrollAnimation() {
        console.log('Scroll event triggered');
      }

      window.addEventListener(
        "scroll",
        throttle(handleScrollAnimation, 100) // Will run at most once every 100ms
      );
      ```
     **[⬆ Back to Top](#table-of-contents)**

439. ### What is optional chaining?

     According to MDN official docs, the optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

     The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

     ```js
     const adventurer = {
       name: "Alice",
       cat: {
         name: "Dinah",
       },
     };

     const dogName = adventurer.dog?.name;
     console.log(dogName);
     // expected output: undefined

     console.log(adventurer.someNonExistentMethod?.());
     // expected output: undefined
     ```

     **[⬆ Back to Top](#table-of-contents)**

440. ### What is an environment record?

     According to ECMAScript specification 262 (9.1):

     > [Environment Record](https://262.ecma-international.org/12.0/#sec-environment-records) is a specification type used to define the association of Identifiers to specific variables and functions, based upon the lexical nesting structure of ECMAScript code.

     Usually an Environment Record is associated with some specific syntactic structure of ECMAScript code such as a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement.

     Each time such code is evaluated, a new Environment Record is created to record the identifier bindings that are created by that code.

     **[⬆ Back to Top](#table-of-contents)**

441. ### How to verify if a variable is an array?

     It is possible to check if a variable is an array instance using 3 different ways,

     1. Array.isArray() method:

        The `Array.isArray(value)` utility function is used to determine whether value is an array or not. This function returns a true boolean value if the variable is an array and a false value if it is not.

        ```javascript
        const numbers = [1, 2, 3];
        const user = { name: "John" };
        Array.isArray(numbers); // true
        Array.isArray(user); //false
        ```

     2. instanceof operator:

        The instanceof operator is used to check the type of an array at run time. It returns true if the type of a variable is an Array other false for other type.

        ```javascript
        const numbers = [1, 2, 3];
        const user = { name: "John" };
        console.log(numbers instanceof Array); // true
        console.log(user instanceof Array); // false
        ```

     3. Checking constructor type:

        The constructor property of the variable is used to determine whether the variable Array type or not.

        ```javascript
        const numbers = [1, 2, 3];
        const user = { name: "John" };
        console.log(numbers.constructor === Array); // true
        console.log(user.constructor === Array); // false
        ```

     **[⬆ Back to Top](#table-of-contents)**

442. ### What is pass by value and pass by reference?

     Pass-by-value creates a new space in memory and makes a copy of a value. Primitives such as string, number, boolean etc will actually create a new copy. Hence, updating one value doesn't impact the other value. i.e, The values are independent of each other.

     ```javascript
     let a = 5;
     let b = a;

     b++;
     console.log(a, b); //5, 6
     ```

     In the above code snippet, the value of `a` is assigned to `b` and the variable `b` has been incremented. Since there is a new space created for variable `b`, any update on this variable doesn't impact the variable `a`.

     Pass by reference doesn't create a new space in memory but the new variable adopts a memory address of an initial variable. Non-primitives such as objects, arrays and functions gets the reference of the initiable variable. i.e, updating one value will impact the other variable.

     ```javascript
     let user1 = {
       name: "John",
       age: 27,
     };
     let user2 = user1;
     user2.age = 30;

     console.log(user1.age, user2.age); // 30, 30
     ```

     In the above code snippet, updating the `age` property of one object will impact the other property due to the same reference.

     **[⬆ Back to Top](#table-of-contents)**

443. ### What are the differences between primitives and non-primitives?

     JavaScript language has both primitives and non-primitives but there are few differences between them as below,

     | Primitives                 | Non-primitives       |
     | -------------------------- | -------------------- |
     | These types are predefined | Created by developer |
     | These are immutable        | Mutable              |
     | Compare by value           | Compare by reference |
     | Stored in Stack            | Stored in heap       |
     | Contain certain value      | Can contain NULL too |

     **[⬆ Back to Top](#table-of-contents)**

444. ### How do you create your own bind method using either call or apply method?

     The custom bind function needs to be created on Function prototype inorder to use it as other builtin functions. This custom function should return a function similar to original bind method and the implementation of inner function needs to use apply method call.

     The function which is going to bind using custom `myOwnBind` method act as the attached function(`boundTargetFunction`) and argument as the object for `apply` method call.

     ```js
     Function.prototype.myOwnBind = function (whoIsCallingMe) {
       if (typeof this !== "function") {
         throw new Error(this + "cannot be bound as it's not callable");
       }
       const boundTargetFunction = this;
       return function () {
         boundTargetFunction.apply(whoIsCallingMe, arguments);
       };
     };
     ```

     **[⬆ Back to Top](#table-of-contents)**

445. ### What are the differences between pure and impure functions?

     Some of the major differences between pure and impure function are as below,

| Pure function                       | Impure function                                                        |
| ----------------------------------- | ---------------------------------------------------------------------- |
| It has no side effects              | It causes side effects                                                 |
| It is always return the same result | It returns different result on each call                               |
| Easy to read and debug              | Difficult to read and debug because they are affected by external code |

**[⬆ Back to Top](#table-of-contents)**

446. ### What is referential transparency?

An expression in javascript that can be replaced by its value without affecting the behaviour of the program is called referential transparency. Pure functions are referentially transparent.

```javascript
const add = (x, y) => x + y;
const multiplyBy2 = (x) => x * 2;

//Now add (2, 3) can be replaced by 5.

multiplyBy2(add(2, 3));
```

**[⬆ Back to Top](#table-of-contents)**

447. ### What are the possible side-effects in javascript?

     A side effect is the modification of the state through the invocation of a function or expression. These side effects make our function impure by default. Below are some side effects which make function impure,

- Making an HTTP request. Asynchronous functions such as fetch and promise are impure.
- DOM manipulations
- Mutating the input data
- Printing to a screen or console: For example, console.log() and alert()
- Fetching the current time
- Math.random() calls: Modifies the internal state of Math object

**[⬆ Back to Top](#table-of-contents)**

448. ### What are compose and pipe functions?

     The "compose" and "pipe" are two techniques commonly used in functional programming to simplify complex operations and make code more readable. They are not native to JavaScript and higher-order functions. the `compose()` applies right to left any number of functions to the output of the previous function.

     **[⬆ Back to Top](#table-of-contents)**

449. ### What is module pattern?

     Module pattern is a designed pattern used to wrap a set of variables and functions together in a single scope returned as an object. JavaScript doesn't have access specifiers similar to other languages(Java, Python, etc) to provide private scope. It uses IIFE (Immediately invoked function expression) to allow for private scopes. i.e., a closure that protect variables and methods.

     The module pattern looks like below,

     ```javascript
     (function () {
       // Private variables or functions goes here.

       return {
         // Return public variables or functions here.
       };
     })();
     ```

     Let's see an example of a module pattern for an employee with private and public access,

     ```javascript
     const createEmployee = (function () {
       // Private
       const name = "John";
       const department = "Sales";
       const getEmployeeName = () => name;
       const getDepartmentName = () => department;

       // Public
       return {
         name,
         department,
         getName: () => getEmployeeName(),
         getDepartment: () => getDepartmentName(),
       };
     })();

     console.log(createEmployee.name);
     console.log(createEmployee.department);
     console.log(createEmployee.getName());
     console.log(createEmployee.getDepartment());
     ```

     **Note:** It mimic the concepts of classes with private variables and methods.

     **[⬆ Back to Top](#table-of-contents)**

450. ### What is Function Composition?

     It is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result.

     ```javascript
     //example
     const double = (x) => x * 2;
     const square = (x) => x * x;

     var output1 = double(2);
     var output2 = square(output1);
     console.log(output2);

     var output_final = square(double(2));
     console.log(output_final);
     ```

     **[⬆ Back to Top](#table-of-contents)**

451. ### How to use await outside of async function prior to ES2022?

     Prior to ES2022, if you attempted to use an await outside of an async function resulted in a SyntaxError.

     ```javascript
     await Promise.resolve(console.log("Hello await")); // SyntaxError: await is only valid in async function
     ```

     But you can fix this issue with an alternative IIFE (Immediately Invoked Function Expression) to get access to the feature.

     ```javascript
     (async function () {
       await Promise.resolve(console.log("Hello await")); // Hello await
     })();
     ```

     In ES2022, you can write top-level await without writing any hacks.

     ```javascript
     await Promise.resolve(console.log("Hello await")); //Hello await
     ```

**[⬆ Back to Top](#table-of-contents)**

452. ### What is the purpose of the this keyword in JavaScript?
The `this` keyword in JavaScript refers to **the object that is executing the current function**. Its value is determined by **how a function is called**, not where it is defined.  `this` is essential for writing object-oriented and event-driven code, as it allows methods to interact with the data of the object they belong to.


  **Example 1: this in a Global Context**

  ```javascript
  console.log(this);
  ```

  - In a global context, this refers to the global object (e.g., window in a browser).

  **Example 2: this in a Function**

  ```javascript
  function displayThis() {
    console.log(this);
  }

  displayThis();
  ```

  - In a regular function, this refers to the global object(window in browser and global in nodejs) for non-strict mode.  In strict mode, it's value is undefined.

  **Example 3: this in a Method**

  ```javascript
  const person = {
    name: "John",
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };

  person.greet();
  ```

  - In a method, this refers to the object that owns the method (person in the case).

  **Example 4: this in an Event Handler**

  ```javascript
   document.getElementById("myButton").addEventListener("click", function () {
            console.log(this);
   });
  ```

  - In an event handler, this refers to the element that triggered the event (the button in this case).

  **Example 5: `this` with Arrow Functions**

  ```javascript
        const obj = {
          age: 42,
          regular: function() { console.log(this.age); },
          arrow: () => { console.log(this.age); }
        };
        obj.regular(); // 42 (this refers to obj)
        obj.arrow();   // undefined (this refers to the outer scope, not obj)
  ```
  - Arrow functions do not have their own `this` binding; they inherit it from their surrounding (lexical) context.

  **Example 6: this in Constructor Functions / Classes**
    
  ```javascript
    function Person(name) {
      this.name = name;
    }
    
    const p1 = new Person('Sudheer');
    console.log(p1.name); // Sudheer
  ```
   - When used with new, this refers to the newly created object.

**[⬆ Back to Top](#table-of-contents)**

453. ### What are the uses of closures?
     Closures are a powerful feature in programming languages like JavaScript. They allow functions to retain access to variables from their containing (enclosing) scope even after the outer function has finished executing. This means that a function defined within another function can access variables from the outer function, even if the outer function has already returned.
     Here are some common use cases of closures:

- Data Privacy: Closures can be used to create private variables and methods. By defining variables within a function's scope and returning inner functions that have access to those variables, you can create a form of encapsulation, limiting access to certain data or functionality.

- Function Factories: Closures are often used to create functions with pre-set parameters. This is useful when you need to create multiple functions with similar behavior but different configurations.

- Callback Functions: Closures are frequently used in asynchronous programming, such as handling event listeners or AJAX requests. The inner function captures variables from the outer scope and can access them when the callback is invoked.

- Memoization: Closures can be used for memoization, a technique to optimize performance by caching the results of expensive function calls. The inner function can remember the results of previous calls and return the cached result if the same input is provided again.

- iterators and Generators: Closures can be used to create iterators and generators, which are essential for working with collections of data in modern JavaScript.

**[⬆ Back to Top](#table-of-contents)**

454. ### What are the phases of execution context?
     The execution context in JavaScript is a data structure that stores the information necessary for executing a piece of code. It includes the code itself, the values of the variables used in the code, and the scope chain. The scope chain is a list of objects that are used to resolve variable names.

The execution context has two phases:

- Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. This includes creating the variable object and the scope chain.
- Execution phase: In this phase, the JavaScript engine executes the code in the execution context. This includes evaluating expressions, assigning values to variables, and calling functions.

The execution context is created when a function is called. The function's code is then executed in the execution context. When the function returns, the execution context is destroyed.

**[⬆ Back to Top](#table-of-contents)**

455. ### What are the possible reasons for memory leaks?

     Memory leaks can lead to poor performance, slow loading times and even crashes in web applications. Some of the common causes of memory leaks are listed below,

     1. The execessive usage of global variables or omitting the `var` keyword in local scope.
     2. Forgetting to clear the timers set up by `setTimeout` or `setInterval`.
     3. Closures retain references to variables from their parent scope, which leads to variables might not garbage collected even they are no longer used.

456. ### What are the optimization techniques of V8 engine?

     V8 engine uses the below optimization techniques.

     1. **Inline expansion:** It is a compiler optimization by replacing the function calls with the corresponding function blocks.
     2. **Copy elision:** This is a compiler optimization method to prevent expensive extra objects from being duplicated or copied.
     3. **Inline caching:** It is a runtime optimization technique where it caches the execution of older tasks those can be lookup while executing the same task in the future.

     **[⬆ Back to Top](#table-of-contents)**

457. ### What are the examples of built-in higher order functions?

     There are several built-in higher order functions exists on arrays, strings, DOM and promise methods in javascript. These higher order functions provides significant level of abstraction. The list of functions on these categories are listed below,

     1. **arrays:** map, filter, reduce, sort, forEach, some etc.
     2. **DOM**: The DOM method `element.addEventListener(type, handler)` also accepts the function handler as a second argument.
     3. **Strings:** replace() method.

     **[⬆ Back to Top](#table-of-contents)**

458. ### What are the benefits higher order functions?
     The main benefits of higher order functions are:
     1. Abstraction
     2. Reusability
     3. Immutability
     4. Modularity

**[⬆ Back to Top](#table-of-contents)**

459. ### How do you create polyfills for map, filter and reduce methods?

The polyfills for array methods such as map, filter and reduce methods can be created using array prototype.

1.  **map:**

    The built-in `Array.map` method syntax will be helpful to write polyfill. The map method takes the callback function as an argument and that callback function can have below three arguments passed into it.

    i. Current value
    ii. Index of current value(optional)
    iii. array(optional)

    The syntax would like below,

    ```js
    let newArray = arr.map(callback(currentValue[, index, arr) {
       // return new array after executing the code
    })
    ```

    Let's build our map polyfill based on the above syntax,

    ```js
    Array.prototype.myMap = function (cb) {
      let newArr = [];
      for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
      }
      return newArr;
    };

    const nums = [1, 2, 3, 4, 5];
    const multiplyByTwo = nums.myMap((x) => x * 2);
    console.log(multiplyByTwo); // [2, 4, 6, 8, 10]
    ```

    In the above code, custom method name 'myMap' has been used to avoid conflicts with built-in method.

2.  **filter:**
    Similar to map method, `Array.filter` method takes callback function as an argument and the callback function can have three agurguments passed into it.

        i. Current value
        ii. Index of current value(optional)
        iii. array(optional)

    The syntax looks like below,

    ```js
    let newArray = arr.filter(callback(currentValue[, index, arr) {
      // return new array whose elements satisfy the callback conditions
    })
    ```

    Let's build our filter polyfill based on the above syntax,

    ```js
    Array.prototype.myFilter = function (cb) {
      let newArr = [];
      for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
          newArr.push(this[i]);
        }
      }
      return newArr;
    };

    const nums = [1, 2, 3, 4, 5, 6];
    const evenNums = nums.myFilter((x) => x % 2);
    console.log(evenNums); // [2, 4, 6]
    ```

3.  **reduce:**

          The built-in `Array.reduce` method syntax will be helpful to write our own polyfill. The reduce method takes the callback function as first argument and the initial value as second argument.

          The callback function can have four arguments passed into it.
          i. Accumulator
          ii. Current value
          iii. Index of current value(optional)
          iv. array(optional)

        The syntax would like below,

        ```js
        arr.reduce(callback((acc, curr, i, arr) => {}), initValue);
        ```
        Let's build our reduce polyfill based on the above syntax,

        ```js
        Array.prototype.myReduce = function(cb, initialValue) {
            let accumulator = initialValue;
            for(let i=0; i< this.length; i++) {
                accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
            }
            return accumulator;
        }
          const nums = [1, 2, 3, 4, 5, 6];
          const sum = nums.myReduce((acc, curr, i, arr) => {
            return acc += curr
          }, 0);
          console.log(sum); // 21
        ```

    **[⬆ Back to Top](#table-of-contents)**

460. ### What is the difference between map and forEach functions?

    Both map and forEach functions are used to iterate over an arrays but there are some differences in their functionality.

    1. **Returning values:** The `map` method returns a new array with transformed elements whereas `forEach` method returns `undefined` even though both of them are doing the same job.

    ```javascript
      const arr = [1, 2, 3, 4, 5];
      arr.map(x => x * x); // [1, 4, 9, 16, 25]
      arr.forEach(x => x * x); //

      The `forEach()` method in JavaScript always returns undefined. This is because forEach() is used to iterate over arrays and perform side effects on each element, rather than returning a `new array or transforming the original array`
    ```

    2. **Chaining methods:** The `map` method is chainable. i.e, It can be attached with `reduce`, `filter`, `sort` and other methods as well. Whereas `forEach` cannot be attached with any other methods because it returns `undefined` value.

    ```javascript
    const arr = [1, 2, 3, 4, 5];
    arr.map((x) => x * x).reduce((total, cur) => total + cur); // 55
    arr.forEach((x) => x * x).reduce((total, cur) => total + cur); //Uncaught TypeError: Cannot read properties of undefine(reading 'reduce')
    ```

    3. **Mutation:** The `map` method doesn't mutate the original array by returning new array. Whereas `forEach` method also doesn't mutate the original array but it's callback is allowed to mutate the original array.

    **Note:** Both these methods existed since ES5 onwards.

**[⬆ Back to Top](#table-of-contents)**

461. ### Give an example of statements affected by automatic semicolon insertion?

     The javascript parser will automatically add a semicolon while parsing the source code. For example, the below common statements affected by Automatic Semicolon Insertion(ASI).

     1. An empty statement
     2. var statement
     3. An expression statement
     4. do-while statement
     5. continue statement
     6. break statement
     7. return statement
     8. throw statement

**[⬆ Back to Top](#table-of-contents)**

462. ### What are the event phases of a browser?

     There are 3 phases in the lifecycle of an event propagation in JavaScript,

     1. **Capturing phase:** This phase goes down gradually from the top of the DOM tree to the target element when a nested element clicked. Before the click event reaching the final destination element, the click event of each parent's element must be triggered.

     2. **Target phase:** This is the phase where the event originally occurred reached the target element .

     3. **Bubbling phase:** This is reverse of the capturing phase. In this pase, the event bubbles up from the target element through it's parent element, an ancestor and goes all the way to the global window object.

     The pictorial representation of these 3 event phases in DOM looks like below,

     ![Screenshot](images/event-flow.png)

**[⬆ Back to Top](#table-of-contents)**

463. ### What are the real world use cases of proxy?

     Proxies are not used in regular day to day JavaScript work but they enabled many exciting programming patterns. Some of the real world use cases are listed below,

     1. Vue3 used proxy concept to implement reactive state
     2. SolidJS implemented reactive stores
     3. Immerjs built upon proxy to track updates to immutable updates
     4. ZenStack improved Prisma ORM for access control layer

**[⬆ Back to Top](#table-of-contents)**

464. ### What are hidden classes?

     Since JavaScript is a dynamic programming language, you can add or remove properties and methods from objects on the fly at runtime. This nature of JavaScript increases the dynamic dictionary lookups(because objects implemented as HashTables in memory) for retrieving a property on an object.

     Let's consider the following example to see how the additional properties `age` and `gender` added at runtime.

     ```javascript
     function Person(name) {
       this.name = name;
     }

     var person1 = new Person("John");
     var person2 = new Person("Randy");

     person1.age = 40;
     person1.gender = "Male";

     person2.gender = "Female";
     person2.age = 50;
     ```

     As a result, this behavior leads to lower JavaScript performance compared to the contiguous buffer method used in non-dynamic languages. The V8 engine provided a solution named **hidden classes** to optimize the access time when retrieving a property on an object. This optimization is achieved by sharing hidden classes among objects created in a similar fashion. These hidden classes are attached to each and every object to track its shape.

     When V8 engine sees the constructor function(e.g, Person) is declared, it creates a hidden class (let's say Class01) without any offsets. Once the first property assignment statement (`this.name = name`) is executed, V8 engine will create a new hidden class (let's say Class02), inheriting all properties from the previous hidden class (Class01), and assign the property to offset 0. This process enables compiler to skip dictionary lookup when you try to retrieve the same property(i.e, name). Instead, V8 will directly point to Class02. The same procedure happens when you add new properties to the object.

     For example, adding `age` and `gender` properties to `Person` constructor leads to transition of hidden classes(Class02 -> Class03 -> Class04). If you create a second object(Person2) based on the same Person object, both Class01 and Class02 hidden classes are going to be shared. However, the hidden classes Class03 and Class04 cannot be shared because second object has been modified with a different order of properties assignment.

     Since both the objects(person1 and person2) do not share the hidden classes, now V8 engine cannot use **Inline Caching** technique for the faster access of properties.

**[⬆ Back to Top](#table-of-contents)**

465. ### What is inline caching?

Inline caching is an optimization technique based on the observation that repeated calls to same function tends to occur on same type of objects. The V8 compiler stores a cache of the type of objects that were passed as a parameter in recent method calls. Upon next time when same function is called, compiler can directly search for the type in cache.

Let's consider an example where the compiler stores the shape type in cache for repeated calls in the loop.

```js
let shape = { width: 30, height: 20 }; // Compiler store the type in cache as { width: <int>, height: <int>} after repeated calls

function area(obj) {
  //Calculate area
}
for (let i = 0; i < 100; i++) {
  area(shape);
}
```

After few successful calls of the same area method to its same hidden class, V8 engine omits the hidden class lookup and simply adds the offset of the property to the object pointer itself. As a result, it increases the execution speed.

There are mainly 3 types of inline caching possible:

1. Monomorphic: This is a optimized caching technique in which there can be always same type of objects passed.
2. Polymorphic: This ia slightly optimized caching technique in which limited number of different types of objects can be passed.
3. Megamorphic: It is an unoptimized caching in which any number of different objects can be passed.

**[⬆ Back to Top](#table-of-contents)**

466. ### What are the different ways to execute external scripts?

     There are three different ways to execute external scripts,

     1. async: The script is downloaded in parallel to parsing the page, and executed as soon as it is available even before parsing completes. The parsing of the page is going to be interuppted once the script is downloaded completely and then the script is executed. Thereafter, the parsing of the remaining page will continue.

        The syntax for async usage is as shown below,

        ```html
        <script src="demo.js" async></script>
        ```

     2. defer: The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.

        The syntax for defer usage is as shown below,

        ```html
        <script src="demo.js" defer></script>
        ```

     3. Neither async or defer: The script is downloaded and executed immediately by blocking parsing of the page until the script execution is completed.

     **Note:** You should only use either async or defer attribute if the `src` attribute is present.

     **[⬆ Back to Top](#table-of-contents)**

467. ### What is Lexical Scope?

     Lexical scope is the ability for a function scope to access variables from the parent scope.

     ```js
     <script>
             function x(){
               var a=10;
               function y(){
                   console.log(a); // will print a , because of lexical scope, it will first look 'a' in
               //its local memory space and then in its parent functions memory space
               }
               y();
           }
           x();
     </script>
     ```

     **[⬆ Back to Top](#table-of-contents)**

468. ### How to detect system dark mode in javascript?

     The combination of `Window.matchMedia()` utility method along with media query is used to check if the user has selected a dark color scheme in their operating system settings or not. The CSS media query `prefers-color-scheme` needs to be passed to identify system color theme.

     The following javascript code describes the usage,

     ```javascript
     const hasDarkColorScheme = () =>
       window.matchMedia &&
       window.matchMedia("(prefers-color-scheme: dark)").matches;
     ```

     You can also watch changes to system color scheme using `addEventListener`,

     ```javascript
     window
       .matchMedia("(prefers-color-scheme: dark)")
       .addEventListener("change", (event) => {
         const theme = event.matches ? "dark" : "light";
       });
     ```

     **Note:** The matchMedia method returns **MediaQueryList** object stores information from a media query.

     **[⬆ Back to Top](#table-of-contents)**

469. ### What is the purpose of requestAnimationFrame method?
     The requestAnimationFrame() method in JavaScript is used to schedule a function to be called before the next repaint of the browser window, allowing you to create smooth, efficient animations. It's primarily used for animations and visual updates, making it an essential tool for improving performance when you're animating elements on the web.

```javascript
const element = document.getElementById("myElement");
function animate() {
  let currentPosition = parseInt(window.getComputedStyle(element).left, 10);

  // Move the element 2px per frame
  currentPosition += 2;
  element.style.left = currentPosition + "px";
  // If the element hasn't moved off-screen, request the next frame
  if (currentPosition < window.innerWidth) {
    requestAnimationFrame(animate);
  }
}
// Start the animation
requestAnimationFrame(animate);
```

**[⬆ Back to Top](#table-of-contents)**

470. ### What is the difference between substring and substr methods?

     Both `substring` and `substr` are used to extract parts of a string, but there are subtle differences between the substring() and substr() methods in terms of **syntax** and **behavior**.

     1. `substring(start, end)`
         - **Parameters:**
             - `start`: The index to start extracting (inclusive).
             - `end`: The index to stop extracting (exclusive).
         - **Behavior:**
             - If `start > end`, it **swaps the arguments**.
             - Negative values are treated as `0`.

         ```javascript
          let str = "Hello World";
          console.log(str.substring(0, 5));   // "Hello"
          console.log(str.substring(5, 0));   // "Hello" (swapped)
          console.log(str.substring(-3, 4));  // "Hell" (negative = 0)
         ```
     2. `substr(start, length)` _(Deprecated)_

         - **Parameters:**
           - `start`: The index to start extracting.
           - `length`: The number of characters to extract.
         - **Behavior:**
           - If `start` is negative, it counts from the **end** of the string.
           - If `length` is omitted, it extracts to the end of the string.

         ```javascript
         let str = "Hello World"; console.log(str.substr(0, 5)); // "Hello" 
         console.log(str.substr(-5, 3)); // "Wor" (starts from 'W')`
         ```
         **Note:** substr() is considered a legacy feature in ECMAScript, so it is best to avoid using it if possible.


**[⬆ Back to Top](#table-of-contents)**

471. ### How to find the number of parameters expected by a function?
     The function's object has a **length** property which tells you how many formal parameters expected by a function. This is a static value defined by the function, not the number of arguments the function is called with(**arguments.length**). The basic usage of length propery is,

```javascript
function multiply(x, y) {
  return x * y;
}

function sum(a, b, c) {
  return a + b + c;
}

console.log(multiply.length); //2
console.log(sum.length); //3
```

But there are few important rules which needs to be noted while using length property.

1. **Default values:** Only the parameters which exists before a default value are considered.
   ```javascript
   function sum(a, b = 2, c = 3) {
     return a + b + c;
   }
   console.log(sum.length); // 1
   ```
2. **Rest params:** The rest parameters are excluded with in length property.
   ```javascript
   function sum(a, b, ...moreArgs) {
     let total = a + b;
     for (const arg of moreArgs) {
       total += arg;
     }
     return total;
   }
   console.log(sum.length); // 2
   ```
3. **Destructuring patterns:** Each destructuring pattern counted as a single parameter.

   ```javascript
   function func([a, b], { x, y }) {
     console.log(a + b, x, y);
   }

   console.log(func.length); // 2
   ```

**Note:** The Function constructor is itself a function object and it has a length property of 1.

**[⬆ Back to Top](#table-of-contents)**

472. ### What is globalThis, and what is the importance of it?

     Nowadays JavaScript language is used in a wide variety of environments and each environment has its own object model. Due to this fact, there are different ways(syntax) to access the global object.

     1. In web browser, the global object is accessible via `window`, `self`, or `frames`.
     2. In Node environment, you have to use `global`.
     3. In Web workers, the global object is available through `self`.

The `globalThis` property provides a standard way of accessing the global object without writing various code snippet to support multiple environments. For example, the global object retuned from multiple environments as shown below,

```javascript
//1. browser environment
console.log(globalThis); // => Window {...}

//2. node.js environment
console.log(globalThis); // => Object [global] {...}

//3. web worker environment
console.log(globalThis); // => DedicatedWorkerGlobalScope {...}
```

**[⬆ Back to Top](#table-of-contents)**

473. ### What are the array mutation methods?
     JavaScript array methods can be categorized into two groups:
1. Mutating methods: These are the methods that directly modify the original array.
1. Non-mutating methods: These methods return a new array without altering the original one.

There are 9 methods in total that mutate the arrays,

1.  **push:** Adds one or more elements to the end of the array and returns the new length.
2.  **pop:** Removes the last element from the array and returns that element.
3.  **unshift:** Adds one or more elements to the beginning of the array and returns the new length..
4.  **shift:** Removes the first element from the array and returns that element.
5.  **splice:** Adds or removes elements from the array at a specific index position.
6.  **sort:** Sorts the elements of the array in-place based on a given sorting criteria.
7.  **reverse:** Reverses the order of elements in the given array.
8.  **fill:** Fills all elements of the array with a specific value.
9.  **copyWithIn:** Copies a sequence of elements within the array to a specified target index in the same array.

**[⬆ Back to Top](#table-of-contents)**

474. ### What is module scope in JavaScript?
     Module scope is a feature introduced with ES6 (ES2015) modules that creates a scope specific to a module file, isolating variables and functions declared within it from the global scope and other modules. Variables and functions declared in a module are private by default and can only be accessed by other modules if they are explicitly exported.

Key characteristics of module scope:

1.  Variables declared in a module are scoped to that module only.
2.  Each module has its own top-level scope
3.  Variables and functions need to be explicitly exported to be used in other modules
4.  The global scope cannot access module variables unless they are explicitly exported and imported
5.  Modules are always executed in strict mode

```javascript
// moduleA.js

// This variable is PRIVATE to moduleA. It's like a tool inside a closed box.
const privateVariable = "I am private";

// This variable is PUBLIC because it's exported. Others can use it when they import moduleA.
export const publicVariable = "I am public";

// PUBLIC function because it's exported. But it can still access privateVariable inside moduleA.
export function publicFunction() {
  console.log(privateVariable); // ✅ This works because we're inside the same module.
  return "Hello from publicFunction!";
}

// moduleB.js

// Importing PUBLIC items from moduleA.
import { publicVariable, publicFunction } from "./moduleA.js";

console.log(publicVariable); // ✅ "I am public" - Works because it's exported.
console.log(publicFunction()); // ✅ "Hello from publicFunction!" - Works as well.

// ❌ This will cause an ERROR because privateVariable was NOT exported from moduleA.
// console.log(privateVariable);   // ❌ ReferenceError: privateVariable is not defined
```

Common use cases and benefits:

- Encapsulation of module-specific code
- Prevention of global scope pollution
- Better code organization and maintenance
- Explicit dependency management
- Protection of private implementation details

**[⬆ Back to Top](#table-of-contents)**

475. ### What are shadowing and illegal shadowing?
     
     Both **shadowing** and **illegal shadowing** refer to how variable names can "hide" or override others within nested scopes.

     **Shadowing** occurs when a variable declared within a certain scope (like a function or block) has the same name as a variable declared in an outer scope. The inner variable shadows the outer one — meaning, the inner variable takes precedence in its own scope.

     Let's take an example where the inner `a` inside `func()` shadows the outer variable `a`.

      ```javascript
      let a = 10;

      function func() {
        let a = 20; // Shadows the outer 'a'
        console.log(a); // 20
      }

      func();
      console.log(a); // 10
      ```

     **Illegal shadowing** in JavaScript refers to a syntax error that happens when you try to declare a block-scoped variable (`let` or `const`) with the same name as a variable declared using `var` in the same or an overlapping scope. 

     For example, if you declare both block-scoped variable and function scoped variable using the same name inside a function causes an illegal shadowing.

      ```javascript
      function test() {
        var a = 10;
        let a = 20; // SyntaxError: Identifier 'a' has already been declared
      }
      ```
    
      As an another example, if you declare a variable with `let` or `const` in an outer scope, and then try to redeclare it with `var` inside a nested block, JavaScript throws an error — even though `var` is supposed to be function-scoped. Since the var appears in a block, it ends up trying to overwrite the `let` in the outer scope, which causes a conflict.

      ```javascript
      let a = 10;
      {
        var a = 20; // SyntaxError: Identifier 'a' has already been declared
        console.log(a);
      }
      ```
**[⬆ Back to Top](#table-of-contents)**

476. ### Why is it important to remove event listeners after use?
     
  In JavaScript, you need to be mindful of removing event listeners to avoid memory leaks — especially in long-lived apps like single-page applications (SPAs) or when working with frameworks/libraries. Eventhough JavaScript has automatic garbage collection, memory leaks can still happen if:

  1. A DOM element is removed, but a listener still references it.
  2. A callback (event listener) holds a reference to a large object or closure that can't be cleaned up.
  3. Global objects like window, document etc retain listeners indefinitely unless manually removed.

  So if you add any event listeners to DOM element, it is a good practice to remove it after its usage as shown below,

  ```javascript
     const button = document.getElementById("btn");

      function handleClick() {
        console.log("Clicked!");
      }

      button.addEventListener("click", handleClick);

      // Always remove when done
      button.removeEventListener("click", handleClick);
  ```

  **[⬆ Back to Top](#table-of-contents)**
  
477. ### What is structuredClone and how is it used for deep copying objects?

      In JavaScript, `structuredClone()` is a built-in method used to create a **deep copy** of a value. It safely clones nested objects, arrays, Maps, Sets, Dates, TypedArrays, and even circular references — without sharing references to the original value. This prevents accidental mutations and makes it useful for state management and data processing.

       For example, the below snippet demonstrates deep cloning of a nested object,

        ```javascript
           const originalObject = {
             name: "Deep Copy Test",
             nested: {
            value: 10,
            list: [1, 2, 3]
  },
};

    const deepCopy = structuredClone(originalObject);

    // Modify cloned value
    deepCopy.nested.value = 99;
    deepCopy.nested.list.push(4);
    console.log(originalObject.nested.value); // 10
    console.log(deepCopy.nested.value);       // 99
    console.log(originalObject.nested.list);  // [1, 2, 3]
    console.log(deepCopy.nested.list);        // [1, 2, 3, 4]
   
   **[⬆ Back to Top](#table-of-contents)**

478. ### What is the difference between const and Object.freeze

     The main difference is that `const` applies to **variables** (bindings), while `Object.freeze()` applies to **values** (objects).

     1. **`const`**: Prevents the reassignment of a variable identifier. It ensures that the variable name always points to the same memory reference. However, if the variable holds an object or array, the *contents* of that object can still be modified.
     2. **`Object.freeze()`**: Prevents the modification of an object's properties. It makes the object immutable (you cannot add, remove, or change properties), but it does not affect the variable assignment itself (unless the variable is also declared with `const`).

     **Example:**

     ```javascript
       // Case 1: Using const (Reassignment prevented, Mutation allowed)
       const person = { name: "John" };
       person.name = "Doe"; // ✅ Allowed: The object is mutable
       console.log(person.name); // "Doe"

       // person = { name: "Jane" }; // ❌ Error: Assignment to constant variable

       // Case 2: Using Object.freeze (Reassignment allowed, Mutation prevented)
       let profile = { name: "John" };
       Object.freeze(profile);

       profile.name = "Doe"; // ❌ Ignored (or throws TypeError in strict mode)
       console.log(profile.name); // "John"

       profile = { name: "Jane" }; // ✅ Allowed: 'profile' is declared with 'let'
       console.log(profile.name); // "Jane"
       

      **[⬆ Back to Top](#table-of-contents)**


<!-- QUESTIONS_END -->
### Coding Exercise

#### 1. What is the output of below code

```javascript
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
```

- 1: Undefined
- 2: ReferenceError
- 3: null
- 4: {model: "Honda", color: "white", year: "2010", country: "UK"}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The function declarations are hoisted similar to any variables. So the placement for `Vehicle` function declaration doesn't make any difference.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 2. What is the output of below code

```javascript
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
```

- 1: 1, undefined and undefined
- 2: ReferenceError: X is not defined
- 3: 1, undefined and number
- 4: 1, number and number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Of course the return value of `foo()` is 1 due to the increment operator. But the statement `let x = y = 0` declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,

```javascript
let x;
window.y = 0;
x = window.y;
```

Since the block scoped variable x is undefined outside of the function, the type will be undefined too. Whereas the global variable `y` is available outside the function, the value is 0 and type is number.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 3. What is the output of below code

```javascript
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```

- 1: A, B and C
- 2: B, A and C
- 3: A and C
- 4: A, C and B

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The statements order is based on the event loop mechanism. The order of statements follows the below order,

1. At first, the main function is pushed to the stack.
2. Then the browser pushes the first statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
3. But `setTimeout` statement moved to Browser API to apply the delay for callback.
4. In the meantime, C's console.log added to stack, executed and popped out.
5. The callback of `setTimeout` moved from Browser API to message queue.
6. The `main` function popped out from stack because there are no statements to execute
7. The callback moved from message queue to the stack since the stack is empty.
8. The `console.log` for B is added to the stack and display on the console.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 4. What is the output of below equality check

```javascript
console.log(0.1 + 0.2 === 0.3);
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results.
You can find more details about the explanation here [0.30000000000000004.com/](https://0.30000000000000004.com/)

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 5. What is the output of below code

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

- 1: 1function
- 2: 1object
- 3: ReferenceError
- 4: 1undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The main points in the above code snippets are,

1. You can see function expression instead function declaration inside if statement. So it always returns true.
2. Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.

In other words, it is same as

```javascript
var y = 1;
if ("foo") {
  y += typeof f;
}
console.log(y);
```

**Note:** It returns 1object for MS Edge browser

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 6. What is the output of below code

```javascript
function foo() {
  return;
  {
    message: "Hello World";
  }
}
console.log(foo());
```

- 1: Hello World
- 2: Object {message: "Hello World"}
- 3: Undefined
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

This is a semicolon issue. Normally semicolons are optional in JavaScript. So if there are any statements(in this case, return) missing semicolon, it is automatically inserted immediately. Hence, the function returned as undefined.

Whereas if the opening curly brace is along with the return keyword then the function is going to be returned as expected.

```javascript
function foo() {
  return {
    message: "Hello World",
  };
}
console.log(foo()); // {message: "Hello World"}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 7. What is the output of below code

```javascript
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
```

- 1: [empty, 'b', 'c', 'd'], empty, 3
- 2: [null, 'b', 'c', 'd'], empty, 3
- 3: [empty, 'b', 'c', 'd'], undefined, 4
- 4: [null, 'b', 'c', 'd'], undefined, 4

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The `delete` operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed.
If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use `empty` instead of `undefined` to make the difference a bit clearer.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 8. What is the output of below code in latest Chrome

```javascript
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);
```

- 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
- 2: [empty × 3], [empty × 2, 100], [empty × 3]
- 3: [null × 3], [null × 2, 100], [null × 3]
- 4: [], [100], []

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The latest chrome versions display `sparse array`(they are filled with holes) using this empty x n notation. Whereas the older versions have undefined x n notation.
**Note:** The latest version of FF displays `n empty slots` notation.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 9. What is the output of below code

```javascript
const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
```

- 1: 0, 1, 2
- 2: 0, { return 1 }, 2
- 3: 0, { return 1 }, { return 2 }
- 4: 0, 1, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 10. What is the output of below code

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

- 1: true, true
- 2: true, false
- 3: SyntaxError, SyntaxError,
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right.
The first statement follows the below order,

1. console.log(1 < 2 < 3);
2. console.log(true < 3);
3. console.log(1 < 3); // True converted as `1` during comparison
4. True

Whereas the second statement follows the below order,

1. console.log(3 > 2 > 1);
2. console.log(true > 1);
3. console.log(1 > 1); // False converted as `0` during comparison
4. False

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 11. What is the output of below code in non-strict mode

```javascript
function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters.
The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

**Note:** In strict mode, duplicate parameters will throw a Syntax Error.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 12. What is the output of below code

```javascript
const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see `SyntaxError` in the console.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 13. What is the output of below code

```javascript
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
```

- 1: ReferenceError: arguments is not defined
- 2: 3
- 3: undefined
- 4: null

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Arrow functions do not have an `arguments, super, this, or new.target` bindings. So any reference to `arguments` variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

Where as the normal function provides the number of arguments passed to the function

```javascript
const func = function () {
  return arguments.length;
};
console.log(func(1, 2, 3));
```

But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

```javascript
const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 14. What is the output of below code

```javascript
console.log(String.prototype.trimLeft.name === "trimLeft");
console.log(String.prototype.trimLeft.name === "trimStart");
```

- 1: True, False
- 2: False, True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

In order to be consistent with functions like `String.prototype.padStart`, the standard method name for trimming the whitespaces is considered as `trimStart`. Due to web web compatibility reasons, the old method name 'trimLeft' still acts as an alias for 'trimStart'. Hence, the prototype for 'trimLeft' is always 'trimStart'

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 15. What is the output of below code

```javascript
console.log(Math.max());
```

- 1: undefined
- 2: Infinity
- 3: 0
- 4: -Infinity

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

-Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned.
**Note:** Zero number of arguments is a valid case.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 16. What is the output of below code

```javascript
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
```

- 1: True, True
- 2: True, False
- 3: False, False
- 4: False, True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS as below

```javascript
10 === Number([10].valueOf().toString()); // 10
```

So it doesn't matter about number brackets([]) around the number, it is always converted to a number in the expression.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 17. What is the output of below code

```javascript
console.log(10 + "10");
console.log(10 - "10");
```

- 1: 20, 0
- 2: 1010, 0
- 3: 1010, 10-10
- 4: NaN, NaN

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The concatenation operator(+) is applicable for both number and string types. So if any operand is string type then both operands concatenated as strings. Whereas subtract(-) operator tries to convert the operands as number type.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 18. What is the output of below code

```javascript
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}
```

- 1: True, I'm True
- 2: True, I'm False
- 3: False, I'm True
- 4: False, I'm False

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

In comparison operators, the expression `[0]` converted to Number([0].valueOf().toString()) which is resolved to false. Whereas `[0]` just becomes a truthy value without any conversion because there is no comparison operator.

</p>
</details>

#### 19. What is the output of below code

```javascript
console.log([1, 2] + [3, 4]);
```

- 1: [1,2,3,4]
- 2: [1,2][3,4]
- 3: SyntaxError
- 4: 1,23,4

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 20. What is the output of below code

```javascript
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);
```

- 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
- 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
- 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
- 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Since `Set` object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 21. What is the output of below code

```javascript
console.log(NaN === NaN);
```

- 1: True
- 2: False

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 22. What is the output of below code

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
```

- 1: 4
- 2: NaN
- 3: SyntaxError
- 4: -1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The `indexOf` uses strict equality operator(===) internally and `NaN === NaN` evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always.
But you can use `Array.prototype.findIndex` method to find out the index of NaN in an array or You can use `Array.prototype.includes` to check if NaN is present in an array or not.

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 23. What is the output of below code

```javascript
let [a, ...b, c] = [1, 2, 3, 4, 5];
console.log(a, b, c);
```

- 1: 1, [2, 3, 4, 5]
- 2: 1, {2, 3, 4, 5}
- 3: SyntaxError
- 4: 1, [2, 3, 4]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

When using rest parameters, trailing commas are not allowed and will throw a SyntaxError.
If you remove the trailing comma and last element then it displays 1st answer

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b); // 1, [2, 3, 4, 5]
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 25. What is the output of below code

```javascript
async function func() {
  return 10;
}
console.log(func());
```

- 1: Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<rejected\>: 10}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Async functions always return a promise. But even if the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. The above async function is equivalent to below expression,

```javascript
function func() {
  return Promise.resolve(10);
}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 26. What is the output of below code

```javascript
async function func() {
  await 10;
}
console.log(func());
```

- 1: Promise {\<fulfilled\>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {\<resolved\>: undefined}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a `.then` callback. In this case, there is no return expression at the end of the function. Hence, the default return value of `undefined` is returned as the resolution of the promise. The above async function is equivalent to below expression,

```javascript
function func() {
  return Promise.resolve(10).then(() => undefined);
}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 27. What is the output of below code

```javascript
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}

processArray([1, 2, 3, 4]);
```

- 1: SyntaxError
- 2: 1, 2, 3, 4
- 3: 4, 4, 4, 4
- 4: 4, 3, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Even though “processArray” is an async function, the anonymous function that we use for `forEach` is synchronous. If you use await inside a synchronous function then it throws a syntax error.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 28. What is the output of below code

```javascript
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log("Process completed!");
}
process([1, 2, 3, 5]);
```

- 1: 1 2 3 5 and Process completed!
- 2: 5 5 5 5 and Process completed!
- 3: Process completed! and 5 5 5 5
- 4: Process completed! and 1 2 3 5

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The forEach method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions.

But you control the array sequence using for..of loop,

```javascript
async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log("Process completed!");
}
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 29. What is the output of below code

```javascript
var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);
```

- 1: Set(4) {"+0", "-0", NaN, undefined}
- 2: Set(3) {"+0", NaN, undefined}
- 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
- 4: Set(4) {"+0", NaN, undefined, NaN}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Set has few exceptions from equality check,

1. All NaN values are equal
2. Both +0 and -0 considered as different values

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 30. What is the output of below code

```javascript
const sym1 = Symbol("one");
const sym2 = Symbol("one");

const sym3 = Symbol.for("two");
const sym4 = Symbol.for("two");

console.log(sym1 === sym2, sym3 === sym4);
```

- 1: true, true
- 2: true, false
- 3: false, true
- 4: false, false

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Symbol follows below conventions,

1. Every symbol value returned from Symbol() is unique irrespective of the optional string.
2. `Symbol.for()` function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.

**Note:** The symbol description is just useful for debugging purposes.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 31. What is the output of below code

```javascript
const sym1 = new Symbol("one");
console.log(sym1);
```

- 1: SyntaxError
- 2: one
- 3: Symbol('one')
- 4: Symbol

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

`Symbol` is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 32. What is the output of below code

```javascript
let myNumber = 100;
let myString = "100";

if (!typeof myNumber === "string") {
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}

if (!typeof myString === "number") {
  console.log("It is not a number!");
} else {
  console.log("It is a number!");
}
```

- 1: SyntaxError
- 2: It is not a string!, It is not a number!
- 3: It is not a string!, It is a number!
- 4: It is a string!, It is a number!

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The return value of `typeof myNumber` or `typeof myString` is always a truthy value (either "number" or "string"). The ! operator operates on either `typeof myNumber` or `typeof myString`, converting them to boolean values. Since the value of both `!typeof myNumber` and `!typeof myString` is false, the if condition fails, and control goes to else block.

To make the ! operator operate on the equality expression, one needs to add parentheses:

```
if (!(typeof myNumber === "string"))
```

Or simply use the inequality operator:

```
if (typeof myNumber !== "string")
```

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 33. What is the output of below code

```javascript
console.log(
  JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
);
console.log(
  JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
);
```

- 1: {"myArray":['one', undefined, {}, Symbol]}, {}
- 2: {"myArray":['one', null,null,null]}, {}
- 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
- 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The symbols has below constraints,

1. The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.
2. All Symbol-keyed properties will be completely ignored. Hence it returns an empty object({}).

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 34. What is the output of below code

```javascript
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

new A();
new B();
```

- 1: A, A
- 2: A, B

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Using constructors, `new.target` refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 35. What is the output of below code

```javascript
const [x, ...y, z] = [1, 2, 3, 4];
console.log(x, y, z);
```

- 1: 1, [2, 3], 4
- 2: 1, [2, 3, 4], undefined
- 3: 1, [2], 3
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 36. What is the output of below code

```javascript
const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);
```

- 1: 30, 20
- 2: 10, 20
- 3: 10, undefined
- 4: 30, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The object property follows below rules,

1. The object properties can be retrieved and assigned to a variable with a different name
2. The property assigned a default value when the retrieved value is `undefined`

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 37. What is the output of below code

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area();
```

- 1: 200
- 2: Error
- 3: undefined
- 4: 0

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error `Error: Cannot read property 'length' of undefined` as mentioned above.

You can avoid the error with either of the below changes,

1. **Pass at least an empty object:**

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area({});
```

2. **Assign default empty object:**

```javascript
function area({ length = 10, width = 20 } = {}) {
  console.log(length * width);
}

area();
```

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 38. What is the output of below code

```javascript
const props = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Tom" },
];

const [, , { name }] = props;
console.log(name);
```

- 1: Tom
- 2: Error
- 3: undefined
- 4: John

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 39. What is the output of below code

```javascript
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType("");
checkType(null);
```

- 1: number, undefined, string, object
- 2: undefined, undefined, string, object
- 3: number, number, string, object
- 4: number, number, number, number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.

Hence, the result of function calls categorized as below,

1. The first two function calls logs number type since the type of default value is number
2. The type of '' and null values are string and object type respectively.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 40. What is the output of below code

```javascript
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add("Orange"));
console.log(add("Apple"));
```

- 1: ['Orange'], ['Orange', 'Apple']
- 2: ['Orange'], ['Apple']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 41. What is the output of below code

```javascript
function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}

greet("Hello", "John");
greet("Hello", "John", "Good morning!");
```

- 1: SyntaxError
- 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 42. What is the output of below code

```javascript
function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}
outer();
```

- 1: ReferenceError
- 2: Inner

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, `inner` is not defined).

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 43. What is the output of below code

```javascript
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
```

- 1: [3, 4, 5], undefined
- 2: SyntaxError
- 3: [3, 4, 5], []
- 4: [3, 4, 5], [undefined]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 44. What is the output of below code

```javascript
const obj = { key: "value" };
const array = [...obj];
console.log(array);
```

- 1: ['key', 'value']
- 2: TypeError
- 3: []
- 4: ['key']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as `map(), reduce(), and assign()`. If you still try to do it, it still throws `TypeError: obj is not iterable`.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 45. What is the output of below code

```javascript
function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = new myGenFunc();
console.log(myGenObj.next().value);
```

- 1: 1
- 2: undefined
- 3: SyntaxError
- 4: TypeError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 46. What is the output of below code

```javascript
function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
```

- 1: { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
- 2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
- 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
- 4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: `{value: undefined, done: true}`.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 47. What is the output of below code

```javascript
const myGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
```

- 1: 1,2,3 and 1,2,3
- 2: 1,2,3 and 4,5,6
- 3: 1 and 1
- 4: 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 48. What is the output of below code

```javascript
const num = 0o38;
console.log(num);
```

- 1: SyntaxError
- 2: 38

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 49. What is the output of below code

```javascript
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
```

- 1: 100
- 2: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

**Note:** Class expressions also applies to the same hoisting restrictions of class declarations.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 50. What is the output of below code

```javascript
function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());
```

- 1: undefined, undefined
- 2: Person, Person
- 3: SyntaxError
- 4: Window, Window

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

When a regular or prototype method is called without a value for **this**, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial `this` value is undefined so both methods return window objects.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 51. What is the output of below code

```javascript
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car("BMW");
console.log(car.start());
```

- 1: SyntaxError
- 2: BMW vehicle started, BMW car started
- 3: BMW car started, BMW vehicle started
- 4: BMW car started, BMW car started

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The super keyword is used to call methods of a superclass. Unlike other languages the super invocation doesn't need to be a first statement. i.e, The statements will be executed in the same order of code.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 52. What is the output of below code

```javascript
const USER = { age: 30 };
USER.age = 25;
console.log(USER.age);
```

- 1: 30
- 2: 25
- 3: Uncaught TypeError
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Even though we used constant variables, the content of it is an object and the object's contents (e.g properties) can be altered. Hence, the change is going to be valid in this case.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 53. What is the output of below code

```javascript
console.log("🙂" === "🙂");
```

- 1: false
- 2: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Emojis are unicodes and the unicode for smile symbol is "U+1F642". The unicode comparison of same emojies is equivalent to string comparison. Hence, the output is always true.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 54. What is the output of below code?

```javascript
console.log(typeof typeof typeof true);
```

- 1: string
- 2: boolean
- 3: NaN
- 4: number

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The typeof operator on any primitive returns a string value. So even if you apply the chain of typeof operators on the return value, it is always string.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 55. What is the output of below code?

```javascript
let zero = new Number(0);

if (zero) {
  console.log("If");
} else {
  console.log("Else");
}
```

- 1: If
- 2: Else
- 3: NaN
- 4: SyntaxError

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

1. The type of operator on new Number always returns object. i.e, typeof new Number(0) --> object.
2. Objects are always truthy in if block

Hence the above code block always goes to if section.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 55. What is the output of below code in non strict mode?

```javascript
let msg = "Good morning!!";

msg.name = "John";

console.log(msg.name);
```

- 1: ""
- 2: Error
- 3: John
- 4: Undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

It returns undefined for non-strict mode and returns Error for strict mode. In non-strict mode, the wrapper object is going to be created and get the mentioned property. But the object get disappeared after accessing the property in next line.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 56. What is the output of below code?

```javascript
let count = 10;

(function innerFunc() {
  if (count === 10) {
    let count = 11;
    console.log(count);
  }
  console.log(count);
})();
```

- 1: 11, 10
- 2: 11, 11
- 3: 10, 11
- 4: 10, 10

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

11 and 10 is logged to the console.

The innerFunc is a closure which captures the count variable from the outerscope. i.e, 10. But the conditional has another local variable `count` which overwrites the ourter `count` variable. So the first console.log displays value 11.
Whereas the second console.log logs 10 by capturing the count variable from outerscope.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 57. What is the output of below code ?

- 1: console.log(true && 'hi');
- 2: console.log(true && 'hi' && 1);
- 3: console.log(true && '' && 0);

<details><summary><b>Answer</b></summary>

- 1: hi
- 2: 1
- 3: ''

Reason : The operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.

**Note:** Below these values are consider as falsy value

- 1: 0
- 2: ''
- 3: null
- 4: undefined
- 5: NAN

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 58. What is the output of below code ?

```javascript
let arr = [1, 2, 3];
let str = "1,2,3";

console.log(arr == str);
```

- 1: false
- 2: Error
- 3: true

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Arrays have their own implementation of `toString` method that returns a comma-separated list of elements. So the above code snippet returns true. In order to avoid conversion of array type, we should use === for comparison.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 59. What is the output of below code?

```javascript
getMessage();

var getMessage = () => {
  console.log("Good morning");
};
```

- 1: Good morning
- 2: getMessage is not a function
- 3: getMessage is not defined
- 4: Undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Hoisting will move variables and functions to be the top of scope. Even though getMessage is an arrow function the above function will considered as a variable due to it's variable declaration or assignment. So the variables will have undefined value in memory phase and throws an error '`getMessage` is not a function' at the code execution phase.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 60. What is the output of below code?

```javascript
let quickPromise = Promise.resolve();

quickPromise.then(() => console.log("promise finished"));

console.log("program finished");
```

- 1: program finished
- 2: Cannot predict the order
- 3: program finished, promise finished
- 4: promise finished, program finished

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Even though a promise is resolved immediately, it won't be executed immediately because its **.then/catch/finally** handlers or callbacks(aka task) are pushed into the queue. Whenever the JavaScript engine becomes free from the current program, it pulls a task from the queue and executes it. This is the reason why last statement is printed first before the log of promise handler.

**Note:** We call the above queue as "MicroTask Queue"

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 61. What is the output of below code?

```javascript
console
  .log("First line")
  [("a", "b", "c")].forEach((element) => console.log(element));
console.log("Third line");
```

- 1: `First line`, then print `a, b, c` in a new line, and finally print `Third line` as next line
- 2: `First line`, then print `a, b, c` in a first line, and print `Third line` as next line
- 3: Missing semi-colon error
- 4: Cannot read properties of undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

When JavaScript encounters a line break without a semicolon, the JavaScript parser will automatically add a semicolon based on a set of rules called `Automatic Semicolon Insertion` which determines whether line break as end of statement or not to insert semicolon. But it does not assume a semicolon before square brackets [...]. So the first two lines considered as a single statement as below.

```javascript
console
  .log("First line")
  [("a", "b", "c")].forEach((element) => console.log(element));
```

Hence, there will be **cannot read properties of undefined** error while applying the array square bracket on log function.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 62. Write a function that returns a random HEX color

<details><summary><b>Solution 1 (Iterative generation)</b></summary>
<p>

```javascript
const HEX_ALPHABET = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const HEX_PREFIX = "#";
const HEX_LENGTH = 6;

function generateRandomHex() {
  let randomHex = "";

  for (let i = 0; i < HEX_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * HEX_ALPHABET.length);
    randomHex += HEX_ALPHABET[randomIndex];
  }

  return HEX_PREFIX + randomHex;
}
```

</p>

</details>

<details><summary><b>Solution 2 (One-liner)</b></summary>
<p>

```javascript
const HEX_PREFIX = "#";
const HEX_RADIX = 16;
const HEX_LENGTH = 6;

function generateRandomHex() {
  return (
    HEX_PREFIX +
    Math.floor(Math.random() * 0xffffff)
      .toString(HEX_RADIX)
      .padStart(HEX_LENGTH, "0")
  );
}
```

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 63. What is the output of below code?

```javascript
var of = ["of"];
for (var of of of) {
  console.log(of);
}
```

- 1: of
- 2: SyntaxError: Unexpected token of
- 3: SyntaxError: Identifier 'of' has already been declared
- 4: ReferenceError: of is not defined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

In JavaScript, `of` is not considered as a reserved keyword. So the variable declaration with `of` is accepted and prints the array value `of` using for..of loop.

But if you use reserved keyword such as `in` then there will be a syntax error saying `SyntaxError: Unexpected token in`,

```javascript
var in = ['in'];
for(var in in in) {
  console.log(in[in]);
}
```

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 64. What is the output of below code?

```javascript
const numbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort();
console.log(numbers);
```

- 1: [11, 18, 23, 25, 31, 33, 200]
- 2: [11, 18, 200, 23, 25, 31, 33]
- 3: [11, 25, 31, 23, 33, 18, 200]
- 4: Cannot sort numbers

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

By default, the sort method sorts elements alphabetically. This is because elemented converted to strings and strings compared in UTF-16 code units order. Hence, you will see the above numbers not sorted as expected. In order to sort numerically just supply a comparator function which handles numeric sorts.

```javascript
const numbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort((a, b) => a - b);
console.log(numbers);
```

**Note:** Sort() method changes the original array.

</p>

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 65. What is the output order of below code?

```javascript
setTimeout(() => {
  console.log("1");
}, 0);
Promise.resolve("hello").then(() => console.log("2"));
console.log("3");
```

- 1: 1, 2, 3
- 2: 1, 3, 2
- 3: 3, 1, 2
- 4: 3, 2, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

When the JavaScript engine parses the above code, the first two statements are asynchronous which will be executed later and third statement is synchronous statement which will be moved to callstack, executed and prints the number 3 in the console. Next, Promise is native in ES6 and it will be moved to Job queue which has high priority than callback queue in the execution order. At last, since setTimeout is part of WebAPI the callback function moved to callback queue and executed. Hence, you will see number 2 printed first followed by 1.

</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 66. What is the output of below code?

```javascript
console.log(name);
console.log(message());
var name = "John";
(function message() {
  console.log("Hello John: Welcome");
});
```

- 1: John, Hello John: Welcome
- 2: undefined, Hello John, Welcome
- 3: Reference error: name is not defined, Reference error: message is not defined
- 4: undefined, Reference error: message is not defined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

IIFE(Immediately Invoked Function Expression) is just like any other function expression which won't be hoisted. Hence, there will be a reference error for message call.
The behavior would be the same with below function expression of message1,

```javascript
console.log(name);
console.log(message());
var name = 'John';
var message = function () {
   console.log('Hello John: Welcome');
});
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 67. What is the output of below code?

```javascript
message();

function message() {
  console.log("Hello");
}
function message() {
  console.log("Bye");
}
```

- 1: Reference error: message is not defined
- 2: Hello
- 3: Bye
- 4: Compile time error

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

As part of hoisting, initially JavaScript Engine or compiler will store first function in heap memory but later rewrite or replaces with redefined function content.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 68. What is the output of below code?

```javascript
var currentCity = "NewYork";

var changeCurrentCity = function () {
  console.log("Current City:", currentCity);
  var currentCity = "Singapore";
  console.log("Current City:", currentCity);
};

changeCurrentCity();
```

- 1: NewYork, Singapore
- 2: NewYork, NewYork
- 3: undefined, Singapore
- 4: Singapore, Singapore

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

Due to hositing feature, the variables declared with `var` will have `undefined` value in the creation phase so the outer variable `currentCity` will get same `undefined` value. But after few lines of code JavaScript engine found a new function call(`changeCurrentCity()`) to update the current city with `var` re-declaration. Since each function call will create a new execution context, the same variable will have `undefined` value before the declaration and new value(`Singapore`) after the declaration. Hence, the value `undefined` print first followed by new value `Singapore` in the execution phase.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 69. What is the output of below code in an order?

```javascript
function second() {
  var message;
  console.log(message);
}

function first() {
  var message = "first";
  second();
  console.log(message);
}

var message = "default";
first();
console.log(message);
```

- 1: undefined, first, default
- 2: default, default, default
- 3: first, first, default
- 4: undefined, undefined, undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Each context(global or functional) has it's own variable environment and the callstack of variables in a LIFO order. So you can see the message variable value from second, first functions in an order followed by global context message variable value at the end.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 70. What is the output of below code?

```javascript
var expressionOne = function functionOne() {
  console.log("functionOne");
};
functionOne();
```

- 1: functionOne is not defined
- 2: functionOne
- 3: console.log("functionOne")
- 4: undefined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

The function call `functionOne` is not going to be part of scope chain and it has it's own execution context with the enclosed variable environment. i.e, It won't be accessed from global context. Hence, there will be an error while invoking the function as `functionOne is not defined`.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 71. What is the output of below code?

```javascript
const user = {
  name: "John",
  eat() {
    console.log(this);
    var eatFruit = function () {
      console.log(this);
    };
    eatFruit();
  },
};
user.eat();
```

- 1: {name: "John", eat: f}, {name: "John", eat: f}
- 2: Window {...}, Window {...}
- 3: {name: "John", eat: f}, undefined
- 4: {name: "John", eat: f}, Window {...}

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

`this` keyword is dynamic scoped but not lexically scoped . In other words, it doesn't matter where `this` has been written but how it has been invoked really matter. In the above code snippet, the `user` object invokes `eat` function so `this` keyword refers to `user` object but `eatFruit` has been invoked by `eat` function and `this` will have default `Window` object.

The above pit fall fixed by three ways,

1. In ES6, the arrow function will make `this` keyword as lexically scoped. Since the surrounding object of `this` object is `user` object, the `eatFruit` function will contain `user` object for `this` object.

```javascript
const user = {
  name: "John",
  eat() {
    console.log(this);
    var eatFruit = () => {
      console.log(this);
    };
    eatFruit();
  },
};
user.eat();
```

The next two solutions have been used before ES6 introduced.

2.  It is possible create a reference of `this` into a separate variable and use that new variable inplace of `this` keyword inside `eatFruit` function. This is a common practice in jQuery and AngularJS before ES6 introduced.

```javascript
const user = {
  name: "John",
  eat() {
    console.log(this);
    var self = this;
    var eatFruit = () => {
      console.log(self);
    };
    eatFruit();
  },
};
user.eat();
```

3. The `eatFruit` function can bind explicitly with `this` keyword where it refers `Window` object.

```javascript
const user = {
  name: "John",
  eat() {
    console.log(this);
    var eatFruit = function () {
      console.log(this);
    };
    return eatFruit.bind(this);
  },
};
user.eat()();
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 72. What is the output of below code?

```javascript
let message = "Hello World!";
message[0] = "J";
console.log(message);

let name = "John";
name = name + " Smith";
console.log(name);
```

- 1: Jello World!, John Smith
- 2: Jello World!, John
- 3: Hello World!, John Smith
- 4: Hello World!, John

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

In JavaScript, primitives are immutable i.e. there is no way to change a primitive value once it gets created. So when you try to update the string's first character, there is no change in the string value and prints the same initial value `Hello World!`. Whereas in the later example, the concatenated value is re-assigned to the same variable which will result into creation of new memory block with the reference pointing to `John Smith` value and the old memory block value(`John`) will be garbage collected.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 73. What is the output of below code?

```javascript
let user1 = {
  name: "Jacob",
  age: 28,
};

let user2 = {
  name: "Jacob",
  age: 28,
};

console.log(user1 === user2);
```

- 1: True
- 2: False
- 3: Compile time error

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

In JavaScript, the variables such as objects, arrays and functions comes under pass by reference. When you try to compare two objects with same content, it is going to compare memory address or reference of those variables. These variables always create separate memory blocks hence the comparison is always going to return false value.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 74. What is the output of below code?

```javascript
function greeting() {
  setTimeout(function () {
    console.log(message);
  }, 5000);
  const message = "Hello, Good morning";
}
greeting();
```

- 1: Undefined
- 2: Reference error:
- 3: Hello, Good morning
- 4: null

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The variable `message` is still treated as closure(since it has been used in inner function) eventhough it has been declared after setTimeout function. The function with in setTimeout function will be sent to WebAPI and the variable declaration executed with in 5 seconds with the assigned value. Hence, the text declared for the variable will be displayed.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 75. What is the output of below code?

```javascript
const a = new Number(10);
const b = 10;
console.log(a === b);
```

- 1: False
- 2: True

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Eventhough both variables `a` and `b` refer a number value, the first declaration is based on constructor function and the type of the variable is going to be `object` type. Whereas the second declaration is primitive assignment with a number and the type is `number` type. Hence, the equality operator `===` will output `false` value.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 76. What is the type of below function?

```javascript
function add(a, b) {
  console.log("The input arguments are: ", a, b);
  return a + b;
}
```

- 1: Pure function
- 2: Impure function

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

Eventhough the above function returns the same result for the same arguments(input) that are passed in the function, the `console.log()` statement causes a function to have side effects because it affects the state of an external code. i.e, the `console` object's state and depends on it to perform the job. Hence, the above function considered as impure function.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 77. What is the output of below code?

```javascript
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));
```

- 1: [{status: "fulfilled", value: undefined}, {status: "rejected", reason: undefined}]
- 2: [{status: "fulfilled", value: undefined}, Uncaught(in promise)]
- 3: Uncaught (in promise)
- 4: [Uncaught(in promise), Uncaught(in promise)]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

The above promises settled at the same time but one of them resolved and other one rejected. When you use `.all` method on these promises, the result will be short circuted by throwing an error due to rejection in second promise. But If you use `.allSettled` method then result of both the promises will be returned irrespective of resolved or rejected promise status without throwing any error.

```javascript
Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));
```

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 78. What is the output of below code?

```javascript
try {
  setTimeout(() => {
    console.log("try block");
    throw new Error(`An exception is thrown`);
  }, 1000);
} catch (err) {
  console.log("Error: ", err);
}
```

- 1: try block, Error: An exception is thrown
- 2: Error: An exception is thrown
- 3: try block, Uncaught Error: Exception is thrown
- 4: Uncaught Error: Exception is thrown

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

If you put `setTimeout` and `setInterval` methods inside the try clause and an exception is thrown, the catch clause will not catch any of them. This is because the try...catch statement works synchronously, and the function in the above code is executed asynchronously after a certain period of time. Hence, you will see runtime exception without catching the error. To resolve this issue, you have to put the try...catch block inside the function as below,

```javascript
setTimeout(() => {
  try {
    console.log("try block");
    throw new Error(`An exception is thrown`);
  } catch (err) {
    console.log("Error: ", err);
  }
}, 1000);
```

You can use `.catch()` function in promises to avoid these issues with asynchronous code.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 79. What is the output of below code?

```javascript
let a = 10;
if (true) {
  let a = 20;
  console.log(a, "inside");
}
console.log(a, "outside");
```

- 1: 20, "inside" and 20, "outside"
- 2: 20, "inside" and 10, "outside"
- 3: 10, "inside" and 10, "outside"
- 4: 10, "inside" and 20, "outside"

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 2

The variable "a" declared inside "if" has block scope and does not affect the value of the outer "a" variable.

</p>
</details>

---

**[⬆ Back to Top](#table-of-contents)**

#### 80. What is the output of below code?

```javascript
let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);
```

- 1: 0
- 2: Undefined
- 3: null
- 4: [ ]

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The length of the array 'arr' has been set to 0, so the array becomes empty.

</p>
</details>
---

**[⬆ Back to Top](#table-of-contents)**

#### 81. How do you verify two strings are anagrams or not?

An anagram is a word or phrase formed by rearranging all the letters of a different word or phrase exactly once. For example, the anagrams of "eat" word are "tea" and "ate".

You can split each word into characters, followed by sort action and later join them back. After that you can compare those two words to verify whether those two words are anagrams or not.

```javascript
function verifyAnagrams(word1, word2) {
  return word1.split("").sort().join("") === word2.split("").sort().join("");
}
console.log(verifyAnagrams("eat", "ate"));
```

**[⬆ Back to Top](#table-of-contents)**

#### 82. What is the output of below code?

```javascript
printHello();

printMessage();

function printHello() {
  console.log("Hello");

  function printMessage() {
    console.log("Good day");
  }
}
```

- 1: Hello, Good day
- 2: Reference Error: printHello is not defined, Reference Error: printMessage is not defined
- 3: Reference Error: printHello is not defined, Good day
- 4: Hello, Reference Error: printMessage is not defined

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 4

The function `printHello` is hoisted to the top of the global scope and prints "Hello" to the console. Even `printMessage` function is hoisted, but it is lifted to the local scope(in "printHello") it was declared in. That is the reason you will endup with reference error for second function call.

But if the second function is invoked in the first function itself, there won't be any reference error.

```javascript
printHello();

function printHello() {
  printMessage();
  console.log("Hello");

  function printMessage() {
    console.log("Good day");
  }
}
```

</p>
</details>
---

**[⬆ Back to Top](#table-of-contents)**

#### 83. What is the time taken to execute below timeout callback?

```javascript
console.log("Start code");

setTimeout(function () {
  console.log("Callback code");
}, 5000);

console.log("After callback");

let startTime = new Date().getTime();
let endTime = startTime;

while (endTime <= startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("End code");
```

- 1: > 10 sec
- 2: Immediately
- 3: < 10 sec
- 4: <= 5sec

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

Even though there is a timer of 5 seconds supplied to `setTimeout` callback, it won't get executed until the main thread is free and finished executing the remaining part of the code. In this example, the remaining code(while loop) takes 10seconds to finish it's execution. In the mean time, the callback will be stored in callback queue upon completion of its 5 seconds timer. After 10 seconds, the callback will be moved to callstack because the callstack is empty by poping out global execution context.

</p>
</details>

**[⬆ Back to Top](#table-of-contents)**

#### 84. What is the output of below code?

```javascript
let arr = ["wöchentlich", "Woche", "wäre", "Wann"];
console.log(arr.sort());
```

- 1: ['wöchentlich','Woche', 'wäre', 'Wann']
- 2: ['Wann', 'wäre', 'Woche', 'wöchentlich']
- 3: ['Wann', 'Woche', 'wäre', 'wöchentlich']
- 4: ['wäre', 'Wann', 'wöchentlich','Woche']

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

JavaScript has a native method sort that allows sorting an array of elements in-place. It will treat each element as a string and sort it alphabetically. But if you try to sort an array of strings which has non-ASCII characters, you will receive a strange result. This is because characters with an accent have higher character codes.

In this case, the sort order of an array is ['Wann', 'Woche', 'wäre', 'wöchentlich'].

If you want to sort an array of string values which has non-ASCII characters in an ascending order, there are two possible options like **localeCompare** and **Intl.Collator** provided by ECMAScript Internationalization API.

**localeCompare:**

```javascript
let arr = ["wöchentlich", "Woche", "wäre", "Wann"];
console.log(arr.sort((a, b) => a.localeCompare(b))); //['Wann', 'wäre', 'Woche', 'wöchentlich']
```

**Intl.Collator:**

```javascript
let arr = ["wöchentlich", "Woche", "wäre", "Wann"];
console.log(arr.sort(Intl.Collator().compare)); //['Wann', 'wäre', 'Woche', 'wöchentlich']
```

</p>
</details>

**[⬆ Back to Top](#table-of-contents)**

#### 85. What is the output of below code?

```javascript
function func(a, b = 2) {
  console.log(arguments.length);
}

func(undefined);
func();
```

- 1: 1, 0
- 2: 0, 0
- 3: 0, 1
- 4: 1, 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 1

If a function is called with `undefined`, the `undefined` value is treated as a parameter. But if the function is not passed with any parameters, the `arguments` object doesn't include any argument eventhough the function has default function parameter. Hence, the function invocation with `undefined` has one argument and function call without any arguments has 0 arguments.

</p>
</details>

#### 86. What is the output of below code?

```javascript
const numbers = [1, 2, 3];

// Count how many numbers are odd
let xorAccumulator = numbers.reduce((sum, value) => {
  return sum + (value % 2);
}, 0);

// IIFE applying XOR of each element shifted by its index
(function(arr) {
  for (let index = 0; index < arr.length; index++) {
    xorAccumulator ^= (arr[index] << index);
  }
})(numbers);

console.log(xorAccumulator);

```

- 1: 5
- 2: 7
- 3: 11
- 4: 1

<details><summary><b>Answer</b></summary>
<p>

##### Answer: 3

This question is really showcasing how JavaScript mixes array reduction with low-level bitwise tricks. The code first uses .reduce() to turn the array into a single value by counting how many elements are odd, then an IIFE immediately kicks in and loops through the array again, shifting each number left by its index and XOR-ing it into the accumulator. The whole vibe is about understanding how reduction works for summarizing arrays and how bit shifting plus XOR can transform values in a way that feels mathematical rather than typical JS.
</p>
</details>

**[⬆ Back to Top](#table-of-contents)**

## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

---