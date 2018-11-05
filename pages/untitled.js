function getFastestCar(garage) {
	var listsOfSpeeds = garage.map(Obj => Obj.maxSpeed);
	var compare = Math.max(listsOfSpeeds);
	for (var i = 0; i <= garage.length; i++) {
		if (compare === garage[i].maxSpeed) {
			return garage[i];
		}
	}
}