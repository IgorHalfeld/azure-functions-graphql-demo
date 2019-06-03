const axios = require('axios');

exports.getTopHeadlines = () =>
  axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=70cf925fa3164166b5e43695e625ee62');