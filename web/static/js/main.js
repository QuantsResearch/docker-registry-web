var mainApp = angular.module('mainApp', []);
mainApp.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Hello';
}]);