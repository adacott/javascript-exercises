/**
 * 
 * @param {array} array
 * @param  {...any} args 
 */
const removeFromArray = function(array, ...args) {
    for(i = 0; i < args.length; i++){
        if(array.includes(args[i])){
            index = array.indexOf(args[i]);
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
