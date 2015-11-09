mainApp.config(function ($routeProvider) {
    $routeProvider
        .when('/repositories', {
            templateUrl: 'repositories.html',
            controller: 'RepositoriesController'
        })
        .when('/repository/:name', {
            templateUrl: 'repository.html',
            controller: 'RepositoryController'
        })
        .otherwise({
            redirectTo: '/repositories'
        });
});

mainApp.controller("RepositoriesController", ["$scope", "registryPath", function($scope, registryPath) {
    $scope.title = "Repositories";

    console.log("RepositoriesController");
}]);

mainApp.controller("RepositoryController", ["$scope", "registryPath", function($scope, registryPath) {
    $scope.title = "Repository";
}]);