var Game = require('../models/map')

exports['neibourliness'] = function(test) {
  var map = new Game.Map();
  map.initialize();
  test.equal(map.areas['Winterfell'].isNeighbour(map.areas['White Harbour']), true)
  test.done()
};

exports['non-neibourliness'] = function(test) {
  var map = new Game.Map();
  map.initialize();
  test.equal(map.areas['Karhold'].isNeighbour(map.areas['White Harbour']), false)
  test.done()
};

exports['landliness'] = function(test) {
  var map = new Game.Map();
  map.initialize();
  test.equal(map.areas['Winterfell'].isLand(), true)
  test.equal(map.areas['The Shivering Sea'].isLand(), false)
  test.equal(map.areas['White Harbour Harbour'].isLand(), false)
  test.done()
};

exports['harbourliness'] = function(test) {
  var map = new Game.Map();
  map.initialize();
  test.equal(map.areas['Winterfell'].isHarbour(), false)
  test.equal(map.areas['The Shivering Sea'].isHarbour(), false)
  test.equal(map.areas['White Harbour Harbour'].isHarbour(), true)
  test.done()
};

exports['sealiness'] = function(test) {
  var map = new Game.Map();
  map.initialize();
  test.equal(map.areas['Winterfell'].isSea(), false)
  test.equal(map.areas['The Shivering Sea'].isSea(), true)
  test.equal(map.areas['White Harbour Harbour'].isSea(), false)
  test.done()
};

exports['raidabilitiness'] = function(test) {
  var map = new Game.Map();
  map.initialize();
  // TODO: more complete raidabilitiness
  test.equal(map.areas['Winterfell'].canRaid(map.areas['White Harbour']), true)
  test.equal(map.areas['Winterfell'].canRaid(map.areas['The Shivering Sea']), false)
  test.equal(map.areas['Winterfell'].canRaid(map.areas['White Harbour Harbour']), false)

  test.equal(map.areas['Karhold'].canRaid(map.areas['White Harbour']), false)

  test.equal(map.areas['The Narrow Sea'].canRaid(map.areas['The Shivering Sea']), true)
  test.equal(map.areas['The Narrow Sea'].canRaid(map.areas['Karhold']), false)
  test.equal(map.areas['The Narrow Sea'].canRaid(map.areas['White Harbour']), true)
  test.equal(map.areas['The Narrow Sea'].canRaid(map.areas['White Harbour Harbour']), true)
  test.done()
};