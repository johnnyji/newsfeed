var InputErrorMessage = React.createClass({
  propTypes: {
    error: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string
  },
  render: function() {
    var p = this.props;

    if (p.error && p.message) {
      return (
        <div>{p.message}</div>
      );
    } else {
      return <div/>
    }
  }
});
