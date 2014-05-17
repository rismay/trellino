Trellino.Collections.Lists = Backbone.Collection.extend({
  model: Trellino.Models.List,
  url: function () {
      return this.board.url() + "/lists"
  },
  initialize: function (models, options) {
    console.log("This should be set by now.");
    this.board = options.board;
  }
});
