# List Format

Given a list of strings, implement a function `listFormat` that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.

The function should support a few options as the second parameter:

- `sorted`: Sorts the items by alphabetical order.
- `length`: Show only the first `length` items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
- `unique`: Remove duplicate items.

## Examples

```js
listFormat([]); // ''

listFormat(['Bob']); // 'Bob'
listFormat(['Bob', 'Alice']); // 'Bob and Alice'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 4,
}); // 'Bob, Ben, Tim, Jane and 1 other'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  sorted: true,
}); // 'Ben, Bob, Jane and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
```

# Solution


This question is inspired by the [`Intl.ListFormat.prototype.format()` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format) which assists with language-specific list formatting.

## Solution

By looking at the examples, we can split the solution into two sections:

1. Processing the input list – removing empty values, sorting, de-duplicating
2. Formatting the items into a second string

The first section is pretty straightforward, we can just maintain an `items` array that we mutate according to the `options`.

The second section is a little trickier, but we can observe the following:

- The `length` option splits the array into two parts
- The first part will be joined with a `', '` and the second will be joined with `'and'`. Whether to show `'X other(s)'` for the second part is dependent on whether the `length` value is a valid value within the range `[1, items.length]`

```js
const SEPARATOR = ', ';
const OTHERS_SEPARATOR = ' and ';
const OTHERS_LABEL = 'other';

/**
 * @param {Array<string>} itemsParam
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(itemsParam, options = {}) {
  // Filter falsey values.
  let items = itemsParam.filter((item) => !!item);

  if (!items || items.length === 0) {
    return '';
  }

  // No processing is needed if there's only one item.
  if (items.length === 1) {
    return items[0];
  }

  // Sort values.
  if (options.sorted) {
    items.sort();
  }

  // Remove duplicate values.
  if (options.unique) {
    items = Array.from(new Set(items));
  }

  // Length is specified and valid.
  if (
    options.length &&
    options.length > 0 &&
    options.length < items.length
  ) {
    const firstSection = items
      .slice(0, options.length)
      .join(SEPARATOR);

    const count = items.length - options.length;
    const secondSection = `${count} ${OTHERS_LABEL}${count > 1 ? 's' : ''}`;

    return [firstSection, secondSection].join(OTHERS_SEPARATOR);
  }

  // Case where length is not specified.
  const firstSection = items
    .slice(0, items.length - 1)
    .join(SEPARATOR);
  const secondSection = items[items.length - 1];

  return [firstSection, secondSection].join(OTHERS_SEPARATOR);
}
````

## Notes

This function is not as usable as the `Intl.ListFormat.prototype.format()` API because the separators are hardcoded in English. The `Intl` API is meant for internationalization (i18n) in the first place and also allows for customization of the separators (the comma and the `and`), so there shouldn't be any hardcoding of separators if this function is meant for production use.

To make this function better, we could allow customization of the list separator and the "others" separator.

## Resources

* [`Intl.ListFormat` MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)

```
```

# My Solution

```js

const SEPARATOR = ', ';             // comma + space used between items (e.g., "Bob, Ben")
const OTHERS_SEPARATOR = ' and ';    // separator for the last part (e.g., " and John")
const OTHERS_LABEL = 'other';        // base label for remaining items (pluralized later)

/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options = {}) {
  // INPUT VALIDATION --------------------------------------------------------
  if (!Array.isArray(items) || items.length === 0) {
    // If items is not array or empty → return ''
    return '';
  }

  // Extract options with defaults
  const { sorted = false, length, unique = false } = options;
  // e.g., if options = { sorted: true, length: 3 }
  // sorted → true, length → 3, unique → false

  // CLEANING INPUT ---------------------------------------------------------
  let list = items.filter(Boolean);
  // Removes empty strings, null, undefined
  // Example: ['Bob', '', 'Tim'] → ['Bob', 'Tim']

  // UNIQUE OPTION ----------------------------------------------------------
  if (unique) {
    list = [...new Set(list)];
    // Example: ['Bob', 'Ben', 'Bob'] → ['Bob', 'Ben']
  }

  // SORTED OPTION ----------------------------------------------------------
  if (sorted) {
    list = [...list].sort();
    // Example: ['Tim', 'Ben', 'Alice'] → ['Alice', 'Ben', 'Tim']
  }

  // EARLY EMPTY CHECK (IMPORTANT!) ----------------------------------------
  if (list.length === 0) {
    // After cleaning, if list becomes empty → return ''
    // e.g., ['',''] → [] → ''
    return '';
  }

  const total = list.length;  // store length once for re-use

  // LENGTH OPTION ----------------------------------------------------------
  const isValidLength = typeof length === 'number' && length > 0 && length < total;
  // Example: total=5, length=3 → valid
  // Example: total=2, length=3 → invalid

  if (isValidLength) {
    const visible = list.slice(0, length);
    // Example: list=['Bob','Ben','Tim','Jane','John'], length=3
    // visible=['Bob','Ben','Tim']

    const remaining = total - length;
    // Example: total=5, length=3 → remaining=2

    const othersLabel =
      remaining === 1 ? `1 ${OTHERS_LABEL}` : `${remaining} ${OTHERS_LABEL}s`;
    // remaining=2 → "2 others"
    // remaining=1 → "1 other"

    if (visible.length === 1) {
      // Example: list=['Bob','Ben','Tim'], length=1 → visible=['Bob']
      return visible[0] + OTHERS_SEPARATOR + othersLabel;
      // → "Bob and 2 others"
    }

    const beforeLast = visible.slice(0, -1).join(SEPARATOR);
    // Example: visible=['Bob','Ben','Tim'] → beforeLast=['Bob','Ben'] → "Bob, Ben"

    const last = visible[visible.length - 1];
    // Example: last="Tim"

    return `${beforeLast}${SEPARATOR}${last}${OTHERS_SEPARATOR}${othersLabel}`;
    // → "Bob, Ben, Tim and 2 others"
  }

  // DEFAULT FULL LIST FORMATTING ------------------------------------------

  if (total === 1) {
    // Example: ['Bob'] → "Bob"
    return list[0];
  }

  if (total === 2) {
    // Example: ['Bob','Alice'] → "Bob and Alice"
    return list[0] + OTHERS_SEPARATOR + list[1];
  }

  // 3+ items formatting
  const beforeLast = list.slice(0, -1).join(SEPARATOR);
  // Example: ['Bob','Ben','Tim','Jane','John']
  // beforeLast=['Bob','Ben','Tim','Jane'] → "Bob, Ben, Tim, Jane"

  const last = list[total - 1];
  // last="John"

  return beforeLast + OTHERS_SEPARATOR + last;
  // → "Bob, Ben, Tim, Jane and John"
}

```