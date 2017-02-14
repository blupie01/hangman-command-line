 // * `Word.js` should contain all of the methods which will 
 // check the letters guessed versus the random word selected.


var Word = function(word) {
	this.word = word;

	this.check = function(letter, array) {
		var found = false;
		for (var i = 0; i < array.length; i++) {
			if (letter === array[i].letter) {
				array[i].found = true;
				found = true;
			};
		};
		return found;
	};

	this.isSolved = function(array) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].found == false) {
				return false;
			};
		};
		return true;
	};
};

module.exports = Word;