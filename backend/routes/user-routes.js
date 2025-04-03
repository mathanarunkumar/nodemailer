
const express = require('express');
const router = express.Router();

// exported controlleres
const userController = require('../controller/user- controller')
const emailController = require('../controller/email-controller')

router.post("/adduser",userController.usersAdd)

router.post('/send-email', async (req, res) => {
    try {
      const { userId } = req.body;
  
      if (!userId) {
        return res.status(400).json({ error: "user id is required" });
      }
  
      await emailController.sendEmail(userId);
      res.json({ message: 'email sended successfully' });
    } catch (error) {
      console.error(' Error in route:', error);
      
      res.status(500).json({ error: error.message });
    }
  });;

module.exports = router;