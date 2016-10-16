(function() {
    //'use strict';

    // CLARIFAI HERE
    var app = new Clarifai.App(
    'wHIFmkeN4zK0u-9fbniBuBuRvr46iqH90Qm6TpHR',
    'oXH7OBXjkHkxUprD-1ldyof2Q29WU76xaAkeBLFw'
    );






    // ANGULAR STARTS HERE
    angular.module('app1', [])
    .controller('appController', appController);

    appController.$inject = ['$scope'];
    function appController($scope) {
        $scope.tags = [];
        // predict the contents of an image by passing in a url

        app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
        function(response) {
            var temp = [];
            var results = response["data"]["outputs"][0]["data"]["concepts"];
            for(i=0; i< results.length; i++) {
                temp.push(results[i]["name"]);
            }
            //console.log(tags);
            $scope.$apply(function() {
                $scope.tags = temp;
            });
            console.log(($scope.description));
        },
            function(err) {
                console.error(err);
            }
        );


    }
})()
