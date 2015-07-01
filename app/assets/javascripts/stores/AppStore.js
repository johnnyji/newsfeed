var AppState =  {
  currentUser: null,
  currentLocation: null,
  currentLat: null,
  currentLon: null,
  loginModal: false,
  signupModal: false,
  newPostModal: false,
  message: null,
  componentReady: false,
}

var AppStore = Reflux.createStore({
  init: function() {
    this.state = AppState;
    this.listenToMany(AppActions);
  },
  getInitialState: function() {
    return this.state;
  },
  onGeolocateUser: function() {
    $.ajax({
      url: "http://ip-api.com/json",
      method: "GET",
      success: function(data) {
        this.state.currentLocation = data.city + ", " + data.regionName;
        this.state.currentLat = data.lat;
        this.state.currentLon = data.lon;
        this.state.componentReady = true;
        this.trigger(this.state);
      }.bind(this),
      error: function(xhr, status, error) {
        debugger
      }.bind(this)
    });
  },
  loadCurrentUser: function() {
    $.ajax({
      url: "/current_user",
      method: "GET",
      success: function(data) {
        this.state.currentUser = data.user;
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
  onTriggerMessage: function(message) {
    this.state.message = message;
    this.trigger(this.state);
  },
  onClearMessage: function() {
    this.state.message = null;
    this.trigger(this.state);
  }
});
