const palindromes = function (someText) {
    let newText = someText.toLowerCase().replace(/[\W_]/g, '');
    return newText == newText.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
