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
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div className="full-page-modal">
        <i className="fa fa-times" onClick={AppActions.toggleLoginModal}></i>

        <form onSubmit={this._handleSubmit}>
          <input type="email" name="email" onChange={this._handleStateChange}></input>
          <input type="password" name="password" onChange={this._handleStateChange}></input>
          <input type="submit">Ready to go!</input>
        </form>
        
      </div>
    );
  }
});
