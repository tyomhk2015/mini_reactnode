const functions = require('firebase-functions');
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const app = express();

app.post('/register', async (req, res) => {
  const metaData = {
    url: req.body.url,
    title: null,
    description: null,
    image: null,
    createdAt: Date.now(),
    genre: req.body.genre,
  };

  try {
    const response = await axios.get(req.body.url);
    const html = response.data;
    const $ = cheerio.load(html);
    metaData.title = $('meta[property="og:title"]').attr('content');
    metaData.description = $('meta[property="og:description"]').attr('content');
    metaData.image = $('meta[property="og:image"]').attr('content');
    metaData.image = $('meta[property="og:image"]').attr('content');
  } catch (error) {
    return;
  }

  res.json(metaData);
});

exports.api = functions.https.onRequest(app);
