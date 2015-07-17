var NewsItemModalState = {
  comments: [],
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
      // successCallback notifies the component the comment was successfully created so the component can then clear out the comment field.
    }.bind(this));
  },
  onHandleUpdateComment: function(commentId, commentBody) {
    var comment = this._findComment(commentId);
    comment.body = commentBody;
    this.trigger(this.state);
  },
  onHandleDeleteComment: function(commentId) {
    var commentIndex = _.findIndex(this.state.comments, function(comment) {
      return parseInt(comment.id) === parseInt(commentId)
    });
    this.state.comments.splice(commentIndex, 1);
    this.trigger(this.state);
  },
  _findComment: function(commentId) {
    return _.filter(this.state.comments, function(comment) {
      if (parseInt(comment.id) === parseInt(commentId)) { return comment; }
    });
  }
});
