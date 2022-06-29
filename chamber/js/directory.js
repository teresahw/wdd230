const requestURL = 'JSON/data.json';
const cards = document.querySelector('.cards');

async function getDirectory(requestURL) {
    let response = await fetch(requestURL)
    if (response.ok) {
        let data = await response.json();
        buildCards(data);
    }else {
        throw Error(response.statusText);
    }
}

/*async function buildCards(data) {
    console.log(data);
    data.directory.forEach(index => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let membership = document.createElement('h3');
        let founder = document.createElement('h4');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let img = document.createElement('img');

        h2.innerHTML = `${index.business}`;
        membership.innerHTML = `Type if Membership: ${index.member}`;
        founder.innerHTML = `Founder(s): ${index.founder}`;
        address.innerHTML = `Address: ${index.address}`;
        phone.innerHTML = `Phone Number: ${index.phone}`;
        img.setAttribute('src' , `${index.img}`);

        card.append(business);
        card.append(membership);
        card.append(founder);
        card.append(address);
        card.append(phone);
        card.append(img);

        cards.append(card);
    });
}*/
buildCards();