const axios = require('axios');
const News = require('../models/News');

exports.fetchNews = async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${apiKey}`
    );

    const fetched = response.data.articles.map((item) => ({
      title: item.title,
      summary: item.description || '',
      content: item.content || '',
      category: 'General',
      language: 'English',
      author: item.source.name || 'Google News',
      image: item.urlToImage || '',
      createdAt: new Date(item.publishedAt),
    }));

    const saved = await News.insertMany(fetched, { ordered: false });
    res.status(201).json({ inserted: saved.length });
  } catch (err) {
    res.status(500).json({ error: 'Fetch failed', details: err.message });
  }
};
