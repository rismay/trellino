Trellino.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',
  model: Trellino.Models.Board,
  getOrFetch: function (id) {
    var board;

    board = this.get(id);
    if (!board) {
      board = new Trellino.Models.Board({id: id});
      board.fetch({
        success: function (resp) {
          console.log("Resp:" + resp);
          Trellino.Collections.boards.add(board);
        }
      });
    }

    console.log(board);
    return board;
  }
});

Trellino.Collections.boards = new Trellino.Collections.Boards();
