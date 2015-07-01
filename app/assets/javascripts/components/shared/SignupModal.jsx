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
        <img 
          className="exit-modal"
          src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"
          onClick={this._toggleSignupModal}></img>

        <form className="signup-form" onSubmit={this._handleSubmit}>
          <h1>Welcome to <em>thefeed!</em></h1>
          <input 
            placeholder="First name here" 
            type="text" 
            name="first_name" 
            onChange={this._handleUserInfo}></input>
          <input 
            placeholder="Last name here" 
            type="text" 
            name="last_name" 
            onChange={this._handleUserInfo}></input>
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

          <input type="submit" defaultValue="Ready!"></input>
        </form>

      </div>
    );
  }
});
