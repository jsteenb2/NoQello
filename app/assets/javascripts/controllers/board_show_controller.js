app.controller("boardShowCtrl", ['$scope', "board", "ModalService", "_", function($scope, board, ModalService, _){
  $scope.board = board.board;

  $scope.$on('removedList', function(ev, data){
    console.log(data.id);
    _.remove($scope.board.lists, {id: data.data.id
      });
  });

  $scope.show = function(){
    ModalService.showModal({
        templateUrl: 'templates/modals/new_list_modal.html',
        controller: 'listModalController',
        inputs: {
          board: $scope.board
        }
    }).then(function(modal) {
        modal.element.show();
        modal.close.then(function(result) {
          return;
        });
        return;
    });
  };

  $scope.updateList = function(listParams){
    return listService.updateList(listParams)
      .then(function(response){
        $scope.getBoards();
        return;
      });
  };
}]);
