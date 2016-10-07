app.controller("boardShowCtrl", ['$scope', "board", function($scope, board){

  $scope.board = board.board;
}]);
