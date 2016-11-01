app.controller('listModalController', ['$scope', 'close', 'listService', '$stateParams', 'board', '$rootScope', function($scope, close, listService, $stateParams, board, $rootScope){

  $scope.newList = {
    board_id: board.id || $stateParams.id
  };

  $scope.createList = function(){
    return listService.createList($scope.newList)
      .then(function(response){
        $rootScope.$emit('board.addList', response.plain());
        $scope.close();
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
    $scope.newList.title = "";
    $scope.newList.description = "";
  };
}]);
