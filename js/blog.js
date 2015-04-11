var app = angular.module("blog", []);

app.controller("cardsController", function($scope){
    $scope.cards = [
        {
            title: "Working with Cordova and Node-Webkit",
            description: "Here I discuss blah, blah, blah..."
        },
        {
            title: "Experimenting with Angular Material",
            description: "Here I discuss blah, blah, blah..."
        },
        {
            title: "PhoneGap and Cordova",
            description: "Here I discuss blah, blah, blah..."
        },
        {
            title: "First Look at the Polymer Project",
            description: "Here I discuss blah, blah, blah..."
        }
    ]
});
