describe("Given an planets controller", function() {
    var scope, rootScope,
        controller,

        mockPlanetDataService = jasmine.createSpyObj("planetDataService", ["getPlanetData"]),
        deferredPlanetData;

    beforeEach(module("planets"));

    beforeEach(module(function($provide) {
        $provide.value("planetDataService", mockPlanetDataService);
    }));

    beforeEach(inject(function($injector, $controller, $rootScope, $q) {
        rootScope = $rootScope;
        scope = $rootScope.$new();

        deferredPlanetData = $q.defer();       
        mockPlanetDataService.getPlanetData.and.returnValue(deferredPlanetData.promise);

        controller = $controller("PlanetController", { $scope: scope });
    }));

    describe("when the controller is loaded and the planet data is retreived", function() {
        beforeEach(function() {
            deferredPlanetData.resolve(planetTestData);
            rootScope.$apply();
        });

        it("then a call to the getPlanetDataService service is made.", function() {
            expect(mockPlanetDataService.getPlanetData).toHaveBeenCalled();
        });

        it ("then sets the controller planet data", function() {
            expect(scope.planetData.length > 0).toBeTruthy();
        })

        describe("when the planet descriptions are retrieved", function() {
            it("Should describe mercury correctly", function() {
                expect(scope.describePlanet("mercury")).toEqual("It's small and hot");
            });
        
            it("Should describe mars correctly", function() {
                expect(scope.describePlanet("mars")).toEqual("It's red");
            });

            it("Should describe unknown correctly", function() {
                expect(scope.describePlanet("unknown")).toEqual("I didn't know unknown was a planet!");
            });
        });
    });
});