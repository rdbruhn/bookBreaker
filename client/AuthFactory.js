angular.module('bookBreaker.authTools',[])
.factory('AuthFactory', function(){
  var currentUser = {};
  var login = function(user, url){
    return $http({
      method: 'POST',
      url: url,
      data: user
    })
    .then(function(resp){
      currentUser.username = user.username;
      currentUser.session = resp.data.session;
      return resp.data;
    });
  };

});