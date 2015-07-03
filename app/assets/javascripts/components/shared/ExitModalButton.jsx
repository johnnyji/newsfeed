var ExitModalButton = React.createClass({
  propTypes: {
    exitCallback: React.PropTypes.func.isRequired,
  },
  render: function() {
    return (
      <img
        className="exit-modal"
        src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"
        onClick={this.props.exitCallback}>        
      </img>
    );
  }
});
