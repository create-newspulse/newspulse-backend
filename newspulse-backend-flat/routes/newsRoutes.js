const express = require('express');
const router = express.Router();
const { getAllNews, createNews } = require('../controllers/newsController');

router.get('/', getAllNews);
router.post('/', createNews);

module.exports = router;
