const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function prophets() {
    let response = await fetch(URL)
    if (response.ok) {
        let data = await response.json();
        buildProphetCards();
    }else {
        throw Error(response.statusText);
    }
}
prophets();

function buildProphetCards(prophetData) {
    //letnotUtah = data.prophets.filer(p => p.birthplace !== 'Utah');
    //nonUtah.forEach(prophet => {
    prophetData.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        p.innerHTML = `Location of Birth: ${prophet.birthplace}`;
        img.setAttribute('src' , `${prophet.imageurl}`);

        card.append(h2);
        card.appendChild(p);
        card.append(img);

        cards.append(card);
    })
}
