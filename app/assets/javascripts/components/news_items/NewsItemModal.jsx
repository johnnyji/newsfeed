var NewsItemModal = React.createClass({
  mixins: [Reflux.ListenerMixin],
  propTypes: {
    currentUser: React.PropTypes.object,
    newsItem: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    var state = NewsItemModalStore.getInitialState();
    return {
      comments: state.comments,
      noComments: state.noComments,
    };
  },
  componentDidMount: function() {
    this.listenTo(NewsItemModalStore, this._updateState);
    NewsItemModalStore.loadComments(this.props.newsItem.id);
  },
  _handleUpvoteClick: function() {
    if (!this.props.currentUser) { AppActions.triggerMessage("Please sign in to vote"); }
    UpvoteActions.createUpvote(this.props.newsItem.id);
  },
  _handleCreateUpvote: function() {
    if (!this.props.currentUser) { return AppActions.triggerMessage("Please sign in to upvote"); }
    UpvoteActions.createUpvote(this.props.newsItem.id);
  },
  _handleRemoveUpvote: function() {
    UpvoteActions.removeUpvote(this.props.newsItem.id);
  },
  _exitNewsItemModal: function() {
    NewsItemActions.toggleNewsItemModal();
  },
  _updateState: function(data) {
    this.setState({
      comments: data.comments,
      noComments: data.noComments,
    });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    var newsItem = p.newsItem;

    return (
      <div className="full-page-modal">
        <FlashMessage message={p.message}/>
        <ExitModalButton exitCallback={this._exitNewsItemModal} />

        <div className="show-news-item">

          <div className="item-container">
            <Upvoter
              upvotedByCurrentUser={newsItem.upvoted_by_current_user}
              count={newsItem.upvotes}
              newsItemId={newsItem.id}
              handleCreateUpvote={this._handleCreateUpvote}
              handleRemoveUpvote={this._handleRemoveUpvote}
            />

            <div className="news-item-info">
              <div>
                <h1 className="title">{newsItem.title}</h1>
                <div className="additional-info">
                  <img src={newsItem.user.profile_thumbnail} className="user-picture"></img>
                  <div className="user-name">{newsItem.user.name}</div>
                  <div className="posted-date">{newsItem.created_at}</div>
                </div>
              </div>
              <div className="item-description">{newsItem.description}</div>
              <CommentBox currentUser={p.currentUser} newsItemId={newsItem.id}/>
              <CommentList comments={s.comments} noComments={s.noComments} />
            </div>

          </div>

        </div>

      </div>
    );
  }
});
