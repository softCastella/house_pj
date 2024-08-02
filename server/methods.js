// this is server.

Meteor.methods({
    getUsers: function() {
        return Users.find().fetch();
    }
});

// 통신해보고 