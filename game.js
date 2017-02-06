var inquirer = require("inquirer");
var Letter = require("./Letter");
var Word = require("./Word");

var lives = 8;
var dashedWord = "";

var wordArray = [
	"Cats",
	"Bullets",
	"Gyroscope",
	"Jeans",
	"Death",
	"Shiva",
	"Reddit",
	"Blunt"
];

var word = wordArray[Math.floor(Math.random() * wordArray.length)];

while (dashedWord.length < word.length * 2) {
	dashedWord += "_ ";
}

console.log(word);
console.log(dashedWord);

// inquirer.prompt()