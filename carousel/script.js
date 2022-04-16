const imgs = document.querySelector(".image-container");
const images = document.querySelectorAll("img");

let i = 0;

function slide() {
	i++;

	if (i % images.length === 0) {
		i = 0;
	}

	imgs.style.transform = `translateX(${-i * 900}px)`;
}
setInterval(slide, 3000);
