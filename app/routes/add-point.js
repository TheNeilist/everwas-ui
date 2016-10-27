import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store')
      .findAll('category', { reload: true })
      .then(function(categories) {
        return categories.sortBy('name');
    });
  }
});
