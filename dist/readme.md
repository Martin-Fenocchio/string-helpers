# String Helpers 🚀

A lightweight library for common string manipulation tasks 🧠.

## Installation

You can install `string-helpers` using npm or yarn:

```bash
npm install @martin-fenocchio/string-helpers
```

or

```bash
yarn add @martin-fenocchio/string-helpers
```

## Usage

Here are some examples of how you can use `string-helpers`:

```javascript
const {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  capitalize,
  reverse,
  truncate,
} = require("@martin-fenocchio/string-helpers");

// Convert a string to camelCase
console.log(toCamelCase("hello world")); // Output: helloWorld 🔄

// Convert a string to PascalCase
console.log(toPascalCase("hello world")); // Output: HelloWorld 🔄

// Convert a string to snake_case
console.log(toSnakeCase("Hello World")); // Output: hello_world 🔄

// Convert a string to kebab-case
console.log(toKebabCase("Hello World")); // Output: hello-world 🔄

// Capitalize the first letter of a string
console.log(capitalize("hello world")); // Output: Hello World 🔄

// Reverse a string
console.log(reverse("hello world")); // Output: dlrow olleh 🔄

// Truncate a string to a specific length and add "..." if truncated
console.log(truncate("hello world", 5)); // Output: hello... 🔄
```

## API

### `toCamelCase(str)`

Converts a string to camelCase. 🔄

### `toPascalCase(str)`

Converts a string to PascalCase. 🔄

### `toSnakeCase(str)`

Converts a string to snake_case. 🔄

### `toKebabCase(str)`

Converts a string to kebab-case. 🔄

### `capitalize(str)`

Capitalizes the first letter of a string. 🔄

### `reverse(str)`

Reverses a string. 🔄

### `truncate(str, length)`

Truncates a string to a specific length and adds "..." if truncated. 🔄

### `isPalindrome(str)`

Checks if a string is a palindrome (case insensitive). 🔄

### `wordCount(str)`

Counts the number of words in a string. 🔄

### `generateRandomString(length)`

Generates a random string of the specified length. 🔄

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. 🚀

## License

`string-helpers` is licensed under the ISC License.
