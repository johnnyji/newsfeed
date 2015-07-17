var CommentList = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    currentUser: React.PropTypes.object,
    comments: React.PropTypes.array.isRequired,
  },
  getInitialState: function() {
    var state = CommentStore.getInitialState();
    return {
      commentBeingEditedId: state.commentBeingEditedId,
      commentBeingDeletedId: state.commentBeingDeletedId,
    };
  },
  componentDidMount: function() {
    this.listenTo(CommentStore, this._updateState);
  },
  _updateState: function(data) {
    this.setState({
      commentBeingDeletedId: data.commentBeingDeletedId,
      commentBeingEditedId: data.commentBeingEditedId,
    });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var noComments = p.comments.length < 1;
    var comments = _.map(p.comments, function(comment, i) {
      var commentBeingEdited = (s.commentBeingEditedId) && (comment.id == s.commentBeingEditedId);
      var commentBeingDeleted = (s.commentBeingDeletedId) && (comment.id == s.commentBeingDeletedId);
      if (commentBeingEdited) { return <EditCommentCard key={i} comment={comment} /> }
      if (commentBeingDeleted) { return <DeleteCommentCard key={i} comment={comment} /> }
      return <CommentCard key={i} comment={comment} currentUser={this.props.currentUser} />
    }.bind(this));

    if (noComments) { return <h1 className="no-comments">No Comments Yet</h1> }

    return (
      <div className="comment-list">
        {comments}
      </div>
    );

  }
});
