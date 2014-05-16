window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Trellino.Routers.Boards({
      "$rootEl": $('#content')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Trellino.initialize();
});
