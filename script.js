const apiKey = "19efcc29c93daac0778cd85fa4ae1e1b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

function handleSearch() {
    checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", handleSearch);
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSearch();
    }
});