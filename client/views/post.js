FlowRouter.route('/post', {
    action: function() {
        BlazeLayout.render('layout', { main: 'post' });
    }
});

Template.post.events({
    'submit #create-post-form'(event) {
        event.preventDefault();

        // Get form values
        const target = event.target;
        const title = target.title.value;
        const content = target.content.value;

        // Insert the new post into the collection
        Posts.insert({
            createdAt: new Date(),
            title,
            content
        });

        // Clear the form
        target.title.value = '';
        target.content.value = '';

        alert('The post is successfully inserted!')
        FlowRouter.go('/');
    },
});


