FlowRouter.route('/contact', {
    action() {
        BlazeLayout.render('layout', { main: 'contact' });
    }
});

// Create a reactive variable to manage the submitted state
Template.contact.onCreated(function() {
    this.submitted = new ReactiveVar(false);
});

Template.contact.helpers({
    submitted() {
        return Template.instance().submitted.get();
    }
});

Template.contact.events({
    'submit #contact-form'(event, instance) {
        event.preventDefault();

        // Get form values
        const target = event.target;
        const name = target.name.value;
        const email = target.email.value;
        const message = target.message.value;

        // Prepare form data
        const formData = {
            name,
            email,
            message
        };

        // Send form data to server (e.g., via a Meteor method or an HTTP request)
        Meteor.call('submitContactForm', formData, (error, result) => {
            if (error) {
                console.error('Form submission failed:', error);
            } else {
                console.log('Form Data Submitted:', formData);
                instance.submitted.set(true);
            }
        });

        // Optionally clear the form
        target.name.value = '';
        target.email.value = '';
        target.message.value = '';
    }
});
