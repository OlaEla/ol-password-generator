// Генератор паролей
function generatePassword(length = 8, options = {}) {
    const { useUppercase = true, useNumbers = true, useSymbols = true } = options;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let availableChars = lowercaseChars;
    if (useUppercase) availableChars += uppercaseChars;
    if (useNumbers) availableChars += numberChars;
    if (useSymbols) availableChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    return password;
}

module.exports = { generatePassword };
