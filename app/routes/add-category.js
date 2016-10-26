import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

      addCategory: function() {
        var self = this;
        var newCategory = this.store.createRecord('category', {
          parentId: 0,
          name: this.get('name')
        });

        newCategory.save().then(function() {
          self.transitionTo('add-point');
        }).catch(function(error) {
          alert('Error: ' + error);
        });
      }

  }

});
