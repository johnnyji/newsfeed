

var UpvoteStore = Reflux.createStore({
  init: function() {
    this.listenToMany(UpvoteActions);
  },
  onCreateUpvote: function(newsItemId) {
    $.ajax({
      url: "/upvote",
      method: "POST",
      data: { news_item_id: newsItemId },
      success: function() {
        NewsItemActions.upvoteNewsItem(newsItemId);
      },
      error: function(xhr, status, error) {
        var errorMessage = xhr.responseJSON.errors[0];
        AppActions.triggerMessage(errorMessage);
      },
    });
  },
  onRemoveUpvote: function(newsItemId) {
    $.ajax({
      url: "/upvote",
      method: "DELETE",
      data: { news_item_id: newsItemId },
      success: function() {
        NewsItemActions.removeUpvoteNewsItem(newsItemId);
      },
      error: function(xhr, status, error) {
        var errorMessage = xhr.responseJSON.errors[0];
        AppActions.triggerMessage(errorMessage);
      },
    });
  },
});
