var express = require('express');
var router = express.Router();

/* GET home page. */
const games = require('../data/games.json');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', games });
});

module.exports = router;
