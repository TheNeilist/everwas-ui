import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

  userAuth: Ember.inject.service('user-auth'),

  actions: {

    login: function() {

      var self = this;

      var authCreds = JSON.stringify({
          username: this.username,
          password: this.password
      });

      Ember.$.ajax({
          url: config.APP.API_HOST + '/user',
          dataType   : 'json',
          contentType: 'application/json; charset=UTF-8',
          data: authCreds,
          type: 'POST',
          contentType: 'application/json'
       }).then(function(responseObject/*, statusText, jqXHR*/) {

          self.set('userAuth.isAuthenticated', true);
          self.transitionToRoute('timeline');
       }, function(jqXHR/*, textStatus, errorThrown*/) {
          //TODO: implement sexy alert
          alert('Authentication failed.')
       });
    }

  }

});
