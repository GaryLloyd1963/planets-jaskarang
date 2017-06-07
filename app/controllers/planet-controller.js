app.controller('PlanetController',['$scope', 'planetDataService',
function($scope, planetDataService) {

    $scope.planetData = {};
    $scope.selectedPlanet = "";

    $scope.planetDataIsEmpty = function() {
        return ($scope.planetData === undefined || $scope.planetData.planetInfo === undefined);
    }

    $scope.describePlanet = function(planetName) {
        if ( !$scope.planetData || $scope.planetData.length == 0) {
            return "Oh dear still waiting for the data";
        }

        var planetInfo = $scope.planetData.planetInfo;
        var planetNameLowerCase = planetName.toLowerCase().trim();

        for (i = 0; i < planetInfo.length; i++) { 
            if (planetNameLowerCase === planetInfo[i].name.toLowerCase().trim()) {
                return planetInfo[i].description;
            }
        }
        return "I didn't know " + planetName + " was a planet!";
    }

    $scope.loadPlanetData = function() {
        planetDataService.getPlanetData()
            .then(function (response) {
                $scope.planetData = response;
                console.log("got planet data " + $scope.planetData.title);
            }, function () {
                Console.log("Failed to retrieve the planet data.");
            });
        };

    $scope.loadPlanetData();
}]);