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
    this.maximumTitleLength = 50;
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
    this.state.news_item.location = location;
    this.state.news_item.latitude = lat;
    this.state.news_item.longitude = lon;
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
  onSubmitPost: function() {
    var newsItem = this.state.news_item;
    var errors = this.state.errors;
    var emptyFields = _.isEmpty(newsItem.title) || _.isEmpty(newsItem.description);
    var errorsPresent = errors.title || errors.link || errors.description;
    
    if (emptyFields || errorsPresent) { 
      return AppActions.triggerMessage("Please fill out the fields correctly")
    }

    NewsItemActions.createNewItem({ news_item: this.state.news_item });
  },
  onSetSubmitErrors: function(errors) {
    if (errors.title) { this._triggerError("title", errors.title[0]); }
    if (errors.link) { this._triggerError("link", errors.link[0]); }
    if (errors.description) { this._triggerError("description", errors.description[0]); }
  },
  _validateTitle: function(value) {
    var validTitle = value.length <= this.maximumTitleLength;
    this.state.titleLengthCount = value.length;

    if (!validTitle) { return this._triggerError("title", "Title must be under " + this.maximumTitleLength + " characters"); }

    this._removeError("title");
    this.state.news_item.title = value;
    this.trigger(this.state);
  },
  _validateLink: function(value) {
    var linkRegex = new RegExp("^(http|https)://", "i");
    var validLink = linkRegex.test(value) || (value == "");
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
    this.state.news_item.description = value;
    this.trigger(this.state);
  },
  _triggerError: function(field, errorMessage) {
    debugger;
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
