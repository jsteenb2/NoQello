app.controller("boardShowCtrl", ['$scope', "board", "ModalService", "_", '$rootScope', function($scope, board, ModalService, _, $rootScope){
  $scope.board = board;

  $scope.$on('removedList', function(ev, data){
    _.remove($scope.board.lists, {id: data.data.id
      });
  });

  $rootScope.$on('board.addList', function(ev, data){
    $scope.board.lists.push(data);
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
