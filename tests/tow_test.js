var Game = require('../models/_index.js')
var mockRandom = require('../tests/helpers/mock_random.js').mockRandom

exports['drawiness'] = function(test) {
  var INDEX_FOR_TESTING = 15

  mockRandom(INDEX_FOR_TESTING, function() {
    var deck = new Game.ToWDeck(),
        card1 = deck.cards[INDEX_FOR_TESTING]

    test.equal(card1, deck.draw())
    test.equal(deck.cards.indexOf(card1), -1)
    test.notEqual(card1, deck.draw())
  })

  test.done()
}