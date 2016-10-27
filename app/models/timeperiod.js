import DS from 'ember-data';

export default DS.Model.extend({
  categoryId: DS.attr(),
  name: DS.attr(),
  periodStart: DS.attr(),
  periodEnd: DS.attr()
});
