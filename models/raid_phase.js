(function(global, undefined) {

//IT IS BROKEN OVER HERE!!!!!!
  var Game = require('../models/game')

  console.log(Game)

  var VictoryPhase = Game.VictoryPhase;

  console.log(VictoryPhase)

  function RaidPhase(game)
  {
    this.game = game
  }

  RaidPhase.prototype.update = function(orders)
  {
  }

  RaidPhase.prototype.isComplete = function(){
    return true
  }

  RaidPhase.prototype.nextPhase = function(){
    return VictoryPhase
  }

  module.exports = RaidPhase
})(this)