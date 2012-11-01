(function(global, undefined) {
	UNIT_TYPE = {
		FOOTMAN: 0,
		KNIGHT: 1,
		SIEGE_ENGINE: 2,
		SHIP: 3
	}

	function Unit(type){
		this.type = type		
	}

	Unit.prototype.attackValueVs = function(area){
		switch(this.type){
			case UNIT_TYPE.FOOTMAN:
			return 1
			case UNIT_TYPE.KNIGHT:
			return 2
			case UNIT_TYPE.SIEGE_ENGINE:
			return area.hasKeep()? 4: 0
			case UNIT_TYPE.SHIP:
			return 1
		}
	}

	Unit.prototype.defenceValue = function(){
		switch(this.type){
			case UNIT_TYPE.FOOTMAN:
			return 1
			case UNIT_TYPE.KNIGHT:
			return 2
			case UNIT_TYPE.SIEGE_ENGINE:
			return 0
			case UNIT_TYPE.SHIP:
			return 1
		}  	
	} 

	Unit.UNIT_TYPE = UNIT_TYPE

	module.exports = Unit
})(this) 