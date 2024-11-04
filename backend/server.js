const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/userRoutes')
const app = express();
app.use(express.json());
app.use(cors());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.log('MongoDB connection error:', err));
app.use('/api/users', routes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));