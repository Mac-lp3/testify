'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');

var testify = angular.module('testify', [
    'ngRoute'
]);

testify.config(['$routeProvider', function($routeProvider) {

    // Is there a way for this to be env-dependent?
    $routeProvider.when('/', {
         templateUrl : 'partials/home/home.html',
         controller : 'HomeController',
         controllerAs : 'homeCtrl'
    });

}]);

testify.controller('HomeController', require('../partials/home/homeController'));