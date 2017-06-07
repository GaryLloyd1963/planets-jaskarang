describe("Given a planet data service", function() {
    var planetDataService = null,
        $rootScope;

    beforeEach(module("planets"));

    describe("And the planet data is fetched from a real endpoint", function() {
        var $httpBackend,
        mockUrlConfig = {planetDataServiceUrl: "localhost:3456/real-service/planet-data"},
        testPlanetData = { title : "Test Planet Data"};

        beforeEach(module(function ($provide) {
            $provide.value("serviceUris", mockUrlConfig);
        }));
        
        beforeEach(inject(function ($injector, _$rootScope_) {
            planetDataService = $injector.get("planetDataService");
            $rootScope = _$rootScope_;
            $httpBackend = $injector.get("$httpBackend");
        }));


        beforeEach(function () {
            $httpBackend.expect("GET",mockUrlConfig.planetDataServiceUrl)
                        .respond(testPlanetData);

            planetDataService.getPlanetData()
                .then(function (returnFromPromise) {
                    expect(returnFromPromise.title).toEqual('Test Planet Data');
                });
        });

        it("Then the service is defined", function() {
            expect(planetDataService).toBeTruthy();            
        })

        it("Then it calls the correct Uri with a GET method.\n", function () {
            $httpBackend.flush();
        }); 
    })

    describe("And the fake planet data is fetched when in fake service mode", function() {
        var mockUrlConfig = {planetDataServiceUrl: "localhost:3456/fake-service/planet-data"},
        deferredPromise;

        beforeEach(module(function ($provide) {
            $provide.value("serviceUris", mockUrlConfig);
        }));
        
        beforeEach(inject(function ($injector, _$rootScope_) {
            planetDataService = $injector.get("planetDataService");
            $rootScope = _$rootScope_;
        }));

        beforeEach(function() {
            deferredPromise = planetDataService.getPlanetData()
                .then(function(returnedData) {
                    expect(returnedData.title).toEqual('Planet Data');
            });

            $rootScope.$apply();
        });

        it("Then the service is defined", function() {
            expect(planetDataService).toBeTruthy();            
        })    
    });
})