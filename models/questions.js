const { correctAnswers, quizQuestions } = require('../data');

module.exports = {
  getCorrectAnswers,
  getQuizQuestions,
}

function getCorrectAnswers() {
  return Promise.resolve(correctAnswers);
}

function getQuizQuestions() {
  return Promise.resolve(quizQuestions);
}
