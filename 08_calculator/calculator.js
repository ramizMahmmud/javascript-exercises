const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  total = 0;
  for(let i = 0; i< arr.length; i++){
    total += arr[i];
  }
	return total;
};

const multiply = function(arr) {
  product = 1;
  for(let i = 0; i< arr.length; i++)
  {
    product *= arr[i];
  }
  return product;
};

const power = function(a,b) {
	return a **b;
};

const factorial = function(a) {
  fact = 1;
  if (a === 0) return 1;
  else {
    for(let i = a; i>=1; i--){
      fact *= i;
    }
    
  }
  return fact;
	
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
