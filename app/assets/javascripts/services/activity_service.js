app.factory("activityService", ["Restangular", function(Restangular) {

  var updateActivity = function(params){
    console.log(params);
    var data = {
      activity: {
        description: params.description,
        completed: params.completed,
      }
    };
    return Restangular.one("activities", params.id)
      .patch(data);
  };

  var createActivity = function(params){
    var data = {
      activity: {
        description: params.description
      }
    };
    return Restangular.all("activities").post(data);
  };

  var removeActivity = function(id){
    return Restangular.one("activities", id).remove();
  };

  return {
    updateActivity: updateActivity,
    createActivity: createActivity,
    removeActivity: removeActivity
  };
}]);
