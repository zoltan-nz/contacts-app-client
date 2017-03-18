import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.get('session').fetch().catch(function() {});
  },

  actions: {

    signIn(email, password) {
      this.get('session')
        .open('firebase', { provider: 'password', email: email, password: password})
        .then(data => console.log(data.currentUser)); //eslint-disable-line no-console
    },

    signOut() {
      this.get('session').close();
    }
  }
});
