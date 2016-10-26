import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPoint: function() {
         var newPoint = this.store.createRecord('timepoint', {
           categoryId: this.get('categoryId'),
           name: this.get('name'),
           time: this.get('time')
         });
         //todo: save the time point
    }
  }
});
