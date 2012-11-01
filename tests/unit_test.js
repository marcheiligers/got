var Game = require('../models/_index.js')
var ut = Game.Unit.UNIT_TYPE

exports['attackiness'] = function(test){
  var map = new Game.Map()
  map.initialize()
  
  test.equal(new Game.Unit(ut.FOOTMAN).attackValueVs(map.areas['Winterfell']), 1)
  test.equal(new Game.Unit(ut.KNIGHT).attackValueVs(map.areas['Winterfell']), 2)
  test.equal(new Game.Unit(ut.SIEGE_ENGINE).attackValueVs(map.areas['Winterfell']), 4)
  test.equal(new Game.Unit(ut.SIEGE_ENGINE).attackValueVs(map.areas['Karhold']), 0)
  test.equal(new Game.Unit(ut.SHIP).attackValueVs(map.areas['Winterfell']), 1)
  test.done()
}