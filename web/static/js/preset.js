var mainApp = angular.module('mainApp', ['ngRoute'], function($interpolateProvider) {
    /* change angular delimiter, for preventing conflict with bottle.py template */
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

mainApp.value("registryPath", REGISTRYPATH);