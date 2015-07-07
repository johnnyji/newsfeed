var CommentCard = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
    comment: React.PropTypes.object.isRequired,
  },
  _toggleReplies: function() {
    this.setState({ showReplies: !this.state.showReplies });
  },
  _editComment: function() {
    CommentActions.toggleEditComment(this.props.comment.id);
  },
  _deleteComment: function() {
    CommentActions.toggleDeleteComment(this.props.comment.id);
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var userIsCommenter = p.currentUser && (p.currentUser.id === p.comment.user.id);

    return (
      <div className="comment-card">

        <div className="commenter-picture-container">
          <img className="picture" src={p.comment.user.profile_thumbnail}></img>
        </div>

        <div className="comment-container">
          {userIsCommenter &&
            <div className="commenter-options">
              <p className="commenter-name">{p.comment.user.name}</p>
              <div className="options">
                <i className="fa fa-edit" onClick={this._editComment}></i>
                <i className="fa fa-times" onClick={this._deleteComment}></i>
              </div>
            </div>
          }
          {!userIsCommenter &&
            <p className="commenter-name">{p.comment.user.name} said:</p>
          }
          <div className="comment">{p.comment.body}</div>
          <div className="additional-info">
            {p.comment.created_at}&nbsp;&nbsp;-&nbsp;&nbsp;
            <span className="show-replies" onClick={this._toggleReplies}>View Replies ({p.comment.replies.length})</span>
          </div>
        </div>


      </div>
    );
  }
});
