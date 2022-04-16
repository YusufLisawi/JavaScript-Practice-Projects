const container = document.querySelector(".container");
const img = document.querySelector("img");

let zoomIn = 2;

container.addEventListener("mousemove", (e) => {
	const x = e.clientX - e.target.offsetLeft;
	const y = e.clientY - e.target.offsetTop;

	img.style.transformOrigin = `${x}px ${y}px`;
	img.style.transform = `scale(${zoomIn})`;
});

container.addEventListener("click", () => {
	zoomIn += 0.25;
	img.style.transform = `scale(${zoomIn})`;
	if (zoomIn > 3) {
		zoomIn = 1;
	}
});
container.addEventListener("mouseleave", () => {
	zoomIn = 2;
	img.style.transform = "scale(1)";
	img.style.transformOrigin = `center center`;
});
