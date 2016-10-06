app.directive("lister", ['listService', function(listService){

  return {
    templateUrl: "templates/directives/lister.html",
    restrict: "E",
    scope: {
      list: "="
    },
    link: function(scope, el, attr){
        // scope.cards = function(){
        //   return listService.getList(scope.list.id).then(function(data){
        //     console.log(data);
        //     return data.cards;
        //   }).catch(function(reason){
        //     console.log(reason);
        //   });
        // };
    }
  };
}]);
