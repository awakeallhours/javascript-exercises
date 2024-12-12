const add = function(a,b) {
	let c = a+b
  return c
};

const subtract = function(a,b) {
	let c = a-b
  return c
};

const sum = function(arr) {
	let c = 0
  arr.forEach(element => {
    c = c += element
  });
  return c
};

//need to work on this
const multiply = function(arr) {
  arr.forEach(element => {
    let c = 0
    c = c *= element
  });
  return c
};

const power = function() {
	
};

const factorial = function() {
	
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
