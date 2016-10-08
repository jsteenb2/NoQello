app.controller("boardIndexCtrl", ['$scope', "boards","boardService", "$state", "listService", function($scope, boards, boardService, $state, listService){

  $scope.boards = boards;
  $scope.newFlag = false;

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

  $scope.deleteList = function(params){
    return listService.removeList(params.list.id)
      .then(function(response){
        var listIdx = _.findIndex(params.board.lists, params.list);
        params.board.lists.splice(listIdx, 1);
        return;
      });
  };
}]);
