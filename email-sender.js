const nodemailer = require('nodemailer');

// Create a transporter object with your email configuration
const transporter = nodemailer.createTransport({
  service: 'your_email_service',
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password',
  },
});

// Define the email options
const mailOptions = {
  from: 'your_email_address',
  to: 'recipient_email_address',
  subject: 'Testing Nodemailer',
  text: 'Hello, this is a test email from Nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
