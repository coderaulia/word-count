let count = document.getElementById("count");
let text = document.getElementById("text");

function counterText(textI) {
	var textI = text.value.split(" ");
	let word = 0;
	for (let i = 0; i < textI.length; i++) {
		if (textI[i] !== " ") {
			word++;
		}
	}
	count.innerText = word;
}

text.addEventListener("keyup", (e) => {
	counterText(e.target.value);
});
