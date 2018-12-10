const express = require('express');
const { startDb } = require('./db');

const app = express();

app.use(express.static('../TurtleFactQuiz'));
app.set('json spaces', 2);

app.use(require('./routes'));

app.use((req, res) => {
  res.status(404)
    .send('Unknown Request');
});

startDb()
  .once('open', () => {
    app.listen(8080, () => {
      console.log('App is listening on port 8080');
    });
  });
