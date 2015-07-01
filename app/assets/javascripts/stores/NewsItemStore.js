var NewsItemState = {
  news_items: null,
  message: null,
  componentReady: false,
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
      this._sortItemsByPopularity(data.news_items);
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
  _sortItemsByPopularity: function(newsItems) {
    var sortedItems = newsItems.sort(function(a, b) { return a.stars - b.stars; });
    this.state.news_items = sortedItems;
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