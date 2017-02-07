var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var dashedWord = "";

console.log("Mythology Hangman!");
console.log("Instructions: Guess a letter until you complete the word or lose.");
console.log("--------------------------------------------------------------------");

var game = {
	wordArray: ["Shiva", "Zues", "Minotaur", "Medusa", "Amaterasu",
				"Kyuubi", "Isis", "Anubis", "Kali"],
	lives: 10,
	


}

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