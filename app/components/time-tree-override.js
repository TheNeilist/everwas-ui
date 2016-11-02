import Ember from 'ember';

import TimeTreeComponent from 'ember-timetree/components/time-tree';

const TimeTreeOverrride = TimeTreeComponent.extend({

  timeFormat: Ember.computed(function() {
    /* global d3 */
    return d3.time.format.utc("%b %d");
  }).property()

});

export default TimeTreeOverrride;
