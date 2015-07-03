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
      newPostModal: state.newPostModal,
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

        {s.message && <FlashMessage message={s.message}/>}
        {s.profileModal && <ProfileModal currentUser={s.currentUser} />}
        {s.newPostModal && <NewPostModal currentUser={s.currentUser} currentLocation={s.currentLocation}/>}

        <AppHeader currentUser={s.currentUser} />
        <AppCurrentCity currentLocation={s.currentLocation} currentUser={s.currentUser} />
        <NewsItemsList currentUser={s.currentUser} currentLat={s.currentLat} currentLon={s.currentLon}/>
        
      </div>
    );
  }
});
