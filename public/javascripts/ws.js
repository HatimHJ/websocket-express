// Create WebSocket connection.
const form = document.querySelector("form");
const input = document.querySelector(".input");
const messages = document.querySelector(".messages");
const username = prompt("Please enter a username: ", "");
const socket = new WebSocket(`ws://${location.hostname}:8000`);

socket.onopen = () => {
	console.log("Connection opened!");
};

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (input.value !== "") {
		socket.send(input.value);
		addMessage(input.value);
	}
});
socket.addEventListener("message", async (e) => {
	const text = await e.data.text();
	addMessage(text);
});

function addMessage(message) {
	const li = document.createElement("li");
	li.innerHTML = message;
	messages.appendChild(li);
	window.scrollTo(0, document.body.scrollHeight);
}
