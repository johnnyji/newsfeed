var InputErrorMessage = React.createClass({
  propTypes: {
    error: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    if (p.error && p.message) {
      return (
        <div className="error-message">{p.message}</div>
      );
    } else {
      return <div/>
    }
  }
});
