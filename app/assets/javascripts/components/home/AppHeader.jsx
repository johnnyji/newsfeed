var AppHeader = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
  },
  _toggleLoginModal: function() {
    AppActions.toggleLoginModal();
  },
  _handleNewPost: function() {
    if (this.props.currentUser) {
      AppActions.toggleNewPostModal();
    } else {
      AppActions.toggleSignupModal();
    }
  },
  render: function() {
    return (
      <div className="app-header">
        <div className="header-left">
          thefeed.news
        </div>

        <div className="header-right">
          <div onClick={this._toggleLoginModal}>Login</div>
          <i className="fa fa-plus" onClick={this._handleNewPost}></i>
        </div>
      </div>
    );
  }
});