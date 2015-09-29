import PeopleCollection from 'models/people-collection';

// Important part
$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());

  var people = new PeopleCollection();
  people.fetch();
  people.on('add', renderPerson);

  window.following = new PeopleCollection();
  following.url = "http://tiny-lasagna-server.herokuapp.com/collections/following";
  following.on('add', renderFollower);
  following.fetch();

});

function renderPerson(person) {
  // $('.js-people').append(JST.person(person.toJSON()));
  var contextObj = person.toJSON();
  var li = $(JST.person(contextObj));
  li.on('click', '.js-follow', function(){
    person.follow();
  });
  $('.js-people').append(li);
}

function renderFollower(person) {
  var contextObj = person.toJSON();
  var li = $(JST.follower(contextObj));
  $('.js-following').append(li);
}
