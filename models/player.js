(function(global, undefined) {

  function Player(name, house) {
    this.name = name
    this.house = house
    this.cards = house.cards.slice(0)
    this.thronePosition = house.thronePosition
    this.bladePosition = house.bladePosition
    this.ravenPosition = house.ravenPosition
    this.armies = house.armies.slice(0)
  }

  module.exports = Player
})(this)