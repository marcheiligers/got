var tow = require('../models/tow_card')
var game = require('../models/game')

module.exports = {
	Game: game.Game,
	VictoryPhase: game.VictoryPhase,	
	OrdersPhase: require('../models/orders_phase'),
	RaidPhase: require('../models/raid_phase'),	
	Map: require('../models/map'),
	Army: require('../models/army'),
	Unit: require('../models/unit'),
  	Combat: require('../models/combat'),
	HouseCard: require('../models/house_card'),
	Player: require('../models/player'),
	House: require('../models/house'),	
  	ToWCard: tow.Card,
  	ToWDeck: tow.Deck,
}