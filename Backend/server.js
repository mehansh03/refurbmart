const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const laptopRoutes = require('./routes/laptopRoutes');
const cors = require('cors');
require('./models/user');
require('./models/Laptop');


require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api/users', userRoutes);
app.use('/api/laptops', laptopRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
