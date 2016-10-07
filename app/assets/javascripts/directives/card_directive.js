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
  }
};
}]);
