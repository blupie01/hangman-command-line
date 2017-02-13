// `Letter.js` should control whether or not a letter 
// appears as a "_" or as itself on-screen.

function LetterShow(letter, found) {
	this.letter = letter;
	this.found = false;
};
LetterShow.prototype.show = function () {
	if (this.found) return this.letter;
	else return "_";
}

module.exports = LetterShow;