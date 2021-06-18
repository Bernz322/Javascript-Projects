const swapBtn = document.getElementById("btn");
const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const valueOne = document.getElementById("value-one");
const valueTwo = document.getElementById("value-two");
const rate = document.getElementById("rate");
const date = document.getElementById("date");

// Fetching exchange rate
let value_one = valueOne.value;
async function convert() {
  let currency_one = currencyOne.value;
  let currency_two = currencyTwo.value;

  const response = await fetch(
    `https://api.exchangerate.host/convert?from=${currency_one}&to=${currency_two}&amount=${value_one}`
  );
  const data = await response.json();

  // returns date
  date.textContent = data.date;

  // returns the conversion value
  const exchangeVal = data.info.rate;
  // updates the rate exchange
  rate.textContent = `1 ${currency_one} = ${exchangeVal} ${currency_two}`;

  // conversion of the inputted currency value
  valueTwo.value = (valueOne.value * exchangeVal).toFixed(2);
}
currencyOne.addEventListener("change", convert);
currencyTwo.addEventListener("change", convert);
valueOne.addEventListener("input", convert);
valueTwo.addEventListener("input", convert);

swapBtn.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  convert();
});
convert();
