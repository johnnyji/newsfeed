var Tab = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired
  },
  _handleClicked: function() {
    AppActions.changeActiveTabIndex(this.props.index);
  },
  render: function() {
    return (
      <div className="tab" onClick={this._handleClicked}>
        {this.props.name}
      </div>
    );
  }
});