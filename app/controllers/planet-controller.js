app.controller('PlanetController',['$scope', 'planetDataService',
function($scope, planetDataService) {
    var vm = this;

    vm.planetData = {};
    vm.selectedPlanet = "";

    vm.planetDataIsEmpty = function() {
        return (vm.planetData === undefined || vm.planetData.planetInfo === undefined);
    }

    vm.describePlanet = function(planetName) {
        if ( planetName === null || planetName === "") {
            return "No planet selected yet.";
        }

        if ( !vm.planetData || vm.planetData.length == 0) {
            return "Oh dear still waiting for the data";
        }

        var planetInfo = vm.planetData.planetInfo;
        var planetNameLowerCase = planetName.toLowerCase().trim();

        for (i = 0; i < planetInfo.length; i++) { 
            if (planetNameLowerCase === planetInfo[i].name.toLowerCase().trim()) {
                return planetInfo[i].description;
            }
        }
        return "I didn't know " + planetName + " was a planet!";
    }

    vm.loadPlanetData = function() {
        planetDataService.getPlanetData()
            .then(function (response) {
                vm.planetData = response;
            }, function () {
                //Console.log("Failed to retrieve the planet data.");
            });
        };

    vm.loadPlanetData();
}]);