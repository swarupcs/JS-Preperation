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

**Redux Thunk** is a middleware that allows you to write action creators that return a **function** instead of an action object. This function receives `dispatch` and `getState` as arguments, allowing for asynchronous logic and conditional dispatching.

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

**Selectors** are functions that extract specific pieces of data from the Redux store.

**Why use them?**
1.  **Encapsulation**: Components don't need to know the exact shape of the state.
2.  **Reusability**: One selector can be used by multiple components.
3.  **Memoization**: Libraries like **Reselect** can memoize selectors, ensuring they only re-run when the relevant state changes, which improves performance.

**Example:**
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

1.  **Synchronized State**: Keeps form values in the Redux store.
2.  **Validation**: Built-in support for sync and async validation.
3.  **Action Dispatching**: Automatically tracks focus, change, and blur events.

**[⬆ Back to Top](#table-of-contents)**

132. ### How to add multiple middlewares to Redux?

In standard Redux, you use `applyMiddleware()`. However, the recommended modern approach is using **Redux Toolkit (RTK)**'s `configureStore`.

**Redux Toolkit Example:**
```javascript
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger, myCustomMiddleware),
});
```

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

134. ### How Relay is different from Redux?

**Redux** is a general-purpose state management library. **Relay** is a GraphQL-integrated data-fetching framework. Relay manages server state, optimizes GraphQL queries through co-location, and provides built-in caching and consistency logic that Redux lacks out of the box.

**[⬆ Back to Top](#table-of-contents)**

135. ### What is an action in Redux?

An **action** is a plain JavaScript object that describes what happened in the application. It must have a `type` property and can optionally have a `payload` containing data.

**Example:**
```javascript
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

    1.  **Flexibility**: React is a library, giving more control over architecture.
    2.  **Ecosystem**: Massive library support and larger job market.
    3.  **JSX**: Powerful integration of HTML and JavaScript.
    4.  **Native Support**: React Native is a more mature solution for mobile development.

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

    1.  **Not a React app**: The site isn't built with React.
    2.  **Production build**: By default, the tab may be hidden in production.
    3.  **Development Build Issue**: If you are using a minified development build.
    4.  **Extension Permissions**: Ensure the extension has permission to run on the site.

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

1.  **Memoization**: Selectors are only recomputed when their inputs (state) change.
2.  **Derived Data**: Allows Redux to store minimal state while selectors compute complex UI data.
3.  **Composition**: Selectors can be used as inputs to other selectors, allowing for complex logic chains.

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

160. ### What is render hijacking in react?

**Render hijacking** is a pattern in Higher-Order Components (HOCs) where the HOC controls the output of the wrapped component. The HOC can intercept the render process to modify the elements, change styles, or conditionally render the component.

**[⬆ Back to Top](#table-of-contents)**

161. ### How to pass numbers to React component?

You should pass numbers as props using **curly braces `{}`**. If you pass them in double quotes `""`, they will be treated as strings.

**Example:**
```jsx
<User age={25} /> // Passed as a number
<User age="25" /> // Passed as a string
```

**[⬆ Back to Top](#table-of-contents)**

162. ### Do I need to keep all my state into Redux? Should I ever use react internal state?

**No.** You should only keep data in Redux that is **global**, shared across many components, or needs to be persisted.
- **Redux**: Auth status, User profile, Global settings.
- **Internal State (`useState`)**: Form inputs, UI toggles (dropdowns), temporary component-level data.

**[⬆ Back to Top](#table-of-contents)**

163. ### What is the purpose of registerServiceWorker in React?

In older versions of Create React App, `registerServiceWorker` was used to enable **Progressive Web App (PWA)** features. It allows the app to cache assets locally, enabling offline functionality and faster subsequent loads.

**Note**: In modern React setups, this has been replaced by `serviceWorkerRegistration.js` or specialized libraries like **Workbox**.

**[⬆ Back to Top](#table-of-contents)**

164. ### What is React memo function?

**`React.memo`** is a Higher-Order Component (HOC) used for performance optimization. It prevents a functional component from re-rendering if its props have not changed (via shallow comparison).

**Example:**
```jsx
const MyComponent = React.memo(({ name }) => {
  console.log("Rendering...");
  return <div>{name}</div>;
});
```

**[⬆ Back to Top](#table-of-contents)**

165. ### What is React lazy function?

**`React.lazy`** allows you to render a dynamic import as a regular component. It helps in **code-splitting** by loading components only when they are needed, which reduces the initial bundle size. It must be used inside a `Suspense` component.

**Example:**
```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

166. ### How to prevent unnecessary updates using setState?

- **Functional Components**: Wrap the component in **`React.memo`**.
- **Class Components**: Use **`React.PureComponent`** or implement the **`shouldComponentUpdate`** lifecycle method.

**[⬆ Back to Top](#table-of-contents)**

167. ### How do you render Array, Strings and Numbers in React 16 Version?

React 16+ supports rendering multiple elements from a component by returning an **array**, and also supports direct rendering of **strings** and **numbers** without wrapping them in an element.

**Example:**
```jsx
// Array
const MyArray = () => [
  <li key="A">First</li>,
  <li key="B">Second</li>
];

// String/Number
const MyText = () => "Hello World";
const MyNumber = () => 123;
```

**[⬆ Back to Top](#table-of-contents)**

168. ### What are hooks?

**Hooks** are functions that let you "hook into" React state and lifecycle features from functional components. They allow you to use state and other React features without writing a class.

**Example (`useState`):**
```jsx
const [count, setCount] = useState(0);
```

**[⬆ Back to Top](#table-of-contents)**

169. ### What rules need to be followed for hooks?

1.  **Only Call Hooks at the Top Level**: Don’t call Hooks inside loops, conditions, or nested functions.
2.  **Only Call Hooks from React Functions**: Call Hooks from React functional components or custom Hooks, not from regular JavaScript functions.

**[⬆ Back to Top](#table-of-contents)**


170. ### How to ensure hooks followed the rules in your project?

The React team provides an ESLint plugin called **`eslint-plugin-react-hooks`** that enforces the rules of hooks. It warns you when rules are broken and ensures dependencies in `useEffect`, `useCallback`, and `useMemo` are correctly specified.

**[⬆ Back to Top](#table-of-contents)**

171. ### What are the differences between Flux and Redux?

| Feature | Flux | Redux |
| :--- | :--- | :--- |
| **Stores** | Multiple stores | Single central store |
| **Dispatcher** | Central singleton dispatcher | No dispatcher; actions go to reducers |
| **State** | Mutable state | Immutable state (new state object returned) |
| **Logic** | Logic is in the Store | Logic is in Reducer functions |

**[⬆ Back to Top](#table-of-contents)**

172. ### What are the benefits of React Router V4?

1.  **Dynamic Routing**: Routing is handled via regular React components (`<Route>`), allowing for logic-based navigation.
2.  **Declarative API**: No need for a separate, static route configuration file.
3.  **Component-Based**: Routes can be nested anywhere in the component tree, behaving like any other React component.

**[⬆ Back to Top](#table-of-contents)**

173. ### Can you describe about componentDidCatch lifecycle method signature?

The **`componentDidCatch`** method is used in **Error Boundary** class components to catch errors in their child component tree.

**Signature:**
```javascript
componentDidCatch(error, info)
```
- **`error`**: The error object that was thrown.
- **`info`**: An object containing a **`componentStack`** key, which provides the stack trace of the component tree that crashed.

**[⬆ Back to Top](#table-of-contents)**

174. ### In which scenarios do error boundaries not catch errors?

Error boundaries **do not** catch errors for:
1.  **Event handlers**: Errors inside `onClick`, `onChange`, etc.
2.  **Asynchronous code**: Errors in `setTimeout`, `requestAnimationFrame`, or `Promise` callbacks.
3.  **Server-side rendering (SSR)**.
4.  **Errors thrown in the boundary itself**: If the Error Boundary's own `render` method fails.

**[⬆ Back to Top](#table-of-contents)**

175. ### What is the behavior of uncaught errors in react 16?

In React 16+, any error that is not caught by an Error Boundary will result in the **entire React component tree being unmounted**. React makes this decision because a corrupted UI is often worse than no UI (e.g., in financial or health applications).

**[⬆ Back to Top](#table-of-contents)**

176. ### What is the proper placement for error boundaries?

The placement depends on the desired user experience:
- **Top-level**: Wrap the entire app to catch critical, application-wide failures.
- **Feature-level**: Wrap major sections (e.g., Sidebar, Dashboard) to isolate crashes and keep the rest of the app functional.
- **Component-level**: Wrap small, high-risk components (e.g., third-party widgets) to prevent them from breaking their parent container.

**[⬆ Back to Top](#table-of-contents)**

177. ### What is the benefit of component stack trace from error boundary?

React provides a **component stack trace** whenever a component crashes. This allows developers to see exactly which component failed, in which file, and at what line number. This is distinct from the JavaScript stack trace and is incredibly useful for debugging complex component hierarchies.

**[⬆ Back to Top](#table-of-contents)**

178. ### What are default props?

**`defaultProps`** allow you to set default values for a component's props. These values are used if a prop is not provided by the parent.

**Example:**
```jsx
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;

Welcome.defaultProps = {
  name: 'Guest'
};
```

**Note**: For functional components, React now recommends using ES6 **default parameters** instead:
```jsx
const Welcome = ({ name = 'Guest' }) => <h1>Hello, {name}</h1>;
```

**[⬆ Back to Top](#table-of-contents)**

179. ### What is the purpose of displayName class property?

The **`displayName`** string is used in debugging messages. Usually, it is not needed because the name of the function or class that defines the component is used by default. However, you might want to set it explicitly for debugging purposes or when creating **Higher-Order Components (HOCs)**.

**Example:**
```jsx
const withLogger = (Component) => {
  class WithLogger extends React.Component { /* ... */ }
  WithLogger.displayName = `WithLogger(${Component.displayName || Component.name})`;
  return WithLogger;
};
```

    **[⬆ Back to Top](#table-of-contents)**

180. ### What is the browser support for react applications?

React supports all modern browsers, including **Chrome, Firefox, Safari, and Edge**. For older browsers like **IE11**, you may need to include polyfills (e.g., `core-js` and `regenerator-runtime`) to support features like `Map`, `Set`, and `Promise`.

**[⬆ Back to Top](#table-of-contents)**

181. ### What is code-splitting?

**Code-splitting** is a technique used to break up a large JavaScript bundle into smaller chunks that can be loaded on demand. This improves the initial load time of the application. In React, this is typically achieved using dynamic `import()` and **`React.lazy`**.

**Example:**
```jsx
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

182. ### What are Keyed Fragments?

Fragments mapped from an array require keys to help React identify which items have changed, been added, or removed. You must use the explicit **`<React.Fragment>`** syntax instead of the short `<>` syntax because the short syntax does not support attributes or keys.

**Example:**
```jsx
{items.map(item => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.description}</dd>
  </React.Fragment>
))}
```

**[⬆ Back to Top](#table-of-contents)**

183. ### Does React support all HTML attributes?

**Yes.** As of React 16, both standard and custom HTML attributes are supported. Standard attributes should be written in **camelCase** (e.g., `tabIndex`, `readOnly`), while custom attributes should be lowercase. `data-*` and `aria-*` attributes are also fully supported.

**[⬆ Back to Top](#table-of-contents)**

184. ### When component props defaults to true?

If you pass a prop without a value, it defaults to **`true`**. This behavior matches the behavior of HTML boolean attributes.

**Example:**
```jsx
<MyInput autocomplete />
// is equivalent to:
<MyInput autocomplete={true} />
```

**[⬆ Back to Top](#table-of-contents)**

185. ### What is NextJS and major features of it?

**Next.js** is a popular React framework for building production-grade applications.
**Key Features:**
1.  **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**.
2.  **File-based Routing**.
3.  **API Routes** (Serverless functions).
4.  **Automatic Code Splitting** and Image Optimization.
5.  **Middleware** and Edge Functions.

**[⬆ Back to Top](#table-of-contents)**

186. ### How do you pass an event handler to a component?

You pass event handlers as props to child components just like any other data.

**Example:**
```jsx
const Child = ({ onClick }) => <button onClick={onClick}>Click Me</button>;

const Parent = () => {
  const handleClick = () => console.log('Clicked!');
  return <Child onClick={handleClick} />;
};
```

**[⬆ Back to Top](#table-of-contents)**

187. ### How to prevent a function from being called multiple times?

To prevent a function from being called too frequently (like in a search input or resize event), you can use:
1.  **Throttling**: Ensures the function is called at most once in a specified time period.
2.  **Debouncing**: Ensures the function is called only after a specified period of inactivity.
3.  **State/Ref Guard**: Use a boolean flag (e.g., `isSubmitting`) to disable buttons or prevent logic execution during an ongoing process.

**[⬆ Back to Top](#table-of-contents)**

188. ### How JSX prevents Injection Attacks?

By default, **React DOM escapes any values** embedded in JSX before rendering them. Everything is converted to a string before being rendered, which prevents **Cross-Site Scripting (XSS)** attacks.

**Example:**
```jsx
const userInput = '<script>alert("Hacked!")</script>';
// React renders this as literal text, not as a script tag.
return <div>{userInput}</div>;
```

**[⬆ Back to Top](#table-of-contents)**

189. ### How do you update rendered elements?

In React, you don't update the DOM directly. Instead, you update the component's **state** or **props**. React then uses its **Virtual DOM** and diffing algorithm to identify changes and efficiently update only the necessary parts of the real DOM.

**[⬆ Back to Top](#table-of-contents)**

190. ### How do you say that props are readonly?

React follows a **unidirectional data flow** (one-way data binding). Props are intended to be immutable from the perspective of the child component. React components must act like **pure functions** with respect to their props—they should never modify their own inputs.

**[⬆ Back to Top](#table-of-contents)**

191. ### What are the conditions to safely use the index as a key?

Using the index as a `key` is generally discouraged but safe only if:
1.  The list and its items are **static** (never change, reorder, or filter).
2.  The items in the list have **no unique IDs**.
3.  The list is never reordered or filtered.

**[⬆ Back to Top](#table-of-contents)**

192. ### Should keys be globally unique?

**No.** Keys only need to be unique among their **siblings** within the same array. They do not need to be globally unique across the entire application or even different arrays.

**Example:**
```jsx
const Posts = ({ items }) => (
  <ul>
    {items.map(post => <li key={post.id}>{post.title}</li>)}
  </ul>
);

const Sidebar = ({ items }) => (
  <ul>
    {items.map(post => <li key={post.id}>{post.title}</li>)}
  </ul>
);
// It's safe to use the same post.id as a key in both lists.
```

**[⬆ Back to Top](#table-of-contents)**

193. ### What is the popular choice for form handling?

While standard controlled components are common, the most popular libraries for form handling in React are:
1.  **React Hook Form**: Highly performant, uses uncontrolled inputs to minimize re-renders.
2.  **Formik**: A powerful, declarative solution for managing complex form states and validation (often with **Yup**).

**[⬆ Back to Top](#table-of-contents)**

194. ### What are the advantages of formik over redux form library?

1.  **Local State**: Formik keeps form state local, avoiding the overhead of dispatching actions to a global Redux store on every keystroke.
2.  **Performance**: Prevents unnecessary app-wide re-renders during input.
3.  **Simplicity**: Provides a much cleaner API without requiring Redux setup.

**[⬆ Back to Top](#table-of-contents)**

195. ### Why are you not required to use inheritance?

React promotes **Composition over Inheritance**. You can solve almost all code reuse problems by passing props (including `children`) or using custom Hooks. This makes components more predictable and easier to test.

**[⬆ Back to Top](#table-of-contents)**

196. ### Can I use web components in react application?

**Yes.** React and Web Components are designed to solve different problems. Web Components provide strong encapsulation for reusable widgets, while React provides a declarative library that keeps the DOM in sync with your data. You can use Web Components in React like any other HTML tag.

**[⬆ Back to Top](#table-of-contents)**

197. ### What is dynamic import?

**Dynamic `import()`** is a modern JavaScript feature that allows you to load modules asynchronously at runtime. It returns a Promise that resolves to the module object. This is the foundation for code-splitting in React.

**Example:**
```javascript
const handleClick = async () => {
  const module = await import('./math.js');
  console.log(module.add(1, 2));
};
```

**[⬆ Back to Top](#table-of-contents)**

198. ### What are loadable components?

**Loadable Components** is a library for code-splitting in React that supports **Server-Side Rendering (SSR)**. While `React.lazy` is the official solution for client-side code-splitting, Loadable Components is often used when SSR is required.

**Example:**
```jsx
import loadable from '@loadable/component';

const OtherComponent = loadable(() => import('./OtherComponent'));
```

**[⬆ Back to Top](#table-of-contents)**

199. ### What is suspense component?

**`Suspense`** is a built-in React component that lets you declaratively specify a loading state while waiting for children components to finish loading (e.g., via `React.lazy`).

**Example:**
```jsx
const ProfilePage = React.lazy(() => import('./ProfilePage'));

<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>
```

**[⬆ Back to Top](#table-of-contents)**

200. ### What is route based code splitting?

**Route-based code-splitting** involves splitting your application bundle based on routes. Since users usually navigate between pages (routes), loading only the code required for the current route significantly improves performance.

**Example:**
```jsx
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

<Router>
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Suspense>
</Router>
```

**[⬆ Back to Top](#table-of-contents)**

201. ### What is the purpose of default value in context?

The **default value** of a Context is used only when a component does not have a matching **`Provider`** above it in the component tree. It serves as a fallback value for the `useContext` hook or `Consumer`.

**[⬆ Back to Top](#table-of-contents)**

202. ### What is diffing algorithm?

The **diffing algorithm** is the heuristic algorithm React uses to update the DOM efficiently. Instead of re-rendering everything, React compares the new Virtual DOM with the old one (the "diff") and applies only the minimum necessary changes. It follows two main rules:
1.  Two elements of different types will produce different trees.
2.  The developer can hint at which child elements may be stable across different renders with a **`key`** prop.

**[⬆ Back to Top](#table-of-contents)**

203. ### What are the rules covered by diffing algorithm?

When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements:
1.  **Elements Of Different Types**: Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch (e.g., `<a>` to `<img>`).
2.  **DOM Elements Of The Same Type**: When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes (e.g., changing `className`).
3.  **Component Elements Of The Same Type**: When a component updates, the instance stays the same, and state is maintained. React updates the props of the underlying component instance.
4.  **Recursing On Children**: By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. This is why **`keys`** are essential for performance in lists.

**[⬆ Back to Top](#table-of-contents)**

204. ### When do you need to use refs?

Refs should be used sparingly in scenarios where you need to interact with the DOM directly:
1.  **Managing focus**, text selection, or media playback.
2.  **Triggering imperative animations**.
3.  **Integrating with third-party DOM libraries** (e.g., D3.js, jQuery).

**[⬆ Back to Top](#table-of-contents)**

205. ### Must prop be named as render for render props?

**No.** Any prop that is a function used by a component to determine what to render is technically a "render prop." While `render` is a common convention, you can use any prop name or even use the `children` prop.

**Example:**
```jsx
<Mouse children={mouse => (
  <p>The mouse position is {mouse.x}, {mouse.y}</p>
)}/>
```

**[⬆ Back to Top](#table-of-contents)**

206. ### What are the problems of using render props with pure components?

Using a render prop can negate the advantage of **`React.PureComponent`** if you create the function inside the `render` method. Since shallow prop comparison will always return `false` for new function instances, the component will re-render every time. To fix this, define the render function as an instance method.

    **[⬆ Back to Top](#table-of-contents)**

207. ### What is windowing technique?

**Windowing** (or list virtualization) is a technique used to render only a small subset of a massive list (only the items currently visible in the "window"). This significantly improves performance by reducing the number of DOM nodes. Popular libraries include **`react-window`** and **`react-virtualized`**.

**[⬆ Back to Top](#table-of-contents)**

208. ### How do you print falsy values in JSX?

Booleans, `null`, and `undefined` are valid children but they **render as nothing**. To display them, you must convert them to a string.

**Example:**
```jsx
<div>My value is: {String(myVariable)}</div>
```

**[⬆ Back to Top](#table-of-contents)**

209. ### What is the typical use case of portals?

**Portals** are used to render children into a DOM node that exists outside the hierarchy of the parent component. Typical use cases include:
- Modals and Dialogs.
- Tooltips and Popovers.
- Floating menus and Notifications.

This avoids issues with `z-index` or `overflow: hidden` in the parent container.

**[⬆ Back to Top](#table-of-contents)**

210. ### How do you set default value for uncontrolled component?

For uncontrolled components, you use the **`defaultValue`** and **`defaultChecked`** attributes to specify the initial value. This allows the input to be initialized while remaining uncontrolled for subsequent updates.

**Example:**
```jsx
<input type="text" defaultValue="John Doe" ref={myRef} />
<input type="checkbox" defaultChecked={true} ref={checkRef} />
```

**[⬆ Back to Top](#table-of-contents)**

211. ### What is your favorite React stack?

A modern and popular React stack often includes:
1.  **Build Tool**: [Vite](https://vitejs.dev/) (fast and efficient).
2.  **State Management**: [React Query](https://tanstack.com/query) (for server state) and [Zustand](https://github.com/pmndrs/zustand) or **Redux Toolkit** (for global UI state).
3.  **Styling**: [Tailwind CSS](https://tailwindcss.com/) or **Styled Components**.
4.  **Forms**: [React Hook Form](https://react-hook-form.com/).
5.  **Testing**: [Vitest](https://vitest.dev/) and **React Testing Library**.

**[⬆ Back to Top](#table-of-contents)**

212. ### What is the difference between Real DOM and Virtual DOM?

| Feature | Real DOM | Virtual DOM |
| :--- | :--- | :--- |
| **Updates** | Slow (requires full repaint) | Fast (only updates changed parts) |
| **Memory** | High usage | Efficient (lightweight JS copy) |
| **Manipulation** | Direct and expensive | Batch updates via diffing |
| **Re-rendering** | Re-renders the whole tree | Re-renders only changed nodes |

**[⬆ Back to Top](#table-of-contents)**

213. ### How to add Bootstrap to a react application?

You can add Bootstrap via npm and import the CSS in your entry file.

**Step 1: Install Bootstrap**
```bash
npm install bootstrap
```

**Step 2: Import in `index.js` or `App.js`**
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

Alternatively, you can use specialized libraries like **`react-bootstrap`** for component-based usage.

**[⬆ Back to Top](#table-of-contents)**


214. ### Can you list down top websites or applications using react as front end framework?

React is used by some of the largest companies in the world:
1.  **Facebook / Instagram / WhatsApp Web**
2.  **Netflix**
3.  **Airbnb**
4.  **Uber**
5.  **New York Times**
6.  **Discord**
7.  **Dropbox**

**[⬆ Back to Top](#table-of-contents)**

215. ### Is it recommended to use CSS In JS technique in React?

**Yes**, it is a very common and recommended practice for component-level encapsulation. Libraries like **Styled Components** or **Emotion** allow you to write CSS directly inside your components. However, utility-first frameworks like **Tailwind CSS** are also highly recommended for modern development.

**[⬆ Back to Top](#table-of-contents)**

216. ### Do I need to rewrite all my class components with hooks?

**No.** React provides a gradual adoption path. Hooks are completely opt-in and backward compatible. You can keep existing class components as they are and use Hooks for new components or incrementally refactor older ones.

**[⬆ Back to Top](#table-of-contents)**

217. ### What is useEffect hook? How to fetch data with React Hooks?

The **`useEffect`** hook lets you perform side effects (data fetching, subscriptions, DOM mutations) in functional components.

**Example (Data Fetching):**
```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchData() {
      const response = await fetch(`https://api.example.com/user/${userId}`);
      const data = await response.json();
      if (isMounted) setUser(data);
    }

    fetchData();
    return () => { isMounted = false; }; // Cleanup
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

**[⬆ Back to Top](#table-of-contents)**

218. ### Is Hooks cover all use cases for classes?

**Almost.** Hooks currently cover most use cases of class components, but there are a few rare lifecycle methods that don't have Hook equivalents yet:
1.  **`getSnapshotBeforeUpdate`**
2.  **`componentDidCatch`**
3.  **`getDerivedStateFromError`**

**[⬆ Back to Top](#table-of-contents)**

219. ### What is the stable release for hooks support?

React includes a stable implementation of React Hooks in 16.8 release for below packages

1. React DOM
2. React DOM Server
3. React Test Renderer
4. React Shallow Renderer

**[⬆ Back to Top](#table-of-contents)**

220. ### Why do we use array destructuring (square brackets notation) in `useState`?

Array destructuring is used for its **naming flexibility**. Unlike object destructuring, which requires you to use specific keys (e.g., `value` and `update`), array destructuring allows you to name the state variable and its setter whatever you want (e.g., `[count, setCount]` or `[user, setUser]`).

**Example:**
```javascript
const [count, setCount] = useState(0);
```

**[⬆ Back to Top](#table-of-contents)**

221. ### What are the sources used for introducing hooks?

Hooks were inspired by several different sources and experiments:
1.  **Functional APIs** in the `react-future` repository.
2.  **Render Prop APIs** like `Reactions Component`.
3.  **State variables** and state cells in `DisplayScript`.
4.  **Subscriptions** in RxJS.
5.  **Reducer components** in ReasonReact.

**[⬆ Back to Top](#table-of-contents)**

222. ### How do you access imperative API of web components?

To interact with the imperative API of a Web Component, you must use a **Ref** to access the underlying DOM node directly.

**Example:**
```jsx
const MyComponent = () => {
  const webCompRef = useRef(null);

  useEffect(() => {
    // Calling imperative method on the web component
    webCompRef.current.someMethod();
  }, []);

  return <my-web-component ref={webCompRef} />;
};
```

**[⬆ Back to Top](#table-of-contents)**

223. ### What is formik?

**Formik** is a popular library for managing form state in React. It handles the three most annoying parts of forms:
1.  Getting values in and out of form state.
2.  Validation and error messages.
3.  Handling form submission.

**[⬆ Back to Top](#table-of-contents)**

224. ### What are typical middleware choices for handling asynchronous calls in Redux?

The most common choices for handling asynchronous logic in Redux are:
1.  **Redux Thunk**: The standard approach for simple async logic.
2.  **Redux Saga**: Uses Generators for more complex, testable side-effect management.
3.  **Redux Toolkit (RTK) Query**: The modern, built-in solution for data fetching and caching.

**[⬆ Back to Top](#table-of-contents)**

225. ### Do browsers understand JSX code?

**No.** Browsers can only understand standard JavaScript. JSX must be transpiled into regular JavaScript (usually using **Babel**) before it can be executed in the browser.

**[⬆ Back to Top](#table-of-contents)**

226. ### Describe about data flow in react?

React features **unidirectional data flow** (also called one-way data binding). Data flows down from parent components to child components via **props**, while events flow up from children to parents via **callbacks**. This makes state changes more predictable and easier to debug.

**[⬆ Back to Top](#table-of-contents)**

227. ### What is MobX?

**MobX** is a state management library that uses **Reactive Programming**. It treats application state as a "spreadsheet" where changes to data (Observables) automatically trigger updates in anything that depends on them (Observers).

**[⬆ Back to Top](#table-of-contents)**

228. ### What are the differences between Redux and MobX?

| Feature | Redux | MobX |
| :--- | :--- | :--- |
| **State** | Single immutable State tree | Multiple observable Stores |
| **Mutation** | Immutable (via Actions/Reducers) | Mutable (via Actions) |
| **Philosophy** | Functional Programming | Object-Oriented/Reactive |
| **Boilerplate** | High (actions, reducers, types) | Low (decorators/proxies) |

**[⬆ Back to Top](#table-of-contents)**

229. ### Should I learn ES6 before learning ReactJS?

**Yes.** React heavily relies on ES6 features. Understanding the following concepts is essential for modern React development:
- **Arrow Functions**
- **Destructuring** (Arrays and Objects)
- **Template Literals**
- **Spread and Rest operators**
- **Classes and Modules** (import/export)
- **Promises and Async/Await**

**[⬆ Back to Top](#table-of-contents)**

230. ### What is Concurrent Rendering?

**Concurrent Rendering** is a set of new features introduced in **React 18** that allows React to interrupt a long-running render to handle a high-priority event (like user input). It makes the UI more responsive by working on multiple versions of the UI at the same time in the background.

**Key Concepts:**
- **Interruptible Rendering**: React can pause and resume rendering.
- **Transitions**: Use `startTransition` to mark non-urgent updates.
- **Suspense**: Better integration with data fetching.

**[⬆ Back to Top](#table-of-contents)**

231. ### What is the difference between async mode and concurrent mode?

"Async Mode" was the internal experimental name for what eventually became **Concurrent React** in React 18. Concurrent mode is not just "asynchronous"; it's the ability for React to prioritize updates and manage multiple rendering tasks concurrently without blocking the main thread.

**[⬆ Back to Top](#table-of-contents)**

232. ### Can I use javascript urls in react16.9?

While you *can*, it is **deprecated** and highly discouraged due to security risks (XSS). Using `javascript:` URLs in attributes like `href` will trigger a warning in React 16.9+.

**Security Risk:**
```jsx
// This triggers a warning and is an XSS risk
<a href="javascript:alert('XSS')">Click me</a>
```

**[⬆ Back to Top](#table-of-contents)**

233. ### What is the purpose of eslint plugin for hooks?

The **`eslint-plugin-react-hooks`** plugin enforces the "Rules of Hooks." It is essential for catching bugs early by ensuring that:
1.  Hooks are only called at the **top level** (not inside loops or conditions).
2.  Hooks are only called from **React function components** or custom Hooks.

**[⬆ Back to Top](#table-of-contents)**

234. ### What is the difference between Imperative and Declarative in React?

-   **Imperative Programming**: Focuses on **how** to achieve a result by providing step-by-step instructions to the browser (e.g., direct DOM manipulation with jQuery).
    -   **Declarative Programming**: Focuses on **what** you want to see on the screen. You describe the final state of the UI, and React handles the updates to match that state.

    **Example:**
    ```jsx
    // Declarative (React)
    return <button className={isLiked ? 'blue' : 'grey'}>Like</button>;
    ```

    **[⬆ Back to Top](#table-of-contents)**

235. ### What are the benefits of using TypeScript with ReactJS?

1.  **Static Typing**: Catches type-related errors during development rather than at runtime.
2.  **Improved IDE Support**: Provides better autocomplete, parameter hints, and navigation.
3.  **Refactoring Safety**: Makes it easier and safer to rename components or props across large codebases.
4.  **Self-Documenting Code**: Interfaces and types clearly define the shape of props and state.

**[⬆ Back to Top](#table-of-contents)**

236. ### How do you make sure that user remains authenticated on page refresh while using Context API State Management?

To persist authentication state on refresh, you should initialize your Context state from a persistent storage like **`localStorage`** or **`sessionStorage`**.

**Example:**
```jsx
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
```

**[⬆ Back to Top](#table-of-contents)**

237. ### What are the benefits of new JSX transform?

1.  **No `import React`**: You no longer need to import React to use JSX.
2.  **Smaller Bundle**: It can slightly reduce your bundle size depending on the compiler.
3.  **Future Improvements**: It enables future features that require React to be aware of how JSX is created.

**[⬆ Back to Top](#table-of-contents)**

238. ### How is the new JSX transform different from old transform??

-   **Old Transform**: Converts JSX into `React.createElement(...)` calls. This required `React` to be in scope.
-   **New Transform**: Automatically imports special functions from the React package (e.g., `_jsx`) and calls them. This works without an explicit `import React`.

**Example (New):**
```javascript
// Input
function App() {
  return <h1>Hello World</h1>;
}

// Output (simplified)
import { jsx as _jsx } from 'react/jsx-runtime';
function App() {
  return _jsx('h1', { children: 'Hello World' });
}
```

**[⬆ Back to Top](#table-of-contents)**

239. ### What are React Server components?

**React Server Components (RSC)** are components that execute exclusively on the server. They allow developers to keep large dependencies on the server, resulting in zero-sized bundles for those components on the client. They also enable direct access to server-side resources like databases or file systems.

**[⬆ Back to Top](#table-of-contents)**

240. ### What is prop drilling?

**Prop drilling** is the process of passing data through multiple layers of intermediate components to reach a deeply nested component that actually needs the data. This makes code harder to maintain and refactor. Solutions include **Context API** or state management libraries like **Redux/Zustand**.

**[⬆ Back to Top](#table-of-contents)**

241. ### What is the difference between useState and useRef hook?

-   **`useState`**: Used to manage state that, when updated, triggers a **re-render** of the component to reflect changes in the UI.
-   **`useRef`**: Used to persist a value between renders **without triggering a re-render**. It returns a mutable object with a `.current` property. Common for DOM access or keeping track of "previous" values.

**[⬆ Back to Top](#table-of-contents)**

242. ### What is a wrapper component?

A **wrapper component** (often called a Higher-Order Component pattern or simply a "Layout component") is a component that encapsulates other components (`children`) to provide shared functionality, styling, or context providers.

**Example:**
```jsx
const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
```

**[⬆ Back to Top](#table-of-contents)**

243. ### What are the differences between useEffect and useLayoutEffect hooks?

-   **`useEffect`**: Runs **asynchronously** after the browser has finished painting the screen. This is suitable for most side effects (data fetching, logging).
-   **`useLayoutEffect`**: Runs **synchronously** after all DOM mutations but **before** the browser paints. This is useful when you need to measure DOM elements and perform updates before the user sees anything to prevent visual flickering.

**[⬆ Back to Top](#table-of-contents)**

244. ### What are the differences between Functional and Class Components?

| Feature | Functional Components | Class Components |
| :--- | :--- | :--- |
| **State** | Handled via `useState` Hook | Handled via `this.state` |
| **Lifecycle** | Handled via `useEffect` Hook | Lifecycle methods (e.g., `componentDidMount`) |
| **Syntax** | Simple JavaScript functions | ES6 Classes extending `React.Component` |
| **`this`** | No `this` context needed | Requires binding or arrow functions |
| **Standard** | Modern industry standard | Mostly legacy/maintenance mode |

**[⬆ Back to Top](#table-of-contents)**

245. ### What is strict mode in React?

**`StrictMode`** is a tool for highlighting potential problems in an application. Like `Fragment`, `StrictMode` does not render any visible UI. It activates additional checks and warnings for its descendants.

**Example:**
```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

**[⬆ Back to Top](#table-of-contents)**

246. ### What is the benefit of strict mode?

-   **Identifies Unsafe Lifecycles**: Warns about deprecated or unsafe lifecycle methods.
-   **Warns about Legacy API Usage**: Flags usage of older APIs like `findDOMNode` or legacy context.
-   **Detects Unexpected Side Effects**: Helps ensure that your rendering phase is pure by double-invoking certain functions (like the component body or `setState` updaters).

**[⬆ Back to Top](#table-of-contents)**

247. ### Why does strict mode render twice in React?

In development, React **intentionally double-invokes** certain functions (like component bodies, `useState` initializers, and `useEffect`) to help you find bugs. Rendering should be a "pure" calculation; by rendering twice, React helps ensure that your components don't have hidden side effects during the render phase. This behavior only happens in **Development Mode** and does not affect production.

**[⬆ Back to Top](#table-of-contents)**

248. ### What are the rules of JSX?

1.  **Return a Single Root**: Multiple elements must be wrapped in a single parent tag (like `<div>` or `<>`).
2.  **Close All Tags**: All tags must be explicitly closed, including self-closing tags like `<img />`.
3.  **Use camelCase**: Attributes should use `camelCase` (e.g., `className` instead of `class`, `onClick` instead of `onclick`).

**[⬆ Back to Top](#table-of-contents)**

249. ### What is the reason behind multiple JSX tags to be wrapped?

JSX is transformed into a **single JavaScript function call** (e.g., `_jsx()` or `React.createElement()`). Just as a JavaScript function can only return one value, a component can only return one JSX element. Wrapping them in a parent or Fragment ensures you are returning a single tree of data.

**[⬆ Back to Top](#table-of-contents)**

250. ### How do you prevent mutating array variables?

In React, state should be treated as **immutable**. To update an array without mutating the original, use non-mutating methods that return a new array:
-   **`map()`**: Transform items.
-   **`filter()`**: Remove items.
-   **Spread operator `[...]`**: Create a copy or add items.
-   **`concat()`**: Merge arrays.

**Example:**
```javascript
// Add item:
setItems([...items, newItem]);

// Remove item:
setItems(items.filter(item => item.id !== id));
```

**[⬆ Back to Top](#table-of-contents)**

251. ### What are capture phase events?

By default, events bubble up (from child to parent). However, you can catch events during the **capture phase** (traveling down from the root to the target) by adding `Capture` to the event name (e.g., `onClickCapture`).

**Example:**
```jsx
<div onClickCapture={() => console.log('1. Parent Capture')}>
  <button onClick={() => console.log('2. Button Bubble')}>Click</button>
</div>
```

**[⬆ Back to Top](#table-of-contents)**

252. ### How does React updates screen in an application?

React updates the UI in three steps:
1.  **Trigger**: Initiated by an initial render (via `createRoot`) or a state update.
2.  **Render**: React calls your components to determine what needs to change (reconciliation).
3.  **Commit**: React applies the calculated changes to the real DOM.

**[⬆ Back to Top](#table-of-contents)**

253. ### How does React batch multiple state updates?

**Batching** is when React groups multiple state updates into a single re-render for better performance. In **React 18**, "Automatic Batching" works for all updates inside promises, timeouts, and native event handlers.

**[⬆ Back to Top](#table-of-contents)**

254. ### Is it possible to prevent automatic batching?

**Yes**, using **`flushSync`** from `react-dom`. It forces React to flush updates to the DOM immediately. Note: Use this sparingly as it can hurt performance.

**Example:**
```jsx
import { flushSync } from 'react-dom';

function handleClick() {
  flushSync(() => {
    setCount(c => c + 1); // DOM updates immediately
  });
  // React renders again here
}
```

**[⬆ Back to Top](#table-of-contents)**

255. ### What is React hydration?

**Hydration** is the process of attaching event handlers to the static HTML that was rendered on the server. This makes the static page interactive on the client.

**Example:**
```jsx
import { hydrateRoot } from 'react-dom/client';
hydrateRoot(document.getElementById('root'), <App />);
```

**[⬆ Back to Top](#table-of-contents)**

256. ### How do you update objects inside state?

You should treat state as **immutable**. To update an object, create a new one using the **spread operator (`...`)**.

**Example:**
```javascript
setUser({ ...user, name: 'New Name' });
```

**[⬆ Back to Top](#table-of-contents)**

257. ### How do you update nested objects inside state?

You must spread every level of nesting to ensure immutability.

**Example:**
```javascript
setUser({
  ...user,
  address: { ...user.address, city: 'New City' }
});
```

**[⬆ Back to Top](#table-of-contents)**

258. ### How do you update arrays inside state?

Use non-mutating methods like **`map()`**, **`filter()`**, or the **spread operator**.

**Example:**
```javascript
setItems([...items, newItem]); // Add
setItems(items.filter(i => i.id !== 1)); // Remove
```

**[⬆ Back to Top](#table-of-contents)**

259. ### How do you use immer library for state updates?

**Immer** allows you to write code that looks like mutation but is actually immutable under the hood using a **Draft** proxy.

**Example:**
```jsx
import { useImmer } from 'use-immer';

const [user, setUser] = useImmer({ name: 'John', address: { city: 'NY' } });

setUser(draft => {
  draft.address.city = 'LA'; // Looks like mutation, but it's safe!
});
```

**[⬆ Back to Top](#table-of-contents)**

260. ### What are the benefits of preventing the direct state mutations?

1.  **Predictability**: Ensures data changes are traceable and consistent.
2.  **Performance**: Allows React to use cheap reference checks (`prevProps === nextProps`) to decide whether to re-render.
3.  **Time-Travel Debugging**: Enables features like Redux DevTools to move between states.

**[⬆ Back to Top](#table-of-contents)**

**[⬆ Back to Top](#table-of-contents)**

261. ### What are the preferred and non-preferred array operations for updating the state?

| Action | Preferred (Non-mutating) | Non-preferred (Mutating) |
| :--- | :--- | :--- |
| **Adding** | `concat`, `[...arr]` | `push`, `unshift` |
| **Removing** | `filter`, `slice` | `pop`, `shift`, `splice` |
| **Replacing** | `map` | `splice`, `arr[i] = val` |
| **Sorting** | `[...arr].sort()` | `reverse`, `sort` |

**[⬆ Back to Top](#table-of-contents)**

262. ### What will happen by defining nested function components?

Defining a component inside another component is a major **anti-pattern**.
1.  **Performance**: The inner component is re-created on every render of the parent.
2.  **State Loss**: Since it's a "new" component type every time, React will unmount and remount it, losing all internal state and focus.

**[⬆ Back to Top](#table-of-contents)**

263. ### Can I use keys for non-list items?

**Yes.** You can use the `key` prop on any component to **force React to reset its state**. When the key changes, React treats it as a brand-new component instance.

**Example:**
```jsx
<UserProfile key={userId} /> // Resets state when userId changes
```

**[⬆ Back to Top](#table-of-contents)**

264. ### What are the guidelines to be followed for writing reducers?

1.  **Must be Pure**: No side effects (API calls, timers, etc.).
2.  **Immutable Updates**: Never mutate the current state; always return a new object/array.
3.  **Deterministic**: The same input must always result in the same output.

**[⬆ Back to Top](#table-of-contents)**

265. ### How does ReactJS work behind the scenes?

React uses a **Virtual DOM** and a reconciliation algorithm (Fiber).
1.  **Reconciliation**: When state changes, React creates a new VDOM tree.
2.  **Diffing**: It compares the new tree with the previous one.
3.  **Fiber**: The engine that enables "Concurrent Rendering," allowing React to pause and resume work to keep the UI responsive.

**[⬆ Back to Top](#table-of-contents)**

266. ### How is `useReducer` Different from `useState`?

-   **`useState`**: Best for simple state (strings, numbers, simple objects).
-   **`useReducer`**: Best for complex state logic, multiple sub-values, or when the next state depends on the previous one. It centralizes logic in a reducer function, making it easier to test.

**[⬆ Back to Top](#table-of-contents)**

267. ### What is useContext? What are the steps to follow for useContext?

**`useContext`** provides a way to pass data through the component tree without manually passing props at every level.

**Steps:**
1.  **Create**: `const MyContext = createContext(defaultValue);`
2.  **Provide**: `<MyContext.Provider value={...}>`
3.  **Consume**: `const value = useContext(MyContext);`

**[⬆ Back to Top](#table-of-contents)**

268. ### What are the use cases of useContext hook?

-   **Theming**: Sharing light/dark mode status.
-   **Authentication**: Providing the current user's profile to all components.
-   **Internationalization**: Handling multi-language support (locales).
-   **Configuration**: Sharing app-wide settings (e.g., API endpoints).

**[⬆ Back to Top](#table-of-contents)**

269. ### When to use client and server components?

-   **Server Components**: Default choice for data fetching, direct backend access, and SEO. They reduce the amount of JavaScript sent to the browser.
-   **Client Components**: Use for interactivity (`useState`, `useEffect`), browser-only APIs (e.g., `window`, `localStorage`), and event listeners.

**[⬆ Back to Top](#table-of-contents)**

270. ### What are the differences between page router and app router in nextjs?

-   **Pages Router**: Legacy system based on the `pages/` directory. Each file is a route. Uses `getStaticProps`/`getServerSideProps`.
-   **App Router**: Modern system based on the `app/` directory. Built on **React Server Components**. Supports nested layouts, streaming, and simplifies data fetching with `async/await`.

**[⬆ Back to Top](#table-of-contents)**

271. ### Can you describe the useMemo() Hook?

**`useMemo`** is a Hook that caches the **result of a calculation** between re-renders. It is used to optimize performance by avoiding expensive computations on every render if the dependencies haven't changed.

**Example:**
```jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

**[⬆ Back to Top](#table-of-contents)**

272. ### Can Hooks be used in class components?

**No.** Hooks can only be used in Functional Components. However, you can use a Higher-Order Component (HOC) or Render Prop to pass Hook-based values into a class component.

**[⬆ Back to Top](#table-of-contents)**

273. ### What is an updater function? Should an updater function be used in all cases?

An **updater function** is a function passed to the state setter (e.g., `setCount(prev => prev + 1)`). It should be used whenever the new state depends on the **previous state** to ensure you are working with the most up-to-date value, especially during batched updates.

**Example:**
```javascript
setCount(prevCount => prevCount + 1);
```

**[⬆ Back to Top](#table-of-contents)**

274. ### Can useState take a function as an initial value?

**Yes.** This is called **lazy initialization**. React will only execute the function during the initial render. Use this for expensive operations like reading from `localStorage` or parsing large data.

**Example:**
```javascript
const [user, setUser] = useState(() => {
  const saved = localStorage.getItem("user");
  return saved ? JSON.parse(saved) : null;
});
```

**[⬆ Back to Top](#table-of-contents)**

275. ### What types of values can `useState` hold?

`useState` can hold **any JavaScript type**:
-   **Primitives**: `string`, `number`, `boolean`, `null`, `undefined`.
-   **Complex Types**: `object`, `array`.
-   **Functions**: Though rare, you can store a function (must be wrapped in another function to avoid lazy initialization execution).

**[⬆ Back to Top](#table-of-contents)**

276. ### What happens if you call `useState` conditionally?

It will break the **Rules of Hooks**. React relies on the **order** of Hook calls to associate state with the correct component. Calling them conditionally (inside `if` or `for`) can shift the index of subsequent Hooks, leading to bugs or runtime errors.

**[⬆ Back to Top](#table-of-contents)**

277. ### Is useState Synchronous or Asynchronous?

The `useState` setter is **asynchronous** (queued). React batches state updates and re-renders the component only after the event handler finishes. You cannot access the new state immediately after calling the setter.

**Example:**
```javascript
setCount(count + 1);
console.log(count); // Still logs the OLD value
```

**[⬆ Back to Top](#table-of-contents)**

278. ### Can you explain how useState works internally?

React maintains an **array of state slots** for every component.
1.  **Index Tracking**: React uses an internal pointer (cursor) that increments with every Hook call.
2.  **Persistence**: On re-render, React resets the pointer and retrieves state from the array using the index.
3.  **Queueing**: When you call `setState`, React doesn't change the value immediately but adds the update to a **queue** for the next render.

**[⬆ Back to Top](#table-of-contents)**

279. ### What is `useReducer`? Why do you use useReducer?

**`useReducer`** is a Hook for managing complex state logic. It is similar to Redux: you dispatch **actions** to a **reducer** function, which returns the next state. Use it when:
-   State has multiple sub-values.
-   Next state depends on the previous state.
-   You want to separate state logic from component UI.

**[⬆ Back to Top](#table-of-contents)**

280. ### How does `useReducer` works? Explain with an example

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

**[⬆ Back to Top](#table-of-contents)**

281. ### Can you combine **useReducer** with **useContext**?

**Yes.** This is a common pattern for "Global State Management" without Redux. You provide the `dispatch` function via Context, allowing any child component to trigger global state changes.

**[⬆ Back to Top](#table-of-contents)**

282. ### Can you dispatch multiple actions in a row with useReducer?

**Yes.** Just like `useState`, multiple `dispatch` calls in the same event handler will be **batched** by React to avoid unnecessary re-renders.

**[⬆ Back to Top](#table-of-contents)**

283. ### Is dispatch from useReducer asynchronous and does it update state immediately?

Like `useState`, the `dispatch` function is **asynchronous** in its effect on the UI. It enqueues the action, and React updates the state and re-renders later. You cannot see the updated state in the same function call.

**[⬆ Back to Top](#table-of-contents)**

284. ### How does useContext works? Explain with an example

```jsx
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
  return <div>Theme: {theme}</div>;
}
```

**[⬆ Back to Top](#table-of-contents)**

285. ### Can You Use Multiple Contexts in One Component?

**Yes.** You can call `useContext` multiple times in a single component to consume different contexts.

**Example:**
```jsx
const theme = useContext(ThemeContext);
const user = useContext(UserContext);
```

**[⬆ Back to Top](#table-of-contents)**

286. ### What's a common pitfall when using useContext with objects?

When the context value is an **object**, every component consuming that context will **re-render whenever the object reference changes**, even if the specific property they use hasn't changed. To avoid this, you can memoize the context value or split the context into smaller pieces.

**Example:**
```jsx
const value = useMemo(() => ({ user, settings }), [user, settings]);
return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
```

**[⬆ Back to Top](#table-of-contents)**

287. ### What would the context value be for no matching provider?

If a component calls `useContext` and there is no matching Provider above it in the tree, the value will be the **default value** passed to `createContext(defaultValue)`.

**[⬆ Back to Top](#table-of-contents)**

288. ### How do reactive dependencies in the useEffect dependency array affect its execution behavior?

-   **`[]` (Empty)**: Runs only once on **mount**.
-   **`[dep1, dep2]`**: Runs on **mount** and whenever **any** dependency changes.
-   **No array**: Runs after **every** render.

**[⬆ Back to Top](#table-of-contents)**

289. ### When and how often does React invoke the setup and cleanup functions inside a useEffect hook?

-   **Setup**: Runs after the component is added to the DOM and after re-renders where dependencies changed.
-   **Cleanup**: Runs **before** the next setup (to clean up the previous effect) and when the component is **unmounted**.

**[⬆ Back to Top](#table-of-contents)**

290. ### What happens if you return a Promise from useEffect??

React will throw a **warning/error**. The cleanup function returned from `useEffect` must be synchronous. To use async/await, define an async function **inside** the effect.

**Example:**
```jsx
useEffect(() => {
  const fetchData = async () => {
    const data = await fetch(...);
  };
  fetchData();
}, []);
```

**[⬆ Back to Top](#table-of-contents)**

290. ### Can you have multiple useEffect hooks in a single component?

**Yes.** You can use as many as you need. They will execute in the **order they are defined** in the component body. This helps separate unrelated side-effect logic.

    **[⬆ Back to Top](#table-of-contents)**

291. ### How to prevent infinite loops with useEffect?

Infinite loops occur when an effect **updates a state** that is also a **dependency** of that same effect.
**Solutions:**
1.  **Functional Updates**: `setCount(c => c + 1)` instead of adding `count` to the dependency array.
2.  **Verify Dependencies**: Only include values that actually need to trigger a re-run.
3.  **Primitive Checks**: If the dependency is an object/array, ensure it doesn't get a new reference on every render.

**[⬆ Back to Top](#table-of-contents)**

292. ### What are the usecases of useLayoutEffect?

-   **Measuring Layout**: Getting the width, height, or position of a DOM element before it's displayed.
-   **Preventing Flickering**: Synchronously updating the DOM (e.g., tooltip positioning) so the user doesn't see the intermediate "wrong" state.
-   **Scroll Management**: Adjusting scroll position before the browser paints.

**[⬆ Back to Top](#table-of-contents)**

293. ### How does useLayoutEffect work during server-side rendering (SSR)?

**It doesn't.** `useLayoutEffect` only runs on the client. React will issue a warning if you use it in a SSR component. If you need a layout effect, either use `useEffect` or ensure the code only runs in a client-side environment.

**[⬆ Back to Top](#table-of-contents)**

294. ### What happens if you use useLayoutEffect for non-layout logic?

It **blocks the browser from painting**. Since it runs synchronously, the user will see a blank screen or a frozen UI until the effect finishes. Always use `useEffect` unless you specifically need to prevent a visual flicker.

**[⬆ Back to Top](#table-of-contents)**

295. ### How does useLayoutEffect cause layout thrashing?

**Layout thrashing** occurs when you repeatedly read from the DOM (e.g., `offsetWidth`) and then write to it (e.g., `style.width`) in a way that forces the browser to recalculate the layout multiple times in a single frame. Doing this inside `useLayoutEffect` can significantly degrade performance.

**[⬆ Back to Top](#table-of-contents)**

296. ### How Do You Use useRef to Access a DOM Element in React? Give an example.

1.  Create a ref: `const myRef = useRef(null);`
2.  Attach it: `<div ref={myRef}>...</div>`
3.  Access it: `myRef.current` (available after mount).

**Example:**
```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => inputEl.current.focus();

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

**[⬆ Back to Top](#table-of-contents)**

297. ### Can you use useRef to persist values across renders??

**Yes.** `useRef` is perfect for storing mutable values that **don't trigger a re-render** when they change. It persists for the full lifetime of the component.

**[⬆ Back to Top](#table-of-contents)**

298. ###  Can useRef be used to store previous values?

**Yes.** You can update a ref inside `useEffect` to capture the value from the previous render, as `useEffect` runs after the render is committed.

**Example:**
```jsx
const [count, setCount] = useState(0);
const prevCountRef = useRef();

useEffect(() => {
  prevCountRef.current = count;
});

const prevCount = prevCountRef.current;
```

**[⬆ Back to Top](#table-of-contents)**

299. ### Is it possible to access a ref in the render method?

**No.** You should not read or write `ref.current` during the render phase. React expects components to be **pure functions** during rendering. Since refs are mutable, accessing them can lead to unpredictable behavior and bugs. Access them only inside `useEffect` or event handlers.

**[⬆ Back to Top](#table-of-contents)**

300. ### What are the common usecases of useRef hook?

-   **Managing Focus, Text Selection, or Media Playback**: Accessing DOM APIs directly.
-   **Storing Timers/Intervals**: Keeping track of `setTimeout` or `setInterval` IDs to clear them later.
-   **Persisting Values**: Storing data that shouldn't trigger a re-render (e.g., "previous" state).
-   **Integrating with Non-React Libraries**: Passing DOM nodes to D3, Google Maps, etc.

**[⬆ Back to Top](#table-of-contents)**

301. ### What is useImperativeHandle Hook? Give an example.

**`useImperativeHandle`** customizes the instance value that is exposed to parent components when using `ref`. It should be used with `forwardRef`.

**Example:**
```jsx
const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  return <input ref={inputRef} />;
});
```

**[⬆ Back to Top](#table-of-contents)**

302. ### When should you use useImperativeHandle?

Use it only for **imperative actions** that can't be handled via props, such as:
-   Focusing or selecting text.
-   Scrolling to a specific position.
-   Triggering animations or resetting a child component's internal state from the parent.

**[⬆ Back to Top](#table-of-contents)**

303. ### Is that possible to use useImperativeHandle without forwardRef?

**No.** `useImperativeHandle` requires a `ref` object passed from the parent, which is only possible in functional components using `forwardRef`.

**[⬆ Back to Top](#table-of-contents)**

304. ### How is useMemo different from useCallback?

-   **`useMemo`**: Memoizes the **result** of a calculation. Returns a value.
-   **`useCallback`**: Memoizes the **function definition** itself. Returns a function.

**[⬆ Back to Top](#table-of-contents)**

305. ### Does useMemo prevent re-rendering of child components?

**Not by itself.** `useMemo` only ensures the **value** remains the same. To prevent a child from re-rendering, you must wrap the child in **`React.memo`** and pass that memoized value as a prop.

**[⬆ Back to Top](#table-of-contents)**

306. ### What is `useCallback` and why is it used?

**`useCallback`** is a Hook that returns a memoized version of a callback function. It is used to prevent child components from re-rendering unnecessarily when they receive a function as a prop, as long as the dependencies haven't changed.

**[⬆ Back to Top](#table-of-contents)**

307. ### What are Custom React Hooks, and How Can You Develop One?

**Custom Hooks** are JavaScript functions whose names start with `use` and that can call other Hooks. They allow you to extract component logic into reusable functions.

**Example:**
```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
}
```

**[⬆ Back to Top](#table-of-contents)**

309. ### How does React Fiber works? Explain in detail.

**React Fiber** is the reconciliation engine in React 16+. Its main goal is to enable **incremental rendering**—the ability to split rendering work into chunks and spread it out over multiple frames.

**Key Concepts:**
-   **Reconciliation**: The algorithm used to diff trees.
-   **Fiber**: A unit of work (a JavaScript object) corresponding to a component.
-   **Phases**:
    1.  **Render Phase**: Asynchronous, interruptible. Builds the work-in-progress tree.
    2.  **Commit Phase**: Synchronous, non-interruptible. Applies changes to the DOM.
-   **Concurrency**: Allows React to prioritize urgent updates (like typing) over low-priority updates (like list rendering).

**[⬆ Back to Top](#table-of-contents)**

310. ### What is the useId hook and when should you use it?

**`useId`** is a Hook for generating unique IDs that are stable across the server and client. It is primarily used for **accessibility attributes** (like `aria-describedby`) to link HTML elements together.

**Example:**
```jsx
const id = useId();
return (
  <>
    <label htmlFor={id + '-input'}>Name</label>
    <input id={id + '-input'} />
  </>
);
```

**[⬆ Back to Top](#table-of-contents)**

311. ### What is the useDeferredValue hook?

**`useDeferredValue`** allows you to defer updating a non-urgent part of the UI. It returns a "deferred" version of a value that will "lag behind" the actual value during a heavy re-render, keeping the interface responsive.

**Example:**
```jsx
const deferredValue = useDeferredValue(userInput);
```

**[⬆ Back to Top](#table-of-contents)**

312. ### What is the useTransition hook and how does it differ from useDeferredValue?

-   **`useTransition`**: Gives you a way to mark a state update as a **transition** (non-urgent). It provides an `isPending` flag.
-   **`useDeferredValue`**: Used when you receive a value from a parent (props) and want to defer the re-render triggered by that value.

**Use Transition** for actions (e.g., `startTransition(() => setShowList(true))`).
**Use DeferredValue** for data (e.g., `const deferredData = useDeferredValue(data)`).

**[⬆ Back to Top](#table-of-contents)**

313. ### What is the useSyncExternalStore hook?

**`useSyncExternalStore`** is a Hook recommended for reading and subscribing from external data sources (e.g., Redux, Zustand, or browser APIs like `navigator.onLine`) in a way that is compatible with **Concurrent Rendering** (preventing "teaking").

**Example:**
```jsx
const isOnline = useSyncExternalStore(subscribe, getSnapshot);
```

**[⬆ Back to Top](#table-of-contents)**

314. ### What is the useInsertionEffect hook?

**`useInsertionEffect`** is a Hook for CSS-in-JS library authors. It fires **before any layout effects** and is used to inject `<style>` tags into the DOM synchronously. It should not be used for regular application logic.

**[⬆ Back to Top](#table-of-contents)**

315. ### How do you share state logic between components using custom hooks?

By extracting the logic into a **Custom Hook**, you can reuse the same stateful logic in multiple components. Each component using the hook gets its own **isolated state**.

**Example:**
```jsx
const { count, increment } = useCounter(); // Component A
const { count, increment } = useCounter(); // Component B (Independent)
```

**[⬆ Back to Top](#table-of-contents)**

316. ### What is the useDebugValue hook?

**`useDebugValue`** is used to display a label for custom Hooks in **React DevTools**. It helps developers understand the internal state of a custom hook at a glance.

**Example:**
```jsx
useDebugValue(isOnline ? 'Online' : 'Offline');
```

**[⬆ Back to Top](#table-of-contents)**

317. ### How do you handle cleanup in useEffect?

To handle cleanup, **return a function** from your `useEffect` callback. React will execute this function before the effect re-runs and when the component unmounts. It is used to clear timers, subscriptions, or global event listeners.

**Example:**
```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer); // Cleanup
}, []);
```

**[⬆ Back to Top](#table-of-contents)**

317. ### What are the differences between useEffect and useEvent (experimental)?

-   **`useEffect`**: Re-runs the entire logic whenever a dependency changes. Its identity is not stable if it depends on changing values.
-   **`useEvent`**: (Experimental) Defines an event handler with a **stable identity** (doesn't change across renders) but always has access to the **latest props and state** without needing them in a dependency array.

**[⬆ Back to Top](#table-of-contents)**

318. ### What are the best practices for using React Hooks?

1.  **Call Hooks at the Top Level**: Never call Hooks inside loops, conditions, or nested functions.
2.  **Use the ESLint Plugin**: Always use `eslint-plugin-react-hooks` to catch dependency errors.
3.  **Keep Effects Focused**: Use multiple `useEffect` Hooks for different concerns instead of one giant effect.
4.  **Extract Reusable Logic**: Use Custom Hooks for shared stateful logic.
5.  **Audit Dependencies**: Ensure all reactive values (props, state) used inside an effect are listed in the dependency array.

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