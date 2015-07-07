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
  onUpdateComment: function(commentId, data) {
    $.ajax({
      url: '/update_comment',
      type: 'POST',
      data: { id: commentId, comment: data }
    })
    .done(function() {
      this.state.commentBeingEditedId = null;
      NewsItemModalActions.handleUpdateComment(commentId, data.body);
      AppActions.triggerMessage("Comment successfully updated.")
      this.trigger(this.state);
    }.bind(this))
    .fail(function() {
      AppActions.triggerMessage("Unable to update comment.");
    });
  },
  onDeleteComment: function(commentId) {
    $.ajax({
      url: '/comment',
      type: 'DELETE',
      data: { id: commentId }
    })
    .done(function() {
      this.commentBeingDeletedId = null;
      NewsItemModalActions.handleDeleteComment(commentId);
      AppActions.triggerMessage("Comment successfully deleted.")
      this.trigger(this.state);
    }.bind(this));
  },
});
