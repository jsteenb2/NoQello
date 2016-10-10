app.directive("activityBox", ["ModalService", 'activityService', function(ModalService, activityService, $scope){

  return {
    templateUrl: "templates/directives/activity_box.html",
    restrict: "E",
    scope: {
      card: "=",
      activity: "="
    },
    link: function(scope, el, attr){

      scope.status = function(){
        $scope.activity.completed = !$scope.activity.completed;
        console.log(activity);
          var data = {
            id: $scope.activity.id,
            completed: $scope.activity.completed
          };
          $scope.updateActivity(data).then(function(response) {
            return response;
          }).catch(function(reason){ console.log(reason); });
      };

      scope.updateActivity = function(activityParams){
        return activityService.updateActivity(activityParams)
          .then(function(response){
            return;
          }).catch(function(reason){
            console.log(reason);
          });
      };

      scope.deleteActivity = function(activity){
        return activityService.removeCard(activity.id)
          .then(function(response){
            _.remove(scope.card.activities, activity);
            console.log("in then directive");
            return;
          });
      };
    }
  };
}]);
