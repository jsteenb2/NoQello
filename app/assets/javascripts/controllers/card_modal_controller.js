app.controller('cardModalController', ['$scope', 'card', 'close', 'cardService', 'activityService', function($scope, card, close, cardService, activityService){

  $scope.card = card;
  $scope.newCard = {};

  $scope.newActivityFlag = true;
  $scope.newActivity = {
    card_id: $scope.card.id
  };

  $scope.close = function(result) {
    close(result, 200);
  };

  console.log($scope.card);

  $scope.updateCard = function(cardParams){
    console.log(cardParams);
    return cardService.updateCard(cardParams)
      .then(function(response){
        return;
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.opened = {};

  $scope.open = function($event, elementOpened) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened[elementOpened] = !$scope.opened[elementOpened];
	};


  $scope.createCard = function(){
    return cardService.createCard($scope.newCard)
      .then(function(response){
        return response;
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.createActivity = function(){
    return activityService.createActivity($scope.newActivity)
      .then(function(response){
        $scope.card.activities.push(response);
        $scope.newActivity.description = "";
        return response;
      }).catch(function(reason){
        console.log(reason);
      });
  };

  $scope.status = function(){
    $scope.card.completed = !$scope.card.completed;
    console.log(card);
      var data = {
        id: $scope.card.id,
        completed: $scope.card.completed
      };
      $scope.updateCard(data).then(function(response) {
        return response;
      }).catch(function(reason){ console.log(reason); });
  };

  $scope.statusReport = function(){
    return $scope.card.completed ? "Complete" : "Incomplete";
  };
}]);
