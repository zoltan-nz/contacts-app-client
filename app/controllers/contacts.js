import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['isShowingPhoneNumber'],

  name: '',
  phone: '',

  isShowingPhoneNumber: false,

  isNameEmpty: Ember.computed.empty('name'),
  isPhoneEmpty: Ember.computed.empty('phone'),

  nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

  contactsWithEmail: function() {
    var model = this.get('model');
    var filteredModel = model.filterBy('email');
    return filteredModel.get('length');
  }.property('model.@each'),

  actions: {

    toggleShowPhoneNumber() {

      this.toggleProperty('isShowingPhoneNumber');

    },

    addNewContact() {

      if (this.get('nothingThere')) {
        return;
      }

      var nameFromInput = this.get('name');
      var phoneFromInput = this.get('phone');
      var emailFromInput = this.get('email');

      const newContact = this.store.createRecord('contact', {
        name: nameFromInput,
        phone: phoneFromInput,
        email: emailFromInput
      });

      newContact.save();

      this.set('name', '');
      this.set('phone', '');
      this.set('email', '');

    },

    deleteContact(item) {
      item.destroyRecord();
    }
  }

});
