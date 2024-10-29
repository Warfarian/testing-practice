let capitalize = (word) => {
    if (!word){
        throw new Error("Error");
    }
    let result = [];
    for (let i = 0; i< word.length; i++){
        if (i === 0){
            let capitalized = word[i].toUpperCase();
            result.push(capitalized);
        }
        else{
            result.push(word[i]);
        }
    }
    return result.join('');
};


module.exports = capitalize;

