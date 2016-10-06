var app = angular.module('app', ['ui.router', 'restangular', 'Devise']);

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

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        abstract: true
      })
      .state('home.boards', {
        url: "/",
        views: {
          "boardNav@": {
            templateUrl: "/templates/boards/dropdown.html",
            controller: "boardNavCtrl"
          },
          'board@': {
            templateUrl: "/templates/boards/show.html",
            controller: "boardShowCtrl"
          }
        },
        resolve: {
          boards: ['boardService', function(boardService) {
              var boards = boardService.getBoards().$object;
              console.log(boards);
              return boards
            }
          ]
        }
      })

  }
]);
