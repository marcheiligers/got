(function(global, undefined) {
	
  function Player(name, house) {
    this.name = name
    this.house = house
    this.cards = house.card.slice(0)
    this.thronePosition = house.thronePosition
    this.bladePosition = house.bladePosition
    this.ravenPosition = house.ravenPosition
    this.supply = house.supply
    this.keeps = house.keeps   
  }

  module.exports = Player
})(this)