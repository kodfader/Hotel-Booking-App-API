const express = require('express');
const { createBooking } = require('../controllers/bookingController');
const router = express.Router();

router.post('/', createBooking);

// Additional routes for retrieving and managing bookings

module.exports = router;
