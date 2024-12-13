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

const multiply = function(arr) {
  let total = arr[0]
  for(let i = 1; i < arr.length; i++) {
    total = total *= arr[i]
  }
  console.log(`Total ${total}`)
  return total
};

const power = function(num, power) {
	let total = Math.pow(num, power)
  console.log(total)
  
  return total
  
};

const factorial = function(num) {
  let ans = num;
  console.log(`Factors of ${num}`)
  if(num === 0) {
    ans = 1;
    console.log(ans)
    return ans
  }
	for(let i=1; i < num; i++)
  {
    console.log(`answer = ans ${ans} *= i${i} ${ans *=i}`)
    console.log(`answer ${ans}`)
    
    //console.log(`log of i ${i}`)
    
  }
  return ans
};

//multiply([4,5,6])
//power(4,3)
factorial(0)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
