var GoT = require('../models/_index.js')
//var ut = Game.Unit.UNIT_TYPE

exports['orders_completiness'] = function(test){

  var alice = new GoT.Player('Alice', GoT.House.Baratheon)
  var bob = new GoT.Player('Bob', GoT.House.Starke)

  var game = new GoT.Game([alice,bob])	

  var op = new GoT.OrdersPhase(game)

  console.log(op)

  op.update({})
  test.ok(!op.isComplete())

  op.update({})
  test.ok(op.isComplete())

  test.done()
}