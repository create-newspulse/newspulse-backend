const express = require('express');
const { fetchNews } = require('../controllers/fetchController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/fetch-news', protect, fetchNews);

module.exports = router;
