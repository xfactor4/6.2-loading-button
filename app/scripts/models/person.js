var Person = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    name: "[no name specified]",
    favoriteFood: "whiskey",
    created_at: Date.now()
  },

  follow: function(){
    following.create(this.toJSON());
  },

  toJSON: function(){
    return _.omit(this.attributes, '_id');
  }
});

export default Person;
