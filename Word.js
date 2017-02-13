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

		if (found == true) {
			return true;
		} else { 
			return false;
		};
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