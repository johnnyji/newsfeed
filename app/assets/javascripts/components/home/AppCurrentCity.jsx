var AppCurrentCity = React.createClass({
  propTypes: {
    currentLocation: React.PropTypes.string,
    currentUser: React.PropTypes.object
  },
  getInitialState: function() {
    if (this.props.currentUser) {
      var firstName = this.props.currentUser.name.split(' ')[0];
      return {
        greetings: {
          lateNight: ["Hey " + firstName + ", you're a real night owl!"],
          morning: ["Morning " + firstName + "!"],
          evening: ["Evening, the perfect time of day."],
          afternoon: ["Good afternoon " + firstName + "!"],
          lunchtime: ["Hey " + firstName + ", having a good lunch?"],
        },
      };
    } else {
      return {
        greetings: {
          lateNight: ["You're a real night owl!"],
          morning: ["Good morning!"],
          evening: ["Evening, the perfect time of day."],
          afternoon: ["Good afternoon!"],
          lunchtime: ["Hope you're having a good lunch!"],
        },
      };
    }
  },
  _sampleGreeting: function(greetings) {
    var hour = new Date().getHours();

    if (hour > 18) { return _.sample(greetings.evening); }
    if (hour > 14) { return _.sample(greetings.afternoon); }
    if (hour >= 12) { return _.sample(greetings.lunchtime); }
    if (hour >= 6)  { return _.sample(greetings.morning); }
    if (hour < 6) { return _.sample(greetings.lateNight); }
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var greeting = this._sampleGreeting(s.greetings);

    return (
      <div className="app-current-city">
        <div className="city-container">
          <h3 className="greeting">{greeting} Here's whats new in...</h3>
          <h1 className="location-name">
            <i className="fa fa-map-marker"></i> {p.currentLocation}
          </h1>
        </div>
      </div>
    );
  }
});
