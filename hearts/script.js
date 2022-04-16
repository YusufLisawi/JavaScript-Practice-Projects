function createHearts() {
	const heart = document.createElement("div");

	heart.classList.add("heart");

	heart.innerHTML = "💜";
	heart.style.color = "rebeccapurple";
	heart.style.left = Math.random() * 100 + "vw";
	heart.style.animationDuration = Math.random() * 2 + 3 + "s";
	heart.style.transform = `rotate(${Math.random() * 100}deg)`;
	document.body.appendChild(heart);

	setTimeout(() => {
		heart.remove();
	}, 5000);
}
setInterval(createHearts, 600);
