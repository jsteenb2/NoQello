app.factory("userService", [function(){

  var currentUser;
  var setCurrentUser = function(user){
    currentUser = user;
  };

  var getCurrentUser = function(){
    return currentUser;
  };

  return {
    setCurrentUser: setCurrentUser,
    getCurrentUser: getCurrentUser
  };
}]);
