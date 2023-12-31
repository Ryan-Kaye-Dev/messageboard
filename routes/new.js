// routes/new.js

var express = require('express');
var router = express.Router();

/* GET new message form. */
router.get('/', function(req, res, next) {
  console.log('Reached the /new route');
  res.render('form', { title: 'New Message' });
});

module.exports = router;
