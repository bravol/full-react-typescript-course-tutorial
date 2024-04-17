const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [["hello"], ["world"]];

// Help with inference when extracting values
const car = carMakers[0];
const mycar = carMakers.pop();

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
