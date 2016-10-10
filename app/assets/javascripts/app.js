var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'restangular', 'Devise', "xeditable", 'angularModalService', 'ngAnimate', "checklist-model"]);

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
          },
          'title@': {
            templateUrl: "/templates/boards/board_title.html"
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
          },
          'title@': {
            templateUrl: "/templates/boards/list_title.html"
          }
        },
        resolve: {
          board: ['boardService', "$stateParams", function(boardService, $stateParams){
            return boardService.getBoard($stateParams.id).then(function(data){
              return data.board;
            });
          }]
        }
      });
  }
]);


app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});


// app.run(function(editableOptions) {
//   editableOptions.theme = 'bs3';
//   editableThemes.bs3.inputClass = 'input-sm';
//   editableThemes.bs3.buttonsClass = 'btn-sm';
// });

app.run(function(editableOptions, editableThemes) {
  editableThemes.bs3.inputClass = 'input-sm';
  editableThemes.bs3.buttonsClass = 'none';
  editableOptions.theme = 'bs3';
});
