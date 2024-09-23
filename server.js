const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./Configration/db')
require('dotenv').config();
connectDB();
const app = express();
const port = process.env.PORT || 2020;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB


// Import Routes
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/video');
const commentRoutes = require('./routes/comment');

app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
