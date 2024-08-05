FlowRouter.route('/about', {
    action: function() {
        BlazeLayout.render('layout', {main:'about'});
    }
})