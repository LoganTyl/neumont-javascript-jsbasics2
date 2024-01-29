let app = angular.module('myApp', ['ngRoute']);
app.config($routeProvider => {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/template.html',
            controller: 'mainController'
        })

        .when('/vampires', {
            templateUrl: "pages/vampires.html",
            controller: "vampController"
        })

        .when('/werewolves', {
            templateUrl: "pages/template.html",
            controller: "wereController"
        })

        .when('/zombies', {
            templateUrl: "pages/template.html",
            controller: "zombController"
        })
});

app.controller('mainController', function($scope){
    $scope.heading = "Monsters!";
    $scope.message = "Please select a monster from the menu"
});

app.controller('vampController', function($scope){
    $scope.heading = "Vampires";
    $scope.message = "Vampires REALLY suck!"
});

app.controller('wereController', function($scope){
    $scope.heading = "Werewolves";
    $scope.message = "They are like warm puppies that can kill you"
});

app.controller('zombController', function($scope){
    $scope.heading = "Zombies";
    $scope.message = "Brains!"
});