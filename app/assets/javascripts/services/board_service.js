app.factory("boardService", ["Restangular", "_", function(Restangular, _) {
  var _selectedBoard;

  var _boards = [];

  var getBoards = function(){
    if(_.isEmpty(_boards)){
      return Restangular.all("boards").getList().then(function(response){
        _boards = response;
        return response;
      });
    } else {
      return Promise.resolve(_boards);
    }
  };

  var createBoard = function(params){
    return Restangular.all("boards").post(params)
      .then(function(data){
        _boards.push(data);
        return data;
      });
  };

  var getBoard = function(id){
    return Restangular.one("boards", id).get();
  };

  var updateSelectedBoard = function(board){
    _selectedBoard = board;
  };

  var getSelectedBoard = function(){
    return _selectedBoard;
  };

  var removeBoard = function(board){
    return board.remove();
  };

  return {
    getBoards: getBoards,
    updateSelectedBoard: updateSelectedBoard,
    getSelectedBoard: getSelectedBoard,
    getBoard: getBoard,
    createBoard: createBoard,
    removeBoard: removeBoard
  };
}]);
