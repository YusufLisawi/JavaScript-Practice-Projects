// const myDate = "12/19/2022";
const myDate = document.getElementById("date");

const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

myDate.addEventListener("change", countDown);

function countDown() {
	const theDate = new Date(myDate.value);
	const currentDate = new Date();
	const totalSeconds = (theDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor((totalSeconds / 3600) % 24);
	const mins = Math.floor((totalSeconds / 60) % 60);
	const seconds = Math.floor(totalSeconds % 60);

	daysEL.innerHTML = timeFormat(days);
	hoursEL.innerHTML = timeFormat(hours);
	minsEL.innerHTML = timeFormat(mins);
	secondsEL.innerHTML = timeFormat(seconds);
}

function timeFormat(time) {
	return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);

var i = 0;
function change() {
	var body = document.body;
	var bgs = ["bg", "bg1", "bg2"];

	if (bgs[i] == "bg2") {
		body.style.color = `white`;
	} else {
		body.style.color = `black`;
	}
	body.style.backgroundImage = `url(./${bgs[i]}.jpeg)`;

	i++;
	if (i >= bgs.length) {
		i = 0;
	}
}
setInterval(change, 10000);
