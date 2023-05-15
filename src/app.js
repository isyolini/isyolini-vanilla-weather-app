function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}

let apiKey = "ate4fc772f93a185a4d70db0f2foe64c";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Milan&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
