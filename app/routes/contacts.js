import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    return [
    {name: 'First Name', phone: '1234'},
    {name: 'Second Name', phone: '3456'},
    {name: 'Third User', phone: '3827282'}
  ]}
});
