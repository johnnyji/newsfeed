var AppNavbar = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired,
    activeTabIndex: React.PropTypes.number.isRequired
  },
  _toggleNewNewsItemForm: function() {
    AppActions.toggleNewNewsItemForm();
  },
  render: function() {
    var p = this.props;
    var tabs = _.map(p.tabs, function(tabName, i) {
      return <Tab key={i} index={i} name={tabName} />
    });
    return (
      <div className="app-navbar">
        <div className="left">{tabs}</div>
        <div className="right">
          <i className="fa fa-plus" onClick={this._toggleNewNewsItemForm}></i>
        </div>
      </div>
    );
  }
});