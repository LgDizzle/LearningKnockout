/// <reference path= "/scripts/knockout-3.4.1.debug.js" />

$(function () {
    var gameModel = {
        gameName: ko.observable("Blackjack")
    };
    ko.applyBindings(gameModel);
})