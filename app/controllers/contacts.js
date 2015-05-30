import Ember from 'ember';

export default Ember.Controller.extend({

  isShowingPhoneNumber: false,

  actions: {
    toggleShowPhoneNumber: function() {
      this.toggleProperty('isShowingPhoneNumber')
    }
  }

});
