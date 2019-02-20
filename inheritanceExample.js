function car(name, maxSpeed, quota, fuelConsumptionPerKm, price, isAvaliable) {
	this.name = name;
	this.maxSpeed = maxSpeed;
	this.quota = quota;
	this.fuelConsumptionPerKm = fuelConsumptionPerKm;
	this.getTotalFuelConsumptionPer100km = function() {
		return this.fuelConsumptionPerKm * 100;
	};
	this.price = price;
	this.isAvaliable = isAvaliable;
}

car.prototype.getTotalWheelNumber = function() {
	return 4;
};

function audi(name, maxSpeed, quota, fuelConsumptionPerKm, price, isAvaliable) {
	car.call(this, name, maxSpeed, quota, fuelConsumptionPerKm, price, isAvaliable);
}

audi.prototype = Object.create(car.prototype);

audi.prototype.getSpecialPropForAudi = function() {
	console.log('LCD Screen,heated seats,ultra safety,ultra expensive');
};

function devrim(name, maxSpeed, quota, fuelConsumptionPerKm, price, isAvaliable) {
	car.call(this, name, maxSpeed, quota, fuelConsumptionPerKm, price, isAvaliable);
}
devrim.prototype = Object.create(car.prototype);

devrim.prototype.getSpecialPropForDevrim = function() {
	console.log('It is made by Turkish engineers.You can visit these cars in Eskişehir (it is a city in Turkey)');
};

let foreignerCar = new audi('audi', 260, 5, 9.6, '300.000$', true);
let ourCar = new devrim('devrim', 200, 5, 7.6, 'priceless', false);

console.log('ForeignerCar : ' + foreignerCar);
console.log('Our Car : ' + ourCar);
