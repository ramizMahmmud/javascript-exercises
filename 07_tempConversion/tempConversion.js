const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32)*5)/9;
  if(Number.isInteger(celsius)){
    return celsius;
  }
  else {
    celsius = Number(celsius.toFixed(1));
    return celsius;
  }
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius/5)*9 + 32;
  if(Number.isInteger(fahrenheit)){
    return fahrenheit;
  }
  else {
    fahrenheit = Number(fahrenheit.toFixed(1));
    return fahrenheit;
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
