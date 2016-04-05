angular.module('bookBreaker.auth',[])
.controller('AuthController', function($scope, AuthFactory){
  $scope.user= {};
  $scope.signIn = function(){
    AuthFactory.login($scope.user, '/signin');
  };
  $scope.signUp = function(){
    AuthFactory.login($scope.user, '/signup');
  };
});