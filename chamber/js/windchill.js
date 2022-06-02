tempurature = 35;
windSpeed = 15;

windChill = document.getElementById('wind-chill');

if ((tempurature <= 50) && (windSpeed > 3)){
    let windChill = 35.74 + 0.6215 * tempurature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempurature * Math.pow(windSpeed, 0.16);
    windChill.textContent = windChill;
}
else {
    windChill.textContent = "N/A";
}