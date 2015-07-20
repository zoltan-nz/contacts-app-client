import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    addNewContact(newContact) {
      newContact.save().then(() => {
        this.transitionTo('contacts.index');
      })
    }
}

});
