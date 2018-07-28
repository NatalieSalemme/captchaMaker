let captchaText = document.querySelector('#captcha');
let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submit');
let output = document.querySelector('#output');


let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// let random = alphaNums[Math.floor(Math.random() * alphaNums.length)];
let emptyArr = [];
for(let i = 1; i <= 7; i++) {
	emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join('');


// let newArr = [];
// let newText = newArr.push(userText.value);
// console.log(newArr);

submitButton.addEventListener('click',  function() {
	if(userText.value === captchaText.innerHTML) {
		console.log("correct!");
		output.classList.add("greenText");
		output.innerHTML = "Correct!";
	} else {
		output.classList.add("redText");
		output.innerHTML = "Incorrect, please try again";
	}
});
//refresh button
