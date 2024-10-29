let caesarCipher = (inputStr, shiftAmount) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedStr = '';

    for (let char of inputStr) {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        
        if (!alphabet.includes(lowerChar)) {
            encryptedStr += char;
            continue;
        }

        const originalIndex = alphabet.indexOf(lowerChar);
        let shiftedIndex = (originalIndex + shiftAmount) % 26;
        if (shiftedIndex < 0) shiftedIndex += 26; 

        const shiftedChar = alphabet[shiftedIndex];
        
        if (isUpperCase) {
            encryptedStr += shiftedChar.toUpperCase();
        } else {
            encryptedStr += shiftedChar;
        }

    }

    return encryptedStr;
};

module.exports = caesarCipher;