var NewsItemModal = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
    newsItem: React.PropTypes.object.isRequired,
  },
  _handleUpvoteClick: function() {
    if (!this.props.currentUser) { AppActions.triggerMessage("Please sign in to vote"); }
    UpvoteActions.createUpvote(this.props.newsItem.id);
  },
  _handleCreateUpvote: function() {
    if (!this.props.currentUser) { return AppActions.triggerMessage("Please sign in to upvote"); }
    UpvoteActions.createUpvote(this.props.newsItem.id);
  },
  _handleRemoveUpvote: function() {
    UpvoteActions.removeUpvote(this.props.newsItem.id);
  },
  _exitNewsItemModal: function() {
    NewsItemActions.toggleNewsItemModal();
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var newsItem = p.newsItem;

    return (
      <div className="full-page-modal">
        <FlashMessage message={p.message}/>
        <ExitModalButton exitCallback={this._exitNewsItemModal} />

        <div className="show-news-item">
          <div className="item-header">
            <Upvoter
              upvotedByCurrentUser={newsItem.upvoted_by_current_user}
              count={newsItem.upvotes}
              newsItemId={newsItem.id}
              handleCreateUpvote={this._handleCreateUpvote}
              handleRemoveUpvote={this._handleRemoveUpvote}
            />
            <h1 className="title">{newsItem.title}</h1>
          </div>
          <div className="item-description">{newsItem.description}</div>
          <CommentBox />
          <CommentList />
        </div>

      </div>
    );
  }
});
