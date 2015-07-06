var CommentCard = React.createClass({
  propTypes: {
    comment: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {
      showReplies: false,
    };
  },
  _toggleReplies: function() {
    this.setState({ showReplies: !this.state.showReplies });
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    return (
      <div className="comment-card">
        <div className="user-picture">{p.comment.user.profile_thumbnail}</div>

        <div className="comment-container">
          <span className="user-name">{p.comment.user.name}</span>
          {p.comment.body}
        </div>

        <div className="comment-subinfo">
          {p.comment.created_at} -
          <span
            className="show-replies"
            onClick={this._toggleReplies}>View Replies ({p.comment.replies.length})</span>
        </div>
      </div>
    );
  }
});
