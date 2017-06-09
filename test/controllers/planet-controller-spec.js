describe("Given a planets controller", function() {
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
            expect(controller.planetData.planetInfo.length > 0).toBeTruthy();
        })

        it ("then the controller has no selected planet", function() {
            expect(controller.selectedPlanet).toBe("");
        })

        describe("when the planet descriptions are retrieved", function() {
            it("Should describe mercury correctly", function() {
                expect(controller.describePlanet("mercury")).toEqual("It's small and hot");
            });
        
            it("Should describe mars correctly", function() {
                expect(controller.describePlanet("mars")).toEqual("It's red");
            });

            it("Should describe unknown correctly", function() {
                expect(controller.describePlanet("unknown")).toEqual("I didn't know unknown was a planet!");
            });

            it("Should describe neptune correctly", function() {
                expect(controller.describePlanet("neptune")).toEqual("It's really blue");
            });
        });
    });
});