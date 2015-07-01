var App = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    var state = AppStore.getInitialState();
    return {
      currentUser: state.currentUser,
      currentCity: state.currentCity,
      loginModal: state.loginModal,
      signupModal: state.signupModal,
      newPostModal: state.newPostModal,
      message: state.message,
    };
  },
  componentDidMount: function() {
    this.listenTo(AppStore, this._updateState);
  },
  _updateState: function(data) {
    this.setState({
      currentUser: data.currentUser,
      currentCity: data.currentCity,
      loginModal: data.loginModal,
      signupModal: data.signupModal,
      newPostModal: data.newPostModal,
      message: data.message,
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    return (
      <div className="app-container">
        {s.loginModal && <LoginModal />}
        {s.signupModal && <SignupModal />}
        {s.newPostModal && <NewPostModal />}
        {s.message && <FlashMessage message={s.message}/>}
        <AppHeader currentUser={s.currentUser} />
        <AppCurrentCity currentCity={s.currentCity} />
        <NewsItemsList currentUser={s.currentUser} />
      </div>
    );
  }
});
