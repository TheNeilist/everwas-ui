import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('timeline');
  this.route('timetree');
  this.route('add-point');
  this.route('add-period');
  this.route('add-category');
  this.route('logout');
});

export default Router;
