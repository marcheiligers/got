(function(global, undefined) {

  function Army(area) {
  	this.area = area
    this.units = []
  }

  Army.prototype.canRaid = function(toArea) {
    if(this.isToken())
      return false;
    
    if(!this.area.isNeighbour(toArea)) {
      return false
    }

    if(this.area.isLand() && !toArea.isLand()) {
      return false
    }

    if(this.area.isHarbour() && toArea.isLand()) {
      return false
    }

    return true
  }  

  Army.prototype.addUnit = function(unit){
    this.units.push(unit)
  }  

  Army.prototype.attackValueVs = function(area){
    var total = 0;
    this.units.forEach(function(unit){
      total+=unit.attackValueVs(area)
    })
    return total;
  }

  Army.prototype.defenceValue = function(){
     var total = 0;
    this.units.forEach(function(unit){
      total+=unit.defenceValue()
    })
    return total;
  } 

  Army.prototype.isToken = function(){
    return this.units.length==0
  }



  module.exports = Army

})(this)