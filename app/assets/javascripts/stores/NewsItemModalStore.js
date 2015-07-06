var NewsItemModalState = {
  comments: [],
  noComments: false,
}

var NewsItemModalStore = Reflux.createStore({
  init: function() {
    this.state = NewsItemModalState;
    this.listenToMany(NewsItemModalActions);
  },
  getInitialState: function() {
    return this.state;
  },
  loadComments: function(newsItemId) {
    $.ajax({
      url: '/comments',
      type: 'POST',
      dataType: 'json',
      data: { news_item_id: newsItemId }
    })
    .done(function(data) {
      if (data.message) { this.state.noComments = true; }
      if (data.comments) { this.state.comments = data.comments; }
      this.trigger(this.state);
    }.bind(this));
  },
  onSetNewsItemId: function(newItemId) {
    this.state.comment.news_item_id = newsItemId;
  },
  onCreateComment: function(data, successCallback) {
    if (!data.body) { return AppActions.triggerMessage("Comments can't be blank!"); }
    $.ajax({
      url: '/comment',
      type: 'POST',
      dataType: 'json',
      data: { comment: data }
    })
    .done(function(data) {
      this.state.comments.unshift(data.comment);
      this.trigger(this.state);
      successCallback();
    }.bind(this));
  },
});
