import Ember from 'ember';

export default Ember.Controller.extend({

  categoryName: '',

  actions: {

      addCategory: function() {
        var self = this;
        var newCategory = this.store.createRecord('category', {
          parentId: 0,
          name: self.get('categoryName')
        });

        newCategory.save().then(function() {
          //todo: redirect to origination page or make this a modal
          self.transitionToRoute('add-point');
        }).catch(function(error) {
          alert('Error: ' + error);
        });
      }

  }

});
