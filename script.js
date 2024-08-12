const apiKey = "6f3ce25751e465d4765283d30e68cd58";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationinput = document.getElementById("locationinput");
const searchbutton = document.getElementById("searchbutton");
const locationelement = document.getElementById("location");
const temperatureelement = document.getElementById("temperature");
const descriptionelement = document.getElementById("description");

searchbutton.addEventListener("click", () => {
    const location = locationinput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Weather data not available for the entered location.");
            }
            return response.json();
        })
        .then((data) => {
            locationelement.textContent = data.name;
            temperatureelement.textContent = `${Math.round(data.main.temp)} °C`;
            descriptionelement.textContent = data.weather[0].description;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            locationelement.textContent="Error fetching data";
            temperatureelement.textContent = "";
            descriptionelement.textContent = "";
        });
}
