var inquirer = require("inquirer");
var Word = require("./Word.js");
var Letter = require("./Letter.js");
var colors = require("colors");

var wordArray = ["SHIVA", "ZUES", "MINOTAUR", "MEDUSA", "AMATERASU",
				"KYUUBI", "ISIS", "ANUBIS", "KALI"];

var getWord = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
var word = getWord.word;
console.log("word: " + word);
console.log("getWord: " + getWord);
var lives = 10;
var guessesArray = [];
var lettersArray = [];

for (var i = 0; i < word.length; i++) {
	lettersArray.push(new Letter(word[i]));
};

console.log(lettersArray);

var getGuess = function() {
	displayWord();
	inquirer.prompt({
		type: "input",
		name: "guess",
		message: "What is your guess: "
	}).then(function(data) {
		var letterUp = data.guess.toUpperCase();
		guessesArray.push(letterUp);

		console.log(getWord.check(data.guess.toUpperCase(), lettersArray));

		if (getWord.check(data.guess.toUpperCase(), lettersArray) == true) {
			console.log("Letter Found!");
			displayWord(lettersArray);
		} else {
			lives --;
			if (lives > 0) {
				console.log("Wrong. Guess again!");
				console.log(lives + " lives remaining.");
			} else {
				console.log("Out of lives. Game over.");
			};
		};

		if (getWord.isSolved(lettersArray) == false) {
			if (lives > 0) {
				console.log("Guesses: " + guessesArray);
				getGuess();
			};
		} else {
			displayWord(lettersArray);
			console.log("You guessed the word!")
		};
	});
};

var displayWord = function() {
	var wordToShow = "";
	for (var i = 0; i < lettersArray.length; i++) {
		wordToShow += lettersArray[i].show() + " ";
	};
	console.log(wordToShow);
};

getGuess();