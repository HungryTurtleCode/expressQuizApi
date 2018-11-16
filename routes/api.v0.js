const express = require('express');
const router = express.Router();
const { getTurtleData } = require('../models/facts');
const { getCorrectAnswers, getQuizQuestions } = require('../models/questions');

// ourapi.com/api/
router.get('/', (req, res) => {
  res.send('Api router');
});

router.get('/data', dataHandler)
router.get('/questions', questionHandler)
router.get('/answers', answerHandler)

module.exports = router;

function dataHandler(req, res) {
  getTurtleData()
    .then(data => {
      res.json(data);
    });
}

function questionHandler(req, res) {
  getQuizQuestions()
    .then(data => {
      res.json(data);
    });
}

function answerHandler(req, res) {
  getCorrectAnswers()
    .then(data => {
      res.json(data);
    });
}
