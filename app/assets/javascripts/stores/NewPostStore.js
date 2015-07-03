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
  },
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
    var validTitle = value.length <= this.maximumTitleLength;
    this.state.titleLengthCount = value.length;

    if (!validTitle) { return this._triggerError("title", "Title must be under 100 characters"); }

    this._removeError("title");
    this.state.news_item.title = value;
    this.trigger(this.state);
  },
  _validateLink: function(value) {
    var linkRegex = new RegExp("^(http|https)://", "i");
    var validLink = linkRegex.test(value);
    value.toLowerCase();

    if (!validLink) { return this._triggerError("link", "Links must being with either http:// or https://"); }

    this._removeError("link");
    this.state.news_item.link = value;
    this.trigger(this.state);
  },
  _validateDescription: function(value) {
    var validDescription = value.length >= this.minimumDescriptionLength;

    if (!validDescription) { return this._triggerError("description", "Description must be longer than 10 characters"); }

    this._removeError("description");
    this.state.news_item.link = link;
    this.trigger(this.state);
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
