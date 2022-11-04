const score = document.getElementById("score");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const para = document.getElementById("guess");
const chance = document.getElementById("chance");
let num = 67;
let chances = 0;


btn.addEventListener("click", function(){
	if(input.value == num){
		para.textContent = `You Guessed It!`;
	} else if (input.value < num){
		para.textContent = `Your Guess Is Lesser Than Number`;
	} else if (input.value > num){
		para.textContent = `Your Guess Is Greater Than Number`;
	}
});

btn.addEventListener("click", function(){
	if(input.value < num){
		chances++;
	} else if(input.value > num){
		chances++;
	} else {
		chance.textContent = `You Guessed in ${chances} chances`;
		btn.disabled = true;
	}
});