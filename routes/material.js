var express = require('express');
var router = express.Router();

/* GET material page. */
router.get('/', function(req, res, next) {
  res.render('material', { title: 'material' });
});

module.exports = router;
