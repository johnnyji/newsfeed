var NewsItemsList = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    currentUser: React.PropTypes.object
  },
  getInitialState: function() {
    var state = NewsItemStore.getInitialState();
    return {
      news_items: state.news_items,
      message: state.message,
      componentReady: state.componentReady
    };
  },
  componentDidMount: function() {
    var p = this.props;

    this.listenTo(NewsItemStore, this._updateState);
    NewsItemActions.loadNewsItems();
  },
  _updateState: function(data) {
    this.setState({
      news_items: data.news_items,
      message: data.message,
      componentReady: data.componentReady,
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    
    var news_items = _.map(s.news_items, function(newsItem, i) {
      return <NewsItemCard key={i} newsItem={newsItem} currentUser={p.currentUser} />
    });

    if (!s.componentReady) { return <h1>Loading...</h1> }

    return (
      <div className="news-item-list-container">
        {s.message && <h1>{s.message}</h1>}
        {news_items}
      </div>
    );
  }
});
