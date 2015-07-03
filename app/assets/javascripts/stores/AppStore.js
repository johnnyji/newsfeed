var AppState =  {
  currentUser: null,
  currentLocation: null,
  currentLat: null,
  currentLon: null,
  newPostModal: false,
  profileModal: false,
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
  getCurrentLocation: function() {
    return this.state.currentLocation;
  },
  getCurrentLat: function() {
    return this.state.currentLat;
  },
  getCurrentLon: function() {
    return this.state.currentLon;
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
  onLoadCurrentUser: function() {
    $.getJSON("/current_user").done(function(data, status, xhr) {
      if (xhr.status === 204) { return this.trigger(this.state); }
      this.state.currentUser = data.user;
      this.trigger(this.state);
    }.bind(this));
  },
  onToggleProfileModal: function() {
    this.state.profileModal = !this.state.profileModal;
    this.trigger(this.state);
  },
  onToggleNewPostModal: function() {
    this.state.newPostModal = !this.state.newPostModal;
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
