// this is server.

Meteor.methods({
    getPosts: function() {
        return Posts.find().fetch();
    }
});

// 통신해보고 