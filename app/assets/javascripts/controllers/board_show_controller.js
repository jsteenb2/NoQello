app.controller("boardShowCtrl", ['$scope', "board", "ModalService", function($scope, board, ModalService){
  $scope.board = board.board;

  $scope.show = function(){
    ModalService.showModal({
        templateUrl: 'templates/modals/new_list_modal.html',
        controller: 'listModalController',
        inputs: {
          board: $scope.board
        }
    }).then(function(modal) {
        modal.element.show();
        modal.close.then(function(result) {
          return;
        });
    });
  };
}]);
