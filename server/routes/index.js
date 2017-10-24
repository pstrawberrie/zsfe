var express = require('express');
var router = express.Router();

// Mock Data
const games = require('../data/games.json');
const edits = require('../data/edits.json');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    games,
    edits
  });
});

/* GET game page */
router.get('/:game', (req, res) => {

  // Match game
  function getGame(nick) {
    for(let i = 0; i < games.length; i++) {
      if(games[i].nickname === req.params.game)
        return games[i];
    }
  }
  const game = getGame(req.params.game);

  res.render('game', {
    title: game.game,
    game
  });

});

module.exports = router;
