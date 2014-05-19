Trellino.Views.BoardsShow = Backbone.View.extend({
  template: JST['boards/show'],
  newListTemplate: JST['lists/new'],
  events: {
    "click button.refresh": "refresh"
  },
  refresh: function () {
    Trellino.Collections.boards.fetch();
  },
  initialize: function (options) {
    this.id = options.showId;
    this.model = Trellino.Collections.boards.getOrFetch(this.id);
    this.listenTo(Trellino.Collections.boards, "sync", this.render);
    this.listenTo(this.model.lists(), "add remove", this.render);
  },
  render: function () {
    var renderedTemplate = this.template({
      board: this.model,
      lists: this.model.lists()
    });
    var newListTemplate = this.template({
      
    });
    this.$el.html(renderedTemplate);
    return this;
  }
});
