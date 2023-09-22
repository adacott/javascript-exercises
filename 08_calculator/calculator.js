/**
 * 
 * @param  {number} num 
 */
const add = function (...num) {
  return num.reduce(function (acc, cur) {
    return acc + cur;
  })
};

const subtract = function (...num) {
  return num.reduce(function (acc, cur) {
    return acc - cur;
  })
};

const sum = function (arry) {
  if (arry.length > 0) {
    return arry.reduce(function (acc, cur) {
      return acc + cur;
    })
  }
  else {
    return 0;
  }
};

const multiply = function (...num) {
  return num.reduce(function (acc, cur) {
    return acc * cur;
  });
}

const power = function (...num) {
  return num.reduce(function (acc, cur) {
    return acc ** cur;
  });
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  else {
    let total = 1;
    while (num > 0) {
      total = total * num;
      num--;
    }
    return total;
  }
};

// console.log(add(0, 0));
// console.log(subtract(5, 15));
// console.log(sum([5, 6, 13, -4]));
// console.log(multiply(5, 6, 3, 2));
// console.log(power(2, 2));
// console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
