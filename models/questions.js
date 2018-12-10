const { correctAnswers, quizQuestions } = require('../data');
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question_type: String,
  question_text: String,
  question_possibilities: [{
    answer: String
  }],
  correct_answer: String,
  update_at: { type: Date, default: Date.now }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = {
  Question,
  getCorrectAnswers,
  getQuizQuestions,
}

function getCorrectAnswers() {
  return Question.find()
    .then(data => {
      return data.reduce((agg, val) => {
        agg[val._id] = val.correct_answer;
        return agg;
      }, {});
    });
}

function getQuizQuestions() {
  return Question.find()
    .then(data => {
      return data.map(q => {
        const data = q.toObject();
        const answer = data.correct_answer;
        delete data.correct_answer;
        data.question_possibilities.push({answer});
        data.question_possibilities = data.question_possibilities
          .map(q => ({answer: q.answer}));
        shuffle(data.question_possibilities);
        return data;
      });
    });
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}















