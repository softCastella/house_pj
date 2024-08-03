FlowRouter.route('/edit/:postId', {
    action() {
        BlazeLayout.render('layout', { main: 'edit' });
    }
});

Template.edit.helpers({
    post() {
        const postId = FlowRouter.getParam('postId');
        return Posts.findOne(postId);
    }
});

Template.edit.events({
    'submit #edit-post-form'(event) {
        event.preventDefault();

        // Get form values
        const target = event.target;
        const postId = target.postId.value;
        const title = target.title.value;
        const content = target.content.value;

        // Update the existing post
        Posts.update(postId, {
            $set: {
                title,
                content,
                updatedAt: new Date(),
            }
        });

        alert('The post is successfully updated!');
        FlowRouter.go('/');
    },
});

Template.edit.onCreated(function () {
    //add your statement here
});

Template.edit.onRendered(function () {
    //add your statement here
});

Template.edit.onDestroyed(function () {
    //add your statement here
});

