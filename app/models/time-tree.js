import DS from 'ember-data';

export default DS.Model.extend({
  /* REQUIRED FIELDS */

  label: DS.attr(),
  start: DS.attr(),      // Milliseconds since the UTC epoch.
  end: DS.attr()

  /* OPTIONAL FIELDS */

//  parent:    3,          // Index of this row's hierarchical parent in the array.
//  id:        "123456L",  // Id for determining uniqueness; defaults to index in the array.
//  className: "info",     // CSS class name for this row's labels and bars.
//
//  content:   {},         // Arbitrary content to bind when the user selects (clicks on) a
//                        // row. Useful if you want to do exact identity comparison to the
//                        // selection. If empty, selecting a row binds `content` to the
//                        // row object itself (which ember-timetree may have transformed,
//                        // so don't count on it being identical to your original input).
//
//  sections:  [{ start: 12345, end: 23456, className: "active"   },  // Start/stop this row's timeline multiple times.
//             { start: 23456, end: 67890, className: "inactive" }]  // Each section can have its own, optional CSS class name.
//                                                                   // Note the row object's overall start/end fields must
//                                                                   // still be specified above, as its bar will still be drawn.
});
