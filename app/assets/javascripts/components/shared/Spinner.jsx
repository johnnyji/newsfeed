var Spinner = React.createClass({
  render: function() {
    return (
      <div>
        <div className="sk-spinner sk-spinner-three-bounce" id="normal-spinner">
          <div className="sk-bounce1"></div>
          <div className="sk-bounce2"></div>
          <div className="sk-bounce3"></div>
        </div>
      </div>
    );
  }
});
