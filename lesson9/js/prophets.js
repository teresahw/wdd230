const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function prophets() {
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        buildProphetCards(data);
    }else {
        throw Error(response.statusText);
    }
}

async function buildProphetCards(data) {
    //letnotUtah = data.prophets.filer(p => p.birthplace !== 'Utah');
    //nonUtah.forEach(prophet => {
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let date = document.createElement('p');
        let place = document.createElement('p');
        let img = document.createElement('img');

        name.innerHTML = `${prophet.name} ${prophet.lastname}`;
        date.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        place.innerHTML = `Location of Birth: ${prophet.birthplace}`;
        img.setAttribute('src' , `${prophet.imageurl}`);

        card.append(h2);
        card.append(date);
        card.append(place);
        card.append(img);

        cards.append(card);
    });
}
prophets(requestURL);