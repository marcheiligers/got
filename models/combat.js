(function(global, undefined) {

  function Combat(attackingArmy, defendingArmy) {
    this.attackingArmy = attackingArmy
    this.defendingArmy = defendingArmy
  }

  Combat.prototype.attackIsSuccessful = function(){
      return this.attackingArmy.attackValueVs(this.defendingArmy.area) - this.defendingArmy.defenceValue() >= 0
  }

    module.exports = Combat

})(this)