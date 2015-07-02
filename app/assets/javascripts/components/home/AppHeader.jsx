var AppHeader = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
  },
  _handleAuthenticate: function() {
    AuthenticationActions.authenticateWithTwitter();
  },
  _toggleNewPostModal: function() {
    AppActions.toggleNewPostModal();
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    return (
      <div className="app-header">
        <div className="header-left">
          <h1 className="logo"><em>thefeed</em></h1>
        </div>

        {p.currentUser &&
          <div className="header-right">
            <h3>{p.currentUser.name}</h3>
            <button onClick={this._toggleNewPostModal}>New Post</button>
          </div>
        }

        {!p.currentUser &&
          <div className="header-right">
            <button onClick={this._handleAuthenticate}>Login</button>
            <button onClick={this._handleAuthenticate}>New Post</button>
          </div>
        }
      </div>
    );
  }
});
