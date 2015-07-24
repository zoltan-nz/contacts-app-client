import Ember from 'ember';

export default Ember.Component.extend({

  isNew: false,
  isShowing: false,
  isEditing: false,

  isNameEmpty: Ember.computed('model.name', function() {return Ember.isBlank(this.get('model.name'));}),
  isPhoneEmpty: Ember.computed('model.phone', function() {return Ember.isBlank(this.get('model.phone'));}),

  hasNotDirtyAttribute: Ember.computed.not('model.hasDirtyAttributes'),

  isDisabled: Ember.computed.or('isNameEmpty', 'isPhoneEmpty', 'model.isSaving', 'hasNotDirtyAttribute'),

  actions: {
    buttonClicked() {
      this.sendAction('action', this.get('model'));
    },

    textClicked() {
      this.sendAction('clicked', this.get('model'));
    }
  }

});
