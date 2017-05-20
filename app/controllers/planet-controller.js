angular.module('planets', []).controller('PlanetController',['$scope',
function($scope) {
    $scope.describePlanet = function(planetName) {
        switch(planetName.toLowerCase()) {
            case "mars" :
                return "It's red";
        }
    }
}]);