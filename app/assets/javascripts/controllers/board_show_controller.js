app.controller("boardShowCtrl", ['$scope', "board", "ModalService", function($scope, board, ModalService){
  $scope.board = board.board;

  $scope.show = function(){
    ModalService.showModal({
        templateUrl: 'templates/modals/new_board_modal.html',
        controller: 'boardModalController',
    }).then(function(modal) {
        modal.element.show();
        modal.close.then(function(result) {
            scope.message = "You said " + result;
        });
    });
  }
}]);
