let p = document.querySelector("#current-date");

let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

p.innerHTML = `${day} ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let city = `${searchInput.value}`;
  let units = "metric";
  let apiKey = "6c2125e4f9843f411156116bf392af36";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function handleWeather(response) {
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.name;

  let temperatureElement = document.querySelector(".city-temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
