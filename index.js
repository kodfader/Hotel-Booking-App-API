const express = require('express');
const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');
const bcrypt = require('bcrypt');
const { authMiddleware } = require('./middlewares/authMiddleware');

const app = express();
connectDB();
app.use(express.json());

app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', authMiddleware, bookingRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
const HOST = 'http://localhost:'
app.listen(PORT, () => console.log(`Server running on ${HOST}${PORT}`));
