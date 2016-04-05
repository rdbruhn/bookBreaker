angular.module('bookBreaker.breakTools',[])
.factory('breakFactory',function(){
  //add function to caculate days
  var calcDays = function(dueDate){
    //get difference between due date and today
    var today = moment();
    dueDate = moment(new Date(dueDate));
    return dueDate.diff(today,'days')+1;
  };
  //add function to divide pages by days
  var getRanges = function(days, pages){
    //calculate days per each day and return array of objects
    var results = [];
    var page = 0;
    var date, range, endRange;
    var pagesPerDay = Math.floor(pages/days);
    var remainder = pages%days;
    var splitRem = Math.floor(remainder/days) || 1;
    for(var day = 0; day < days; day++){
      endRange = page + pagesPerDay;
      if(remainder && remainder > splitRem){
        endRange += splitRem;
        remainder -= splitRem;
      }else{
        endRange += remainder;
        remainder -= remainder;
      }
      if(endRange >= pages|| day === days-1){
        endRange = pages;
      }
      range = (page + 1) + "-" + endRange;
      if(endRange !== page){
        date = moment().add(day,'days').calendar('MM/DD/YYYY');
        results.push({range: range, date: date, completed: false, pageCount: endRange-page});
        page = endRange;
      }
    }
    return results;
  };
  //add function to create list item array with ranges and dates
  var buildList = function(dueDate, totalPages){
    var totalDays = calcDays(dueDate);
      return getRanges(totalDays, totalPages);
    };
  return { buildList:buildList };
});