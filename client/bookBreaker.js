angular.module('bookBreaker',[])
.factory('breakFactory',function(){
  //add function to caculate days

  //add function to divide pages by days

  //add function to create list item array with ranges and dates
  return {};
})
.controller('breakController', function($scope, breakFactory){
  $scope.book = {};
  $scope.breakBook = function(){
    //send book data to factory and return array of check list objects
  };
});