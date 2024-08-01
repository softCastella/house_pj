Users = new Mongo.Collection('users');

Template.main.helpers({
    users: function() {
        return Users.find().fetch()
    }
});