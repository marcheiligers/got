var Game = require('../models/_index.js')
var ut = Game.Unit.UNIT_TYPE
var mockRandom = require('../tests/helpers/mock_random.js').mockRandom

exports['victoriousness scenario: units wins it'] = function(test) {
  var map = new Game.Map()
  map.initialize();

  var attacker = new Game.Army(map.areas['Winterfell'])
  attacker.addUnit(new Game.Unit(ut.KNIGHT))

  var defender = new Game.Army(map.areas['Karhold'])
  defender.addUnit(new Game.Unit(ut.FOOTMAN))

  var combat = new Game.Combat(attacker, defender)
  combat.setHouseCards(new Game.HouseCard("Igor", 0), new Game.HouseCard("Moo", 0))

  // The first two cards are both 0
  mockRandom(1, function() {
    combat.drawTidesOfWar()
  })

  test.ok(combat.attackIsSuccessful())

  test.done()
}

exports['victoriousness scenario: house cards win it'] = function(test) {
  var map = new Game.Map()
  map.initialize();

  var attacker = new Game.Army(map.areas['Winterfell'])
  attacker.addUnit(new Game.Unit(ut.FOOTMAN))

  var defender = new Game.Army(map.areas['Karhold'])
  defender.addUnit(new Game.Unit(ut.FOOTMAN))

  var combat = new Game.Combat(attacker, defender)
  combat.setHouseCards(new Game.HouseCard("Igor", 1), new Game.HouseCard("Moo", 0))

  // The first two cards are both 0
  mockRandom(1, function() {
    combat.drawTidesOfWar()
  })

  test.ok(combat.attackIsSuccessful())

  test.done()
}

exports['victoriousness scenario: track position wins it'] = function(test) {
  var map = new Game.Map()
  map.initialize();

  var attacker = new Game.Army(map.areas['Winterfell'])
  attacker.addUnit(new Game.Unit(ut.FOOTMAN))

  var defender = new Game.Army(map.areas['Karhold'])
  defender.addUnit(new Game.Unit(ut.FOOTMAN))

  var combat = new Game.Combat(attacker, defender, true)
  combat.setHouseCards(new Game.HouseCard("Igor", 0), new Game.HouseCard("Moo", 0))

  // The first two cards are both 0
  mockRandom(1, function() {
    combat.drawTidesOfWar()
  })

  test.ok(combat.attackIsSuccessful())

  test.done()
}

exports['victoriousness scenario: tides of war wins it'] = function(test) {
  var map = new Game.Map()
  map.initialize();

  var _draw = Game.ToWDeck.prototype.draw,
      val = 1

  Game.ToWDeck.prototype.draw = function() {
    return new Game.ToWCard(val--)
  }

  var attacker = new Game.Army(map.areas['Winterfell'])
  attacker.addUnit(new Game.Unit(ut.FOOTMAN))

  var defender = new Game.Army(map.areas['Karhold'])
  defender.addUnit(new Game.Unit(ut.FOOTMAN))

  var combat = new Game.Combat(attacker, defender, true)
  combat.setHouseCards(new Game.HouseCard("Igor", 0), new Game.HouseCard("Moo", 0))

  combat.drawTidesOfWar()
  test.ok(combat.attackIsSuccessful())

  Game.ToWDeck.prototype.draw = _draw

  test.done()
}

  // var wh = new Game.Army(map.areas['White Harbour'])
  // wh.addUnit(new Game.Unit(ut.FOOTMAN))


  // var combat = new Game.Combat(wf, kh)

  // test.ok(combat.attackIsSuccessful())

  // combat = new Game.Combat(kh, wf)
  // test.ok(combat.attackIsSuccessful())

  // combat = new Game.Combat(wh, wf)
  // test.ok(!combat.attackIsSuccessful())

  // combat = new Game.Combat(wf, wh)
  // test.ok(combat.attackIsSuccessful())

  // combat = new Game.Combat(wh, kh)
  // test.ok(!combat.attackIsSuccessful())

  // combat = new Game.Combat(kh, wh)
  // test.ok(combat.attackIsSuccessful())
