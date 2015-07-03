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
      itemBeingViewed: state.itemBeingViewed,
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
      itemBeingViewed: data.itemBeingViewed,
      message: data.message,
      componentReady: data.componentReady,
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    if (!s.componentReady) { return <FullPageSpinner /> }
    if (s.profileModal) { return <ProfileModal currentUser={s.currentUser} /> }
    if (s.newPostModal) { return <NewPostModal currentUser={s.currentUser} currentLocation={s.currentLocation}/> }
    if (s.itemBeingViewed) { return <NewsItemModal newsItem={s.itemBeingViewed} currentUser={s.currentUser}/> }

    return (
      <div className="app-container">
        {s.message && <FlashMessage message={s.message}/>}
        <AppHeader currentUser={s.currentUser} />
        <AppCurrentCity currentLocation={s.currentLocation} currentUser={s.currentUser} />
        <NewsItemsList currentUser={s.currentUser} currentLat={s.currentLat} currentLon={s.currentLon}/>
      </div>
    );
  }
});
