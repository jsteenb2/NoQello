app.controller('cardModalController', ['$scope', 'card', 'close', 'cardService', function($scope, card, close, cardService){
  $scope.card = card;
  $scope.newCard = {};
  $scope.close = function(result) {
    close(result, 200);
  };

  $scope.updateCard = function(cardParams){
    return cardService.updateCard(cardParams)
      .then(function(response){
        return;
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.createCard = function(){
    return cardService.createCard($scope.newCard)
      .then(function(response){
        return response;
      }).catch(function(reason){
        console.log(reason);
      });
  };
}]);
