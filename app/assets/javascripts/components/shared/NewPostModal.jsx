var NewPostModal = React.createClass({
  _toggleNewPostModal: function() {
    AppActions.toggleNewPostModal();
  },
  render: function() {
    return (
      <div className="full-page-modal">
        <img 
          className="exit-modal"
          src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"
          onClick={this._toggleNewPostModal}></img>
        
      </div>
    );
  }
});
