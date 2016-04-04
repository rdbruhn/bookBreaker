angular.module('bookBreaker',[])
.factory('breakFactory',function(){
  //add function to caculate days
  var calcDays = function(dueDate){
    //get difference between due date and today
    console.log("calcDays");
    debugger
    var today = new Date();
    var due = dueDate;
    var diff = (due - today)/1000;
    diff = Math.abs(Math.floor(diff));
    var days = Math.floor(diff/(24*60*60));
    console.log(days);
    return days;
  };
  //add function to divide pages by days
  var getRanges = function(days, pages){
    //calculate days per each day and return array of objects
    console.log("getRanges");
    var results = [];
    var page = 1;
    var date, range;
    var pagesPerDay = Math.floor(pages/days);
    for(var day = 1; day <= days; day++){
      endRange = page + pagesPerDay;
      range = page + "-" + endRange;
      date = moment().add(day,'days').calendar();
      results.push({range: range, date: date});
    }
    return results;
  };
  //add function to create list item array with ranges and dates
  var buildList = function(dueDate, totalPages){
    console.log("buildList");
    var totalDays = calcDays(dueDate);
      return getRanges(totalDays, totalPages);
    };
  return { buildList:buildList };
})
.controller('breakController', function($scope, breakFactory){
  $scope.book = {};
  $scope.breakBook = function(){
    //send book data to factory and return array of check list objects
    console.log("breakBook");
  $scope.data = breakFactory.buildList($scope.book.dueDate, $scope.book.pages);
  };
});