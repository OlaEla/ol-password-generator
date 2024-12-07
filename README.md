# My Password Generator

[![npm version](https://img.shields.io/npm/v/ol-password-generator.svg)](https://www.npmjs.com/package/ol-password-generator)
[![License](https://img.shields.io/npm/l/ol-password-generator.svg)](https://www.npmjs.com/package/ol-password-generator)

**My Password Generator** is a simple library for generating random and secure passwords with options to customize the length and include/exclude different types of characters.

## Installation

Install the library via NPM:

$ npm install ol-password-generator

## Usage

**Generating a Single Password**

Use the generatePassword function to create a single password with specific settings. It returns a string.

```javascript
const { generatePassword } = require("my-password-generator");

const password = generatePassword(12, {
  useUppercase: true,
  useNumbers: true,
  useSymbols: false,
});

// Example output: 'aB1cD2eF3gH'
console.log(password);
```

## Available Options

You can customize password generation by passing an options object:

| Parameter      | Description                                 | Default Value |
| -------------- | ------------------------------------------- | ------------- |
| `length`       | The length of the password (integer).       | `8`           |
| `useUppercase` | Include uppercase letters.                  | `true`        |
| `useNumbers`   | Include numbers.                            | `true`        |
| `useSymbols`   | Include special characters (!, @, #, etc.). | `true`        |

Example with customized options:

```javascript
const password = generatePassword(16, {
  useUppercase: false,
  useNumbers: true,
  useSymbols: true,
});

// Example output: '1@2#3$4%5&6*7(8'
console.log(password);
```

## How It Works

The generator creates passwords by randomly selecting characters from the following sets:

- **Lowercase letters** (`a-z`)
- **Uppercase letters** (`A-Z`)
- **Numbers** (`0-9`)
- **Special characters** (`!@#$%^&*()`)

You can exclude specific sets of characters by adjusting the options.

## Testing the Library

To test the library, you can run the following command:

```bash
$ npm test
```

## Publication

The library is published on NPM and is available at:  
[My Password Generator on npm](https://www.npmjs.com/package/ol-password-generator)

## Keywords

The following keywords are associated with this library:

- **password**
- **generator**
- **secure**
- **random**
