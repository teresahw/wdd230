const requestURL = 'https://teresahw.github.io/wdd230/temple-inn/JSON/data.json';
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
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let date = document.createElement('p');
        let place = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
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