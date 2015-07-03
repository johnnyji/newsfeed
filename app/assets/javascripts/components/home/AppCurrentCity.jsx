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
          lateNight: ["Hey " + firstName + ", you're up pretty late!"],
          morning: ["Morning " + firstName + "!"],
          evening: ["Evening, the perfect time of day."],
          afternoon: ["Good afternoon " + firstName + "!"],
          lunchtime: ["Hey " + firstName + ", hope you're having a good lunch!"],
        },
      };
    } else {
      return {
        greetings: {
          lateNight: ["You're a real night owl!"],
          morning: ["Wow, you're up early!"],
          evening: ["Evening, the perfect time of day."],
          afternoon: ["Good afternoon!"],
          lunchtime: ["Hope you're having a good lunch!"],
        },
      };
    }
  },
  _sampleGreeting: function(greetings) {
    var hour = new Date().getHours();
    var greetings = this.state.greetings;

    if (hour >= 24 && hour < 6) { return _.sample(greetings.lateNight); }
    if (hour > 18 && hour < 24) { return _.sample(greetings.evening); }
    if (hour > 14) { return _.sample(greetings.afternoon); }
    if (hour > 12) { return _.sample(greetings.lunchtime); }
    if (hour > 6)  { return _.sample(greetings.morning); }
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var greeting = this._sampleGreeting(s.greetings);
    var userGreeting = this._sampleGreeting(s.userGreetings);

    return (
      <div className="app-current-city">
        <div className="city-container">
          {p.currentUser && <h3 className="greeting">{greeting} Here's whats new in...</h3>}
          {!p.currentUser && <h3 className="greeting">{userGreeting} Here's whats new in...</h3>}
          <i className="fa fa-map-marker"></i>
          <h1 className="location-name">{p.currentLocation}</h1>
        </div>
      </div>
    );
  }
});
