var AuthenticationStore = Reflux.createStore({
  init: function() {
    this.listenToMany(AuthenticationActions);
  },
  onAuthenticateWithTwitter: function() {
    window.location.href = "/auth/twitter";
  },
});
