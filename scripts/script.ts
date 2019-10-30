class Vehicle {
    description :string;
    vehicleType : string;
    engineType : string;
    odometer : number;
    seats : number;
    fuelType : string;
    year : number;

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

    basePrice() {
        return (this.seats*1000)/(this.odometer/100)-(2019-this.year)

    }
}

class Motor extends Vehicle {
    hasTouringBox : boolean;

    constructor(description: string, vehicleType: string, engineType : string, odometer: number, seats: number, fuelType: string, year: number, hasTouringBox: boolean) {

    super(description,vehicleType, engineType, odometer, seats, fuelType, year)
    this.hasTouringBox = hasTouringBox;
    }
    
    retailPrice() {
        let basePrice : number = super.basePrice()
        if (this.hasTouringBox) {
            return basePrice + 100;
        } 
        else {
            return basePrice-50;
        }
    }
    
}

class Truck extends Vehicle {
    axleNumber : number;

    constructor(description: string, vehicleType: string, engineType : string, odometer: number, seats: number, fuelType: string, year: number, axleNumber: number) {

    super(description,vehicleType, engineType, odometer, seats, fuelType, year)
    this.axleNumber = axleNumber;
    }
}

let Ferrari = new Vehicle("Cool", "Car", "IC", 300, 2, "Petrol", 2010);
let Suzuki = new Motor("cooler", "motor", "IC", 100, 1, "petrol", 2012, false);
let Man = new Truck("cooler", "truck", "IC", 100, 1, "diesel", 2012, 6);


console.log(Suzuki.retailPrice())
