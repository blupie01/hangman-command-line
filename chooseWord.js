var wordArray = ["SHIVA", "ZUES", "MINOTAUR", "MEDUSA", "AMATERASU",
				"KYUUBI", "ISIS", "ANUBIS", "KALI", "LOCH NESS MONSTER"];

function randomWord() {
	this.word = wordArray[Math.floor(Math.random() * wordArray.length)];
};

module.exports = randomWord;