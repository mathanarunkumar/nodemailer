const mongoose = require('mongoose');

const connectMongoDb = async () => {
  const mongoUri = process.env.connectingMongoDb; // Fallback for dev   || 'mongodb://0.0.0.0:27017/mydatabasers'

  if (!mongoUri) {
    throw new Error('MongoDB URI not found. Set connectingMongoDb in .env');
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  }
};

module.exports = connectMongoDb;