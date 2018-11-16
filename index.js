const express = require('express');

const app = express();

app.use(express.static('../TurtleFactQuiz'));

app.get('/test', (req, res, next) => {
  res.send('Hello world');
});

app.use((req, res) => {
  res.status(404)
    .send('Unknown Request');
});

app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
