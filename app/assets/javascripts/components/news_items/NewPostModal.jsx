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
  _exitNewPostModal: function() {
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
    e.preventDefault();
    NewPostActions.submitPost();
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    var currentCity = p.currentLocation.split(",")[0];
    var errorClass = "input-error";

    return (
      <div className="full-page-modal">
        <FlashMessage message={p.message}/>
        <ExitModalButton exitCallback={this._exitNewPostModal} />

        <form className="new-post-form" onSubmit={this._handleSubmit}>
          <h1>What's happening in {currentCity}?</h1>

          <div className="title-container">
            <InputErrorMessage error={s.errors.title} message={s.errorMessages.title} />
            <input
              className={s.errors.title ? errorClass : null}
              placeholder="Awesome post title"
              type="text"
              name="title"
              onChange={this._handleInputChange}></input>
            <small className="title-count">{s.titleLengthCount} / {NewPostStore.getMaximumTitleLength()}</small>
          </div>

          <div className="link-container">
            <InputErrorMessage error={s.errors.link} message={s.errorMessages.link} />
            <input
              className={s.errors.link ? errorClass : null}
              placeholder="Link (optional)"
              type="text"
              name="link"
              onChange={this._handleInputChange}></input>
          </div>

          <div className="description-container">
            <InputErrorMessage error={s.errors.description} message={s.errorMessages.description} />
            <textarea
              className={s.errors.description ? errorClass : null}
              placeholder="Tell people why it's important!"
              name="description"
              onChange={this._handleInputChange}></textarea>
          </div>

          <input type="submit" defaultValue="Post"></input>
        </form>

      </div>
    );
  }
});
