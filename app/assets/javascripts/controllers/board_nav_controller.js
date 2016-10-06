app.controller("boardNavCtrl", ['_', '$scope', "boards", 'boardService', '$rootScope', '$state', '$window', function(_, $scope, boards, boardService, $rootScope, $state, $window){

  $scope.boards = boards;
  $scope.changeState = function(board){
    console.log(board.id);
    $state.go("home.boards.show", { id: board.id});
  };
}]);
