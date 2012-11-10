(function(global, undefined) {
  var ToW = require('../models/tow_card.js')

  var States = {
    INITIALIZED: 1,
    HOUSE_CARDS_PLAYED: 2,
    TIDES_OF_WAR_DRAWN: 3,
    RESOLVED: 4
  }

  function Combat(attackingArmy, defendingArmy, attackerIsHigherOnTrack) {
    this.attackingArmy = attackingArmy
    this.defendingArmy = defendingArmy
    this.attackerIsHigherOnTrack = attackerIsHigherOnTrack

    this.state = States.INITIALIZED
  }

  Combat.prototype.setHouseCards = function(attackerCard, defenderCard) {
    if(this.state == States.TIDES_OF_WAR_DRAWN) {
      throw "Cannot set house cards combat because state is " + this.state
    }

    this.attackerHouseCard = attackerCard
    this.defenderHouseCard = defenderCard

    this.state = States.HOUSE_CARDS_PLAYED
  }

  Combat.prototype.drawTidesOfWar = function() {
    var deck = new ToW.Deck()
    console.log
    this.attackerToWCard = deck.draw()
    this.defenderToWCard = deck.draw()

    this.state = States.TIDES_OF_WAR_DRAWN
  }

  Combat.prototype.attackIsSuccessful = function(){
    if(this.state != States.TIDES_OF_WAR_DRAWN) {
      throw "Cannot resolve combat because state is " + this.state
    }

    this.state = States.RESOLVED

    var attackValue = this.attackingArmy.attackValueVs(this.defendingArmy.area) +
      this.attackerHouseCard.combatValue +
      this.attackerToWCard.combatValue

    var defenceValue = this.defendingArmy.defenceValue() +
      this.defenderHouseCard.combatValue +
      this.defenderToWCard.combatValue

    return attackValue > defenceValue || (attackValue == defenceValue && this.attackerIsHigherOnTrack)
  }

  module.exports = Combat

})(this)