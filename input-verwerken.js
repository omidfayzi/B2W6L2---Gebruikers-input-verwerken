var amount = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");

var arrayName = [];

for (var i = 0; i < amount; i++) {
	arrayName.push(prompt("Voer de namen die je in de array wilt stoppen"));
	document.querySelector(".arrayNames").innerHTML = 
	('De ingevoerde namen in de array zijn:' + '<br>' + arrayName.join(', '));
}

var arrayName = arrayName.reverse();

for (var i = 0; i < amount; i++) {	
	document.querySelector(".arrayNamesReversed").innerHTML = 
	('De ingevoerde namen in de array in omgekeerde volgorde zijn:' + '<br>' + arrayName.join(', '));
}
	







