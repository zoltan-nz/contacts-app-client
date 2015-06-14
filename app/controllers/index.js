import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    generateDummyList() {
      for (var i = 1; i <= 5000; i++) {
        var newContact = this.store.createRecord('contact', {name: `Dummy Name ${i}` , phone: `${i}-1234-${i}`});
        newContact.save();
      }
    },

    deleteAll() {
      this.get('model').forEach((item) => {
          item.destroyRecord();
        }
      );
    }

  }
});
