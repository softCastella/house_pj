Meteor.methods({
    submitContactForm(formData) {
        try {
            // Prepare the email content
            const to = 'jwjin@me.com';  // Replace with your email address
            const from = formData.email;
            const subject = `Contact Form Submission from ${formData.name}`;
            const text = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `;

            // Send the email
            Email.send({ to, from, subject, text });

            console.log('Form Data Received and Email Sent:', formData);
            return true;
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Meteor.Error('500', 'Error sending email');
        }
    }
});