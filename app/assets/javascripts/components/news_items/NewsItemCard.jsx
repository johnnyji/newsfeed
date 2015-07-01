var NewsItemCard = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object,
    newsItem: React.PropTypes.object
  },
  _handleUpvoteClick: function() {
    if (this.props.currentUser) {
      var hello = "hi"
    } else {
      AppActions.toggleSignupModal();
    }
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

          <Upvoter count={newsItem.upvotes} newsItemId={newsItem.id} />

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
