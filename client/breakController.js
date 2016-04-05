angular.module('bookBreaker.breaker',[])
.controller('breakController', function($scope, breakFactory){
  $scope.book = {};
  $scope.breakBook = function(){
    //send book data to factory and return array of check list objects
  $scope.data = breakFactory.buildList($scope.book.dueDate, $scope.book.pages);
  $scope.book.formatDueDate = moment($scope.book.dueDate).format('MM/DD/YYYY');
  };

  $scope.completeTask = function(item){
    item.myStyle = {'text-decoration':'line-through'};
    $scope.book.pages -= item.pageCount;
    item.completed = true;
    item.pageCount = 0;
  };
});