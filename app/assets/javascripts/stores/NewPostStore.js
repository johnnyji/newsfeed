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
  errors: {
    title: false,
    link: false,
    description: false,
  }
  errorMessages: {
    title: null,
    link: null,
    description: null
  }
}

var NewPostStore = Reflux.createStore({
  init: function() {
    this.state = NewPostState;
    this.maximumTitleLength = 100;
    this.minimumDescriptionLength = 10;
    this.listenToMany(NewPostActions);
  },
  getInitialState: function() {
    return this.state;
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
    var invalidTitle = value.length > this.maximumTitleLength;
    this.state.titleLengthCount = value.length;

    if (invalidTitle) {
      return this._triggerError("Title must be under 100 characters!")
    } else {

    }
    this.trigger(this.state);
  },
  _validateLink: function(value) {

  },
  _validateDescription: function(value) {
    var invalidDescription: value.length < this.minimumDescriptionLength;
  },
  _triggerError: function(field, errorMessage) {
    this.state.errors[field] = true;
    this.state.errorMessages[field] = errorMessage;
    this.trigger(this.state);
  },
  _removeError: function(field, errorMessage) {
    this.state.errors[field] = false;
    this.state.errorMessages[field] = null;
    this.trigger(this.state);
  }
});
