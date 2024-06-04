const express = require('express');
const { getAllRooms, createRoom } = require('../controllers/roomController');
const router = express.Router();

router.get('/', getAllRooms);
router.post('/', createRoom);

// Additional routes for updating and deleting rooms

module.exports = router;
