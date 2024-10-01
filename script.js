// 50a5eeeff185371bc0a5af42f7783bb5 api key
const apiKey = "50a5eeeff185371bc0a5af42f7783bb5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    var data = await response.json();
    var weatherData = data.weather[0].main;
    console.log(weatherData);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(weatherData == "Clear") {
        document.querySelector(".weather img ").src = "img/yellow-sun-16526.png";
    } else if(weatherData == "Rain") {
        document.querySelector(".weather img ").src = "img/rainy-and-cloudy-day-16532.png";
    } else if(weatherData == "Clouds") {
        document.querySelector(".weather img ").src = "img/yellow-sun-and-blue-cloud-16528.png";
    } else if(weatherData == "Snow") {
        document.querySelector(".weather img ").src = "img/snow-and-blue-cloud-16540.png";
    } else if(weatherData == "Thunderstorm") {
        document.querySelector(".weather img ").src = "img/lightning-and-blue-rain-cloud-16533.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});