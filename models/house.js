(function(global, undefined) {
	
  var HouseCard = require('../models/house_card.js')
  console.log(HouseCard)

  //startingPositions[Throne, Blade, Raven, Barrels, Keeps]
  function House(name, cards, startingPositions, startingArmies) {
    this.name = name
    this.cards = cards
    this.thronePosition = startingPositions[0]
    this.bladePosition = startingPositions[1]
    this.ravenPosition = startingPositions[2]
    this.supply = startingPositions[3]
    this.keeps = startingPositions[4]
    this.areas = startingArmies.map(function(itm){itm.area})
    this.armies = startingArmies
  }

  House.Baratheon = new House('Baratheon', [new HouseCard('Stannis Baratheon',4)], [1,1,1,2,2], [])
  House.Starke = new House('Starke', [new HouseCard('Eddard Baratheon',4)],[2,2,2,1,1], [])

  module.exports = House
})(this)