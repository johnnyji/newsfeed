var EditCommentCard = React.createClass({
  propTypes: {
    comment: React.PropTypes.object.isRequired,
  },
  _exitEditMode: function() {
    NewsItemModalActions.toggleEditComment();
  },
  render: function() {
    return (
      <div className="comment-card">
        <span onClick={this._exitEditMode}>Exit edit mode</span>
        hello
      </div>
    );
  }
});
