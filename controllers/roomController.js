const Room = require('../models/Room');

exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRoom = async (req, res) => {

    const room = new Room(req.body);
    try {
        console.log(req.body)
        const savedRoom = await room.save();
        res.status(201).json(savedRoom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Additional methods for updating and deleting rooms
