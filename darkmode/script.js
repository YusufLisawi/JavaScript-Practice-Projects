const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", () => {
	if (toggler.checked == true) {
		dark();
	} else {
		light();
	}
});
function dark() {
	document.body.style.background = "#333";
	document.body.style.color = "#fff";
	toggler.style.border = "2px solid #fff";
}
function light() {
	document.body.style.background = "#fff";
	document.body.style.color = "#000";
	toggler.style.border = "2px solid #000";
}
