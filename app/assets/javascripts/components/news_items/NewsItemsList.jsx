var NewsItemsList = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    trending: React.PropTypes.bool,
    newest: React.PropTypes.bool,
    random: React.PropTypes.bool,
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
    this._filterNewsItems();
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (prevProps !== this.props) {
      this._filterNewsItems();
    }
  },
  _filterNewsItems: function() {
    if (this.props.trending) { NewsItemActions.loadTrendingNewsItems(); }
    if (this.props.newest) { NewsItemActions.loadNewestNewsItems(); }
    if (this.props.random) { NewsItemActions.loadRandomNewsItems(); }
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
      return <NewsItemCard key={i} newsItem={newsItem} />
    });

    if (!s.componentReady) { return <Spinner /> }

    return (
      <div className="news-items-list-container">
        {s.message && <h1>{s.message}</h1>}
        {news_items}
      </div>
    );
  }
});