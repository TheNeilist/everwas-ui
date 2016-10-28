import DS from 'ember-data';

export default DS.RESTAdapter.extend({
//    host: 'http://localhost:8090',
    host: 'http://127.0.0.1:8090',
    headers: {
     'Accept': 'application/json'
    }
});


//export default DS.JSONAPIAdapter.extend({
//    host: 'http://localhost:8090',
//    headers: {
//     'Accept': 'application/json'
//    }
//});
