var inquirer = require("inquirer");
var word = require("./word.js");
var colors = require("colors");

var wordArray = ["SHIVA", "ZUES", "MINOTAUR", "MEDUSA", "AMATERASU",
				"KYUUBI", "ISIS", "ANUBIS", "KALI"];

var startGame = function() {
	this.currentWord = new word(wordArray[Math.floor(Math.random() * wordArray.length)]);

	this.lives = 10;
	this.guesses = [];

	console.log(currentWord);
	currentWord.display;

}

startGame();

var getGuess = function() {
	inquirer.prompt([
		{
			type: "input",
			name: "guess",
			message: "Guess a letter."
		}
	]).then(function(data) {
		currentWord.updateLetter(data.guess);
	});
};