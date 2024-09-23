const express = require('express');
const multer = require('multer');
const Video = require('../models/Video');
const auth = require('../middleware/auth');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage });

// Upload video
router.post('/upload', auth, upload.single('video'), async (req, res) => {
  const { title, description, tags } = req.body;
  try {
    const video = new Video({
      title,
      description,
      tags: tags.split(','),
      url: req.file.path,
      user: req.user.id
    });
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().populate('user', ['username']);
    res.json(videos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get video by ID
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate('user', ['username']);
    if (!video) return res.status(404).json({ msg: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;