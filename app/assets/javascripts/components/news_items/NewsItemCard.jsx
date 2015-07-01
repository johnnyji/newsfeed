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
  _showNewsItem: function() {
    AppActions.showNewsItemModal(newsItem.id);
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var newsItem = p.newsItem;

    return (
      <div className="news-item-card">

          <div className="upvote-count">
            <div className="upvote-icon">
              <img src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-07-128.png" onClick={this._handleUpvoteClick}></img>
            </div>
            {newsItem.upvotes}
          </div>

          <div className="info">
            <h2 className="title">{newsItem.title}</h2>
            <p className="description">{newsItem.description}</p>
            <div className="additional-info">
              <div className="posted-date" onClick={this._showNewsItemModal}>{newsItem.created_at}</div>
              <div className="comment-count" onClick={this._showNewsItemModal}>View Comments (0)</div>
            </div>
          </div>

      </div>
    );
  }
});
