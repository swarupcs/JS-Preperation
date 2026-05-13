# React Interview Questions & Answers

https://github.com/sudheerj/reactjs-interview-questions
---



> Practice 280+ JavaScript coding interview questions in-browser. Built by ex-FAANG interviewers. No AI-generated fluff. No fake reviews. [Try GreatFrontEnd →](https://www.greatfrontend.com/questions/react-interview-questions?utm_source=github&utm_medium=referral&utm_campaign=sudheerj-react&fpr=sudheerj&gnrs=sudheerj) 💡

<div>
<p align="center">
  <a href="https://zerotomastery.io/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions">
    <img src="./images/collab/ztm.gif" alt="ZTM Logo" width="100%">
  </a>
</p>
</div>

> I recommend this [React course](https://zerotomastery.io/courses/learn-react/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions) to become top 10% at React and [this coding interview bootcamp](https://zerotomastery.io/courses/learn-data-structures-and-algorithms/?utm_source=github&utm_medium=sponsor&utm_campaign=reactjs-interview-questions) to ace your coding interview and actually get hired.

---

<div>
<p align="center">
  <a href="https://resumeloom.com/?ref=FZ818184">
    <img src="./images/collab/resumeloom1.png" alt="Resume Loom" width="100%" height="">
  </a>
</p>
</div>

---

**Note:** This repository is specific to ReactJS. Please check [JavaScript Interview Questions](https://github.com/sudheerj/javascript-interview-questions) for core JavaScript questions and [Data Structures and Algorithms](https://github.com/sudheerj/datastructures-algorithms) for DSA-related questions or problems.

### Table of Contents

<details open>
<summary>
Hide/Show table of contents
</summary>

| No. | Questions                                                                                                                                                                                                                        |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Core React**                                                                                                                                                                                                                   |
| 1   | [What is React?](#what-is-react)                                                                                                                                                                                                 |
| 2   | [What is the history behind React’s evolution?](#what-is-the-history-behind-react-evolution)                                                                                                                                      |
| 3   | [What are the major features of React?](#what-are-the-major-features-of-react)                                                                                                                                                   |
| 4   | [What is JSX?](#what-is-jsx)                                                                                                                                                                                                     |
| 5   | [What is the difference between an Element and a Component?](#what-is-the-difference-between-an-element-and-a-component)                                                                                                              |
| 6   | [How do you create components in React?](#how-to-create-components-in-react)                                                                                                                                                     |
| 7   | [When should you use a Class Component over a Function Component?](#when-to-use-a-class-component-over-a-function-component)                                                                                                    |
| 8   | [What are Pure Components?](#what-are-pure-components)                                                                                                                                                                           |
| 9   | [What is state in React?](#what-is-state-in-react)                                                                                                                                                                               |
| 10  | [What are props in React?](#what-are-props-in-react)                                                                                                                                                                             |
| 11  | [What is the difference between state and props?](#what-is-the-difference-between-state-and-props)                                                                                                                               |
| 12  | [What is the difference between HTML and React event handling?](#what-is-the-difference-between-html-and-react-event-handling)                                                                                                   |
| 13  | [What are synthetic events in React?](#what-are-synthetic-events-in-react)                                                                                                                                                       |
| 14  | [What are inline conditional expressions?](#what-are-inline-conditional-expressions)                                                                                                                                             |
| 15  | [What is the "key" prop and what is its benefit when used in arrays of elements?](#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements)                                                                    |
| 16  | [What is the Virtual DOM?](#what-is-virtual-dom)                                                                                                                                                                                 |
| 17  | [How does the Virtual DOM work?](#how-virtual-dom-works)                                                                                                                                                                         |
| 18  | [What is the difference between Shadow DOM and Virtual DOM?](#what-is-the-difference-between-shadow-dom-and-virtual-dom)                                                                                                         |
| 19  | [What is React Fiber?](#what-is-react-fiber)                                                                                                                                                                                     |
| 20  | [What is the main goal of React Fiber?](#what-is-the-main-goal-of-react-fiber)                                                                                                                                                   |
| 21  | [What are controlled components?](#what-are-controlled-components)                                                                                                                                                               |
| 22  | [What are uncontrolled components?](#what-are-uncontrolled-components)                                                                                                                                                           |
| 23  | [What is the difference between createElement and cloneElement?](#what-is-the-difference-between-createelement-and-cloneelement)                                                                                                 |
| 24  | [What is Lifting State Up in React?](#what-is-lifting-state-up-in-react)                                                                                                                                                         |
| 25  | [What are Higher-Order Components?](#what-are-higher-order-components)                                                                                                                                                           |
| 26  | [What is the children prop?](#what-is-children-prop)                                                                                                                                                                             |
| 27  | [How do you write comments in React?](#how-to-write-comments-in-react)                                                                                                                                                           |
| 28  | [What is reconciliation?](#what-is-reconciliation)                                                                                                                                                                               |
| 29  | [Does the lazy function support named exports?](#does-the-lazy-function-support-named-exports)                                                                                                                                   |
| 30  | [Why does React use className instead of the class attribute?](#why-react-uses-classname-over-class-attribute)                                                                                                                   |
| 31  | [What are Fragments?](#what-are-fragments)                                                                                                                                                                                       |
| 32  | [Why are Fragments better than container divs?](#why-fragments-are-better-than-container-divs)                                                                                                                                   |
| 33  | [What are portals in React?](#what-are-portals-in-react)                                                                                                                                                                         |
| 34  | [What are stateless components?](#what-are-stateless-components)                                                                                                                                                                 |
| 35  | [What are stateful components?](#what-are-stateful-components)                                                                                                                                                                   |
| 36  | [How do you apply validation to props in React?](#how-to-apply-validation-on-props-in-react)                                                                                                                                     |
| 37  | [What are the advantages of React?](#what-are-the-advantages-of-react)                                                                                                                                                           |
| 38  | [What are the limitations of React?](#what-are-the-limitations-of-react)                                                                                                                                                         |
| 39  | [What are the recommended ways for static type checking?](#what-are-the-recommended-ways-for-static-type-checking)                                                                                                               |
| 40  | [What is the use of the react-dom package?](#what-is-the-use-of-react-dom-package)                                                                                                                                               |
| 41  | [What is ReactDOMServer?](#what-is-reactdomserver)                                                                                                                                                                               |
| 42  | [How do you use innerHTML in React?](#how-to-use-innerhtml-in-react)                                                                                                                                                             |
| 43  | [How do you apply styles in React?](#how-to-use-styles-in-react)                                                                                                                                                                 |
| 44  | [How are events different in React?](#how-events-are-different-in-react)                                                                                                                                                         |
| 45  | [What is the impact of using indexes as keys?](#what-is-the-impact-of-indexes-as-keys)                                                                                                                                          |
| 46  | [How do you conditionally render components?](#how-do-you-conditionally-render-components)                                                                                                                                       |
| 47  | [Why do we need to be careful when spreading props on DOM elements?](#why-we-need-to-be-careful-when-spreading-props-on-dom-elements)                                                                                             |
| 48  | [How do you memoize a component?](#how-do-you-memoize-a-component)                                                                                                                                                               |
| 49  | [How do you implement Server-Side Rendering (SSR)?](#how-you-implement-server-side-rendering-or-ssr)                                                                                                                              |
| 50  | [How do you enable production mode in React?](#how-to-enable-production-mode-in-react)                                                                                                                                           |
| 51  | [Do Hooks replace render props and higher-order components?](#do-hooks-replace-render-props-and-higher-order-components)                                                                                                         |
| 52  | [What is a switching component?](#what-is-a-switching-component)                                                                                                                                                                 |
| 53  | [What are React Mixins?](#what-are-react-mixins)                                                                                                                                                                                 |
| 54  | [What are the pointer events supported in React?](#what-are-the-pointer-events-supported-in-react)                                                                                                                               |
| 55  | [Why should component names start with a capital letter?](#why-should-component-names-start-with-capital-letter)                                                                                                                  |
| 56  | [Are custom DOM attributes supported in React v16?](#are-custom-dom-attributes-supported-in-react-v16)                                                                                                                           |
| 57  | [How do you loop inside JSX?](#how-to-loop-inside-jsx)                                                                                                                                                                           |
| 58  | [How do you access props within attribute quotes?](#how-do-you-access-props-in-attribute-quotes)                                                                                                                                 |
| 59  | [What is a React PropType array with shape?](#what-is-react-proptype-array-with-shape)                                                                                                                                           |
| 60  | [How do you conditionally apply class attributes?](#how-to-conditionally-apply-class-attributes)                                                                                                                                 |
| 61  | [What is the difference between React and ReactDOM?](#what-is-the-difference-between-react-and-reactdom)                                                                                                                         |
| 62  | [Why is ReactDOM separated from React?](#why-reactdom-is-separated-from-react)                                                                                                                                                   |
| 63  | [How do you use the React label element?](#how-to-use-react-label-element)                                                                                                                                                       |
| 64  | [How do you combine multiple inline style objects?](#how-to-combine-multiple-inline-style-objects)                                                                                                                               |
| 65  | [How do you re-render the view when the browser is resized?](#how-to-re-render-the-view-when-the-browser-is-resized)                                                                                                             |
| 66  | [How do you pretty-print JSON with React?](#how-to-pretty-print-json-with-react)                                                                                                                                                 |
| 67  | [Why can’t you update props in React?](#why-you-cant-update-props-in-react)                                                                                                                                                      |
| 68  | [How do you focus an input element on page load?](#how-to-focus-an-input-element-on-page-load)                                                                                                                                   |
| 69  | [How can you find the version of React at runtime in the browser?](#how-can-we-find-the-version-of-react-at-runtime-in-the-browser)                                                                                              |
| 70  | [How do you add Google Analytics for React Router?](#how-to-add-google-analytics-for-react-router)                                                                                                                               |
| 71  | [How do you apply vendor prefixes to inline styles in React?](#how-do-you-apply-vendor-prefixes-to-inline-styles-in-react)                                                                                                       |
| 72  | [How do you import and export components using React and ES6?](#how-to-import-and-export-components-using-react-and-es6)                                                                                                         |
| 73  | [What are the exceptions to React component naming?](#what-are-the-exceptions-on-react-component-naming)                                                                                                                         |
| 74  | [Is it possible to use async/await in plain React?](#is-it-possible-to-use-asyncawait-in-plain-react)                                                                                                                            |
| 75  | [What are common folder structures for React?](#what-are-the-common-folder-structures-for-react)                                                                                                                                 |
| 76  | [What are popular packages for animation?](#what-are-the-popular-packages-for-animation)                                                                                                                                         |
| 77  | [What are the benefits of style modules?](#what-is-the-benefit-of-styles-modules)                                                                                                                                                |
| 78  | [What are popular React-specific linters?](#what-are-the-popular-react-specific-linters)                                                                                                                                         |
|     | **React Router**                                                                                                                                                                                                                 |
| 79  | [What is React Router?](#what-is-react-router)                                                                                                                                                                                   |
| 80  | [How is React Router different from the history library?](#how-react-router-is-different-from-history-library)                                                                                                                   |
| 81  | [What are the <Router> components of React Router v6?](#what-are-the-router-components-of-react-router-v6)                                                                                                                       |
| 82  | [What is the purpose of the push and replace methods of history?](#what-is-the-purpose-of-push-and-replace-methods-of-history)                                                                                                   |
| 83  | [How do you programmatically navigate using React Router v4?](#how-do-you-programmatically-navigate-using-react-router-v4)                                                                                                       |
| 84  | [How do you get query parameters in React Router v4?](#how-to-get-query-parameters-in-react-router-v4)                                                                                                                           |
| 85  | [Why do you get a "Router may have only one child element" warning?](#why-you-get-router-may-have-only-one-child-element-warning)                                                                                                |
| 86  | [How do you pass params to the history.push method in React Router v4?](#how-to-pass-params-to-historypush-method-in-react-router-v4)                                                                                            |
| 87  | [How do you implement a default or NotFound page?](#how-to-implement-default-or-notfound-page)                                                                                                                                   |
| 88  | [How do you get history in React Router v4?](#how-to-get-history-on-react-router-v4)                                                                                                                                             |
| 89  | [How do you perform an automatic redirect after login?](#how-to-perform-automatic-redirect-after-login) 
|     | **React Internationalization**                                                                                                                                                                                                   |
| 90  | [What is React Intl?](#what-is-react-intl)                                                                                                                                                                                       |
| 91  | [What are the main features of React Intl?](#what-are-the-main-features-of-react-intl)                                                                                                                                           |
| 92  | [What are the two ways of formatting in React Intl?](#what-are-the-two-ways-of-formatting-in-react-intl)                                                                                                                         |
| 93  | [How do you use FormattedMessage as a placeholder with React Intl?](#how-to-use-formattedmessage-as-placeholder-using-react-intl)                                                                                                |
| 94  | [How do you access the current locale with React Intl?](#how-to-access-current-locale-with-react-intl)                                                                                                                           |
| 95  | [How do you format a date using React Intl?](#how-to-format-date-using-react-intl)                                                                                                                                               |
|     | **React Testing**                                                                                                                                                                                                                |
| 96  | [What is the Shallow Renderer in React testing?](#what-is-shallow-renderer-in-react-testing)                                                                                                                                     |
| 97  | [What is the TestRenderer package in React?](#what-is-testrenderer-package-in-react)                                                                                                                                             |
| 98  | [What is the purpose of the ReactTestUtils package?](#what-is-the-purpose-of-reacttestutils-package)                                                                                                                             |
| 99  | [What is Jest?](#what-is-jest)                                                                                                                                                                                                   |
| 100 | [What are the advantages of Jest over Jasmine?](#what-are-the-advantages-of-jest-over-jasmine)                                                                                                                                   |
| 101 | [Can you give a simple example of a Jest test case?](#give-a-simple-example-of-jest-test-case)                                                                                                                                   |
|     | **React Redux**                                                                                                                                                                                                                  |
| 102 | [What is Flux?](#what-is-flux)                                                                                                                                                                                                   |
| 103 | [What is Redux?](#what-is-redux)                                                                                                                                                                                                 |
| 104 | [What are the core principles of Redux?](#what-are-the-core-principles-of-redux)                                                                                                                                                 |
| 105 | [What are the downsides of Redux compared to Flux?](#what-are-the-downsides-of-redux-compared-to-flux)                                                                                                                           |
| 106 | [What is the difference between mapStateToProps() and mapDispatchToProps()?](#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops)                                                                             |
| 107 | [Can you dispatch an action in a reducer?](#can-i-dispatch-an-action-in-reducer)                                                                                                                                                 |
| 108 | [How do you access the Redux store outside a component?](#how-to-access-redux-store-outside-a-component)                                                                                                                         |
| 109 | [What are the drawbacks of the MVW pattern?](#what-are-the-drawbacks-of-mvw-pattern)                                                                                                                                            |
| 110 | [Are there any similarities between Redux and RxJS?](#are-there-any-similarities-between-redux-and-rxjs)                                                                                                                         |
| 111 | [How do you reset state in Redux?](#how-to-reset-state-in-redux)                                                                                                                                                                 |
| 112 | [What is the difference between React Context and React Redux?](#what-is-the-difference-between-react-context-and-react-redux)                                                                                                   |
| 113 | [Why are Redux state functions called reducers?](#why-are-redux-state-functions-called-reducers)                                                                                                                                 |
| 114 | [How do you make an AJAX request in Redux?](#how-to-make-ajax-request-in-redux)                                                                                                                                                  |
| 115 | [Should you keep all component states in the Redux store?](#should-i-keep-all-components-state-in-redux-store)                                                                                                                   |
| 116 | [What is the proper way to access the Redux store?](#what-is-the-proper-way-to-access-redux-store)                                                                                                                               |
| 117 | [What is the difference between a component and a container in React Redux?](#what-is-the-difference-between-component-and-container-in-react-redux)                                                                               |
| 118 | [What is the purpose of constants in Redux?](#what-is-the-purpose-of-the-constants-in-redux)                                                                                                                                     |
| 119 | [What are the different ways to write mapDispatchToProps()?](#what-are-the-different-ways-to-write-mapdispatchtoprops)                                                                                                           |
| 120 | [What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?](#what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops)                                                 |
| 121 | [How do you structure Redux top-level directories?](#how-to-structure-redux-top-level-directories)                                                                                                                               |
| 122 | [What is Redux Saga?](#what-is-redux-saga)                                                                                                                                                                                       |
| 123 | [What is the mental model of Redux Saga?](#what-is-the-mental-model-of-redux-saga)                                                                                                                                               |
| 124 | [What are the differences between call and put in Redux Saga?](#what-are-the-differences-between-call-and-put-in-redux-saga)                                                                                                     |
| 125 | [What is Redux Thunk?](#what-is-redux-thunk)                                                                                                                                                                                     |
| 126 | [What are the differences between Redux Saga and Redux Thunk?](#what-are-the-differences-between-redux-saga-and-redux-thunk)                                                                                                     |
| 127 | [What is Redux DevTools?](#what-is-redux-devtools)                                                                                                                                                                               |
| 128 | [What are the features of Redux DevTools?](#what-are-the-features-of-redux-devtools)                                                                                                                                             |
| 129 | [What are Redux selectors and why should you use them?](#what-are-redux-selectors-and-why-use-them)                                                                                                                              |
| 130 | [What is Redux Form?](#what-is-redux-form)                                                                                                                                                                                       |
| 131 | [What are the main features of Redux Form?](#what-are-the-main-features-of-redux-form)                                                                                                                                           |
| 132 | [How do you add multiple middlewares to Redux?](#how-to-add-multiple-middlewares-to-redux)                                                                                                                                       |
| 133 | [How do you set the initial state in Redux?](#how-to-set-initial-state-in-redux)                                                                                                                                                 |
| 134 | [How is Relay different from Redux?](#how-relay-is-different-from-redux)                                                                                                                                                         |
| 135 | [What is an action in Redux?](#what-is-an-action-in-redux)                                                                                                                                                                       |
|     | **React Native**                                                                                                                                                                                                                 |
| 136 | [What is the difference between React Native and React?](#what-is-the-difference-between-react-native-and-react)                                                                                                                 |
| 137 | [How do you test React Native apps?](#how-to-test-react-native-apps)                                                                                                                                                             |
| 138 | [How do you log in React Native?](#how-to-do-logging-in-react-native)                                                                                                                                                            |
| 139 | [How do you debug React Native apps?](#how-to-debug-your-react-native)                                                                                                                                                           |
|     | **React Supported Libraries and Integration**                                                                                                                                                                                    |
| 140 | [What is Reselect and how does it work?](#what-is-reselect-and-how-it-works)                                                                                                                                                     |
| 141 | [What is Flow?](#what-is-flow)                                                                                                                                                                                                   |
| 142 | [What is the difference between Flow and PropTypes?](#what-is-the-difference-between-flow-and-proptypes)                                                                                                                         |
| 143 | [How do you use Font Awesome icons in React?](#how-to-use-font-awesome-icons-in-react)                                                                                                                                           |
| 144 | [What is React DevTools?](#what-is-react-dev-tools)                                                                                                                                                                              |
| 145 | [Why does DevTools not load in Chrome for local files?](#why-is-devtools-not-loading-in-chrome-for-local-files)                                                                                                                  |
| 146 | [How do you use Polymer in React?](#how-to-use-polymer-in-react)                                                                                                                                                                 |
| 147 | [What are the advantages of React over Vue.js?](#what-are-the-advantages-of-react-over-vuejs)                                                                                                                                    |
| 148 | [What is the difference between React and Angular?](#what-is-the-difference-between-react-and-angular)                                                                                                                           |
| 149 | [Why is the React tab not showing up in DevTools?](#why-react-tab-is-not-showing-up-in-devtools)                                                                                                                                 |
| 150 | [What are styled-components?](#what-are-styled-components)                                                                                                                                                                       |
| 151 | [Can you give an example of styled-components?](#give-an-example-of-styled-components)                                                                                                                                           |
| 152 | [What is Relay?](#what-is-relay)                                                                                                                                                                                                 |
|     | **Miscellaneous**                                                                                                                                                                                                                |
| 153 | [What are the main features of the Reselect library?](#what-are-the-main-features-of-reselect-library)                                                                                                                           |
| 154 | [Can you give an example of Reselect usage?](#give-an-example-of-reselect-usage)                                                                                                                                                 |
| 155 | [Can Redux only be used with React?](#can-redux-only-be-used-with-react)                                                                                                                                                         |
| 156 | [Do you need a specific build tool to use Redux?](#do-you-need-to-have-a-particular-build-tool-to-use-redux)                                                                                                                     |
| 157 | [How do Redux Form initial values get updated from state?](#how-redux-form-initialvalues-get-updated-from-state)                                                                                                                 |
| 158 | [How do React PropTypes allow different types for one prop?](#how-react-proptypes-allow-different-types-for-one-prop)                                                                                                             |
| 159 | [Can you import an SVG file as a React component?](#can-i-import-an-svg-file-as-react-component)                                                                                                                                  |
| 160 | [What is render hijacking in React?](#what-is-render-hijacking-in-react)                                                                                                                                                         |
| 161 | [How do you pass numbers to a React component?](#how-to-pass-numbers-to-react-component)                                                                                                                                         |
| 162 | [Do you need to keep all state in Redux? Should you ever use React’s internal state?](#do-i-need-to-keep-all-my-state-into-redux-should-i-ever-use-react-internal-state)                                                          |
| 163 | [What is the purpose of registerServiceWorker in React?](#what-is-the-purpose-of-registerserviceworker-in-react)                                                                                                                 |
| 164 | [What is the React.memo function?](#what-is-react-memo-function)                                                                                                                                                                 |
| 165 | [What is the React.lazy function?](#what-is-react-lazy-function)                                                                                                                                                                 |
| 166 | [How do you prevent unnecessary updates using setState?](#how-to-prevent-unnecessary-updates-using-setstate)                                                                                                                     |
| 167 | [How do you render arrays, strings, and numbers in React v16?](#how-do-you-render-array-strings-and-numbers-in-react-16-version)                                                                                                  |
| 168 | [What are Hooks?](#what-are-hooks)                                                                                                                                                                                               |
| 169 | [What rules must be followed for Hooks?](#what-rules-need-to-be-followed-for-hooks)                                                                                                                                             |
| 170 | [How do you ensure Hooks follow the rules in your project?](#how-to-ensure-hooks-followed-the-rules-in-your-project)                                                                                                             |
| 171 | [What are the differences between Flux and Redux?](#what-are-the-differences-between-flux-and-redux)                                                                                                                             |
| 172 | [What are the benefits of React Router v4?](#what-are-the-benefits-of-react-router-v4)                                                                                                                                           |
| 173 | [Can you describe the componentDidCatch lifecycle method signature?](#can-you-describe-about-componentdidcatch-lifecycle-method-signature)                                                                                       |
| 174 | [In which scenarios do error boundaries not catch errors?](#in-which-scenarios-do-error-boundaries-not-catch-errors)                                                                                                             |
| 175 | [What is the behavior of uncaught errors in React v16?](#what-is-the-behavior-of-uncaught-errors-in-react-16)                                                                                                                    |
| 176 | [What is the proper placement for error boundaries?](#what-is-the-proper-placement-for-error-boundaries)                                                                                                                         |
| 177 | [What is the benefit of a component stack trace from an error boundary?](#what-is-the-benefit-of-component-stack-trace-from-error-boundary)                                                                                       |
| 178 | [What are default props?](#what-are-default-props)                                                                                                                                                                               |
| 179 | [What is the purpose of the displayName class property?](#what-is-the-purpose-of-displayname-class-property)                                                                                                                     |
| 180 | [What is the browser support for React applications?](#what-is-the-browser-support-for-react-applications)                                                                                                                       |
| 181 | [What is code-splitting?](#what-is-code-splitting)                                                                                                                                                                               |
| 182 | [What are keyed Fragments?](#what-are-keyed-fragments)                                                                                                                                                                           |
| 183 | [Does React support all HTML attributes?](#does-react-support-all-html-attributes)                                                                                                                                               |
| 184 | [When do component props default to true?](#when-component-props-defaults-to-true)                                                                                                                                               |
| 185 | [What is Next.js and what are its major features?](#what-is-nextjs-and-major-features-of-it)                                                                                                                                     |
| 186 | [How do you pass an event handler to a component?](#how-do-you-pass-an-event-handler-to-a-component)                                                                                                                             |
| 187 | [How do you prevent a function from being called multiple times?](#how-to-prevent-a-function-from-being-called-multiple-times)                                                                                                   |
| 188 | [How does JSX prevent injection attacks?](#how-jsx-prevents-injection-attacks)                                                                                                                                                   |
| 189 | [How do you update rendered elements?](#how-do-you-update-rendered-elements)                                                                                                                                                     |
| 190 | [How do you indicate that props are read-only?](#how-do-you-say-that-props-are-read-only)                                                                                                                                        |
| 191 | [What are the conditions for safely using an index as a key?](#what-are-the-conditions-to-safely-use-the-index-as-a-key)                                                                                                         |
| 192 | [Do keys need to be globally unique?](#is-it-keys-should-be-globally-unique)                                                                                                                                                     |
| 193 | [What is the popular choice for form handling?](#what-is-the-popular-choice-for-form-handling)                                                                                                                                   |
| 194 | [What are the advantages of Formik over the Redux Form library?](#what-are-the-advantages-of-formik-over-redux-form-library)                                                                                                     |
| 195 | [Why are you not required to use inheritance?](#why-do-you-not-required-to-use-inheritance)                                                                                                                                       |
| 196 | [Can you use web components in a React application?](#can-i-use-web-components-in-react-application)                                                                                                                             |
| 197 | [What is a dynamic import?](#what-is-dynamic-import)                                                                                                                                                                             |
| 198 | [What are loadable components?](#what-are-loadable-components)                                                                                                                                                                   |
| 199 | [What is a Suspense component?](#what-is-suspense-component)                                                                                                                                                                     |
| 200 | [What is route-based code splitting?](#what-is-route-based-code-splitting)                                                                                                                                                       |
| 201 | [What is the purpose of the default value in Context?](#what-is-the-purpose-of-default-value-in-context)                                                                                                                         |
| 202 | [What is the diffing algorithm?](#what-is-diffing-algorithm)                                                                                                                                                                     |
| 203 | [What rules are covered by the diffing algorithm?](#what-are-the-rules-covered-by-diffing-algorithm)                                                                                                                             |
| 204 | [When do you need to use refs?](#when-do-you-need-to-use-refs)                                                                                                                                                                   |
| 205 | [Must a prop be named "render" for render props?](#is-it-prop-must-be-named-as-render-for-render-props)                                                                                                                          |
| 206 | [What are the problems with using render props with Pure Components?](#what-are-the-problems-of-using-render-props-with-pure-components)                                                                                         |
| 207 | [What is the windowing technique?](#what-is-windowing-technique)                                                                                                                                                                 |
| 208 | [How do you print falsy values in JSX?](#how-do-you-print-falsy-values-in-jsx)                                                                                                                                                   |
| 209 | [What is the typical use case for portals?](#what-is-the-typical-use-case-of-portals)                                                                                                                                           |
| 210 | [How do you set a default value for an uncontrolled component?](#how-do-you-set-default-value-for-uncontrolled-component)                                                                                                         |
| 211 | [What is your favorite React stack?](#what-is-your-favorite-react-stack)                                                                                                                                                         |
| 212 | [What is the difference between the real DOM and the Virtual DOM?](#what-is-the-difference-between-real-dom-and-virtual-dom)                                                                                                     |
| 213 | [How do you add Bootstrap to a React application?](#how-to-add-bootstrap-to-a-react-application)                                                                                                                                 |
| 214 | [Can you list the top websites or applications using React as a front-end framework?](#can-you-list-down-top-websites-or-applications-using-react-as-front-end-framework)                                                         |
| 215 | [Is it recommended to use the CSS-in-JS technique in React?](#is-it-recommended-to-use-css-in-js-technique-in-react)                                                                                                             |
| 216 | [Do you need to rewrite all class components with Hooks?](#do-i-need-to-rewrite-all-my-class-components-with-hooks)                                                                                                              |
| 217 | [How do you fetch data with React Hooks?](#how-to-fetch-data-with-react-hooks)                                                                                                                                                   |
| 218 | [Do Hooks cover all use cases for classes?](#is-hooks-cover-all-use-cases-for-classes)                                                                                                                                           |
| 219 | [What is the stable release for Hooks support?](#what-is-the-stable-release-for-hooks-support)                                                                                                                                   |
| 220 | [Why do we use array destructuring (square bracket notation) in useState?](#why-do-we-use-array-destructuring-square-brackets-notation-in-usestate)                                                                               |
| 221 | [What sources were used for introducing Hooks?](#what-are-the-sources-used-for-introducing-hooks)                                                                                                                                |
| 222 | [How do you access the imperative API of web components?](#how-do-you-access-imperative-api-of-web-components)                                                                                                                   |
| 223 | [What is Formik?](#what-is-formik)                                                                                                                                                                                               |
| 224 | [What are typical middleware choices for handling asynchronous calls in Redux?](#what-are-typical-middleware-choices-for-handling-asynchronous-calls-in-redux)                                                                     |
| 225 | [Do browsers understand JSX code?](#do-browsers-understand-jsx-code)                                                                                                                                                             |
| 226 | [Can you describe data flow in React?](#describe-about-data-flow-in-react)                                                                                                                                                       |
| 227 | [What is MobX?](#what-is-mobx)                                                                                                                                                                                                   |
| 228 | [What are the differences between Redux and MobX?](#what-are-the-differences-between-redux-and-mobx)                                                                                                                             |
| 229 | [Should you learn ES6 before learning ReactJS?](#should-i-learn-es6-before-learning-reactjs)                                                                                                                                     |
| 230 | [What is concurrent rendering?](#what-is-concurrent-rendering)                                                                                                                                                                   |
| 231 | [What is the difference between async mode and concurrent mode?](#what-is-the-difference-between-async-mode-and-concurrent-mode)                                                                                                 |
| 232 | [Can you use JavaScript URLs in React v16.9?](#can-i-use-javascript-urls-in-react169)                                                                                                                                            |
| 233 | [What is the purpose of the ESLint plugin for Hooks?](#what-is-the-purpose-of-eslint-plugin-for-hooks)                                                                                                                           |
| 234 | [What is the difference between imperative and declarative programming in React?](#what-is-the-difference-between-imperative-and-declarative-in-react)                                                                             |
| 235 | [What are the benefits of using TypeScript with ReactJS?](#what-are-the-benefits-of-using-typescript-with-reactjs)                                                                                                               |
| 236 | [How do you ensure a user remains authenticated on page refresh while using Context API state management?](#how-do-you-make-sure-that-user-remains-authenticated-on-page-refresh-while-using-context-api-state-management)         |
| 237 | [What are the benefits of the new JSX transform?](#what-are-the-benefits-of-new-jsx-transform)                                                                                                                                   |
| 238 | [How is the new JSX transform different from the old transform?](#how-is-the-new-jsx-transform-different-from-old-transform)                                                                                                     |
| 239 | [What are React Server Components?](#what-are-react-server-components)                                                                                                                                                           |
| 240 | [What is prop drilling?](#what-is-prop-drilling)                                                                                                                                                                                 |
| 241 | [What is the difference between the useState and useRef Hooks?](#what-is-the-difference-between-usestate-and-useref-hook)                                                                                                       |
| 242 | [What is a wrapper component?](#what-is-a-wrapper-component)                                                                                                                                                                     |
| 243 | [What are the differences between the useEffect and useLayoutEffect Hooks?](#what-are-the-differences-between-useeffect-and-uselayouteffect-hooks)                                                                               |
| 244 | [What are the differences between functional and class components?](#what-are-the-differences-between-functional-and-class-components)                                                                                           |
| 245 | [What is Strict Mode in React?](#what-is-strict-mode-in-react)                                                                                                                                                                   |
| 246 | [What is the benefit of Strict Mode?](#what-is-the-benefit-of-strict-mode)                                                                                                                                                       |
| 247 | [Why does Strict Mode render twice in React?](#why-does-strict-mode-render-twice-in-react)                                                                                                                                       |
| 248 | [What are the rules of JSX?](#what-are-the-rules-of-jsx)                                                                                                                                                                         |
| 249 | [What is the reason multiple JSX tags must be wrapped?](#what-is-the-reason-behind-multiple-jsx-tags-to-be-wrapped)                                                                                                              |
| 250 | [How do you prevent mutating array variables?](#how-do-you-prevent-mutating-array-variables)                                                                                                                                     |
| 251 | [What are capture phase events?](#what-are-capture-phase-events)                                                                                                                                                                 |
| 252 | [How does React update the screen in an application?](#how-does-react-updates-screen-in-an-application)                                                                                                                          |
| 253 | [How does React batch multiple state updates?](#how-does-react-batch-multiple-state-updates)                                                                                                                                     |
| 254 | [Is it possible to prevent automatic batching?](#is-it-possible-to-prevent-automatic-batching)                                                                                                                                   |
| 255 | [What is React hydration?](#what-is-react-hydration)                                                                                                                                                                             |
| 256 | [How do you update objects inside state?](#how-do-you-update-objects-inside-state)                                                                                                                                               |
| 257 | [How do you update nested objects inside state?](#How-do-you-update-nested-objects-inside-state)                                                                                                                                 |
| 258 | [How do you update arrays inside state?](#how-do-you-update-arrays-inside-state)                                                                                                                                                 |
| 259 | [How do you use the Immer library for state updates?](#how-do-you-use-immer-library-for-state-updates)                                                                                                                           |
| 260 | [What are the benefits of preventing direct state mutations?](#what-are-the-benefits-of-preventing-the-direct-state-mutations)                                                                                                 |
| 261 | [What are the preferred and non-preferred array operations for updating state?](#what-are-the-preferred-and-non-preferred-array-operations-for-updating-the-state)                                                             |
| 262 | [What will happen when defining nested function components?](#what-will-happen-by-defining-nested-function-components)                                                                                                         |
| 263 | [Can I use keys for non-list items?](#can-i-use-keys-for-non-list-items)                                                                                                                                                         |
| 264 | [What are the guidelines to follow for writing reducers?](#what-are-the-guidelines-to-be-followed-for-writing-reducers)                                                                                                       |
|     | **Hooks**                                                                                                                                                                                                                 |
| 265 | [What is useReducer hook? Can you describe its usage?](#what-is-use-reducer-hook-can-you-describe-its-usage)                                                                                                               |
| 266 | [How do you compare useState and useReducer?](#how-do-you-compare-use-state-and-use-reducer)                                                                                                                                     |
| 267 | [How does Context work with the useContext hook?](#how-does-context-works-using-usecontext-hook)                                                                                                                                 |
| 268 | [What are the use cases of the useContext hook?](#what-are-the-use-cases-of-usecontext-hook)                                                                                                                                     |
| 269 | [When should you use client and server components?](#when-to-use-client-and-server-components)                                                                                                                                   |
| 270 | [What are the differences between the Page Router and App Router in Next.js?](#what-are-the-differences-between-page-router-and-app-router-in-nextjs)                                                                            |
| 271 | [Can you describe the useMemo() Hook?](#can-you-describe-the-usememo-hook)                                                                                                                                                       |
| 272 | [Can Hooks be used in class components?](#can-hooks-be-used-in-class-components)                                                                                                                                                 |
| 273 | [What is an updater function? Should an updater function be used in all cases?](#what-is-an-updater-function-should-an-updater-function-be-used-in-all-cases)                                                                    |
| 274 | [Can useState take a function as an initial value?](#can-usestate-take-a-function-as-an-initial-value)                                                                                                                           |
| 275 | [What types of values can useState hold?](#what-types-of-values-can-usestate-hold)                                                                                                                                               |
| 276 | [What happens if you call useState conditionally?](#what-happens-if-you-call-usestate-conditionally)                                                                                                                             |
| 277 | [Is useState Synchronous or Asynchronous?](#is-usestate-synchronous-or-asynchronous)                                                                                                                                             |
| 278 | [Can you explain how useState works internally?](#can-you-explain-how-usestate-works-internally)                                                                                                                                 |
| 279 | [What is useReducer? Why do you use useReducer?](#what-is-usereducer-why-do-you-use-usereducer)                                                                                                                                   |
| 280 | [How does useReducer work? Explain with an example](#how-does-usereducer-works-explain-with-an-example)                                                                                                                          |
| 281 | [Can you combine useReducer with useContext?](#can-you-combine-usereducer-with-usecontext)                                                                                                                                       |
| 282 | [Can you dispatch multiple actions in a row with useReducer?](#can-you-dispatch-multiple-actions-in-a-row-with-usereducer)                                                                                                       |
| 283 | [Is dispatch from useReducer asynchronous and does it update state immediately?](#is-dispatch-from-usereducer-asynchronous-and-does-it-update-state-immediately)                                                                 |
| 284 | [How does useContext work? Explain with an example](#how-does-usecontext-works-explain-with-an-example)                                                                                                                          |
| 285 | [Can you use multiple Contexts in one component?](#can-you-use-multiple-contexts-in-one-component)                                                                                                                               |
| 286 | [What's a common pitfall when using useContext with objects?](#whats-a-common-pitfall-when-using-usecontext-with-objects)                                                                                                        |
| 287 | [What would the context value be for no matching provider?](#what-would-the-context-value-be-for-no-matching-provider)                                                                                                           |
| 288 | [How do reactive dependencies in the useEffect dependency array affect its execution behavior?](#how-do-reactive-dependencies-in-the-useeffect-dependency-array-affect-its-execution-behavior)                                   |
| 289 | [When and how often does React invoke the setup and cleanup functions inside a useEffect hook?](#when-and-how-often-does-react-invoke-the-setup-and-cleanup-functions-inside-a-useeffect-hook)                                   |
| 290 | [What happens if you return a Promise from useEffect?](#what-happens-if-you-return-a-promise-from-useeffect)                                                                                                                     |
| 291 | [Can you have multiple useEffect hooks in a single component?](#can-you-have-multiple-useeffect-hooks-in-a-single-component)                                                                                                     |
| 292 | [How to prevent infinite loops with useEffect?](#how-to-prevent-infinite-loops-with-useeffect)                                                                                                                                   |
| 293 | [What are the use cases of useLayoutEffect?](#what-are-the-usecases-of-uselayouteffect)                                                                                                                                          |
| 294 | [How does useLayoutEffect work during server-side rendering (SSR)?](#how-does-uselayouteffect-work-during-server-side-rendering-ssr)                                                                                             |
| 295 | [What happens if you use useLayoutEffect for non-layout logic?](#what-happens-if-you-use-uselayouteffect-for-non-layout-logic)                                                                                                   |
| 296 | [How does useLayoutEffect cause layout thrashing?](#how-does-uselayouteffect-cause-layout-thrashing)                                                                                                                             |
| 297 | [How do you use useRef to access a DOM element in React? Give an example](#how-do-you-use-useref-to-access-a-dom-element-in-react-give-an-example)                                                                               |
| 298 | [Can you use useRef to persist values across renders?](#can-you-use-useref-to-persist-values-across-renders)                                                                                                                     |
| 299 | [Can useRef be used to store previous values?](#can-useref-be-used-to-store-previous-values)                                                                                                                                     |
| 300 | [Is it possible to access a ref in the render method?](#is-it-possible-to-access-a-ref-in-the-render-method)                                                                                                                     |
| 301 | [What are the common use cases of useRef hook?](#what-are-the-common-usecases-of-useref-hook)                                                                                                                                    |
| 302 | [What is useImperativeHandle Hook? Give an example](#what-is-useimperativehandle-hook-give-an-example)                                                                                                                           |
| 303 | [When should you use useImperativeHandle?](#when-should-you-use-useimperativehandle)                                                                                                                                             |
| 304 | [Is it possible to use useImperativeHandle without forwardRef?](#is-that-possible-to-use-useimperativehandle-without-forwardref)                                                                                                 |
| 305 | [How is useMemo different from useCallback?](#how-is-usememo-different-from-usecallback)                                                                                                                                         |
| 306 | [Does useMemo prevent re-rendering of child components?](#does-usememo-prevent-re-rendering-of-child-components)                                                                                                                 |
| 307 | [What is useCallback and why is it used?](#what-is-usecallback-and-why-is-it-used)                                                                                                                                               |
| 308 | [What are Custom React Hooks, and how can you develop one?](#what-are-custom-react-hooks-and-how-can-you-develop-one)                                                                                                            |
| 309 | [How does React Fiber work? Explain in detail](#how-does-react-fiber-works-explain-in-detail)                                                                                                                                    |
| 310 | [What is the useId hook and when should you use it?](#what-is-the-useid-hook-and-when-should-you-use-it)                                                                                                                         |
| 311 | [What is the useDeferredValue hook?](#what-is-the-usedeferredvalue-hook)                                                                                                                                                         |
| 312 | [What is the useTransition hook and how does it differ from useDeferredValue?](#what-is-the-usetransition-hook-and-how-does-it-differ-from-usedeferredvalue)                                                                     |
| 313 | [What is the useSyncExternalStore hook?](#what-is-the-usesyncexternalstore-hook)                                                                                                                                                 |
| 314 | [What is the useInsertionEffect hook?](#what-is-the-useinsertioneffect-hook)                                                                                                                                                     |
| 315 | [How do you share state logic between components using custom hooks?](#how-do-you-share-state-logic-between-components-using-custom-hooks)                                                                                       |
| 316 | [What is the useDebugValue hook?](#what-is-the-usedebugvalue-hook)                                                                                                                                                               |
| 317 | [How do you handle cleanup in useEffect?](#how-do-you-handle-cleanup-in-useeffect)                                                                                                                                               |
| 318 | [What are the differences between useEffect and useEvent (experimental)?](#what-are-the-differences-between-useeffect-and-useevent-experimental)                                                                                 |
| 319 | [What are the best practices for using React Hooks?](#what-are-the-best-practices-for-using-react-hooks)                                                                                                                         |

</details>

### Table of Contents

<details open>
<summary>
Hide/Show table of contents
</summary>

| No. | Questions                                                                                                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | **Old Q&A**                                                                                                                                                                                |
| 1   | [Why should we not update the state directly?](#why-should-we-not-update-the-state-directly)                                                                                               |
| 2   | [What is the purpose of callback function as an argument of setState()?](#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)                                             |
| 3   | [How to bind methods or event handlers in JSX callbacks?](#how-to-bind-methods-or-event-handlers-in-jsx-callbacks)                                                                         |
| 4   | [How to pass a parameter to an event handler or callback?](#how-to-pass-a-parameter-to-an-event-handler-or-callback)                                                                       |
| 5   | [What is the use of refs?](#what-is-the-use-of-refs)                                                                                                                                       |
| 6   | [How to create refs?](#how-to-create-refs)                                                                                                                                                 |
| 7   | [What are forward refs?](#what-are-forward-refs)                                                                                                                                           |
| 8   | [Which is preferred option with in callback refs and findDOMNode()?](#which-is-preferred-option-with-in-callback-refs-and-finddomnode)                                                     |
| 9   | [Why are String Refs legacy?](#why-are-string-refs-legacy)                                                                                                                                 |
| 10  | [What are the different phases of component lifecycle?](#what-are-the-different-phases-of-component-lifecycle)                                                                             |
| 11  | [What are the lifecycle methods of React?](#what-are-the-lifecycle-methods-of-react)                                                                                                       |
| 12  | [How to create props proxy for HOC component?](#how-to-create-props-proxy-for-hoc-component)                                                                                               |
| 13  | [What is context?](#what-is-context)                                                                                                                                                       |
| 14  | [What is the purpose of using super constructor with props argument?](#what-is-the-purpose-of-using-super-constructor-with-props-argument)                                                 |
| 15  | [How to set state with a dynamic key name?](#how-to-set-state-with-a-dynamic-key-name)                                                                                                     |
| 16  | [What would be the common mistake of function being called every time the component renders?](#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders) |
| 17  | [What are error boundaries in React v16](#what-are-error-boundaries-in-react-v16)                                                                                                          |
| 18  | [How are error boundaries handled in React v15?](#how-are-error-boundaries-handled-in-react-v15)                                                                                           |
| 19  | [What is the purpose of render method of react-dom?](#what-is-the-purpose-of-render-method-of-react-dom)                                                                                   |
| 20  | [What will happen if you use setState in constructor?](#what-will-happen-if-you-use-setstate-in-constructor)                                                                               |
| 21  | [Is it good to use setState() in componentWillMount() method?](#is-it-good-to-use-setstate-in-componentwillmount-method)                                                                   |
| 22  | [What will happen if you use props in initial state?](#what-will-happen-if-you-use-props-in-initial-state)                                                                                 |
| 23  | [How you use decorators in React?](#how-you-use-decorators-in-react)                                                                                                                       |
| 24  | [What is CRA and its benefits?](#what-is-cra-and-its-benefits)                                                                                                                             |
| 25  | [What is the lifecycle methods order in mounting?](#what-is-the-lifecycle-methods-order-in-mounting)                                                                                       |
| 26  | [What are the lifecycle methods going to be deprecated in React v16?](#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16)                                                 |
| 27  | [What is the purpose of getDerivedStateFromProps() lifecycle method?](#what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method)                                                   |
| 28  | [What is the purpose of getSnapshotBeforeUpdate() lifecycle method?](#what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method)                                                     |
| 29  | [What is the recommended way for naming components?](#what-is-the-recommended-way-for-naming-components)                                                                                   |
| 30  | [What is the recommended ordering of methods in component class?](#what-is-the-recommended-ordering-of-methods-in-component-class)                                                         |
| 31  | [Why we need to pass a function to setState()?](#why-we-need-to-pass-a-function-to-setstate)                                                                                               |
| 32  | [Why is isMounted() an anti-pattern and what is the proper solution?](#why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution)                                                   |
| 33  | [What is the difference between constructor and getInitialState?](#what-is-the-difference-between-constructor-and-getinitialstate)                                                         |
| 34  | [Can you force a component to re-render without calling setState?](#can-you-force-a-component-to-re-render-without-calling-setstate)                                                       |
| 35  | [What is the difference between super() and super(props) in React using ES6 classes?](#what-is-the-difference-between-super-and-superprops-in-react-using-es6-classes)                     |
| 36  | [What is the difference between setState and replaceState methods?](#what-is-the-difference-between-setstate-and-replacestate-methods)                                                     |
| 37  | [How to listen to state changes?](#how-to-listen-to-state-changes)                                                                                                                         |
| 38  | [What is the recommended approach of removing an array element in react state?](#what-is-the-recommended-approach-of-removing-an-array-element-in-react-state)                             |
| 39  | [Is it possible to use React without rendering HTML?](#is-it-possible-to-use-react-without-rendering-html)                                                                                 |
| 40  | [What are the possible ways of updating objects in state?](#what-are-the-possible-ways-of-updating-objects-in-state)                                                                       |
| 41  | [What are the approaches to include polyfills in your create-react-app?](#what-are-the-approaches-to-include-polyfills-in-your-create-react-app)                                           |
| 42  | [How to use https instead of http in create-react-app?](#how-to-use-https-instead-of-http-in-create-react-app)                                                                             |
| 43  | [How to avoid using relative path imports in create-react-app?](#how-to-avoid-using-relative-path-imports-in-create-react-app)                                                             |
| 44  | [How to update a component every second?](#how-to-update-a-component-every-second)                                                                                                         |
| 45  | [Why is a component constructor called only once?](#why-is-a-component-constructor-called-only-once)                                                                                       |
| 46  | [How to define constants in React?](#how-to-define-constants-in-react)                                                                                                                     |
| 47  | [How to programmatically trigger click event in React?](#how-to-programmatically-trigger-click-event-in-react)                                                                             |
| 48  | [How to make AJAX call and In which component lifecycle methods should I make an AJAX call?](#how-to-make-ajax-call-and-in-which-component-lifecycle-methods-should-i-make-an-ajax-call)   |
| 49  | [What are render props?](#what-are-render-props)                                                                                                                                           |
| 50  | [How to dispatch an action on load?](#how-to-dispatch-an-action-on-load)                                                                                                                   |
| 51  | [How to use connect from React Redux?](#how-to-use-connect-from-react-redux)                                                                                                               |
| 52  | [Whats the purpose of at symbol in the redux connect decorator?](#whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator)                                                           |
| 53  | [How to use TypeScript in create-react-app application?](#how-to-use-typescript-in-create-react-app-application)                                                                           |
| 54  | [Does the statics object work with ES6 classes in React?](#does-the-statics-object-work-with-es6-classes-in-react)                                                                         |
| 55  | [Why are inline ref callbacks or functions not recommended?](#why-are-inline-ref-callbacks-or-functions-not-recommended)                                                                   |
| 56  | [What are HOC factory implementations?](#what-are-hoc-factory-implementations)                                                                                                             |
| 57  | [How to use class field declarations syntax in React classes?](#how-to-use-class-field-declarations-syntax-in-react-classes)                                                               |
| 58  | [Why do you not need error boundaries for event handlers?](#why-do-you-not-need-error-boundaries-for-event-handlers)                                                                       |
| 59  | [What is the difference between try catch block and error boundaries?](#what-is-the-difference-between-try-catch-block-and-error-boundaries)                                               |
| 60  | [What is the required method to be defined for a class component?](#what-is-the-required-method-to-be-defined-for-a-class-component)                                                       |
| 61  | [What are the possible return types of render method?](#what-are-the-possible-return-types-of-render-method)                                                                               |
| 62  | [What is the main purpose of constructor?](#what-is-the-main-purpose-of-constructor)                                                                                                       |
| 63  | [Is it mandatory to define constructor for React component?](#is-it-mandatory-to-define-constructor-for-react-component)                                                                   |
| 64  | [Why should not call setState in componentWillUnmount?](#why-should-not-call-setstate-in-componentwillunmount)                                                                             |
| 65  | [What is the purpose of getDerivedStateFromError?](#what-is-the-purpose-of-getderivedstatefromerror)                                                                                       |
| 66  | [What is the methods order when component re-rendered?](#what-is-the-methods-order-when-component-re-rendered)                                                                             |
| 67  | [What are the methods invoked during error handling?](#what-are-the-methods-invoked-during-error-handling)                                                                                 |
| 68  | [What is the purpose of unmountComponentAtNode method?](#what-is-the-purpose-of-unmountcomponentatnode-method)                                                                             |
| 69  | [What are the limitations with HOCs?](#what-are-the-limitations-with-hocs)                                                                                                                 |
| 70  | [How to debug forwardRefs in DevTools?](#how-to-debug-forwardrefs-in-devtools)                                                                                                             |
| 71  | [Is it good to use arrow functions in render methods?](#is-it-good-to-use-arrow-functions-in-render-methods)                                                                               |
| 72  | [How do you say that state updates are merged?](#how-do-you-say-that-state-updates-are-merged)                                                                                             |
| 73  | [How do you pass arguments to an event handler?](#how-do-you-pass-arguments-to-an-event-handler)                                                                                           |
| 74  | [How to prevent component from rendering?](#how-to-prevent-component-from-rendering)                                                                                                       |
| 75  | [Give an example on How to use context?](#give-an-example-on-how-to-use-context)                                                                                                           |
| 76  | [How do you use contextType?](#how-do-you-use-contexttype)                                                                                                                                 |
| 77  | [What is a consumer?](#what-is-a-consumer)                                                                                                                                                 |
| 78  | [How do you solve performance corner cases while using context?](#how-do-you-solve-performance-corner-cases-while-using-context)                                                           |
| 79  | [What is the purpose of forward ref in HOCs?](#what-is-the-purpose-of-forward-ref-in-hocs)                                                                                                 |
| 80  | [Is it ref argument available for all functions or class components?](#is-it-ref-argument-available-for-all-functions-or-class-components)                                                 |
| 81  | [Why do you need additional care for component libraries while using forward refs?](#why-do-you-need-additional-care-for-component-libraries-while-using-forward-refs)                     |
| 82  | [How to create react class components without ES6?](#how-to-create-react-class-components-without-es6)                                                                                     |
| 83  | [Is it possible to use react without JSX?](#is-it-possible-to-use-react-without-jsx)                                                                                                       |
| 84  | [How do you create HOC using render props?](#how-do-you-create-hoc-using-render-props)                                                                                                     |
| 85  | [What is react scripts?](#what-is-react-scripts)                                                                                                                                           |
| 86  | [What are the features of create react app?](#what-are-the-features-of-create-react-app)                                                                                                   |
| 87  | [What is the purpose of renderToNodeStream method?](#what-is-the-purpose-of-rendertonodestream-method)                                                                                     |
| 88  | [How do you get redux scaffolding using create-react-app?](#how-do-you-get-redux-scaffolding-using-create-react-app)                                                                       |
| 89  | [What is state mutation and how to prevent it?](#what-is-state-mutation-and-how-to-prevent-it)                                                                                             |

</details>

## Core React

1.  ### What is React?
    
    **React** (also known as React.js or ReactJS) is a **declarative, efficient, and flexible JavaScript library** for building user interfaces. It allows developers to create complex UIs from small, isolated pieces of code called "components."
    
    React was created by [Jordan Walke](https://github.com/jordwalke), a software engineer at Facebook (now Meta). It was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012. It was open-sourced in 2013 and has since become one of the most widely used libraries in front-end development.

    **Example of a simple React component:**

    ```jsx
    import React from 'react';

    function HelloWorld() {
      return <h1>Hello, React!</h1>;
    }

    export default HelloWorld;
    ```

    **[⬆ Back to Top](#table-of-contents)**

   2.  ### What is the history behind React evolution?
    
    The history of ReactJS started in 2010 with the creation of **XHP**. XHP is a PHP extension that improved the syntax of the language such that XML document fragments became valid PHP expressions. The primary purpose was to create custom and reusable HTML elements to help avoid cross-site scripting (XSS) attacks.

    However, XHP did not solve the problem of dynamic web applications requiring many roundtrips to the server. Jordan Walke created a prototype called **FaxJS** (inspired by XHP) to bring this component model to the client side. This eventually evolved into React.

    **Timeline of Evolution:**

    - **2010:** XHP is created at Facebook.
    - **2011:** Jordan Walke creates FaxJS (React prototype).
    - **2011:** React is deployed on Facebook's News Feed.
    - **2012:** Instagram is acquired and React is deployed there.
    - **2013:** React is open-sourced at JSConf US.
    - **2015:** React Native is released.
    - **2019:** React Hooks (16.8) are introduced, revolutionizing state management.
    - **2022:** React 18 introduces Concurrent Rendering.

    <details>
        <summary><b>See deep-dive answer</b></summary>
        The evolution of React has a fascinating history that spans over a decade:
 
    **2010-2011: The Origins**
    - The journey began with **XHP**, a PHP extension created at Facebook that allowed HTML components to be used in PHP code.
    - XHP improved front-end code readability and helped prevent cross-site scripting (XSS) attacks.
    - However, XHP had limitations with dynamic web applications, requiring frequent server roundtrips and complete UI re-renders for small changes.

    **2011-2012: Early Development**
    - Jordan Walke created the first prototype called **FaxJS** (later renamed to React), inspired by XHP's component model.
    - The key innovation was bringing XHP's component model to JavaScript with performance improvements.
    - React introduced the Virtual DOM concept to solve the performance issues of full page re-renders.
    - First deployed internally on Facebook's News Feed in 2011 and Instagram in 2012.

    **2013: Public Release**
    - React was officially open-sourced at JSConf US in May 2013.
    - Initial public reception was mixed, with some developers skeptical about the JSX syntax and the approach of mixing markup with JavaScript.

    **2014-2015: Growing Adoption**
    - React Native was announced in 2015, extending React's paradigm to mobile app development.
    - The ecosystem began to grow with tools like Redux for state management.
    - Companies beyond Facebook began adopting React for production applications.

    **2016-2018: Maturation**
    - React 16 ("Fiber") was released in 2017 with a complete rewrite of the core architecture.
    - Introduction of new features like Error Boundaries, Portals, and improved server-side rendering.
    - React 16.3 introduced the Context API for easier state management.

    **2019-Present: Modern React**
    - React Hooks were introduced in React 16.8 (February 2019), revolutionizing state management in functional components.
    - React 17 (October 2020) focused on making React upgrades easier.
    - React 18 (March 2022) introduced concurrent rendering and automatic batching.
    - React 19 (2024) introduces Actions, Server Components stabilization, and simplified resource handling.
    </details>

    **[⬆ Back to Top](#table-of-contents)**

3.  ### What are the major features of React?

    React offers a powerful set of features that have made it the industry standard for building user interfaces:

    - **Component-Based Architecture**: UI is split into independent, reusable pieces called components.
    - **Virtual DOM**: React uses a Virtual DOM to minimize actual DOM manipulation, significantly improving performance.
    - **JSX (JavaScript XML)**: A syntax extension that allows writing HTML-like structures in JavaScript.
    - **Unidirectional Data Flow**: Data flows in one direction (parent to child), making it easier to track and debug.
    - **Declarative UI**: You describe *what* the UI should look like for a certain state, and React handles the *how* (DOM updates).
    - **Hooks**: Allow using state and lifecycle features in functional components.
    - **Concurrent Rendering**: Introduced in React 18, it allows React to prepare multiple versions of the UI at the same time without blocking the main thread.
    - **Server Components**: Allows components to render on the server, reducing the amount of JavaScript sent to the client.

    **Example showcasing Components, JSX, and State:**

    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

4.  ### What is JSX?

    **JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like markup inside a JavaScript file. While it looks like HTML, it is actually transformed into standard JavaScript objects (calls to `React.createElement` or the modern JSX transform).

    **Example of JSX:**

    ```jsx
    export default function Greeting() {
      return <h1 className="greeting">Hello, world!</h1>;
    }
    ```

    **Under the hood (without JSX):**

    ```javascript
    import { createElement } from "react";

    export default function Greeting() {
      return createElement(
        "h1",
        { className: "greeting" },
        "Hello, world!"
      );
    }
    ```

    **Note:** JSX is stricter than HTML. For example, tags must be closed (e.g., `<br />`), and you must use camelCase for attributes (e.g., `className` instead of `class`, `tabIndex` instead of `tabindex`).

    **[⬆ Back to Top](#table-of-contents)**

5.  ### What is the difference between an Element and a Component?

    **Element:**
    - A React **Element** is a plain JavaScript object that describes what you want to see on the screen.
    - It is immutable; once created, you cannot change its children or attributes.
    - Creating an element is very cheap and fast.

    **Example of an Element object:**
    ```js
    {
      type: 'h1',
      props: {
        className: 'greeting',
        children: 'Hello, world!'
      }
    }
    ```

    **Component:**
    - A **Component** is a reusable function or class that returns one or more React Elements.
    - Components accept inputs called **props** and can have internal **state**.
    - They allow you to split the UI into independent, reusable pieces.

    **Example of a Component:**
    ```jsx
    function Greeting({ name }) {
      return <h1>Hello, {name}!</h1>;
    }

    // Usage (this creates a React Element of type Greeting)
    const element = <Greeting name="Sudheer" />;
    ```

    **Summary:** An element is *what* you want to see, while a component is the *blueprint* or function that generates those elements.

    **[⬆ Back to Top](#table-of-contents)**

6.  ### How to create components in React?

    There are two primary ways to create components in React:

    1. **Function Components:** The modern and recommended way. They are simple JavaScript functions that accept `props` and return JSX.
    
       **Standard Function:**
       ```jsx
       function Welcome(props) {
         return <h1>Hello, {props.name}</h1>;
       }
       ```

       **Arrow Function:**
       ```jsx
       const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
       ```

    2. **Class Components:** The legacy way (pre-Hooks). They use ES6 classes and must include a `render()` method.

       ```jsx
       class Welcome extends React.Component {
         render() {
           return <h1>Hello, {this.props.name}</h1>;
         }
       }
       ```

    **[⬆ Back to Top](#table-of-contents)**

7.  ### When to use a Class Component over a Function Component?

    After the introduction of **React Hooks** in version 16.8, it is **highly recommended** to use Function Components for almost all use cases. Hooks allow you to use state, lifecycle methods, and other React features without writing a class.

    However, there is still one specific case where Class Components are required:
    1. **Error Boundaries:** Currently, there is no Hook equivalent for the `componentDidCatch` or `getDerivedStateFromError` lifecycle methods.

    **Example of a Class-based Error Boundary:**

    ```jsx
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error) {
        return { hasError: true };
      }

      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
      }
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

8.  ### What are Pure Components?

    **Pure Components** are components that render the same output for the same state and props. They are used for performance optimization by preventing unnecessary re-renders.

    - **In Functional Components:** We use `React.memo()`. It performs a **shallow comparison** of props. If the props haven't changed, React skips rendering the component.
    - **In Class Components:** We extend `React.PureComponent`. It implements `shouldComponentUpdate()` with a shallow prop and state comparison.

    **Example with `React.memo`:**

    ```jsx
    import React, { memo } from 'react';

    const MyComponent = memo(({ name }) => {
      console.log("Rendering...");
      return <h1>Hello, {name}</h1>;
    });

    // Parent component
    function App() {
      const [count, setCount] = useState(0);
      return (
        <>
          <MyComponent name="Sudheer" />
          <button onClick={() => setCount(count + 1)}>
            Re-render Parent ({count})
          </button>
        </>
      );
    }
    ```
    *In the example above, clicking the button re-renders `App`, but `MyComponent` will NOT re-render because its `name` prop remains the same.*

    **[⬆ Back to Top](#table-of-contents)**

9.  ### What is state in React?

    **State** is an internal data storage that holds information about the component. It is "private" to the component and can be changed over time, usually in response to user actions or network responses. Whenever the state of a component changes, React automatically re-renders the component to reflect the new state in the UI.

    - In **Functional Components**, state is managed using the `useState` hook.
    - In **Class Components**, state is an object property called `this.state`.

    **Example (Functional Component):**

    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }
    ```

    **Key characteristics:**
    1. State is local to the component.
    2. State changes trigger re-renders.
    3. State should be updated using its setter function (`setCount` or `this.setState`), never mutated directly.

    **[⬆ Back to Top](#table-of-contents)**

10. ### What are props in React?

    **Props** (short for "properties") are inputs to a React component. They are data passed from a parent component to a child component, similar to how arguments are passed to a function or attributes to an HTML tag.

    **Key characteristics:**
    1. **Read-Only (Immutable):** A component must never modify its own props.
    2. **Uni-directional:** Data flows from parent to child.
    3. **Dynamic:** Props allow components to be reusable by displaying different data.

    **Example:**

    ```jsx
    // Child Component
    function Welcome(props) {
      return <h1>Hello, {props.name}!</h1>;
    }

    // Parent Component
    function App() {
      return (
        <div>
          <Welcome name="Alice" />
          <Welcome name="Bob" />
        </div>
      );
    }
    ```

    **Note:** You can use ES6 destructuring to make the code cleaner:
    ```jsx
    const Welcome = ({ name }) => <h1>Hello, {name}!</h1>;
    ```

    **[⬆ Back to Top](#table-of-contents)**

11. ### What is the difference between state and props?

    In React, both **state** and **props** are plain JavaScript objects, but they serve different purposes:

    - **State**: Managed *within* the component (like variables declared within a function). It is used for data that changes over time.
    - **Props**: Passed *to* the component (like function arguments). They are read-only and allow parent components to configure their children.

    **Example showing both State and Props:**

    ```jsx
    import React, { useState } from 'react';

    // Child component receiving "props"
    function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }

    // Parent component managing "state"
    function App() {
      const [name, setName] = useState("Alice");

      return (
        <div>
          <Greeting name={name} />
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
      );
    }
    ```

    | Feature | State | Props |
    | :--- | :--- | :--- |
    | **Managed by** | The component itself | Parent component |
    | **Mutable** | Yes (via setter function) | No (Read-only) |
    | **Usage** | Managing dynamic data | Passing data to children |

    **[⬆ Back to Top](#table-of-contents)**

12. ### What is the difference between HTML and React event handling?

    There are three main differences between how you handle events in HTML vs. React:

    1.  **Naming Convention**: React events are named using **camelCase** (e.g., `onClick`), whereas HTML events are lowercase (e.g., `onclick`).
    2.  **Function as Value**: In JSX, you pass a **function reference** as the event handler, rather than a string.
    3.  **Preventing Default**: In React, you cannot return `false` to prevent default behavior; you must explicitly call `event.preventDefault()`.

    **Comparison Table:**

    | Feature | HTML | React |
    | :--- | :--- | :--- |
    | **Naming** | `onclick="handleClick()"` | `onClick={handleClick}` |
    | **Value** | String | Function Reference |
    | **Default Action** | `return false` | `e.preventDefault()` |

    **Example:**

    ```jsx
    // React approach
    function Form() {
      function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

13. ### What are synthetic events in React?

    **SyntheticEvents** are cross-browser wrappers around the browser's native events. They ensure that events behave identically across different browsers while providing the same API (like `stopPropagation()` and `preventDefault()`).

    React uses **Event Delegation** by attaching a single listener to the root of the document, which improves performance and memory usage.

    **Example:**

    ```jsx
    function ActionButton() {
      function handleClick(e) {
        console.log('Synthetic Event:', e);
        console.log('Native Event:', e.nativeEvent);
        console.log('Event Type:', e.type); // "click"
      }

      return <button onClick={handleClick}>Click Me</button>;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

14. ### What are inline conditional expressions?

    In React, you can use JavaScript logic to conditionally render parts of the UI. The two most common ways are:

    1.  **Logical AND (`&&`)**: Used when you want to render something only if a condition is true.
    2.  **Ternary Operator (`? :`)**: Used when you want to render one thing if true and another if false.

    **Example:**

    ```jsx
    function Notification({ messages, isLoading }) {
      return (
        <div>
          {/* 1. Logical AND */}
          {isLoading && <p>Loading...</p>}

          {/* 2. Ternary Operator */}
          {messages.length > 0 ? (
            <p>You have {messages.length} unread messages.</p>
          ) : (
            <p>You are all caught up!</p>
          )}
        </div>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

15. ### What is "key" prop and what is the benefit of using it in arrays of elements?

    A **key** is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, been added, or been removed, allowing it to update only the necessary parts of the DOM.

    **Best Practices:**
    - Use a **stable, unique ID** from your data (e.g., `item.id`).
    - Avoid using the array **index** as a key if the list order can change (via sorting or filtering), as it can cause UI bugs.

    **Example:**

    ```jsx
    function UserList({ users }) {
      return (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }
    ```

    **Benefits:**
    - **Performance**: Minimizes DOM manipulation by reusing existing elements.
    - **State Consistency**: Ensures that component state (like input values or focus) is correctly associated with the right item.

    **[⬆ Back to Top](#table-of-contents)**

16. ### What is Virtual DOM?

    The **Virtual DOM (VDOM)** is a lightweight, in-memory representation of the Real DOM. It is a plain JavaScript object that describes the UI structure.

    When the state of an application changes, React updates the Virtual DOM first, rather than the Real DOM. This allows React to batch updates and perform them in a highly optimized way.

    **Example of a Virtual DOM object (simplified):**

    ```javascript
    {
      type: 'button',
      props: {
        className: 'blue-btn',
        children: 'Submit',
        onClick: () => console.log('Clicked!')
      }
    }
    ```

    17. ### How Virtual DOM works?

    The Virtual DOM workflow can be summarized in three main steps:

    1.  **Rendering**: When data changes, the entire UI is re-rendered into a new Virtual DOM representation.
    2.  **Diffing**: React compares the new Virtual DOM with the previous version to identify exactly what has changed (a process called "diffing").
    3.  **Patching**: React updates only the changed parts in the Real DOM, which is much faster than re-rendering the whole page.

    **Conceptual Workflow:**

    ```javascript
    // 1. Initial State -> VDOM A -> Real DOM
    // 2. State Change  -> VDOM B
    // 3. Diff (VDOM A, VDOM B) -> Only update the <h1> text
    // 4. Update Real DOM (minimal change)
    ```

    **[⬆ Back to Top](#table-of-contents)**

18. ### What is the difference between Shadow DOM and Virtual DOM?

    While they both involve "DOM," they serve completely different purposes:

    - **Virtual DOM**: A tool used by libraries (like React) for **performance optimization**. It allows for efficient UI updates by diffing in-memory trees.
    - **Shadow DOM**: A browser-native technology used for **encapsulation** in Web Components. It allows a component to have its own "hidden" DOM tree and scoped styles that won't leak out.

    **Example of Shadow DOM (Native JS):**

    ```javascript
    const host = document.querySelector('#host');
    const shadowRoot = host.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = '<style>p { color: red; }</style><p>Shadow DOM Content</p>';
    ```

    | Feature | Virtual DOM | Shadow DOM |
    | :--- | :--- | :--- |
    | **Main Goal** | Performance | Encapsulation |
    | **Implementation** | Library-based (React) | Browser-native |
    | **Isolation** | None (Global styles apply) | High (Scoped styles) |

    **[⬆ Back to Top](#table-of-contents)**

19. ### What is React Fiber?

    **React Fiber** is the reconciliation engine introduced in React 16. It is a complete rewrite of React's core algorithm, designed to handle asynchronous rendering and prioritized updates.

    Before Fiber, React would update the UI in a "blocking" way (Stack Reconciler), meaning large updates could freeze the browser. Fiber allows React to:
    - **Pause** work and come back to it later.
    - **Assign priority** to different types of updates (e.g., animations vs. data fetching).
    - **Reuse** previously completed work.

    **Conceptual Example of Prioritization:**

    ```javascript
    // High Priority: User typing in an input
    // Low Priority: Sorting a 10,000-row table
    // Fiber ensures the input remains responsive even during the sort.
    ```

    **[⬆ Back to Top](#table-of-contents)**

20. ### What is the main goal of React Fiber?

    The primary goal of **React Fiber** is to achieve **Incremental Rendering**. This means splitting the rendering work into small chunks and spreading them across multiple frames to keep the main thread free for user interaction.

    **Main Goals:**
    1.  **Concurrency**: Working on multiple tasks at once and prioritizing the most urgent ones.
    2.  **Responsiveness**: Ensuring that animations and user inputs are never blocked by heavy background rendering.
    3.  **Better UX**: Enabling features like `Suspense` and `Concurrent Mode` for smoother data fetching and UI transitions.

    **Example of Incremental Rendering (Conceptual):**

    ```javascript
    // Task: Render 1000 items
    // Step 1: Render 100 items -> Check for user input (e.g. click)
    // Step 2: User input found? Handle it immediately.
    // Step 3: Resume rendering next 100 items.
    ```

    **[⬆ Back to Top](#table-of-contents)**

21. ### What are controlled components?

    A **controlled component** is a component where React is the "single source of truth" for the form data. Instead of the DOM holding the form state, the state is stored in the React component and updated via event handlers.

    **Example:**

    ```jsx
    import React, { useState } from 'react';

    function ControlledInput() {
      const [value, setValue] = useState('');

      return (
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**
   In these components, DOM does not hold the actual data instead React does.
   
   **Benefits:**

   *   Easy to implement **validation**, **conditional formatting**, or **live feedback**.
   *   Full control over form data.
   *   Easier to test and debug because the data is centralized in the component’s state.

   **[⬆ Back to Top](#table-of-contents)**

22. ### What are uncontrolled components?

    **Uncontrolled components** are form elements that maintain their own internal state in the DOM. Instead of writing an event handler for every state update, you use a **ref** to get form values from the DOM when needed.

    **Example:**

    ```jsx
    import React, { useRef } from 'react';

    function UncontrolledInput() {
      const inputRef = useRef(null);

      const handleSubmit = () => {
        alert(`Input Value: ${inputRef.current.value}`);
      };

      return (
        <>
          <input type="text" ref={inputRef} />
          <button onClick={handleSubmit}>Get Value</button>
        </>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

23. ### What is the difference between createElement and cloneElement?

    - **`createElement`**: Creates a new React element from scratch. This is what JSX compiles to.
    - **`cloneElement`**: Takes an existing React element and creates a copy of it, allowing you to add or override props.

    **Example:**

    ```jsx
    // 1. createElement
    const element = React.createElement('h1', { id: 'title' }, 'Hello');

    // 2. cloneElement
    const clonedElement = React.cloneElement(element, { style: { color: 'red' } });
    ```

    **[⬆ Back to Top](#table-of-contents)**

24. ### What is Lifting State Up in React?

    **Lifting State Up** is a pattern where state is moved to the closest common ancestor of components that need to share the same data. This ensures a "single source of truth" and keeps components in sync.

    **Example:**

    ```jsx
    function Parent() {
      const [count, setCount] = useState(0);
      
      return (
        <>
          <ChildA count={count} />
          <ChildB onIncrement={() => setCount(count + 1)} />
        </>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

25. ### What are Higher-Order Components?

    A **Higher-Order Component (HOC)** is a function that takes a component and returns a new component with added functionality. It is a pattern for reusing component logic.

    **Example:**

    ```jsx
    function withLoading(Component) {
      return function WappedComponent({ isLoading, ...props }) {
        if (isLoading) return <p>Loading...</p>;
        return <Component {...props} />;
      };
    }

    // Usage
    const ListWithLoading = withLoading(UserList);
    <ListWithLoading isLoading={true} />;
    ```

    **[⬆ Back to Top](#table-of-contents)**

26. ### What is children prop?

    The **children** prop allows you to pass components or elements as data to other components. This is useful for creating "container" components like Layouts, Modals, or Cards.

    **Example:**

    ```jsx
    function Card({ children }) {
      return <div className="card-wrapper">{children}</div>;
    }

    // Usage
    <Card>
      <h1>Title</h1>
      <p>This is passed as a child.</p>
    </Card>
    ```

    **[⬆ Back to Top](#table-of-contents)**

27. ### How to write comments in React?

    In JSX, comments must be wrapped in curly braces and use the standard multi-line JavaScript comment syntax.

    **Example:**

    ```jsx
    <div>
      {/* This is a comment in JSX */}
      <p>Hello World</p>
    </div>
    ```

    **[⬆ Back to Top](#table-of-contents)**

28. ### What is reconciliation?

    **Reconciliation** is the algorithm React uses to "diff" one tree of elements with another to determine which parts need to be changed in the Real DOM.

    React uses two main heuristics for O(n) performance:
    1.  Two elements of different types will produce different trees.
    2.  The developer can hint at which child elements may be stable across different renders with a `key` prop.

    **[⬆ Back to Top](#table-of-contents)**

29. ### Does the lazy function support named exports?

    No, `React.lazy` currently only supports **default exports**. To use a named export, you must create an intermediate file that re-exports the named component as a default export.

    **Example:**

    ```javascript
    // Intermediate file: MyComponent.js
    export { MyNamedComponent as default } from './OriginalFile';

    // App.js
    const MyComponent = React.lazy(() => import('./MyComponent'));
    ```

    **[⬆ Back to Top](#table-of-contents)**

30. ### Why React uses `className` over `class` attribute?

    React uses **className** instead of **class** because of a JavaScript naming conflict with the class keyword.

    1. `class` is a reserved keyword in JavaScript
        In JavaScript, class is used to define ES6 classes:
      
        ```js
        class Person {
          constructor(name) {
            this.name = name;
          }
        }
        ```
        If you try to use class as a variable or property name, it will throw a syntax error. Since JSX is just JavaScript with XML-like syntax, using class directly in JSX would break the parser.

    2. JSX Is JavaScript
    
        When you write JSX like this:
        ```jsx
        <div class="btn">Click</div>
        ```
        It will be compiled to:
        ```jsx
        React.createElement('div', { class: 'btn' }, 'Click');
        ```
        But `class` is invalid in this object literal context (since it clashes with the JS keyword), hence React instead uses className.
        ```jsx
        <div className="btn">Click</div>
        ```
        which compiles to:
        ```jsx
        React.createElement('div', { className: 'btn' }, 'Click');
        ```
        React then translates `className` to` class` in the final HTML DOM.

    3. Aligns with DOM APIs
        In vanilla JavaScript, you interact with element classes using:
        ```js
        element.className = 'my-class';
        ```
        React follows this convention, staying consistent with the DOM API's property name rather than HTML’s attribute.

    **[⬆ Back to Top](#table-of-contents)**

31. ### What are fragments?

    **Fragments** allow you to group a list of children without adding extra nodes to the DOM. This is useful because a React component must return a single root element.

    **Example:**

    ```jsx
    function UserList() {
      return (
        <>
          <li>User 1</li>
          <li>User 2</li>
        </>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

32. ### Why fragments are better than container divs?

    1.  **Performance**: Fragments are slightly faster and use less memory because they don't create a real DOM node.
    2.  **Layout**: Adding extra `<div>` elements can break CSS layouts like **Flexbox** or **CSS Grid**, where the parent-child relationship is important.
    3.  **Clean DOM**: Keeps the DOM tree clean and easier to inspect.

    **Example (Breaking Flexbox):**

    ```jsx
    // ❌ Breaks flex layout because of the extra <div>
    function Columns() {
      return (
        <div>
          <td>Column 1</td>
          <td>Column 2</td>
        </div>
      );
    }

    // ✅ Works correctly
    function Columns() {
      return (
        <>
          <td>Column 1</td>
          <td>Column 2</td>
        </>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

33. ### What are portals in React?

    **Portals** provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. This is commonly used for UI elements that need to "break out" of their container, such as **modals**, **tooltips**, or **dropdowns**.

    **Example:**

    ```jsx
    import ReactDOM from 'react-dom';

    function Modal({ children }) {
      return ReactDOM.createPortal(
        <div className="modal-content">{children}</div>,
        document.getElementById('modal-root')
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

34. ### What are stateless components?

    **Stateless components** (also called Presentational components) are components that do not manage their own internal state. They receive data via props and render it.

    In modern React, most components are written as **Functional Components**. Before Hooks, functional components were strictly stateless.

    **Example:**

    ```jsx
    const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
    ```

    **[⬆ Back to Top](#table-of-contents)**

35. ### What are stateful components?

    **Stateful components** are components that manage and track changes to data over time using `state`. They can be created using **Class Components** or **Functional Components** with the `useState` hook.

    **Functional Example:**

    ```jsx
    function Counter() {
      const [count, setCount] = useState(0);
      return <button onClick={() => setCount(count + 1)}>{count}</button>;
    }
    ```

    <details><summary><b>See Class Example</b></summary>

    ```jsx
    class Counter extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
      render() {
        return <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>;
      }
    }
    ```
    </details>

    **[⬆ Back to Top](#table-of-contents)**

36. ### How to apply validation on props in React?

    Historically, React used the `prop-types` library for runtime validation. However, the modern industry standard is to use **TypeScript** for static type checking.

    **1. Using TypeScript (Recommended):**

    ```tsx
    interface UserProps {
      name: string;
      age: number;
    }

    function User({ name, age }: UserProps) {
      return <h1>{name} is {age} years old.</h1>;
    }
    ```

    **2. Using PropTypes (Legacy/JS):**

    ```javascript
    import PropTypes from 'prop-types';

    User.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

37. ### What are the advantages of React?

    Below are the list of main advantages of React,

    1. Increases the application's performance with _Virtual DOM_.
    2. JSX makes code easy to read and write.
    3. It renders both on client and server side (_SSR_).
    4. Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.
    5. Easy to write unit and integration tests with tools such as Jest.

    **[⬆ Back to Top](#table-of-contents)**

38. ### What are the limitations of React?

    Apart from the advantages, there are few limitations of React too,

    1. React is just a view library, not a full framework.
    2. There is a learning curve for beginners who are new to web development.
    3. Integrating React into a traditional MVC framework requires some additional configuration.
    4. The code complexity increases with inline templating and JSX.
    5. Too many smaller components leading to over engineering or boilerplate.

    **[⬆ Back to Top](#table-of-contents)**

39. ### What are the recommended ways for static type checking?

    **TypeScript** is the most recommended way for static type checking in React applications today. It provides robust tooling, better developer experience, and catches errors during development.

    Other options include:
    - **Flow**: A static type checker from Meta (now less common than TypeScript).
    - **PropTypes**: Runtime validation (useful for JS-only projects).

    **Example with TypeScript:**

    ```tsx
    type User = {
      id: number;
      username: string;
    };

    const UserProfile = ({ user }: { user: User }) => {
      return <div>{user.username}</div>;
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

40. ### What is the use of `react-dom` package?

    The **`react-dom`** package provides DOM-specific methods that act as the entry point to the browser's DOM.

    **Main Methods:**
    1.  **`createRoot` (React 18+)**: The new way to initialize a React app.
    2.  **`render` (Legacy)**: Used in React 17 and earlier.
    3.  **`hydrate`**: Used for Server-Side Rendering (SSR) to attach React to existing HTML.
    4.  **`createPortal`**: To render children into a different DOM node.

    **Example (React 18):**
    ```jsx
    import { createRoot } from 'react-dom/client';
    const root = createRoot(document.getElementById('app'));
    root.render(<App />);
    ```

    **[⬆ Back to Top](#table-of-contents)**

41. ### What is ReactDOMServer?

    **`ReactDOMServer`** is a module that allows you to render React components to static markup (HTML strings or streams) on the server. This is the foundation of **Server-Side Rendering (SSR)**.

    **Main Methods:**
    1.  **`renderToString()`**: Renders a React tree to an HTML string.
    2.  **`renderToPipeableStream()` (React 18+)**: The modern way to stream HTML to the browser, supporting Suspense.
    3.  **`renderToStaticMarkup()`**: Similar to `renderToString` but doesn't create extra DOM attributes (useful for static pages).

    **Example (Express):**
    ```javascript
    import { renderToString } from 'react-dom/server';
    import App from './App';

    app.get('/', (req, res) => {
      const html = renderToString(<App />);
      res.send(`<div id="root">${html}</div>`);
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

42. ### How to use innerHTML in React?

    React provides **`dangerouslySetInnerHTML`** to replace `innerHTML`. It is named this way to remind you that setting HTML from code is risky because it can lead to **Cross-Site Scripting (XSS)** attacks if the content is not sanitized.

    **Example:**

    ```jsx
    function MyComponent() {
      const markup = { __html: '<strong>Bold Text</strong>' };
      return <div dangerouslySetInnerHTML={markup} />;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

43. ### How to use styles in React?

    In React, the `style` attribute accepts a JavaScript object with **camelCased** properties (e.g., `backgroundColor` instead of `background-color`).

    **Example:**

    ```jsx
    const divStyle = {
      color: 'blue',
      fontSize: '20px',
      marginTop: '10px'
    };

    function StyledComponent() {
      return <div style={divStyle}>Styled Content</div>;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

44. ### How events are different in React?

    1.  **Naming**: React events are named using `camelCase` (e.g., `onClick`) instead of lowercase (`onclick`).
    2.  **Values**: You pass a function as the event handler (e.g., `onClick={handleClick}`) instead of a string (`onclick="handleClick()"`).
    3.  **Default Behavior**: You cannot return `false` to prevent default behavior. You must explicitly call `e.preventDefault()`.

    **Example:**

    ```jsx
    function Form() {
      const handleSubmit = (e) => {
        e.preventDefault(); // Correct way in React
        console.log('Submitted');
      };

      return <form onSubmit={handleSubmit}>...</form>;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

45. ### What is the impact of indexes as keys?

    Using indexes as keys is discouraged if the list can change (items added, removed, or reordered). It can cause:
    1.  **Performance issues**: React may re-render items unnecessarily.
    2.  **State bugs**: If an item has local state (like an input value) and the list is reordered, the state might stay with the index rather than the item, leading to incorrect UI behavior.

    **Always prefer unique IDs from your data.**

    **[⬆ Back to Top](#table-of-contents)**

46. ### How do you conditionally render components?

    There are several ways to render components based on conditions:

    1.  **Logical AND (`&&`)**: Useful for rendering something only if a condition is true.
    2.  **Ternary Operator (`? :`)**: Useful for if-else logic.
    3.  **If-Else / Switch Statements**: Used outside the JSX return block.

    **Example:**

    ```jsx
    function App({ isLoggedIn }) {
      // 1. Ternary
      return (
        <div>
          {isLoggedIn ? <LogoutButton /> : <LoginButton />}
          {/* 2. Logical AND */}
          {isLoggedIn && <WelcomeMessage />}
        </div>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

47. ### Why we need to be careful when spreading props on DOM elements?

    Spreading props (`{...props}`) onto a DOM element can cause **Unknown Prop Warnings** if you pass custom props that are not valid HTML attributes. This pollutes the DOM and can sometimes lead to unexpected behavior.

    **Better Approach (Destructuring):**

    ```jsx
    function CustomInput({ label, isError, ...domProps }) {
      // 'isError' is used here and NOT passed to the input
      return (
        <label>
          {label}
          <input {...domProps} className={isError ? 'error' : ''} />
        </label>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

48. ### How do you memoize a component?

    **Memoization** prevents a component from re-rendering if its props haven't changed.

    1.  **`React.memo`**: A Higher-Order Component for functional components. It performs a shallow comparison of props.
    2.  **`useMemo`**: A hook used to memoize expensive calculations or objects.
    3.  **`PureComponent`**: A base class for class components that implements `shouldComponentUpdate` with a shallow prop/state comparison.

    **Example:**

    ```jsx
    const MyComponent = React.memo(({ name }) => {
      console.log("Rendered!");
      return <div>{name}</div>;
    });
    ```

    **[⬆ Back to Top](#table-of-contents)**

49. ### How you implement Server Side Rendering or SSR?

    SSR is implemented by rendering components to HTML on the server and then "hydrating" them on the client so they become interactive.

    1.  **Server**: Use `ReactDOMServer.renderToString()` or `renderToPipeableStream()` (React 18).
    2.  **Client**: Use `ReactDOM.hydrate()` or `hydrateRoot()` (React 18) to attach event listeners to the server-rendered HTML.

    **Example (Modern React 18 Hydration):**

    ```jsx
    // Client-side entry point
    import { hydrateRoot } from 'react-dom/client';
    hydrateRoot(document.getElementById('root'), <App />);
    ```

    **[⬆ Back to Top](#table-of-contents)**

50. ### How to enable production mode in React?

    To enable production mode, you must set the `NODE_ENV` environment variable to `production`. This ensures that React strips out development-only warnings, prop-type checks, and optimizes the bundle for performance.

    **Ways to enable it:**
    1.  **Webpack**: Use the `mode: 'production'` configuration.
    2.  **Vite**: Running `vite build` automatically sets this.
    3.  **CLI**: `export NODE_ENV=production` (macOS/Linux) or `set NODE_ENV=production` (Windows).

    **[⬆ Back to Top](#table-of-contents)**

51. ### Do Hooks replace render props and higher order components?

    **Hooks** replace many use cases for render props and HOCs, especially for **logic reuse**. They allow you to share stateful logic without adding extra layers to the component tree ("Wrapper Hell"). However, HOCs and render props are still useful for component injection or when wrapping a component with UI.

    **Example (Logic Reuse with Hooks):**
    ```javascript
    // Custom Hook
    function useWindowWidth() {
      const [width, setWidth] = useState(window.innerWidth);
      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return width;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

52. ### What is a switching component?

    A **switching component** is a component that renders one of several components based on a prop value. It is a clean way to handle conditional routing or page transitions within a component.

    **Example:**
    ```jsx
    const PAGES = {
      home: HomePage,
      about: AboutPage,
      contact: ContactPage
    };

    function Page({ name }) {
      const Component = PAGES[name] || NotFoundPage;
      return <Component />;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

53. ### What are React Mixins?

    **Mixins** were a legacy way to share functionality between `React.createClass` components. They are now **deprecated** and should not be used in modern React.

    **Why Mixins are bad:**
    1.  **Implicit Dependencies**: It’s hard to tell where a method comes from.
    2.  **Name Collisions**: Two mixins might define the same method name.
    3.  **Complexity**: They make components harder to understand and maintain.

    **Modern Alternatives**: Use **Higher-Order Components (HOCs)**, **Render Props**, or most preferably, **Hooks**.

    **[⬆ Back to Top](#table-of-contents)**

54. ### What are the Pointer Events supported in React?

    **Pointer Events** provide a unified way to handle inputs from various devices like a mouse, touch screen, or pen.

    **Supported Pointer Events:**
    - `onPointerDown`, `onPointerMove`, `onPointerUp`
    - `onPointerCancel`, `onPointerOver`, `onPointerOut`
    - `onPointerEnter`, `onPointerLeave`
    - `onGotPointerCapture`, `onLostPointerCapture`

    **Example:**
    ```jsx
    <div onPointerDown={(e) => console.log('Pointer down!')} />
    ```

    **[⬆ Back to Top](#table-of-contents)**

55. ### Why should component names start with capital letter?

    In JSX, component names must start with a capital letter so React can distinguish them from standard HTML tags.

    - **Lowercase names** (e.g., `<div />`) are treated as built-in HTML tags and compiled as strings: `React.createElement('div')`.
    - **Capitalized names** (e.g., `<MyComponent />`) are treated as variables and compiled as the component itself: `React.createElement(MyComponent)`.

    **Example:**
    ```jsx
    // ✅ Correct
    function Welcome() {
      return <h1>Hello</h1>;
    }
    <Welcome /> // Compiles to React.createElement(Welcome)

    // ❌ Incorrect
    function welcome() {
      return <h1>Hello</h1>;
    }
    <welcome /> // Compiles to React.createElement('welcome'), which fails
    ```

    **[⬆ Back to Top](#table-of-contents)**

56. ### Are custom DOM attributes supported in React v16?

    Yes. Starting from React v16, any unknown attributes will end up in the DOM. In previous versions, React used to ignore them unless they were prefixed with `data-` or `aria-`.

    **Example:**
    ```jsx
    <div my-custom-attribute="something" />
    ```
    In React 16+, this will render as:
    ```html
    <div my-custom-attribute="something"></div>
    ```

    **[⬆ Back to Top](#table-of-contents)**

57. ### How to loop inside JSX?

    You should use the **`map()`** function to iterate over an array and return a list of elements. It is essential to provide a unique **`key`** prop to each element to help React track which items have changed.

    **Example:**
    ```jsx
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
    ```

    **[⬆ Back to Top](#table-of-contents)**

58. ### How do you access props in attribute quotes?

    JSX does not support variable interpolation inside string quotes. Instead, you should use curly braces `{}` to include JavaScript expressions or **template literals** for combining strings and variables.

    **Wrong:**
    ```jsx
    <img src="images/{props.image}" />
    ```

    **Correct:**
    ```jsx
    <img src={`images/${props.image}`} />
    ```

    **[⬆ Back to Top](#table-of-contents)**

59. ### What is React proptype array with shape?

    You can use **`PropTypes.arrayOf`** combined with **`PropTypes.shape`** to validate an array of objects with a specific structure.

    **Example:**
    ```javascript
    import PropTypes from 'prop-types';

    MyComponent.propTypes = {
      users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    };
    ```

    **[⬆ Back to Top](#table-of-contents)**

60. ### How to conditionally apply class attributes?

    You should use **template literals** or a library like **`classnames`** to conditionally join class names. Never use curly braces inside double quotes as they will be treated as plain strings.

    **Example (Template Literal):**
    ```jsx
    <div className={`btn ${isActive ? 'active' : 'inactive'}`} />
    ```

    **Example (classnames library):**
    ```javascript
    import classNames from 'classnames';
    <div className={classNames('btn', { 'active': isActive })} />
    ```

    **[⬆ Back to Top](#table-of-contents)**

61. ### What is the difference between React and ReactDOM?

    - **`react`**: The core package that includes the logic for creating components, managing state, hooks (`useState`, `useEffect`), and the reconciliation algorithm. It is "platform-agnostic" (works on web, mobile, etc.).
    - **`react-dom`**: The "renderer" for the web. It translates React elements into actual DOM nodes in the browser and handles DOM-specific event delegation.

    **[⬆ Back to Top](#table-of-contents)**

62. ### Why ReactDOM is separated from React?

    React was split into two packages to support multiple platforms beyond the browser. By separating the core logic (`react`) from the rendering logic (`react-dom`), the same React components can be rendered to different environments, such as:
    - **React Native**: For mobile apps (iOS/Android).
    - **React-Three-Fiber**: For WebGL/3D scenes.
    - **Ink**: For command-line interfaces.

    **[⬆ Back to Top](#table-of-contents)**

63. ### How to use React label element?

    In React, you must use **`htmlFor`** instead of the standard `for` attribute to link a `<label>` to an `<input>`. This is because `for` is a reserved keyword in JavaScript.

    **Example:**
    ```jsx
    <>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />
    </>
    ```

    **[⬆ Back to Top](#table-of-contents)**

64. ### How to combine multiple inline style objects?

    You can combine multiple style objects using the **spread operator** (`...`). This allows you to merge styles or conditionally apply them.

    **Example:**
    ```jsx
    const baseStyle = { color: 'blue' };
    const activeStyle = { fontWeight: 'bold' };

    <button style={{ ...baseStyle, ...activeStyle }}>
      Submit
    </button>
    ```

    **[⬆ Back to Top](#table-of-contents)**

65. ### How to re-render the view when the browser is resized?

    You can use a **`useEffect`** hook to listen to the `window`'s `resize` event and update a state variable with the new dimensions.

    **Example:**
    ```jsx
    function ResizeView() {
      const [width, setWidth] = useState(window.innerWidth);

      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      return <div>Window width: {width}</div>;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

66. ### How to pretty print JSON with React?

    You can use the `<pre>` tag and **`JSON.stringify()`** with indentation arguments (the third parameter).

    **Example:**
    ```jsx
    const data = { id: 1, name: 'John Doe' };

    function App() {
      return (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

67. ### Why can't you update props in React?

    Props are **immutable** (read-only) because React follows a **Pure Function** philosophy. A component should never modify its own props. This ensures that the data flow remains predictable (one-way data flow) and allows React to optimize rendering performance.

    If data needs to change, it should be managed as **State** in the parent component.

    **[⬆ Back to Top](#table-of-contents)**

68. ### How to focus an input element on page load?

    1.  **`autoFocus` prop**: The simplest way for initial focus.
    2.  **`useRef` & `useEffect`**: For more control or focusing after specific events.

    **Example:**
    ```jsx
    function SearchInput() {
      const inputRef = useRef(null);

      useEffect(() => {
        inputRef.current.focus();
      }, []);

      return <input ref={inputRef} />;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

69. ### How can we find the version of React at runtime in the browser?

    You can access the version via the **`React.version`** property.

    **Example:**
    ```javascript
    import React from 'react';
    console.log(React.version); // e.g., "18.2.0"
    ```

    **[⬆ Back to Top](#table-of-contents)**

70. ### How to add Google Analytics for React Router?

    In modern React Router (v6), you can use a `useEffect` hook inside your main App component (or a custom hook) to listen for location changes via **`useLocation`**.

    **Example (using `react-ga4`):**
    ```jsx
    import ReactGA from "react-ga4";
    import { useLocation } from "react-router-dom";

    function useAnalytics() {
      const location = useLocation();

      useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
      }, [location]);
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

71. ### How do you apply vendor prefixes to inline styles in React?

    React does not automatically add vendor prefixes to inline styles. You must add them manually using camelCase. For most prefixes, the first letter should be capitalized (e.g., `WebkitTransform`), but for `ms`, it should remain lowercase (e.g., `msTransform`).

    **Example:**
    ```jsx
    <div style={{
      transform: 'rotate(45deg)',
      WebkitTransform: 'rotate(45deg)', // Chrome, Safari
      msTransform: 'rotate(45deg)'      // IE 9
    }} />
    ```

    **[⬆ Back to Top](#table-of-contents)**

72. ### How to import and export components using React and ES6?

    You can use **Default Exports** for a single component per file or **Named Exports** for multiple components.

    **Default Export:**
    ```javascript
    // User.js
    export default function User() { ... }
    
    // App.js
    import User from './User';
    ```

    **Named Export:**
    ```javascript
    // components.js
    export const Header = () => { ... }
    export const Footer = () => { ... }
    
    // App.js
    import { Header, Footer } from './components';
    ```

    **[⬆ Back to Top](#table-of-contents)**

73. ### What are the exceptions on React component naming?

    While custom components must start with an **Uppercase** letter, there is an exception for **Property Accessors**. You can use a lowercase object name followed by a dot to access a component.

    **Example:**
    ```jsx
    const UI = {
      Button: (props) => <button {...props} />,
      Input: (props) => <input {...props} />
    };

    function App() {
      return <UI.Button>Click Me</UI.Button>; // Valid
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

74. ### Is it possible to use async/await in plain React?

    Yes, you can use `async/await` in React. However, you cannot make the `useEffect` callback itself async. Instead, you should define an async function inside the hook and call it.

    **Example:**
    ```jsx
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      };

      fetchData();
    }, []);
    ```

    **[⬆ Back to Top](#table-of-contents)**

75.  ### What are the common folder structures for React?

     There are two common practices for React project file structure.

     1.  **Grouping by features or routes:**

        One common way to structure projects is locate CSS, JS, and tests together, grouped by feature or route.

        ```
        common/
        ├─ Avatar.js
        ├─ Avatar.css
        ├─ APIUtils.js
        └─ APIUtils.test.js
        feed/
        ├─ index.js
        ├─ Feed.js
        ├─ Feed.css
        ├─ FeedStory.js
        ├─ FeedStory.test.js
        └─ FeedAPI.js
        profile/
        ├─ index.js
        ├─ Profile.js
        ├─ ProfileHeader.js
        ├─ ProfileHeader.css
        └─ ProfileAPI.js
        ```

     2.  **Grouping by file type:**

        Another popular way to structure projects is to group similar files together.

        ```
        api/
        ├─ APIUtils.js
        ├─ APIUtils.test.js
        ├─ ProfileAPI.js
        └─ UserAPI.js
        components/
        ├─ Avatar.js
        ├─ Avatar.css
        ├─ Feed.js
        ├─ Feed.css
        ├─ FeedStory.js
        ├─ FeedStory.test.js
        ├─ Profile.js
        ├─ ProfileHeader.js
        └─ ProfileHeader.css
        ```

**[⬆ Back to Top](#table-of-contents)**

76. ### What are the popular packages for animation?

    The most popular animation packages for React today are:
    1.  **Framer Motion**: The industry standard for complex, declarative animations.
    2.  **React Spring**: A physics-based animation library.
    3.  **GSAP (GreenSock)**: A powerful, high-performance library for complex sequences.
    4.  **React Transition Group**: A simple library for enter/exit transitions.

    **[⬆ Back to Top](#table-of-contents)**

77. ### What is the benefit of styles modules?

    **CSS Modules** (or style modules) allow you to write CSS that is scoped locally to a specific component. This avoids global class name collisions and makes your styles more modular and maintainable.

    **Example:**
    ```jsx
    import styles from './Button.module.css';

    function Button() {
      return <button className={styles.error}>Error Button</button>;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

78. ### What are the popular React-specific linters?

    **ESLint** is the industry standard linter. For React, you should use the following plugins:
    1.  **`eslint-plugin-react`**: Checks for React-specific best practices.
    2.  **`eslint-plugin-react-hooks`**: Enforces the **Rules of Hooks** (essential).
    3.  **`eslint-plugin-jsx-a11y`**: Checks for accessibility issues in JSX.

    **[⬆ Back to Top](#table-of-contents)**

## React Router

**[⬆ Back to Top](#table-of-contents)**

79. ### What is React Router?

    **React Router** is a declarative routing library for React applications. It allows you to define multiple routes in your app and ensures that the UI stays in sync with the URL in the browser's address bar.

    **Example (v6):**
    ```jsx
    import { BrowserRouter, Routes, Route } from 'react-router-dom';

    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      );
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

80. ### How React Router is different from history library?

    - **`history`**: A standalone JavaScript library that manages session history, provides a clean API to interact with the browser's History API, and handles navigation in non-browser environments (Memory History).
    - **`React Router`**: A React-specific wrapper around the `history` library. It provides high-level components (like `<Route>`, `<Link>`, `<Routes>`) that use the `history` library to trigger re-renders when the URL changes.

    **[⬆ Back to Top](#table-of-contents)**

81. ### What are the `<Router>` components of React Router v6?

    React Router v6 provides several router components depending on the environment:

    1.  **`<BrowserRouter>`**: The standard router for web applications using the HTML5 History API.
    2.  **`<HashRouter>`**: Used for legacy browsers or static hosting where you can't configure the server to handle all paths.
    3.  **`<MemoryRouter>`**: Keeps the history in memory (not the URL bar). Useful for testing and environments like React Native.
    4.  **`<NativeRouter>`**: Specifically for React Native applications.
    5.  **`createBrowserRouter` (Modern v6.4+)**: The recommended way to enable the new Data APIs (loaders, actions, etc.).

    **[⬆ Back to Top](#table-of-contents)**

82. ### What is the purpose of `push()` and `replace()` methods of `history`?

    - **`push()`**: Adds a new entry to the history stack. This means the user can click the "Back" button to return to the previous page.
    - **`replace()`**: Replaces the current entry in the history stack. The user cannot go back to the page they just left; the "Back" button will take them to the page before that.

    **[⬆ Back to Top](#table-of-contents)**

83. ### How do you programmatically navigate using React Router v4?

    In React Router v4, you can navigate programmatically using the `history` object provided via props:

    1.  **Using `withRouter`**:
        ```jsx
        import { withRouter } from 'react-router-dom';
        
        const MyButton = withRouter(({ history }) => (
          <button onClick={() => history.push('/home')}>Go Home</button>
        ));
        ```

    2.  **Using `<Route>` render prop**:
        ```jsx
        <Route render={({ history }) => (
          <button onClick={() => history.push('/home')}>Go Home</button>
        )} />
        ```

    **Note:** In modern React Router (v6), you should use the **`useNavigate`** hook instead.

    **[⬆ Back to Top](#table-of-contents)**

84. ### How to get query parameters in React Router v4?

    React Router v4 does not provide a built-in way to parse query strings. You can use the native **`URLSearchParams`** API or a library like `query-string`.

    **Example (Native API):**
    ```javascript
    const SearchPage = ({ location }) => {
      const params = new URLSearchParams(location.search);
      const query = params.get('query'); // Get '?query=value'
      return <div>Search: {query}</div>;
    };
    ```

    **Note:** In React Router v6, you can use the **`useSearchParams`** hook.

    **[⬆ Back to Top](#table-of-contents)**

85. ### Why you get "Router may have only one child element" warning?

    In React Router v4, the `<Router>` and `<BrowserRouter>` components were designed to accept only a **single child element**. If you have multiple `<Route>` components, you must wrap them in a container like a `<div>` or a **`<Switch>`**.

    **Example:**
    ```jsx
    <BrowserRouter>
      <div> {/* Container for multiple children */}
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
    ```

    **[⬆ Back to Top](#table-of-contents)**

86. ### How to pass params to `history.push` method in React Router v4?

    You can pass state data along with the navigation path by providing an object to `history.push()`. This data can be accessed via `location.state`.

    **Example:**
    ```javascript
    history.push({
      pathname: '/details',
      state: { id: 123, name: 'John' }
    });
    ```
    Accessing the state in the target component:
    ```javascript
    const id = props.location.state.id;
    ```

    **[⬆ Back to Top](#table-of-contents)**

87. ### How to implement _default_ or _NotFound_ page?

    In React Router, you can implement a "Catch-all" route that matches any URL that hasn't been matched by previous routes.

    - **v4 (within `<Switch>`)**: A `<Route>` without a `path` at the very end.
    - **v6 (within `<Routes>`)**: Use `path="*"`.

    **Example (v6):**
    ```jsx
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    ```

    **[⬆ Back to Top](#table-of-contents)**

88. ### How to get history on React Router v4?

    There are two common ways to access the history object in v4:

    1.  **HOC**: Wrap your component with **`withRouter(MyComponent)`**.
    2.  **Prop**: If the component is rendered directly by a `<Route>`, it receives `history` via props.

    **Example:**
    ```jsx
    const MyComponent = ({ history }) => (
      <button onClick={() => history.push('/dashboard')}>Go</button>
    );
    export default withRouter(MyComponent);
    ```

    **[⬆ Back to Top](#table-of-contents)**

89. ### How to perform automatic redirect after login?

    You can perform an automatic redirect by updating the state after a successful login and conditionally rendering a redirect component or using programmatic navigation.

    **Example (v6):**
    ```jsx
    if (isLoggedIn) {
      return <Navigate to="/dashboard" replace />;
    }
    ```

    **Example (v4):**
    ```jsx
    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

## React Internationalization

90. ### What is React Intl?

    **React Intl** is a library that simplifies internationalization (i18n) in React apps. It provides ready-to-use components and an API to format strings, numbers, dates, and handle pluralization. It is part of **FormatJS**, which builds on top of the browser's native Intl API.

    **Example:**
    ```jsx
    import { IntlProvider, FormattedMessage } from 'react-intl';

    <IntlProvider locale="en" messages={messages}>
      <FormattedMessage id="welcome" defaultMessage="Welcome!" />
    </IntlProvider>
    ```

    **[⬆ Back to Top](#table-of-contents)**

91. ### What are the main features of React Intl?

    1.  **Pluralization**: Handles complex plural rules for different languages.
    2.  **Date & Time**: Formats dates and times with full localization support.
    3.  **Relative Time**: Displays time as "2 minutes ago" or "next month".
    4.  **Number Formatting**: Localizes numbers, currencies, and percentages.
    5.  **String Translation**: Manages translated strings with placeholder support.
    6.  **Browser & Node Support**: Works across all modern environments.

    **[⬆ Back to Top](#table-of-contents)**

92. ### What are the two ways of formatting in React Intl?

    1.  **React Components (Declarative)**: Best for UI rendering.
        ```jsx
        <FormattedDate value={new Date()} year="numeric" month="long" day="numeric" />
        ```
    2.  **Imperative API (useIntl Hook)**: Best for logic, placeholders, or non-JSX strings.
        ```javascript
        const intl = useIntl();
        const title = intl.formatMessage({ id: 'page_title' });
        ```

    **[⬆ Back to Top](#table-of-contents)**

93. ### How to use `<FormattedMessage>` as placeholder using React Intl?

    Since `<FormattedMessage>` returns a React element (not a string), you cannot use it directly in a `placeholder` attribute. Instead, use the **`useIntl`** hook's **`formatMessage`** method.

    **Example:**
    ```jsx
    import { useIntl } from 'react-intl';

    function SearchInput() {
      const intl = useIntl();
      const placeholder = intl.formatMessage({ id: 'search_placeholder', defaultMessage: 'Search...' });

      return <input placeholder={placeholder} />;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

94. ### How to access current locale with React Intl?

    You can access the current locale using the **`useIntl`** hook.

    **Example:**
    ```jsx
    import { useIntl } from 'react-intl';

    function CurrentLocale() {
      const intl = useIntl();
      return <div>Locale: {intl.locale}</div>;
    }
    ```

    **[⬆ Back to Top](#table-of-contents)**

95. ### How to format date using React Intl?

    You can format dates declaratively using the **`<FormattedDate>`** component or imperatively using **`intl.formatDate`**.

    **Example (Declarative):**
    ```jsx
    <FormattedDate value={new Date()} year="numeric" month="short" day="numeric" />
    ```

    **Example (Imperative):**
    ```javascript
    const intl = useIntl();
    const formattedDate = intl.formatDate(new Date(), { year: 'numeric', month: 'long' });
    ```

    **[⬆ Back to Top](#table-of-contents)**

## React Testing

96. ### What is Shallow Renderer in React testing?

    **Shallow rendering** lets you render a component "one level deep" and assert facts about what its render method returns, without worrying about the behavior of child components. This is useful for unit testing a component in isolation.

    **Example:**
    ```jsx
    import ShallowRenderer from 'react-test-renderer/shallow';

    const renderer = new ShallowRenderer();
    renderer.render(<MyComponent />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    ```

    **[⬆ Back to Top](#table-of-contents)**

97. ### What is `TestRenderer` package in React?

    The **`react-test-renderer`** package provides a renderer that produces pure JavaScript objects without depending on the DOM or a native mobile environment. It is primarily used for **Snapshot Testing** to ensure that your UI doesn't change unexpectedly.

    **Example:**
    ```jsx
    import TestRenderer from 'react-test-renderer';

    const renderer = TestRenderer.create(<MyComponent />);
    expect(renderer.toJSON()).toMatchSnapshot();
    ```

    **[⬆ Back to Top](#table-of-contents)**

98. ### What is the purpose of ReactTestUtils package?

    **`ReactTestUtils`** is a legacy collection of utilities for testing React components. While still available, it is now considered an implementation detail. The React team recommends using **React Testing Library (RTL)**, which encourages testing software the way your users use it.

    **[⬆ Back to Top](#table-of-contents)**

99. ### What is Jest?

    **Jest** is a delightful JavaScript Testing Framework with a focus on simplicity. It is maintained by Meta (Facebook) and comes pre-configured in most React projects (like Create React App or Vite). It includes its own test runner, assertion library, and mocking capabilities.

    **[⬆ Back to Top](#table-of-contents)**

100. ### What are the advantages of Jest over Jasmine?

      1.  **Zero Config**: Works out of the box for most React apps.
      2.  **Snapshots**: Easily track UI changes via snapshot files.
      3.  **Built-in Mocking**: Comprehensive mocking system without extra libraries.
      4.  **Performance**: Runs tests in parallel to save time.
      5.  **Code Coverage**: Built-in reports for how much of your code is tested.
      6.  **Watch Mode**: Excellent developer experience with fast, interactive re-runs.

**[⬆ Back to Top](#table-of-contents)**

101. ### Give a simple example of Jest test case

Let's write a simple test for a `sum` function.

**sum.js**
```javascript
export const sum = (a, b) => a + b;
```

**sum.test.js**
```javascript
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

**[⬆ Back to Top](#table-of-contents)**

```console
$ yarn test
PASS ./sum.test.js
✓ adds 1 + 2 to equal 3 (2ms)
```
  
## React Redux

**[⬆ Back to Top](#table-of-contents)**

102. ### What is flux?

**Flux** is an architectural pattern for managing data flow in applications, introduced by Facebook. It enforces a **unidirectional data flow**, making state changes predictable.

**Core Components:**
1.  **Actions**: Plain objects describing "what happened".
2.  **Dispatcher**: A central hub that receives actions and broadcasts them to stores.
3.  **Stores**: Contain application state and logic.
4.  **Views (React Components)**: Render the UI and trigger actions.

**Flow:** `Action -> Dispatcher -> Store -> View`

**[⬆ Back to Top](#table-of-contents)**

103. ### What is Redux?

**Redux** is a predictable state container for JavaScript applications. It centralizes your application's state and logic, offering features like undo/redo, state persistence, and powerful developer tools (Redux DevTools). While often used with React, it is library-agnostic.

**[⬆ Back to Top](#table-of-contents)**

104. ### What are the core principles of Redux?

Redux follows three fundamental principles:

1.  **Single Source of Truth**: The entire state of your application is stored in an object tree within a single store.
2.  **State is Read-Only**: The only way to change the state is to emit an **action**, an object describing what happened.
3.  **Changes are made with Pure Functions (Reducers)**: Reducers are pure functions that take the previous state and an action as parameters and return the **next state** without mutating the original.

**[⬆ Back to Top](#table-of-contents)**

105. ### What are the downsides of Redux compared to Flux?

Standard Redux can involve significant boilerplate, though this is largely mitigated by **Redux Toolkit**.

**[⬆ Back to Top](#table-of-contents)**

106. ### What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?

- **`mapStateToProps()`**: Connects Redux **state** to your component's **props**. It ensures the component re-renders when relevant state changes.
- **`mapDispatchToProps()`**: Connects Redux **actions** to your component's **props**, allowing you to dispatch actions to trigger state updates.

**Modern Alternative:** In functional components, use the **`useSelector`** and **`useDispatch`** hooks instead.

**[⬆ Back to Top](#table-of-contents)**

107. ### Can I dispatch an action in reducer?

**No.** Reducers must be **pure functions**. They should only compute the next state based on the current state and the action. Dispatching an action inside a reducer is a side effect and is considered an anti-pattern. Side effects should be handled in action creators or middleware.

**[⬆ Back to Top](#table-of-contents)**

108. ### How to access Redux store outside a component?

You can access the store by exporting the store instance from the file where it was created.

**Example:**
```javascript
// store.js
export const store = configureStore({ reducer: rootReducer });

// socketService.js
import { store } from './store';
store.dispatch({ type: 'SOCKET_MESSAGE', payload: data });
```

**[⬆ Back to Top](#table-of-contents)**

109. ### What are the drawbacks of MVW pattern?

      1.  **Bidirectional Flow**: Changes in models update views, and views update models, leading to "cascading updates" that are hard to debug.
      2.  **Scalability**: As the app grows, the web of dependencies between Models and Views becomes unmanageable.
      3.  **State Logic**: Business logic is often scattered across various models and controllers.

**[⬆ Back to Top](#table-of-contents)**

110. ### Are there any similarities between Redux and RxJS?

Both are inspired by reactive patterns, but they serve different roles:
- **Redux**: A state management library. It follows a "Pull" model where components subscribe to state changes.
- **RxJS**: A reactive programming library for asynchronous event streams. It follows a "Push" model.

Redux can be viewed as a specialized implementation of an Observable stream (Actions -> Reducer -> State).

**[⬆ Back to Top](#table-of-contents)**

111. ### How to reset state in Redux?

The most idiomatic way is to handle a `RESET` action in your **root reducer**. When the action is received, you return `undefined`, which forces the combined reducers to return their initial state.

**Example:**
```javascript
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
```

**[⬆ Back to Top](#table-of-contents)**

112. ### What is the difference between React context and React Redux?

- **Context**: A way to share data (like themes or auth) deeply without prop-drilling. It is not a state management system and can lead to performance issues if used for frequently changing state.
- **Redux**: A full-featured state management library with middleware support, DevTools, and optimized re-renders. It uses Context under the hood but provides much more control.

**[⬆ Back to Top](#table-of-contents)**

113. ### Why are Redux state functions called reducers?

They are named after the **reduce** operation in functional programming. A reducer takes the previous state and an action, and "reduces" them into the next state. It follows the same signature as a `reduce` callback: `(accumulator, value) => nextAccumulator`.

**[⬆ Back to Top](#table-of-contents)**

114. ### How to make AJAX request in Redux?

Redux reducers are pure and cannot handle AJAX. Instead, you use **middleware** like **Redux Thunk** or **Redux Saga**.

**Example (Redux Thunk with async/await):**
```javascript
export const fetchData = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_START' });
  try {
    const response = await fetch(`/api/data/${id}`);
    const data = await response.json();
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_ERROR', error });
  }
};
```

**[⬆ Back to Top](#table-of-contents)**

115. ### Should I keep all component's state in Redux store?

**No.** You should only keep **global state** (shared between components) or complex state that benefits from Redux DevTools in the store. **Local UI state** (e.g., input values, hover states, toggles) should stay in the component's local state (`useState`).

**[⬆ Back to Top](#table-of-contents)**

116. ### What is the proper way to access Redux store?

The recommended way to access the Redux store in modern React is using the **React Redux Hooks**:

1.  **`useSelector`**: To read data from the store state.
2.  **`useDispatch`**: To get the dispatch function for sending actions.

For class components, you should use the **`connect()`** higher-order component. Direct access to the store instance is generally discouraged in components.

**Example:**
```jsx
import { useSelector, useDispatch } from 'react-redux';

function MyComponent() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return <button onClick={() => dispatch({ type: 'INC' })}>{count}</button>;
}
```

**[⬆ Back to Top](#table-of-contents)**

117. ### What is the difference between component and container in React Redux?

- **Components (Presentational)**: Focus on *how things look*. They receive data and callbacks via props and rarely have their own state (except for UI state). They are not aware of Redux.
- **Containers**: Focus on *how things work*. They are connected to Redux, fetch data from the store, and dispatch actions.

**Note:** With the introduction of **Hooks**, this distinction is less strictly enforced as any component can easily access the store via `useSelector`.

**[⬆ Back to Top](#table-of-contents)**

118. ### What is the purpose of the constants in Redux?

Constants (Action Types) allow you to easily find all usages of a specific action across the project. They also prevent bugs caused by **typos** in string literals.

**Example:**
```javascript
// constants.js
export const ADD_TODO = 'ADD_TODO';

// actions.js
import { ADD_TODO } from './constants';
export const addTodo = (text) => ({ type: ADD_TODO, text });
```



**[⬆ Back to Top](#table-of-contents)**

119.   ### What are the different ways to write `mapDispatchToProps()`?

       1.   **Function Form**: Allows manual dispatching and access to `ownProps`.
         ```javascript
         const mapDispatchToProps = (dispatch) => ({
           increment: () => dispatch({ type: 'INC' })
         });
         ```
       2.  **Object Shorthand (Recommended)**: Redux automatically wraps the action creators in `dispatch`.
         ```javascript
         const mapDispatchToProps = { increment };
         ```

**[⬆ Back to Top](#table-of-contents)**

120. ### What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?

`ownProps` allows you to access the props passed directly to the connected component. This is useful for filtering the state based on a prop (e.g., an ID).

**Example:**
```javascript
const mapStateToProps = (state, ownProps) => ({
  item: state.items.find(i => i.id === ownProps.itemId)
});
```

**[⬆ Back to Top](#table-of-contents)**

121. ### How to structure Redux top level directories?

There are two common patterns:
1.  **By Type (Standard)**: `actions/`, `reducers/`, `components/`. Good for small projects.
2.  **By Feature (Ducks/Slices)**: Group actions, reducers, and components by feature (e.g., `features/auth/`). This is recommended for larger, scalable applications and is the standard with **Redux Toolkit**.

**[⬆ Back to Top](#table-of-contents)**

122. ### What is redux-saga?

**Redux Saga** is a library that aims to make side effects (async things like data fetching and impure things like accessing the browser cache) easier to manage. It uses **ES6 Generators** to make asynchronous flows easy to read, write, and test.

**[⬆ Back to Top](#table-of-contents)**

123. ### What is the mental model of redux-saga?

Think of a **Saga** as a separate thread in your application that's solely responsible for side effects. It is a Redux middleware that can be started, paused, and cancelled from the main application via normal Redux actions.

**[⬆ Back to Top](#table-of-contents)**

124. ### What are the differences between `call()` and `put()` in redux-saga?

Both `call()` and `put()` are **Effect creators**. They don't perform the action themselves but return a plain JavaScript object (an "Effect") that the `redux-saga` middleware executes.

-   **`call(fn, ...args)`**:
    -   **Purpose**: Used to call asynchronous functions (Promises) or other Generator functions.
    -   **Blocking**: It pauses the Saga until the Promise resolves or the called Saga finishes.
    -   **Testing**: Makes testing easy as you can verify the function was called with specific arguments without actually executing it.

-   **`put(action)`**:
    -   **Purpose**: Used to dispatch an action to the Redux store.
    -   **Non-blocking**: It schedules the dispatch and continues to the next line of the Saga immediately. It is the Saga equivalent of `dispatch`.

**Example:**
```javascript
function* fetchUserSaga(action) {
  try {
    // call() pauses execution until the API call resolves
    const user = yield call(Api.fetchUser, action.payload.userId);

    // put() dispatches a SUCCESS action
    yield put({ type: 'FETCH_USER_SUCCESS', user });
  } catch (error) {
    yield put({ type: 'FETCH_USER_FAILURE', error });
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

125. ### What is Redux Thunk?

**Redux Thunk** is a middleware for Redux that allows action creators to return a **function** instead of a plain action object. This function receives `dispatch` and `getState` as arguments, enabling you to perform **asynchronous operations** such as API calls, delayed actions, and conditional dispatching before updating the Redux store.


**[⬆ Back to Top](#table-of-contents)**

126. ### What are the differences between `redux-saga` and `redux-thunk?`

- **Redux Thunk**: Simple to use, uses Promises, great for basic async logic. However, it can become hard to test and manage for complex, nested async flows.
- **Redux Saga**: Uses Generators, extremely powerful for complex async flows (race conditions, cancellations), and very easy to test because effects are just plain objects.

**[⬆ Back to Top](#table-of-contents)**

127. ### What is Redux DevTools?

**Redux DevTools** is a powerful debugging tool for Redux applications. It is most commonly used as a browser extension (Chrome/Firefox) and allows you to inspect state changes, view dispatched actions, and perform "time-travel" debugging.

**[⬆ Back to Top](#table-of-contents)**

128. ### What are the features of Redux DevTools?

     1.  **State Inspection**: View the entire state tree at any point in time.
     2.  **Action Logging**: See a history of every action dispatched and its payload.
     3.  **Time Travel**: Jump back to any previous state by "cancelling" or replaying actions.
     4.  **State Persistence**: Persist debug sessions across page reloads.
     5.  **Action Dispatching**: Manually dispatch actions directly from the DevTools UI.

**[⬆ Back to Top](#table-of-contents)**

129. ### What are Redux selectors and why use them?

**Selectors** are functions used to extract and derive specific pieces of data from the Redux store.

### Why use selectors?

1. **Encapsulation**: Components do not need to know the exact structure of the Redux state.
2. **Reusability**: The same selector can be reused across multiple components.
3. **Performance Optimization**: With libraries like Reselect, selectors can be memoized so they only recompute when the relevant part of the state changes.

### Example:

```javascript
// A simple selector
const selectUser = (state) => state.user.profile;

// Usage in a component
const user = useSelector(selectUser);

```

**[⬆ Back to Top](#table-of-contents)**

130. ### What is Redux Form?

**Redux Form** is a legacy library for managing form state in Redux. It synchronizes every keystroke in a form with the Redux store.

**Note:** It is now largely **deprecated** in the community due to performance overhead and complexity. Modern alternatives like **React Hook Form** or **Formik** are recommended.

**[⬆ Back to Top](#table-of-contents)**

131. ### What are the main features of Redux Form?

     1. **Centralized Form State**: Stores form data and state inside the Redux store.
     2. **Validation Support**: Provides built-in support for both synchronous and asynchronous form validation.
     3. **Field Event Handling**: Automatically tracks field events such as `change`, `focus`, and `blur` through dispatched Redux actions.
     4. **Easy Form Management**: Simplifies handling form submission, resetting, and error management.
     5. **Integration with Redux**: Makes form state accessible across the application through the Redux store.


**[⬆ Back to Top](#table-of-contents)**

132. ### How to add multiple middlewares to Redux?

In Redux, multiple middlewares can be added using the `applyMiddleware()` function. In modern Redux applications, the recommended approach is to use Redux Toolkit and its `configureStore()` method.

### Redux Toolkit Example:

```javascript id="fsbwdw"
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, myCustomMiddleware),
});
```

### Traditional Redux Example:

```javascript id="ffpchg"
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, myCustomMiddleware)
);
```

This allows Redux to process actions through multiple middlewares in sequence before they reach the reducers.


**[⬆ Back to Top](#table-of-contents)**

133. ### How to set initial state in Redux?

You can set the initial state in two ways:
1.  **Reducer Default Value**: Setting the default parameter in your reducer function.
2.  **Preloaded State**: Passing an initial state object as the second argument to `createStore` or `configureStore`.

**Example:**
```javascript
// Method 1: Reducer default
const counterReducer = (state = 0, action) => { ... };

// Method 2: preloadedState in configureStore
const store = configureStore({
  reducer: rootReducer,
  preloadedState: { counter: 10 }
});
```

**[⬆ Back to Top](#table-of-contents)**

134. ### How is Relay different from Redux?

**Redux** is a general-purpose state management library used for managing global application state.
**Relay** is a GraphQL-based data-fetching framework designed to manage and cache server-side data efficiently.

### Key Differences:

1. **Purpose**:

   * Redux manages client-side application state.
   * Relay focuses on fetching and managing GraphQL server data.

2. **Data Fetching**:

   * Redux does not provide built-in data fetching.
   * Relay provides built-in GraphQL query handling and data management.

3. **Caching**:

   * Relay automatically normalizes and caches fetched data.
   * Redux requires additional logic or libraries for caching.

4. **GraphQL Integration**:

   * Relay is tightly coupled with GraphQL.
   * Redux works independently of any API technology.

5. **Performance Optimization**:

   * Relay optimizes queries using features like query co-location and automatic updates.
   * Redux focuses on predictable state updates and centralized state management.


**[⬆ Back to Top](#table-of-contents)**

135. ### What is an action in Redux?

An **action** is a plain JavaScript object that represents an event or describes what happened in the application. Actions are dispatched to the Redux store to trigger state updates through reducers.

An action must contain a `type` property, and it can optionally include additional data in a `payload` property.

### Example:

```javascript id="ywwmwb"
const addTodoAction = {
  type: 'ADD_TODO',
  payload: 'Buy groceries'
};
```


**[⬆ Back to Top](#table-of-contents)**

## React Native

**[⬆ Back to Top](#table-of-contents)**

136. ### What is the difference between React Native and React?

- **React**: A JavaScript library for building user interfaces for the **web**. It uses HTML elements (like `div`, `span`) and the DOM.
- **React Native**: A framework for building **native mobile applications** (iOS, Android). It uses native components (like `View`, `Text`) instead of HTML and compiles to actual native UI elements.

**[⬆ Back to Top](#table-of-contents)**

137. ### How to test React Native apps?

     1.  **Jest**: The standard for unit and snapshot testing.
     2.  **React Native Testing Library (RNTL)**: The recommended way to test components by interacting with them like a user.
     3.  **Detox**: Used for end-to-end (E2E) testing on real simulators or devices.

**[⬆ Back to Top](#table-of-contents)**

138. ### How to do logging in React Native?

You can use standard `console` methods (`log`, `warn`, `error`). Logs can be viewed in the terminal using:
- **iOS**: `npx react-native log-ios`
- **Android**: `npx react-native log-android`

For production, it is common to use services like **Sentry** or **Firebase Crashlytics**.

**[⬆ Back to Top](#table-of-contents)**

139. ### How to debug your React Native?

     1.  **Chrome DevTools**: Access by enabling "Debug Remote JS" in the developer menu.
     2.  **React Native Debugger**: A standalone app that integrates Redux and React DevTools.
     3.  **Flipper**: The modern, extensible debugging platform from Meta (Facebook).
     4.  **React DevTools Extension**: For inspecting the component hierarchy.

**[⬆ Back to Top](#table-of-contents)**

## React supported libraries & Integration

**[⬆ Back to Top](#table-of-contents)**

140. ### What is reselect and how it works?

**Reselect** is a memoized selector library for Redux. It creates "selectors" that compute derived data from the state.

**How it works**: It caches the result of the selector and only recomputes it if the input state changes. This prevents expensive recalculations and unnecessary re-renders in React components.

**[⬆ Back to Top](#table-of-contents)**

141. ### What is Flow?

**Flow** is a static type checker for JavaScript developed by Facebook. It helps catch type-related bugs during development.

**Note**: While still used at Meta, the broader React community has largely shifted to **TypeScript** as the industry standard for static typing.

**[⬆ Back to Top](#table-of-contents)**

142. ### What is the difference between Flow and PropTypes?

- **Flow (Static)**: Checks types at **compile-time**. It can check all JavaScript code, including logic and data structures.
- **PropTypes (Runtime)**: Checks types at **runtime** (during development). It only checks the props passed to React components.

**[⬆ Back to Top](#table-of-contents)**

143. ### How to use Font Awesome icons in React?

The recommended way is using the official **`react-fontawesome`** package.

**Steps:**
1.  **Install dependencies**:
    ```bash
    npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
    ```
2.  **Usage**:
    ```jsx
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faCoffee } from '@fortawesome/free-solid-svg-icons';

    const MyComponent = () => <FontAwesomeIcon icon={faCoffee} />;
    ```

**[⬆ Back to Top](#table-of-contents)**

144. ### What is React Dev Tools?

**React Developer Tools** is a browser extension and standalone application that allows you to inspect the React component tree. You can view and edit the current **props** and **state** of any component and analyze performance via the Profiler.

**[⬆ Back to Top](#table-of-contents)**

145. ### Why is DevTools not loading in Chrome for local files?

     If you opened a local HTML file in your browser (`file://...`) then you must first open _Chrome Extensions_ and check `Allow access to file URLs`.

**[⬆ Back to Top](#table-of-contents)**

146. ### How to use Polymer in React?

      React supports using **Custom Elements** (like those from Polymer). You simply use the element name as an HTML tag in your JSX.

      **Example:**
      ```jsx
      // Assuming 'my-polymer-element' is defined and imported
      const MyComponent = () => (
        <div>
          <my-polymer-element some-prop="value" />
        </div>
      );
      ```

      **[⬆ Back to Top](#table-of-contents)**

147. ### What are the advantages of React over Vue.js?

     1.   **Flexibility**: React is a library, giving more control over architecture.
     2.   **Ecosystem**: Massive library support and larger job market.
     3.   **JSX**: Powerful integration of HTML and JavaScript.
     4.   **Native Support**: React Native is a more mature solution for mobile development.

      **[⬆ Back to Top](#table-of-contents)**

148. ### What is the difference between React and Angular?

  | Feature | React | Angular |
  | :--- | :--- | :--- |
  | **Type** | Library (UI-focused) | Framework (Full-featured) |
  | **Learning Curve** | Moderate | Steep |
  | **Data Binding** | Unidirectional | Bidirectional |
  | **Language** | JS/JSX/TS | TS/HTML |
  | **State Management** | External (Redux/Zustand) | Built-in (Services/RxJS) |

  **[⬆ Back to Top](#table-of-contents)**

149. ### Why React tab is not showing up in DevTools?

     1.   **Not a React app**: The site isn't built with React.
     2.   **Production build**: By default, the tab may be hidden in production.
     3.   **Development Build Issue**: If you are using a minified development build.
     4.   **Extension Permissions**: Ensure the extension has permission to run on the site.

  **[⬆ Back to Top](#table-of-contents)**

150. ### What are Styled Components?

  **Styled Components** is a popular CSS-in-JS library that allows you to write actual CSS in your JavaScript files using **tagged template literals**. It handles scoping styles automatically and supports dynamic styling based on props.

  **[⬆ Back to Top](#table-of-contents)**

151. ### Give an example of Styled Components?

  In **Styled Components**, you define a component using a tagged template literal that contains CSS.

  **Example:**
  ```jsx
  import styled from 'styled-components';

  // Create a styled button component
  const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'gray'};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `;

  const App = () => (
    <div>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
  ```

  **[⬆ Back to Top](#table-of-contents)**

152. ### What is Relay?

  **Relay** is a production-ready GraphQL client for React, maintained by Meta. It is designed for high performance and scalability. It forces a strong coupling between components and the data they require through co-located GraphQL fragments.

  **[⬆ Back to Top](#table-of-contents)**

## Miscellaneous

153. ### What are the main features of Reselect library?

     1.   **Memoization**: Selectors are only recomputed when their inputs (state) change.
     2.   **Derived Data**: Allows Redux to store minimal state while selectors compute complex UI data.
     3.   **Composition**: Selectors can be used as inputs to other selectors, allowing for complex logic chains.

**[⬆ Back to Top](#table-of-contents)**

154. #### Give an example of Reselect usage?

Reselect uses `createSelector` to build memoized selectors that compute derived data from the Redux state.

**Example:**
```javascript
import { createSelector } from 'reselect';

const selectShopItems = (state) => state.shop.items;

// Memoized selector: only recomputes if shop items change
export const selectTotalValue = createSelector(
  [selectShopItems],
  (items) => items.reduce((total, item) => total + item.price, 0)
);
```

**[⬆ Back to Top](#table-of-contents)**

155. ### Can Redux only be used with React?

**No.** Redux is a standalone JavaScript state management library. While it is most commonly used with React, it can be used with any other UI framework (Angular, Vue, Svelte) or even with vanilla JavaScript.

**[⬆ Back to Top](#table-of-contents)**

156. ### Do you need to have a particular build tool to use Redux?

**No.** Redux is a pure JavaScript library. You can use it via a CDN with a simple `<script>` tag. However, in modern development, it is typically used with build tools like **Vite** or **Webpack** to manage modules and dependencies efficiently.

**[⬆ Back to Top](#table-of-contents)**

157. ### How Redux Form `initialValues` get updated from state?

By default, `initialValues` only initializes once. To update the form when the state changes, you must set **`enableReinitialize: true`** in the `reduxForm()` decorator configuration.

**Example:**
```javascript
export default reduxForm({
  form: 'editUser',
  enableReinitialize: true,
})(UserForm);
```

**[⬆ Back to Top](#table-of-contents)**

158. ### How React PropTypes allow different types for one prop?

You can use the **`PropTypes.oneOfType()`** method, which accepts an array of valid prop types.

**Example:**
```javascript
MyComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
```

**[⬆ Back to Top](#table-of-contents)**

159. ### Can I import an SVG file as react component?

**Yes.** If you are using a tool like **SVGR** (which is built into Create React App and many Vite templates), you can import an SVG as a component.

**Example:**
```jsx
import { ReactComponent as Logo } from './logo.svg';

const App = () => (
  <div>
    <Logo title="App Logo" />
  </div>
);
```

**[⬆ Back to Top](#table-of-contents)**

160. ### What is render hijacking in React?

**Render hijacking** is a pattern used in **Higher-Order Components (HOCs)** where the HOC takes control of the rendering behavior of the wrapped component.
It allows the HOC to intercept or manipulate what gets rendered by modifying props, changing UI output, adding extra elements, or conditionally rendering the component.

It is commonly used for:

* Access control (show/hide components)
* Loading states
* Adding layouts or wrappers
* Injecting additional props or styles

Example:

```jsx
function withAuth(WrappedComponent) {
  return function(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}
```

Here, the HOC hijacks the render process and decides whether to render the wrapped component or a different UI.

**[⬆ Back to Top](#table-of-contents)**

161. ### How to pass numbers to React component?

You should pass numbers as props using **curly braces `{}`**. If you pass them in double quotes `""`, they will be treated as strings.

**Example:**
```jsx
<User age={25} /> // Passed as a number
<User age="25" /> // Passed as a string
```

**[⬆ Back to Top](#table-of-contents)**

162. ### Do I need to keep all my state in Redux? Should I ever use React internal state?

**No.** You should not keep all state in Redux.
Use Redux only for **global state** that is shared across multiple components or needs centralized management.

Use **React internal state** (`useState` or `useReducer`) for **local UI state** that belongs to a single component.

* **Redux:** Authentication status, user data, theme settings, cart data, shared application state.
* **React Internal State (`useState`):** Form inputs, modal visibility, dropdown toggles, loading states, temporary UI data.

Keeping local state inside components makes the application simpler, more readable, and easier to maintain.


**[⬆ Back to Top](#table-of-contents)**

163. ### What is the purpose of `registerServiceWorker` in React?

In older versions of **Create React App (CRA)**, `registerServiceWorker` was used to enable **Progressive Web App (PWA)** features.
It registers a **service worker**, which allows the application to cache assets and resources, enabling:

* Offline support
* Faster page loading after the first visit
* Background caching of static files

This improves performance and provides a more app-like experience.

**Note:** In newer React setups, `registerServiceWorker` has been replaced with files like `serviceWorkerRegistration.js` or tools such as Workbox for managing service workers and caching strategies.


**[⬆ Back to Top](#table-of-contents)**

164. ### What is `React.memo` function?

`React.memo` is a **Higher-Order Component (HOC)** used for performance optimization in React.
It memoizes a functional component and prevents unnecessary re-renders if the component’s props have not changed.

By default, `React.memo` performs a **shallow comparison** of props.

**Example:**

```jsx
const MyComponent = React.memo(({ name }) => {
  console.log("Rendering...");
  
  return <div>{name}</div>;
});
```

In this example, `MyComponent` will only re-render when the `name` prop changes.

`React.memo` is useful for optimizing components that:

* Render frequently
* Receive the same props multiple times
* Have expensive rendering logic


**[⬆ Back to Top](#table-of-contents)**

165. ### What is `React.lazy` function?

`React.lazy` is a React feature used for **code-splitting** and **lazy loading** components.
It allows components to be loaded only when they are needed instead of including them in the initial bundle, which helps improve application performance and reduce initial load time.

`React.lazy` works with dynamic `import()` and must be used inside a `Suspense` component to handle the loading state.

**Example:**

```jsx id="y7fg1n"
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```

In this example:

* `OtherComponent` is loaded only when it is rendered.
* `Suspense` displays the fallback UI while the component is being loaded.


**[⬆ Back to Top](#table-of-contents)**

166. ### How to prevent unnecessary updates using `setState`?

To prevent unnecessary re-renders in React:

* **Functional Components:** Use `React.memo` to memoize the component and avoid re-rendering when props have not changed.
* **Class Components:** Use `React.PureComponent` or implement the `shouldComponentUpdate()` lifecycle method to control when the component should re-render.

These techniques help improve performance by reducing unnecessary UI updates.


**[⬆ Back to Top](#table-of-contents)**

167. ### How do you render Arrays, Strings, and Numbers in React 16+?

React 16 and later versions allow components to directly return:

* Arrays of elements
* Strings
* Numbers

without wrapping them inside a parent element like a `<div>`.

**Example:**

```jsx id="2yrx6i"
// Rendering an array of elements
const MyArray = () => [
  <li key="A">First</li>,
  <li key="B">Second</li>
];

// Rendering a string
const MyText = () => "Hello World";

// Rendering a number
const MyNumber = () => 123;
```

In the case of arrays, each element should have a unique `key` prop to help React identify elements efficiently during rendering.


**[⬆ Back to Top](#table-of-contents)**

168. ### What are Hooks in React?

**Hooks** are special functions introduced in React 16.8 that allow functional components to use React features such as:

* State management
* Lifecycle methods
* Context
* Refs
* Side effects

without writing class components.

Hooks make code more reusable, readable, and easier to manage.

Some commonly used hooks are:

* `useState`
* `useEffect`
* `useContext`
* `useRef`
* `useMemo`
* `useCallback`

**Example:**

```jsx id="j2w9qe"
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Here, `useState` allows a functional component to manage state without using a class component.


**[⬆ Back to Top](#table-of-contents)**

169. ### What rules need to be followed for Hooks?

React Hooks follow two important rules:

1. **Only Call Hooks at the Top Level**
   Do not call Hooks inside loops, conditions, nested functions, or callbacks.
   Hooks should always be called at the top level of a React functional component so React can preserve the correct hook order between renders.

2. **Only Call Hooks from React Functions**
   Hooks can only be called:

   * Inside React functional components
   * Inside custom Hooks

   Hooks should not be called from regular JavaScript functions or class components.

Following these rules ensures that Hooks work correctly and React can manage component state and lifecycle properly.


**[⬆ Back to Top](#table-of-contents)**


170. ### How do you ensure Hooks follow the rules in a React project?

The React team provides an ESLint plugin called eslint-plugin-react-hooks to enforce the Rules of Hooks.

This plugin helps by:

* Preventing Hooks from being used incorrectly
* Warning when Hooks are called inside loops, conditions, or nested functions
* Checking dependency arrays for `useEffect`, `useCallback`, and `useMemo`

It improves code quality and helps avoid common Hook-related bugs.

**Example ESLint configuration:**

```json id="bb4m5w"
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```


**[⬆ Back to Top](#table-of-contents)**

171. ### What are the differences between Flux and Redux?

| Feature              | Flux                        | Redux                                                         |
| -------------------- | --------------------------- | ------------------------------------------------------------- |
| **Store**            | Uses multiple stores        | Uses a single centralized store                               |
| **Dispatcher**       | Has a central dispatcher    | No separate dispatcher; actions are sent directly to reducers |
| **State Mutability** | State can be mutable        | State is immutable                                            |
| **State Updates**    | Stores handle state updates | Reducers handle state updates                                 |
| **Data Flow**        | Unidirectional data flow    | Unidirectional data flow                                      |
| **Boilerplate**      | More boilerplate code       | More predictable and structured                               |
| **Debugging**        | Harder to debug             | Easier to debug with tools like Redux DevTools                |
| **Pure Functions**   | Not strictly enforced       | Reducers must be pure functions                               |

Redux was inspired by the Flux architecture but simplifies state management by using a single store and pure reducer functions.


**[⬆ Back to Top](#table-of-contents)**

172. ### What are the benefits of React Router V4?

React Router V4 introduced a more dynamic and component-based approach to routing in React applications.

Some key benefits are:

1. **Dynamic Routing** : 
   Routing is handled using regular React components like `<Route>` and `<Switch>`, allowing routes to be created dynamically based on application state or logic.

2. **Declarative API** :
   Routes are declared directly inside components using JSX, making the routing structure easier to read and maintain without needing a separate route configuration file.

3. **Component-Based Routing** :
   Routes behave like normal React components and can be nested anywhere in the component tree, enabling better code organization and reusable layouts.

4. **Easy Route Nesting** :
   Nested routes make it simple to build complex layouts and UI structures.

5. **Improved Flexibility** :
   Since routing is fully component-driven, it integrates naturally with React’s rendering model and conditional rendering patterns.


**[⬆ Back to Top](#table-of-contents)**

173. ### Can you describe the `componentDidCatch` lifecycle method signature?

The `componentDidCatch` lifecycle method is used in **Error Boundary** class components to catch JavaScript errors occurring in their child component tree during rendering, lifecycle methods, and constructors.

**Signature:**

```javascript id="r8q4zp"
componentDidCatch(error, info)
```

### Parameters:

* **`error`**
  The JavaScript error object that was thrown.

* **`info`**
  An object containing additional information about the error, including the `componentStack` property, which shows the component stack trace where the error occurred.

**Example:**

```jsx id="l2x9cv"
class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info.componentStack);
  }

  render() {
    return this.props.children;
  }
}
```

`componentDidCatch` is mainly used for:

* Logging errors
* Displaying fallback UI
* Preventing the entire application from crashing due to component errors


**[⬆ Back to Top](#table-of-contents)**

174. ### In which scenarios do Error Boundaries not catch errors?

Error Boundaries in React do **not** catch errors in the following cases:

1. **Event Handlers** : 
   Errors thrown inside event handlers such as `onClick`, `onChange`, etc., are not caught by Error Boundaries.

2. **Asynchronous Code** : 
   Errors occurring inside asynchronous operations like:

   * `setTimeout`
   * `setInterval`
   * `requestAnimationFrame`
   * Promise callbacks
     are not handled by Error Boundaries.

3. **Server-Side Rendering (SSR)** : 
   Error Boundaries do not catch errors during server-side rendering.

4. **Errors Inside the Error Boundary Itself** : 
   If the Error Boundary component itself throws an error while rendering, handling state, or executing lifecycle methods, it cannot catch its own errors.

Error Boundaries only catch errors during:

* Rendering
* Lifecycle methods
* Constructors of child components


**[⬆ Back to Top](#table-of-contents)**

175. ### What is the behavior of uncaught errors in React 16+?

In React 16 and later versions, if an error is not caught by an **Error Boundary**, React will unmount the entire component tree.

React follows this approach because leaving a corrupted or inconsistent UI visible can lead to unexpected behavior and a poor user experience. In critical applications such as banking, healthcare, or payment systems, displaying incorrect information can be more dangerous than showing no UI at all.

To prevent the entire application from crashing, React recommends using Error Boundaries to catch and handle errors gracefully.


**[⬆ Back to Top](#table-of-contents)**

176. ### What is the proper placement for Error Boundaries?

The placement of Error Boundaries depends on how you want your application to behave when errors occur.

Common placement strategies include:

* **Application-Level** : 
  Wrap the entire application to catch critical errors and display a global fallback UI when the app crashes.

* **Feature-Level** : 
  Wrap major sections such as dashboards, sidebars, or chat panels to isolate failures and keep the rest of the application working.

* **Component-Level** : 
  Wrap smaller or high-risk components, such as third-party widgets or complex UI components, to prevent them from crashing their parent components.

Using Error Boundaries at multiple levels helps create a more resilient and user-friendly application.


**[⬆ Back to Top](#table-of-contents)**

177. ### What is the benefit of the component stack trace from an Error Boundary?

When an error occurs in React, Error Boundaries provide a **component stack trace** that shows:

* Which component crashed
* The component hierarchy leading to the error
* File names and line numbers (in development mode)

This is different from the normal JavaScript stack trace because it focuses specifically on the React component tree.

The component stack trace helps developers:

* Quickly identify the source of errors
* Debug complex component hierarchies more easily
* Understand how components are connected
* Improve error logging and monitoring

It makes troubleshooting React application errors much faster and more efficient.


**[⬆ Back to Top](#table-of-contents)**

178. ### What are default props?

`defaultProps` are used to define default values for component props in React.
If a parent component does not provide a prop, the default value will be used instead.

**Example using `defaultProps`:**

```jsx id="m4t8qa"
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;

Welcome.defaultProps = {
  name: "Guest"
};
```

In this example, if the `name` prop is not passed, the component will display `"Guest"`.

### Recommended Modern Approach

For functional components, React now commonly recommends using ES6 default parameters instead of `defaultProps`.

**Example using default parameters:**

```jsx id="n7v2pk"
const Welcome = ({ name = "Guest" }) => {
  return <h1>Hello, {name}</h1>;
};
```

This approach is simpler and more readable for functional components.


**[⬆ Back to Top](#table-of-contents)**

179. ### What is the purpose of the `displayName` class property?

The `displayName` property in React is used to define a custom name for a component in debugging tools and error messages.

By default, React uses the function or class name as the component name. However, setting `displayName` explicitly is useful when:

* Working with **Higher-Order Components (HOCs)**
* Debugging complex component trees
* Improving readability in React Developer Tools

**Example:**

```jsx id="u5r8ka"
const withLogger = (Component) => {
  class WithLogger extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  }

  WithLogger.displayName = 
    `WithLogger(${Component.displayName || Component.name})`;

  return WithLogger;
};
```

In this example, the wrapped component will appear in debugging tools with a meaningful name like:

```text
WithLogger(MyComponent)
```

This makes debugging easier and improves the developer experience.


  **[⬆ Back to Top](#table-of-contents)**

180. ### What is the browser support for React applications?

React supports all modern browsers, including:

* Google Chrome
* Mozilla Firefox
* Safari
* Microsoft Edge

React applications generally work well in browsers that support ES5 and modern JavaScript features.

For older browsers such as **Internet Explorer 11 (IE11)**, additional polyfills may be required to support features like:

* `Promise`
* `Map`
* `Set`
* `Array.from`

Commonly used polyfill libraries include:

* core-js
* regenerator-runtime

These polyfills help ensure compatibility with older environments that do not fully support modern JavaScript features.


**[⬆ Back to Top](#table-of-contents)**

181. ### What is code-splitting?

Code-splitting is a performance optimization technique that divides a large JavaScript bundle into smaller chunks that can be loaded only when needed.

Instead of loading the entire application at once, React applications can load specific parts of the code on demand, which helps:

* Reduce initial bundle size
* Improve application load time
* Enhance overall performance

In React, code-splitting is commonly implemented using:

* Dynamic `import()`
* `React.lazy`
* `Suspense`

**Example:**

```jsx id="g4n2xp"
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

In this example:

* `LazyComponent` is loaded only when it is rendered.
* `Suspense` displays fallback content while the component is being loaded.

Code-splitting is especially useful for:

* Large applications
* Route-based loading
* Reducing unnecessary initial downloads


**[⬆ Back to Top](#table-of-contents)**

182. ### What are Keyed Fragments?

Keyed Fragments are React Fragments that include a `key` prop when rendering lists of elements.

When rendering arrays, React uses keys to identify which items have changed, been added, or removed for efficient updates.

Since the short Fragment syntax (`<>...</>`) does not support attributes, including `key`, you must use the explicit `React.Fragment` syntax when keys are required.

**Example:**

```jsx id="v9k3mz"
{items.map((item) => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.description}</dd>
  </React.Fragment>
))}
```

In this example:

* `React.Fragment` groups multiple elements without adding extra DOM nodes.
* The `key` prop helps React optimize rendering during list updates.


**[⬆ Back to Top](#table-of-contents)**

183. ### Does React support all HTML attributes?

Yes. Since React 16, React supports both standard and custom HTML attributes.

* Standard HTML attributes are generally written in **camelCase**:

  * `className`
  * `tabIndex`
  * `readOnly`

* Custom attributes should be written in lowercase.

React also fully supports:

* `data-*` attributes
* `aria-*` attributes

**Example:**

```jsx id="n4q7wp"
<input
  tabIndex={1}
  readOnly={true}
  data-user="101"
  aria-label="Username"
/>
```

This support allows React components to work seamlessly with standard HTML, accessibility attributes, and custom data attributes.


**[⬆ Back to Top](#table-of-contents)**

184. ### When do component props default to `true`?

In JSX, if a prop is passed without assigning a value, React automatically treats it as `true`.

This behavior is similar to HTML boolean attributes.

**Example:**

```jsx id="f8r2mk"
<MyInput autocomplete />
```

is equivalent to:

```jsx id="h3v9qd"
<MyInput autocomplete={true} />
```

This shorthand is commonly used for boolean props such as:

* `disabled`
* `checked`
* `required`
* `readOnly`


**[⬆ Back to Top](#table-of-contents)**

185. ### What is Next.js and what are its major features?

Next.js is a popular React framework developed by Vercel for building fast, production-ready web applications.

It extends React by providing features such as server-side rendering, routing, API handling, and performance optimizations out of the box.

### Major Features of Next.js

1. **Server-Side Rendering (SSR) and Static Site Generation (SSG)** : 
   Next.js supports multiple rendering strategies:

   * SSR for dynamic content
   * SSG for pre-rendered static pages
   * Incremental Static Regeneration (ISR)

2. **File-Based Routing** : 
   Routes are automatically created based on the file structure inside the `pages` or `app` directory.

3. **API Routes** : 
   Allows developers to create backend API endpoints directly inside the Next.js application using serverless functions.

4. **Automatic Code Splitting** : 
   Only the required JavaScript for a page is loaded, improving performance and reducing bundle size.

5. **Image Optimization** : 
   Provides the built-in `Image` component for optimized image loading, resizing, and lazy loading.

6. **Middleware and Edge Functions** : 
   Supports middleware execution at the edge for authentication, redirects, request handling, and personalization.

7. **Built-in CSS and Styling Support** : 
   Supports CSS Modules, Sass, Tailwind CSS, and other styling solutions.

8. **SEO Optimization** : 
   SSR and metadata support help improve search engine optimization.

9. **Fast Refresh** : 
   Provides instant feedback during development without losing component state.

**[⬆ Back to Top](#table-of-contents)**

186. ### How do you pass an event handler to a component?

In React, event handlers are passed to child components as props, just like regular data.

The child component can then attach the handler to an element such as a button, input, or form.

**Example:**

```jsx id="q7m2xa"
const Child = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

const Parent = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return <Child onClick={handleClick} />;
};
```

In this example:

* `Parent` defines the `handleClick` function.
* The function is passed to `Child` through the `onClick` prop.
* `Child` uses the handler inside the button element.


**[⬆ Back to Top](#table-of-contents)**

187. ### How do you prevent a function from being called multiple times?

To avoid unnecessary or repeated function calls in React or JavaScript applications, common techniques include:

1. **Throttling**
   Throttling limits how often a function can execute within a specific time interval.
   It is useful for events like scrolling, resizing, or mouse movement.

2. **Debouncing**
   Debouncing delays function execution until a specified period of inactivity has passed.
   It is commonly used in search inputs, autocomplete, and API calls.

3. **State or Ref Guards**
   Use flags such as `isLoading` or `isSubmitting` to prevent repeated execution while a process is already running.

**Example using a state guard:**

```jsx id="u2p9mx"
const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    // API call or async logic

    setIsSubmitting(false);
  };

  return (
    <button onClick={handleSubmit} disabled={isSubmitting}>
      Submit
    </button>
  );
};
```

Popular utility libraries like Lodash provide built-in `debounce` and `throttle` functions for easier implementation.


**[⬆ Back to Top](#table-of-contents)**

188. ### How does JSX prevent Injection Attacks?

By default, React automatically escapes values embedded inside JSX before rendering them to the DOM.

This helps protect applications from **Cross-Site Scripting (XSS)** attacks by treating potentially dangerous content as plain text instead of executable HTML or JavaScript.

**Example:**

```jsx id="v4k8pm"
const userInput = '<script>alert("Hacked!")</script>';

return <div>{userInput}</div>;
```

In this example, React renders the content as text:

```html id="c1n7qa"
<script>alert("Hacked!")</script>
```

instead of executing the script.

This automatic escaping makes JSX safer by default.
However, using `dangerouslySetInnerHTML` bypasses this protection, so it should be used carefully with trusted and sanitized content only.


**[⬆ Back to Top](#table-of-contents)**

189. ### How do you update rendered elements in React?

In React, you do not update the DOM directly.
Instead, you update the component’s **state** or **props**, and React automatically re-renders the UI.

React uses:

* The **Virtual DOM**
* A **diffing algorithm (Reconciliation)**

to compare the previous UI with the updated UI and efficiently update only the changed parts of the real DOM.

**Example:**

```jsx id="x6m2qp"
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

In this example:

* Updating the `count` state triggers a re-render.
* React updates only the changed text in the DOM instead of reloading the entire page.


**[⬆ Back to Top](#table-of-contents)**

190. ### Why are props considered read-only in React?

In React, props are considered **read-only** because React follows a **unidirectional data flow** (one-way data binding).

Props are passed from a parent component to a child component, and the child component should only use them for rendering, not modify them.

React components are expected to behave like **pure functions**, meaning:

* The same props should always produce the same UI output.
* Components should not modify their own inputs (props).

**Incorrect Example:**

```jsx id="g7w2mk"
function Welcome(props) {
  props.name = "John"; // ❌ Never modify props
  return <h1>{props.name}</h1>;
}
```

Instead, if data needs to change:

* Update the state in the parent component
* Pass updated props down to child components

This approach keeps applications predictable, maintainable, and easier to debug.


**[⬆ Back to Top](#table-of-contents)**

191. ### What are the conditions to safely use the index as a key?

In React, using the array index as a `key` is generally discouraged because it can cause rendering and state issues when list items change.

However, using the index as a key is considered safe only when all of the following conditions are true:

1. **The list is static**
   The list items never change after rendering.

2. **Items do not have unique IDs**
   There is no stable unique identifier available for each item.

3. **The list is never reordered, filtered, or updated**
   Items are always rendered in the same order.

**Example:**

```jsx id="k4x9pm"
const days = ["Mon", "Tue", "Wed"];

days.map((day, index) => (
  <li key={index}>{day}</li>
));
```

If the list can change dynamically, it is better to use a stable and unique key such as:

* Database IDs
* UUIDs
* Unique item identifiers

This helps React correctly identify elements during re-rendering and improves performance and UI consistency.


**[⬆ Back to Top](#table-of-contents)**

192.### Should keys be globally unique in React?

No. In React, keys only need to be unique among sibling elements within the same list or array.

They do not need to be globally unique across the entire application or across different lists.

**Example:**

```jsx id="r5n2qx"
const Posts = ({ items }) => (
  <ul>
    {items.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

const Sidebar = ({ items }) => (
  <ul>
    {items.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
```

In this example, using the same `post.id` as a key in both lists is completely safe because the keys are only compared within their own sibling list.


**[⬆ Back to Top](#table-of-contents)**

193. ### What are the popular choices for form handling in React?

In React, forms can be managed using controlled components, but many developers prefer dedicated form libraries for better performance and easier validation.

Some of the most popular form handling libraries are:

1. **React Hook Form**

   * Lightweight and highly performant
   * Uses uncontrolled components internally to reduce unnecessary re-renders
   * Easy integration with validation libraries
   * Well-suited for large and complex forms

2. **Formik**

   * Declarative and easy to use
   * Simplifies form state management, validation, and submission handling
   * Commonly used with Yup for schema-based validation

These libraries help manage:

* Form state
* Validation
* Error handling
* Form submission
* Complex nested fields

more efficiently than manually handling everything with `useState`.


**[⬆ Back to Top](#table-of-contents)**

194. ### What are the advantages of Formik over Redux Form?

Formik has several advantages over Redux Form for managing forms in React applications.

### Advantages of Formik

1. **Local State Management**
   Formik stores form state locally inside the component instead of the global Redux store.
   This avoids dispatching Redux actions for every input change.

2. **Better Performance**
   Since form state is local, Formik reduces unnecessary global state updates and prevents excessive application-wide re-renders during typing.

3. **Simpler Setup**
   Formik does not require Redux configuration, reducers, or middleware, making it easier to integrate and maintain.

4. **Smaller Boilerplate**
   It provides a cleaner and more declarative API for handling:

   * Form state
   * Validation
   * Errors
   * Submission

5. **Easy Validation Integration**
   Formik works seamlessly with Yup for schema-based form validation.

Because of these benefits, Formik is often preferred for most React form-handling use cases unless the form state truly needs to be shared globally through Redux.


**[⬆ Back to Top](#table-of-contents)**

195. ### Why are you not required to use inheritance in React?

React encourages **composition over inheritance** for code reuse and component design.

Instead of extending classes through inheritance, React applications typically reuse functionality by:

* Passing props
* Using the `children` prop
* Creating reusable components
* Using custom Hooks

This approach makes components:

* More flexible
* Easier to maintain
* Easier to test
* More predictable

**Example using composition:**

```jsx id="x4n8qp"
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Hello React</h2>
    </Card>
  );
}
```

Modern React development mainly relies on:

* Component composition
* Custom Hooks
* Context API

rather than class inheritance for sharing logic and behavior.


**[⬆ Back to Top](#table-of-contents)**

196. ### Can I use Web Components in a React application?

Yes. React can work with Web Components without any issues.

React and Web Components solve different problems:

* **Web Components** provide reusable, encapsulated custom HTML elements.
* React focuses on building declarative user interfaces and efficiently updating the DOM.

You can use Web Components inside React just like regular HTML elements.

**Example:**

```jsx id="p8x3qm"
function App() {
  return (
    <div>
      <my-custom-element></my-custom-element>
    </div>
  );
}
```

### Benefits of using Web Components with React

* Reusable UI widgets
* Encapsulated styles and behavior
* Framework-independent components

### Important Notes

* Custom events from Web Components may require manual event handling.
* Some properties may need to be passed using refs instead of standard JSX props.

React and Web Components can complement each other effectively in large applications.


**[⬆ Back to Top](#table-of-contents)**

197. ### What is dynamic `import()`?

Dynamic `import()` is a modern JavaScript feature that allows modules to be loaded asynchronously at runtime instead of loading everything during the initial bundle load.

It returns a `Promise` that resolves to the imported module.

Dynamic imports are commonly used for:

* Code-splitting
* Lazy loading
* Improving application performance
* Reducing initial bundle size

In React, dynamic imports are the foundation for features like `React.lazy`.

**Example:**

```javascript id="t6m2qx"
const handleClick = async () => {
  const module = await import("./math.js");

  console.log(module.add(1, 2));
};
```

In this example:

* `math.js` is loaded only when `handleClick` is executed.
* This helps avoid loading unnecessary code during the initial application load.


**[⬆ Back to Top](#table-of-contents)**

198. ### What are Loadable Components?

Loadable Components is a library used for code-splitting and lazy loading in React applications, especially when **Server-Side Rendering (SSR)** support is needed.

While `React.lazy` is the built-in React solution for lazy loading, it mainly supports client-side rendering. Loadable Components provides additional features such as:

* SSR support
* Better control over loading states
* Preloading components
* Dynamic imports with advanced customization

**Example:**

```jsx id="k9v3pm"
import loadable from "@loadable/component";

const OtherComponent = loadable(() => import("./OtherComponent"));
```

In this example:

* `OtherComponent` is loaded only when needed.
* The application bundle becomes smaller and loads faster.

Loadable Components is commonly used in large React applications that require:

* SSR
* Optimized performance
* Advanced code-splitting strategies


**[⬆ Back to Top](#table-of-contents)**

199. ### What is the `Suspense` component in React?

`Suspense` is a built-in component in React that allows you to display a fallback UI while waiting for child components or resources to load asynchronously.

It is commonly used with:

* `React.lazy`
* Code-splitting
* Lazy-loaded components

The `fallback` prop specifies what should be displayed while the component is loading.

**Example:**

```jsx id="r4m8qx"
import React, { Suspense } from "react";

const ProfilePage = React.lazy(() => import("./ProfilePage"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ProfilePage />
    </Suspense>
  );
}
```

In this example:

* `ProfilePage` is loaded lazily.
* `Spinner` is displayed until the component finishes loading.

`Suspense` helps create smoother loading experiences and improves application performance through lazy loading and code-splitting.


**[⬆ Back to Top](#table-of-contents)**

200. ### What is route-based code splitting?

Route-based code splitting is a performance optimization technique where the application bundle is split according to different routes or pages.

Instead of loading the entire application code at once, React loads only the code needed for the current route. Additional route components are loaded dynamically when the user navigates to them.

This helps:

* Reduce initial bundle size
* Improve page load performance
* Speed up application startup time

In React, route-based code splitting is commonly implemented using:

* `React.lazy`
* `Suspense`
* Dynamic `import()`

**Example:**

```jsx id="y6n2pk"
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

In this example:

* `Home` and `About` components are loaded only when their routes are accessed.
* `Loading` is displayed while the component code is being fetched.


**[⬆ Back to Top](#table-of-contents)**

201. ### What is the purpose of the default value in Context?

In React, the default value provided to `React.createContext()` is used only when a component does not have a matching `Provider` above it in the component tree.

It acts as a fallback value for:

* `useContext`
* `Context.Consumer`

**Example:**

```jsx id="q3m8pk"
const ThemeContext = React.createContext("light");
```

If no `ThemeContext.Provider` is found above a component, the value `"light"` will be returned.

**Example with `useContext`:**

```jsx id="v7n2qx"
const theme = useContext(ThemeContext);
```

### Common Uses of Default Values

* Providing fallback behavior
* Simplifying component testing
* Preventing errors when a Provider is missing

However, in most real applications, the actual context value is usually supplied through a `Provider`.


**[⬆ Back to Top](#table-of-contents)**

202. ### What is the diffing algorithm in React?

The diffing algorithm is the process used by React to efficiently update the DOM.

Instead of re-rendering the entire UI, React compares:

* The previous Virtual DOM
* The new Virtual DOM

and calculates the minimum number of changes required to update the real DOM. This process is called **diffing** and is part of React’s **Reconciliation** process.

### Main Rules of the Diffing Algorithm

1. **Elements with different types produce different trees**
   If the element type changes (for example, from `<div>` to `<span>`), React destroys the old tree and creates a new one.

2. **Keys help identify stable child elements**
   The `key` prop helps React track list items between renders, making updates more efficient and preventing unnecessary re-renders.

**Example:**

```jsx id="m2q8vx"
items.map((item) => (
  <li key={item.id}>{item.name}</li>
))
```

Using stable keys allows React to:

* Detect added or removed items
* Reorder elements efficiently
* Preserve component state correctly

The diffing algorithm helps React achieve high performance by minimizing direct DOM operations.


**[⬆ Back to Top](#table-of-contents)**

203. ### What are the rules covered by the diffing algorithm in React?

During the reconciliation process, React compares the old Virtual DOM tree with the new one to determine the minimum changes needed in the real DOM.

The diffing algorithm follows these main rules:

1. **Elements of Different Types**
   If the root elements are of different types, React destroys the old tree and creates a completely new tree.

   **Example:**

   ```jsx id="x7m2pk"
   <div /> → <span />
   ```

2. **DOM Elements of the Same Type**
   If two DOM elements have the same type, React reuses the existing DOM node and updates only the changed attributes.

   **Example:**

   ```jsx id="v3n8qa"
   <button className="blue" />
   <button className="red" />
   ```

   React updates only the `className` value.

3. **Component Elements of the Same Type**
   When React encounters the same component type, it preserves the component instance and state while updating the props.

   This allows stateful components to maintain their existing state across renders.

4. **Recursing on Children**
   React compares child elements recursively.
   By default, it compares children in order, which can become inefficient for dynamic lists.

   This is why the `key` prop is important when rendering lists:

   ```jsx id="k5r1mx"
   items.map((item) => (
     <li key={item.id}>{item.name}</li>
   ))
   ```

   Keys help React:

   * Identify moved elements
   * Detect inserted or removed items
   * Optimize rendering performance

These rules make React updates fast and efficient while minimizing direct DOM manipulations.


**[⬆ Back to Top](#table-of-contents)**

204. ### When do you need to use refs in React?

In React, refs are used to directly access DOM elements or component instances when declarative React patterns are not sufficient.

Refs should be used sparingly and mainly for imperative operations such as:

1. **Managing Focus, Text Selection, or Media Playback**
   Examples:

   * Automatically focusing an input
   * Controlling video/audio playback
   * Selecting text programmatically

2. **Triggering Imperative Animations**
   Useful when working with animations that require direct DOM manipulation.

3. **Integrating with Third-Party DOM Libraries**
   Refs are commonly used when integrating libraries such as:

   * D3.js
   * jQuery

**Example:**

```jsx id="u4n8pk"
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

In most cases, React state and props should be preferred over refs for managing UI behavior.


**[⬆ Back to Top](#table-of-contents)**

205. ### Must a prop be named `render` for render props?

No. In React, a render prop is simply a prop whose value is a function that returns UI elements.

The prop does not have to be named `render`.
Any function prop used for rendering content can act as a render prop.

Common names include:

* `render`
* `children`
* `component`
* `itemRenderer`

**Example using the `children` prop:**

```jsx id="n6x2pk"
<Mouse
  children={(mouse) => (
    <p>
      The mouse position is {mouse.x}, {mouse.y}
    </p>
  )}
/>
```

This pattern allows components to share logic while giving consumers control over what gets rendered.


**[⬆ Back to Top](#table-of-contents)**

206. ### What are the problems of using render props with Pure Components?

Using render props with `React.PureComponent` can reduce performance benefits if the render function is created inside the component’s `render` method.

`React.PureComponent` performs a **shallow comparison** of props and state.
Since functions are compared by reference, a new function instance is created on every render, causing the shallow comparison to fail and triggering unnecessary re-renders.

**Problematic Example:**

```jsx id="q4m8pk"
class Parent extends React.PureComponent {
  render() {
    return (
      <Mouse
        render={(mouse) => (
          <p>{mouse.x}, {mouse.y}</p>
        )}
      />
    );
  }
}
```

In this example:

* A new render function is created during every render.
* `PureComponent` detects the function reference as changed.
* The child component re-renders unnecessarily.

### Better Approach

Define the render function as a class method or memoized function so the same function reference is reused.

**Optimized Example:**

```jsx id="v7n2qx"
class Parent extends React.PureComponent {
  renderMouse(mouse) {
    return <p>{mouse.x}, {mouse.y}</p>;
  }

  render() {
    return <Mouse render={this.renderMouse} />;
  }
}
```

This helps preserve the optimization benefits of `React.PureComponent`.


    **[⬆ Back to Top](#table-of-contents)**

207. ### What is the windowing technique in React?

Windowing, also known as **list virtualization**, is a performance optimization technique used to render only the visible portion of a large list instead of rendering all items at once.

In large datasets, rendering thousands of DOM elements can slow down the application. Windowing solves this by rendering only the items currently visible in the viewport (the "window") and dynamically updating them during scrolling.

### Benefits of Windowing

* Improves rendering performance
* Reduces memory usage
* Minimizes DOM nodes
* Provides smoother scrolling for large lists

Popular libraries for windowing in React include:

* react-window
* react-virtualized

**Example using `react-window`:**

```jsx id="k8m2px"
import { FixedSizeList } from "react-window";

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

function App() {
  return (
    <FixedSizeList
      height={300}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </FixedSizeList>
  );
}
```

In this example, only the visible rows are rendered instead of all 1000 items simultaneously.


**[⬆ Back to Top](#table-of-contents)**

208. ### How do you print falsy values in JSX?

In React, values such as:

* `false`
* `true`
* `null`
* `undefined`

are valid JSX children, but they do not render anything in the UI.

If you want to display these values, you need to explicitly convert them into strings.

**Example:**

```jsx id="m4x8qp"
<div>My value is: {String(myVariable)}</div>
```

**Example Output:**

```jsx id="t7n2pk"
String(false)      // "false"
String(null)       // "null"
String(undefined)  // "undefined"
```

Numbers and strings render normally in JSX, but booleans and `null`/`undefined` are ignored unless converted to text.


**[⬆ Back to Top](#table-of-contents)**

209. ### What is the typical use case of Portals in React?

In React, Portals are used to render components into a DOM node outside the normal parent component hierarchy.

They are useful when UI elements need to visually "break out" of their parent container.

### Common Use Cases of Portals

* Modals and Dialogs
* Tooltips and Popovers
* Dropdowns and Floating Menus
* Notifications and Toasts

Portals help avoid layout issues caused by:

* `overflow: hidden`
* `z-index`
* CSS stacking contexts

**Example:**

```jsx id="q6m2pk"
ReactDOM.createPortal(
  <Modal />,
  document.getElementById("portal-root")
);
```

In this example:

* The `Modal` component is rendered inside `portal-root`
* Even though it belongs logically to another component in the React tree

Portals maintain normal React behavior such as:

* Context access
* Event bubbling
* State management

while rendering the UI outside the parent DOM structure.


**[⬆ Back to Top](#table-of-contents)**

210. ### How do you set default values for uncontrolled components?

In React, uncontrolled components manage their own state internally through the DOM instead of React state.

To provide initial values for uncontrolled components, React uses:

* `defaultValue` for text inputs, textareas, and selects
* `defaultChecked` for checkboxes and radio buttons

These attributes set the initial value only once when the component mounts.

**Example:**

```jsx id="x5n2pk"
<input
  type="text"
  defaultValue="John Doe"
  ref={myRef}
/>

<input
  type="checkbox"
  defaultChecked={true}
  ref={checkRef}
/>
```

In this example:

* The text input initially contains `"John Doe"`
* The checkbox starts checked
* Future updates are managed by the DOM, not React state

This differs from controlled components, where the value is managed using React state and the `value` prop.


**[⬆ Back to Top](#table-of-contents)**

211. ### What is a modern React stack?

A modern React stack commonly includes tools for building, state management, styling, forms, and testing.

### Popular React Stack

1. **Build Tool**

   * [Vite](https://vitejs.dev/?utm_source=chatgpt.com)
     Fast development server and optimized build tool with excellent developer experience.

2. **State Management**

   * [TanStack Query (React Query)](https://tanstack.com/query?utm_source=chatgpt.com) for server state and API caching
   * [Zustand](https://github.com/pmndrs/zustand?utm_source=chatgpt.com) or Redux Toolkit for global client state

3. **Styling**

   * [Tailwind CSS](https://tailwindcss.com/?utm_source=chatgpt.com)
   * Styled Components

4. **Form Handling**

   * [React Hook Form](https://react-hook-form.com/?utm_source=chatgpt.com)
     Lightweight and performant form library.

5. **Testing**

   * [Vitest](https://vitest.dev/?utm_source=chatgpt.com) for unit testing
   * React Testing Library for component testing

This stack is popular because it provides:

* Fast development experience
* Good performance
* Scalable architecture
* Modern developer tooling
* Better maintainability for large applications


**[⬆ Back to Top](#table-of-contents)**

212. ### What is the difference between Real DOM and Virtual DOM?

| Feature          | Real DOM                               | Virtual DOM                                              |
| ---------------- | -------------------------------------- | -------------------------------------------------------- |
| **Definition**   | Actual browser DOM structure           | Lightweight JavaScript representation of the DOM         |
| **Updates**      | Direct DOM updates are slower          | Updates are faster due to diffing and batching           |
| **Performance**  | Expensive DOM manipulation             | Efficient updates with minimal DOM changes               |
| **Re-rendering** | Often re-renders large parts of the UI | Updates only changed elements                            |
| **Memory Usage** | Higher memory usage                    | More optimized and lightweight                           |
| **Manipulation** | Directly manipulates browser DOM       | Uses Virtual DOM comparison before updating the real DOM |
| **Speed**        | Slower for frequent updates            | Faster UI rendering experience                           |

In React, the Virtual DOM improves performance by:

1. Creating a virtual copy of the UI
2. Comparing the new and previous Virtual DOM trees (diffing)
3. Updating only the changed parts in the Real DOM

This process minimizes expensive direct DOM operations and improves application performance.


213. ### How do you add Bootstrap to a React application?

You can add Bootstrap to a React application using npm and then importing the Bootstrap CSS file.

### Step 1: Install Bootstrap

```bash
npm install bootstrap
```

### Step 2: Import Bootstrap CSS

Import the CSS file inside `main.js`, `index.js`, or `App.js`.

```javascript id="m8x2pk"
import "bootstrap/dist/css/bootstrap.min.css";
```

After importing, you can directly use Bootstrap classes:

```jsx id="q4n7vx"
<button className="btn btn-primary">
  Click Me
</button>
```

### Alternative: React Bootstrap

You can also use React Bootstrap, which provides Bootstrap components built specifically for React.

**Install:**

```bash
npm install react-bootstrap bootstrap
```

**Example:**

```jsx id="t6m2qa"
import Button from "react-bootstrap/Button";

function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

React Bootstrap provides reusable React components without relying heavily on direct Bootstrap class manipulation.


**[⬆ Back to Top](#table-of-contents)**


214. ### Can you list down top websites or applications using react as front end framework?

## Top websites and applications using React

React is widely used by many large-scale companies and applications for building modern user interfaces.

Some popular websites and applications using React include:

1. Facebook
2. Instagram
3. WhatsApp (Web version)
4. Netflix
5. Airbnb
6. Uber
7. The New York Times
8. Discord
9. Dropbox
10. Pinterest
11. Shopify
12. Reddit

These companies use React because of its:

* Component-based architecture
* Efficient rendering with Virtual DOM
* Strong ecosystem
* Scalability for large applications
* Excellent developer experience


**[⬆ Back to Top](#table-of-contents)**

215. ### Is it recommended to use CSS-in-JS in React?

Yes. CSS-in-JS is a popular approach in React for styling components with scoped and reusable styles.

CSS-in-JS libraries allow you to write CSS directly inside JavaScript or component files, which helps with:

* Component-level style encapsulation
* Dynamic styling based on props or state
* Better maintainability
* Avoiding global CSS conflicts

Popular CSS-in-JS libraries include:

* Styled Components
* Emotion

**Example using Styled Components:**

```jsx id="k7m2px"
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px;
`;

function App() {
  return <Button>Click Me</Button>;
}
```

However, modern React development also commonly uses utility-first CSS frameworks such as:

* Tailwind CSS

The best choice depends on:

* Project size
* Team preferences
* Performance requirements
* Styling complexity

All of these approaches are widely used in modern React applications.

**[⬆ Back to Top](#table-of-contents)**

216. ### Do I need to rewrite all my class components with Hooks?

No. In React, Hooks are completely optional and backward compatible.

You do not need to rewrite existing class components to use Hooks. React supports a gradual adoption approach, which means:

* Existing class components can continue working as they are.
* Hooks can be used in new functional components.
* Older components can be refactored incrementally when needed.

Many applications use a mix of:

* Class components
* Functional components with Hooks

Hooks are generally preferred for new development because they:

* Reduce boilerplate
* Improve code reuse
* Simplify state and side-effect management

However, there is no requirement to immediately migrate all existing class components.


**[⬆ Back to Top](#table-of-contents)**

217. ### What is the `useEffect` Hook? How do you fetch data with React Hooks?

The `useEffect` Hook in React is used to perform side effects in functional components.

Common side effects include:

* Data fetching
* API calls
* Subscriptions
* Timers
* DOM updates
* Event listeners

`useEffect` runs after the component renders.

### Example: Fetching Data with `useEffect`

```jsx id="x8m2pk"
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const response = await fetch(
        `https://api.example.com/user/${userId}`
      );

      const data = await response.json();

      if (isMounted) {
        setUser(data);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>{user.name}</div>;
}
```

### Important Concepts

* The dependency array (`[userId]`) controls when the effect runs.
* Cleanup functions help prevent memory leaks or state updates after unmounting.
* `useEffect` replaces lifecycle methods like:

  * `componentDidMount`
  * `componentDidUpdate`
  * `componentWillUnmount`

For modern React applications, libraries like TanStack Query are also commonly used for advanced data fetching and caching.


**[⬆ Back to Top](#table-of-contents)**

218. ### Is Hooks cover all use cases for classes?

## Do Hooks cover all use cases of class components?

Almost. React Hooks cover most common use cases that were previously handled by class components, including:

* State management
* Side effects
* Context
* Refs
* Performance optimization

However, a few class lifecycle methods still do not have direct Hook equivalents:

1. `getSnapshotBeforeUpdate`
2. `componentDidCatch`
3. `getDerivedStateFromError`

These methods are mainly related to **Error Boundaries** and certain advanced lifecycle behaviors.

Because of this:

* Error Boundaries currently still require class components.
* Functional components with Hooks cannot directly replace every class-based error handling scenario yet.

For most modern React development, Hooks are the preferred approach, but class components are still useful in some advanced cases.


**[⬆ Back to Top](#table-of-contents)**

219. ### What is the stable release for Hooks support?

React officially introduced stable support for Hooks in **React 16.8**.

Hooks became available in the following React packages:

1. `react`
2. `react-dom`
3. `react-dom/server`
4. `react-test-renderer`
5. `react-shallow-renderer`

React 16.8 enabled developers to use:

* State
* Lifecycle features
* Context
* Refs

inside functional components without writing class components.


**[⬆ Back to Top](#table-of-contents)**

220. ### Why do we use array destructuring in `useState`?

In React, the `useState` Hook returns an array containing:

1. The current state value
2. A function to update that state

Array destructuring is used because it allows developers to choose any variable names they want.

**Example:**

```javascript id="m7x2pk"
const [count, setCount] = useState(0);
```

Here:

* `count` is the state value
* `setCount` is the state updater function

The names are completely customizable:

```javascript id="q4n8vx"
const [user, setUser] = useState(null);
```

This flexibility is one reason arrays are used instead of objects.

If `useState` returned an object, developers would need fixed property names like:

```javascript id="r6m1qa"
const { value, update } = useState();
```

Using arrays with destructuring makes the API shorter, cleaner, and more flexible.


**[⬆ Back to Top](#table-of-contents)**

221. ### What were the sources of inspiration for React Hooks?

React Hooks were inspired by ideas and patterns from several existing libraries, experiments, and programming concepts.

Some major inspirations include:

1. **Functional APIs in the `react-future` repository**
   Early React experiments explored more functional approaches to component logic and state management.

2. **Render Prop patterns**
   Patterns such as render props helped demonstrate reusable stateful logic between components.

3. **State variables and state cells from DisplayScript**
   These ideas influenced the concept of isolated state variables inside functional components.

4. **Subscriptions in RxJS**
   Reactive subscription patterns influenced Hook-based side-effect handling and data flow.

5. **Reducer components in ReasonReact**
   Reducer-based state management patterns inspired Hooks like `useReducer`.

Hooks were designed to simplify:

* Stateful logic reuse
* Side-effect management
* Component composition

while reducing the complexity associated with class components and lifecycle methods.


**[⬆ Back to Top](#table-of-contents)**

222. ### How do you access the imperative API of Web Components in React?

In React, you can access the imperative API of a Web Component by using a `ref` to directly reference the underlying DOM element.

This is necessary because Web Components often expose methods and properties imperatively through the DOM node.

**Example:**

```jsx id="x4m8pk"
import React, { useRef, useEffect } from "react";

const MyComponent = () => {
  const webCompRef = useRef(null);

  useEffect(() => {
    // Calling a method exposed by the web component
    webCompRef.current.someMethod();
  }, []);

  return <my-web-component ref={webCompRef} />;
};
```

In this example:

* `useRef` stores a reference to the Web Component DOM element.
* `webCompRef.current` gives direct access to the component instance.
* Imperative methods can then be called directly.

Refs are commonly used when integrating React with:

* Web Components
* Third-party DOM libraries
* Native browser APIs


**[⬆ Back to Top](#table-of-contents)**

223. ### What is Formik?

Formik is a popular library used for handling forms in React applications.

Formik simplifies form management by handling common form-related tasks such as:

1. **Managing Form State**
   Handles input values and keeps form data synchronized.

2. **Validation and Error Handling**
   Makes it easy to validate fields and display error messages.

3. **Form Submission**
   Simplifies submission handling, including async requests.

### Benefits of Formik

* Reduces boilerplate code
* Simplifies complex forms
* Works well with validation libraries like Yup
* Improves readability and maintainability

**Example:**

```jsx id="m7n2pk"
import { Formik, Form, Field } from "formik";

function SignupForm() {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field name="email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
```

Formik is commonly used for medium to large forms where manual state management becomes difficult.


**[⬆ Back to Top](#table-of-contents)**

224. ### What are typical middleware choices for handling asynchronous calls in Redux?

In Redux, middleware is commonly used to handle asynchronous operations such as API calls, delayed actions, and side effects.

Popular middleware choices include:

1. **Redux Thunk**

   * The most common and beginner-friendly solution
   * Allows action creators to return functions instead of plain objects
   * Ideal for simple asynchronous logic

2. **Redux Saga**

   * Uses JavaScript Generators for managing side effects
   * Suitable for complex async workflows
   * Easier to test advanced asynchronous logic

3. **RTK Query**

   * Built into Redux Toolkit
   * Modern solution for API fetching and caching
   * Automatically handles:

     * Caching
     * Loading states
     * Refetching
     * Request deduplication

Today, Redux Toolkit and RTK Query are generally the recommended modern approach for Redux applications.


**[⬆ Back to Top](#table-of-contents)**

225. ### Do browsers understand JSX code?

No. Browsers do not understand JSX directly.

JSX is a syntax extension used in React that looks similar to HTML but is not valid JavaScript for browsers.

Before execution, JSX must be transpiled into regular JavaScript using tools such as:

* Babel
* Build tools like Vite or Webpack

**Example JSX:**

```jsx id="m4x8pk"
const element = <h1>Hello React</h1>;
```

is transpiled into:

```javascript id="q7n2vx"
const element = React.createElement(
  "h1",
  null,
  "Hello React"
);
```

After transpilation, browsers can execute the resulting standard JavaScript code normally.

**[⬆ Back to Top](#table-of-contents)**

226. ### Describe the data flow in React

React follows a **unidirectional data flow** (one-way data binding) architecture.

This means:

* Data flows from parent components to child components through **props**
* Child components communicate with parents using **callback functions** or event handlers

### Flow Direction

* **Parent → Child:** Data passed using props
* **Child → Parent:** Events or callbacks used to send information upward

**Example:**

```jsx id="x8m2pk"
function Child({ message, onClick }) {
  return (
    <button onClick={onClick}>
      {message}
    </button>
  );
}

function Parent() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <Child
      message="Click Me"
      onClick={handleClick}
    />
  );
}
```

### Benefits of Unidirectional Data Flow

* Predictable state management
* Easier debugging
* Better component organization
* Improved maintainability
* Clear data ownership

This one-way flow is one of the core design principles of React.


**[⬆ Back to Top](#table-of-contents)**

227. ### What is MobX?

MobX is a state management library commonly used with React applications.

MobX follows the concept of **reactive programming**, where application state automatically updates the UI whenever the data changes.

### Core Concepts of MobX

1. **Observables**
   State values that MobX tracks for changes.

2. **Observers**
   Components or functions that automatically re-render when observable data changes.

3. **Actions**
   Functions used to modify observable state.

MobX works similarly to a spreadsheet:

* When one value changes,
* Everything depending on that value updates automatically.

### Benefits of MobX

* Minimal boilerplate
* Automatic reactivity
* Easy state management
* Simple and intuitive API

**Example:**

```javascript id="q6m2pk"
import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}
```

MobX is often preferred for applications that require:

* Simple reactive state updates
* Less boilerplate than Redux
* Object-oriented state management patterns


**[⬆ Back to Top](#table-of-contents)**

228. ### What are the differences between Redux and MobX?

| Feature               | Redux                                              | MobX                                                    |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **State Management**  | Uses a single centralized state tree               | Uses multiple observable stores                         |
| **State Mutability**  | State is immutable                                 | State can be mutable                                    |
| **State Updates**     | Updates happen through actions and reducers        | Updates happen automatically through observable changes |
| **Programming Style** | Functional programming approach                    | Reactive and object-oriented approach                   |
| **Boilerplate**       | More boilerplate code                              | Less boilerplate                                        |
| **Data Flow**         | Strict unidirectional data flow                    | Reactive automatic updates                              |
| **Debugging**         | Easier with predictable state updates and DevTools | Simpler code but less strict predictability             |
| **Learning Curve**    | Moderate to high                                   | Generally easier for beginners                          |
| **Performance**       | Optimized with controlled updates                  | Optimized with fine-grained reactivity                  |

### Summary

* Redux focuses on:

  * Predictable state management
  * Immutable updates
  * Centralized architecture

* MobX focuses on:

  * Simplicity
  * Reactive programming
  * Automatic state tracking

Redux is commonly preferred for large-scale enterprise applications, while MobX is often chosen for simpler and highly reactive applications with less boilerplate.


**[⬆ Back to Top](#table-of-contents)**

229. ### Should I learn ES6 before learning ReactJS?

Yes. Learning modern JavaScript (ES6+) is highly recommended before learning React because React syntax and patterns heavily rely on ES6 features.

Understanding ES6 makes React code easier to read, write, and understand.

### Important ES6 Concepts for React

* **Arrow Functions**

```javascript id="m2x8pk"
const add = (a, b) => a + b;
```

* **Destructuring (Arrays and Objects)**

```javascript id="q7n2vx"
const { name } = user;
```

* **Template Literals**

```javascript id="r4m8qa"
const message = `Hello ${name}`;
```

* **Spread and Rest Operators**

```javascript id="k6p1mx"
const updatedUser = { ...user, age: 25 };
```

* **Modules (`import` / `export`)**

```javascript id="v3n8pk"
import React from "react";
```

* **Promises and Async/Await**

```javascript id="x5m2qa"
const data = await fetchData();
```

* **Classes** (useful for understanding older React class components)

While you can start React without mastering all ES6 concepts, having a solid understanding of modern JavaScript will make learning React much easier and faster.


**[⬆ Back to Top](#table-of-contents)**

230. ### What is Concurrent Rendering in React?

Concurrent Rendering is a feature introduced in React 18 that improves UI responsiveness by allowing React to work on rendering tasks asynchronously and interrupt long-running renders when higher-priority updates occur.

Instead of blocking the UI during heavy rendering, React can:

* Pause rendering
* Resume rendering later
* Prioritize urgent updates like typing or clicks

This helps create smoother and more responsive user experiences.

### Key Concepts of Concurrent Rendering

1. **Interruptible Rendering**
   React can pause and continue rendering work instead of rendering everything synchronously in one blocking operation.

2. **Transitions**
   React provides `startTransition()` to mark non-urgent updates.

   **Example:**

   ```jsx id="m4x8pk"
   startTransition(() => {
     setSearchQuery(value);
   });
   ```

   This tells React the update can be deferred if more important interactions occur.

3. **Suspense Integration**
   Concurrent Rendering works closely with `Suspense` for smoother loading states and asynchronous rendering.

### Benefits

* Better responsiveness
* Smoother user interactions
* Improved rendering performance
* Better handling of large UI updates

Concurrent features are enabled automatically when using React 18’s modern root API:

```javascript id="q7n2vx"
createRoot(document.getElementById("root"));
```

**[⬆ Back to Top](#table-of-contents)**

231. ### What is the difference between Async Mode and Concurrent Mode?

In React, **Async Mode** was the earlier experimental name for what later evolved into **Concurrent Rendering** (or Concurrent Features) in React 18.

### Async Mode

* An experimental concept introduced before React 18
* Focused on making rendering asynchronous and interruptible
* Was never officially released as a stable public feature

### Concurrent Mode / Concurrent Rendering

* The finalized and stable evolution of Async Mode in React 18
* Allows React to:

  * Prioritize updates
  * Pause and resume rendering
  * Handle multiple rendering tasks concurrently
  * Keep the UI responsive during heavy rendering

Concurrent Rendering is not simply “async rendering.”
It is a scheduling system that enables React to intelligently manage rendering work without blocking the main thread.

### Key Benefits of Concurrent Rendering

* Improved UI responsiveness
* Better handling of urgent updates
* Smoother user interactions
* More efficient rendering behavior

Features related to Concurrent Rendering include:

* `startTransition`
* `Suspense`
* Automatic batching

React 18 enables these modern concurrent capabilities through the new root API:

```javascript id="m4x8pk"
createRoot(document.getElementById("root"));
```


**[⬆ Back to Top](#table-of-contents)**

232. ### Can I use `javascript:` URLs in React 16.9?

In React 16.9 and later, using `javascript:` URLs is strongly discouraged and considered unsafe because it can introduce **Cross-Site Scripting (XSS)** vulnerabilities.

React 16.9+ shows warnings when `javascript:` URLs are used in attributes such as `href`.

### Unsafe Example

```jsx id="x7m2pk"
<a href="javascript:alert('XSS')">
  Click me
</a>
```

This is dangerous because the JavaScript code executes directly when the link is clicked.

### Recommended Alternative

Instead of using `javascript:` URLs, attach logic using event handlers:

```jsx id="q4n8vx"
<button onClick={() => alert("Clicked")}>
  Click me
</button>
```

### Why It Is Discouraged

* Creates XSS security risks
* Allows execution of arbitrary JavaScript
* Makes applications harder to secure and maintain

Modern React applications should avoid `javascript:` URLs entirely and use proper event handling instead.


**[⬆ Back to Top](#table-of-contents)**

233. ### What is the purpose of the ESLint plugin for Hooks?

eslint-plugin-react-hooks is an ESLint plugin provided by the React team to enforce the **Rules of Hooks** and help prevent common Hook-related bugs.

The plugin ensures that:

1. **Hooks are only called at the top level**
   Hooks should not be called inside:

   * Loops
   * Conditions
   * Nested functions
   * Callbacks

2. **Hooks are only called from React components or custom Hooks**
   Hooks can only be used inside:

   * React functional components
   * Custom Hooks

### Additional Benefit

The plugin also checks dependency arrays for:

* `useEffect`
* `useMemo`
* `useCallback`

This helps prevent stale state bugs and missing dependencies.

### Example Rules

```json id="m4x8pk"
{
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

Using this plugin is considered a best practice in modern React development.


**[⬆ Back to Top](#table-of-contents)**

234. ### What is the difference between Imperative and Declarative programming in React?

In React, the UI is built using a **declarative** approach rather than an imperative one.

### Imperative Programming

Imperative programming focuses on **how** to perform operations step by step.

Developers manually manipulate the DOM and specify every action needed to update the UI.

**Example (Imperative):**

```javascript id="m2x8pk"
const button = document.getElementById("btn");

if (isLiked) {
  button.className = "blue";
} else {
  button.className = "grey";
}
```

This style is common in libraries like jQuery.

---

### Declarative Programming

Declarative programming focuses on **what** the UI should look like for a given state.

You describe the desired UI, and React automatically updates the DOM when state changes.

**Example (Declarative React):**

```jsx id="q7n2vx"
return (
  <button className={isLiked ? "blue" : "grey"}>
    Like
  </button>
);
```

Here:

* You describe the final UI state.
* React handles the DOM updates automatically.

### Benefits of Declarative UI

* Cleaner code
* Easier maintenance
* Predictable rendering
* Better readability
* Reduced direct DOM manipulation

This declarative approach is one of React’s core design principles.


    **[⬆ Back to Top](#table-of-contents)**

235. ### What are the benefits of using TypeScript with ReactJS?

Using TypeScript with React provides several advantages for building scalable and maintainable applications.

### Benefits of TypeScript with React

1. **Static Typing**
   TypeScript detects type-related errors during development instead of at runtime, helping reduce bugs.

2. **Improved IDE Support**
   Provides better:

   * Autocomplete
   * IntelliSense
   * Parameter hints
   * Code navigation

3. **Safer Refactoring**
   Makes large-scale code changes safer and easier, such as:

   * Renaming components
   * Updating props
   * Refactoring APIs

4. **Self-Documenting Code**
   Interfaces and types clearly describe the structure of:

   * Props
   * State
   * API responses
   * Function parameters

5. **Better Maintainability**
   Strong typing improves code consistency and readability in large teams and long-term projects.

6. **Improved Developer Experience**
   Developers receive immediate feedback while coding, which speeds up development and debugging.

**Example:**

```tsx id="m4x8pk"
type Props = {
  name: string;
  age: number;
};

function User({ name, age }: Props) {
  return (
    <h1>
      {name} - {age}
    </h1>
  );
}
```

TypeScript is widely used in modern React applications, especially for medium to large-scale projects.


**[⬆ Back to Top](#table-of-contents)**

236. ### How do you keep a user authenticated on page refresh using Context API?

When using the React Context API for authentication state management, the authentication state is lost after a page refresh because React state exists only in memory.

To persist authentication, you should store user/session data in persistent browser storage such as:

* `localStorage`
* `sessionStorage`
* Cookies (commonly preferred for secure authentication)

Then initialize the Context state from that storage when the application loads.

### Example

```jsx id="m4x8pk"
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  return (
    <AuthContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
```

### Common Flow

1. User logs in
2. Save auth data/token in storage
3. On page refresh, read stored data
4. Restore authentication state in Context

### Important Security Note

For production applications:

* Avoid storing sensitive tokens in `localStorage` when possible
* Prefer secure HTTP-only cookies for authentication tokens to reduce XSS risks

This approach helps maintain user login state across page reloads and browser sessions.


**[⬆ Back to Top](#table-of-contents)**

237. ### What are the benefits of the new JSX transform?

The new JSX transform introduced in React 17 improves how JSX is compiled and simplifies React development.

### Benefits

1. **No Need to Import React for JSX**
   Previously, every file using JSX required:

   ```javascript id="m4x8pk"
   import React from "react";
   ```

   With the new JSX transform, this import is no longer required just to use JSX.

2. **Smaller Bundle Size**
   The new transform can slightly reduce bundle size because the compiler imports only the required JSX runtime helpers automatically.

3. **Improved Compilation**
   JSX is compiled more efficiently using the new JSX runtime.

4. **Enables Future React Improvements**
   The new transform provides a foundation for future React optimizations and features.

### Example

**Old JSX Transform**

```jsx id="q7n2vx"
import React from "react";

function App() {
  return <h1>Hello</h1>;
}
```

**New JSX Transform**

```jsx id="k5m1qa"
function App() {
  return <h1>Hello</h1>;
}
```

Modern tools like:

* Babel
* TypeScript
* Vite

support the new JSX transform automatically.


**[⬆ Back to Top](#table-of-contents)**

238. ### How is the new JSX transform different from the old transform?

In React, the JSX transform changed starting from React 17 to improve developer experience and optimize compilation.

### Old JSX Transform

The old transform converted JSX into `React.createElement()` calls.

Because of this, `React` had to be imported into every file using JSX.

**Example:**

```jsx id="m4x8pk"
// JSX
function App() {
  return <h1>Hello World</h1>;
}
```

Compiled output:

```javascript id="q7n2vx"
import React from "react";

function App() {
  return React.createElement(
    "h1",
    null,
    "Hello World"
  );
}
```

---

### New JSX Transform

The new transform automatically imports helper functions from `react/jsx-runtime`.

This means you no longer need:

```javascript id="k5m1qa"
import React from "react";
```

just to use JSX.

**Example:**

```jsx id="x3n8pm"
// JSX
function App() {
  return <h1>Hello World</h1>;
}
```

Compiled output (simplified):

```javascript id="v6m2pk"
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  return _jsx("h1", {
    children: "Hello World"
  });
}
```

### Key Differences

| Feature              | Old Transform           | New Transform              |
| -------------------- | ----------------------- | -------------------------- |
| JSX Compilation      | `React.createElement()` | `jsx/jsxs` runtime helpers |
| Need `import React`  | Required                | Not required               |
| Bundle Optimization  | Less optimized          | Slightly smaller bundles   |
| Developer Experience | More boilerplate        | Cleaner code               |

Modern tools like Babel and TypeScript support the new JSX transform automatically.


**[⬆ Back to Top](#table-of-contents)**

239. ### What are React Server Components?

React Server Components (RSC) are a feature in React that allows certain components to run entirely on the server instead of the browser.

These components are rendered on the server and send only the final UI output to the client.

### Key Benefits of React Server Components

1. **Zero Client Bundle Size**
   Server Components are not included in the browser JavaScript bundle, which helps reduce bundle size and improve performance.

2. **Direct Access to Server Resources**
   They can directly access:

   * Databases
   * File systems
   * Backend APIs
   * Secret environment variables

3. **Improved Performance**
   Since heavy logic and dependencies stay on the server, less JavaScript is sent to the client.

4. **Better Separation of Client and Server Logic**
   Developers can clearly separate:

   * Server-side rendering logic
   * Interactive client-side components

### Important Note

Server Components:

* Cannot use browser-only APIs
* Cannot use client-side Hooks like:

  * `useState`
  * `useEffect`

Interactive functionality must still be handled by **Client Components**.

Frameworks like Next.js heavily use React Server Components in their modern app architecture.

**[⬆ Back to Top](#table-of-contents)**

240. ### What is prop drilling?

In React, prop drilling refers to the process of passing data through multiple intermediate components using props, even when those intermediate components do not need the data themselves.

This usually happens when deeply nested components require access to shared state or data.

### Example of Prop Drilling

```jsx id="m4x8pk"
<App user={user} />

<Parent user={user} />

<Child user={user} />

<Profile user={user} />
```

In this example:

* `Parent` and `Child` only pass the prop forward
* Only `Profile` actually uses the `user` data

### Problems with Prop Drilling

* Makes components tightly coupled
* Increases unnecessary prop passing
* Reduces readability
* Makes refactoring harder

### Common Solutions

To avoid prop drilling, React applications commonly use:

* React Context
* Redux
* Zustand
* Other global state management solutions

These approaches allow deeply nested components to access shared data directly without manually passing props through every level.

**[⬆ Back to Top](#table-of-contents)**

241. ### What is the difference between `useState` and `useRef`?

In React, both `useState` and `useRef` allow values to persist between renders, but they serve different purposes.

| Feature             | `useState`                     | `useRef`                               |
| ------------------- | ------------------------------ | -------------------------------------- |
| Purpose             | Manage component state         | Store mutable values or DOM references |
| Re-render on Update | Yes                            | No                                     |
| Value Access        | Direct variable                | `.current` property                    |
| UI Updates          | Triggers UI updates            | Does not trigger UI updates            |
| Common Use Cases    | Form state, counters, UI state | DOM access, timers, previous values    |

### `useState`

Used when updating the value should re-render the component and update the UI.

**Example:**

```jsx id="m4x8pk"
const [count, setCount] = useState(0);
```

Updating `count` causes the component to re-render.

---

### `useRef`

Used to persist values across renders without causing re-renders.

**Example:**

```jsx id="q7n2vx"
const inputRef = useRef(null);
```

Common use cases:

* Accessing DOM elements
* Storing timers
* Keeping previous values
* Avoiding unnecessary renders

### Example with DOM Access

```jsx id="k5m1qa"
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};
```

Use:

* `useState` for reactive UI state
* `useRef` for mutable values that should not trigger rendering

**[⬆ Back to Top](#table-of-contents)**

242. ### What is a wrapper component?

In React, a wrapper component is a component that wraps other components using the `children` prop to provide shared:

* Layout
* Styling
* Logic
* Context
* Functionality

Wrapper components help improve code reuse and maintain consistent UI structure across an application.

### Common Use Cases

* Layout components
* Authentication wrappers
* Theme providers
* Error boundaries
* Context providers

### Example

```jsx id="m4x8pk"
const Layout = ({ children }) => (
  <div className="container">
    <Header />
    
    <main>{children}</main>
    
    <Footer />
  </div>
);
```

### Usage

```jsx id="q7n2vx"
<Layout>
  <HomePage />
</Layout>
```

In this example:

* `Layout` wraps the page content
* Shared UI elements like `Header` and `Footer` are reused automatically

Wrapper components are commonly used in modern React applications to organize and reuse common application structure and behavior.


**[⬆ Back to Top](#table-of-contents)**

243. ### What are the differences between `useEffect` and `useLayoutEffect`?

In React, both `useEffect` and `useLayoutEffect` are Hooks used for handling side effects, but they differ in **when** they execute.

| Feature            | `useEffect`                           | `useLayoutEffect`                     |
| ------------------ | ------------------------------------- | ------------------------------------- |
| Execution Timing   | After the browser paints              | Before the browser paints             |
| Behavior           | Asynchronous                          | Synchronous                           |
| Performance Impact | Better for most cases                 | Can block painting                    |
| Common Use Cases   | Data fetching, subscriptions, logging | DOM measurements, layout calculations |

---

### `useEffect`

`useEffect` runs asynchronously after the UI has been rendered and painted to the screen.

It is commonly used for:

* API calls
* Event listeners
* Timers
* Logging
* Subscriptions

**Example:**

```jsx id="m4x8pk"
useEffect(() => {
  console.log("Rendered");
}, []);
```

---

### `useLayoutEffect`

`useLayoutEffect` runs synchronously after DOM updates but before the browser paints the screen.

It is useful when you need to:

* Measure DOM elements
* Read layout values
* Apply immediate DOM updates
* Prevent visual flickering

**Example:**

```jsx id="q7n2vx"
useLayoutEffect(() => {
  const height = ref.current.offsetHeight;

  console.log(height);
}, []);
```

### Important Note

Because `useLayoutEffect` blocks browser painting, it should be used only when necessary.
For most side effects, `useEffect` is the recommended choice.


**[⬆ Back to Top](#table-of-contents)**

244. ### What are the differences between Functional and Class Components?

| Feature                      | Functional Components               | Class Components                                   |
| ---------------------------- | ----------------------------------- | -------------------------------------------------- |
| **Definition**               | Simple JavaScript functions         | ES6 classes extending `React.Component`            |
| **State Management**         | Uses Hooks like `useState`          | Uses `this.state`                                  |
| **Lifecycle Handling**       | Uses Hooks like `useEffect`         | Uses lifecycle methods (`componentDidMount`, etc.) |
| **Syntax**                   | Simpler and cleaner                 | More verbose                                       |
| **`this` Keyword**           | No `this` handling required         | Requires `this` binding or arrow functions         |
| **Code Reusability**         | Easier with custom Hooks            | Commonly used HOCs or render props                 |
| **Performance Optimization** | Hooks like `useMemo`, `useCallback` | `PureComponent`, `shouldComponentUpdate`           |
| **Current Usage**            | Modern recommended approach         | Mostly legacy or maintenance usage                 |

### Functional Component Example

```jsx id="m4x8pk"
function Welcome() {
  return <h1>Hello React</h1>;
}
```

### Class Component Example

```jsx id="q7n2vx"
class Welcome extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}
```

In modern React development, functional components with Hooks are generally preferred because they:

* Reduce boilerplate
* Improve readability
* Simplify state and side-effect management
* Make logic reuse easier through custom Hooks


**[⬆ Back to Top](#table-of-contents)**

245. ### What is Strict Mode in React?

`StrictMode` is a development tool in React that helps identify potential problems and unsafe practices in an application.

It does not render any visible UI in the browser.
Instead, it enables additional checks, warnings, and debugging behaviors for its child components during development.

### Example

```jsx id="m4x8pk"
<React.StrictMode>
  <App />
</React.StrictMode>
```

### What Strict Mode Helps Detect

* Unsafe lifecycle methods
* Deprecated APIs
* Unexpected side effects
* Legacy string refs
* Improper Hook usage
* Components with potential concurrency issues

### Important Notes

* Strict Mode works only in development mode.
* It does not affect production builds.
* In React 18, some functions and effects may run twice in development to help detect side effects and bugs.

Using `StrictMode` is considered a best practice for modern React applications.


**[⬆ Back to Top](#table-of-contents)**

246. ### What are the benefits of Strict Mode in React?

React `StrictMode` helps developers identify potential problems and improve application quality during development.

### Benefits of Strict Mode

1. **Identifies Unsafe Lifecycle Methods**
   Warns about deprecated or unsafe lifecycle methods that may cause issues in future React versions.

2. **Warns About Legacy API Usage**
   Detects usage of outdated APIs such as:

   * `findDOMNode`
   * Legacy Context API
   * Unsafe lifecycle methods

3. **Detects Unexpected Side Effects**
   React intentionally double-invokes certain functions in development mode to help identify:

   * Side effects during rendering
   * Impure component logic
   * Incorrect Hook behavior

4. **Improves Compatibility with Future React Features**
   Helps prepare applications for modern React features like Concurrent Rendering.

5. **Encourages Best Practices**
   Promotes cleaner, safer, and more maintainable React code.

### Important Note

`StrictMode` only affects development mode and has no impact on production builds.


**[⬆ Back to Top](#table-of-contents)**

247. ### Why does Strict Mode render components twice in React?

In React development mode, `StrictMode` intentionally invokes certain functions twice to help detect bugs and unintended side effects.

This behavior helps ensure that components remain **pure**, meaning rendering should not cause side effects.

### What React Double-Invokes

In development mode, React may run:

* Component functions
* `useEffect` setup/cleanup cycles
* `useState` initializer functions
* State updater functions

more than once.

### Why This Happens

The goal is to detect issues such as:

* Side effects inside rendering logic
* Mutating state directly
* Non-idempotent operations
* Improper cleanup in effects

### Example Problem

```jsx id="m4x8pk"
function App() {
  console.log("Rendering");

  return <h1>Hello</h1>;
}
```

With `StrictMode`, `"Rendering"` may appear twice in development.

### Important Notes

* This happens only in **development mode**
* Production builds are not affected
* It helps prepare applications for modern React features like Concurrent Rendering

Although it may seem confusing initially, this behavior is a debugging feature designed to improve application reliability and code quality.

**[⬆ Back to Top](#table-of-contents)**

248. ### What are the rules of JSX?

In React, JSX follows rules similar to HTML but with JavaScript-specific syntax requirements.

### Main Rules of JSX

1. **Return a Single Root Element**
   JSX expressions must return one parent element.

   **Example:**

   ```jsx id="m4x8pk"
   return (
     <div>
       <h1>Hello</h1>
       <p>Welcome</p>
     </div>
   );
   ```

   You can also use a Fragment:

   ```jsx id="q7n2vx"
   return (
     <>
       <h1>Hello</h1>
       <p>Welcome</p>
     </>
   );
   ```

2. **Close All Tags**
   Every JSX tag must be properly closed.

   **Example:**

   ```jsx id="k5m1qa"
   <img src="logo.png" />
   <input type="text" />
   ```

3. **Use camelCase for Attributes**
   JSX attributes use camelCase instead of HTML attribute naming.

   **Examples:**

   * `className` instead of `class`
   * `htmlFor` instead of `for`
   * `onClick` instead of `onclick`

   ```jsx id="x3n8pm"
   <button className="btn" onClick={handleClick}>
     Click
   </button>
   ```

These rules help JSX work correctly as JavaScript syntax while maintaining a structure similar to HTML.


**[⬆ Back to Top](#table-of-contents)**

249. ### What is the reason behind wrapping multiple JSX elements?

In React, JSX is compiled into a single JavaScript function call such as:

* `React.createElement()`
* `_jsx()`

Since a JavaScript function can return only one value, a React component must also return a single root element.

### Example of Invalid JSX

```jsx id="m4x8pk"
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

This causes an error because there are multiple sibling elements without a single parent wrapper.

### Correct Approach

Wrap the elements inside:

* A parent HTML element
* A React Fragment

**Using a parent element:**

```jsx id="q7n2vx"
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

**Using a Fragment:**

```jsx id="k5m1qa"
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

Wrapping elements ensures the component returns a single tree structure that React can properly process and render.

**[⬆ Back to Top](#table-of-contents)**

250. ### How do you prevent mutating array variables in React?

In React, state should be treated as **immutable**.
Instead of modifying an existing array directly, you should create and return a new array.

This helps React:

* Detect state changes correctly
* Trigger re-renders properly
* Maintain predictable state updates

### Recommended Non-Mutating Methods

* `map()` → Transform items
* `filter()` → Remove items
* Spread operator (`...`) → Copy/add items
* `concat()` → Merge arrays

### Examples

**Add an item:**

```javascript id="m4x8pk"
setItems([...items, newItem]);
```

**Remove an item:**

```javascript id="q7n2vx"
setItems(
  items.filter(item => item.id !== id)
);
```

**Update an item:**

```javascript id="k5m1qa"
setItems(
  items.map(item =>
    item.id === id
      ? { ...item, completed: true }
      : item
  )
);
```

### Avoid Direct Mutation

```javascript id="x3n8pm"
// ❌ Avoid
items.push(newItem);
```

Direct mutations can cause bugs because React may not detect the change properly.


**[⬆ Back to Top](#table-of-contents)**

251. ### What are capture phase events in React?

In React, events normally follow the **bubbling phase**, where events propagate from the target element upward to parent elements.

However, React also supports the **capture phase**, where events travel from the root element down to the target element before bubbling begins.

To listen during the capture phase, append `Capture` to the event name.

### Example

```jsx id="m4x8pk"
<div
  onClickCapture={() =>
    console.log("1. Parent Capture")
  }
>
  <button
    onClick={() =>
      console.log("2. Button Bubble")
    }
  >
    Click
  </button>
</div>
```

### Event Flow

When the button is clicked:

1. Capture phase runs first
   → `"1. Parent Capture"`

2. Bubbling phase runs next
   → `"2. Button Bubble"`

### Common Capture Events

* `onClickCapture`
* `onChangeCapture`
* `onFocusCapture`
* `onBlurCapture`

Capture phase handlers are useful when you need to intercept or monitor events before they reach the target element.


**[⬆ Back to Top](#table-of-contents)**

252. ### How does React update the screen in an application?

React updates the UI through a multi-step rendering process designed for efficiency and performance.

### React Update Process

1. **Trigger Phase**
   An update starts when:

   * The app renders initially using `createRoot()`
   * State changes (`setState`, `useState`)
   * Props change

2. **Render Phase (Reconciliation)**
   React calls components to generate a new Virtual DOM tree and compares it with the previous one using the diffing algorithm.

   During this phase, React determines:

   * What changed
   * Which components need updating

3. **Commit Phase**
   React applies only the necessary changes to the real DOM.

   This may include:

   * Updating text
   * Adding/removing elements
   * Updating attributes
   * Running effects (`useEffect`)

### Summary Flow

```text id="m4x8pk"
Trigger → Render (Virtual DOM diffing) → Commit (DOM updates)
```

This process allows React to efficiently update only the changed parts of the UI instead of re-rendering the entire page.

**[⬆ Back to Top](#table-of-contents)**

253. ### How does React batch multiple state updates?

In React, batching is the process of grouping multiple state updates into a single re-render to improve performance.

Instead of re-rendering the component after every individual state update, React combines them and performs only one render.

### Example

```jsx id="m4x8pk"
setCount(count + 1);
setFlag(true);
```

React batches these updates together and triggers only one re-render.

### Automatic Batching in React 18

Before React 18, batching mainly worked inside React event handlers.

In React 18, **Automatic Batching** was expanded to also work inside:

* `setTimeout`
* Promises
* Async functions
* Native event handlers

### Example

```jsx id="q7n2vx"
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(true);
}, 1000);
```

In React 18, both updates are automatically batched into a single render.

### Benefits of Batching

* Fewer re-renders
* Better performance
* More efficient UI updates
* Reduced unnecessary DOM operations

Automatic batching is enabled when using the React 18 root API:

```javascript id="k5m1qa"
createRoot(document.getElementById("root"));
```


**[⬆ Back to Top](#table-of-contents)**

254. ### Is it possible to prevent automatic batching in React?

Yes. In React, you can prevent automatic batching by using `flushSync` from `react-dom`.

`flushSync` forces React to immediately process state updates and update the DOM synchronously.

### Example

```jsx id="m4x8pk"
import { flushSync } from "react-dom";

function handleClick() {
  flushSync(() => {
    setCount(c => c + 1);
  });

  // DOM is updated immediately here
}
```

### Why Use `flushSync`?

It is useful when you need:

* Immediate DOM updates
* Accurate DOM measurements right after state changes
* Synchronous UI behavior

### Important Note

`flushSync` should be used sparingly because it:

* Disables React's batching optimization
* Can reduce performance
* Forces synchronous rendering

In most cases, React’s automatic batching behavior is preferred for better efficiency.


**[⬆ Back to Top](#table-of-contents)**

255. ### What is React hydration?

In React, hydration is the process of attaching React’s JavaScript logic and event handlers to HTML that was already rendered on the server.

This is commonly used in:

* Server-Side Rendering (SSR)
* Frameworks like Next.js

### How Hydration Works

1. The server sends pre-rendered HTML to the browser
2. The page appears quickly as static content
3. React “hydrates” the HTML by attaching:

   * Event handlers
   * State
   * Interactive behavior

After hydration, the page becomes fully interactive.

### Example

```jsx id="m4x8pk"
import { hydrateRoot } from "react-dom/client";

hydrateRoot(
  document.getElementById("root"),
  <App />
);
```

### Benefits of Hydration

* Faster initial page load
* Better SEO
* Improved user experience
* Faster perceived performance

Without hydration, server-rendered HTML would remain static and non-interactive.


**[⬆ Back to Top](#table-of-contents)**

256. ### How do you update objects inside React state?

In React, state should be treated as **immutable**.
Instead of modifying an existing object directly, you should create a new object when updating state.

The most common approach is using the **spread operator (`...`)**.

### Example

```javascript id="m4x8pk"
setUser({
  ...user,
  name: "New Name"
});
```

### How It Works

* `...user` copies all existing properties
* `name` is updated with the new value
* React receives a new object reference and triggers a re-render

### Avoid Direct Mutation

```javascript id="q7n2vx"
// ❌ Avoid
user.name = "New Name";
setUser(user);
```

Direct mutation can cause:

* Missed re-renders
* Unexpected bugs
* State inconsistency

### Updating Nested Objects

```javascript id="k5m1qa"
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Kolkata"
  }
});
```

Creating new objects ensures predictable and reliable state updates in React.


**[⬆ Back to Top](#table-of-contents)**

257. ### How do you update nested objects inside React state?

In React, state should be updated immutably.
When updating nested objects, you must create new copies of every nested level that changes.

The spread operator (`...`) is commonly used for this.

### Example

```javascript id="m4x8pk"
setUser({
  ...user,
  address: {
    ...user.address,
    city: "New City"
  }
});
```

### How It Works

* `...user` copies the top-level object
* `...user.address` copies the nested `address` object
* `city` is updated with a new value

This ensures React receives new object references and correctly detects state changes.

### Avoid Direct Mutation

```javascript id="q7n2vx"
// ❌ Avoid
user.address.city = "New City";
setUser(user);
```

Direct mutation can cause:

* Missed re-renders
* Unpredictable behavior
* State management bugs

For deeply nested state, libraries like Immer are often used to simplify immutable updates.


**[⬆ Back to Top](#table-of-contents)**

258. ### How do you update arrays inside React state?

In React, arrays in state should be treated as **immutable**.
Instead of modifying the original array directly, create a new array using non-mutating methods.

### Common Non-Mutating Methods

* `map()` → Update items
* `filter()` → Remove items
* Spread operator (`...`) → Add/copy items
* `concat()` → Merge arrays

### Examples

**Add an item:**

```javascript id="m4x8pk"
setItems([...items, newItem]);
```

**Remove an item:**

```javascript id="q7n2vx"
setItems(
  items.filter(i => i.id !== 1)
);
```

**Update an item:**

```javascript id="k5m1qa"
setItems(
  items.map(item =>
    item.id === 1
      ? { ...item, completed: true }
      : item
  )
);
```

### Avoid Direct Mutation

```javascript id="x3n8pm"
// ❌ Avoid
items.push(newItem);
```

Directly mutating arrays can prevent React from detecting state changes correctly and may lead to rendering bugs.


**[⬆ Back to Top](#table-of-contents)**

259. ### How do you use the Immer library for state updates?

Immer helps simplify immutable state updates in React applications.

With Immer, you can write code that looks like direct mutation, but Immer safely produces a new immutable state behind the scenes using a **Draft proxy**.

This makes updating deeply nested state much easier.

### Example using `use-immer`

```jsx id="m4x8pk"
import { useImmer } from "use-immer";

const [user, setUser] = useImmer({
  name: "John",
  address: {
    city: "NY"
  }
});

setUser(draft => {
  draft.address.city = "LA";
});
```

### How It Works

* `draft` is a temporary mutable version of the state
* Immer tracks all changes
* A new immutable state object is generated automatically

### Benefits of Immer

* Simplifies nested state updates
* Reduces spread operator boilerplate
* Improves readability
* Prevents accidental state mutation

Immer is also internally used by Redux Toolkit for easier Redux state management.


**[⬆ Back to Top](#table-of-contents)**

260. ### What are the benefits of preventing direct state mutations?

In React, state should be treated as immutable rather than being modified directly.

Preventing direct state mutations provides several important benefits:

1. **Predictability**
   Immutable updates make state changes easier to track and reason about, resulting in more predictable application behavior.

2. **Performance Optimization**
   React can efficiently detect changes using shallow reference comparisons such as:

   ```javascript id="m4x8pk"
   prevState !== nextState
   ```

   This helps optimize rendering and enables features like:

   * `React.memo`
   * `PureComponent`
   * Efficient diffing

3. **Time-Travel Debugging**
   Immutable state allows tools like Redux DevTools to store previous state snapshots and move backward or forward through application state history.

4. **Easier Debugging**
   Since state is not mutated unexpectedly, bugs become easier to reproduce and debug.

5. **Safer State Updates**
   Prevents accidental side effects caused by modifying shared objects or arrays.

### Incorrect Mutation

```javascript id="q7n2vx"
// ❌ Avoid
user.name = "John";
```

### Correct Immutable Update

```javascript id="k5m1qa"
setUser({
  ...user,
  name: "John"
});
```

Immutable state management is a core principle in modern React development.



**[⬆ Back to Top](#table-of-contents)**

261.   ### What are the preferred and non-preferred array operations for updating React state?

In React, state arrays should be updated immutably.
This means avoiding operations that directly modify the original array.

| Action                | Preferred (Non-mutating)                | Non-preferred (Mutating)       |
| --------------------- | --------------------------------------- | ------------------------------ |
| **Adding Items**      | `concat()`, `[...arr]`                  | `push()`, `unshift()`          |
| **Removing Items**    | `filter()`, `slice()`                   | `pop()`, `shift()`, `splice()` |
| **Replacing Items**   | `map()`                                 | `splice()`, `arr[i] = value`   |
| **Sorting/Reversing** | `[...arr].sort()`, `[...arr].reverse()` | `sort()`, `reverse()`          |

### Example: Preferred Immutable Updates

**Add Item**

```javascript id="m4x8pk"
setItems([...items, newItem]);
```

**Remove Item**

```javascript id="q7n2vx"
setItems(
  items.filter(item => item.id !== id)
);
```

**Update Item**

```javascript id="k5m1qa"
setItems(
  items.map(item =>
    item.id === id
      ? { ...item, done: true }
      : item
  )
);
```

### Why Avoid Mutating Methods?

Mutating arrays directly can:

* Prevent React from detecting changes
* Cause rendering bugs
* Break immutability principles
* Lead to unpredictable state behavior

Using immutable updates ensures reliable rendering and better performance.


**[⬆ Back to Top](#table-of-contents)**

262. ### What happens when you define nested function components?

In React, defining a component inside another component is generally considered an anti-pattern.

### Example of Nested Component

```jsx id="m4x8pk"
function Parent() {
  function Child() {
    return <h1>Hello</h1>;
  }

  return <Child />;
}
```

### Problems with Nested Components

1. **Performance Issues**
   The inner component is recreated every time the parent component renders.

   This can lead to:

   * Unnecessary re-renders
   * Additional memory usage
   * Reduced performance

2. **State Loss**
   Since React treats the nested component as a new component type on every render:

   * The old component is unmounted
   * A new component is mounted

   As a result:

   * Internal state is lost
   * Input focus may reset
   * Effects re-run unnecessarily

### Recommended Approach

Define components outside the parent component so React can preserve their identity between renders.

**Better Example:**

```jsx id="q7n2vx"
function Child() {
  return <h1>Hello</h1>;
}

function Parent() {
  return <Child />;
}
```

This improves:

* Performance
* State preservation
* Component stability
* Readability and maintainability


**[⬆ Back to Top](#table-of-contents)**

263. ### Can I use keys for non-list items in React?

Yes. In React, the `key` prop is not limited to lists.

You can use keys on any component to control component identity and force React to treat it as a completely new component instance.

When the `key` changes:

* React unmounts the old component
* React mounts a new component
* Internal state is reset

### Example

```jsx id="m4x8pk"
<UserProfile key={userId} />
```

In this example:

* Changing `userId` changes the key
* React recreates the `UserProfile` component
* All local state inside `UserProfile` resets

### Common Use Cases

* Resetting form state
* Restarting animations
* Clearing component state on route changes
* Reinitializing third-party components

Keys help React identify component instances, whether inside lists or standalone components.


**[⬆ Back to Top](#table-of-contents)**

264. ### What are the guidelines for writing reducers?

In Redux, reducers are functions responsible for updating state based on actions.

Reducers should follow these important guidelines:

1. **Reducers Must Be Pure Functions**
   Reducers should not contain side effects such as:

   * API calls
   * Timers
   * Random values
   * Direct DOM manipulation

   A reducer should only calculate and return the next state.

2. **Never Mutate State**
   Reducers must update state immutably by returning new objects or arrays instead of modifying existing state directly.

   **Correct Example:**

   ```javascript id="m4x8pk"
   return {
     ...state,
     count: state.count + 1
   };
   ```

   **Incorrect Example:**

   ```javascript id="q7n2vx"
   state.count++;
   return state;
   ```

3. **Reducers Must Be Deterministic**
   Given the same:

   * Current state
   * Action

   the reducer must always return the same next state.

### Reducer Signature

```javascript id="k5m1qa"
function reducer(state, action) {
  return newState;
}
```

Following these principles ensures:

* Predictable state updates
* Easier debugging
* Better testability
* Compatibility with Redux DevTools and time-travel debugging


**[⬆ Back to Top](#table-of-contents)**

265. ### How does ReactJS work behind the scenes?

React works using a combination of:

* Virtual DOM
* Reconciliation
* Diffing
* Fiber architecture

to efficiently update the user interface.

### 1. Virtual DOM

React creates a lightweight JavaScript representation of the real DOM called the **Virtual DOM (VDOM)**.

When the application state or props change:

* React creates a new Virtual DOM tree
* Instead of immediately updating the real DOM

---

### 2. Reconciliation

React then performs a process called **Reconciliation**.

During reconciliation:

* React compares the new Virtual DOM with the previous Virtual DOM
* Determines what changed in the UI

This comparison process is known as **diffing**.

---

### 3. Diffing Algorithm

React’s diffing algorithm identifies:

* Added elements
* Removed elements
* Updated attributes
* Changed text

React then updates only the necessary parts of the real DOM instead of re-rendering everything.

---

### 4. Fiber Architecture

React’s internal rendering engine is called **Fiber**.

Fiber enables advanced features such as:

* Concurrent Rendering
* Interruptible rendering
* Task prioritization
* Smoother UI updates

With Fiber, React can:

* Pause rendering work
* Resume rendering later
* Prioritize urgent updates like user input

This helps keep applications responsive even during heavy rendering operations.

### Simplified Flow

```text id="m4x8pk"
State Change
   ↓
Create New Virtual DOM
   ↓
Diff with Previous Virtual DOM
   ↓
Calculate Minimal Changes
   ↓
Update Real DOM
```

This architecture allows React to provide efficient, fast, and scalable UI rendering.

**[⬆ Back to Top](#table-of-contents)**

266. ### How is `useReducer` different from `useState`?

In React, both `useState` and `useReducer` are Hooks used for managing state, but they are suited for different use cases.

| Feature            | `useState`                   | `useReducer`                   |
| ------------------ | ---------------------------- | ------------------------------ |
| Best For           | Simple state values          | Complex state logic            |
| State Updates      | Direct setter function       | Reducer function with actions  |
| Logic Organization | Distributed across component | Centralized in reducer         |
| Readability        | Simpler for small state      | Better for large/complex state |
| Testing            | Harder for complex updates   | Easier to test reducer logic   |

---

### `useState`

Best for:

* Counters
* Form inputs
* Simple flags
* Basic objects or arrays

**Example:**

```jsx id="m4x8pk"
const [count, setCount] = useState(0);
```

---

### `useReducer`

Best for:

* Complex state transitions
* Multiple related state values
* State depending on previous state
* Large forms or application logic

**Example:**

```jsx id="q7n2vx"
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
};

const [state, dispatch] = useReducer(
  reducer,
  { count: 0 }
);
```

### Benefits of `useReducer`

* Centralized state logic
* More predictable updates
* Easier debugging and testing
* Similar pattern to Redux

For simple state, `useState` is usually preferred.
For more complex state management, `useReducer` is often a better choice.

**[⬆ Back to Top](#table-of-contents)**

267. ### What is `useContext`? What are the steps to use it?

In React, `useContext` is a Hook used to access data from the React Context API without manually passing props through every component level.

It helps avoid **prop drilling** by allowing components to directly access shared data.

### Steps to Use `useContext`

1. **Create Context**

```javascript id="m4x8pk"
const MyContext = createContext(defaultValue);
```

2. **Provide Context Value**

```jsx id="q7n2vx"
<MyContext.Provider value={value}>
  <App />
</MyContext.Provider>
```

3. **Consume Context**

```jsx id="k5m1qa"
const value = useContext(MyContext);
```

---

### Complete Example

```jsx id="x3n8pm"
import React, {
  createContext,
  useContext
} from "react";

const ThemeContext =
  createContext("light");

function Header() {
  const theme =
    useContext(ThemeContext);

  return <h1>{theme}</h1>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}
```

### Common Use Cases

* Authentication state
* Theme management
* Language settings
* Global application state

`useContext` simplifies sharing data across deeply nested components without excessive prop passing.


**[⬆ Back to Top](#table-of-contents)**

268. ### What are the use cases of the `useContext` Hook?

In React, the `useContext` Hook is commonly used for sharing global or frequently accessed data across components without prop drilling.

### Common Use Cases of `useContext`

1. **Theming**
   Share UI themes such as:

   * Light mode
   * Dark mode

2. **Authentication**
   Provide authentication-related data globally, such as:

   * Current user
   * Login status
   * Auth tokens

3. **Internationalization (i18n)**
   Manage:

   * Language settings
   * Locales
   * Translations

4. **Application Configuration**
   Share app-wide configuration values such as:

   * API endpoints
   * Feature flags
   * Environment settings

5. **Global UI State**
   Manage shared UI state like:

   * Sidebar visibility
   * Modals
   * Notifications

### Example

```jsx id="m4x8pk"
const ThemeContext =
  createContext("light");

function Header() {
  const theme =
    useContext(ThemeContext);

  return <h1>{theme}</h1>;
}
```

`useContext` is best suited for data that needs to be accessed by many components throughout the application.


**[⬆ Back to Top](#table-of-contents)**

269. ### When should you use Client Components and Server Components?

In modern React applications (especially with Next.js), components can run either on the server or in the browser.

### Server Components

Use **Server Components** when you need:

* Data fetching
* Database access
* Access to backend resources
* SEO-friendly rendering
* Reduced client-side JavaScript

### Benefits of Server Components

* Smaller browser bundles
* Better performance
* Faster initial page load
* Secure access to server-side code and secrets

### Common Use Cases

* Fetching API or database data
* Rendering static or dynamic content
* Server-side processing

---

### Client Components

Use **Client Components** when you need:

* Interactivity
* State management
* Event handlers
* Browser APIs

### Features Requiring Client Components

* `useState`
* `useEffect`
* `useReducer`
* Event listeners (`onClick`, `onChange`)
* Browser APIs such as:

  * `window`
  * `localStorage`
  * `navigator`

### Example Client Component

```jsx id="m4x8pk"
"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] =
    useState(0);

  return (
    <button
      onClick={() =>
        setCount(count + 1)
      }
    >
      {count}
    </button>
  );
}
```

### General Recommendation

* Prefer **Server Components** by default for performance and SEO
* Use **Client Components** only when interactivity or browser-specific functionality is required


**[⬆ Back to Top](#table-of-contents)**

270. ### What are the differences between the Pages Router and App Router in Next.js?

In Next.js, there are two routing systems:

* **Pages Router** → Legacy routing system
* **App Router** → Modern routing system introduced in Next.js 13

| Feature           | Pages Router                           | App Router                         |
| ----------------- | -------------------------------------- | ---------------------------------- |
| Directory         | `pages/`                               | `app/`                             |
| Architecture      | Traditional React rendering            | Built on React Server Components   |
| Data Fetching     | `getStaticProps`, `getServerSideProps` | Native `async/await` in components |
| Layouts           | Manual layout handling                 | Built-in nested layouts            |
| Loading States    | Manual handling                        | Built-in `loading.js`              |
| Error Handling    | Custom logic                           | Built-in `error.js`                |
| Streaming Support | Limited                                | Supports streaming and Suspense    |
| Server Components | Not supported                          | Supported by default               |
| Client Components | Default behavior                       | Must use `"use client"`            |

---

### Pages Router

The Pages Router uses the `pages/` directory where each file automatically becomes a route.

**Example:**

```text id="m4x8pk"
pages/
 ├── index.js
 └── about.js
```

Common data-fetching methods:

* `getStaticProps`
* `getServerSideProps`
* `getStaticPaths`

---

### App Router

The App Router uses the `app/` directory and is based on:

* React Server Components
* Nested layouts
* Streaming rendering
* Suspense

**Example:**

```text id="q7n2vx"
app/
 ├── page.js
 ├── about/
 │    └── page.js
 └── layout.js
```

Data fetching becomes simpler:

```jsx id="k5m1qa"
async function Page() {
  const data = await fetch(...);

  return <div>{data}</div>;
}
```

### Current Recommendation

The App Router is the modern recommended approach for new Next.js applications because it provides:

* Better performance
* Improved developer experience
* Built-in layouts and streaming
* React Server Components support


**[⬆ Back to Top](#table-of-contents)**

271. ### Can you describe the `useMemo()` Hook?

In React, `useMemo` is a Hook used to memoize (cache) the result of an expensive calculation between component re-renders.

It helps improve performance by recomputing the value only when its dependencies change.

### Syntax

```jsx id="m4x8pk"
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

### How It Works

* React stores the computed result
* On future renders:

  * If dependencies are unchanged → cached value is reused
  * If dependencies change → calculation runs again

### Common Use Cases

* Expensive calculations
* Filtering/sorting large lists
* Derived state
* Preventing unnecessary computations

### Example

```jsx id="q7n2vx"
const filteredItems = useMemo(() => {
  return items.filter(item =>
    item.active
  );
}, [items]);
```

### Important Note

`useMemo` is a performance optimization Hook and should be used only when:

* The computation is expensive
* Recalculation causes noticeable performance issues

Overusing `useMemo` can add unnecessary complexity without meaningful benefits.


**[⬆ Back to Top](#table-of-contents)**

272. ### Can Hooks be used in class components?

No. In React, Hooks can only be used inside:

* Functional components
* Custom Hooks

Hooks cannot be used directly inside class components.

### Invalid Example

```jsx id="m4x8pk"
class MyComponent extends React.Component {
  // ❌ Invalid
  const [count, setCount] = useState(0);
}
```

This violates the Rules of Hooks.

### Why?

Hooks rely on the functional component rendering model and React’s internal Hook call order, which class components do not support.

### Alternative Approaches

If you need Hook-based data inside a class component, you can:

* Wrap the class component with a functional component
* Use a Higher-Order Component (HOC)
* Use the Render Props pattern

### Example Using a Wrapper Component

```jsx id="q7n2vx"
function WithTheme(props) {
  const theme = useContext(ThemeContext);

  return (
    <ClassComponent
      {...props}
      theme={theme}
    />
  );
}
```

Here:

* The functional component uses Hooks
* The class component receives the values through props

Modern React development generally prefers functional components with Hooks over class components.

**[⬆ Back to Top](#table-of-contents)**

273. ### What is an updater function in React? Should it always be used?

In React, an updater function is a function passed to a state setter that receives the previous state value and returns the next state.

### Example

```javascript id="m4x8pk"
setCount(prevCount =>
  prevCount + 1
);
```

Here:

* `prevCount` is the latest previous state
* React uses it to calculate the next state safely

### When Should You Use an Updater Function?

You should use updater functions whenever the new state depends on the previous state.

### Common Examples

* Counters
* Toggles
* Array updates
* Batched state updates

### Example

```javascript id="q7n2vx"
setItems(prevItems => [
  ...prevItems,
  newItem
]);
```

### Why Is It Important?

React may batch multiple state updates together.
Using the updater form ensures you always work with the most recent state value.

### Is It Required in All Cases?

No.

If the new state does not depend on the previous state, you can update state directly.

**Example:**

```javascript id="k5m1qa"
setTheme("dark");
```

### Recommendation

* Use updater functions when state depends on previous state
* Direct values are fine for independent updates

**[⬆ Back to Top](#table-of-contents)**

274. ### Can `useState` take a function as an initial value?

Yes. In React, `useState` can accept a function as its initial value. This is known as **lazy initialization**.

React executes this function only during the initial render, not on every re-render.

### Example

```javascript id="m4x8pk"
const [user, setUser] = useState(() => {
  const saved =
    localStorage.getItem("user");

  return saved
    ? JSON.parse(saved)
    : null;
});
```

### Why Use Lazy Initialization?

It is useful for expensive operations such as:

* Reading from `localStorage`
* Parsing large JSON data
* Heavy computations
* Initial data preparation

### Benefit

Without lazy initialization:

```javascript id="q7n2vx"
useState(expensiveFunction());
```

the function runs on every render.

With lazy initialization:

```javascript id="k5m1qa"
useState(() => expensiveFunction());
```

the function runs only once during the first render.

This improves performance by avoiding unnecessary computations on subsequent renders.


**[⬆ Back to Top](#table-of-contents)**

275. ### What types of values can `useState` hold?

In React, `useState` can store any valid JavaScript value.

### Primitive Values

* `string`
* `number`
* `boolean`
* `null`
* `undefined`

**Example:**

```javascript id="m4x8pk"
const [count, setCount] =
  useState(0);

const [name, setName] =
  useState("John");
```

---

### Complex Values

#### Objects

```javascript id="q7n2vx"
const [user, setUser] =
  useState({
    name: "John",
    age: 25
  });
```

#### Arrays

```javascript id="k5m1qa"
const [items, setItems] =
  useState([]);
```

---

### Functions

`useState` can also store functions.

To avoid React treating the function as a lazy initializer, wrap it inside another function.

**Example:**

```javascript id="x3n8pm"
const [callback, setCallback] =
  useState(() => () => {
    console.log("Hello");
  });
```

### Summary

`useState` supports:

* Primitive values
* Objects
* Arrays
* Functions
* Any other valid JavaScript data type

This flexibility makes `useState` suitable for managing almost any kind of component state.

**[⬆ Back to Top](#table-of-contents)**

276. ### What happens if you call `useState` conditionally?

In React, calling `useState` conditionally breaks the **Rules of Hooks** and can cause serious bugs or runtime errors.

React depends on the **consistent order of Hook calls** during every render.

### Incorrect Example

```jsx id="m4x8pk"
function App({ loggedIn }) {
  if (loggedIn) {
    const [user, setUser] =
      useState(null); // ❌ Invalid
  }

  return <div>Hello</div>;
}
```

### Why Is This a Problem?

React internally tracks Hooks by their call order.

If a Hook is skipped because of:

* `if`
* `for`
* `while`
* nested functions

then the Hook order changes between renders.

This can cause:

* State mismatches
* Incorrect Hook values
* Unexpected behavior
* Runtime errors

### Correct Approach

Always call Hooks at the top level of the component.

```jsx id="q7n2vx"
function App({ loggedIn }) {
  const [user, setUser] =
    useState(null);

  if (!loggedIn) {
    return <div>Please Login</div>;
  }

  return <div>Hello</div>;
}
```

### Rule of Hooks

Hooks must:

1. Be called at the top level
2. Be called only from:

   * React functional components
   * Custom Hooks

This ensures React can correctly associate state with each Hook call.

**[⬆ Back to Top](#table-of-contents)**

277. ### Is `useState` synchronous or asynchronous?

In React, the `useState` setter function (`setState`) is asynchronous in behavior.

When you call a state setter:

* React does not update the state immediately
* The update is queued
* React batches updates for performance optimization
* The component re-renders later

### Example

```javascript id="m4x8pk"
setCount(count + 1);

console.log(count);
// Logs the OLD value
```

Here:

* `count` still contains the previous state value
* The new state becomes available after React re-renders the component

### Why Does React Do This?

React batches updates to:

* Improve performance
* Reduce unnecessary re-renders
* Optimize DOM updates

### Correct Way to Work with Previous State

When the next state depends on the previous state, use the updater function form:

```javascript id="q7n2vx"
setCount(prevCount =>
  prevCount + 1
);
```

### Important Note

Although state updates are asynchronous from the developer perspective, React internally schedules and processes them efficiently during the rendering cycle.

**[⬆ Back to Top](#table-of-contents)**

278. ### Can you explain how `useState` works internally?

Internally, React manages Hooks like `useState` using an internal data structure that stores state values for each component.

### 1. State Slots (Hook Storage)

React maintains an internal list (or array-like structure) of Hook state values for every component instance.

Each `useState` call gets its own “slot” in that list.

### Example

```jsx id="m4x8pk"
function App() {
  const [count, setCount] =
    useState(0);

  const [name, setName] =
    useState("John");
}
```

Internally, React may conceptually store:

```text id="q7n2vx"
[
  0,
  "John"
]
```

---

### 2. Hook Order Tracking

React relies on the order of Hook calls.

During rendering:

* React uses an internal pointer/cursor
* Each Hook call increments the cursor
* React retrieves state using the Hook’s position

This is why Hooks must always be called in the same order.

---

### 3. Re-render Persistence

On every re-render:

* React resets the Hook pointer to the beginning
* Replays Hook calls in the same order
* Retrieves previous state values from stored slots

This allows state to persist between renders.

---

### 4. State Update Queueing

When you call a setter:

```javascript id="k5m1qa"
setCount(count + 1);
```

React does not update the state immediately.

Instead:

* The update is added to an internal queue
* React schedules a re-render
* During the next render, queued updates are processed

This batching behavior improves performance.

### Simplified Internal Flow

```text id="x3n8pm"
Render Component
   ↓
Track Hook Order
   ↓
Read Stored State
   ↓
Queue Updates
   ↓
Re-render with New State
```

This Hook indexing system is the reason the **Rules of Hooks** are critical in React.

**[⬆ Back to Top](#table-of-contents)**

279. ### What is `useReducer`? Why do you use it?

In React, `useReducer` is a Hook used for managing complex state logic inside functional components.

It follows a pattern similar to Redux:

* Actions are dispatched
* A reducer function processes the action
* The reducer returns the next state

### Basic Syntax

```jsx id="m4x8pk"
const [state, dispatch] =
  useReducer(reducer, initialState);
```

### Reducer Example

```jsx id="q7n2vx"
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };

    default:
      return state;
  }
}
```

### Using `useReducer`

```jsx id="k5m1qa"
const [state, dispatch] =
  useReducer(reducer, { count: 0 });

dispatch({ type: "increment" });
```

### Why Use `useReducer`?

`useReducer` is useful when:

* State contains multiple related values
* State transitions are complex
* The next state depends on the previous state
* You want centralized state update logic
* State logic should be easier to test and maintain

### Common Use Cases

* Complex forms
* Shopping carts
* Authentication flows
* Multi-step UI state
* Large state objects

### Benefits

* Better organization of state logic
* Predictable updates
* Easier debugging
* Cleaner component code

For simple state, `useState` is usually sufficient.
For more advanced state management, `useReducer` is often a better choice.


**[⬆ Back to Top](#table-of-contents)**

280. ### How does `useReducer` work? Explain with an example

In React, `useReducer` manages state using a reducer function and dispatched actions.

It works similarly to Redux.

### How `useReducer` Works

1. A component dispatches an action
2. React sends the current state and action to the reducer
3. The reducer returns a new state
4. React re-renders the component with the updated state

---

### Example

```jsx id="m4x8pk"
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };

    case "decrement":
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] =
    useReducer(reducer, {
      count: 0
    });

  return (
    <div>
      <h1>{state.count}</h1>

      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        Increment
      </button>

      <button
        onClick={() =>
          dispatch({ type: "decrement" })
        }
      >
        Decrement
      </button>
    </div>
  );
}
```

---

### Key Parts

#### Reducer Function

```javascript id="q7n2vx"
(state, action) => newState
```

* Receives current state and action
* Returns updated state

#### `dispatch`

```javascript id="k5m1qa"
dispatch({ type: "increment" });
```

* Sends an action to the reducer

#### Initial State

```javascript id="x3n8pm"
{ count: 0 }
```

* Starting state value

### Benefits of `useReducer`

* Centralized state logic
* Better for complex state
* Easier testing and debugging
* Predictable state transitions

`useReducer` is especially useful when state updates involve multiple related actions or complex business logic.


**[⬆ Back to Top](#table-of-contents)**

281. ### Can you combine `useReducer` with `useContext`?

Yes. In React, combining `useReducer` with `useContext` is a very common pattern for managing global application state without using external libraries like Redux.

### How the Pattern Works

* `useReducer` manages the state logic
* `useContext` shares the state and `dispatch` function across the component tree

This allows deeply nested components to:

* Access global state
* Dispatch actions directly

without prop drilling.

---

### Example

#### Create Context

```jsx id="m4x8pk"
const CounterContext =
  createContext();
```

#### Reducer

```jsx id="q7n2vx"
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };

    default:
      return state;
  }
}
```

#### Provider Component

```jsx id="k5m1qa"
function CounterProvider({ children }) {
  const [state, dispatch] =
    useReducer(reducer, {
      count: 0
    });

  return (
    <CounterContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </CounterContext.Provider>
  );
}
```

#### Consume Context

```jsx id="x3n8pm"
function Counter() {
  const { state, dispatch } =
    useContext(CounterContext);

  return (
    <button
      onClick={() =>
        dispatch({ type: "increment" })
      }
    >
      {state.count}
    </button>
  );
}
```

### Benefits

* Avoids prop drilling
* Centralized state management
* No external library required
* Cleaner architecture for medium-sized apps

This pattern is often considered a lightweight alternative to Redux for many React applications.


**[⬆ Back to Top](#table-of-contents)**

282. ### Can you dispatch multiple actions in a row with `useReducer`?

Yes. In React, you can dispatch multiple actions sequentially using `useReducer`.

React automatically batches these updates to improve performance and avoid unnecessary re-renders.

### Example

```jsx id="m4x8pk"
dispatch({ type: "increment" });

dispatch({ type: "increment" });

dispatch({ type: "decrement" });
```

### What Happens Internally

* Each action is queued
* React processes them in order
* State updates are batched together
* The component usually re-renders only once

### Example in an Event Handler

```jsx id="q7n2vx"
function handleClick() {
  dispatch({ type: "increment" });

  dispatch({ type: "increment" });
}
```

React applies both updates efficiently during the next render cycle.

### Benefit of Batching

* Better performance
* Fewer renders
* More efficient DOM updates

This batching behavior works similarly to `useState` updates in React 18 and later.


**[⬆ Back to Top](#table-of-contents)**

283. ### Is `dispatch` from `useReducer` asynchronous? Does it update state immediately?

Yes. In React, the `dispatch` function from `useReducer` behaves similarly to `setState` from `useState`.

When you call `dispatch`:

* React does not update the state immediately
* The action is queued
* React schedules a re-render
* The updated state becomes available during the next render

### Example

```jsx id="m4x8pk"
dispatch({ type: "increment" });

console.log(state.count);
// Still logs the OLD value
```

### Why Does This Happen?

React batches updates for:

* Better performance
* Fewer re-renders
* Efficient DOM updates

### Internal Flow

```text id="q7n2vx"
dispatch(action)
   ↓
Action queued
   ↓
Reducer runs during next render
   ↓
New state generated
   ↓
Component re-renders
```

### Important Note

You should not expect updated state immediately after calling `dispatch` within the same function execution.

If you need logic based on updated state:

* Use `useEffect`
* Or rely on the next render cycle

This asynchronous update behavior is a core part of React’s rendering system.


**[⬆ Back to Top](#table-of-contents)**

284. ### How does `useContext` work? Explain with an example

In React, `useContext` allows components to access shared data directly from a Context without manually passing props through multiple component levels.

It works together with the React Context API.

---

### Example

```jsx id="m4x8pk"
import {
  createContext,
  useContext
} from "react";

const ThemeContext =
  createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme =
    useContext(ThemeContext);

  return <div>Theme: {theme}</div>;
}
```

---

### How It Works

#### 1. Create Context

```javascript id="q7n2vx"
const ThemeContext =
  createContext("light");
```

* Creates a Context object
* `"light"` is the default value

---

#### 2. Provide a Value

```jsx id="k5m1qa"
<ThemeContext.Provider value="dark">
```

* The `Provider` makes the value available to all child components
* Here, the shared value is `"dark"`

---

#### 3. Consume the Context

```javascript id="x3n8pm"
const theme =
  useContext(ThemeContext);
```

* `useContext` reads the nearest Provider value
* `theme` becomes `"dark"`

---

### Result

```text id="p2m7qa"
Theme: dark
```

### Benefits of `useContext`

* Avoids prop drilling
* Simplifies shared state access
* Cleaner component structure
* Useful for global data such as:

  * Themes
  * Authentication
  * Language settings
  * App configuration

**[⬆ Back to Top](#table-of-contents)**

285. ### Can you use multiple Contexts in one component?

Yes. In React, a component can consume multiple contexts by calling `useContext` multiple times.

This allows a component to access different pieces of shared global data independently.

### Example

```jsx id="m4x8pk"
const theme =
  useContext(ThemeContext);

const user =
  useContext(UserContext);
```

### Complete Example

```jsx id="q7n2vx"
function Dashboard() {
  const theme =
    useContext(ThemeContext);

  const user =
    useContext(UserContext);

  return (
    <div>
      Theme: {theme}
      <br />
      User: {user.name}
    </div>
  );
}
```

### Common Use Cases

A component may consume contexts for:

* Theme settings
* Authentication
* Language/localization
* App configuration
* Global UI state

### Benefit

Using multiple contexts keeps global state modular and organized instead of storing everything inside a single large context.


**[⬆ Back to Top](#table-of-contents)**

286. ### What's a common pitfall when using `useContext` with objects?

In React, a common pitfall with `useContext` occurs when the context value is an object.

### The Problem

React compares context values by **reference**, not by deep comparison.

This means:

* If a new object is created on every render,
* All consuming components will re-render,
* Even if the actual data they use did not change.

### Problematic Example

```jsx id="m4x8pk"
<MyContext.Provider
  value={{ user, settings }}
>
  {children}
</MyContext.Provider>
```

Here:

* A new object is created every render
* Context consumers re-render unnecessarily

---

### Recommended Solution: `useMemo`

Memoize the context value to keep the same object reference unless dependencies change.

```jsx id="q7n2vx"
const value = useMemo(
  () => ({ user, settings }),
  [user, settings]
);

return (
  <MyContext.Provider value={value}>
    {children}
  </MyContext.Provider>
);
```

---

### Another Optimization

Split large contexts into smaller focused contexts.

Example:

* `UserContext`
* `ThemeContext`
* `SettingsContext`

This reduces unnecessary re-renders and improves performance.

### Why This Matters

Without optimization:

* Large component trees may re-render frequently
* Performance can degrade
* UI updates become less efficient

Memoizing context values is a common best practice in React applications.


**[⬆ Back to Top](#table-of-contents)**

287. ### What is the context value when there is no matching Provider?

In React, if a component uses `useContext` but there is no matching `Provider` above it in the component tree, React returns the **default value** provided to `createContext()`.

### Example

```jsx id="m4x8pk"
const ThemeContext =
  createContext("light");
```

Here:

* `"light"` is the default context value

If no `ThemeContext.Provider` exists above the component:

```jsx id="q7n2vx"
const theme =
  useContext(ThemeContext);
```

then:

```text id="k5m1qa"
theme === "light"
```

### Why Default Values Are Useful

Default values help:

* Prevent undefined errors
* Provide fallback behavior
* Simplify testing components independently

### Example with Provider

```jsx id="x3n8pm"
<ThemeContext.Provider value="dark">
  <Toolbar />
</ThemeContext.Provider>
```

Now `useContext(ThemeContext)` returns:

```text id="p2m7qa"
"dark"
```

instead of the default `"light"` value.


**[⬆ Back to Top](#table-of-contents)**

288. ### How do reactive dependencies in the `useEffect` dependency array affect execution?

In React, the dependency array controls when a `useEffect` Hook executes.

### 1. Empty Dependency Array `[]`

Runs only once after the initial render (mount).

```jsx id="m4x8pk"
useEffect(() => {
  console.log("Mounted");
}, []);
```

### Behavior

* Runs on component mount
* Cleanup runs on unmount

---

### 2. Dependency Array with Values `[dep1, dep2]`

Runs:

* On initial mount
* Whenever any dependency changes

```jsx id="q7n2vx"
useEffect(() => {
  console.log("User changed");
}, [user]);
```

### Behavior

* React compares dependency values
* If any dependency changes, the effect re-runs

---

### 3. No Dependency Array

Runs after every render.

```jsx id="k5m1qa"
useEffect(() => {
  console.log("Rendered");
});
```

### Behavior

* Executes after every render cycle
* Can impact performance if unnecessary

---

### Summary

| Dependency Array | Execution Behavior                 |
| ---------------- | ---------------------------------- |
| `[]`             | Runs once on mount                 |
| `[dep1, dep2]`   | Runs on mount + dependency changes |
| No array         | Runs after every render            |

Correct dependency management is important for:

* Preventing unnecessary effects
* Avoiding stale values
* Ensuring predictable component behavior


**[⬆ Back to Top](#table-of-contents)**

289. ### When and how often does React invoke the setup and cleanup functions in `useEffect`?

In React, a `useEffect` Hook can contain:

* A setup function
* An optional cleanup function

### Basic Structure

```jsx id="m4x8pk"
useEffect(() => {
  // Setup logic

  return () => {
    // Cleanup logic
  };
}, [dependencies]);
```

---

### Setup Function

The setup function runs:

* After the component is mounted
* After re-renders where dependencies change

### Example

```jsx id="q7n2vx"
useEffect(() => {
  console.log("Setup");
}, [count]);
```

---

### Cleanup Function

The cleanup function runs:

1. Before the effect runs again
2. When the component unmounts

### Example

```jsx id="k5m1qa"
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

Here:

* Interval starts during setup
* Interval is cleared during cleanup

---

### Execution Flow

```text id="x3n8pm"
Mount
  ↓
Setup runs
  ↓
Dependency changes
  ↓
Cleanup runs
  ↓
Setup runs again
  ↓
Component unmounts
  ↓
Final cleanup runs
```

### Why Cleanup Is Important

Cleanup helps prevent:

* Memory leaks
* Duplicate subscriptions
* Unused timers
* Stale event listeners

Proper cleanup ensures effects remain safe and efficient.

**[⬆ Back to Top](#table-of-contents)**

290. ### What happens if you return a Promise from `useEffect`?

In React, the function passed to `useEffect` must return either:

* Nothing (`undefined`)
* A synchronous cleanup function

Returning a Promise directly from `useEffect` is invalid and causes a warning or error.

### Incorrect Example

```jsx id="m4x8pk"
useEffect(async () => {
  const response =
    await fetch("/api/data");
}, []);
```

This is incorrect because:

* `async` functions always return a Promise
* React expects a cleanup function, not a Promise

---

### Correct Approach

Define an async function inside the effect and call it.

```jsx id="q7n2vx"
useEffect(() => {
  const fetchData = async () => {
    const response =
      await fetch("/api/data");

    const data =
      await response.json();

    console.log(data);
  };

  fetchData();
}, []);
```

---

### Why React Requires Synchronous Cleanup

React needs cleanup functions to run immediately and predictably for:

* Removing event listeners
* Clearing timers
* Canceling subscriptions

Async cleanup behavior would make effect management unreliable.

### Recommended Pattern

```jsx id="k5m1qa"
useEffect(() => {
  async function loadData() {
    // async logic
  }

  loadData();

  return () => {
    // synchronous cleanup
  };
}, []);
```

This is the standard and recommended way to use asynchronous logic inside `useEffect`.

**[⬆ Back to Top](#table-of-contents)**

290. ### Can you have multiple `useEffect` Hooks in a single component?

Yes. In React, you can use multiple `useEffect` Hooks inside the same component.

This is actually encouraged because it helps separate unrelated side-effect logic into smaller, more maintainable pieces.

### Example

```jsx id="m4x8pk"
function App() {
  useEffect(() => {
    console.log("Runs on mount");
  }, []);

  useEffect(() => {
    console.log("Runs when count changes");
  }, [count]);

  useEffect(() => {
    console.log("Runs after every render");
  });

  return <div>Hello</div>;
}
```

### Execution Order

`useEffect` Hooks execute in the same order they are defined in the component.

### Benefits of Multiple `useEffect` Hooks

* Better code organization
* Separation of concerns
* Easier debugging
* More maintainable side-effect logic

### Common Pattern

Instead of combining unrelated logic into one large effect:

```jsx id="q7n2vx"
// ❌ Less organized
useEffect(() => {
  fetchData();
  setupListener();
  updateTitle();
}, []);
```

split them into focused effects:

```jsx id="k5m1qa"
// ✅ Better organization
useEffect(() => {
  fetchData();
}, []);

useEffect(() => {
  setupListener();
}, []);

useEffect(() => {
  updateTitle();
});
```

This makes effects easier to understand and manage.


    **[⬆ Back to Top](#table-of-contents)**

291. ### How do you prevent infinite loops with `useEffect`?

In React, infinite loops commonly happen when a `useEffect` updates state that is also included in its dependency array.

### Example of an Infinite Loop

```jsx id="m4x8pk"
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

### What Happens

1. Effect runs
2. `count` updates
3. Component re-renders
4. Dependency changes
5. Effect runs again
6. Loop continues indefinitely

---

## Ways to Prevent Infinite Loops

### 1. Use Functional State Updates

When the next state depends on the previous state, use the updater function form.

```jsx id="q7n2vx"
useEffect(() => {
  setCount(c => c + 1);
}, []);
```

This avoids needing `count` as a dependency.

---

### 2. Verify Dependencies Carefully

Only include dependencies that should actually trigger the effect.

```jsx id="k5m1qa"
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

Avoid adding unnecessary dependencies.

---

### 3. Avoid Unstable Object/Array References

Objects and arrays create new references on every render.

```jsx id="x3n8pm"
useEffect(() => {
  console.log(filters);
}, [filters]);
```

If `filters` is recreated every render, the effect runs continuously.

### Solution

Use:

* `useMemo`
* `useCallback`

to stabilize references.

```jsx id="p2m7qa"
const filters = useMemo(() => {
  return { active: true };
}, []);
```

---

### Best Practices

* Keep effects focused
* Use stable dependencies
* Avoid unnecessary state updates inside effects
* Use ESLint Hook rules to detect dependency issues

Proper dependency management is essential for predictable and efficient React effects.

**[⬆ Back to Top](#table-of-contents)**

292. ### What are the use cases of `useLayoutEffect`?

In React, `useLayoutEffect` is used for side effects that must run synchronously after DOM updates but before the browser paints the screen.

It is mainly used when you need to read or modify layout-related DOM information immediately.

### Common Use Cases

1. **Measuring Layout**
   Useful for reading:

   * Width
   * Height
   * Position
   * Element dimensions

   before the browser paints.

   ```jsx id="m4x8pk"
   useLayoutEffect(() => {
     const height =
       ref.current.offsetHeight;

     console.log(height);
   }, []);
   ```

---

2. **Preventing Visual Flickering**
   Helps update the DOM synchronously so users do not briefly see incorrect UI states.

   Common examples:

   * Tooltip positioning
   * Popovers
   * Dynamic element placement

---

3. **Scroll Management**
   Useful for:

   * Restoring scroll position
   * Auto-scrolling chat windows
   * Preventing scroll jumps

   before paint occurs.

---

4. **Synchronous DOM Updates**
   When DOM changes must happen immediately before rendering becomes visible.

### Important Difference from `useEffect`

| Hook              | Execution Timing |
| ----------------- | ---------------- |
| `useEffect`       | After paint      |
| `useLayoutEffect` | Before paint     |

### Important Note

Because `useLayoutEffect` blocks browser painting:

* It can impact performance if overused
* `useEffect` should be preferred for most side effects

Use `useLayoutEffect` only when layout synchronization is necessary.


**[⬆ Back to Top](#table-of-contents)**

293. ### How does `useLayoutEffect` work during Server-Side Rendering (SSR)?

In React, `useLayoutEffect` does not run during Server-Side Rendering (SSR).

`useLayoutEffect` is designed for browser DOM operations, and since the server does not have a DOM, React cannot execute it during server rendering.

### What Happens During SSR?

* React skips `useLayoutEffect`
* A warning may appear in SSR environments
* The effect runs only after hydration on the client

### Why?

`useLayoutEffect` runs:

* Synchronously
* After DOM mutations
* Before browser paint

These browser-specific behaviors are unavailable on the server.

### Common Warning

```text id="m4x8pk"
useLayoutEffect does nothing on the server
```

---

### Recommended Solutions

#### 1. Use `useEffect` Instead

For most cases, `useEffect` works correctly in SSR applications because it only runs on the client after rendering.

```jsx id="q7n2vx"
useEffect(() => {
  // Client-side logic
}, []);
```

---

#### 2. Run Layout Logic Only on the Client

In frameworks like Next.js, ensure layout-related code executes only in Client Components.

```jsx id="k5m1qa"
"use client";
```

---

### General Recommendation

* Prefer `useEffect` for SSR-compatible logic
* Use `useLayoutEffect` only for browser layout synchronization tasks that truly require synchronous DOM access


**[⬆ Back to Top](#table-of-contents)**

294. ### What happens if you use `useLayoutEffect` for non-layout logic?

In React, `useLayoutEffect` runs synchronously before the browser paints the screen.

If you use it for non-layout-related work, it can negatively affect performance because it blocks rendering until the effect completes.

### What Problems Can Occur?

* Delayed screen painting
* UI freezing
* Slower rendering
* Poor user experience
* Visible performance lag

### Why?

`useLayoutEffect` executes:

1. After DOM updates
2. Before the browser paints

React waits for the effect to finish before displaying anything to the user.

### Example of Unnecessary Usage

```jsx id="m4x8pk"
useLayoutEffect(() => {
  fetchData();
  console.log("Heavy work");
}, []);
```

This is inefficient because:

* Fetching data does not require synchronous DOM access
* The browser paint is unnecessarily blocked

---

### Recommended Approach

Use `useEffect` for most side effects.

```jsx id="q7n2vx"
useEffect(() => {
  fetchData();
}, []);
```

`useEffect` runs asynchronously after paint, keeping the UI responsive.

---

### When Should You Actually Use `useLayoutEffect`?

Only for layout-sensitive operations such as:

* Measuring DOM elements
* Positioning tooltips/popovers
* Scroll synchronization
* Preventing visual flickering

### Best Practice

* Default to `useEffect`
* Use `useLayoutEffect` only when synchronous layout updates are necessary


**[⬆ Back to Top](#table-of-contents)**

295. ### How does `useLayoutEffect` cause layout thrashing?

In React, layout thrashing happens when code repeatedly:

1. Reads layout information from the DOM
2. Writes changes back to the DOM

in a way that forces the browser to continuously recalculate layout and repaint.

Because `useLayoutEffect` runs synchronously before the browser paints, excessive DOM reads and writes inside it can severely hurt performance.

### Example of Layout Thrashing

```jsx id="m4x8pk"
useLayoutEffect(() => {
  const width =
    element.offsetWidth; // Read

  element.style.width =
    width + 10 + "px"; // Write

  const height =
    element.offsetHeight; // Another read
}, []);
```

### Why This Is Expensive

When you:

* Read layout properties (`offsetWidth`, `offsetHeight`, `getBoundingClientRect`)
* Then immediately modify styles

the browser may be forced to:

* Recalculate layout
* Repaint
* Reflow

multiple times in the same frame.

This repeated recalculation is called **layout thrashing**.

### Common Expensive DOM Reads

* `offsetWidth`
* `offsetHeight`
* `scrollTop`
* `getBoundingClientRect()`

### Performance Problems

Layout thrashing can cause:

* Janky animations
* UI lag
* Slow rendering
* Frame drops

### Best Practices to Avoid It

* Batch DOM reads together
* Batch DOM writes together
* Minimize synchronous DOM access
* Prefer CSS transforms when possible
* Use `useEffect` unless synchronous layout measurement is necessary

### Recommendation

Use `useLayoutEffect` only for critical layout synchronization tasks and keep DOM measurements/updates minimal.


**[⬆ Back to Top](#table-of-contents)**

296. ### How do you use `useRef` to access a DOM element in React?

In React, `useRef` is commonly used to access DOM elements directly.

### Steps to Use `useRef`

1. **Create a Ref**

```javascript id="m4x8pk"
const myRef = useRef(null);
```

2. **Attach the Ref to a DOM Element**

```jsx id="q7n2vx"
<input ref={myRef} />
```

3. **Access the Element**

```javascript id="k5m1qa"
myRef.current
```

`current` points to the actual DOM node after the component mounts.

---

### Complete Example

```jsx id="x3n8pm"
import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input
        ref={inputEl}
        type="text"
      />

      <button onClick={onButtonClick}>
        Focus the input
      </button>
    </>
  );
}
```

---

### Common Use Cases of `useRef`

* Focusing inputs
* Accessing DOM measurements
* Scrolling elements
* Managing timers
* Integrating third-party libraries

`useRef` allows direct DOM access without causing component re-renders.


**[⬆ Back to Top](#table-of-contents)**

297. ### Can you use `useRef` to persist values across renders?

Yes. In React, `useRef` can store mutable values that persist across component renders without triggering re-renders.

Unlike `useState`, updating a ref does not cause the component to render again.

### Example

```jsx id="m4x8pk"
function Counter() {
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <div>
      Renders: {renderCount.current}
    </div>
  );
}
```

### How It Works

* `useRef` returns an object:

```javascript id="q7n2vx"
{
  current: value
}
```

* The `.current` value persists between renders
* Changing `.current` does not trigger UI updates

### Common Use Cases

* Storing previous values
* Timer IDs (`setTimeout`, `setInterval`)
* Tracking render counts
* Caching mutable data
* DOM element references

### Difference Between `useRef` and `useState`

| Feature                      | `useRef`              | `useState` |
| ---------------------------- | --------------------- | ---------- |
| Persists Between Renders     | Yes                   | Yes        |
| Triggers Re-render on Update | No                    | Yes        |
| Best For                     | Mutable non-UI values | UI state   |

`useRef` is ideal for storing values that need persistence but should not affect rendering.

**[⬆ Back to Top](#table-of-contents)**

298. ### Can `useRef` be used to store previous values?

Yes. In React, `useRef` is commonly used to store values from the previous render.

Because refs persist across renders without triggering re-renders, they are ideal for tracking previous state or prop values.

### Example

```jsx id="m4x8pk"
import {
  useState,
  useRef,
  useEffect
} from "react";

function Counter() {
  const [count, setCount] =
    useState(0);

  const prevCountRef =
    useRef();

  useEffect(() => {
    prevCountRef.current =
      count;
  });

  const prevCount =
    prevCountRef.current;

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </div>
  );
}
```

### How It Works

1. Component renders with current `count`
2. `useEffect` runs after render
3. The current count is stored in the ref
4. On the next render:

   * `count` becomes the new value
   * `prevCountRef.current` still contains the previous value

### Why `useRef` Works Well Here

* Ref values persist between renders
* Updating `.current` does not trigger re-renders
* Perfect for storing historical values

This is a common pattern for tracking previous props or state in React components.


**[⬆ Back to Top](#table-of-contents)**

299. ### Is it possible to access a ref during rendering?

In React, you generally should **not** read or modify `ref.current` during the render phase.

React expects components to behave like **pure functions** during rendering:

* Same inputs → same output
* No side effects
* No mutable state changes

Because refs are mutable, accessing or modifying them during render can lead to unpredictable behavior.

### Incorrect Example

```jsx id="m4x8pk"
function App() {
  const inputRef = useRef(null);

  console.log(inputRef.current); // ❌ Avoid during render

  return <input ref={inputRef} />;
}
```

During render:

* The DOM element may not exist yet
* `ref.current` may still be `null`

---

### Correct Places to Access Refs

#### Inside `useEffect`

```jsx id="q7n2vx"
useEffect(() => {
  inputRef.current.focus();
}, []);
```

#### Inside Event Handlers

```jsx id="k5m1qa"
const handleClick = () => {
  inputRef.current.focus();
};
```

---

### Why Avoid Ref Access During Render?

It can cause:

* Inconsistent rendering behavior
* Bugs with Concurrent Rendering
* Unpredictable values
* Violations of React’s rendering model

### Best Practice

* Treat rendering as pure
* Access refs only after render:

  * `useEffect`
  * `useLayoutEffect`
  * Event handlers

This keeps components predictable and compatible with modern React features.


**[⬆ Back to Top](#table-of-contents)**

300. ### What are the common use cases of the `useRef` Hook?

In React, `useRef` is commonly used for storing mutable values and accessing DOM elements without triggering re-renders.

### Common Use Cases of `useRef`

1. **Managing Focus, Text Selection, or Media Playback**
   Access DOM APIs directly for:

   * Focusing inputs
   * Selecting text
   * Playing/pausing videos or audio

   ```jsx id="m4x8pk"
   inputRef.current.focus();
   ```

---

2. **Storing Timers or Interval IDs**
   Useful for storing:

   * `setTimeout`
   * `setInterval`

   IDs so they can be cleared later.

   ```jsx id="q7n2vx"
   const timerRef = useRef(null);

   timerRef.current =
     setTimeout(() => {
       console.log("Done");
     }, 1000);
   ```

---

3. **Persisting Values Across Renders**
   Store mutable values that should not trigger re-renders.

   Common examples:

   * Previous state values
   * Render counts
   * Cached mutable data

   ```jsx id="k5m1qa"
   const prevValue =
     useRef(null);
   ```

---

4. **Integrating with Non-React Libraries**
   Pass DOM elements to third-party libraries such as:

   * D3.js
   * Google Maps
   * Chart libraries
   * jQuery plugins

   ```jsx id="x3n8pm"
   chartLibrary.init(
     chartRef.current
   );
   ```

---

5. **Accessing DOM Measurements**
   Useful for reading:

   * Width
   * Height
   * Scroll position
   * Element coordinates

### Important Characteristic

Updating a ref:

```javascript id="p2m7qa"
ref.current = value;
```

does **not** trigger a component re-render.

This makes `useRef` ideal for mutable non-UI data and direct DOM interaction.


**[⬆ Back to Top](#table-of-contents)**

301. ### What is the `useImperativeHandle` Hook?

In React, `useImperativeHandle` is a Hook used to customize what a parent component can access through a `ref`.

It is typically used together with:

* `forwardRef`
* `useRef`

Instead of exposing the entire child DOM element or component instance, you can expose only specific methods or properties.

---

### Example

```jsx id="m4x8pk"
import {
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";

const MyInput = forwardRef(
  (props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(
      ref,
      () => ({
        focus: () =>
          inputRef.current.focus()
      })
    );

    return (
      <input ref={inputRef} />
    );
  }
);
```

---

### Parent Component Usage

```jsx id="q7n2vx"
function App() {
  const ref = useRef();

  return (
    <>
      <MyInput ref={ref} />

      <button
        onClick={() =>
          ref.current.focus()
        }
      >
        Focus Input
      </button>
    </>
  );
}
```

---

### How It Works

* `forwardRef` allows the parent to pass a ref
* `useImperativeHandle` controls what the parent receives
* Only the exposed methods become accessible

### Benefits

* Encapsulation
* Controlled imperative APIs
* Hides internal implementation details
* Cleaner component interfaces

### Common Use Cases

* Focus management
* Form controls
* Modals/dialogs
* Media controls
* Custom component APIs

`useImperativeHandle` is useful when a child component needs to expose a limited imperative interface to its parent.


**[⬆ Back to Top](#table-of-contents)**

302. ### When should you use `useImperativeHandle`?

In React, `useImperativeHandle` should be used only for imperative actions that cannot be easily achieved through props or normal declarative data flow.

It is commonly used together with:

* `forwardRef`
* `useRef`

### Common Use Cases

1. **Focusing or Selecting Text**

```jsx id="m4x8pk"
ref.current.focus();
```

Useful for:

* Input fields
* Search bars
* Form controls

---

2. **Scrolling to a Position**

```jsx id="q7n2vx"
ref.current.scrollToTop();
```

Useful for:

* Chat windows
* Scroll containers
* Virtualized lists

---

3. **Triggering Animations**

```jsx id="k5m1qa"
ref.current.startAnimation();
```

Useful when parent components need direct control over child animations.

---

4. **Resetting Child Component State**

```jsx id="x3n8pm"
ref.current.reset();
```

Useful for:

* Forms
* Custom input components
* Media players

---

### Why Use It Sparingly?

React is primarily declarative, meaning UI should usually be controlled via:

* Props
* State

Overusing imperative APIs can:

* Increase component coupling
* Make code harder to maintain
* Reduce predictability

### Best Practice

Use `useImperativeHandle` only when:

* Declarative props are insufficient
* Direct imperative control is truly necessary

For most component communication, props and state remain the preferred approach.

**[⬆ Back to Top](#table-of-contents)**

303. ### Is it possible to use `useImperativeHandle` without `forwardRef`?

No. In React, `useImperativeHandle` must be used together with `forwardRef`.

### Why?

`useImperativeHandle` customizes the value exposed through a `ref`.

For a functional component to receive a `ref` from its parent, the component must be wrapped with `forwardRef`.

Without `forwardRef`, functional components do not receive the `ref` argument.

---

### Correct Usage

```jsx id="m4x8pk"
const MyInput = forwardRef(
  (props, ref) => {
    useImperativeHandle(
      ref,
      () => ({
        focus() {
          console.log("Focus");
        }
      })
    );

    return <input />;
  }
);
```

---

### Incorrect Usage

```jsx id="q7n2vx"
function MyInput(props) {
  useImperativeHandle(...); // ❌ Invalid
}
```

This does not work because:

* No `ref` is available
* Functional components cannot directly receive refs without `forwardRef`

---

### Relationship Between Them

| Feature               | Purpose                              |
| --------------------- | ------------------------------------ |
| `forwardRef`          | Passes ref into functional component |
| `useImperativeHandle` | Customizes what the ref exposes      |

They are designed to work together when creating imperative APIs for child components.

**[⬆ Back to Top](#table-of-contents)**

304. ### How is `useMemo` different from `useCallback`?

In React, both `useMemo` and `useCallback` are performance optimization Hooks, but they memoize different things.

| Hook          | What It Memoizes        | Returns    |
| ------------- | ----------------------- | ---------- |
| `useMemo`     | Result of a calculation | A value    |
| `useCallback` | Function definition     | A function |

---

### `useMemo`

`useMemo` caches the computed result of an expensive calculation.

### Example

```jsx id="m4x8pk"
const filteredItems = useMemo(() => {
  return items.filter(
    item => item.active
  );
}, [items]);
```

Here:

* The filtered array is memoized
* Recalculation happens only when `items` changes

---

### `useCallback`

`useCallback` memoizes the function itself so the same function reference is reused between renders.

### Example

```jsx id="q7n2vx"
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

Here:

* The function reference stays stable
* Useful when passing callbacks to memoized child components

---

### Common Use Cases

#### Use `useMemo` For:

* Expensive calculations
* Derived data
* Filtering/sorting large arrays

#### Use `useCallback` For:

* Stable callback references
* Preventing unnecessary child re-renders
* Event handlers passed as props

---

### Relationship

You can think of:

```javascript id="k5m1qa"
useCallback(fn, deps)
```

as roughly equivalent to:

```javascript id="x3n8pm"
useMemo(() => fn, deps)
```

except `useCallback` is specifically designed for functions.


**[⬆ Back to Top](#table-of-contents)**

305. ### Does `useMemo` prevent re-rendering of child components?

No. In React, `useMemo` by itself does not prevent child component re-renders.

`useMemo` only memoizes a **value** so that the same reference is reused between renders when dependencies do not change.

To actually prevent unnecessary child renders:

* The child component must be wrapped with `React.memo`
* And the props passed to it should remain referentially stable

---

### Example Without `React.memo`

```jsx id="m4x8pk"
const data = useMemo(() => {
  return computeData(items);
}, [items]);

<Child data={data} />
```

Even though `data` is memoized:

* `Child` still re-renders whenever the parent re-renders

---

### Correct Optimization

```jsx id="q7n2vx"
const Child = React.memo(
  ({ data }) => {
    return <div>{data.length}</div>;
  }
);

function Parent({ items }) {
  const data = useMemo(() => {
    return computeData(items);
  }, [items]);

  return <Child data={data} />;
}
```

Now:

* `useMemo` keeps the same `data` reference
* `React.memo` prevents re-render if props are unchanged

---

### Key Difference

| Tool         | Purpose                       |
| ------------ | ----------------------------- |
| `useMemo`    | Memoizes computed values      |
| `React.memo` | Prevents component re-renders |

They are often used together for performance optimization.


**[⬆ Back to Top](#table-of-contents)**

306. ### What is `useCallback` and why is it used?

In React, `useCallback` is a Hook that memoizes a function definition and returns the same function reference between renders unless its dependencies change.

### Syntax

```jsx id="m4x8pk"
const memoizedCallback =
  useCallback(() => {
    // function logic
  }, [dependencies]);
```

### Why Is `useCallback` Used?

In React, functions are recreated on every render.

This can cause unnecessary re-renders when:

* A function is passed as a prop
* The child component uses `React.memo`

`useCallback` helps keep the function reference stable.

---

### Example

```jsx id="q7n2vx"
const handleClick =
  useCallback(() => {
    console.log("Clicked");
  }, []);
```

Here:

* The same function instance is reused
* It is recreated only if dependencies change

---

### Common Use Cases

* Passing callbacks to memoized child components
* Preventing unnecessary re-renders
* Stable event handlers
* Dependency optimization in effects

---

### Example with `React.memo`

```jsx id="k5m1qa"
const Child = React.memo(
  ({ onClick }) => {
    return (
      <button onClick={onClick}>
        Click
      </button>
    );
  }
);

function Parent() {
  const handleClick =
    useCallback(() => {
      console.log("Clicked");
    }, []);

  return (
    <Child onClick={handleClick} />
  );
}
```

Without `useCallback`:

* A new function would be created every render
* `Child` would re-render unnecessarily

---

### Important Note

`useCallback` is a performance optimization tool.
It should be used only when:

* Stable function references matter
* Unnecessary renders are actually causing performance issues

Overusing it can add unnecessary complexity.


**[⬆ Back to Top](#table-of-contents)**

307. ### What are Custom React Hooks, and how do you create one?

In React, Custom Hooks are reusable JavaScript functions that:

* Start with the word `use`
* Can call other React Hooks
* Encapsulate reusable stateful logic

They help avoid duplicated logic across components.

---

### Why Use Custom Hooks?

Custom Hooks help:

* Reuse logic
* Improve code organization
* Keep components cleaner
* Separate business logic from UI

---

### Example: Custom `useFetch` Hook

```jsx id="m4x8pk"
import {
  useState,
  useEffect
} from "react";

function useFetch(url) {
  const [data, setData] =
    useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);

  return data;
}
```

---

### Using the Custom Hook

```jsx id="q7n2vx"
function Users() {
  const data =
    useFetch("/api/users");

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}
```

---

### Rules for Custom Hooks

Custom Hooks must follow the same Rules of Hooks:

* Call Hooks only at the top level
* Call Hooks only from:

  * React components
  * Other custom Hooks

### Naming Convention

Custom Hook names must start with:

```text id="k5m1qa"
use
```

Examples:

* `useFetch`
* `useAuth`
* `useTheme`

This helps React and ESLint identify Hook usage correctly.

---

### Common Use Cases

* Data fetching
* Authentication
* Form handling
* Theme management
* Window resize tracking
* Local storage synchronization

Custom Hooks are a powerful way to build reusable and maintainable React logic.


**[⬆ Back to Top](#table-of-contents)**

309. ### How does React Fiber work?

React Fiber is React’s internal reconciliation engine introduced in React 16.

Its primary goal is to make rendering:

* Faster
* Interruptible
* Prioritized
* More responsive

Fiber enables features such as:

* Concurrent Rendering
* Suspense
* Transitions
* Incremental rendering

---

# What Problem Did Fiber Solve?

Before Fiber:

* React rendering was synchronous
* Large renders could block the main thread
* UI could freeze during expensive updates

Fiber redesigned React’s rendering engine to allow work to be:

* Split into smaller units
* Paused
* Resumed
* Prioritized

---

# Core Concepts of React Fiber

## 1. Reconciliation

Reconciliation is React’s process for:

* Comparing the old Virtual DOM tree
* With the new Virtual DOM tree

to determine minimal DOM updates.

Fiber improves how reconciliation is scheduled and processed.

---

## 2. Fiber Node

A **Fiber** is a JavaScript object representing:

* A component
* A DOM element
* A unit of work

Each Fiber stores information such as:

* Component type
* Props
* State
* Child/sibling relationships
* Effects

### Simplified Fiber Structure

```text id="m4x8pk"
Fiber Node
 ├── type
 ├── props
 ├── state
 ├── child
 ├── sibling
 └── return (parent)
```

Fiber nodes form a linked tree structure.

---

# React Fiber Rendering Phases

React Fiber works in two major phases:

---

## 1. Render Phase (Reconciliation Phase)

### Characteristics

* Asynchronous
* Interruptible
* Can be paused/resumed

### What Happens?

React:

* Builds a work-in-progress Fiber tree
* Calculates updates
* Determines what changed

### Important Feature

React can pause rendering work to handle:

* User typing
* Animations
* High-priority interactions

before continuing lower-priority rendering tasks.

### Example

```text id="q7n2vx"
User types in input
   ↓
React pauses heavy rendering
   ↓
Processes input immediately
   ↓
Resumes rendering later
```

This keeps the UI responsive.

---

## 2. Commit Phase

### Characteristics

* Synchronous
* Non-interruptible

### What Happens?

React applies calculated changes to:

* The real DOM
* Refs
* Effects

This includes:

* DOM updates
* Running `useLayoutEffect`
* Running `useEffect`

### Commit Must Be Atomic

Once React starts committing:

* It cannot pause midway
* DOM updates must remain consistent

---

# Incremental Rendering

Fiber enables incremental rendering by:

* Breaking rendering into small tasks
* Scheduling work intelligently

Instead of blocking the browser:

```text id="k5m1qa"
Huge render → UI freeze
```

Fiber allows:

```text id="x3n8pm"
Small render chunks
   ↓
Browser stays responsive
```

---

# Priority Scheduling

Fiber introduces update priorities.

### High Priority

* Typing
* Clicking
* Animations

### Low Priority

* Background rendering
* Large list updates
* Non-urgent UI

React can delay low-priority work while processing urgent interactions first.

---

# Double Buffering

Fiber maintains two trees:

| Tree                  | Purpose                |
| --------------------- | ---------------------- |
| Current Tree          | Currently displayed UI |
| Work-in-Progress Tree | New UI being prepared  |

Once rendering finishes:

* Trees swap
* New UI becomes active

This improves rendering consistency.

---

# Fiber and Concurrent Rendering

Fiber is the foundation for:

* Concurrent Rendering
* `startTransition`
* Suspense
* Streaming SSR

It allows React to:

* Interrupt rendering
* Resume later
* Prioritize updates intelligently

---

# Simplified React Fiber Flow

```text id="p2m7qa"
State Update
   ↓
Create Work-in-Progress Fiber Tree
   ↓
Render Phase (interruptible)
   ↓
Calculate Changes
   ↓
Commit Phase (synchronous)
   ↓
Update DOM
```

---

# Benefits of React Fiber

* Better responsiveness
* Smoother UI updates
* Interruptible rendering
* Priority scheduling
* Improved animations
* Concurrent rendering support
* Better user experience

React Fiber is one of the most important architectural improvements in modern React and powers many advanced React 18 features.

**[⬆ Back to Top](#table-of-contents)**

310. ### What is the `useId` Hook and when should you use it?

In React, `useId` is a Hook used to generate unique IDs that remain stable across:

* Server rendering
* Client rendering
* Hydration

It is mainly designed for accessibility and SSR-safe ID generation.

---

### Why `useId` Is Useful

It helps connect related HTML elements such as:

* Labels and inputs
* Descriptions and form controls
* Accessibility (`aria-*`) attributes

without causing ID mismatches during hydration.

---

### Example

```jsx id="m4x8pk"
import { useId } from "react";

function Form() {
  const id = useId();

  return (
    <>
      <label htmlFor={id + "-input"}>
        Name
      </label>

      <input
        id={id + "-input"}
      />
    </>
  );
}
```

---

### Common Use Cases

#### Accessibility Attributes

```jsx id="q7n2vx"
<input
  aria-describedby={id}
/>

<p id={id}>
  Enter your full name
</p>
```

#### Form Field Associations

* `htmlFor`
* `id`
* `aria-labelledby`
* `aria-describedby`

---

### Why Not Use Random IDs?

Using:

```javascript id="k5m1qa"
Math.random()
```

or timestamps can cause:

* Hydration mismatches
* Different server/client IDs
* React warnings in SSR apps

`useId` guarantees consistent IDs across environments.

---

### Important Notes

* `useId` is not meant for:

  * List keys
  * Database IDs
  * Persistent identifiers

* It is specifically designed for:

  * Accessibility
  * SSR-safe unique DOM IDs

`useId` is especially useful in applications built with Next.js or other SSR frameworks.


**[⬆ Back to Top](#table-of-contents)**

311. ### What is the `useDeferredValue` Hook?

In React, `useDeferredValue` is a Hook that lets you defer updating a non-urgent value to keep the UI responsive during expensive renders.

It returns a deferred version of a value that may temporarily “lag behind” the latest value.

---

### Why Is It Useful?

Sometimes updating the UI is expensive, such as:

* Filtering large lists
* Rendering huge tables
* Heavy search results
* Complex calculations

Without deferring:

* Typing or interactions may feel slow

`useDeferredValue` allows urgent updates (like typing) to happen immediately while delaying expensive UI updates.

---

### Example

```jsx id="m4x8pk"
const deferredValue =
  useDeferredValue(userInput);
```

---

### Complete Example

```jsx id="q7n2vx"
function Search({ query }) {
  const deferredQuery =
    useDeferredValue(query);

  const results =
    searchLargeList(deferredQuery);

  return (
    <ul>
      {results.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

---

### How It Works

```text id="k5m1qa"
User types quickly
   ↓
Input updates immediately
   ↓
Heavy rendering is delayed
   ↓
UI stays responsive
```

The deferred value updates later when React has time.

---

### Common Use Cases

* Search filtering
* Large lists
* Expensive rendering
* Data-heavy dashboards
* Auto-complete UIs

---

### Difference Between `useDeferredValue` and Debouncing

| Feature           | `useDeferredValue`   | Debouncing              |
| ----------------- | -------------------- | ----------------------- |
| Delay Type        | React scheduling     | Time-based delay        |
| UI Responsiveness | Keeps UI interactive | Delays updates entirely |
| Built Into React  | Yes                  | No                      |

---

### Important Note

`useDeferredValue` does not prevent renders.
It simply lowers the priority of updating non-urgent UI sections using React’s concurrent rendering system.


**[⬆ Back to Top](#table-of-contents)**

312. ### What is the `useTransition` Hook and how is it different from `useDeferredValue`?

In React, both `useTransition` and `useDeferredValue` are concurrent rendering Hooks used to improve UI responsiveness, but they solve different problems.

| Hook               | Purpose                              | Best For              |
| ------------------ | ------------------------------------ | --------------------- |
| `useTransition`    | Marks state updates as non-urgent    | Actions/state updates |
| `useDeferredValue` | Defers rendering of a changing value | Props/data values     |

---

# `useTransition`

`useTransition` allows you to mark certain state updates as low-priority transitions.

### Syntax

```jsx id="m4x8pk"
const [isPending, startTransition] =
  useTransition();
```

### Example

```jsx id="q7n2vx"
startTransition(() => {
  setShowList(true);
});
```

### Features

* Marks updates as non-urgent
* Keeps urgent interactions responsive
* Provides an `isPending` loading indicator

### Common Use Cases

* Tab switching
* Large list rendering
* Route navigation
* Expensive UI updates

---

# `useDeferredValue`

`useDeferredValue` defers updating a value.

### Syntax

```jsx id="k5m1qa"
const deferredValue =
  useDeferredValue(value);
```

### Example

```jsx id="x3n8pm"
const deferredSearch =
  useDeferredValue(searchText);
```

### Features

* Delays rendering caused by changing values
* Useful when receiving props or external data
* No manual transition wrapping needed

### Common Use Cases

* Search filtering
* Expensive derived data
* Large tables/lists

---

# Main Difference

## `useTransition`

Used for:

```text id="p2m7qa"
Actions / state updates
```

You explicitly tell React:

> “This update is non-urgent.”

---

## `useDeferredValue`

Used for:

```text id="a7m2pk"
Values / props / data
```

You tell React:

> “This value can lag behind slightly.”

---

# Example Comparison

### `useTransition`

```jsx id="b4x9qa"
startTransition(() => {
  setResults(newResults);
});
```

### `useDeferredValue`

```jsx id="c8n3pm"
const deferredResults =
  useDeferredValue(results);
```

---

# Simple Mental Model

| Hook               | Think Of It As   |
| ------------------ | ---------------- |
| `useTransition`    | Defer the update |
| `useDeferredValue` | Defer the value  |

Both Hooks are built on React Fiber’s concurrent rendering system and help create smoother, more responsive applications.

**[⬆ Back to Top](#table-of-contents)**

313. ### What is the `useSyncExternalStore` Hook?

In React, `useSyncExternalStore` is a Hook designed for safely subscribing to external stores and data sources in a way that works correctly with Concurrent Rendering.

It helps React read external state consistently and prevents issues like **tearing** (UI showing inconsistent state during concurrent updates).

---

# Why Was It Introduced?

React state inside components is managed by React itself.

But some state exists outside React, such as:

* Redux stores
* Zustand stores
* Browser APIs
* Custom event emitters
* External data caches

React needed a standard way to safely subscribe to these external sources in Concurrent Rendering mode.

---

# Basic Syntax

```jsx id="m4x8pk"
const value =
  useSyncExternalStore(
    subscribe,
    getSnapshot
  );
```

---

# Parameters

| Parameter     | Purpose                                |
| ------------- | -------------------------------------- |
| `subscribe`   | Registers a listener for store changes |
| `getSnapshot` | Returns the current store value        |

---

# Example

```jsx id="q7n2vx"
import {
  useSyncExternalStore
} from "react";

function subscribe(callback) {
  window.addEventListener(
    "online",
    callback
  );

  window.addEventListener(
    "offline",
    callback
  );

  return () => {
    window.removeEventListener(
      "online",
      callback
    );

    window.removeEventListener(
      "offline",
      callback
    );
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function OnlineStatus() {
  const isOnline =
    useSyncExternalStore(
      subscribe,
      getSnapshot
    );

  return (
    <h1>
      {isOnline
        ? "Online"
        : "Offline"}
    </h1>
  );
}
```

---

# What Problem Does It Solve?

## Prevents Tearing

Without proper synchronization:

* Different parts of the UI could read different versions of external state during concurrent rendering

This inconsistency is called:

```text id="k5m1qa"
Tearing
```

`useSyncExternalStore` ensures React always reads a consistent snapshot.

---

# Common Use Cases

* Redux store subscriptions
* Zustand stores
* Browser APIs
* WebSocket state
* External caches
* Real-time data systems

---

# Why Not Just Use `useEffect`?

Using `useEffect` subscriptions manually may not work correctly with:

* Concurrent Rendering
* Suspense
* Interruptible rendering

`useSyncExternalStore` is specifically designed to be React-concurrent-safe.

---

# Important Note

Most developers use this Hook indirectly through libraries like:

* Redux Toolkit
* Zustand
* Jotai

Library authors commonly use it internally to integrate with React safely.


**[⬆ Back to Top](#table-of-contents)**

314. ### What is the `useInsertionEffect` Hook?

In React, `useInsertionEffect` is a specialized Hook introduced for CSS-in-JS library authors.

It runs synchronously:

* After DOM mutations
* But before layout effects (`useLayoutEffect`)

Its primary purpose is to inject styles into the DOM before layout calculations occur.

---

# Why Does `useInsertionEffect` Exist?

CSS-in-JS libraries (such as styled-components or Emotion) often need to:

* Dynamically generate CSS
* Insert `<style>` tags into the document

If styles are inserted too late:

* Layout calculations may be incorrect
* Visual flickering can occur

`useInsertionEffect` ensures styles are injected before layout effects and browser paint.

---

# Execution Order

```text id="m4x8pk"
DOM Updates
   ↓
useInsertionEffect
   ↓
useLayoutEffect
   ↓
Browser Paint
   ↓
useEffect
```

---

# Example

```jsx id="q7n2vx"
useInsertionEffect(() => {
  // Inject styles synchronously
}, []);
```

---

# Main Use Case

* CSS-in-JS style injection

Examples:

* Dynamic theme styles
* Runtime-generated CSS
* Style sheet management

---

# Important Warning

`useInsertionEffect` is **not intended for regular application logic**.

You should generally avoid using it for:

* Data fetching
* DOM measurements
* State updates
* Event listeners

For normal side effects:

* Use `useEffect`
* Or `useLayoutEffect`

---

# Why It Should Be Used Carefully

Because it runs synchronously before layout effects:

* It can block rendering
* Hurt performance if misused

It is a low-level optimization Hook primarily meant for library authors.

---

# Typical Users of `useInsertionEffect`

Most React developers never need this Hook directly.

It is mainly used internally by:

* CSS-in-JS libraries
* Styling frameworks
* Design system tooling

Examples include:

* Emotion
* Styled Components
* Other runtime styling libraries


**[⬆ Back to Top](#table-of-contents)**

315. ### How do you share state logic between components using Custom Hooks?

In React, Custom Hooks allow you to extract and reuse stateful logic across multiple components.

Instead of duplicating logic, you move it into a reusable Hook function.

---

# Important Concept

Custom Hooks share:

* Logic

but **not state itself**.

Each component that calls the Hook gets its own independent state instance.

---

# Example Custom Hook

```jsx id="m4x8pk"
import { useState } from "react";

function useCounter() {
  const [count, setCount] =
    useState(0);

  const increment = () => {
    setCount(c => c + 1);
  };

  return {
    count,
    increment
  };
}
```

---

# Using the Hook in Multiple Components

```jsx id="q7n2vx"
function ComponentA() {
  const { count, increment } =
    useCounter();

  return (
    <button onClick={increment}>
      A: {count}
    </button>
  );
}

function ComponentB() {
  const { count, increment } =
    useCounter();

  return (
    <button onClick={increment}>
      B: {count}
    </button>
  );
}
```

---

# What Happens?

```text id="k5m1qa"
ComponentA → Own count state
ComponentB → Own count state
```

Both components:

* Reuse the same logic
* But maintain completely separate state

Updating one does not affect the other.

---

# Benefits of Custom Hooks

* Reusable state logic
* Cleaner components
* Better code organization
* Easier testing
* Reduced duplication

---

# Common Custom Hook Use Cases

* Data fetching
* Form handling
* Authentication
* Window resize tracking
* Local storage synchronization
* Timers
* Media queries

Custom Hooks are one of the most powerful patterns for organizing reusable logic in React applications.


**[⬆ Back to Top](#table-of-contents)**

316. ### What is the `useDebugValue` Hook?

In React, `useDebugValue` is a Hook used to display custom debug information for Custom Hooks inside React DevTools.

It helps developers inspect and understand the internal state of custom Hooks more easily during development.

---

# Why Use `useDebugValue`?

Without `useDebugValue`, a custom Hook may appear in React DevTools without meaningful information.

`useDebugValue` allows you to show descriptive labels such as:

* `"Online"`
* `"Loading"`
* `"Authenticated"`

---

# Example

```jsx id="m4x8pk"
useDebugValue(
  isOnline
    ? "Online"
    : "Offline"
);
```

---

# Complete Example

```jsx id="q7n2vx"
import {
  useState,
  useEffect,
  useDebugValue
} from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] =
    useState(navigator.onLine);

  useDebugValue(
    isOnline
      ? "Online"
      : "Offline"
  );

  return isOnline;
}
```

---

# How It Appears in React DevTools

```text id="k5m1qa"
useOnlineStatus
  Online
```

This makes debugging custom Hooks much easier.

---

# Important Notes

* `useDebugValue` is only for development/debugging
* It has no effect in production builds
* Primarily useful for reusable custom Hooks

---

# Common Use Cases

* Authentication Hooks
* Network status Hooks
* Form Hooks
* Data fetching Hooks
* Custom state management Hooks

Most application components do not need `useDebugValue`, but it is very useful when building reusable Hook libraries or debugging complex Hooks.


**[⬆ Back to Top](#table-of-contents)**

317. ### How do you handle cleanup in `useEffect`?

In React, cleanup inside `useEffect` is handled by returning a function from the effect callback.

React automatically runs this cleanup function:

* Before the effect runs again
* When the component unmounts

---

# Basic Syntax

```jsx id="m4x8pk"
useEffect(() => {
  // Setup logic

  return () => {
    // Cleanup logic
  };
}, []);
```

---

# Example

```jsx id="q7n2vx"
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

# Why Cleanup Is Important

Cleanup prevents:

* Memory leaks
* Duplicate subscriptions
* Unused timers
* Stale event listeners

---

# Common Cleanup Use Cases

## 1. Clearing Timers

```jsx id="k5m1qa"
return () => clearInterval(timer);
```

---

## 2. Removing Event Listeners

```jsx id="x3n8pm"
useEffect(() => {
  window.addEventListener(
    "resize",
    handleResize
  );

  return () => {
    window.removeEventListener(
      "resize",
      handleResize
    );
  };
}, []);
```

---

## 3. Unsubscribing from Subscriptions

```jsx id="p2m7qa"
return () => subscription.unsubscribe();
```

---

# Execution Flow

```text id="a7m2pk"
Mount
  ↓
Effect setup runs
  ↓
Dependency changes
  ↓
Cleanup runs
  ↓
Effect setup runs again
  ↓
Unmount
  ↓
Final cleanup runs
```

Proper cleanup is essential for maintaining performant and bug-free React applications.


**[⬆ Back to Top](#table-of-contents)**

318. # What are the differences between `useEffect` and `useEvent` (experimental)?

In React, `useEffect` and `useEvent` solve different problems.

| Feature                       | `useEffect`                      | `useEvent` (Experimental)    |
| ----------------------------- | -------------------------------- | ---------------------------- |
| Purpose                       | Handle side effects              | Create stable event handlers |
| Re-runs on dependency changes | Yes                              | No                           |
| Function identity             | Changes when dependencies change | Stable across renders        |
| Access to latest state/props  | Through dependency array         | Automatically available      |
| Dependency array required     | Yes                              | No                           |
| Typical Use                   | Fetching, subscriptions, timers  | Event callbacks              |

---

# `useEffect`

`useEffect` is used for:

* Data fetching
* Subscriptions
* Timers
* DOM side effects

### Example

```jsx id="m4x8pk"
useEffect(() => {
  console.log(count);
}, [count]);
```

### Characteristics

* Re-runs whenever dependencies change
* Requires dependency management
* Effect callback identity changes across renders

---

# `useEvent` (Experimental)

`useEvent` is designed for event handlers that:

* Need stable identity
* Should always access latest state/props
* Should not re-create functions every render

### Example

```jsx id="q7n2vx"
const onClick = useEvent(() => {
  console.log(count);
});
```

### Characteristics

* Stable function reference
* No dependency array needed
* Always reads latest values

---

# The Main Problem `useEvent` Solves

With normal callbacks:

```jsx id="k5m1qa"
const handleClick = useCallback(() => {
  console.log(count);
}, [count]);
```

Problems:

* Function changes whenever `count` changes
* Can trigger unnecessary re-renders
* Requires dependency arrays

`useEvent` avoids this entirely.

---

# Mental Model

## `useEffect`

```text id="x3n8pm"
"Run side effects when dependencies change"
```

## `useEvent`

```text id="p2m7qa"
"Create stable event handlers with fresh state"
```

---

# Common `useEvent` Use Cases

* Event handlers
* Window listeners
* Timers
* Subscription callbacks
* Avoiding stale closures

---

# Important Note

`useEvent` is still experimental and not part of the stable React API yet.

Most current React applications still use:

* `useCallback`
* `useRef`
* `useEffect`

to solve similar problems today.


**[⬆ Back to Top](#table-of-contents)**

319. ### What are the best practices for using React Hooks?

In React, following Hook best practices helps create predictable, maintainable, and performant applications.

---

# 1. Call Hooks at the Top Level

Always call Hooks:

* At the top level of components
* In the same order on every render

Never call Hooks inside:

* Loops
* Conditions
* Nested functions

### Correct

```jsx id="m4x8pk"
function App() {
  const [count, setCount] =
    useState(0);
}
```

### Incorrect

```jsx id="q7n2vx"
if (show) {
  useEffect(() => {});
}
```

---

# 2. Use the ESLint Hooks Plugin

Use:

```text id="k5m1qa"
eslint-plugin-react-hooks
```

It helps detect:

* Missing dependencies
* Invalid Hook usage
* Rule violations

This prevents many subtle bugs.

---

# 3. Keep Effects Focused

Instead of one large effect:

```jsx id="x3n8pm"
useEffect(() => {
  fetchData();
  setupListener();
  updateTitle();
}, []);
```

prefer separating concerns:

```jsx id="p2m7qa"
useEffect(() => {
  fetchData();
}, []);

useEffect(() => {
  setupListener();
}, []);
```

Benefits:

* Cleaner logic
* Easier debugging
* Better maintainability

---

# 4. Extract Reusable Logic into Custom Hooks

If logic is reused across components:

* Move it into a custom Hook

### Example

```jsx id="a7m2pk"
function useFetch(url) {
  // reusable logic
}
```

Benefits:

* Less duplication
* Better organization
* Easier testing

---

# 5. Audit Dependency Arrays Carefully

Every reactive value used inside an effect should usually appear in the dependency array.

### Example

```jsx id="b4x9qa"
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

Incorrect dependencies can cause:

* Infinite loops
* Stale values
* Missed updates

---

# Additional Best Practices

## Prefer `useEffect` Over `useLayoutEffect`

Use `useLayoutEffect` only when synchronous layout work is necessary.

---

## Avoid Premature Optimization

Only use:

* `useMemo`
* `useCallback`

when performance problems actually exist.

---

## Keep State Minimal

Store only necessary state and derive values when possible.

---

## Avoid Mutating State

Treat state as immutable:

```jsx id="c8n3pm"
setItems([...items, newItem]);
```

instead of:

```jsx id="d5x7qa"
items.push(newItem); // ❌
```

---

# Summary

Good Hook practices improve:

* Performance
* Readability
* Predictability
* Scalability
* Debugging experience

Hooks are most effective when components remain:

* Pure
* Focused
* Declarative
* Reusable


**[⬆ Back to Top](#table-of-contents)**

     #### 2. **Use the ESLint Plugin**
     ```bash
     npm install eslint-plugin-react-hooks --save-dev
     ```
     ```json
     {
       "plugins": ["react-hooks"],
       "rules": {
         "react-hooks/rules-of-hooks": "error",
         "react-hooks/exhaustive-deps": "warn"
       }
     }
     ```

     #### 3. **Keep Hooks Focused and Simple**
     ```jsx
     // ❌ Bad: One hook doing too much
     function useEverything() {
       const [user, setUser] = useState(null);
       const [posts, setPosts] = useState([]);
       const [theme, setTheme] = useState('light');
       // ... lots of unrelated logic
     }

     // ✅ Good: Separate concerns
     function useUser() { /* user logic */ }
     function usePosts() { /* posts logic */ }
     function useTheme() { /* theme logic */ }
     ```

     #### 4. **Use Descriptive Names for Custom Hooks**
     ```jsx
     // ❌ Bad
     function useData() { }

     // ✅ Good
     function useUserAuthentication() { }
     function useFetchProducts() { }
     function useFormValidation() { }
     ```

     #### 5. **Properly Manage Dependencies**
     ```jsx
     // ❌ Bad: Missing dependency
     useEffect(() => {
       fetchUser(userId);
     }, []); // userId is missing

     // ✅ Good: All dependencies listed
     useEffect(() => {
       fetchUser(userId);
     }, [userId]);
     ```

     #### 6. **Avoid Inline Object/Function Dependencies**
     ```jsx
     // ❌ Bad: New object on every render
     useEffect(() => {
       doSomething(options);
     }, [{ page: 1, limit: 10 }]); // Always different reference

     // ✅ Good: Memoize or extract
     const options = useMemo(() => ({ page: 1, limit: 10 }), []);
     useEffect(() => {
       doSomething(options);
     }, [options]);
     ```

     #### 7. **Clean Up Side Effects**
     Always return a cleanup function when subscribing to events, timers, or external data sources.

**[⬆ Back to Top](#table-of-contents)**

## Old Q&A

1.  ### Why should we not update the state directly?

If you try to update the state directly, React will not be aware of the change and will not trigger a re-render. State updates in React are designed to be "reactive," meaning the UI should stay in sync with the data.

**Class Components:**
```javascript
// ❌ Wrong: Won't trigger a re-render
this.state.message = "Hello world";

// ✅ Correct: Triggers a re-render
this.setState({ message: "Hello World" });
```

**Functional Components:**
```javascript
const [message, setMessage] = useState("Hello");

// ❌ Wrong: Won't trigger a re-render
message = "Hello World"; 

// ✅ Correct: Triggers a re-render
setMessage("Hello World");
```

**[⬆ Back to Top](#table-of-contents)**

2.  ### What is the purpose of callback function as an argument of `setState()`?

The callback function is executed once `setState()` is completed and the component is re-rendered. Since `setState()` is **asynchronous**, you cannot rely on the state being updated immediately after calling it. The callback ensures you are working with the latest state.

**Example (Class Component):**
```javascript
this.setState({ counter: this.state.counter + 1 }, () => {
  console.log("State updated and component re-rendered!", this.state.counter);
});
```

**Functional Equivalent:**
In functional components, you use the `useEffect` hook to perform actions after a state change.
```javascript
useEffect(() => {
  console.log("Counter changed!", count);
}, [count]); // Runs whenever 'count' updates
```

**[⬆ Back to Top](#table-of-contents)**

3.  ### How to bind methods or event handlers in JSX callbacks?

In Class Components, methods are not bound to the class instance by default. There are three common ways to handle this:

1.  **Binding in Constructor:**
    ```javascript
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    ```
2.  **Public Class Fields (Arrow Functions):** This is the most common approach in classes.
    ```javascript
    handleClick = () => {
      console.log("Button clicked", this);
    }
    ```
3.  **Arrow Function in Callback:**
    ```jsx
    <button onClick={() => this.handleClick()}>Click Me</button>
    ```

**Note:** In **Functional Components**, you don't need to worry about binding because you don't use `this`.

**[⬆ Back to Top](#table-of-contents)**

4.  ### How to pass a parameter to an event handler or callback?

You can pass parameters using an arrow function or by using `.bind()`.

**Using Arrow Function:**
```jsx
<button onClick={() => this.handleClick(id)}>Click Me</button>
```

**Using `.bind()`:**
```jsx
<button onClick={this.handleClick.bind(this, id)}>Click Me</button>
```

**Using Currying (Function returning a function):**
```javascript
const handleClick = (id) => (event) => {
  console.log("Deleting item:", id);
};

<button onClick={handleClick(id)}>Delete</button>
```

**[⬆ Back to Top](#table-of-contents)**

5.  ### What is the use of refs?

**Refs** (References) provide a way to access DOM nodes or React elements created in the render method. They are used when you need to interact with the underlying DOM directly.

**Common use cases:**
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

**Example (Focusing an input):**
```jsx
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

6.  ### How to create refs?

There are different ways to create refs depending on the type of component:

1.  **Using `useRef` Hook (Functional Components):** This is the modern way.
    ```jsx
    const myRef = useRef(null);
    <div ref={myRef} />;
    ```
2.  **Using `React.createRef()` (Class Components):**
    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
      render() {
        return <div ref={this.myRef} />;
      }
    }
    ```
3.  **Callback Refs:** Instead of passing a ref object, you pass a function.
    ```jsx
    <div ref={element => this.myElement = element} />
    ```

**[⬆ Back to Top](#table-of-contents)**

7.  ### What are forward refs?

**Ref forwarding** is a technique for automatically passing a **ref** through a component to one of its children. This is useful for reusable component libraries where you want the parent to be able to access the underlying DOM node of a child component.

**Example:**
```jsx
const MyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="btn">
    {props.children}
  </button>
));

// Usage:
const ref = useRef();
<MyButton ref={ref}>Click Me!</MyButton>;
```

**[⬆ Back to Top](#table-of-contents)**

8. ### Which is preferred option with in callback refs and findDOMNode()?

It is preferred to use _callback refs_ over `findDOMNode()` API. Because `findDOMNode()` prevents certain improvements in React in the future.

The **legacy** approach of using `findDOMNode`:

```javascript
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />;
  }
}
```

The recommended approach is:

```javascript
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }

  render() {
    return <div ref={this.node} />;
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

9. ### Why are String Refs legacy?

If you worked with React before, you might be familiar with an older API where the `ref` attribute is a string, like `ref={'textInput'}`, and the DOM node is accessed as `this.refs.textInput`. We advise against it because _string refs have below issues_, and are considered legacy. String refs were **removed in React v16**.

1. They _force React to keep track of currently executing component_. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
2. They are _not composable_ — if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.
3. They _don't work with static analysis_ like Flow. Flow can't guess the magic that framework does to make the string ref appear on `this.refs`, as well as its type (which could be different). Callback refs are friendlier to static analysis.
4. It doesn't work as most people would expect with the "render callback" pattern (e.g. <DataGrid renderRow={this.renderRow} />)

```jsx harmony
class MyComponent extends Component {
  renderRow = (index) => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    return <input ref={"input-" + index} />;

    // This would work though! Callback refs are awesome.
    return <input ref={(input) => (this["input-" + index] = input)} />;
  };

  render() {
    return (
      <DataTable data={this.props.data} renderRow={this.renderRow} />
    );
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

10. ### What are the different phases of component lifecycle?

The React component lifecycle consists of three main phases:

1.  **Mounting:** When the component is being created and inserted into the DOM.
    - `constructor()`, `render()`, `componentDidMount()`.
2.  **Updating:** When the component is being re-rendered due to changes in props or state.
    - `render()`, `componentDidUpdate()`, `shouldComponentUpdate()`.
3.  **Unmounting:** When the component is being removed from the DOM.
    - `componentWillUnmount()`.

**Modern Equivalent (Functional Components with Hooks):**
In functional components, most lifecycle logic is handled by the `useEffect` hook.

```javascript
useEffect(() => {
  // 1. Logic here runs on Mounting (and every update)
  console.log("Component mounted or updated");

  return () => {
    // 2. Logic here runs on Unmounting (cleanup)
    console.log("Component will unmount");
  };
}, []); // Empty array means it only runs on mount/unmount
```

**[⬆ Back to Top](#table-of-contents)**

11. ### What are the lifecycle methods of React?

React component lifecycle is divided into three main phases:

1.  **Mounting**: `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`.
2.  **Updating**: `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`.
3.  **Unmounting**: `componentWillUnmount()`.

**Modern Equivalent (Functional Components):**
In modern React, most lifecycle logic is handled by the `useEffect` hook.

| Lifecycle Method | `useEffect` equivalent |
| :--- | :--- |
| `componentDidMount` | `useEffect(() => { ... }, [])` |
| `componentDidUpdate` | `useEffect(() => { ... }, [deps])` |
| `componentWillUnmount` | `useEffect(() => { return () => { ... } }, [])` |

**Example:**

```jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Mounted');
    
    return () => {
      console.log('Unmounted');
    };
  }, []);

  return <div>Hello World</div>;
}
```

**[⬆ Back to Top](#table-of-contents)**

12. ### How to create props proxy for HOC component?

A **Props Proxy** allows you to manipulate the props being passed to a component by wrapping it in another component. This is a common pattern in Higher-Order Components (HOCs).

**Example:**

```jsx
function withLogging(WrappedComponent) {
  return function (props) {
    // Manipulate or add new props
    const enhancedProps = {
      ...props,
      timestamp: new Date().toLocaleTimeString(),
    };

    return <WrappedComponent {...enhancedProps} />;
  };
}
```

**[⬆ Back to Top](#table-of-contents)**

13. ### What is context?

**Context** provides a way to pass data through the component tree without having to pass props down manually at every level (avoiding "prop drilling").

**Example (Modern API):**

```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}
```

**[⬆ Back to Top](#table-of-contents)**

14. ### What is the purpose of using super constructor with props argument?

In Class Components, calling `super(props)` in the constructor is necessary if you want to access `this.props` within that constructor. If you don't pass `props` to `super()`, `this.props` will be `undefined` inside the constructor (though it will still be available in other methods like `render`).

**Example:**

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Ensures this.props is initialized
    console.log(this.props); // Works!
  }
}
```

**Note:** With the introduction of **Hooks** and **Class Fields**, constructors are rarely needed in modern React.

**[⬆ Back to Top](#table-of-contents)**

15. ### How to set state with a dynamic key name?

You can use ES6 **computed property names** (brackets `[]` around the key) to dynamically update state based on a variable.

**Example:**

```javascript
const handleInputChange = (event) => {
  const { name, value } = event.target;
  
  // Update state dynamically using the input's name
  this.setState({ 
    [name]: value 
  });
};
```

**[⬆ Back to Top](#table-of-contents)**

16. ### What would be the common mistake of function being called every time the component renders?

A common mistake is **invoking** the function inside the event handler attribute (e.g., `onClick={handleClick()}`) instead of passing a **reference** to the function (e.g., `onClick={handleClick}`).

**Wrong (Invokes on every render):**
```jsx
<button onClick={this.handleClick()}>Click Me</button>
```

**Correct (Passes reference):**
```jsx
<button onClick={this.handleClick}>Click Me</button>
```

**[⬆ Back to Top](#table-of-contents)**

17. ### What are error boundaries in React v16?

**Error Boundaries** are special components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.

**Example:**

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state to show fallback UI
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Usage:**
```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

**[⬆ Back to Top](#table-of-contents)**

18. ### How are error boundaries handled in React v15?

In React v15 and earlier, there was no formal concept of "Error Boundaries." If a component crashed during rendering, the entire application would unmount. Developers had to use basic `try-catch` blocks or undocumented methods like `unstable_handleError`.

**[⬆ Back to Top](#table-of-contents)**

19. ### What is the purpose of render method of `react-dom`?

In React 17 and earlier, `ReactDOM.render()` was used to mount a React component into a DOM element. In **React 18**, this has been replaced by `createRoot()`.

**Example (React 18+):**
```jsx
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

**Example (Legacy React 17):**
```jsx
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));
```

**[⬆ Back to Top](#table-of-contents)**

20. ### What will happen if you use `setState()` in constructor?

You should **never** call `setState()` in the constructor. Instead, you should initialize your state directly by assigning an object to `this.state`.

**Wrong:**
```javascript
constructor(props) {
  super(props);
  this.setState({ count: 0 }); // ❌ Triggers unnecessary re-render/error
}
```

**Correct:**
```javascript
constructor(props) {
  super(props);
  this.state = { count: 0 }; // ✅ Correct initialization
}
```

**[⬆ Back to Top](#table-of-contents)**

21. ### Is it good to use `setState()` in `componentWillMount()` method?

No, it is **not recommended** to use `setState()` in `componentWillMount()`. This lifecycle method is deprecated (and renamed to `UNSAFE_componentWillMount`).

- For initialization, you should use the **`constructor()`** or **class fields**.
- For side effects or asynchronous data fetching, you should use **`componentDidMount()`**.

**Example (Correct Way):**
```javascript
class MyComponent extends React.Component {
  state = { messages: [] }; // Initial state

  componentDidMount() {
    // Fetch data here
    fetch('/api/messages').then(res => res.json()).then(data => {
      this.setState({ messages: data });
    });
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

22. ### What will happen if you use props in initial state?

Initializing state from props is generally considered an **anti-pattern** (often called "Derived State"). The main issue is that if the props change later, the state will **not** automatically update because the constructor only runs once during initialization.

**Wrong (State won't update when prop changes):**
```javascript
constructor(props) {
  super(props);
  this.state = { name: props.name };
}
```

**Correct (Use props directly):**
```jsx
render() {
  return <div>{this.props.name}</div>;
}
```

**[⬆ Back to Top](#table-of-contents)**

23. ### How you use decorators in React?

**Decorators** are a legacy proposal (Stage 2) that allowed you to wrap a class or method with a function to modify its behavior. In React, they were commonly used with libraries like MobX or Redux's `connect`.

**Example:**
```javascript
@withLogging
class MyComponent extends React.Component { ... }
```

**Note:** Decorators are not standard JavaScript yet and require Babel configuration. In modern React, **Higher-Order Components** or **Hooks** are preferred.

**[⬆ Back to Top](#table-of-contents)**

24. ### What is CRA and its benefits?

**Create React App (CRA)** was the standard CLI tool for bootstrapping React projects with zero configuration. It pre-configured Webpack, Babel, and Jest.

**Benefits:**
- Zero-config setup.
- Built-in development server and build scripts.
- Integrated testing with Jest.

**Note:** As of 2024, the React team recommends using modern alternatives like **Vite** or frameworks like **Next.js** for new projects, as CRA is no longer actively maintained.

**[⬆ Back to Top](#table-of-contents)**

25. ### What is the lifecycle methods order in mounting?

The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.

1. `constructor()`
2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

**[⬆ Back to Top](#table-of-contents)**

26. ### What are the lifecycle methods going to be deprecated in React v16?

The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.

1. `componentWillMount()`
2. `componentWillReceiveProps()`
3. `componentWillUpdate()`

Starting with React v16.3 these methods are aliased with `UNSAFE_` prefix, and the unprefixed version will be removed in React v17.

**[⬆ Back to Top](#table-of-contents)**

27. ### What is the purpose of `getDerivedStateFromProps()` lifecycle method?

`static getDerivedStateFromProps()` is a static method invoked right before rendering, both on the initial mount and on subsequent updates. It should return an object to update the state, or `null` to update nothing.

**Example:**
```javascript
static getDerivedStateFromProps(props, state) {
  if (props.id !== state.prevId) {
    return {
      prevId: props.id,
      email: props.defaultEmail
    };
  }
  return null;
}
```

**[⬆ Back to Top](#table-of-contents)**

28. ### What is the purpose of `getSnapshotBeforeUpdate()` lifecycle method?

`getSnapshotBeforeUpdate()` is called right before the changes from the Virtual DOM are committed to the Real DOM. It allows the component to capture some information from the DOM (e.g., scroll position) before it is potentially changed.

**Example:**
```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  // Capture scroll position
  return listRef.current.scrollHeight - listRef.current.scrollTop;
}

componentDidUpdate(prevProps, prevState, snapshot) {
  // Use snapshot to restore scroll
  if (snapshot !== null) {
    listRef.current.scrollTop = listRef.current.scrollHeight - snapshot;
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

29. ### What is the recommended way for naming components?

It is recommended to use **PascalCase** for component names and their filenames (e.g., `MyComponent.js`). This helps React distinguish between custom components and built-in HTML tags (which use lowercase).

**Correct:**
```jsx
function MyComponent() { ... }
<MyComponent />
```

**Incorrect:**
```jsx
function myComponent() { ... }
<myComponent /> // React will think this is a custom HTML tag
```

**[⬆ Back to Top](#table-of-contents)**

30. ### What is the recommended ordering of methods in component class?

The recommended order for class component methods is:

1.  **Static methods and properties**
2.  **Constructor**
3.  **Lifecycle methods** (in order: `getDerivedStateFromProps`, `componentDidMount`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate`, `componentDidUpdate`, `componentWillUnmount`)
4.  **Event handlers** (e.g., `handleClick`)
5.  **Render method**

**[⬆ Back to Top](#table-of-contents)**

31. ### Why we need to pass a function to setState()?

Because `setState()` is asynchronous and batched, relying on `this.state` for the next state can lead to race conditions. Passing a function (an "updater") ensures you are working with the most up-to-date state.

**Wrong (May fail if batched):**
```javascript
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 }); // Still uses old count
```

**Correct (Always works):**
```javascript
this.setState((prevState) => ({ count: prevState.count + 1 }));
this.setState((prevState) => ({ count: prevState.count + 1 })); // Uses updated count
```

**[⬆ Back to Top](#table-of-contents)**

32. ### Why is `isMounted()` an anti-pattern and what is the proper solution?

`isMounted()` is considered an anti-pattern because it often indicates that you aren't properly cleaning up asynchronous tasks (like fetches or timers). Setting state on an unmounted component leads to memory leaks and warnings.

**Modern Solution (Functional Cleanup):**
```javascript
useEffect(() => {
  let isMounted = true;
  fetchData().then(data => {
    if (isMounted) setState(data);
  });
  return () => { isMounted = false; }; // Cleanup
}, []);
```

**[⬆ Back to Top](#table-of-contents)**

33. ### What is the difference between constructor and getInitialState?

You should initialize state in the constructor when using ES6 classes, and `getInitialState()` method when using `React.createClass()`.

**Using ES6 classes:**

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
    };
  }
}
```

**Using `React.createClass()`:**

```javascript
const MyComponent = React.createClass({
  getInitialState() {
    return {
      /* initial state */
    };
  },
});
```

**Note:** `React.createClass()` is deprecated and removed in React v16. Use plain JavaScript classes instead.

**[⬆ Back to Top](#table-of-contents)**

34. ### Can you force a component to re-render without calling setState?

Yes, you can use **`this.forceUpdate()`** in class components. However, this should be avoided as it bypasses `shouldComponentUpdate()` and deviates from React's reactive flow.

**Example:**
```javascript
this.forceUpdate();
```

**Note:** In functional components, you can force a re-render by updating a dummy state variable:
```javascript
const [, forceUpdate] = useReducer(x => x + 1, 0);
```

**[⬆ Back to Top](#table-of-contents)**

35. ### What is the difference between `super()` and `super(props)` in React using ES6 classes?

When you want to access `this.props` in `constructor()` then you should pass props to `super()` method.

**Using `super(props)`:**

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // { name: 'John', ... }
  }
}
```

**Using `super()`:**

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super();
    console.log(this.props); // undefined
  }
}
```

Outside `constructor()` both will display same value for `this.props`.

**[⬆ Back to Top](#table-of-contents)**

36. ### What is the difference between `setState()` and `replaceState()` methods?

When you use `setState()` the current and previous states are merged. `replaceState()` throws out the current state, and replaces it with only what you provide. Usually `setState()` is used unless you really need to remove all previous keys for some reason. You can also set state to `false`/`null` in `setState()` instead of using `replaceState()`.

**[⬆ Back to Top](#table-of-contents)**

37. ### How to listen to state changes?

- **Class Components**: Use the **`componentDidUpdate`** lifecycle method.
- **Functional Components**: Use the **`useEffect`** hook with the state variable in the dependency array.

**Example (Functional):**
```javascript
useEffect(() => {
  console.log('State changed to:', count);
}, [count]); // Fires whenever 'count' changes
```

**[⬆ Back to Top](#table-of-contents)**

38. ### What is the recommended approach of removing an array element in React state?

The recommended way is to use **`Array.prototype.filter()`** to create a new array without the target element, maintaining immutability.

**Example (Functional):**
```javascript
const removeUser = (id) => {
  setUsers(users.filter(user => user.id !== id));
};
```

**[⬆ Back to Top](#table-of-contents)**

39. ### Is it possible to use React without rendering HTML?

Yes. React is a UI library that can render to many targets, not just the browser's DOM.

1.  **React Native**: Renders to native mobile UI components (iOS/Android).
2.  **React-Three-Fiber**: Renders to Three.js scenes (WebGL).
3.  **Ink**: Renders to the command line (CLI).
4.  **Remotion**: Renders to video frames.

**[⬆ Back to Top](#table-of-contents)**

40. ### What are the possible ways of updating objects in state?

1.  **Using Spread Operator (Recommended):**
    ```javascript
    const [user, setUser] = useState({ name: 'John', age: 30 });
    
    const updateAge = () => {
      setUser({ ...user, age: 31 });
    };
    ```

2.  **Using Functional Updates:**
    ```javascript
    setUser(prevUser => ({ ...prevUser, age: 31 }));
    ```

3.  **Using `Object.assign` (Legacy):**
    ```javascript
    const newUser = Object.assign({}, this.state.user, { age: 31 });
    this.setState({ user: newUser });
    ```

**[⬆ Back to Top](#table-of-contents)**

41. ### What are the approaches to include polyfills in your `create-react-app`?

There are approaches to include polyfills in create-react-app,

1.  **Manual import from `core-js`:**

    Create a file called (something like) `polyfills.js` and import it into root `index.js` file. Run `npm install core-js` or `yarn add core-js` and import your specific required features.

    ```javascript
    import "core-js/fn/array/find";
    import "core-js/fn/array/includes";
    import "core-js/fn/number/is-nan";
    ```

2.  **Using Polyfill service:**

    Use the polyfill.io CDN to retrieve custom, browser-specific polyfills by adding this line to `index.html`:

    ```html
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.includes"></script>
    ```

    In the above script we had to explicitly request the `Array.prototype.includes` feature as it is not included in the default feature set.

**[⬆ Back to Top](#table-of-contents)**

42. ### How to use https instead of http in create-react-app?

You just need to use `HTTPS=true` configuration. You can edit your `package.json` scripts section:

```json
"scripts": {
  "start": "set HTTPS=true && react-scripts start"
}
```

or just run `set HTTPS=true && npm start`

**[⬆ Back to Top](#table-of-contents)**

43. ### How to avoid using relative path imports in create-react-app?

Create a file called `.env` in the project root and write the import path:

```
NODE_PATH=src/app
```

After that restart the development server. Now you should be able to import anything inside `src/app` without relative paths.

**[⬆ Back to Top](#table-of-contents)**

44. ### How to update a component every second?

You need to use `setInterval()` to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

```javascript
componentDidMount() {
  this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
}

componentWillUnmount() {
  clearInterval(this.interval)
}
```

**[⬆ Back to Top](#table-of-contents)**

45. ### Why is a component constructor called only once?

React's _reconciliation_ algorithm assumes that without any information to the contrary, if a custom component appears in the same place on subsequent renders, it's the same component as before, so reuses the previous instance rather than creating a new one.

**[⬆ Back to Top](#table-of-contents)**

46. ### How to define constants in React?

You can use ES7 `static` field to define constant.

```javascript
class MyComponent extends React.Component {
  static DEFAULT_PAGINATION = 10;
}
```

**[⬆ Back to Top](#table-of-contents)**

47. ### How to programmatically trigger click event in React?

You could use the ref prop to acquire a reference to the underlying `HTMLInputElement` object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the `HTMLElement.click` method.

This can be done in two steps:

1.  Create ref in render method:

    ```jsx harmony
    <input ref={(input) => (this.inputElement = input)} />
    ```

2.  Apply click event in your event handler:

    ```javascript
    this.inputElement.click();
    ```

**[⬆ Back to Top](#table-of-contents)**

48. ### How to make AJAX call and in which component lifecycle methods should I make an AJAX call?

You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in `fetch`. You should fetch data in the `componentDidMount()` lifecycle method. This is so you can use `setState()` to update your component when the data is retrieved.

For example, the employees list fetched from API and set local state:

```jsx harmony
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result.employees,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, employees } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <ul>
          {employees.map((employee) => (
            <li key={employee.name}>
              {employee.name}-{employee.experience}
            </li>
          ))}
        </ul>
      );
    }
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

49. ### What are render props?

**Render Props** is a simple technique for sharing code between components using a prop whose value is a function. The below component uses render prop which returns a React element.

```jsx harmony
<DataProvider render={(data) => <h1>{`Hello ${data.target}`}</h1>} />
```

Libraries such as React Router and DownShift are using this pattern.

**[⬆ Back to Top](#table-of-contents)**

50. ### How to dispatch an action on load?

You can dispatch an action in `componentDidMount()` method and in `render()` method you can verify the data.

```javascript
class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return this.props.isLoaded ? (
      <div>{"Loaded"}</div>
    ) : (
      <div>{"Not Loaded"}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded,
});

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

**[⬆ Back to Top](#table-of-contents)**

51. ### How to use `connect()` from React Redux?

You need to follow two steps to use your store in your container:

1.  **Use `mapStateToProps()`:** It maps the state variables from your store to the props that you specify.
2.  **Connect the above props to your container:** The object returned by the `mapStateToProps` function is connected to the container. You can import `connect()` from `react-redux`.

    ```jsx harmony
    import React from "react";
    import { connect } from "react-redux";

    class App extends React.Component {
      render() {
        return <div>{this.props.containerData}</div>;
      }
    }

    function mapStateToProps(state) {
      return { containerData: state.data };
    }

    export default connect(mapStateToProps)(App);
    ```

**[⬆ Back to Top](#table-of-contents)**

52. ### Whats the purpose of `at` symbol in the Redux connect decorator?

The **@** symbol is in fact a JavaScript expression used to signify decorators. _Decorators_ make it possible to annotate and modify classes and properties at design time.

Let's take an example setting up Redux without and with a decorator.

- **Without decorator:**

  ```javascript
  import React from "react";
  import * as actionCreators from "./actionCreators";
  import { bindActionCreators } from "redux";
  import { connect } from "react-redux";

  function mapStateToProps(state) {
    return { todos: state.todos };
  }

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
  }

  class MyApp extends React.Component {
    // ...define your main app here
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
  ```

- **With decorator:**

  ```javascript
  import React from "react";
  import * as actionCreators from "./actionCreators";
  import { bindActionCreators } from "redux";
  import { connect } from "react-redux";

  function mapStateToProps(state) {
    return { todos: state.todos };
  }

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
  }

  @connect(mapStateToProps, mapDispatchToProps)
  export default class MyApp extends React.Component {
    // ...define your main app here
  }
  ```

The above examples are almost similar except the usage of decorator. The decorator syntax isn't built into any JavaScript runtimes yet, and is still experimental and subject to change. You can use babel for the decorators support.

**[⬆ Back to Top](#table-of-contents)**

53. ### How to use TypeScript in `create-react-app` application?

Starting from react-scripts@3.3.0+ releases onwards, you can now optionally start a new app from a template by appending `--template [template-name]` to the creation command. If you don't select a template, it will create your project with base template. Remember that templates are always named in the format `cra-template-[template-name]`, here you only need to fill the `[template-name]` section.

The typeScript can be used in your project by appending `--template typescript` to the creation command.

 ```bash
 npx create-react-app my-app --template typescript
 ```

But if you are using React Scripting between react-scripts@2.1.0 and react-scripts@3.2.x , there is a built-in support for TypeScript. i.e, `create-react-app` now supports TypeScript natively. You can just pass `--typescript` option as below

 ```bash
 npx create-react-app my-app --typescript

 # or

 yarn create react-app my-app --typescript
 ```

Whereas for lower versions of react scripts, just supply `--scripts-version` option as `react-scripts-ts` while you create a new project. `react-scripts-ts` is a set of adjustments to take the standard `create-react-app` project pipeline and bring TypeScript into the mix.

Now the project layout should look like the following:

 ```
 my-app/
 ├─ .gitignore
 ├─ images.d.ts
 ├─ node_modules/
 ├─ public/
 ├─ src/
 │  └─ ...
 ├─ package.json
 ├─ tsconfig.json
 ├─ tsconfig.prod.json
 ├─ tsconfig.test.json
 └─ tslint.json
 ```

**[⬆ Back to Top](#table-of-contents)**

54. ### Does the statics object work with ES6 classes in React?

No, `statics` only works with `React.createClass()`:

```javascript
someComponent = React.createClass({
  statics: {
    someMethod: function () {
      // ..
    },
  },
});
```

But you can write statics inside ES6+ classes as below,

```javascript
class Component extends React.Component {
  static propTypes = {
    // ...
  };

  static someMethod() {
    // ...
  }
}
```

or writing them outside class as below,

```javascript
class Component extends React.Component {
   ....
}

Component.propTypes = {...}
Component.someMethod = function(){....}
```

**[⬆ Back to Top](#table-of-contents)**

55. ### Why are inline ref callbacks or functions not recommended?

If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

```jsx
class UserForm extends Component {
  handleSubmit = () => {
    console.log("Input Value is: ", this.input.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(input) => (this.input = input)} /> //
        Access DOM input in handle submit
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

```jsx
class UserForm extends Component {
  handleSubmit = () => {
    console.log("Input Value is: ", this.input.value);
  };

  setSearchInput = (input) => {
    this.input = input;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.setSearchInput} /> // Access DOM input
        in handle submit
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

56. ### What are HOC factory implementations?

There are two main ways of implementing HOCs in React.

1.  Props Proxy (PP) and
2.  Inheritance Inversion (II).

But they follow different approaches for manipulating the _WrappedComponent_.

**Props Proxy**

In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name **Props Proxy**.

```jsx
function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
```

**Inheritance Inversion**

In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems **inverse**.

```jsx
function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render();
    }
  };
}
```

**[⬆ Back to Top](#table-of-contents)**

57. ### How to use class field declarations syntax in React classes?

React Class Components can be made much more concise using the class field declarations. You can initialize the local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them.

Let's take a counter example to demonstrate class field declarations for state without using constructor and methods without binding,

```jsx
class Counter extends Component {
  state = { value: 0 };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div>
        {this.state.value}

        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

58. ### Why do you not need error boundaries for event handlers?

Error boundaries do not catch errors inside event handlers.

React doesn’t need error boundaries to recover from errors in event handlers. Unlike the render method and lifecycle methods, the event handlers don’t happen during rendering. So if they throw, React still knows what to display on the screen.

If you need to catch an error inside an event handler, use the regular JavaScript try / catch statement:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>;
    }
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

Note that the above example is demonstrating regular JavaScript behavior and doesn’t use error boundaries.

**[⬆ Back to Top](#table-of-contents)**

59. ### What is the difference between try catch block and error boundaries?

Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.

For example, the try catch block used for below imperative code

```javascript
try {
  showButton();
} catch (error) {
  // ...
}
```

Whereas error boundaries wrap declarative code as below,

```javascript
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

So if an error occurs in a **componentDidUpdate** method caused by a **setState** somewhere deep in the tree, it will still correctly propagate to the closest error boundary.

**[⬆ Back to Top](#table-of-contents)**

60. ### What is the required method to be defined for a class component?
The `render()` method is the only required method in a class component. i.e, All methods other than render method are optional for a class component.

**[⬆ Back to Top](#table-of-contents)**

61. ### What are the possible return types of render method?

Below are the list of following types used and return from render method,

1.  **React elements:** Elements that instruct React to render a DOM node. It includes html elements such as `<div/>` and user defined elements.
2.  **Arrays and fragments:** Return multiple elements to render as Arrays and Fragments to wrap multiple elements
3.  **Portals:** Render children into a different DOM subtree.
4.  **String and numbers:** Render both Strings and Numbers as text nodes in the DOM
5.  **Booleans or null:** Doesn't render anything but these types are used to conditionally render content.

**[⬆ Back to Top](#table-of-contents)**

62. ### What is the main purpose of constructor?

The constructor is mainly used for two purposes,

1.  To initialize local state by assigning object to this.state
2.  For binding event handler methods to the instance
    For example, the below code covers both the above cases,

```javascript
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```

**[⬆ Back to Top](#table-of-contents)**

63. ### Is it mandatory to define constructor for React component?
No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

**[⬆ Back to Top](#table-of-contents)**

64. ### Why should not call setState in componentWillUnmount?
You should not call `setState()` in `componentWillUnmount()` because once a component instance is unmounted, it will never be mounted again.

**[⬆ Back to Top](#table-of-contents)**

65. ### What is the purpose of getDerivedStateFromError?

This lifecycle method is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.

The signature of the lifecycle method is as follows,

```javascript
static getDerivedStateFromError(error)
```

Let us take error boundary use case with the above lifecycle method for demonstration purpose,

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

66. ### What is the methods order when component re-rendered?

An update can be caused by changes to props or state. The below methods are called in the following order when a component is being re-rendered.

1.  static getDerivedStateFromProps()
2.  shouldComponentUpdate()
3.  render()
4.  getSnapshotBeforeUpdate()
5.  componentDidUpdate()

**[⬆ Back to Top](#table-of-contents)**

67. ### What are the methods invoked during error handling?

Below methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

1.  static getDerivedStateFromError()
2.  componentDidCatch()

**[⬆ Back to Top](#table-of-contents)**

68. ### What is the purpose of unmountComponentAtNode method?

This method is available from react-dom package and it removes a mounted React component from the DOM and clean up its event handlers and state. If no component was mounted in the container, calling this function does nothing. Returns true if a component was unmounted and false if there was no component to unmount.

The method signature would be as follows,

```javascript
ReactDOM.unmountComponentAtNode(container);
```

**[⬆ Back to Top](#table-of-contents)**

69. ### What are the limitations with HOCs?

Higher-order components come with a few caveats apart from its benefits. Below are the few listed in an order,

1.  **Don’t use HOCs inside the render method:**
    It is not recommended to apply a HOC to a component within the render method of a component.

    ```javascript
    render() {
      // A new version of EnhancedComponent is created on every render
      // EnhancedComponent1 !== EnhancedComponent2
      const EnhancedComponent = enhance(MyComponent);
      // That causes the entire subtree to unmount/remount each time!
      return <EnhancedComponent />;
    }
    ```

    The above code impacts on performance by remounting a component that causes the state of that component and all of its children to be lost. Instead, apply HOCs outside the component definition so that the resulting component is created only once.

2.  **Static methods must be copied over:**
    When you apply a HOC to a component the new component does not have any of the static methods of the original component

    ```javascript
    // Define a static method
    WrappedComponent.staticMethod = function () {
      /*...*/
    };
    // Now apply a HOC
    const EnhancedComponent = enhance(WrappedComponent);

    // The enhanced component has no static method
    typeof EnhancedComponent.staticMethod === "undefined"; // true
    ```

    You can overcome this by copying the methods onto the container before returning it,

    ```javascript
    function enhance(WrappedComponent) {
      class Enhance extends React.Component {
        /*...*/
      }
      // Must know exactly which method(s) to copy :(
      Enhance.staticMethod = WrappedComponent.staticMethod;
      return Enhance;
    }
    ```

3.  **Refs aren’t passed through:**
    For HOCs you need to pass through all props to the wrapped component but this does not work for refs. This is because ref is not really a prop similar to key. In this case you need to use the React.forwardRef API

**[⬆ Back to Top](#table-of-contents)**

70. ### How to debug forwardRefs in DevTools?

**React.forwardRef** accepts a render function as parameter and DevTools uses this function to determine what to display for the ref forwarding component.

For example, If you don't name the render function or not using displayName property then it will appear as ”ForwardRef” in the DevTools,

```javascript
const WrappedComponent = React.forwardRef((props, ref) => {
  return <LogProps {...props} forwardedRef={ref} />;
});
```

But If you name the render function then it will appear as **”ForwardRef(myFunction)”**

```javascript
const WrappedComponent = React.forwardRef(function myFunction(props, ref) {
  return <LogProps {...props} forwardedRef={ref} />;
});
```

As an alternative, You can also set displayName property for forwardRef function,

```javascript
function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // Give this component a more helpful display name in DevTools.
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
```

**[⬆ Back to Top](#table-of-contents)**

71. ### Is it good to use arrow functions in render methods?

Yes, You can use. It is often the easiest way to pass parameters to callback functions. But you need to optimize the performance while using it.

```javascript
class Foo extends Component {
  handleClick() {
    console.log("Click happened");
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
```

**Note:** Using an arrow function in render method creates a new function each time the component renders, which may have performance implications

**[⬆ Back to Top](#table-of-contents)**

72. ### How do you say that state updates are merged?

When you call setState() in the component, React merges the object you provide into the current state.

For example, let us take a facebook user with posts and comments details as state variables,

```javascript
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

Now you can update them independently with separate `setState()` calls as below,

```javascript
 componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

As mentioned in the above code snippets, `this.setState({comments})` updates only comments variable without modifying or replacing `posts` variable.

**[⬆ Back to Top](#table-of-contents)**

73. ### How do you pass arguments to an event handler?

During iterations or loops, it is common to pass an extra parameter to an event handler. This can be achieved through arrow functions or bind method.

Let us take an example of user details updated in a grid,

```javascript
<button onClick={(e) => this.updateUser(userId, e)}>Update User details</button>
<button onClick={this.updateUser.bind(this, userId)}>Update User details</button>
```

In the both approaches, the synthetic argument `e` is passed as a second argument. You need to pass it explicitly for arrow functions and it will be passed automatically for `bind` method.

**[⬆ Back to Top](#table-of-contents)**

74. ### How to prevent component from rendering?

You can prevent component from rendering by returning null based on specific condition. This way it can conditionally render component.

```javascript
function Greeting(props) {
  if (!props.loggedIn) {
    return null;
  }

  return <div className="greeting">welcome, {props.name}</div>;
}
```

```javascript
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false, name: 'John'};
  }

  render() {
   return (
       <div>
         //Prevent component render if it is not loggedIn
         <Greeting loggedIn={this.state.loggedIn} />
         <UserDetails name={this.state.name}>
       </div>
   );
  }
```

In the above example, the `greeting` component skips its rendering section by applying condition and returning null value.

**[⬆ Back to Top](#table-of-contents)**

75. ### Give an example on How to use context?

**Context** is designed to share data that can be considered **global** for a tree of React components.

For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

```javascript
//Lets create a context with a default theme value "luna"
const ThemeContext = React.createContext("luna");
// Create App component where it uses provider to pass theme value in the tree
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="nova">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
// A middle component where you don't need to pass theme prop anymore
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
// Lets read theme value in the button component to use
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

76. ### How do you use contextType?

ContextType is used to consume the context object. The contextType property can be used in two ways,

1.  **contextType as property of class:**
    The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.

    Lets assign contextType property on MyClass as below,

    ```javascript
    class MyClass extends React.Component {
      componentDidMount() {
        let value = this.context;
        /* perform a side-effect at mount using the value of MyContext */
      }
      componentDidUpdate() {
        let value = this.context;
        /* ... */
      }
      componentWillUnmount() {
        let value = this.context;
        /* ... */
      }
      render() {
        let value = this.context;
        /* render something based on the value of MyContext */
      }
    }
    MyClass.contextType = MyContext;
    ```

2.  **Static field**
    You can use a static class field to initialize your contextType using public class field syntax.

    ```javascript
    class MyClass extends React.Component {
      static contextType = MyContext;
      render() {
        let value = this.context;
        /* render something based on the value */
      }
    }
    ```

**[⬆ Back to Top](#table-of-contents)**

77. ### What is a consumer?

A Consumer is a React component that subscribes to context changes. It requires a function as a child which receives current context value as argument and returns a react node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree.

Lets take a simple example,

```javascript
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

**[⬆ Back to Top](#table-of-contents)**

78. ### How do you solve performance corner cases while using context?

The context uses reference identity to determine when to re-render, there are some gotchas that could trigger unintentional renders in consumers when a provider’s parent re-renders.

For example, the code below will re-render all consumers every time the Provider re-renders because a new object is always created for value.

```javascript
class App extends React.Component {
  render() {
    return (
      <Provider value={{ something: "something" }}>
        <Toolbar />
      </Provider>
    );
  }
}
```

This can be solved by lifting up the value to parent state,

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { something: "something" },
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}
```

**[⬆ Back to Top](#table-of-contents)**

79. ### What is the purpose of forward ref in HOCs?

Refs will not get passed through because ref is not a prop. It is handled differently by React just like **key**. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component. In this case, you can use Forward Ref API. For example, we can explicitly forward refs to the inner FancyButton component using the React.forwardRef API.

The below HOC logs all props,

```javascript
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
```

Let's use this HOC to log all props that get passed to our “fancy button” component,

```javascript
class FancyButton extends React.Component {
  focus() {
    // ...
  }

  // ...
}
export default logProps(FancyButton);
```

Now let's create a ref and pass it to FancyButton component. In this case, you can set focus to button element.

```javascript
import FancyButton from "./FancyButton";

const ref = React.createRef();
ref.current.focus();
<FancyButton label="Click Me" handleClick={handleClick} ref={ref} />;
```

**[⬆ Back to Top](#table-of-contents)**

80. ### Is ref argument available for all functions or class components?
Regular function or class components don’t receive the ref argument, and ref is not available in props either. The second ref argument only exists when you define a component with React.forwardRef call.

**[⬆ Back to Top](#table-of-contents)**

81. ### Why do you need additional care for component libraries while using forward refs?
When you start using forwardRef in a component library, you should treat it as a breaking change and release a new major version of your library. This is because your library likely has a different behavior such as what refs get assigned to, and what types are exported. These changes can break apps and other libraries that depend on the old behavior.

**[⬆ Back to Top](#table-of-contents)**

82. ### How to create react class components without ES6?

If you don’t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

```javascript
var Greeting = createReactClass({
  getDefaultProps: function () {
    return {
      name: "Jhohn",
    };
  },
  getInitialState: function () {
    return { message: this.props.message };
  },
  handleClick: function () {
    console.log(this.state.message);
  },
  render: function () {
    return <h1>Hello, {this.props.name}</h1>;
  },
});
```

**Note:** If you use createReactClass then auto binding is available for all methods. i.e, You don't need to use `.bind(this)` with in constructor for event handlers.

**[⬆ Back to Top](#table-of-contents)**

83. ### Is it possible to use react without JSX?

Yes, JSX is not mandatory for using React. Actually it is convenient when you don’t want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling `React.createElement(component, props, ...children)`.

For example, let us take a greeting example with JSX,

```javascript
class Greeting extends React.Component {
  render() {
    return <div>Hello {this.props.message}</div>;
  }
}

ReactDOM.render(
  <Greeting message="World" />,
  document.getElementById("root")
);
```

You can write the same code without JSX as below,

```javascript
class Greeting extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.message}`);
  }
}

ReactDOM.render(
  React.createElement(Greeting, { message: "World" }, null),
  document.getElementById("root")
);
```

**[⬆ Back to Top](#table-of-contents)**

84. ### How do you create HOC using render props?

You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a <Mouse> component, you could easily create one using a regular <Mouse> with a render prop.

```javascript
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse
          render={(mouse) => <Component {...this.props} mouse={mouse} />}
        />
      );
    }
  };
}
```

This way render props gives the flexibility of using either pattern.

**[⬆ Back to Top](#table-of-contents)**

85. ### What is react scripts?
The `react-scripts` package is a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring. The `react-scripts start` command sets up the development environment and starts a server, as well as hot module reloading.

**[⬆ Back to Top](#table-of-contents)**

86. ### What are the features of create react app?

Below are the list of some of the features provided by create react app.

1.  React, JSX, ES6, Typescript and Flow syntax support.
2.  Autoprefixed CSS
3.  CSS Reset/Normalize
4.  A live development server
5.  A fast interactive unit test runner with built-in support for coverage reporting
6.  A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps
7.  An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.

**[⬆ Back to Top](#table-of-contents)**

87. ### What is the purpose of renderToNodeStream method?
The `ReactDOMServer#renderToNodeStream` method is used to generate HTML on the server and send the markup down on the initial request for faster page loads. It also helps search engines to crawl your pages easily for SEO purposes.
**Note:** Remember this method is not available in the browser but only server.

**[⬆ Back to Top](#table-of-contents)**

88. ### How do you get redux scaffolding using create-react-app?
Redux team has provided official redux+js or redux+typescript templates for create-react-app project. The generated project setup includes,
1.  Redux Toolkit and React-Redux dependencies
2.  Create and configure Redux store
3.  React-Redux `<Provider>` passing the store to React components
4.  Small "counter" example to demo how to add redux logic and React-Redux hooks API to interact with the store from components
    The below commands need to be executed along with template option as below,
5.  **Javascript template:**
```js
npx create-react-app my-app --template redux
```
2.  **Typescript template:**
```js
npx create-react-app my-app --template redux-typescript
```

**[⬆ Back to Top](#table-of-contents)**

89. ### What is state mutation and how to prevent it?

`State mutation` happens when you try to update the state of a component without actually using `setState` function. This can happen when you are trying to do some computations using a state variable and unknowingly save the result in the same state variable. This is the main reason why it is advised to return new instances of state variables from the reducers by using Object.assign({}, ...) or spread syntax.

This can cause unknown issues in the UI as the value of the state variable got updated without telling React to check what all components were being affected from this update and it can cause UI bugs.

Ex:

```javascript
class A extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
 }

componentDidMount() {
  let { loading } = this.state;
  loading = (() => true)(); // Trying to perform an operation and directly saving in a state variable
}
```

**How to prevent it:** Make sure your state variables are immutable by either enforcing immutability by using plugins like Immutable.js, always using `setState` to make updates, and returning new instances in reducers when sending updated state values.

**[⬆ Back to Top](#table-of-contents)**

## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

---