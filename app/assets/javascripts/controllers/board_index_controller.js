app.controller("boardIndexCtrl", ['$scope', "boards","boardService", "$state", "listService", function($scope, boards, boardService, $state, listService){

  $scope.boards = boards;
  $scope.newFlag = false;

  $scope.getBoards = function(){
    return boardService.getBoards().$object;
  };

  $scope.flipFlag = function(){
    $scope.newFlag = !$scope.newFlag;
  };

  $scope.createBoard = function(){
    return boardService.createBoard($scope.newBoard)
      .then(function(response){
        $scope.boards = $scope.getBoards();
        $state.go("home.boards.show", {id: response.id});
        $scope.reset();
        return;
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.delete = function(bIdx){
    var byeBoard = $scope.boards[bIdx];
    return boardService.removeBoard(byeBoard)
            .then(function(response){
              // $scope.boards.splice(bIdx, 1);
              $scope.getBoards();
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

  $scope.updateList = function(listParams){
    return listService.updateList(listParams)
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
