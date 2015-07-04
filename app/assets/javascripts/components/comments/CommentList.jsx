var CommentList = React.createClass({
  propTypes: {
    comments: React.PropTypes.string
  },
  render: function() {
    var p = this.props;
    var comments = _.map(p.comments, function(comment, i) {
      <CommentCard key={i} comment={comment} />
    });

    return (
      <div>
        {_.isEmpty(comments) && <h1>No comments yet.</h1>}
        {comments && <div>{comments}</div>}
      </div>
    );
  }
});
