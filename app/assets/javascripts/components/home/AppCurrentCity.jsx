var AppCurrentCity = React.createClass({
  propTypes: {
    currentLocation: React.PropTypes.string
  },
  _getGreeting: function() {
    var hour = new Date().getHours();
    if (hour >= 24 && hour < 6) { return "You're a real night owl!"; }
    if (hour > 18 && hour < 24) { return "Good evening!"; }
    if (hour > 14) { return "Good afternoon!"; }
    if (hour > 12) { return "Lunchtime!"; }
    if (hour > 6)  { return "You're up early!"; }
  },
  render: function() {
    var p = this.props;
    var greeting = this._getGreeting();

    return (
      <div className="app-current-city">
        <div className="city-container">
          <h3 className="greeting">{greeting} Here's whats new in...</h3>
          <i className="fa fa-map-marker"></i>
          <h1 className="location-name">{p.currentLocation}</h1>
        </div>
      </div>
    );
  }
});
