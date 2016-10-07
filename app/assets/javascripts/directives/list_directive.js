app.directive("lister", ['listService', function(listService){

  return {
    templateUrl: "templates/directives/lister.html",
    restrict: "E",
    scope: {
      list: "="
    },
    link: function(scope, el, attr){
      scope.cards = scope.list.cards;

      scope.updateList = function(listParams){
        return listService.updateList(listParams)
          .then(function(response){
            return;
          }).catch(function(reason){
            console.log(reason);
          });
      };
    }
  };
}]);
