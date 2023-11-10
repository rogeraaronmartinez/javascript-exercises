const reverseString = function(str) {
    
    let newWord = "";
    
    for (i = str.length-1; i >= 0; i--) {
        newWord += str[i];
    }
    
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
