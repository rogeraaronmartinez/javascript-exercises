const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for (num in array) {
    sum += array[num];
  }
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  for (i=0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let total = 1;

  if (num === 0) {
    total = 1;
  }else if (num === 1) {
    total = 1;
  }else {
    for (i = num; i >1; i--) {
      total *= i;
    }
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
