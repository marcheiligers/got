(function(global, undefined) {
  AREA_TYPES = {
    LAND: 1,
    SEA: 2,
    HARBOUR: 3
  }

  KEEP_TYPE = {
    NONE: 0,
    CASTLE: 1,
    STRONGHOLD: 2
  }

  GARRISON_TYPE = {
    NEUTRAL: 1,
    HOME: 2
  }

  function Map() {
    this.areas = []
  }

  Map.prototype.initialize = function() {
    var areas = this.areas = {
      'Winterfell': new Area('Winterfell', AREA_TYPES.LAND, KEEP_TYPE.STRONGHOLD, 1, 1, new Garrison(GARRISON_TYPE.HOME, 2)),
      'White Harbour': new Area('White Harbour', AREA_TYPES.LAND, KEEP_TYPE.CASTLE, 0, 0),
      'White Harbour Harbour': new Area('White Harbour Harbour', AREA_TYPES.HARBOUR, KEEP_TYPE.NONE, 0, 0),
      'The Shivering Sea': new Area('The Shivering Sea', AREA_TYPES.SEA, KEEP_TYPE.NONE, 0, 0),
      'The Narrow Sea': new Area('The Narrow Sea', AREA_TYPES.SEA, KEEP_TYPE.NONE, 0, 0),
      'Karhold': new Area('Karhold', AREA_TYPES.LAND, KEEP_TYPE.NONE, 0, 1),
      'Moat Calin': new Area('Moat Calin', AREA_TYPES.LAND, KEEP_TYPE.CASTLE, 0, 0),
      'The Twins': new Area('The Twins', AREA_TYPES.LAND, KEEP_TYPE.NONE, 0, 1),
      'The Mountains of the Moon': new Area('The Mountains of the Moon', AREA_TYPES.LAND, KEEP_TYPE.NONE, 1, 0),
      'Crackclaw Point': new Area('Crackclaw Point', AREA_TYPES.LAND, KEEP_TYPE.CASTLE, 0, 0),
      'Harrenhal': new Area('Harrenhal', AREA_TYPES.LAND, KEEP_TYPE.CASTLE, 0, 1),
    }

    this.setNeighbours('Winterfell', ['White Harbour', 'The Shivering Sea', 'Karhold', 'Moat Calin'])
    this.setNeighbours('White Harbour', ['Winterfell', 'White Harbour Harbour', 'The Shivering Sea', 'The Narrow Sea', 'Moat Calin'])
    this.setNeighbours('White Harbour Harbour', ['White Harbour', 'The Narrow Sea'])
    this.setNeighbours('The Narrow Sea', 
      ['White Harbour', 'White Harbour Harbour', 'The Shivering Sea', 'Moat Calin', 'The Twins', 'The Mountains of the Moon', 'Crackclaw Point']
    )
    this.setNeighbours('The Shivering Sea', ['Winterfell', 'White Harbour', 'Karhold', 'The Narrow Sea'])
    this.setNeighbours('Karhold', ['Winterfell', 'The Shivering Sea'])
    this.setNeighbours('Moat Calin', ['Winterfell', 'The Narrow Sea', 'The Twins', 'White Harbour'])
    this.setNeighbours('The Twins', ['Moat Calin', 'The Narrow Sea', 'The Mountains of the Moon'])
    this.setNeighbours('The Mountains of the Moon', ['The Twins', 'The Narrow Sea', 'Crackclaw Point'])
    this.setNeighbours('Crackclaw Point', ['The Mountains of the Moon', 'The Narrow Sea', 'Harrenhal'])
    this.setNeighbours('Harrenhal', ['Crackclaw Point'])
  }

  Map.prototype.setNeighbours = function(name, neighbours) {
    var here = this.areas[name],
        areas = this.areas
    neighbours.forEach(function(area) {
      here.addNeighbour(areas[area])
    })
  }

  function Area(name, type, keep_type, number_of_barrels, number_of_crowns, garrison) {
    this.name = name
    this.type = type
    this.keep_type = keep_type
    this.number_of_barrels = number_of_crowns
    this.number_of_crowns = number_of_crowns
    this.garrison = garrison

    this.neighbours = []
  }

  Area.prototype.addNeighbour = function(neighbour) {
    this.neighbours.push(neighbour)
  }

  Area.prototype.isNeighbour = function(area) {
    return this.neighbours.indexOf(area) > -1
  }

  Area.prototype.isLand = function() {
    return this.type == AREA_TYPES.LAND
  }

  Area.prototype.isHarbour = function() {
    return this.type == AREA_TYPES.HARBOUR
  }

  Area.prototype.isSea = function() {
    return this.type == AREA_TYPES.SEA
  }

  Area.prototype.isCoastal = function() {
    if(this._isCoastal != undefined)
      return this._isCoastal

    if(this.isSea() || this.isHarbour()){
      return this._isCoastal = false
    }

    return this._isCoastal = this.neighbours.some(function(neighbour){
      return neighbour.isSea()
    })

    return this._isCoastal = false
  }

  Area.prototype.isLandLocked = function(){
    return !this.isCoastal()
  }

  Area.prototype.hasKeep = function(){
    return this.keep_type != KEEP_TYPE.NONE
  }  

  function Garrison(type, size) {
    this.type = type;
    this.size = size;
  }

  module.exports = Map;
})(this);