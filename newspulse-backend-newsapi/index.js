const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const newsRoutes = require('./routes/newsRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.get('/api/health', (req, res) => res.send('API is healthy!'));

app.use('/api/news', newsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Mongo error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
