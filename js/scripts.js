$(function() {
// Deck of Cards Game JavaScript

// Deck constructor
function Deck() {
    this.cardMin = 1;
    this.cardMax = 52;

    this.showCardsArr = function() {

        this.dealerCardsArr = [];

        for(var i = this.cardMin; i <= this.cardMax; i++) {
            this.dealerCardsArr.push(i);
        }

        return this.dealerCardsArr;
    };

    this.showDeck = function() {
        $("#dealer-cards").empty();
        $("#player-cards").empty().append("<h3>Player</h3>");

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

    this.dealFirstCard = function() {
        var firstCard = $("#dealer-cards").find("img").first();

        firstCard.clone().appendTo("#player-cards");

        firstCard.remove();
    }

    this.dealRandomCard = function() {
        var randomCard = $("#dealer-card").children("img").eq(0);

        randomCard.remove();
    }
}


    // Create new object instance for the deck
    var dealerDeckAction = new Deck();

    // Show dealer deck when clicking reset deck
    $("#reset-deck").on("click", function(e) {
        e.preventDefault();
        dealerDeckAction.showDeck();
    });

    // When clicking #shuffle-deck link
    // execute shuffle deck function
    $("#shuffle-deck").on("click", function(e) {
        e.preventDefault();
        dealerDeckAction.shuffleDeck();
    });

    $(document).on("click", "#deal-first-card", function(e) {
        e.preventDefault();
        dealerDeckAction.dealFirstCard();
    });

    $(document).on("click", "#deal-random-card", function(e) {
        e.preventDefault();
        dealerDeckAction.dealRandomCard();
    });


});