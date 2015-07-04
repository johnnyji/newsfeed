var FlashMessage = React.createClass({
  propTypes: {
    message: React.PropTypes.string
  },
  _handleRemoveMessage: function() {
    AppActions.clearMessage();
  },
  render: function() {
    var p = this.props;

    if (!p.message) { return <div/>; }
    return (
      <div className="flash-message">
        <p className="message">{p.message}</p>
        <img className="exit-message" onClick={this._handleRemoveMessage} src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"></img>
      </div>
    );
  }
});
