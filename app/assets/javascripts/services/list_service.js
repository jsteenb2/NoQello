app.factory("listService", ["Restangular", function(Restangular) {

  var getList = function(id){
    return Restangular.one("lists", id).get();
  };

  var updateList = function(params){
    var data = {
      list: {
        title: params.title,
        description: params.description
      }
    };
    return Restangular.one("lists", params.id)
      .patch(data);
  };

  var removeList = function(id){
    return Restangular.one("lists", id).remove();
  };

  return {
    getList: getList,
    updateList: updateList,
    removeList: removeList
  };
}]);
