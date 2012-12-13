var tow = require('../models/tow_card')
var phases = {
  VictoryPhase: require('../models/victory_phase'),
  OrdersPhase: require('../models/orders_phase'),
  RaidPhase: require('../models/raid_phase')
}

console.log(phases)

module.exports = {
	Game: require('../models/game'),
	VictoryPhase: phases.VictoryPhase,
	OrdersPhase: phases.OrdersPhase,
	RaidPhase: phases.RaidPhase,
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