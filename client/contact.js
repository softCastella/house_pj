FlowRouter.route('/contact', {
    action: function() {
        BlazeLayout.render('layout', {main:'contact'});
    }
})