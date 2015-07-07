var ConfirmDeleteBox = React.createClass({
  propTypes: {
    confirmDelete: React.PropTypes.func.isRequired,
    regretDelete: React.PropTypes.func.isRequired,
  },
  _confirmDelete: function() {
    this.props.confirmDelete();
  },
  _regretDelete: function() {
    this.props.regretDelete();
  },
  render: function() {
    return (
      <div className="confirm-delete-box">
        <p>Are you sure you want to delete this item? Once you do so it can't be undone!</p>
        <button onClick={this._confirmDelete}></button>
        <button onClick={this._regretDelete}></button>
      </div>
    );
  }
});
