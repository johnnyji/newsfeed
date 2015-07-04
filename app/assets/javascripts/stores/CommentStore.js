var CommentState = {
  showReplies: false
}

var CommentStore = Reflux.createStore({
  init: function() {
    this.state = CommentState;
  },
  getInitialState: function() {
    return this.state;
  },
  onToggleReplies: function() {
    this.state.showReplies = !this.state.showReplies;
    this.trigger(this.state);
  },
  createComment: function(commentBody) {
    $.ajax({
      url: '/comment',
      type: 'POST',
      dataType: 'json',
      data: { body: commentBody }
    })
    .done(function(a) {

    }.bind(this))
    .fail(function(a, b, c) {

    }.bind(this));
  },
});
