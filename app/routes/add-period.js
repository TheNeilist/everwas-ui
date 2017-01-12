import Ember from 'ember';

export default Ember.Route.extend({

  userAuth: Ember.inject.service('user-auth'),

  activate() {
    if (!this.get('userAuth.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model() {
    return this.get('store')
      .findAll('category', { reload: true })
      .then(function(categories) {
        return categories.sortBy('name');
    });
  }
});
