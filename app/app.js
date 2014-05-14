var angularDemo = angular.module('angularDemo',['ngRoute']);
  angularDemo.factory('ApiService', ApiService);
     
  angularDemo.config(function( $routeProvider){
    $routeProvider.
      when('/home',{ controller: homeController, templateUrl: 'app/home/home.html'}).
      when('/phones',{ controller: phoneController, templateUrl: 'app/phone/list.html'}).
      otherwise({ redirectTo: '/home' });
  });


