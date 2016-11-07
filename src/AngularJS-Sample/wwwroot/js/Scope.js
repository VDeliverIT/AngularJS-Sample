//module
var personApp = angular.module('personApp', []);

//controller 
personApp.controller('personController', ['$scope', function ($scope) {
    $scope.name = 'Mary Jane';
}]);