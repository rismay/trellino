Trellino.Views.ListsNew = Backbone.View.extend({
  template: JST['lists/index'],
  events: {
    "submit form": "submit"
  },
  submit: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON();
    var newList = new App.Models.Todo();
    newTodo.save(params["lists"], {
      success: function () {
        Trellino.Collections.lists.add(newList);
        Backbone.history.navigate("/", { trigger: true });
      },
      error: function () {
        debugger;
      }
    });
  }
});
