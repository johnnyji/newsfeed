var CommentBox = React.createClass({
  _submitComment: function() {
    var commentBox = React.findDOMNode(this.refs.comment);
    CommentActions.createComment(commentBox.value);
    commentBox.value = "";
  },
  render: function() {
    return (
      <div className="comment-box">
        <textarea className="comment-area" ref="comment"></textarea>
        <button onClick={this._submitComment}>Post</button>
      </div>
    );
  }
});
