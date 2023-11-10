const repeatString = function(str, num) {
    let newString = "";
    if (num < 0) {
        newString = "ERROR";
        return newString;
    }else {
    for (i=1; i <= num; i++) {
        newString += str;
        
    }
    return newString;
}
};

// Do not edit below this line
module.exports = repeatString;
