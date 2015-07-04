var CommentCard = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    comment: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    var state = CommentStore.getInitalState();
    return {
      showReplies: state.showReplies,
    };
  },
  componentDidMount: function() {
    this.listenTo(CommentStore, this._updateState);
  },
  _toggleReplies: function() {
    CommentActions.toggleReplies();
  },
  _updateState: function(data) {
    this.setState({
      showReplies: data.showReplies,
    });
  },
  render: function() {
    var p = this.props;
    var comment = p.comment;
    return (
      <div className="comment-card">
        <div className="user-picture">{comment.user.profile_thumbnail}</div>

        <div className="comment-container">
          <span className="user-name">{comment.user.name}</span>
          {comment.body}
        </div>

        <div className="comment-subinfo">
          {comment.created_at} -
          <span
            className="show-replies"
            onClick={this._toggleReplies}>View Replies ({comment.replies.length})</span>
        </div>
      </div>
    );
  }
});
