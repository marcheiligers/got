var GoT = require('../models/_index.js')

exports['game_continuitiness'] = function(test){

  var alice = new GoT.Player('Alice', GoT.House.Baratheon)
  var bob = new GoT.Player('Bob', GoT.House.Starke)

  var game = new GoT.Game([alice,bob])	

  //Alice and Bob place order (empty for now)
  game.continue({})
  game.continue({})

  //Empty raid phase
  game.continue({})  

  test.ok(game.gameover)

  test.done()
}