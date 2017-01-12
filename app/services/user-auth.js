import Ember from 'ember';

export default Ember.Service.extend({

  isAuthenticated: null,

  init() {
    this._super(...arguments);
    this.set('isAuthenticated', false);
  }

});
