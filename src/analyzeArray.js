let analyzeArray = (arr) => {
    let result = {
        max : max(arr),
        min : min(arr),
        avg : avg(arr),
        length : len(arr),
    };

    return result;
}


function max (arr) {
   return Math.max(...arr);
}

function min (arr){
    return Math.min(...arr);
}

function avg(arr){
    let sum = arr.reduce((prev,curr) => prev + curr , 0);
    let result = sum / arr.length;
    return result;
    }


function len(arr){
    return arr.length;
}



module.exports = analyzeArray;