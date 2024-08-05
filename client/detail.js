FlowRouter.route('/detail/:postId', {
    action: function() {
        BlazeLayout.render('layout', {main:'detail'});
    }
})

Template.detail.helpers({
    post() {
        const postId = FlowRouter.getParam('postId');
        return Posts.findOne(postId);
    }
})