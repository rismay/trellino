Trellino.Views.BoardsShow = Backbone.View.extend({
  template: JST['boards/show'],
  events: {
    "click button.refresh": "refresh"
  },
  refresh: function () {
    Trellino.Collections.boards.fetch();
  },
  initialize: function (options) {
    this.id = options.showId;
    this.listenTo(Trellino.Collections.boards, "sync", this.render);
  },
  render: function () {
    var b = Trellino.Collections.boards.getOrFetch(this.id);
    var renderedTemplate = this.template({
      board: b
    });
    this.$el.html(renderedTemplate);
    return this;
  }
});
