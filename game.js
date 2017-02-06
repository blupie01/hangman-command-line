var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var lives = 10;
var dashedWord = "";

console.log("Mythical Creatures Hangman!");
console.log("Instructions: Guess a letter until you complete the word or lose.");
console.log("--------------------------------------------------------------------");

var wordArray = [
	"Cats",
	"Bullets",
	"Gyroscope",
	"Jeans",
	"Death",
	"Shiva",
	"Reddit",
	"Blunt"
];

var word = wordArray[Math.floor(Math.random() * wordArray.length)];

while (dashedWord.length < word.length * 2) {
	dashedWord += "_ ";
}

console.log(word);
console.log(dashedWord);

//----------FUNCTIONS------------------------------------------------

function guessLetter(){
	inquirer.prompt([
	  {type: "input",
	    name: "letter",
	    message: "What's your letter?"}

	]).then(function(data){
	      var letter = 
	});
}