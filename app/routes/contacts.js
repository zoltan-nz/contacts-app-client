import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('contact');
  },

  actions: {
    addNewContact(name, phone, email) {

      if (Ember.isBlank(name, phone)) {
        return;
      }

      const newContact = this.store.createRecord('contact', {
        name: name,
        phone: phone,
        email: email
      });

      newContact.save();
    },

    deleteContact(item) {
      item.destroyRecord();
    }
  }
});
