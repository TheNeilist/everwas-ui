import Ember from 'ember';

export default Ember.Controller.extend({

  timePeriod: {},

  actions: {

    addPeriod: function() {
      var self = this;
      var newPeriod = this.store.createRecord('timeperiod', self.timePeriod);

      newPeriod.save().then(function() {
       self.transitionToRoute('timeline');
      }).catch(function(error) {
       alert('Error: ' + error);
      });
    },

    setPeriodStart: function(periodStart) {
      this.timePeriod.periodStart = periodStart;
    },

    setPeriodEnd: function(periodEnd) {
      this.timePeriod.periodEnd = periodEnd;
    },

    setCategory: function(categoryId) {
      this.timePeriod.categoryId = categoryId;
    }

  }

});
