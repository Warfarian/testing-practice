let caesarCipher = (inputStr, shiftAmount) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedStr = '';

    for (let char of inputStr) {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        
        if (!alpha.includes(lowerChar)) {
            encryptedStr += char;
            continue;
        }

        const originalIndex = alpha.indexOf(lowerChar);
        let newIndex = (originalIndex + shiftAmount) % 26;
        if (newIndex < 0) newIndex += 26; 

        const shiftedChar = alpha[newIndex];
        
        if (isUpperCase) {
            encryptedStr += shiftedChar.toUpperCase();
        } else {
            encryptedStr += shiftedChar;
        }

    }

    return encryptedStr;
};

module.exports = caesarCipher;