var NewsItemModal = React.createClass({
  propTypes: {
    newsItem: React.PropTypes.object.isRequired,
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
        <img
          className="exit-modal"
          src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"
          onClick={this._exitNewsItemModal}></img>

        <div className="show-news-item">
          <div className="item-header">
            <Upvoter count={newsItem.upvotes} newsItemId={newsItem.id} />
            <h1 className="title">{newsItem.title}</h1>
          </div>
        </div>
      </div>
    );
  }
});
