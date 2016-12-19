import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    login: function() {
      var self = this;
      //TODO: authenticate against api

      self.transitionToRoute('timeline');
    }
  }

});
