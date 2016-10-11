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

  var removeBoard = function(board){
    return Restangular.one("boards", board.id).remove().then(function(response){
      _.remove(_boards, {id: board.id
        });
    });
  };

  var updateBoard = function(boardParams){
    var data = {
      board: {
        title: boardParams.title
      }
    };
    return Restangular.one("boards", boardParams.id)
          .patch(data);
  };

  return {
    getBoards: getBoards,
    getBoard: getBoard,
    createBoard: createBoard,
    removeBoard: removeBoard,
    updateBoard: updateBoard
  };
}]);
