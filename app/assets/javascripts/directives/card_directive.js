app.directive("cardBox", ["ModalService", 'cardService', function(ModalService, cardService, $scope){

  return {
    templateUrl: "templates/directives/card_box.html",
    restrict: "E",
    scope: {
      card: "=",
      list: "="
    },
    link: function(scope, el, attr){
      console.log(scope.card);

      scope.show = function() {
        ModalService.showModal({
            templateUrl: 'templates/modals/card_modal.html',
            controller: 'cardModalController',
            inputs: {
              card: scope.card
            }
        }).then(function(modal) {
            modal.element.show();
            modal.close.then(function(result) {
                scope.message = "You said " + result;
            });
        });
    };

    scope.deleteCard = function(card){
      return cardService.removeCard(card.id)
        .then(function(response){
          _.remove(scope.list.cards, card);
          console.log("in then directive");
          return;
        });
    };
  }
};
}]);
