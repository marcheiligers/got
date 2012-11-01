var Game = require('../models/_index.js')

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
