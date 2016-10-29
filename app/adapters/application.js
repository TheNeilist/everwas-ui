import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
//    host: 'http://localhost:8090',
    host: config.APP.API_HOST,
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
