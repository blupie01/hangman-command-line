var inquirer = require("inquirer");
var wordAudit = require("./word.js");
var colors = require("colors");
var chooseWord = require("./chooseWord.js")

var lives = 10;
var letter = "";

console.log("Mythology Hangman!");
console.log("Instructions: Guess a letter until you complete the word or lose.");
console.log("--------------------------------------------------------------------");

function startGame() {
	var word = new chooseWord();
	console.log(word);
	var hiddenWord = new wordAudit(word);

	letter = guessLetter();


};

startGame();

//----------FUNCTIONS------------------------------------------------

function guessLetter(){
	inquirer.prompt([
	  {type: "input",
	    name: "letter",
	    message: "What's your letter?"}
	]).then(function(data){
	    var letGuess = data;
	    return letGuess;
	});
};