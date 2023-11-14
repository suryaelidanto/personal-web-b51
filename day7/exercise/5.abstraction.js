class Car {
    isRunning = false

    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() {
        this.isRunning = true
    }

    stop() {
        this.isRunning = false
    }

    getInfo() {
        return `${this.make} ${this.model} is now ${this.isRunning}`
    }
}

const car1 = new Car("Toyota", "Camry")
car1.start()
car1.getInfo()