angular.module('bookBreaker',[
  'bookBreaker.authTools',
  'bookBreaker.breakTools',
  'bookBreaker.breaker',
  'bookBreaker.auth',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/signin.html',
      controller: 'AuthController'
    })
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'AuthController'
    })
    .when('/app', {
      templateUrl: 'views/app.html',
      controller: 'breakController'
    });
});

