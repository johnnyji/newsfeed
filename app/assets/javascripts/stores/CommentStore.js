var CommentState = {
  commentBeingEditedId: null,
  commentBeingDeletedId: null,
}

var CommentStore = Reflux.createStore({
  init: function() {
    this.state = CommentState;
    this.listenToMany(CommentActions);
  },
  getInitialState: function() {
    return this.state;
  },
  onToggleEditComment: function(commentId) {
    if (commentId) {
      this.state.commentBeingEditedId = commentId;
    } else {
      this.state.commentBeingEditedId = null;
    }
    this.trigger(this.state);
  },
  onToggleDeleteComment: function(commentId) {
    if (commentId) {
      this.state.commentBeingDeletedId = commentId;
    } else {
      this.state.commentBeingDeletedId = null;
    }
    this.trigger(this.state);
  },
  onDeleteComment: function(commentId) {
    $.ajax({
      url: '/comment',
      type: 'DELETE',
      data: { id: commentId }
    })
    .done(function() {
      this.commentBeingDeletedId = null;
      NewsItemModalStore.handleDeleteComment(commentId);
    }.bind(this));
  },
});
