var count = document.getElementById("count");
var text = document.getElementById("text");

function counterText(textI) {
	var textI = text.value.split(" ");
	var word = 0;
	for (var i = 0; i < textI.length; i++) {
		if (textI[i] !== " ") {
			word++;
		}
	}
	count.innerText = word;
}

text.addEventListener("keyup", function (e) {
	counterText(e.target.value);
});
