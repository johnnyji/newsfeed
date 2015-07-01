var FlashMessage = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired
  },
  _handleRemoveMessage: function() {
    AppActions.clearMessage();
  },
  render: function() {
    var p = this.props;

    return (
      <div className="flash-message">
        <p className="message">{p.message}</p>
        <img className="exit-message" onClick={this._handleRemoveMessage} src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"></img>
      </div>
    );
  }
});
