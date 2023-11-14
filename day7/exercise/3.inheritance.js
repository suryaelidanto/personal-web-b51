class Car {
    make = ""
    model = ""

    constructor(make, model) {
        this.make = make
        this.model = model
    }
    
    getInfo() {
        return `The car is a ${this.make} ${this.model}`
    }
}

class ElectricCar extends Car {
    batteryCapacity = ""

    constructor(make, model, batteryCapacity) {
        super(make, model)
        this.batteryCapacity = batteryCapacity
    }

    getInfo() {
        return `${super.getInfo()}. It has a battery capacity of ${this.batteryCapacity} kWh.`
    }
}

// tetep bisa
// const car1 = new Car("Toyota", "Camry") 
// console.log(car1.getInfo())

const electricCar1 = new ElectricCar("Tesla", "Model S", 100)
console.log(electricCar1.getInfo())