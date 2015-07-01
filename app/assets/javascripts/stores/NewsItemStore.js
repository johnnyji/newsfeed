var NewsItemState = {
  news_items: null,
  message: null,
  componentReady: false,
  itemBeingViewed: null,
}

var NewsItemStore = Reflux.createStore({
  init: function() {
    this.state = NewsItemState;
    this.listenToMany(NewsItemActions);
  },
  getInitialState: function() {
    return this.state;
  },
  onLoadNewsItems: function() {
    this._clearMessage();
    $.getJSON("/news_items", function(data) {
      if (data.message) { return this._handleMessage(data.message); }
      this._sortItemsByUpvotes(data.news_items);
    }.bind(this));
  },
  onFilterByCity: function(data) {
    // data: { "city": "typing city name..." }
    $.ajax({
      url: "/filter_city",
      method: "POST",
      data: data,
      success: function(data) {
        if (data.message) { this._handleMessage(); }
        this.state.news_items = data.news_items;
        this.trigger(this.state);
      }.bind(this),
      error: function(xhr, status, error) {

      }.bind(this),
    });
  },
  onToggleNewsItemModal: function(newsItemId) {
    if (newsItemId) {
      this.state.itemBeingViewed = _.find(this.state.news_items, { "id": newsItemId });
    } else {
      this.state.itemBeingViewed = null
    }
    this.trigger(this.state);
  },
  _sortItemsByUpvotes: function(newsItems) {
    var upvotesDesc = newsItems.sort(function(a, b) { return b.upvotes - a.upvotes; });
    this.state.news_items = upvotesDesc;
    this.state.componentReady = true;
    this.trigger(this.state);
  },
  _handleMessage: function(message) {
    this.state.componentReady = true;
    this.state.message = message;
    this._triggerState();
  },
  _clearMessage: function() {
    this.state.message = null;
  },
});
