var AppHeader = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
  },
  _toggleLoginModal: function() {
    AppActions.toggleLoginModal();
  },
  _toggleSignupModal: function() {
    AppActions.toggleSignupModal();
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
            <h3>{p.currentUser.first_name + " " + p.currentUser.last_name}</h3>
            <button onClick={this._toggleNewPostModal}>Sign Up</button>
          </div>
        }

        {!p.currentUser &&
          <div className="header-right">
            <button onClick={this._toggleLoginModal}>Login</button>
            <button onClick={this._toggleSignupModal}>Sign Up</button>
          </div>
        }
      </div>
    );
  }
});