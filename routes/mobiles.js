var express = require('express');
var router = express.Router();

/* GET mobiles page. */
router.get('/', function(req, res, next) {
  res.render('mobiles', { title: 'Search Results mobiles' });
});

module.exports = router;