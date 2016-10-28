import DS from 'ember-data';

export default DS.RESTAdapter.extend({
//    host: 'http://localhost:8090',
    host: 'http://ec2-52-43-138-208.us-west-2.compute.amazonaws.com:8090',
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
