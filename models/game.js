(function(global, undefined) {
  var Map = require('../models/map.js')
  var OrdersPhase = require('../models/orders_phase.js')

  var States = {
    INITIALIZED: 1,
    HOUSE_CARDS_PLAYED: 2,
    TIDES_OF_WAR_DRAWN: 3,
    RESOLVED: 4
  }  

  function Game(players) {
    this.players = players
    this.phase = new OrdersPhase(this)
    this.map = new Map()
  }

  Game.prototype.continue = function(args)
  {
  		this.phase.update(args);

  		var nextPhase = this.phase.nextPhase()

  		console.log(nextPhase)

  		if(this.phase.isComplete())
  			this.phase = new nextPhase(this)

  		if(nextPhase == VictoryPhase )
  			this.gameover = true
  }

  function VictoryPhase() {}

  module.exports = {
  	Game:Game, 
  	VictoryPhase:VictoryPhase
  }

})(this)

