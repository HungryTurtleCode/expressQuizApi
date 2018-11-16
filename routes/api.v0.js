const express = require('express');
const router = express.Router();

// ourapi.com/api/
router.get('/', (req, res) => {
  res.send('Api router');
});

module.exports = router;
