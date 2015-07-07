var NewsItemsList = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    currentLat: React.PropTypes.number,
    currentLon: React.PropTypes.number,
    currentUser: React.PropTypes.object
  },
  getInitialState: function() {
    var state = NewsItemStore.getInitialState();
    return {
      news_items: state.news_items,
      message: state.message,
      componentReady: state.componentReady,
      itemBeingViewed: state.itemBeingViewed,
    };
  },
  componentDidMount: function() {
    this.listenTo(NewsItemStore, this._updateState);
    NewsItemActions.loadNewsItems(this.props.currentLat, this.props.currentLon);
  },
  _updateState: function(data) {
    this.setState({
      news_items: data.news_items,
      message: data.message,
      componentReady: data.componentReady,
      itemBeingViewed: data.itemBeingViewed,
    });
  },
  _toggleNewPostModal: function() {
    AppActions.toggleNewPostModal();
  },
  _toggleSignupModal: function() {
    AppActions.toggleSignupModal();
  },
  render: function() {
    var s = this.state;
    var p = this.props;

    var news_items = _.map(s.news_items, function(newsItem, i) {
      return <NewsItemCard key={i} newsItem={newsItem} currentUser={p.currentUser} />
    });

    if (!s.componentReady) { return <Spinner /> }

    if (!p.currentUser) {
      return (
        <div className="news-item-list-container">
          {s.itemBeingViewed && <NewsItemModal newsItem={s.itemBeingViewed} currentUser={p.currentUser}/>}
          {s.message &&
            <div className="no-news-items">
              <h1 className="message">{s.message}</h1>
              <button className="new-post-button" onClick={this._toggleSignupModal}>
                Be the first to post!
              </button>
            </div>
          }
          {news_items}
        </div>
      );
    }

    return (
      <div className="news-item-list-container">
        {s.itemBeingViewed && <NewsItemModal newsItem={s.itemBeingViewed} currentUser={p.currentUser}/>}
        {s.message &&
          <div className="no-news-items">
            <h1 className="message">{s.message}</h1>
            <button className="new-post-button" onClick={this._toggleNewPostModal}>
              Be the first to post!
            </button>
          </div>
        }
        {news_items}
      </div>
    );
  }
});
