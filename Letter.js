// `Letter.js` should control whether or not a letter 
// appears as a "_" or as itself on-screen.

function letterShow(letter, found) {
	this.letter = letter;
	this.found = false;
};
letterShow.prototype.show = function () {
	if (this.found) return this.letter;
	else return "_";
}

module.exports = letterShow;