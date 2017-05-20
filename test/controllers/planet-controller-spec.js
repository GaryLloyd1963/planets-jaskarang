describe("Planet Controller", function() {

    var $rootscope,
        $scope,
        controller;

    beforeEach(function() {
        module('planets');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("PlanetController", {$scope: $scope});
        });
    });

    describe("Planet descriptions", function() {
        it("Should describe mars correctly", function() {
            expect($scope.describePlanet("mars")).toEqual("It's red");
        });
    });
});