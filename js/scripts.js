$(function() {
// Deck of Cards Game JavaScript

// Deck constructor
function Deck() {
    this.cardMin = 1;
    this.cardMax = 52;
    this.dealerCardsArr = [];

    this.showCardsArr = function() {

        for(var i = this.cardMin; i <= this.cardMax; i++) {
            this.dealerCardsArr.push(i);
        }

        return this.dealerCardsArr;
    };

    this.showDeck = function() {
        $("#dealer-cards").empty();

        var cards = this.showCardsArr();
        for(var i = this.cardMin - 1; i <= this.cardMax - 1; i++) {
            $("#dealer-cards").append("<img id='dealer_card_" + cards[i] + "' src='images/" + cards[i] + ".png' width='50'/>");
        }

        return this;
    };

    this.shuffleDeck = function() {
        $("#dealer-cards").empty();

        var cards = this.showCardsArr();
        var j = 0;
        var temp = null;

        for (var i = cards.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;

            $("#dealer-cards").append("<img id='dealer_card_" + cards[i] + "' src='images/" + cards[i] + ".png' width='50'/>");
        }

        return this;
    }
}

// Create new object instances for the deck
var showDealerDeck = new Deck();
var shuffleDeckNow = new Deck();

// Show dealer deck when clicking reset deck
$("#reset-deck").on("click", function(e) {
    e.preventDefault();
    showDealerDeck.showDeck();
});

// When clicking #shuffle-deck link
// execute shuffle deck function
$("#shuffle-deck").on("click", function(e) {
    e.preventDefault();
    shuffleDeckNow.shuffleDeck();
});



});