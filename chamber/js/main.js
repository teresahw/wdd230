const datefieldUK = document.querySelector("date");

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

document.querySelector('#lastModified').textContent = document.lastModified;
