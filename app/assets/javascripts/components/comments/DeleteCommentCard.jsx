var DeleteCommentCard = React.createClass({
  propTypes: {
    comment: React.PropTypes.object.isRequired,
  },
  _confirmDelete: function() {
    CommentActions.deleteComment(this.props.comment.id);
  },
  _regretDelete: function() {
    CommentActions.toggleDeleteComment();
  },
  render: function() {
    return (
      <div className="comment-card">
        <button onClick={this._confirmDelete}>Yes</button>
        <button onClick={this._regretDelete}>No</button>
      </div>
    );
  }
});
