const day = new Date().getDay();
var banner = document.getElementById('banner');
if (day == 1 || day == 5 ) {
    banner.style.display = 'block';
}