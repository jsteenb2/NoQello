app.controller("boardNavCtrl", ['_', '$scope', "boards", '$state', function(_, $scope, boards, $state){

  $scope.boards = boards;
  $scope.changeState = function(board){
    $state.go("home.boards.show", { id: board.id});
  };
}]);
