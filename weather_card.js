// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {

    // this is our generated API
    key: "bab281d79e5f1e9755a68d754cc313e7",

    // this is current weather API taken from openweather.org
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    // we use Math.floor and Math.ceil here becoz sometimes if minimum and maximum values are almost same then floor and ceil make it different
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    // for changing the images according to weather
    if(weatherType.textContent == 'Clear') {

        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/clear1.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/cloudy.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/mist.jpg')";

    } else if(weatherType.textContent == 'Mist') {

        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/mist.jpg')";

    } else if(weatherType.textContent == 'Sunny') {

        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/sunny.jpg')";
        
    } else if(weatherType.textContent == 'Rain') {
        
        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/rain.jpg')";

    } else if(weatherType.textContent == 'Drizzle') {
        
        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/drizzle.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.querySelector('.column1').style.backgroundImage = "url('weather_images/card_images/thunder.jpg')";
        
    } 
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
