class Car {
    #make = ""
    #model = ""
    #isRunning = false

    constructor(make, model) {
        this.#make = make
        this.#model = model
    }

    start() {
        this.#isRunning = true
    }
    

    stop() {
        this.#isRunning = false
    }

    getInfo() {
        return `${this.#make} ${this.#model} is now ${this.#isRunning}`
    }
}

const car1 = new Car("Toyota", "Camry")
car1.make = "Honda"
car1.model = "10"
car1.start()
console.log(car1.getInfo())
car1.stop()
console.log(car1.getInfo())