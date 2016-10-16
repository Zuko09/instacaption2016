(function() {
    'use strict';

    angular.module('app1', [])
    .controller('appController', appController);

    appController.$inject = ['$scope', '$window'];
    function appController($scope, $window) {


    }
})()
