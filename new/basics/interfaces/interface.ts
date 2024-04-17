//creates a new type, describing the property names and types of an object.
//it helps we get really strong code reuse in TS

interface Vehicle {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}
interface Reportable {
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

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of Sugar`;
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
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken?: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary()}`);
};
const printSummary = (item: Reportable): void => {
  console.log(`Summary: ${item.summary()}`);
};

// printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drink);
//the above code is a lot more reusable, and we can add more properties to it without having to change the function

//another example
