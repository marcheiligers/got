var GoT = require('../models/_index.js')
console.log(GoT)

exports['game_continuitiness'] = function(test){

  var alice = new GoT.Player('Alice', GoT.House.Baratheon)
  var bob = new GoT.Player('Bob', GoT.House.Starke)

  var game = new GoT.Game([alice,bob])

  //Alice and Bob place order (empty for now)
  test.ok(game.phase instanceof GoT.OrdersPhase)
  game.continue({})
  test.ok(game.phase instanceof GoT.OrdersPhase)
  game.continue({})

  //Empty raid phase
  test.ok(game.phase instanceof GoT.RaidPhase)
  game.continue({})

  //Empty march phase
  game.continue({})

  test.ok(game.gameover)

  test.done()
}