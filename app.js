console.log("Weather App Started");

const apiKey = "OpenWeather API Key";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".cityName");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    getWeatherData(city);
});


async function getWeatherData(city) {
  const response = await fetch(`${apiUrl + city}&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".errorMsg").style.display = "block";
  }else{
    document.querySelector(".errorMsg").style.display = "none";
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherIcon = document.querySelector(".weatherIcon");

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png";
    }else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "img/drizzle.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "img/snow.png";
    }else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "img/thunderstorm.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "img/smoke.png";
    }else if(data.weather[0].main == "Dust"){
    }

    }
}