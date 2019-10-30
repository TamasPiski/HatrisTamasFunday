var Vehicle = /** @class */ (function () {
    function Vehicle(description, vehicleType, engineType, odometer, seats, fuelType, year) {
        this.description = description;
        this.vehicleType = vehicleType;
        this.engineType = engineType;
        this.odometer = odometer;
        this.seats = seats;
        this.fuelType = fuelType;
        this.year = year;
    }
    Vehicle.prototype.greet = function () {
        return "Hello, " + this.description;
    };
    return Vehicle;
}());
var Ferrari = new Vehicle("Cool", "Car", "IC", 300, 2, "Petrol", 2010);
console.log(Ferrari.greet());
