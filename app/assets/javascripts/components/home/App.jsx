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
        <AppHeader currentUser={s.currentUser} />
        <AppCurrentCity currentCity={s.currentCity} />
        <NewsItemsList />
      </div>
    );
  }
});