function DOG(name) {
	this.name = name;
}

DOG.prototype = {
	species: '犬科'
};

　　
var dogA = new DOG('大毛');
var dogB = new DOG('二毛');
　　
console.log(dogA.species); // 犬科
　　
console.log(dogB.species); // 犬科

DOG.prototype.species = '猫科';
console.log(dogA.species); // 猫科
console.log(dogB.species); // 猫科