const express = require('express');
const router = express.Router();

router.use('/api', require('./api.v0.js'));

router.get('/test', (req, res) => {
  res.send('Test route');
});

module.exports = router;
