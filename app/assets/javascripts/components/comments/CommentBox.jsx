var CommentBox = React.createClass({
  propTypes: {
    newsItemId: React.PropTypes.number.isRequired,
    currentUser: React.PropTypes.object,
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
    var commentBox = React.findDOMNode(this.refs.comment);
    commentBox.value = "";
  },
  _loginUser: function() {
    AuthenticationActions.authenticateWithTwitter();
  },
  render: function() {
    var p = this.props;

    if (_.isNull(p.currentUser)) {
      return <div />
      // return (
      //   <div className="login-to-comment">
      //     <h1>Please <span onClick={this._loginUser}>log in</span> to comment.</h1>
      //   </div>
      // );
    }

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
