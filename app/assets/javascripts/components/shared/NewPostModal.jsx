var NewPostModal = React.createClass({
  _toggleNewPostModal: function() {
    AppActions.toggleNewPostModal();
  },
  render: function() {
    return (
      <div className="full-page-modal">
        <i className="fa fa-times" onClick={this._toggleNewPostModal}></i>
        
      </div>
    );
  }
});
