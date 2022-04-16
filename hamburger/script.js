const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
	lines.forEach((line) => {
		line.classList.toggle("lineClose");
	});
	nav.classList.toggle("active");
});
