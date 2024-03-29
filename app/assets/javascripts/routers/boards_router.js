Trellino.Routers.Boards = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  routes: {
    "" : "index",
    ":id" : "show"
  },
  index: function () {
    var that = this;
    Trellino.Collections.boards.fetch();
    var rootView = new Trellino.Views.BoardsIndex();
    that._swapView(rootView);
  },
  show: function(id){
    var rootView = new Trellino.Views.BoardsShow({
      showId: id
    });
    this._swapView(rootView);
  },
  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
