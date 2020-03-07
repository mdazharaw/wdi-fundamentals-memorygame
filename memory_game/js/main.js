const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

// let cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// let cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    let cardFlipped = cards[cardId]
    console.log("User flipped " + cardFlipped);
    cardsInPlay.push(cardFlipped);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }

}
flipCard(0);
flipCard(2);