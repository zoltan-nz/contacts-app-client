import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('contact', params.id);
  },

  actions: {
    transitionToEdit(record) {
      this.transitionTo('contacts.edit', record.id);
    }
  }

});
