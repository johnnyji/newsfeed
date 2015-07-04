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
            <p className="description">{newsItem.description}</p>
            <div className="additional-info">
              <div className="posted-date">{newsItem.created_at}</div>
              <div className="comment-count" onClick={this._showNewsItemModal}>
                View Comments ({newsItem.comments.length})
              </div>
            </div>
          </div>

      </div>
    );
  }
});
