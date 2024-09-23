const express = require('express');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');
const router = express.Router();

// Post a comment
router.post('/', auth, async (req, res) => {
  const { video, text } = req.body;
  try {
    const comment = new Comment({
      video,
      user: req.user.id,
      text
    });
    await comment.save();
    res.json(comment);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Get comments for a video
router.get('/:videoId', async (req, res) => {
  try {
    const comments = await Comment.find({ video: req.params.videoId }).populate('user', ['username']);
    res.json(comments);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
 