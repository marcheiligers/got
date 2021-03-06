var Game = require('../models/_index.js')
var ut = Game.Unit.UNIT_TYPE

exports['raidabilitiness'] = function(test) {
	var map = new Game.Map()
  
	var army = new Game.Army(map.areas['Winterfell'])
  army.addUnit(new Game.Unit(ut.FOOTMAN))

  // TODO: more complete raidabilitiness
  test.ok(army.canRaid(map.areas['White Harbour']))
  test.ok(!army.canRaid(map.areas['The Shivering Sea']))
  test.ok(!army.canRaid(map.areas['White Harbour Harbour']))

  army = new Game.Army(map.areas['Karhold'])
  army.addUnit(new Game.Unit(ut.FOOTMAN))

  test.ok(!army.canRaid(map.areas['White Harbour']))

  army = new Game.Army(map.areas['The Narrow Sea'])
  army.addUnit(new Game.Unit(ut.FOOTMAN))

  test.ok(army.canRaid(map.areas['The Shivering Sea']))
  test.ok(!army.canRaid(map.areas['Karhold']))
  test.ok(army.canRaid(map.areas['White Harbour']))
  test.ok(army.canRaid(map.areas['White Harbour Harbour']))

  //Test token army
  army = new Game.Army(map.areas['Winterfell'])
  test.ok(!army.canRaid(map.areas['White Harbour']))

  test.done()
}

exports['attackiness'] = function(test){
  var map = new Game.Map()
  
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

exports['tokiness'] = function(test){
  var map = new Game.Map()
  
  var army = new Game.Army(map.areas['Winterfell'])
  test.ok(army.isToken())

  army.addUnit(new Game.Unit(ut.FOOTMAN))
  test.ok(!army.isToken())

  test.done()
}
