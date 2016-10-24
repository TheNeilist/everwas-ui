import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var timeline = this.get('store').findAll('timeline');
    return timeline;
  }
});
