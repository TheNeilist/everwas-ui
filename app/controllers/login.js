import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

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
          //TODO: do something with the user so it is visible in templates, other controllers, etc
          self .transitionToRoute('timeline');
       }, function(jqXHR/*, textStatus, errorThrown*/) {
          //TODO: implement sexy alert
          alert('Authentication failed.')
       });
    }

  }

});
