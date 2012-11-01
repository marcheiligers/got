var Game = require('../models/_index.js')

exports['raidabilitiness'] = function(test) {
  console.log(Game)
	var map = new Game.Map();
  map.initialize();

	var army = new Game.Army(map.areas['Winterfell']);    
  // TODO: more complete raidabilitiness
  test.equal(army.canRaid(map.areas['White Harbour']), true)
  test.equal(army.canRaid(map.areas['The Shivering Sea']), false)
  test.equal(army.canRaid(map.areas['White Harbour Harbour']), false)

  army = new Game.Army(map.areas['Karhold']);
  test.equal(army.canRaid(map.areas['White Harbour']), false)

  army = new Game.Army(map.areas['The Narrow Sea']);
  test.equal(army.canRaid(map.areas['The Shivering Sea']), true)
  test.equal(army.canRaid(map.areas['Karhold']), false)
  test.equal(army.canRaid(map.areas['White Harbour']), true)
  test.equal(army.canRaid(map.areas['White Harbour Harbour']), true)
  test.done()
};