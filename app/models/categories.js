import DS from 'ember-data';

export default DS.Model.extend({
  parentId: DS.attr(),
  name: DS.attr()
});
