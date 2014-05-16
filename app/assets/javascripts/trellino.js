window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Trellino.Routers.Boards({
      "$rootEl": $('#content')
    });
    console.log('Cool.');
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Trellino.initialize();
});
