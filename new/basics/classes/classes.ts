// a class is a blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'
class Vehicle {
  //   public drive(): void {
  //     console.log("Hello hello");
  //   }
  //   color: string;
  protected honk(): void {
    console.log("chilling");
  }
  constructor(public color: string) {}
}

//basic inheritance
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

//inheritance modifiers

const car = new Car(20, "black");
// car.drive();
car.startDrivingProcess();

const vehicle = new Vehicle("blue"); // instance
// vehicle.honk();
console.log(vehicle.color);
