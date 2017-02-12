 // * `Word.js` should contain all of the methods which will 
 // check the letters guessed versus the random word selected.
var letter = require("./letter.js");

var Word = function(word) {
	this.word = word;
	this.lettersArray = [];
	// this.string = ""
	console.log("Here: " + word);
	for (var i = 0; i < this.word.length; i++) {
		//pass in each letter to letter.js and get letter(object)
		this.lettersArray.push(new letter(this.word[i]));
	}
	return this.lettersArray;

	// for (var l = 0; l < this.lettersArray.length; l++) {
	// 	var currentLetter = this.lettersArray[l];
	// 	this.string += currentLetter.show() + " ";
	// }
	// return this.string;
}
Word.prototype.display = function() {
	this.string = "";

	for (var l = 0; l < this.lettersArray.length; l++) {
		var currentLetter = this.lettersArray[l];
		this.string += currentLetter.show() + " ";
	}
	return this.string;

	// for(var i = 0; i < this.lettersArray.length; i++) {
	// 	this.string += this.lettersArray[i].letter;
	// 	console.log(string);
	// 	return this.string;
	// }
	// return this.string;
	// console.log(this.string);
}
Word.prototype.updateLetter = function(guess) {
	for (var i = 0; i < this.lettersArray.length; i++) {
		if (this.lettersArray[i].letter == guess) {
			this.lettersArray[i].found = true;
		};
	};
};

module.exports = Word;