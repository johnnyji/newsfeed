var AppState =  {
  currentUser: null,
  currentLocation: null,
  currentLat: null,
  currentLon: null,
  newPostModal: false,
  signupModal: false,
  profileModal: false,
  itemBeingViewed: null,
  userBeingViewed: null,
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
  onSetItemBeingViewed: function(newsItem) {
    this.state.itemBeingViewed = newsItem;
    this.trigger(this.state);
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
  onToggleSignupModal: function() {
    this.state.signupModal = !this.state.signupModal;
    this.trigger(this.state);
  },
  onToggleProfileModal: function(userId) {
    if (userId) { return this._setUserBeingViewed(userId); }
    this.state.profileModal = false;
    this.state.userBeingViewed = null;
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
  },
  _setUserBeingViewed: function(userId) {
    var currentUser = this.state.currentUser;
    if (currentUser && userId == currentUser.id) { return this.state.userBeingViewed = currentUser }
    $.ajax({
      url: 'user',
      type: 'POST',
      dataType: 'json',
      data: { user_id: userId }
    })
    .done(function(data) {
      this.state.userBeingViewed = data.user;
      this.state.profileModal = true;
      this.trigger(this.state);
    }.bind(this))
    .fail(function(xhr, status, error) {
      this.state.message = xhr.responseJSON.message;
      this.trigger(this.state);
    }.bind(this));
  },
});
