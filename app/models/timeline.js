import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  timePeriods: DS.attr(),
  timePoints: DS.attr()
});
