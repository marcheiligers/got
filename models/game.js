(function(global, undefined) {
  var Map = require('../models/map')
  var Phases = require('../models/_phases')

  var States = {
    INITIALIZED: 1,
    HOUSE_CARDS_PLAYED: 2,
    TIDES_OF_WAR_DRAWN: 3,
    RESOLVED: 4
  }

  function Game(players) {
    this.players = players
    this.phase = new Phases.OrdersPhase(this)
    this.map = new Map()
  }

  Game.prototype.continue = function(args)
  {
  		this.phase.update(args)

  		var nextPhase = this.phase.nextPhase()

  		if(this.phase.isComplete())
  			this.phase = new nextPhase(this)

  		if(nextPhase == Phases.VictoryPhase)
  			this.gameover = true
  }

  module.exports = Game
})(this)

