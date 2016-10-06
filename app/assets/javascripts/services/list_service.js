app.factory("listService", ["Restangular", function(Restangular) {

  var getList = function(id){
    return Restangular.one("lists", id).get();
  };

  return {
    getList: getList
  };
}]);
