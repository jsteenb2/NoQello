app.controller("boardIndexCtrl", ['$scope', "boards","boardService", "$state", "listService", "ModalService", "_", '$rootScope', function($scope, boards, boardService, $state, listService, ModalService, _, $rootScope){

  $scope.boards = boards;
  $scope.newFlag = false;

  $rootScope.$on('board.addList', function(ev, data){
    var board = _.find($scope.boards, function(board){
      return board.id == data.board_id;
    });
    board.lists.push(data);
  });

  $scope.getBoards = function(){
    return boardService.getBoards().$object;
  };

  $scope.flipFlag = function(){
    $scope.newFlag = !$scope.newFlag;
  };

  $scope.delete = function(board){
    console.log(board);
    return boardService.removeBoard(board)
            .then(function(response){
              _.remove(scope.boards, {id: board.id
                });
              return;
            }).catch(function(reason){
              console.log(reason);
            });
  };

  $scope.reset = function(){
    $scope.newFlag = false;
    $scope.newBoard = {};
  };

  $scope.updateBoard = function(boardParams){
    return boardService.updateBoard(boardParams)
        .then(function(response){
          $scope.getBoards();
          return;
        });
  };

  $scope.show = function(board){
    ModalService.showModal({
        templateUrl: 'templates/modals/new_list_modal.html',
        controller: 'listModalController',
        inputs: {
          board: board
        }
    }).then(function(modal) {
        modal.element.show();
        modal.close.then(function(result) {
          return;
        });
        return;
    });
  };
}]);
