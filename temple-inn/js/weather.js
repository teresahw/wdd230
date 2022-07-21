const currentTemp = document.querySelector('#current-temp');
const currentHum = document.querySelector('#current-hum');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Bethesda&appid=88c068cdaad4fa1274ba537aca974610&units=Imperial`;


apiFetch(url);

async function apiFetch(apiURL) {
   try { 
    const response = await fetch(apiURL);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
        console.log(data);
    } else{
        throw Error(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
    currentHum.innerHTML = weatherData.main.humidity.toFixed(1);
    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
}