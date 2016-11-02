app.directive("boardList", ['listService', 'ModalService', '$rootScope', 'cardService', function(listService, ModalService, $rootScope, cardService) {
    return {
        templateUrl: "templates/directives/board_list.html",
        restrict: "E",
        scope: {
            list: "=",
            board: "="
        },
        link: function(scope, element, attrs){
          scope.deleteList = function(list){
            return listService.removeList(list.id)
              .then(function(response){
                var listIdx = _.findIndex(scope.board.lists, list);
                scope.board.lists.splice(listIdx, 1);
                return;
              });
          };

          $rootScope.$on('emptiedBoard', function(ev, boardId){
            if (scope.board.id == boardId){
              console.log('things are in board-list if');
              element.remove();
              console.log(element);
              scope.$destroy();
            }
          });
        }
    };
}]);
