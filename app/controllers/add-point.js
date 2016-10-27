import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    addPoint: function() {
      var self = this;
      var newPoint = this.store.createRecord('timepoint', {
       categoryId: this.get('categoryId'),
       name: this.get('name'),
       time: this.get('time')
      });
      newPoint.save().then(function() {
       self.transitionTo('timeline');
      }).catch(function(error) {
       alert('Error: ' + error);
      });
    },

    setDate: function(thedate) {
      this.set('time', thedate);
    },

    setCategory: function(theCategoryId) {
      this.set('categoryId', theCategoryId);
    }

  }
});
