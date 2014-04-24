function DOGG(dogname) {
	this.dogdogname = dogname;
	// species= '犬科'
}

DOGG.prototype = {
	species: '犬科'
};
　　
var dogA = new DOGG('大毛');
var dogB = new DOGG('二毛');
　　
console.log(dogA.species); // 犬科
　　
console.log(dogB.species); // 犬科

// DOG.prototype.species = '猫科';
// console.log(dogA.species); // 猫科
// console.log(dogB.species); // 猫科