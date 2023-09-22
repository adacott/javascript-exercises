const palindromes = function (str) {
    // Define regular expression to use
    let re = /[\W_]|\d/g;

    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); // common technique to reverse string

    return reverseStr === lowRegStr;
}

// Do not edit below this line
module.exports = palindromes;


