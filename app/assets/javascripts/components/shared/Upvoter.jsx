var Upvoter = React.createClass({
  propTypes: {
    count: React.PropTypes.number.isRequired,
    newsItemId: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func.isRequired,
  },
  _handleClick: function() {
    this.props.handleClick();
  },
  render: function() {
    return (
      <div className="upvoter">
        <div className="upvote-icon">
          <img src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-07-128.png" onClick={this._handleClick}></img>
        </div>
        <p className="upvote-count">{this.props.count}</p>
      </div>
    );
  }
});
