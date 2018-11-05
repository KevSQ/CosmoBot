

document.addEventListener("DOMContentLoaded", function() {
var instances = [{
	id: 1,
	store: "Test",
	item: "Sasdasdasdg",
	profile: "Cosmo",
	status: 1
}, {
	id: 2,
	store: "AnotherValue",
	item: "Sasdasdas",
	profile: "Value",
	status: 1
}, {
	id: 3,
	store: "AnotherValufgiyge",
	item: "S789das",
	profile: "Ro",
	status: 1
}, {
	id: 4,
	store: "AnotherValufgiyge",
	item: "S789das",
	profile: "Ro",
	status: 1	
}];

function appendInstances() {
	for (var i = 0; i < instances.length; i++) {

	}
	var storeOne = document.getElementById("StoreOne").innerHTML = instances[0].store.toUpperCase();
}

appendInstances();
});