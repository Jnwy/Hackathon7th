var express = require('express');
var router = express.Router();

/* GET material page. */
router.get('/', function(req, res, next) {
  res.render('material', { title: '巫砲小隊' });
});

module.exports = router;
