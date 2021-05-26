let searchCity = document.getElementById("search-bar");
let errorMsg = document.getElementById("errorMsg");
let searchBtn = document.querySelector("button");
let icon = document.getElementById("icon");
let description = document.getElementById("description");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("wind-speed");
let humidity = document.getElementById("humid");
let pressure = document.getElementById("pres");

searchBtn.addEventListener("click", () => {
  getData(searchCity.value);
});

// promise
function getData(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=65ed60fcc07612f730ef8a6a917e742b&units=metric"
  )
    .then((response) => {
      if (city == "") {
        searchCity.classList.add("error");
        errorMsg.textContent = "Please enter a city";
        errorMsg.style.visibility = "visible";
      } else if (!response.ok) {
        searchCity.classList.add("error");
        errorMsg.textContent = "City not found";
        errorMsg.style.visibility = "visible";
      } else {
        searchCity.classList.remove("error");
        errorMsg.style.visibility = "hidden";
        return response.json();
      }
    })
    .then((data) => weather(data));
}

function weather(data) {
  const iconData = data.weather[0].icon;
  const descriptionData = data.weather[0].description;
  const cityData = data.name;
  const countryData = data.sys.country;
  const tempData = data.main.temp;
  const windData = data.wind.speed;
  const humidityData = data.main.humidity;
  const pressureData = data.main.pressure;
  const iconUrl = "https://openweathermap.org/img/wn/" + iconData + "@2x.png";

  // displaying the data
  icon.src = iconUrl;
  description.textContent = descriptionData;
  city.textContent = cityData + ", " + countryData;
  temperature.textContent = tempData + "°C";
  windSpeed.textContent = windData + " km/h";
  humidity.textContent = humidityData + "%";
  pressure.textContent = pressureData + " mb";

  // refresh the background
  document.body.style.background =
    "url('http://source.unsplash.com/1920x1080/?" + cityData + "')";
}

getData("Surigao");
