app.controller('boardModalController', ['$scope', 'close', 'boardService', '$state',  function($scope, close, boardService, $state){

  $scope.newBoard = {};

  $scope.createBoard = function(){
    return boardService.createBoard($scope.newBoard)
      .then(function(response){
        $state.go("home.boards.show", {id: response.id});
        $scope.reset();
        return;
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.close = function(result) {
    close(result, 200);
  };

  $scope.reset = function(){
    $scope.newBoard = {};
  };
}]);
