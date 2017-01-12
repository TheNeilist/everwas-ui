import Ember from 'ember';

export default Ember.Route.extend({

  userAuth: Ember.inject.service('user-auth'),

  activate() {
    this.set('userAuth.isAuthenticated', false);
    this.transitionTo('login');
  }

});
