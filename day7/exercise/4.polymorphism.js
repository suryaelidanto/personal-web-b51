// override -> menimpa

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    drive() {
        return `The vehicle is driving, ${this.make} ${this.model}`
    }
}

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model)
    }

    drive() {
        return `The car is driving. ${this.make} ${this.model}`
    }
}

class ElectricCar extends Car {

    drive() {
        return `The electirc car is driving silently. ${this.make} ${this.model}`
    }
}

// const vehicle = new Vehicle("Toyota", "Camry")
const car = new Car("Toyota", "10")
const electricCar = new ElectricCar("Tesla", "Model S")

// console.log(vehicle.drive())
console.log(car.drive())
console.log(electricCar.drive())