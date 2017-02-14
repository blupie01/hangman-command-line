var inquirer = require("inquirer");
var Word = require("./Word.js");
var Letter = require("./Letter.js");
var colors = require("colors");
var chalk = require("chalk");

var wordArray = ["LOCHNESS MONSTER", "SHIVA", "ZUES", "MINOTAUR", "MEDUSA", 
				"AMATERASU", "KYUUBI", "ISIS", "ANUBIS", "KALI" ];

var getWord;
var word;
var lives = 10;
var guessesArray = [];
var lettersArray = [];

console.log(chalk.white.bgCyan("------------------------------------------------------------------"));
console.log(chalk.bgCyan("-------------------------") + 
			chalk.bgRed.green("Mythical Hangman") + chalk.bgCyan("-------------------------"));
console.log(chalk.bgCyan("-------------------") + chalk.bgRed.green("Guess letters until you win!") + 
			chalk.bgCyan("-------------------"));
console.log(chalk.bgCyan("------------------------") + chalk.bgRed.green("You have 10 lives.") + 
			chalk.bgCyan("------------------------"));
console.log(chalk.bgCyan("----------------------------") + chalk.bgRed.green("Good Luck!") + 
			chalk.bgCyan("----------------------------"));
console.log(chalk.white.bgCyan("------------------------------------------------------------------"));

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
	console.log("\n" + chalk.bgYellow.magenta(lives + " lives remaining."));
	console.log("Word to guess: ".bgMagenta);
	displayWord();
	console.log(("Guesses: ").bgRed.blue + guessesArray);
	inquirer.prompt({
		type: "input",
		name: "guess",
		message: "What is your guess: ".green
	}).then(function(data) {

		var letterUp = data.guess.toUpperCase();

		if(letterUp.length > 1) {
			console.log("Only one letter at a time. Guess again.".bold.inverse.red);
			getGuess();
		} else if (guessesArray.indexOf(letterUp) == -1) {
			guessesArray.push(letterUp);

			if (getWord.check(data.guess.toUpperCase(), lettersArray) == true) {
				console.log("Letter Found!".bgGreen.magenta);
			} else {
				lives --;
				if (lives > 0) {
					console.log("Wrong. Guess again!".red.bgWhite);
				} else {
					console.log("\n" + "OUT OF LIVES. GAME OVER.".bold.red.bgWhite + "\n");
					restart();
				};
			};

			if (getWord.isSolved(lettersArray) == false) {
				if (lives > 0) {
					getGuess();
				};
			} else {
				displayWord();
				console.log("\n" + "YOU WIN!".rainbow.bgWhite + "\n");
				restart();
			};
		} else {
			console.log("YOU ALREADY GUESSED THAT LETTER!".underline.red.bgWhite);
			getGuess();
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
		message: "Play again? ".rainbow.bgWhite
	}).then(function(data) {
		if (data.restart) {
			console.log("\n" + "Restarting...".america + "\n");
			lives = 10;
			guessesArray = [];
			lettersArray = [];
			startGame();
		} else {
			console.log("\n" + "Ending Game.".zebra + "\n");
		}
	});
};

startGame();