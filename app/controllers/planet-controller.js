angular.module('planets', []).controller('PlanetController',['$scope',
function($scope) {
    $scope.describePlanet = function(planetName) {
        switch(planetName.toLowerCase()) {
            case "mercury":
                return "It's small and hot";
            case "mars" :
                return "It's red";
            default:
                return "Didn't know that was a planet!";
        }
    }
}]);