 // * `Word.js` should contain all of the methods which will 
 // check the letters guessed versus the random word selected.

var letter = require("./letter.js");

function wordAudit(word, inputLetter) {
	//Array to hold the split hidden word
	this.splitWord = [];
	//The word chosen to be guessed
	this.word = word;
	//Guessed letter
	this.inputLetter = inputLetter;

	//Function to create a hidden word
	this.createHiddenWord = function() {
		for (var i = 0; i < word.length; i++) {
			var letToHide = new letter(word[i]);
			if (word[i].valueOf() === " ") {
				splitWord.push(letToHide.space());
			} else {
				splitWord.push(letToHide.blank());
			};
		};
	};

	this.check = function(lettGuess) {
		var lettUp = lettGuess.toUpperCase();

		if (word.indexOf(lettGuess) === -1) {
			lives--;
		} else {
			for (var i = 0; i < splitWord.length; i++) {
				if (word[i].valueOf() === lettUp)
			}
		}
	}

}