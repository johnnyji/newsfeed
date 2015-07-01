var AppState =  {
  currentUser: null,
  currentCity: null,
  loginModal: false,
  signupModal: false,
  newPostModal: false,
  message: null,
}

var AppStore = Reflux.createStore({
  init: function() {
    this.state = AppState;
    this.listenToMany(AppActions);
  },
  getInitialState: function() {
    return this.state;
  },
  loadCurrentUser: function() {
    $.ajax({
      url: "/current_user",
      method: "GET",
      success: function(data) {
        this.state.currentUser = data.user;
        this.state.currentCity = data.user.city;
        this.trigger(this.state);
      }.bind(this),
      error: function(xhr, status, error) {
        this.state.currentUser = null;
        this.trigger(this.state);
      }.bind(this)
    });
  },
  onToggleNewPostModal: function() {
    this.state.newPostModal = !this.state.newPostModal;
    this.trigger(this.state);
  },
  onToggleLoginModal: function() {
    this.state.loginModal = !this.state.loginModal;
    this.trigger(this.state);
  },
  onToggleSignupModal: function() {
    this.state.signupModal = !this.state.signupModal;
    this.trigger(this.state);
  },
});
