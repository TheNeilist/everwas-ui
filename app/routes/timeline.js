import Ember from 'ember';

export default Ember.Route.extend({

  model() {

      return this.get('store').findAll('timeline', { reload: true }).then(function(timelines) {

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
                var endTime = convertStringToDate(timePeriod.periodEnd);
                sections.push({
                  name: timePeriod.name,
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
