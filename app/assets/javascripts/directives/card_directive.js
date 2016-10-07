app.directive("cardBox", ["ModalService", function(ModalService){

  return {
    templateUrl: "templates/directives/card_box.html",
    restrict: "E",
    scope: {
      card: "="
    },
    link: function(scope, el, attr){
      scope.show = function() {
        ModalService.showModal({
            templateUrl: 'templates/modals/card_modal.html',
            controller: function($scope){
              $scope.cardController = this;
              this.msg = "hellow world"
              $scope.card = scope.card;
            }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };
  }
};
}]);
