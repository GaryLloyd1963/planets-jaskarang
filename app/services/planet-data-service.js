app.factory("planetDataService", ["$resource", "$q", "serviceUris",
    function ($resource, $q, serviceUris) {
        "use strict";

        return {
            getPlanetData: function () {
                var serviceResource = $resource(serviceUris.planetDataServiceUrl);
                var request = serviceResource.get();
                return request.$promise;
            }
        };
    }
]);