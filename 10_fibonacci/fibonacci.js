const fibonacci = function (num) {
    let fib = 1, temp = 0, total = 0;
    let arry = [1];
    num = parseInt(num);
    if (num < 0) {
        return "OOPS"
    }

    for (let i = 1; i < num; i++) {
        total = fib + temp;
        arry[i] = total;
        temp = total;
        fib = arry[i - 1];
    }
    return arry[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
