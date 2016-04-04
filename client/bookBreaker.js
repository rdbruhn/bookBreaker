angular.module('bookBreaker',[])
.factory('breakFactory',function(){
  //add function to caculate days
  var calcDays = function(dueDate){
    //get difference between due date and today
    
  };
  //add function to divide pages by days
  var getRanges = function(){
    //calculate days per each day and return array of objects

  };
  //add function to create list item array with ranges and dates
  var buildList = function(dueDate, totalPages){
    var totalDays = calcDays(dueDate);
    return getRanges(totalDays, totalPages);
  };
  return { buildList:buildList };
})
.controller('breakController', function($scope, breakFactory){
  $scope.book = {};
  $scope.breakBook = function(){
    //send book data to factory and return array of check list objects
  $scope.data = [];
    breakFactory.buildList($scope.book.date, $scope.book.pages);
  };
});