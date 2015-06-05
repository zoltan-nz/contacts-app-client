import Ember from 'ember';

export default Ember.Controller.extend({

  name: '',
  phone: '',

  isShowingPhoneNumber: false,

  isNameEmpty: Ember.computed.empty('name'),
  isPhoneEmpty: Ember.computed.empty('phone'),

  actions: {

    toggleShowPhoneNumber() {

      this.toggleProperty('isShowingPhoneNumber');

    },

    addNewContact() {

      if (this.get('isNameEmpty') && this.get('isPhoneEmpty')) { return; }

      var nameFromInput = this.get('name');
      var phoneFromInput = this.get('phone');

      const newContact = this.store.createRecord('contact', {
        name: nameFromInput,
        phone: phoneFromInput
      });

      newContact.save();

      this.set('name', '');
      this.set('phone', '');

    },

    deleteContact(item) {

      this.store.deleteRecord(item);

      item.save();
    }
  }
});
