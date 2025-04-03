
const mongoose = require('mongoose');

const TIME_ZONES = [
  "Africa/Cairo", "Africa/Johannesburg", "Africa/Lagos", "Africa/Nairobi",
  "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
  "America/Toronto", "America/Mexico_City", "America/Sao_Paulo", "America/Argentina/Buenos_Aires",
  "Asia/Dubai", "Asia/Kolkata", "Asia/Shanghai", "Asia/Tokyo",
  "Asia/Bangkok", "Asia/Singapore", "Asia/Seoul", "Asia/Manila",
  "Australia/Sydney", "Australia/Melbourne", "Australia/Perth",
  "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Rome",
  "Europe/Madrid", "Europe/Moscow", "Europe/Istanbul"
];

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  timeZone: {
    type: String,
    enum: TIME_ZONES, 
    required: true
  }
});

module.exports= mongoose.model('User', userSchema);

