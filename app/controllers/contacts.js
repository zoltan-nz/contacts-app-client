import Ember from 'ember';

export default Ember.Controller.extend({

  contactsWithEmail: Ember.computed('model.@each', function() {
    var model = this.get('model');
    var filteredModel = model.filterBy('email');

    return filteredModel.get('length');
  })

});
