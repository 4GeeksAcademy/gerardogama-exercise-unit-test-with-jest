const oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87,
};

const fromEuroToDollar = function(valueInEuro) {
  return valueInEuro * oneEuroIs["USD"];
};

const fromDollarToYen = function(valueInDollar) {
  let euros = valueInDollar / oneEuroIs["USD"];
  return euros * oneEuroIs["JPY"];
};

const fromYenToPound = function(valueInYen) {
  let euros = valueInYen / oneEuroIs["JPY"];
  return euros * oneEuroIs["GBP"];
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };