let app = angular.module('myApp', []);
app.controller("myController", function($scope){
    $scope.people = [
        {
            name: "Bob",
            age: 21,
            species: 'zombie'
        },
        {
            name: "Suzette",
            age: 34,
            species: 'vampire'
        },{
            name: "Harry",
            age: 42,
            species: 'werewolf'
        },{
            name: "Sally",
            age: 28,
            species: 'human'
        }
    ];
});