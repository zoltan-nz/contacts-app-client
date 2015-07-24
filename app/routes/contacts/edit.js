import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('contact', params.id);
  },

  actions: {
    updateContact(editedContact) {
      editedContact.save().then(() => {
        this.transitionTo('contacts.show', editedContact.id);
      });
    }
  }

});
