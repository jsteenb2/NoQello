app.factory("cardService", ["Restangular", function(Restangular) {

  var updateCard = function(params){
    var data = {
      card: {
        description: params.description
      }
    };
    return Restangular.one("cards", params.id)
      .patch(data);
  };

  return {
    updateCard: updateCard
  };
}]);
