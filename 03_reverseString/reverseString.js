/**
 * 
 * @param {string} string 
 */
const reverseString = function(string) {
    let arry = [];
    for(let i = string.length - 1; i >= 0; i--){
        arry.push((`${string[i]}`));
    }
    arry = arry.join("");
    return arry;
};

// Do not edit below this line
module.exports = reverseString;
