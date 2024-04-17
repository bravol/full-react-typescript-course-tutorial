//creates a new type, describing the property names and types of an object.
//it helps we get really strong code reuse in TS

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken?: ${vehicle.broken}`);
// };
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary()}`);
};

printVehicle(oldCivic);
//the above code is a lot more reusable, and we can add more properties to it without having to change the function

//another example
