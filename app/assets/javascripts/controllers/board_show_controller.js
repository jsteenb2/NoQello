app.controller("boardShowCtrl", ['$scope', "board", function($scope, board){
  console.log(board);
  $scope.board = board.board;
}]);
