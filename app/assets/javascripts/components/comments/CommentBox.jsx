var CommentBox = React.createClass({
  propTypes: {
    newsItemId: React.PropTypes.number.isRequired,
    currentUser: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {
      comment: {
        body: null,
        news_item_id: this.props.newsItemId,
      }
    };
  },
  _handleChange: function(e) {
    var newState = this.state.comment;
    newState.body = e.target.value;
    this.setState(newState);
  },
  _createComment: function() {
    NewsItemModalActions.createComment(this.state.comment, this._handleCreateSuccess);
  },
  _handleCreateSuccess: function() {
    commentBox.value = "";
  },
  render: function() {
    var p = this.props;

    return (
      <div className="comment-box">
        <div className="commenter-info">
          <img className="commenter-picture" src={p.currentUser.profile_thumbnail}></img>
          <p className="commenter-name">{p.currentUser.name}:</p>
        </div>
        <textarea
          onChange={this._handleChange}
          ref="comment"
          className="comment-area"
          placeholder="Comment here..."></textarea>
        <button onClick={this._createComment}>Post</button>
      </div>
    );
  }
});
