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

mainApp.controller("RepositoriesController", ["$scope", "$http", "registryPath", function($scope, $http, registryPath) {
    $scope.title = "Repositories";

    $http({
        method: 'GET',
        url: "/registryApi/" + registryPath.repoList
    }).then(function(response){
        $scope.repositories = response.data.repositories;
    }, function(){
        alert("error");
    });
}]);

mainApp.controller("RepositoryController", ["$scope", "$http", "$routeParams", "registryPath", function($scope, $http, $routeParams, registryPath) {
    $scope.title = $routeParams.name;

    $http({
        method: 'GET',
        url: "/registryApi/" + registryPath.repoList
    }).then(function(response){
        $scope.repositories = response.data.repositories;
    }, function(){
        alert("error");
    });
}]);