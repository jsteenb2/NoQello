app.directive("cardBox", [function(){

  return {
    templateUrl: "templates/directives/card_box.html",
    restrict: "E",
    scope: {
      card: "="
    },
    link: function(scope){
    }
  };
}]);
