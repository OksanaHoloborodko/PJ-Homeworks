'use strict';

class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(brand, year, fuel, mileage) {
        super(brand, year);
        this.fuel = fuel;
        this.mileage = mileage;
    }

    turnOnHeadlights() {
        console.log(`Turn the headlights on ${this.brand}`);
    }
}

class Bicycle extends Vehicle {
    constructor(brand, year, type, numberOfSpeeds) {
        super(brand, year);
        this.type = type;
        this.numberOfSpeeds = numberOfSpeeds;
    }

    spinPedals() {
        console.log(`Spin the pedals to move and shift to ${this.numberOfSpeeds} speed!`);
    }
}

const car1 = new Car('Mazda', 2021, 'petrol', 5000);
const bicycle1 = new Bicycle('Kellys', 2022, 'highway', 22);

car1.turnOnHeadlights();
bicycle1.spinPedals();
