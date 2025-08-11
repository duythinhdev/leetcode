
class VehicleFactory {
    createVehicle(type) {
        if (type === 'car') {
            return new Car();
        } else if (type === 'bike') {
            return new Bike();
        } else if (type === 'bus') {
            return new Bus();
        }
        return null;
    }
}

class Car {
    constructor() {
        this.type = 'car';
    }
    drive() {
        console.log('Driving a car...');
    }
}

class Bike {
    constructor() {
        this.type = 'bike';
    }
    drive() {
        console.log('Riding a bike...');
    }
}

class Bus {
    constructor() {
        this.type = 'bus';
    }
    drive() {
        console.log('Driving a bus...');
    }
}

// Sử dụng Factory
const factory = new VehicleFactory();
const myCar = factory.createVehicle('car');
myCar.drive(); // Output: Driving a car...

const myBike = factory.createVehicle('bike');
myBike.drive(); // Output: Riding a bike...

