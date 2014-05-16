Trellino.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],
  initialize: function (options) {
    console.log("Adding listener.");
    this.listenTo(Trellino.Collections.boards, "sync feeds", this.render);
  },
  render: function () {
    var renderedTemplate = this.template({
      objectModels: Trellino.Collections.boards
    });
    this.$el.html(renderedTemplate);
    return this;
  }
});
