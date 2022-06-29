const requestURL = 'JSON/data.json';
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

async function buildCards(data) {
    console.log(data);
    data.directory.forEach(directory => {
        let card = document.createElement('section');
        let business = document.createElement('h2');
        let membership = document.createElement('h3');
        let founder = document.createElement('h4');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let img = document.createElement('img');

        business.innerHTML = `${data.business}`;
        membership.innerHTML = `Type if Membership: ${data.member}`;
        founder.innerHTML = `Founder(s): ${data.founder}`;
        address.innerHTML = `Address: ${data.address}`;
        phone.innerHTML = `Phone Number: ${data.phone}`;
        img.setAttribute('src' , `${data.img}`);

        card.append(business);
        card.append(membership);
        card.append(founder);
        card.append(address);
        card.append(phone);
        card.append(img);

        cards.append(card);
    });
}
getDirectory();