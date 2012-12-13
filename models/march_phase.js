(function(global, undefined) {

  var VictoryPhase = require('../models/victory_phase')

  function MarchPhase(game) {
    this.game = game
  }

  MarchPhase.prototype.update = function(args) {
  }

  MarchPhase.prototype.isComplete = function(){
    return true
  }

  MarchPhase.prototype.nextPhase = function(){
    return VictoryPhase
  }

  module.exports = MarchPhase
})(this)