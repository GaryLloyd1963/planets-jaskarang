app.factory("planetDataService", ["$resource", "$q", "serviceUris",
    function ($resource, $q, serviceUris) {
        "use strict";

        return {
            getFakeServicePlanetData: function() {
                var deferred = $q.defer();
                deferred.resolve(planetFakeData);
                return deferred.promise;
            },

            getPlanetData: function () {
                if ( serviceUris.planetDataServiceUrl.indexOf('fake-service') !== -1) {
                    console.log("get fake data");
                    return this.getFakeServicePlanetData();
                }

                var serviceResource = $resource(serviceUris.planetDataServiceUrl);
                var request = serviceResource.get();
                return request.$promise;
            }
        };
    }
]);