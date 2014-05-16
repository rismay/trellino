Trellino.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',
  model: Trellino.Models.Board,
  getOrFetch: function (id) {
    var board = this.get(id);
    if (!board) {
      board = new Trellino.Models.Board({id: id});
      board.fetch({
        success: function (resp) {
          Trellino.Collections.boards.add(board);
        }
      });
    }
    board.fetch();
    return board;
  }
});

Trellino.Collections.boards = new Trellino.Collections.Boards();
