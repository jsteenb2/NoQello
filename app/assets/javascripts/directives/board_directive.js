app.directive("boardList", ['listService', 'ModalService','$rootScope', 'cardService', function(listService, ModalService, $rootScope, cardService){
  return {
    templateUrl: "templates/directives/board_list.html",
    restrict: "E",
    scope: {
      list: "=",
      board: "="
    }
  };
}]);
