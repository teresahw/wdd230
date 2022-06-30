const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed')

const url = `https://api.openweathermap.org/data/2.5/weather?q=Ogden&appid=88c068cdaad4fa1274ba537aca974610&units=Imperial`;


apiFetch(url);

async function apiFetch(apiURL) {
   try { 
    const response = await fetch(apiURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } else{
        throw Error(await response.text());
    }
} catch (error) {
    console.log(error);
}
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);

    const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imagesrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
}


outcome = document.getElementById('wind-chill');

if ((currentTemp <= 50) && (windSpeed > 3)){
    let windChill = 35.74 + 0.6215 * currntTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
    outcome.textContent = windChill;
}
else {
    outcome.textContent = "N/A";
}


/*tempurature = 35;
windSpeed = 15;

outcome = document.getElementById('wind-chill');

if ((tempurature <= 50) && (windSpeed > 3)){
    let windChill = 35.74 + 0.6215 * tempurature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempurature * Math.pow(windSpeed, 0.16);
    outcome.textContent = windChill;
}
else {
    outcome.textContent = "N/A";
}*/
