const quizData = [
	{
		question: "How old is Youssef El Aissaoui?",
		a: "10",
		b: "18",
		c: "26",
		d: "3",
		correct: "b",
	},
	{
		question: "What is the most used programming language in 2019?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "JavaScript",
		correct: "d",
	},
	{
		question: "Who is he President of US?",
		a: "Florin Pop",
		b: "Donald Trump",
		c: "Joe Biden",
		d: "Yusuf Isawi",
		correct: "c",
	},
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Cascading Style Sheet",
		c: "Hype transfer mail language",
		d: "Helicopters Terminals Motorboats Lamborginis",
		correct: "a",
	},
	{
		question: "What year was JavaScript launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "none of the above",
		correct: "b",
	},
];
const answersEls = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const textaEL = document.getElementById("text-a");
const textbEL = document.getElementById("text-b");
const textcEL = document.getElementById("text-c");
const textdEL = document.getElementById("text-d");

const btnSubmit = document.getElementById("btnSubmit");

let currentQuiz = 0;
loadQuiz();

// load quizes from the array quizData
function loadQuiz() {
	deselected();
	const currentQuestion = quizData[currentQuiz];
	questionEL.innerHTML = currentQuestion.question;
	textaEL.innerHTML = currentQuestion.a;
	textbEL.innerHTML = currentQuestion.b;
	textcEL.innerHTML = currentQuestion.c;
	textdEL.innerHTML = currentQuestion.d;
}
// select answer and deselect it
function selected() {
	let answer = undefined;

	answersEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}
function deselected() {
	answersEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

// events
let score = 0;
btnSubmit.addEventListener("click", Quizer);

function Quizer() {
	const answer = selected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			const showScore = document.querySelector(".score");
			const result = document.getElementById("result");
			const reload = document.getElementById("btnReload");
			const qsts = document.getElementById("qsts");
			qsts.innerHTML += ` ${quizData.length}`;
			showScore.style.zIndex = "1000";
			result.innerHTML = score;
			reload.style.bottom = "-40px";

			if (score == quizData.length) {
				showAlert(`Bravoo! All is correct`, "yellowgreen", 100000);
			} else if (score > 1 && score < quizData.length) {
				showAlert(`Nicee! You almost got it`, "yellowgreen", 100000);
			} else {
				showAlert(
					`Don't Worry you can try again`,
					"yellowgreen",
					100000
				);
			}
		}
	} else {
		showAlert("Please choose an answer then submit!", "tomato", 4000);
	}
}
// Alerts function
function showAlert(message, color, timeOut) {
	const div = document.createElement("div");
	div.className = `warning`;
	div.appendChild(document.createTextNode(message));
	div.style.backgroundColor = color;

	const container = document.querySelector(".quizContainer");
	const body = document.body;

	body.insertBefore(div, container);
	//vanish after 3seconds
	setTimeout(() => document.querySelector(".warning").remove(), timeOut);
}
