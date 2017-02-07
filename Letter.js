// `Letter.js` should control whether or not a letter 
// appears as a "_" or as itself on-screen.

var lettCtrl = function(letter) {
    this.blank = function() {
        return "_";
    };
    this.space = function() {
        return " ";
    };
};

exports.lettCtrl = lettCtrl;