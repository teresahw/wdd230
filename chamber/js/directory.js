const requestURL = 'https://teresahw.github.io/wdd230/chamber/JSON/data.json';
const cards = document.querySelector('.cards');

async function getDirectory() {
    let response = await fetch(requestURL)
    if (response.ok) {
        let data = await response.json();
        buildCards(data);
    }else {
        throw Error(response.statusText);
    }
}

function buildCards(data) {
    
    data.directory.forEach(index => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let phone = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = index.business;
        h3.innerHTML = `Type if Membership: ${index.membership}`;
        h4.innerHTML = `Founder(s): ${index.founder}`;
        p.innerHTML = `Address: ${index.address}`;
        phone.innerHTML = `Phone Number: ${index.phone}`;
        img.setAttribute('src' , `${index.img}`);

        card.append(h2);
        card.append(h3);
        card.append(h4);
        card.append(p);
        card.append(phone);
        card.append(img);

        cards.append(card);
     
    });
}
getDirectory();