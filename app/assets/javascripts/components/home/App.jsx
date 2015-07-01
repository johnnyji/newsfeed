var App = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    var state = AppStore.getInitialState();
    return {
      currentUser: state.currentUser,
      currentLocation: state.currentLocation,
      currentLat: state.currentLat,
      currentLon: state.currentLon,
      loginModal: state.loginModal,
      signupModal: state.signupModal,
      newPostModal: state.newPostModal,
      message: state.message,
      componentReady: state.componentReady,
    };
  },
  componentDidMount: function() {
    this.listenTo(AppStore, this._updateState);
    AppActions.geolocateUser();
  },
  _updateState: function(data) {
    this.setState({
      currentUser: data.currentUser,
      currentLocation: data.currentLocation,
      currentLat: data.currentLat,
      currentLon: data.currentLon,
      loginModal: data.loginModal,
      signupModal: data.signupModal,
      newPostModal: data.newPostModal,
      message: data.message,
      componentReady: data.componentReady,
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    if (!s.componentReady) { return <FullPageSpinner /> }
    return (
      <div className="app-container">
        {s.loginModal && <LoginModal />}
        {s.signupModal && <SignupModal />}
        {s.newPostModal && <NewPostModal />}
        {s.message && <FlashMessage message={s.message}/>}
        <AppHeader currentUser={s.currentUser} />
        <AppCurrentCity currentLocation={s.currentLocation} />
        <NewsItemsList currentUser={s.currentUser} currentLat={s.currentLat} currentLon={s.currentLon}/>
      </div>
    );
  }
});
