var CommentBox = React.createClass({
  _submitComment: function() {
    var commentBox = React.findDOMNode(this.refs.comment);
    CommentActions.createComment(commentBox.value);
    commentBox.value = "";
  },
  render: function() {
    return (
      <div>
        <textarea ref="comment" ></textarea>
        <button onClick={this._submitComment}>Post</button>
      </div>
    );
  }
});
