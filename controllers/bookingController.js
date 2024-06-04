const Booking = require('../models/Booking');
const Room = require('../models/Room');

exports.createBooking = async (req, res) => {

    const booking = new Booking(req.body);
    console.log(booking)

    try {
        const room = await Room.findById(booking.room);
        if (!room.isAvailable) {
            return res.status(400).json({ message: 'Room is not available' });
        }
        room.isAvailable = false;
        await room.save();
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Additional methods for retrieving and managing bookings
