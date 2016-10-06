app.controller("boardIndexCtrl", ['$scope', "boards", "boardService", "listService", function($scope, boards, boardService, listService){

  $scope.boards = boards;
}]);
