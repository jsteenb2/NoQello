app.controller("boardShowCtrl", ['$scope', "board", "boardService", "listService", function($scope, board, boardService, listService){

  $scope.board = board;
  console.log($scope.board);
}]);
