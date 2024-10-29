let reverseString = (inputString) => {
    let length = inputString.length;
    let result = [];
    for (let i = length; i >= 0 ; i--){
        result.push(inputString[i]);
        }
    return result.join("");
}

module.exports = reverseString;