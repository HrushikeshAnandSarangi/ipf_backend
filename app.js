const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const membershipRoutes = require('./routes/membershipRoutes');
const contributeRoutes = require('./routes/contributeRoutes');

const app = express();
app.use(cors('*'));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/membership', membershipRoutes);
app.use('/contribute', contributeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
