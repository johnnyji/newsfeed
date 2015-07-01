var LoginModal = React.createClass({
  getInitialState: function() {
    return {
      email: null,
      password: null,
    };
  },
  _handleChangeState: function(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },
  _handleSubmit: function(e) {
    e.preventDefault();
    AuthenticationActions.login(this.state);
  },
  _toggleLoginModal: function() {
    AppActions.toggleLoginModal();
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div className="full-page-modal">
        <img 
          className="exit-modal"
          src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"
          onClick={this._toggleLoginModal}></img>

        <form className="login-form" onSubmit={this._handleSubmit}>
          <h1>Welcome back!</h1>
          <input type="email" name="email" onChange={this._handleStateChange}></input>
          <input type="password" name="password" onChange={this._handleStateChange}></input>
          <input type="submit" defaultValue="Login"></input>
        </form>

      </div>
    );
  }
});
