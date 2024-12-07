// test.js
const { generatePassword } = require('./index'); 

// Пример теста
const password = generatePassword(12, {
    useUppercase: true,
    useNumbers: true,
    useSymbols: false,
});

console.log('Generated password:', password);
