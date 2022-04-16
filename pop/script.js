const btn = document.querySelector(".btn");
const close = document.querySelector(".close");
const popup = document.querySelector(".popup-container");
btn.addEventListener("click", () => {
	popup.classList.add("active");
});
close.addEventListener("click", () => {
	popup.classList.remove("active");
});
