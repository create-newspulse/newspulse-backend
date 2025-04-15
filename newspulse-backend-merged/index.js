const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fetchRoutes = require('./routes/fetchRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', fetchRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'NewsPulse API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
