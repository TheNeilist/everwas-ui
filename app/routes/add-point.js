import Ember from 'ember';

export default Ember.Route.extend({
  //todo: extract into service
  model() {
    return this.get('store')
      .findAll('category', { reload: true })
      .then(function(categories) {
        return categories.sortBy('name');
    });
  }
});
