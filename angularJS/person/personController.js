myApp.controller('personController', $scope => {
    $scope.person = {
        name: "Bob",
        species: "zombie",
        fullName: () => {
            let personObject = $scope.person;
            return `${personObject.name} the ${personObject.species}`;
        }
    }
});