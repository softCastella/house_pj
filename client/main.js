Posts = new Mongo.Collection('posts');

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('layout', {main:'main'});
    }
})

Template.main.helpers({
    posts: function() {
        return Posts.find().fetch()
    }
});
