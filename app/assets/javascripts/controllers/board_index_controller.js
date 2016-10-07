app.controller("boardIndexCtrl", ['$scope', "boards","boardService", "$state", function($scope, boards, boardService, $state){

  $scope.boards = boards;
  $scope.newFlag = false;

  $scope.flipFlag = function(){
    $scope.newFlag = !$scope.newFlag;
  };

  $scope.createBoard = function(){
    return boardService.createBoard($scope.newBoard)
      .then(function(response){
        $state.go("home.boards.show", {id: response.id});
        $scope.boards.push(response);
        $scope.reset();
        return;
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.reset = function(){
    $scope.newFlag = false;
    $scope.newBoard = {};
  };
}]);
