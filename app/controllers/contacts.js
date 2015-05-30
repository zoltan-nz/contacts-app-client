import Ember from 'ember';

export default Ember.Controller.extend({

  isShowingPhoneNumber: false,

  actions: {
    toggleShowPhoneNumber() {
      this.toggleProperty('isShowingPhoneNumber');
    }
  }

});
