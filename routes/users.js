const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, getAdmin } = require('../data/users');

// GET /api/users
router.get('/', (req, res) => {
  res.json({ success: true, data: getAllUsers() });
});

// GET /api/users/admin
router.get('/admin', (req, res) => {
  res.json({ success: true, data: getAdmin() });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, error: 'User not found' });
  }
  res.json({ success: true, data: user });
});

module.exports = router;


