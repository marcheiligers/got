  (function(global, undefined) {

  var RaidPhase = require('../models/raid_phase')

  function OrdersPhase(game)
  {
    this.game = game
    this.orders = []
  }

  OrdersPhase.prototype.update = function(orders)
  {
    this.orders.push(orders)
  }

  OrdersPhase.prototype.isComplete = function(){
    return this.orders.length == this.game.players.length
  }

  OrdersPhase.prototype.nextPhase = function(){
    return RaidPhase;
  }

  module.exports = OrdersPhase

})(this)

