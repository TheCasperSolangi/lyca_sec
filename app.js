const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(cors());
// DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/countries', require('./routes/countryRoutes'));

module.exports = app;
