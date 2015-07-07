var EditCommentCard = React.createClass({
  propTypes: {
    comment: React.PropTypes.object.isRequired,
  },
  _exitEditMode: function() {
    CommentActions.toggleEditComment();
  },
  _saveComment: function() {
    var comment = this.props.comment;
    comment.body = React.findDOMNode(this.refs.comment).value;
    CommentActions.updateComment(this.props.comment.id, comment);
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    return (
      <div className="comment-card">
        <div className="commenter-picture-container">
          <img className="picture" src={p.comment.user.profile_thumbnail}></img>
        </div>

        <div className="comment-container">
          <div className="commenter-options">
            <p className="commenter-name">{p.comment.user.name}</p>
          </div>
          <textarea ref="comment" className="edit-comment" defaultValue={p.comment.body}></textarea>
          <div className="additional-info">
            <button onClick={this._saveComment}>Save</button>
            <button onClick={this._exitEditMode}>Nevermind</button>
          </div>
        </div>
      </div>
    );
  }
});
