import Ember from 'ember';

export default Ember.Controller.extend({

  contactsWithEmail: Ember.computed('model.[]', function () {
    const model = this.get('model');
    const filteredModel = model.filterBy('email');

    return filteredModel.get('length');
  })

});
