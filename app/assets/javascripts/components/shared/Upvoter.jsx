var Upvoter = React.createClass({
  propTypes: {
    upvotedByCurrentUser: React.PropTypes.bool.isRequired,
    count: React.PropTypes.number.isRequired,
    newsItemId: React.PropTypes.number.isRequired,
    handleCreateUpvote: React.PropTypes.func.isRequired,
    handleRemoveUpvote: React.PropTypes.func.isRequired,
  },
  _handleCreateUpvote: function() {
    this.props.handleCreateUpvote();
  },
  _handleRemoveUpvote: function() {
    this.props.handleRemoveUpvote();
  },
  render: function() {
    var p = this.props;

    return (
      <div className="upvoter">
        <div className="upvote-icon">
          {p.upvotedByCurrentUser && <i className="fa fa-angle-up voted" onClick={this._handleRemoveUpvote}></i>}
          {!p.upvotedByCurrentUser && <i className="fa fa-angle-up" onClick={this._handleCreateUpvote}></i>}
        </div>
        <p className="upvote-count">{this.props.count}</p>
      </div>
    );
  }
});
