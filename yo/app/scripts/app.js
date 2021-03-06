'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description # webappApp
 * 
 * Main module of the application.
 */
angular.module('acmplugin', 
    [ 
      'ngAnimate', 
      'ngCookies', 
      'ngResource', 
      'ngRoute', 
      'ngSanitize', 
      'ngTouch', 
      'ui.bootstrap', 
    ]).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl : 'views/main.html',
    controller : 'DefinitionCtrl'
  }).when('/instances', {
    templateUrl : 'views/instances.html',
    controller : 'InstanceCtrl'
  }).when('/instance/:instanceId', {
    templateUrl : 'views/instance.html',
    controller : 'InstanceCtrl'
  }).when('/definitions', {
    templateUrl : 'views/definitions.html',
    controller : 'DefinitionCtrl'
  }).when('/definition/:caseDefinitionId', {
    templateUrl : 'views/definition.html',
    controller : 'DefinitionCtrl'
  }).when('/task/:taskId', {
    templateUrl : 'views/task.html',
    controller : 'TaskCtrl'
  }).otherwise({
    redirectTo : '/'
  });
});

angular.module('acmplugin').filter('instanceFilter', function() {
  return function(instances, activeVersionsOnly) {
    if (!activeVersionsOnly) {
      return instances;
    }

    var filtered = [];
    angular.forEach(instances, function(instance) {
      if (instance.hasOwnProperty("active") && instance.active) {
          filtered.push(instance);
      } else if (instance.hasOwnProperty("ended") && !instance.ended) {
          filtered.push(instance);
      }
    });
    return filtered;
  };
});
