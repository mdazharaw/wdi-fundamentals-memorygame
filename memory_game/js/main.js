//Array of card data
var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    },
];
var cardsInPlay = []; //Tracks cards that are clicked
var winningStreak = 0; //Tracks winning streak score in single session

// let cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// let cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

// Updates score based on winning streak value
function updateScore(){
	var score = document.getElementById("winningStreak").innerHTML= winningStreak;
};

// Check for matching cards and displays outcome
function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
            winningStreak+=1;
            updateScore();

        } else {
            alert("Sorry, try again.");
             winningStreak=0;
             updateScore();
        };
    };

};

// Changes image of card from back to front when clicked
function flipCard() {
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    };
};

// Reorders cards randomly
function shuffle(cards){
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}
// Draws the game board
function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    };
};
shuffle(cards);
createBoard();

// Resets board but not the score
function reset(){
	cardsInPlay.length=0;
	var newBoard = document.getElementById("game-board").innerHTML = null;
	shuffle(cards);
	createBoard();
};

var button = document.getElementById("play-again");
button.addEventListener('click', reset);

