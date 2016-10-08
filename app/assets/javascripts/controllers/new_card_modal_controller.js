app.controller('newCardModalController', ['$scope', 'close', 'cardService', 'list', function($scope, close, cardService, list){
  console.log(list);
  $scope.newCard = {
    list_id: list.id
  };
  $scope.close = function(result) {
    close(result, 200);
  };

  $scope.createCard = function(){
    return cardService.createCard($scope.newCard)
      .then(function(response){
        $scope.close();
        list.cards.push(response);
        return response;
      }).catch(function(reason){
        console.log(reason);
      });
  };
}]);
