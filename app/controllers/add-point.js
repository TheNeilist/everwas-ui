import Ember from 'ember';

export default Ember.Controller.extend({

  timePoint: {},

  actions: {

    addPoint: function() {
      var self = this;
      var newPoint = this.store.createRecord('timepoint', self.timePoint);

      newPoint.save().then(function() {
       self.transitionToRoute('timeline');
      }).catch(function(error) {
       alert('Error: ' + error);
      });
    },

    setDate: function(formDate) {
      this.timePoint.time = formDate;
    },

    setCategory: function(formCategoryId) {
      this.timePoint.categoryId = formCategoryId;
    }

  }
});
