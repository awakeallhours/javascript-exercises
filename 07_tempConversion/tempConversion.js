

const convertToCelsius = function(fToC) {
  let conversionF = fToC
  conversionF = (conversionF -32)*5/9
  console.log(`${fToC} Fahrentheit to ${Math.round(conversionF *10)/10} Celsius`)
  
  return Math.round(conversionF *10)/10
};

const convertToFahrenheit = function(cToF) {
  let conversionC= cToF
  conversionC = (cToF * 9/5 + 32)
  console.log(`${cToF} Celsius to ${Math.round(conversionC *10)/10} Fahrenheit`)
  return Math.round(conversionC *10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

convertToCelsius(100)
convertToFahrenheit(100)