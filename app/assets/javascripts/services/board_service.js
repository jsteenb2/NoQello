app.factory("boardService", ["Restangular", function(Restangular) {
  var _selectedBoard;

  var getBoards = function(){
    return Restangular.all("boards").getList();
  };

  var getBoard = function(id){
    return Restangular.one("boards", id).get();
  }

  var updateSelectedBoard = function(board){
    _selectedBoard = board;
  };

  var getSelectedBoard = function(){
    return _selectedBoard;
  };

  return {
    getBoards: getBoards,
    updateSelectedBoard: updateSelectedBoard,
    getSelectedBoard: getSelectedBoard,
    getBoard: getBoard
  };
}]);
