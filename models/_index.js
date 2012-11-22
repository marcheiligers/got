var tow = require('../models/tow_card')
module.exports = {
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