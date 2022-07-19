const requestURL = 'https://teresahw.github.io/wdd230/temple-inn/JSON/data.json';
const cards = document.querySelector('.cards');


async function getTemples() {
    let response = await fetch(requestURL)
    if (response.ok) {
        let data = await response.json();
        buildCards(data);
    }else {
        throw Error(response.statusText);
    }
}

function buildCards(data) {
    
    data.temples.forEach(index => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');

        h2.innerHTML = index.temple;
        img.setAttribute('src' , `${index.image}`);
        h3.innerHTML = index.address;
        h4.innerHTML = `Phone: ${index.phone}`;
        p.innerHTML = `History: ${index.history}`;

        card.append(h2);
        card.append(img);
        card.append(h3);
        card.append(h4);
        card.append(p);

        cards.append(card);
     
    });
}
getTemples();