import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'tr',

  actions: {
    deleteItem() {
      var item = this.get('item');
      item.destroyRecord();
    }
  }
});
