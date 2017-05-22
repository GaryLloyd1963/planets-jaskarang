app.controller('PlanetController',['$scope', 'planetDataService',
function($scope, planetDataService) {

    $scope.planetData = {};

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

    $scope.loadPlanetData = function() {
        planetDataService.getPlanetData()
            .then(function (response) {
                $scope.planetData = response.planetData;
            }, function () {
                Console.log("Failed to retrieve the planet data.");
            });
        };

    $scope.loadPlanetData();
}]);