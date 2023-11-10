const sumAll = function(num1, num2) {
    let total = 0;
    let errormsg = "ERROR"
    if (num1 < 0 || num2 < 0) {
        return errormsg;
    }else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return errormsg;
    }else if (num1 < num2) {
        num1 = num1;
        num3 = num2;
    }else {
        num3 = num1;
        num1 = num2;
    }
    for (i = num1; i <= num3; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
