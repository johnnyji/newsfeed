var NewsItemCard = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
    newsItem: React.PropTypes.object
  },
  _handleRemoveUpvote: function() {
    UpvoteActions.removeUpvote(this.props.newsItem.id);
  },
  _handleCreateUpvote: function() {
    if (!this.props.currentUser) { return AppActions.toggleSignupModal(); }
    UpvoteActions.createUpvote(this.props.newsItem.id);
  },
  _showNewsItemModal: function() {
    NewsItemActions.toggleNewsItemModal(this.props.newsItem.id);
  },
  _showUserProfile: function() {
    AppActions.toggleProfileModal(this.props.newsItem.user.id);
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var newsItem = p.newsItem;

    return (
      <div className="news-item-card">

          <Upvoter
            upvotedByCurrentUser={newsItem.upvoted_by_current_user}
            count={newsItem.upvotes}
            newsItemId={newsItem.id}
            handleCreateUpvote={this._handleCreateUpvote}
            handleRemoveUpvote={this._handleRemoveUpvote}
          />

          <div className="info">
            <h2 className="title" onClick={this._showNewsItemModal}>{newsItem.title}</h2>
            <div className="additional-info">
              <img className="user-picture" src={newsItem.user.profile_thumbnail} onClick={this._showUserProfile}></img>
              <div className="user-name">{newsItem.user.name}</div>
              <div className="posted-date">{newsItem.created_at}</div>
              <div className="comment-count" onClick={this._showNewsItemModal}>
                View Comments ({newsItem.comment_count})
              </div>
            </div>
          </div>

      </div>
    );
  }
});
