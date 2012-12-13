(function(global, undefined) {

  var MarchPhase = require('../models/march_phase')

  function RaidPhase(game) {
    this.game = game
  }

  RaidPhase.prototype.update = function(orders) {
  }

  RaidPhase.prototype.isComplete = function(){
    return true
  }

  RaidPhase.prototype.nextPhase = function(){
    return MarchPhase
  }

  module.exports = RaidPhase
})(this)