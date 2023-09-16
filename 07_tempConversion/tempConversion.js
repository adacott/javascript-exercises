function round(num){
  num = Math.round(num*10)/10;
  return num;
}

// Fahrenheit to celsius is: (fahrenheit - 32) * (5/9)
const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9);
  return round(celsius);
};

// Celsius to fahrenheit is: celsius * (5/9) + 32
const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius * (9/5)) + 32;
  return round(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
