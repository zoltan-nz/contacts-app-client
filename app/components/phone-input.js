import Ember from 'ember';

export default Ember.TextField.extend({

  dasherizeDigits: Ember.observer('value', function() {
    let valueString = this.get('value').replace(/\D+/g, '');

    if (!Ember.isBlank(valueString)) {
      valueString = valueString.match(/\d{1,3}/g).join('-');
    }

    this.set('value', valueString);
  })

});
