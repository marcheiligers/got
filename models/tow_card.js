(function(global, undefined) {
  function ToWCard(combatValue, hasSword, hasFort, hasSkull) {
    this.combatValue = combatValue
    this.hasSword = hasSword
    this.hasFort = hasFort
    this.hasSkull = hasSkull
  }

  function ToWDeck() {
    var cards = this.cards = []

    for(var i = 0; i < 8; ++i) {
      cards.push(new ToWCard(0))
    }

    for(var i = 0; i < 4; ++i) {
      cards.push(new ToWCard(2))
    }

    for(var i = 0; i < 2; ++i) {
      cards.push(new ToWCard(3))
    }

    for(var i = 0; i < 4; ++i) {
      cards.push(new ToWCard(1, true))
    }

    for(var i = 0; i < 4; ++i) {
      cards.push(new ToWCard(1, false, true))
    }

    for(var i = 0; i < 2; ++i) {
      cards.push(new ToWCard(0, false, false, true))
    }
  }

  ToWDeck.prototype.draw = function() {
    var index = Math.round(Math.random() * this.cards.length),
        card = this.cards.splice(index, 1)[0]
    return card
  }

  module.exports = {
    Card: ToWCard,
    Deck: ToWDeck
  }
})(this)