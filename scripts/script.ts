class Vehicle {
    description;
    vehicleType;
    engineType;
    odometer;
    seats;
    fuelType;
    year;

    constructor(description: string, vehicleType: string, engineType : string, odometer: number, seats: number, fuelType: string, year: number) {
        this.description = description;
        this.vehicleType = vehicleType;
        this.engineType = engineType;
        this.odometer = odometer;
        this.seats = seats; 
        this.fuelType = fuelType;
        this.year = year;

    }
    greet() {
        return "Hello, " + this.description;
    }
}

let Ferrari = new Vehicle("Cool", "Car", "IC", 300, 2, "Petrol", 2010);

console.log(Ferrari.greet())