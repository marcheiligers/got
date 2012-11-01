var Game = require('../models/_index.js')
var ut = Game.Unit.UNIT_TYPE

exports['victoriousness'] = function(test) {
  var map = new Game.Map()
  map.initialize();

  var wf = new Game.Army(map.areas['Winterfell'])
  wf.addUnit(new Game.Unit(ut.FOOTMAN))
  wf.addUnit(new Game.Unit(ut.KNIGHT))
  wf.addUnit(new Game.Unit(ut.SIEGE_ENGINE))

  var kh = new Game.Army(map.areas['Karhold'])
  kh.addUnit(new Game.Unit(ut.FOOTMAN))
  kh.addUnit(new Game.Unit(ut.KNIGHT))
  kh.addUnit(new Game.Unit(ut.SIEGE_ENGINE))

  var wh = new Game.Army(map.areas['White Harbour'])
  wh.addUnit(new Game.Unit(ut.FOOTMAN))
 

  var combat = new Game.Combat(wf, kh)
  test.equal(combat.attackIsSuccessful(), true)

  combat = new Game.Combat(kh, wf)
  test.equal(combat.attackIsSuccessful(), true) 

  combat = new Game.Combat(wh, wf)
  test.equal(combat.attackIsSuccessful(), false) 

    combat = new Game.Combat(wf, wh)
  test.equal(combat.attackIsSuccessful(), true)   

    combat = new Game.Combat(wh, kh)
  test.equal(combat.attackIsSuccessful(), false) 

    combat = new Game.Combat(kh, wh)
  test.equal(combat.attackIsSuccessful(), true)  

  test.done()
}