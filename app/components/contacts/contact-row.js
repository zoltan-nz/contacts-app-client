import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',

  actions: {
    deleteItem() {
      this.$('.modal').modal();
    },

    deleteConfirmed() {
      var item = this.get('item');
      item.destroyRecord();
    }
  }
});
