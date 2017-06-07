app.factory("planetDataService", ["$resource", "$q", "serviceUris",
    function ($resource, $q, serviceUris) {
        "use strict";

        return {
            getFakeServicePlanetData: function() {
                console.log("rig up fake data promise");
                var deferred = $q.defer();
                deferred.resolve(planetFakeData);
                return deferred.promise;
            },

            getPlanetData: function () {
                if ( serviceUris.planetDataServiceUrl.indexOf('fake-service') !== -1)
                    return this.getFakeServicePlanetData();

                var serviceResource = $resource(serviceUris.planetDataServiceUrl);
                var request = serviceResource.get();
                return request.$promise;
            }
        };
    }
]);