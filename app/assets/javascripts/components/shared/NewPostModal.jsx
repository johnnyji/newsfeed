var NewPostModal = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    currentLocation: React.PropTypes.string.isRequired,
  },
  getInitialState: function() {
    var state = NewPostStore.getInitialState();
    return {
      news_item: state.news_item,
      errors: state.errors,
      errorMessages: state.errorMessages,
      titleLengthCount: state.titleLengthCount,
    };
  },
  componentDidMount: function() {
    this.listenTo(NewPostStore, this._updateState);
    NewPostActions.setLocation(
      AppStore.getCurrentLocation(),
      AppStore.getCurrentLat(),
      AppStore.getCurrentLon()
    );
  },
  _toggleNewPostModal: function() {
    AppActions.toggleNewPostModal();
  },
  _handleInputChange: function(e) {
    NewPostActions.handleInputChange(e.target.name, e.target.value);
  },
  _updateState: function(data) {
    this.setState({
      news_item: data.news_item,
      errors: data.errors,
      errorMessages: data.errorMessages,
      titleLengthCount: data.titleLengthCount,
    });
  },
  _handleSubmit: function(e) {
    var s = this.state;
    e.preventDefault();

    if (s.errors && s.errorMessage) { return AppActions.triggerMessage(s.errorMessage); }
    if (s.errors) { return AppActions.triggerMessage("Please fill out the fields correctly"); }
    NewsItemStore.createNewItem(s.news_item);
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    return (
      <div className="full-page-modal">
        <img
          className="exit-modal"
          src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"
          onClick={this._toggleNewPostModal}></img>

        <form onSubmit={this._handleSubmit}>
          <h1>What's happening in {s.currentLocation}?</h1>

          <div className="title_container">
            {s.errors.title && <div>{s.errorMessages.title}</div>}
            <input
              placeholder="Awesome post title"
              type="text"
              name="title"
              onChange={this._handleInputChange}></input>
            <small>{s.titleLengthCount} / {NewPostStore.getMaximumTitleLength()}</small>
          </div>

          <div className="link_container">
            {s.errors.link && <div>{s.errorMessages.link}</div>}
            <input
              placeholder="Link"
              type="text"
              name="link"
              onChange={this._handleInputChange}></input>
          </div>

          <input
            placeholder="youremail@domain.com"
            type="email"
            name="email"
            onChange={this._handleAccountInfo}></input>
          <input
            placeholder="Your password"
            type="password"
            name="password"
            onChange={this._handleAccountInfo}></input>
          <input
            placeholder="Confirm password"
            type="password"
            name="password_confirmation"
            onChange={this._handleAccountInfo}></input>

          <input type="submit" defaultValue="Post"></input>
        </form>

      </div>
    );
  }
});
