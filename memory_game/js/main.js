//console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

// Check to make sure all is good so far
console.log("User flipped " + cardOne);


var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

// Check to make sure all is good so far
console.log("User flipped " + cardTwo);

console.log(cardsInPlay.length);


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry try again.");
	}
} else {
}