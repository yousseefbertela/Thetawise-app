import express from 'express';
const router = express.Router();

// @route   GET /api/users
// @desc    Get all users
// @access  Public (you should add auth middleware later)
router.get('/', async (req, res) => {
  try {
    res.json({ message: 'Get all users endpoint' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST /api/users
// @desc    Create a new user
// @access  Public (you should add auth middleware later)
router.post('/', async (req, res) => {
  try {
    res.json({ message: 'Create user endpoint', data: req.body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;