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
        .when('/repository/:name/:tag', {
            templateUrl: 'tag.html',
            controller: 'TagController'
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
    var repositoryName = $routeParams.name;

    $scope.repositoryName = repositoryName;

    $http({
        method: 'GET',
        url: "/registryApi/" + registryPath.imageTags.replace(":name", repositoryName)
    }).then(function(response){
        $scope.tags = response.data.tags;
    }, function(){
        alert("error");
    });
}]);

mainApp.controller("TagController", ["$scope", "$http", "$routeParams", "registryPath", function($scope, $http, $routeParams, registryPath) {
    var repositoryName = $routeParams.name;
    var tagName = $routeParams.tag;

    $scope.repositoryName = repositoryName;
    $scope.tagName = tagName;

    $http({
        method: 'GET',
        url: "/registryApi/" + registryPath.manifests.replace(":name", repositoryName).replace(":tag", tagName)
    }).then(function(response){
        $scope.fsLayers = response.data.fsLayers;
    }, function(){
        alert("error");
    });
}]);