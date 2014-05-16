Trellino.Routers.Boards = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  routes: {
    "" : "index",
    "boards/:id" : "show"
  },
  index: function () {
    console.log('Creating Index');
    var that = this;
    Trellino.Collections.boards.fetch();
    var rootView = new Trellino.Views.BoardsIndex();
    that._swapView(rootView);
  },
  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
