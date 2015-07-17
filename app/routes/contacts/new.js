import Ember from 'ember';

export default Ember.Route.extend({

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

      this.transitionTo('contacts.index');
    }
  }

});
