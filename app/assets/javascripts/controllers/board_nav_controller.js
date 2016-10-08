app.controller("boardNavCtrl", ['_', '$scope', "boards", '$state', 'ModalService', function(_, $scope, boards, $state, ModalService){

  $scope.boards = boards;
  $scope.changeState = function(board){
    $state.go("home.boards.show", { id: board.id});
  };

  $scope.show = function() {
    ModalService.showModal({
        templateUrl: 'templates/modals/new_board_modal.html',
        controller: 'boardModalController'
    }).then(function(modal) {
        modal.element.show();
        modal.close.then(function(result) {
            console.log(result);
        });
    });
  };
}]);
