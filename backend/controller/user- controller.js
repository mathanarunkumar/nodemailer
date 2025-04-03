const User = require('../models/user-model');


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

exports.usersAdd = async(req,res,next) =>  {
    try {
        const { email, timeZone } = req.body;
    
        if (!TIME_ZONES.includes(timeZone)) {
          return res.status(400).json({ error: "invalid time zone" });
        }
    
        const newUser = new User({ email, timeZone });
        await newUser.save();
        res.json({ message: "user added successfully", user: newUser });
      } catch (error) {
        console.log("err",error)
        res.status(500).json({ error: error.message });
      }
}


