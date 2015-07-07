var SignupModal = React.createClass({
  _toggleSignupModal: function() {
    AppActions.toggleSignupModal();
  },
  _handleTwitterAuth: function() {
    AuthenticationActions.authenticateWithTwitter();
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    return (
      <div className="full-page-modal">
        <ExitModalButton exitCallback={this._toggleSignupModal} />

        <div className="signup-form">
          <h1>Before you do that, we need to know who you are!</h1>
          <button onClick={this._handleTwitterAuth}>Sign in with Twitter</button>
        </div>

      </div>
    );
  }
});
