var SignupModal = React.createClass({
  getInitialState: function() {
    return {
      user: {
        first_name: "new",
        last_name: "user"
      },
      account: {
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  _handleUserInfo: function(e) {
    var newState = this.state.user;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },
  _handleAccountInfo: function() {
    var newState = this.state.account;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },
  _handleSubmit: function(e) {
    e.preventDefault();
    AuthenticationActions.signup(this.state);
  },
  _toggleSignupModal: function() {
    AppActions.toggleSignupModal();
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    return (
      <div className="full-page-modal">
        <i className="fa fa-times" onClick={this._toggleSignupModal}></i>
        Welcome {s.first_name && s.first_name}

        <form onSubmit={this._handleSubmit}>
          <input type="text" name="first_name" onChange={this._handleUserInfo}></input>
          <input type="text" name="last_name" onChange={this._handleUserInfo}></input>
          <input type="email" name="email" onChange={this._handleAccountInfo}></input>
          <input type="password" name="password" onChange={this._handleAccountInfo}></input>
          <input type="password" name="password_confirmation" onChange={this._handleAccountInfo}></input>
          <input type="submit">Ready to go!</input>
        </form>

      </div>
    );
  }
});
