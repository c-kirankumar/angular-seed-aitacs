'use strict';

angular.module('myApp.greet', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/greet', {
        templateUrl: 'greet/greet.html',
        controller: 'greetController'
    });
}])

.controller('greetController', ['$scope', function ($scope) {

    $scope.name = '';
    $scope.greetMsg = '';
    $scope.salutation = 'Mr';
    $scope.greet = function () {
        $scope.greetMsg = 'Hi ' + $scope.salutation+ '. ' + $scope.name + ', Have  a nice day!';
    }

}])
.filter('trimText', function () {
    return function (data) {
        return data.length > 20 ? data.substr(0, 20) + '...' : data;
    }
});


