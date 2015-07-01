var AppCurrentCity = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    currentCity: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      placeholder: ["New York, NY", "Los Angeles, CA", "Vancouver, BC", "Toronto, ON", "Calgary, AB"]
    };
  },
  _filterCity: function(e) {
    NewsItemActions.filterByCity({ city: e.target.value });
  },
  _updateState: function(data) {

  },
  render: function() {
    var p = this.props;
    var randomPlaceholder = p.placeholder[Math.floor(Math.random() * p.placeholder.length)];

    return (
      <div className="app-current-city">
        <div className="city-search-bar">
          <i className="fa fa-map-marker"></i>
          {p.currentCity && 
              <input 
                type="text"
                placeholder={randomPlaceholder}
                onChange={this._filterCity}
                value={"Vancouver"}></input>
          }
          {!p.currentCity && 
            <input 
              type="text"
              placeholder={randomPlaceholder}
              onChange={this._filterCity} 
              value={p.currentCity}></input>
          }
        </div>
      </div>
    );
  }
});
