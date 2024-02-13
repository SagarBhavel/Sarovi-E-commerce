const mongoose = require('mongoose');

// Define the MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/your-database-name';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
