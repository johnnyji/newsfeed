var App = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    var state = AppStore.getInitialState();
    return {
      currentUser: state.currentUser,
      currentLocation: state.currentLocation,
      currentLat: state.currentLat,
      currentLon: state.currentLon,
      profileModal: state.profileModal,
      signupModal: state.signupModal,
      newPostModal: state.newPostModal,
      itemBeingViewed: state.itemBeingViewed,
      userBeingViewed: state.userBeingViewed,
      message: state.message,
      componentReady: state.componentReady,
    };
  },
  componentDidMount: function() {
    this.listenTo(AppStore, this._updateState);
    AppActions.loadCurrentUser();
    AppActions.geolocateUser();
  },
  _updateState: function(data) {
    this.setState({
      currentUser: data.currentUser,
      currentLocation: data.currentLocation,
      currentLat: data.currentLat,
      currentLon: data.currentLon,
      profileModal: data.profileModal,
      signupModal: data.signupModal,
      newPostModal: data.newPostModal,
      itemBeingViewed: data.itemBeingViewed,
      userBeingViewed: data.userBeingViewed,
      message: data.message,
      componentReady: data.componentReady,
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    if (!s.componentReady) { return <FullPageSpinner /> }
    if (s.signupModal) { return <SignupModal /> }
    if (s.profileModal) { return <ProfileModal user={s.userBeingViewed} /> }
    if (s.newPostModal) { return <NewPostModal currentUser={s.currentUser} currentLocation={s.currentLocation} message={s.message} /> }
    if (s.itemBeingViewed) { return <NewsItemModal newsItem={s.itemBeingViewed} currentUser={s.currentUser} message={s.message}/> }

    return (
      <div className="app-container">
        <FlashMessage message={s.message}/>
        <AppHeader currentUser={s.currentUser} />
        <AppCurrentCity currentLocation={s.currentLocation} currentUser={s.currentUser} />
        <NewsItemsList currentUser={s.currentUser} currentLat={s.currentLat} currentLon={s.currentLon}/>
      </div>
    );
  }
});
