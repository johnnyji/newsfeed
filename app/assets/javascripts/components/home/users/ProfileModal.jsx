var ProfileModal = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object.isRequired,
  },
  _exitProfileModal: function() {
    AppActions.toggleProfileModal();
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    return (
      <div className="full-page-modal">
        <img
          className="exit-modal"
          src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"
          onClick={this._exitProfileModal}></img>

        <div className="profile-modal">
          <img className="profile-picture" src={p.currentUser.profile_picture}></img>
        </div>

      </div>
    );
  }
});
