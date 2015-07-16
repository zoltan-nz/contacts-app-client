import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['modal', 'fade'],

  title: 'Default title',
  cancelButtonLabel: 'Cancel',
  primerButtonLabel: 'Save',

  actions: {
    primerButtonClicked() {
      this.sendAction();
    }
  }
});
