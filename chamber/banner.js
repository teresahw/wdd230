const day = new Date().getDay();
var banner = document.getElementById('banner');
if (day == 1 || day == 2 ) {
    banner.style.display = 'block';
}