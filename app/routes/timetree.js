import Ember from 'ember';

export default Ember.Route.extend({
  model() {

      var timetree1 = {
        label: 'One',
        start: 0,
        end: 100
      };

      var timetree2 = {
              label: 'Two',
              start: 50,
              end: 150
            };

      var timetree3 = {
        label: 'Two',
        start: 150,
        end: 200
      };

      var timetree4 = {
        label: 'Point',
        start: 75,
        end: 76
      };

      return [timetree1, timetree2, timetree3, timetree4];

  }
});
