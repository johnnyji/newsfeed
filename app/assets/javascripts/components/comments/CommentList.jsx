var CommentList = React.createClass({
  propTypes: {
    noComments: React.PropTypes.bool.isRequired,
    comments: React.PropTypes.array
  },
  render: function() {
    var p = this.props;
    var comments = _.map(p.comments, function(comment, i) {
      return <CommentCard key={i} comment={comment} />
    });

    if (p.noComments) { return <h1>No comments yet</h1> }

    return (
      <div>
        {comments}
      </div>
    );

  }
});
