var NewsItemState = {
  news_items: [],
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
  onCreateNewItem: function(data) {
    $.ajax({
      url: "/news_items",
      method: "POST",
      data: data,
      success: function(data) {
        this._handleCreateSuccess(data.news_item);
      }.bind(this),
      error: function(xhr, status, error) {
        AppActions.triggerMessage("Unable to save due to errors");
        NewPostActions.setSubmitErrors(xhr.responseJSON.errors);
      }.bind(this),
    });
  },
  onToggleNewsItemModal: function(newsItemId) {
    if (newsItemId) {
      var newsItem = _.find(this.state.news_items, { "id": newsItemId });
      AppActions.setItemBeingViewed(newsItem);
    } else {
      AppActions.setItemBeingViewed();
    }
  },
  upvoteNewsItem: function(newsItemId) {
    var newsItem = _.find(this.state.news_items, { "id": newsItemId });
    newsItem.upvoted_by_current_user = true;
    newsItem.upvotes += 1;
    this.trigger(this.state);
  },
  removeUpvoteNewsItem: function(newsItemId) {
    var newsItem = _.find(this.state.news_items, { "id": newsItemId });
    newsItem.upvoted_by_current_user = false;
    newsItem.upvotes -= 1;
    this.trigger(this.state);
  },
  _handleCreateSuccess: function(newsItem) {
    this.state.news_items.unshift(newsItem);
    AppActions.toggleNewPostModal();
    AppActions.triggerMessage(newsItem.title + " posted!");
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
    this.trigger(this.state);
  },
  _clearMessage: function() {
    this.state.message = null;
  },
});
