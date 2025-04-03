
const nodemailer = require('nodemailer');
const moment = require('moment-timezone');
const User = require('../models/user-model');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sender-testing-email', 
    pass: 'sender-app-password',          
  },
});

async function sendEmail(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) return console.log('User not found');

    const senderTimeZone = "Asia/Kolkata";
    const senderTime = moment().tz(senderTimeZone).format('YYYY-MM-DD HH:mm:ss');

    const recipientTime = moment().tz(user.timeZone).format('YYYY-MM-DD HH:mm:ss');

      const mailOptions = {
        from: 'sender-testing-email',
        to: user.email,
        subject: 'time zone email',
        text: `Hello!
      
      Your local time: ${recipientTime}
      Sender's local time: ${senderTime}
      
      Best regards,
      Your Team`,
      };
    

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmail };