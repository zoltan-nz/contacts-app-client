import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['container-fluid'],

  isNameEmpty: Ember.computed('name', function() {return Ember.isBlank(this.get('name'));}),
  isPhoneEmpty: Ember.computed('phone', function() {return Ember.isBlank(this.get('phone'));}),

  nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

  actions: {
    buttonClicked() {
      if (this.get('nothingThere')) {return;}

      const name = this.get('name');
      const phone = this.get('phone');
      const email = this.get('email');

      this.sendAction('action', name, phone, email);

      this.set('name', '');
      this.set('phone', '');
      this.set('email', '');
    }
  }

});
