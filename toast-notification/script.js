const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
// const text = document.querySelector(".text");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
	createNotification();
});

function createNotification() {
	const notif = document.createElement("div");

	notif.classList.add("toast");
	notif.innerText = "this challenge is easy!!";

	alert.appendChild(notif);
	setTimeout(() => {
		notif.remove();
	}, 3000);
}
