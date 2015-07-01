var AuthenticationStore = Reflux.createStore({
  init: function() {
    this.listenToMany(AuthenticationActions);
  },
  onLogin: function(data) {
    $.ajax({
      url: "/login",
      method: "POST",
      data: data,
      success: function(data) {
        AppActions.loadCurrentUser();
      }.bind(this),
      error: function(xhr, status, error) {
        // set some error
      }.bind(this)
    });
  },
  onSignup: function(data) {
    $.ajax({
      url: "/signup",
      method: "POST",
      data: data,
      success: function(data) {
        AppActions.loadCurrentUser();
      }.bind(this),
      error: function(xhr, status, error) {
      // set some error
      }.bind(this)
    });
  },
});
