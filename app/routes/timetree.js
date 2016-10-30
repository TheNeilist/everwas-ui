import Ember from 'ember';

export default Ember.Route.extend({

  model() {

      return this.get('store').findAll('timeline').then(function(timelines) {

        var jsonTimelineArray = timelines.map(function(record) {
          return record.toJSON();
        });

        var timetree = [];
        for(var i = 0; i < jsonTimelineArray.length; i++) {
            var jsonTimeline = jsonTimelineArray[i];
            var timePeriods = jsonTimeline.timePeriods;
            var sections = [];
            var startTimes = [];
            var endTimes = [];
            if (timePeriods.length > 0) {
              for(var s = 0; s < timePeriods.length; s++) {
                var timePeriod = timePeriods[s];
                var startTime = convertStringToDate(timePeriod.periodStart);
                var endTime = convertStringToDate(timePeriod.periodEnd)
                sections.push({
                  start: startTime.getTime(),
                  end: endTime.getTime()
                });
                startTimes.push(startTime);
                endTimes.push(endTime);
              }
              var minTime = minDate(startTimes);
              var maxTime = maxDate(endTimes);

              timetree.push({
                label: jsonTimeline.category.name,
                start: minTime.getTime(),
                end: maxTime.getTime(),
                sections: sections
              });
            }
        }
        return timetree;
      });

//    return mockTimeline();

  }

});

function convertStringToDate(strDate) {
 return new Date(strDate);
}

function minDate(dates) {
  return new Date(Math.min.apply(null,dates));
}

function maxDate(dates) {
  return new Date(Math.max.apply(null,dates));
}

function mockTimeline() {

      var timetree1 = {
        label: 'One',
        start: 0,
        end: 200,
        sections: [
          {start: 0, end: 50},
          {start: 100, end: 150}
        ]
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
