/// <reference path= "/scripts/knockout-2.0.0.debug.js" />

$(function () {
    var viewModel = {
        firstName: ko.observable("Blackjack")
    };

    ko.applyBindings(viewModel);
})