var NewsItemCard = React.createClass({
  propTypes: {
    newsItem: React.PropTypes.object
  },
  render: function() {
    var newsItem = this.props.newsItem;
    
    return (
      <div className="news-item-card">
        <h1>{newsItem.title}</h1>
      </div>
    );
  }
});
