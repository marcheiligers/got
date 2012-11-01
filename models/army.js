(function(global, undefined) {

  function Army(area) {
  	this.area = area;
  }

  Army.prototype.canRaid = function(toArea) {
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

  module.exports = Army;

})(this)