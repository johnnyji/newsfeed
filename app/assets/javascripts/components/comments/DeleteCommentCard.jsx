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
        <p className="delete-comment-confirm">Are you sure you want to delete this comment?</p>
        <div className="delete-buttons-container">
          <button className="delete-comment-button" onClick={this._confirmDelete}>Yes</button>
          <button className="delete-comment-button" onClick={this._regretDelete}>No</button>
        </div>
      </div>
    );
  }
});
