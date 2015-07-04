var ProfileModal = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
  },
  _exitProfileModal: function() {
    AppActions.toggleProfileModal();
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    return (
      <div className="full-page-modal">
        <ExitModalButton exitCallback={this._exitProfileModal} />

        <div className="profile-modal">
          <div className="profile-header">
            <img className="profile-picture" src={p.user.profile_picture}></img>
            <h1 className="name">{p.user.name}</h1>
          </div>

        </div>

      </div>
    );
  }
});
