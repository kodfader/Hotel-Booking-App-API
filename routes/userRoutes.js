const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Additional routes for user management

module.exports = router;
