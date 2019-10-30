var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Vehicle.prototype.basePrice = function () {
        return (this.seats * 1000) / (this.odometer / 100) - (2019 - this.year);
    };
    return Vehicle;
}());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(description, vehicleType, engineType, odometer, seats, fuelType, year, hasTouringBox) {
        var _this = _super.call(this, description, vehicleType, engineType, odometer, seats, fuelType, year) || this;
        _this.hasTouringBox = hasTouringBox;
        return _this;
    }
    Motor.prototype.retailPrice = function () {
        var basePrice = _super.prototype.basePrice.call(this);
        if (this.hasTouringBox) {
            return basePrice + 100;
        }
        else {
            return basePrice - 50;
        }
    };
    return Motor;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(description, vehicleType, engineType, odometer, seats, fuelType, year, axleNumber) {
        var _this = _super.call(this, description, vehicleType, engineType, odometer, seats, fuelType, year) || this;
        _this.axleNumber = axleNumber;
        return _this;
    }
    return Truck;
}(Vehicle));
var Ferrari = new Vehicle("Cool", "Car", "IC", 300, 2, "Petrol", 2010);
var Suzuki = new Motor("cooler", "motor", "IC", 100, 1, "petrol", 2012, false);
var Man = new Truck("cooler", "truck", "IC", 100, 1, "diesel", 2012, 6);
console.log(Suzuki.retailPrice());
