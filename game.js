var inquirer = require("inquirer");
var Word = require("./Word.js");
var Letter = require("./Letter.js");
var colors = require("colors");

var wordArray = ["LOCHNESS MONSTER", "SHIVA", "ZUES", "MINOTAUR", "MEDUSA", 
				"AMATERASU", "KYUUBI", "ISIS", "ANUBIS", "KALI" ];

var getWord;
var word;
var lives = 10;
var guessesArray = [];
var lettersArray = [];

console.log("------------------------------------------------------------------");
console.log("-------------------------Mythical Hangman-------------------------");
console.log("-------------------Guess letters until you win!-------------------");
console.log("------------------------You have 10 lives.------------------------");
console.log("----------------------------Good Luck!----------------------------");
console.log("------------------------------------------------------------------\n");

var startGame = function() {
	getWord = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
	word = getWord.word;

	for (var i = 0; i < word.length; i++) {
		if (word[i] === " ") {
			lettersArray.push(" ");
		} else {
			lettersArray.push(new Letter(word[i]));
		};
	};

	getGuess();
};

var getGuess = function() {
	console.log("Word to guess: ");
	displayWord();
	inquirer.prompt({
		type: "input",
		name: "guess",
		message: "What is your guess: "
	}).then(function(data) {
		var letterUp = data.guess.toUpperCase();
		guessesArray.push(letterUp);

		if (getWord.check(data.guess.toUpperCase(), lettersArray) == true) {
			console.log("Letter Found!");
			console.log(lives + " lives remaining.");
			displayWord();
		} else {
			lives --;
			if (lives > 0) {
				console.log("Wrong. Guess again!");
				console.log(lives + " lives remaining.");
			} else {
				console.log("Out of lives. Game over.");
				restart();
			};
		};

		if (getWord.isSolved(lettersArray) == false) {
			if (lives > 0) {
				console.log("Guesses: " + guessesArray);
				getGuess();
			};
		} else {
			displayWord();
			console.log("You guessed the word!")
			restart();
		};
	});
};

var displayWord = function() {
	var wordToShow = "";
	for (var i = 0; i < lettersArray.length; i++) {
		if (lettersArray[i] == " ") {
			wordToShow += " ";
		} else {
			wordToShow += lettersArray[i].show() + " ";		
		};
	};
	console.log(wordToShow);
};

var restart = function() {
	inquirer.prompt({
		type: "confirm",
		name: "restart",
		message: "Play again? "
	}).then(function(data) {
		if (data.restart) {
			console.log("Restarting...");
			lives = 10;
			guessesArray = [];
			lettersArray = [];
			startGame();
		} else {
			console.log("Ending Game.");
		}
	});
};

startGame();