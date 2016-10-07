var app = angular.module('app', ['ui.router', 'restangular', 'Devise', 'ui.bootstrap', 'infinite-scroll']);

app.factory('_', [
  '$window',
  function($window) {
    return $window._;
  }
]);

app.config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
  }
]);

// config for restangular
app.config([
  'RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/boards');

    $stateProvider
      .state('home', {
        abstract: true
      })
      .state('home.boards', {
        // boards include lists for that board but not the card
        url: "/boards",
        views: {
          "boardNav@": {
            templateUrl: "/templates/boards/dropdown.html",
            controller: "boardNavCtrl"
          },
          'board@': {
            templateUrl: "/templates/boards/index.html",
            controller: "boardIndexCtrl"
          }
        },
        resolve: {
          boards: ['boardService', function(boardService) {
              return boardService.getBoards().then(function(response){
                return response;
              });
            }]
        }
      })
      .state('home.boards.show', {
        url: "/:id",
        views: {
          "board@": {
            templateUrl: "/templates/boards/show.html",
            controller: "boardShowCtrl"
          }
        },
        resolve: {
          board: ['boardService', "$stateParams", function(boardService, $stateParams){
            return boardService.getBoard($stateParams.id).then(function(data){
              return data;
            });
          }]
        }
      })
  }
]);


app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
