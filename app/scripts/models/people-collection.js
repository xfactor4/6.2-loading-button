import Person from 'models/person';

var PeopleCollection = Backbone.Collection.extend({
  model: Person,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/things"
});

export default PeopleCollection;
