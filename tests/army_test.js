var Game = require('../models/_index.js')
var ut = Game.Unit.UNIT_TYPE

exports['raidabilitiness'] = function(test) {
	var map = new Game.Map()
  map.initialize()

	var army = new Game.Army(map.areas['Winterfell'])
  // TODO: more complete raidabilitiness
  test.ok(army.canRaid(map.areas['White Harbour']))
  test.ok(!army.canRaid(map.areas['The Shivering Sea']))
  test.ok(!army.canRaid(map.areas['White Harbour Harbour']))

  army = new Game.Army(map.areas['Karhold'])
  test.ok(!army.canRaid(map.areas['White Harbour']))

  army = new Game.Army(map.areas['The Narrow Sea'])
  test.ok(army.canRaid(map.areas['The Shivering Sea']))
  test.ok(!army.canRaid(map.areas['Karhold']))
  test.ok(army.canRaid(map.areas['White Harbour']))
  test.ok(army.canRaid(map.areas['White Harbour Harbour']))
  test.done()
}

exports['attackiness'] = function(test){
  var map = new Game.Map()
  map.initialize()

  var army = new Game.Army(map.areas['Winterfell'])
  army.addUnit(new Game.Unit(ut.FOOTMAN))
  army.addUnit(new Game.Unit(ut.KNIGHT))
  army.addUnit(new Game.Unit(ut.SIEGE_ENGINE))
  army.addUnit(new Game.Unit(ut.SHIP))

  test.equal(army.attackValueVs(map.areas['Winterfell']), 8)
  test.equal(army.attackValueVs(map.areas['Karhold']), 4)
  test.equal(army.defenceValue(), 4)
  test.done()
}
