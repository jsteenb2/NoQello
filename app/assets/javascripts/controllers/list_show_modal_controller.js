app.controller('listShowModalController', ['$scope', 'close', 'listService', 'cardService', 'list', 'board',  function($scope, close, listService, $state, list, board){

  $scope.list = list;
  $scope.board = board;

  $scope.close = function(result) {
    close(result, 200);
  };



}]);
