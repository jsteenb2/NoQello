app.directive("lister", ['listService', 'ModalService','$rootScope', 'cardService', 'boardService', function(listService, ModalService, $rootScope, cardService, boardService){

  return {
    templateUrl: "templates/directives/lister.html",
    restrict: "E",
    scope: {
      list: "=",
      board: "="
    },
    link: function(scope, el, attr){
      scope.cards = scope.list.cards;

      scope.updateList = function(listParams){
        return listService.updateList(listParams)
          .then(function(response){
            boardService.getBoard(scope.board.id);
            return;
          }).catch(function(reason){
            console.log(reason);
          });
      };

      scope.delete = function(){
        return listService.removeList(scope.list.id)
          .then(function(response){
            console.log(scope.list);
              scope.$emit('removedList', { data: scope.list });
              return response;
          });
      };

      scope.show = function() {
        ModalService.showModal({
            templateUrl: 'templates/modals/new_card_modal.html',
            controller: 'newCardModalController',
            inputs: {
              list: scope.list
            }
        }).then(function(modal) {
            modal.element.show();
            modal.close.then(function(result) {
              //TODO: add a flash message here
            });
        });
      };
    }
  };
}]);
