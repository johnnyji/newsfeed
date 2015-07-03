var NewPostState = {
  news_item: {
    title: null,
    link: null,
    description: null,
    location: null,
    latitude: null,
    longitude: null,
  },
  titleLengthCount: 0,
  errors: false,
  errorFieldId: null,
  errorMessage: null,
}

var NewPostStore = Reflux.createStore({
  init: function() {
    this.state = NewPostState;
    this.maximumTitleLength = 100;
    this.listenToMany(NewPostActions);
  },
  getInitialState: function() {
    return this.state;
  },
  getMaximumTitleLength: function() {
    return this.maximumTitleLength;
  },
  onSetLocation: function(location, lat, lon) {
    this.state.location = location;
    this.state.latitude = lat;
    this.state.longitude = lon;
    this.trigger(this.state);
  },
  onHandleInputChange: function(field, value) {
    switch (field) {
      case "title": this._validateTitle(value); break;
      case "link": this._validateLink(value); break;
      case "description": this._validateDescription(value); break;
      default: this.trigger(this.state);
    }
  },
  _validateTitle: function(value) {
    this.state.titleLengthCount = value.length;
    if (value.length > 100) {
      return this._triggerError("Title must be under 100 characters!")

    };
    this.trigger(this.state);
  },
  _validateLink: function(value) {

  },
  _validateDescription: function(value) {

  },
  _triggerError: function(errorMessage) {
    if (errorMessage) { this.state.errorMessage = errorMessage; }
    this.state.errors = true;
    this.trigger(this.state);
  },
  _removeError: function() {
    this.state.error = false;
    this.state.errorFieldId = null;
    this.state.errorMessage = null;
    this.trigger(this.state);
  }
});
