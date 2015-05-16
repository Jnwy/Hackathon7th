var express = require('express');
var router = express.Router();

/* GET material page. */
router.get('/', function(req, res, next) {
  res.render('hungry', { title: '肚子餓惹' });
});

module.exports = router;
